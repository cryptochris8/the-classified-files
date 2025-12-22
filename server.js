// Simple Node.js server for Stripe integration
// Run with: node server.js

require('dotenv').config();

const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Validate required environment variables
if (!process.env.STRIPE_SECRET_KEY) {
    console.error('❌ STRIPE_SECRET_KEY is required. Please add it to your .env file.');
    process.exit(1);
}

console.log('✅ Stripe initialized with key:', process.env.STRIPE_SECRET_KEY.substring(0, 12) + '...');

// CORS configuration for frontend
const cors = require('cors');
const corsOptions = {
    origin: [
        'https://cryptochris8.github.io',
        /https:\/\/.*\.netlify\.app$/,  // Any Netlify subdomain
        /https:\/\/.*\.netlify\.com$/,  // Any Netlify subdomain
        'http://localhost:8080',
        'http://localhost:3000',
        'http://127.0.0.1:8080'
        // Add your custom domain here when you get one:
        // 'https://declassified-files.com',
        // 'https://www.declassified-files.com'
    ],
    credentials: true
};

// Webhook endpoint MUST be defined before body parsing middleware
app.post('/webhook', express.raw({type: 'application/json'}), (req, res) => {
    const sig = req.headers['stripe-signature'];
    const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET || 'whsec_your_webhook_secret_here';

    let event;

    try {
        event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    } catch (err) {
        console.log('Webhook signature verification failed.', err.message);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Handle the event
    switch (event.type) {
        case 'checkout.session.completed':
            const session = event.data.object;
            console.log('Payment successful for session:', session.id);
            // You can add additional logic here, like sending confirmation emails
            break;
        default:
            console.log(`Unhandled event type ${event.type}`);
    }

    res.json({received: true});
});

// Middleware (AFTER webhook endpoint)
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.static('.')); // Serve static files from current directory

// Create checkout session endpoint
app.post('/create-checkout-session', async (req, res) => {
    try {
        const { priceId, successUrl, cancelUrl } = req.body;

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price: priceId,
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: successUrl + '?session_id={CHECKOUT_SESSION_ID}',
            cancel_url: cancelUrl,
            metadata: {
                product: 'classified-files-game'
            }
        });

        res.json({ id: session.id });
    } catch (error) {
        console.error('Error creating checkout session:', error);
        res.status(500).json({ error: error.message });
    }
});

// Verify payment endpoint
app.get('/verify-payment/:sessionId', async (req, res) => {
    try {
        const { sessionId } = req.params;
        const session = await stripe.checkout.sessions.retrieve(sessionId);

        if (session.payment_status === 'paid') {
            res.json({
                success: true,
                customerEmail: session.customer_details.email,
                paymentStatus: session.payment_status
            });
        } else {
            res.json({
                success: false,
                paymentStatus: session.payment_status
            });
        }
    } catch (error) {
        console.error('Error verifying payment:', error);
        res.status(500).json({ error: error.message });
    }
});

// Serve the main game page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Payment success page
app.get('/payment-success.html', (req, res) => {
    const sessionId = req.query.session_id;
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Payment Successful - Declassified</title>
            <link rel="stylesheet" href="styles.css">
            <link rel="stylesheet" href="payment-styles.css">
        </head>
        <body>
            <div class="unlock-message">
                <div class="unlock-notification">
                    <h3>🎉 Payment Successful!</h3>
                    <p>Thank you for purchasing the full game. You now have access to all case files.</p>
                    <button onclick="window.location.href='/'">Start Playing</button>
                </div>
            </div>
            <script>
                // Store unlock status
                localStorage.setItem('gameUnlocked', 'true');
                localStorage.setItem('purchaseData', JSON.stringify({
                    sessionId: '${sessionId}',
                    timestamp: new Date().toISOString()
                }));
            </script>
        </body>
        </html>
    `);
});

// Payment cancel page
app.get('/payment-cancel.html', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Payment Cancelled - Declassified</title>
            <link rel="stylesheet" href="styles.css">
            <link rel="stylesheet" href="payment-styles.css">
        </head>
        <body>
            <div class="purchase-prompt">
                <div class="purchase-content">
                    <h3>Payment Cancelled</h3>
                    <p>No worries! You can still enjoy the free case files.</p>
                    <button onclick="window.location.href='/'">Return to Game</button>
                </div>
            </div>
        </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log('Make sure to:');
    console.log('1. Replace Stripe API keys with your actual keys');
    console.log('2. Create products/prices in your Stripe dashboard');
    console.log('3. Update the price IDs in the frontend code');
});

module.exports = app;
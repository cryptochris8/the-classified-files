// Secure Node.js server for Stripe integration with enhanced security
// Run with: node server-secure.js

require('dotenv').config();

const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const path = require('path');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const { body, param, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 3000;

// JWT Secret for purchase verification
const JWT_SECRET = process.env.JWT_SECRET || 'CHANGE_THIS_IN_PRODUCTION_' + Math.random().toString(36);

if (!process.env.JWT_SECRET) {
    console.warn('⚠️  WARNING: JWT_SECRET not set in .env file. Using random secret (not recommended for production)');
}

// Validate required environment variables
if (!process.env.STRIPE_SECRET_KEY) {
    console.error('❌ STRIPE_SECRET_KEY is required. Please add it to your .env file.');
    process.exit(1);
}

console.log('✅ Stripe initialized with key:', process.env.STRIPE_SECRET_KEY.substring(0, 12) + '...');

// ========================================
// SECURITY MIDDLEWARE
// ========================================

// Helmet.js - Security headers
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", "'unsafe-inline'", "https://js.stripe.com", "https://media.ethicalads.io", "https://cdn.jsdelivr.net"],
            styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
            fontSrc: ["'self'", "https://fonts.gstatic.com"],
            imgSrc: ["'self'", "data:", "https:", "blob:"],
            connectSrc: ["'self'", "https://the-classified-files-production.up.railway.app", "https://api.stripe.com"],
            frameSrc: ["https://js.stripe.com", "https://checkout.stripe.com"],
        },
    },
    hsts: {
        maxAge: 31536000,
        includeSubDomains: true,
        preload: true
    }
}));

// Rate limiting for all endpoints
const generalLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // 100 requests per window
    message: 'Too many requests from this IP, please try again later.',
    standardHeaders: true,
    legacyHeaders: false,
});

// Stricter rate limiting for payment endpoints
const paymentLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // Only 5 payment attempts per 15 minutes
    message: 'Too many payment requests, please try again later.',
    skipSuccessfulRequests: true, // Don't count successful requests
});

// Rate limiting for verification endpoints
const verificationLimiter = rateLimit({
    windowMs: 5 * 60 * 1000, // 5 minutes
    max: 20, // 20 verification requests per 5 minutes
    message: 'Too many verification attempts, please try again later.',
});

app.use(generalLimiter);

// CORS configuration for frontend
const cors = require('cors');
const corsOptions = {
    origin: [
        'https://cryptochris8.github.io',
        /https:\/\/.*\.netlify\.app$/,  // Any Netlify subdomain
        /https:\/\/.*\.netlify\.com$/,  // Any Netlify subdomain
        'http://localhost:8080',
        'http://localhost:3000',
        'http://localhost:5173',  // Vite dev server
        'http://127.0.0.1:8080',
        'http://127.0.0.1:5173'
        // Add your custom domain here when you get one:
        // 'https://declassified-files.com',
        // 'https://www.declassified-files.com'
    ],
    credentials: true,
    maxAge: 86400 // 24 hours
};

// ========================================
// WEBHOOK ENDPOINT (MUST BE BEFORE BODY PARSING)
// ========================================

app.post('/webhook', express.raw({type: 'application/json'}), (req, res) => {
    const sig = req.headers['stripe-signature'];
    const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

    if (!endpointSecret) {
        console.error('❌ STRIPE_WEBHOOK_SECRET not configured');
        return res.status(500).send('Webhook not configured');
    }

    let event;

    try {
        event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    } catch (err) {
        console.log('⚠️  Webhook signature verification failed:', err.message);
        return res.status(400).send('Webhook signature verification failed');
    }

    // Handle the event
    switch (event.type) {
        case 'checkout.session.completed':
            const session = event.data.object;
            console.log('✅ Payment successful for session:', session.id);

            // Generate JWT token for this purchase
            const purchaseToken = generatePurchaseToken(session);
            console.log('🔑 Generated purchase token for session:', session.id);

            // In a production app, you'd store this in a database
            // For now, we'll return it in the verification endpoint

            break;
        default:
            console.log(`ℹ️  Unhandled event type: ${event.type}`);
    }

    res.json({received: true});
});

// ========================================
// STANDARD MIDDLEWARE (AFTER WEBHOOK)
// ========================================

app.use(cors(corsOptions));
app.use(express.json({ limit: '10kb' })); // Limit body size
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(express.static('.', {
    maxAge: '1d',
    etag: true
}));

// ========================================
// HELPER FUNCTIONS
// ========================================

/**
 * Generate a JWT token for a successful purchase
 */
function generatePurchaseToken(session) {
    const payload = {
        sessionId: session.id,
        customerId: session.customer,
        paymentStatus: session.payment_status,
        amount: session.amount_total,
        currency: session.currency,
        timestamp: new Date().toISOString(),
        metadata: session.metadata
    };

    return jwt.sign(payload, JWT_SECRET, {
        expiresIn: '365d' // Token valid for 1 year
    });
}

/**
 * Verify a purchase token
 */
function verifyPurchaseToken(token) {
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        return { valid: true, data: decoded };
    } catch (error) {
        return { valid: false, error: error.message };
    }
}

/**
 * Validation error handler
 */
function handleValidationErrors(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            error: 'Validation failed',
            details: errors.array()
        });
    }
    next();
}

// ========================================
// API ENDPOINTS
// ========================================

/**
 * Create Stripe checkout session
 * Protected with validation and rate limiting
 */
app.post('/create-checkout-session',
    paymentLimiter,
    [
        body('priceId')
            .matches(/^price_[a-zA-Z0-9]+$/)
            .withMessage('Invalid price ID format'),
        body('successUrl')
            .isURL({ protocols: ['http', 'https'] })
            .withMessage('Invalid success URL'),
        body('cancelUrl')
            .isURL({ protocols: ['http', 'https'] })
            .withMessage('Invalid cancel URL'),
    ],
    handleValidationErrors,
    async (req, res) => {
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
                    product: 'classified-files-game',
                    timestamp: new Date().toISOString()
                }
            });

            console.log('✅ Checkout session created:', session.id);
            res.json({ id: session.id });

        } catch (error) {
            console.error('❌ Error creating checkout session:', error.message);
            res.status(500).json({
                error: 'Failed to create checkout session'
                // Don't expose internal error details to client
            });
        }
    }
);

/**
 * Verify payment and generate JWT token
 * Protected with validation and rate limiting
 */
app.get('/verify-payment/:sessionId',
    verificationLimiter,
    [
        param('sessionId')
            .matches(/^cs_[a-zA-Z0-9]+$/)
            .withMessage('Invalid session ID format'),
    ],
    handleValidationErrors,
    async (req, res) => {
        try {
            const { sessionId } = req.params;
            const session = await stripe.checkout.sessions.retrieve(sessionId);

            if (session.payment_status === 'paid') {
                // Generate JWT token for this verified purchase
                const purchaseToken = generatePurchaseToken(session);

                console.log('✅ Payment verified for session:', sessionId);

                res.json({
                    success: true,
                    paymentStatus: session.payment_status,
                    customerEmail: session.customer_details?.email,
                    purchaseToken: purchaseToken, // Client stores this instead of localStorage
                    expiresAt: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString()
                });
            } else {
                res.json({
                    success: false,
                    paymentStatus: session.payment_status
                });
            }
        } catch (error) {
            console.error('❌ Error verifying payment:', error.message);
            res.status(500).json({
                error: 'Failed to verify payment'
            });
        }
    }
);

/**
 * Validate purchase token (called on game load)
 * This prevents localStorage tampering
 */
app.post('/validate-purchase',
    verificationLimiter,
    [
        body('token')
            .isString()
            .notEmpty()
            .withMessage('Token is required'),
        body('caseKey')
            .optional()
            .isString()
            .withMessage('Invalid case key'),
    ],
    handleValidationErrors,
    async (req, res) => {
        try {
            const { token, caseKey } = req.body;

            // Verify JWT token
            const verification = verifyPurchaseToken(token);

            if (!verification.valid) {
                return res.status(401).json({
                    valid: false,
                    error: 'Invalid or expired token'
                });
            }

            // Optionally verify with Stripe that session is still valid
            const session = await stripe.checkout.sessions.retrieve(verification.data.sessionId);

            if (session.payment_status !== 'paid') {
                return res.status(401).json({
                    valid: false,
                    error: 'Payment not completed'
                });
            }

            console.log('✅ Purchase token validated for session:', verification.data.sessionId);

            res.json({
                valid: true,
                sessionId: verification.data.sessionId,
                timestamp: verification.data.timestamp,
                // Return what cases this purchase unlocks
                // For now, unlock all - you can customize this per product
                unlockedCases: ['all']
            });

        } catch (error) {
            console.error('❌ Error validating purchase:', error.message);
            res.status(500).json({
                valid: false,
                error: 'Validation failed'
            });
        }
    }
);

// ========================================
// STATIC PAGE ROUTES
// ========================================

// Serve the main game page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Payment success page (now generates JWT token)
app.get('/payment-success.html', async (req, res) => {
    const sessionId = req.query.session_id;

    if (!sessionId) {
        return res.redirect('/');
    }

    try {
        // Verify the session and generate token
        const session = await stripe.checkout.sessions.retrieve(sessionId);

        if (session.payment_status === 'paid') {
            const purchaseToken = generatePurchaseToken(session);

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
                            <p>Thank you for your purchase. You now have access to premium case files.</p>
                            <button onclick="window.location.href='/'">Start Playing</button>
                        </div>
                    </div>
                    <script>
                        // Store verified purchase token (replaces simple localStorage hack)
                        localStorage.setItem('purchaseToken', '${purchaseToken}');
                        localStorage.setItem('purchaseData', JSON.stringify({
                            sessionId: '${sessionId}',
                            timestamp: new Date().toISOString(),
                            verified: true
                        }));

                        // Remove old insecure data
                        localStorage.removeItem('gameUnlocked');
                    </script>
                </body>
                </html>
            `);
        } else {
            res.redirect('/payment-cancel.html');
        }
    } catch (error) {
        console.error('Error on success page:', error);
        res.redirect('/');
    }
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

// ========================================
// HEALTH CHECK
// ========================================

app.get('/health', (req, res) => {
    res.json({
        status: 'healthy',
        timestamp: new Date().toISOString(),
        stripe: process.env.STRIPE_SECRET_KEY ? 'configured' : 'missing',
        jwt: process.env.JWT_SECRET ? 'configured' : 'using_random'
    });
});

// ========================================
// ERROR HANDLING
// ========================================

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        error: 'Not found',
        path: req.path
    });
});

// Global error handler
app.use((err, req, res, next) => {
    console.error('Server error:', err);
    res.status(500).json({
        error: 'Internal server error'
    });
});

// ========================================
// START SERVER
// ========================================

app.listen(PORT, () => {
    console.log(`\n${'='.repeat(50)}`);
    console.log(`🚀 Secure server running on http://localhost:${PORT}`);
    console.log(`${'='.repeat(50)}\n`);
    console.log('✅ Security features enabled:');
    console.log('   - Helmet.js security headers');
    console.log('   - Rate limiting (100/15min general, 5/15min payments)');
    console.log('   - Input validation on all endpoints');
    console.log('   - JWT-based purchase verification');
    console.log('   - CORS protection');
    console.log('\n⚠️  Remember to:');
    console.log('   1. Set JWT_SECRET in .env file');
    console.log('   2. Set STRIPE_WEBHOOK_SECRET in .env file');
    console.log('   3. Update purchase verification in frontend');
    console.log(`\n${'='.repeat(50)}\n`);
});

module.exports = app;

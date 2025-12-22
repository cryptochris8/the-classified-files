// Stripe webhook handler for payment confirmations
// This verifies payments and could update a database

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }
    
    const sig = req.headers['stripe-signature'];
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
    
    let event;
    
    try {
        // Verify webhook signature
        event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
    } catch (err) {
        console.error('Webhook signature verification failed:', err.message);
        return res.status(400).json({ error: 'Webhook signature verification failed' });
    }
    
    // Handle the event
    switch (event.type) {
        case 'checkout.session.completed':
            const session = event.data.object;
            
            // Payment was successful
            console.log('Payment successful for session:', session.id);
            console.log('Case purchased:', session.metadata.caseKey);
            
            // Here you could:
            // 1. Update a database with the purchase
            // 2. Send confirmation email
            // 3. Grant access to the user
            
            // For now, we're using localStorage on frontend
            // but you could implement user accounts here
            
            break;
            
        case 'payment_intent.payment_failed':
            const paymentIntent = event.data.object;
            console.log('Payment failed:', paymentIntent.id);
            break;
            
        default:
            console.log(`Unhandled event type ${event.type}`);
    }
    
    res.status(200).json({ received: true });
}
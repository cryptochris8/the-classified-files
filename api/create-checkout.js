// Serverless function for Vercel/Netlify to create Stripe checkout sessions
// This file handles the backend payment processing

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Product price mapping
const PRICE_IDS = {
    epstein: process.env.STRIPE_PRICE_EPSTEIN,
    jfk: process.env.STRIPE_PRICE_JFK,
    uap: process.env.STRIPE_PRICE_UAP,
    september11: process.env.STRIPE_PRICE_SEPTEMBER11,
    hunterlaptop: process.env.STRIPE_PRICE_HUNTERLAPTOP,
    watergate: process.env.STRIPE_PRICE_WATERGATE,
    'pentagon-papers': process.env.STRIPE_PRICE_PENTAGON_PAPERS,
    mkultra: process.env.STRIPE_PRICE_MKULTRA,
    'panama-papers': process.env.STRIPE_PRICE_PANAMA_PAPERS,
    'iran-contra': process.env.STRIPE_PRICE_IRAN_CONTRA,
    cointelpro: process.env.STRIPE_PRICE_COINTELPRO,
    snowden: process.env.STRIPE_PRICE_SNOWDEN,
    tuskegee: process.env.STRIPE_PRICE_TUSKEGEE,
    paperclip: process.env.STRIPE_PRICE_PAPERCLIP,
    diddy: process.env.STRIPE_PRICE_DIDDY
};

export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }
    
    try {
        const { priceId, caseKey, successUrl, cancelUrl } = req.body;
        
        // Validate required fields
        if (!priceId || !caseKey || !successUrl || !cancelUrl) {
            return res.status(400).json({ error: 'Missing required fields' });
        }
        
        // Validate case key
        if (!PRICE_IDS[caseKey]) {
            return res.status(400).json({ error: 'Invalid case key' });
        }
        
        // Create Stripe checkout session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price: PRICE_IDS[caseKey],
                    quantity: 1,
                },
            ],
            mode: 'payment', // One-time payment
            success_url: successUrl,
            cancel_url: cancelUrl,
            metadata: {
                caseKey: caseKey,
                productType: 'case_access'
            },
            billing_address_collection: 'required',
        });
        
        return res.status(200).json({
            sessionId: session.id
        });
        
    } catch (error) {
        console.error('Stripe session creation error:', error);
        return res.status(500).json({ 
            error: 'Failed to create checkout session',
            details: error.message 
        });
    }
}
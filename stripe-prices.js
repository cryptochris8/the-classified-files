// Stripe Price IDs Configuration
// Update these with your actual price IDs from Stripe Dashboard

const StripePrices = {
    // Premium Cases - $4.99 each
    // Replace these price IDs with your actual ones from Stripe Dashboard
    'epstein': 'price_your_epstein_price_id_here',
    'jfk': 'price_your_jfk_price_id_here', 
    'september11': 'price_your_september11_price_id_here',
    'watergate': 'price_your_watergate_price_id_here',
    'pentagon-papers': 'price_your_pentagon_papers_price_id_here',
    'mkultra': 'price_your_mkultra_price_id_here',
    'panama-papers': 'price_your_panama_papers_price_id_here',
    'iran-contra': 'price_your_iran_contra_price_id_here',
    'cointelpro': 'price_your_cointelpro_price_id_here',
    'snowden': 'price_your_snowden_price_id_here',
    'tuskegee': 'price_your_tuskegee_price_id_here',
    'paperclip': 'price_your_paperclip_price_id_here',
    'diddy-case': 'price_your_diddy_case_price_id_here',
    
    // Bundle deals (optional)
    'all-cases': 'price_your_all_cases_bundle_price_id_here' // e.g., $39.99 for all cases
};

// Stripe Publishable Key (safe to include in frontend)
const STRIPE_PUBLISHABLE_KEY = 'pk_test_your_publishable_key_here';

// Make available globally
window.StripePrices = StripePrices;
window.STRIPE_PUBLISHABLE_KEY = STRIPE_PUBLISHABLE_KEY;
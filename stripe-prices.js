// Stripe Price IDs Configuration
// Update these with your actual price IDs from Stripe Dashboard

const StripePrices = {
    // Premium Cases - $4.99 each - ALL CONFIGURED ✅
    'epstein': 'price_1Si6m0PmM4NpiDNLMSLjKv2g',
    'jfk': 'price_1Si6okPmM4NpiDNLIGyIv6CW',
    'september11': 'price_1Si6rkPmM4NpiDNLuFyr9nuw',
    'watergate': 'price_1Si6zBPmM4NpiDNL2xT7wsRO',
    'pentagon-papers': 'price_1Si74mPmM4NpiDNLWQyr31Br',
    'mkultra': 'price_1Si7C1PmM4NpiDNLlx7e7EaY',
    'panama-papers': 'price_1Si7HwPmM4NpiDNLomHwUPrq',
    'iran-contra': 'price_1Si7W0PmM4NpiDNLIdY3RTTU',
    'cointelpro': 'price_1Si7bJPmM4NpiDNLQNhLYht5',
    'snowden': 'price_1Si7coPmM4NpiDNLVCwptqiF',
    'tuskegee': 'price_1Si7eIPmM4NpiDNLGcb5LNYo',
    'paperclip': 'price_1Si7fdPmM4NpiDNLoSdt541g',
    'diddy-case': 'price_1SA0B6PmM4NpiDNLKs5qANcY',
    'charlie-kirk': 'price_1SmF9XPmM4NpiDNLlzPfdnja',

    // Bundle deals (optional - configure later if needed)
    'all-cases': 'price_your_all_cases_bundle_price_id_here' // e.g., $39.99 for all cases
};

// Stripe Publishable Key (safe to include in frontend)
const STRIPE_PUBLISHABLE_KEY = 'pk_live_51RsoBfPmM4NpiDNLUle3BIuWMyxeRthSGHync5nWsh0EL6wn7pUVhLjuvgMkxmg7i89OQ1H6W7RH9vr67ZouARVM00QATgHCQk';

// Make available globally
window.StripePrices = StripePrices;
window.STRIPE_PUBLISHABLE_KEY = STRIPE_PUBLISHABLE_KEY;
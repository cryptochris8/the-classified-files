# Stripe Payment Setup Instructions

## Quick Start Checklist

### 1. ✅ Get Stripe Account & Keys
1. Create account at [stripe.com](https://stripe.com)
2. Go to Dashboard → Developers → API keys
3. Copy your **Publishable Key** (pk_test_...) and **Secret Key** (sk_test_...)

### 2. ✅ Update Environment Variables
Edit your `.env` file with your actual keys:
```
STRIPE_SECRET_KEY=sk_test_your_actual_secret_key_here
STRIPE_PUBLISHABLE_KEY=pk_test_your_actual_publishable_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here
```

### 3. ✅ Create Products in Stripe Dashboard
Go to Dashboard → Products and create:
- **Epstein Files Investigation** - $4.99
- **JFK Assassination Files** - $4.99  
- **September 11 Commission** - $4.99
- **Watergate Scandal** - $4.99
- **Pentagon Papers** - $4.99
- **MKUltra Program** - $4.99
- **Panama Papers** - $4.99
- **Iran-Contra Affair** - $4.99
- **COINTELPRO Operations** - $4.99
- **Snowden Revelations** - $4.99
- **Tuskegee Experiment** - $4.99
- **Operation Paperclip** - $4.99
- **Diddy Case** - $4.99

### 4. ✅ Update Price IDs
After creating products, copy the **Price IDs** (price_1234...) and update `stripe-prices.js`:

```javascript
const StripePrices = {
    'epstein': 'price_1234567890abcdef',        // ← Replace with your actual price IDs
    'jfk': 'price_1234567890abcdef',
    // ... etc
};

const STRIPE_PUBLISHABLE_KEY = 'pk_test_your_actual_publishable_key_here'; // ← Replace
```

### 5. ✅ Test the Setup
1. Start the server: `npm start`
2. Open browser to `http://localhost:3000`
3. Try to purchase a premium case
4. Use test card: `4242 4242 4242 4242`

### 6. ⏳ Set Up Webhooks (Production)
1. In Stripe Dashboard → Developers → Webhooks
2. Add endpoint: `https://your-domain.com/webhook`
3. Select events: `checkout.session.completed`
4. Copy **Webhook Secret** to your `.env` file

## Test Card Numbers
- **Success**: `4242 4242 4242 4242`
- **Declined**: `4000 0000 0000 0002`
- **3D Secure**: `4000 0000 0000 3220`

Use any future expiry date (e.g., 12/25) and any 3-digit CVC.

## Troubleshooting

### ❌ "No price ID found for case"
- Make sure you've updated `stripe-prices.js` with your actual price IDs
- Verify the case key matches exactly (e.g., 'epstein', 'jfk')

### ❌ "Stripe publishable key is required"
- Update `STRIPE_PUBLISHABLE_KEY` in `stripe-prices.js`
- Check for typos in the key (should start with 'pk_test_' or 'pk_live_')

### ❌ Server won't start
- Verify `.env` file has correct `STRIPE_SECRET_KEY`
- Key should start with 'sk_test_' or 'sk_live_'
- Make sure `.env` is in the project root directory

### ❌ Payment window doesn't open
- Check browser console for JavaScript errors
- Verify Stripe.js is loaded (check Network tab)
- Make sure price ID exists in your Stripe dashboard

## Production Deployment

### Environment Variables
Set these on your production server (Railway, Heroku, etc.):
```
STRIPE_SECRET_KEY=sk_live_your_live_secret_key
STRIPE_PUBLISHABLE_KEY=pk_live_your_live_publishable_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret
NODE_ENV=production
```

### Update URLs
In `payment-config.js`, update the production server URL:
```javascript
: 'https://your-actual-server-url.railway.app'
```

### Switch to Live Mode
1. In Stripe Dashboard, toggle from "Test mode" to "Live mode"
2. Create live products/prices (same as test)
3. Update `stripe-prices.js` with live price IDs
4. Update environment variables with live keys

## Security Notes
- ✅ Never commit `.env` file to Git
- ✅ Use HTTPS in production
- ✅ Validate webhooks with signatures
- ✅ Keep secret keys secure

## Need Help?
1. Check Stripe Dashboard logs for payment errors
2. Check browser console for JavaScript errors  
3. Verify all keys are correct and from the same Stripe account
4. Test with Stripe's test cards first

dxdy-tbcv-nxsv-dlcg-qyyv
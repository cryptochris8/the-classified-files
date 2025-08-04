# Payment System Setup Guide

## Overview
This guide will help you set up Stripe payments for "The Classified Files" game.

## Prerequisites
1. Stripe account (sign up at stripe.com)
2. Node.js installed
3. Your Stripe API keys

## Step 1: Get Your Stripe API Keys

1. Log in to your Stripe Dashboard
2. Go to **Developers → API keys**
3. Copy your **Publishable key** (starts with `pk_test_` for test mode)
4. Copy your **Secret key** (starts with `sk_test_` for test mode)

⚠️ **Never share your secret key publicly or commit it to version control!**

## Step 2: Update Configuration Files

### Update payment-system.js
Replace the placeholder in `payment-system.js`:
```javascript
const STRIPE_PUBLISHABLE_KEY = 'pk_test_your_actual_publishable_key_here';
```

### Update server.js
Replace the placeholder in `server.js`:
```javascript
const stripe = require('stripe')('sk_test_your_actual_secret_key_here');
```

## Step 3: Create Products in Stripe

1. Go to **Products** in your Stripe Dashboard
2. Click **Add product**
3. Create a product with these details:
   - **Name**: "The Classified Files - Full Game"
   - **Description**: "Unlock all 14+ classified case files with branching storylines"
   - **Price**: $14.99 (or your preferred price)
   - **Recurring**: One-time payment

4. Copy the **Price ID** (starts with `price_`)
5. Update the price ID in `payment-system.js`:
```javascript
data-price-id="price_your_actual_price_id_here"
```

## Step 4: Install Dependencies

```bash
npm install
```

## Step 5: Test the Setup

### Start the Server
```bash
npm start
```

The server will run on `http://localhost:3000`

### Test Payment Flow
1. Open the game in your browser
2. Try to access a premium case file
3. Click the purchase button
4. Use Stripe's test card numbers:
   - **Success**: 4242 4242 4242 4242
   - **Decline**: 4000 0000 0000 0002
   - Any future expiry date and CVC

## Step 6: Set Up Webhooks (Recommended)

1. In Stripe Dashboard, go to **Developers → Webhooks**
2. Click **Add endpoint**
3. Set endpoint URL to: `https://yourdomain.com/webhook`
4. Select events: `checkout.session.completed`
5. Copy the **Webhook signing secret**
6. Update in `server.js`:
```javascript
const endpointSecret = 'whsec_your_webhook_secret_here';
```

## Step 7: Go Live

### Switch to Live Mode
1. In Stripe Dashboard, toggle to **Live mode**
2. Get your live API keys
3. Update both files with live keys (remove `_test_` from key names)
4. Create live products and update price IDs

### Deployment
- Deploy `server.js` to your hosting provider
- Ensure your domain is HTTPS (required for payments)
- Update success/cancel URLs to your live domain

## Pricing Recommendations

- **Full Game**: $14.99
- **Individual Cases**: $2.99 each
- **Season Pass**: $24.99 (all current + future cases)

## Security Notes

1. Never expose secret keys in frontend code
2. Always use HTTPS in production
3. Validate payments server-side
4. Store minimal customer data
5. Use environment variables for API keys

## Free vs Premium Content

Currently configured as:
- **Free**: Epstein Files, JFK Files
- **Premium**: All other cases

Update in `payment-system.js` to change this configuration:
```javascript
const freeContent = {
    cases: ['epstein-files', 'jfk-files'], // Add more free cases here
    scenes: ['intro', 'case-selection', 'demo']
};
```

## Support

- Stripe Documentation: https://stripe.com/docs
- Stripe Test Cards: https://stripe.com/docs/testing#cards
- Common Issues: Check browser console for error messages
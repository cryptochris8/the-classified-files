# Stripe Setup Guide - Complete Configuration

## Step 1: Create Products in Stripe Dashboard

You need to create 13 products in your Stripe Dashboard. Here's the complete list:

### Products to Create:

1. **Epstein Investigation**
   - Price: $4.99 USD
   - Type: One-time payment
   - Description: "Access the classified Epstein investigation files"

2. **JFK Assassination Files**
   - Price: $4.99 USD
   - Type: One-time payment
   - Description: "Declassified documents from the JFK assassination investigation"

3. **9/11 Commission Investigation**
   - Price: $4.99 USD
   - Type: One-time payment
   - Description: "Classified 9/11 investigation documents and testimonies"

4. **Watergate Files**
   - Price: $4.99 USD
   - Type: One-time payment
   - Description: "Complete Watergate scandal investigation documents"

5. **Pentagon Papers**
   - Price: $4.99 USD
   - Type: One-time payment
   - Description: "The classified Pentagon Papers leak investigation"

6. **MKUltra Files**
   - Price: $4.99 USD
   - Type: One-time payment
   - Description: "Declassified CIA MKUltra mind control experiments"

7. **Panama Papers**
   - Price: $4.99 USD
   - Type: One-time payment
   - Description: "International financial corruption investigation"

8. **Iran-Contra Affair**
   - Price: $4.99 USD
   - Type: One-time payment
   - Description: "Reagan administration scandal investigation files"

9. **COINTELPRO Files**
   - Price: $4.99 USD
   - Type: One-time payment
   - Description: "FBI surveillance and infiltration program documents"

10. **Snowden Revelations**
    - Price: $4.99 USD
    - Type: One-time payment
    - Description: "NSA surveillance program leaked documents"

11. **Tuskegee Experiment**
    - Price: $4.99 USD
    - Type: One-time payment
    - Description: "Unethical medical experiment investigation files"

12. **Operation Paperclip**
    - Price: $4.99 USD
    - Type: One-time payment
    - Description: "Nazi scientist recruitment program documents"

13. **All Cases Bundle** (OPTIONAL)
    - Price: $39.99 USD (save $24.88)
    - Type: One-time payment
    - Description: "Access all 13 premium classified investigations"

---

## Step 2: How to Create Each Product

### In Stripe Dashboard:

1. Go to https://dashboard.stripe.com/products
2. Click **"+ Add product"**
3. Fill in:
   - **Name**: (e.g., "Epstein Investigation")
   - **Description**: (copy from list above)
   - **Pricing**: $4.99 USD
   - **Billing period**: One time
4. Click **"Save product"**
5. **COPY THE PRICE ID** (starts with `price_...`)

---

## Step 3: Update stripe-prices.js

Once you have all price IDs, update the file at:
`D:\the-classified-files\stripe-prices.js`

Replace the placeholder values with your actual price IDs:

```javascript
const StripePrices = {
    'epstein': 'price_1ABC123...',        // Replace with your actual price ID
    'jfk': 'price_1DEF456...',            // Replace with your actual price ID
    'september11': 'price_1GHI789...',    // Replace with your actual price ID
    'watergate': 'price_1JKL012...',      // Replace with your actual price ID
    'pentagon-papers': 'price_1MNO345...', // Replace with your actual price ID
    'mkultra': 'price_1PQR678...',        // Replace with your actual price ID
    'panama-papers': 'price_1STU901...',  // Replace with your actual price ID
    'iran-contra': 'price_1VWX234...',    // Replace with your actual price ID
    'cointelpro': 'price_1YZA567...',     // Replace with your actual price ID
    'snowden': 'price_1BCD890...',        // Replace with your actual price ID
    'tuskegee': 'price_1EFG123...',       // Replace with your actual price ID
    'paperclip': 'price_1HIJ456...',      // Replace with your actual price ID
    'diddy-case': 'price_1SA0B6PmM4NpiDNLKs5qANcY', // Already configured ✅

    // Optional bundle
    'all-cases': 'price_1KLM789...'       // Optional: bundle pricing
};
```

---

## Step 4: Test the Integration

After updating the price IDs:

1. **Local Testing**:
   ```bash
   cd D:\the-classified-files
   npm start
   ```

2. **Try purchasing a case** (use Stripe test card):
   - Card: `4242 4242 4242 4242`
   - Expiry: Any future date
   - CVC: Any 3 digits

3. **Verify** the purchase unlocks the content

---

## Step 5: Environment Variables

Update your `.env` file (create if it doesn't exist):

```env
# Stripe Keys
STRIPE_SECRET_KEY=sk_live_your_secret_key_here
STRIPE_PUBLISHABLE_KEY=pk_live_51RsoBfPmM4NpiDNLUle3BIuWMyxeRthSGHync5nWsh0EL6wn7pUVhLjuvgMkxmg7i89OQ1H6W7RH9vr67ZouARVM00QATgHCQk

# Webhook Secret (from Stripe Dashboard -> Webhooks)
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here

# Server Configuration
PORT=3000
NODE_ENV=production
```

---

## Step 6: Configure Webhooks

1. Go to https://dashboard.stripe.com/webhooks
2. Click **"+ Add endpoint"**
3. Enter your endpoint URL:
   - **Production**: `https://the-classified-files-production.up.railway.app/webhook`
4. Select events to listen to:
   - `checkout.session.completed`
   - `payment_intent.succeeded`
5. Copy the **webhook signing secret** (starts with `whsec_...`)
6. Add it to your `.env` file

---

## Troubleshooting

### Issue: "No price ID found"
- **Solution**: Make sure you've created the product in Stripe Dashboard
- **Solution**: Verify the price ID starts with `price_` not `prod_`

### Issue: "Payment not working"
- **Solution**: Check your `.env` file has the correct secret key
- **Solution**: Verify Railway has the environment variables set

### Issue: "Content still locked after payment"
- **Solution**: Check webhook is firing correctly
- **Solution**: Verify server-side verification is working

---

## Quick Reference: Stripe Dashboard Links

- Products: https://dashboard.stripe.com/products
- Webhooks: https://dashboard.stripe.com/webhooks
- API Keys: https://dashboard.stripe.com/apikeys
- Test Mode: Toggle switch in top right corner

---

## Next Steps After Setup

Once all price IDs are configured:

1. ✅ Test each case purchase
2. ✅ Verify webhook events are received
3. ✅ Test bundle pricing (if implemented)
4. ✅ Deploy to production
5. ✅ Monitor first real purchases

---

**Need Help?**
- Stripe Documentation: https://stripe.com/docs
- Support: https://support.stripe.com

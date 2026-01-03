# Stripe Complete Setup Guide

**Current Status:** Price IDs configured in `stripe-prices.js` ✅
**Action Needed:** Verify these are test vs live price IDs

---

## 📊 Current Configuration Status

### Files Checked:
1. ✅ **stripe-prices.js** - Has 13 price IDs configured
2. ⚠️ **payment-config.js** - Uses different price ID logic
3. ✅ **.env** - Has test Stripe keys configured

### Configured Products (13 total):

| # | Product | Price ID | Status |
|---|---------|----------|--------|
| 1 | Epstein Investigation | `price_1Si6m0PmM4NpiDNLMSLjKv2g` | ✅ Set |
| 2 | JFK Assassination | `price_1Si6okPmM4NpiDNLIGyIv6CW` | ✅ Set |
| 3 | 9/11 Commission | `price_1Si6rkPmM4NpiDNLuFyr9nuw` | ✅ Set |
| 4 | Watergate Files | `price_1Si6zBPmM4NpiDNL2xT7wsRO` | ✅ Set |
| 5 | Pentagon Papers | `price_1Si74mPmM4NpiDNLWQyr31Br` | ✅ Set |
| 6 | MKUltra Files | `price_1Si7C1PmM4NpiDNLlx7e7EaY` | ✅ Set |
| 7 | Panama Papers | `price_1Si7HwPmM4NpiDNLomHwUPrq` | ✅ Set |
| 8 | Iran-Contra | `price_1Si7W0PmM4NpiDNLIdY3RTTU` | ✅ Set |
| 9 | COINTELPRO | `price_1Si7bJPmM4NpiDNLQNhLYht5` | ✅ Set |
| 10 | Snowden | `price_1Si7coPmM4NpiDNLVCwptqiF` | ✅ Set |
| 11 | Tuskegee | `price_1Si7eIPmM4NpiDNLGcb5LNYo` | ✅ Set |
| 12 | Paperclip | `price_1Si7fdPmM4NpiDNLoSdt541g` | ✅ Set |
| 13 | Diddy Case | `price_1SA0B6PmM4NpiDNLKs5qANcY` | ✅ Set |

---

## 🔍 Issue Identified

You have **TWO different payment configuration files**:

### 1. `stripe-prices.js` (Simple, uses actual price IDs)
```javascript
const StripePrices = {
    'epstein': 'price_1Si6m0PmM4NpiDNLMSLjKv2g',
    'jfk': 'price_1Si6okPmM4NpiDNLIGyIv6CW',
    // ... etc
};
```

### 2. `payment-config.js` (Complex, uses placeholder logic)
```javascript
this.products = {
    epstein: {
        priceId: this.isProduction ? 'price_live_epstein' : 'price_test_epstein'
    }
    // ... etc
};
```

**Problem:** These two files use different approaches!

---

## ✅ Recommended Solution

### Option 1: Use `stripe-prices.js` (RECOMMENDED)

**Pros:**
- ✅ Simpler code
- ✅ All 13 price IDs already configured
- ✅ Direct mapping

**Action:**
Update `payment-config.js` to use `window.StripePrices`:

```javascript
this.products = {
    epstein: {
        name: "Epstein Investigation",
        price: 4.99,
        description: "Access the classified Epstein investigation files",
        priceId: window.StripePrices?.epstein || 'price_test_epstein'
    },
    // ... repeat for all products
};
```

### Option 2: Keep Current System

**Pros:**
- Automatic test/live switching based on environment

**Action:**
You need to create both test AND live versions of each product in Stripe, then update the placeholder price IDs.

---

## 🎯 Which System Are You Using?

Let me check which price IDs you actually have. Your price IDs start with `price_1S...`, which suggests they're from your Stripe account.

### Questions to Determine Next Steps:

1. **Are these Test Mode or Live Mode price IDs?**
   - Check your Stripe dashboard - is test mode toggle ON or OFF?
   - Test mode price IDs work only in test mode
   - Live mode price IDs work only in live mode

2. **Do you want to:**
   - **A) Use test mode only** (for testing, use test cards)
   - **B) Use live mode** (for real payments, real cards)
   - **C) Support both** (auto-switch based on environment)

---

## 🔧 Action Plan Based on Your Choice

### If Choosing A: Test Mode Only

**Files to Update:**
1. Update `.env`:
   ```
   STRIPE_SECRET_KEY=sk_test_...  # Your test secret key
   ```

2. Verify `stripe-prices.js` has test price IDs

3. Update `payment-config.js` to use `stripe-prices.js`

**Test with:**
- Card: 4242 4242 4242 4242
- Expiry: Any future date
- CVC: Any 3 digits

### If Choosing B: Live Mode (Production)

**Files to Update:**
1. Create 13 products in Stripe Dashboard (LIVE MODE)
2. Copy LIVE price IDs to `stripe-prices.js`
3. Update `.env`:
   ```
   STRIPE_SECRET_KEY=sk_live_...  # Your live secret key
   ```
4. Test with real credit card (will charge real money!)

### If Choosing C: Both Test & Live

**Files to Update:**
1. Create 13 products in BOTH test and live mode
2. Update `payment-config.js` with conditional logic:
   ```javascript
   priceId: this.isProduction ? 'price_live_XXX' : 'price_test_XXX'
   ```
3. Maintain two sets of price IDs

---

## 📝 My Recommendation

**Use Test Mode for now**, then switch to Live when ready.

Here's why:
1. You can test everything without real money
2. Use test cards to verify payment flow
3. When ready, just swap keys and price IDs to go live

---

## ✅ Immediate Action Items

Let me help you verify and fix your setup:

### Step 1: Verify Price IDs
Check if your price IDs are test or live:
1. Go to Stripe Dashboard
2. Look for the test mode toggle (top right)
3. If ON = test price IDs
4. If OFF = live price IDs

### Step 2: Choose Your Configuration File

**Recommendation:** Simplify by using only `stripe-prices.js`

### Step 3: Update Payment Manager

I can update `payment-config.js` to use the price IDs from `stripe-prices.js`.

Would you like me to:
1. **Update payment-config.js** to use stripe-prices.js? ✅ RECOMMENDED
2. **Verify** your current price IDs are valid?
3. **Create** a unified configuration?

---

## 🔍 Validation Command

Run this to verify your Stripe setup:

```bash
npm run validate-stripe
```

This will tell you:
- How many products are configured
- If price IDs are valid format
- If environment variables are set

---

## 🎯 Summary

**Current Status:**
- ✅ 13/13 price IDs in `stripe-prices.js`
- ⚠️ `payment-config.js` uses different system
- ⚠️ Two files doing the same thing differently

**What You Need:**
- Decide: test mode or live mode?
- Unify your configuration (use one system)
- Verify price IDs match your Stripe dashboard

**What I Can Do:**
- Update `payment-config.js` to use `stripe-prices.js`
- Create unified configuration
- Test payment flow

---

## 💬 Next Steps

**Tell me:**
1. Are your price IDs from Test Mode or Live Mode?
2. Do you want to use test mode (for testing) or live mode (real payments)?
3. Should I update `payment-config.js` to use the simpler `stripe-prices.js` system?

Then I'll help you complete the setup! 🚀

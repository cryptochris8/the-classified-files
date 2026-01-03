# Payment Flow Testing Guide

**Date:** January 3, 2026
**Purpose:** Test Stripe payment integration end-to-end

---

## 🎯 Test Objectives

1. ✅ Verify server accepts payment requests
2. ✅ Test Stripe Checkout redirect
3. ✅ Verify JWT token generation
4. ✅ Test case unlocking after purchase
5. ✅ Verify localStorage storage

---

## 🧪 Manual Test Steps

### Step 1: Start the Game

1. Server should be running on http://localhost:3001 (or 3000)
2. Open browser and navigate to the game
3. Wait for loading screen to complete

**Expected Result:**
- ✅ Case selection screen appears
- ✅ All 15 cases visible
- ✅ UAP case shows as FREE
- ✅ Other cases show as "Premium" or "Coming Soon"

---

### Step 2: Test Free Case (Baseline)

1. Click on **UAP Investigation** (free case)
2. Should start immediately without payment prompt

**Expected Result:**
- ✅ UAP case loads
- ✅ Story begins with typewriter effect
- ✅ Choices appear after text
- ✅ No payment prompt

**If this fails:** Game engine issue, not payment issue

---

### Step 3: Test Premium Case Click

1. Return to case selection (or refresh page)
2. Click on a **premium case** (e.g., Epstein, JFK, or Diddy)

**Expected Result:**
- ✅ Purchase prompt appears
- ✅ Shows price ($4.99)
- ✅ Shows "Unlock" button
- ✅ No JavaScript errors in console

**Check browser console:**
```javascript
// Should see:
Stripe initialized successfully
PaymentManager loaded
```

**If this fails:**
- Check if `payment-config.js` is loaded
- Check if `stripe-prices.js` is loaded
- Look for console errors

---

### Step 4: Click Purchase Button

1. Click the **"Unlock for $4.99"** button

**Expected Result:**
- ✅ Browser redirects to Stripe Checkout
- ✅ URL changes to checkout.stripe.com
- ✅ Stripe payment form appears
- ✅ Shows correct product name and price

**Check Network Tab:**
```
POST /create-checkout-session
Status: 200 OK
Response: { "id": "cs_..." }
```

**If this fails:**
- Check server logs for errors
- Verify STRIPE_SECRET_KEY in .env
- Check CORS settings
- Verify price ID exists in Stripe

---

### Step 5: Enter Test Card

On Stripe Checkout page, enter:

```
Card Number: 4242 4242 4242 4242
Expiry: 12/34 (any future date)
CVC: 123 (any 3 digits)
ZIP: 12345 (any 5 digits)
Email: test@example.com
```

**Expected Result:**
- ✅ Card validates successfully
- ✅ No errors shown
- ✅ "Pay" button becomes enabled

---

### Step 6: Complete Payment

1. Click **"Pay"** button

**Expected Result:**
- ✅ Payment processes (might take 2-3 seconds)
- ✅ Redirects back to your game
- ✅ URL: http://localhost:3001/payment-success.html?session_id=cs_...

**If this fails:**
- Payment might have been declined
- Check Stripe Dashboard → Payments for status
- Verify test mode is enabled

---

### Step 7: Verify Success Page

After redirect, you should see:

**Expected Result:**
- ✅ Success message appears
- ✅ "Payment Successful!" heading
- ✅ "Start Playing" button visible

**Check localStorage:**
Open browser console and run:
```javascript
console.log(localStorage.getItem('purchaseToken'));
console.log(localStorage.getItem('purchaseData'));
```

**Should show:**
```javascript
// purchaseToken: Long JWT string starting with "eyJ..."
// purchaseData: {"sessionId":"cs_...","timestamp":"...","verified":true}
```

**If missing:**
- JWT generation failed on server
- Check server logs
- Verify JWT_SECRET in .env

---

### Step 8: Verify Case Unlocks

1. Click **"Start Playing"** or refresh the page
2. Navigate to case selection
3. Click on the case you just purchased

**Expected Result:**
- ✅ Case loads immediately
- ✅ No payment prompt
- ✅ Story begins playing
- ✅ Case is permanently unlocked

**Test persistence:**
1. Refresh the page
2. Click the purchased case again
3. Should still be unlocked (no payment prompt)

**If this fails:**
- localStorage might be cleared
- JWT token might be invalid
- Check game-config.js unlocking logic

---

## 🔍 Troubleshooting Guide

### Issue: "Stripe not initialized" error

**Cause:** Stripe.js didn't load

**Fix:**
1. Check if Stripe CDN is accessible
2. Verify `<script src="https://js.stripe.com/v3/"></script>` in index.html
3. Check browser console for script loading errors

---

### Issue: "Failed to create checkout session"

**Causes:**
1. Invalid price ID
2. Wrong Stripe secret key
3. CORS error
4. Network issue

**Fix:**
1. Check server logs: `npm start` output
2. Verify price ID in stripe-prices.js
3. Check .env has correct STRIPE_SECRET_KEY
4. Verify server is running

**Test server endpoint:**
```bash
curl -X POST http://localhost:3001/create-checkout-session \
  -H "Content-Type: application/json" \
  -d '{"priceId":"price_1Si6m0PmM4NpiDNLMSLjKv2g","successUrl":"http://localhost:3001/success","cancelUrl":"http://localhost:3001/cancel"}'
```

---

### Issue: Payment succeeds but case doesn't unlock

**Causes:**
1. JWT token not stored
2. localStorage cleared
3. Game config issue

**Fix:**
1. Check localStorage has `purchaseToken`
2. Verify payment-success.html stores token
3. Check game-config.js `hasPurchased()` function

**Debug:**
```javascript
// In browser console:
console.log('Token:', localStorage.getItem('purchaseToken'));
console.log('Data:', localStorage.getItem('purchaseData'));

// Test unlock manually:
localStorage.setItem('gameUnlocked', 'true');
// Then refresh and try clicking premium case
```

---

### Issue: Redirect to wrong URL after payment

**Cause:** Success/Cancel URLs misconfigured

**Fix:**
Check `payment-config.js`:
```javascript
PaymentConfig.getSuccessUrl() // Should return correct URL
PaymentConfig.getCancelUrl()  // Should return correct URL
```

---

### Issue: "Invalid session ID" error

**Causes:**
1. Session expired (2 hours timeout)
2. Different Stripe account
3. Wrong mode (test vs live)

**Fix:**
1. Complete payment within 2 hours
2. Verify using same Stripe account
3. Check test mode toggle in Stripe

---

## ✅ Success Criteria Checklist

After completing all steps, verify:

- [ ] Server health endpoint returns healthy status
- [ ] Free case (UAP) plays without payment
- [ ] Premium case shows purchase prompt
- [ ] Clicking purchase redirects to Stripe
- [ ] Test card payment processes successfully
- [ ] Redirects to success page with session ID
- [ ] JWT token stored in localStorage
- [ ] Purchase data stored in localStorage
- [ ] Case unlocks and plays
- [ ] Unlock persists after refresh
- [ ] No console errors throughout flow
- [ ] No server errors in logs

**If all checked:** ✅ Payment flow is working!

---

## 📊 Expected Network Activity

### 1. Click Purchase Button
```
POST /create-checkout-session
Request: {
  "priceId": "price_1Si6m0...",
  "successUrl": "http://localhost:3001/payment-success.html",
  "cancelUrl": "http://localhost:3001/payment-cancel.html"
}
Response: {
  "id": "cs_test_..."
}
Status: 200 OK
```

### 2. Stripe Checkout
```
Multiple requests to checkout.stripe.com
(Stripe handles this internally)
```

### 3. After Payment Success
```
GET /payment-success.html?session_id=cs_test_...
Status: 200 OK
Response: HTML with JavaScript that stores JWT token
```

### 4. (Optional) Verify Purchase
```
GET /verify-payment/cs_test_...
Response: {
  "success": true,
  "paymentStatus": "paid",
  "purchaseToken": "eyJ..."
}
Status: 200 OK
```

---

## 🧪 Advanced Testing

### Test Different Cards

**Successful Payment:**
```
4242 4242 4242 4242 - Succeeds immediately
```

**Requires Authentication:**
```
4000 0027 6000 3184 - Triggers 3D Secure
```

**Declined:**
```
4000 0000 0000 0002 - Card declined
4000 0000 0000 9995 - Insufficient funds
```

**Specific Errors:**
```
4000 0000 0000 0069 - Expired card
4000 0000 0000 0127 - Incorrect CVC
```

---

## 📝 Test Results Template

```
PAYMENT FLOW TEST RESULTS
Date: [DATE]
Tester: [NAME]
Environment: Local (http://localhost:3001)

[✅/❌] Server health check passed
[✅/❌] Free case (UAP) works
[✅/❌] Premium case shows purchase prompt
[✅/❌] Purchase button creates checkout session
[✅/❌] Redirects to Stripe Checkout
[✅/❌] Test card accepted
[✅/❌] Payment processed successfully
[✅/❌] Redirects to success page
[✅/❌] JWT token stored
[✅/❌] Purchase data stored
[✅/❌] Case unlocks
[✅/❌] Unlock persists after refresh

Issues Found:
1. [List any issues]

Console Errors:
1. [List any errors]

Server Errors:
1. [List any errors]

Overall Status: [PASS/FAIL]
Ready for Production: [YES/NO]
```

---

## 🎯 Next Steps After Testing

### If All Tests Pass:
1. ✅ Mark payment flow as working
2. ✅ Move to Google Analytics setup
3. ✅ Prepare for production deployment

### If Tests Fail:
1. ❌ Document specific failure point
2. ❌ Check troubleshooting guide
3. ❌ Fix issue and re-test
4. ❌ Don't proceed until working

---

## 💡 Quick Test (5 Minutes)

If you want a rapid test:

1. Start server: `npm start`
2. Open: http://localhost:3001
3. Click UAP case → Should work
4. Back to menu → Click Epstein case
5. Click purchase → Should redirect to Stripe
6. Enter test card: 4242 4242 4242 4242
7. Complete payment
8. Should return to success page
9. Case should unlock

**If this works:** ✅ Payment system is functional!

---

**Ready to test?**

Follow the steps above and let me know if you encounter any issues! 🚀

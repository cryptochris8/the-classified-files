# Deployment Checklist - The Classified Files

## 🚀 Pre-Deployment Checklist

Use this checklist before deploying to production.

---

## ✅ Phase 1: Configuration (IN PROGRESS)

### Stripe Setup
- [ ] Create all 13 Stripe products ($4.99 each)
  - [✅] Diddy Case (already done)
  - [✅] 8 others (you're working on this)
  - [ ] 4 remaining products
- [ ] Copy all 13 price IDs
- [ ] Update `stripe-prices.js` with actual price IDs
- [ ] Run: `npm run validate-stripe` (should show 13/13 ✅)
- [ ] Configure Stripe webhook endpoint
  - URL: `https://the-classified-files-production.up.railway.app/webhook`
  - Events: `checkout.session.completed`, `payment_intent.succeeded`
  - Copy webhook secret to .env

### Google Analytics
- [ ] Create GA4 property at https://analytics.google.com
- [ ] Create data stream for your domain
- [ ] Copy Measurement ID (G-XXXXXXXXXX)
- [ ] Update `analytics.js` line 251 with your ID
- [ ] Test in GA4 Realtime report

### Environment Variables
- [ ] Create `.env` file (copy from `.env.example`)
- [ ] Add `STRIPE_SECRET_KEY` (from Stripe dashboard)
- [ ] Add `STRIPE_WEBHOOK_SECRET` (from Stripe webhooks)
- [ ] Generate `JWT_SECRET`: `npm run generate-jwt-secret`
- [ ] Add `JWT_SECRET` to .env
- [ ] Verify `PORT=3000` and `NODE_ENV=production`

---

## ✅ Phase 2: Testing Locally

### Server Testing
```bash
# Start secure server
npm start

# Should see:
# 🚀 Secure server running on http://localhost:3000
# ✅ Security features enabled:
#    - Helmet.js security headers
#    - Rate limiting...
```

### Health Check
```bash
# Visit or curl:
curl http://localhost:3000/health

# Should return:
# {"status":"healthy","stripe":"configured","jwt":"configured"}
```

### Test Game
- [ ] Open http://localhost:3000
- [ ] Verify images load
- [ ] Select UAP case (free)
- [ ] Play through a few scenes
- [ ] Check browser console for errors
- [ ] Verify no broken images
- [ ] Test music toggle
- [ ] Test Read Aloud feature

### Test Analytics
- [ ] Open browser console
- [ ] Should see: `✅ Google Analytics 4 initialized: G-...`
- [ ] Make a choice in the game
- [ ] Check GA4 Realtime report (1 active user)
- [ ] Verify events appear

### Test Payment Flow (Stripe Test Mode)
- [ ] Click on Diddy Case (premium)
- [ ] Click purchase button
- [ ] Should redirect to Stripe Checkout
- [ ] Use test card: `4242 4242 4242 4242`
- [ ] Expiry: any future date
- [ ] CVC: any 3 digits
- [ ] Complete purchase
- [ ] Should redirect to success page
- [ ] Verify case unlocks
- [ ] Check browser localStorage for `purchaseToken`

---

## ✅ Phase 3: Image Optimization (Optional but Recommended)

### Run Optimization
```bash
npm run optimize-images
```

Expected results:
- [ ] 200+ images converted to WebP
- [ ] 50-80% file size reduction
- [ ] Backups created in `images/backup/`
- [ ] Optimized images in `images/optimized/`

### Update References (Optional)
```bash
npm run update-image-refs
```

- [ ] Story files updated
- [ ] Backups created in `story-backups/`

### Test Image Loading
- [ ] Restart server
- [ ] Verify all images still load
- [ ] Check image quality
- [ ] Test on mobile device
- [ ] If issues: revert from backups

---

## ✅ Phase 4: Code Review

### Security Checks
- [ ] No API keys committed to git
- [ ] `.env` file in `.gitignore`
- [ ] All endpoints have input validation
- [ ] Rate limiting configured
- [ ] CSP headers properly configured
- [ ] No `console.log` with sensitive data

### Code Quality
- [ ] No JavaScript errors in console
- [ ] No broken links
- [ ] All images have alt text
- [ ] Mobile responsive (test on phone)
- [ ] Accessibility features work (TTS, keyboard nav)

---

## ✅ Phase 5: Railway Deployment (Backend)

### Update Railway Environment Variables
1. Go to Railway Dashboard → Your Project → Variables
2. Add/Update:
   ```
   STRIPE_SECRET_KEY=sk_live_...
   STRIPE_WEBHOOK_SECRET=whsec_...
   JWT_SECRET=<generated_secret>
   NODE_ENV=production
   PORT=3000
   ```

### Deploy Backend
```bash
git add .
git commit -m "Security upgrades, analytics, Stripe configuration"
git push origin main
```

### Verify Railway Deployment
- [ ] Railway shows "Success" status
- [ ] Check logs for errors
- [ ] Visit: `https://the-classified-files-production.up.railway.app/health`
- [ ] Should return: `{"status":"healthy"...}`

---

## ✅ Phase 6: Netlify Deployment (Frontend)

### Configure Netlify
1. Log into Netlify
2. Site settings → Build & deploy
3. Verify build settings:
   - Build command: `echo 'Deploying...'`
   - Publish directory: `.`

### Deploy Frontend
```bash
# Already pushing to git will trigger Netlify deploy
git push origin main
```

### Post-Deployment Checks
- [ ] Netlify shows "Published" status
- [ ] Visit your Netlify URL
- [ ] Check browser console for errors
- [ ] Verify CSP headers (check Network tab)
- [ ] Test on multiple browsers:
  - [ ] Chrome
  - [ ] Firefox
  - [ ] Safari
  - [ ] Edge

---

## ✅ Phase 7: Production Testing

### End-to-End Test
- [ ] Visit production site
- [ ] Play through UAP case (free)
- [ ] Test Diddy case purchase (REAL card or test mode)
- [ ] Verify purchase unlocks content
- [ ] Check GA4 for events
- [ ] Test on mobile device
- [ ] Test payment cancellation flow

### Performance Testing
```bash
# Use Google Lighthouse
# Target scores:
# - Performance: 90+
# - Accessibility: 95+
# - Best Practices: 95+
# - SEO: 90+
```

### Security Testing
- [ ] Check SSL certificate (https://)
- [ ] Verify CSP headers (no console warnings)
- [ ] Test rate limiting (try 10 rapid requests)
- [ ] Verify JWT tokens work
- [ ] Try to bypass payment (should fail)

---

## ✅ Phase 8: Monitoring Setup

### Google Analytics
- [ ] Verify events flowing to GA4
- [ ] Set up conversion goals
- [ ] Create custom reports
- [ ] Set up email alerts for errors

### Stripe Monitoring
- [ ] Test webhook delivery
- [ ] Check Stripe Dashboard for test payment
- [ ] Set up payment failure alerts
- [ ] Monitor for disputes/chargebacks

### Server Monitoring
- [ ] Check Railway logs daily (first week)
- [ ] Monitor for errors
- [ ] Watch for rate limit hits
- [ ] Check server response times

---

## ✅ Phase 9: Post-Launch (First Week)

### Daily Checks
- [ ] Check GA4 Realtime report
- [ ] Review Stripe transactions
- [ ] Check Railway logs for errors
- [ ] Monitor page load times
- [ ] Read user feedback

### Week 1 Metrics to Track
- [ ] Total visitors
- [ ] UAP case completions
- [ ] Purchase conversions
- [ ] Average session duration
- [ ] Bounce rate
- [ ] Mobile vs desktop traffic

---

## ✅ Phase 10: Optimization

### Based on Data, Consider:
- [ ] A/B test pricing ($4.99 vs $3.99)
- [ ] Add bundle pricing (all cases $39.99)
- [ ] Improve highest drop-off scenes
- [ ] Add more engaging content to popular cases
- [ ] Optimize slowest-loading pages
- [ ] Fix most common errors

---

## 🚨 Emergency Rollback Plan

### If Something Breaks:

#### Option 1: Revert Git Commit
```bash
git log  # Find last working commit
git revert <commit-hash>
git push origin main
```

#### Option 2: Use Legacy Server
```bash
# Update package.json:
"start": "node server.js"  # Instead of server-secure.js

# Redeploy to Railway
git commit -am "Emergency: revert to legacy server"
git push
```

#### Option 3: Netlify Rollback
1. Go to Netlify → Deploys
2. Click on last working deploy
3. Click "Publish deploy"

---

## 📊 Success Criteria

### You'll Know Deployment is Successful When:

✅ **All 13 Stripe products configured** (13/13)
✅ **Health endpoint returns healthy status**
✅ **GA4 shows active users in Realtime**
✅ **Free case (UAP) works perfectly**
✅ **Premium case (Diddy) purchase flow works**
✅ **No console errors in production**
✅ **Page load time < 3 seconds**
✅ **Lighthouse scores > 90**
✅ **First sale completed successfully**

---

## 📞 Troubleshooting

### Common Issues:

#### Stripe Webhooks Failing
```bash
# Check Railway logs
railway logs

# Verify webhook secret matches
echo $STRIPE_WEBHOOK_SECRET
```

#### Analytics Not Working
```javascript
// Check browser console for:
"✅ Google Analytics 4 initialized"

// If not, verify:
// 1. analytics.js has correct Measurement ID
// 2. GA4 property exists
// 3. Data stream created
```

#### Payment Not Unlocking Content
```bash
# Check if JWT token exists
localStorage.getItem('purchaseToken')

# Verify server can validate
curl -X POST http://localhost:3000/validate-purchase \
  -H "Content-Type: application/json" \
  -d '{"token":"<token_from_localStorage>"}'
```

#### Images Not Loading
```bash
# Check if files exist
ls images/optimized/*.webp

# If missing, images weren't optimized yet
# Either run npm run optimize-images
# Or ensure game-engine.js falls back to PNG
```

---

## 🎉 Post-Deployment Celebration Checklist

After successful deployment:

- [  ] Share site with 5 friends for feedback
- [  ] Post on social media
- [  ] Submit to directories (Product Hunt, etc.)
- [  ] Create launch announcement
- [  ] Monitor first 100 visitors
- [  ] Celebrate your first sale! 🎊
- [  ] Plan next feature release

---

**Current Status:**
- ✅ 8/10 phases complete
- 🚧 Phase 1: User finishing Stripe products (8/13 done)
- ⏳ Phases 2-10: Ready to begin after Stripe complete

**Estimated Time to Launch:** 2-3 hours after Stripe products complete

**You're almost there!** 🚀

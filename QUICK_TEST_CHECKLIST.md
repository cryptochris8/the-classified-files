# Quick Testing Checklist - The Classified Files

**Use this checklist for rapid testing before deployment**

---

## ⚡ 5-Minute Quick Test

### 1. Start Server
```bash
npm start
# If port 3000 is occupied:
PORT=3001 npm start
```

**Expected:** Server starts with security features message
- ✅ Health check works: http://localhost:3000/health

### 2. Open Game
Open in browser: http://localhost:3000

**Expected:**
- ✅ "CLASSIFIED" loading screen appears
- ✅ After 3 seconds, case selection appears
- ✅ All 15 cases visible
- ✅ UAP shows as FREE

### 3. Test Free Case (UAP)
- Click "UAP Investigation"

**Expected:**
- ✅ Story text appears with typewriter effect
- ✅ Choices appear after text
- ✅ Click a choice progresses to next scene
- ✅ Evidence counter increases
- ✅ Progress bar fills
- ✅ Document image displays (if scene has one)

### 4. Test Basic Features
- Press ESC → Music toggles on/off
- Press 1-9 keys → Selects choices
- Click "Read Aloud" → TTS starts

**Expected:** All features respond correctly

---

## 🔧 15-Minute Full Test

### Server Tests
- [ ] `npm start` - Server starts successfully
- [ ] `curl http://localhost:3000/health` - Returns healthy status
- [ ] `npm run validate-stripe` - Shows X/13 products configured
- [ ] Check browser console - No JavaScript errors

### Game Flow Tests
- [ ] Open http://localhost:3000
- [ ] Loading screen displays
- [ ] Case selection shows all cases
- [ ] UAP case is FREE and clickable
- [ ] Premium cases show "Coming Soon" or "Premium" badge
- [ ] Click UAP case
- [ ] Intro scene loads
- [ ] Typewriter effect works
- [ ] Choices appear
- [ ] Click choice #1
- [ ] Scene transitions to next
- [ ] Evidence counter updates
- [ ] Progress bar increases
- [ ] Image displays (if present)

### Feature Tests
- [ ] ESC toggles background music
- [ ] Keyboard 1-9 selects choices
- [ ] Read Aloud button works
- [ ] Clicking screen during typewriter skips to full text
- [ ] Returning to case selection works (if implemented)

### Payment Tests (If Stripe configured)
- [ ] Click premium case (e.g., Diddy)
- [ ] Purchase prompt appears
- [ ] Click purchase button
- [ ] Redirects to Stripe Checkout
- [ ] Enter test card: 4242 4242 4242 4242
- [ ] Complete payment
- [ ] Redirects to success page
- [ ] Case unlocks
- [ ] JWT token stored in localStorage

### Browser Tests
- [ ] Chrome - Works
- [ ] Firefox - Works
- [ ] Safari - Works
- [ ] Edge - Works
- [ ] Mobile Chrome - Works
- [ ] Mobile Safari - Works

---

## 🐛 Common Issues & Fixes

### Issue: Port 3000 in use
```bash
# Windows
netstat -ano | findstr :3000
# Note the PID, then close that application
# Or use different port:
PORT=3001 npm start
```

### Issue: No stories load
**Check:**
1. Browser console for errors
2. All story files in index.html script tags
3. Story files have valid JavaScript syntax

**Fix:**
```bash
# Check syntax
node -c epstein-story-expanded.js
node -c uap-story-expanded.js
```

### Issue: Images don't load
**Check:**
1. images/ directory exists
2. Image paths in story files match actual files

**Fix:**
```bash
ls images/*.png | head -10
# Verify files exist
```

### Issue: Payment fails
**Check:**
1. Stripe publishable key is correct
2. Server URL is correct in payment-config.js
3. Network tab in browser for errors

**Fix:**
1. Check `.env` has correct Stripe keys
2. Verify PaymentConfig.SERVER_URL points to running server

### Issue: Slow loading
**Run image optimization:**
```bash
npm run optimize-images
```

---

## ✅ Quick Validation Commands

```bash
# Test all core JS files
node -c game-engine.js && \
node -c main.js && \
node -c game-config.js && \
node -c payment-config.js && \
echo "✅ All core files valid"

# Test story files
node -c uap-story-expanded.js && \
node -c epstein-story-expanded.js && \
node -c diddy-case-story-expanded.js && \
echo "✅ Story files valid"

# Check server health
curl http://localhost:3000/health

# Count images
ls images/*.png | wc -l

# Check audio files
ls audio/music/*.mp3 audio/sfx/*.wav
```

---

## 🎯 Pass Criteria

### Minimum Viable (Can Deploy)
- ✅ Server starts without errors
- ✅ Health endpoint returns 200
- ✅ UAP case loads and plays
- ✅ At least 5 scenes playable
- ✅ No JavaScript console errors

### Production Ready (Should Deploy)
- ✅ All 15 cases visible in selection
- ✅ UAP case fully playable
- ✅ Images load correctly
- ✅ Music and sounds work
- ✅ Payment flow tested (test mode)
- ✅ Stripe products configured
- ✅ JWT tokens working

### Optimized (Best Experience)
- ✅ Image optimization run (77% reduction)
- ✅ Google Analytics configured
- ✅ Tested in 4+ browsers
- ✅ Mobile responsive
- ✅ Lighthouse score 85+
- ✅ All features tested

---

## 📊 Test Results Template

```
TESTING SESSION: [Date/Time]
Tester: [Name]
Environment: [Local/Staging/Production]

SERVER STATUS:
[ ] Starts successfully
[ ] Health check passes
[ ] No startup errors

GAME FUNCTIONALITY:
[ ] Loading screen works
[ ] Case selection works
[ ] UAP case playable (5+ scenes)
[ ] Images load
[ ] Audio works
[ ] Features work (ESC, keys, TTS)

PAYMENT (if configured):
[ ] Purchase prompt appears
[ ] Stripe redirect works
[ ] Payment completes
[ ] Case unlocks

BROWSERS TESTED:
[ ] Chrome
[ ] Firefox
[ ] Safari
[ ] Edge
[ ] Mobile

ISSUES FOUND:
1. [List any issues]
2.
3.

OVERALL STATUS: [PASS / FAIL / NEEDS WORK]
READY FOR DEPLOY: [YES / NO / WITH FIXES]
```

---

## 🚀 Pre-Deployment Final Check

Before pushing to production:

1. **Environment**
   - [ ] .env file configured
   - [ ] Stripe keys set (live mode for production)
   - [ ] JWT_SECRET generated and set
   - [ ] GA4 Measurement ID configured

2. **Testing**
   - [ ] Full UAP playthrough completed
   - [ ] Payment flow tested
   - [ ] No console errors
   - [ ] Images load

3. **Optimization**
   - [ ] `npm run optimize-images` completed
   - [ ] Images reduced by ~77%
   - [ ] Page loads in <3 seconds

4. **Configuration**
   - [ ] All 13 Stripe products created
   - [ ] `npm run validate-stripe` shows 13/13
   - [ ] payment-config.js has all price IDs

5. **Documentation**
   - [ ] README.md up to date
   - [ ] DEPLOYMENT_CHECKLIST.md reviewed
   - [ ] .env.example matches .env structure

**If all checkboxes ✅ → DEPLOY!**

---

**Quick Reference:**
- **Start server:** `npm start`
- **Test health:** `curl http://localhost:3000/health`
- **Optimize images:** `npm run optimize-images`
- **Validate Stripe:** `npm run validate-stripe`
- **Test payment:** Card 4242 4242 4242 4242

**Emergency Stop:**
```bash
# Windows
taskkill /F /IM node.exe
# Linux/Mac
pkill node
```

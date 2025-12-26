# Google Analytics 4 Integration Guide

## 🎯 What's Been Set Up

Your game now has **comprehensive analytics tracking** built in!

### Features:
✅ **Game Progress Tracking** - Case starts, completions, progress %
✅ **User Engagement** - Choices, evidence collection, badges
✅ **Conversion Tracking** - Views, checkouts, purchases
✅ **Error Monitoring** - JavaScript errors, payment failures
✅ **Accessibility Tracking** - TTS usage, read-aloud features
✅ **Mini-Game Analytics** - Play time, scores, completion rates

---

## 🚀 Quick Setup (5 Minutes)

### Step 1: Create GA4 Property

1. Go to: https://analytics.google.com/
2. Click **Admin** (bottom left gear icon)
3. Click **Create Property**
4. Fill in:
   - Property name: `The Classified Files`
   - Timezone: Your timezone
   - Currency: USD
5. Click **Next** → **Create**

### Step 2: Create Data Stream

1. Click **Data Streams**
2. Click **Add stream** → **Web**
3. Fill in:
   - Website URL: `https://your-netlify-site.netlify.app`
   - Stream name: `The Classified Files - Production`
4. Click **Create stream**

### Step 3: Get Measurement ID

1. You'll see your **Measurement ID** (format: `G-XXXXXXXXXX`)
2. **Copy this ID!**

### Step 4: Update analytics.js

1. Open: `D:\the-classified-files\analytics.js`
2. Find line 251:
   ```javascript
   const GA4_MEASUREMENT_ID = 'G-XXXXXXXXXX';
   ```
3. Replace with your actual ID:
   ```javascript
   const GA4_MEASUREMENT_ID = 'G-ABC1234567'; // Your actual ID
   ```
4. Save the file

### Step 5: Test It!

```bash
npm start
```

Visit http://localhost:3000 and open browser console. You should see:
```
✅ Google Analytics 4 initialized: G-ABC1234567
```

Then visit GA4 Realtime report (in GA4 dashboard) - you should see 1 active user!

---

## 📊 What Gets Tracked

### Automatic Events:
- ✅ **Page Views** - Every page load
- ✅ **Session Start** - New visitor sessions
- ✅ **Engagement** - User interactions
- ✅ **Errors** - JavaScript exceptions

### Game Events:

#### 1. Case Investigation:
```javascript
// User starts a case
gameAnalytics.trackCaseStart('epstein', 'Epstein Investigation');

// User completes a case
gameAnalytics.trackCaseComplete('epstein', 'Epstein Investigation', 85, 92);
```

#### 2. Story Choices:
```javascript
// User makes a choice
gameAnalytics.trackChoice('jfk', 'dealey_plaza', 'Examine the grassy knoll', true);
```

#### 3. Evidence Collection:
```javascript
// User collects evidence
gameAnalytics.trackEvidenceCollected('watergate', 5);
```

#### 4. Badges & Achievements:
```javascript
// User earns a badge
gameAnalytics.trackBadgeEarned('Truth Seeker', 'gold');
```

#### 5. Quiz Questions:
```javascript
// User answers quiz
gameAnalytics.trackQuizAnswer('uap', 1, true);
```

#### 6. Mini-Games:
```javascript
// User starts mini-game
gameAnalytics.trackMiniGameStart('document_reconstruction');

// User completes mini-game
gameAnalytics.trackMiniGameComplete('document_reconstruction', 850, 120);
```

### E-Commerce Events:

#### 7. Premium Case Views:
```javascript
// User views locked case
gameAnalytics.trackPremiumCaseView('diddy-case', 'Diddy Federal Case', 4.99);
```

#### 8. Purchase Flow:
```javascript
// User clicks purchase
gameAnalytics.trackBeginCheckout('diddy-case', 'Diddy Federal Case', 4.99);

// Purchase complete
gameAnalytics.trackPurchaseComplete(
    'diddy-case',
    'Diddy Federal Case',
    4.99,
    'cs_1234567890'
);
```

### Engagement Events:

#### 9. Music & Sound:
```javascript
// User toggles music
gameAnalytics.trackMusicToggle(true); // or false
```

#### 10. Accessibility:
```javascript
// User uses text-to-speech
gameAnalytics.trackTextToSpeech('start');
gameAnalytics.trackReadAloud('intro_scene');
```

---

## 🔌 Integration with Game Engine

### Add to game-engine.js:

Find the `startCase()` method and add:

```javascript
startCase(caseKey) {
    // ... existing code ...

    // Track case start
    if (window.gameAnalytics) {
        window.gameAnalytics.trackCaseStart(caseKey, this.currentStory.name);
    }
}
```

Find the `makeChoice()` method and add:

```javascript
makeChoice(choiceIndex) {
    const choice = this.getCurrentChoices()[choiceIndex];

    // Track choice
    if (window.gameAnalytics) {
        window.gameAnalytics.trackChoice(
            this.currentCase,
            this.currentSceneKey,
            choice.text,
            choice.factual
        );
    }

    // ... existing code ...
}
```

Find where badges are awarded and add:

```javascript
awardBadge(badgeName, badgeType) {
    // ... existing code ...

    // Track badge
    if (window.gameAnalytics) {
        window.gameAnalytics.trackBadgeEarned(badgeName, badgeType);
    }
}
```

### Add to payment-system.js:

```javascript
initiatePurchase(priceId) {
    const product = this.getProductFromPriceId(priceId);

    // Track checkout start
    if (window.gameAnalytics) {
        window.gameAnalytics.trackBeginCheckout(
            product.key,
            product.name,
            product.price
        );
    }

    // ... existing code ...
}
```

On payment success page, add:

```javascript
// Track purchase completion
if (window.gameAnalytics) {
    window.gameAnalytics.trackPurchaseComplete(
        caseKey,
        caseName,
        4.99,
        sessionId
    );
}
```

---

## 📈 GA4 Dashboard Setup

### Recommended Reports to Create:

#### 1. **Game Progress Funnel**
- Events: case_start → case_complete
- Shows: How many users finish cases

#### 2. **Purchase Funnel**
- Events: view_item → begin_checkout → purchase
- Shows: Conversion rate at each step

#### 3. **Engagement Report**
- Events: story_choice, evidence_collected, badge_earned
- Shows: Most engaging cases

#### 4. **Revenue Report**
- Event: purchase
- Shows: Total revenue, transactions, average order value

### How to Create Custom Report:

1. Go to **Explore** in GA4
2. Click **Blank** template
3. Add dimensions:
   - Event name
   - Case key
   - Case name
4. Add metrics:
   - Event count
   - Users
   - Sessions
5. Save report

---

## 💰 Conversion Tracking

### Set Up E-Commerce Conversion:

1. Go to **Admin** → **Events**
2. Click **Mark as conversion** next to:
   - `purchase`
   - `begin_checkout`
3. Go to **Admin** → **Conversions**
4. Verify both events are listed

### Revenue Tracking:

All purchases automatically send revenue data:
```javascript
{
    currency: 'USD',
    value: 4.99,
    transaction_id: 'cs_123...',
    items: [...]
}
```

View revenue in:
- **Reports** → **Monetization** → **E-commerce purchases**
- **Reports** → **Monetization** → **Purchase journey**

---

## 🎯 Goals & Metrics to Track

### Key Performance Indicators (KPIs):

| Metric | What It Measures | Target |
|--------|------------------|--------|
| **Case Completion Rate** | % who finish cases | 60%+ |
| **Evidence Collection** | Engagement level | 70%+ collect evidence |
| **Quiz Pass Rate** | Content comprehension | 75%+ correct |
| **Purchase Conversion** | % visitors who buy | 2-5% |
| **Time on Case** | Average play time | 15-30 min |
| **Badge Earn Rate** | Achievement hunting | 40%+ earn badges |

### Segments to Create:

1. **Free Users** - Never purchased
2. **Paying Users** - Made purchase
3. **Engaged Users** - Completed ≥1 case
4. **Drop-offs** - Started but didn't finish

---

## 🐛 Debugging Analytics

### Check if GA4 is Working:

```javascript
// In browser console:
window.gameAnalytics.trackEvent('test_event', { test: 'hello' });

// Check dataLayer:
console.log(window.dataLayer);

// Should see array with events
```

### Common Issues:

#### GA4 Not Initializing:
```javascript
// Check measurement ID is set
console.log(window.gameAnalytics.measurementId);
// Should NOT be 'G-XXXXXXXXXX'
```

#### Events Not Firing:
```javascript
// Enable debug mode
window.gameAnalytics.debug = true;

// Now all events log to console
gameAnalytics.trackCaseStart('test', 'Test Case');
// Should see: 📊 GA4 Event: case_start {...}
```

#### Not Showing in GA4 Realtime:
- Wait 30-60 seconds (GA4 has slight delay)
- Check ad blockers aren't blocking gtag
- Verify Measurement ID is correct
- Use GA4 DebugView (Admin → DebugView)

---

## 🔬 Advanced: GA4 DebugView

Enable debug mode for detailed event inspection:

### Method 1: URL Parameter
```
http://localhost:3000?debug_mode=true
```

### Method 2: Chrome Extension
1. Install: **Google Analytics Debugger**
2. Enable extension
3. Reload your site
4. Events appear in GA4 DebugView

### Method 3: Code
```javascript
gtag('config', 'G-ABC1234567', {
    debug_mode: true
});
```

---

## 📊 Sample Analytics Queries

### How many users completed each case?

**Custom Report:**
- Dimension: `case_name`
- Metrics: `event_count` (for case_complete)
- Chart: Bar chart

### What's the conversion rate?

**Exploration:**
1. Funnel:
   - view_item → begin_checkout → purchase
2. Shows drop-off at each step

### Which case has best completion rate?

**Custom Report:**
- Dimension: `case_key`
- Metrics:
  - case_start count
  - case_complete count
- Calculated field: `case_complete / case_start`

---

## 🎨 Customization

### Add Custom Events:

```javascript
// Track any custom interaction
window.gameAnalytics.trackEvent('custom_event_name', {
    custom_param_1: 'value',
    custom_param_2: 123
});
```

### Set User Properties:

```javascript
// After purchase
gameAnalytics.setUserProperty('user_type', 'premium');
gameAnalytics.setUserProperty('cases_owned', 3);
```

### Track User ID:

```javascript
// If you add user accounts later
gameAnalytics.setUserId('user_12345');
```

---

## 🚀 Next Steps

### After Setup:

1. ✅ Get GA4 Measurement ID
2. ✅ Update analytics.js
3. ✅ Test locally
4. ✅ Deploy to production
5. ⏳ Wait 24 hours for data
6. ⏳ Create custom reports
7. ⏳ Set up conversion goals
8. ⏳ Analyze user behavior

### Week 1 Action Items:

- Monitor Realtime report daily
- Check conversion funnel
- Review most popular cases
- Identify drop-off points
- A/B test improvements

---

## 📞 Resources

- **GA4 Documentation:** https://support.google.com/analytics/answer/10089681
- **GA4 Events Reference:** https://developers.google.com/analytics/devguides/collection/ga4/reference/events
- **GA4 Learning Center:** https://skillshop.exceedlms.com/student/path/508845-google-analytics-4

---

**Status:** ✅ Analytics system complete! Just need to add your Measurement ID.

**Time to set up:** 5 minutes
**Value:** Priceless insights into user behavior 📊

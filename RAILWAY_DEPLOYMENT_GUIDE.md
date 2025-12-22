# Complete Railway Deployment Guide

## STEP 1: Get Your Stripe Keys

### 1.1 Login to Stripe Dashboard
1. Go to https://dashboard.stripe.com/
2. Sign in to your Stripe account (or create one if needed)
3. You should see your dashboard

### 1.2 Get Your API Keys
1. In the left sidebar, click **"Developers"**
2. Click **"API keys"**
3. You'll see two keys:
   - **Publishable key** (starts with `pk_test_` or `pk_live_`)
   - **Secret key** (starts with `sk_test_` or `sk_live_`) - click "Reveal" to see it
4. **COPY BOTH KEYS** - save them in a text file for now

### 1.3 Get Your Webhook Secret (Optional but Recommended)
1. In the left sidebar, click **"Webhooks"**
2. Click **"Add endpoint"**
3. For Endpoint URL, enter: `https://YOUR-RAILWAY-URL.up.railway.app/webhook`
   (We'll get this URL later from Railway)
4. Click **"Select events"**
5. Search for and select: `checkout.session.completed`
6. Click **"Add endpoint"**
7. Click on your new webhook
8. In the **"Signing secret"** section, click **"Reveal"**
9. Copy the webhook secret (starts with `whsec_`)

---

## STEP 2: Prepare Your Code

### 2.1 Clean Up Package Manager Issues
```bash
# In your project folder, run:
rm bun.lock
npm install
```

### 2.2 Commit the Fixes I Made
```bash
git add .
git commit -m "Fix Railway deployment issues - webhook middleware and config alignment"
git push origin main
```

---

## STEP 3: Deploy to Railway

### 3.1 Connect Your Project to Railway
1. Go to https://railway.app/
2. Sign in with GitHub
3. Click **"New Project"**
4. Click **"Deploy from GitHub repo"**
5. Select your repository: **"The-Classified-Files"**
6. Railway will start building automatically

### 3.2 Wait for Initial Build
- The build will likely FAIL - that's expected
- We need to add environment variables first

---

## STEP 4: Set Environment Variables in Railway

### 4.1 Access Your Project Settings
1. In Railway dashboard, click on your project
2. Click on the **service** (should show your repo name)
3. Go to the **"Variables"** tab

### 4.2 Add Required Environment Variables
Click **"New Variable"** for each of these:

**Required Variables:**
```
Name: STRIPE_SECRET_KEY
Value: sk_test_YOUR_ACTUAL_SECRET_KEY_FROM_STRIPE

Name: NODE_ENV
Value: production

Name: STRIPE_WEBHOOK_SECRET
Value: whsec_YOUR_WEBHOOK_SECRET_FROM_STRIPE
```

**Optional Variables (for future use):**
```
Name: STRIPE_PUBLISHABLE_KEY
Value: pk_test_YOUR_PUBLISHABLE_KEY_FROM_STRIPE
```

### 4.3 Save and Redeploy
1. After adding variables, Railway should automatically redeploy
2. If not, click **"Deploy"** button

---

## STEP 5: Get Your Railway URL

### 5.1 Find Your Deployment URL
1. In Railway dashboard, go to **"Settings"** tab
2. Scroll down to **"Domains"**
3. You'll see a URL like: `https://your-app-name.up.railway.app`
4. **COPY THIS URL**

### 5.2 Update Your Webhook URL in Stripe
1. Go back to Stripe Dashboard > Webhooks
2. Click on your webhook endpoint
3. Click **"Edit"**
4. Update the URL to: `https://your-railway-url.up.railway.app/webhook`
5. Click **"Update endpoint"**

---

## STEP 6: Test Your Deployment

### 6.1 Basic Test
1. Open your Railway URL in a browser
2. You should see your game interface
3. Check browser console (F12) for any errors

### 6.2 Test Webhook Endpoint
```bash
# Replace with your actual Railway URL
curl -X POST https://your-railway-url.up.railway.app/webhook
```
Expected response: `{"received":true}`

### 6.3 Check Railway Logs
1. In Railway dashboard, go to **"Deployments"** tab
2. Click on the latest deployment
3. Check logs for any errors

---

## STEP 7: Update Frontend URLs (If Needed)

### 7.1 Update CORS Origins in server.js
If you want to deploy the frontend separately, update the CORS origins:

```javascript
// In server.js, line 16-21
origin: [
    'https://your-frontend-domain.com',
    'https://your-railway-url.up.railway.app',
    'http://localhost:8080',
    'http://localhost:3000'
]
```

---

## TROUBLESHOOTING

### If Build Fails:
1. Check Railway logs in **"Deployments"** tab
2. Verify all environment variables are set
3. Make sure `package.json` has all dependencies

### If Server Starts but Crashes:
1. Check for missing environment variables
2. Verify Stripe keys are correct
3. Check Railway logs for specific error messages

### If Webhook Fails:
1. Verify webhook URL in Stripe matches Railway URL
2. Check webhook secret is correct
3. Test webhook endpoint with curl

### Common Errors:
- **"Cannot read property of undefined"**: Missing environment variable
- **"Stripe key invalid"**: Wrong Stripe key format
- **"Webhook signature verification failed"**: Wrong webhook secret

---

## SUCCESS CHECKLIST

✅ Stripe keys obtained and saved
✅ Railway project created and connected
✅ Environment variables set in Railway
✅ Deployment successful (no errors in logs)
✅ Railway URL accessible in browser
✅ Webhook URL updated in Stripe
✅ Basic functionality tested

Your game should now be deployed and accessible!
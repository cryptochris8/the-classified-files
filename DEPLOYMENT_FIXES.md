# Railway Deployment Fixes

## Issues Fixed:

1. **Webhook Middleware Order**: Moved webhook endpoint before body parsing middleware to prevent body corruption
2. **Package Manager Consistency**: Updated nixpacks.toml to use `npm install` instead of `npm ci`
3. **Start Command Alignment**: Both railway.json and nixpacks.toml now use `node server.js`

## Required Environment Variables in Railway:

Set these in your Railway project settings:

```
STRIPE_SECRET_KEY=sk_test_YOUR_ACTUAL_SECRET_KEY
STRIPE_WEBHOOK_SECRET=whsec_YOUR_WEBHOOK_SECRET
NODE_ENV=production
```

## Optional Environment Variables:
```
PORT=3000 (Railway sets this automatically)
STRIPE_PRICE_EPSTEIN=price_YOUR_EPSTEIN_PRICE_ID
STRIPE_PRICE_JFK=price_YOUR_JFK_PRICE_ID
# ... (add others as needed)
```

## Next Steps:

1. Set environment variables in Railway dashboard
2. Remove bun.lock file if using npm: `rm bun.lock`
3. Commit and redeploy
4. Test webhook endpoint: `curl -X POST https://your-railway-url.up.railway.app/webhook`

## Common Railway Deployment Errors:

- **Environment Variables Missing**: Check Railway dashboard → Variables tab
- **Port Binding**: Ensure server uses `process.env.PORT`
- **Build Timeouts**: Large story files may cause build timeouts
- **Static File Serving**: Verify `express.static('.')` works for your file structure
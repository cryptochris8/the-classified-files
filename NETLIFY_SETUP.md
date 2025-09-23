# Netlify Deployment Setup

This document explains how to deploy "The Classified Files" game to Netlify for production.

## Quick Deployment Steps

### 1. Connect Repository to Netlify
1. Go to [netlify.com](https://netlify.com) and log in
2. Click "New site from Git"
3. Choose GitHub and select this repository
4. Netlify will auto-detect the settings from `netlify.toml`

### 2. Environment Variables (Optional)
Since we're using a static site with client-side code, most configuration is already in the files. However, you can set environment variables in Netlify UI if needed for future features.

### 3. Custom Domain (Recommended)
1. In Netlify dashboard, go to "Domain management"
2. Add your custom domain (e.g., `declassified-files.com`)
3. Update the redirect rules in `netlify.toml` if needed
4. Netlify will automatically provision SSL certificates

### 4. Build & Deploy Settings
The `netlify.toml` file already configures:
-  Build settings (static site, no build command needed)
-  Security headers
-  Caching rules for performance
-  Content Security Policy for Stripe integration

## Current Configuration

### Files Created:
- `netlify.toml` - Main Netlify configuration
- `_redirects` - URL redirect rules
- `payment-config.js` - Updated to work with any domain

### Features Enabled:
-  Security headers (XSS protection, etc.)
-  Content Security Policy allowing Stripe
-  Performance optimization (caching)
-  Ready for custom domain
-  Automatic Railway server detection

## Payment System Compatibility

The payment system is configured to work seamlessly with Netlify:
- Frontend served from Netlify (static files)
- Backend API served from Railway (Stripe integration)
- Automatic environment detection
- CORS properly configured

## Recommended Domains

Consider these professional domain options:
- `declassified-files.com`
- `the-classified-files.com`
- `declassified-game.com`
- `classified-investigations.com`

## Performance Features

The Netlify setup includes:
- CDN distribution worldwide
- Automatic image optimization
- Gzip compression
- Aggressive caching for static assets
- Security headers for protection

## Next Steps After Deployment

1. Test the payment flow on the live Netlify site
2. Configure custom domain if desired
3. Set up monitoring and analytics
4. Consider adding contact forms using Netlify Forms

## Support

If you encounter issues:
1. Check Netlify deploy logs
2. Verify Railway server is running
3. Test payment flow in browser dev tools
4. Check CSP headers aren't blocking resources

The game should work identically to the GitHub Pages version but with better performance and professional hosting.
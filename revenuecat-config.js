/**
 * RevenueCat Configuration
 *
 * For local development, this file contains a placeholder.
 * During Codemagic builds, this file is overwritten with the real API key.
 *
 * To test locally with RevenueCat:
 * 1. Get your iOS API key from RevenueCat dashboard
 * 2. Replace the placeholder below (DO NOT commit the real key!)
 */

window.REVENUECAT_IOS_API_KEY = 'YOUR_REVENUECAT_IOS_API_KEY';

console.log('[RevenueCat] Config loaded (key configured:', window.REVENUECAT_IOS_API_KEY !== 'YOUR_REVENUECAT_IOS_API_KEY', ')');

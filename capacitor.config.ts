import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.declassified.game',
  appName: 'Declassified',
  webDir: 'dist',

  // Server configuration for WebView
  server: {
    // Use https scheme for better compatibility
    androidScheme: 'https',
    iosScheme: 'https',
    // Allow navigation to external payment URLs
    allowNavigation: [
      'https://checkout.stripe.com',
      'https://api.stripe.com',
      'https://the-classified-files-production-1c78.up.railway.app'
    ]
  },

  // Plugin configurations
  plugins: {
    // Capacitor Purchases (RevenueCat) plugin config
    CapacitorPurchases: {
      // API keys are set at runtime in apple-iap-provider.js
    }
  },

  // iOS-specific configuration
  ios: {
    // Use WKWebView's localStorage which persists across app launches
    contentInset: 'automatic',
    // Allow inline media playback
    allowsLinkPreview: false,
    // Scroll behavior
    scrollEnabled: true
  }
};

export default config;

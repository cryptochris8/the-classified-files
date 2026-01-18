/**
 * Platform Detection Utility
 * Detects if the app is running in Capacitor (iOS/Android) or web browser
 */

class PlatformDetection {
  constructor() {
    this.isCapacitor = typeof window !== 'undefined' && window.Capacitor !== undefined;
    this.isIOS = this.isCapacitor && window.Capacitor.getPlatform() === 'ios';
    this.isAndroid = this.isCapacitor && window.Capacitor.getPlatform() === 'android';
    this.isWeb = !this.isCapacitor;
  }

  /**
   * Check if running as native app (iOS or Android)
   */
  isNativeApp() {
    return this.isCapacitor;
  }

  /**
   * Check if running in web browser
   */
  isWebBrowser() {
    return this.isWeb;
  }

  /**
   * Check if running on iOS app
   */
  isiOSApp() {
    return this.isIOS;
  }

  /**
   * Check if running on Android app
   */
  isAndroidApp() {
    return this.isAndroid;
  }

  /**
   * Get platform name
   */
  getPlatform() {
    if (this.isIOS) return 'ios';
    if (this.isAndroid) return 'android';
    return 'web';
  }

  /**
   * Determine which payment system to use
   */
  getPaymentSystem() {
    if (this.isIOS || this.isAndroid) {
      return 'iap'; // In-App Purchase
    }
    return 'stripe'; // Web-based Stripe
  }

  /**
   * Log platform info for debugging
   */
  logPlatformInfo() {
    console.log('Platform Detection:', {
      platform: this.getPlatform(),
      isCapacitor: this.isCapacitor,
      isIOS: this.isIOS,
      isAndroid: this.isAndroid,
      isWeb: this.isWeb,
      paymentSystem: this.getPaymentSystem()
    });
  }
}

// Create global instance
const platformDetection = new PlatformDetection();

// Log on initialization (helpful for debugging)
if (typeof console !== 'undefined') {
  platformDetection.logPlatformInfo();
}

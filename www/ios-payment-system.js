/**
 * iOS In-App Purchase System
 * Handles Apple IAP for premium case purchases
 *
 * NOTE: This requires the @revenuecat/purchases-capacitor plugin to be installed
 * and configured with your App Store Connect In-App Purchase products.
 */

class iOSPaymentSystem {
  constructor() {
    this.initialized = false;
    this.products = {};
    this.purchases = new Set(); // Track purchased product IDs

    // Product IDs must match App Store Connect configuration
    this.productIds = {
      'epstein': 'com.declassified.game.epstein',
      'jfk': 'com.declassified.game.jfk',
      'watergate': 'com.declassified.game.watergate',
      'mkultra': 'com.declassified.game.mkultra',
      'cointelpro': 'com.declassified.game.cointelpro',
      'pentagon-papers': 'com.declassified.game.pentagonpapers',
      'iran-contra': 'com.declassified.game.irancontra',
      'tuskegee': 'com.declassified.game.tuskegee',
      'operation-paperclip': 'com.declassified.game.paperclip',
      'snowden': 'com.declassified.game.snowden',
      'panama-papers': 'com.declassified.game.panamapapers',
      'hunter-biden': 'com.declassified.game.hunterbiden',
      'diddy': 'com.declassified.game.diddy',
      'bolivia': 'com.declassified.game.bolivia'
    };
  }

  /**
   * Initialize IAP system
   */
  async initialize() {
    if (this.initialized) return;

    try {
      // Check if running on iOS
      if (!platformDetection.isiOSApp()) {
        console.log('Not running on iOS, skipping IAP initialization');
        return;
      }

      // Check if RevenueCat Purchases plugin is available
      if (!window.Capacitor || !window.Capacitor.Plugins || !window.Capacitor.Plugins.Purchases) {
        console.warn('RevenueCat Purchases plugin not found. Install @revenuecat/purchases-capacitor');
        return;
      }

      const { Purchases } = window.Capacitor.Plugins;

      // Initialize the plugin with your RevenueCat API key
      // NOTE: You'll need to sign up for RevenueCat (free tier available)
      // and get your API key from https://app.revenuecat.com
      // Replace 'YOUR_REVENUECAT_API_KEY' with your actual key
      await Purchases.configure({
        apiKey: 'YOUR_REVENUECAT_API_KEY',
        appUserID: this.getOrCreateUserID()
      });

      // Load available products
      await this.loadProducts();

      // Restore previous purchases
      await this.restorePurchases();

      this.initialized = true;
      console.log('iOS IAP system initialized with RevenueCat');
    } catch (error) {
      console.error('Failed to initialize iOS IAP:', error);
    }
  }

  /**
   * Get or create anonymous user ID
   */
  getOrCreateUserID() {
    let userId = localStorage.getItem('declassified_user_id');
    if (!userId) {
      userId = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
      localStorage.setItem('declassified_user_id', userId);
    }
    return userId;
  }

  /**
   * Load available products from App Store
   */
  async loadProducts() {
    try {
      if (!window.Capacitor?.Plugins?.Purchases) return;

      const { Purchases } = window.Capacitor.Plugins;
      const productIdArray = Object.values(this.productIds);

      const result = await Purchases.getProducts({
        productIdentifiers: productIdArray,
        type: 'inapp'
      });

      if (result.products) {
        result.products.forEach(product => {
          this.products[product.identifier] = product;
        });
        console.log('Loaded IAP products:', Object.keys(this.products).length);
      }
    } catch (error) {
      console.error('Failed to load products:', error);
    }
  }

  /**
   * Purchase a specific case
   */
  async purchaseCase(caseKey) {
    try {
      const productId = this.productIds[caseKey];
      if (!productId) {
        throw new Error(`No product ID found for case: ${caseKey}`);
      }

      if (!window.Capacitor?.Plugins?.Purchases) {
        alert('In-App Purchases not available. Please update the app.');
        return false;
      }

      const { Purchases } = window.Capacitor.Plugins;

      // Show loading indicator
      console.log(`Purchasing ${caseKey}...`);

      // Get the product to purchase
      const product = this.products[productId];
      if (!product) {
        throw new Error(`Product not loaded: ${productId}`);
      }

      // Make the purchase
      const result = await Purchases.purchaseStoreProduct({
        product: product
      });

      if (result.customerInfo && result.customerInfo.entitlements.active) {
        // Purchase successful
        this.purchases.add(productId);
        this.savePurchaseLocally(caseKey);
        console.log(`Successfully purchased ${caseKey}`);
        return true;
      }

      return false;
    } catch (error) {
      console.error(`Purchase failed for ${caseKey}:`, error);

      // Handle user cancellation
      if (error.code === '1' || error.message?.includes('cancel')) {
        console.log('User cancelled purchase');
        return false;
      }

      alert('Purchase failed. Please try again.');
      return false;
    }
  }

  /**
   * Restore previous purchases
   */
  async restorePurchases() {
    try {
      if (!window.Capacitor?.Plugins?.Purchases) return;

      const { Purchases } = window.Capacitor.Plugins;

      const result = await Purchases.restorePurchases();

      if (result.customerInfo && result.customerInfo.entitlements.active) {
        // Mark all purchased products as owned
        Object.keys(this.productIds).forEach(caseKey => {
          const productId = this.productIds[caseKey];
          if (result.customerInfo.entitlements.active[caseKey]) {
            this.purchases.add(productId);
            this.savePurchaseLocally(caseKey);
          }
        });

        console.log('Restored purchases:', this.purchases.size);
      }
    } catch (error) {
      console.error('Failed to restore purchases:', error);
    }
  }

  /**
   * Check if a case has been purchased
   */
  hasPurchased(caseKey) {
    // Check local storage first
    const localPurchases = localStorage.getItem('purchased_cases');
    if (localPurchases) {
      const purchased = JSON.parse(localPurchases);
      if (purchased.includes(caseKey)) {
        return true;
      }
    }

    // Check in-memory purchases
    const productId = this.productIds[caseKey];
    return this.purchases.has(productId);
  }

  /**
   * Save purchase to local storage (for offline access)
   */
  savePurchaseLocally(caseKey) {
    try {
      let purchases = [];
      const stored = localStorage.getItem('purchased_cases');
      if (stored) {
        purchases = JSON.parse(stored);
      }

      if (!purchases.includes(caseKey)) {
        purchases.push(caseKey);
        localStorage.setItem('purchased_cases', JSON.stringify(purchases));
      }
    } catch (error) {
      console.error('Failed to save purchase locally:', error);
    }
  }

  /**
   * Get price for a case (formatted string)
   */
  getPrice(caseKey) {
    const productId = this.productIds[caseKey];
    const product = this.products[productId];

    if (product && product.priceString) {
      return product.priceString;
    }

    return '$4.99'; // Fallback price
  }
}

// Create global instance (only on iOS)
let iosPaymentSystem = null;
if (typeof platformDetection !== 'undefined' && platformDetection.isiOSApp()) {
  iosPaymentSystem = new iOSPaymentSystem();

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      iosPaymentSystem.initialize();
    });
  } else {
    iosPaymentSystem.initialize();
  }
}

/**
 * Apple In-App Purchase Provider for iOS
 * Uses capacitor-purchases (RevenueCat SDK) for IAP management
 *
 * RevenueCat handles:
 * - Receipt validation
 * - Entitlement management
 * - Cross-platform purchase sync
 * - Analytics and insights
 */

class AppleIAPProvider {
    constructor() {
        this.purchases = null;
        this.products = [];
        this.offerings = null;
        this.initialized = false;

        // RevenueCat API key - set this in your environment or config
        // Get this from RevenueCat dashboard after creating your project
        this.apiKey = window.REVENUECAT_IOS_API_KEY || 'YOUR_REVENUECAT_IOS_API_KEY';
    }

    /**
     * Initialize RevenueCat SDK
     */
    async initialize() {
        if (this.initialized) return;

        try {
            // Dynamic import of RevenueCat Purchases SDK
            const { Purchases } = await import('@revenuecat/purchases-capacitor');
            this.purchases = Purchases;

            // Check if API key is configured
            if (this.apiKey === 'YOUR_REVENUECAT_IOS_API_KEY') {
                console.warn('[AppleIAPProvider] RevenueCat API key not configured');
                console.warn('[AppleIAPProvider] Set window.REVENUECAT_IOS_API_KEY before initializing');
            }

            // Configure RevenueCat
            await this.purchases.configure({
                apiKey: this.apiKey,
            });

            console.log('[AppleIAPProvider] RevenueCat configured');

            // Load available products
            await this.loadProducts();

            this.initialized = true;
            console.log('[AppleIAPProvider] Initialization complete');

        } catch (error) {
            console.error('[AppleIAPProvider] Initialization failed:', error);
            throw error;
        }
    }

    /**
     * Load available products from App Store via RevenueCat
     */
    async loadProducts() {
        try {
            this.offerings = await this.purchases.getOfferings();

            if (this.offerings.current) {
                this.products = this.offerings.current.availablePackages || [];
                console.log('[AppleIAPProvider] Loaded', this.products.length, 'products');
            } else {
                console.warn('[AppleIAPProvider] No current offering available');
                this.products = [];
            }

        } catch (error) {
            console.error('[AppleIAPProvider] Failed to load products:', error);
            this.products = [];
        }
    }

    /**
     * Get all available products
     * @returns {Array<{id: string, productId: string, price: string, title: string, description: string}>}
     */
    async getProducts() {
        return this.products.map(pkg => ({
            id: this.productIdToCaseKey(pkg.product.identifier),
            productId: pkg.product.identifier,
            price: pkg.product.priceString,
            priceValue: pkg.product.price,
            currency: pkg.product.currencyCode,
            title: pkg.product.title,
            description: pkg.product.description,
            package: pkg // Keep reference for purchase
        }));
    }

    /**
     * Purchase a specific case
     * @param {string} caseKey - e.g., 'epstein', 'jfk'
     * @returns {Promise<{success: boolean, caseKey?: string, error?: string, cancelled?: boolean}>}
     */
    async purchaseProduct(caseKey) {
        const productId = this.caseKeyToProductId(caseKey);

        console.log('[AppleIAPProvider] Purchasing:', caseKey, '→', productId);

        // Find the product package
        const productInfo = this.products.find(
            p => p.product.identifier === productId
        );

        if (!productInfo) {
            console.error('[AppleIAPProvider] Product not found:', productId);
            throw new Error(`Product not found: ${productId}`);
        }

        try {
            // Initiate purchase through RevenueCat
            const { customerInfo } = await this.purchases.purchasePackage({
                aPackage: productInfo
            });

            console.log('[AppleIAPProvider] Purchase response received');

            // Check if the entitlement is now active
            const entitlementId = this.caseKeyToEntitlementId(caseKey);
            const entitlement = customerInfo.entitlements.active[entitlementId];

            if (entitlement) {
                console.log('[AppleIAPProvider] Entitlement granted:', entitlementId);
                return {
                    success: true,
                    caseKey: caseKey,
                    entitlement: entitlement
                };
            }

            // Also check by case key directly (alternate entitlement naming)
            if (customerInfo.entitlements.active[caseKey]) {
                console.log('[AppleIAPProvider] Entitlement granted (direct):', caseKey);
                return {
                    success: true,
                    caseKey: caseKey
                };
            }

            console.warn('[AppleIAPProvider] Purchase completed but entitlement not found');
            return {
                success: false,
                error: 'Purchase completed but entitlement not activated. Please contact support.'
            };

        } catch (error) {
            console.error('[AppleIAPProvider] Purchase error:', error);

            // Check for user cancellation
            if (error.code === 'PURCHASE_CANCELLED' ||
                error.code === 1 ||
                error.message?.includes('cancelled') ||
                error.message?.includes('canceled')) {
                return {
                    success: false,
                    cancelled: true
                };
            }

            throw error;
        }
    }

    /**
     * Restore previous purchases
     * @returns {Promise<string[]>} - Array of restored case keys
     */
    async restorePurchases() {
        console.log('[AppleIAPProvider] Restoring purchases...');

        try {
            const { customerInfo } = await this.purchases.restorePurchases();
            const restoredCases = [];

            // Check all active entitlements
            for (const [entitlementId, entitlement] of Object.entries(
                customerInfo.entitlements.active
            )) {
                const caseKey = this.entitlementIdToCaseKey(entitlementId);
                if (caseKey) {
                    restoredCases.push(caseKey);
                    console.log('[AppleIAPProvider] Restored:', caseKey);
                }
            }

            console.log('[AppleIAPProvider] Total restored:', restoredCases.length);
            return restoredCases;

        } catch (error) {
            console.error('[AppleIAPProvider] Restore failed:', error);
            throw error;
        }
    }

    /**
     * Check current entitlements (already purchased items)
     * @returns {Promise<string[]>} - Array of entitled case keys
     */
    async checkEntitlements() {
        try {
            const { customerInfo } = await this.purchases.getCustomerInfo();
            const entitledCases = [];

            for (const entitlementId of Object.keys(customerInfo.entitlements.active)) {
                const caseKey = this.entitlementIdToCaseKey(entitlementId);
                if (caseKey) {
                    entitledCases.push(caseKey);
                }
            }

            return entitledCases;
        } catch (error) {
            console.error('[AppleIAPProvider] Failed to check entitlements:', error);
            return [];
        }
    }

    // ========== Helper Methods ==========

    /**
     * Convert case key to App Store product ID
     * Format: com.declassified.case.{normalized_key}
     * @param {string} caseKey - e.g., 'iran-contra'
     * @returns {string} - e.g., 'com.declassified.case.iran_contra'
     */
    caseKeyToProductId(caseKey) {
        const normalized = caseKey.replace(/-/g, '_');
        return `com.declassified.case.${normalized}`;
    }

    /**
     * Convert App Store product ID to case key
     * @param {string} productId - e.g., 'com.declassified.case.iran_contra'
     * @returns {string} - e.g., 'iran-contra'
     */
    productIdToCaseKey(productId) {
        return productId
            .replace('com.declassified.case.', '')
            .replace(/_/g, '-');
    }

    /**
     * Convert case key to RevenueCat entitlement ID
     * @param {string} caseKey
     * @returns {string}
     */
    caseKeyToEntitlementId(caseKey) {
        // Entitlements in RevenueCat can be named anything
        // Common pattern: {case_key}_access
        return `${caseKey.replace(/-/g, '_')}_access`;
    }

    /**
     * Convert RevenueCat entitlement ID to case key
     * @param {string} entitlementId
     * @returns {string|null}
     */
    entitlementIdToCaseKey(entitlementId) {
        // Remove _access suffix if present
        const key = entitlementId.replace(/_access$/, '').replace(/_/g, '-');

        // Validate it's a known case
        const knownCases = [
            'epstein', 'jfk', 'september11', 'watergate',
            'pentagon-papers', 'mkultra', 'panama-papers',
            'iran-contra', 'cointelpro', 'snowden',
            'tuskegee', 'paperclip', 'diddy-case', 'charlie-kirk'
        ];

        return knownCases.includes(key) ? key : null;
    }
}

// Make available globally
window.AppleIAPProvider = AppleIAPProvider;

console.log('[AppleIAPProvider] Module loaded');

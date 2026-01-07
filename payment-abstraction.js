/**
 * Payment Abstraction Layer
 * Routes to Stripe (web) or Apple IAP (iOS) based on platform
 *
 * This layer provides a unified interface for payments regardless of platform.
 * Web users get Stripe checkout, iOS app users get Apple In-App Purchase.
 */

class PaymentAbstraction {
    constructor() {
        this.platform = this.detectPlatform();
        this.provider = null;
        this.initialized = false;
        this.initPromise = null;
    }

    /**
     * Detect current platform
     * @returns {'web' | 'ios' | 'android'}
     */
    detectPlatform() {
        // Capacitor provides window.Capacitor when running in native app
        if (typeof window !== 'undefined' && window.Capacitor?.isNativePlatform()) {
            const platform = window.Capacitor.getPlatform();
            console.log('[PaymentAbstraction] Detected native platform:', platform);
            return platform; // 'ios' or 'android'
        }
        console.log('[PaymentAbstraction] Detected web platform');
        return 'web';
    }

    /**
     * Initialize the appropriate payment provider
     * @returns {Promise<void>}
     */
    async initialize() {
        // Prevent multiple initializations
        if (this.initialized) return;
        if (this.initPromise) return this.initPromise;

        this.initPromise = this._doInitialize();
        return this.initPromise;
    }

    async _doInitialize() {
        try {
            switch (this.platform) {
                case 'ios':
                    if (typeof AppleIAPProvider !== 'undefined') {
                        this.provider = new AppleIAPProvider();
                        console.log('[PaymentAbstraction] Using Apple IAP provider');
                    } else {
                        console.warn('[PaymentAbstraction] AppleIAPProvider not loaded, falling back to Stripe');
                        this.provider = new StripeProvider();
                    }
                    break;
                case 'android':
                    // Future: Google Play Billing
                    console.log('[PaymentAbstraction] Android platform - using Stripe for now');
                    this.provider = new StripeProvider();
                    break;
                default:
                    this.provider = new StripeProvider();
                    console.log('[PaymentAbstraction] Using Stripe provider');
            }

            await this.provider.initialize();
            this.initialized = true;
            console.log('[PaymentAbstraction] Initialization complete');
        } catch (error) {
            console.error('[PaymentAbstraction] Initialization failed:', error);
            throw error;
        }
    }

    /**
     * Get all available products
     * @returns {Promise<Array<{id: string, price: number, title: string}>>}
     */
    async getProducts() {
        await this.initialize();
        return this.provider.getProducts();
    }

    /**
     * Purchase a specific case
     * @param {string} caseKey - e.g., 'epstein', 'jfk', 'iran-contra'
     * @returns {Promise<{success: boolean, caseKey?: string, error?: string, cancelled?: boolean}>}
     */
    async purchaseCase(caseKey) {
        await this.initialize();

        console.log('[PaymentAbstraction] Initiating purchase for:', caseKey);

        try {
            const result = await this.provider.purchaseProduct(caseKey);

            if (result.success) {
                this.markAsPurchased(caseKey);
                console.log('[PaymentAbstraction] Purchase successful:', caseKey);
            }

            return result;
        } catch (error) {
            console.error('[PaymentAbstraction] Purchase failed:', error);
            return { success: false, error: error.message };
        }
    }

    /**
     * Restore previous purchases (mainly for iOS)
     * @returns {Promise<string[]>} - Array of restored case keys
     */
    async restorePurchases() {
        await this.initialize();

        console.log('[PaymentAbstraction] Restoring purchases...');

        try {
            const restoredCases = await this.provider.restorePurchases();

            // Mark all restored cases as purchased
            restoredCases.forEach(caseKey => {
                this.markAsPurchased(caseKey);
            });

            console.log('[PaymentAbstraction] Restored cases:', restoredCases);
            return restoredCases;
        } catch (error) {
            console.error('[PaymentAbstraction] Restore failed:', error);
            return [];
        }
    }

    /**
     * Check if a case has been purchased
     * @param {string} caseKey
     * @returns {boolean}
     */
    hasPurchased(caseKey) {
        const purchases = this.getPurchasedCases();
        return purchases.includes(caseKey);
    }

    /**
     * Get all purchased case keys
     * @returns {string[]}
     */
    getPurchasedCases() {
        try {
            const stored = localStorage.getItem('classifiedFiles_purchasedCases');
            return stored ? JSON.parse(stored) : [];
        } catch (error) {
            console.error('[PaymentAbstraction] Error reading purchases:', error);
            return [];
        }
    }

    /**
     * Mark a case as purchased (stores in localStorage)
     * @param {string} caseKey
     */
    markAsPurchased(caseKey) {
        try {
            const purchases = this.getPurchasedCases();

            if (!purchases.includes(caseKey)) {
                purchases.push(caseKey);
                localStorage.setItem(
                    'classifiedFiles_purchasedCases',
                    JSON.stringify(purchases)
                );
                console.log('[PaymentAbstraction] Marked as purchased:', caseKey);
            }
        } catch (error) {
            console.error('[PaymentAbstraction] Error saving purchase:', error);
        }
    }

    /**
     * Check if the payment system is available
     * @returns {boolean}
     */
    isAvailable() {
        return this.initialized && this.provider !== null;
    }

    /**
     * Get the current platform
     * @returns {string}
     */
    getPlatform() {
        return this.platform;
    }

    /**
     * Check if running on iOS (for showing restore button, etc.)
     * @returns {boolean}
     */
    isIOS() {
        return this.platform === 'ios';
    }
}

// Make available globally
window.PaymentAbstraction = PaymentAbstraction;

// Create singleton instance
window.paymentAbstraction = new PaymentAbstraction();

console.log('[PaymentAbstraction] Module loaded, platform:', window.paymentAbstraction.platform);

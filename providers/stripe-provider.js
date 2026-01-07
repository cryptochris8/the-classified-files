/**
 * Stripe Payment Provider for Web
 * Wraps the existing Stripe checkout functionality
 */

class StripeProvider {
    constructor() {
        this.stripe = null;
        this.products = {};
        this.initialized = false;
    }

    /**
     * Initialize Stripe with the publishable key
     */
    async initialize() {
        if (this.initialized) return;

        // Use existing Stripe key from stripe-prices.js
        if (window.STRIPE_PUBLISHABLE_KEY && typeof Stripe !== 'undefined') {
            this.stripe = Stripe(window.STRIPE_PUBLISHABLE_KEY);
            console.log('[StripeProvider] Stripe initialized');
        } else {
            console.warn('[StripeProvider] Stripe not available - key or library missing');
        }

        // Map case keys to Stripe price IDs from existing config
        this.products = window.StripePrices || {};
        this.initialized = true;

        console.log('[StripeProvider] Products loaded:', Object.keys(this.products).length);
    }

    /**
     * Get all available products
     * @returns {Array<{id: string, priceId: string, price: number, currency: string, title: string}>}
     */
    async getProducts() {
        return Object.entries(this.products).map(([key, priceId]) => ({
            id: key,
            priceId: priceId,
            price: 4.99,
            currency: 'USD',
            title: this.getCaseTitle(key)
        }));
    }

    /**
     * Initiate purchase for a specific case
     * @param {string} caseKey
     * @returns {Promise<{success: boolean, pending?: boolean, error?: string}>}
     */
    async purchaseProduct(caseKey) {
        const priceId = this.products[caseKey];

        if (!priceId) {
            console.error('[StripeProvider] No price ID for case:', caseKey);
            throw new Error(`No price found for case: ${caseKey}`);
        }

        if (!this.stripe) {
            throw new Error('Stripe not initialized');
        }

        console.log('[StripeProvider] Creating checkout session for:', caseKey, priceId);

        // Get server URL from existing config
        const serverUrl = this.getServerUrl();

        try {
            const response = await fetch(serverUrl + '/create-checkout-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    priceId: priceId,
                    caseKey: caseKey,
                    successUrl: window.location.origin + '/payment-success.html?case=' + caseKey,
                    cancelUrl: window.location.origin + '/payment-cancel.html?case=' + caseKey
                })
            });

            if (!response.ok) {
                throw new Error('Failed to create checkout session');
            }

            const session = await response.json();

            if (session.error) {
                throw new Error(session.error);
            }

            console.log('[StripeProvider] Redirecting to Stripe checkout');

            // Redirect to Stripe Checkout
            const result = await this.stripe.redirectToCheckout({
                sessionId: session.sessionId || session.id
            });

            if (result.error) {
                throw new Error(result.error.message);
            }

            // If we get here, redirect is happening
            return { success: true, pending: true };

        } catch (error) {
            console.error('[StripeProvider] Checkout failed:', error);
            throw error;
        }
    }

    /**
     * Restore purchases (check existing tokens/localStorage)
     * @returns {Promise<string[]>}
     */
    async restorePurchases() {
        // On web, we check localStorage and optionally validate with server
        const purchases = [];

        // Check for purchase token (JWT from server)
        const token = localStorage.getItem('purchaseToken');
        if (token) {
            try {
                const serverUrl = this.getServerUrl();
                const response = await fetch(serverUrl + '/validate-purchase', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ token })
                });

                if (response.ok) {
                    const result = await response.json();
                    if (result.valid && result.unlockedCases) {
                        purchases.push(...result.unlockedCases);
                    }
                }
            } catch (error) {
                console.warn('[StripeProvider] Token validation failed:', error);
            }
        }

        // Also check localStorage for previously purchased cases
        try {
            const stored = localStorage.getItem('classifiedFiles_purchasedCases');
            if (stored) {
                const storedPurchases = JSON.parse(stored);
                storedPurchases.forEach(caseKey => {
                    if (!purchases.includes(caseKey)) {
                        purchases.push(caseKey);
                    }
                });
            }
        } catch (error) {
            console.warn('[StripeProvider] Failed to read stored purchases:', error);
        }

        return purchases;
    }

    /**
     * Get the payment server URL
     * @returns {string}
     */
    getServerUrl() {
        // Use existing PaymentConfig if available
        if (window.PaymentConfig?.SERVER_URL) {
            return window.PaymentConfig.SERVER_URL;
        }

        // Default to Railway production server
        return 'https://the-classified-files-production-1c78.up.railway.app';
    }

    /**
     * Get human-readable title for a case key
     * @param {string} key
     * @returns {string}
     */
    getCaseTitle(key) {
        const titles = {
            'epstein': 'Epstein Investigation',
            'jfk': 'JFK Assassination Files',
            'september11': '9/11 Commission Files',
            'watergate': 'Watergate Files',
            'pentagon-papers': 'Pentagon Papers',
            'mkultra': 'MKUltra Files',
            'panama-papers': 'Panama Papers',
            'iran-contra': 'Iran-Contra Affair',
            'cointelpro': 'COINTELPRO Files',
            'snowden': 'Snowden Revelations',
            'tuskegee': 'Tuskegee Experiment',
            'paperclip': 'Operation Paperclip',
            'diddy-case': 'Diddy Federal Case',
            'charlie-kirk': 'Charlie Kirk Assassination',
            'hunterlaptop': 'Hunter Biden Laptop',
            'uap': 'UAP Investigation'
        };
        return titles[key] || key.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    }
}

// Make available globally
window.StripeProvider = StripeProvider;

console.log('[StripeProvider] Module loaded');

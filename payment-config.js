// Payment Configuration
// This file handles Stripe integration and payment processing

class PaymentManager {
    constructor() {
        // Initialize Stripe (will be loaded from CDN)
        this.stripe = null;
        this.isProduction = window.location.hostname !== 'localhost' &&
                           window.location.hostname !== '127.0.0.1';

        // Product configurations with prices and Stripe price IDs
        this.products = {
            epstein: {
                name: "Epstein Investigation",
                price: 4.99,
                description: "Access the classified Epstein investigation files",
                priceId: this.isProduction ? 'price_live_epstein' : 'price_test_epstein'
            },
            jfk: {
                name: "JFK Assassination Files",
                price: 4.99,
                description: "Declassified documents from the JFK assassination investigation",
                priceId: this.isProduction ? 'price_live_jfk' : 'price_test_jfk'
            },
            september11: {
                name: "9/11 Commission Investigation",
                price: 4.99,
                description: "Classified 9/11 investigation documents and testimonies",
                priceId: this.isProduction ? 'price_live_september11' : 'price_test_september11'
            },
            hunterlaptop: {
                name: "Hunter Biden Laptop Investigation",
                price: 4.99,
                description: "Forensic analysis of the Hunter Biden laptop controversy",
                priceId: this.isProduction ? 'price_live_hunterlaptop' : 'price_test_hunterlaptop'
            },
            watergate: {
                name: "Watergate Files",
                price: 4.99,
                description: "Complete Watergate scandal investigation documents",
                priceId: this.isProduction ? 'price_live_watergate' : 'price_test_watergate'
            },
            'pentagon-papers': {
                name: "Pentagon Papers",
                price: 4.99,
                description: "The classified Pentagon Papers leak investigation",
                priceId: this.isProduction ? 'price_live_pentagon_papers' : 'price_test_pentagon_papers'
            },
            mkultra: {
                name: "MKUltra Files",
                price: 4.99,
                description: "Declassified CIA MKUltra mind control experiments",
                priceId: this.isProduction ? 'price_live_mkultra' : 'price_test_mkultra'
            },
            'panama-papers': {
                name: "Panama Papers",
                price: 4.99,
                description: "International financial corruption investigation",
                priceId: this.isProduction ? 'price_live_panama_papers' : 'price_test_panama_papers'
            },
            'iran-contra': {
                name: "Iran-Contra Affair",
                price: 4.99,
                description: "Reagan administration scandal investigation files",
                priceId: this.isProduction ? 'price_live_iran_contra' : 'price_test_iran_contra'
            },
            cointelpro: {
                name: "COINTELPRO Files",
                price: 4.99,
                description: "FBI surveillance and infiltration program documents",
                priceId: this.isProduction ? 'price_live_cointelpro' : 'price_test_cointelpro'
            },
            snowden: {
                name: "Snowden Revelations",
                price: 4.99,
                description: "NSA surveillance program leaked documents",
                priceId: this.isProduction ? 'price_live_snowden' : 'price_test_snowden'
            },
            tuskegee: {
                name: "Tuskegee Experiment",
                price: 4.99,
                description: "Unethical medical experiment investigation files",
                priceId: this.isProduction ? 'price_live_tuskegee' : 'price_test_tuskegee'
            },
            paperclip: {
                name: "Operation Paperclip",
                price: 4.99,
                description: "Nazi scientist recruitment program documents",
                priceId: this.isProduction ? 'price_live_paperclip' : 'price_test_paperclip'
            },
            diddy: {
                name: "Diddy Federal Case",
                price: 4.99,
                description: "Federal RICO investigation files and evidence",
                priceId: this.isProduction ? 'price_live_diddy' : 'price_test_diddy'
            },
            'diddy-case': {
                name: "Diddy Federal Case",
                price: 4.99,
                description: "Federal RICO investigation files and evidence",
                priceId: this.isProduction ? 'price_live_diddy' : 'price_test_diddy'
            }
        };

        this.initializeStripe();
    }

    async initializeStripe() {
        // Load Stripe.js from CDN
        if (!window.Stripe) {
            const script = document.createElement('script');
            script.src = 'https://js.stripe.com/v3/';
            script.onload = () => {
                this.stripe = Stripe(this.getPublishableKey());
                console.log('Stripe initialized successfully');
            };
            document.head.appendChild(script);
        } else {
            this.stripe = Stripe(this.getPublishableKey());
        }
    }

    getPublishableKey() {
        // In production, you'll set this via environment variables
        // For now, return test key (you'll replace this)
        return this.isProduction ?
            'pk_live_51RsoBfPmM4NpiDNLUle3BIuWMyxeRthSGHync5nWsh0EL6wn7pUVhLjuvgMkxmg7i89OQ1H6W7RH9vr67ZouARVM00QATgHCQk' :  // Your live key
            'pk_test_51RsoBfPmM4NpiDNL6yYOgFbwKCsD4sojKMDpAM3MN6GEjRcQ8Ci7y7bsLOe7Y2u6kSwVJz2LCzfR4YtOIe5H4sZf00tVy9CQkH';   // Test key (if you have one)
    }

    // Check if user has purchased a case
    hasPurchased(caseKey) {
        const purchases = JSON.parse(localStorage.getItem('purchasedCases') || '[]');
        return purchases.includes(caseKey);
    }

    // Mark a case as purchased
    markAsPurchased(caseKey) {
        const purchases = JSON.parse(localStorage.getItem('purchasedCases') || '[]');
        if (!purchases.includes(caseKey)) {
            purchases.push(caseKey);
            localStorage.setItem('purchasedCases', JSON.stringify(purchases));
        }
    }

    // Create checkout session for a case
    async purchaseCase(caseKey) {
        if (!this.stripe) {
            console.error('Stripe not initialized');
            return;
        }

        const product = this.products[caseKey];
        if (!product) {
            console.error('Product not found:', caseKey);
            return;
        }

        try {
            // Call your serverless function to create checkout session
            const response = await fetch('/api/create-checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    priceId: product.priceId,
                    caseKey: caseKey,
                    successUrl: window.location.origin + '/success?case=' + caseKey,
                    cancelUrl: window.location.origin + '/cancel'
                })
            });

            const session = await response.json();

            if (session.error) {
                console.error('Checkout error:', session.error);
                return;
            }

            // Redirect to Stripe Checkout
            const result = await this.stripe.redirectToCheckout({
                sessionId: session.sessionId
            });

            if (result.error) {
                console.error('Stripe redirect error:', result.error);
            }

        } catch (error) {
            console.error('Purchase error:', error);
        }
    }

    // Handle successful purchase (called from success page)
    handleSuccessfulPurchase(caseKey) {
        this.markAsPurchased(caseKey);

        // Show success message
        this.showPurchaseSuccess(caseKey);

        // Refresh game to unlock the case
        if (window.gameEngine) {
            window.gameEngine.startGame();
        }
    }

    showPurchaseSuccess(caseKey) {
        const product = this.products[caseKey];
        const notification = document.createElement('div');
        notification.className = 'purchase-success-notification';
        notification.innerHTML = `
            <div class="success-content">
                <div class="success-icon">🔓</div>
                <h3>Purchase Successful!</h3>
                <p><strong>${product.name}</strong> is now unlocked!</p>
                <p>You can now access this classified investigation.</p>
            </div>
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateY(0)';
        }, 100);

        setTimeout(() => {
            notification.style.opacity = '0';
            setTimeout(() => notification.remove(), 500);
        }, 5000);
    }

    // Get product info for display
    getProductInfo(caseKey) {
        return this.products[caseKey];
    }
}

// Payment Config for server connection
const PaymentConfig = {
    // Automatically detect environment and use appropriate server URL
    SERVER_URL: (() => {
        const hostname = window.location.hostname;

        if (hostname === 'localhost' || hostname === '127.0.0.1') {
            return 'http://localhost:3000';  // Local development
        } else {
            // Production: works for both Netlify domains and custom domains
            return 'https://the-classified-files-production-1c78.up.railway.app';
        }
    })(),

    // Frontend URLs for redirects
    getSuccessUrl: () => {
        const baseUrl = window.location.origin;
        return baseUrl + '/payment-success.html';
    },

    getCancelUrl: () => {
        const baseUrl = window.location.origin;
        return baseUrl + '/payment-cancel.html';
    }
};

// Make it globally available
window.PaymentManager = PaymentManager;
window.paymentManager = new PaymentManager();
window.PaymentConfig = PaymentConfig;

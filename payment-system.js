class PaymentSystem {
    constructor(stripePublishableKey) {
        if (!stripePublishableKey) {
            console.error('Stripe publishable key is required');
            return;
        }
        this.stripe = Stripe(stripePublishableKey);
        this.isUnlocked = this.checkUnlockStatus();
        this.setupEventListeners();
    }

    checkUnlockStatus() {
        // Check if user has already purchased
        const unlocked = localStorage.getItem('gameUnlocked');
        const purchaseData = localStorage.getItem('purchaseData');
        
        if (unlocked === 'true' && purchaseData) {
            const data = JSON.parse(purchaseData);
            // Verify purchase is still valid (within reasonable timeframe)
            const purchaseTime = new Date(data.timestamp);
            const now = new Date();
            const daysSincePurchase = (now - purchaseTime) / (1000 * 60 * 60 * 24);
            
            if (daysSincePurchase < 365) { // Valid for 1 year
                return true;
            }
        }
        return false;
    }

    setupEventListeners() {
        // Listen for purchase button clicks
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('purchase-button')) {
                this.initiatePurchase(e.target.dataset.priceId);
            }
        });
    }

    // Create a purchase button for a specific case
    createPurchaseButton(caseKey, caseName) {
        const priceId = window.StripePrices ? window.StripePrices[caseKey] : null;
        if (!priceId) {
            console.error(`No price ID found for case: ${caseKey}`);
            return null;
        }

        const button = document.createElement('button');
        button.className = 'purchase-button';
        button.dataset.priceId = priceId;
        button.innerHTML = `
            <span class="purchase-icon">💳</span>
            <span class="purchase-text">Unlock ${caseName} - $4.99</span>
        `;
        return button;
    }

    async initiatePurchase(priceId) {
        try {
            // Show loading state
            this.showPurchaseLoading();

            // Create checkout session
            const serverUrl = window.PaymentConfig ? PaymentConfig.SERVER_URL : '';
            const response = await fetch(serverUrl + '/create-checkout-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    priceId: priceId,
                    successUrl: window.PaymentConfig ? PaymentConfig.getSuccessUrl() : window.location.origin + '/payment-success.html',
                    cancelUrl: window.PaymentConfig ? PaymentConfig.getCancelUrl() : window.location.origin + '/payment-cancel.html'
                })
            });

            const session = await response.json();

            if (session.error) {
                throw new Error(session.error);
            }

            // Redirect to Stripe Checkout
            const result = await this.stripe.redirectToCheckout({
                sessionId: session.id
            });

            if (result.error) {
                throw new Error(result.error.message);
            }

        } catch (error) {
            console.error('Payment error:', error);
            this.showPurchaseError(error.message);
        }
    }

    showPurchaseLoading() {
        const buttons = document.querySelectorAll('.purchase-button');
        buttons.forEach(button => {
            button.disabled = true;
            button.textContent = 'Processing...';
        });
    }

    showPurchaseError(message) {
        alert(`Payment error: ${message}`);
        const buttons = document.querySelectorAll('.purchase-button');
        buttons.forEach(button => {
            button.disabled = false;
            button.textContent = 'Purchase Full Game';
        });
    }

    unlockGame(purchaseData) {
        this.isUnlocked = true;
        localStorage.setItem('gameUnlocked', 'true');
        localStorage.setItem('purchaseData', JSON.stringify({
            ...purchaseData,
            timestamp: new Date().toISOString()
        }));
        
        // Hide purchase prompts and unlock content
        this.hidePurchasePrompts();
        this.showUnlockedContent();
    }

    hidePurchasePrompts() {
        const prompts = document.querySelectorAll('.purchase-prompt');
        prompts.forEach(prompt => prompt.style.display = 'none');
    }

    showUnlockedContent() {
        const lockedContent = document.querySelectorAll('.locked-content');
        lockedContent.forEach(content => content.classList.remove('locked-content'));
        
        // Show success message
        this.showUnlockMessage();
    }

    showUnlockMessage() {
        const message = document.createElement('div');
        message.className = 'unlock-message';
        message.innerHTML = `
            <div class="unlock-notification">
                <h3>🔓 Full Game Unlocked!</h3>
                <p>Thank you for your purchase. You now have access to all case files.</p>
                <button onclick="this.parentElement.parentElement.remove()">Continue</button>
            </div>
        `;
        document.body.appendChild(message);
    }

    shouldShowPurchasePrompt(caseId) {
        if (this.isUnlocked) return false;

        // Free cases that don't require purchase
        const freeCases = ['epstein-files', 'jfk-files', 'uap'];
        return !freeCases.includes(caseId);
    }

    createPurchasePrompt(caseTitle, caseKey) {
        // Get the specific price ID for this case
        const priceId = window.StripePrices && window.StripePrices[caseKey];
        const hasValidPriceId = priceId && !priceId.includes('price_your_');

        return `
            <div class="purchase-prompt">
                <div class="purchase-content">
                    <h3>🔒 Premium Case File</h3>
                    <p><strong>${caseTitle}</strong> is part of the full game.</p>
                    <p>Unlock all 13 premium case files with branching storylines, evidence collection, and multiple endings.</p>
                    <div class="price-options">
                        ${hasValidPriceId ?
                            `<button class="purchase-button" data-price-id="${priceId}">
                                Purchase ${caseTitle} - $4.99
                            </button>` :
                            `<p style="color: #ff6b6b;">⚠️ Payment not configured for this case yet.</p>
                             <p style="font-size: 0.9em;">Please check back later or contact support.</p>`
                        }
                    </div>
                    <small>Secure payment powered by Stripe</small>
                </div>
            </div>
        `;
    }

    // Utility method to check if specific content should be locked
    isContentLocked(contentType, contentId) {
        if (this.isUnlocked) return false;
        
        // Define what content is free vs premium
        const freeContent = {
            cases: ['epstein-files', 'jfk-files'],
            scenes: ['intro', 'case-selection', 'demo']
        };
        
        if (contentType === 'case') {
            return !freeContent.cases.includes(contentId);
        }
        
        if (contentType === 'scene') {
            return !freeContent.scenes.includes(contentId);
        }
        
        return false;
    }
}

// Initialize payment system when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the Stripe publishable key from stripe-prices.js
    // This key is loaded from stripe-prices.js which should be included before this file
    if (typeof window.STRIPE_PUBLISHABLE_KEY === 'undefined' ||
        window.STRIPE_PUBLISHABLE_KEY === 'pk_test_your_publishable_key_here' ||
        window.STRIPE_PUBLISHABLE_KEY === 'pk_live_your_publishable_key_here') {
        console.warn('⚠️ Please update the Stripe publishable key in stripe-prices.js');
        // For development, create a mock payment system
        window.paymentSystem = {
            isUnlocked: false,
            shouldShowPurchasePrompt: () => true,
            createPurchasePrompt: (caseTitle) => `
                <div class="purchase-prompt">
                    <div class="purchase-content">
                        <h3>🔧 Development Mode</h3>
                        <p>Please configure your Stripe API keys to enable payments.</p>
                        <p>Case: <strong>${caseTitle}</strong></p>
                        <button onclick="this.closest('.purchase-prompt').remove()">Close</button>
                    </div>
                </div>
            `
        };
    } else {
        window.paymentSystem = new PaymentSystem(window.STRIPE_PUBLISHABLE_KEY);
    }
});
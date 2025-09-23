// Payment Configuration
// This file determines where the payment system connects to
const PaymentConfig = {
    // Automatically detect environment and use appropriate server URL
    SERVER_URL: (() => {
        const hostname = window.location.hostname;

        if (hostname === 'localhost' || hostname === '127.0.0.1') {
            return 'http://localhost:3000';  // Local development
        } else {
            // Production: works for both Netlify domains and custom domains
            return 'https://the-classified-files-production.up.railway.app';
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

// Make it available globally
window.PaymentConfig = PaymentConfig;
// Payment Configuration
// This file determines where the payment system connects to
const PaymentConfig = {
    // Change this to your deployed server URL when going live
    SERVER_URL: window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
        ? 'http://localhost:3000'  // Local development
        : 'https://the-classified-files-production.up.railway.app', // Production Railway server
    
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
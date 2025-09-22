// Game Configuration File
// Controls which games are sealed in production vs development

const GameConfig = {
    // Environment detection
    isDevelopment: () => {
        // Check if running locally
        return window.location.hostname === 'localhost' || 
               window.location.hostname === '127.0.0.1' ||
               window.location.hostname === '' ||
               window.location.protocol === 'file:';
    },
    
    // Define which games should be sealed in production
    // In development, all games will be open regardless of this setting
    sealedGames: {
        epstein: 'coming_soon',     // Coming Soon
        jfk: 'coming_soon',         // Coming Soon
        uap: false,                 // FREE - Open in production
        september11: 'coming_soon', // Coming Soon
        hunterlaptop: 'coming_soon', // Coming Soon
        watergate: 'coming_soon',   // Coming Soon
        'pentagon-papers': 'coming_soon',  // Coming Soon
        mkultra: 'coming_soon',     // Coming Soon
        'panama-papers': 'coming_soon',    // Coming Soon
        'iran-contra': 'coming_soon',      // Coming Soon
        cointelpro: 'coming_soon',  // Coming Soon
        snowden: 'coming_soon',     // Coming Soon
        tuskegee: 'coming_soon',    // Coming Soon
        paperclip: 'coming_soon',   // Coming Soon
        diddy: 'coming_soon',       // Coming Soon
        'diddy-case': 'premium'     // Premium content - requires payment
    },
    
    // Release dates and pricing info
    releaseDates: {
        epstein: "Coming Soon",
        jfk: "Coming Soon",
        september11: "Coming Soon",
        hunterlaptop: "Coming Soon",
        diddy: "Coming Soon",
        'diddy-case': "Premium Content - $4.99",
        watergate: "Coming Soon",
        'pentagon-papers': "Coming Soon",
        mkultra: "Coming Soon",
        'panama-papers': "Coming Soon",
        'iran-contra': "Coming Soon",
        cointelpro: "Coming Soon",
        snowden: "Coming Soon",
        tuskegee: "Coming Soon",
        paperclip: "Coming Soon"
    },

    // Scheduled release dates (for date-based unlocking)
    scheduledReleases: {
        hunterlaptop: new Date('2025-08-11T00:00:00.000Z')
    },
    
    // Check if a game should be sealed
    isGameSealed: function(gameKey) {
        // In development, all games are open
        if (this.isDevelopment()) {
            console.log(`🔓 Development mode: ${gameKey} is OPEN`);
            return false;
        }

        // Check if user has purchased this game
        if (window.paymentManager && window.paymentManager.hasPurchased(gameKey)) {
            console.log(`💰 Purchased: ${gameKey} is UNLOCKED`);
            return false;
        }

        // Check the sealed status
        const sealStatus = this.sealedGames[gameKey];

        // Handle different seal types
        if (sealStatus === false) {
            console.log(`🔓 Production mode: ${gameKey} is FREE and OPEN`);
            return false;
        } else if (sealStatus === 'premium') {
            console.log(`💰 Production mode: ${gameKey} is PREMIUM CONTENT`);
            return 'premium';
        } else if (sealStatus === 'coming_soon') {
            console.log(`🚧 Production mode: ${gameKey} is COMING SOON`);
            return 'coming_soon';
        } else if (sealStatus === 'scheduled') {
            // Check if scheduled release date has passed
            const releaseDate = this.scheduledReleases[gameKey];
            const now = new Date();
            if (releaseDate && now >= releaseDate) {
                console.log(`🕐 Production mode: ${gameKey} is SCHEDULED and now FREE`);
                return false;
            } else {
                console.log(`🕐 Production mode: ${gameKey} is SCHEDULED for later`);
                return 'scheduled';
            }
        }

        // Default to sealed
        return true;
    },

    // Check if game is premium content
    isPremiumContent: function(gameKey) {
        return this.sealedGames[gameKey] === 'premium';
    },

    // Check if game is scheduled for future release
    isScheduledContent: function(gameKey) {
        return this.sealedGames[gameKey] === 'scheduled';
    },

    // Check if game is coming soon
    isComingSoon: function(gameKey) {
        return this.sealedGames[gameKey] === 'coming_soon';
    },
    
    // Get release date for a sealed game
    getReleaseDate: function(gameKey) {
        return this.releaseDates[gameKey] || null;
    }
};

// Make it available globally
window.GameConfig = GameConfig;
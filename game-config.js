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
        epstein: 'premium',     // Premium content - requires payment
        jfk: 'premium',         // Premium content - requires payment
        uap: false,             // FREE - Open in production
        september11: 'premium', // Premium content - requires payment
        hunterlaptop: 'scheduled', // FREE starting August 11, 2025
        watergate: 'premium',   // Premium content - requires payment
        'pentagon-papers': 'premium',  // Premium content - requires payment
        mkultra: 'premium',     // Premium content - requires payment
        'panama-papers': 'premium',    // Premium content - requires payment
        'iran-contra': 'premium',      // Premium content - requires payment
        cointelpro: 'premium',  // Premium content - requires payment
        snowden: 'premium',     // Premium content - requires payment
        tuskegee: 'premium',    // Premium content - requires payment
        paperclip: 'premium',   // Premium content - requires payment
        'diddy-case': false     // FREE - Open in production
    },
    
    // Release dates and pricing info
    releaseDates: {
        epstein: "Premium Content - $4.99",
        jfk: "Premium Content - $4.99",
        september11: "Premium Content - $4.99",
        hunterlaptop: "FREE - August 11, 2025",
        watergate: "Premium Content - $4.99",
        'pentagon-papers': "Premium Content - $4.99",
        mkultra: "Premium Content - $4.99",
        'panama-papers': "Premium Content - $4.99",
        'iran-contra': "Premium Content - $4.99",
        cointelpro: "Premium Content - $4.99",
        snowden: "Premium Content - $4.99",
        tuskegee: "Premium Content - $4.99",
        paperclip: "Premium Content - $4.99"
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
        
        // Check the sealed status
        const sealStatus = this.sealedGames[gameKey];
        
        // Handle different seal types
        if (sealStatus === false) {
            console.log(`🔓 Production mode: ${gameKey} is FREE and OPEN`);
            return false;
        } else if (sealStatus === 'premium') {
            console.log(`💰 Production mode: ${gameKey} is PREMIUM CONTENT`);
            return 'premium';
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
    
    // Get release date for a sealed game
    getReleaseDate: function(gameKey) {
        return this.releaseDates[gameKey] || null;
    }
};

// Make it available globally
window.GameConfig = GameConfig;
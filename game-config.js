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
        epstein: true,      // Sealed in production
        jfk: true,          // Sealed in production
        uap: false,         // Open in production - FREE LAUNCH GAME
        september11: true,   // Sealed in production
        hunterlaptop: true, // Sealed in production
        watergate: true,    // Sealed in production
        'pentagon-papers': true,  // Sealed in production
        mkultra: true,      // Sealed in production
        'panama-papers': true,    // Sealed in production
        'iran-contra': true,      // Sealed in production
        cointelpro: true,   // Sealed in production
        snowden: true,      // Sealed in production
        tuskegee: true,     // Sealed in production
        paperclip: true,    // Sealed in production
        'diddy-case': false // Open in production - NEW CASE
    },
    
    // Release dates for sealed games
    releaseDates: {
        epstein: "Coming Q2 2025",
        jfk: "Coming Q1 2025",
        september11: "Coming Q2 2025",
        hunterlaptop: "Coming Q3 2025",
        watergate: "Coming Q3 2025",
        'pentagon-papers': "Coming Q4 2025",
        mkultra: "Coming Q4 2025",
        'panama-papers': "Coming 2026",
        'iran-contra': "Coming 2026",
        cointelpro: "Coming 2026",
        snowden: "Coming 2026",
        tuskegee: "Coming 2026",
        paperclip: "Coming 2026"
    },
    
    // Check if a game should be sealed
    isGameSealed: function(gameKey) {
        // In development, all games are open
        if (this.isDevelopment()) {
            console.log(`🔓 Development mode: ${gameKey} is OPEN`);
            return false;
        }
        
        // In production, check the sealed status
        const sealed = this.sealedGames[gameKey] || false;
        console.log(`🔒 Production mode: ${gameKey} is ${sealed ? 'SEALED' : 'OPEN'}`);
        return sealed;
    },
    
    // Get release date for a sealed game
    getReleaseDate: function(gameKey) {
        return this.releaseDates[gameKey] || null;
    }
};

// Make it available globally
window.GameConfig = GameConfig;
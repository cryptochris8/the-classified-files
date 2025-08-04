// Deployment Verification Script
// Run this after changing Netlify to point to main repository

console.log('🔍 DEPLOYMENT VERIFICATION');
console.log('=========================');

// Check if we're in the right repository
console.log('Repository Check:');
console.log('✅ Main game files present:', {
    'index.html': typeof document !== 'undefined',
    'diddy-case-story-expanded.js': typeof DiddyCaseStoryExpanded !== 'undefined',
    'game-config.js': typeof GameConfig !== 'undefined',
    'game-engine.js': typeof GameEngine !== 'undefined'
});

// Check Diddy case configuration
if (typeof GameConfig !== 'undefined') {
    const isSealed = GameConfig.isGameSealed('diddy-case');
    console.log('✅ Diddy case configuration:', {
        sealed: isSealed,
        shouldBeOpen: !isSealed,
        environment: GameConfig.isDevelopment() ? 'development' : 'production'
    });
} else {
    console.log('❌ GameConfig not loaded');
}

// Check if Diddy case is available
if (typeof DiddyCaseStoryExpanded !== 'undefined') {
    console.log('✅ Diddy case loaded:', {
        scenes: Object.keys(DiddyCaseStoryExpanded.scenes || {}).length,
        sealed: DiddyCaseStoryExpanded.sealed,
        releaseDate: DiddyCaseStoryExpanded.releaseDate
    });
} else {
    console.log('❌ DiddyCaseStoryExpanded not loaded');
}

console.log('🌐 Deployment URL:', window.location.href);
console.log('📅 Cache buster check:', document.querySelector('meta[name="cache-killer"]')?.content);

// Test case selection
setTimeout(() => {
    const caseButtons = document.querySelectorAll('.case-selection-button');
    console.log('🎮 Case selection buttons found:', caseButtons.length);
    
    const diddyButton = Array.from(caseButtons).find(btn => 
        btn.textContent.toLowerCase().includes('diddy'));
    console.log('🎯 Diddy case button:', diddyButton ? 'FOUND' : 'MISSING');
    
    if (diddyButton) {
        console.log('✅ SUCCESS: Diddy case is properly deployed and accessible!');
    } else {
        console.log('❌ PROBLEM: Diddy case button not found in UI');
    }
}, 1000);
// Quick verification script for clean repository
// Run this in browser console to verify all intro scenes exist

console.log('🔍 VERIFYING CLEAN REPOSITORY...');

// Check if story is loaded
if (typeof EpsteinStoryExpanded !== 'undefined') {
    console.log('✅ EpsteinStoryExpanded loaded successfully');
    
    const scenes = EpsteinStoryExpanded.scenes;
    console.log('📊 Total scenes:', Object.keys(scenes).length);
    
    // Check intro scene exists
    if (scenes.intro) {
        console.log('✅ Intro scene exists');
        
        // Check all intro choices point to existing scenes
        const introChoices = scenes.intro.choices;
        console.log('🔍 Checking intro choices...');
        
        introChoices.forEach((choice, index) => {
            const targetScene = choice.nextScene;
            const exists = scenes[targetScene] ? '✅' : '❌';
            console.log(`  ${index + 1}. ${exists} "${choice.text}" → ${targetScene}`);
        });
        
        console.log('🎉 VERIFICATION COMPLETE!');
        console.log('🎮 Ready to test navigation!');
        
    } else {
        console.error('❌ Intro scene missing!');
    }
} else {
    console.error('❌ EpsteinStoryExpanded not loaded!');
}

console.log('🎯 Try clicking the intro buttons to test navigation!');
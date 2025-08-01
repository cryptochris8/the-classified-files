// Scene Navigation Diagnostic Tool
// Run this in the browser console to find missing scene references

function diagnoseMissingScenes() {
    console.log('=== SCENE NAVIGATION DIAGNOSTIC ===');
    
    // Check if stories are loaded
    const stories = {
        'EpsteinStoryExpanded': typeof EpsteinStoryExpanded !== 'undefined' ? EpsteinStoryExpanded : null,
        'EpsteinStoryFactual': typeof EpsteinStoryFactual !== 'undefined' ? EpsteinStoryFactual : null,
        'EpsteinStoryHybrid': typeof EpsteinStoryHybrid !== 'undefined' ? EpsteinStoryHybrid : null,
        'EpsteinStory': typeof EpsteinStory !== 'undefined' ? EpsteinStory : null
    };
    
    console.log('Available Stories:', Object.keys(stories).filter(key => stories[key] !== null));
    
    // Focus on EpsteinStoryExpanded since that's what the game uses
    const currentStory = stories['EpsteinStoryExpanded'];
    if (!currentStory) {
        console.error('❌ EpsteinStoryExpanded not found!');
        return;
    }
    
    const availableScenes = Object.keys(currentStory.scenes);
    console.log(`✅ Available scenes in EpsteinStoryExpanded (${availableScenes.length}):`, availableScenes);
    
    // Find all referenced scenes in choices
    const referencedScenes = new Set();
    const missingScenes = [];
    const sceneChoiceMap = {};
    
    Object.entries(currentStory.scenes).forEach(([sceneId, scene]) => {
        if (scene.choices) {
            scene.choices.forEach(choice => {
                if (choice.nextScene) {
                    referencedScenes.add(choice.nextScene);
                    
                    // Track which scene has choices pointing to which next scenes
                    if (!sceneChoiceMap[sceneId]) {
                        sceneChoiceMap[sceneId] = [];
                    }
                    sceneChoiceMap[sceneId].push({
                        choiceText: choice.text.substring(0, 50) + '...',
                        nextScene: choice.nextScene
                    });
                    
                    // Check if the referenced scene exists
                    if (!currentStory.scenes[choice.nextScene]) {
                        missingScenes.push({
                            fromScene: sceneId,
                            missingScene: choice.nextScene,
                            choiceText: choice.text.substring(0, 50) + '...'
                        });
                    }
                }
            });
        }
    });
    
    console.log(`\n📊 SCENE REFERENCE ANALYSIS:`);
    console.log(`Total scenes defined: ${availableScenes.length}`);
    console.log(`Total scenes referenced: ${referencedScenes.size}`);
    console.log(`Missing scenes: ${missingScenes.length}`);
    
    if (missingScenes.length > 0) {
        console.log(`\n❌ MISSING SCENES (${missingScenes.length}):`);
        missingScenes.forEach(missing => {
            console.log(`  Scene "${missing.fromScene}" → "${missing.missingScene}"`);
            console.log(`    Choice: "${missing.choiceText}"`);
        });
        
        console.log(`\n🔧 QUICK FIX SUGGESTIONS:`);
        const uniqueMissingScenes = [...new Set(missingScenes.map(m => m.missingScene))];
        uniqueMissingScenes.forEach(sceneName => {
            console.log(`  Add scene "${sceneName}" to EpsteinStoryExpanded.scenes`);
        });
    } else {
        console.log(`\n✅ All scene references are valid!`);
    }
    
    // Show scene navigation map
    console.log(`\n🗺️ SCENE NAVIGATION MAP:`);
    Object.entries(sceneChoiceMap).forEach(([sceneId, choices]) => {
        console.log(`  ${sceneId}:`);
        choices.forEach(choice => {
            const exists = currentStory.scenes[choice.nextScene] ? '✅' : '❌';
            console.log(`    ${exists} "${choice.choiceText}" → ${choice.nextScene}`);
        });
    });
    
    return {
        availableScenes,
        referencedScenes: Array.from(referencedScenes),
        missingScenes,
        sceneChoiceMap
    };
}

// Auto-run if loaded in browser
if (typeof window !== 'undefined') {
    console.log('🔧 Scene diagnostic tool loaded. Run diagnoseMissingScenes() to analyze.');
}
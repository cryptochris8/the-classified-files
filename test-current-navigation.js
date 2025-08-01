// Navigation Test for Current State
const fs = require('fs');

console.log('🧪 TESTING NAVIGATION AFTER DOCUMENT_AUTHENTICATION FIX...\n');

try {
    // Read and parse the story file
    const storyContent = fs.readFileSync('epstein-story-expanded.js', 'utf8');
    
    // Extract the story object
    const storyMatch = storyContent.match(/const EpsteinStoryExpanded = ({[\s\S]*?});/);
    if (!storyMatch) {
        console.error('❌ Could not parse story file');
        process.exit(1);
    }
    
    // Evaluate the story object safely
    const EpsteinStoryExpanded = eval('(' + storyMatch[1] + ')');
    const scenes = EpsteinStoryExpanded.scenes;
    
    console.log('📊 Story Statistics:');
    console.log('Total scenes:', Object.keys(scenes).length);
    
    let totalTests = 0;
    let passedTests = 0;
    let failedTests = [];
    
    // Test each scene's choice navigation
    Object.entries(scenes).forEach(([sceneId, scene]) => {
        if (scene.choices) {
            scene.choices.forEach((choice, choiceIndex) => {
                totalTests++;
                const targetScene = choice.nextScene;
                
                if (scenes[targetScene]) {
                    passedTests++;
                } else {
                    failedTests.push({
                        fromScene: sceneId,
                        toScene: targetScene,
                        choiceIndex: choiceIndex + 1,
                        choiceText: choice.text.substring(0, 40) + '...'
                    });
                }
            });
        }
    });
    
    console.log('\n📊 NAVIGATION TEST RESULTS:');
    console.log('Total navigation paths tested:', totalTests);
    console.log('Passed:', passedTests);
    console.log('Failed:', failedTests.length);
    
    if (failedTests.length === 0) {
        console.log('\n🎉 ALL NAVIGATION TESTS PASSED!');
        console.log('✅ The game should work correctly now.');
    } else {
        console.log('\n❌ FAILED TESTS:');
        failedTests.slice(0, 10).forEach(failure => {
            console.log(`  ${failure.fromScene} → ${failure.toScene}`);
            console.log(`    Choice ${failure.choiceIndex}: "${failure.choiceText}"`);
        });
        
        if (failedTests.length > 10) {
            console.log(`  ... and ${failedTests.length - 10} more failures`);
        }
    }
    
    // Test the specific issue from the screenshot
    console.log('\n🔍 SPECIFIC ISSUE TEST:');
    console.log('Testing intro scene choices...');
    
    if (scenes.intro && scenes.intro.choices) {
        scenes.intro.choices.forEach((choice, i) => {
            const targetExists = scenes[choice.nextScene] ? '✅' : '❌';
            console.log(`  ${i + 1}. ${targetExists} "${choice.text.substring(0, 50)}..." → ${choice.nextScene}`);
        });
    }
    
    // Test document_authentication specifically
    console.log('\n🔍 DOCUMENT_AUTHENTICATION TEST:');
    if (scenes.document_authentication) {
        console.log('✅ document_authentication scene exists');
        console.log('Choices available:', scenes.document_authentication.choices ? scenes.document_authentication.choices.length : 0);
    } else {
        console.log('❌ document_authentication scene missing');
    }
    
    // Summary for the user
    console.log('\n📋 SUMMARY:');
    if (failedTests.length === 0) {
        console.log('🎉 SUCCESS: All navigation should work correctly!');
        console.log('✅ The "Examine the mysterious documents" button should now work.');
    } else {
        console.log(`⚠️  WARNING: ${failedTests.length} navigation issues remain.`);
        console.log('🔧 Additional scenes may need to be added.');
    }
    
} catch (error) {
    console.error('❌ Error testing navigation:', error.message);
}
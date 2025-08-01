// Navigation Test Script for The Classified Files
// Run this to verify all navigation paths work correctly

console.log('🧪 NAVIGATION TEST SCRIPT STARTING...');

function testAllNavigation() {
    if (typeof EpsteinStoryExpanded === 'undefined') {
        console.error('❌ EpsteinStoryExpanded not found! Make sure the story file is loaded.');
        return false;
    }

    const story = EpsteinStoryExpanded;
    const scenes = story.scenes;
    let totalTests = 0;
    let passedTests = 0;
    let failedTests = [];

    console.log('🔍 Testing all scene navigation paths...');

    // Test each scene's choice navigation
    Object.entries(scenes).forEach(([sceneId, scene]) => {
        if (scene.choices) {
            scene.choices.forEach((choice, choiceIndex) => {
                totalTests++;
                const targetScene = choice.nextScene;
                
                if (scenes[targetScene]) {
                    passedTests++;
                    console.log(`✅ ${sceneId} → ${targetScene} (Choice ${choiceIndex + 1})`);
                } else {
                    failedTests.push({
                        fromScene: sceneId,
                        toScene: targetScene,
                        choiceIndex: choiceIndex + 1,
                        choiceText: choice.text.substring(0, 40) + '...'
                    });
                    console.error(`❌ ${sceneId} → ${targetScene} (Choice ${choiceIndex + 1}) - SCENE NOT FOUND`);
                }
            });
        }
    });

    // Summary
    console.log('\n📊 NAVIGATION TEST RESULTS:');
    console.log(`Total navigation paths tested: ${totalTests}`);
    console.log(`Passed: ${passedTests}`);
    console.log(`Failed: ${failedTests.length}`);
    
    if (failedTests.length === 0) {
        console.log('🎉 ALL NAVIGATION TESTS PASSED! The game should work correctly now.');
        return true;
    } else {
        console.log('\n❌ FAILED TESTS:');
        failedTests.forEach(failure => {
            console.log(`  ${failure.fromScene} → ${failure.toScene}`);
            console.log(`    Choice ${failure.choiceIndex}: "${failure.choiceText}"`);
        });
        
        console.log('\n🔧 REMAINING FIXES NEEDED:');
        const uniqueFailedScenes = [...new Set(failedTests.map(f => f.toScene))];
        console.log('Missing scenes that still need to be added:');
        uniqueFailedScenes.forEach(sceneName => {
            console.log(`  - ${sceneName}`);
        });
        
        return false;
    }
}

function testSpecificPath(startScene, expectedPath) {
    console.log(`\n🛤️ Testing path starting from: ${startScene}`);
    
    if (!EpsteinStoryExpanded.scenes[startScene]) {
        console.error(`❌ Start scene "${startScene}" not found!`);
        return false;
    }
    
    let currentScene = startScene;
    let pathIndex = 0;
    
    while (pathIndex < expectedPath.length && EpsteinStoryExpanded.scenes[currentScene]) {
        const scene = EpsteinStoryExpanded.scenes[currentScene];
        const expectedChoice = expectedPath[pathIndex];
        
        if (!scene.choices || scene.choices.length <= expectedChoice) {
            console.error(`❌ Choice ${expectedChoice} not available in scene ${currentScene}`);
            return false;
        }
        
        const choice = scene.choices[expectedChoice];
        const nextScene = choice.nextScene;
        
        console.log(`  ${currentScene} → ${nextScene} (Choice: "${choice.text.substring(0, 30)}...")`);
        
        if (!EpsteinStoryExpanded.scenes[nextScene]) {
            console.error(`❌ Next scene "${nextScene}" not found!`);
            return false;
        }
        
        currentScene = nextScene;
        pathIndex++;
    }
    
    console.log(`✅ Path test completed successfully!`);
    return true;
}

// Quick scene count check
function checkSceneCount() {
    const sceneCount = Object.keys(EpsteinStoryExpanded.scenes).length;
    console.log(`📄 Total scenes in EpsteinStoryExpanded: ${sceneCount}`);
    
    if (sceneCount < 80) {
        console.warn('⚠️ Scene count seems low. Expected at least 80 scenes.');
    } else {
        console.log('✅ Scene count looks good.');
    }
}

// Test critical story paths
function testCriticalPaths() {
    console.log('\n🎯 Testing critical story paths...');
    
    // Test intro → victim_statistics_study → recruitment_pattern_analysis
    const criticalPath1 = [0, 0, 0]; // First choice from each scene
    testSpecificPath('intro', criticalPath1);
    
    // Test that emergency_publication_final is reachable
    if (EpsteinStoryExpanded.scenes['emergency_publication_final']) {
        console.log('✅ Critical ending scene "emergency_publication_final" exists');
    } else {
        console.error('❌ Critical ending scene "emergency_publication_final" missing');
    }
}

// Main test runner
function runAllTests() {
    console.log('🚀 Running comprehensive navigation tests...\n');
    
    checkSceneCount();
    const allPathsWork = testAllNavigation();
    testCriticalPaths();
    
    console.log('\n🏁 TEST SUMMARY:');
    if (allPathsWork) {
        console.log('🎉 SUCCESS! All navigation tests passed.');
        console.log('✅ The game should now work correctly without button navigation issues.');
        console.log('🎮 Players should be able to follow all story paths properly.');
    } else {
        console.log('⚠️ Some navigation issues remain. See failed tests above.');
        console.log('🔧 Additional scenes may need to be added.');
    }
    
    return allPathsWork;
}

// Auto-run if in browser
if (typeof window !== 'undefined') {
    console.log('🧪 Navigation test script loaded.');
    console.log('📝 Run runAllTests() to test all navigation.');
    console.log('📝 Run testAllNavigation() for basic navigation test.');
    
    // Add to global scope
    window.runAllTests = runAllTests;
    window.testAllNavigation = testAllNavigation;
    window.testSpecificPath = testSpecificPath;
} else {
    // Node.js export
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = { runAllTests, testAllNavigation, testSpecificPath };
    }
}
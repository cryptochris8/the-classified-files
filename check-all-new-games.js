// Check all new games for missing choices or other issues
const fs = require('fs');
const path = require('path');

// Mock window object
global.window = {};

const newGames = [
    { file: 'pentagon-papers-story-expanded.js', var: 'PentagonPapersStoryExpanded', title: 'Pentagon Papers' },
    { file: 'mkultra-story-expanded.js', var: 'MKUltraStoryExpanded', title: 'MKUltra Files' },
    { file: 'panama-papers-story-expanded.js', var: 'PanamaPapersStoryExpanded', title: 'Panama Papers' },
    { file: 'iran-contra-story-expanded.js', var: 'IranContraStoryExpanded', title: 'Iran-Contra Affair' },
    { file: 'cointelpro-story-expanded.js', var: 'COINTELPROStoryExpanded', title: 'COINTELPRO Files' },
    { file: 'snowden-revelations-story-expanded.js', var: 'SnowdenRevelationsStoryExpanded', title: 'Snowden Revelations' },
    { file: 'tuskegee-experiment-story-expanded.js', var: 'TuskegeeExperimentStoryExpanded', title: 'Tuskegee Experiment' },
    { file: 'operation-paperclip-story-expanded.js', var: 'OperationPaperclipStoryExpanded', title: 'Operation Paperclip' }
];

const issues = [];

newGames.forEach(game => {
    try {
        console.log(`\n🔍 Checking ${game.title}...`);
        require(`./${game.file}`);
        const story = window[game.var];
        
        if (!story) {
            issues.push(`❌ ${game.title}: Story object not found`);
            return;
        }
        
        if (!story.scenes) {
            issues.push(`❌ ${game.title}: No scenes object`);
            return;
        }
        
        if (!story.scenes.intro) {
            issues.push(`❌ ${game.title}: No intro scene`);
            return;
        }
        
        const intro = story.scenes.intro;
        
        // Check intro scene structure
        if (!intro.text) {
            issues.push(`❌ ${game.title}: Intro missing text`);
        }
        
        if (!intro.choices) {
            issues.push(`❌ ${game.title}: Intro missing choices array`);
        } else if (!Array.isArray(intro.choices)) {
            issues.push(`❌ ${game.title}: Intro choices is not an array`);
        } else if (intro.choices.length === 0) {
            issues.push(`❌ ${game.title}: Intro choices array is empty`);
        } else {
            console.log(`  ✅ Has ${intro.choices.length} choice buttons`);
            
            // Check each choice structure
            intro.choices.forEach((choice, index) => {
                if (!choice.text) {
                    issues.push(`❌ ${game.title}: Choice ${index + 1} missing text`);
                }
                if (!choice.nextScene) {
                    issues.push(`❌ ${game.title}: Choice ${index + 1} missing nextScene`);
                }
            });
        }
        
        if (!intro.image) {
            issues.push(`⚠️  ${game.title}: Intro missing image`);
        }
        
        if (!intro.imagePrompt) {
            issues.push(`⚠️  ${game.title}: Intro missing imagePrompt`);
        }
        
        // Count total scenes
        const sceneCount = Object.keys(story.scenes).length;
        console.log(`  📄 Total scenes: ${sceneCount}`);
        
        if (sceneCount < 3) {
            issues.push(`⚠️  ${game.title}: Only ${sceneCount} scenes (may need expansion)`);
        }
        
        console.log(`  ✅ ${game.title} structure looks good`);
        
    } catch (error) {
        issues.push(`❌ ${game.title}: Error loading - ${error.message}`);
    }
});

console.log('\n' + '='.repeat(60));
console.log('📊 GAME CHECK RESULTS');
console.log('='.repeat(60));

if (issues.length === 0) {
    console.log('🎉 All games passed the structure check!');
} else {
    console.log(`Found ${issues.length} issues:\n`);
    issues.forEach(issue => console.log(issue));
}

console.log(`\n✅ Checked ${newGames.length} games total`);
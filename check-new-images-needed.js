// Check all new image prompts needed for the expanded cases
const fs = require('fs');
const path = require('path');

// Mock window object
global.window = {};

// Import all the new story files
const newStories = [
    'pentagon-papers-story-expanded.js',
    'mkultra-story-expanded.js', 
    'panama-papers-story-expanded.js',
    'iran-contra-story-expanded.js',
    'cointelpro-story-expanded.js',
    'snowden-revelations-story-expanded.js',
    'tuskegee-experiment-story-expanded.js',
    'operation-paperclip-story-expanded.js'
];

const globalVars = [
    'PentagonPapersStoryExpanded',
    'MKUltraStoryExpanded',
    'PanamaPapersStoryExpanded', 
    'IranContraStoryExpanded',
    'COINTELPROStoryExpanded',
    'SnowdenRevelationsStoryExpanded',
    'TuskegeeExperimentStoryExpanded',
    'OperationPaperclipStoryExpanded'
];

let totalImages = 0;
const allImages = [];

newStories.forEach((filename, index) => {
    try {
        require(`./${filename}`);
        const story = window[globalVars[index]];
        
        if (story && story.scenes) {
            console.log(`\n📚 ${story.title.toUpperCase()}:`);
            let storyImages = 0;
            
            for (const [sceneId, scene] of Object.entries(story.scenes)) {
                if (scene.image && scene.imagePrompt) {
                    storyImages++;
                    totalImages++;
                    allImages.push({
                        story: story.title,
                        filename: scene.image + '.png',
                        prompt: scene.imagePrompt
                    });
                    console.log(`  ${storyImages}. ${scene.image}`);
                }
            }
            console.log(`  Total: ${storyImages} images`);
        }
    } catch (error) {
        console.log(`❌ Error loading ${filename}:`, error.message);
    }
});

console.log(`\n📊 SUMMARY:`);
console.log(`Total new images needed: ${totalImages}`);
console.log(`Estimated cost: $${(totalImages * 0.01).toFixed(2)}`);
console.log(`Estimated time: ${Math.ceil(totalImages * 3 / 60)} minutes`);

// Save the image list for batch generation
fs.writeFileSync('new-images-list.json', JSON.stringify(allImages, null, 2));
console.log(`\n📄 Image list saved to new-images-list.json`);
console.log(`Ready for batch generation!`);
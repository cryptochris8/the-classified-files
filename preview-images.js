// Preview all images that will be generated
global.window = {};

// Import all story files
require('./epstein-story-expanded.js');
require('./jfk-story-expanded.js');
require('./uap-story-expanded.js');
require('./hunter-biden-laptop-story-expanded.js');
require('./september11-commission-expanded.js');

const stories = {
    epstein: window.EpsteinStoryExpanded,
    jfk: window.JFKStoryExpanded,
    uap: window.UAPStoryExpanded,
    hunterBiden: window.HunterBidenLaptopStoryExpanded,
    september11: window.September11CommissionExpanded
};

// Collect all unique images
const allImages = new Set();
let sceneCount = 0;

for (const [storyName, story] of Object.entries(stories)) {
    console.log(`\n📚 ${storyName.toUpperCase()} STORY:`);
    
    let storyImageCount = 0;
    for (const [sceneId, scene] of Object.entries(story.scenes)) {
        if (scene.image && scene.imagePrompt && !allImages.has(scene.image)) {
            sceneCount++;
            storyImageCount++;
            console.log(`  ${storyImageCount}. ${scene.image}`);
            allImages.add(scene.image);
        }
    }
    console.log(`  Total: ${storyImageCount} unique images`);
}

console.log(`\n📊 SUMMARY:`);
console.log(`Total unique images: ${allImages.size}`);
console.log(`Estimated cost: $${(allImages.size * 0.01).toFixed(2)}`);
console.log(`Estimated time: ${Math.ceil(allImages.size * 3 / 60)} minutes`);
console.log(`\nRun 'node generate-all-images.js' to generate all images`);
// Check which images are missing
const fs = require('fs');
const path = require('path');

// Mock window object
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

// Get all required images
const requiredImages = new Set();
for (const [storyName, story] of Object.entries(stories)) {
    for (const [sceneId, scene] of Object.entries(story.scenes)) {
        if (scene.image && scene.imagePrompt) {
            requiredImages.add(scene.image);
        }
    }
}

// Check which exist
const imagesDir = path.join(__dirname, 'images');
const existingFiles = fs.readdirSync(imagesDir);
const missingImages = [];

for (const image of requiredImages) {
    if (!existingFiles.includes(image) && !existingFiles.includes(image + '.png')) {
        missingImages.push(image);
    }
}

console.log('📊 Image Generation Status:');
console.log(`✅ Generated: ${requiredImages.size - missingImages.length} images`);
console.log(`❌ Missing: ${missingImages.length} images\n`);

if (missingImages.length > 0) {
    console.log('Missing images:');
    missingImages.forEach((img, i) => {
        console.log(`${i + 1}. ${img}`);
    });
    
    console.log('\nTo generate missing images, run:');
    missingImages.forEach(img => {
        console.log(`node generate-all-images.js --single ${img}`);
    });
}
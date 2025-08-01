// Comprehensive image verification script
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

// 1. Get all image references from story files
const imageReferences = new Map(); // image name -> array of locations
const missingPrompts = [];

for (const [storyName, story] of Object.entries(stories)) {
    for (const [sceneId, scene] of Object.entries(story.scenes)) {
        if (scene.image) {
            if (!imageReferences.has(scene.image)) {
                imageReferences.set(scene.image, []);
            }
            imageReferences.get(scene.image).push(`${storyName}.${sceneId}`);
            
            // Check if scene has imagePrompt
            if (!scene.imagePrompt) {
                missingPrompts.push(`${storyName}.${sceneId} - ${scene.image}`);
            }
        }
    }
}

// 2. Get all images in the images directory
const imagesDir = path.join(__dirname, 'images');
const imageFiles = fs.readdirSync(imagesDir)
    .filter(f => f.endsWith('.png'))
    .map(f => f.replace('.png', ''));

// 3. Find discrepancies
const referencedImages = Array.from(imageReferences.keys()).sort();
const existingImages = imageFiles.filter(f => !f.includes('classifiedtopsecret') && f !== 'Classified' && f !== 'test-image').sort();

const missingImages = referencedImages.filter(img => !existingImages.includes(img));
const unusedImages = existingImages.filter(img => !referencedImages.includes(img));

// 4. Generate report
console.log('📊 IMAGE VERIFICATION REPORT');
console.log('===========================\n');

console.log(`📁 Images in directory: ${imageFiles.length} total`);
console.log(`📝 Images referenced in game: ${referencedImages.length} unique\n`);

if (missingImages.length === 0 && unusedImages.length === 0) {
    console.log('✅ PERFECT MATCH! All referenced images exist and all images are used.\n');
} else {
    if (missingImages.length > 0) {
        console.log(`❌ MISSING IMAGES (${missingImages.length}):`);
        missingImages.forEach(img => {
            console.log(`   - ${img} (used in: ${imageReferences.get(img).join(', ')})`);
        });
        console.log();
    }
    
    if (unusedImages.length > 0) {
        console.log(`⚠️  UNUSED IMAGES (${unusedImages.length}):`);
        unusedImages.forEach(img => {
            console.log(`   - ${img}`);
        });
        console.log();
    }
}

// 5. Check for scenes missing prompts
if (missingPrompts.length > 0) {
    console.log(`⚠️  SCENES WITHOUT IMAGE PROMPTS (${missingPrompts.length}):`);
    missingPrompts.forEach(scene => {
        console.log(`   - ${scene}`);
    });
    console.log();
}

// 6. List all unique images with usage count
console.log('📋 ALL UNIQUE IMAGES WITH USAGE:');
console.log('--------------------------------');
const sortedImages = Array.from(imageReferences.entries())
    .sort((a, b) => a[0].localeCompare(b[0]));

sortedImages.forEach(([image, locations]) => {
    const exists = existingImages.includes(image) ? '✅' : '❌';
    console.log(`${exists} ${image} (used ${locations.length}x)`);
});

console.log(`\n📊 SUMMARY:`);
console.log(`Total unique images needed: ${referencedImages.length}`);
console.log(`Total images generated: ${existingImages.length}`);
console.log(`Missing images: ${missingImages.length}`);
console.log(`Unused images: ${unusedImages.length}`);
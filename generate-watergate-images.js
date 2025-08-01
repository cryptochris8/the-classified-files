// Generate images for Watergate case only
const fs = require('fs');
const path = require('path');
const CONFIG = require('./config.js');
const ImageGenerator = require('./image-generator.js');

// Mock window object
global.window = {};

// Import Watergate story
require('./watergate-story-expanded.js');
const watergateStory = window.WatergateStoryExpanded;

async function generateWatergateImages() {
    console.log('🎨 Generating images for The Watergate Files...\n');
    
    // Check API key
    if (!CONFIG.STABILITY_API_KEY || CONFIG.STABILITY_API_KEY === 'YOUR-API-KEY-HERE') {
        console.error('❌ Please add your Stability AI API key to config.js');
        return;
    }

    const generator = new ImageGenerator(CONFIG);
    const scenes = [];

    // Collect all unique images from Watergate story
    const uniqueImages = new Set();
    for (const [sceneId, scene] of Object.entries(watergateStory.scenes)) {
        if (scene.image && scene.imagePrompt && !uniqueImages.has(scene.image)) {
            uniqueImages.add(scene.image);
            scenes.push({
                sceneId,
                image: scene.image,
                prompt: scene.imagePrompt
            });
        }
    }

    console.log(`📊 Found ${scenes.length} unique images to generate`);
    console.log(`💰 Estimated cost: $${(scenes.length * 0.01).toFixed(2)}\n`);

    // Generate each image
    let completed = 0;
    let failed = 0;

    for (const scene of scenes) {
        try {
            console.log(`\n[${completed + 1}/${scenes.length}] Generating: ${scene.image}`);
            console.log(`📝 Prompt: ${scene.prompt.substring(0, 100)}...`);
            
            await generator.generateImage(scene.prompt, `${scene.image}.png`);
            
            completed++;
            console.log(`✅ Success!`);
            
            // Delay between requests
            if (completed < scenes.length) {
                await generator.delay(CONFIG.DELAY_BETWEEN_REQUESTS);
            }
        } catch (error) {
            failed++;
            console.error(`❌ Failed: ${error.message}`);
        }
    }

    // Summary
    console.log('\n' + '='.repeat(60));
    console.log('📊 WATERGATE IMAGES GENERATION COMPLETE');
    console.log('='.repeat(60));
    console.log(`✅ Successfully generated: ${completed} images`);
    console.log(`❌ Failed: ${failed} images`);
    console.log(`💰 Total cost: $${(completed * 0.01).toFixed(2)}`);
    
    if (failed > 0) {
        console.log('\n❌ Failed images:');
        scenes.filter((s, i) => i >= completed).forEach(s => {
            console.log(`- ${s.image}`);
        });
    }
}

generateWatergateImages().catch(console.error);
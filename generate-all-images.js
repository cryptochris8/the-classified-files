// Batch Image Generation Script
// Run this to generate all game images at once

const fs = require('fs');
const path = require('path');
const CONFIG = require('./config.js');
const ImageGenerator = require('./image-generator.js');

// Mock window object for browser-based scripts
global.window = {};

// Import all story files to get scene data
require('./epstein-story-expanded.js');
require('./jfk-story-expanded.js');
require('./uap-story-expanded.js');
require('./hunter-biden-laptop-story-expanded.js');
require('./september11-commission-expanded.js');

// Get the stories from the mocked window object
const stories = {
    epstein: window.EpsteinStoryExpanded,
    jfk: window.JFKStoryExpanded,
    uap: window.UAPStoryExpanded,
    hunterBiden: window.HunterBidenLaptopStoryExpanded,
    september11: window.September11CommissionExpanded
};

async function generateAllImages() {
    console.log('🎨 Starting batch image generation...\n');
    
    // Check API key
    if (!CONFIG.STABILITY_API_KEY || CONFIG.STABILITY_API_KEY === 'YOUR-API-KEY-HERE') {
        console.error('❌ Please add your Stability AI API key to config.js');
        console.log('\n📝 Instructions:');
        console.log('1. Go to https://platform.stability.ai/');
        console.log('2. Sign up and get your API key');
        console.log('3. Add it to config.js');
        return;
    }

    const generator = new ImageGenerator(CONFIG);
    const allScenes = [];
    let totalCost = 0;

    // Collect all scenes from all stories
    for (const [storyName, story] of Object.entries(stories)) {
        console.log(`📚 Processing ${storyName} story...`);
        
        // Get all scenes from the scenes object
        for (const [sceneId, scene] of Object.entries(story.scenes)) {
            if (scene.image && scene.imagePrompt) {
                // Check if we already have this image
                const existing = allScenes.find(s => s.filename === scene.image);
                if (!existing) {
                    allScenes.push({
                        storyName,
                        sceneId: sceneId,
                        image: scene.image,
                        prompt: scene.imagePrompt,
                        filename: scene.image
                    });
                }
            }
        }
    }

    console.log(`\n📊 Found ${allScenes.length} unique scenes to generate`);
    console.log(`💰 Estimated cost: $${(allScenes.length * 0.01).toFixed(2)}\n`);

    // Ask for confirmation
    console.log('🤔 Do you want to proceed? (Check the browser for confirmation)');
    
    // Generate images with progress tracking
    let completed = 0;
    let failed = 0;
    const results = [];

    for (const scene of allScenes) {
        try {
            console.log(`\n[${completed + 1}/${allScenes.length}] Generating: ${scene.filename}`);
            console.log(`📝 Prompt: ${scene.prompt.substring(0, 100)}...`);
            
            await generator.generateImage(scene.prompt, scene.filename);
            
            completed++;
            totalCost += 0.01;
            results.push({ ...scene, status: 'success' });
            
            // Delay between requests to avoid rate limiting
            if (completed < allScenes.length) {
                await generator.delay(CONFIG.DELAY_BETWEEN_REQUESTS);
            }
        } catch (error) {
            failed++;
            results.push({ ...scene, status: 'failed', error: error.message });
            console.error(`❌ Failed: ${error.message}`);
        }
    }

    // Summary report
    console.log('\n' + '='.repeat(60));
    console.log('📊 GENERATION COMPLETE');
    console.log('='.repeat(60));
    console.log(`✅ Successfully generated: ${completed} images`);
    console.log(`❌ Failed: ${failed} images`);
    console.log(`💰 Total cost: $${totalCost.toFixed(2)}`);
    console.log(`📁 Images saved to: /images/`);
    
    // Save results report
    const report = {
        timestamp: new Date().toISOString(),
        totalScenes: allScenes.length,
        completed,
        failed,
        totalCost: totalCost.toFixed(2),
        results
    };
    
    fs.writeFileSync(
        path.join(__dirname, 'image-generation-report.json'),
        JSON.stringify(report, null, 2)
    );
    
    console.log('\n📄 Detailed report saved to: image-generation-report.json');
    
    // List failed images for manual retry
    if (failed > 0) {
        console.log('\n❌ Failed images (retry these manually):');
        results.filter(r => r.status === 'failed').forEach(r => {
            console.log(`- ${r.filename}: ${r.error}`);
        });
    }
}

// Add command to generate single image
async function generateSingleImage(filename) {
    const generator = new ImageGenerator(CONFIG);
    
    // Find the scene
    let targetScene = null;
    
    for (const [storyName, story] of Object.entries(stories)) {
        const findScene = (scene, visited = new Set()) => {
            if (!scene || visited.has(scene.id)) return null;
            visited.add(scene.id);
            
            if (scene.image === filename) {
                return scene;
            }
            
            if (scene.choices) {
                for (const choice of scene.choices) {
                    if (choice.nextScene) {
                        const found = findScene(choice.nextScene, visited);
                        if (found) return found;
                    }
                }
            }
            return null;
        };
        
        targetScene = findScene(story.scenes.intro);
        if (targetScene) break;
    }
    
    if (!targetScene) {
        console.error(`❌ Scene not found for image: ${filename}`);
        return;
    }
    
    console.log(`🎨 Generating single image: ${filename}`);
    console.log(`📝 Prompt: ${targetScene.imagePrompt}`);
    
    try {
        await generator.generateImage(targetScene.imagePrompt, filename);
        console.log(`✅ Successfully generated: ${filename}`);
    } catch (error) {
        console.error(`❌ Failed: ${error.message}`);
    }
}

// Command line interface
if (require.main === module) {
    const args = process.argv.slice(2);
    
    if (args.length === 0) {
        // Generate all images
        generateAllImages().catch(console.error);
    } else if (args[0] === '--single' && args[1]) {
        // Generate single image
        generateSingleImage(args[1]).catch(console.error);
    } else {
        console.log('Usage:');
        console.log('  node generate-all-images.js           # Generate all images');
        console.log('  node generate-all-images.js --single filename.png  # Generate single image');
    }
}
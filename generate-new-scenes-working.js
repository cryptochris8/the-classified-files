// Generate AI images for new Diddy case scenes using the working approach
const fs = require('fs').promises;
const path = require('path');
const CONFIG = require('./config.js');

// Mock window for Node.js
global.window = { gameState: { evidenceCount: 'Multiple' } };
const DiddyCaseStoryExpanded = require('./diddy-case-story-expanded.js');

// Extract all new scene images and prompts
function getNewSceneImages() {
    const newImages = [];
    const scenes = DiddyCaseStoryExpanded.scenes;
    
    // Get all scenes that have image and imagePrompt
    for (const [sceneId, scene] of Object.entries(scenes)) {
        if (scene.image && scene.imagePrompt) {
            const filename = scene.image.endsWith('.png') ? scene.image : `${scene.image}.png`;
            newImages.push({
                filename: filename,
                prompt: scene.imagePrompt
            });
        }
    }
    
    return newImages;
}

async function generateStabilityImage(prompt, filename) {
    try {
        console.log(`🎨 Generating: ${filename}`);
        console.log(`📝 Prompt: ${prompt.substring(0, 100)}...`);
        
        const response = await fetch('https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${CONFIG.STABILITY_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                text_prompts: [{ text: prompt }],
                cfg_scale: 7,
                height: 1024,
                width: 1024,
                samples: 1,
                steps: 30,
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`HTTP ${response.status}: ${errorText}`);
        }

        const responseJSON = await response.json();
        const imageBase64 = responseJSON.artifacts[0].base64;
        
        // Save image
        const imageBuffer = Buffer.from(imageBase64, 'base64');
        const imagePath = path.join(__dirname, 'images', filename);
        await fs.writeFile(imagePath, imageBuffer);
        
        console.log(`✅ Successfully generated: ${filename}`);
        return { success: true, filename };
        
    } catch (error) {
        console.log(`❌ Error generating ${filename}:`, error.message);
        return { success: false, filename, error: error.message };
    }
}

async function generateAllNewSceneImages() {
    console.log('🎨 Starting New Diddy Scene Image Generation...');
    
    const newImages = getNewSceneImages();
    console.log(`📊 Found ${newImages.length} total scene images`);
    
    // Check which images already exist
    const toGenerate = [];
    for (const imageData of newImages) {
        const imagePath = path.join(__dirname, 'images', imageData.filename);
        try {
            await fs.access(imagePath);
            console.log(`⏭️  Skipping existing: ${imageData.filename}`);
        } catch {
            toGenerate.push(imageData);
        }
    }
    
    console.log(`🎯 Need to generate: ${toGenerate.length} new images`);
    console.log(`💰 Estimated cost: $${(toGenerate.length * 0.01).toFixed(2)}`);
    
    if (toGenerate.length === 0) {
        console.log('🎉 All images already exist!');
        return;
    }
    
    const results = [];
    let successCount = 0;
    
    for (let i = 0; i < toGenerate.length; i++) {
        const { filename, prompt } = toGenerate[i];
        
        console.log(`\n[${i + 1}/${toGenerate.length}]`);
        const result = await generateStabilityImage(prompt, filename);
        results.push(result);
        
        if (result.success) {
            successCount++;
        }
        
        // Add delay between requests to avoid rate limiting
        if (i < toGenerate.length - 1) {
            console.log('⏳ Waiting 2 seconds...');
            await new Promise(resolve => setTimeout(resolve, 2000));
        }
    }
    
    console.log(`\n📋 GENERATION REPORT`);
    console.log(`════════════════════`);
    console.log(`✅ Successfully generated: ${successCount}`);
    console.log(`❌ Failed: ${toGenerate.length - successCount}`);
    console.log(`📊 Success rate: ${((successCount / toGenerate.length) * 100).toFixed(1)}%`);
    console.log(`💰 Actual cost: $${(successCount * 0.01).toFixed(2)}`);
    
    // Save report
    const report = {
        timestamp: new Date().toISOString(),
        totalFound: newImages.length,
        alreadyExisting: newImages.length - toGenerate.length,
        attempted: toGenerate.length,
        successful: successCount,
        failed: toGenerate.length - successCount,
        results
    };
    
    const reportPath = path.join(__dirname, 'new-diddy-scenes-report.json');
    await fs.writeFile(reportPath, JSON.stringify(report, null, 2));
    console.log(`💾 Report saved to: ${reportPath}`);
    console.log(`🎉 Image generation complete!`);
}

// Run the generator
generateAllNewSceneImages().catch(console.error);
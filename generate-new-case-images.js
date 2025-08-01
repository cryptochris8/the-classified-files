// Generate all images for the new expanded cases
const fs = require('fs');
const path = require('path');
const CONFIG = require('./config.js');
const ImageGenerator = require('./image-generator.js');

async function generateNewCaseImages() {
    console.log('🎨 Starting batch generation for all new case images...\n');
    
    // Check API key
    if (!CONFIG.STABILITY_API_KEY || CONFIG.STABILITY_API_KEY === 'YOUR-API-KEY-HERE') {
        console.error('❌ Please add your Stability AI API key to config.js');
        return;
    }

    // Load the image list
    const imageList = JSON.parse(fs.readFileSync('new-images-list.json', 'utf8'));
    
    console.log(`📊 Found ${imageList.length} images to generate`);
    console.log(`💰 Estimated cost: $${(imageList.length * 0.01).toFixed(2)}\n`);

    const generator = new ImageGenerator(CONFIG);
    let completed = 0;
    let failed = 0;
    const results = [];

    for (const imageData of imageList) {
        try {
            console.log(`\n[${completed + 1}/${imageList.length}] Generating: ${imageData.filename}`);
            console.log(`📚 Story: ${imageData.story}`);
            console.log(`📝 Prompt: ${imageData.prompt.substring(0, 100)}...`);
            
            await generator.generateImage(imageData.prompt, imageData.filename);
            
            completed++;
            results.push({ ...imageData, status: 'success' });
            console.log(`✅ Success!`);
            
            // Delay between requests
            if (completed < imageList.length) {
                await generator.delay(CONFIG.DELAY_BETWEEN_REQUESTS);
            }
        } catch (error) {
            failed++;
            results.push({ ...imageData, status: 'failed', error: error.message });
            console.error(`❌ Failed: ${error.message}`);
        }
    }

    // Summary report
    console.log('\n' + '='.repeat(60));
    console.log('📊 NEW CASE IMAGES GENERATION COMPLETE');
    console.log('='.repeat(60));
    console.log(`✅ Successfully generated: ${completed} images`);
    console.log(`❌ Failed: ${failed} images`);
    console.log(`💰 Total cost: $${(completed * 0.01).toFixed(2)}`);
    console.log(`📁 Images saved to: /images/`);
    
    // Save results report
    const report = {
        timestamp: new Date().toISOString(),
        totalImages: imageList.length,
        completed,
        failed,
        totalCost: (completed * 0.01).toFixed(2),
        results
    };
    
    fs.writeFileSync('new-images-generation-report.json', JSON.stringify(report, null, 2));
    console.log('\n📄 Detailed report saved to: new-images-generation-report.json');
    
    // List failed images for manual retry
    if (failed > 0) {
        console.log('\n❌ Failed images (retry these manually):');
        results.filter(r => r.status === 'failed').forEach(r => {
            console.log(`- ${r.filename}: ${r.error}`);
        });
    }
    
    console.log('\n🎉 All new case storylines now have AI-generated images!');
    console.log(`Your game now has ${46 + completed} total AI-generated images across 14 cases.`);
}

generateNewCaseImages().catch(console.error);
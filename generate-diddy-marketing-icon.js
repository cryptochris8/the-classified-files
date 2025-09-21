const fs = require('fs').promises;
const path = require('path');

// Import the AI image generation config
const CONFIG = require('./config.js');

// Diddy case marketing icon - designed to match existing game icons
const DIDDY_MARKETING_ICON = {
    filename: "diddy_case_marketing_icon.png",
    prompt: "Professional marketing icon for federal criminal case investigation game, federal courthouse with justice scales, gavel, and law enforcement badges, dark professional theme matching other game icons, clean vector-style illustration, high contrast, suitable for web marketing, corporate professional design"
};

async function generateStabilityImage(prompt, filename) {
    try {
        console.log(`🎨 Generating Marketing Icon: ${filename}`);
        console.log(`📝 Prompt: ${prompt}`);
        
        const response = await fetch('https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${CONFIG.STABILITY_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                text_prompts: [
                    {
                        text: prompt,
                        weight: 1
                    },
                    {
                        text: "blurry, distorted, low quality, cartoon, anime, unprofessional, cluttered",
                        weight: -1
                    }
                ],
                cfg_scale: CONFIG.IMAGE_CFG_SCALE,
                height: CONFIG.IMAGE_HEIGHT,
                width: CONFIG.IMAGE_WIDTH,
                steps: CONFIG.IMAGE_STEPS,
                samples: 1,
                style_preset: "photographic"
            })
        });

        if (!response.ok) {
            const errorData = await response.text();
            throw new Error(`Stability API error: ${response.status} - ${errorData}`);
        }

        const responseJSON = await response.json();
        
        if (responseJSON.artifacts && responseJSON.artifacts.length > 0) {
            const imageBase64 = responseJSON.artifacts[0].base64;
            const imageBuffer = Buffer.from(imageBase64, 'base64');
            
            // Save to both main images folder and website-repo images folder
            const mainImagePath = path.join(__dirname, 'images', filename);
            const websiteImagePath = path.join(__dirname, 'website-repo', 'images', filename);
            
            await fs.writeFile(mainImagePath, imageBuffer);
            await fs.writeFile(websiteImagePath, imageBuffer);
            
            console.log(`✅ Generated and saved to both locations: ${filename}`);
            return true;
        } else {
            throw new Error('No image data in response');
        }
    } catch (error) {
        console.error(`❌ Error generating ${filename}:`, error.message);
        return false;
    }
}

async function generateDiddyMarketingIcon() {
    console.log('🚀 Generating Diddy Case Marketing Icon');
    console.log('=======================================');
    
    const success = await generateStabilityImage(DIDDY_MARKETING_ICON.prompt, DIDDY_MARKETING_ICON.filename);
    
    if (success) {
        console.log('✅ Successfully generated Diddy case marketing icon!');
        console.log('📁 Saved to:');
        console.log('   - /images/ (main repository)');
        console.log('   - /website-repo/images/ (marketing website)');
        console.log('');
        console.log('🎯 Next step: Update website-repo/index.html to use new icon');
        console.log(`   Replace: federal_courthouse_morning.png`);
        console.log(`   With: ${DIDDY_MARKETING_ICON.filename}`);
    } else {
        console.log('❌ Failed to generate marketing icon');
    }
}

// Run the generation
if (require.main === module) {
    generateDiddyMarketingIcon().catch(console.error);
}

module.exports = {
    generateDiddyMarketingIcon,
    DIDDY_MARKETING_ICON
};
// Generate Dramatic UAP Images
const CONFIG = require('./config.js');
const ImageGenerator = require('./image-generator.js');

const dramaticImages = [
    {
        filename: "black_triangle_pentagon.png",
        prompt: "Massive black triangular UFO hovering over Pentagon at night, red pulsing lights, emergency vehicles below, dark threatening atmosphere"
    },
    {
        filename: "office_under_attack.png",
        prompt: "Pentagon office under alien attack, black triangle UFO outside window, emergency lighting, ice forming, scientist at computer with UAP data"
    },
    {
        filename: "frozen_evacuation.png", 
        prompt: "Pentagon stairwell covered in ice, frozen personnel, emergency evacuation failing, black triangle UFO effect"
    },
    {
        filename: "alien_communication.png",
        prompt: "Pentagon office with alien communication equipment, black triangle UFO outside, electromagnetic effects, scientist making first contact"
    },
    {
        filename: "career_destroyed.png",
        prompt: "Empty office with deleted computer files, scientist in despair, Pentagon badge being revoked, professional failure"
    },
    {
        filename: "heroic_sacrifice.png",
        prompt: "Scientist's final moments transmitting UAP data as alien energy overwhelms her, heroic sacrifice for truth, memorial service"
    },
    {
        filename: "successful_transmission.png",
        prompt: "Pentagon office with successful data upload, scientist victorious, UAP evidence transmitted to world, heroic moment"
    },
    {
        filename: "frozen_death.png",
        prompt: "Pentagon stairwell with frozen bodies, scattered UAP documents covered in ice, dark tragedy"
    },
    {
        filename: "evidence_deleted.png",
        prompt: "Computer screen showing deleted UAP files, scientist in anguish, moral compromise, lost opportunity"
    },
    {
        filename: "alien_collaboration.png",
        prompt: "Human scientist working with alien beings in advanced spacecraft, galactic cooperation, diplomatic breakthrough"
    },
    {
        filename: "human_resistance.png",
        prompt: "Pentagon scientist defying alien ultimatum, military forces responding, humanity choosing independence"
    }
];

async function generateDramaticImages() {
    console.log('🎨 Generating dramatic UAP images...\n');
    
    if (!CONFIG.STABILITY_API_KEY || CONFIG.STABILITY_API_KEY === 'YOUR-API-KEY-HERE') {
        console.error('❌ Please add your Stability AI API key to config.js');
        return;
    }

    const generator = new ImageGenerator(CONFIG);
    let completed = 0;
    let failed = 0;

    for (const image of dramaticImages) {
        try {
            console.log(`\n[${completed + 1}/${dramaticImages.length}] Generating: ${image.filename}`);
            console.log(`📝 Prompt: ${image.prompt.substring(0, 100)}...`);
            
            await generator.generateImage(image.prompt, image.filename);
            completed++;
            
            // Delay between requests
            if (completed < dramaticImages.length) {
                await generator.delay(CONFIG.DELAY_BETWEEN_REQUESTS);
            }
        } catch (error) {
            failed++;
            console.error(`❌ Failed: ${error.message}`);
        }
    }

    console.log('\n' + '='.repeat(60));
    console.log('📊 DRAMATIC IMAGES COMPLETE');
    console.log('='.repeat(60));
    console.log(`✅ Successfully generated: ${completed} images`);
    console.log(`❌ Failed: ${failed} images`);
    console.log(`📁 Images saved to: /images/`);
}

if (require.main === module) {
    generateDramaticImages().catch(console.error);
}
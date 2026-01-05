const fs = require('fs').promises;
const path = require('path');

// Charlie Kirk Assassination case image prompts from the story file
const CHARLIE_KIRK_IMAGES = [
    {
        filename: "kirk_newsroom_investigation.png",
        prompt: "Late night newsroom with investigative journalist examining classified documents about political assassination on desk, dramatic shadows, journalism thriller atmosphere, realistic photography"
    },
    {
        filename: "kirk_surveillance_footage.png",
        prompt: "Multiple security camera feeds on monitors showing university campus timeline, surveillance analysis screen, investigative atmosphere, digital forensics"
    },
    {
        filename: "kirk_crime_scene_investigation.png",
        prompt: "Aerial view of university campus crime scene with police tape and forensic markers, outdoor speaking event area, investigative atmosphere, news photography style"
    },
    {
        filename: "kirk_suspect_profile.png",
        prompt: "Investigation board with suspect profile, photos, timeline documents pinned with red string connections, detective office atmosphere"
    },
    {
        filename: "kirk_timeline_investigation.png",
        prompt: "Investigation timeline board showing political transformation with photos, dates, connecting threads, crime investigation setup"
    },
    {
        filename: "kirk_digital_evidence.png",
        prompt: "Digital forensics screen showing encrypted messages, text transcripts, social media analysis, evidence investigation"
    },
    {
        filename: "kirk_forensic_evidence.png",
        prompt: "Forensic lab analysis of rifle and bullet casings with inscriptions visible under examination, evidence tags, professional laboratory setting"
    },
    {
        filename: "kirk_investigation_board.png",
        prompt: "FBI investigation board with organizational charts showing connections, evidence photos, analysis documents, federal investigation room"
    },
    {
        filename: "kirk_tpusa_organization_profile.png",
        prompt: "Organization profile board with Turning Point USA logo, timeline, key figures, and financial documents, corporate investigation style"
    },
    {
        filename: "kirk_controversy_documents.png",
        prompt: "Investigation documents showing organizational controversies, financial records, social media evidence spread on desk"
    },
    {
        filename: "kirk_political_statements.png",
        prompt: "Collection of political statements and news clippings about controversial positions, media investigation style"
    },
    {
        filename: "kirk_witness_interview.png",
        prompt: "Sensitive interview scene with silhouette of witness in protected setting, journalist taking notes, investigation atmosphere"
    },
    {
        filename: "kirk_witness_testimony.png",
        prompt: "Clandestine meeting in coffee shop, journalist with notepad, witness providing documents, noir investigation style"
    },
    {
        filename: "kirk_manhunt_timeline.png",
        prompt: "Law enforcement timeline board showing 33-hour manhunt with photos, locations, timestamps, police investigation room"
    },
    {
        filename: "kirk_legal_proceedings.png",
        prompt: "Legal documents spread on desk showing charges, court filings, evidence list, professional legal setting"
    },
    {
        filename: "kirk_aftermath_memorial.png",
        prompt: "Massive memorial service at stadium with thousands of attendees, somber atmosphere, news photography style"
    },
    {
        filename: "kirk_final_report.png",
        prompt: "Completed investigation report on desk with all evidence compiled, stamps and folders, professional journalism atmosphere"
    },
    {
        filename: "kirk_case_closed.png",
        prompt: "Case file folder being closed with stamps reading Investigation Complete, professional office atmosphere"
    },
    {
        filename: "kirk_quiz_screen.png",
        prompt: "Investigation quiz screen with multiple choice questions about the case, digital learning interface"
    },
    {
        filename: "kirk_university_investigation.png",
        prompt: "University records and investigation documents about student enrollment, academic investigation setting"
    },
    {
        filename: "kirk_digital_investigation.png",
        prompt: "Digital forensics screens showing social media analysis, chat logs, radicalization pathway diagrams, cyber investigation"
    },
    {
        filename: "kirk_investigation_report.png",
        prompt: "Professional investigation report on desk with evidence summary and next steps, journalism workspace"
    },
    {
        filename: "kirk_press_conference.png",
        prompt: "Governor at press conference podium with media present, official state seal visible, professional news setting"
    },
    {
        filename: "kirk_evidence_catalogue.png",
        prompt: "Complete evidence catalogue spread on investigation desk with numbered items, photos, and labels, organized forensics"
    }
];

// Function to generate images using the ImageGenerator class
async function generateCharlieKirkImages() {
    console.log('🎬 Starting Charlie Kirk Case Image Generation...\n');

    // Check if config exists
    let config;
    try {
        config = require('./config.js');
    } catch (e) {
        console.log('⚠️  No config.js found. Creating template...');
        console.log('Please add your API keys to config.js and run again.\n');

        const configTemplate = `// Image Generation Configuration
module.exports = {
    // Choose 'stability' or 'openai'
    IMAGE_SERVICE: 'openai',

    // API Keys (add your own)
    STABILITY_API_KEY: 'your-stability-api-key',
    OPENAI_API_KEY: 'your-openai-api-key',

    // Image settings
    IMAGE_WIDTH: 1024,
    IMAGE_HEIGHT: 1024,
    IMAGE_STEPS: 30,
    IMAGE_CFG_SCALE: 7,

    // Generation settings
    SAVE_TO_DISK: true,
    MAX_RETRIES: 3,
    RETRY_DELAY: 2000,
    RATE_LIMIT_DELAY: 1000
};`;

        await fs.writeFile('./config.js', configTemplate);
        return;
    }

    // Check if ImageGenerator exists
    let ImageGenerator;
    try {
        ImageGenerator = require('./image-generator.js');
    } catch (e) {
        console.error('❌ image-generator.js not found!');
        return;
    }

    const generator = new ImageGenerator(config);

    // Create images directory if it doesn't exist
    const imagesDir = path.join(__dirname, 'images');
    try {
        await fs.access(imagesDir);
    } catch {
        await fs.mkdir(imagesDir);
        console.log('📁 Created images directory\n');
    }

    // Check which images already exist
    const existingImages = [];
    const missingImages = [];

    for (const image of CHARLIE_KIRK_IMAGES) {
        try {
            await fs.access(path.join(imagesDir, image.filename));
            existingImages.push(image.filename);
        } catch {
            missingImages.push(image);
        }
    }

    console.log(`📊 Status:`);
    console.log(`   ✅ Existing images: ${existingImages.length}`);
    console.log(`   🔄 Images to generate: ${missingImages.length}\n`);

    if (missingImages.length === 0) {
        console.log('✨ All Charlie Kirk case images already exist!');
        return;
    }

    // Generate missing images
    let successCount = 0;
    let failCount = 0;

    for (let i = 0; i < missingImages.length; i++) {
        const image = missingImages[i];
        console.log(`\n[${i + 1}/${missingImages.length}] Generating: ${image.filename}`);
        console.log(`   Prompt: ${image.prompt.substring(0, 60)}...`);

        try {
            await generator.generateImage(image.prompt, image.filename);
            successCount++;
            console.log(`   ✅ Success!`);
        } catch (error) {
            failCount++;
            console.log(`   ❌ Failed: ${error.message}`);
        }

        // Rate limiting
        if (i < missingImages.length - 1) {
            console.log(`   ⏳ Waiting ${config.RATE_LIMIT_DELAY}ms...`);
            await new Promise(resolve => setTimeout(resolve, config.RATE_LIMIT_DELAY));
        }
    }

    console.log('\n========================================');
    console.log('🎬 Charlie Kirk Case Image Generation Complete!');
    console.log(`   ✅ Succeeded: ${successCount}`);
    console.log(`   ❌ Failed: ${failCount}`);
    console.log('========================================\n');
}

// Export for use in other scripts
module.exports = {
    CHARLIE_KIRK_IMAGES,
    generateCharlieKirkImages
};

// Run if called directly
if (require.main === module) {
    generateCharlieKirkImages().catch(console.error);
}

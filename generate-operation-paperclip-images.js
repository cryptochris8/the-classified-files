const fs = require('fs').promises;
const path = require('path');

// Operation Paperclip case image prompts - 37 images
const OPERATION_PAPERCLIP_IMAGES = [
    // Core Program Images
    {
        filename: "nazi_scientist_recruitment.png",
        prompt: "1945 post-war Germany, American military officials interviewing German scientists, Nazi documents on table, moral compromise moment"
    },
    {
        filename: "paperclip_files.png",
        prompt: "Government documents with paperclips, classified files being altered, typewritten pages, 1940s bureaucracy, secret program"
    },
    {
        filename: "paperclip_roster.png",
        prompt: "Wall of personnel files, hundreds of German scientist photos and dossiers, 1940s government facility, secret recruitment program"
    },
    {
        filename: "falsified_records.png",
        prompt: "1940s government documents being altered, classified files with sections redacted, typewriter changing records, cover-up"
    },

    // Von Braun
    {
        filename: "von_braun_profile.png",
        prompt: "Wernher von Braun duality portrait, split between Nazi SS uniform and NASA suit, V-2 rockets background, moral complexity"
    },
    {
        filename: "von_braun_nasa.png",
        prompt: "Wernher von Braun at NASA, Saturn V rocket background, American space program hero, 1960s Kennedy Space Center"
    },
    {
        filename: "von_braun_evidence.png",
        prompt: "Documents showing von Braun's Nazi connections, SS membership card, V-2 slave labor evidence, classified files"
    },

    // Concentration Camps & War Crimes
    {
        filename: "mittelbau_dora.png",
        prompt: "Underground V-2 rocket factory tunnels, concentration camp forced labor, dark industrial nightmare, historical horror"
    },
    {
        filename: "dachau_experiments.png",
        prompt: "Nazi medical experiment documentation, Dachau concentration camp records, human experimentation files, historical atrocity"
    },
    {
        filename: "survivor_testimony.png",
        prompt: "Holocaust survivor giving testimony, concentration camp witness, 1940s courtroom or interview setting, historical record"
    },

    // Key Figures
    {
        filename: "strughold_profile.png",
        prompt: "Hubertus Strughold aviation medicine scientist, space medicine pioneer, controversial Nazi scientist profile"
    },
    {
        filename: "strughold_legacy.png",
        prompt: "Strughold award being renamed, space medicine legacy controversy, medical ethics debate, historical reckoning"
    },
    {
        filename: "rudolph_case.png",
        prompt: "Arthur Rudolph deportation documents, Saturn V engineer, war crimes investigation, justice delayed"
    },
    {
        filename: "rudolph_controversy.png",
        prompt: "Arthur Rudolph case files, NASA engineer war crimes evidence, Mittelbau-Dora connection, denaturalization"
    },
    {
        filename: "bosquet_wev.png",
        prompt: "Colonel Bosquet Wev JIOA director, Operation Paperclip administrator, 1940s military official portrait"
    },

    // Government & Cover-up
    {
        filename: "chain_of_command.png",
        prompt: "Military chain of command diagram, Pentagon officials, JIOA structure, who ordered Paperclip cover-up"
    },
    {
        filename: "state_department.png",
        prompt: "State Department objections documents, 1940s diplomatic protest, government disagreement over Nazi recruitment"
    },
    {
        filename: "truman_directive.png",
        prompt: "President Truman executive order document, 1945 directive prohibiting Nazi recruitment, ignored orders"
    },
    {
        filename: "legal_violations.png",
        prompt: "U.S. law violations documented, immigration fraud, falsified records, government lawbreaking evidence"
    },
    {
        filename: "silencing_dissent.png",
        prompt: "Government officials silencing objectors, classified stamps on protests, bureaucratic suppression"
    },

    // Cold War Context
    {
        filename: "cold_war_competition.png",
        prompt: "1940s Cold War map, US and Soviet spheres, German scientists as pawns, ideological battle visualization"
    },
    {
        filename: "soviet_comparison.png",
        prompt: "Operation Osoaviakhim comparison, Soviet scientist recruitment, Cold War parallel programs, East vs West"
    },

    // Categories of Scientists
    {
        filename: "medical_experiments.png",
        prompt: "Nazi medical experiment records, aviation medicine research, human subjects documentation, ethical violations"
    },
    {
        filename: "medical_coverup.png",
        prompt: "Medical experiment evidence hidden, classified health research files, cover-up of human experimentation"
    },
    {
        filename: "chemical_weapons.png",
        prompt: "Chemical weapons scientists files, nerve agent research documents, Nazi chemical warfare program"
    },
    {
        filename: "intelligence_assets.png",
        prompt: "Nazi intelligence officers recruited, spy networks, OSS/CIA operations, Cold War espionage"
    },
    {
        filename: "ss_records.png",
        prompt: "Nazi SS personnel files, membership cards with skull insignia, scientists in black uniforms, documentation"
    },

    // Technology Gains
    {
        filename: "technology_gains.png",
        prompt: "V-2 rocket technology transfer, German engineering secrets, American space program foundations, scientific advancement"
    },

    // Justice & Legacy
    {
        filename: "no_prosecution.png",
        prompt: "Justice denied documents, war criminals unprosecuted, Nuremberg exception, accountability failure"
    },
    {
        filename: "justice_efforts.png",
        prompt: "OSI Nazi hunting unit, belated justice efforts, 1980s war crimes investigations, accountability pursuit"
    },
    {
        filename: "paperclip_exposure.png",
        prompt: "Journalists exposing Operation Paperclip, investigative reporting, 1980s revelations, truth uncovered"
    },
    {
        filename: "program_continuation.png",
        prompt: "Operation Paperclip expansion, program growing despite objections, 1950s government facility"
    },
    {
        filename: "american_honors.png",
        prompt: "Nazi scientists receiving American awards, medals and honors, controversial recognition, moral irony"
    },

    // Moral Questions
    {
        filename: "moral_costs.png",
        prompt: "Scales of justice weighing technology vs war crimes, moral compromise visualization, ethical dilemma"
    },
    {
        filename: "legacy_debate.png",
        prompt: "Historians debating Paperclip legacy, academic discussion, was it justified panel, ongoing controversy"
    },
    {
        filename: "lessons_learned.png",
        prompt: "Historical lessons from Paperclip, ethics in science, accountability importance, educational summary"
    },

    // Ending
    {
        filename: "investigation_complete.png",
        prompt: "Operation Paperclip investigation files complete, truth documented, historical record established, case closed"
    }
];

// Function to generate images using the ImageGenerator class
async function generateOperationPaperclipImages() {
    console.log('🎬 Starting Operation Paperclip Image Generation...\n');
    console.log(`📊 Total images to check: ${OPERATION_PAPERCLIP_IMAGES.length}\n`);

    // Check if config exists
    let config;
    try {
        config = require('./config.js');
    } catch (e) {
        console.log('⚠️  No config.js found. Please create config.js with your API keys.\n');
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

    for (const image of OPERATION_PAPERCLIP_IMAGES) {
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
        console.log('✨ All Operation Paperclip images already exist!');
        return;
    }

    // Estimate cost
    const estimatedCost = missingImages.length * 0.04;
    console.log(`💰 Estimated cost: $${estimatedCost.toFixed(2)} (DALL-E 3) or $${(missingImages.length * 0.01).toFixed(2)} (Stability AI)\n`);

    // Generate missing images
    let successCount = 0;
    let failCount = 0;

    for (let i = 0; i < missingImages.length; i++) {
        const image = missingImages[i];
        console.log(`\n[${i + 1}/${missingImages.length}] Generating: ${image.filename}`);
        console.log(`   Prompt: ${image.prompt.substring(0, 70)}...`);

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
            const delay = config.RATE_LIMIT_DELAY || 1000;
            console.log(`   ⏳ Waiting ${delay}ms...`);
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }

    console.log('\n========================================');
    console.log('🎬 Operation Paperclip Image Generation Complete!');
    console.log(`   ✅ Succeeded: ${successCount}`);
    console.log(`   ❌ Failed: ${failCount}`);
    console.log('========================================\n');
}

// Export for use in other scripts
module.exports = {
    OPERATION_PAPERCLIP_IMAGES,
    generateOperationPaperclipImages
};

// Run if called directly
if (require.main === module) {
    generateOperationPaperclipImages().catch(console.error);
}

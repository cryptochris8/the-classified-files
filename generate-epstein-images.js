const fs = require('fs').promises;
const path = require('path');

// Epstein case image prompts - All images
const EPSTEIN_IMAGES = [
    // Core Investigation
    {
        filename: "newsroom_investigation.png",
        prompt: "Late night newsroom with exhausted female journalist examining classified documents, dramatic shadows, journalism thriller atmosphere"
    },
    {
        filename: "classified_memo_reconstructed.png",
        prompt: "Reconstructed FBI memo with redacted text, evidence tape, newsroom desk with scattered documents"
    },
    {
        filename: "witness_testimony.png",
        prompt: "Emotional interview scene with silhouetted survivor sharing testimony with journalist, sensitive documentary style"
    },
    {
        filename: "palm_beach_police_station.png",
        prompt: "Shocking revelation of plea deal documents with highlighted sections showing controversial immunity clauses"
    },
    {
        filename: "conspiracy_uncovered.png",
        prompt: "FBI agent in secure room sharing classified documents with journalist, whistleblower atmosphere"
    },
    {
        filename: "digital_forensics_lab.png",
        prompt: "Digital financial records on multiple monitors, data analysis visualization, forensic accounting workspace, cybercrime investigation mood"
    },
    {
        filename: "federal_courthouse_2019.png",
        prompt: "Legal team filing preemptive lawsuit at federal courthouse, dramatic legal action scene"
    },
    {
        filename: "educational_conclusion.png",
        prompt: "Investigation conclusion showing institutional accountability and reform"
    },

    // Key Evidence
    {
        filename: "flight_logs_evidence.png",
        prompt: "Aviation flight logs with passenger manifests, private jet records, investigative documents spread on desk"
    },
    {
        filename: "timeline_evidence.png",
        prompt: "Investigation timeline board with dates and events connected by red string, suspicious pattern emerging"
    },
    {
        filename: "island_investigation.png",
        prompt: "Aerial view of private island with mysterious structures, Caribbean setting, investigation evidence"
    },
    {
        filename: "security_analysis.png",
        prompt: "Prison security cameras, guard stations, investigation into multiple failures, incident report"
    },
    {
        filename: "document_timing.png",
        prompt: "Court documents with timestamps, calendar showing critical dates, statistical analysis"
    },
    {
        filename: "autopsy_controversy.png",
        prompt: "Medical examiner documents, forensic analysis, disputed findings, professional disagreement"
    },
    {
        filename: "maxwell_investigation.png",
        prompt: "Investigation board with connections, court documents, convicted accomplice case files"
    },
    {
        filename: "institutional_failure.png",
        prompt: "Broken scales of justice, failed institutions, systemic corruption visualization"
    }
];

// Function to generate images using the ImageGenerator class
async function generateEpsteinImages() {
    console.log('Starting Epstein Investigation Image Generation...\n');
    console.log(`Total images to check: ${EPSTEIN_IMAGES.length}\n`);

    // Check if config exists
    let config;
    try {
        config = require('./config.js');
    } catch (e) {
        console.log('No config.js found. Please create config.js with your API keys.\n');
        return;
    }

    // Check if ImageGenerator exists
    let ImageGenerator;
    try {
        ImageGenerator = require('./image-generator.js');
    } catch (e) {
        console.error('image-generator.js not found!');
        return;
    }

    const generator = new ImageGenerator(config);

    // Create images directory if it doesn't exist
    const imagesDir = path.join(__dirname, 'images');
    try {
        await fs.access(imagesDir);
    } catch {
        await fs.mkdir(imagesDir);
        console.log('Created images directory\n');
    }

    // Check which images already exist
    const existingImages = [];
    const missingImages = [];

    for (const image of EPSTEIN_IMAGES) {
        try {
            await fs.access(path.join(imagesDir, image.filename));
            existingImages.push(image.filename);
        } catch {
            missingImages.push(image);
        }
    }

    console.log(`Status:`);
    console.log(`   Existing images: ${existingImages.length}`);
    console.log(`   Images to generate: ${missingImages.length}\n`);

    if (missingImages.length === 0) {
        console.log('All Epstein Investigation images already exist!');
        return;
    }

    // Estimate cost
    const estimatedCost = missingImages.length * 0.04;
    console.log(`Estimated cost: $${estimatedCost.toFixed(2)} (DALL-E 3) or $${(missingImages.length * 0.01).toFixed(2)} (Stability AI)\n`);

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
            console.log(`   Success!`);
        } catch (error) {
            failCount++;
            console.log(`   Failed: ${error.message}`);
        }

        // Rate limiting
        if (i < missingImages.length - 1) {
            const delay = config.RATE_LIMIT_DELAY || 1000;
            console.log(`   Waiting ${delay}ms...`);
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }

    console.log('\n========================================');
    console.log('Epstein Investigation Image Generation Complete!');
    console.log(`   Succeeded: ${successCount}`);
    console.log(`   Failed: ${failCount}`);
    console.log('========================================\n');
}

// Export for use in other scripts
module.exports = {
    EPSTEIN_IMAGES,
    generateEpsteinImages
};

// Run if called directly
if (require.main === module) {
    generateEpsteinImages().catch(console.error);
}

const fs = require('fs').promises;
const path = require('path');

// New Epstein case ending images - for expanded storylines
const EPSTEIN_NEW_IMAGES = [
    // Alternative Endings
    {
        filename: "story_killed.png",
        prompt: "Dejected female journalist in empty newsroom at dawn, rejected story manuscript on desk, documents being packed into boxes, bittersweet atmosphere, dramatic morning light through windows"
    },
    {
        filename: "reflection_ending.png",
        prompt: "Journalist alone reviewing case files at night, learning from failure, determination visible on face, scattered notes and coffee cups, introspective mood"
    },
    {
        filename: "partial_victory.png",
        prompt: "Newspaper with partially redacted headlines, mixed emotions on journalist face, some justice achieved but incomplete, bittersweet newsroom scene"
    },
    {
        filename: "anonymous_leak.png",
        prompt: "Silhouetted journalist in shadows watching multiple international news broadcasts on screens, anonymous hero moment, justice achieved quietly, dramatic lighting"
    },
    {
        filename: "source_protection_ending.png",
        prompt: "Journalist being escorted by FBI agents but looking peaceful and resolute, protecting sources, ethical victory, courthouse steps, dramatic journalism scene"
    },
    {
        filename: "mentor_ending.png",
        prompt: "Older experienced journalist teaching young reporters in classroom setting, investigation boards on walls, legacy of journalism, warm inspiring atmosphere"
    },
    {
        filename: "rushed_publication.png",
        prompt: "Newspaper with corrections and retractions, journalist with head in hands at desk, credibility destroyed, cautionary tale atmosphere, harsh office lighting"
    },
    {
        filename: "rushed_reflection.png",
        prompt: "Journalist studying fact-checking guides and journalism ethics books, learning from mistakes, determination to improve, late night study scene"
    },

    // Expanded Investigation Paths
    {
        filename: "conspiracy_trap.png",
        prompt: "Frustrated journalist surrounded by unverified conspiracy theory printouts and red string boards, realizing mistake, wasted time, messy desk with coffee cups"
    },
    {
        filename: "evidence_compilation.png",
        prompt: "Financial timeline on large evidence board, journalist compiling damning money trail documents, organized investigation workspace, professional journalism"
    },
    {
        filename: "wealth_mystery.png",
        prompt: "Financial documents with question marks, mysterious wealth sources investigation, dead ends and unanswered questions, noir investigation atmosphere"
    },
    {
        filename: "rabbit_hole.png",
        prompt: "Exhausted journalist surrounded by unverified theories and dead-end documents, clock showing late hour, deadline pressure, investigative burnout scene"
    },
    {
        filename: "evidence_correlation.png",
        prompt: "Split screen showing victim testimony documents matching financial bank records perfectly, smoking gun evidence moment, professional forensic journalism"
    }
];

// Function to generate images using the ImageGenerator class
async function generateEpsteinNewImages() {
    console.log('Starting Epstein New Endings Image Generation...\n');
    console.log(`Total images to check: ${EPSTEIN_NEW_IMAGES.length}\n`);

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

    for (const image of EPSTEIN_NEW_IMAGES) {
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
        console.log('All Epstein New Ending images already exist!');
        return;
    }

    // List missing images
    console.log('Missing images:');
    missingImages.forEach(img => console.log(`   - ${img.filename}`));
    console.log('');

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
    console.log('Epstein New Endings Image Generation Complete!');
    console.log(`   Succeeded: ${successCount}`);
    console.log(`   Failed: ${failCount}`);
    console.log('========================================\n');
}

// Export for use in other scripts
module.exports = {
    EPSTEIN_NEW_IMAGES,
    generateEpsteinNewImages
};

// Run if called directly
if (require.main === module) {
    generateEpsteinNewImages().catch(console.error);
}

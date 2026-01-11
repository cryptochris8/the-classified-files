const fs = require('fs').promises;
const path = require('path');

// Missing Diddy case image prompts - 8 images
const DIDDY_MISSING_IMAGES = [
    {
        filename: "defiant_investigation.png",
        prompt: "Determined federal investigators continuing work despite obstacles, evidence review, prosecution preparation, justice pursuit"
    },
    {
        filename: "chief_of_staff_investigation.png",
        prompt: "Federal investigation of criminal organization leadership, evidence documentation, organizational chart, prosecution preparation"
    },
    {
        filename: "security_network_investigation.png",
        prompt: "Criminal organization security network investigation, former law enforcement corruption, counter-surveillance operations, federal exposure"
    },
    {
        filename: "crypto_investigation.png",
        prompt: "Cryptocurrency money laundering investigation, blockchain analysis, federal forensics, digital financial crimes"
    },
    {
        filename: "accounting_firm_investigation.png",
        prompt: "Accounting firm criminal investigation, financial fraud documentation, professional enabler prosecution, federal audit"
    },
    {
        filename: "banking_compliance_investigation.png",
        prompt: "Banking compliance investigation, AML failures, federal regulatory enforcement, financial institution accountability"
    },
    {
        filename: "payment_processor_investigation.png",
        prompt: "Payment processor investigation, financial technology crimes, merchant fraud, federal prosecution of financial intermediaries"
    },
    {
        filename: "executive_prosecution_analysis.png",
        prompt: "Federal prosecution strategy analysis, criminal enterprise dismantling, executive defendant profiles, comprehensive prosecution planning"
    }
];

// Function to generate images using the ImageGenerator class
async function generateDiddyMissingImages() {
    console.log('Starting Diddy Missing Images Generation...\n');
    console.log(`Total images to check: ${DIDDY_MISSING_IMAGES.length}\n`);

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

    for (const image of DIDDY_MISSING_IMAGES) {
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
        console.log('All Diddy missing images already exist!');
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
    console.log('Diddy Missing Images Generation Complete!');
    console.log(`   Succeeded: ${successCount}`);
    console.log(`   Failed: ${failCount}`);
    console.log('========================================\n');
}

// Export for use in other scripts
module.exports = {
    DIDDY_MISSING_IMAGES,
    generateDiddyMissingImages
};

// Run if called directly
if (require.main === module) {
    generateDiddyMissingImages().catch(console.error);
}

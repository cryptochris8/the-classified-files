const fs = require('fs').promises;
const path = require('path');

// Social media marketing images for launch day
const SOCIAL_IMAGES = [
    {
        filename: "social_launch_day.png",
        prompt: "DECLASSIFIED game launch promotional image, dramatic classified folder opening with light rays emerging, red TOP SECRET stamps, dark mysterious background, professional game marketing art, cinematic lighting"
    },
    {
        filename: "social_uap.png",
        prompt: "UFO UAP disclosure investigation promotional art, mysterious triangular craft silhouette against night sky, Pentagon building in background, classified documents floating, dramatic blue and black color scheme, game marketing style"
    },
    {
        filename: "social_epstein.png",
        prompt: "Epstein investigation case file promotional art, shadowy network connections, flight logs and documents, scales of justice broken, dark noir atmosphere, investigative journalism theme, game marketing style"
    },
    {
        filename: "social_jfk.png",
        prompt: "JFK assassination investigation promotional art, Dallas 1963 motorcade silhouette, bullet trajectory lines, classified CIA documents, vintage photograph aesthetic with modern game marketing style, dramatic red and sepia tones"
    },
    {
        filename: "social_watergate.png",
        prompt: "Watergate scandal investigation promotional art, Nixon silhouette, tape reels, Washington DC at night, newspaper headlines, 1970s aesthetic with modern game marketing style, dramatic shadows"
    },
    {
        filename: "social_hunterbiden.png",
        prompt: "Hunter Biden laptop investigation promotional art, laptop computer with emails floating out, social media icons being suppressed, modern political thriller aesthetic, game marketing style, blue and red contrast"
    },
    {
        filename: "social_mkultra.png",
        prompt: "MKUltra CIA mind control investigation promotional art, fractured mind visualization, LSD patterns, CIA headquarters silhouette, burned documents, sinister laboratory aesthetic, game marketing style"
    },
    {
        filename: "social_september11.png",
        prompt: "September 11 investigation promotional art, redacted commission report pages, intelligence agency seals, timeline with warning signs, somber memorial aesthetic with investigative theme, game marketing style"
    },
    {
        filename: "social_snowden.png",
        prompt: "Snowden NSA surveillance investigation promotional art, digital data streams, eye watching through screens, classified NSA documents, Moscow and Washington skylines, cyber thriller aesthetic, game marketing style"
    },
    {
        filename: "social_pentagonpapers.png",
        prompt: "Pentagon Papers investigation promotional art, 1970s newsroom printing press, Vietnam War imagery in background, classified documents spilling out, journalism thriller aesthetic, game marketing style"
    },
    {
        filename: "social_cointelpro.png",
        prompt: "COINTELPRO FBI investigation promotional art, civil rights era imagery, surveillance files and photographs, FBI seal cracked, protest silhouettes, dramatic black and white with red accents, game marketing style"
    },
    {
        filename: "social_irancontra.png",
        prompt: "Iran-Contra scandal investigation promotional art, shredded documents, weapons crates, White House and Tehran imagery, Oliver North silhouette, 1980s political thriller aesthetic, game marketing style"
    },
    {
        filename: "social_panamapapers.png",
        prompt: "Panama Papers investigation promotional art, millions of documents flooding from computer, shell company network visualization, global money flow, modern financial thriller aesthetic, game marketing style"
    },
    {
        filename: "social_tuskegee.png",
        prompt: "Tuskegee experiment investigation promotional art, 1940s medical imagery, government documents with CONFIDENTIAL stamps, broken Hippocratic oath symbol, somber historical documentary aesthetic, game marketing style"
    },
    {
        filename: "social_paperclip.png",
        prompt: "Operation Paperclip investigation promotional art, Nazi scientist silhouettes becoming American scientists, rocket imagery, WWII to Cold War transition, declassified files, dark historical thriller aesthetic, game marketing style"
    },
    {
        filename: "social_diddy.png",
        prompt: "Diddy federal case investigation promotional art, music industry empire crumbling, FBI raid imagery, celebrity scandal aesthetic, modern entertainment thriller, neon lights and dark shadows, game marketing style"
    },
    {
        filename: "social_charliekirk.png",
        prompt: "Political assassination investigation promotional art, crime scene tape, political rally silhouette, evidence markers, American flag at half-mast, modern political thriller aesthetic, game marketing style"
    }
];

async function generateSocialImages() {
    console.log('Starting Social Media Image Generation...\n');
    console.log(`Total images to generate: ${SOCIAL_IMAGES.length}\n`);

    let config;
    try {
        config = require('./config.js');
    } catch (e) {
        console.log('No config.js found. Please create config.js with your API keys.\n');
        return;
    }

    let ImageGenerator;
    try {
        ImageGenerator = require('./image-generator.js');
    } catch (e) {
        console.error('image-generator.js not found!');
        return;
    }

    const generator = new ImageGenerator(config);

    const imagesDir = path.join(__dirname, 'images', 'social');
    try {
        await fs.access(imagesDir);
    } catch {
        await fs.mkdir(imagesDir, { recursive: true });
        console.log('Created images/social directory\n');
    }

    const existingImages = [];
    const missingImages = [];

    for (const image of SOCIAL_IMAGES) {
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
        console.log('All social media images already exist!');
        return;
    }

    console.log('Missing images:');
    missingImages.forEach(img => console.log(`   - ${img.filename}`));
    console.log('');

    const estimatedCost = missingImages.length * 0.04;
    console.log(`Estimated cost: $${estimatedCost.toFixed(2)} (DALL-E 3)\n`);

    let successCount = 0;
    let failCount = 0;

    for (let i = 0; i < missingImages.length; i++) {
        const image = missingImages[i];
        console.log(`\n[${i + 1}/${missingImages.length}] Generating: ${image.filename}`);
        console.log(`   Prompt: ${image.prompt.substring(0, 70)}...`);

        try {
            // Generate to social subfolder (generator prepends 'images/' so we just pass 'social/filename')
            const outputPath = path.join('social', image.filename);
            await generator.generateImage(image.prompt, outputPath);
            successCount++;
            console.log(`   Success!`);
        } catch (error) {
            failCount++;
            console.log(`   Failed: ${error.message}`);
        }

        if (i < missingImages.length - 1) {
            const delay = config.RATE_LIMIT_DELAY || 1000;
            console.log(`   Waiting ${delay}ms...`);
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }

    console.log('\n========================================');
    console.log('Social Media Image Generation Complete!');
    console.log(`   Succeeded: ${successCount}`);
    console.log(`   Failed: ${failCount}`);
    console.log(`   Location: images/social/`);
    console.log('========================================\n');
}

module.exports = { SOCIAL_IMAGES, generateSocialImages };

if (require.main === module) {
    generateSocialImages().catch(console.error);
}

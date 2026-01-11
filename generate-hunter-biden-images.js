const fs = require('fs').promises;
const path = require('path');

// Hunter Biden Laptop case image prompts - 43 images
const HUNTER_BIDEN_IMAGES = [
    // Repair Shop & Initial Discovery
    {
        filename: "computer_repair_shop.png",
        prompt: "Small computer repair shop interior in Delaware, laptop on counter with repair ticket, professional setting, no people visible"
    },
    {
        filename: "repair_invoice.png",
        prompt: "Close-up of computer repair invoice on desk, April 2019 date visible, water damage notes, documentary style"
    },
    {
        filename: "shop_owner.png",
        prompt: "Empty computer repair shop counter, work area with tools and equipment, small business atmosphere"
    },

    // FBI & Law Enforcement
    {
        filename: "fbi_headquarters.png",
        prompt: "FBI headquarters building exterior, J. Edgar Hoover Building, official government architecture, daytime"
    },
    {
        filename: "legal_documents.png",
        prompt: "Official legal documents and FBI subpoena paperwork on desk, professional legal setting, government stamps"
    },
    {
        filename: "federal_courthouse.png",
        prompt: "Federal courthouse exterior with classical columns, official architecture, American flags, justice system"
    },
    {
        filename: "doj_investigation.png",
        prompt: "Department of Justice building, official investigation setting, government architecture, serious atmosphere"
    },
    {
        filename: "special_counsel.png",
        prompt: "Special counsel office setting, legal investigation documents, federal prosecution materials"
    },

    // Digital Forensics
    {
        filename: "data_analysis.png",
        prompt: "Computer forensics lab with monitors showing data analysis, professional setting, digital investigation"
    },
    {
        filename: "forensic_lab.png",
        prompt: "Digital forensics laboratory with authentication software on screens, technical professional environment"
    },
    {
        filename: "digital_forensics.png",
        prompt: "Digital forensic examination setup, hard drive analysis equipment, technical investigation tools"
    },

    // Media Coverage
    {
        filename: "newsroom_october.png",
        prompt: "Busy newsroom during breaking news, journalists at computers, October 2020 election atmosphere"
    },
    {
        filename: "ny_post_front_page.png",
        prompt: "Newspaper front page layout, breaking news headline style, tabloid journalism, October 2020"
    },
    {
        filename: "media_coverage_analysis.png",
        prompt: "Multiple news outlet logos on screens, media analysis dashboard, journalism review setting"
    },
    {
        filename: "newspaper_corrections.png",
        prompt: "Stack of major newspapers, corrections and updates notices, journalism accountability"
    },
    {
        filename: "coverage_impact.png",
        prompt: "Media impact analysis visualization, news coverage charts and graphs, journalism study"
    },

    // Intelligence & Politics
    {
        filename: "intelligence_document.png",
        prompt: "Official letter document with signatures, former intelligence officials, government correspondence"
    },
    {
        filename: "intelligence_officials.png",
        prompt: "Government intelligence agency setting, official portraits on wall, serious governmental atmosphere"
    },
    {
        filename: "political_impact.png",
        prompt: "Political landscape visualization, election impact analysis, American politics diagram"
    },

    // Social Media
    {
        filename: "social_media_moderation.png",
        prompt: "Social media platform content moderation dashboard, tech company setting, policy enforcement screens"
    },

    // Legal Proceedings
    {
        filename: "legal_analysis.png",
        prompt: "Legal analysis documents spread on desk, law books, case files, attorney workspace"
    },
    {
        filename: "legal_challenges.png",
        prompt: "Courtroom legal proceedings, constitutional law challenge, judicial review setting"
    },
    {
        filename: "tax_court.png",
        prompt: "Tax court proceedings, financial legal documents, IRS investigation materials"
    },
    {
        filename: "gun_case.png",
        prompt: "Federal firearms case documents, gun purchase form, legal evidence materials"
    },

    // Investigations
    {
        filename: "irs_whistleblowers.png",
        prompt: "IRS whistleblower testimony setting, government oversight, tax investigation documents"
    },
    {
        filename: "senate_investigation.png",
        prompt: "Senate investigation hearing room, congressional oversight, government accountability"
    },
    {
        filename: "house_investigation.png",
        prompt: "House of Representatives investigation, congressional hearing room, oversight proceedings"
    },
    {
        filename: "congressional_testimony.png",
        prompt: "Congressional testimony witness table, Capitol Hill hearing room, sworn statements"
    },
    {
        filename: "ongoing_investigations.png",
        prompt: "Multiple investigation files stacked, ongoing federal probes, law enforcement materials"
    },

    // Business Connections
    {
        filename: "burisma_headquarters.png",
        prompt: "Ukrainian corporate headquarters building, international business setting, Eastern European architecture"
    },
    {
        filename: "china_business.png",
        prompt: "International business documents, China connections visualization, global commerce materials"
    },
    {
        filename: "bobulinski_testimony.png",
        prompt: "Business associate testimony setting, corporate records, business deal documentation"
    },

    // Key Figures & Items
    {
        filename: "giuliani_laptop.png",
        prompt: "Laptop computer as evidence, legal chain of custody, investigative materials"
    },
    {
        filename: "case_files.png",
        prompt: "Investigation case files organized on desk, classified documents, law enforcement materials"
    },
    {
        filename: "timeline_document.png",
        prompt: "Investigation timeline chart, chronological events diagram, case documentation"
    },

    // Personal Context
    {
        filename: "addiction_recovery.png",
        prompt: "Recovery and rehabilitation concept, personal struggle, redemption journey visualization"
    },
    {
        filename: "art_gallery.png",
        prompt: "Art gallery exhibition space, contemporary artwork display, cultural setting"
    },

    // Resolution & Impact
    {
        filename: "presidential_pardon.png",
        prompt: "Presidential pardon document, official White House letterhead, clemency papers"
    },
    {
        filename: "pardon_media.png",
        prompt: "News coverage of presidential pardon, media reaction, breaking news graphics"
    },
    {
        filename: "later_findings.png",
        prompt: "Investigation findings report, conclusions document, official government summary"
    },
    {
        filename: "policy_aftermath.png",
        prompt: "Policy reform documents, platform changes, technology governance materials"
    },
    {
        filename: "ongoing_impact.png",
        prompt: "Ongoing political impact visualization, lasting consequences diagram, historical significance"
    },
    {
        filename: "investigation_conclusion.png",
        prompt: "Investigation complete stamp on case file, final report, case closed documentation"
    }
];

// Function to generate images using the ImageGenerator class
async function generateHunterBidenImages() {
    console.log('🎬 Starting Hunter Biden Laptop Image Generation...\n');
    console.log(`📊 Total images to check: ${HUNTER_BIDEN_IMAGES.length}\n`);

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

    for (const image of HUNTER_BIDEN_IMAGES) {
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
        console.log('✨ All Hunter Biden Laptop images already exist!');
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
    console.log('🎬 Hunter Biden Laptop Image Generation Complete!');
    console.log(`   ✅ Succeeded: ${successCount}`);
    console.log(`   ❌ Failed: ${failCount}`);
    console.log('========================================\n');
}

// Export for use in other scripts
module.exports = {
    HUNTER_BIDEN_IMAGES,
    generateHunterBidenImages
};

// Run if called directly
if (require.main === module) {
    generateHunterBidenImages().catch(console.error);
}

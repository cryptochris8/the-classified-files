const fs = require('fs').promises;
const path = require('path');

// Iran-Contra Affair case image prompts - 41 images
const IRAN_CONTRA_IMAGES = [
    // Core Scandal Images
    {
        filename: "white_house_shredding.png",
        prompt: "White House basement office 1980s, military officer frantically shredding classified documents, desperate cover-up scene, paper fragments"
    },
    {
        filename: "document_shredding.png",
        prompt: "Industrial shredder destroying classified documents, White House office, late night evidence destruction, 1986 crisis"
    },
    {
        filename: "arms_deals_iran.png",
        prompt: "Secret arms shipments, TOW missiles crates, clandestine operations, 1980s weapons dealing, Iran-Contra scandal"
    },
    {
        filename: "contra_funding_diagram.png",
        prompt: "Money flow diagram, Swiss bank accounts, Nicaraguan Contra fighters, covert funding flowchart, 1980s Central America"
    },

    // Key Figures
    {
        filename: "north_congressional_testimony.png",
        prompt: "Oliver North in Marine uniform testifying before Congress, packed hearing room, American flags, dramatic 1987 Iran-Contra hearings"
    },
    {
        filename: "north_office.png",
        prompt: "Oliver North's NSC office, secure phone, classified documents, White House basement, 1980s government office"
    },
    {
        filename: "william_casey.png",
        prompt: "CIA Director William Casey portrait, intelligence agency setting, mastermind expression, 1980s government official"
    },
    {
        filename: "casey_grave.png",
        prompt: "Cemetery headstone, CIA Director death before testimony, convenient timing, secrets buried, somber memorial"
    },
    {
        filename: "poindexter.png",
        prompt: "John Poindexter National Security Advisor, pipe smoking, testimony photo, 1987 Iran-Contra investigation"
    },
    {
        filename: "mcfarlane.png",
        prompt: "Robert McFarlane National Security Advisor, troubled expression, Iran-Contra figure, 1980s government official portrait"
    },
    {
        filename: "secord.png",
        prompt: "Richard Secord ex-Air Force general, private arms dealer, Iran-Contra operative, covert operations logistics"
    },
    {
        filename: "hakim.png",
        prompt: "Albert Hakim businessman, Swiss banking connections, Iran-Contra money man, international arms dealer"
    },
    {
        filename: "fawn_hall.png",
        prompt: "Fawn Hall secretary, document smuggling testimony, loyal secretary, 1987 Congressional hearings, blonde woman 1980s"
    },
    {
        filename: "walsh.png",
        prompt: "Lawrence Walsh Independent Counsel, special prosecutor, Iran-Contra investigation leader, determined prosecutor"
    },

    // Reagan Related
    {
        filename: "reagan_knowledge.png",
        prompt: "President Reagan at Oval Office desk looking confused, 1980s, documents scattered, plausible deniability, worried expression"
    },
    {
        filename: "reagan_diary.png",
        prompt: "Reagan's handwritten diary open on desk, lamp light, classified documents nearby, smoking gun evidence"
    },
    {
        filename: "reagan_diary_entry.png",
        prompt: "Close-up of presidential diary entry, handwritten notes about arms sales, damning evidence, 1986"
    },
    {
        filename: "reagan_press_conference.png",
        prompt: "Reagan at White House press room podium, stressed expression, media cameras, 1986 Iran-Contra press conference"
    },
    {
        filename: "reagan_statements.png",
        prompt: "Split screen Reagan quotes contradicting each other, before and after revelations, political spin, 1986-1987"
    },
    {
        filename: "reagan_survives.png",
        prompt: "Reagan waving, survived scandal, political resilience, American flag background, popularity intact despite scandal"
    },

    // Bush and Pardons
    {
        filename: "bush_vp.png",
        prompt: "Vice President George H.W. Bush, out of the loop claims, Iran-Contra involvement questions, 1980s political portrait"
    },
    {
        filename: "bush_pardon.png",
        prompt: "Presidential pardon documents being signed, official government documents, clemency for Iran-Contra defendants"
    },
    {
        filename: "pardons.png",
        prompt: "Multiple pardon documents stacked, Christmas Eve pardons 1992, justice denied, government cover-up completion"
    },

    // The Enterprise Network
    {
        filename: "enterprise_network.png",
        prompt: "Conspiracy diagram showing connections between North, CIA, weapons dealers, Swiss banks, shadowy covert network"
    },
    {
        filename: "swiss_bank.png",
        prompt: "Swiss bank vault, secret account documents, numbered accounts, international money laundering, covert funds"
    },
    {
        filename: "foreign_donors.png",
        prompt: "Multiple foreign flags, secret donation documents, Saudi Arabia, Taiwan, private funding for Contras"
    },
    {
        filename: "saudi_reagan.png",
        prompt: "Reagan meeting with Saudi officials, White House diplomatic setting, secret arrangement, 1980s"
    },

    // Investigation & Testimony
    {
        filename: "tower_commission.png",
        prompt: "Tower Commission members at hearing table, investigation panel, John Tower leading, 1987 government inquiry"
    },
    {
        filename: "nsc_meeting.png",
        prompt: "National Security Council meeting room, White House situation room, high-level officials, classified briefing 1980s"
    },
    {
        filename: "staff_testimony.png",
        prompt: "White House staff testifying before Congress, witness table, lawyers present, Congressional hearing room"
    },
    {
        filename: "shultz_testimony.png",
        prompt: "Secretary of State George Shultz testifying, distinguished diplomat, Congressional hearing, Iran-Contra investigation"
    },
    {
        filename: "weinberger_notes.png",
        prompt: "Caspar Weinberger's handwritten notes, Defense Secretary diary, damning evidence, meeting notes"
    },
    {
        filename: "computer_evidence.png",
        prompt: "1980s computer terminal with PROF messages, electronic evidence recovered, NSC communications, digital trail"
    },

    // Legal Proceedings
    {
        filename: "obstruction.png",
        prompt: "Obstruction of justice documents, legal charges filed, criminal indictments, federal prosecution"
    },
    {
        filename: "perjury_question.png",
        prompt: "Witness at Congressional hearing, perjury implications, lying under oath, tense testimony moment"
    },
    {
        filename: "immunity_reversal.png",
        prompt: "Appeals court documents, immunity ruling reversed, legal technicality, convictions overturned"
    },
    {
        filename: "legal_defense.png",
        prompt: "Defense attorneys at trial, legal team, Iran-Contra prosecution, courtroom setting"
    },

    // Constitutional & Legacy
    {
        filename: "constitution_crisis.png",
        prompt: "US Constitution document with cracks overlay, Capitol building shadow, constitutional crisis imagery, separation of powers violated"
    },
    {
        filename: "lasting_legacy.png",
        prompt: "Timeline of Iran-Contra consequences, executive power expansion, precedent set, historical legacy diagram"
    },

    // Endings
    {
        filename: "investigation_complete.png",
        prompt: "Iran-Contra investigation files closed, case complete stamp, partial justice, historical record established"
    },
    {
        filename: "main_menu.png",
        prompt: "Investigation case files on desk, classified folders, case selection interface, detective office atmosphere"
    }
];

// Function to generate images using the ImageGenerator class
async function generateIranContraImages() {
    console.log('🎬 Starting Iran-Contra Affair Image Generation...\n');
    console.log(`📊 Total images to check: ${IRAN_CONTRA_IMAGES.length}\n`);

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

    for (const image of IRAN_CONTRA_IMAGES) {
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
        console.log('✨ All Iran-Contra Affair images already exist!');
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
    console.log('🎬 Iran-Contra Affair Image Generation Complete!');
    console.log(`   ✅ Succeeded: ${successCount}`);
    console.log(`   ❌ Failed: ${failCount}`);
    console.log('========================================\n');
}

// Export for use in other scripts
module.exports = {
    IRAN_CONTRA_IMAGES,
    generateIranContraImages
};

// Run if called directly
if (require.main === module) {
    generateIranContraImages().catch(console.error);
}

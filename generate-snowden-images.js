const fs = require('fs').promises;
const path = require('path');

// Snowden Revelations case image prompts - 47 images
const SNOWDEN_IMAGES = [
    // Core Story Images
    {
        filename: "nsa_hawaii_facility.png",
        prompt: "Modern NSA facility in Hawaii, computer screens showing surveillance data, young contractor at workstation, tropical setting contrasted with high-tech interior"
    },
    {
        filename: "snowden_moral_crisis.png",
        prompt: "Edward Snowden at NSA workstation, constitutional text overlay, moral weight of decision, individual versus surveillance system"
    },
    {
        filename: "snowden_document_preparation.png",
        prompt: "Classified documents being secretly copied, flash drives, preparation for historic leak, tense atmosphere, covert operation"
    },
    {
        filename: "snowden_video_interview.png",
        prompt: "Snowden interview in Hong Kong hotel room, historic whistleblower video, courage under pressure, Guardian interview"
    },
    {
        filename: "snowden_background.png",
        prompt: "Edward Snowden career timeline, CIA and NSA logos, intelligence contractor background, security clearance documents"
    },

    // Journalist Contacts
    {
        filename: "greenwald_encrypted_contact.png",
        prompt: "Encrypted email communications screen, journalist-source secure contact, PGP encryption setup, digital security"
    },
    {
        filename: "washington_post_contact.png",
        prompt: "Washington Post newsroom, veteran journalist reviewing documents, institutional journalism, careful verification process"
    },
    {
        filename: "poitras_collaboration.png",
        prompt: "Documentary filmmaker with camera equipment, secure communications setup, surveillance-aware journalism, historic documentation"
    },
    {
        filename: "multi_journalist_strategy.png",
        prompt: "Multiple news outlet logos connected, coordinated journalism strategy, distributed whistleblowing, redundant publication channels"
    },

    // Hong Kong & Flight
    {
        filename: "hong_kong_hotel_meeting.png",
        prompt: "Hong Kong Mira Hotel room, Snowden meeting with journalists, classified documents spread on bed, historic moment being filmed"
    },
    {
        filename: "escape_planning.png",
        prompt: "World map with escape routes marked, Hong Kong highlighted, covert travel planning, leaving behind normal life"
    },
    {
        filename: "manhunt.png",
        prompt: "Moscow Sheremetyevo airport transit zone, international manhunt news coverage, passport cancelled, stranded whistleblower"
    },
    {
        filename: "asylum_search.png",
        prompt: "Multiple country flags, asylum application documents, diplomatic crisis, stateless whistleblower seeking refuge"
    },
    {
        filename: "russian_exile.png",
        prompt: "Moscow cityscape winter, exile life, video conference advocacy, bittersweet existence in foreign land"
    },

    // Surveillance Programs
    {
        filename: "prism_publication.png",
        prompt: "Major newspaper front pages with PRISM headlines, Guardian and Washington Post, global news coverage, surveillance exposed"
    },
    {
        filename: "prism_details.png",
        prompt: "PRISM program diagram, tech company logos connected to NSA, data collection flowchart, surveillance infrastructure"
    },
    {
        filename: "xkeyscore.png",
        prompt: "XKeyscore search interface mockup, global internet surveillance tool, NSA analyst workstation, mass data collection"
    },
    {
        filename: "boundless_informant.png",
        prompt: "Boundless Informant heat map, global surveillance statistics, billions of records visualization, NSA collection scope"
    },
    {
        filename: "upstream_collection.png",
        prompt: "Undersea fiber optic cables, internet backbone tapping, data collection infrastructure, global communications interception"
    },
    {
        filename: "five_eyes.png",
        prompt: "Five Eyes alliance flags (US, UK, Canada, Australia, New Zealand), intelligence sharing agreement, global surveillance partnership"
    },
    {
        filename: "foreign_surveillance.png",
        prompt: "World map with surveillance connections, European leaders targeted, diplomatic crisis, international scandal"
    },

    // Government Response
    {
        filename: "government_response.png",
        prompt: "Obama administration press conference, NSA defense of programs, government officials at podiums, political pressure"
    },
    {
        filename: "obama_response.png",
        prompt: "President Obama addressing surveillance controversy, White House press briefing, reform promises, political leadership"
    },
    {
        filename: "clapper_testimony.png",
        prompt: "James Clapper congressional testimony, intelligence director at hearing, least untruthful answer, oversight failure"
    },
    {
        filename: "nsa_director_defense.png",
        prompt: "NSA Director Keith Alexander testimony, congressional hearing, surveillance program defense, intelligence leadership"
    },
    {
        filename: "espionage_act.png",
        prompt: "Espionage Act legal documents, criminal charges filed, federal prosecution, whistleblower criminalization"
    },

    // Reform & Impact
    {
        filename: "congressional_response.png",
        prompt: "Congressional hearing room, intelligence oversight committee, legislative debate, surveillance reform discussions"
    },
    {
        filename: "reform_efforts.png",
        prompt: "USA FREEDOM Act document, legislative reforms, privacy law changes, surveillance oversight improvement"
    },
    {
        filename: "tech_response.png",
        prompt: "Tech company headquarters, encryption implementation icons, privacy features, security improvements post-Snowden"
    },
    {
        filename: "lasting_impact.png",
        prompt: "Global privacy awareness infographic, encryption adoption charts, surveillance reform timeline, lasting legacy"
    },
    {
        filename: "privacy_tools.png",
        prompt: "Encryption apps and privacy tools, Signal, Tor, VPN icons, digital security for citizens, post-Snowden privacy"
    },

    // Supporting Scenes
    {
        filename: "internal_reporting.png",
        prompt: "Government bureaucracy forms, frustrated employee at desk, dead-end complaint channels, whistleblower obstacles"
    },
    {
        filename: "consequence_analysis.png",
        prompt: "Scales of justice with personal sacrifice, family photos versus prison bars, weighing consequences, moral decision"
    },
    {
        filename: "document_collection.png",
        prompt: "Classified documents being organized, careful selection process, whistleblower curation, systematic evidence gathering"
    },
    {
        filename: "document_ethics.png",
        prompt: "Ethics of disclosure documents, harm minimization process, responsible whistleblowing, document vetting"
    },
    {
        filename: "continued_revelations.png",
        prompt: "Newspaper headlines timeline, escalating revelations over months, global coverage, surveillance state fully exposed"
    },

    // Context & Background
    {
        filename: "fisa_court.png",
        prompt: "FISA Court seal, secret surveillance court, classified orders, rubber stamp oversight criticism"
    },
    {
        filename: "oversight_failure.png",
        prompt: "Congressional oversight breakdown diagram, intelligence committees, lack of accountability, systemic failure"
    },
    {
        filename: "other_whistleblowers.png",
        prompt: "Previous NSA whistleblowers Thomas Drake and William Binney, prosecution examples, cautionary tales"
    },
    {
        filename: "geneva_cia.png",
        prompt: "Geneva Switzerland CIA station, European intelligence operations, Snowden's earlier career, diplomatic cover"
    },

    // Debate & Legacy
    {
        filename: "hero_traitor_debate.png",
        prompt: "Split screen hero versus traitor debate, public opinion divided, Snowden portrait, American flag background"
    },
    {
        filename: "pardon_debate.png",
        prompt: "Presidential pardon documents, clemency debate, justice versus security, political controversy"
    },
    {
        filename: "encryption_debate.png",
        prompt: "Encryption versus backdoors debate, security vs surveillance, tech policy arguments, ongoing controversy"
    },
    {
        filename: "journalism_impact.png",
        prompt: "Pulitzer Prize journalism, press freedom, source protection, investigative reporting impact"
    },
    {
        filename: "lindsay_mills.png",
        prompt: "Personal sacrifice in whistleblowing, leaving loved ones behind, emotional cost, relationship impact"
    },

    // Endings
    {
        filename: "investigation_complete.png",
        prompt: "Snowden revelations complete summary, surveillance state exposed, historic impact, investigation concluded stamp"
    },
    {
        filename: "main_menu.png",
        prompt: "Investigation case files on desk, classified folders, case selection interface, detective office atmosphere"
    }
];

// Function to generate images using the ImageGenerator class
async function generateSnowdenImages() {
    console.log('🎬 Starting Snowden Revelations Image Generation...\n');
    console.log(`📊 Total images to check: ${SNOWDEN_IMAGES.length}\n`);

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

    for (const image of SNOWDEN_IMAGES) {
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
        console.log('✨ All Snowden Revelations images already exist!');
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
    console.log('🎬 Snowden Revelations Image Generation Complete!');
    console.log(`   ✅ Succeeded: ${successCount}`);
    console.log(`   ❌ Failed: ${failCount}`);
    console.log('========================================\n');
}

// Export for use in other scripts
module.exports = {
    SNOWDEN_IMAGES,
    generateSnowdenImages
};

// Run if called directly
if (require.main === module) {
    generateSnowdenImages().catch(console.error);
}

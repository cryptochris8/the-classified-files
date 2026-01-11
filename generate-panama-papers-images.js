const fs = require('fs').promises;
const path = require('path');

// Panama Papers case image prompts - 39 images
const PANAMA_PAPERS_IMAGES = [
    // Core Investigation
    {
        filename: "data_leak_documents.png",
        prompt: "Massive database visualization on computer screens, 11.5 million leaked documents, investigative journalist overwhelmed by data, modern newsroom 2016"
    },
    {
        filename: "panama_papers_investigation.png",
        prompt: "Modern newsroom with data analysis screens, journalists collaborating on leaked documents, global corruption investigation, 2016 setting"
    },
    {
        filename: "icij_collaboration.png",
        prompt: "International journalism collaboration, 370 journalists worldwide, ICIJ logo, coordinated investigation, global teamwork"
    },
    {
        filename: "data_leak_mechanics.png",
        prompt: "Technical diagram of data leak process, encrypted files, secure communication channels, whistleblower protection"
    },

    // World Leaders & Corruption
    {
        filename: "world_leaders_corruption.png",
        prompt: "World map with corruption networks highlighted, offshore accounts visualization, global kleptocracy exposed, political scandal"
    },
    {
        filename: "putin_network.png",
        prompt: "Russian oligarch network diagram, $2 billion hidden assets, Putin connections, offshore shell companies"
    },
    {
        filename: "david_cameron.png",
        prompt: "British Prime Minister facing questions, Parliament background, offshore inheritance scandal, political pressure"
    },
    {
        filename: "fifa_corruption.png",
        prompt: "FIFA corruption documents exposed, football officials, bribery payments, sports scandal"
    },

    // The Offshore System
    {
        filename: "mossack_fonseca_office.png",
        prompt: "Panama City law firm office tower, Mossack Fonseca sign, corporate secrecy factory, offshore services headquarters"
    },
    {
        filename: "offshore_system.png",
        prompt: "Global map of tax havens, secrecy jurisdictions highlighted, financial flow arrows, offshore system diagram"
    },
    {
        filename: "money_laundering_flow.png",
        prompt: "Complex financial flow diagram, shell companies network, money trail visualization, layering process"
    },
    {
        filename: "banking_complicity.png",
        prompt: "Major bank logos with scandal headlines, HSBC Deutsche Bank Credit Suisse, financial corruption, too big to jail"
    },
    {
        filename: "due_diligence_failure.png",
        prompt: "Know your customer documents ignored, compliance failure, rubber stamp approval, willful blindness"
    },

    // Criminal Connections
    {
        filename: "criminal_connections.png",
        prompt: "Drug cartel money trails, organized crime shell companies, criminal networks hidden in offshore structures"
    },
    {
        filename: "sanctions_evasion.png",
        prompt: "Sanctions documents bypassed, Iran North Korea connections, embargo evasion through shell companies"
    },

    // Publication & Fallout
    {
        filename: "global_publication.png",
        prompt: "Newspapers worldwide with Panama Papers headlines, 107 media outlets, global simultaneous publication, historic journalism"
    },
    {
        filename: "political_protests.png",
        prompt: "Mass protests in Reykjavik Iceland, thousands demanding PM resignation, Panama Papers fallout, public anger"
    },
    {
        filename: "european_fallout.png",
        prompt: "European Parliament investigation, EU officials responding, continental political crisis, Brussels headquarters"
    },
    {
        filename: "russian_response.png",
        prompt: "Kremlin denial press conference, Russian propaganda response, attacking journalists, deflection tactics"
    },

    // Source Protection
    {
        filename: "john_doe_anonymous.png",
        prompt: "Anonymous whistleblower silhouette, encrypted communication, source protection, John Doe identity hidden"
    },
    {
        filename: "source_protection.png",
        prompt: "Journalist protecting source, secure communications, encryption tools, whistleblower safety"
    },

    // Consequences & Reform
    {
        filename: "legal_consequences.png",
        prompt: "Courtroom prosecutions, tax evasion charges, legal proceedings, justice for corruption"
    },
    {
        filename: "reforms_implemented.png",
        prompt: "New transparency laws documents, beneficial ownership registries, anti-corruption reforms, legislative progress"
    },
    {
        filename: "uk_reforms.png",
        prompt: "UK Parliament passing transparency laws, beneficial ownership register, British anti-corruption measures"
    },
    {
        filename: "us_tax_haven.png",
        prompt: "Delaware South Dakota as US tax havens, domestic offshore, American secrecy jurisdictions"
    },
    {
        filename: "firm_closure.png",
        prompt: "Mossack Fonseca closing sign, law firm shutdown 2018, scandal consequences, end of operations"
    },

    // Beneficiaries & System
    {
        filename: "beneficiaries_exposed.png",
        prompt: "Wealthy elites exposed, billionaires and politicians, offshore account holders revealed, corruption unmasked"
    },
    {
        filename: "system_unchanged.png",
        prompt: "Offshore system still operating, new tax havens emerge, incomplete reforms, ongoing secrecy"
    },

    // Legacy & Comparison
    {
        filename: "leaks_compared.png",
        prompt: "Timeline of major leaks, WikiLeaks Snowden Panama Papers compared, data journalism evolution"
    },
    {
        filename: "paradise_papers.png",
        prompt: "Paradise Papers 2017 leak, Apple offshore, Queen Elizabeth investments, follow-up investigation"
    },
    {
        filename: "pandora_papers.png",
        prompt: "Pandora Papers 2021 leak, even larger dataset, continued offshore exposure, ongoing investigation"
    },
    {
        filename: "global_response_compared.png",
        prompt: "Different countries responses compared, reform leaders vs laggards, international cooperation gaps"
    },

    // Journalism & Press Freedom
    {
        filename: "daphne_memorial.png",
        prompt: "Memorial for Daphne Caruana Galizia, journalist killed investigating corruption, Malta, press freedom martyr"
    },
    {
        filename: "malta_corruption.png",
        prompt: "Malta government corruption exposed, Mediterranean island scandal, European Union concern"
    },
    {
        filename: "press_freedom_threats.png",
        prompt: "Journalists under threat, press freedom dangers, investigative reporting risks, courage in journalism"
    },
    {
        filename: "journalism_legacy.png",
        prompt: "Pulitzer Prize for Panama Papers, journalism excellence, investigative reporting triumph, ICIJ award"
    },

    // Endings
    {
        filename: "ongoing_fight.png",
        prompt: "Continued fight against corruption, activists and journalists, transparency advocacy, ongoing struggle"
    },
    {
        filename: "impact_on_society.png",
        prompt: "Public awareness of tax havens increased, income inequality discussion, societal impact visualization"
    },
    {
        filename: "investigation_complete.png",
        prompt: "Panama Papers investigation complete, case files closed, historic impact achieved, journalism victory"
    }
];

// Function to generate images using the ImageGenerator class
async function generatePanamaPapersImages() {
    console.log('🎬 Starting Panama Papers Image Generation...\n');
    console.log(`📊 Total images to check: ${PANAMA_PAPERS_IMAGES.length}\n`);

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

    for (const image of PANAMA_PAPERS_IMAGES) {
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
        console.log('✨ All Panama Papers images already exist!');
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
    console.log('🎬 Panama Papers Image Generation Complete!');
    console.log(`   ✅ Succeeded: ${successCount}`);
    console.log(`   ❌ Failed: ${failCount}`);
    console.log('========================================\n');
}

// Export for use in other scripts
module.exports = {
    PANAMA_PAPERS_IMAGES,
    generatePanamaPapersImages
};

// Run if called directly
if (require.main === module) {
    generatePanamaPapersImages().catch(console.error);
}

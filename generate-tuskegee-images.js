const fs = require('fs').promises;
const path = require('path');

// Tuskegee Experiment case image prompts - 30 images
const TUSKEGEE_IMAGES = [
    // Core Study Documentation
    {
        filename: "tuskegee_medical_records.png",
        prompt: "1970s medical office with patient files, Public Health Service documents, syphilis study records, African American patient files"
    },
    {
        filename: "tuskegee_methodology.png",
        prompt: "Medical research documents showing study design, 1930s-1970s Public Health Service files, clinical methodology papers"
    },
    {
        filename: "tuskegee_recruitment.png",
        prompt: "1930s Alabama rural community, Public Health Service recruitment scene, African American sharecroppers, poverty setting"
    },
    {
        filename: "tuskegee_institute.png",
        prompt: "Tuskegee Institute historical building, 1930s Alabama, African American college campus, medical research facility"
    },

    // Victims & Families
    {
        filename: "tuskegee_victims.png",
        prompt: "African American elderly men in 1970s rural Alabama, medical injustice survivors, dignity despite suffering"
    },
    {
        filename: "survivor_treatment.png",
        prompt: "Medical treatment finally provided, elderly African American patients receiving care, late justice, 1970s hospital"
    },

    // Key Figures
    {
        filename: "nurse_rivers.png",
        prompt: "African American nurse in 1940s medical setting, professional woman, Tuskegee study documentation, moral complexity"
    },
    {
        filename: "decision_makers.png",
        prompt: "Public Health Service officials 1940s-1960s, government doctors, medical establishment, decision-making authority"
    },

    // Ethics & Violations
    {
        filename: "tuskegee_ethics.png",
        prompt: "Medical ethics documents, Nuremberg Code violation evidence, bioethics investigation, courtroom evidence"
    },
    {
        filename: "consent_fraud.png",
        prompt: "Fraudulent consent forms, deceptive medical documents, patients signing papers they don't understand, 1930s"
    },
    {
        filename: "penicillin_denial.png",
        prompt: "1940s penicillin vials juxtaposed with denied treatment, medical injustice visualization, preventable death"
    },

    // Death & Suffering
    {
        filename: "death_toll_evidence.png",
        prompt: "Medical mortality records, death certificates, syphilis complications documentation, preventable deaths evidence"
    },

    // Institutional Complicity
    {
        filename: "institutional_complicity.png",
        prompt: "Multiple government agencies and medical institutions, systemic failure visualization, complicity diagram"
    },
    {
        filename: "systemic_pressure.png",
        prompt: "1930s-1940s Jim Crow Alabama, African American professionals under pressure, systemic racism in medicine"
    },
    {
        filename: "government_coverup.png",
        prompt: "Government documents stamped classified, cover-up evidence, hidden files, bureaucratic secrecy"
    },

    // Whistleblowing & Exposure
    {
        filename: "whistleblower_attempts.png",
        prompt: "Internal complaints documents, ignored warnings, bureaucratic resistance, whistleblower frustration"
    },
    {
        filename: "evidence_gathering.png",
        prompt: "Investigator collecting evidence, 1970s office, documents and files, preparing for exposure"
    },
    {
        filename: "final_internal_attempt.png",
        prompt: "Last internal memo attempting to stop study, bureaucratic failure, ignored ethics concerns"
    },
    {
        filename: "press_exposure.png",
        prompt: "1972 newspaper headlines exposing Tuskegee study, AP story breaking, public outrage, journalism victory"
    },

    // Legal & Congressional Action
    {
        filename: "congressional_hearings.png",
        prompt: "Congressional hearing room 1973, Senate investigation, testimony about medical ethics, accountability"
    },
    {
        filename: "legal_settlement.png",
        prompt: "Legal settlement documents, class action lawsuit, victim compensation, justice for Tuskegee survivors"
    },
    {
        filename: "compensation_fight.png",
        prompt: "Lawyers and victims fighting for compensation, courtroom, civil rights legal battle"
    },
    {
        filename: "accountability_quest.png",
        prompt: "Investigation into responsible officials, accountability efforts, justice pursuit"
    },

    // Civil Rights & Support
    {
        filename: "civil_rights_support.png",
        prompt: "Civil rights organizations supporting Tuskegee victims, NAACP involvement, community solidarity"
    },
    {
        filename: "medical_journals.png",
        prompt: "Medical journals that published study results, scientific complicity, academic ethics failure"
    },

    // Resolution & Legacy
    {
        filename: "presidential_apology.png",
        prompt: "President Clinton 1997 apology ceremony, White House, Tuskegee survivors present, historic moment"
    },
    {
        filename: "research_reforms.png",
        prompt: "Belmont Report and IRB establishment documents, research ethics reforms, institutional review boards"
    },
    {
        filename: "lasting_impact.png",
        prompt: "African American medical distrust visualization, healthcare disparity, lasting legacy of Tuskegee"
    },
    {
        filename: "continued_advocacy.png",
        prompt: "Modern medical ethics advocacy, bioethics education, preventing future abuses"
    },

    // Conclusion
    {
        filename: "investigation_complete.png",
        prompt: "Tuskegee investigation complete, justice achieved stamp, historical accountability, case closed"
    }
];

// Function to generate images using the ImageGenerator class
async function generateTuskegeeImages() {
    console.log('🎬 Starting Tuskegee Experiment Image Generation...\n');
    console.log(`📊 Total images to check: ${TUSKEGEE_IMAGES.length}\n`);

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

    for (const image of TUSKEGEE_IMAGES) {
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
        console.log('✨ All Tuskegee Experiment images already exist!');
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
    console.log('🎬 Tuskegee Experiment Image Generation Complete!');
    console.log(`   ✅ Succeeded: ${successCount}`);
    console.log(`   ❌ Failed: ${failCount}`);
    console.log('========================================\n');
}

// Export for use in other scripts
module.exports = {
    TUSKEGEE_IMAGES,
    generateTuskegeeImages
};

// Run if called directly
if (require.main === module) {
    generateTuskegeeImages().catch(console.error);
}

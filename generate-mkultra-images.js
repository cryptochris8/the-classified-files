const fs = require('fs').promises;
const path = require('path');

// MKUltra case image prompts - 33 images
const MKULTRA_IMAGES = [
    // Core Images
    {
        filename: "cia_basement_files.png",
        prompt: "CIA basement storage room, dusty boxes labeled MKUltra, classified documents scattered, fluorescent lighting, mysterious government files"
    },
    {
        filename: "lsd_laboratory.png",
        prompt: "1960s CIA laboratory, scientist in lab coat preparing LSD doses, test subjects behind glass, unethical experimentation, clinical coldness"
    },
    {
        filename: "montreal_psychiatric_hospital.png",
        prompt: "1960s psychiatric hospital in Montreal, sterile rooms with electroshock equipment, patient files, institutional horror, medical malpractice"
    },
    {
        filename: "hotel_window_death.png",
        prompt: "1950s hotel room at night, broken window, mysterious death scene, CIA documents on desk, suspicious circumstances"
    },
    {
        filename: "document_shredding.png",
        prompt: "CIA office 1973, men in suits feeding documents into industrial shredders, burning papers, cover-up in progress, desperate destruction"
    },
    {
        filename: "classified_file_analysis.png",
        prompt: "Congressional investigator analyzing thousands of MKUltra documents, evidence boards, university connections mapped out, scale of conspiracy"
    },
    {
        filename: "victim_testimonies_hearing.png",
        prompt: "Congressional hearing room, MKUltra victims testifying, emotional testimony, families seeking justice, human cost of experiments"
    },
    {
        filename: "mind_control_laboratory.png",
        prompt: "Secret CIA laboratory, hypnosis equipment, subject in chair being programmed, assassination training materials, sinister atmosphere"
    },
    {
        filename: "church_committee_hearing.png",
        prompt: "Senate hearing room 1975, Frank Church questioning CIA officials, packed gallery, television cameras, historic confrontation"
    },
    {
        filename: "congressional_reform.png",
        prompt: "Congressional oversight hearing, new ethics guidelines being signed, victims receiving compensation, institutional accountability"
    },

    // Cameron & Canadian
    {
        filename: "cameron_methods_documentation.png",
        prompt: "Medical torture documentation, electroshock equipment, sensory deprivation chambers, clinical horror"
    },
    {
        filename: "canadian_victims_testimonies.png",
        prompt: "Canadian victims of MKUltra testifying, Montreal courtroom, families seeking justice, emotional testimony"
    },
    {
        filename: "cia_funding_diagram.png",
        prompt: "Financial documents showing CIA front organizations, money trail diagram, shell companies funding experiments"
    },

    // Olson Case
    {
        filename: "cia_headquarters_confrontation.png",
        prompt: "Senate investigator confronting CIA officials, tense meeting room at Langley, classified documents on table"
    },
    {
        filename: "olson_family_investigation.png",
        prompt: "Eric Olson with photos of his father, forensic evidence documents, family seeking closure after decades"
    },
    {
        filename: "forensic_evidence_review.png",
        prompt: "Forensic laboratory, scientists examining evidence from Olson case, medical reports, criminal investigation"
    },

    // Research & Accountability
    {
        filename: "richard_helms_testimony.png",
        prompt: "Richard Helms testifying before Congress, defensive body language, CIA director under scrutiny"
    },
    {
        filename: "researcher_investigation.png",
        prompt: "Investigator visiting retired CIA scientist, suburban home with classified past, reluctant witness"
    },
    {
        filename: "university_mkultra_investigation.png",
        prompt: "University campus with dark secret, research building, academic complicity in government experiments"
    },
    {
        filename: "researcher_accountability_investigation.png",
        prompt: "Congressional investigation into scientists, empty dock where perpetrators should be, justice denied"
    },

    // Health & Victims
    {
        filename: "health_consequences_documentation.png",
        prompt: "Medical documentation of MKUltra victims, brain scans showing damage, lifetime of suffering"
    },
    {
        filename: "victim_compensation_hearing.png",
        prompt: "Courtroom with MKUltra victims seeking justice, lawyers presenting evidence, emotional testimony"
    },
    {
        filename: "compensation_fight_ongoing.png",
        prompt: "Victims advocacy rally, families seeking compensation, ongoing fight for justice"
    },

    // Assassination & History
    {
        filename: "assassination_program_investigation.png",
        prompt: "Intelligence files on assassination programs, redacted documents, Cold War espionage"
    },
    {
        filename: "ethics_violations_analysis.png",
        prompt: "Nuremberg Code document contrasted with MKUltra files, medical ethics violated, American hypocrisy"
    },
    {
        filename: "historical_connections_mkultra.png",
        prompt: "Cold War timeline showing Nazi connection to MKUltra, propaganda posters, American paranoia"
    },

    // Justice & Reform
    {
        filename: "prosecution_blocked.png",
        prompt: "Empty courtroom where prosecution should happen, scales of justice unbalanced, accountability denied"
    },
    {
        filename: "cia_reform_signing.png",
        prompt: "President signing reform legislation, congressional oversight committee, new era of accountability"
    },
    {
        filename: "modern_surveillance_concerns.png",
        prompt: "Modern surveillance state, CIA black sites, post-9/11 interrogation, cycle repeating"
    },
    {
        filename: "accountability_lessons_reflection.png",
        prompt: "Scales of justice, constitutional documents, balance between security and liberty"
    },

    // Conclusion
    {
        filename: "mkultra_conclusion.png",
        prompt: "MKUltra investigation complete, historical documents, justice sought"
    },
    {
        filename: "justice_served.png",
        prompt: "Congressional committee final report on MKUltra, justice scales, victims receiving recognition, democracy protecting itself"
    },
    {
        filename: "prison_experiments.png",
        prompt: "1960s federal prison, inmates being subjected to drug experiments, medical abuse in confinement, exploitation of vulnerable"
    }
];

// Function to generate images using the ImageGenerator class
async function generateMKUltraImages() {
    console.log('Starting MKUltra Image Generation...\n');
    console.log(`Total images to check: ${MKULTRA_IMAGES.length}\n`);

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

    for (const image of MKULTRA_IMAGES) {
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
        console.log('All MKUltra images already exist!');
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
    console.log('MKUltra Image Generation Complete!');
    console.log(`   Succeeded: ${successCount}`);
    console.log(`   Failed: ${failCount}`);
    console.log('========================================\n');
}

// Export for use in other scripts
module.exports = {
    MKULTRA_IMAGES,
    generateMKUltraImages
};

// Run if called directly
if (require.main === module) {
    generateMKUltraImages().catch(console.error);
}

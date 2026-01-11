const fs = require('fs').promises;
const path = require('path');

// JFK Assassination case image prompts - 87 missing images
const JFK_IMAGES = [
    // Autopsy & Medical Evidence
    {
        filename: "autopsy_evidence.png",
        prompt: "Autopsy documentation analysis on desk, medical forensics review, classified medical files with anatomical diagrams, dramatic shadows, investigative atmosphere"
    },
    {
        filename: "medical_evidence.png",
        prompt: "Medical records and anatomical diagrams showing wound trajectory analysis, forensic medical examination documents, clinical investigation setting"
    },
    {
        filename: "parkland_hospital.png",
        prompt: "Parkland Hospital emergency room 1960s, medical staff reviewing documents, historical medical evidence, vintage hospital setting"
    },

    // Oswald Background & Connections
    {
        filename: "oswald_marine_years.png",
        prompt: "Military personnel file with Marine uniform photo, Atsugi Japan base documents, U-2 surveillance operations paperwork, military intelligence dossier"
    },
    {
        filename: "oswald_soviet_years.png",
        prompt: "Cold War defector documents, Soviet Union residency papers, Minsk factory records, KGB surveillance file, vintage 1960s intelligence documents"
    },
    {
        filename: "oswald_new_orleans.png",
        prompt: "New Orleans 1963 street scene documents, Fair Play for Cuba pamphlets, 544 Camp Street building photo, anti-Castro operations files"
    },
    {
        filename: "oswald_arrest.png",
        prompt: "Police booking photo and arrest documents, Dallas Police Department records, suspect interrogation room, 1963 law enforcement setting"
    },
    {
        filename: "oswald_cia_files.png",
        prompt: "CIA classified files on surveillance subject, intelligence agency documents with redactions, 201 personnel file, espionage investigation"
    },
    {
        filename: "oswald_evidence.png",
        prompt: "Evidence collection spread on investigation table, rifle, documents, photographs, forensic evidence tags, police investigation room"
    },
    {
        filename: "oswald_interrogation.png",
        prompt: "Police interrogation room 1960s, suspect questioning scene, Dallas Police Department, dramatic lighting, noir investigation atmosphere"
    },
    {
        filename: "oswald_mexico_city.png",
        prompt: "Mexico City embassy surveillance photos, CIA station documents, Soviet and Cuban embassy records, international intelligence operation"
    },
    {
        filename: "oswald_patsy.png",
        prompt: "Investigation board with 'patsy' theory documents, intelligence connections diagram, conspiracy evidence wall, detective office"
    },
    {
        filename: "oswald_return.png",
        prompt: "State Department documents, passport and travel records, defector return paperwork, government facilitation evidence, Cold War bureaucracy"
    },
    {
        filename: "oswald_impersonation.png",
        prompt: "Multiple identity documents and photos showing discrepancies, impersonation evidence, investigation comparison board, forensic analysis"
    },

    // Key Figures & Suspects
    {
        filename: "jack_ruby.png",
        prompt: "Nightclub owner profile documents, organized crime connection files, Dallas underworld investigation, 1960s mob dossier"
    },
    {
        filename: "ruby_mob_connections.png",
        prompt: "Organized crime network diagram, mob connection documents, phone records and surveillance photos, criminal investigation board"
    },
    {
        filename: "ruby_police_access.png",
        prompt: "Dallas Police Department access records, security breach documents, basement entry investigation, law enforcement failure analysis"
    },
    {
        filename: "ruby_final_words.png",
        prompt: "Prison interview transcript documents, final testimony records, deathbed statement analysis, investigative journalism notes"
    },
    {
        filename: "david_ferrie.png",
        prompt: "CIA pilot dossier with unusual appearance photo, Civil Air Patrol records, New Orleans investigation files, mysterious operative profile"
    },
    {
        filename: "ferrie_death_scene.png",
        prompt: "Apartment death investigation photos, suspicious circumstances documents, typed suicide notes, crime scene analysis, noir atmosphere"
    },
    {
        filename: "guy_banister.png",
        prompt: "Ex-FBI agent profile, 544 Camp Street office documents, anti-Castro operations files, New Orleans intelligence network"
    },
    {
        filename: "carlos_marcello.png",
        prompt: "Mafia boss surveillance photos, organized crime empire documents, New Orleans mob investigation files, criminal kingpin dossier"
    },
    {
        filename: "santos_trafficante.png",
        prompt: "Florida mob boss profile documents, CIA-Mafia plot files, Castro assassination conspiracy, organized crime investigation"
    },
    {
        filename: "de_mohrenschildt.png",
        prompt: "Russian emigre intelligence file, CIA contact documents, Oswald handler theory evidence, Dallas petroleum geologist dossier"
    },
    {
        filename: "de_mohrenschildt_death.png",
        prompt: "Suspicious death investigation documents, shotgun wound photos redacted, HSCA interview timing, convenient death analysis"
    },

    // Women Connected to Case
    {
        filename: "marina_oswald.png",
        prompt: "Soviet wife background documents, KGB family connection files, immigration records, witness testimony transcripts"
    },
    {
        filename: "marina_testimony.png",
        prompt: "Warren Commission testimony transcript, witness interview documents, changing story analysis, investigation records"
    },
    {
        filename: "ruth_paine.png",
        prompt: "Suburban housewife profile, intelligence family connections documents, Oswald housing provider investigation, Irving Texas files"
    },
    {
        filename: "paine_connections.png",
        prompt: "Intelligence community family tree diagram, CIA connections documents, suspicious coincidences analysis, investigation board"
    },
    {
        filename: "paine_garage.png",
        prompt: "Suburban garage evidence photos, rifle storage location, blanket evidence documents, Irving Texas crime scene"
    },

    // Dealey Plaza & Ballistics
    {
        filename: "grassy_knoll.png",
        prompt: "Dealey Plaza grassy knoll area, wooden fence photographs, second shooter location analysis, assassination site investigation"
    },
    {
        filename: "magic_bullet.png",
        prompt: "CE399 pristine bullet photograph, single bullet theory diagram, trajectory impossibility analysis, forensic evidence examination"
    },
    {
        filename: "ce399_bullet.png",
        prompt: "Commission Exhibit 399 bullet close-up, nearly pristine condition, ballistics evidence tag, forensic laboratory setting"
    },
    {
        filename: "zapruder_analysis.png",
        prompt: "Film frame analysis screens, Zapruder footage examination, frame-by-frame timeline, digital enhancement forensics"
    },
    {
        filename: "backyard_photos.png",
        prompt: "Oswald backyard photographs with rifle, photo authenticity analysis, shadow inconsistency examination, forensic photo investigation"
    },

    // Investigations & Reports
    {
        filename: "hsca_report.png",
        prompt: "House Select Committee on Assassinations report cover, congressional investigation documents, 1979 findings, government seal"
    },
    {
        filename: "hsca_conclusions.png",
        prompt: "HSCA final conclusions documents, probable conspiracy finding, acoustic evidence summary, congressional investigation results"
    },
    {
        filename: "garrison_investigation.png",
        prompt: "Jim Garrison DA office, New Orleans investigation board, Clay Shaw trial preparation, conspiracy prosecution documents"
    },
    {
        filename: "garrison_evidence.png",
        prompt: "Garrison investigation evidence board, New Orleans conspiracy documents, witness connections diagram, prosecution files"
    },
    {
        filename: "garrison_media_attacks.png",
        prompt: "Newspaper headlines attacking Garrison, media discrediting campaign, CIA Operation Mockingbird evidence, press manipulation"
    },
    {
        filename: "clay_shaw_trial.png",
        prompt: "Clay Shaw in courtroom, New Orleans trial scene, conspiracy defendant, 1960s legal proceedings, dramatic courtroom"
    },
    {
        filename: "shaw_acquittal.png",
        prompt: "Trial verdict documents, acquittal newspaper headlines, jury decision analysis, courtroom aftermath"
    },

    // CIA & Intelligence Operations
    {
        filename: "cia_mafia_connection.png",
        prompt: "CIA and organized crime alliance documents, Castro assassination plots, joint operations files, intelligence-mob conspiracy"
    },
    {
        filename: "cia_mexico_city.png",
        prompt: "CIA Mexico City station documents, embassy surveillance photos, Oswald sighting reports, international intelligence operation"
    },
    {
        filename: "cia_new_orleans.png",
        prompt: "CIA New Orleans operations documents, anti-Castro training camps, intelligence network diagram, covert operations files"
    },
    {
        filename: "cia_anti_castro.png",
        prompt: "Anti-Castro operation documents, Bay of Pigs veterans files, Cuban exile training, CIA covert action programs"
    },
    {
        filename: "cia_shaw_admission.png",
        prompt: "CIA document confirming Clay Shaw contact status, 1979 admission evidence, Domestic Contact Service files, vindication documents"
    },
    {
        filename: "cia_hidden.png",
        prompt: "Heavily redacted CIA documents, classified secrets, hidden information, black marker censorship, intelligence cover-up"
    },
    {
        filename: "mockingbird_operation.png",
        prompt: "Operation Mockingbird documents, CIA media manipulation evidence, journalist payroll records, propaganda campaign files"
    },
    {
        filename: "false_defector_program.png",
        prompt: "CIA false defector program documents, Cold War intelligence operations, double agent training files, espionage methodology"
    },
    {
        filename: "operation_40.png",
        prompt: "CIA Operation 40 documents, anti-Castro assassination squad, Cuban operations files, covert action team dossiers"
    },

    // FBI Investigation
    {
        filename: "fbi_surveillance.png",
        prompt: "FBI surveillance documents, Oswald monitoring files, Hoover's bureau records, federal investigation paperwork"
    },
    {
        filename: "fbi_destruction.png",
        prompt: "Evidence destruction memo, FBI document shredding orders, Hosty note controversy, cover-up evidence"
    },
    {
        filename: "hoover_investigation.png",
        prompt: "J. Edgar Hoover FBI documents, bureau investigation control, predetermined conclusion evidence, federal law enforcement files"
    },

    // Witness Related
    {
        filename: "witness_protection.png",
        prompt: "FBI witness protection files, intimidation evidence documents, changed testimony records, witness handling investigation"
    },
    {
        filename: "tippit_shooting.png",
        prompt: "Officer Tippit crime scene documents, Dallas Police shooting investigation, secondary murder evidence, patrol car photos"
    },
    {
        filename: "tippit_background.png",
        prompt: "Officer J.D. Tippit personnel file, Dallas Police records, background investigation documents, victim profile"
    },
    {
        filename: "tippit_witnesses.png",
        prompt: "Tippit shooting witness statements, conflicting testimony documents, identification problems, investigation inconsistencies"
    },

    // Conspiracy Elements
    {
        filename: "three_tramps.png",
        prompt: "Three tramps arrest photographs, Dealey Plaza suspects, hobo identification investigation, mysterious figures analysis"
    },
    {
        filename: "umbrella_man.png",
        prompt: "Umbrella man Dealey Plaza photograph, suspicious signaling theory, Zapruder film still, conspiracy figure analysis"
    },
    {
        filename: "badge_man.png",
        prompt: "Badge man photograph enhancement, grassy knoll figure analysis, second shooter evidence, photo forensics investigation"
    },
    {
        filename: "dark_complected_man.png",
        prompt: "Witness description documents, unidentified suspect sketch, Dealey Plaza unknown figure, investigation composite"
    },
    {
        filename: "cuban_exiles.png",
        prompt: "Cuban exile group documents, anti-Castro training camp photos, Bay of Pigs veterans files, Miami operations"
    },

    // Political Connections
    {
        filename: "lbj_investigation.png",
        prompt: "LBJ connection documents, political benefit analysis, Texas politics investigation, succession conspiracy theory files"
    },
    {
        filename: "lbj_criminal.png",
        prompt: "Johnson criminal allegations documents, Texas corruption files, political scandal evidence, power transition analysis"
    },
    {
        filename: "texas_oil.png",
        prompt: "Texas oil industry documents, petroleum interests investigation, Dallas business connections, financial motive analysis"
    },
    {
        filename: "military_industrial.png",
        prompt: "Military industrial complex documents, Vietnam war profits analysis, defense contractor connections, Eisenhower warning"
    },
    {
        filename: "vietnam_policy.png",
        prompt: "Vietnam policy documents, JFK withdrawal plans, NSAM 263 evidence, military escalation reversal analysis"
    },

    // Evidence & Documents
    {
        filename: "classified_documents.png",
        prompt: "Stack of classified JFK documents, TOP SECRET stamps, government files, National Archives investigation materials"
    },
    {
        filename: "suppressed_documents.png",
        prompt: "Suppressed evidence documents with CLASSIFIED stamps, hidden files being revealed, redaction removal, truth emerging"
    },
    {
        filename: "document_releases.png",
        prompt: "JFK document release ceremony, National Archives files, declassification process, historical records transfer"
    },
    {
        filename: "document_scanning.png",
        prompt: "Historian scanning classified documents, highlighted passages, research urgency, late night investigation"
    },
    {
        filename: "evidence_problems.png",
        prompt: "Chain of custody breakdown diagram, evidence tampering analysis, investigation failures documented, forensic problems"
    },
    {
        filename: "evidence_summary.png",
        prompt: "Complete evidence summary board, all findings compiled, investigation conclusion documents, case analysis overview"
    },
    {
        filename: "connally_testimony.png",
        prompt: "Governor Connally testimony transcript, wounded survivor account, single bullet theory contradiction, witness documents"
    },

    // Locations
    {
        filename: "dallas_police.png",
        prompt: "Dallas Police Department 1963, headquarters building, law enforcement investigation center, vintage police station"
    },
    {
        filename: "depository_job.png",
        prompt: "Texas School Book Depository employment records, Oswald job application, building interior photos, sniper nest location"
    },

    // Analysis & Conclusions
    {
        filename: "cui_bono_diagram.png",
        prompt: "Who benefits analysis diagram, motive investigation chart, conspiracy beneficiaries, follow the money investigation board"
    },
    {
        filename: "timeline_analysis.png",
        prompt: "Dallas motorcade timeline diagram, minute-by-minute reconstruction, Dealey Plaza route map, historical documentation"
    },
    {
        filename: "phone_call_research.png",
        prompt: "Late night phone call in research office, JFK documents visible on desk, tense investigation atmosphere, dramatic lighting"
    },
    {
        filename: "truth_publication.png",
        prompt: "Press conference podium with JFK findings, historian presenting evidence, media cameras and microphones, revelation moment"
    },
    {
        filename: "media_coordination.png",
        prompt: "Media coordination meeting room, multiple news outlet logos, coordinated release strategy documents, journalism investigation"
    },
    {
        filename: "congressional_submission.png",
        prompt: "Congressional submission of JFK findings, Capitol building background, official proceedings documents, government oversight"
    },
    {
        filename: "doj_failure.png",
        prompt: "Department of Justice failure analysis, prosecution decisions documents, federal investigation shortcomings, accountability gaps"
    },
    {
        filename: "main_menu.png",
        prompt: "Investigation case files on detective desk, multiple folders, case selection interface, noir investigation office atmosphere"
    }
];

// Function to generate images using the ImageGenerator class
async function generateJFKImages() {
    console.log('🎬 Starting JFK Assassination Case Image Generation...\n');
    console.log(`📊 Total images to check: ${JFK_IMAGES.length}\n`);

    // Check if config exists
    let config;
    try {
        config = require('./config.js');
    } catch (e) {
        console.log('⚠️  No config.js found. Creating template...');
        console.log('Please add your API keys to config.js and run again.\n');

        const configTemplate = `// Image Generation Configuration
module.exports = {
    // Choose 'stability' or 'openai'
    IMAGE_SERVICE: 'openai',

    // API Keys (add your own)
    STABILITY_API_KEY: 'your-stability-api-key',
    OPENAI_API_KEY: 'your-openai-api-key',

    // Image settings
    IMAGE_WIDTH: 1024,
    IMAGE_HEIGHT: 1024,
    IMAGE_STEPS: 30,
    IMAGE_CFG_SCALE: 7,

    // Generation settings
    SAVE_TO_DISK: true,
    MAX_RETRIES: 3,
    RETRY_DELAY: 2000,
    RATE_LIMIT_DELAY: 1000
};`;

        await fs.writeFile('./config.js', configTemplate);
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

    for (const image of JFK_IMAGES) {
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
        console.log('✨ All JFK Assassination case images already exist!');
        return;
    }

    // Estimate cost
    const estimatedCost = missingImages.length * 0.04; // DALL-E 3 is ~$0.04 per image
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
    console.log('🎬 JFK Assassination Case Image Generation Complete!');
    console.log(`   ✅ Succeeded: ${successCount}`);
    console.log(`   ❌ Failed: ${failCount}`);
    console.log('========================================\n');
}

// Export for use in other scripts
module.exports = {
    JFK_IMAGES,
    generateJFKImages
};

// Run if called directly
if (require.main === module) {
    generateJFKImages().catch(console.error);
}

const fs = require('fs').promises;
const path = require('path');

// COINTELPRO case image prompts - 54 missing images
const COINTELPRO_IMAGES = [
    // Core COINTELPRO Operations
    {
        filename: "cointelpro_documents_analysis.png",
        prompt: "Activists analyzing stolen FBI documents by lamplight, COINTELPRO files spread on table, 1971, underground resistance, shocking revelations"
    },
    {
        filename: "cointelpro_headlines.png",
        prompt: "Washington Post front page COINTELPRO scandal, 1971 newspaper headlines, FBI surveillance exposed, public shock"
    },
    {
        filename: "cointelpro_legacy.png",
        prompt: "Legacy of COINTELPRO documentary style, civil rights history, FBI reform timeline, historical reflection"
    },
    {
        filename: "constitutional_violations.png",
        prompt: "US Constitution with surveillance overlay, FBI files on citizens, Bill of Rights violated, systematic government abuse"
    },

    // Civil Rights Targeting
    {
        filename: "civil_rights_targeting.png",
        prompt: "Civil rights leaders under FBI surveillance, 1960s protest movements infiltrated, government persecution of activists"
    },
    {
        filename: "mlk_fbi_surveillance.png",
        prompt: "FBI surveillance photos of Martin Luther King Jr, wiretap equipment, harassment campaign documentation, institutional racism"
    },
    {
        filename: "mlk_suicide_letter.png",
        prompt: "FBI anonymous threatening letter, typewritten harassment, surveillance package contents, civil rights persecution"
    },
    {
        filename: "mlk_final_years.png",
        prompt: "Martin Luther King Jr 1967-1968, Vietnam War opposition speech, FBI surveillance intensified, final months"
    },
    {
        filename: "mlk_assassination_questions.png",
        prompt: "MLK assassination investigation board, Lorraine Motel Memphis, conspiracy questions, FBI involvement theories"
    },

    // Black Panthers
    {
        filename: "black_panther_disruption.png",
        prompt: "Black Panther Party files, FBI infiltration documents, community program disruption, COINTELPRO operations"
    },
    {
        filename: "hampton_assassination.png",
        prompt: "Fred Hampton memorial tribute, Chicago 1969, FBI complicity in assassination, civil rights martyr, bullet holes in apartment"
    },
    {
        filename: "panther_leadership_targeting.png",
        prompt: "Black Panther Party leaders profile wall, systematic FBI persecution, 1960s activism targeted, wanted posters"
    },
    {
        filename: "community_program_destruction.png",
        prompt: "Black Panther free breakfast program for children, FBI disruption of community services, 1960s activism"
    },
    {
        filename: "william_oneal.png",
        prompt: "FBI informant silhouette, betrayal of Fred Hampton, COINTELPRO infiltration diagram, 1969 Chicago"
    },
    {
        filename: "carter_huggins.png",
        prompt: "Bunchy Carter and John Huggins memorial, UCLA 1969, FBI manufactured conflict, Black Panther martyrs"
    },

    // Malcolm X
    {
        filename: "malcolm_x_fbi.png",
        prompt: "Malcolm X under FBI surveillance, Nation of Islam infiltration, COINTELPRO operations, 1960s civil rights"
    },
    {
        filename: "malcolm_informants.png",
        prompt: "Malcolm X assassination scene documents, Audubon Ballroom, FBI informants present, 1965 investigation"
    },
    {
        filename: "malcolm_coverup.png",
        prompt: "Malcolm X case files, evidence suppression documents, 2021 exoneration headlines, justice delayed"
    },
    {
        filename: "noi_infiltration.png",
        prompt: "Nation of Islam meetings, FBI surveillance photos, Elijah Muhammad files, religious organization infiltration"
    },

    // J. Edgar Hoover & FBI
    {
        filename: "hoover_portrait.png",
        prompt: "J. Edgar Hoover in FBI office, surrounded by files, American flag, powerful bureaucrat, 1960s government power"
    },
    {
        filename: "hoover_files.png",
        prompt: "FBI secret files cabinet, classified folders, political blackmail material, Hoover's Washington power"
    },
    {
        filename: "fbi_manhunt.png",
        prompt: "FBI agents investigating Media PA burglary, 1971 massive manhunt, wanted posters, law enforcement search"
    },
    {
        filename: "document_destruction.png",
        prompt: "FBI agents destroying files, document shredding, COINTELPRO cover-up, evidence destruction 1971"
    },

    // Media PA Burglary
    {
        filename: "citizens_commission.png",
        prompt: "1970s citizen activists, middle-class Americans, anti-war movement, Media PA burglary team, ordinary heroes"
    },
    {
        filename: "media_burglary_planning.png",
        prompt: "Activists planning FBI office break-in, maps and diagrams on table, 1971, citizen resistance planning"
    },
    {
        filename: "media_strategy_meeting.png",
        prompt: "Secret meeting with journalists, COINTELPRO documents being shared, 1971 media strategy session"
    },
    {
        filename: "multi_media_release.png",
        prompt: "Multiple newspaper offices receiving documents, coordinated release strategy, journalism and democracy"
    },
    {
        filename: "strategic_release.png",
        prompt: "Documents sorted for staged release, whistleblower strategy planning, leverage tactics diagram"
    },

    // Investigations & Aftermath
    {
        filename: "church_committee.png",
        prompt: "Senator Frank Church leading congressional hearings, FBI officials testifying, 1975 Senate chamber, intelligence accountability"
    },
    {
        filename: "victim_lawsuits.png",
        prompt: "Courtroom with COINTELPRO victims testifying, civil rights lawyers, FBI accountability lawsuits, 1970s legal proceedings"
    },
    {
        filename: "deeper_investigation.png",
        prompt: "Expanded investigation revealing multiple agencies, surveillance state documentation, intelligence community abuses diagram"
    },
    {
        filename: "investigation_complete.png",
        prompt: "Investigation complete stamp on COINTELPRO files, justice served, truth revealed, historical significance"
    },

    // Anti-War & Other Movements
    {
        filename: "antiwar_infiltration.png",
        prompt: "1960s anti-war protest infiltrated by FBI agents, Vietnam era peace activism, surveillance photos, provocateurs"
    },
    {
        filename: "provocateur_network.png",
        prompt: "FBI informant network diagram, provocateur operations flowchart, infiltration of activist groups"
    },
    {
        filename: "student_surveillance.png",
        prompt: "College campus surveillance 1960s, student activists monitored, FBI university infiltration, SDS files"
    },
    {
        filename: "informant_recruitment.png",
        prompt: "FBI recruiting informant scene, coercion tactics illustrated, 1960s surveillance state, exploitation"
    },

    // Origins & Background
    {
        filename: "red_scare_origins.png",
        prompt: "1950s anti-communist propaganda, McCarthy hearings photos, red scare, FBI surveillance program origins"
    },
    {
        filename: "cpusa_operations.png",
        prompt: "Communist Party USA meetings infiltrated by FBI, 1950s surveillance, red scare operations, Cold War"
    },
    {
        filename: "swp_lawsuit.png",
        prompt: "Socialist Workers Party lawsuit against FBI, courtroom victory, civil rights legal proceedings, 1980s"
    },

    // Forged Letters & Dirty Tricks
    {
        filename: "forged_letters.png",
        prompt: "FBI forged letters spread on desk, fake correspondence operation, COINTELPRO manipulation tactics documents"
    },

    // Celebrity Targeting
    {
        filename: "jean_seberg.png",
        prompt: "Jean Seberg actress portrait, FBI targeting of celebrity, COINTELPRO victim, tragic Hollywood story"
    },
    {
        filename: "celebrity_targeting.png",
        prompt: "Famous celebrities under FBI surveillance collage, John Lennon, Muhammad Ali, Hollywood and civil rights"
    },
    {
        filename: "lennon_targeting.png",
        prompt: "John Lennon FBI surveillance file, Nixon administration targeting, deportation attempt, 1970s NYC"
    },
    {
        filename: "ali_targeting.png",
        prompt: "Muhammad Ali FBI file, draft resistance case, boxing champion targeted, civil rights sports hero"
    },

    // Other Targeted Groups
    {
        filename: "aim_targeting.png",
        prompt: "American Indian Movement under FBI surveillance, Native American activism, Pine Ridge, Leonard Peltier"
    },
    {
        filename: "leonard_peltier.png",
        prompt: "Leonard Peltier case files, AIM leader imprisoned, FBI controversial prosecution, Native American justice"
    },
    {
        filename: "puerto_rico_cointelpro.png",
        prompt: "Puerto Rican independence movement files, FBI surveillance of activists, colonial resistance targeting"
    },
    {
        filename: "white_hate_groups.png",
        prompt: "FBI infiltration of KKK and white supremacist groups, COINTELPRO white hate operations, double standard"
    },
    {
        filename: "gary_rowe.png",
        prompt: "FBI informant Gary Rowe file, KKK infiltrator who participated in violence, controversial informant case"
    },
    {
        filename: "womens_movement_surveillance.png",
        prompt: "Women's liberation movement under surveillance, 1970s feminist activism monitored, FBI gender targeting"
    },
    {
        filename: "religious_targeting.png",
        prompt: "Religious organizations under FBI surveillance, church infiltration, faith-based activism monitored"
    },
    {
        filename: "quaker_surveillance.png",
        prompt: "Quaker peace activists under FBI surveillance, religious pacifists targeted, anti-war faith communities"
    },

    // Modern Legacy
    {
        filename: "modern_surveillance.png",
        prompt: "Modern surveillance state evolution from COINTELPRO, digital monitoring, contemporary civil liberties concerns"
    }
];

// Function to generate images using the ImageGenerator class
async function generateCOINTELPROImages() {
    console.log('🎬 Starting COINTELPRO Case Image Generation...\n');
    console.log(`📊 Total images to check: ${COINTELPRO_IMAGES.length}\n`);

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

    for (const image of COINTELPRO_IMAGES) {
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
        console.log('✨ All COINTELPRO case images already exist!');
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
    console.log('🎬 COINTELPRO Case Image Generation Complete!');
    console.log(`   ✅ Succeeded: ${successCount}`);
    console.log(`   ❌ Failed: ${failCount}`);
    console.log('========================================\n');
}

// Export for use in other scripts
module.exports = {
    COINTELPRO_IMAGES,
    generateCOINTELPROImages
};

// Run if called directly
if (require.main === module) {
    generateCOINTELPROImages().catch(console.error);
}

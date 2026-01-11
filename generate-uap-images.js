const fs = require('fs').promises;
const path = require('path');

// UAP case image prompts - All images
const UAP_IMAGES = [
    // Core Analysis
    {
        filename: "pentagon_uap_office.png",
        prompt: "Modern Pentagon office with multiple screens displaying UAP tracking data, female analyst examining classified reports, high-tech government facility atmosphere"
    },
    {
        filename: "uap_data_analysis.png",
        prompt: "High-tech analysis room with UAP incident maps, statistical charts, and radar data displays, government analyst reviewing classified information"
    },
    {
        filename: "nuclear_facility_monitoring.png",
        prompt: "Military command center with nuclear facility surveillance screens, UAP tracking radar, and classified incident reports, tense security atmosphere"
    },
    {
        filename: "physics_analysis_lab.png",
        prompt: "Advanced physics laboratory with flight trajectory models, acceleration calculations, and aerospace engineering data on multiple screens"
    },
    {
        filename: "declassified_documents.png",
        prompt: "Government office with Cold War era documents, staged UFO photographs, and classified program files spread across desk, historical analysis setting"
    },

    // Congressional & Military
    {
        filename: "congressional_hearing.png",
        prompt: "Congressional hearing room with military witnesses testifying about UAP encounters, formal government oversight atmosphere with media coverage"
    },
    {
        filename: "pentagon_briefing_room.png",
        prompt: "Pentagon briefing room prepared for congressional presentation with UAP analysis displays, professional government setting at dawn"
    },
    {
        filename: "pentagon_training_room.png",
        prompt: "Pentagon training facility with UAP classification charts and official terminology displays, educational government setting"
    },
    {
        filename: "anomalous_uap_analysis.png",
        prompt: "Advanced analysis lab with UAP case files, impossible flight path diagrams, and physics equations on whiteboards"
    },
    {
        filename: "propulsion_analysis_lab.png",
        prompt: "High-tech propulsion research lab with exotic physics equations, field theory diagrams, and UAP propulsion models"
    },
    {
        filename: "radar_sensor_analysis.png",
        prompt: "Military radar analysis center with multiple screens showing tracking data, sensor readings, and validation protocols"
    },
    {
        filename: "military_witness_briefing.png",
        prompt: "Pentagon briefing room with military personnel giving testimony, official UAP documentation on display"
    },
    {
        filename: "senate_hearing_room.png",
        prompt: "Congressional hearing room with senators, UAP evidence displays, and official testimony setup"
    },
    {
        filename: "congressional_budget_hearing.png",
        prompt: "Congressional budget hearing with UAP research funding charts, scientific equipment displays, senators reviewing proposals"
    },

    // International & Scientific
    {
        filename: "international_cooperation_meeting.png",
        prompt: "United Nations meeting room with international delegates, world map showing UAP cooperation networks, diplomatic setting"
    },
    {
        filename: "advanced_technology_lab.png",
        prompt: "Futuristic technology research laboratory with exotic physics experiments, advanced propulsion models, breakthrough technology displays"
    },
    {
        filename: "aircraft_comparison_charts.png",
        prompt: "Military aviation analysis center with aircraft performance charts, UAP capability comparisons, flight test data displays"
    },
    {
        filename: "classified_briefing_room.png",
        prompt: "High-security Pentagon briefing room with classified aircraft displays, military officials, top secret documentation"
    },
    {
        filename: "scientific_research_lab.png",
        prompt: "Modern scientific laboratory with UAP research equipment, peer review documentation, international collaboration displays"
    },
    {
        filename: "behavioral_analysis_center.png",
        prompt: "Intelligence analysis center with UAP behavior charts, pattern recognition displays, strategic location maps"
    },
    {
        filename: "press_briefing_room.png",
        prompt: "White House press briefing room with UAP transparency displays, media representatives, official disclosure protocols"
    },
    {
        filename: "international_treaty_signing.png",
        prompt: "International diplomatic ceremony with UAP cooperation treaty signing, world leaders, scientific collaboration displays"
    },
    {
        filename: "public_opinion_analysis.png",
        prompt: "Public opinion research center with transparency impact charts, public trust surveys, communication strategy displays"
    },
    {
        filename: "resolved_cases_display.png",
        prompt: "Analysis center showing resolved UAP cases with conventional explanations, weather balloon tracking, bird migration data"
    },
    {
        filename: "aaro_methodology_center.png",
        prompt: "AARO headquarters with investigation methodology charts, scientific analysis protocols, quality assurance displays"
    },
    {
        filename: "radar_tracking_display.png",
        prompt: "Military radar control center with UAP tracking displays, impossible flight path charts, multiple radar confirmations"
    },

    // Black Triangle Incident
    {
        filename: "black_triangle_pentagon.png",
        prompt: "Massive black triangular UFO hovering over Pentagon at night, red pulsing lights, emergency vehicles below, dark threatening atmosphere"
    },
    {
        filename: "office_under_attack.png",
        prompt: "Pentagon office under alien attack, black triangle UFO outside window, emergency lighting, ice forming, scientist at computer with UAP data"
    },
    {
        filename: "frozen_evacuation.png",
        prompt: "Pentagon stairwell covered in ice, frozen personnel, emergency evacuation failing, black triangle UFO effect"
    },
    {
        filename: "alien_communication.png",
        prompt: "Pentagon office with alien communication equipment, black triangle UFO outside, electromagnetic effects, scientist making first contact"
    },
    {
        filename: "career_destroyed.png",
        prompt: "Empty office with deleted computer files, scientist in despair, Pentagon badge being revoked, professional failure"
    },
    {
        filename: "heroic_sacrifice.png",
        prompt: "Scientist's final moments transmitting UAP data as alien energy overwhelms her, heroic sacrifice for truth, memorial service"
    },
    {
        filename: "successful_transmission.png",
        prompt: "Pentagon office with successful data upload, scientist victorious, UAP evidence transmitted to world, heroic moment"
    },
    {
        filename: "frozen_death.png",
        prompt: "Pentagon stairwell with frozen bodies, scattered UAP documents covered in ice, dark tragedy"
    },
    {
        filename: "evidence_deleted.png",
        prompt: "Computer screen showing deleted UAP files, scientist in anguish, moral compromise, lost opportunity"
    },
    {
        filename: "alien_collaboration.png",
        prompt: "Human scientist working with alien beings in advanced spacecraft, galactic cooperation, diplomatic breakthrough"
    },
    {
        filename: "human_resistance.png",
        prompt: "Pentagon scientist defying alien ultimatum, military forces responding, humanity choosing independence"
    },

    // Military & Historical
    {
        filename: "military_sensor_data.png",
        prompt: "Military radar displays showing UAP tracking, infrared imagery, multiple sensor confirmations, classified analysis room"
    },
    {
        filename: "malmstrom_incident.png",
        prompt: "1960s military nuclear missile facility, glowing UAP hovering over base, security personnel witnessing, ICBM silos"
    },
    {
        filename: "disinformation_analysis.png",
        prompt: "Analysis of government disinformation campaign, timeline of UAP ridicule, scientific suppression documentation"
    },

    // Thriller Scenes
    {
        filename: "trapped_building.png",
        prompt: "Pentagon hallway with sealed doors, ice forming on walls, black triangle visible through window, trapped scientists"
    },
    {
        filename: "office_trap.png",
        prompt: "Pentagon hallway with ominous lighting, security monitors showing UAP position, scientist facing difficult choice"
    },
    {
        filename: "elevator_trapped.png",
        prompt: "Pentagon elevator stuck between floors, emergency lighting, frost visible through door window, scientists trapped"
    },
    {
        filename: "communications_rescue.png",
        prompt: "Emergency communication equipment, satellite uplink establishing, partial data transmission, military coordination"
    },
    {
        filename: "alien_negotiation.png",
        prompt: "Scientist attempting communication with hovering black triangle, telepathic contact, cosmic negotiation"
    },
    {
        filename: "evidence_gathering_risk.png",
        prompt: "Scientist on rooftop with UAP monitoring equipment, black triangle approaching, high-risk data collection"
    },
    {
        filename: "private_investigation.png",
        prompt: "Civilian UAP research laboratory, suspicious atmosphere, surveillance cameras, scientist receiving warning"
    },
    {
        filename: "pilot_testimony.png",
        prompt: "Military pilots testifying about UAP encounters, congressional hearing, credible witnesses"
    },
    {
        filename: "scientific_method.png",
        prompt: "Scientific methodology diagram for UAP research, rigorous analysis framework"
    },
    {
        filename: "data_transmission_race.png",
        prompt: "Urgent data transmission, upload progress bars, electromagnetic interference, scientist racing time"
    },
    {
        filename: "memory_reconstruction.png",
        prompt: "Scientist reconstructing UAP data from memory, notes and diagrams, colleague assisting, rebuilding investigation"
    }
];

// Function to generate images using the ImageGenerator class
async function generateUAPImages() {
    console.log('Starting UAP Image Generation...\n');
    console.log(`Total images to check: ${UAP_IMAGES.length}\n`);

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

    for (const image of UAP_IMAGES) {
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
        console.log('All UAP images already exist!');
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
    console.log('UAP Image Generation Complete!');
    console.log(`   Succeeded: ${successCount}`);
    console.log(`   Failed: ${failCount}`);
    console.log('========================================\n');
}

// Export for use in other scripts
module.exports = {
    UAP_IMAGES,
    generateUAPImages
};

// Run if called directly
if (require.main === module) {
    generateUAPImages().catch(console.error);
}

const fs = require('fs').promises;
const path = require('path');

// September 11 Commission case image prompts
const SEPTEMBER11_IMAGES = [
    // Core Commission Images
    {
        filename: "commission_headquarters.png",
        prompt: "Federal government building with 9/11 Commission investigation room, stacks of classified documents, serious investigative atmosphere"
    },
    {
        filename: "commission_seal.png",
        prompt: "Official 9/11 Commission seal and congressional authorization documents, formal government investigation setting"
    },
    {
        filename: "commission_final_report.png",
        prompt: "9/11 Commission final report presentation with reform recommendations, congressional hearing room, official government setting"
    },
    {
        filename: "commission_final_presentation.png",
        prompt: "Formal 9/11 Commission presentation to Congress with final report, families of victims in attendance, solemn government atmosphere"
    },

    // Intelligence Documents
    {
        filename: "classified_pdb_document.png",
        prompt: "Declassified Presidential Daily Brief document with CIA seal, August 6 2001 date, government intelligence analysis room"
    },
    {
        filename: "pdb_archive_analysis.png",
        prompt: "Intelligence analyst reviewing stacks of Presidential Daily Briefs, Al Qaeda warnings highlighted, pattern analysis charts"
    },
    {
        filename: "intelligence_agency_chart.png",
        prompt: "Government intelligence analysis room with organizational charts showing CIA, FBI, NSA connections and communication breakdowns"
    },
    {
        filename: "threat_warning_timeline.png",
        prompt: "Intelligence analysis room with timeline charts showing escalating Al Qaeda warnings throughout 2001, red alert indicators"
    },

    // FBI Investigation
    {
        filename: "fbi_phoenix_memo.png",
        prompt: "FBI field office with agent reviewing flight school documents and suspicious student files, investigative atmosphere"
    },
    {
        filename: "fbi_headquarters_inaction.png",
        prompt: "FBI headquarters with incoming field reports piling up, overwhelmed analysts, institutional bureaucracy visualization"
    },
    {
        filename: "fbi_communication_breakdown.png",
        prompt: "FBI organizational chart showing communication barriers between divisions, disconnected databases, frustrated agents"
    },
    {
        filename: "moussaoui_investigation.png",
        prompt: "FBI field office with Moussaoui file, frustrated agents, communication barriers visualization, missed connection diagram"
    },

    // Hijacker Tracking
    {
        filename: "hijacker_surveillance_photos.png",
        prompt: "Intelligence surveillance photos and documents tracking terrorist suspects, FBI investigation board with timeline"
    },
    {
        filename: "hijacker_tracking_board.png",
        prompt: "Intelligence tracking board with 19 hijacker photos and movement patterns, FBI investigation room, red flags and missed connections highlighted"
    },
    {
        filename: "hijacker_us_locations.png",
        prompt: "Map of United States showing hijacker locations, flight schools, residences, and missed detection opportunities"
    },
    {
        filename: "flight_school_evidence.png",
        prompt: "Flight school with training records, pilot certificates, map showing hijacker training locations, suspicious pattern highlighted"
    },

    // Policy & Response Failures
    {
        filename: "policy_meeting_inaction.png",
        prompt: "White House policy meeting with officials debating threat response, charts showing intelligence warnings, institutional paralysis atmosphere"
    },
    {
        filename: "nsc_meeting_delay.png",
        prompt: "White House situation room, empty chairs, postponed meeting notices, escalating threat reports on table"
    },
    {
        filename: "government_response_coordination.png",
        prompt: "Government crisis coordination center with multiple agency representatives, response planning boards, national security atmosphere"
    },

    // Barriers & Failures
    {
        filename: "information_wall_diagram.png",
        prompt: "Diagram showing information flow barriers between CIA, FBI, NSA, with wall preventing communication, frustrated analysts on both sides"
    },
    {
        filename: "institutional_barriers_diagram.png",
        prompt: "Government organizational chart showing barriers between agencies, disconnected systems, reform pathways"
    },
    {
        filename: "visa_screening_failure.png",
        prompt: "Consular office with visa applications, watchlist database showing gaps, immigration screening station, security failure visualization"
    },
    {
        filename: "ignored_warnings_pattern.png",
        prompt: "Stack of ignored intelligence reports, warning flags, pattern of dismissed alerts, institutional complacency visualization"
    },

    // CIA Analysis
    {
        filename: "cia_briefing_aftermath.png",
        prompt: "CIA briefing room after PDB delivery, analysts reviewing documents, no urgent action being taken, institutional complacency atmosphere"
    },
    {
        filename: "cia_decision_making.png",
        prompt: "CIA conference room with analysts discussing notification decisions, classified files, institutional barriers visualization"
    },
    {
        filename: "threat_assessment_center.png",
        prompt: "Intelligence analysis center with multiple agency feeds, threat assessment boards, fragmented information flow visualization"
    },

    // Analysis & Prevention
    {
        filename: "prevention_analysis_board.png",
        prompt: "Investigation board showing intervention points, timeline of missed opportunities, counterfactual analysis"
    },
    {
        filename: "preventive_measures_board.png",
        prompt: "Security planning board showing available countermeasures, implementation barriers, cost-benefit analysis"
    },
    {
        filename: "accountability_hearing.png",
        prompt: "Congressional hearing room with victim families, agency officials, accountability discussion, scales of justice"
    },

    // Reform & Legacy
    {
        filename: "intelligence_reform_signing.png",
        prompt: "President signing Intelligence Reform Act, DNI organizational chart, new counterterrorism structure diagrams"
    },
    {
        filename: "reform_assessment_dashboard.png",
        prompt: "Dashboard showing reform implementation status, effectiveness metrics, ongoing challenges, security improvements"
    },
    {
        filename: "security_reform_implementation.png",
        prompt: "Modern security infrastructure, TSA screening, intelligence fusion center, reformed national security apparatus"
    },
    {
        filename: "coordination_challenges_modern.png",
        prompt: "Modern intelligence coordination center showing ongoing challenges, multiple agency feeds, evolving threat displays"
    },

    // Lessons & Future
    {
        filename: "lessons_learned_display.png",
        prompt: "Educational display showing 9/11 lessons learned, memorial imagery, reform implementation, future prevention"
    },
    {
        filename: "future_threat_prevention.png",
        prompt: "Modern threat prevention center, evolving threat displays, integrated security systems, vigilant national security posture"
    },
    {
        filename: "congressional_family_briefing.png",
        prompt: "Congressional hearing room with victim families, Commission members presenting findings, emotional but dignified atmosphere"
    },
    {
        filename: "investigation_complete_memorial.png",
        prompt: "9/11 Memorial with investigation complete overlay, Commission report, reformed national security, solemn tribute"
    }
];

// Function to generate images using the ImageGenerator class
async function generateSeptember11Images() {
    console.log('Starting September 11 Commission Image Generation...\n');
    console.log(`Total images to check: ${SEPTEMBER11_IMAGES.length}\n`);

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

    for (const image of SEPTEMBER11_IMAGES) {
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
        console.log('All September 11 Commission images already exist!');
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
    console.log('September 11 Commission Image Generation Complete!');
    console.log(`   Succeeded: ${successCount}`);
    console.log(`   Failed: ${failCount}`);
    console.log('========================================\n');
}

// Export for use in other scripts
module.exports = {
    SEPTEMBER11_IMAGES,
    generateSeptember11Images
};

// Run if called directly
if (require.main === module) {
    generateSeptember11Images().catch(console.error);
}

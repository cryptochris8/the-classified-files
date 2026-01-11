const fs = require('fs').promises;
const path = require('path');

// Pentagon Papers case image prompts - 39 images
const PENTAGON_PAPERS_IMAGES = [
    // Core Story Images
    {
        filename: "pentagon_basement_office.png",
        prompt: "Pentagon basement office 1970s, classified documents stacked high, fluorescent lighting, government analyst at desk reading secret papers, serious atmosphere"
    },
    {
        filename: "ellsberg_moral_crisis.png",
        prompt: "Daniel Ellsberg alone in office late at night, surrounded by classified documents, face showing moral anguish, dramatic shadows, weight of decision"
    },
    {
        filename: "document_copying.png",
        prompt: "1970s office at night, man secretly photocopying classified documents, stacks of papers labeled TOP SECRET, tension and urgency"
    },
    {
        filename: "ny_times_newsroom.png",
        prompt: "1970s New York Times newsroom, editors debating around conference table, classified documents spread out, serious discussion, historic moment"
    },
    {
        filename: "secret_hotel_room.png",
        prompt: "Hotel suite converted to newsroom, journalists working intensely, classified documents everywhere, typewriters, serious concentration, 1970s setting"
    },
    {
        filename: "pentagon_papers_headline.png",
        prompt: "New York Times front page June 13 1971, Pentagon Papers headline, newspaper stands, people reading shocking revelations, historic moment"
    },

    // Government & Legal
    {
        filename: "federal_courthouse.png",
        prompt: "Federal courthouse 1971, reporters and protesters outside, government censorship battle, First Amendment crisis, dramatic confrontation"
    },
    {
        filename: "washington_post_newsroom_decision.png",
        prompt: "Washington Post newsroom 1971, Ben Bradlee and editors making historic decision, Pentagon Papers documents, press freedom battle, determination"
    },
    {
        filename: "supreme_court_hearing.png",
        prompt: "Supreme Court 1971, justices hearing Pentagon Papers case, packed courtroom, historic First Amendment battle, gravitas and tension"
    },
    {
        filename: "supreme_court_victory.png",
        prompt: "Supreme Court steps 1971, journalists celebrating victory, newspapers with Pentagon Papers headlines, triumph of press freedom, historic moment"
    },

    // Ellsberg Focus
    {
        filename: "ellsberg_press_conference.png",
        prompt: "Daniel Ellsberg at press conference 1971, revealing himself as Pentagon Papers source, microphones, reporters, moral courage moment"
    },
    {
        filename: "ellsberg_indictment.png",
        prompt: "Federal courthouse, Ellsberg arriving for arraignment, reporters, facing espionage charges, courage under fire"
    },
    {
        filename: "ellsberg_trial_courtroom.png",
        prompt: "Federal courtroom, Ellsberg on trial, lawyers arguing, historic espionage case, tension and drama"
    },
    {
        filename: "ellsberg_vindication.png",
        prompt: "Daniel Ellsberg celebrating outside courthouse, case dismissed, vindication, press and supporters cheering"
    },
    {
        filename: "ellsberg_legacy_debate.png",
        prompt: "Split image showing Ellsberg as hero and accused traitor, public debate, historical judgment"
    },

    // Impact & Consequences
    {
        filename: "vietnam_war_end.png",
        prompt: "Vietnam War ending, helicopters leaving Saigon, Pentagon Papers on desk showing their role in exposing the truth, historical significance"
    },
    {
        filename: "silent_complicity.png",
        prompt: "Pentagon analyst looking troubled at desk, casualty reports stacked high, weight of silence and moral burden, dark atmosphere"
    },
    {
        filename: "silent_complicity_burden.png",
        prompt: "Man looking troubled at desk, casualty reports, American flag, moral weight of silence, psychological toll"
    },
    {
        filename: "moral_failure_consequences.png",
        prompt: "Vietnam War memorial with additional names, consequences of silence, moral failure visualization, what could have been"
    },

    // Government Response
    {
        filename: "government_persecution.png",
        prompt: "FBI surveillance photos, government persecution tactics, authoritarian response to truth-telling, abuse of power"
    },
    {
        filename: "official_channels_failure.png",
        prompt: "Pentagon meeting room, bureaucrats dismissing concerns, memos piled on desk ignored, institutional inertia"
    },
    {
        filename: "congressional_rejection.png",
        prompt: "Senate office meeting, frustrated whistleblower, sympathetic but unwilling senator, institutional barriers to truth"
    },

    // Media & Press
    {
        filename: "washington_post_meeting.png",
        prompt: "Ben Bradlee's office at Washington Post, reviewing classified documents, serious discussion, newspaper legacy"
    },
    {
        filename: "media_strategy_planning.png",
        prompt: "Map with newspaper headquarters marked, strategic planning, multiple copies of documents, coordinated leak strategy"
    },
    {
        filename: "legal_team_meeting.png",
        prompt: "Law office at newspaper, lawyers discussing risks, legal documents, tense deliberation about publishing"
    },
    {
        filename: "document_verification_process.png",
        prompt: "Hotel room converted to newsroom, journalists verifying documents, evidence boards, fact-checking process"
    },
    {
        filename: "editorial_board_decision.png",
        prompt: "New York Times editorial board meeting, heated debate, newspaper tradition vs unprecedented situation"
    },
    {
        filename: "editorial_selection_process.png",
        prompt: "Editors reviewing documents, selecting stories, comprehensive journalism approach, newspaper archives"
    },
    {
        filename: "legal_strategy_preparation.png",
        prompt: "Law library, constitutional law books, lawyers preparing First Amendment defense, preparing for historic case"
    },
    {
        filename: "newspapers_cascade.png",
        prompt: "Multiple newspaper front pages with Pentagon Papers headlines, cascade of publication, press solidarity"
    },

    // Public Reaction
    {
        filename: "public_reaction_protests.png",
        prompt: "Americans reading Pentagon Papers headlines, anti-war protests, credibility gap, public awakening"
    },
    {
        filename: "press_freedom_at_stake.png",
        prompt: "Scales of justice with press freedom vs government secrecy, constitutional crisis, democracy at stake"
    },
    {
        filename: "press_freedom_rally.png",
        prompt: "Demonstrations supporting press freedom, First Amendment signs, journalists and citizens together, 1971"
    },

    // Legacy & Lessons
    {
        filename: "democracy_lessons.png",
        prompt: "Classroom or museum exhibit on Pentagon Papers, constitutional principles, lessons of history, civic education"
    },
    {
        filename: "moral_courage_reflection.png",
        prompt: "Contemplative image of conscience, individual vs institution, moral courage visualization, doing right"
    },
    {
        filename: "modern_whistleblowers.png",
        prompt: "Timeline of whistleblowers from Ellsberg to Snowden, evolution of truth-telling, digital age leaks"
    },
    {
        filename: "watergate_connection.png",
        prompt: "Visual connection between Pentagon Papers and Watergate, Nixon, timeline of events, ironic consequences"
    },

    // Conclusion
    {
        filename: "pentagon_papers_conclusion.png",
        prompt: "Pentagon Papers documents preserved, press freedom monument, democracy served by truth"
    },
    {
        filename: "press_freedom_monument.png",
        prompt: "Memorial to press freedom, First Amendment text carved in stone, Pentagon Papers documents displayed, tribute to investigative journalism"
    }
];

// Function to generate images using the ImageGenerator class
async function generatePentagonPapersImages() {
    console.log('Starting Pentagon Papers Image Generation...\n');
    console.log(`Total images to check: ${PENTAGON_PAPERS_IMAGES.length}\n`);

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

    for (const image of PENTAGON_PAPERS_IMAGES) {
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
        console.log('All Pentagon Papers images already exist!');
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
    console.log('Pentagon Papers Image Generation Complete!');
    console.log(`   Succeeded: ${successCount}`);
    console.log(`   Failed: ${failCount}`);
    console.log('========================================\n');
}

// Export for use in other scripts
module.exports = {
    PENTAGON_PAPERS_IMAGES,
    generatePentagonPapersImages
};

// Run if called directly
if (require.main === module) {
    generatePentagonPapersImages().catch(console.error);
}

// Create comprehensive storylines for the remaining cases
const fs = require('fs');
const path = require('path');

// COINTELPRO Full Expansion
const cointerproExpansion = `        // Expanded scenes for COINTELPRO investigation
        
        document_analysis: {
            text: \`ANALYZING THE STOLEN DOCUMENTS
            
            Back at your safe house, you spread out the stolen FBI files:
            
            📄 COINTELPRO - "COUNTER INTELLIGENCE PROGRAM"
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            Objective: "Expose, disrupt, misdirect, discredit, 
            or otherwise neutralize" domestic political groups
            
            Target Categories:
            • "Black Nationalist Hate Groups" (Civil Rights)
            • "New Left" (Anti-War Movement)  
            • "White Hate Groups" (KKK, Nazis)
            • "Communist Party USA"
            • "Socialist Workers Party"
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            🎯 SPECIFIC OPERATIONS DISCOVERED:
            • Forged letters to create conflict between groups
            • Fake news articles planted in media
            • Burglaries of activist offices
            • Infiltration and provocateur activities
            • IRS harassment and tax audits
            
            This isn't law enforcement - it's political warfare against American citizens.\`,
            image: "cointelpro_documents_analysis",
            imagePrompt: "Activists analyzing stolen FBI documents by lamplight, COINTELPRO files spread out, shocking revelations, underground resistance",
            choices: [
                {
                    text: "Focus on Martin Luther King operations",
                    nextScene: "mlk_surveillance",
                    progressIncrease: 25,
                    evidence: true
                },
                {
                    text: "Investigate Black Panther targeting",
                    nextScene: "black_panther_disruption"
                },
                {
                    text: "Examine anti-war movement infiltration", 
                    nextScene: "antiwar_infiltration",
                    progressIncrease: 20
                }
            ]
        },
        
        mlk_surveillance: {
            text: \`THE FBI WAR ON MARTIN LUTHER KING
            
            The most shocking files reveal the FBI's obsessive targeting of Dr. King:
            
            📋 OPERATION: DESTROY THE "BURR HEAD"
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • 24/7 surveillance since 1957
            • Hotel room bugging during travels
            • Phone taps on home and office
            • Infiltration of inner circle
            • Sexual harassment and blackmail attempts
            • Labeled "most dangerous Negro leader"
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            📄 FBI LETTER TO DR. KING (1964):
            "You are a colossal fraud and an evil, vicious one at that... 
            There is only one way out for you. You better take it before 
            your filthy, abnormal fraudulent self is bared to the nation."
            
            🎯 THE GOAL: Drive King to suicide before he receives the Nobel Peace Prize.
            
            The FBI tried to destroy America's greatest civil rights leader.\`,
            image: "mlk_fbi_surveillance",
            imagePrompt: "FBI surveillance photos of Martin Luther King Jr, wiretap equipment, harassment campaign documentation, institutional racism",
            badges: ["truthSeeker"],
            choices: [
                {
                    text: "This must be exposed immediately",
                    nextScene: "media_release_strategy",
                    progressIncrease: 35,
                    evidence: true
                },
                {
                    text: "Find more evidence of FBI crimes",
                    nextScene: "systematic_violations"
                },
                {
                    text: "Connect to other civil rights targeting",
                    nextScene: "civil_rights_persecution",
                    progressIncrease: 30
                }
            ]
        },
        
        black_panther_disruption: {
            text: \`DESTROYING THE BLACK PANTHERS
            
            COINTELPRO's most violent operations targeted the Black Panther Party:
            
            🐾 OPERATION: NEUTRALIZE THE PANTHERS
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • Infiltrate with provocateurs
            • Create internal conflicts through forged letters
            • Coordinate with local police raids
            • Assassinate leadership (Fred Hampton, Mark Clark)
            • Frame members for crimes they didn't commit
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            📄 FBI MEMO - CHICAGO OFFICE:
            "The BPP breakfast program for children represents 
            the greatest threat to internal security. It shows 
            that Panthers can provide community services."
            
            🎯 THE STRATEGY: Destroy positive community programs while promoting criminal elements to discredit the entire movement.
            
            The FBI was more afraid of Black Panthers feeding children than carrying guns.\`,
            image: "black_panther_disruption",
            imagePrompt: "Black Panther Party files, FBI infiltration documents, community program disruption, assassination planning materials",
            choices: [
                {
                    text: "Focus on Fred Hampton assassination",
                    nextScene: "hampton_assassination",
                    progressIncrease: 40,
                    evidence: true
                },
                {
                    text: "Document the provocateur operations",
                    nextScene: "provocateur_network"
                },
                {
                    text: "Expose the community program targeting",
                    nextScene: "community_program_destruction",
                    progressIncrease: 25
                }
            ]
        },
        
        media_release_strategy: {
            text: \`RELEASING THE DOCUMENTS
            
            March 1971 - You must get these documents to the media:
            
            📰 MEDIA STRATEGY:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • Washington Post: Most prestigious, but will they publish?
            • New York Times: Still fighting Pentagon Papers case
            • Smaller papers: Might be more willing to take risks
            • Multiple simultaneous releases to prevent suppression
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            📞 CALL TO WASHINGTON POST:
            "We have documents proving the FBI has been conducting 
            illegal surveillance and harassment of American citizens 
            for decades. Are you interested?"
            
            REPORTER: "How did you obtain these documents?"
            
            "We can't reveal our sources, but we can prove authenticity."
            
            The Post agrees to meet. Democracy depends on these revelations reaching the public.\`,
            image: "media_strategy_meeting",
            imagePrompt: "Secret meeting with journalists, COINTELPRO documents being shared, media strategy session, democracy in action",
            choices: [
                {
                    text: "Give everything to Washington Post",
                    nextScene: "post_publication",
                    progressIncrease: 45,
                    evidence: true
                },
                {
                    text: "Spread documents to multiple papers",
                    nextScene: "multi_media_release",
                    progressIncrease: 40
                },
                {
                    text: "Hold back some documents as insurance",
                    nextScene: "strategic_release"
                }
            ]
        },
        
        post_publication: {
            text: \`WASHINGTON POST BREAKS THE STORY
            
            MARCH 24, 1971 - FRONT PAGE HEADLINE:
            
            📰 "FBI FOUND GATHERING DATA ON ACTIVISTS"
            
            The story reveals:
            
            🔍 SHOCKING REVELATIONS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • FBI maintains files on 1+ million Americans
            • Systematic harassment of civil rights leaders
            • Infiltration of anti-war groups with provocateurs
            • Use of burglary, wiretapping, and blackmail
            • Coordination with local police for raids
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            📺 PUBLIC REACTION:
            • Massive protests demanding FBI accountability
            • Congressional hearings launched immediately
            • J. Edgar Hoover forced to defend operations
            • Civil liberties groups file lawsuits nationwide
            
            🎯 FBI RESPONSE:
            Hoover immediately shuts down COINTELPRO operations and begins massive document destruction.
            
            Your courage has exposed one of the greatest domestic surveillance scandals in American history.\`,
            image: "cointelpro_headlines",
            imagePrompt: "Washington Post front page COINTELPRO story, public reading newspapers in shock, FBI surveillance scandal exposed",
            badges: ["whistleblower"],
            choices: [
                {
                    text: "Force Congressional investigation",
                    nextScene: "church_committee_cointelpro",
                    progressIncrease: 50,
                    evidence: true
                },
                {
                    text: "Help victims file lawsuits",
                    nextScene: "victim_lawsuits"
                },
                {
                    text: "Continue investigating other programs",
                    nextScene: "deeper_investigation",
                    progressIncrease: 35
                }
            ]
        },`;

// Apply COINTELPRO expansion
const cointerproPath = path.join(__dirname, 'cointelpro-story-expanded.js');
if (fs.existsSync(cointerproPath)) {
    let content = fs.readFileSync(cointerproPath, 'utf8');
    const victoryIndex = content.lastIndexOf('victory: {');
    if (victoryIndex !== -1) {
        const beforeVictory = content.substring(0, victoryIndex);
        const afterVictory = content.substring(victoryIndex);
        content = beforeVictory + cointerproExpansion + '\n        ' + afterVictory;
        fs.writeFileSync(cointerproPath, content);
        console.log('✅ Expanded COINTELPRO with comprehensive storyline');
    }
}

// Snowden Expansion  
const snowdenExpansion = `        // Expanded scenes for Snowden investigation
        
        moral_crisis: {
            text: \`THE MORAL CRISIS DEEPENS
            
            Every day at work, you see more evidence of constitutional violations:
            
            💻 DAILY SURVEILLANCE REALITY:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • 3+ billion phone calls intercepted daily in U.S.
            • Every email, text, web search stored permanently
            • Location tracking of all cell phones
            • Financial transaction monitoring
            • Social media analysis and profiling
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            📱 PERSONAL REALIZATION:
            Your own communications are in this database. Your girlfriend's private messages. Your family's personal conversations. Everyone you've ever known.
            
            🏛️ CONSTITUTIONAL VIOLATION:
            The Fourth Amendment prohibits unreasonable searches without warrants. This program violates the constitutional rights of every American.
            
            You took an oath to defend the Constitution. What does that mean when your own government is violating it?\`,
            image: "snowden_moral_crisis",
            imagePrompt: "Edward Snowden at NSA workstation, constitutional text overlay, moral weight of surveillance state, individual versus system",
            choices: [
                {
                    text: "Try to work within the system first",
                    nextScene: "internal_reporting",
                    progressIncrease: 15
                },
                {
                    text: "The public has a right to know",
                    nextScene: "decision_to_leak",
                    progressIncrease: 25,
                    evidence: true
                },
                {
                    text: "Consider the personal consequences",
                    nextScene: "consequence_analysis"
                }
            ]
        },
        
        decision_to_leak: {
            text: \`THE DECISION TO LEAK
            
            You've made your choice. The American people deserve to know what their government is doing.
            
            🎯 YOUR PLAN:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • Copy the most damaging NSA documents
            • Contact investigative journalists
            • Flee the country before revelation
            • Accept exile but preserve democracy
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            📄 DOCUMENTS TO LEAK:
            • PRISM: Direct access to tech company data
            • Upstream: Fiber optic cable tapping
            • XKeyscore: Global internet monitoring
            • Boundless Informant: Surveillance statistics
            • Foreign intelligence collection methods
            
            💭 FINAL THOUGHT:
            "I understand that I will be made to suffer for my actions, but I will be satisfied if the federation of secret law, unequal pardon, and irresistible executive powers that rule the world that I love are revealed even for an instant."
            
            You're about to become the most wanted man in the world.\`,
            image: "snowden_document_preparation",
            imagePrompt: "Snowden secretly copying classified documents, flash drives, preparation for historic leak, tense atmosphere",
            badges: ["courageousAct"],
            choices: [
                {
                    text: "Contact Glenn Greenwald at Guardian",
                    nextScene: "greenwald_contact",
                    progressIncrease: 30,
                    evidence: true
                },
                {
                    text: "Reach out to Washington Post",
                    nextScene: "barton_gellman_approach"
                },
                {
                    text: "Use multiple journalists for safety",
                    nextScene: "multi_journalist_strategy",
                    progressIncrease: 25
                }
            ]
        },
        
        greenwald_contact: {
            text: \`CONTACTING GLENN GREENWALD
            
            MAY 2013 - You reach out to Guardian journalist Glenn Greenwald:
            
            📧 ENCRYPTED EMAIL:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            "I have information about illegal NSA surveillance 
            programs that violate the constitutional rights of 
            every American. Are you interested in a story that 
            could change everything?"
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            🔐 GREENWALD'S RESPONSE:
            "I'm very interested. But we need to communicate securely. Can you use encrypted channels?"
            
            📱 SECURE COMMUNICATIONS SETUP:
            You guide Greenwald through setting up encryption software. The technology barriers almost kill the story before it starts.
            
            🎬 THE MEETING PLAN:
            "I'll be in Hong Kong. If you want the biggest story in journalism history, meet me there."
            
            The wheels are now in motion for the most significant intelligence leak in history.\`,
            image: "greenwald_encrypted_contact",
            imagePrompt: "Encrypted communications setup, journalist-source contact, secure channels, preparation for historic revelation",
            choices: [
                {
                    text: "Fly to Hong Kong for the meeting",
                    nextScene: "hong_kong_revelation",
                    progressIncrease: 40,
                    evidence: true
                },
                {
                    text: "Prepare additional documents first",
                    nextScene: "document_collection_expansion"
                },
                {
                    text: "Consider involving Laura Poitras too",
                    nextScene: "poitras_collaboration",
                    progressIncrease: 35
                }
            ]
        },
        
        hong_kong_revelation: {
            text: \`HONG KONG REVELATION
            
            JUNE 2013 - MIRA HOTEL, HONG KONG
            
            You meet Glenn Greenwald and documentary filmmaker Laura Poitras:
            
            🏨 THE HISTORIC MEETING:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            GREENWALD: "Who are you and what do you have?"
            
            YOU: "My name is Edward Snowden. I work for the NSA, 
            and I have evidence that the U.S. government is 
            violating the Constitution on a massive scale."
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            📄 DOCUMENT REVIEW:
            For hours, you explain the surveillance programs:
            • PRISM collects data directly from tech companies
            • NSA taps underwater internet cables globally  
            • Every American's communications are stored
            • Foreign allies are spied on without their knowledge
            
            🎥 POITRAS FILMING:
            Unknown to the world, she's documenting this historic moment for her film "Citizenfour."
            
            🌍 GLOBAL IMPACT BEGINS:
            These revelations will expose the surveillance state to the entire world.\`,
            image: "hong_kong_hotel_meeting",
            imagePrompt: "Hong Kong hotel room meeting, Snowden with journalists, classified documents spread out, historic moment being filmed",
            badges: ["whistleblower"],
            choices: [
                {
                    text: "Authorize publication of PRISM story",
                    nextScene: "prism_publication",
                    progressIncrease: 50,
                    evidence: true
                },
                {
                    text: "Reveal your identity publicly first",
                    nextScene: "public_revelation",
                    progressIncrease: 45
                },
                {
                    text: "Start with foreign surveillance to build credibility",
                    nextScene: "foreign_surveillance_first"
                }
            ]
        },`;

// Apply Snowden expansion
const snowdenPath = path.join(__dirname, 'snowden-revelations-story-expanded.js');
if (fs.existsSync(snowdenPath)) {
    let content = fs.readFileSync(snowdenPath, 'utf8');
    const victoryIndex = content.lastIndexOf('victory: {');
    if (victoryIndex !== -1) {
        const beforeVictory = content.substring(0, victoryIndex);
        const afterVictory = content.substring(victoryIndex);
        content = beforeVictory + snowdenExpansion + '\n        ' + afterVictory;
        fs.writeFileSync(snowdenPath, content);
        console.log('✅ Expanded Snowden Revelations with comprehensive storyline');
    }
}

console.log('\n🎉 Major storylines expanded with detailed investigation paths!');
console.log('COINTELPRO and Snowden now have full narrative arcs with multiple branching paths.');
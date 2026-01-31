// Snowden Revelations - An Interactive Investigation
// Based on historical events and verified facts

const SnowdenRevelationsStoryExpanded = {
    title: "Snowden Revelations",
    description: "Follow Edward Snowden's decision to expose NSA mass surveillance programs and the global impact of his revelations about government spying.",
    difficulty: "Expert",
    estimatedTime: "60-90 minutes",
    
    badges: {
        truthSeeker: {
            id: "truth-seeker",
            name: "Truth Seeker",
            description: "Uncovered the conspiracy",
            icon: "🔍"
        },
        whistleblower: {
            id: "whistleblower", 
            name: "Whistleblower",
            description: "Exposed government secrets",
            icon: "📢"
        },
        justiceSeeker: {
            id: "justice-seeker",
            name: "Justice Seeker", 
            description: "Fought for accountability",
            icon: "⚖️"
        },
        courageousAct: {
            id: "courageous-act",
            name: "Courageous Act",
            description: "Showed moral courage under pressure", 
            icon: "🦸"
        }
    },
    
    scenes: {
        intro: {
                text: "SNOWDEN REVELATIONS\n                \n                MAY 2013 - NSA HAWAII FACILITY\n                \n                You are Edward Snowden, a 29-year-old NSA contractor with top-secret clearance. Working in paradise, you have access to the most classified surveillance programs in U.S. history.\n                \n                🔒 WHAT YOU'VE DISCOVERED:\n                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n                • PRISM: Direct access to tech company data\n                • XKeyscore: Ability to search anyone's internet activity\n                • Upstream: Tapping internet backbone cables\n                • Boundless Informant: Billions of records collected daily\n                • Bulk metadata collection on all Americans\n                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n                \n                The NSA is collecting everything - emails, phone calls, internet searches, location data - on millions of innocent Americans without warrants.\n                \n                The Constitution is being violated on an industrial scale.\n                \n                Do you stay silent and keep your $200,000 salary, or risk everything to warn the American people?",
                image: "nsa_hawaii_facility",
                imagePrompt: "Modern NSA facility in Hawaii, computer screens showing surveillance data, young contractor looking troubled, moral crisis moment",
            choices: [
          {
                    "text": "Document the surveillance programs systematically",
                    "nextScene": "moral_crisis",
                    "progressIncrease": 15
          },
          {
                    "text": "Consider the constitutional implications",
                    "nextScene": "decision_to_leak",
                    "progressIncrease": 20
          },
          {
                    "text": "Try to work within the system first",
                    "nextScene": "victory"
          }
],
            educationalNote: "Edward Snowden's 2013 revelations exposed the NSA's massive surveillance programs that collected data on millions of Americans without warrants."
        }
},
    
    // Additional scenes would be added here for full game
    
            // Expanded scenes for Snowden investigation
        
        moral_crisis: {
            text: `THE MORAL CRISIS DEEPENS
            
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
            
            You took an oath to defend the Constitution. What does that mean when your own government is violating it?`,
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
            text: `THE DECISION TO LEAK
            
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
            
            You're about to become the most wanted man in the world.`,
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
            text: `CONTACTING GLENN GREENWALD
            
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
            
            The wheels are now in motion for the most significant intelligence leak in history.`,
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
            text: `HONG KONG REVELATION
            
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
            These revelations will expose the surveillance state to the entire world.`,
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
        },
        victory: {
        text: `INVESTIGATION COMPLETE
        TRUTH REVEALED
        
        🏆 YOUR ACHIEVEMENTS:
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        ✓ Exposed the full scope of the conspiracy
        ✓ Brought truth to light
        ✓ Fought for justice and accountability
        ✓ Defended democratic principles
        ✓ Protected innocent victims
        ✓ Reformed oversight systems
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        
        Your investigation helped expose one of the most 
        significant scandals in modern history.
        
        🎖️ FINAL SCORE: 90/100
        
        Thank you for investigating SNOWDEN REVELATIONS.`,
        image: "investigation_complete",
        imagePrompt: "Investigation complete, justice served, truth revealed, historical significance",
        choices: [
            {
                text: "Play again",
                nextScene: "intro"
            },
            {
                text: "Return to main menu",
                nextScene: "mainMenu"
            }
        ]
    }
};

// Make it available globally
window.SnowdenRevelationsStoryExpanded = SnowdenRevelationsStoryExpanded;
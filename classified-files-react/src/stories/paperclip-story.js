// Operation Paperclip - An Interactive Investigation
// Based on historical events and verified facts

const PaperclipStory = {
    title: "Operation Paperclip",
    description: "Uncover how the U.S. secretly recruited Nazi scientists after WWII, hiding their war crimes to gain technological advantages in the Cold War.",
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
                text: "OPERATION PAPERCLIP\n                \n                MAY 1945 - POST-WAR GERMANY\n                \n                You are a State Department investigator tasked with vetting German scientists for potential recruitment. As the Third Reich collapses, a secret U.S. program is capturing Nazi scientists and bringing them to America.\n                \n                🚀 PROJECT OBJECTIVES:\n                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n                • Recruit rocket technology experts\n                • Prevent Soviet capture of German scientists\n                • Accelerate U.S. missile/space programs\n                • Overlook war crimes for strategic advantage\n                • Falsify background reports as needed\n                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n                \n                📄 FILE: DR. WERNHER VON BRAUN\n                \"Brilliant rocket scientist, Father of V-2 program\n                CLASSIFIED: Used slave labor, 20,000+ deaths at factory\n                RECOMMENDATION: Recruit despite war crimes\"\n                \n                The U.S. is making deals with the devil to win the Cold War.\n                \n                How many Nazi war criminals are we willing to protect for technological secrets?",
                image: "nazi_scientist_recruitment",
                imagePrompt: "1945 post-war Germany, American officials interviewing German scientists, Nazi documents being reviewed, moral compromise",
            choices: [
          {
                    "text": "Focus on the rocket scientists",
                    "nextScene": "von_braun_investigation",
                    "progressIncrease": 15
          },
          {
                    "text": "Investigate the war crimes cover-up",
                    "nextScene": "war_crimes_coverup",
                    "progressIncrease": 20
          },
          {
                    "text": "Examine the Cold War justification",
                    "nextScene": "victory"
          }
],
            educationalNote: "Operation Paperclip (1945-1959) secretly recruited Nazi scientists to the U.S., often hiding their war crimes to gain technological advantages in the Cold War."
        }
},
    
    // Additional scenes would be added here for full game
    
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
        
        Thank you for investigating OPERATION PAPERCLIP.`,
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

export default PaperclipStory

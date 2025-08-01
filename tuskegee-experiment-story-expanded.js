// Tuskegee Experiment - An Interactive Investigation
// Based on historical events and verified facts

const TuskegeeExperimentStoryExpanded = {
    title: "Tuskegee Experiment",
    description: "Investigate the 40-year unethical medical study that denied treatment to African American men with syphilis in the name of science.",
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
                text: "TUSKEGEE EXPERIMENT\n                \n                1972 - PUBLIC HEALTH SERVICE OFFICES\n                \n                You are Peter Buxtun, a Public Health Service investigator who has discovered disturbing details about a 40-year medical study called \"The Tuskegee Study of Untreated Syphilis in the Negro Male.\"\n                \n                📋 STUDY PARAMETERS (1932-1972):\n                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n                • 600 African American men enrolled\n                • 399 with syphilis, 201 controls\n                • Told they were being treated for \"bad blood\"\n                • Actually never received proper treatment\n                • Penicillin discovered as cure in 1940s - WITHHELD\n                • Families infected, children born with congenital syphilis\n                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n                \n                The government has been using these men as human guinea pigs for four decades, watching them die from a treatable disease.\n                \n                This isn't medicine - it's torture disguised as science.",
                image: "tuskegee_medical_records",
                imagePrompt: "1970s medical office, African American patient files marked with syphilis studies, unethical medical experimentation evidence",
            choices: [
          {
                    "text": "Investigate the study's methodology",
                    "nextScene": "study_methodology",
                    "progressIncrease": 15
          },
          {
                    "text": "Focus on the ethical violations",
                    "nextScene": "ethical_violations",
                    "progressIncrease": 20
          },
          {
                    "text": "Find the victims and their families",
                    "nextScene": "victory"
          }
],
            educationalNote: "The Tuskegee Experiment (1932-1972) studied untreated syphilis in African American men without their informed consent, denying them treatment even after penicillin was discovered."
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
        
        Thank you for investigating TUSKEGEE EXPERIMENT.`,
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
window.TuskegeeExperimentStoryExpanded = TuskegeeExperimentStoryExpanded;
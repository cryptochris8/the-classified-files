// Iran-Contra Affair - An Interactive Investigation
// Based on historical events and verified facts

const IrancontraStory = {
    title: "Iran-Contra Affair",
    description: "Uncover the secret arms deals and illegal funding of Nicaraguan rebels that nearly brought down the Reagan presidency.",
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
                text: "IRAN-CONTRA AFFAIR\n                \n                NOVEMBER 1986 - WHITE HOUSE BASEMENT\n                \n                You are Lieutenant Colonel Oliver North, working in the National Security Council. As Congress investigates leaked reports of arms sales to Iran, you're frantically shredding documents that could implicate the Reagan administration in illegal activities.\n                \n                🔥 OPERATION SCALPEL - SHRED EVERYTHING:\n                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n                • Arms sales to Iran (illegal)\n                • Profits diverted to Contras (illegal)\n                • Saudi/private donor funding (illegal)\n                • Presidential authorization memos (????)\n                • Swiss bank account records\n                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n                \n                But it's too late. Congressional investigators are closing in on a conspiracy that reaches the highest levels of government.\n                \n                Did President Reagan know? How deep does this go?",
                image: "white_house_shredding",
                imagePrompt: "White House basement office 1980s, man in military uniform shredding documents frantically, classified papers, desperation",
            choices: [
          {
                    "text": "Focus on the arms sales to Iran",
                    "nextScene": "arms_for_hostages",
                    "progressIncrease": 15
          },
          {
                    "text": "Follow the money to the Contras",
                    "nextScene": "contra_funding_exposed",
                    "progressIncrease": 20
          },
          {
                    "text": "Find who authorized this operation",
                    "nextScene": "victory"
          }
],
            educationalNote: "Iran-Contra was a secret operation that violated Congressional bans on both arms sales to Iran and funding for Nicaraguan rebels."
        }
},
    
    // Additional scenes would be added here for full game
    
            arms_for_hostages: {
          text: "ARMS FOR HOSTAGES SCHEME\n                \n                The Reagan administration is secretly selling weapons to Iran:\n                \n                🎯 OPERATION RECOVERY:\n                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n                • Sell TOW missiles to Iran (illegal)\n                • Iran pressures Hezbollah to release hostages\n                • Use profits to fund Nicaraguan Contras (illegal)\n                • Circumvent Congressional arms embargo\n                • Deny everything publicly\n                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n                \n                📞 REAGAN'S PUBLIC STATEMENT:\n                \"We do not negotiate with terrorists.\"\n                \n                📄 CLASSIFIED REALITY:\n                The U.S. is literally selling weapons to Iran (designated terrorist state) to free hostages while funding an illegal war.\n                \n                The hypocrisy is staggering.",
          image: "arms_deals_iran",
          imagePrompt: "Secret arms shipments to Iran, TOW missiles, clandestine operations, Reagan era hypocrisy, illegal weapons sales",
          choices: [
                    {
                              text: "Track the money to Contras",
                              nextScene: "contra_funding_exposed",
                              progressIncrease: 30,
                              evidence: true
                    },
                    {
                              text: "Find who authorized this",
                              nextScene: "reagan_knowledge_question"
                    },
                    {
                              text: "Document the cover-up",
                              nextScene: "cover_up_begins",
                              progressIncrease: 25
                    }
          ]
},
        north_testimony: {
          text: "OLIVER NORTH TESTIFIES\n                \n                July 1987 - Lieutenant Colonel Oliver North takes the stand:\n                \n                🎖️ NORTH'S DRAMATIC TESTIMONY:\n                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n                \"I came here to tell the truth - the good, \n                the bad, and the ugly. I participated in \n                what I believed to be a legal activity.\"\n                \n                \"I thought I was doing what was right for \n                America. I was wrong about some things, \n                but I was trying to serve my country.\"\n                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n                \n                📺 PUBLIC REACTION:\n                North becomes a folk hero to conservatives - the loyal soldier following orders. But his testimony reveals systematic lawbreaking at the White House.\n                \n                The question remains: Did President Reagan know?",
          image: "north_congressional_testimony",
          imagePrompt: "Oliver North in military uniform testifying to Congress, packed hearing room, dramatic testimony moment, 1987 Iran-Contra hearings",
          badges: [
                    "truthSeeker"
          ],
          choices: [
                    {
                              text: "Press North on Reagan's knowledge",
                              nextScene: "reagan_knowledge_revealed",
                              progressIncrease: 35,
                              evidence: true
                    },
                    {
                              text: "Focus on the constitutional crisis",
                              nextScene: "constitutional_violations"
                    },
                    {
                              text: "Examine the cover-up conspiracy",
                              nextScene: "conspiracy_exposed"
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
        
        Thank you for investigating IRAN-CONTRA AFFAIR.`,
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

export default IrancontraStory

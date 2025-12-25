// Panama Papers - An Interactive Investigation
// Based on historical events and verified facts

const PanamapapersStory = {
    title: "Panama Papers",
    description: "Investigate the world's largest data leak exposing offshore tax havens, money laundering, and global corruption through 11.5 million documents.",
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
            text: `PANAMA PAPERS
            
            APRIL 3, 2016 - SÜDDEUTSCHE ZEITUNG, MUNICH
            
            You are an investigative journalist who has received the largest data leak in history. An anonymous source calling themselves "John Doe" has given you 11.5 million documents from Panamanian law firm Mossack Fonseca.
            
            🔍 THE LEAK CONTAINS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • 4.8 million emails
            • 3 million database files  
            • 2.1 million PDFs
            • 1.2 million images
            • 320,000 text files
            • 2.6 terabytes of data
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            The documents reveal a global network of offshore shell companies used by world leaders, criminals, and celebrities to hide money and avoid taxes.
            
            This investigation could expose corruption at the highest levels of power worldwide.`,
            image: "data_leak_documents",
            imagePrompt: "Massive database of leaked documents on computer screens, investigative journalist overwhelmed by data, 2016 modern newsroom setting",
            choices: [
                {
                    text: "Start analyzing the data systematically",
                    nextScene: "investigation_begins",
                    progressIncrease: 15
                },
                {
                    text: "Look for famous names first",
                    nextScene: "world_leaders_exposed",
                    progressIncrease: 10
                },
                {
                    text: "Follow the money trails",
                    nextScene: "victory"
                }
            ],
            educationalNote: "The Panama Papers were the largest data leak in history, exposing global corruption and tax avoidance by world leaders and celebrities."
        }
},
    
    // Additional scenes would be added here for full game
    
            investigation_begins: {
          text: "THE INVESTIGATION BEGINS\n                \n                You've received 11.5 million documents. Where do you start?\n                \n                💻 INITIAL DATA ANALYSIS:\n                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n                • 214,488 offshore entities\n                • 14,153 intermediaries  \n                • 12 heads of state implicated\n                • 128 other public officials\n                • $2 trillion in transactions\n                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n                \n                🎯 EARLY DISCOVERIES:\n                • Vladimir Putin's $2 billion network\n                • FIFA corruption payments\n                • Drug cartel money laundering\n                • Tax evasion by celebrities\n                \n                This isn't just about tax avoidance - it's about how the wealthy and powerful hide their crimes from public scrutiny.",
          image: "panama_papers_investigation",
          imagePrompt: "Modern newsroom with massive data analysis, journalists working on leaked documents, global corruption investigation, 2016 setting",
          choices: [
                    {
                              text: "Focus on world leaders",
                              nextScene: "world_leaders_exposed",
                              progressIncrease: 25,
                              evidence: true
                    },
                    {
                              text: "Follow the money trails",
                              nextScene: "money_laundering_network",
                              progressIncrease: 20
                    },
                    {
                              text: "Investigate the law firm",
                              nextScene: "mossack_fonseca_operations"
                    }
          ]
},
        world_leaders_exposed: {
          text: "WORLD LEADERS EXPOSED\n                \n                The Panama Papers reveal corruption at the highest levels of power:\n                \n                👑 HEADS OF STATE IMPLICATED:\n                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n                • ICELAND: PM Sigmundur Gunnlaugsson - Hidden millions\n                • UKRAINE: President Petro Poroshenko - Offshore empire\n                • PAKISTAN: PM Nawaz Sharif - London properties\n                • SAUDI ARABIA: King Salman - $1 billion in assets\n                • ARGENTINA: President Mauricio Macri - Bahamas accounts\n                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n                \n                🇷🇺 THE PUTIN NETWORK:\n                His cellist friend Sergei Roldugin controls $2 billion in offshore accounts - money that clearly belongs to Putin himself.\n                \n                These aren't legitimate business deals - they're kleptocrats stealing from their own people.",
          image: "world_leaders_corruption",
          imagePrompt: "World map with corruption networks, offshore accounts visualization, global kleptocracy exposed, political scandal",
          badges: [
                    "truthSeeker"
          ],
          choices: [
                    {
                              text: "Publish the world leader stories",
                              nextScene: "global_publication",
                              progressIncrease: 40,
                              evidence: true
                    },
                    {
                              text: "Investigate the consequences",
                              nextScene: "political_fallout"
                    },
                    {
                              text: "Focus on the financial system",
                              nextScene: "offshore_system_exposed"
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
        
        Thank you for investigating PANAMA PAPERS.`,
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

export default PanamapapersStory

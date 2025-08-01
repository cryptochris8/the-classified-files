// Script to create all remaining case files efficiently
const fs = require('fs');
const path = require('path');

const cases = [
    {
        filename: "panama-papers-story-expanded.js",
        title: "Panama Papers",
        description: "Investigate the world's largest data leak exposing offshore tax havens, money laundering, and global corruption through 11.5 million documents.",
        globalVar: "PanamaPapersStoryExpanded",
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
                imagePrompt: "Massive database of leaked documents on computer screens, investigative journalist overwhelmed by data, 2016 modern newsroom setting"
            }
        }
    },
    {
        filename: "iran-contra-story-expanded.js", 
        title: "Iran-Contra Affair",
        description: "Uncover the secret arms deals and illegal funding of Nicaraguan rebels that nearly brought down the Reagan presidency.",
        globalVar: "IranContraStoryExpanded",
        scenes: {
            intro: {
                text: `IRAN-CONTRA AFFAIR
                
                NOVEMBER 1986 - WHITE HOUSE BASEMENT
                
                You are Lieutenant Colonel Oliver North, working in the National Security Council. As Congress investigates leaked reports of arms sales to Iran, you're frantically shredding documents that could implicate the Reagan administration in illegal activities.
                
                🔥 OPERATION SCALPEL - SHRED EVERYTHING:
                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                • Arms sales to Iran (illegal)
                • Profits diverted to Contras (illegal)
                • Saudi/private donor funding (illegal)
                • Presidential authorization memos (????)
                • Swiss bank account records
                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                
                But it's too late. Congressional investigators are closing in on a conspiracy that reaches the highest levels of government.
                
                Did President Reagan know? How deep does this go?`,
                image: "white_house_shredding",
                imagePrompt: "White House basement office 1980s, man in military uniform shredding documents frantically, classified papers, desperation"
            }
        }
    },
    {
        filename: "cointelpro-story-expanded.js",
        title: "COINTELPRO Files", 
        description: "Expose the FBI's illegal domestic surveillance and disruption program that targeted civil rights leaders, anti-war activists, and political dissidents.",
        globalVar: "COINTELPROStoryExpanded",
        scenes: {
            intro: {
                text: `COINTELPRO FILES
                
                MARCH 8, 1971 - MEDIA, PENNSYLVANIA
                
                You are part of the Citizens' Commission to Investigate the FBI. Tonight, eight activists will break into the FBI office in Media, Pennsylvania, to expose what you suspect are illegal government surveillance programs.
                
                🏢 FBI RESIDENT AGENCY - MEDIA, PA
                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                Target: Small FBI office, minimal security
                Goal: Steal documents proving FBI domestic spying
                Risk: Life imprisonment for burglary of federal facility
                Motivation: Stop illegal surveillance of peace activists
                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                
                As you rifle through filing cabinets, you discover documents marked "COINTELPRO" - a program you've never heard of.
                
                The files reveal systematic FBI efforts to "expose, disrupt, misdirect, discredit, or otherwise neutralize" American political groups.
                
                This is bigger than surveillance - it's systematic government harassment of its own citizens.`,
                image: "fbi_office_break_in",
                imagePrompt: "1970s FBI office at night, activists searching through filing cabinets by flashlight, classified COINTELPRO documents scattered"
            }
        }
    },
    {
        filename: "snowden-revelations-story-expanded.js",
        title: "Snowden Revelations",
        description: "Follow Edward Snowden's decision to expose NSA mass surveillance programs and the global impact of his revelations about government spying.",
        globalVar: "SnowdenRevelationsStoryExpanded", 
        scenes: {
            intro: {
                text: `SNOWDEN REVELATIONS
                
                MAY 2013 - NSA HAWAII FACILITY
                
                You are Edward Snowden, a 29-year-old NSA contractor with top-secret clearance. Working in paradise, you have access to the most classified surveillance programs in U.S. history.
                
                🔒 WHAT YOU'VE DISCOVERED:
                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                • PRISM: Direct access to tech company data
                • XKeyscore: Ability to search anyone's internet activity
                • Upstream: Tapping internet backbone cables
                • Boundless Informant: Billions of records collected daily
                • Bulk metadata collection on all Americans
                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                
                The NSA is collecting everything - emails, phone calls, internet searches, location data - on millions of innocent Americans without warrants.
                
                The Constitution is being violated on an industrial scale.
                
                Do you stay silent and keep your $200,000 salary, or risk everything to warn the American people?`,
                image: "nsa_hawaii_facility",
                imagePrompt: "Modern NSA facility in Hawaii, computer screens showing surveillance data, young contractor looking troubled, moral crisis moment"
            }
        }
    },
    {
        filename: "tuskegee-experiment-story-expanded.js",
        title: "Tuskegee Experiment",
        description: "Investigate the 40-year unethical medical study that denied treatment to African American men with syphilis in the name of science.",
        globalVar: "TuskegeeExperimentStoryExpanded",
        scenes: {
            intro: {
                text: `TUSKEGEE EXPERIMENT
                
                1972 - PUBLIC HEALTH SERVICE OFFICES
                
                You are Peter Buxtun, a Public Health Service investigator who has discovered disturbing details about a 40-year medical study called "The Tuskegee Study of Untreated Syphilis in the Negro Male."
                
                📋 STUDY PARAMETERS (1932-1972):
                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                • 600 African American men enrolled
                • 399 with syphilis, 201 controls
                • Told they were being treated for "bad blood"
                • Actually never received proper treatment
                • Penicillin discovered as cure in 1940s - WITHHELD
                • Families infected, children born with congenital syphilis
                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                
                The government has been using these men as human guinea pigs for four decades, watching them die from a treatable disease.
                
                This isn't medicine - it's torture disguised as science.`,
                image: "tuskegee_medical_records",
                imagePrompt: "1970s medical office, African American patient files marked with syphilis studies, unethical medical experimentation evidence"
            }
        }
    },
    {
        filename: "operation-paperclip-story-expanded.js",
        title: "Operation Paperclip", 
        description: "Uncover how the U.S. secretly recruited Nazi scientists after WWII, hiding their war crimes to gain technological advantages in the Cold War.",
        globalVar: "OperationPaperclipStoryExpanded",
        scenes: {
            intro: {
                text: `OPERATION PAPERCLIP
                
                MAY 1945 - POST-WAR GERMANY
                
                You are a State Department investigator tasked with vetting German scientists for potential recruitment. As the Third Reich collapses, a secret U.S. program is capturing Nazi scientists and bringing them to America.
                
                🚀 PROJECT OBJECTIVES:
                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                • Recruit rocket technology experts
                • Prevent Soviet capture of German scientists
                • Accelerate U.S. missile/space programs
                • Overlook war crimes for strategic advantage
                • Falsify background reports as needed
                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                
                📄 FILE: DR. WERNHER VON BRAUN
                "Brilliant rocket scientist, Father of V-2 program
                CLASSIFIED: Used slave labor, 20,000+ deaths at factory
                RECOMMENDATION: Recruit despite war crimes"
                
                The U.S. is making deals with the devil to win the Cold War.
                
                How many Nazi war criminals are we willing to protect for technological secrets?`,
                image: "nazi_scientist_recruitment",
                imagePrompt: "1945 post-war Germany, American officials interviewing German scientists, Nazi documents being reviewed, moral compromise"
            }
        }
    }
];

// Generate each case file
cases.forEach(caseData => {
    console.log(`Creating ${caseData.title}...`);
    
    const content = `// ${caseData.title} - An Interactive Investigation
// Based on historical events and verified facts

const ${caseData.globalVar} = {
    title: "${caseData.title}",
    description: "${caseData.description}",
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
    
    scenes: ${JSON.stringify(caseData.scenes, null, 8).replace(/"([^"]+)":/g, '$1:')},
    
    // Additional scenes would be added here for full game
    
    victory: {
        text: \`INVESTIGATION COMPLETE
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
        
        Thank you for investigating ${caseData.title.toUpperCase()}.\`,
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
window.${caseData.globalVar} = ${caseData.globalVar};`;

    fs.writeFileSync(path.join(__dirname, caseData.filename), content);
    console.log(`✅ Created ${caseData.filename}`);
});

console.log('\n🎉 All remaining case files created successfully!');
console.log('Note: These are starter templates. Each would need full scene development for complete gameplay.');
// Fix missing choices for all new games
const fs = require('fs');
const path = require('path');

const fixes = [
    {
        file: 'iran-contra-story-expanded.js',
        title: 'Iran-Contra Affair',
        choices: [
            {
                text: "Focus on the arms sales to Iran",
                nextScene: "arms_for_hostages",
                progressIncrease: 15
            },
            {
                text: "Follow the money to the Contras",
                nextScene: "contra_funding_exposed",
                progressIncrease: 20
            },
            {
                text: "Find who authorized this operation",
                nextScene: "victory"
            }
        ],
        educationalNote: "Iran-Contra was a secret operation that violated Congressional bans on both arms sales to Iran and funding for Nicaraguan rebels."
    },
    {
        file: 'cointelpro-story-expanded.js', 
        title: 'COINTELPRO Files',
        choices: [
            {
                text: "Examine the documents immediately",
                nextScene: "document_analysis",
                progressIncrease: 20
            },
            {
                text: "Secure the files and plan media strategy",
                nextScene: "media_release_strategy",
                progressIncrease: 15
            },
            {
                text: "Look for the most damaging evidence first",
                nextScene: "victory"
            }
        ],
        educationalNote: "COINTELPRO was the FBI's secret program to surveil, infiltrate, and disrupt domestic political organizations from 1956-1971."
    },
    {
        file: 'snowden-revelations-story-expanded.js',
        title: 'Snowden Revelations', 
        choices: [
            {
                text: "Document the surveillance programs systematically",
                nextScene: "moral_crisis",
                progressIncrease: 15
            },
            {
                text: "Consider the constitutional implications",
                nextScene: "decision_to_leak",
                progressIncrease: 20
            },
            {
                text: "Try to work within the system first",
                nextScene: "victory"
            }
        ],
        educationalNote: "Edward Snowden's 2013 revelations exposed the NSA's massive surveillance programs that collected data on millions of Americans without warrants."
    },
    {
        file: 'tuskegee-experiment-story-expanded.js',
        title: 'Tuskegee Experiment',
        choices: [
            {
                text: "Investigate the study's methodology",
                nextScene: "study_methodology",
                progressIncrease: 15
            },
            {
                text: "Focus on the ethical violations",
                nextScene: "ethical_violations", 
                progressIncrease: 20
            },
            {
                text: "Find the victims and their families",
                nextScene: "victory"
            }
        ],
        educationalNote: "The Tuskegee Experiment (1932-1972) studied untreated syphilis in African American men without their informed consent, denying them treatment even after penicillin was discovered."
    },
    {
        file: 'operation-paperclip-story-expanded.js',
        title: 'Operation Paperclip',
        choices: [
            {
                text: "Focus on the rocket scientists",
                nextScene: "von_braun_investigation",
                progressIncrease: 15
            },
            {
                text: "Investigate the war crimes cover-up",
                nextScene: "war_crimes_coverup",
                progressIncrease: 20
            },
            {
                text: "Examine the Cold War justification",
                nextScene: "victory"
            }
        ],
        educationalNote: "Operation Paperclip (1945-1959) secretly recruited Nazi scientists to the U.S., often hiding their war crimes to gain technological advantages in the Cold War."
    }
];

fixes.forEach(fix => {
    const filePath = path.join(__dirname, fix.file);
    
    if (fs.existsSync(filePath)) {
        console.log(`Fixing ${fix.title}...`);
        
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Find the intro scene and add choices
        const introRegex = /(intro:\s*\{[\s\S]*?imagePrompt:\s*"[^"]*")/;
        const match = content.match(introRegex);
        
        if (match) {
            const choicesStr = `,
            choices: ${JSON.stringify(fix.choices, null, 16)},
            educationalNote: "${fix.educationalNote}"`;
            
            const replacement = match[1] + choicesStr;
            content = content.replace(introRegex, replacement);
            
            fs.writeFileSync(filePath, content);
            console.log(`✅ Fixed ${fix.title} - added ${fix.choices.length} choices`);
        } else {
            console.log(`❌ Could not find intro scene pattern in ${fix.title}`);
        }
    } else {
        console.log(`❌ File not found: ${fix.file}`);
    }
});

console.log('\n🎉 All games should now have working choice buttons!');
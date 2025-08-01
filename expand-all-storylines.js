// Script to expand all storylines with additional key scenes
const fs = require('fs');
const path = require('path');

const expansions = {
    'mkultra-story-expanded.js': {
        newScenes: {
            cameron_methods: {
                text: `DR. CAMERON'S METHODS EXPOSED
                
                You document Cameron's horrific "psychic driving" techniques:
                
                📋 CAMERON'S TORTURE PROTOCOL:
                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                Phase 1: "Depatterning" - Destroy existing personality
                • Continuous electroshock (2-3x normal medical dose)
                • Drug-induced comas lasting weeks
                • Sensory deprivation in soundproof rooms
                • Continuous loops of recorded messages
                
                Phase 2: "Psychic Driving" - Rebuild personality
                • Repeated messages played 16 hours daily
                • LSD to increase suggestibility
                • Isolation from all familiar stimuli
                • Complete dependency on medical staff
                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                
                Patient testimony: "I forgot my children's names. I couldn't remember how to tie my shoes. They erased me and tried to make me into something else."`,
                image: "cameron_methods_documentation",
                imagePrompt: "Medical torture documentation, electroshock equipment, sensory deprivation chambers, clinical horror",
                badges: ["truthSeeker"],
                choices: [
                    { text: "Find more victims", nextScene: "canadian_victims", progressIncrease: 25 },
                    { text: "Trace CIA funding", nextScene: "funding_trail", evidence: true },
                    { text: "Document the full scope", nextScene: "surviving_documents", progressIncrease: 30 }
                ]
            },
            
            prison_experiments: {
                text: `PRISON EXPERIMENTS EXPOSED
                
                The most brutal experiments occurred in prisons where subjects couldn't escape:
                
                🏢 ATLANTA FEDERAL PENITENTIARY - 1956-1965
                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                • 100+ inmates given LSD without consent
                • Doses up to 1,500 micrograms (15x recreational dose)
                • Continuous administration for 77 days
                • Subjects paid $25/month to participate
                • No medical monitoring or follow-up care
                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                
                Inmate testimony: "They told us it was medicine. For weeks I couldn't tell what was real. I saw demons crawling on the walls. Some men never came back from those trips."
                
                The CIA targeted the most vulnerable - prisoners who had no choice, no advocates, and no way to report abuse.`,
                image: "prison_experiments",
                imagePrompt: "1960s federal prison, inmates being subjected to drug experiments, medical abuse in confinement, exploitation of vulnerable",
                choices: [
                    { text: "Find surviving prisoner subjects", nextScene: "victim_testimonies", progressIncrease: 20 },
                    { text: "Document the medical violations", nextScene: "ethics_breakdown", evidence: true },
                    { text: "Connect to university research", nextScene: "university_complicity" }
                ]
            }
        }
    },
    
    'panama-papers-story-expanded.js': {
        newScenes: {
            investigation_begins: {
                text: `THE INVESTIGATION BEGINS
                
                You've received 11.5 million documents. Where do you start?
                
                💻 INITIAL DATA ANALYSIS:
                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                • 214,488 offshore entities
                • 14,153 intermediaries  
                • 12 heads of state implicated
                • 128 other public officials
                • $2 trillion in transactions
                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                
                🎯 EARLY DISCOVERIES:
                • Vladimir Putin's $2 billion network
                • FIFA corruption payments
                • Drug cartel money laundering
                • Tax evasion by celebrities
                
                This isn't just about tax avoidance - it's about how the wealthy and powerful hide their crimes from public scrutiny.`,
                image: "panama_papers_investigation",
                imagePrompt: "Modern newsroom with massive data analysis, journalists working on leaked documents, global corruption investigation, 2016 setting",
                choices: [
                    { text: "Focus on world leaders", nextScene: "world_leaders_exposed", progressIncrease: 25, evidence: true },
                    { text: "Follow the money trails", nextScene: "money_laundering_network", progressIncrease: 20 },
                    { text: "Investigate the law firm", nextScene: "mossack_fonseca_operations" }
                ]
            },
            
            world_leaders_exposed: {
                text: `WORLD LEADERS EXPOSED
                
                The Panama Papers reveal corruption at the highest levels of power:
                
                👑 HEADS OF STATE IMPLICATED:
                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                • ICELAND: PM Sigmundur Gunnlaugsson - Hidden millions
                • UKRAINE: President Petro Poroshenko - Offshore empire
                • PAKISTAN: PM Nawaz Sharif - London properties
                • SAUDI ARABIA: King Salman - $1 billion in assets
                • ARGENTINA: President Mauricio Macri - Bahamas accounts
                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                
                🇷🇺 THE PUTIN NETWORK:
                His cellist friend Sergei Roldugin controls $2 billion in offshore accounts - money that clearly belongs to Putin himself.
                
                These aren't legitimate business deals - they're kleptocrats stealing from their own people.`,
                image: "world_leaders_corruption",
                imagePrompt: "World map with corruption networks, offshore accounts visualization, global kleptocracy exposed, political scandal",
                badges: ["truthSeeker"],
                choices: [
                    { text: "Publish the world leader stories", nextScene: "global_publication", progressIncrease: 40, evidence: true },
                    { text: "Investigate the consequences", nextScene: "political_fallout" },
                    { text: "Focus on the financial system", nextScene: "offshore_system_exposed" }
                ]
            }
        }
    },
    
    'iran-contra-story-expanded.js': {
        newScenes: {
            arms_for_hostages: {
                text: `ARMS FOR HOSTAGES SCHEME
                
                The Reagan administration is secretly selling weapons to Iran:
                
                🎯 OPERATION RECOVERY:
                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                • Sell TOW missiles to Iran (illegal)
                • Iran pressures Hezbollah to release hostages
                • Use profits to fund Nicaraguan Contras (illegal)
                • Circumvent Congressional arms embargo
                • Deny everything publicly
                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                
                📞 REAGAN'S PUBLIC STATEMENT:
                "We do not negotiate with terrorists."
                
                📄 CLASSIFIED REALITY:
                The U.S. is literally selling weapons to Iran (designated terrorist state) to free hostages while funding an illegal war.
                
                The hypocrisy is staggering.`,
                image: "arms_deals_iran",
                imagePrompt: "Secret arms shipments to Iran, TOW missiles, clandestine operations, Reagan era hypocrisy, illegal weapons sales",
                choices: [
                    { text: "Track the money to Contras", nextScene: "contra_funding_exposed", progressIncrease: 30, evidence: true },
                    { text: "Find who authorized this", nextScene: "reagan_knowledge_question" },
                    { text: "Document the cover-up", nextScene: "cover_up_begins", progressIncrease: 25 }
                ]
            },
            
            north_testimony: {
                text: `OLIVER NORTH TESTIFIES
                
                July 1987 - Lieutenant Colonel Oliver North takes the stand:
                
                🎖️ NORTH'S DRAMATIC TESTIMONY:
                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                "I came here to tell the truth - the good, 
                the bad, and the ugly. I participated in 
                what I believed to be a legal activity."
                
                "I thought I was doing what was right for 
                America. I was wrong about some things, 
                but I was trying to serve my country."
                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                
                📺 PUBLIC REACTION:
                North becomes a folk hero to conservatives - the loyal soldier following orders. But his testimony reveals systematic lawbreaking at the White House.
                
                The question remains: Did President Reagan know?`,
                image: "north_congressional_testimony",
                imagePrompt: "Oliver North in military uniform testifying to Congress, packed hearing room, dramatic testimony moment, 1987 Iran-Contra hearings",
                badges: ["truthSeeker"],
                choices: [
                    { text: "Press North on Reagan's knowledge", nextScene: "reagan_knowledge_revealed", progressIncrease: 35, evidence: true },
                    { text: "Focus on the constitutional crisis", nextScene: "constitutional_violations" },
                    { text: "Examine the cover-up conspiracy", nextScene: "conspiracy_exposed" }
                ]
            }
        }
    }
};

// Apply expansions to each file
Object.entries(expansions).forEach(([filename, expansion]) => {
    const filePath = path.join(__dirname, filename);
    
    if (fs.existsSync(filePath)) {
        console.log(`Expanding ${filename}...`);
        
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Find the victory scene and insert new scenes before it
        const victoryIndex = content.lastIndexOf('victory: {');
        if (victoryIndex !== -1) {
            // Convert new scenes to string format
            const newScenesStr = Object.entries(expansion.newScenes)
                .map(([sceneKey, sceneData]) => {
                    return `        ${sceneKey}: ${JSON.stringify(sceneData, null, 12).replace(/"([^"]+)":/g, '$1:')},\n`;
                })
                .join('');
            
            // Insert before victory scene
            const beforeVictory = content.substring(0, victoryIndex);
            const afterVictory = content.substring(victoryIndex);
            
            content = beforeVictory + newScenesStr + '\n        ' + afterVictory;
            
            fs.writeFileSync(filePath, content);
            console.log(`✅ Expanded ${filename} with ${Object.keys(expansion.newScenes).length} new scenes`);
        } else {
            console.log(`❌ Could not find victory scene in ${filename}`);
        }
    } else {
        console.log(`❌ File not found: ${filename}`);
    }
});

console.log('\n🎉 All storylines expanded with key additional scenes!');
console.log('Each case now has more investigation paths and deeper narrative development.');
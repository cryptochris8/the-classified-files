// COINTELPRO Files - An Interactive Investigation
// Based on historical events and verified facts

const COINTELPROStoryExpanded = {
    title: "COINTELPRO Files",
    description: "Expose the FBI's illegal domestic surveillance and disruption program that targeted civil rights leaders, anti-war activists, and political dissidents.",
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
                text: "COINTELPRO FILES\n                \n                MARCH 8, 1971 - MEDIA, PENNSYLVANIA\n                \n                You are part of the Citizens' Commission to Investigate the FBI. Tonight, eight activists will break into the FBI office in Media, Pennsylvania, to expose what you suspect are illegal government surveillance programs.\n                \n                🏢 FBI RESIDENT AGENCY - MEDIA, PA\n                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n                Target: Small FBI office, minimal security\n                Goal: Steal documents proving FBI domestic spying\n                Risk: Life imprisonment for burglary of federal facility\n                Motivation: Stop illegal surveillance of peace activists\n                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n                \n                As you rifle through filing cabinets, you discover documents marked \"COINTELPRO\" - a program you've never heard of.\n                \n                The files reveal systematic FBI efforts to \"expose, disrupt, misdirect, discredit, or otherwise neutralize\" American political groups.\n                \n                This is bigger than surveillance - it's systematic government harassment of its own citizens.",
                image: "fbi_office_break_in",
                imagePrompt: "1970s FBI office at night, activists searching through filing cabinets by flashlight, classified COINTELPRO documents scattered",
            choices: [
          {
                    "text": "Examine the documents immediately",
                    "nextScene": "document_analysis",
                    "progressIncrease": 20
          },
          {
                    "text": "Secure the files and plan media strategy",
                    "nextScene": "media_release_strategy",
                    "progressIncrease": 15
          },
          {
                    "text": "Look for the most damaging evidence first",
                    "nextScene": "victory"
          }
],
            educationalNote: "COINTELPRO was the FBI's secret program to surveil, infiltrate, and disrupt domestic political organizations from 1956-1971."
        }
},
    
    // Additional scenes would be added here for full game
    
            // Expanded scenes for COINTELPRO investigation
        
        document_analysis: {
            text: `ANALYZING THE STOLEN DOCUMENTS
            
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
            
            This isn't law enforcement - it's political warfare against American citizens.`,
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
            text: `THE FBI WAR ON MARTIN LUTHER KING
            
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
            
            The FBI tried to destroy America's greatest civil rights leader.`,
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
            text: `DESTROYING THE BLACK PANTHERS
            
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
            
            The FBI was more afraid of Black Panthers feeding children than carrying guns.`,
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
            text: `RELEASING THE DOCUMENTS
            
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
            
            The Post agrees to meet. Democracy depends on these revelations reaching the public.`,
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
            text: `WASHINGTON POST BREAKS THE STORY
            
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
            
            Your courage has exposed one of the greatest domestic surveillance scandals in American history.`,
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
        
        Thank you for investigating COINTELPRO FILES.`,
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
window.COINTELPROStoryExpanded = COINTELPROStoryExpanded;
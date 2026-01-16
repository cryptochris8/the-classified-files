// The Watergate Files - An Interactive Investigation
// Based on historical facts, documents, and testimony

const WatergateStoryExpanded = {
    title: "The Watergate Files",
    description: "Investigate the political scandal that brought down a presidency. Analyze White House tapes, FBI documents, and congressional testimony to understand how investigative journalism exposed government corruption at the highest levels.",
    difficulty: "Expert",
    estimatedTime: "60-90 minutes",
    
    badges: {
        deepThroat: {
            id: "deep-throat",
            name: "Deep Throat",
            description: "Successfully met with the anonymous source",
            icon: "🕵️"
        },
        tapesRevealed: {
            id: "tapes-revealed",
            name: "The Smoking Gun",
            description: "Discovered the White House taping system",
            icon: "📼"
        },
        followMoney: {
            id: "follow-money",
            name: "Follow The Money",
            description: "Traced the financial connections",
            icon: "💰"
        },
        truthRevealed: {
            id: "truth-revealed",
            name: "Truth to Power",
            description: "Exposed the full conspiracy",
            icon: "📰"
        }
    },
    
    scenes: {
        intro: {
            text: `THE WATERGATE FILES
            
            JUNE 17, 1972 - 2:30 AM
            WATERGATE COMPLEX, WASHINGTON D.C.
            
            Five men have been arrested breaking into the Democratic National Committee headquarters. What appears to be a simple burglary will unravel into the greatest political scandal in American history.
            
            You are an investigative journalist at The Washington Post. Your editors Bob Woodward and Carl Bernstein have been following this story, but they need help connecting the dots.
            
            🔍 YOUR MISSION:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • Investigate the break-in and its connections
            • Follow the money trail
            • Uncover the White House involvement
            • Expose the cover-up
            • Reveal the truth to the American people
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            The future of American democracy may depend on your investigation.`,
            image: "washington_post_newsroom",
            imagePrompt: "1970s newspaper newsroom at night, journalists working at desks with typewriters, papers scattered, cigarette smoke in air, dramatic lighting",
            choices: [
                {
                    text: "Review the arrest reports from the break-in",
                    nextScene: "arrest_reports"
                },
                {
                    text: "Check the burglars' backgrounds",
                    nextScene: "burglar_backgrounds"
                },
                {
                    text: "Examine what was found at the scene",
                    nextScene: "crime_scene_evidence"
                }
            ],
            educationalNote: "The Watergate scandal began with what seemed like a simple burglary but revealed a pattern of illegal activities and abuse of power at the highest levels of government."
        },
        
        arrest_reports: {
            text: `METROPOLITAN POLICE DEPARTMENT
            ARREST REPORT - JUNE 17, 1972
            
            You examine the official arrest reports:
            
            📋 ARRESTED INDIVIDUALS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • James W. McCord Jr. - Security Coordinator
            • Bernard L. Barker - Realtor
            • Virgilio R. Gonzalez - Locksmith
            • Eugenio R. Martinez - Real Estate
            • Frank A. Sturgis - Business Consultant
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            🔍 SUSPICIOUS DETAILS:
            • All gave false names initially
            • Carrying $2,300 in sequential $100 bills
            • Sophisticated electronic surveillance equipment
            • Address books with White House phone numbers
            
            ⚠️ RED FLAG: McCord claims to be a "security consultant" but something doesn't add up...`,
            image: "police_arrest_reports",
            imagePrompt: "Close-up of 1970s police arrest reports and mugshots on a detective's desk, typewritten documents, official stamps, evidence photos",
            choices: [
                {
                    text: "Investigate McCord's background",
                    nextScene: "mccord_revelation",
                    evidence: true
                },
                {
                    text: "Trace the sequential bills",
                    nextScene: "follow_the_money",
                    progressIncrease: 10
                },
                {
                    text: "Examine the surveillance equipment",
                    nextScene: "surveillance_tech"
                }
            ],
            educationalNote: "The arrest of the five burglars was just the tip of the iceberg. Their connections would lead investigators up the chain of command."
        },
        
        burglar_backgrounds: {
            text: `BACKGROUND INVESTIGATION
            THE WASHINGTON POST RESEARCH DEPT
            
            Your research reveals disturbing connections:
            
            🕵️ THE BURGLARS' HISTORIES:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            JAMES McCORD:
            • Former CIA agent (1964-1970)
            • Current security coordinator for CRP
            • Committee to Re-elect the President (!!)
            
            BERNARD BARKER:
            • CIA operative during Bay of Pigs
            • Known as "Macho" in intelligence circles
            
            FRANK STURGIS:
            • Soldier of fortune
            • CIA connections in Cuba operations
            
            E. HOWARD HUNT:
            • Name found in address books
            • White House consultant (!)
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            This isn't just a burglary - it's an intelligence operation with direct ties to the President's re-election campaign!`,
            image: "intelligence_connections",
            imagePrompt: "Investigation board with photos, red string connections, CIA documents, 1970s style, dramatic shadows suggesting conspiracy",
            choices: [
                {
                    text: "Focus on the CRP connection",
                    nextScene: "creep_investigation",
                    evidence: true,
                    progressIncrease: 15
                },
                {
                    text: "Investigate E. Howard Hunt",
                    nextScene: "hunt_white_house",
                    progressIncrease: 12
                },
                {
                    text: "Dig into CIA connections",
                    nextScene: "cia_angle"
                }
            ],
            educationalNote: "The burglars weren't ordinary criminals - they were connected to intelligence agencies and the President's campaign."
        },
        
        crime_scene_evidence: {
            text: `EVIDENCE ANALYSIS
            FBI CRIME LAB REPORT
            
            The evidence found at the Watergate is revealing:
            
            🔬 ITEMS RECOVERED:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • Sophisticated bugging devices
            • Lock-picking tools
            • Cameras with high-speed film
            • Walkie-talkies tuned to specific frequencies
            • Rubber surgical gloves
            • Tear gas pens
            • Sequential $100 bills (traced to Miami bank)
            • Address books with "W.House" and "W.H." entries
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            📞 PHONE NUMBERS FOUND:
            • "W. House" - matches White House switchboard
            • "H.H." - later identified as Howard Hunt
            • "G.L." - unknown (investigate?)
            
            This was a professional intelligence-gathering operation, not a simple burglary.`,
            image: "crime_scene_evidence",
            imagePrompt: "FBI evidence table with surveillance equipment, cameras, documents, money, 1970s technology, clinical lighting",
            choices: [
                {
                    text: "Trace the money through the bank",
                    nextScene: "follow_the_money",
                    progressIncrease: 10
                },
                {
                    text: "Investigate the White House numbers",
                    nextScene: "hunt_white_house"
                },
                {
                    text: "Analyze the surveillance targets",
                    nextScene: "dnc_targets"
                }
            ]
        },
        
        mccord_revelation: {
            text: `BREAKING: McCORD'S TRUE IDENTITY
            
            Your investigation hits paydirt:
            
            🎯 JAMES W. McCORD JR:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • Security Coordinator for CRP (CREEP)
            • Committee to Re-elect the President
            • Former CIA Officer (20 years)
            • Salary: $1,209/month from CRP
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            You've found the smoking gun - a direct connection between the burglars and President Nixon's re-election campaign!
            
            📰 HEADLINE OPTIONS:
            This revelation could break the story wide open. How do you proceed?
            
            ⚠️ WARNING: Publishing too early might allow them to cover their tracks...`,
            image: "creep_headquarters",
            imagePrompt: "1970s political campaign office, 'Committee to Re-elect the President' signage, serious atmosphere, filing cabinets",
            badges: ["followMoney"],
            choices: [
                {
                    text: "Publish immediately - this is huge!",
                    nextScene: "early_publication"
                },
                {
                    text: "Dig deeper into CRP's financing",
                    nextScene: "follow_the_money",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Find more sources to corroborate",
                    nextScene: "deep_throat_intro",
                    progressIncrease: 15
                }
            ],
            educationalNote: "McCord's connection to CRP was the first concrete link between the burglary and Nixon's campaign."
        },
        
        follow_the_money: {
            text: `FINANCIAL INVESTIGATION
            FOLLOWING THE MONEY TRAIL
            
            Working with FBI sources, you trace the sequential bills:
            
            💰 THE MONEY TRAIL:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            $100 bills found on burglars
                ↓
            Banco Internacional, Mexico City
                ↓
            $89,000 in cashier's checks
                ↓
            Bernard Barker's Miami account
                ↓
            Funds originated from...
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            🔍 SHOCKING DISCOVERY:
            The money came from CRP's finance chairman Maurice Stans!
            
            You've found evidence of campaign funds being laundered through Mexico to finance illegal activities.
            
            This goes all the way to the top of Nixon's campaign!`,
            image: "financial_documents",
            imagePrompt: "Bank documents, cashier's checks, financial ledgers spread on desk, calculator, 1970s banking paperwork",
            badges: ["followMoney"],
            choices: [
                {
                    text: "Confront Maurice Stans",
                    nextScene: "stans_confrontation"
                },
                {
                    text: "Investigate the Mexican connection",
                    nextScene: "mexico_laundering",
                    progressIncrease: 15,
                    evidence: true
                },
                {
                    text: "Check for more financial irregularities",
                    nextScene: "slush_fund_discovery",
                    progressIncrease: 20
                }
            ],
            educationalNote: "Following the money was crucial to proving the connection between the burglary and the Nixon campaign."
        },
        
        hunt_white_house: {
            text: `E. HOWARD HUNT - WHITE HOUSE CONSULTANT
            
            Your investigation into Hunt reveals shocking connections:
            
            📋 E. HOWARD HUNT PROFILE:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • White House consultant since 1971
            • Reports to Charles Colson (Special Counsel)
            • Office in Executive Office Building
            • CIA veteran (Bay of Pigs organizer)
            • Novelist and spy
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            🔍 RECENT ACTIVITIES:
            • Created "Plumbers" unit to stop leaks
            • Investigated Daniel Ellsberg (Pentagon Papers)
            • Recruited the Watergate burglars
            • Direct line to White House officials
            
            You've discovered that the White House has its own secret intelligence unit operating outside the law!`,
            image: "white_house_office",
            imagePrompt: "1970s White House office interior, official desk, American flag, serious governmental atmosphere, shadowy",
            choices: [
                {
                    text: "Investigate the 'Plumbers' unit",
                    nextScene: "plumbers_unit",
                    progressIncrease: 25,
                    evidence: true
                },
                {
                    text: "Connect Hunt to the burglary",
                    nextScene: "hunt_connection"
                },
                {
                    text: "Look into Charles Colson's role",
                    nextScene: "colson_involvement"
                }
            ],
            educationalNote: "The White House 'Plumbers' were created to stop leaks but evolved into Nixon's secret intelligence unit."
        },
        
        deep_throat_intro: {
            text: `ANONYMOUS SOURCE CONTACT
            
            Late at night, you receive a mysterious phone call:
            
            📞 "Meet me in the underground parking garage at 2 AM. Come alone. 
            I have information about Watergate that goes higher than you imagine."
            
            The voice is disguised, careful. This could be the break you need.
            
            🌙 2:00 AM - PARKING GARAGE
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            A figure emerges from the shadows. Well-dressed, government type.
            
            "You can call me... Deep Throat. I won't give you documents, 
            but I'll confirm what you discover. Follow the money. 
            And remember - these men are dangerous."
            
            "How high does this go?" you ask.
            
            "Higher than you think. But you didn't hear that from me."
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "parking_garage_meeting",
            imagePrompt: "Dark underground parking garage, silhouetted figure in shadows, dramatic noir lighting, 1970s cars, atmospheric",
            badges: ["deepThroat"],
            choices: [
                {
                    text: "Ask about White House involvement",
                    nextScene: "deep_throat_guidance",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Press for specific names",
                    nextScene: "deep_throat_hints"
                },
                {
                    text: "Ask about the money trail",
                    nextScene: "deep_throat_money"
                }
            ],
            educationalNote: "Deep Throat (later revealed as FBI Deputy Director Mark Felt) was crucial in guiding the Washington Post's investigation."
        },
        
        creep_investigation: {
            text: `COMMITTEE TO RE-ELECT THE PRESIDENT (CRP)
            "CREEP" INVESTIGATION
            
            Your deep dive into CRP reveals a massive operation:
            
            🏛️ CRP STRUCTURE:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            Director: John Mitchell (former Attorney General!)
            Deputy: Jeb Stuart Magruder
            Finance Chair: Maurice Stans
            Security: James McCord (arrested at Watergate)
            Counsel: G. Gordon Liddy
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            💰 SUSPICIOUS FINDINGS:
            • Secret cash fund of over $350,000
            • "Security" budget with no oversight
            • Payments to mysterious consultants
            • Destruction of financial records after break-in
            
            🎯 OPERATION GEMSTONE:
            You find references to something called "Operation Gemstone" - Liddy's million-dollar intelligence plan!`,
            image: "creep_office_interior",
            imagePrompt: "1970s political campaign headquarters, filing cabinets, campaign posters, maps on walls, busy office atmosphere",
            choices: [
                {
                    text: "Investigate Operation Gemstone",
                    nextScene: "operation_gemstone",
                    progressIncrease: 30,
                    evidence: true
                },
                {
                    text: "Focus on John Mitchell's role",
                    nextScene: "mitchell_connection",
                    progressIncrease: 25
                },
                {
                    text: "Examine the secret fund",
                    nextScene: "slush_fund_discovery",
                    progressIncrease: 20
                }
            ],
            educationalNote: "CRP, nicknamed 'CREEP,' was the epicenter of the illegal activities that led to Watergate."
        },
        
        operation_gemstone: {
            text: `OPERATION GEMSTONE EXPOSED
            TOP SECRET INTELLIGENCE PLAN
            
            Through careful investigation, you've uncovered G. Gordon Liddy's master plan:
            
            🔷 OPERATION GEMSTONE COMPONENTS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            💎 DIAMOND: Shut down Democratic convention
            💎 RUBY: Infiltrate Democratic campaigns
            💎 CRYSTAL: Surveillance of DNC headquarters
            💎 SAPPHIRE: Sabotage Democratic candidates
            💎 EMERALD: Wiretap opposition leaders
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            📅 APPROVAL MEETINGS:
            • January 27, 1972: Mitchell's office - $1 million plan
            • February 4, 1972: Scaled down to $500,000
            • March 30, 1972: Final approval - $250,000
            
            ⚠️ CRITICAL FACT:
            John Mitchell, the former ATTORNEY GENERAL, personally approved this illegal operation!
            
            The Watergate break-in was just one part of a massive campaign of political espionage.`,
            image: "gemstone_documents",
            imagePrompt: "Top secret documents with gemstone codenames, surveillance photos, operational plans, classified stamps, dramatic lighting",
            badges: ["truthRevealed"],
            choices: [
                {
                    text: "This proves everything - publish now!",
                    nextScene: "gemstone_revelation",
                    progressIncrease: 40,
                    evidence: true
                },
                {
                    text: "Find witnesses to the meetings",
                    nextScene: "magruder_testimony",
                    progressIncrease: 35
                },
                {
                    text: "Look for other Gemstone operations",
                    nextScene: "dirty_tricks"
                }
            ],
            educationalNote: "Operation Gemstone was the codename for the illegal intelligence-gathering operation that included the Watergate break-in."
        },
        
        plumbers_unit: {
            text: `THE WHITE HOUSE PLUMBERS
            SECRET INTELLIGENCE UNIT
            
            Your investigation reveals a shocking abuse of power:
            
            🔧 THE PLUMBERS UNIT:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            Created: July 1971
            Purpose: "Stop leaks" after Pentagon Papers
            Leaders: Hunt & Liddy
            Authority: Direct from White House
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            🎯 ILLEGAL OPERATIONS:
            • Break-in at Ellsberg's psychiatrist's office
            • Forged cables to smear Kennedy
            • Plans to firebomb Brookings Institution
            • Watergate break-in
            
            📍 ROOM 16, OLD EXECUTIVE OFFICE BUILDING
            A secret unit operating from inside the White House itself!
            
            This goes beyond campaign dirty tricks - it's using government power for political purposes.`,
            image: "plumbers_office",
            imagePrompt: "Secret office with surveillance equipment, maps, covert operation planning materials, 1970s spy aesthetic",
            choices: [
                {
                    text: "Connect Plumbers to Watergate",
                    nextScene: "plumbers_watergate_link",
                    progressIncrease: 35,
                    evidence: true
                },
                {
                    text: "Investigate the Ellsberg break-in",
                    nextScene: "ellsberg_psychiatrist"
                },
                {
                    text: "Find who authorized the Plumbers",
                    nextScene: "ehrlichman_connection",
                    progressIncrease: 30
                }
            ],
            educationalNote: "The Plumbers showed how the Nixon administration used government resources for political vendettas."
        },
        
        white_house_tapes_discovery: {
            text: `EXPLOSIVE REVELATION
            WHITE HOUSE TAPING SYSTEM
            
            July 16, 1973 - SENATE WATERGATE COMMITTEE
            
            🎯 ALEXANDER BUTTERFIELD TESTIMONY:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            "Mr. Chairman, there is a recording system in the White House."
            
            The room goes silent. This changes everything.
            
            BUTTERFIELD CONTINUES:
            "President Nixon ordered a voice-activated taping system 
            installed in February 1971. It records all conversations 
            in the Oval Office, the Cabinet Room, his EOB office, 
            and on certain telephones."
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            📼 THE IMPLICATIONS:
            • Every criminal conversation is on tape
            • The President's own words can prove guilt
            • The cover-up discussions are recorded
            • This is the evidence that can end it all
            
            The tapes could reveal everything - if you can get them.`,
            image: "senate_hearing_room",
            imagePrompt: "Senate hearing room, witness testifying, shocked audience, senators at elevated desk, 1970s formal government setting",
            badges: ["tapesRevealed"],
            choices: [
                {
                    text: "Push for immediate tape release",
                    nextScene: "tape_battle_begins",
                    progressIncrease: 45,
                    evidence: true
                },
                {
                    text: "Investigate what's on the tapes",
                    nextScene: "tape_contents_revealed"
                },
                {
                    text: "Prepare for White House resistance",
                    nextScene: "executive_privilege_fight"
                },
                {
                    text: "Decode Nixon's coded language from the tapes 🔐",
                    nextScene: "nixon_code_decoded",
                    progressIncrease: 25,
                    evidence: true,
                    miniGame: {
                        type: 'cipher_decoder',
                        title: 'Decode Nixon\'s Coded Message',
                        description: 'Nixon used coded language on the tapes. Decrypt what he really meant.'
                    }
                }
            ],
            educationalNote: "The revelation of Nixon's secret taping system was the turning point that led to his resignation."
        },

        nixon_code_decoded: {
            text: `DECODED TAPE TRANSCRIPT

            July 1973 - TAPE ANALYSIS

You've decoded Nixon's coded language from the tapes:

📼 DECODED TRANSCRIPT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ORIGINAL (Coded): "PDNH VXUH WKH SOXPEHUV DUH SDLG"
DECODED: "MAKE SURE THE PLUMBERS ARE PAID"

CONTEXT:
"The Plumbers" was Nixon's secret unit that carried out illegal operations, including the Watergate break-in. This tape proves Nixon knew about and authorized payments to keep them quiet.

IMPLICATIONS:
• Direct evidence of hush money authorization
• Nixon personally involved in cover-up
• Obstruction of justice confirmed
• Impeachment grounds established

Your decryption has revealed the "smoking gun" evidence.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "decoded_tape_transcript",
            imagePrompt: "Decoded transcript with cipher key, reel-to-reel tape player, investigative documents",
            sources: ["White House Tapes", "Senate Watergate Committee", "Special Prosecutor Records"],
            miniGameData: {
                type: 'cipher_decoder',
                cipherText: 'PDNH VXUH WKH SOXPEHUV DUH SDLG',
                solution: 'MAKE SURE THE PLUMBERS ARE PAID',
                context: 'Nixon White House Coded Communication',
                maxHints: 3,
                evidenceReward: 'Decoded Nixon Tape',
                progressReward: 25
            },
            choices: [
                {
                    text: "Examine the Smoking Gun tape",
                    nextScene: "smoking_gun_tape",
                    progressIncrease: 30,
                    evidence: true
                },
                {
                    text: "Investigate the Plumbers unit",
                    nextScene: "plumbers_investigation",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Return to tape discovery",
                    nextScene: "white_house_tapes_discovery",
                    progressIncrease: 5
                }
            ],
            educationalNote: "Nixon's coded language on the tapes was key evidence in proving his involvement in the cover-up."
        },

        smoking_gun_tape: {
            text: `THE SMOKING GUN
            JUNE 23, 1972 TAPE
            
            After a long legal battle, the Supreme Court orders tape release.
            
            📼 OVAL OFFICE RECORDING - 10:04 AM:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            NIXON: "...this Hunt, that will uncover a lot of things. 
            You open that scab there's a hell of a lot of things..."
            
            HALDEMAN: "The FBI is not under control... their investigation 
            is leading into some productive areas."
            
            NIXON: "Call the FBI in and say that we wish for the country, 
            don't go any further into this case."
            
            [LATER IN CONVERSATION]
            
            NIXON: "Play it tough. That's the way they play it 
            and that's the way we are going to play it."
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            This is it - proof that Nixon ordered the cover-up just six days after the break-in!`,
            image: "oval_office_tapes",
            imagePrompt: "Oval Office interior with hidden recording devices, reel-to-reel tape machine, presidential desk, American flag",
            badges: ["truthRevealed"],
            choices: [
                {
                    text: "This proves obstruction of justice",
                    nextScene: "final_revelation",
                    progressIncrease: 50,
                    evidence: true
                },
                {
                    text: "Analyze more incriminating tapes",
                    nextScene: "more_tape_evidence"
                },
                {
                    text: "Prepare the final story",
                    nextScene: "washington_post_triumph"
                }
            ],
            educationalNote: "The 'Smoking Gun' tape proved Nixon's direct involvement in the cover-up and led to his resignation."
        },
        
        final_revelation: {
            text: `THE COMPLETE CONSPIRACY REVEALED
            
            Your investigation has uncovered the full scope of Watergate:
            
            🎯 THE CONSPIRACY:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            1. OPERATION GEMSTONE - Illegal surveillance plan
            2. THE BREAK-IN - June 17, 1972 at DNC
            3. THE COVER-UP - Obstruction of justice
            4. HUSH MONEY - Payments to burglars
            5. FBI INTERFERENCE - Presidential obstruction
            6. PERJURY - Lies under oath
            7. ABUSE OF POWER - Using CIA, FBI, IRS
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            📰 CONSEQUENCES:
            • 69 people indicted
            • 48 found guilty
            • President Nixon resigns August 8, 1974
            
            "THE SYSTEM WORKED. THE PRESS DID ITS JOB."
            - Judge John Sirica
            
            Your investigation helped save American democracy by proving that no one, not even the President, is above the law.`,
            image: "nixon_resignation",
            imagePrompt: "Nixon leaving White House, helicopter on lawn, historical moment, somber atmosphere, end of presidency",
            badges: ["truthRevealed"],
            choices: [
                {
                    text: "Review the complete timeline",
                    nextScene: "watergate_timeline"
                },
                {
                    text: "Examine the aftermath",
                    nextScene: "watergate_legacy"
                },
                {
                    text: "Complete investigation",
                    nextScene: "victory"
                }
            ],
            educationalNote: "Watergate proved that investigative journalism and democratic institutions could hold even the most powerful accountable."
        },
        
        // Additional supporting scenes...
        
        slush_fund_discovery: {
            text: `SECRET CRP SLUSH FUND EXPOSED
            
            Your financial investigation hits the jackpot:
            
            💰 THE SECRET FUND:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            Total: $350,000 - $700,000 in cash
            Controlled by: Jeb Magruder, John Mitchell
            Purpose: "Intelligence gathering"
            Reality: Illegal operations
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            📋 FUND USES:
            • $199,000 - G. Gordon Liddy operations
            • $25,000 - Donald Segretti dirty tricks
            • Payments to Watergate burglars
            • Hush money after arrests
            
            Hugh Sloan, CRP treasurer, is willing to talk - but he's terrified.
            
            "They wanted me to perjure myself. I resigned instead."`,
            image: "financial_records",
            imagePrompt: "Stacks of cash, financial ledgers, secret account books, calculator, 1970s office safe",
            choices: [
                {
                    text: "Get Sloan's full testimony",
                    nextScene: "sloan_testimony",
                    progressIncrease: 25,
                    evidence: true
                },
                {
                    text: "Trace each payment",
                    nextScene: "payment_trail"
                },
                {
                    text: "Connect fund to White House",
                    nextScene: "haldeman_connection"
                }
            ]
        },
        
        deep_throat_guidance: {
            text: `DEEP THROAT'S CRYPTIC GUIDANCE
            
            The shadowy figure leans forward in the darkness:
            
            🗣️ "You're doing good work, but you're not there yet.
            The Watergate burglary is just the tip of the iceberg.
            
            Look at the big picture:
            • Why would anyone bug the DNC?
            • Who had the most to gain?
            • Who has the power to cover it up?
            
            And remember - these are not very bright guys, 
            and things got out of hand.
            
            Follow the money. Always follow the money.
            It will lead you to the truth."
            
            He pauses, then adds:
            
            "Be careful. People's lives are in danger, maybe even yours."`,
            image: "deep_throat_shadow",
            imagePrompt: "Silhouetted figure in parking garage, dramatic shadows, cigarette smoke, noir atmosphere, tension",
            choices: [
                {
                    text: "Ask about specific White House officials",
                    nextScene: "deep_throat_names",
                    progressIncrease: 20
                },
                {
                    text: "Request documentary evidence",
                    nextScene: "deep_throat_refuses"
                },
                {
                    text: "Focus on the money trail",
                    nextScene: "mexico_laundering",
                    evidence: true
                }
            ]
        },
        
        mexico_laundering: {
            text: `MONEY LAUNDERING THROUGH MEXICO
            
            Following Deep Throat's advice, you uncover the money trail:
            
            💸 THE LAUNDERING OPERATION:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            1. CRP collects illegal corporate donations
            2. Cash sent to Mexico via middleman
            3. Mexican lawyer converts to cashier's checks
            4. Checks deposited in Barker's Miami account
            5. Money withdrawn for Watergate operation
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            🔍 KEY EVIDENCE:
            • $89,000 check from Kenneth Dahlberg (CRP)
            • Four checks totaling $25,000 from Mexico
            • All deposited April 20, 1972
            • Withdrawn as cash for "security operations"
            
            This proves CRP was funding illegal activities with laundered campaign contributions!`,
            image: "mexico_bank_documents",
            imagePrompt: "International bank transfers, Mexican bank documents, money trail diagrams, financial investigation materials",
            badges: ["followMoney"],
            choices: [
                {
                    text: "Confront Kenneth Dahlberg",
                    nextScene: "dahlberg_confession",
                    progressIncrease: 30,
                    evidence: true
                },
                {
                    text: "Get Mexican bank records",
                    nextScene: "mexican_records"
                },
                {
                    text: "Connect to Mitchell and Stans",
                    nextScene: "mitchell_stans_involvement"
                }
            ]
        },
        
        mitchell_connection: {
            text: `JOHN MITCHELL - THE BIG FISH
            
            Your investigation focuses on the former Attorney General:
            
            👤 JOHN NEWTON MITCHELL:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • U.S. Attorney General (1969-1972)
            • Nixon's campaign manager
            • CRP Director during Watergate
            • Nixon's closest advisor
            • "The Big Enchilada"
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            🎯 MITCHELL'S INVOLVEMENT:
            • Approved Operation Gemstone
            • Authorized intelligence budget
            • Present at key planning meetings
            • Orchestrated cover-up after arrests
            
            Martha Mitchell, his wife, calls reporters:
            "My husband is trying to protect the President. 
            They're making him the fall guy!"
            
            The former chief law enforcement officer of the United States was directing criminal operations.`,
            image: "mitchell_office",
            imagePrompt: "Former Attorney General's office, law books, American flag, serious portrait, government power atmosphere",
            choices: [
                {
                    text: "Interview Martha Mitchell",
                    nextScene: "martha_mitchell_talks",
                    progressIncrease: 25
                },
                {
                    text: "Find witnesses to Mitchell meetings",
                    nextScene: "magruder_testimony",
                    evidence: true
                },
                {
                    text: "Document Mitchell's cover-up role",
                    nextScene: "mitchell_obstruction"
                }
            ]
        },
        
        watergate_timeline: {
            text: `THE WATERGATE TIMELINE
            ANATOMY OF A SCANDAL
            
            📅 KEY DATES:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            1971:
            • June - Pentagon Papers leak
            • July - Plumbers unit created
            
            1972:
            • January - Gemstone proposed
            • March - Gemstone approved
            • May 28 - First break-in at DNC
            • June 17 - Watergate arrests
            • June 23 - Nixon orders cover-up
            • August - Post reveals money trail
            
            1973:
            • March - McCord letter to judge
            • April - White House staff resign
            • May - Senate hearings begin
            • July 16 - Taping system revealed
            • October - Saturday Night Massacre
            
            1974:
            • July 24 - Supreme Court tape ruling
            • August 5 - Smoking Gun released
            • August 8 - Nixon announces resignation
            • August 9 - Nixon leaves office
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "watergate_timeline_chart",
            imagePrompt: "Detailed timeline chart with photos, newspaper headlines, key dates marked, conspiracy flow chart, investigative journalism",
            choices: [
                {
                    text: "Examine the cover-up details",
                    nextScene: "coverup_analysis"
                },
                {
                    text: "Review the investigation's impact",
                    nextScene: "watergate_legacy"
                },
                {
                    text: "Complete your final report",
                    nextScene: "victory"
                }
            ]
        },

        surveillance_tech: {
            text: `SOPHISTICATED SURVEILLANCE TECHNOLOGY

            Examining the equipment found on the burglars:

            🔧 EQUIPMENT INVENTORY:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • Miniature transmitters (bugs)
            • Telephone tap devices
            • Camera with 40 exposures taken
            • Walkie-talkies with earpieces
            • Locksmith tools (professional grade)
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            📡 ANALYSIS:
            This equipment isn't available commercially - it's intelligence-grade surveillance technology, the kind used by the CIA.

            The sophistication of the equipment proves this wasn't amateur hour. Someone with serious resources planned this operation.`,
            image: "surveillance_equipment_analysis",
            imagePrompt: "1970s spy surveillance equipment laid out on evidence table, bugs, wiretaps, cameras, professional intelligence gear",
            choices: [
                {
                    text: "Investigate CIA connection",
                    nextScene: "cia_angle",
                    progressIncrease: 15
                },
                {
                    text: "Focus on who provided the equipment",
                    nextScene: "hunt_white_house",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Analyze what they were targeting",
                    nextScene: "dnc_targets"
                }
            ],
            educationalNote: "The sophisticated equipment used in the break-in suggested intelligence agency involvement from the start."
        },

        cia_angle: {
            text: `THE CIA CONNECTION

            Multiple burglars have CIA backgrounds:

            🕵️ CIA CONNECTIONS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            JAMES McCORD: 20-year CIA veteran
            E. HOWARD HUNT: CIA officer, Bay of Pigs
            BERNARD BARKER: CIA asset in Cuba
            EUGENIO MARTINEZ: Active CIA informant
            FRANK STURGIS: CIA contractor
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            🎯 THE QUESTION:
            Was the CIA involved in Watergate? Or were former agents acting on their own?

            Nixon later tried to use the CIA to block the FBI investigation, claiming Watergate involved "national security."

            CIA Director Richard Helms refused to help cover it up.`,
            image: "cia_headquarters",
            imagePrompt: "CIA headquarters Langley, aerial view, 1970s, government intelligence agency, secretive atmosphere",
            choices: [
                {
                    text: "Investigate the White House Plumbers",
                    nextScene: "plumbers_unit",
                    progressIncrease: 25,
                    evidence: true
                },
                {
                    text: "Focus on campaign connections",
                    nextScene: "creep_investigation",
                    progressIncrease: 20
                },
                {
                    text: "Look at Hunt's role",
                    nextScene: "hunt_white_house"
                }
            ],
            educationalNote: "While many Watergate figures had CIA backgrounds, the agency itself declined to help Nixon cover up the scandal."
        },

        dnc_targets: {
            text: `WHAT WERE THEY AFTER?

            Analyzing what the burglars targeted at the DNC:

            🎯 DNC TARGETS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • Chairman Lawrence O'Brien's office
            • Phone lines (for wiretapping)
            • Files on Democratic strategy
            • Donor lists and financial records
            • Internal memos and correspondence
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            📋 PREVIOUS BREAK-IN (MAY 28):
            They had already successfully broken in once before! They:
            • Photographed documents
            • Planted listening devices
            • But one bug wasn't working properly

            This second break-in was to fix the malfunctioning bug on O'Brien's phone.

            What was Nixon so desperate to know about the Democrats?`,
            image: "dnc_headquarters",
            imagePrompt: "Democratic National Committee headquarters office, 1970s political office, desks and phones, campaign materials",
            choices: [
                {
                    text: "Investigate what they were afraid of",
                    nextScene: "operation_gemstone",
                    progressIncrease: 25,
                    evidence: true
                },
                {
                    text: "Follow the chain of command",
                    nextScene: "creep_investigation",
                    progressIncrease: 20
                },
                {
                    text: "Look at the money behind it",
                    nextScene: "follow_the_money"
                }
            ],
            educationalNote: "The June 17 break-in was actually the second Watergate burglary - they returned to fix a malfunctioning wiretap."
        },

        early_publication: {
            text: `PUBLISHING TOO SOON

            You rush the McCord-CRP connection story:

            📰 YOUR HEADLINE:
            "Watergate Burglar Worked for Nixon Campaign"

            ⚠️ WHITE HOUSE RESPONSE:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            Press Secretary Ron Ziegler dismisses it as "a third-rate burglary attempt" with no White House connection.

            CRP issues statement: "McCord was a contractor, not an employee. His actions were unauthorized."

            Without more evidence, the story fades.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            💭 LESSON LEARNED:
            You needed more sources, more documentation. The White House is adept at denial.

            Time to dig deeper.`,
            image: "newspaper_early_story",
            imagePrompt: "Newspaper with Watergate story, lukewarm public response, White House denial, journalism challenge",
            choices: [
                {
                    text: "Find more sources",
                    nextScene: "deep_throat_intro",
                    progressIncrease: 15
                },
                {
                    text: "Follow the money trail",
                    nextScene: "follow_the_money",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Investigate CRP more deeply",
                    nextScene: "creep_investigation"
                }
            ],
            educationalNote: "Early Watergate stories were dismissed by the White House. Building an airtight case required months of investigation."
        },

        stans_confrontation: {
            text: `CONFRONTING MAURICE STANS

            You approach CRP Finance Chairman Maurice Stans:

            💼 INTERVIEW WITH STANS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            YOU: "Mr. Stans, we've traced funds from your committee to the Watergate burglars."

            STANS: "I have no knowledge of any such payments. The finance committee operates separately from campaign operations."

            YOU: "But the checks went through your accounts..."

            STANS: "I delegated financial matters. If there were irregularities, I was unaware."

            YOU: "Kenneth Dahlberg's $25,000 check?"

            STANS: [Pause] "I... cannot comment on specific donations."
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            His evasions speak volumes.`,
            image: "stans_confrontation",
            imagePrompt: "Nervous finance chairman in office being questioned by reporter, defensive body language, 1970s business attire",
            choices: [
                {
                    text: "Press him on Dahlberg check",
                    nextScene: "dahlberg_confession",
                    progressIncrease: 25,
                    evidence: true
                },
                {
                    text: "Investigate Stans's records",
                    nextScene: "slush_fund_discovery",
                    progressIncrease: 20
                },
                {
                    text: "Look for other sources",
                    nextScene: "deep_throat_intro"
                }
            ],
            educationalNote: "Maurice Stans was eventually convicted of campaign finance violations related to Watergate."
        },

        hunt_connection: {
            text: `CONNECTING HUNT TO THE BREAK-IN

            Building the case against E. Howard Hunt:

            🔗 THE HUNT CONNECTION:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • Phone number in burglars' address books
            • Check from his wife to Barker
            • White House phone records
            • Library books on lockpicking
            • Recruited the Cuban burglars
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            📋 HUNT'S WHITE HOUSE ACTIVITIES:
            • Office in Executive Office Building
            • Direct phone line to Colson
            • "Consultant" with no clear duties
            • Security clearance: Top Secret

            The trail leads directly from the Watergate to 1600 Pennsylvania Avenue.`,
            image: "hunt_evidence_board",
            imagePrompt: "Investigation board connecting Hunt to Watergate burglars, photos, string connections, evidence mounting",
            badges: ["truthRevealed"],
            choices: [
                {
                    text: "Investigate Hunt's White House role",
                    nextScene: "plumbers_unit",
                    progressIncrease: 25,
                    evidence: true
                },
                {
                    text: "Look at Charles Colson",
                    nextScene: "colson_involvement",
                    progressIncrease: 20
                },
                {
                    text: "Trace Hunt's payments",
                    nextScene: "payment_trail"
                }
            ],
            educationalNote: "E. Howard Hunt was the crucial link between the Watergate burglars and the White House."
        },

        colson_involvement: {
            text: `CHARLES COLSON - NIXON'S HATCHET MAN

            Investigating the Special Counsel to the President:

            👤 CHARLES WENDELL COLSON:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            Title: Special Counsel to the President
            Role: Political operations/"dirty tricks"
            Reputation: "Would walk over his grandmother for Nixon"
            Direct supervisor of: E. Howard Hunt
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            🎯 COLSON'S ACTIVITIES:
            • Maintained "Enemies List"
            • Ordered Hunt to forge cables
            • Planned disruption of protests
            • Discussed firebombing Brookings
            • Direct access to Nixon

            Nixon on tape: "Colson would do anything. Anything."

            How far up does this go?`,
            image: "colson_office",
            imagePrompt: "White House office, political operative at desk, enemies list visible, aggressive political atmosphere",
            choices: [
                {
                    text: "Find what Nixon knew",
                    nextScene: "white_house_tapes_discovery",
                    progressIncrease: 35,
                    evidence: true
                },
                {
                    text: "Document dirty tricks",
                    nextScene: "dirty_tricks",
                    progressIncrease: 20
                },
                {
                    text: "Connect to Watergate planning",
                    nextScene: "operation_gemstone"
                }
            ],
            educationalNote: "Charles Colson was Nixon's chief political operative and supervised Howard Hunt at the White House."
        },

        deep_throat_hints: {
            text: `DEEP THROAT OFFERS HINTS

            In the darkness of the parking garage:

            🗣️ DEEP THROAT:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            "I can't give you names directly. But I can tell you where to look.

            The key players are:
            • The former Attorney General
            • The President's Chief of Staff
            • The domestic affairs advisor

            They're all involved. All of them.

            And there's a lawyer - the President's personal counsel. He knows everything. He's starting to crack."
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            Mitchell... Haldeman... Ehrlichman... and Dean?`,
            image: "deep_throat_hints",
            imagePrompt: "Mysterious figure in shadows giving cryptic information, parking garage, dramatic noir lighting",
            badges: ["deepThroat"],
            choices: [
                {
                    text: "Investigate John Mitchell",
                    nextScene: "mitchell_connection",
                    progressIncrease: 25
                },
                {
                    text: "Look at Haldeman",
                    nextScene: "haldeman_connection",
                    progressIncrease: 25,
                    evidence: true
                },
                {
                    text: "Find John Dean",
                    nextScene: "ehrlichman_connection",
                    progressIncrease: 20
                }
            ],
            educationalNote: "Deep Throat guided reporters toward key figures without directly naming them."
        },

        deep_throat_money: {
            text: `DEEP THROAT ON THE MONEY

            You ask about the financial trail:

            💰 DEEP THROAT'S GUIDANCE:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            "The money is the key. You've found some of it, but there's more.

            • There's a secret fund - hundreds of thousands
            • Five people control it
            • The payments continue - even now
            • They're paying the burglars to stay quiet

            Hush money. Obstruction of justice. That's what will bring them down.

            Who controls the fund? Follow it to the top."
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            You have a new lead: ongoing payments to keep the burglars silent.`,
            image: "deep_throat_money_advice",
            imagePrompt: "Shadowy figure pointing to invisible trail, dollar signs in shadows, financial conspiracy visualization",
            choices: [
                {
                    text: "Investigate the hush money",
                    nextScene: "slush_fund_discovery",
                    progressIncrease: 30,
                    evidence: true
                },
                {
                    text: "Find who controls the fund",
                    nextScene: "haldeman_connection",
                    progressIncrease: 25
                },
                {
                    text: "Document the obstruction",
                    nextScene: "coverup_analysis",
                    progressIncrease: 20
                }
            ],
            educationalNote: "Deep Throat's tip about 'follow the money' became the most famous advice in investigative journalism history."
        },

        gemstone_revelation: {
            text: `OPERATION GEMSTONE EXPOSED

            Your story on Operation Gemstone hits the front page:

            📰 WASHINGTON POST HEADLINE:
            "Nixon Campaign Approved Massive Spy Operation"

            🎯 KEY REVELATIONS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • $250,000 budget for illegal activities
            • Former AG Mitchell approved plan
            • Multiple break-ins planned
            • Wiretapping, sabotage, disruption
            • White House officials involved
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            📺 PUBLIC REACTION:
            "This goes beyond dirty tricks - this is criminal conspiracy at the highest levels!"

            The White House can no longer dismiss this as a "third-rate burglary."`,
            image: "gemstone_headline",
            imagePrompt: "Washington Post front page with Gemstone revelation, public shock, major breaking story, journalism triumph",
            badges: ["truthRevealed"],
            choices: [
                {
                    text: "Push for congressional hearings",
                    nextScene: "white_house_tapes_discovery",
                    progressIncrease: 40,
                    evidence: true
                },
                {
                    text: "Document the full cover-up",
                    nextScene: "coverup_analysis",
                    progressIncrease: 30
                },
                {
                    text: "Get witness testimony",
                    nextScene: "magruder_testimony",
                    progressIncrease: 35
                }
            ],
            educationalNote: "The exposure of Operation Gemstone proved Watergate wasn't an isolated incident but part of a larger conspiracy."
        },

        magruder_testimony: {
            text: `JEB MAGRUDER BREAKS

            CRP Deputy Director Jeb Magruder begins cooperating:

            🗣️ MAGRUDER'S TESTIMONY:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            "I was present at meetings in Mitchell's office when Liddy presented his intelligence plans.

            Mitchell approved it. We all knew it was illegal, but we convinced ourselves it was necessary to re-elect the President.

            After the arrests, Mitchell told me to destroy documents. I did. We all committed crimes to cover up crimes."
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            📋 MAGRUDER CONFIRMS:
            • Mitchell approved Operation Gemstone
            • Payments to burglars continued
            • Evidence was destroyed
            • Perjury was planned

            The conspiracy of silence is breaking.`,
            image: "magruder_testimony",
            imagePrompt: "Young political operative testifying, looking guilty, Senate hearing room, breaking under pressure",
            badges: ["truthRevealed"],
            choices: [
                {
                    text: "Get more witnesses",
                    nextScene: "white_house_tapes_discovery",
                    progressIncrease: 40,
                    evidence: true
                },
                {
                    text: "Focus on Mitchell",
                    nextScene: "mitchell_obstruction",
                    progressIncrease: 30
                },
                {
                    text: "Document the cover-up chain",
                    nextScene: "coverup_analysis",
                    progressIncrease: 25
                }
            ],
            educationalNote: "Jeb Magruder's cooperation was a turning point, as insiders began telling the truth."
        },

        dirty_tricks: {
            text: `THE DIRTY TRICKS CAMPAIGN

            Beyond Watergate, a pattern of illegal activities emerges:

            🎭 DIRTY TRICKS OPERATIONS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            DONALD SEGRETTI - "RATF**KING":
            • Forged letters on Democratic letterhead
            • Planted spies in Democratic campaigns
            • Disrupted opponents' events
            • Spread false rumors

            WHITE HOUSE PLUMBERS:
            • Break-in at Ellsberg's psychiatrist
            • Forged diplomatic cables
            • Plan to firebomb Brookings

            ENEMIES LIST:
            • IRS audits of Nixon critics
            • FBI surveillance of journalists
            • Harassment of administration opponents
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            Watergate wasn't an aberration - it was part of a systematic abuse of power.`,
            image: "dirty_tricks_evidence",
            imagePrompt: "Forged documents, fake letters, evidence of political sabotage, enemies list, systemic corruption",
            choices: [
                {
                    text: "Connect to White House",
                    nextScene: "ehrlichman_connection",
                    progressIncrease: 30,
                    evidence: true
                },
                {
                    text: "Investigate the Plumbers",
                    nextScene: "plumbers_unit",
                    progressIncrease: 25
                },
                {
                    text: "Focus on the cover-up",
                    nextScene: "coverup_analysis",
                    progressIncrease: 20
                }
            ],
            educationalNote: "The Nixon administration engaged in a wide pattern of illegal activities beyond the Watergate break-in."
        },

        plumbers_watergate_link: {
            text: `PLUMBERS TO WATERGATE CONNECTION

            You establish the direct link:

            🔗 THE CHAIN:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            WHITE HOUSE PLUMBERS (1971)
            ↓
            Hunt & Liddy - Leaders
            ↓
            Move to CRP (1972)
            ↓
            Plan Operation Gemstone
            ↓
            Execute Watergate Break-in
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            📋 KEY EVIDENCE:
            • Same personnel (Hunt, Liddy)
            • Same Cuban operatives
            • Same methods
            • White House funding → CRP funding
            • Presidential authority → Campaign operations

            The Watergate burglars were the President's own secret intelligence team.`,
            image: "plumbers_watergate_connection",
            imagePrompt: "Evidence board showing connection between White House Plumbers and Watergate, organizational chart, clear link",
            badges: ["truthRevealed"],
            choices: [
                {
                    text: "Prove presidential knowledge",
                    nextScene: "white_house_tapes_discovery",
                    progressIncrease: 45,
                    evidence: true
                },
                {
                    text: "Document the chain of command",
                    nextScene: "ehrlichman_connection",
                    progressIncrease: 35
                },
                {
                    text: "Focus on the cover-up",
                    nextScene: "coverup_analysis",
                    progressIncrease: 30
                }
            ],
            educationalNote: "The same team Nixon used to plug leaks became the Watergate burglars."
        },

        ellsberg_psychiatrist: {
            text: `THE ELLSBERG BREAK-IN

            Before Watergate, the Plumbers committed another burglary:

            🔓 SEPTEMBER 3, 1971
            DR. LEWIS FIELDING'S OFFICE
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            Target: Daniel Ellsberg's psychiatrist
            Purpose: Find dirt on Pentagon Papers leaker
            Team: Hunt, Liddy, Barker, Martinez
            Result: Files found, nothing useful
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            📋 AUTHORIZATION:
            • Ehrlichman memo: "If done under your assurance it cannot be traced"
            • Presidential knowledge: Evidence points to yes
            • Government resources used for break-in

            This proves a pattern - the Watergate team had broken in before, with White House approval.`,
            image: "fielding_office_breakin",
            imagePrompt: "Psychiatrist office after break-in, ransacked files, night scene, previous burglary, pattern of illegal activity",
            choices: [
                {
                    text: "Investigate Ehrlichman's role",
                    nextScene: "ehrlichman_connection",
                    progressIncrease: 30,
                    evidence: true
                },
                {
                    text: "Connect to Watergate",
                    nextScene: "plumbers_watergate_link",
                    progressIncrease: 35
                },
                {
                    text: "Find what Nixon knew",
                    nextScene: "white_house_tapes_discovery",
                    progressIncrease: 40
                }
            ],
            educationalNote: "The Ellsberg psychiatrist break-in showed the Plumbers' methods before Watergate and proved a pattern of criminal behavior."
        },

        ehrlichman_connection: {
            text: `JOHN EHRLICHMAN - DOMESTIC AFFAIRS

            Investigating Nixon's domestic policy chief:

            👤 JOHN EHRLICHMAN:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            Title: Assistant for Domestic Affairs
            Power: Second only to Haldeman
            Role: Supervised the Plumbers
            Authorized: Ellsberg psychiatrist break-in
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            📋 EHRLICHMAN'S MEMO:
            "I approve the covert operation provided it cannot be traced to the White House."

            🎯 HIS INVOLVEMENT:
            • Created the Plumbers unit
            • Approved illegal break-ins
            • Participated in cover-up meetings
            • Destroyed evidence

            The domestic policy advisor was running a criminal enterprise.`,
            image: "ehrlichman_investigation",
            imagePrompt: "White House domestic policy office, Nixon advisor, evidence of illegal authorization, power and corruption",
            choices: [
                {
                    text: "Look at Haldeman too",
                    nextScene: "haldeman_connection",
                    progressIncrease: 30,
                    evidence: true
                },
                {
                    text: "Find the tapes",
                    nextScene: "white_house_tapes_discovery",
                    progressIncrease: 45
                },
                {
                    text: "Document the conspiracy",
                    nextScene: "coverup_analysis",
                    progressIncrease: 25
                }
            ],
            educationalNote: "John Ehrlichman was convicted of conspiracy and perjury for his role in Watergate."
        },

        tape_battle_begins: {
            text: `THE BATTLE FOR THE TAPES

            Nixon refuses to release the White House recordings:

            🏛️ EXECUTIVE PRIVILEGE CLAIM:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            NIXON: "The tapes are protected by executive privilege. No President can function if his private conversations are public."

            SPECIAL PROSECUTOR COX: "No man is above the law. The tapes are evidence of potential crimes."
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            ⚖️ LEGAL BATTLE:
            • Subpoenas issued for tapes
            • Nixon refuses to comply
            • Courts order release
            • Nixon still refuses

            📅 OCTOBER 20, 1973 - SATURDAY NIGHT MASSACRE:
            Nixon orders firing of Special Prosecutor Cox. Attorney General Richardson and Deputy Ruckelshaus resign rather than comply.

            The constitutional crisis deepens.`,
            image: "tape_battle_legal",
            imagePrompt: "Courtroom battle over tapes, Nixon vs prosecutors, constitutional crisis, dramatic legal confrontation",
            choices: [
                {
                    text: "Follow to Supreme Court",
                    nextScene: "executive_privilege_fight",
                    progressIncrease: 40,
                    evidence: true
                },
                {
                    text: "Cover the Saturday Night Massacre",
                    nextScene: "washington_post_triumph",
                    progressIncrease: 35
                },
                {
                    text: "What's on the tapes?",
                    nextScene: "tape_contents_revealed",
                    progressIncrease: 45
                }
            ],
            educationalNote: "Nixon's fight to suppress the tapes led to the Saturday Night Massacre and ultimately the Supreme Court."
        },

        tape_contents_revealed: {
            text: `WHAT THE TAPES REVEALED

            As portions of tapes are released, the truth emerges:

            📼 DAMAGING CONVERSATIONS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            MARCH 21, 1973 - "Cancer on the Presidency"
            Dean warns Nixon about the cover-up
            Nixon discusses paying hush money
            "We could get a million dollars... I know where it could be gotten"

            SEPTEMBER 15, 1972
            Nixon praises cover-up efforts
            "The way you've handled it... has been very skillful"

            MULTIPLE TAPES
            Evidence of obstruction, perjury planning, abuse of power
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            The President's own words prove his guilt.`,
            image: "tape_transcripts",
            imagePrompt: "Tape transcripts with highlighted incriminating passages, reel-to-reel machines, damning evidence",
            badges: ["tapesRevealed"],
            choices: [
                {
                    text: "Find the Smoking Gun",
                    nextScene: "smoking_gun_tape",
                    progressIncrease: 50,
                    evidence: true
                },
                {
                    text: "Document all evidence",
                    nextScene: "final_revelation",
                    progressIncrease: 45
                },
                {
                    text: "Push for more releases",
                    nextScene: "executive_privilege_fight",
                    progressIncrease: 40
                }
            ],
            educationalNote: "The tapes revealed Nixon discussing hush money, cover-up strategies, and obstruction of justice."
        },

        executive_privilege_fight: {
            text: `SUPREME COURT SHOWDOWN

            The battle reaches the highest court:

            🏛️ UNITED STATES v. NIXON
            JULY 24, 1974
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            ISSUE: Can the President withhold evidence in a criminal case?

            NIXON'S ARGUMENT:
            "Executive privilege protects presidential communications absolutely."

            PROSECUTOR'S ARGUMENT:
            "No person, not even the President, is above the law."
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            ⚖️ DECISION: 8-0 AGAINST NIXON
            Chief Justice Burger: "Neither separation of powers nor generalized executive privilege can sustain an absolute, unqualified privilege."

            Nixon must release the tapes. The end is near.`,
            image: "supreme_court_nixon",
            imagePrompt: "Supreme Court building, historic ruling, constitutional crisis resolved, law prevails over power",
            badges: ["truthRevealed"],
            choices: [
                {
                    text: "See the Smoking Gun tape",
                    nextScene: "smoking_gun_tape",
                    progressIncrease: 50,
                    evidence: true
                },
                {
                    text: "Document Nixon's response",
                    nextScene: "final_revelation",
                    progressIncrease: 45
                },
                {
                    text: "Write the victory story",
                    nextScene: "washington_post_triumph",
                    progressIncrease: 40
                }
            ],
            educationalNote: "The unanimous Supreme Court ruling in United States v. Nixon established that no one is above the law."
        },

        more_tape_evidence: {
            text: `ADDITIONAL TAPE EVIDENCE

            More tapes reveal the depth of Nixon's involvement:

            📼 ADDITIONAL INCRIMINATING TAPES:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            APRIL 14, 1973:
            Nixon coaches aides on testimony
            "Just be damn sure you say 'I don't remember'"

            APRIL 16, 1973:
            Discusses having Dean take the blame
            "Let him twist slowly in the wind"

            MARCH 22, 1973:
            Plans to pay burglars
            "That's not a problem... do you need the cash?"
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            Every tape adds more evidence of obstruction, conspiracy, and abuse of power.`,
            image: "more_tape_evidence",
            imagePrompt: "Stack of tape recordings, transcripts piling up, overwhelming evidence of crimes, Nixon's own words",
            choices: [
                {
                    text: "The Smoking Gun tape",
                    nextScene: "smoking_gun_tape",
                    progressIncrease: 50,
                    evidence: true
                },
                {
                    text: "Complete the documentation",
                    nextScene: "final_revelation",
                    progressIncrease: 45
                },
                {
                    text: "Write the final story",
                    nextScene: "washington_post_triumph",
                    progressIncrease: 40
                }
            ],
            educationalNote: "The tapes contained numerous examples of Nixon planning obstruction and coaching witnesses to lie."
        },

        washington_post_triumph: {
            text: `THE WASHINGTON POST'S TRIUMPH

            Your newspaper has been vindicated:

            📰 THE POST'S JOURNEY:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            June 1972: Dismissed as "third-rate burglary"
            Fall 1972: Attacked by White House
            1973: Vindicated by Senate hearings
            1974: Pulitzer Prize for Public Service
            August 1974: Nixon resigns
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            🏆 BEN BRADLEE:
            "This is what journalism is supposed to do - tell the truth, hold power accountable, and let democracy work."

            📺 KATHARINE GRAHAM (Publisher):
            "There were moments I wondered if we were right. Now we know - the press did its job."

            The system worked because journalists refused to stop asking questions.`,
            image: "post_pulitzer_celebration",
            imagePrompt: "Washington Post newsroom celebrating, Pulitzer Prize, vindication after long investigation, triumph of journalism",
            badges: ["truthRevealed"],
            choices: [
                {
                    text: "Document the full legacy",
                    nextScene: "watergate_legacy",
                    progressIncrease: 35
                },
                {
                    text: "Complete the investigation",
                    nextScene: "victory",
                    progressIncrease: 50,
                    evidence: true
                },
                {
                    text: "Review the timeline",
                    nextScene: "watergate_timeline"
                }
            ],
            educationalNote: "The Washington Post won the 1973 Pulitzer Prize for Public Service for its Watergate coverage."
        },

        watergate_legacy: {
            text: `THE WATERGATE LEGACY

            What Watergate changed forever:

            🏛️ LASTING IMPACTS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            LEGAL REFORMS:
            • Ethics in Government Act
            • Independent Counsel law
            • Campaign finance reform
            • FOIA strengthened

            CULTURAL IMPACT:
            • "-gate" suffix for scandals
            • "Follow the money" becomes famous
            • Investigative journalism revitalized
            • Public skepticism of government

            CONSTITUTIONAL LESSONS:
            • No one is above the law
            • Separation of powers works
            • Free press is essential
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            Watergate proved democracy can survive even when its leaders betray it.`,
            image: "watergate_legacy_memorial",
            imagePrompt: "Constitutional documents, journalism awards, reform legislation, lasting democratic institutions, legacy visualization",
            choices: [
                {
                    text: "Complete the investigation",
                    nextScene: "victory",
                    progressIncrease: 50,
                    evidence: true
                },
                {
                    text: "Review the timeline",
                    nextScene: "watergate_timeline"
                },
                {
                    text: "Return to main menu",
                    nextScene: "mainMenu"
                }
            ],
            educationalNote: "Watergate led to major reforms in government ethics, campaign finance, and transparency."
        },

        sloan_testimony: {
            text: `HUGH SLOAN TELLS THE TRUTH

            CRP Treasurer Hugh Sloan refused to lie:

            🗣️ SLOAN'S TESTIMONY:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            "They wanted me to commit perjury. They said it was for the good of the President.

            I couldn't do it. I resigned instead.

            I personally gave Gordon Liddy $199,000 in cash from the secret fund. Magruder and Stans knew. Mitchell approved it.

            When I asked what it was for, they said 'Don't ask.'"
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            📋 SLOAN CONFIRMS:
            • Secret fund existed
            • Hundreds of thousands in cash
            • Liddy was primary recipient
            • Senior officials authorized it

            An honest man in a den of thieves.`,
            image: "sloan_testimony_hearing",
            imagePrompt: "Young treasurer testifying, doing the right thing, Senate hearing, courage against corruption",
            badges: ["followMoney"],
            choices: [
                {
                    text: "Trace the payments",
                    nextScene: "payment_trail",
                    progressIncrease: 30,
                    evidence: true
                },
                {
                    text: "Get more on Liddy",
                    nextScene: "operation_gemstone",
                    progressIncrease: 25
                },
                {
                    text: "Focus on Mitchell and Stans",
                    nextScene: "mitchell_stans_involvement",
                    progressIncrease: 25
                }
            ],
            educationalNote: "Hugh Sloan's refusal to commit perjury was crucial in confirming the financial aspects of the conspiracy."
        },

        payment_trail: {
            text: `TRACING THE PAYMENTS

            The money trail tells the whole story:

            💰 PAYMENT FLOW:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            CAMPAIGN DONATIONS
            ↓
            CRP SECRET FUND ($350,000+)
            ↓
            G. GORDON LIDDY ($199,000)
            ↓
            GEMSTONE OPERATIONS
            ↓
            WATERGATE BURGLARS
            ↓
            POST-ARREST HUSH MONEY
            ↓
            WHITE HOUSE APPROVAL
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            📋 ONGOING PAYMENTS:
            Even after arrests, money kept flowing to keep the burglars quiet. Hundreds of thousands more.

            This proves ongoing criminal conspiracy - not just a break-in, but systematic obstruction.`,
            image: "payment_trail_diagram",
            imagePrompt: "Money flow diagram, financial conspiracy chart, payments traced, corruption visualized",
            badges: ["followMoney"],
            choices: [
                {
                    text: "Prove White House involvement",
                    nextScene: "haldeman_connection",
                    progressIncrease: 35,
                    evidence: true
                },
                {
                    text: "Document the cover-up",
                    nextScene: "coverup_analysis",
                    progressIncrease: 30
                },
                {
                    text: "Get the tapes",
                    nextScene: "white_house_tapes_discovery",
                    progressIncrease: 45
                }
            ],
            educationalNote: "Following the money proved the connection between campaign funds and illegal operations."
        },

        haldeman_connection: {
            text: `H.R. HALDEMAN - THE GATEKEEPER

            Nixon's Chief of Staff controlled everything:

            👤 H.R. "BOB" HALDEMAN:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            Title: White House Chief of Staff
            Power: Complete access control to Nixon
            Role: Managed the cover-up
            Nickname: "The Berlin Wall"
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            🎯 HALDEMAN'S INVOLVEMENT:
            • Approved hush money payments
            • Coordinated cover-up with Dean
            • Present at key Oval Office meetings
            • Controlled the secret fund

            📼 ON THE TAPES:
            Nixon and Haldeman discuss using the CIA to block the FBI investigation just six days after the break-in.

            He was Nixon's right hand - in everything.`,
            image: "haldeman_investigation",
            imagePrompt: "Chief of Staff office, Nixon's right-hand man, power behind the throne, cover-up coordinator",
            badges: ["truthRevealed"],
            choices: [
                {
                    text: "Find the smoking gun",
                    nextScene: "smoking_gun_tape",
                    progressIncrease: 50,
                    evidence: true
                },
                {
                    text: "Document the cover-up",
                    nextScene: "coverup_analysis",
                    progressIncrease: 35
                },
                {
                    text: "Connect to Nixon",
                    nextScene: "white_house_tapes_discovery",
                    progressIncrease: 45
                }
            ],
            educationalNote: "H.R. Haldeman was convicted of conspiracy, obstruction, and perjury for his role in Watergate."
        },

        deep_throat_names: {
            text: `DEEP THROAT HINTS AT NAMES

            Pressing for specifics in the parking garage:

            🗣️ DEEP THROAT:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            "I can't give you names. But I'll tell you this:

            The men closest to Nixon - his palace guard - they're all involved. H and E especially.

            And the former law enforcement chief turned campaign director? He approved things no Attorney General should ever approve.

            The counsel is the key. He's been in every meeting. He knows everything. And he's scared."
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            Haldeman... Ehrlichman... Mitchell... Dean.

            The initials point to Nixon's inner circle.`,
            image: "deep_throat_names_hint",
            imagePrompt: "Mysterious figure speaking in shadows, names floating in darkness, cryptic guidance, investigative noir",
            choices: [
                {
                    text: "Investigate Haldeman and Ehrlichman",
                    nextScene: "haldeman_connection",
                    progressIncrease: 30,
                    evidence: true
                },
                {
                    text: "Focus on Mitchell",
                    nextScene: "mitchell_connection",
                    progressIncrease: 25
                },
                {
                    text: "Find John Dean",
                    nextScene: "coverup_analysis",
                    progressIncrease: 20
                }
            ],
            educationalNote: "Deep Throat guided reporters with hints rather than direct names, protecting his identity while advancing the investigation."
        },

        deep_throat_refuses: {
            text: `DEEP THROAT WON'T PROVIDE DOCUMENTS

            You press for documentary evidence:

            🗣️ DEEP THROAT:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            "I won't give you documents. That's not how this works.

            You have to find the evidence yourself. All I can do is confirm when you're on the right track - or warn you when you're wrong.

            Why? Because if I give you documents, they'll know who I am. And that would be the end of me - and the investigation.

            My role is to help you see what's really happening. The rest is up to you."
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            He fades back into the shadows. You understand now - you have to earn this story.`,
            image: "deep_throat_refuses_documents",
            imagePrompt: "Figure retreating into shadows, journalist alone with notebook, guidance given limits set, investigative challenge",
            choices: [
                {
                    text: "Follow the money trail",
                    nextScene: "mexico_laundering",
                    progressIncrease: 25,
                    evidence: true
                },
                {
                    text: "Find official sources",
                    nextScene: "sloan_testimony",
                    progressIncrease: 20
                },
                {
                    text: "Dig into CRP records",
                    nextScene: "creep_investigation",
                    progressIncrease: 15
                }
            ],
            educationalNote: "Deep Throat guided rather than leaked, forcing reporters to independently verify their findings."
        },

        dahlberg_confession: {
            text: `KENNETH DAHLBERG CONFRONTED

            You track down the Minnesota businessman:

            📞 PHONE INTERVIEW:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            YOU: "Mr. Dahlberg, your $25,000 check ended up in a Watergate burglar's bank account."

            DAHLBERG: "What? That's impossible. I gave that check to Maurice Stans for the President's campaign!"

            YOU: "It was deposited in Bernard Barker's Miami account."

            DAHLBERG: [Long pause] "I... I don't know how that happened. I trusted those men. They said the money was for legitimate campaign expenses."
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            He's confirmed the connection: Campaign money went directly to the burglars through CRP.`,
            image: "dahlberg_confrontation",
            imagePrompt: "Shocked businessman on phone, realizing his money funded crimes, check as evidence, betrayal and confusion",
            badges: ["followMoney"],
            choices: [
                {
                    text: "Confront Maurice Stans",
                    nextScene: "stans_confrontation",
                    progressIncrease: 25
                },
                {
                    text: "Publish the connection",
                    nextScene: "gemstone_revelation",
                    progressIncrease: 40,
                    evidence: true
                },
                {
                    text: "Find more financial evidence",
                    nextScene: "slush_fund_discovery",
                    progressIncrease: 30
                }
            ],
            educationalNote: "The Dahlberg check provided concrete evidence linking campaign funds to the Watergate operation."
        },

        mexican_records: {
            text: `MEXICAN BANK RECORDS

            Working with FBI contacts, you obtain the Mexican documentation:

            📋 BANCO INTERNACIONAL RECORDS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            APRIL 1972:
            • Four cashier's checks: $89,000 total
            • Issued to: Manuel Ogarrio (Mexican lawyer)
            • Deposited by: Bernard Barker
            • Account: Republic National Bank, Miami
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            🔍 THE SCHEME:
            1. CRP needed to hide illegal donations
            2. Money sent to Mexico
            3. Converted to Mexican checks
            4. Deposited in Barker's account
            5. Withdrawn as cash for "operations"

            This was professional money laundering - campaign funds converted to untraceable cash for illegal activities.`,
            image: "mexican_bank_records",
            imagePrompt: "Foreign bank documents, international money trail, laundering scheme documented, financial crime evidence",
            badges: ["followMoney"],
            choices: [
                {
                    text: "Connect to CRP leadership",
                    nextScene: "mitchell_stans_involvement",
                    progressIncrease: 35,
                    evidence: true
                },
                {
                    text: "Find U.S. records",
                    nextScene: "slush_fund_discovery",
                    progressIncrease: 30
                },
                {
                    text: "Publish the money trail",
                    nextScene: "gemstone_revelation",
                    progressIncrease: 40
                }
            ],
            educationalNote: "The Mexican money-laundering scheme was designed to hide the source of funds used for illegal campaign activities."
        },

        mitchell_stans_involvement: {
            text: `MITCHELL AND STANS - THE MONEY MEN

            Both the campaign director and finance chairman are implicated:

            👤 JOHN MITCHELL - Campaign Director
            👤 MAURICE STANS - Finance Chairman
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            JOINT INVOLVEMENT:
            • Authorized secret fund
            • Approved payments to Liddy
            • Knew about Gemstone operations
            • Coordinated cover-up
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            📋 EVIDENCE:
            • Meeting on March 30, 1972: Approved $250,000 for Liddy
            • Post-break-in: Ordered destruction of records
            • Testimony: Multiple witnesses confirm their knowledge

            The former Attorney General and the campaign's money man - both guilty.`,
            image: "mitchell_stans_investigation",
            imagePrompt: "Two powerful men implicated, campaign headquarters, financial and operational corruption, dual investigation",
            badges: ["truthRevealed"],
            choices: [
                {
                    text: "Focus on Mitchell's cover-up role",
                    nextScene: "mitchell_obstruction",
                    progressIncrease: 30
                },
                {
                    text: "Connect to the White House",
                    nextScene: "haldeman_connection",
                    progressIncrease: 35,
                    evidence: true
                },
                {
                    text: "Document the full conspiracy",
                    nextScene: "final_revelation",
                    progressIncrease: 45
                }
            ],
            educationalNote: "Both Mitchell and Stans were later convicted of crimes related to campaign finance violations."
        },

        martha_mitchell_talks: {
            text: `MARTHA MITCHELL - THE WHISTLING WIFE

            John Mitchell's wife has been talking to reporters:

            📞 MARTHA'S CALLS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            "They're making my husband the fall guy! Nixon is using John to protect himself.

            There was a dirty money man. They kidnapped me to keep me quiet! Beat me up in California!

            My husband knows everything. He was at those meetings. But it goes all the way to the top. The President knows!"
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            🎭 THE TRAGEDY:
            Martha was dismissed as mentally unstable. She wasn't - she was telling the truth.

            Years later, she was proven right about everything.

            "Martha was right" became a saying about Watergate.`,
            image: "martha_mitchell_calls",
            imagePrompt: "Troubled woman on phone, trying to be heard, society wife as whistleblower, dismissed truth-teller",
            choices: [
                {
                    text: "Investigate her claims about John",
                    nextScene: "mitchell_obstruction",
                    progressIncrease: 25,
                    evidence: true
                },
                {
                    text: "Look at White House involvement",
                    nextScene: "haldeman_connection",
                    progressIncrease: 30
                },
                {
                    text: "Document the conspiracy",
                    nextScene: "coverup_analysis",
                    progressIncrease: 20
                }
            ],
            educationalNote: "Martha Mitchell tried to expose Watergate but was dismissed. History has proven her truthful."
        },

        mitchell_obstruction: {
            text: `MITCHELL'S OBSTRUCTION OF JUSTICE

            Documenting the former AG's role in the cover-up:

            ⚖️ MITCHELL'S CRIMES:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            BEFORE BREAK-IN:
            • Approved Operation Gemstone
            • Authorized $250,000 for Liddy
            • Knew about planned break-in

            AFTER BREAK-IN:
            • Ordered destruction of evidence
            • Coordinated false testimony
            • Approved hush money payments
            • Lied to investigators
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            📋 THE IRONY:
            The man who was America's chief law enforcement officer became America's most prominent criminal.

            Mitchell would eventually serve 19 months in federal prison.`,
            image: "mitchell_obstruction_evidence",
            imagePrompt: "Former Attorney General exposed, legal documents as evidence of his crimes, law turned against lawmaker",
            badges: ["truthRevealed"],
            choices: [
                {
                    text: "Connect to Nixon",
                    nextScene: "white_house_tapes_discovery",
                    progressIncrease: 45,
                    evidence: true
                },
                {
                    text: "Document full cover-up",
                    nextScene: "coverup_analysis",
                    progressIncrease: 35
                },
                {
                    text: "Find more conspirators",
                    nextScene: "haldeman_connection",
                    progressIncrease: 30
                }
            ],
            educationalNote: "John Mitchell was the highest-ranking government official to serve prison time for Watergate."
        },

        coverup_analysis: {
            text: `ANATOMY OF THE COVER-UP

            Documenting how they tried to hide the crime:

            🔒 COVER-UP TIMELINE:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            JUNE 17: Break-in and arrests
            JUNE 18: Hunt's White House safe emptied
            JUNE 19: Mitchell destroys Gemstone files
            JUNE 23: Nixon orders CIA to block FBI
            JULY: Hush money begins flowing
            AUGUST: Nixon declares no one in White House involved
            FALL: Perjury before grand jury
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            📋 METHODS USED:
            • Destroy documents
            • Pay witnesses to stay quiet
            • Coordinate false testimony
            • Use FBI/CIA to obstruct
            • Lie to public and Congress

            The cover-up was worse than the crime.`,
            image: "coverup_diagram",
            imagePrompt: "Complex conspiracy diagram, cover-up methods visualized, obstruction of justice documented",
            choices: [
                {
                    text: "Find the smoking gun",
                    nextScene: "smoking_gun_tape",
                    progressIncrease: 50,
                    evidence: true
                },
                {
                    text: "Document final evidence",
                    nextScene: "final_revelation",
                    progressIncrease: 45
                },
                {
                    text: "Complete the investigation",
                    nextScene: "victory",
                    progressIncrease: 50
                }
            ],
            educationalNote: "The Watergate cover-up involved obstruction of justice at every level of government."
        },

        mainMenu: {
            text: `Thank you for investigating the Watergate Files.

            This case demonstrated how investigative journalism and democratic institutions can hold even the most powerful accountable.

            The lessons of Watergate - about the rule of law, press freedom, and government accountability - remain essential to American democracy.`,
            image: "watergate_conclusion",
            imagePrompt: "Watergate complex at sunset, journalism and democracy prevailing, historic scandal site",
            choices: []
        },

        victory: {
            text: `INVESTIGATION COMPLETE
            DEMOCRACY PRESERVED
            
            🏆 YOUR ACHIEVEMENTS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            ✓ Exposed the Watergate conspiracy
            ✓ Followed the money trail
            ✓ Revealed White House involvement
            ✓ Uncovered the taping system
            ✓ Proved presidential obstruction
            ✓ Helped bring justice
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            📰 THE WASHINGTON POST
            August 9, 1974
            
            NIXON RESIGNS
            Ford to Become 38th President
            
            Your investigative work, along with Woodward and Bernstein, proved that in America, the truth still matters and justice can prevail.
            
            "The press won this one." - Ben Bradlee
            
            🎖️ FINAL SCORE: 95/100
            
            Thank you for investigating THE WATERGATE FILES.`,
            image: "washington_post_victory",
            imagePrompt: "Washington Post newsroom celebration, journalists cheering, Nixon resignation headline, triumph of journalism",
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
        },
        
        // Many more scenes would be added for different paths...
        // Including: Saturday Night Massacre, Senate hearings, more Deep Throat meetings,
        // dirty tricks operations, enemy lists, etc.
    },
    
    calculateFinalScore: function() {
        // Score calculation based on evidence found, paths taken, etc.
        return 95; // Placeholder
    }
};

// Make it available globally
window.WatergateStoryExpanded = WatergateStoryExpanded;
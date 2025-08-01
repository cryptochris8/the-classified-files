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
                    nextScene: "white_house_connection"
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
                }
            ],
            educationalNote: "The revelation of Nixon's secret taping system was the turning point that led to his resignation."
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
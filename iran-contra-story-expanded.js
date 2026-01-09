// Iran-Contra Affair - An Interactive Investigation
// Based on historical events and verified facts

const IranContraStoryExpanded = {
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
            imagePrompt: "White House basement office 1980s, man in military uniform shredding documents frantically, classified papers, desperation",
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
                    nextScene: "reagan_knowledge_question"
                }
            ],
            educationalNote: "Iran-Contra was a secret operation that violated Congressional bans on both arms sales to Iran and funding for Nicaraguan rebels."
        },

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
            sources: [
                "Tower Commission Report, 1987",
                "Congressional Iran-Contra Report, 1987"
            ],
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
            ],
            educationalNote: "The Arms Export Control Act of 1976 prohibited such weapons sales without Congressional notification."
        },

        contra_funding_exposed: {
            text: `CONTRA FUNDING EXPOSED

THE BOLAND AMENDMENTS:
Congress passed the Boland Amendments (1982-1984) explicitly banning:
• Military aid to Nicaraguan Contras
• CIA involvement in overthrow operations
• Any federal funds for rebel activities

📊 THE ILLEGAL OPERATION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Iran Arms Sales Profits:     $16.1 million
Saudi Arabia Donations:      $32 million
Private Donors (via North):  $10+ million
Country 2 (Taiwan):          $2 million
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TOTAL ILLEGAL AID:           ~$60+ million

🏦 THE MONEY TRAIL:
Funds flowed through Swiss bank accounts, shell companies, and private arms dealers - all designed to hide the White House connection.

Oliver North ran the operation from his NSC office.`,
            image: "contra_funding_diagram",
            imagePrompt: "Money flow diagram, Swiss bank accounts, Nicaraguan Contra fighters, covert funding operation, 1980s Central America",
            sources: [
                "Congressional Iran-Contra Report, Chapter 4",
                "Walsh Independent Counsel Report, 1993"
            ],
            choices: [
                {
                    text: "Investigate Saudi funding",
                    nextScene: "saudi_connection",
                    progressIncrease: 25
                },
                {
                    text: "Examine North's network",
                    nextScene: "north_network",
                    progressIncrease: 20
                },
                {
                    text: "Who knew at the White House?",
                    nextScene: "reagan_knowledge_question"
                }
            ],
            educationalNote: "The Boland Amendments represented Congress's attempt to prevent another Vietnam-style military intervention in Central America."
        },

        reagan_knowledge_question: {
            text: `THE CENTRAL QUESTION: WHAT DID REAGAN KNOW?

The key question haunting the investigation:

📋 EVIDENCE REAGAN KNEW:
• Personally met with hostage families
• Obsessed with getting hostages released
• Approved arms sales in NSC meetings
• Met with Saudi King about Contra funding
• His own diary entries mention operations

📋 REAGAN'S DEFENSE:
• "I don't recall" (used 88 times in testimony)
• Claimed subordinates acted independently
• Tower Commission found him "disengaged"
• Blamed his management style

🔍 THE DILEMMA:
Either Reagan was:
A) Deeply involved in illegal activities, OR
B) So incompetent he didn't know what his staff was doing

Neither is a good look for a President.`,
            image: "reagan_knowledge",
            imagePrompt: "President Reagan at desk looking confused, Oval Office, 1980s, documents on desk, worried expression",
            sources: [
                "Tower Commission Report, 1987",
                "Reagan Testimony Transcripts"
            ],
            choices: [
                {
                    text: "Review Reagan's diary entries",
                    nextScene: "reagan_diaries",
                    progressIncrease: 30,
                    evidence: true
                },
                {
                    text: "Examine NSC meeting records",
                    nextScene: "nsc_meetings",
                    progressIncrease: 25
                },
                {
                    text: "Look at what his staff says",
                    nextScene: "staff_testimony"
                }
            ],
            educationalNote: "Reagan's phrase 'I don't recall' became infamous during his testimony, used repeatedly when asked about key events."
        },

        cover_up_begins: {
            text: `THE COVER-UP BEGINS

NOVEMBER 21-25, 1986 - CRISIS MODE:

As news breaks, the White House scrambles:

📄 DOCUMENT DESTRUCTION:
• Oliver North shreds thousands of documents
• Fawn Hall (secretary) smuggles documents out
• NSC computers purged
• Key memos "disappear"

🎭 THE FALSE NARRATIVE:
• Reagan claims NO arms-for-hostages deal
• November 25: AG Meese announces "discovery"
• North and Poindexter fired as scapegoats
• Reagan acts shocked by diversion

📺 THE PRESS CONFERENCE:
Reagan: "A few months ago I told the American people I did not trade arms for hostages. My heart and my best intentions still tell me that's true, but the facts and the evidence tell me it is not."

Translation: I lied, but I feel like I shouldn't have had to.`,
            image: "reagan_press_conference",
            imagePrompt: "Reagan at podium press conference, stressed expression, 1986, White House press room, media cameras",
            sources: [
                "Washington Post coverage, November 1986",
                "Tower Commission findings on document destruction"
            ],
            choices: [
                {
                    text: "Investigate Fawn Hall's document smuggling",
                    nextScene: "fawn_hall_testimony",
                    progressIncrease: 20
                },
                {
                    text: "Examine North's shredding operation",
                    nextScene: "shredding_party",
                    progressIncrease: 25,
                    evidence: true
                },
                {
                    text: "Watch North's testimony",
                    nextScene: "north_testimony"
                }
            ],
            educationalNote: "Obstruction of justice charges stemmed from this period of document destruction."
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
            sources: [
                "C-SPAN Congressional Testimony Archives",
                "New York Times coverage, July 1987"
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
            ],
            educationalNote: "North's televised testimony was watched by millions and made him a controversial national figure."
        },

        reagan_knowledge_revealed: {
            text: `WHAT REAGAN ACTUALLY KNEW

DAMNING EVIDENCE:

📓 REAGAN'S OWN DIARY (January 17, 1986):
"I agreed to sell TOWs to Iran."

📄 MCFARLANE MEMO TO REAGAN (November 1985):
Explicitly describes arms-for-hostages swap.
Reagan's handwritten note: "Go ahead."

📞 RECORDED CALLS:
Reagan personally called foreign leaders soliciting Contra funds after Congress cut off aid.

🏛️ THE TOWER COMMISSION CONCLUSION:
Reagan bore "ultimate responsibility" but the commission couldn't prove he knew about the diversion of funds to Contras.

⚖️ THE POLITICAL REALITY:
Impeaching a popular President over a "policy disagreement" was politically impossible. Reagan escaped with wounded popularity but no prosecution.`,
            image: "reagan_diary",
            imagePrompt: "Reagan's handwritten diary entry, desk lamp, classified documents, smoking gun evidence, 1986",
            badges: ["whistleblower"],
            sources: [
                "Reagan Diaries (declassified)",
                "Tower Commission Report, 1987"
            ],
            choices: [
                {
                    text: "Examine why Reagan wasn't impeached",
                    nextScene: "impeachment_avoided",
                    progressIncrease: 25
                },
                {
                    text: "Look at the final prosecutions",
                    nextScene: "prosecutions",
                    progressIncrease: 30
                },
                {
                    text: "Study the constitutional crisis",
                    nextScene: "constitutional_violations"
                }
            ],
            educationalNote: "Unlike Nixon, Reagan's personal popularity and the complexity of the scandal protected him from impeachment."
        },

        constitutional_violations: {
            text: `CONSTITUTIONAL CRISIS

THE IRAN-CONTRA AFFAIR VIOLATED:

📜 SEPARATION OF POWERS:
• Executive branch defied Congressional will
• Boland Amendments explicitly forbade Contra funding
• Reagan administration found workarounds

📜 TREATY OBLIGATIONS:
• Arms Export Control Act violated
• Neutrality Act violations
• International arms embargo ignored

📜 CONGRESSIONAL OVERSIGHT:
• CIA failed to notify Congress (required by law)
• NSC used as shadow intelligence agency
• Deliberate deception of Congress

⚠️ THE PRECEDENT:
Iran-Contra established that a President could:
• Ignore Congressional mandates
• Run covert foreign policy from NSC
• Escape prosecution through pardons
• Claim ignorance as a defense

This precedent would echo for decades.`,
            image: "constitution_crisis",
            imagePrompt: "US Constitution document with cracks, Capitol building in shadow, constitutional crisis imagery, 1980s",
            sources: [
                "Congressional Iran-Contra Report conclusions",
                "Constitutional law analyses"
            ],
            choices: [
                {
                    text: "Examine the pardons",
                    nextScene: "bush_pardons",
                    progressIncrease: 30,
                    evidence: true
                },
                {
                    text: "Study the lasting damage",
                    nextScene: "lasting_damage",
                    progressIncrease: 25
                },
                {
                    text: "See who was prosecuted",
                    nextScene: "prosecutions"
                }
            ],
            educationalNote: "Legal scholars consider Iran-Contra one of the most significant constitutional crises since Watergate."
        },

        conspiracy_exposed: {
            text: `THE FULL CONSPIRACY REVEALED

THE ENTERPRISE - A SECRET GOVERNMENT:

Oliver North and CIA operative Richard Secord created "The Enterprise" - a covert organization operating outside government:

📊 THE ENTERPRISE STRUCTURE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Swiss bank accounts
• Private cargo planes
• Arms warehouses
• Communications network
• Mercenary contacts
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🕵️ KEY PLAYERS:
• Oliver North (NSC) - Operations chief
• John Poindexter (NSA) - North's superior
• William Casey (CIA Director) - Mastermind
• Richard Secord (ex-Air Force) - Logistics
• Albert Hakim (businessman) - Money man

William Casey died before testifying. Convenient.`,
            image: "enterprise_network",
            imagePrompt: "Conspiracy diagram showing connections between North, CIA, weapons dealers, Swiss banks, shadowy network",
            sources: [
                "Walsh Report on The Enterprise",
                "Congressional testimony transcripts"
            ],
            badges: ["truthSeeker"],
            choices: [
                {
                    text: "Focus on CIA Director Casey",
                    nextScene: "william_casey",
                    progressIncrease: 25
                },
                {
                    text: "Follow the Swiss money",
                    nextScene: "swiss_accounts",
                    progressIncrease: 30,
                    evidence: true
                },
                {
                    text: "Examine the prosecutions",
                    nextScene: "prosecutions"
                }
            ],
            educationalNote: "The Enterprise represented an attempt to create a privatized covert operations capability outside Congressional oversight."
        },

        saudi_connection: {
            text: `THE SAUDI CONNECTION

OPERATION SANCTUARY:

When Congress cut off Contra funding, the Reagan administration turned to Saudi Arabia:

💰 SAUDI CONTRIBUTIONS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1984: $1 million/month begins
1985: Doubled to $2 million/month
Total: Approximately $32 million
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👑 THE MEETING:
Reagan personally met with Saudi King Fahd.
National Security Advisor McFarlane arranged the details.
No written records kept (by design).

🔄 QUID PRO QUO:
What did the Saudis get in return?
• AWACS surveillance planes sale approved
• Enhanced U.S. security guarantees
• Favorable treatment on oil issues

This arrangement technically circumvented the Boland Amendment - private foreign funds, not U.S. government money.`,
            image: "saudi_reagan",
            imagePrompt: "Reagan meeting with Saudi officials, White House, secret meeting, 1980s diplomatic photo style",
            sources: [
                "Congressional testimony of Robert McFarlane",
                "Walsh Independent Counsel Report"
            ],
            choices: [
                {
                    text: "Investigate other foreign donors",
                    nextScene: "foreign_donors",
                    progressIncrease: 20
                },
                {
                    text: "Examine the legal arguments",
                    nextScene: "legal_arguments",
                    progressIncrease: 15
                },
                {
                    text: "Return to the main conspiracy",
                    nextScene: "conspiracy_exposed"
                }
            ],
            educationalNote: "The use of foreign governments to fund operations Congress banned raised serious questions about executive power."
        },

        north_network: {
            text: `OLIVER NORTH'S COVERT NETWORK

THE UNOFFICIAL CIA:

From his White House basement office, North ran operations that rivaled the CIA:

🗺️ NORTH'S OPERATIONS:
• Private air fleet for weapons delivery
• Network of arms dealers worldwide
• Encrypted communications system
• Private army of mercenaries
• Swiss bank account management

📱 "THE COMPUTER":
North maintained a PROFS computer system with thousands of messages detailing illegal operations. He thought they were deleted - they weren't.

👤 KEY OPERATIVES:
• General Richard Secord - Logistics
• Albert Hakim - Financial operations
• Rafael Quintero - Field operations
• Felix Rodriguez - Contra liaison

This "shadow CIA" operated with no Congressional oversight and minimal accountability.`,
            image: "north_office",
            imagePrompt: "White House basement office, computer terminal 1980s, classified documents, covert operations center",
            sources: [
                "PROFS messages recovered by investigators",
                "North's testimony to Congress"
            ],
            choices: [
                {
                    text: "Read the recovered computer messages",
                    nextScene: "profs_messages",
                    progressIncrease: 35,
                    evidence: true
                },
                {
                    text: "Meet General Secord",
                    nextScene: "secord_testimony",
                    progressIncrease: 20
                },
                {
                    text: "Watch North's testimony",
                    nextScene: "north_testimony"
                }
            ],
            educationalNote: "The PROFS messages, which North thought he had deleted, provided crucial evidence of the conspiracy."
        },

        reagan_diaries: {
            text: `REAGAN'S PRIVATE DIARIES

THE SMOKING GUN:

Reagan kept daily diaries throughout his presidency. Key entries:

📓 JANUARY 17, 1986:
"I agreed to sell TOWs to Iran."

📓 NOVEMBER 24, 1986:
"Ed Meese came to me with a report. The Iranians paid the arms dealer twice the amount for the weapons... some of that money was deposited in Swiss bank accounts to help the Contras."

📓 DECEMBER 7, 1986:
"I still believe that what we did was legal and a good move on our part."

⚖️ LEGAL SIGNIFICANCE:
These entries prove Reagan:
• Knew about weapons sales
• Learned about diversion to Contras
• Continued to believe it was justified

Yet Reagan claimed "I don't recall" in official testimony.`,
            image: "reagan_diary_entry",
            imagePrompt: "Reagan's handwritten diary pages, pen on desk, personal presidential diary, 1986 dates visible",
            badges: ["truthSeeker"],
            sources: [
                "The Reagan Diaries (edited by Douglas Brinkley)",
                "Tower Commission document analysis"
            ],
            choices: [
                {
                    text: "Compare diary to public statements",
                    nextScene: "reagan_contradictions",
                    progressIncrease: 25,
                    evidence: true
                },
                {
                    text: "Why wasn't this enough to impeach?",
                    nextScene: "impeachment_avoided",
                    progressIncrease: 20
                },
                {
                    text: "Examine the Tower Commission findings",
                    nextScene: "tower_commission"
                }
            ],
            educationalNote: "Reagan's diaries weren't fully released until 2007, long after the scandal had faded from public memory."
        },

        nsc_meetings: {
            text: `NSC MEETING RECORDS

THE PAPER TRAIL:

National Security Council meetings documented key decisions:

📋 AUGUST 6, 1985 - MCFARLANE BRIEFING:
Reagan briefed on Iran initiative.
All senior officials present.
Reagan approved proceeding.

📋 JANUARY 7, 1986 - FULL NSC MEETING:
Weinberger: "This is arms for hostages."
Shultz: "Opposed - violates our policy."
Reagan: "I want to proceed."

📋 AFTER EACH MEETING:
National Security Decision Directives issued.
These classified documents authorized illegal activities with Reagan's signature.

🔍 THE PROBLEM:
Many records were shredded or "lost."
What remains is damning enough.
What was destroyed?`,
            image: "nsc_meeting",
            imagePrompt: "White House Situation Room meeting, Reagan with advisors around table, 1986, serious discussion",
            sources: [
                "Tower Commission reconstruction",
                "Surviving NSC meeting minutes"
            ],
            choices: [
                {
                    text: "Interview Secretary Shultz",
                    nextScene: "shultz_opposition",
                    progressIncrease: 20
                },
                {
                    text: "Interview Secretary Weinberger",
                    nextScene: "weinberger_opposition",
                    progressIncrease: 20
                },
                {
                    text: "Examine what was shredded",
                    nextScene: "shredding_party"
                }
            ],
            educationalNote: "Both Shultz and Weinberger opposed the Iran initiative but were overruled by Reagan."
        },

        staff_testimony: {
            text: `WHAT THE STAFF SAID

CONFLICTING LOYALTIES:

Reagan's staff faced a dilemma: protect the President or tell the truth?

👤 JOHN POINDEXTER (National Security Advisor):
"The buck stops here with me."
Claimed he never told Reagan about diversion.
Fell on his sword for the President.

👤 OLIVER NORTH:
"I assumed the President knew."
"Every step I took was authorized."
But wouldn't directly implicate Reagan.

👤 ROBERT MCFARLANE:
Attempted suicide before testimony.
Eventually confirmed Reagan's involvement.
"I failed in my duty to be honest."

👤 DON REGAN (Chief of Staff):
"I was as surprised as anyone."
Later revealed he had warned Reagan.

The staff's loyalty protected Reagan from criminal prosecution.`,
            image: "staff_testimony",
            imagePrompt: "Multiple officials testifying before Congress, split screen style, 1987 Iran-Contra hearings",
            sources: [
                "Congressional testimony transcripts",
                "Tower Commission interviews"
            ],
            choices: [
                {
                    text: "Focus on Poindexter's admission",
                    nextScene: "poindexter_testimony",
                    progressIncrease: 25
                },
                {
                    text: "Examine McFarlane's guilt",
                    nextScene: "mcfarlane_breakdown",
                    progressIncrease: 20
                },
                {
                    text: "Look at the final verdicts",
                    nextScene: "prosecutions"
                }
            ],
            educationalNote: "The willingness of subordinates to take blame allowed Reagan to claim ignorance."
        },

        fawn_hall_testimony: {
            text: `FAWN HALL'S CONFESSION

THE SECRETARY WHO SMUGGLED:

Fawn Hall, North's secretary, became an unlikely figure in the scandal:

👠 HER TESTIMONY:
"Sometimes you have to go above the written law."

📄 WHAT SHE DID:
• Altered official documents
• Smuggled documents out of the White House
  (Hidden in her boots and dress)
• Shredded evidence overnight
• Lied to investigators initially

💔 HER LOYALTY:
Hall believed she was protecting national security.
She was actually obstructing justice.

⚖️ GRANTED IMMUNITY:
In exchange for testimony, Hall escaped prosecution.
She later regretted her actions:
"I was young and naive. I believed what they told me."`,
            image: "fawn_hall",
            imagePrompt: "Young woman in 1980s professional attire, concerned expression, White House office setting, document shredder",
            sources: [
                "Fawn Hall Congressional testimony, 1987",
                "New York Times profiles"
            ],
            choices: [
                {
                    text: "Examine what documents were destroyed",
                    nextScene: "shredding_party",
                    progressIncrease: 25
                },
                {
                    text: "Watch North's testimony",
                    nextScene: "north_testimony"
                },
                {
                    text: "Study the obstruction charges",
                    nextScene: "obstruction_charges",
                    progressIncrease: 20
                }
            ],
            educationalNote: "Hall's statement about going 'above the written law' captured the lawless mentality of the operation."
        },

        shredding_party: {
            text: `THE SHREDDING PARTY

NOVEMBER 21-25, 1986:

As the scandal broke, North launched "Operation Shredding":

📄 WHAT WAS DESTROYED:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Financial records
• Communications logs
• Meeting notes
• Swiss bank records
• Presidential finding documents
• Operational orders
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔥 THE SCENE:
North and Hall worked through multiple nights.
Industrial shredder running constantly.
Document bags removed from White House.

💾 WHAT SURVIVED:
• PROFS computer messages (backup tapes)
• Some memos misfiled
• Documents already distributed
• Foreign government records

The cover-up itself became criminal evidence.`,
            image: "document_shredding",
            imagePrompt: "Industrial document shredder overflowing with paper, late night office, 1980s, frantic destruction",
            badges: ["whistleblower"],
            sources: [
                "Tower Commission findings",
                "FBI evidence recovery reports"
            ],
            choices: [
                {
                    text: "Examine recovered PROFS messages",
                    nextScene: "profs_messages",
                    progressIncrease: 35,
                    evidence: true
                },
                {
                    text: "Study the obstruction case",
                    nextScene: "obstruction_charges",
                    progressIncrease: 25
                },
                {
                    text: "See who was convicted",
                    nextScene: "prosecutions"
                }
            ],
            educationalNote: "North was convicted of obstruction (later overturned on immunity grounds), largely due to the shredding."
        },

        william_casey: {
            text: `WILLIAM CASEY - THE MASTERMIND

THE CIA DIRECTOR WHO DIED:

William Casey, Reagan's CIA Director, was central to Iran-Contra:

🕵️ CASEY'S ROLE:
• Conceived the Enterprise scheme
• Coordinated with North
• Managed foreign donor relationships
• Kept operations from Congress

📅 CONVENIENT TIMING:
December 15, 1986: Casey suffers brain seizure
May 6, 1987: Casey dies

He never testified. His secrets died with him.

❓ UNANSWERED QUESTIONS:
• What did Casey tell Reagan?
• What operations remain unknown?
• How deep did CIA involvement go?
• What else was Casey running?

Some investigators believe Casey's death saved Reagan from impeachment.`,
            image: "william_casey",
            imagePrompt: "Older man in suit, CIA headquarters backdrop, mysterious shadowy figure, 1980s intelligence official",
            sources: [
                "Bob Woodward's 'Veil: The Secret Wars of the CIA'",
                "Walsh Independent Counsel Report"
            ],
            choices: [
                {
                    text: "Investigate what died with Casey",
                    nextScene: "casey_secrets",
                    progressIncrease: 20
                },
                {
                    text: "Examine the Enterprise structure",
                    nextScene: "conspiracy_exposed"
                },
                {
                    text: "Look at final prosecutions",
                    nextScene: "prosecutions"
                }
            ],
            educationalNote: "Casey's death meant the central figure of the conspiracy never faced public questioning."
        },

        swiss_accounts: {
            text: `FOLLOWING THE SWISS MONEY

THE FINANCIAL TRAIL:

The Enterprise used Swiss banks to hide illegal funds:

🏦 LAKE RESOURCES INC:
A shell company in Switzerland managed by Albert Hakim.

💰 MONEY FLOW:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Iran weapons payments → Swiss accounts
                     ↓
             Lake Resources
                     ↓
        ┌───────────┴───────────┐
        ↓                       ↓
   Contra supplies        Personal accounts
                               (!)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚠️ THE SKIMMING:
Hakim and Secord kept millions for themselves.
This wasn't patriotism - it was profiteering.

💸 NORTH'S SECURITY FENCE:
$16,000 from Enterprise funds paid for a security fence at North's home. He claimed it was for protection.`,
            image: "swiss_bank",
            imagePrompt: "Swiss bank vault, numbered accounts, money flow diagram, financial secrecy, 1980s banking",
            badges: ["justiceSeeker"],
            sources: [
                "Walsh Report financial analysis",
                "Swiss banking cooperation records"
            ],
            choices: [
                {
                    text: "Investigate Hakim's testimony",
                    nextScene: "hakim_testimony",
                    progressIncrease: 25
                },
                {
                    text: "Examine Secord's profits",
                    nextScene: "secord_testimony",
                    progressIncrease: 20
                },
                {
                    text: "See the financial charges",
                    nextScene: "prosecutions"
                }
            ],
            educationalNote: "The use of Swiss banks made tracing funds extremely difficult and delayed the investigation."
        },

        profs_messages: {
            text: `THE PROFS SMOKING GUNS

ELECTRONIC EVIDENCE:

North used the White House PROFS computer system, believing deleted messages were gone forever. He was wrong.

💾 RECOVERED MESSAGES (Sample):

TO: John Poindexter
FROM: Oliver North
"The residual funds from this transaction would be used to fund the Nicaraguan resistance."

TO: Robert McFarlane
FROM: Oliver North
"$12 million will be used to purchase critically needed supplies."

TO: Poindexter
FROM: North
"Casey enthusiastically endorses this plan."

⚖️ LEGAL IMPACT:
These messages proved:
• Knowledge at highest levels
• Deliberate lawbreaking
• Cover-up planning
• Financial connections

The technology that North thought protected him convicted him.`,
            image: "computer_evidence",
            imagePrompt: "1980s computer terminal showing email messages, evidence highlighted, digital smoking gun",
            badges: ["truthSeeker", "whistleblower"],
            sources: [
                "PROFS message archives entered into evidence",
                "Walsh Report technical appendix"
            ],
            choices: [
                {
                    text: "These prove conspiracy",
                    nextScene: "conspiracy_exposed",
                    progressIncrease: 30
                },
                {
                    text: "See how they were used in court",
                    nextScene: "prosecutions"
                },
                {
                    text: "Examine Reagan's knowledge",
                    nextScene: "reagan_knowledge_revealed"
                }
            ],
            educationalNote: "The recovery of PROFS messages marked an early example of digital evidence in political investigations."
        },

        prosecutions: {
            text: `THE FINAL RECKONING

CONVICTIONS AND PARDONS:

⚖️ CONVICTED:
• Oliver North - 3 felonies (later overturned)
• John Poindexter - 5 felonies (later overturned)
• Robert McFarlane - Misdemeanor, plea deal
• Elliott Abrams - 2 misdemeanors (pardoned)
• Caspar Weinberger - Indicted (pardoned before trial)
• 11 others - Various charges

🎁 THE BUSH PARDONS (December 24, 1992):
President George H.W. Bush pardoned:
• Caspar Weinberger
• Elliott Abrams
• Robert McFarlane
• Duane Clarridge
• Alan Fiers
• Clair George

Walsh's reaction: "The Iran-Contra cover-up has now been completed."

❌ NEVER CHARGED:
• President Ronald Reagan
• Vice President George H.W. Bush
• CIA Director William Casey (deceased)`,
            image: "pardons",
            imagePrompt: "Presidential pardon document with signatures, gavel, scales of justice tilted, 1992",
            sources: [
                "Walsh Independent Counsel Final Report, 1993",
                "Presidential pardon records"
            ],
            choices: [
                {
                    text: "Examine Bush's involvement",
                    nextScene: "bush_involvement",
                    progressIncrease: 25,
                    evidence: true
                },
                {
                    text: "Study why convictions were overturned",
                    nextScene: "immunity_problem",
                    progressIncrease: 20
                },
                {
                    text: "See the lasting impact",
                    nextScene: "lasting_damage"
                }
            ],
            educationalNote: "The pardons effectively ended the investigation before it could fully expose White House involvement."
        },

        bush_pardons: {
            text: `THE CHRISTMAS EVE PARDONS

DECEMBER 24, 1992:

Just weeks before leaving office, President George H.W. Bush issued blanket pardons:

📜 THE PARDONS:
• Caspar Weinberger - Would have gone to trial
• Elliott Abrams - Already convicted
• Robert McFarlane - Already convicted
• Three former CIA officials

🔍 WHY IT MATTERED:
Weinberger's trial would have:
• Forced Bush to testify
• Revealed Bush's own knowledge
• Potentially implicated Bush directly

📝 BUSH'S JUSTIFICATION:
"The common denominator of their motivation... was patriotism."

🎯 WALSH'S RESPONSE:
"The Iran-Contra cover-up, which has continued for more than six years, has now been completed."

Bush protected Reagan's legacy - and his own.`,
            image: "bush_pardon",
            imagePrompt: "President Bush signing documents in Oval Office, Christmas decorations visible, serious expression, 1992",
            badges: ["justiceSeeker"],
            sources: [
                "Walsh Final Report, Chapter 28",
                "New York Times coverage, December 1992"
            ],
            choices: [
                {
                    text: "Examine Bush's own involvement",
                    nextScene: "bush_involvement",
                    progressIncrease: 30,
                    evidence: true
                },
                {
                    text: "Study the cover-up legacy",
                    nextScene: "lasting_damage",
                    progressIncrease: 25
                },
                {
                    text: "Complete the investigation",
                    nextScene: "victory"
                }
            ],
            educationalNote: "Bush's pardons remain controversial, seen by many as obstruction of justice disguised as clemency."
        },

        bush_involvement: {
            text: `GEORGE H.W. BUSH'S SECRET

WHAT DID THE VICE PRESIDENT KNOW?

Bush claimed he was "out of the loop." Evidence suggests otherwise:

📋 BUSH'S INVOLVEMENT:
• Attended key NSC meetings
• Met with Contra leaders
• His office received intelligence briefings
• Aide Donald Gregg connected to operations

📓 WEINBERGER'S NOTES:
"VP favored" the arms sales to Iran.
These notes would have been evidence at trial.
Bush pardoned Weinberger weeks before.

🎯 WALSH'S CONCLUSION:
Bush "withheld relevant information" and his pardons "completed the cover-up."

🏛️ THE 1992 ELECTION:
The scandal resurfaced during Bush's reelection campaign. He lost to Bill Clinton.

Did Iran-Contra cost Bush the presidency? Many believe so.`,
            image: "bush_vp",
            imagePrompt: "Vice President Bush in 1986, caught in spotlight, White House, worried expression, political scandal",
            badges: ["truthSeeker", "justiceSeeker"],
            sources: [
                "Walsh Final Report, Chapter 27",
                "Weinberger diary entries"
            ],
            choices: [
                {
                    text: "Examine the lasting damage",
                    nextScene: "lasting_damage",
                    progressIncrease: 25
                },
                {
                    text: "Complete the investigation",
                    nextScene: "victory"
                }
            ],
            educationalNote: "Bush's claim of being 'out of the loop' has been contradicted by documentary evidence."
        },

        impeachment_avoided: {
            text: `WHY REAGAN WASN'T IMPEACHED

THE POLITICAL CALCULUS:

Despite clear evidence of lawbreaking, impeachment never happened:

🏛️ POLITICAL FACTORS:
• Democrats controlled Congress but feared backlash
• Reagan remained personally popular
• "Policy disagreement" vs. "high crimes"
• Watergate fatigue - another crisis?

⚖️ LEGAL FACTORS:
• Poindexter took blame for diversion
• Reagan's "I don't recall" created doubt
• Key witnesses died (Casey) or were loyal
• Document destruction limited evidence

📊 PUBLIC OPINION:
Even at scandal's peak, only 25% supported impeachment.
Americans liked Reagan even if they didn't believe him.

🔮 THE LESSON:
A popular President with loyal subordinates and careful deniability can survive almost anything.

This lesson wasn't lost on future administrations.`,
            image: "reagan_survives",
            imagePrompt: "Reagan waving to crowds, American flag backdrop, surviving scandal, teflon president, 1987",
            sources: [
                "Gallup polling data, 1986-1987",
                "Congressional leadership deliberations"
            ],
            choices: [
                {
                    text: "Examine the lasting precedent",
                    nextScene: "lasting_damage",
                    progressIncrease: 25
                },
                {
                    text: "See who was punished instead",
                    nextScene: "prosecutions"
                },
                {
                    text: "Complete the investigation",
                    nextScene: "victory"
                }
            ],
            educationalNote: "Reagan earned the nickname 'Teflon President' because scandals never stuck to him."
        },

        lasting_damage: {
            text: `THE LASTING DAMAGE

IRAN-CONTRA'S LEGACY:

📜 PRECEDENTS SET:
• Executive can ignore Congressional mandates
• NSC can run covert operations
• "Plausible deniability" works
• Pardons can end investigations
• Loyal staff protects Presidents

👥 THE PEOPLE RECYCLED:
Iran-Contra figures resurfaced in later administrations:
• Elliott Abrams - Bush 43, Trump
• John Negroponte - Bush 43
• Otto Reich - Bush 43
• John Bolton - worked with North

🌍 FOREIGN POLICY DAMAGE:
• Emboldened Iran
• Damaged U.S. credibility
• Undermined human rights messaging
• Created template for future covert ops

⚠️ THE WARNING IGNORED:
The scandal showed that determined officials could circumvent Congressional oversight. This lesson would be applied repeatedly.`,
            image: "lasting_legacy",
            imagePrompt: "Shadow of past cast over future, government buildings, unlearned lessons, cyclical history",
            badges: ["courageousAct"],
            sources: [
                "Historical analyses of Iran-Contra",
                "Career tracking of key figures"
            ],
            choices: [
                {
                    text: "Complete the investigation",
                    nextScene: "victory"
                }
            ],
            educationalNote: "Many scholars see Iran-Contra as a template for later executive overreach and cover-ups."
        },

        tower_commission: {
            text: `THE TOWER COMMISSION

REAGAN'S CHOSEN INVESTIGATORS:

Reagan appointed a three-member commission led by Senator John Tower:

👥 COMMISSION MEMBERS:
• Senator John Tower (R) - Chair
• Senator Edmund Muskie (D)
• Brent Scowcroft - Former NSA

📋 FINDINGS (February 1987):
• Reagan was disengaged from policy
• NSC exceeded its authority
• Chief of Staff failures
• Recommended structural reforms

⚠️ CRITICAL GAPS:
• Limited investigation time (3 months)
• Relied on voluntary testimony
• Couldn't compel documents
• Casey died before testifying

🎯 THE POLITICAL RESULT:
Reagan took "full responsibility" while denying knowledge.
Don Regan (Chief of Staff) fired as scapegoat.
Reagan's approval recovered over time.

The Tower Commission provided cover, not accountability.`,
            image: "tower_commission",
            imagePrompt: "Commission panel at hearing table, official government investigation, 1987, formal hearing room",
            sources: [
                "Tower Commission Report, 1987",
                "Media coverage of findings"
            ],
            choices: [
                {
                    text: "Compare to Walsh investigation",
                    nextScene: "walsh_investigation",
                    progressIncrease: 20
                },
                {
                    text: "Examine Reagan's response",
                    nextScene: "reagan_contradictions",
                    progressIncrease: 15
                },
                {
                    text: "See the final results",
                    nextScene: "prosecutions"
                }
            ],
            educationalNote: "Critics argued the Tower Commission was designed to minimize political damage rather than find truth."
        },

        reagan_contradictions: {
            text: `REAGAN'S CONTRADICTIONS

WHAT HE SAID VS. WHAT WAS TRUE:

📺 PUBLIC STATEMENT (November 13, 1986):
"We did not - repeat - did not trade weapons or anything else for hostages."

📓 DIARY ENTRY (January 17, 1986):
"I agreed to sell TOWs to Iran."

📺 PUBLIC STATEMENT (March 4, 1987):
"A few months ago I told the American people I did not trade arms for hostages. My heart tells me that's true, but the facts and evidence tell me it is not."

📺 TESTIMONY PHRASE (used 88 times):
"I don't recall."

🎭 THE PERFORMANCE:
Reagan's ability to seem sincere while lying - or genuinely not remembering - made him impossible to pin down.

Was it acting skill or cognitive decline? Both theories have supporters.`,
            image: "reagan_statements",
            imagePrompt: "Split image of Reagan at podium, different moments, contradiction theme, 1986-1987",
            sources: [
                "Public statements archive",
                "Reagan Diaries comparison"
            ],
            choices: [
                {
                    text: "Why wasn't this perjury?",
                    nextScene: "perjury_question",
                    progressIncrease: 20
                },
                {
                    text: "Examine the political cover",
                    nextScene: "impeachment_avoided"
                },
                {
                    text: "See investigation results",
                    nextScene: "prosecutions"
                }
            ],
            educationalNote: "Reagan's March 1987 statement, acknowledging he had lied, is one of the most remarkable presidential admissions in history."
        },

        foreign_donors: {
            text: `THE FOREIGN DONOR NETWORK

CIRCUMVENTING CONGRESS:

When Congress banned Contra aid, the administration found alternatives:

💰 FOREIGN GOVERNMENT DONATIONS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Saudi Arabia:     $32 million
Taiwan:           $2 million
Brunei:           $10 million (lost in transfer!)
Israel:           Weapons intermediary
South Africa:     Alleged support
South Korea:      Alleged support
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🏦 THE BRUNEI FIASCO:
Brunei's $10 million was transferred to wrong Swiss account (typo in account number). North's secretary wrote down the wrong number.

The money was never recovered.

🔄 THE EXCHANGE:
What did these countries get in return?
• Favorable arms sales
• Trade benefits
• Political support
• Access to White House`,
            image: "foreign_donors",
            imagePrompt: "World map with money flows to Nicaragua, foreign government flags, covert funding network, 1980s",
            sources: [
                "Congressional testimony on foreign solicitation",
                "Walsh Report, Chapter 6"
            ],
            choices: [
                {
                    text: "Focus on Saudi connection",
                    nextScene: "saudi_connection"
                },
                {
                    text: "Return to main conspiracy",
                    nextScene: "conspiracy_exposed"
                },
                {
                    text: "See investigation results",
                    nextScene: "prosecutions"
                }
            ],
            educationalNote: "The use of foreign governments to fund activities Congress banned raised serious constitutional questions."
        },

        legal_arguments: {
            text: `THE LEGAL DEFENSE

HOW THEY JUSTIFIED LAWBREAKING:

The Reagan administration's lawyers argued:

⚖️ BOLAND AMENDMENT LOOPHOLES:
"The NSC isn't an 'intelligence agency' so Boland doesn't apply."
"Private donations aren't 'federal funds.'"
"The President has inherent foreign policy authority."

⚖️ ARMS SALES DEFENSE:
"Iran initiative was strategic outreach, not arms-for-hostages."
"Congressional notification can be delayed for security."
"The President can authorize covert actions."

🔍 THE PROBLEM:
These arguments essentially claimed the President was above the law in foreign policy.

⚖️ WALSH'S RESPONSE:
"It was the policy of the Executive Branch to evade the constitutional restrictions on governmental activities."

The legal theories used to defend Iran-Contra would reappear in future administrations.`,
            image: "legal_defense",
            imagePrompt: "Legal documents and constitutional text, lawyer's desk, arguments for executive power, 1987",
            sources: [
                "Legal briefs from Iran-Contra trials",
                "Walsh Final Report legal analysis"
            ],
            choices: [
                {
                    text: "Examine constitutional crisis",
                    nextScene: "constitutional_violations"
                },
                {
                    text: "See how courts ruled",
                    nextScene: "prosecutions"
                },
                {
                    text: "Look at lasting impact",
                    nextScene: "lasting_damage"
                }
            ],
            educationalNote: "The theory of broad presidential power in foreign affairs used in Iran-Contra influenced later 'unitary executive' claims."
        },

        shultz_opposition: {
            text: `SECRETARY SHULTZ OBJECTS

THE VOICE OF DISSENT:

Secretary of State George Shultz opposed the Iran initiative from the beginning:

📋 SHULTZ'S WARNINGS:
"This is a very bad idea."
"We are violating our own policy."
"This will come back to haunt us."

📄 THE JANUARY 1986 MEETING:
Shultz explicitly told Reagan:
• Arms sales to Iran violate the embargo
• This IS arms for hostages
• Our credibility is at stake

🎯 REAGAN'S RESPONSE:
Proceeded anyway.
Shultz was cut out of later operations.
NSC ran policy without State Department.

⚖️ SHULTZ'S TESTIMONY:
Testified honestly about his opposition.
His contemporaneous notes proved the White House knew the risks.
But his dissent was ignored.`,
            image: "shultz_testimony",
            imagePrompt: "George Shultz testifying, frustrated expression, Congressional hearing, 1987, honest witness",
            sources: [
                "Shultz Congressional testimony",
                "Shultz's notes released to Tower Commission"
            ],
            choices: [
                {
                    text: "Compare to Weinberger's opposition",
                    nextScene: "weinberger_opposition"
                },
                {
                    text: "Why were they ignored?",
                    nextScene: "reagan_knowledge_revealed"
                },
                {
                    text: "See investigation results",
                    nextScene: "prosecutions"
                }
            ],
            educationalNote: "Shultz and Weinberger's documented opposition proved the White House knew the risks and proceeded anyway."
        },

        weinberger_opposition: {
            text: `SECRETARY WEINBERGER'S NOTES

THE EVIDENCE BUSH BURIED:

Defense Secretary Caspar Weinberger also opposed Iran arms sales:

📓 WEINBERGER'S CONTEMPORANEOUS NOTES:
Detailed diary entries documenting:
• His objections to the policy
• NSC meeting discussions
• Bush's participation ("VP favored")
• Reagan's decisions

⚠️ WHY THIS MATTERS:
These notes would have been key evidence in Weinberger's trial - and potentially implicated Bush.

🎁 THE PARDON:
Bush pardoned Weinberger on December 24, 1992 - just weeks before trial.

Walsh's reaction: "In twelve years, I have not seen a more complete cover-up."

The notes survived but the trial never happened.`,
            image: "weinberger_notes",
            imagePrompt: "Handwritten diary notes, classified stamp, evidence tag, legal documents, 1992",
            badges: ["whistleblower"],
            sources: [
                "Weinberger diary entries entered into evidence",
                "Walsh Report, Chapter 27"
            ],
            choices: [
                {
                    text: "Examine the Bush pardons",
                    nextScene: "bush_pardons",
                    progressIncrease: 25
                },
                {
                    text: "See what happened to others",
                    nextScene: "prosecutions"
                },
                {
                    text: "Study the cover-up",
                    nextScene: "cover_up_begins"
                }
            ],
            educationalNote: "Weinberger's notes are considered some of the most damning evidence that was never presented at trial."
        },

        poindexter_testimony: {
            text: `POINDEXTER TAKES THE FALL

THE LOYAL SOLDIER:

Admiral John Poindexter, National Security Advisor, testified:

📺 HIS KEY STATEMENT:
"The buck stops here with me. I made the decision not to tell the President."

🎯 WHAT THIS MEANT:
• Reagan gained plausible deniability
• Poindexter took legal responsibility
• The President was protected

⚖️ THE CONVICTION:
Poindexter was convicted of:
• Conspiracy
• Obstruction of Congress
• Making false statements
Sentence: 6 months (suspended)

🔄 THE REVERSAL:
Conviction overturned on appeal because his immunized Congressional testimony was used against him.

He never served time. Neither did Reagan.`,
            image: "poindexter",
            imagePrompt: "Admiral Poindexter in uniform testifying, taking responsibility, Congressional hearing, 1987",
            sources: [
                "Poindexter testimony transcripts",
                "Appeals court reversal decision"
            ],
            choices: [
                {
                    text: "Examine the immunity problem",
                    nextScene: "immunity_problem",
                    progressIncrease: 20
                },
                {
                    text: "Study other convictions",
                    nextScene: "prosecutions"
                },
                {
                    text: "Did Reagan really not know?",
                    nextScene: "reagan_knowledge_revealed"
                }
            ],
            educationalNote: "Poindexter's willingness to claim sole responsibility made prosecution of Reagan impossible."
        },

        mcfarlane_breakdown: {
            text: `MCFARLANE'S BURDEN

THE GUILT THAT BROKE HIM:

Robert McFarlane, former National Security Advisor, couldn't live with the lies:

💔 FEBRUARY 9, 1987:
McFarlane attempted suicide with an overdose of Valium.
He survived but was hospitalized.

📝 HIS STATEMENT:
"I felt that I had failed the country and the President by not being completely honest."

⚖️ HIS TESTIMONY:
Eventually cooperated fully with investigators.
Confirmed Reagan's knowledge and approval.
Pleaded guilty to misdemeanor charges.

🎁 THE PARDON:
Bush pardoned him in 1992.
McFarlane accepted, expressing gratitude.

His guilt showed the psychological toll of serving corrupt power.`,
            image: "mcfarlane",
            imagePrompt: "Robert McFarlane looking burdened, weight of secrets, 1987, personal crisis",
            sources: [
                "McFarlane hospitalization records",
                "Congressional testimony"
            ],
            choices: [
                {
                    text: "Examine other staff testimony",
                    nextScene: "staff_testimony"
                },
                {
                    text: "See final prosecutions",
                    nextScene: "prosecutions"
                },
                {
                    text: "Study the cover-up",
                    nextScene: "cover_up_begins"
                }
            ],
            educationalNote: "McFarlane's suicide attempt humanized the scandal, showing the personal cost of political deception."
        },

        immunity_problem: {
            text: `THE IMMUNITY TRAP

HOW CONGRESS KILLED THE PROSECUTIONS:

Congress's desire for public testimony created a legal problem:

📺 THE DEAL:
To get televised testimony, Congress granted immunity to North and Poindexter.

⚖️ THE LEGAL PROBLEM:
Immunized testimony cannot be used in prosecution.
But the testimony was broadcast nationally.
Prosecutors had to prove they used NO immunized information.

🔄 THE APPEALS:
Both North and Poindexter had convictions overturned because:
• Witnesses may have been influenced by testimony
• Prosecutors couldn't prove complete separation
• The immunity was essentially absolute

😤 WALSH'S FRUSTRATION:
"Congress's insistence on televised hearings in exchange for immunity effectively immunized the major targets."

Politics trumped justice.`,
            image: "immunity_reversal",
            imagePrompt: "Gavel and scales of justice, legal reversal, immunized testimony problem, 1990s",
            sources: [
                "D.C. Circuit Court of Appeals decisions",
                "Walsh Final Report, Chapter 29"
            ],
            choices: [
                {
                    text: "See who escaped justice",
                    nextScene: "prosecutions"
                },
                {
                    text: "Examine the lasting damage",
                    nextScene: "lasting_damage"
                },
                {
                    text: "Complete the investigation",
                    nextScene: "victory"
                }
            ],
            educationalNote: "The immunity granted to North and Poindexter became a textbook example of how Congressional investigations can undermine prosecutions."
        },

        secord_testimony: {
            text: `GENERAL SECORD'S PROFIT

THE BUSINESSMAN PATRIOT:

Richard Secord, retired Air Force Major General, ran Enterprise logistics:

💰 SECORD'S OPERATION:
• Managed weapons shipments
• Coordinated air transport
• Handled financial arrangements
• Worked with Albert Hakim

💵 THE PROFITS:
Secord and Hakim kept millions:
"Legitimate business expenses"
"Risk compensation"
"Operational costs"

⚖️ THE TESTIMONY:
Secord justified profiteering:
"We weren't doing this for free."
"The Enterprise had overhead."

🎯 THE IRONY:
What was sold as patriotic sacrifice was partly a money-making scheme.

Secord pleaded guilty to one felony, received probation.`,
            image: "secord",
            imagePrompt: "Retired general in civilian suit, businessman demeanor, Iran-Contra profiteer, 1987",
            sources: [
                "Secord Congressional testimony",
                "Walsh financial analysis"
            ],
            choices: [
                {
                    text: "Examine Swiss account details",
                    nextScene: "swiss_accounts"
                },
                {
                    text: "Interview Hakim",
                    nextScene: "hakim_testimony"
                },
                {
                    text: "See final convictions",
                    nextScene: "prosecutions"
                }
            ],
            educationalNote: "The profit motive behind supposedly patriotic operations undermined the 'noble cause' defense."
        },

        hakim_testimony: {
            text: `ALBERT HAKIM - THE MONEY MAN

THE BUSINESS OF COVERT OPS:

Iranian-born businessman Albert Hakim managed Enterprise finances:

🏦 HIS ROLE:
• Set up Swiss accounts
• Managed Lake Resources Inc.
• Laundered weapons payments
• Distributed Contra funds

💰 THE NUMBERS:
$16+ million flowed through his accounts.
He kept $2+ million in "fees."
Created $200,000 fund for Secord.
Established fund for North's family.

⚖️ HIS TESTIMONY:
"This was a business arrangement."
Provided crucial financial documentation.
Cooperated with investigators.

🎁 THE OUTCOME:
Pleaded guilty to supplementing North's salary.
Fined $5,000. No prison time.

The middleman walked free.`,
            image: "hakim",
            imagePrompt: "Businessman at desk with financial documents, Swiss bank records, money manager, 1987",
            sources: [
                "Hakim testimony transcripts",
                "Walsh financial report"
            ],
            choices: [
                {
                    text: "Follow the Swiss money",
                    nextScene: "swiss_accounts"
                },
                {
                    text: "See final convictions",
                    nextScene: "prosecutions"
                },
                {
                    text: "Examine the conspiracy",
                    nextScene: "conspiracy_exposed"
                }
            ],
            educationalNote: "Hakim's cooperation was crucial to understanding the financial mechanics of Iran-Contra."
        },

        casey_secrets: {
            text: `WHAT DIED WITH CASEY

THE UNANSWERED QUESTIONS:

CIA Director William Casey died May 6, 1987, taking secrets to his grave:

❓ UNANSWERED QUESTIONS:
• Full extent of CIA involvement?
• Other covert operations?
• Complete financial picture?
• What did he tell Reagan directly?
• Personal enrichment allegations?

📖 BOB WOODWARD'S CLAIM:
In "Veil," Woodward claims Casey admitted:
"I believed" when asked about the diversion.
Casey's family disputes this hospital visit occurred.

🕵️ CIA CULTURE:
Casey embodied the old OSS culture:
• Operational secrecy above all
• Deniability is everything
• Results justify methods

His death ended the possibility of full disclosure.`,
            image: "casey_grave",
            imagePrompt: "CIA headquarters, missing puzzle piece, secrets buried, William Casey legacy, 1987",
            sources: [
                "Bob Woodward, 'Veil'",
                "CIA historical assessments"
            ],
            choices: [
                {
                    text: "Examine what we do know",
                    nextScene: "conspiracy_exposed"
                },
                {
                    text: "See investigation results",
                    nextScene: "prosecutions"
                },
                {
                    text: "Study the lasting damage",
                    nextScene: "lasting_damage"
                }
            ],
            educationalNote: "Casey's death at the height of the investigation remains one of history's most convenient timing coincidences."
        },

        obstruction_charges: {
            text: `OBSTRUCTION OF JUSTICE

THE COVER-UP CRIMES:

The cover-up was itself criminal:

⚖️ OBSTRUCTION CHARGES:
• North: Destroying documents, lying to Congress
• Poindexter: Conspiracy to obstruct
• Fawn Hall: Altering documents (immunity)
• Multiple false statements to investigators

📄 EVIDENCE DESTROYED:
• Financial records
• Presidential findings
• Operational cables
• Swiss account records
• Unknown quantity of memos

⚖️ LEGAL OUTCOMES:
Most obstruction charges stuck initially.
Then overturned on immunity grounds.
Or pardoned by Bush.

The cover-up worked.`,
            image: "obstruction",
            imagePrompt: "Shredded documents, evidence destruction, cover-up imagery, obstruction of justice, 1986",
            sources: [
                "Walsh Report, obstruction findings",
                "Court documents"
            ],
            choices: [
                {
                    text: "See who was punished",
                    nextScene: "prosecutions"
                },
                {
                    text: "Examine the pardons",
                    nextScene: "bush_pardons"
                },
                {
                    text: "Study the lasting damage",
                    nextScene: "lasting_damage"
                }
            ],
            educationalNote: "The successful cover-up set a precedent that document destruction could effectively shield senior officials."
        },

        walsh_investigation: {
            text: `THE WALSH INVESTIGATION

SEVEN YEARS OF PURSUIT:

Independent Counsel Lawrence Walsh investigated from 1986-1993:

📊 BY THE NUMBERS:
• 7 years of investigation
• $47.4 million cost
• 14 people charged
• 11 convictions
• 0 major figures imprisoned

⚖️ WALSH'S FINDINGS:
"The Iran-Contra affair was characterized by pervasive dishonesty and inordinate secrecy."

"Senior administration officials deliberately deceived Congress and the public."

"The underlying facts... have been obscured."

😤 WALSH'S FRUSTRATION:
Immunity grants undermined prosecutions.
Bush pardons ended the investigation.
Key witness (Casey) died.
Documents were destroyed.

"The cover-up has now been completed."`,
            image: "walsh",
            imagePrompt: "Lawrence Walsh at podium, frustrated prosecutor, final report, 1993, end of investigation",
            sources: [
                "Walsh Independent Counsel Final Report, 1993"
            ],
            choices: [
                {
                    text: "See the final results",
                    nextScene: "prosecutions"
                },
                {
                    text: "Examine the pardons",
                    nextScene: "bush_pardons"
                },
                {
                    text: "Complete the investigation",
                    nextScene: "victory"
                }
            ],
            educationalNote: "Walsh's 7-year investigation remains one of the longest and most thorough in American history."
        },

        perjury_question: {
            text: `WHY NOT PERJURY?

THE UNASKED QUESTION:

Reagan contradicted himself repeatedly. Why no perjury charges?

⚖️ LEGAL BARRIERS:
• "I don't recall" isn't provably false
• Memory is subjective
• Intent to deceive must be proven
• Political consequences of charging a President

🎭 THE PERFORMANCE:
Reagan's acting skills made him effective:
• Appeared genuinely confused
• Seemed to believe his own statements
• "Heart" vs. "facts" distinction

🏛️ POLITICAL REALITY:
• Democrats feared backlash
• Impeachment seemed too extreme
• Public didn't want another crisis
• Reagan's personal popularity

📜 THE PRECEDENT:
Presidents can make false public statements without legal consequence if:
• They're popular enough
• They use careful language
• Their staff takes the blame`,
            image: "perjury_question",
            imagePrompt: "Reagan at podium with question marks, truth vs. politics, presidential deception, 1987",
            sources: [
                "Legal analyses of presidential testimony",
                "Congressional deliberation records"
            ],
            choices: [
                {
                    text: "Examine why no impeachment",
                    nextScene: "impeachment_avoided"
                },
                {
                    text: "See who was punished instead",
                    nextScene: "prosecutions"
                },
                {
                    text: "Complete the investigation",
                    nextScene: "victory"
                }
            ],
            educationalNote: "The 'I don't recall' defense has become a standard technique for witnesses seeking to avoid perjury while not testifying truthfully."
        },

        victory: {
            text: `INVESTIGATION COMPLETE
TRUTH REVEALED

🏆 YOUR ACHIEVEMENTS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ Exposed the full scope of the conspiracy
✓ Documented Reagan's knowledge
✓ Traced the illegal funding networks
✓ Revealed the cover-up operation
✓ Uncovered the pardon protection
✓ Understood the lasting damage
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 FINAL SUMMARY:
The Iran-Contra affair demonstrated that a determined executive branch could:
• Violate Congressional mandates
• Run covert operations outside oversight
• Destroy evidence without consequence
• Use pardons to protect co-conspirators
• Escape accountability through popularity

The precedents set would echo for decades.

Your investigation helped expose one of the most significant constitutional crises in modern history.`,
            image: "investigation_complete",
            imagePrompt: "Investigation complete, justice partially served, truth revealed, historical significance",
            badges: ["truthSeeker", "whistleblower", "justiceSeeker", "courageousAct"],
            choices: [
                {
                    text: "Play again",
                    nextScene: "intro"
                },
                {
                    text: "Return to main menu",
                    nextScene: "mainMenu"
                }
            ],
            educationalNote: "Iran-Contra remains essential reading for understanding executive power, Congressional oversight, and political accountability."
        },

        mainMenu: {
            text: "Returning to case selection...",
            image: "main_menu",
            imagePrompt: "Investigation files, case selection, detective desk",
            choices: []
        }
    }
};

// Make it available globally
window.IranContraStoryExpanded = IranContraStoryExpanded;

// Snowden Revelations - An Interactive Investigation
// Based on historical events and verified facts

const SnowdenRevelationsStoryExpanded = {
    title: "Snowden Revelations",
    description: "Follow Edward Snowden's decision to expose NSA mass surveillance programs and the global impact of his revelations about government spying.",
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
            imagePrompt: "Modern NSA facility in Hawaii, computer screens showing surveillance data, young contractor looking troubled, moral crisis moment",
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
                    nextScene: "internal_reporting"
                }
            ],
            educationalNote: "Edward Snowden's 2013 revelations exposed the NSA's massive surveillance programs that collected data on millions of Americans without warrants."
        },

        moral_crisis: {
            text: `THE MORAL CRISIS DEEPENS

Every day at work, you see more evidence of constitutional violations:

💻 DAILY SURVEILLANCE REALITY:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• 3+ billion phone calls intercepted daily in U.S.
• Every email, text, web search stored permanently
• Location tracking of all cell phones
• Financial transaction monitoring
• Social media analysis and profiling
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📱 PERSONAL REALIZATION:
Your own communications are in this database. Your girlfriend's private messages. Your family's personal conversations. Everyone you've ever known.

🏛️ CONSTITUTIONAL VIOLATION:
The Fourth Amendment prohibits unreasonable searches without warrants. This program violates the constitutional rights of every American.

You took an oath to defend the Constitution. What does that mean when your own government is violating it?`,
            image: "snowden_moral_crisis",
            imagePrompt: "Edward Snowden at NSA workstation, constitutional text overlay, moral weight of surveillance state, individual versus system",
            choices: [
                {
                    text: "Try to work within the system first",
                    nextScene: "internal_reporting",
                    progressIncrease: 15
                },
                {
                    text: "The public has a right to know",
                    nextScene: "decision_to_leak",
                    progressIncrease: 25,
                    evidence: true
                },
                {
                    text: "Consider the personal consequences",
                    nextScene: "consequence_analysis"
                }
            ],
            educationalNote: "Snowden later stated he wrestled with the decision for months before concluding that the public interest outweighed the personal risks."
        },

        internal_reporting: {
            text: `TRYING TO WORK WITHIN THE SYSTEM

You consider going through official channels:

📋 INTERNAL REPORTING OPTIONS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• NSA Inspector General
• Congressional Intelligence Committees
• Internal compliance officers
• Chain of command reporting
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚠️ THE PROBLEM:
• Congress authorized these programs (in secret)
• FISA Court approved them (in secret)
• Oversight committees are briefed (they don't object)
• Previous whistleblowers were prosecuted

📜 WHISTLEBLOWER HISTORY:
Thomas Drake tried internal channels - prosecuted under Espionage Act.
William Binney reported concerns - FBI raided his home.
The system protects itself, not the Constitution.

💭 YOUR REALIZATION:
"When you're inside the system, you realize it's designed to prevent exactly what you're trying to do. The people who should be providing oversight are complicit."

Working within the system isn't just ineffective - it's dangerous.`,
            image: "internal_reporting",
            imagePrompt: "Government bureaucracy, complaint forms, frustrated employee, dead-end reporting channels",
            sources: [
                "Thomas Drake prosecution records",
                "William Binney interviews",
                "NSA whistleblower history"
            ],
            choices: [
                {
                    text: "The public has a right to know directly",
                    nextScene: "decision_to_leak",
                    progressIncrease: 30,
                    evidence: true
                },
                {
                    text: "Consider the personal consequences first",
                    nextScene: "consequence_analysis"
                },
                {
                    text: "Document everything before deciding",
                    nextScene: "document_collection_expansion"
                }
            ],
            educationalNote: "Snowden claims he raised concerns through internal channels but was told to stay quiet. The NSA disputes this claim."
        },

        consequence_analysis: {
            text: `WEIGHING THE CONSEQUENCES

Before you act, you consider what awaits:

⚖️ PERSONAL CONSEQUENCES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Espionage Act charges (30+ years prison)
• Never see family again
• Loss of career, income, security clearance
• Branded as traitor by government
• Possible extradition or rendition
• Life in exile if you escape
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💔 RELATIONSHIP COST:
Lindsay, your girlfriend of four years, doesn't know what you're planning. If you do this, you may never see her again.

🌍 POTENTIAL IMPACT:
• Americans learn about surveillance
• Global debate on privacy rights
• Tech companies may improve security
• Congressional reforms possible
• International diplomatic fallout

💭 YOUR CALCULATION:
"I'm willing to sacrifice all of that because I can't in good conscience allow the U.S. government to destroy privacy, internet freedom, and basic liberties for people around the world."

Is the cause worth the cost?`,
            image: "consequence_analysis",
            imagePrompt: "Snowden contemplating future, family photos, prison bars imagery, scales of justice, personal sacrifice",
            choices: [
                {
                    text: "The cause is worth any personal cost",
                    nextScene: "decision_to_leak",
                    progressIncrease: 35,
                    evidence: true
                },
                {
                    text: "Prepare an escape plan first",
                    nextScene: "escape_planning",
                    progressIncrease: 20
                },
                {
                    text: "Find a way to protect yourself while leaking",
                    nextScene: "multi_journalist_strategy"
                }
            ],
            educationalNote: "Snowden has lived in Russian exile since 2013, unable to return to the U.S. without facing prosecution."
        },

        decision_to_leak: {
            text: `THE DECISION TO LEAK

You've made your choice. The American people deserve to know what their government is doing.

🎯 YOUR PLAN:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Copy the most damaging NSA documents
• Contact investigative journalists
• Flee the country before revelation
• Accept exile but preserve democracy
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 DOCUMENTS TO LEAK:
• PRISM: Direct access to tech company data
• Upstream: Fiber optic cable tapping
• XKeyscore: Global internet monitoring
• Boundless Informant: Surveillance statistics
• Foreign intelligence collection methods

💭 FINAL THOUGHT:
"I understand that I will be made to suffer for my actions, but I will be satisfied if the federation of secret law, unequal pardon, and irresistible executive powers that rule the world that I love are revealed even for an instant."

You're about to become the most wanted man in the world.`,
            image: "snowden_document_preparation",
            imagePrompt: "Snowden secretly copying classified documents, flash drives, preparation for historic leak, tense atmosphere",
            badges: ["courageousAct"],
            choices: [
                {
                    text: "Contact Glenn Greenwald at Guardian",
                    nextScene: "greenwald_contact",
                    progressIncrease: 30,
                    evidence: true
                },
                {
                    text: "Reach out to Washington Post",
                    nextScene: "barton_gellman_approach"
                },
                {
                    text: "Use multiple journalists for safety",
                    nextScene: "multi_journalist_strategy",
                    progressIncrease: 25
                }
            ],
            educationalNote: "Snowden carefully selected journalists known for national security reporting and commitment to protecting sources."
        },

        greenwald_contact: {
            text: `CONTACTING GLENN GREENWALD

MAY 2013 - You reach out to Guardian journalist Glenn Greenwald:

📧 ENCRYPTED EMAIL:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
"I have information about illegal NSA surveillance
programs that violate the constitutional rights of
every American. Are you interested in a story that
could change everything?"
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔐 GREENWALD'S RESPONSE:
"I'm very interested. But we need to communicate securely. Can you use encrypted channels?"

📱 SECURE COMMUNICATIONS SETUP:
You guide Greenwald through setting up encryption software. The technology barriers almost kill the story before it starts.

🎬 THE MEETING PLAN:
"I'll be in Hong Kong. If you want the biggest story in journalism history, meet me there."

The wheels are now in motion for the most significant intelligence leak in history.`,
            image: "greenwald_encrypted_contact",
            imagePrompt: "Encrypted communications setup, journalist-source contact, secure channels, preparation for historic revelation",
            choices: [
                {
                    text: "Fly to Hong Kong for the meeting",
                    nextScene: "hong_kong_revelation",
                    progressIncrease: 40,
                    evidence: true
                },
                {
                    text: "Prepare additional documents first",
                    nextScene: "document_collection_expansion"
                },
                {
                    text: "Consider involving Laura Poitras too",
                    nextScene: "poitras_collaboration",
                    progressIncrease: 35
                }
            ],
            educationalNote: "Greenwald initially ignored Snowden's emails because he couldn't figure out encryption software - highlighting the tension between security and accessibility."
        },

        barton_gellman_approach: {
            text: `APPROACHING THE WASHINGTON POST

You contact Barton Gellman, a veteran national security reporter:

📧 INITIAL CONTACT:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
"I have documentary proof of unconstitutional
surveillance by the NSA. The Post has the
resources and credibility to publish this safely."
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📰 WASHINGTON POST CONSIDERATIONS:
• More institutional resources for verification
• Legal team to handle government pressure
• Established relationship with intelligence community
• Slower, more cautious publication process

⚠️ CONCERNS:
Gellman wants significant verification before publication. He's careful - maybe too careful for your timeline.

📞 NEGOTIATIONS:
The Post wants more time. They want to involve government officials for comment. They're worried about legal exposure.

You have limited time before the NSA notices your activities.`,
            image: "washington_post_contact",
            imagePrompt: "Washington Post newsroom, veteran journalist reviewing documents, institutional journalism, careful verification",
            sources: [
                "Barton Gellman's account of contact",
                "Washington Post internal discussions"
            ],
            choices: [
                {
                    text: "Work with both Post and Guardian",
                    nextScene: "multi_journalist_strategy",
                    progressIncrease: 30
                },
                {
                    text: "Focus on Greenwald for faster publication",
                    nextScene: "greenwald_contact",
                    progressIncrease: 25
                },
                {
                    text: "Give Post what they need for verification",
                    nextScene: "document_collection_expansion"
                }
            ],
            educationalNote: "Gellman and the Washington Post ultimately published the PRISM story simultaneously with the Guardian on June 6, 2013."
        },

        multi_journalist_strategy: {
            text: `MULTIPLE JOURNALIST STRATEGY

You decide to work with multiple outlets for maximum impact and safety:

📰 YOUR JOURNALIST NETWORK:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Glenn Greenwald (Guardian) - Civil liberties focus
• Barton Gellman (Washington Post) - Technical depth
• Laura Poitras (Documentary filmmaker) - Visual impact
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🛡️ SAFETY IN NUMBERS:
If one outlet is pressured to kill the story, others can still publish. The government can't silence everyone.

📅 COORDINATED PUBLICATION:
Plan for simultaneous release to prevent government preemption.

🔐 COMPARTMENTALIZATION:
Different documents to different journalists. If one is compromised, the others continue.

💭 YOUR REASONING:
"No single journalist or outlet has enough power to resist the full pressure of the U.S. government. But together, they're unstoppable."

This approach ensures the story survives no matter what.`,
            image: "multi_journalist_strategy",
            imagePrompt: "Multiple news outlet logos, coordinated journalism, distributed whistleblowing, redundant channels",
            badges: ["truthSeeker"],
            choices: [
                {
                    text: "Proceed with all three journalists",
                    nextScene: "hong_kong_revelation",
                    progressIncrease: 45,
                    evidence: true
                },
                {
                    text: "Focus on Guardian and Poitras",
                    nextScene: "poitras_collaboration",
                    progressIncrease: 35
                },
                {
                    text: "Finalize document collection first",
                    nextScene: "document_collection_expansion"
                }
            ],
            educationalNote: "The multi-outlet approach proved crucial - publications continued for months across multiple news organizations worldwide."
        },

        document_collection_expansion: {
            text: `EXPANDING DOCUMENT COLLECTION

You systematically gather evidence of surveillance programs:

📁 DOCUMENTS COLLECTED:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• PRISM slides: Tech company data access
• XKeyscore training materials
• Boundless Informant statistics
• FISA Court orders
• Internal policy documents
• Foreign surveillance agreements
• Budget documents showing scope
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔢 BY THE NUMBERS:
• Approximately 1.5 million documents accessed
• Selected ~200,000 most relevant documents
• Focus on programs affecting Americans
• Avoided operational details that could harm individuals

⚠️ CAREFUL CURATION:
"I carefully evaluated every single document I disclosed to ensure that each was legitimately in the public interest."

Unlike Manning, you're not dumping everything - you're curating for maximum public benefit with minimum harm.`,
            image: "document_collection",
            imagePrompt: "Classified documents being organized, careful selection process, whistleblower curation, systematic evidence gathering",
            choices: [
                {
                    text: "Documents ready - contact journalists",
                    nextScene: "greenwald_contact",
                    progressIncrease: 30
                },
                {
                    text: "Finalize escape plan before contact",
                    nextScene: "escape_planning",
                    progressIncrease: 25
                },
                {
                    text: "Verify document authenticity one more time",
                    nextScene: "decision_to_leak"
                }
            ],
            educationalNote: "Snowden has maintained he never gave documents directly to foreign governments and gave all materials to journalists."
        },

        poitras_collaboration: {
            text: `COLLABORATING WITH LAURA POITRAS

You reach out to documentary filmmaker Laura Poitras:

🎬 WHY POITRAS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Already filming documentary on surveillance
• On NSA watchlist herself (stopped at borders)
• Expert in secure communications
• Can document the historic moment
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📧 ENCRYPTED CONTACT:
"You asked in a film what domestic surveillance means for ordinary Americans. I can show you. I've seen things that haunt me."

🎥 THE VISION:
Poitras will film your meetings with Greenwald. The world won't just read about what happened - they'll see it.

📽️ "CITIZENFOUR":
The resulting documentary will win an Academy Award and bring the story to millions who might never read a newspaper article.

🔐 SECURITY EXPERTISE:
Poitras helps coordinate secure communications between all parties. Her paranoia about surveillance proves justified.`,
            image: "poitras_collaboration",
            imagePrompt: "Documentary filmmaker setup, secure communications, surveillance-aware journalism, historic documentation",
            badges: ["whistleblower"],
            choices: [
                {
                    text: "Proceed to Hong Kong with full team",
                    nextScene: "hong_kong_revelation",
                    progressIncrease: 50,
                    evidence: true
                },
                {
                    text: "Finalize escape route first",
                    nextScene: "escape_planning",
                    progressIncrease: 25
                },
                {
                    text: "Coordinate publication strategy",
                    nextScene: "multi_journalist_strategy"
                }
            ],
            educationalNote: "Poitras's documentary 'Citizenfour' provides unprecedented access to Snowden during the leak process."
        },

        escape_planning: {
            text: `PLANNING YOUR ESCAPE

Before revealing yourself, you plan your exit:

🌏 ESCAPE ROUTE ANALYSIS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Hong Kong: No extradition treaty, press freedom
• Ecuador: Offered asylum to Assange
• Iceland: Privacy-friendly, but NATO ally
• Russia: No extradition, but complicated
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✈️ HONG KONG CHOICE:
You choose Hong Kong as initial refuge:
• Strong legal protections
• Free press can operate
• Time zone works for coordination
• Exit options to multiple countries

📅 THE TIMELINE:
• May 20: Leave Hawaii for Hong Kong
• June 1-9: Meet journalists, provide documents
• June 6: First publications
• June 9: Reveal your identity
• ???: Flee before extradition

💼 COVER STORY:
Tell your employer you need medical leave. Tell Lindsay you're going on a work trip. Leave everything behind.`,
            image: "escape_planning",
            imagePrompt: "World map with escape routes, Hong Kong highlighted, covert travel planning, leaving behind normal life",
            choices: [
                {
                    text: "Execute the plan - fly to Hong Kong",
                    nextScene: "hong_kong_revelation",
                    progressIncrease: 45,
                    evidence: true
                },
                {
                    text: "Contact journalists from Hawaii first",
                    nextScene: "greenwald_contact",
                    progressIncrease: 30
                },
                {
                    text: "Consider the risks one more time",
                    nextScene: "consequence_analysis"
                }
            ],
            educationalNote: "Snowden's original plan was to seek asylum in Ecuador, but his passport was cancelled while in Moscow, stranding him in Russia."
        },

        hong_kong_revelation: {
            text: `HONG KONG REVELATION

JUNE 2013 - MIRA HOTEL, HONG KONG

You meet Glenn Greenwald and documentary filmmaker Laura Poitras:

🏨 THE HISTORIC MEETING:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
GREENWALD: "Who are you and what do you have?"

YOU: "My name is Edward Snowden. I work for the NSA,
and I have evidence that the U.S. government is
violating the Constitution on a massive scale."
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 DOCUMENT REVIEW:
For hours, you explain the surveillance programs:
• PRISM collects data directly from tech companies
• NSA taps underwater internet cables globally
• Every American's communications are stored
• Foreign allies are spied on without their knowledge

🎥 POITRAS FILMING:
Unknown to the world, she's documenting this historic moment for her film "Citizenfour."

🌍 GLOBAL IMPACT BEGINS:
These revelations will expose the surveillance state to the entire world.`,
            image: "hong_kong_hotel_meeting",
            imagePrompt: "Hong Kong hotel room meeting, Snowden with journalists, classified documents spread out, historic moment being filmed",
            badges: ["whistleblower"],
            choices: [
                {
                    text: "Authorize publication of PRISM story",
                    nextScene: "prism_publication",
                    progressIncrease: 50,
                    evidence: true
                },
                {
                    text: "Reveal your identity publicly first",
                    nextScene: "public_revelation",
                    progressIncrease: 45
                },
                {
                    text: "Start with foreign surveillance to build credibility",
                    nextScene: "foreign_surveillance_first"
                }
            ],
            educationalNote: "The Mira Hotel meetings in Hong Kong lasted several days, with Greenwald and Poitras working around the clock to verify and prepare stories."
        },

        prism_publication: {
            text: `PRISM STORY PUBLISHED

JUNE 6, 2013 - THE WORLD LEARNS

The Guardian and Washington Post simultaneously publish:

📰 HEADLINE:
"NSA PRISM PROGRAM TAPS INTO USER DATA OF APPLE, GOOGLE AND OTHERS"

💻 PRISM REVEALED:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Direct access to servers of 9 tech giants
• Microsoft, Google, Yahoo, Facebook, Apple...
• Emails, videos, photos, files collected
• Started in 2007, expanded massively
• Cost: $20 million annually
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🌍 GLOBAL REACTION:
• Tech companies deny knowledge
• Government confirms program exists
• Civil liberties groups outraged
• International diplomatic crisis begins

🔥 IMMEDIATE FALLOUT:
The Obama administration scrambles. Director of National Intelligence James Clapper's earlier Congressional testimony denying such programs now looks like perjury.

The world will never see American surveillance the same way again.`,
            image: "prism_publication",
            imagePrompt: "Major newspaper front pages with PRISM headlines, global news coverage, historic journalism moment, surveillance state exposed",
            badges: ["truthSeeker", "whistleblower"],
            sources: [
                "Guardian, June 6, 2013",
                "Washington Post, June 6, 2013"
            ],
            choices: [
                {
                    text: "Reveal your identity to the public",
                    nextScene: "public_revelation",
                    progressIncrease: 40,
                    evidence: true
                },
                {
                    text: "Continue publishing more documents",
                    nextScene: "continued_revelations",
                    progressIncrease: 35
                },
                {
                    text: "Prepare for the government response",
                    nextScene: "government_response"
                }
            ],
            educationalNote: "The PRISM story caused immediate global debate about government surveillance and tech company cooperation."
        },

        public_revelation: {
            text: `SNOWDEN REVEALS HIMSELF

JUNE 9, 2013 - THE GUARDIAN PUBLISHES VIDEO

You choose to reveal your identity before the government can control the narrative:

🎥 VIDEO STATEMENT:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
"My name is Edward Snowden. I'm 29 years old.
I work for Booz Allen Hamilton as an
infrastructure analyst for the NSA in Hawaii.

I'm just another guy who sits there day to day
in the office, watches what's happening, and
goes, 'This is something that's not our place
to decide. The public needs to decide.'"
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📺 WHY GO PUBLIC:
"I have no intention of hiding who I am because I know I have done nothing wrong."

🌍 IMMEDIATE REACTION:
• U.S. government calls you a traitor
• Civil liberties groups call you a hero
• International debate explodes
• Your face is suddenly everywhere

💭 YOUR STATEMENT:
"I'm willing to sacrifice all of that because I can't in good conscience allow the U.S. government to destroy privacy and internet freedom."`,
            image: "snowden_video_interview",
            imagePrompt: "Snowden interview video, Hong Kong hotel room, historic whistleblower moment, courage under pressure",
            badges: ["courageousAct"],
            sources: [
                "Guardian video interview, June 9, 2013"
            ],
            choices: [
                {
                    text: "Face the consequences",
                    nextScene: "manhunt_begins",
                    progressIncrease: 50,
                    evidence: true
                },
                {
                    text: "Continue releasing documents",
                    nextScene: "continued_revelations",
                    progressIncrease: 40
                },
                {
                    text: "Seek asylum immediately",
                    nextScene: "asylum_search"
                }
            ],
            educationalNote: "Snowden's decision to reveal his identity was unusual for whistleblowers and ensured he couldn't be dismissed as anonymous or unverifiable."
        },

        foreign_surveillance_first: {
            text: `FOREIGN SURVEILLANCE REVELATIONS

You decide to reveal foreign surveillance first to build international pressure:

🌍 GLOBAL SURVEILLANCE EXPOSED:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• NSA spied on European Union offices
• Tapped German Chancellor Merkel's phone
• Monitored French government communications
• Accessed Brazilian president's emails
• Surveilled United Nations headquarters
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🇩🇪 GERMAN REACTION:
Merkel: "Spying among friends is not acceptable."
Germany demands explanations from Washington.

🇧🇷 BRAZILIAN REACTION:
President Rousseff cancels state visit to U.S.
Calls surveillance "a breach of international law."

🇪🇺 EUROPEAN UNION:
Threatens trade deal negotiations.
Demands accountability from U.S. intelligence.

🎯 YOUR STRATEGY:
International outrage creates diplomatic pressure that domestic opinion alone couldn't generate.`,
            image: "foreign_surveillance",
            imagePrompt: "World map with surveillance connections, diplomatic crisis, European leaders reaction, international scandal",
            sources: [
                "Der Spiegel revelations",
                "Guardian international coverage"
            ],
            choices: [
                {
                    text: "Now reveal domestic surveillance",
                    nextScene: "prism_publication",
                    progressIncrease: 45,
                    evidence: true
                },
                {
                    text: "Continue with international revelations",
                    nextScene: "continued_revelations",
                    progressIncrease: 35
                },
                {
                    text: "Reveal your identity",
                    nextScene: "public_revelation",
                    progressIncrease: 40
                }
            ],
            educationalNote: "Revelations about foreign surveillance created diplomatic crises between the U.S. and its closest allies."
        },

        continued_revelations: {
            text: `CONTINUED REVELATIONS

Over the following months, more programs are exposed:

📰 MAJOR REVELATIONS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• MUSCULAR: NSA hacked Google and Yahoo data centers
• TEMPORA: UK's GCHQ taps fiber optic cables
• BULLRUN: NSA broke encryption standards
• CO-TRAVELER: Tracks cell phone locations globally
• Five Eyes: Intelligence sharing alliance exposed
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔐 ENCRYPTION SABOTAGE:
The NSA deliberately weakened encryption standards used by millions. The very tools people use to protect themselves are compromised.

🏢 TECH COMPANY COOPERATION:
Documents show how tech companies cooperated - willingly or under legal compulsion - with surveillance programs.

📅 PUBLICATION TIMELINE:
Stories continue for months across multiple outlets worldwide. The scope of surveillance is worse than anyone imagined.`,
            image: "continued_revelations",
            imagePrompt: "Newspaper headlines over time, escalating revelations, global coverage, surveillance state fully exposed",
            badges: ["truthSeeker"],
            choices: [
                {
                    text: "Examine the government response",
                    nextScene: "government_response",
                    progressIncrease: 30
                },
                {
                    text: "Look at tech company changes",
                    nextScene: "tech_company_response",
                    progressIncrease: 25
                },
                {
                    text: "Study the legal and policy reforms",
                    nextScene: "reform_efforts"
                }
            ],
            educationalNote: "The Snowden documents were published over more than a year, revealing new surveillance programs regularly."
        },

        government_response: {
            text: `GOVERNMENT RESPONSE

The U.S. government responds to the revelations:

🏛️ OFFICIAL STATEMENTS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Obama: Programs are "transparent" and legal
• Clapper: Earlier denial was "least untruthful" answer
• NSA Director Alexander: Programs stopped terrorism
• DOJ: Snowden committed serious crimes
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚖️ CRIMINAL CHARGES:
June 14, 2013: DOJ files charges against you:
• Theft of government property
• Unauthorized communication of national defense information
• Willful communication of classified communications intelligence

🎯 TALKING POINTS:
Government insists programs:
• Are legal under FISA
• Have Congressional oversight
• Stopped terrorist attacks
• Don't target Americans directly

📺 PUBLIC DEBATE:
For the first time, Americans debate whether this surveillance is acceptable - a debate that couldn't happen without the revelations.`,
            image: "government_response",
            imagePrompt: "Obama administration press conference, NSA director testimony, government defense of surveillance, political pressure",
            sources: [
                "DOJ press releases",
                "Obama administration statements",
                "Congressional testimony transcripts"
            ],
            choices: [
                {
                    text: "Examine the manhunt",
                    nextScene: "manhunt_begins",
                    progressIncrease: 30
                },
                {
                    text: "Look at Congressional response",
                    nextScene: "congressional_response",
                    progressIncrease: 25
                },
                {
                    text: "Study the lasting impact",
                    nextScene: "lasting_impact"
                }
            ],
            educationalNote: "The government's response included both legal action against Snowden and defense of surveillance programs as necessary for national security."
        },

        manhunt_begins: {
            text: `THE MANHUNT

JUNE 2013 - INTERNATIONAL PURSUIT

The U.S. government launches an unprecedented effort to capture you:

🔍 SEARCH BEGINS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Passport revoked June 22
• Interpol red notice issued
• Hong Kong refuses extradition request
• June 23: You board flight to Moscow
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✈️ THE MOSCOW TRAP:
Plan: Moscow → Havana → Ecuador
Reality: U.S. cancels passport mid-flight

You're stranded in Moscow Sheremetyevo Airport for 40 days, unable to leave, unable to be deported.

🇷🇺 RUSSIAN ASYLUM:
August 1, 2013: Russia grants temporary asylum.
You remain in Russia, beyond American reach.

🌍 INTERNATIONAL INCIDENT:
The Morales plane incident: President Evo Morales's plane is forced to land in Europe over false reports you're on board. The U.S. pressure is intense and global.`,
            image: "manhunt",
            imagePrompt: "Moscow airport transit zone, international manhunt, passport cancelled, stranded whistleblower, political asylum",
            sources: [
                "Timeline of Snowden's flight",
                "Morales plane incident reporting"
            ],
            choices: [
                {
                    text: "Life in Russian exile",
                    nextScene: "russian_exile",
                    progressIncrease: 35
                },
                {
                    text: "Examine the lasting impact",
                    nextScene: "lasting_impact",
                    progressIncrease: 40
                },
                {
                    text: "Study the reform efforts",
                    nextScene: "reform_efforts"
                }
            ],
            educationalNote: "Snowden has lived in Russia since 2013. He applied for asylum in over 20 countries but was rejected or ignored by most."
        },

        asylum_search: {
            text: `SEEKING ASYLUM

With the U.S. government pursuing you, you seek refuge:

🌍 ASYLUM APPLICATIONS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Countries applied to: 21+
• Russia: Eventually granted
• Ecuador: Initially receptive, then retreated
• Venezuela: Offered asylum
• Bolivia: Offered asylum
• Nicaragua: Offered asylum
• European nations: All refused
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🇺🇸 U.S. PRESSURE:
Every country considering asylum faces U.S. pressure:
• Threatened trade consequences
• Diplomatic repercussions
• Loss of intelligence cooperation

⚠️ THE MORALES INCIDENT:
Bolivia's president's plane is forced down in Europe on suspicion you're aboard. The message to other countries is clear.

💭 YOUR SITUATION:
"I had the incredible fortune of asylum in Russia, but it came at the cost of my ability to choose my future."`,
            image: "asylum_search",
            imagePrompt: "Multiple country flags, asylum application documents, diplomatic crisis, stateless whistleblower",
            choices: [
                {
                    text: "Accept Russian asylum",
                    nextScene: "russian_exile",
                    progressIncrease: 30
                },
                {
                    text: "Continue seeking alternatives",
                    nextScene: "manhunt_begins",
                    progressIncrease: 25
                },
                {
                    text: "Examine lasting impact",
                    nextScene: "lasting_impact",
                    progressIncrease: 35
                }
            ],
            educationalNote: "The pressure campaign against countries considering Snowden's asylum demonstrated U.S. global influence over extradition matters."
        },

        russian_exile: {
            text: `LIFE IN RUSSIAN EXILE

You settle into an unexpected life in Moscow:

🇷🇺 EXILE REALITY:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Temporary asylum extended repeatedly
• Russian citizenship granted 2022
• Lindsay Mills joins you in Moscow
• You marry in 2017
• Son born 2020
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💻 CONTINUED ADVOCACY:
From Russia, you continue advocating for privacy:
• Video appearances at conferences worldwide
• Board member of Freedom of the Press Foundation
• Consulting on secure communications
• Writing and public speaking

⚖️ THE IRONY:
Critics note the irony of living in Russia, a surveillance state. You respond: "I'm not in Russia because I like Russia... I'm here because America's government decided to trap me here."

🏠 A LIFE BUILT IN EXILE:
"I don't regret it... but I pay every day for that decision."`,
            image: "russian_exile",
            imagePrompt: "Moscow cityscape, exile life, family moments, continued advocacy from afar, bittersweet existence",
            sources: [
                "Snowden interviews from exile",
                "Autobiographical accounts"
            ],
            choices: [
                {
                    text: "Examine the lasting global impact",
                    nextScene: "lasting_impact",
                    progressIncrease: 40,
                    evidence: true
                },
                {
                    text: "Review reform efforts",
                    nextScene: "reform_efforts",
                    progressIncrease: 35
                },
                {
                    text: "Complete the investigation",
                    nextScene: "victory"
                }
            ],
            educationalNote: "Snowden remains in Russia and faces espionage charges if he returns to the U.S. He has expressed willingness to return for a fair trial."
        },

        tech_company_response: {
            text: `TECH INDUSTRY RESPONSE

The revelations force tech companies to respond:

🔐 ENCRYPTION EVERYWHERE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Apple: End-to-end encryption for iMessage
• Google: Encrypted data center links
• Facebook: Encryption for Messenger
• WhatsApp: Full end-to-end encryption
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📢 TRANSPARENCY REPORTS:
Tech companies begin publishing data request statistics from governments.

⚖️ LEGAL CHALLENGES:
Companies sue to reveal more about government requests. They want to restore user trust.

🔒 SECURITY IMPROVEMENTS:
The Snowden revelations accelerated:
• Widespread HTTPS adoption
• Encryption of cloud storage
• Secure messaging apps
• Privacy as a product feature

💰 BUSINESS IMPACT:
Cloud computing companies faced international resistance. Countries questioned using U.S. tech services.`,
            image: "tech_response",
            imagePrompt: "Tech company headquarters, encryption implementation, privacy features, security improvements, industry transformation",
            sources: [
                "Tech company security announcements",
                "Industry transparency reports"
            ],
            choices: [
                {
                    text: "Examine Congressional response",
                    nextScene: "congressional_response",
                    progressIncrease: 25
                },
                {
                    text: "Study reform legislation",
                    nextScene: "reform_efforts",
                    progressIncrease: 30
                },
                {
                    text: "Review lasting impact",
                    nextScene: "lasting_impact",
                    progressIncrease: 35
                }
            ],
            educationalNote: "The tech industry's post-Snowden security improvements significantly increased user privacy protection worldwide."
        },

        congressional_response: {
            text: `CONGRESSIONAL RESPONSE

Congress responds to public outcry:

🏛️ OVERSIGHT HEARINGS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Clapper's "least untruthful" testimony scrutinized
• NSA directors face intense questioning
• Calls for surveillance reform
• Divided political response
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚖️ LEGISLATIVE RESPONSE:
2015 USA FREEDOM Act:
• Ends bulk phone metadata collection
• Requires more FISA Court transparency
• Limits some NSA collection methods
• Critics call it too weak

📊 POLITICAL DIVIDE:
• Civil libertarians: More reform needed
• National security hawks: Snowden endangered programs
• Privacy advocates: Historic progress
• Intelligence community: Damage to operations

🔍 OVERSIGHT LIMITATIONS:
Despite reforms, much surveillance continues. The FISA Court still operates largely in secret.`,
            image: "congressional_response",
            imagePrompt: "Congressional hearing room, intelligence oversight testimony, legislative debate, surveillance reform",
            sources: [
                "USA FREEDOM Act text",
                "Congressional hearing transcripts"
            ],
            choices: [
                {
                    text: "Examine specific reforms",
                    nextScene: "reform_efforts",
                    progressIncrease: 30
                },
                {
                    text: "Study lasting impact",
                    nextScene: "lasting_impact",
                    progressIncrease: 35
                },
                {
                    text: "Complete the investigation",
                    nextScene: "victory"
                }
            ],
            educationalNote: "The USA FREEDOM Act of 2015 represented the first significant legislative restriction on NSA surveillance since 9/11."
        },

        reform_efforts: {
            text: `SURVEILLANCE REFORM EFFORTS

The Snowden revelations prompted multiple reforms:

📜 LEGISLATIVE CHANGES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• USA FREEDOM Act (2015)
• Ended bulk phone metadata collection
• Added FISA Court advocates
• Required more transparency
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚖️ COURT DECISIONS:
• Second Circuit: Bulk collection was illegal
• Privacy advocates won key cases
• Some programs ruled unconstitutional

🌍 INTERNATIONAL REFORMS:
• European Court of Human Rights rulings
• New EU-US data transfer frameworks
• International encryption standards debates

📱 PRIVATE SECTOR:
• End-to-end encryption became standard
• Privacy features marketed prominently
• User awareness of surveillance increased

⚠️ LIMITATIONS:
• Many programs continue under different authorities
• Executive surveillance powers remain broad
• International surveillance largely unreformed`,
            image: "reform_efforts",
            imagePrompt: "Legislative reforms, court decisions, privacy law changes, surveillance oversight improvement",
            badges: ["justiceSeeker"],
            sources: [
                "USA FREEDOM Act",
                "Court decisions on surveillance"
            ],
            choices: [
                {
                    text: "Review the lasting legacy",
                    nextScene: "lasting_impact",
                    progressIncrease: 40,
                    evidence: true
                },
                {
                    text: "Complete the investigation",
                    nextScene: "victory"
                }
            ],
            educationalNote: "While significant reforms occurred, critics argue the surveillance state remains largely intact with different legal justifications."
        },

        lasting_impact: {
            text: `THE LASTING IMPACT

A decade later, Snowden's revelations continue to shape the world:

🌍 GLOBAL AWARENESS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Public understands government surveillance exists
• Privacy became mainstream concern
• Encryption adoption dramatically increased
• International surveillance debates continue
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔐 TECHNOLOGICAL CHANGES:
• End-to-end encryption now standard
• Signal, WhatsApp encryption mainstream
• HTTPS everywhere on web
• Privacy as product feature

⚖️ ONGOING DEBATES:
• Security vs. privacy balance
• Government access to encrypted data
• Surveillance of foreign nationals
• Whistleblower protections

👤 SNOWDEN'S LEGACY:
Hero to some, traitor to others. But regardless of opinion, no one can say Americans weren't warned about what their government was doing.

The conversation he started continues.`,
            image: "lasting_impact",
            imagePrompt: "Global impact visualization, privacy awareness, encryption adoption, lasting surveillance debate legacy",
            badges: ["truthSeeker", "whistleblower", "justiceSeeker"],
            sources: [
                "Surveillance reform analysis",
                "Privacy technology adoption studies"
            ],
            choices: [
                {
                    text: "Complete the investigation",
                    nextScene: "victory"
                }
            ],
            educationalNote: "The Snowden revelations remain the most significant intelligence leak in history, permanently changing global conversations about privacy and surveillance."
        },

        victory: {
            text: `INVESTIGATION COMPLETE
TRUTH REVEALED

🏆 YOUR ACHIEVEMENTS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ Uncovered mass surveillance programs
✓ Understood the whistleblower's dilemma
✓ Traced the global impact of revelations
✓ Examined government and industry response
✓ Studied lasting reforms and changes
✓ Grasped the ongoing privacy debate
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 KEY FINDINGS:
The Snowden revelations exposed:
• Unconstitutional mass surveillance
• Tech company cooperation with NSA
• Global spying on allies and citizens
• The power of whistleblowers to create change

The debate he started - between security and privacy, between government power and individual rights - continues today.

Your investigation helped illuminate one of the most significant events in the history of privacy and civil liberties.`,
            image: "investigation_complete",
            imagePrompt: "Investigation complete, surveillance state exposed, privacy debate ongoing, historic significance",
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
            educationalNote: "Edward Snowden's revelations fundamentally changed global understanding of government surveillance capabilities and sparked reforms worldwide."
        },

        mainMenu: {
            text: "Returning to case selection...",
            image: "main_menu",
            imagePrompt: "Investigation files, case selection, detective desk",
            choices: []
        },

        // Snowden's Background
        snowden_background: {
            text: `EDWARD SNOWDEN - THE MAN BEHIND THE LEAK

Before becoming the world's most famous whistleblower:

👤 EARLY LIFE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Born June 21, 1983, Elizabeth City, North Carolina
• Father was Coast Guard officer
• Dropped out of high school (later got GED)
• Self-taught computer skills
• Brief Army service (discharged after injury)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 INTELLIGENCE CAREER:
• 2005: Security guard at NSA facility
• 2006: CIA as IT technician
• 2007: Posted to Geneva under diplomatic cover
• 2009: Left CIA, began NSA contractor work
• 2013: Final position at Booz Allen Hamilton

💡 POLITICAL EVOLUTION:
Originally supported Iraq War. Over time, became disillusioned watching surveillance programs expand under both Bush and Obama.

"I believed in the system. But the more I saw, the more I realized the system was designed to violate the very principles it claimed to protect."`,
            image: "snowden_background",
            imagePrompt: "Young Edward Snowden, computer expert, intelligence career progression, idealistic young American",
            sources: ["Snowden autobiography 'Permanent Record'", "Interview transcripts"],
            choices: [
                {
                    text: "See what he discovered at NSA",
                    nextScene: "intro",
                    progressIncrease: 10
                },
                {
                    text: "Examine his moral crisis",
                    nextScene: "moral_crisis",
                    progressIncrease: 15
                },
                {
                    text: "Learn about Geneva experience",
                    nextScene: "geneva_experience",
                    progressIncrease: 15
                }
            ],
            educationalNote: "Snowden's path from patriotic IT worker to whistleblower evolved over nearly a decade in the intelligence community."
        },

        geneva_experience: {
            text: `THE GENEVA AWAKENING

2007-2009 - CIA Geneva Station

Your time in Geneva planted seeds of doubt:

🇨🇭 GENEVA POSTING:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Official cover: IT support at UN mission
• Real job: Supporting CIA operations
• First exposure to human intelligence
• Saw how CIA manipulated people
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 WHAT YOU WITNESSED:
CIA officers recruited a Swiss banker by:
• Getting him drunk repeatedly
• Encouraging him to drive home intoxicated
• Arranging his arrest for DUI
• Then "rescuing" him in exchange for cooperation

🎯 YOUR REALIZATION:
"This wasn't about protecting America. It was about exploiting vulnerable people."

💭 GROWING DOUBTS:
"The more access I got, the more I saw that our intelligence agencies were acting like secret governments, unaccountable to anyone."

Geneva showed you how intelligence agencies operate - the next decade would show you the full scope.`,
            image: "geneva_cia",
            imagePrompt: "Geneva Switzerland, CIA cover operations, diplomatic intelligence, young officer growing disillusioned",
            sources: ["Snowden interviews about Geneva", "CIA operations descriptions"],
            choices: [
                {
                    text: "Continue to NSA discoveries",
                    nextScene: "intro",
                    progressIncrease: 15
                },
                {
                    text: "Examine moral crisis",
                    nextScene: "moral_crisis",
                    progressIncrease: 20
                },
                {
                    text: "See internal reporting options",
                    nextScene: "internal_reporting",
                    progressIncrease: 15
                }
            ],
            educationalNote: "Snowden's Geneva experience first exposed him to the ethical compromises required by intelligence work."
        },

        // Detailed Surveillance Programs
        xkeyscore_program: {
            text: `XKEYSCORE - SEARCHING THE INTERNET

The program that lets NSA search anyone's digital life:

🔍 XKEYSCORE CAPABILITIES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Search anyone's emails, browsing history, chats
• No warrant required for queries
• Real-time monitoring capabilities
• Three-day rolling buffer of all internet traffic
• Analysts can query by name, email, IP, keywords
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 NSA TRAINING SLIDE:
"I can query anything. Emails, chats, Facebook, VPN connections, call records, any target, any time, no warrant, no court, no oversight."

🌍 GLOBAL REACH:
• 150+ collection sites worldwide
• 700 servers across the globe
• Access to data from Five Eyes partners
• Fiber optic cable interception points

⚠️ THE ABUSE POTENTIAL:
Analysts called it "the Google of the NSA." Anyone with access could look up any American without oversight.

The Fourth Amendment requires warrants based on probable cause. XKeyscore ignores this completely.`,
            image: "xkeyscore",
            imagePrompt: "NSA XKeyscore interface, global surveillance map, internet data search, mass collection visualization",
            badges: ["truthSeeker"],
            sources: ["NSA training slides", "XKeyscore documents"],
            choices: [
                {
                    text: "Examine PRISM program",
                    nextScene: "prism_details",
                    progressIncrease: 25
                },
                {
                    text: "Look at Boundless Informant",
                    nextScene: "boundless_informant",
                    progressIncrease: 20
                },
                {
                    text: "Document all programs for leak",
                    nextScene: "document_collection_expansion",
                    progressIncrease: 30
                }
            ],
            educationalNote: "XKeyscore allowed NSA analysts to search virtually any internet activity without prior authorization."
        },

        prism_details: {
            text: `PRISM - DIRECT ACCESS TO TECH GIANTS

The program that taps into Silicon Valley:

🏢 PARTICIPATING COMPANIES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Microsoft (joined 2007)
• Yahoo (2008)
• Google (2009)
• Facebook (2009)
• PalTalk (2009)
• YouTube (2010)
• Skype (2011)
• AOL (2011)
• Apple (2012)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 DATA COLLECTED:
• Email content and metadata
• Search queries
• File transfers
• Video chats
• Photos and stored data
• Social networking details

💰 THE ARRANGEMENT:
Companies receive classified orders under Section 702 of FISA. They must comply and cannot reveal the orders exist.

🎯 THE DEBATE:
Companies claim NSA doesn't have "direct access" - they provide data in response to specific requests. Snowden documents suggest deeper integration.

Either way, your private data is accessible to the government.`,
            image: "prism_details",
            imagePrompt: "Tech company logos connected to NSA, PRISM program diagram, Silicon Valley surveillance, data collection",
            sources: ["PRISM slides", "Section 702 FISA documentation"],
            choices: [
                {
                    text: "See how companies responded",
                    nextScene: "tech_company_response",
                    progressIncrease: 25
                },
                {
                    text: "Examine Upstream collection",
                    nextScene: "upstream_collection",
                    progressIncrease: 25
                },
                {
                    text: "Prepare to leak this",
                    nextScene: "decision_to_leak",
                    progressIncrease: 35
                }
            ],
            educationalNote: "PRISM gave NSA access to user data from nine major tech companies, though the extent of cooperation remains debated."
        },

        upstream_collection: {
            text: `UPSTREAM - TAPPING THE INTERNET'S BACKBONE

NSA intercepts data directly from fiber optic cables:

🌐 UPSTREAM COLLECTION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Taps undersea fiber optic cables
• Intercepts data as it travels
• No company cooperation needed
• Captures virtually all internet traffic
• Codenamed FAIRVIEW, BLARNEY, others
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 HOW IT WORKS:
Internet traffic flows through major cables and switching points. NSA has agreements with telecom companies to install splitters that copy all data passing through.

🇬🇧 UK PARTNERSHIP - TEMPORA:
Britain's GCHQ runs even larger cable-tapping operation:
• 200+ fiber optic cables tapped
• 21+ petabytes processed daily
• Shared with NSA through Five Eyes

🎯 THE SCALE:
"We are not just collecting metadata. We are collecting content. Everything."

Between PRISM and Upstream, virtually all internet communication is accessible to NSA.`,
            image: "upstream_collection",
            imagePrompt: "Undersea fiber optic cables, internet backbone tapping, global data interception, network infrastructure surveillance",
            sources: ["Upstream collection documents", "TEMPORA slides"],
            choices: [
                {
                    text: "Examine Five Eyes alliance",
                    nextScene: "five_eyes",
                    progressIncrease: 25
                },
                {
                    text: "See Boundless Informant statistics",
                    nextScene: "boundless_informant",
                    progressIncrease: 25
                },
                {
                    text: "Prepare the leak",
                    nextScene: "decision_to_leak",
                    progressIncrease: 35
                }
            ],
            educationalNote: "Upstream collection captures internet data directly from the cables that carry global communications."
        },

        boundless_informant: {
            text: `BOUNDLESS INFORMANT - THE SURVEILLANCE STATISTICS

NSA's tool that counts every piece of data collected:

📊 GLOBAL COLLECTION (MARCH 2013):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• 97 billion intelligence pieces collected
• In one month alone
• From computers and networks worldwide
• 3 billion from U.S. systems alone
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🗺️ HEAT MAP:
Countries are color-coded by surveillance intensity:
• Green: Less surveillance
• Yellow: Moderate
• Orange: Heavy
• Red: Massive collection (Iran, Pakistan, Jordan)

📄 THE CONTRADICTION:
NSA Director Clapper told Congress the NSA doesn't collect data on millions of Americans.

Boundless Informant proves this was a lie. The numbers are staggering and include substantial U.S. data.

🎯 THE SIGNIFICANCE:
"This wasn't about targeted terrorism surveillance. This was about collecting everything from everyone, everywhere."

The sheer scale of collection makes targeted oversight impossible.`,
            image: "boundless_informant",
            imagePrompt: "Global surveillance heat map, data collection statistics, billions of records, NSA collection scope",
            badges: ["truthSeeker"],
            sources: ["Boundless Informant documents", "NSA statistics"],
            choices: [
                {
                    text: "Expose Clapper's lies to Congress",
                    nextScene: "clapper_testimony",
                    progressIncrease: 30
                },
                {
                    text: "Document for journalists",
                    nextScene: "document_collection_expansion",
                    progressIncrease: 25
                },
                {
                    text: "Proceed with leak",
                    nextScene: "decision_to_leak",
                    progressIncrease: 35
                }
            ],
            educationalNote: "Boundless Informant revealed the NSA collected nearly 100 billion pieces of intelligence in a single month."
        },

        five_eyes: {
            text: `THE FIVE EYES ALLIANCE

The most powerful intelligence partnership in history:

🌍 FIVE EYES MEMBERS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• United States (NSA)
• United Kingdom (GCHQ)
• Canada (CSEC)
• Australia (ASD)
• New Zealand (GCSB)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 THE ARRANGEMENT:
• Complete intelligence sharing
• Each country spies on others' citizens
• Data shared to avoid domestic restrictions
• UK can spy on Americans, share with NSA
• Joint infrastructure and operations

🎯 LOOPHOLE EXPLOITATION:
If NSA can't legally spy on Americans directly, GCHQ can do it and share the data.

🇬🇧 TEMPORA:
Britain's GCHQ operates even larger cable-tapping:
• 200+ cables tapped
• 600 million "telephone events" daily
• 21 petabytes of data daily
• All shared with NSA

The alliance effectively creates a global surveillance network with no single point of accountability.`,
            image: "five_eyes",
            imagePrompt: "Five Eyes alliance flags, global intelligence network, international surveillance cooperation, shared spying",
            sources: ["Five Eyes documents", "GCHQ Tempora slides"],
            choices: [
                {
                    text: "See foreign ally surveillance",
                    nextScene: "foreign_surveillance_first",
                    progressIncrease: 30
                },
                {
                    text: "Document for exposure",
                    nextScene: "document_collection_expansion",
                    progressIncrease: 25
                },
                {
                    text: "Prepare the leak",
                    nextScene: "decision_to_leak",
                    progressIncrease: 35
                }
            ],
            educationalNote: "The Five Eyes alliance allows members to share surveillance and potentially bypass domestic legal restrictions."
        },

        // Clapper Testimony
        clapper_testimony: {
            text: `CLAPPER'S "LEAST UNTRUTHFUL" LIE

March 12, 2013 - Senate Intelligence Committee

Director of National Intelligence James Clapper testifies under oath:

🏛️ THE EXCHANGE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SENATOR WYDEN: "Does the NSA collect any type
of data at all on millions of Americans?"

CLAPPER: "No sir... not wittingly."
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 THE REALITY:
At that moment, the NSA was collecting:
• Metadata on every American phone call
• Internet communications of millions
• Location data from cell phones
• Financial transaction records

⚠️ AFTER THE SNOWDEN LEAKS:
Clapper's excuse: "I responded in what I thought was the most truthful, or least untruthful, manner."

⚖️ NO CONSEQUENCES:
Despite lying under oath to Congress:
• No perjury charges
• No resignation demanded
• Continued as DNI until 2017
• Now employed as TV commentator

When intelligence chiefs can lie to Congress without consequence, who provides oversight?`,
            image: "clapper_testimony",
            imagePrompt: "James Clapper congressional testimony, Senate hearing, intelligence oversight, lie under oath",
            badges: ["truthSeeker"],
            sources: ["Senate testimony transcript", "Clapper interviews"],
            choices: [
                {
                    text: "This must be exposed",
                    nextScene: "decision_to_leak",
                    progressIncrease: 40
                },
                {
                    text: "Examine oversight failures",
                    nextScene: "oversight_failure",
                    progressIncrease: 30
                },
                {
                    text: "Document everything",
                    nextScene: "document_collection_expansion",
                    progressIncrease: 25
                }
            ],
            educationalNote: "Clapper later admitted his answer was 'clearly erroneous' but faced no legal consequences."
        },

        oversight_failure: {
            text: `THE FAILURE OF OVERSIGHT

Why didn't existing checks stop illegal surveillance?

🏛️ THEORETICAL OVERSIGHT:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Congressional intelligence committees
• FISA Court approval
• Internal NSA compliance
• Inspector General reviews
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 REALITY OF OVERSIGHT:
• Congress: Briefed but didn't object
• FISA Court: Approved 99.97% of requests
• Internal compliance: Reported to itself
• IG: Limited resources and access

🎯 FISA COURT PROBLEMS:
• Meets in secret
• Only hears government side
• No adversarial process
• Judges selected by Chief Justice alone
• Created secret body of surveillance law

📋 CONGRESSIONAL FAILURE:
• Briefed on programs, didn't stop them
• Asked questions, accepted non-answers
• Some members didn't read briefings
• Secrecy prevents informed debate

"The oversight mechanisms exist to create the appearance of accountability, not actual accountability."`,
            image: "oversight_failure",
            imagePrompt: "Broken oversight mechanisms, FISA court, congressional failure, surveillance state unchecked",
            sources: ["Church Committee comparison", "FISA Court statistics"],
            choices: [
                {
                    text: "Internal reporting is useless",
                    nextScene: "internal_reporting",
                    progressIncrease: 20
                },
                {
                    text: "The public must know",
                    nextScene: "decision_to_leak",
                    progressIncrease: 40
                },
                {
                    text: "Examine FISA Court",
                    nextScene: "fisa_court",
                    progressIncrease: 25
                }
            ],
            educationalNote: "Post-Snowden analysis revealed systematic failures in every layer of surveillance oversight."
        },

        fisa_court: {
            text: `THE SECRET FISA COURT

The court that approves surveillance in secret:

🏛️ FISA COURT STRUCTURE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• 11 federal judges (selected by Chief Justice)
• Meets in secret
• Only government presents cases
• No public advocates until 2015
• Decisions classified
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 APPROVAL RATES:
• 1979-2012: 33,942 requests
• Approved: 33,900+
• Rejected: Under 12
• Approval rate: 99.97%

📄 SECRET LAW:
FISA Court opinions created an entire body of secret law:
• Reinterpreted Fourth Amendment
• Approved mass collection
• Expanded "relevant" to mean "everything"
• No one outside could challenge interpretations

🎯 THE PROBLEM:
"A court that never says no isn't providing oversight - it's providing cover."

Snowden documents revealed FISA Court opinions that dramatically expanded surveillance authority - all in secret.`,
            image: "fisa_court",
            imagePrompt: "FISA Court chamber, secret judicial proceedings, surveillance approval, classified legal decisions",
            sources: ["FISA Court declassified opinions", "Court statistics"],
            choices: [
                {
                    text: "This secret law must be exposed",
                    nextScene: "decision_to_leak",
                    progressIncrease: 40
                },
                {
                    text: "See oversight failures",
                    nextScene: "oversight_failure",
                    progressIncrease: 25
                },
                {
                    text: "Continue documenting",
                    nextScene: "document_collection_expansion",
                    progressIncrease: 30
                }
            ],
            educationalNote: "The FISA Court approved 99.97% of government surveillance requests before Snowden's revelations."
        },

        // Other Whistleblowers
        other_whistleblowers: {
            text: `OTHER NSA WHISTLEBLOWERS

You weren't the first to try exposing NSA abuse:

👤 WILLIAM BINNEY (2001):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• 30-year NSA veteran
• Resigned over domestic surveillance
• FBI raided his home in 2007
• Lost security clearance, not prosecuted
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 THOMAS DRAKE (2010):
• NSA senior executive
• Reported waste and abuse internally
• Charged under Espionage Act
• Charges eventually dropped to misdemeanor

👤 MARK KLEIN (2006):
• AT&T technician
• Exposed NSA splitter in San Francisco
• Revealed domestic internet monitoring
• Never charged (protected by whistleblower laws)

🎯 THE PATTERN:
Those who went through "proper channels" were punished or ignored. The system protects itself.

"I saw what happened to people who tried to work within the system. It destroyed them and changed nothing."`,
            image: "other_whistleblowers",
            imagePrompt: "NSA whistleblowers Binney Drake Klein, persecution of truth-tellers, courage under pressure",
            sources: ["Whistleblower case files", "Documentary evidence"],
            choices: [
                {
                    text: "Try internal channels anyway",
                    nextScene: "internal_reporting",
                    progressIncrease: 15
                },
                {
                    text: "Go directly to journalists",
                    nextScene: "decision_to_leak",
                    progressIncrease: 35
                },
                {
                    text: "Learn from their mistakes",
                    nextScene: "escape_planning",
                    progressIncrease: 25
                }
            ],
            educationalNote: "Multiple NSA employees tried to expose surveillance abuses before Snowden, facing prosecution or persecution."
        },

        espionage_act: {
            text: `THE ESPIONAGE ACT THREAT

The law used to prosecute whistleblowers:

📜 ESPIONAGE ACT OF 1917:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Passed during World War I
• Designed to punish spies
• No public interest defense allowed
• No distinction between whistleblowers and spies
• Used 11 times before Obama; 8 times by Obama
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚖️ WHY IT'S UNJUST FOR WHISTLEBLOWERS:
• Can't argue disclosure was in public interest
• Can't explain motivation to jury
• Can't discuss what was revealed
• Essentially guarantees conviction

📋 YOUR CHARGES:
• Theft of government property
• Unauthorized communication of defense information
• Willful communication of classified intelligence
• Maximum: 30+ years in prison

💭 YOUR REASONING:
"I would return to the U.S. for trial if I could present a defense to a jury of my peers... but under the Espionage Act, I wouldn't be allowed to explain why I did what I did."

The law makes a fair trial impossible.`,
            image: "espionage_act",
            imagePrompt: "Espionage Act document, whistleblower prosecution, unfair legal framework, justice denied",
            sources: ["Espionage Act text", "Prosecution history"],
            choices: [
                {
                    text: "Accept the risk - proceed with leak",
                    nextScene: "decision_to_leak",
                    progressIncrease: 40
                },
                {
                    text: "Plan escape first",
                    nextScene: "escape_planning",
                    progressIncrease: 30
                },
                {
                    text: "Consider consequences again",
                    nextScene: "consequence_analysis",
                    progressIncrease: 20
                }
            ],
            educationalNote: "The Espionage Act has been criticized for not allowing whistleblowers to mount a public interest defense."
        },

        // Hero or Traitor Debate
        hero_or_traitor: {
            text: `HERO OR TRAITOR?

The ongoing debate about your actions:

🦸 HERO ARGUMENTS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Exposed unconstitutional surveillance
• Sparked essential public debate
• Led to privacy reforms
• Protected by First Amendment principles
• Followed conscience over career
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🏴 TRAITOR ARGUMENTS:
• Violated security oaths
• Fled to adversary nations
• May have compromised operations
• Harmed diplomatic relationships
• Didn't use proper channels

📊 PUBLIC OPINION:
Polls show Americans divided:
• 30-40%: Hero/whistleblower
• 30-40%: Traitor/criminal
• 20-30%: Uncertain

💭 YOUR VIEW:
"I don't care what happens to me. What I care about is what happens to my country and the values we're supposed to represent."

History will judge. But the surveillance debate couldn't have happened without the leak.`,
            image: "hero_traitor_debate",
            imagePrompt: "Public opinion divided, Snowden debate, hero or traitor banners, American controversy",
            sources: ["Public polling data", "Op-eds and analysis"],
            choices: [
                {
                    text: "Examine lasting impact",
                    nextScene: "lasting_impact",
                    progressIncrease: 35
                },
                {
                    text: "See life in exile",
                    nextScene: "russian_exile",
                    progressIncrease: 30
                },
                {
                    text: "Review the reforms",
                    nextScene: "reform_efforts",
                    progressIncrease: 30
                }
            ],
            educationalNote: "The debate over whether Snowden is a hero or traitor remains unresolved and politically divisive."
        },

        // NSA Leadership Response
        nsa_director_defense: {
            text: `NSA DIRECTOR'S DEFENSE

General Keith Alexander defends surveillance programs:

🎖️ GENERAL ALEXANDER'S CLAIMS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Programs prevented 54 terrorist attacks
• All legal under FISA
• Congressionally authorized
• Court supervised
• Minimization protects Americans
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 THE 54 ATTACKS CLAIM:
Later analysis:
• Only 1-2 cases showed NSA contribution
• Most involved traditional investigation
• Bulk collection rarely useful
• Claims largely debunked

🎯 THE ARGUMENT:
"If we could have caught the 9/11 hijackers, wouldn't we want to? These programs give us that capability."

⚠️ THE COUNTER-ARGUMENT:
• 9/11 failure was about not sharing information, not collection
• Mass collection creates haystack problem
• Targeted surveillance is more effective
• Constitutional rights shouldn't depend on efficiency

The debate between security and liberty is real - but was the public ever given a chance to decide?`,
            image: "nsa_director_defense",
            imagePrompt: "General Keith Alexander testifying, NSA headquarters, surveillance defense, national security arguments",
            sources: ["Congressional testimony", "NSA statements"],
            choices: [
                {
                    text: "Examine government response",
                    nextScene: "government_response",
                    progressIncrease: 25
                },
                {
                    text: "See reform efforts",
                    nextScene: "reform_efforts",
                    progressIncrease: 30
                },
                {
                    text: "Review lasting impact",
                    nextScene: "lasting_impact",
                    progressIncrease: 35
                }
            ],
            educationalNote: "The NSA's claim of preventing 54 terrorist attacks was later found to be significantly overstated."
        },

        // Obama Administration Response
        obama_response: {
            text: `OBAMA ADMINISTRATION RESPONSE

The President responds to the revelations:

🏛️ OBAMA'S POSITION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Programs are legal and necessary
• Proper oversight exists
• "Nobody is listening to your phone calls"
• Welcomes "debate" (caused by unauthorized leak)
• Will not pardon Snowden
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 THE IRONY:
Senator Obama (2007): "No more illegal wiretapping of American citizens."
President Obama (2013): Expanded surveillance beyond Bush-era programs.

🔄 REFORMS ANNOUNCED:
• Review of surveillance programs
• Transparency improvements
• FISA Court advocate (limited)
• Eventually: USA FREEDOM Act

💭 SNOWDEN'S RESPONSE:
"I acted on my belief that the NSA's mass surveillance programs would not withstand a constitutional challenge... I was vindicated when a federal court ruled the program was likely unconstitutional."

📺 LASTING IMAGE:
Obama met with tech CEOs furious about PRISM revelations. American tech faced international trust crisis.`,
            image: "obama_response",
            imagePrompt: "President Obama press conference, surveillance defense, tech CEO meeting, privacy debate",
            sources: ["Obama statements", "Press conference transcripts"],
            choices: [
                {
                    text: "See Congressional response",
                    nextScene: "congressional_response",
                    progressIncrease: 25
                },
                {
                    text: "Examine reforms enacted",
                    nextScene: "reform_efforts",
                    progressIncrease: 30
                },
                {
                    text: "Review lasting legacy",
                    nextScene: "lasting_impact",
                    progressIncrease: 35
                }
            ],
            educationalNote: "Obama expanded surveillance programs he criticized as a Senator, then defended them after Snowden's leaks."
        },

        // Journalism Impact
        journalism_impact: {
            text: `IMPACT ON JOURNALISM

The Snowden story transformed national security journalism:

📰 JOURNALISM INNOVATIONS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Encryption became standard for sources
• SecureDrop systems deployed
• International collaboration increased
• Source protection prioritized
• Document verification improved
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🏆 AWARDS:
• Pulitzer Prize for Public Service (Guardian/Post)
• George Polk Award
• Citizenfour won Academy Award
• Countless journalism prizes

📱 TOOLS ADOPTED:
• Signal messaging app
• Encrypted email (ProtonMail, etc.)
• Secure document submission systems
• Air-gapped computers

🌍 INTERNATIONAL PUBLISHING:
Documents published worldwide through:
• The Intercept (Greenwald's site)
• Der Spiegel
• Le Monde
• El País
• And many others

The story became a model for high-risk national security journalism.`,
            image: "journalism_impact",
            imagePrompt: "Newsroom with encrypted communications, Pulitzer Prize, investigative journalism, source protection",
            sources: ["Journalism awards", "Press freedom reports"],
            choices: [
                {
                    text: "See tech industry changes",
                    nextScene: "tech_company_response",
                    progressIncrease: 25
                },
                {
                    text: "Examine lasting impact",
                    nextScene: "lasting_impact",
                    progressIncrease: 35
                },
                {
                    text: "Review privacy tools",
                    nextScene: "privacy_tools_emergence",
                    progressIncrease: 30
                }
            ],
            educationalNote: "The Snowden story won the Pulitzer Prize for Public Service and transformed how journalists protect sources."
        },

        // Privacy Tools
        privacy_tools_emergence: {
            text: `PRIVACY TOOLS THAT EMERGED

Post-Snowden, privacy technology exploded:

🔐 SECURE COMMUNICATIONS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Signal: End-to-end encrypted messaging
• WhatsApp: Adopted Signal protocol
• ProtonMail: Encrypted email (based in Switzerland)
• Tor: Anonymous browsing network
• VPN services: Mainstream adoption
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📱 MAINSTREAM ADOPTION:
• Apple: Default iPhone encryption
• Android: Full device encryption
• HTTPS: Now standard across web
• Let's Encrypt: Free SSL certificates

📊 USAGE GROWTH:
• Tor users increased 4x after revelations
• VPN market grew exponentially
• Encrypted messaging became default
• Privacy became marketing feature

🎯 SNOWDEN'S IMPACT:
"Before June 2013, you had to be paranoid to use encryption. Now encryption is everywhere, and that's directly because of these revelations."

Your actions made privacy protection mainstream.`,
            image: "privacy_tools",
            imagePrompt: "Encryption apps, Signal logo, privacy technology, secure communications tools, post-Snowden security",
            sources: ["Adoption statistics", "Tech security announcements"],
            badges: ["truthSeeker"],
            choices: [
                {
                    text: "See tech company changes",
                    nextScene: "tech_company_response",
                    progressIncrease: 25
                },
                {
                    text: "Examine the encryption debate",
                    nextScene: "encryption_debate",
                    progressIncrease: 30
                },
                {
                    text: "Review lasting impact",
                    nextScene: "lasting_impact",
                    progressIncrease: 40
                }
            ],
            educationalNote: "Privacy tools that were once niche became mainstream following the Snowden revelations."
        },

        encryption_debate: {
            text: `THE ENCRYPTION DEBATE

Your revelations sparked ongoing conflict over encryption:

🔐 THE TENSION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
LAW ENFORCEMENT: "Going dark" - can't access
encrypted communications even with warrants

PRIVACY ADVOCATES: Strong encryption protects
everyone from criminals, foreign governments,
and domestic surveillance alike
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 FBI DEMANDS:
• Backdoors in encryption
• "Exceptional access" for law enforcement
• Weakening of secure systems

🎯 SECURITY EXPERT RESPONSE:
Backdoors for law enforcement are backdoors for everyone:
• No such thing as secure backdoor
• Foreign governments would exploit
• Criminals would find and use
• Undermines all security

📱 APPLE VS. FBI (2016):
FBI demanded Apple unlock San Bernardino shooter's phone. Apple refused, saying it would compromise all iPhone security.

The debate you started continues today.`,
            image: "encryption_debate",
            imagePrompt: "Encryption vs law enforcement, Apple FBI standoff, privacy versus security debate, crypto wars",
            sources: ["Going Dark debate", "Apple v FBI case"],
            choices: [
                {
                    text: "See lasting privacy impact",
                    nextScene: "lasting_impact",
                    progressIncrease: 40
                },
                {
                    text: "Examine ongoing debates",
                    nextScene: "hero_or_traitor",
                    progressIncrease: 30
                },
                {
                    text: "Complete investigation",
                    nextScene: "victory",
                    progressIncrease: 50
                }
            ],
            educationalNote: "The encryption debate Snowden sparked continues, with law enforcement seeking backdoors that security experts say would compromise everyone."
        },

        // Pardon Debate
        pardon_debate: {
            text: `THE PARDON DEBATE

Should Edward Snowden be pardoned?

✅ ARGUMENTS FOR PARDON:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Exposed unconstitutional programs
• Sparked necessary reforms
• Public interest outweighed harm
• Courts ruled some programs illegal
• Other countries treat him as refugee
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

❌ ARGUMENTS AGAINST:
• Violated oath and security agreements
• Fled to adversary nations
• Released classified information
• Should face justice like anyone else
• Sets dangerous precedent

📊 POLITICAL POSITIONS:
• Trump (2020): Considering pardon, then reversed
• Biden: No pardon
• Civil liberties groups: Support pardon
• Intelligence community: Oppose

💭 SNOWDEN'S POSITION:
"I would like to return home... I would accept a trial in which I was allowed to make a public interest defense."

Under current law, he couldn't explain his motivations to a jury.`,
            image: "pardon_debate",
            imagePrompt: "Presidential pardon document, Snowden portrait, political debate, justice scales",
            sources: ["Political statements", "Legal analysis"],
            choices: [
                {
                    text: "See life in exile",
                    nextScene: "russian_exile",
                    progressIncrease: 30
                },
                {
                    text: "Examine lasting impact",
                    nextScene: "lasting_impact",
                    progressIncrease: 40
                },
                {
                    text: "Complete investigation",
                    nextScene: "victory",
                    progressIncrease: 50
                }
            ],
            educationalNote: "The debate over pardoning Snowden reflects broader disagreements about whistleblowing, national security, and civil liberties."
        },

        // Lindsay Mills
        lindsay_mills: {
            text: `LINDSAY MILLS - LOVE AND SACRIFICE

The woman Snowden left behind - and who followed him:

💑 THE RELATIONSHIP:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Met in 2009 in Maryland
• Moved to Hawaii together 2012
• She knew nothing of his plans
• Woke up to news he'd fled to Hong Kong
• Devastated, FBI interrogated her
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 SNOWDEN'S LETTER (left behind):
"I will always love you. I am sorry I couldn't tell you... I knew you'd try to stop me."

🇷🇺 REUNION IN MOSCOW:
• She joined him in Russia (2014)
• They married in 2017
• Son born 2020
• Living in exile together

💭 LINDSAY'S PERSPECTIVE:
Initially angry and confused. Over time, came to understand his choice.

"He didn't make this decision lightly. He knew he was giving up everything - including us."

The personal cost of conscience.`,
            image: "lindsay_mills",
            imagePrompt: "Edward Snowden and Lindsay Mills, love story, sacrifice for principles, exile reunion",
            sources: ["Lindsay Mills interviews", "Citizenfour documentary"],
            choices: [
                {
                    text: "See life in exile",
                    nextScene: "russian_exile",
                    progressIncrease: 30
                },
                {
                    text: "Examine lasting impact",
                    nextScene: "lasting_impact",
                    progressIncrease: 35
                },
                {
                    text: "Complete investigation",
                    nextScene: "victory",
                    progressIncrease: 50
                }
            ],
            educationalNote: "Lindsay Mills joined Snowden in Russia after he leaked, and they later married and had a child."
        },

        // Document Selection
        document_selection_ethics: {
            text: `THE ETHICS OF DOCUMENT SELECTION

How did you decide what to leak?

📋 SELECTION CRITERIA:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INCLUDED:
• Programs violating American rights
• Evidence of lying to Congress
• Unconstitutional surveillance methods
• Secret law interpretations
• Proof of mass collection

EXCLUDED:
• Individual names and identities
• Specific operational details
• Information that could cause physical harm
• Personal data of innocent people
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎯 THE APPROACH:
"I didn't want to harm anyone. I wanted to expose programs, not people."

📰 JOURNALIST ROLE:
Documents given to journalists to verify and redact. Responsible disclosure, not data dump.

⚖️ CONTRAST WITH MANNING:
Chelsea Manning released bulk documents. Snowden carefully curated for public interest.

"I took only what was necessary to prove the claims I was making."`,
            image: "document_ethics",
            imagePrompt: "Document selection process, ethical whistleblowing, redaction, responsible disclosure",
            sources: ["Snowden interviews", "Journalism ethics analysis"],
            choices: [
                {
                    text: "Proceed with selected documents",
                    nextScene: "greenwald_contact",
                    progressIncrease: 30
                },
                {
                    text: "Continue careful documentation",
                    nextScene: "document_collection_expansion",
                    progressIncrease: 25
                },
                {
                    text: "Contact multiple journalists",
                    nextScene: "multi_journalist_strategy",
                    progressIncrease: 35
                }
            ],
            educationalNote: "Snowden's careful document selection distinguished his leak from bulk data dumps, though critics dispute his self-assessment."
        }
    }
};

// Make it available globally
window.SnowdenRevelationsStoryExpanded = SnowdenRevelationsStoryExpanded;

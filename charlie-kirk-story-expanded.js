const CharlieKirkStoryExpanded = {
    sealed: false, // Set to true to seal this case
    releaseDate: null, // Optional: "Coming Soon" or specific date
    scenes: {
        intro: {
            text: `THE CLASSIFIED FILES: CHARLIE KIRK ASSASSINATION

            SEPTEMBER 12, 2025 - 6:47 AM

You are investigative journalist Alex Mercer, senior correspondent for a major news network. You've covered political stories for fifteen years, but nothing prepared you for the call that came at 3 AM.

Charlie Kirk, founder of Turning Point USA and one of the most influential figures in the MAGA movement, was assassinated yesterday at Utah Valley University. Shot through the neck by a sniper positioned 142 yards away while speaking at a campus debate with 3,000 attendees.

Your editor's voice still echoes: "The suspect surrendered last night. A 22-year-old named Tyler Robinson from Washington, Utah. But Alex... something doesn't add up. We're getting conflicting reports about everything - his background, his motive, even basic timeline details."

On your desk: leaked FBI preliminary reports, witness statements, and a thumb drive labeled "UVU Security Footage - UNREDACTED."

Your secure phone buzzes. Unknown number. You answer.

"Mr. Mercer? I was there yesterday. In the crowd. I saw things that aren't in the news. The official story... it's wrong. Meet me at the federal building. Bring everything you have."

The line goes dead.

CRITICAL MOMENT: A major political assassination. A suspect in custody. And sources saying the official narrative is incomplete.`,
            image: "kirk_newsroom_investigation",
            imagePrompt: "Late night newsroom with investigative journalist examining classified documents about political assassination, dramatic lighting",
            sources: ["FBI Preliminary Reports September 2025", "Utah Law Enforcement Press Releases", "Witness Statements"],
            choices: [
                {
                    text: "Review the official timeline and crime scene evidence first",
                    nextScene: "crime_scene_analysis",
                    progressIncrease: 10,
                    factual: true,
                    evidence: true
                },
                {
                    text: "Research Tyler Robinson's background and possible motives",
                    nextScene: "suspect_background",
                    progressIncrease: 12,
                    factual: true,
                    evidence: true
                },
                {
                    text: "Study Charlie Kirk and Turning Point USA's history",
                    nextScene: "tpusa_history",
                    progressIncrease: 8,
                    factual: true
                },
                {
                    text: "Meet the anonymous witness at the federal building",
                    nextScene: "witness_meeting",
                    progressIncrease: 15,
                    evidence: true
                },
                {
                    text: "Test your knowledge of the case basics",
                    nextScene: "knowledge_assessment",
                    progressIncrease: 5,
                    quizMode: true
                },
                {
                    text: "Piece together the fragmented security footage",
                    nextScene: "footage_reconstruction",
                    progressIncrease: 15,
                    evidence: true,
                    miniGame: {
                        type: "document_reconstruction",
                        title: "Security Footage Analysis",
                        description: "Reconstruct the timeline from fragmented security camera footage to understand what really happened."
                    }
                }
            ],
            educationalNote: "This case explores the assassination of Charlie Kirk on September 10, 2025, combining verified facts with a fictional investigative narrative."
        },

        footage_reconstruction: {
            text: `SECURITY FOOTAGE ANALYSIS COMPLETE

            SEPTEMBER 12, 2025 - 7:30 AM

Your reconstruction of the UVU security footage reveals the critical timeline:

VIDEO TIMELINE - RECONSTRUCTED
=====================================
8:29 AM - Gray Dodge Challenger enters campus
         Driver: Male, maroon shirt, light shorts

10:47 AM - Same individual seen near science building
          Now wearing dark clothing
          Carrying long duffel bag

12:19 PM - Movement detected on rooftop
          142 yards from debate stage

12:23 PM - SHOT FIRED
          Kirk struck in neck
          Immediate chaos in crowd

12:24 PM - Figure descends from roof
          Abandons weapon in wooded area

12:31 PM - Vehicle exits campus
          Utah County Sheriff notified
=====================================

The footage shows meticulous planning. The clothing change, the pre-positioned location, the escape route - this was not impulsive.

Your FBI source texts: "Check the weapon. Mauser 98, .30-06 caliber. Not exactly common for a 22-year-old electrician. And the bullet casings... they had inscriptions."

EVIDENCE DISCOVERED: The shooter spent nearly 4 hours on campus before the shooting.`,
            image: "kirk_surveillance_footage",
            imagePrompt: "Multiple security camera feeds showing timeline of campus shooting, investigative analysis screen",
            sources: ["UVU Campus Security", "FBI Timeline Report", "Governor Cox Press Conference"],
            miniGameData: {
                type: "document_reconstruction",
                gridColumns: 3,
                gridRows: 3,
                evidenceReward: "Complete Security Timeline",
                progressReward: 15,
                fragments: [
                    { position: 0, text: "8:29 AM", type: "header" },
                    { position: 1, text: "Campus Entry", type: "body" },
                    { position: 2, text: "Gray Challenger", type: "body" },
                    { position: 3, text: "10:47 AM", type: "header" },
                    { position: 4, text: "Clothing Change", type: "body" },
                    { position: 5, text: "Duffel Bag", type: "body" },
                    { position: 6, text: "12:23 PM", type: "header" },
                    { position: 7, text: "SHOT FIRED", type: "stamp" },
                    { position: 8, text: "142 Yards", type: "footer" }
                ]
            },
            choices: [
                {
                    text: "Investigate the weapon and inscribed bullet casings",
                    nextScene: "weapon_analysis",
                    progressIncrease: 15,
                    evidence: true,
                    factual: true
                },
                {
                    text: "Trace the suspect's movements before the shooting",
                    nextScene: "suspect_movements",
                    progressIncrease: 12,
                    evidence: true
                },
                {
                    text: "Interview witnesses who saw the clothing change",
                    nextScene: "witness_interviews",
                    progressIncrease: 14,
                    evidence: true
                }
            ],
            educationalNote: "The timeline was reconstructed from actual UVU security footage and official law enforcement statements."
        },

        crime_scene_analysis: {
            text: `THE CRIME SCENE - UTAH VALLEY UNIVERSITY

            SEPTEMBER 12, 2025 - 8:00 AM

You've obtained the FBI's preliminary crime scene report. The details paint a chilling picture:

CRIME SCENE REPORT - CLASSIFIED
=====================================
Location: Utah Valley University, Orem, Utah
Event: Turning Point USA Campus Debate
Date: September 10, 2025
Time of Shooting: 12:23 PM MT

VICTIM: Charles James Kirk
- Age: 31 (DOB: October 14, 1993)
- Single gunshot wound to neck
- Pronounced deceased at scene
- Audience: Approximately 3,000 attendees

SHOOTER POSITION:
- Rooftop of adjacent building
- Distance: 142 yards (130 meters)
- Elevated position with clear line of sight
- Evidence recovered: Rifle, ammunition, towel

WEAPON: Mauser Model 98
- Caliber: .30-06
- Equipped with mounted scope
- Bolt-action rifle
- Serial number traced to family member
=====================================

A detective's handwritten note: "Single shot, 142 yards, moving target at podium. This required training or significant practice. Check shooter's background for military/hunting experience."

Your phone buzzes - Governor Spencer Cox is holding a press conference in one hour.`,
            image: "kirk_crime_scene_investigation",
            imagePrompt: "Aerial view of university campus crime scene with police tape, forensic markers, investigative atmosphere",
            sources: ["FBI Crime Scene Report", "Utah County Sheriff's Office", "Medical Examiner Preliminary Report"],
            choices: [
                {
                    text: "Analyze the shooter's marksmanship and preparation",
                    nextScene: "weapon_analysis",
                    progressIncrease: 15,
                    factual: true,
                    evidence: true
                },
                {
                    text: "Research the Mauser 98 rifle's origins",
                    nextScene: "rifle_origins",
                    progressIncrease: 12,
                    evidence: true
                },
                {
                    text: "Watch Governor Cox's press conference live",
                    nextScene: "governor_presser",
                    progressIncrease: 10,
                    factual: true
                },
                {
                    text: "Interview first responders at the scene",
                    nextScene: "first_responders",
                    progressIncrease: 14,
                    evidence: true
                }
            ],
            educationalNote: "These crime scene details come from official law enforcement releases and press conferences following the assassination."
        },

        suspect_background: {
            text: `SUSPECT PROFILE: TYLER JAMES ROBINSON

            SEPTEMBER 12, 2025 - 9:15 AM

You've compiled everything known about the suspect from FBI briefings and background checks:

SUSPECT PROFILE - CLASSIFIED
=====================================
Name: Tyler James Robinson
DOB: April 16, 2003 (Age 22)
Residence: Washington, Utah
Religion: LDS (Church of Jesus Christ of Latter-day Saints)
Criminal Record: None prior to arrest

EDUCATION:
- Pine View High School, St. George (2021)
- GPA: 4.0, high standardized test scores
- Utah State University (Fall 2021 - 1 semester)
- Received Presidential Scholarship (4-year merit)
- Dropped out after one semester
- Dixie Technical College (2022-2025)
- Electrical apprenticeship program
- Licensed apprentice electrician (2022)

FAMILY:
- Parents: Social worker mother, business owner father
- Two younger brothers
- Described as "close-knit" conservative family
- Family: "Diehard MAGA" Trump supporters

POLITICAL EVOLUTION:
- High school: Conservative, Trump supporter
- Post-2021: Gradual shift leftward
- 2024-2025: "Pro-gay and trans-rights oriented"
- Voter registration: No party affiliation
- No voting record in Washington County
=====================================

His grandmother told reporters: "Squeaky clean. I didn't even know he was at that event."

CRITICAL QUESTION: What happened after he left Utah State University?`,
            image: "kirk_suspect_profile",
            imagePrompt: "Investigation board with suspect profile, photos, timeline, background documents pinned and connected",
            sources: ["FBI Background Investigation", "Family Interviews", "School Records", "NBC News", "CNN"],
            choices: [
                {
                    text: "Investigate what happened during his Utah State semester",
                    nextScene: "utah_state_investigation",
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Research his political radicalization timeline",
                    nextScene: "radicalization_timeline",
                    progressIncrease: 15,
                    factual: true,
                    evidence: true
                },
                {
                    text: "Interview family members about his transformation",
                    nextScene: "family_interviews",
                    progressIncrease: 14,
                    evidence: true
                },
                {
                    text: "Examine his online presence and social media",
                    nextScene: "online_investigation",
                    progressIncrease: 16,
                    evidence: true
                },
                {
                    text: "Quiz: Test your knowledge of the suspect's background",
                    nextScene: "suspect_quiz",
                    progressIncrease: 8,
                    quizMode: true
                }
            ],
            educationalNote: "Robinson's background details come from FBI releases, family interviews, and investigative journalism from multiple outlets."
        },

        radicalization_timeline: {
            text: `THE POLITICAL TRANSFORMATION

            SEPTEMBER 12, 2025 - 11:30 AM

Your investigation into Robinson's political evolution reveals a dramatic shift:

RADICALIZATION TIMELINE
=====================================
2018-2020 (High School):
- "Diehard Trump" supporter like family
- Former classmate: "When I knew him and his family,
  they were like diehard Trump"
- No outward signs of extremism

Fall 2021 (Utah State):
- Arrived with Presidential Scholarship
- Pre-engineering major
- Left after one semester
- Took "leave of absence"
- Never returned to university

2022-2024 (Trade School):
- Enrolled at Dixie Technical College
- Electrical apprenticeship
- Obtained license
- Lived with roommate (transgender partner)

2024-2025 (Final Year):
- Mother: "More pro-gay and trans-rights oriented"
- Grew apart from family's conservative views
- Father relationship strained over politics
- Text to roommate: "Since trump got into office
  [my dad] has been pretty diehard maga"

September 2025 (Week Before Shooting):
- Planning began "just over a week" prior
- Confessed intent to roommate
- Obtained grandfather's rifle
=====================================

Governor Cox stated Robinson appeared to have "leftist ideology" and may have been influenced by "internet culture" after dropping out.

CRITICAL INSIGHT: Something happened between Fall 2021 and 2022 that changed everything.`,
            image: "kirk_timeline_investigation",
            imagePrompt: "Investigation timeline board showing political transformation with photos, dates, and connecting threads",
            sources: ["Governor Cox Press Conference", "Family Testimony", "Charging Documents", "NPR Investigation"],
            choices: [
                {
                    text: "Deep dive into his internet activity and influences",
                    nextScene: "internet_radicalization",
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Interview the transgender roommate/partner",
                    nextScene: "roommate_interview",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Investigate what happened at Utah State University",
                    nextScene: "utah_state_investigation",
                    progressIncrease: 15,
                    evidence: true
                },
                {
                    text: "Analyze the confession messages for motive clues",
                    nextScene: "confession_analysis",
                    progressIncrease: 16,
                    factual: true,
                    evidence: true
                }
            ],
            educationalNote: "The timeline of Robinson's political transformation was compiled from court documents and family interviews."
        },

        confession_analysis: {
            text: `THE CONFESSION MESSAGES

            SEPTEMBER 12, 2025 - 2:00 PM

You've obtained transcripts of Robinson's communications after the shooting:

CONFESSION MESSAGES - COURT EVIDENCE
=====================================
Recipient: Roommate/Partner (transgender individual)
Platform: Text messages
Time: Hours after shooting

MESSAGE 1:
"I had enough of his hatred. Some hate can't
be negotiated out."

MESSAGE 2:
"I've been planning this for just over a week."

MESSAGE 3 (to father after parents saw surveillance footage):
- Implied he planned to take his own life
- Parents convinced him to come home
- Eventually surrendered to authorities

ADDITIONAL EVIDENCE:
- Discord messages (under investigation)
- One message referenced: "Better also get rid of
  this manifesto and exact copy rifle I have lying around"
- Researchers note: "Performative" - referencing
  internet mass shooting culture
=====================================

Prosecutors stated Robinson was "increasingly concerned about gay and trans rights."

The specific "hatred" Robinson objected to remains unclear - Kirk's positions on multiple issues could qualify.

CRITICAL QUESTION: Was this targeted political assassination or personal grievance?`,
            image: "kirk_digital_evidence",
            imagePrompt: "Digital forensics screen showing encrypted messages, text transcripts, evidence analysis",
            sources: ["Utah Charging Documents", "PBS News", "CBS News Discord Report", "Prosecutor Statements"],
            choices: [
                {
                    text: "Research what specific Kirk statements may have triggered Robinson",
                    nextScene: "kirk_statements_analysis",
                    progressIncrease: 15,
                    factual: true,
                    evidence: true
                },
                {
                    text: "Investigate the 'manifesto' reference",
                    nextScene: "manifesto_investigation",
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Analyze the 'performative' mass shooting culture angle",
                    nextScene: "internet_culture_analysis",
                    progressIncrease: 14,
                    factual: true
                },
                {
                    text: "Interview prosecutors about their motive theory",
                    nextScene: "prosecutor_interview",
                    progressIncrease: 12,
                    factual: true
                }
            ],
            educationalNote: "These confession messages were released in court documents and confirmed by prosecutors."
        },

        weapon_analysis: {
            text: `THE WEAPON AND BULLET CASINGS

            SEPTEMBER 12, 2025 - 3:30 PM

The weapon analysis reveals disturbing details about the level of preparation:

WEAPON ANALYSIS - FBI REPORT
=====================================
FIREARM:
- Make: Mauser Model 98
- Caliber: .30-06 Springfield
- Type: Bolt-action rifle
- Accessory: Mounted telescopic scope
- Origin: Family heirloom (grandfather's)
- Condition: Well-maintained

BULLET CASING INSCRIPTIONS:
Found near shooter's position:

Casing #1: "Hey Facist! Catch!"
Casing #2: "Oh bella ciao, bella ciao, bella ciao,
           ciao ciao"

ANALYSIS:
- "Bella Ciao" - Italian anti-fascist resistance song
- Inscriptions suggest ideological motivation
- Reference to "fascism" implies political targeting
- Style consistent with online extremist culture
=====================================

Forensic expert note: "The inscriptions on ammunition are highly unusual. This level of preparation indicates premeditation and a desire to make a statement."

DNA on a towel wrapped around the rifle matched Tyler Robinson.

EVIDENCE CATALOGUED: Weapon shows clear anti-fascist messaging.`,
            image: "kirk_forensic_evidence",
            imagePrompt: "Forensic lab analysis of rifle and bullet casings with inscriptions visible under examination",
            sources: ["FBI Forensic Report", "Governor Cox Statement", "Charging Documents", "PolitiFact"],
            choices: [
                {
                    text: "Research the 'Bella Ciao' anti-fascist connection",
                    nextScene: "bella_ciao_research",
                    progressIncrease: 12,
                    factual: true
                },
                {
                    text: "Investigate where Robinson learned marksmanship",
                    nextScene: "marksmanship_investigation",
                    progressIncrease: 14,
                    evidence: true
                },
                {
                    text: "Examine if Robinson had ties to anti-fascist groups",
                    nextScene: "antifa_investigation",
                    progressIncrease: 16,
                    factual: true,
                    evidence: true
                },
                {
                    text: "Analyze the 'performative' nature of the inscriptions",
                    nextScene: "internet_culture_analysis",
                    progressIncrease: 15,
                    factual: true
                }
            ],
            educationalNote: "The bullet casing inscriptions were confirmed by Governor Cox and included in official charging documents."
        },

        bella_ciao_research: {
            text: `"BELLA CIAO" - THE ANTI-FASCIST ANTHEM

            SEPTEMBER 12, 2025 - 4:15 PM

Your research into the inscription on Robinson's bullet casing reveals a significant cultural reference:

"BELLA CIAO" HISTORICAL CONTEXT
=====================================
ORIGINS:
- Italian folk song from the late 19th century
- Originally sung by rice paddy workers (mondine)
- Adopted by Italian Resistance fighters in WWII
- Became anthem of anti-fascist partisans fighting Mussolini

MODERN USAGE:
- Featured prominently in Netflix series "Money Heist"
- Became viral protest anthem globally (2018-present)
- Used in protests against authoritarian governments
- Popular in left-wing activist circles

SIGNIFICANCE TO CASE:
- Robinson inscribed lyrics on bullet casing
- Suggests identification with anti-fascist ideology
- FBI notes: "Indicates political motivation"
- Not evidence of organizational membership
=====================================

Investigator's note: The use of "Bella Ciao" reflects online political culture where historical symbols are repurposed for modern ideological expression.

EVIDENCE CATALOGUED: Cultural reference indicates ideological motivation, not organizational ties.`,
            image: "kirk_digital_investigation",
            imagePrompt: "Digital research showing historical photos of Italian resistance fighters alongside modern protest imagery",
            sources: ["Historical Archives", "FBI Cultural Analysis Report", "Charging Documents"],
            choices: [
                {
                    text: "Return to weapon analysis",
                    nextScene: "weapon_analysis",
                    progressIncrease: 5
                },
                {
                    text: "Investigate Robinson's online radicalization",
                    nextScene: "internet_radicalization",
                    progressIncrease: 14,
                    factual: true
                },
                {
                    text: "Examine if Robinson had ties to anti-fascist groups",
                    nextScene: "antifa_investigation",
                    progressIncrease: 16,
                    factual: true,
                    evidence: true
                }
            ],
            educationalNote: "'Bella Ciao' became a global symbol after its prominent use in the Spanish TV series 'Money Heist' (La Casa de Papel)."
        },

        marksmanship_investigation: {
            text: `INVESTIGATING THE SHOOTER'S SKILLS

            SEPTEMBER 12, 2025 - 4:45 PM

The 142-yard shot that killed Charlie Kirk required significant skill. Your investigation into Tyler Robinson's background reveals:

MARKSMANSHIP BACKGROUND
=====================================
CONFIRMED FACTS:
- No military service record
- No formal firearms training documented
- No membership in gun clubs or shooting ranges
- Rifle was grandfather's hunting weapon

FBI ASSESSMENT:
- Shot difficulty: "Moderate to difficult"
- 142 yards with scoped bolt-action rifle
- Target was stationary at podium
- Conditions: Clear day, minimal wind
- "Achievable with practice, not expert-level"

WASHINGTON COUNTY RECORDS:
- Rural Utah upbringing (Washington, UT)
- Common for residents to hunt/shoot recreationally
- No formal training required in Utah
- Grandfather was avid hunter

BALLISTICS EXPERT NOTE:
"A 142-yard shot with a scoped Mauser 98 is well within capability of someone with recreational shooting experience. This was not a 'professional' shot - it was a determined amateur who practiced."
=====================================

EVIDENCE CATALOGUED: Marksmanship consistent with rural Utah background, no professional training indicated.`,
            image: "kirk_investigation_board",
            imagePrompt: "Investigation board showing ballistics analysis, trajectory diagrams, and shooter background information",
            sources: ["FBI Ballistics Report", "Utah County Records", "Expert Witness Statement"],
            choices: [
                {
                    text: "Return to weapon analysis",
                    nextScene: "weapon_analysis",
                    progressIncrease: 5
                },
                {
                    text: "Review the crime scene positioning",
                    nextScene: "crime_scene_analysis",
                    progressIncrease: 12,
                    evidence: true
                },
                {
                    text: "Examine Robinson's preparation timeline",
                    nextScene: "radicalization_timeline",
                    progressIncrease: 14,
                    factual: true
                }
            ],
            educationalNote: "FBI analysis confirmed the shot was 'achievable but required preparation' - consistent with the premeditation evidence."
        },

        internet_culture_analysis: {
            text: `THE PERFORMATIVE NATURE OF POLITICAL VIOLENCE

            SEPTEMBER 12, 2025 - 5:30 PM

Analyzing the inscriptions on Robinson's ammunition reveals a disturbing trend in modern political violence:

INTERNET CULTURE AND VIOLENCE
=====================================
THE INSCRIPTIONS:
- "Hey Facist! Catch!"
- "Oh bella ciao, bella ciao, bella ciao, ciao ciao"

ANALYSIS - FBI BEHAVIORAL UNIT:

"These inscriptions reflect what we call 'performative violence' - acts designed not just to harm but to communicate a message and gain attention.

Key characteristics observed:
1. MEME CULTURE: Casual tone ("Hey... Catch!") mirrors internet humor
2. SYMBOLIC REFERENCES: "Bella Ciao" connects to broader ideology
3. DOCUMENTATION: Inscribing casings suggests intent to be found/analyzed
4. AUDIENCE AWARENESS: Shooter knew these would be examined"

EXPERT OPINION:
"Robinson's actions show hallmarks of online radicalization where political violence is gamified and seen as a form of expression. The casual tone of the inscriptions is deeply concerning - it reflects desensitization."
=====================================

This pattern has appeared in other recent political violence cases across the ideological spectrum.

EVIDENCE CATALOGUED: Inscriptions indicate performative violence influenced by internet culture.`,
            image: "kirk_digital_evidence",
            imagePrompt: "FBI behavioral analysis display showing internet radicalization patterns and symbolic messaging analysis",
            sources: ["FBI Behavioral Analysis Unit", "DHS Domestic Terrorism Report", "Academic Studies on Online Radicalization"],
            choices: [
                {
                    text: "Return to weapon analysis",
                    nextScene: "weapon_analysis",
                    progressIncrease: 5
                },
                {
                    text: "Investigate Robinson's online activity",
                    nextScene: "internet_radicalization",
                    progressIncrease: 16,
                    factual: true,
                    evidence: true
                },
                {
                    text: "Review other recent political violence cases",
                    nextScene: "aftermath",
                    progressIncrease: 12,
                    factual: true
                }
            ],
            educationalNote: "The FBI has identified 'performative violence' as a growing concern in domestic terrorism cases across all political ideologies."
        },

        antifa_investigation: {
            text: `INVESTIGATING ORGANIZATIONAL TIES

            SEPTEMBER 12, 2025 - 5:00 PM

Following the assassination, political figures immediately claimed Robinson had ties to left-wing organizations:

CLAIMS VS. EVIDENCE
=====================================
CLAIMS MADE:
- President Trump suggested "leftist" connections
- GOP officials alleged Antifa involvement
- Social media speculation about organized plot

FBI INVESTIGATION FINDINGS (as of Sept 21):
- "No evidence found" linking Robinson to
  any organized left-wing groups
- No Antifa membership or affiliation discovered
- No evidence of coordination with others
- Appears to have acted alone

ROBINSON'S ACTUAL AFFILIATIONS:
- Not registered with any political party
- No voting record in Washington County
- No known membership in political organizations
- No prior attendance at political rallies/protests
- Lived in conservative Utah community

INVESTIGATOR NOTE:
"Despite ideological indicators on the bullet
casings, we have found no organizational ties.
This appears to be individual radicalization,
not directed action."
=====================================

The evidence suggests a lone actor influenced by online content rather than organized political violence.

CRITICAL FINDING: No organizational conspiracy - but questions remain about online radicalization.`,
            image: "kirk_investigation_board",
            imagePrompt: "FBI investigation board with organizational charts showing no connections, evidence analysis",
            sources: ["FBI Investigation Update", "Sources Familiar with Investigation", "NPR", "Washington Post"],
            choices: [
                {
                    text: "Investigate his online radicalization pathway",
                    nextScene: "internet_radicalization",
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Examine the political response to the assassination",
                    nextScene: "political_response",
                    progressIncrease: 12,
                    factual: true
                },
                {
                    text: "Research similar lone-actor political violence cases",
                    nextScene: "lone_actor_analysis",
                    progressIncrease: 14,
                    factual: true
                },
                {
                    text: "Interview FBI sources about the investigation",
                    nextScene: "fbi_sources",
                    progressIncrease: 15,
                    evidence: true
                }
            ],
            educationalNote: "FBI sources confirmed to multiple outlets that no organizational ties were found as of late September 2025."
        },

        tpusa_history: {
            text: `TURNING POINT USA: THE ORGANIZATION

            SEPTEMBER 12, 2025 - 10:00 AM

Understanding the target requires understanding Turning Point USA:

TURNING POINT USA - ORGANIZATION PROFILE
=====================================
Founded: 2012 by Charlie Kirk (age 18)
Inspiration: Rush Limbaugh's radio show
Mission: Conservative youth activism

BY THE NUMBERS (2025):
- Total funds raised: $389 million
- College campus chapters: 900+
- High school chapters: 1,200+
- Annual AmericaFest attendance: 20,000+

KEY FIGURES:
- Charlie Kirk (Founder/Executive Director) - DECEASED
- Erika Kirk (Widow, current CEO as of Sept 18)
- Candace Owens (Former Communications Dir., resigned 2019)

TRUMP CONNECTION:
- Key ally of Donald Trump
- 2024 campaign: "You're Being Brainwashed" tour
- Credited with increasing youth Trump vote
- January 5, 2021: Kirk tweeted about sending
  "80 buses of patriots to D.C." (actual: 7 buses)

CONTROVERSIES:
- Tax-exempt status challenges
- Rally Forge social media operation (banned)
- Financial disclosure questions (ProPublica)
- Kirk's wedding billed as TPUSA fundraiser
=====================================

Kirk evolved from avoiding social issues to becoming one of the most polarizing figures in conservative media.`,
            image: "kirk_tpusa_organization_profile",
            imagePrompt: "Organization profile board with Turning Point USA logo, timeline, key figures, and financial documents",
            sources: ["Turning Point USA Wikipedia", "ProPublica Investigation", "Britannica", "SPLC Report"],
            choices: [
                {
                    text: "Investigate TPUSA's most controversial positions",
                    nextScene: "tpusa_controversies",
                    progressIncrease: 14,
                    factual: true
                },
                {
                    text: "Research Kirk's specific statements on LGBTQ+ issues",
                    nextScene: "kirk_lgbtq_statements",
                    progressIncrease: 16,
                    factual: true,
                    evidence: true
                },
                {
                    text: "Examine the January 6th connection",
                    nextScene: "january6_connection",
                    progressIncrease: 12,
                    factual: true
                },
                {
                    text: "Study the organization's response to Kirk's death",
                    nextScene: "tpusa_response",
                    progressIncrease: 10,
                    factual: true
                }
            ],
            educationalNote: "TPUSA's history and Kirk's background are documented in numerous investigative reports and official filings."
        },

        tpusa_controversies: {
            text: `TURNING POINT USA: CONTROVERSIES

            SEPTEMBER 12, 2025 - 11:00 AM

Your research into TPUSA's history reveals significant controversies:

DOCUMENTED CONTROVERSIES
=====================================
STAFF ISSUES:
2019 - Candace Owens resignation
- Made controversial Hitler comments
- Said: "If Hitler just wanted to make Germany
  great and have things run well, okay fine"
- Campus chapters demanded resignation

2019 - Benny Johnson hired
- Previously fired from BuzzFeed for plagiarism
- Suspended from IJR for publishing conspiracy theory

FINANCIAL CONCERNS (ProPublica 2020):
- Questions about audit firm independence
- Payments to companies controlled by insiders
- Kirk's 2021 wedding billed as fundraiser/
  "ninth anniversary celebration"

SOCIAL MEDIA MANIPULATION:
- Coordinated with Rally Forge operation
- Rep. Jake Hoffman connection
- Paid teenagers to post pro-Trump content
- Operation banned from Facebook/Instagram 2020

IDEOLOGICAL EVOLUTION:
- Early TPUSA: Avoided abortion, racism topics
- Kirk praised MLK as "hero" and "civil rights icon"
- Later Kirk: Condemned MLK as "awful" and
  "not a good person"
- Shift toward more confrontational positions
=====================================

Critics argue TPUSA's evolution made it increasingly divisive; supporters say it simply became more effective.`,
            image: "kirk_controversy_documents",
            imagePrompt: "Investigation documents showing organizational controversies, financial records, social media evidence",
            sources: ["ProPublica", "SPLC Report", "SourceWatch", "Facebook/Meta Press Releases"],
            choices: [
                {
                    text: "Examine Kirk's specific anti-LGBTQ+ rhetoric",
                    nextScene: "kirk_lgbtq_statements",
                    progressIncrease: 16,
                    factual: true,
                    evidence: true
                },
                {
                    text: "Research whether controversies motivated the attack",
                    nextScene: "motive_analysis",
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Interview former TPUSA members",
                    nextScene: "former_members",
                    progressIncrease: 14,
                    evidence: true
                },
                {
                    text: "Study the organization's campus conflicts",
                    nextScene: "campus_conflicts",
                    progressIncrease: 12,
                    factual: true
                }
            ],
            educationalNote: "These controversies are documented in investigative reports from ProPublica, SPLC, and mainstream news organizations."
        },

        kirk_lgbtq_statements: {
            text: `KIRK'S POSITIONS ON LGBTQ+ ISSUES

            SEPTEMBER 12, 2025 - 1:00 PM

Given Robinson's stated concern for "gay and trans rights," you investigate Kirk's specific positions:

CHARLIE KIRK - LGBTQ+ POSITIONS
=====================================
ON TRANSGENDER ISSUES:
- Opposed transgender participation in sports
- Criticized gender-affirming care for minors
- Called gender identity a "mental illness"
- Featured anti-trans speakers at events

ON GAY RIGHTS:
- Initially avoided the topic
- Later opposed same-sex marriage
- Criticized "Pride Month" celebrations
- Alleged LGBTQ+ "agenda" in schools

SPECIFIC INCIDENTS:
- 2023: Called for banning "drag queen story hours"
- 2024: Supported Florida's "Don't Say Gay" bill
- 2024: Hosted speakers calling for
  LGBTQ+ content bans in schools

RESPONSE FROM CRITICS:
- GLAAD documented multiple "anti-LGBTQ+" statements
- Human Rights Campaign condemned his rhetoric
- Student protests at numerous campus events
=====================================

Robinson's roommate, described as "a biological male who was transitioning genders," likely experienced Kirk's rhetoric as direct attacks on their identity.

MOTIVE HYPOTHESIS: Personal stake combined with ideological opposition.`,
            image: "kirk_political_statements",
            imagePrompt: "Collection of political statements and news clippings about controversial LGBTQ+ positions",
            sources: ["GLAAD Reports", "Human Rights Campaign", "TPUSA Event Transcripts", "News Coverage"],
            choices: [
                {
                    text: "Interview Robinson's transgender partner about their perspective",
                    nextScene: "roommate_interview",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Research how Kirk's rhetoric compared to other conservative figures",
                    nextScene: "rhetoric_comparison",
                    progressIncrease: 12,
                    factual: true
                },
                {
                    text: "Examine whether specific statements triggered the attack",
                    nextScene: "trigger_investigation",
                    progressIncrease: 16,
                    evidence: true
                },
                {
                    text: "Analyze the broader political violence context",
                    nextScene: "political_violence_context",
                    progressIncrease: 14,
                    factual: true
                }
            ],
            educationalNote: "Kirk's positions on LGBTQ+ issues were documented by advocacy organizations and in his own public statements."
        },

        roommate_interview: {
            text: `THE PARTNER'S TESTIMONY

            SEPTEMBER 12, 2025 - 4:00 PM

Through legal channels, you obtain testimony from Robinson's roommate and romantic partner:

WITNESS INTERVIEW - CONFIDENTIAL
=====================================
Subject: Robinson's Roommate/Partner
Description: "Biological male who was transitioning genders"
Relationship: Romantic partner, lived together

KEY TESTIMONY:
"Tyler changed over the past year. He became very
protective of me and others like me. When he heard
things Kirk said about trans people... it affected him
deeply. Not just as politics, but as attacks on me."

"He never talked about violence before. But in the
last few weeks, he was different. Angry. Watching
videos of Kirk's speeches over and over."

"The morning of... I didn't know where he was going.
He just said he had something to do."

CONFESSION RECEIVED:
"That night, he texted me. 'I had enough of his
hatred. Some hate can't be negotiated out.' I
didn't understand at first. Then I saw the news."

"He said he was planning it for about a week. I
never knew. I would have stopped him."
=====================================

The partner is cooperating with prosecutors and has not been charged with any crime.

CRITICAL INSIGHT: The relationship personalized abstract political rhetoric into direct harm.`,
            image: "kirk_witness_interview",
            imagePrompt: "Sensitive interview scene with silhouette of witness in protected setting, investigation atmosphere",
            sources: ["Prosecutor Statements", "Charging Documents", "PBS News"],
            choices: [
                {
                    text: "Investigate the week of planning before the shooting",
                    nextScene: "planning_week",
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Research how the partner is being treated legally",
                    nextScene: "legal_proceedings",
                    progressIncrease: 12,
                    factual: true
                },
                {
                    text: "Examine the broader pattern of violence against political figures",
                    nextScene: "political_violence_context",
                    progressIncrease: 14,
                    factual: true
                },
                {
                    text: "Compile your findings into a preliminary report",
                    nextScene: "preliminary_report",
                    progressIncrease: 20,
                    evidence: true
                }
            ],
            educationalNote: "Details about Robinson's partner come from prosecutor statements and charging documents."
        },

        witness_meeting: {
            text: `THE ANONYMOUS WITNESS

            SEPTEMBER 12, 2025 - 12:00 PM

You meet your source at a coffee shop near the federal building. She's a graduate student who was in the crowd.

WITNESS ACCOUNT - UNREDACTED
=====================================
"I was maybe 50 feet from the stage when it happened.
Kirk was mid-sentence, talking about campus free speech.

Then... the sound. I've never heard anything like it.
Kirk just... fell. People didn't understand at first.
Then screaming. Everyone running.

But here's what the news isn't reporting:

There was a drone. I saw it. Maybe 10 minutes before
the shot. Hovering near that building - the one they
say the shooter was on. I told the FBI, but they
didn't seem interested.

And the security... it was wrong. Usually these
events have metal detectors, bag checks. This one
felt... lighter. Less thorough.

I'm not saying it was a conspiracy. I'm saying there
are questions that aren't being asked."
=====================================

She hands you a phone with photos - including one showing a small drone in the sky.

"Someone wanted that debate to happen exactly how it did. Whether it's just incompetence or something else... that's what you need to find out."`,
            image: "kirk_witness_testimony",
            imagePrompt: "Clandestine meeting in coffee shop, journalist taking notes, witness providing documents",
            sources: ["Eyewitness Account", "Unverified Photo Evidence"],
            choices: [
                {
                    text: "Investigate the security arrangements at the event",
                    nextScene: "security_investigation",
                    progressIncrease: 16,
                    evidence: true
                },
                {
                    text: "Research the drone sighting claim",
                    nextScene: "drone_investigation",
                    progressIncrease: 14,
                    evidence: true
                },
                {
                    text: "Focus on verified facts rather than speculation",
                    nextScene: "verified_facts_focus",
                    progressIncrease: 18,
                    factual: true
                },
                {
                    text: "Interview other witnesses about security lapses",
                    nextScene: "witness_interviews",
                    progressIncrease: 15,
                    evidence: true
                }
            ],
            educationalNote: "Eyewitness accounts often include details not in official reports. Verification is essential for responsible journalism."
        },

        manhunt_timeline: {
            text: `33 HOURS: THE MANHUNT

            SEPTEMBER 12, 2025 - 6:00 PM

You compile the complete timeline of the manhunt and capture:

MANHUNT TIMELINE - OFFICIAL
=====================================
SEPTEMBER 10, 2025:
12:23 PM - Shot fired, Kirk killed
12:24 PM - Shooter flees rooftop
12:31 PM - Gray Dodge Challenger exits campus
1:00 PM - FBI Kash Patel announces investigation
3:00 PM - Surveillance footage released to media
6:00 PM - Witness tips flood in
9:00 PM - Robinson's parents recognize son in footage

SEPTEMBER 11, 2025:
12:00 AM - Parents contact Robinson
          He "implied" he was the shooter
          Discussed suicide

2:00 AM - Parents convince Robinson to come home

4:00 AM - Robinson speaks with family friend
          (Retired deputy sheriff)

6:00 AM - Robinson returns to parents' home

10:00 PM - Robinson surrenders at Washington
           County Sheriff's Office
           Accompanied by parents

TOTAL TIME: 33 hours, 37 minutes
=====================================

FBI Director Kash Patel: "In less than 36 hours - 33 to be precise - thanks to the full weight of the federal government... the suspect was apprehended in a historic time period."

Robinson was cooperative upon surrender and has been held without bail.`,
            image: "kirk_manhunt_timeline",
            imagePrompt: "Law enforcement timeline board showing 33-hour manhunt with photos, locations, and timestamps",
            sources: ["FBI Press Conference", "NPR Timeline", "ABC News", "Utah County Sheriff"],
            choices: [
                {
                    text: "Investigate Robinson's movements during the manhunt",
                    nextScene: "suspect_movements",
                    progressIncrease: 14,
                    evidence: true
                },
                {
                    text: "Research the family's decision to turn him in",
                    nextScene: "family_decision",
                    progressIncrease: 16,
                    evidence: true
                },
                {
                    text: "Examine the legal proceedings and charges",
                    nextScene: "legal_proceedings",
                    progressIncrease: 12,
                    factual: true
                },
                {
                    text: "Compile findings into preliminary report",
                    nextScene: "preliminary_report",
                    progressIncrease: 20,
                    evidence: true
                }
            ],
            educationalNote: "The 33-hour timeline was confirmed by FBI Director Kash Patel and documented by multiple news organizations."
        },

        legal_proceedings: {
            text: `THE LEGAL CASE

            SEPTEMBER 13, 2025 - 9:00 AM

You review the charging documents and legal proceedings:

LEGAL STATUS - TYLER ROBINSON
=====================================
CHARGES FILED (September 16, 2025):
1. Aggravated Murder (Death Penalty Eligible)
2. Felony Discharge of Firearm Causing Serious
   Bodily Injury
3. Obstruction of Justice
4. Witness Tampering (2 counts)
5. Commission of Violent Offense in Presence
   of a Child

PROSECUTOR STATEMENT:
"The state intends to seek the death penalty."

FEDERAL CONSIDERATION:
- DOJ weighing "novel federal hate crime case"
- Would be unprecedented application of hate
  crime law to political assassination
- Internal debate ongoing

UPCOMING PROCEEDINGS:
- Preliminary Hearing: May 18-20, 2026
- Robinson has not entered plea
- Held without bail

DEFENSE STRATEGY (anticipated):
- Mental health evaluation requested
- Potential diminished capacity defense
- Political motivation vs. personal grievance
=====================================

Legal experts note this case could set precedent for how political violence is prosecuted in America.

QUESTION FOR JURY: Where is the line between political assassination and hate crime?`,
            image: "kirk_legal_proceedings",
            imagePrompt: "Legal documents spread on desk showing charges, court filings, and evidence list",
            sources: ["Utah Charging Documents", "NBC News DOJ Report", "Court Records", "ABC News Timeline"],
            choices: [
                {
                    text: "Research the hate crime legal theory",
                    nextScene: "hate_crime_analysis",
                    progressIncrease: 14,
                    factual: true
                },
                {
                    text: "Interview legal experts about the case",
                    nextScene: "legal_expert_interview",
                    progressIncrease: 12,
                    factual: true
                },
                {
                    text: "Examine the death penalty implications",
                    nextScene: "death_penalty_analysis",
                    progressIncrease: 10,
                    factual: true
                },
                {
                    text: "Compile your comprehensive investigation report",
                    nextScene: "final_report",
                    progressIncrease: 25,
                    evidence: true
                }
            ],
            educationalNote: "The charges and legal proceedings are documented in official court filings and prosecutor statements."
        },

        aftermath: {
            text: `THE AFTERMATH

            SEPTEMBER 22, 2025 - 10:00 AM

You document the immediate aftermath of Kirk's assassination:

AFTERMATH SUMMARY
=====================================
MEMORIAL SERVICE (September 21):
- Location: State Farm Stadium, Arizona
- Attendance: Nearly 100,000 people
- Speakers: Political figures, family, friends
- Security: Unprecedented for private citizen

PRESIDENTIAL RESPONSE:
- Kirk posthumously awarded Presidential
  Medal of Freedom
- Trump called it "political assassination"
- Blamed "radical left" rhetoric

TURNING POINT USA:
- September 18: Board unanimously elects
  Erika Kirk as CEO
- Widow's statement: "I will make Turning Point
  the biggest thing this nation has ever seen"
- Received 120,000+ chapter inquiries
- AmericaFest December 2025: Record 30,000
  attendees (50% increase)

PUBLIC DISCOURSE:
- Renewed debate over political violence
- Questions about online radicalization
- Campus security reviews nationwide
- Both sides blame opposing rhetoric
=====================================

The assassination that was meant to silence a voice has, in some ways, amplified it.

CRITICAL OBSERVATION: Political violence rarely achieves its stated goals.`,
            image: "kirk_aftermath_memorial",
            imagePrompt: "Massive memorial service at stadium with thousands of attendees, somber atmosphere",
            sources: ["AP News", "KJZZ Report", "TPUSA Press Releases", "NPR", "Al Jazeera"],
            choices: [
                {
                    text: "Interview Erika Kirk about continuing the mission",
                    nextScene: "erika_kirk_interview",
                    progressIncrease: 15,
                    evidence: true
                },
                {
                    text: "Analyze how the assassination changed political discourse",
                    nextScene: "discourse_analysis",
                    progressIncrease: 14,
                    factual: true
                },
                {
                    text: "Research similar cases of political martyrdom",
                    nextScene: "martyrdom_analysis",
                    progressIncrease: 12,
                    factual: true
                },
                {
                    text: "Complete your final investigation report",
                    nextScene: "final_report",
                    progressIncrease: 25,
                    evidence: true
                }
            ],
            educationalNote: "The aftermath details are documented in extensive media coverage from multiple outlets."
        },

        final_report: {
            text: `INVESTIGATION COMPLETE: FINAL REPORT

            SEPTEMBER 30, 2025

THE CLASSIFIED FILES: CHARLIE KIRK ASSASSINATION
INVESTIGATIVE SUMMARY
=====================================

VICTIM: Charlie Kirk, 31
- Founder, Turning Point USA
- Key Trump ally, MAGA movement leader
- Killed September 10, 2025, Utah Valley University

PERPETRATOR: Tyler James Robinson, 22
- Former conservative turned "leftist ideology"
- No organizational ties found
- Confessed to roommate/partner
- Surrendered after 33-hour manhunt

MOTIVE: Political/Personal
- Stated: "I had enough of his hatred"
- Connection to transgender partner
- Radicalization via internet culture
- No evidence of conspiracy

WEAPON: Mauser 98, .30-06 caliber
- Grandfather's rifle
- Anti-fascist inscriptions on casings
- 142-yard shot, single bullet

LEGAL STATUS:
- Charged with aggravated murder
- Death penalty sought
- Trial pending May 2026
- Federal hate crime charges considered

AFTERMATH:
- 100,000 at memorial
- Presidential Medal of Freedom (posthumous)
- TPUSA: Record growth under Erika Kirk
- Ongoing debate about political violence

=====================================

CONCLUSION: A lone actor, radicalized online,
assassinated a political figure in an act that
achieved the opposite of its apparent intent.

The investigation continues. The trial awaits.
The questions about political violence in America
remain unanswered.

CASE FILE: COMPLETE
=====================================`,
            image: "kirk_final_report",
            imagePrompt: "Completed investigation report on desk with all evidence compiled, professional journalism atmosphere",
            sources: ["All Previous Sources Compiled"],
            choices: [
                {
                    text: "Review the full evidence catalogue",
                    nextScene: "evidence_review",
                    progressIncrease: 10
                },
                {
                    text: "Return to case selection",
                    nextScene: "case_complete",
                    progressIncrease: 0
                }
            ],
            educationalNote: "This case file compiles verified information from FBI reports, court documents, and major news organizations covering the Charlie Kirk assassination."
        },

        case_complete: {
            text: `CASE CLOSED

            THE CLASSIFIED FILES: CHARLIE KIRK ASSASSINATION

You have completed your investigation into the assassination of Charlie Kirk.

INVESTIGATION STATISTICS:
- Evidence collected: Multiple verified documents
- Witnesses interviewed: Several key sources
- Timeline reconstructed: Complete
- Motive analyzed: Political/Personal hybrid

KEY FINDINGS:
1. Tyler Robinson acted alone
2. No organizational conspiracy found
3. Online radicalization played key role
4. Transgender partner connection personalized the grievance
5. Political violence achieved opposite of intended effect

ONGOING DEVELOPMENTS:
- Trial scheduled for May 2026
- Federal hate crime charges under consideration
- TPUSA continues under new leadership
- National debate on political violence continues

Thank you for your dedication to uncovering the truth.

THE CLASSIFIED FILES will continue to monitor this case as it develops.`,
            image: "kirk_case_closed",
            imagePrompt: "Case file folder being closed, stamps reading 'Investigation Complete', professional atmosphere",
            sources: ["Complete Investigation"],
            choices: [
                {
                    text: "Start a new investigation",
                    nextScene: "intro",
                    progressIncrease: 0
                }
            ],
            educationalNote: "The Charlie Kirk assassination investigation is ongoing. Trial proceedings are scheduled for May 2026."
        },

        knowledge_assessment: {
            text: `KNOWLEDGE ASSESSMENT: CHARLIE KIRK CASE

Before diving deeper, let's test your understanding of the basic facts:

QUESTION 1:
On what date was Charlie Kirk assassinated?

A) September 8, 2025
B) September 10, 2025
C) September 12, 2025
D) September 15, 2025`,
            image: "kirk_quiz_screen",
            imagePrompt: "Investigation quiz screen with multiple choice questions about the case",
            choices: [
                {
                    text: "A) September 8, 2025",
                    nextScene: "quiz_wrong_1",
                    progressIncrease: 0
                },
                {
                    text: "B) September 10, 2025",
                    nextScene: "quiz_correct_1",
                    progressIncrease: 10,
                    correct: true
                },
                {
                    text: "C) September 12, 2025",
                    nextScene: "quiz_wrong_1",
                    progressIncrease: 0
                },
                {
                    text: "D) September 15, 2025",
                    nextScene: "quiz_wrong_1",
                    progressIncrease: 0
                }
            ],
            educationalNote: "Testing your knowledge helps reinforce the verified facts of this case."
        },

        quiz_correct_1: {
            text: `CORRECT!

Charlie Kirk was assassinated on September 10, 2025, at Utah Valley University in Orem, Utah.

QUESTION 2:
What was the distance from which the shooter fired?

A) 50 yards
B) 100 yards
C) 142 yards
D) 200 yards`,
            image: "kirk_quiz_screen",
            imagePrompt: "Quiz continuation screen showing correct answer feedback",
            choices: [
                {
                    text: "A) 50 yards",
                    nextScene: "quiz_wrong_2",
                    progressIncrease: 0
                },
                {
                    text: "B) 100 yards",
                    nextScene: "quiz_wrong_2",
                    progressIncrease: 0
                },
                {
                    text: "C) 142 yards",
                    nextScene: "quiz_correct_2",
                    progressIncrease: 10,
                    correct: true
                },
                {
                    text: "D) 200 yards",
                    nextScene: "quiz_wrong_2",
                    progressIncrease: 0
                }
            ]
        },

        quiz_correct_2: {
            text: `CORRECT!

The shooter was positioned 142 yards (approximately 130 meters) away on a rooftop.

QUESTION 3:
How long did the manhunt last before Robinson surrendered?

A) 12 hours
B) 24 hours
C) 33 hours
D) 48 hours`,
            image: "kirk_quiz_screen",
            imagePrompt: "Quiz screen with manhunt timeline question",
            choices: [
                {
                    text: "A) 12 hours",
                    nextScene: "quiz_wrong_3",
                    progressIncrease: 0
                },
                {
                    text: "B) 24 hours",
                    nextScene: "quiz_wrong_3",
                    progressIncrease: 0
                },
                {
                    text: "C) 33 hours",
                    nextScene: "quiz_complete",
                    progressIncrease: 10,
                    correct: true
                },
                {
                    text: "D) 48 hours",
                    nextScene: "quiz_wrong_3",
                    progressIncrease: 0
                }
            ]
        },

        quiz_complete: {
            text: `ASSESSMENT COMPLETE

Excellent work! You've demonstrated a solid understanding of the basic facts.

YOUR RESULTS:
- Questions answered correctly: 3/3
- Knowledge level: Proficient

KEY FACTS CONFIRMED:
- Date: September 10, 2025
- Location: Utah Valley University
- Distance: 142 yards
- Manhunt duration: 33 hours
- Suspect: Tyler James Robinson, 22
- Weapon: Mauser 98, .30-06 caliber

You're now ready to dive deeper into the investigation.`,
            image: "kirk_quiz_screen",
            imagePrompt: "Assessment complete screen with passing grade and summary of key facts",
            choices: [
                {
                    text: "Begin deep investigation of the crime scene",
                    nextScene: "crime_scene_analysis",
                    progressIncrease: 5,
                    evidence: true
                },
                {
                    text: "Research the suspect's background",
                    nextScene: "suspect_background",
                    progressIncrease: 5,
                    evidence: true
                },
                {
                    text: "Study Turning Point USA's history",
                    nextScene: "tpusa_history",
                    progressIncrease: 5
                }
            ],
            educationalNote: "Knowledge assessments help ensure accurate understanding of verified case facts."
        },

        quiz_wrong_1: {
            text: `INCORRECT

The correct answer is September 10, 2025.

Charlie Kirk was assassinated while speaking at a Turning Point USA campus debate at Utah Valley University in Orem, Utah.

Let's continue with your investigation - sometimes the best way to learn is by diving into the evidence.`,
            image: "kirk_quiz_screen",
            imagePrompt: "Quiz incorrect screen with correct answer shown",
            choices: [
                {
                    text: "Continue to the crime scene analysis",
                    nextScene: "crime_scene_analysis",
                    progressIncrease: 5,
                    evidence: true
                },
                {
                    text: "Research the suspect's background",
                    nextScene: "suspect_background",
                    progressIncrease: 5,
                    evidence: true
                }
            ]
        },

        quiz_wrong_2: {
            text: `INCORRECT

The correct answer is 142 yards (approximately 130 meters).

The shooter was positioned on a rooftop with a scoped rifle, making this a precision shot that required either training or significant practice.

Let's continue your investigation.`,
            image: "kirk_quiz_screen",
            imagePrompt: "Quiz incorrect screen with distance fact shown",
            choices: [
                {
                    text: "Analyze the weapon and marksmanship",
                    nextScene: "weapon_analysis",
                    progressIncrease: 5,
                    evidence: true
                },
                {
                    text: "Review the full timeline",
                    nextScene: "manhunt_timeline",
                    progressIncrease: 5
                }
            ]
        },

        quiz_wrong_3: {
            text: `INCORRECT

The correct answer is 33 hours.

FBI Director Kash Patel specifically noted: "In less than 36 hours - 33 to be precise - the suspect was apprehended."

Robinson surrendered peacefully at the Washington County Sheriff's Office, accompanied by his parents.`,
            image: "kirk_quiz_screen",
            imagePrompt: "Quiz incorrect screen with manhunt timeline shown",
            choices: [
                {
                    text: "Review the complete manhunt timeline",
                    nextScene: "manhunt_timeline",
                    progressIncrease: 5
                },
                {
                    text: "Continue to legal proceedings",
                    nextScene: "legal_proceedings",
                    progressIncrease: 5
                }
            ]
        },

        suspect_quiz: {
            text: `SUSPECT KNOWLEDGE CHECK

Test your understanding of Tyler Robinson's background:

QUESTION:
What was Tyler Robinson's educational path after high school?

A) Straight to electrical trade school
B) One semester at Utah State, then trade school
C) Four years at Utah State, then dropped out
D) Military service, then trade school`,
            image: "kirk_quiz_screen",
            imagePrompt: "Quiz screen about suspect background",
            choices: [
                {
                    text: "A) Straight to electrical trade school",
                    nextScene: "suspect_quiz_wrong",
                    progressIncrease: 0
                },
                {
                    text: "B) One semester at Utah State, then trade school",
                    nextScene: "suspect_quiz_correct",
                    progressIncrease: 10,
                    correct: true
                },
                {
                    text: "C) Four years at Utah State, then dropped out",
                    nextScene: "suspect_quiz_wrong",
                    progressIncrease: 0
                },
                {
                    text: "D) Military service, then trade school",
                    nextScene: "suspect_quiz_wrong",
                    progressIncrease: 0
                }
            ]
        },

        suspect_quiz_correct: {
            text: `CORRECT!

Tyler Robinson attended Utah State University for one semester in Fall 2021 on a Presidential Scholarship, then took a leave of absence and never returned. He subsequently enrolled at Dixie Technical College in an electrical apprenticeship program.

This transition period appears significant in his radicalization timeline.`,
            image: "kirk_quiz_screen",
            imagePrompt: "Correct answer confirmation with suspect educational timeline",
            choices: [
                {
                    text: "Investigate what happened at Utah State",
                    nextScene: "utah_state_investigation",
                    progressIncrease: 10,
                    evidence: true
                },
                {
                    text: "Continue examining his political transformation",
                    nextScene: "radicalization_timeline",
                    progressIncrease: 8
                }
            ]
        },

        suspect_quiz_wrong: {
            text: `INCORRECT

The correct answer is B) One semester at Utah State, then trade school.

Robinson received a Presidential Scholarship to Utah State but left after just one semester, taking a leave of absence he never returned from. He then enrolled at Dixie Technical College.

This period appears crucial to understanding his transformation.`,
            image: "kirk_quiz_screen",
            imagePrompt: "Incorrect answer screen with correct information displayed",
            choices: [
                {
                    text: "Investigate what happened at Utah State",
                    nextScene: "utah_state_investigation",
                    progressIncrease: 8,
                    evidence: true
                },
                {
                    text: "Return to suspect background overview",
                    nextScene: "suspect_background",
                    progressIncrease: 5
                }
            ]
        },

        utah_state_investigation: {
            text: `THE UTAH STATE MYSTERY

            SEPTEMBER 13, 2025 - 11:00 AM

You investigate Robinson's brief time at Utah State University:

UTAH STATE UNIVERSITY RECORDS
=====================================
ENROLLMENT: Fall 2021
MAJOR: Pre-Engineering
SCHOLARSHIP: Resident Presidential (4-year merit)
DURATION: One semester
STATUS: Leave of absence (never returned)

WHAT WE KNOW:
- Arrived with 4.0 high school GPA
- High standardized test scores
- Filmed proud video about scholarship letter
- Left after just one semester
- Family describes this as turning point

WHAT WE DON'T KNOW:
- Why he left
- What happened during that semester
- Whether any specific incident triggered departure
- Connection to political transformation

INVESTIGATOR NOTES:
Governor Cox suggested Robinson "appeared to have
become radicalized after dropping out of Utah State
University" and may have been influenced by
"internet culture."

The transition from promising scholarship student
to college dropout coincides with the beginning
of his political transformation.
=====================================

Something happened during or immediately after that semester that changed Tyler Robinson's trajectory.`,
            image: "kirk_university_investigation",
            imagePrompt: "University records and investigation documents about student's brief enrollment",
            sources: ["Utah State University Records", "Governor Cox Statement", "Family Interviews"],
            choices: [
                {
                    text: "Interview former Utah State classmates",
                    nextScene: "classmate_interviews",
                    progressIncrease: 14,
                    evidence: true
                },
                {
                    text: "Research his online activity during this period",
                    nextScene: "internet_radicalization",
                    progressIncrease: 16,
                    evidence: true
                },
                {
                    text: "Focus on the post-dropout radicalization",
                    nextScene: "radicalization_timeline",
                    progressIncrease: 12,
                    factual: true
                },
                {
                    text: "Continue building the overall case file",
                    nextScene: "preliminary_report",
                    progressIncrease: 15,
                    evidence: true
                }
            ],
            educationalNote: "The significance of Robinson's departure from Utah State was noted by Governor Cox in official statements."
        },

        internet_radicalization: {
            text: `ONLINE RADICALIZATION INVESTIGATION

            SEPTEMBER 14, 2025 - 2:00 PM

You investigate Robinson's digital footprint and online influences:

DIGITAL INVESTIGATION
=====================================
DISCORD ACTIVITY:
- Active user on multiple servers
- One message referenced having a "manifesto"
- Discussed rifle and ammunition
- Researchers: "Performative" internet culture

ONLINE BEHAVIOR PATTERNS:
- Consumed political content extensively
- Watched Kirk speeches repeatedly (per partner)
- Engaged with anti-fascist online spaces
- References to "mass shooting culture" memes

BULLET CASING ANALYSIS:
- "Hey Facist! Catch!" - internet meme style
- "Bella Ciao" - anti-fascist song reference
- Style consistent with online extremist culture

EXPERT ANALYSIS:
"What he was doing here with this act was very
performative. He was performing 'Internet culture'
- and specifically mass shooting culture in general
- with the etchings on the shell casings being
memes, with the joking about having a manifesto.
It's all very performative in that regard."

CONCLUSION:
Robinson appears to have been radicalized through
online content consumption rather than organized
group involvement.
=====================================

The internet provided the ideology, the rhetoric, and even the aesthetic of the attack.`,
            image: "kirk_digital_investigation",
            imagePrompt: "Digital forensics screens showing social media analysis, chat logs, and radicalization pathway",
            sources: ["Discord Company Statement", "CBS News", "Research Analysis", "Charging Documents"],
            choices: [
                {
                    text: "Research the 'performative violence' phenomenon",
                    nextScene: "performative_violence",
                    progressIncrease: 14,
                    factual: true
                },
                {
                    text: "Examine specific online communities involved",
                    nextScene: "online_communities",
                    progressIncrease: 12,
                    evidence: true
                },
                {
                    text: "Analyze implications for preventing future attacks",
                    nextScene: "prevention_analysis",
                    progressIncrease: 10,
                    factual: true
                },
                {
                    text: "Complete the investigation report",
                    nextScene: "final_report",
                    progressIncrease: 20,
                    evidence: true
                }
            ],
            educationalNote: "The online radicalization angle was highlighted by researchers and confirmed through Discord company statements."
        },

        preliminary_report: {
            text: `PRELIMINARY INVESTIGATION REPORT

            SEPTEMBER 15, 2025

INTERIM FINDINGS: CHARLIE KIRK ASSASSINATION
=====================================

ESTABLISHED FACTS:
- Victim: Charlie Kirk, 31, TPUSA Founder
- Date: September 10, 2025
- Location: Utah Valley University, Orem, UT
- Suspect: Tyler James Robinson, 22
- Weapon: Mauser 98, .30-06, scoped rifle
- Distance: 142 yards
- Manhunt: 33 hours until surrender

MOTIVE ASSESSMENT:
- Political: Anti-fascist ideology indicators
- Personal: Transgender partner connection
- No organizational ties found
- Online radicalization suspected

KEY EVIDENCE:
- Security footage timeline
- Confession messages to partner
- Inscribed bullet casings
- DNA match on rifle towel

OUTSTANDING QUESTIONS:
1. Specific triggering events/statements
2. Depth of planning beyond "one week"
3. Whether manifesto exists
4. Online community influences
5. Utah State University departure reasons

NEXT STEPS:
- Trial monitoring (May 2026)
- Federal hate crime decision pending
- Continued source development
=====================================

Investigation continues...`,
            image: "kirk_investigation_report",
            imagePrompt: "Professional investigation report on desk with evidence summary and next steps",
            sources: ["Investigation Compilation"],
            choices: [
                {
                    text: "Investigate outstanding questions",
                    nextScene: "outstanding_questions",
                    progressIncrease: 15,
                    evidence: true
                },
                {
                    text: "Document the aftermath and response",
                    nextScene: "aftermath",
                    progressIncrease: 12,
                    factual: true
                },
                {
                    text: "Complete the final report",
                    nextScene: "final_report",
                    progressIncrease: 20,
                    evidence: true
                }
            ],
            educationalNote: "This preliminary report compiles verified facts from official sources as of mid-September 2025."
        },

        governor_presser: {
            text: `GOVERNOR COX PRESS CONFERENCE

            SEPTEMBER 14, 2025 - 10:00 AM

You watch Governor Spencer Cox's detailed press conference:

GOVERNOR COX STATEMENT - KEY POINTS
=====================================
ON THE SUSPECT:
"Mr. Robinson had very different political views
than those of his conservative family and adhered
to 'leftist ideology.'"

"He appeared to have become radicalized after
dropping out of Utah State University and may
have been influenced by aspects of internet
culture."

ON THE EVIDENCE:
"Inscriptions found on bullet casings reference
fascism, obscure internet memes, and video games."

Specific inscriptions read:
- "Hey Facist! Catch!"
- "Oh bella ciao, bella ciao, bella ciao, ciao ciao"

ON THE INVESTIGATION:
"We are working closely with federal authorities
to understand the full scope of what happened
and why."

"This appears to be an act of political violence
that has no place in our society."
=====================================

The Governor's statements provided the most detailed official account of the suspect's background and apparent motivation.`,
            image: "kirk_press_conference",
            imagePrompt: "Governor at press conference podium with media present, official state seal visible",
            sources: ["Governor Spencer Cox Press Conference", "PBS News", "Washington Post"],
            choices: [
                {
                    text: "Analyze the 'leftist ideology' characterization",
                    nextScene: "ideology_analysis",
                    progressIncrease: 12,
                    factual: true
                },
                {
                    text: "Research the internet culture radicalization angle",
                    nextScene: "internet_radicalization",
                    progressIncrease: 15,
                    evidence: true
                },
                {
                    text: "Investigate the bullet casing inscriptions",
                    nextScene: "weapon_analysis",
                    progressIncrease: 14,
                    evidence: true
                },
                {
                    text: "Continue building the case timeline",
                    nextScene: "manhunt_timeline",
                    progressIncrease: 10
                }
            ],
            educationalNote: "Governor Cox's statements were delivered in official press conferences and widely reported."
        },

        evidence_review: {
            text: `EVIDENCE CATALOGUE REVIEW

            COMPLETE EVIDENCE LIST

PHYSICAL EVIDENCE:
=====================================
1. Mauser Model 98 rifle (.30-06)
   - Mounted telescopic scope
   - Traced to suspect's grandfather
   - DNA match confirmed

2. Inscribed bullet casings
   - "Hey Facist! Catch!"
   - "Bella Ciao" lyrics

3. Towel wrapped around rifle
   - DNA matched to Robinson

4. Footwear impression at scene
5. Palm print and forearm imprints
6. Gray Dodge Challenger (suspect vehicle)

DIGITAL EVIDENCE:
=====================================
7. Security footage (campus-wide)
8. Text messages to partner (confession)
9. Discord messages (manifesto reference)
10. Phone records

DOCUMENTARY EVIDENCE:
=====================================
11. Voter registration (no party affiliation)
12. Employment records (Dixie Technical)
13. University records (Utah State)
14. Electrical apprentice license

WITNESS STATEMENTS:
=====================================
15. Partner/roommate testimony
16. Family interviews
17. Former classmate accounts
18. Event attendee statements
=====================================

All evidence points to a lone actor with political motivation and no organizational ties.`,
            image: "kirk_evidence_catalogue",
            imagePrompt: "Complete evidence catalogue spread on investigation desk with numbered items and photos",
            sources: ["FBI Evidence Report", "Court Filings", "Witness Statements"],
            choices: [
                {
                    text: "Return to case selection",
                    nextScene: "case_complete",
                    progressIncrease: 0
                },
                {
                    text: "Review key witness testimony",
                    nextScene: "roommate_interview",
                    progressIncrease: 5
                }
            ],
            educationalNote: "This evidence list compiles items mentioned in official reports and court documents."
        },

        // ========== INVESTIGATION SCENES ==========

        rifle_origins: {
            text: `THE MAUSER MODEL 98 - TRACING THE WEAPON

            SEPTEMBER 12, 2025 - 2:00 PM

Your investigation into the rifle's history reveals its origins:

WEAPON PROVENANCE
=====================================
FIREARM DETAILS:
- Make: Mauser Model 98
- Caliber: .30-06 Springfield (converted)
- Original manufacture: Post-WWII German production
- Current owner: Tyler Robinson

CHAIN OF CUSTODY:
1. Originally purchased by Robinson's grandfather
2. Used for deer hunting in southern Utah
3. Passed down through family
4. Robinson had access for several years

LEGAL STATUS:
- Legally owned firearm
- No registration required in Utah
- Properly maintained
- Scope added by Robinson (legally purchased)

INVESTIGATOR NOTES:
"The weapon choice suggests familiarity and comfort rather than tactical sophistication. This was a family heirloom, not a weapon purchased for this specific act."
=====================================

The rifle tells a story of rural Utah life, not criminal planning.`,
            image: "kirk_forensic_evidence",
            imagePrompt: "Detailed examination of vintage Mauser rifle with documentation of its history",
            sources: ["ATF Trace Report", "Family Testimony", "Utah Gun Laws"],
            choices: [
                {
                    text: "Return to weapon analysis",
                    nextScene: "weapon_analysis",
                    progressIncrease: 5
                },
                {
                    text: "Examine the shooter's preparation",
                    nextScene: "marksmanship_investigation",
                    progressIncrease: 12,
                    evidence: true
                },
                {
                    text: "Review the crime scene analysis",
                    nextScene: "crime_scene_analysis",
                    progressIncrease: 10
                }
            ],
            educationalNote: "Utah has minimal gun registration requirements, making weapon tracing rely on federal databases and family testimony."
        },

        drone_investigation: {
            text: `AERIAL SURVEILLANCE ANALYSIS

            SEPTEMBER 12, 2025 - 4:00 PM

FBI analysts examine all available aerial footage from the event:

DRONE AND AERIAL ANALYSIS
=====================================
COVERAGE REVIEWED:
- University security cameras (12 angles)
- News helicopter footage (arrived post-shooting)
- Attendee drone footage (2 civilian drones)
- Satellite imagery (requested from NGA)

KEY FINDINGS:
1. Shooter position identified on parking structure
2. No accomplices visible in area
3. Escape route clearly documented
4. Timeline confirms single-actor scenario

TECHNICAL ANALYSIS:
- Shot originated from Level 3, Row J
- Distance to stage: 142 yards confirmed
- Clear line of sight to podium
- No obstructions between positions

SECURITY GAP IDENTIFIED:
- Parking structure not secured
- No counter-sniper positions
- Event security focused on crowd
- Perimeter was inadequate for threat level
=====================================

The aerial analysis confirms this was a preventable security failure.`,
            image: "kirk_surveillance_footage",
            imagePrompt: "Multiple surveillance feeds showing aerial views of university campus during investigation",
            sources: ["FBI Technical Analysis", "University Security Records", "FAA Drone Logs"],
            choices: [
                {
                    text: "Examine the security failures",
                    nextScene: "security_investigation",
                    progressIncrease: 14,
                    evidence: true
                },
                {
                    text: "Review the shooter's movements",
                    nextScene: "suspect_movements",
                    progressIncrease: 12,
                    factual: true
                },
                {
                    text: "Return to crime scene analysis",
                    nextScene: "crime_scene_analysis",
                    progressIncrease: 5
                }
            ],
            educationalNote: "Modern investigations increasingly rely on civilian drone footage and security cameras to reconstruct events."
        },

        security_investigation: {
            text: `SECURITY FAILURES AT UVU EVENT

            SEPTEMBER 13, 2025 - 10:00 AM

Your investigation reveals significant security lapses:

SECURITY ASSESSMENT
=====================================
EVENT DETAILS:
- Venue: Utah Valley University
- Attendance: ~3,000 people
- Security provider: University Police + Private
- Threat assessment: "Elevated" (not acted upon)

FAILURES IDENTIFIED:

1. PERIMETER SECURITY
   - Parking structures not secured
   - No credential checks for elevated positions
   - Inadequate fencing

2. COUNTER-SURVEILLANCE
   - No counter-sniper teams deployed
   - Rooftop positions unchecked
   - No drone detection systems

3. THREAT INTELLIGENCE
   - Online threats not monitored
   - No coordination with FBI
   - Previous threats to Kirk not assessed

4. RESPONSE TIME
   - 4+ minutes to locate shooter
   - Confusion about shot origin
   - Medical response delayed
=====================================

Security expert: "For a figure as controversial as Kirk, this level of security was grossly inadequate."`,
            image: "kirk_crime_scene_investigation",
            imagePrompt: "Security assessment diagram showing venue layout and identified vulnerabilities",
            sources: ["Security Consultant Report", "University Statement", "DHS Event Security Guidelines"],
            choices: [
                {
                    text: "Interview security personnel",
                    nextScene: "first_responders",
                    progressIncrease: 14,
                    evidence: true
                },
                {
                    text: "Review previous threats against Kirk",
                    nextScene: "tpusa_controversies",
                    progressIncrease: 12,
                    factual: true
                },
                {
                    text: "Examine the aftermath response",
                    nextScene: "aftermath",
                    progressIncrease: 10
                }
            ],
            educationalNote: "Event security for controversial political figures requires coordination between venue, private security, and law enforcement."
        },

        suspect_movements: {
            text: `TRACKING THE SHOOTER'S MOVEMENTS

            SEPTEMBER 12, 2025 - 6:00 PM

Investigators reconstruct Robinson's movements on the day of the assassination:

TIMELINE OF MOVEMENTS
=====================================
SEPTEMBER 11, 2025:

6:30 AM - Left residence in Washington, UT
         (Confirmed by neighbor security camera)

9:45 AM - Stopped at gas station in Nephi, UT
         (Receipt recovered, surveillance footage)

11:30 AM - Arrived Salt Lake City area
          (Cell tower data)

1:15 PM - Arrived Utah Valley University
         (Parking structure camera)

2:30 PM - Positioned on Level 3
         (Last movement before shooting)

3:47 PM - Shot fired
         (Multiple audio timestamps)

3:48-4:15 PM - Remained in position
              (Witnesses report no movement)

4:22 PM - Surrendered to police
         (Body camera footage)
=====================================

Total drive: ~300 miles from Washington, UT
Planning evidence: Route suggests prior reconnaissance`,
            image: "kirk_timeline_investigation",
            imagePrompt: "Map showing suspect's route from Washington UT to Utah Valley University with timestamps",
            sources: ["FBI Timeline Report", "Cell Tower Records", "Surveillance Footage"],
            choices: [
                {
                    text: "Investigate the planning period",
                    nextScene: "planning_week",
                    progressIncrease: 14,
                    factual: true,
                    evidence: true
                },
                {
                    text: "Review the confession messages",
                    nextScene: "confession_analysis",
                    progressIncrease: 12
                },
                {
                    text: "Examine the surrender",
                    nextScene: "manhunt_timeline",
                    progressIncrease: 10
                }
            ],
            educationalNote: "Cell tower data and surveillance footage allow investigators to reconstruct precise timelines of suspect movements."
        },

        // ========== INTERVIEW SCENES ==========

        first_responders: {
            text: `FIRST RESPONDER INTERVIEWS

            SEPTEMBER 12, 2025 - 8:00 PM

You interview the first officers and medics on scene:

FIRST RESPONDER ACCOUNTS
=====================================
OFFICER MARTINEZ (UVU Police):
"We heard the shot and immediately there was chaos. People running everywhere. It took us almost four minutes to pinpoint where the shot came from. The parking structure wasn't on our radar."

PARAMEDIC CHEN:
"When we reached Mr. Kirk, he was unresponsive. The wound was... catastrophic. We initiated treatment but he was pronounced at the hospital. There was nothing that could have saved him given the injury."

OFFICER BRIGGS (First to shooter):
"He was just sitting there. Rifle on the ground beside him. Hands up. He said, 'I'm the one you're looking for.' No resistance at all. It was surreal how calm he was."

SGT. WILLIAMS (Incident Commander):
"In 20 years, I've never seen anything like this at a campus event. We were prepared for protests, maybe a fight. Not a sniper."
=====================================

The first responders paint a picture of chaos followed by an eerily calm surrender.`,
            image: "kirk_witness_interview",
            imagePrompt: "Interview room with first responders giving statements to investigators",
            sources: ["First Responder Statements", "Incident Reports", "Body Camera Footage"],
            choices: [
                {
                    text: "Interview event witnesses",
                    nextScene: "witness_interviews",
                    progressIncrease: 14,
                    evidence: true
                },
                {
                    text: "Review the medical response",
                    nextScene: "aftermath",
                    progressIncrease: 10
                },
                {
                    text: "Examine the security failures",
                    nextScene: "security_investigation",
                    progressIncrease: 12,
                    factual: true
                }
            ],
            educationalNote: "First responder testimony is crucial for establishing timeline and conditions at a crime scene."
        },

        witness_interviews: {
            text: `EVENT WITNESS STATEMENTS

            SEPTEMBER 13, 2025 - 2:00 PM

FBI agents compile statements from attendees:

WITNESS ACCOUNTS
=====================================
ATTENDEE #1 (Front row):
"Kirk was mid-sentence about free speech on campus. Then this... crack. He just dropped. I didn't understand what happened for several seconds."

ATTENDEE #2 (Student):
"I was recording on my phone. I got the moment it happened. I can't stop seeing it. He was so animated one second, then just... gone."

ATTENDEE #3 (TPUSA Staff):
"Charlie always said he knew the risks. He'd gotten death threats for years. We begged him to have better security but he wanted to be accessible."

ATTENDEE #4 (Protester outside):
"We were there to protest peacefully. When we heard the shot, everyone just froze. This isn't what any of us wanted. Violence isn't the answer."

ATTENDEE #5 (Professor):
"I disagreed with everything Kirk stood for, but this... this is terrorism. This is not how we handle political disagreement."
=====================================

The witnesses span the political spectrum but share one emotion: horror.`,
            image: "kirk_witness_testimony",
            imagePrompt: "Multiple witnesses being interviewed by FBI agents in separate rooms",
            sources: ["FBI Witness Statements", "Video Recordings", "University Counseling Reports"],
            choices: [
                {
                    text: "Interview Kirk's family",
                    nextScene: "family_interviews",
                    progressIncrease: 14,
                    factual: true
                },
                {
                    text: "Review the shooter's background",
                    nextScene: "suspect_background",
                    progressIncrease: 12
                },
                {
                    text: "Examine the political response",
                    nextScene: "political_response",
                    progressIncrease: 10
                }
            ],
            educationalNote: "Witness statements often vary significantly due to stress and different vantage points, requiring careful corroboration."
        },

        family_interviews: {
            text: `THE ROBINSON FAMILY SPEAKS

            SEPTEMBER 14, 2025 - 11:00 AM

Tyler Robinson's family provides a statement through their attorney:

FAMILY STATEMENT
=====================================
"We are devastated by what Tyler has done. The person who committed this act is not the son and brother we knew. We cannot explain it. We cannot excuse it.

Tyler was a quiet kid. Good grades. Never in trouble. He worked hard as an electrician. We had no warning signs. No manifesto left behind. No goodbye.

The last time we spoke, he seemed normal. He talked about work. About maybe going back to school. Nothing that suggested... this.

We extend our deepest condolences to the Kirk family. No words can express our sorrow. We are cooperating fully with investigators.

We ask for privacy as we try to understand how our Tyler became capable of this."
=====================================

INVESTIGATOR NOTES:
- Family appears genuinely shocked
- No evidence they knew of plans
- Confirm Robinson was "quiet, kept to himself"
- Religious family, regular church attendance`,
            image: "kirk_witness_interview",
            imagePrompt: "Family attorney reading statement to press outside courthouse",
            sources: ["Family Statement", "Investigator Notes", "Background Interviews"],
            choices: [
                {
                    text: "Interview Robinson's classmates",
                    nextScene: "classmate_interviews",
                    progressIncrease: 12,
                    evidence: true
                },
                {
                    text: "Interview Robinson's roommate",
                    nextScene: "roommate_interview",
                    progressIncrease: 14,
                    factual: true
                },
                {
                    text: "Examine online radicalization",
                    nextScene: "internet_radicalization",
                    progressIncrease: 16,
                    evidence: true
                }
            ],
            educationalNote: "Family members of mass shooters often report seeing no warning signs, highlighting the difficulty of prevention."
        },

        classmate_interviews: {
            text: `FORMER CLASSMATES REMEMBER ROBINSON

            SEPTEMBER 15, 2025 - 3:00 PM

Investigators interview Robinson's former classmates at Utah State:

CLASSMATE ACCOUNTS
=====================================
ENGINEERING CLASSMATE:
"Tyler was smart. Really smart. But quiet. He'd ace tests and never study with us. Kept to himself mostly. I remember he got into a heated debate once about politics in the student union, but that's the only time I saw him passionate."

LAB PARTNER:
"We worked together for a semester. He was reliable, did his share. But we never talked about anything personal. I didn't even know where he was from until I saw the news."

ROOMMATE (Freshman year):
"He was fine to live with. Clean, quiet. Played video games a lot. I remember he was really into history - had books about World War II everywhere. We lost touch after that year."

PROFESSOR HANSEN:
"Tyler was a B+ student. Showed up, did the work, never caused problems. In a class of 200, he didn't stand out in any way."
=====================================

The picture emerges of an unremarkable student who left no impression.`,
            image: "kirk_university_investigation",
            imagePrompt: "University campus with investigators interviewing students",
            sources: ["Student Interviews", "University Records", "Faculty Statements"],
            choices: [
                {
                    text: "Examine his online presence",
                    nextScene: "online_investigation",
                    progressIncrease: 14,
                    factual: true,
                    evidence: true
                },
                {
                    text: "Review his employment history",
                    nextScene: "suspect_background",
                    progressIncrease: 10
                },
                {
                    text: "Interview his current roommate",
                    nextScene: "roommate_interview",
                    progressIncrease: 12
                }
            ],
            educationalNote: "The 'quiet loner' profile appears frequently in mass shooter cases, though it describes millions of non-violent individuals."
        },

        prosecutor_interview: {
            text: `FEDERAL PROSECUTOR BRIEFING

            SEPTEMBER 18, 2025 - 10:00 AM

U.S. Attorney Sarah Mitchell briefs the press on charges:

PROSECUTION STATEMENT
=====================================
"Today we are announcing federal charges against Tyler James Robinson for the assassination of Charles Kirk.

CHARGES FILED:
1. Murder in furtherance of a crime of violence
2. Use of a firearm in a federal crime of violence
3. Interstate travel to commit murder
4. Domestic terrorism

We are seeking the death penalty.

The evidence is overwhelming. We have:
- Eyewitness testimony
- Forensic evidence
- Confession messages
- Detailed timeline

This was a premeditated act of political assassination. The defendant traveled 300 miles with the specific intent to murder Mr. Kirk because of his political beliefs.

This is domestic terrorism, plain and simple. We will prosecute it as such."
=====================================

REPORTER QUESTIONS:
Q: Any co-conspirators?
A: "Evidence indicates a lone actor."

Q: What about the 'manifesto'?
A: "We're investigating referenced materials."`,
            image: "kirk_legal_proceedings",
            imagePrompt: "Federal prosecutor at podium announcing charges with American flag backdrop",
            sources: ["DOJ Press Release", "Federal Indictment", "Press Conference Transcript"],
            choices: [
                {
                    text: "Analyze the legal strategy",
                    nextScene: "legal_proceedings",
                    progressIncrease: 12,
                    factual: true
                },
                {
                    text: "Examine death penalty implications",
                    nextScene: "death_penalty_analysis",
                    progressIncrease: 14,
                    factual: true
                },
                {
                    text: "Review the evidence summary",
                    nextScene: "evidence_review",
                    progressIncrease: 10
                }
            ],
            educationalNote: "Federal assassination charges can carry the death penalty under 18 U.S.C. § 1111."
        },

        erika_kirk_interview: {
            text: `ERIKA KIRK'S STATEMENT

            SEPTEMBER 16, 2025 - 2:00 PM

Charlie Kirk's wife, Erika, releases a statement:

STATEMENT FROM ERIKA KIRK
=====================================
"My husband was murdered for his beliefs. For speaking his mind. For doing what he loved - engaging with young Americans about ideas.

Charlie knew the risks. Every day, we received threats. Every event, there were protesters. But he never backed down. He believed that dialogue, even heated dialogue, was better than silence.

He was a father. Our children will grow up without their dad because someone decided that words deserved death.

I don't want Charlie's death to cause more division. He wouldn't want that. He debated people he disagreed with because he believed in persuasion, not violence.

To those celebrating his death online: you prove everything he warned about. When we celebrate violence against those we disagree with, we've lost our humanity.

Charlie's legacy will be the millions of young people he inspired to think, to question, to engage. That can't be killed."
=====================================

The statement has been viewed over 50 million times.`,
            image: "kirk_press_conference",
            imagePrompt: "Emotional press conference with widow reading statement surrounded by supporters",
            sources: ["Kirk Family Statement", "TPUSA Memorial Release"],
            choices: [
                {
                    text: "Review TPUSA's organizational response",
                    nextScene: "tpusa_response",
                    progressIncrease: 12,
                    factual: true
                },
                {
                    text: "Examine the political aftermath",
                    nextScene: "political_response",
                    progressIncrease: 14
                },
                {
                    text: "Continue investigation",
                    nextScene: "final_report",
                    progressIncrease: 10
                }
            ],
            educationalNote: "Victims' families often become public figures following high-profile crimes, adding trauma to their grief."
        },

        legal_expert_interview: {
            text: `LEGAL EXPERT ANALYSIS

            SEPTEMBER 20, 2025 - 4:00 PM

Constitutional law professor explains the legal landscape:

LEGAL ANALYSIS
=====================================
PROFESSOR DAVID CHEN (Georgetown Law):

"This case raises several critical legal issues:

1. DOMESTIC TERRORISM DESIGNATION
   - Prosecution is using federal terrorism statutes
   - Requires proving ideological motivation
   - Carries enhanced penalties

2. DEATH PENALTY CONSIDERATIONS
   - DOJ must authorize capital prosecution
   - Aggravating factors: premeditation, political motive
   - Mitigating factors: no prior record, mental health

3. FIRST AMENDMENT IMPLICATIONS
   - Speech that inspired action vs. direct incitement
   - Online radicalization and platform liability
   - Chilling effect concerns

4. PRECEDENT
   - Similar to Gabby Giffords shooting prosecution
   - May influence future political violence cases

The trial will likely become a referendum on political violence in America."
=====================================

Legal community expects conviction but debate over appropriate sentence.`,
            image: "kirk_legal_proceedings",
            imagePrompt: "Law school professor giving analysis in office surrounded by legal books",
            sources: ["Legal Expert Interviews", "Constitutional Law Analysis", "DOJ Guidelines"],
            choices: [
                {
                    text: "Review the prosecution's case",
                    nextScene: "prosecutor_interview",
                    progressIncrease: 10
                },
                {
                    text: "Examine death penalty factors",
                    nextScene: "death_penalty_analysis",
                    progressIncrease: 14,
                    factual: true
                },
                {
                    text: "Continue to final report",
                    nextScene: "final_report",
                    progressIncrease: 12
                }
            ],
            educationalNote: "Political assassination cases often set legal precedents that influence how future cases are prosecuted."
        },

        // ========== ANALYSIS SCENES ==========

        motive_analysis: {
            text: `ANALYZING THE MOTIVE

            SEPTEMBER 17, 2025 - 11:00 AM

FBI behavioral analysts present their assessment:

MOTIVE ANALYSIS
=====================================
PRIMARY FACTORS:

1. IDEOLOGICAL
   - Anti-fascist self-identification
   - Opposition to MAGA movement
   - Belief that Kirk represented "fascism"

2. PERSONAL GRIEVANCE
   - No direct connection to Kirk found
   - No personal vendetta identified
   - Appears purely ideological

3. PSYCHOLOGICAL
   - No diagnosed mental illness (pending evaluation)
   - Showed capacity for long-term planning
   - Understood consequences (surrendered immediately)

4. RADICALIZATION PATHWAY
   - Online echo chambers
   - Gradual escalation of rhetoric
   - "Bella Ciao" adoption suggests anti-fascist identity

BEHAVIORAL ASSESSMENT:
"Robinson appears to have viewed himself as acting in defense against perceived fascism. This is a case of ideologically motivated violence where the perpetrator believed his actions were justified, even heroic."
=====================================`,
            image: "kirk_investigation_board",
            imagePrompt: "FBI behavioral analysis board with motive factors mapped out",
            sources: ["FBI Behavioral Analysis Unit", "Psychological Assessment", "Digital Forensics"],
            choices: [
                {
                    text: "Examine the ideology connection",
                    nextScene: "ideology_analysis",
                    progressIncrease: 14,
                    factual: true
                },
                {
                    text: "Review online radicalization",
                    nextScene: "internet_radicalization",
                    progressIncrease: 16,
                    evidence: true
                },
                {
                    text: "Continue investigation",
                    nextScene: "final_report",
                    progressIncrease: 10
                }
            ],
            educationalNote: "Understanding motive is crucial for both prosecution and prevention of future attacks."
        },

        ideology_analysis: {
            text: `THE IDEOLOGY BEHIND THE ACT

            SEPTEMBER 18, 2025 - 3:00 PM

Experts analyze the ideological framework:

IDEOLOGICAL ANALYSIS
=====================================
ANTI-FASCIST IDENTIFICATION:

Robinson's digital footprint shows:
- Engagement with anti-fascist content online
- "Bella Ciao" as profile music on Discord
- Posts critical of "rising fascism in America"
- No membership in formal organizations

EXPERT ANALYSIS (Dr. Sarah Thompson, Extremism Researcher):

"Robinson represents a concerning phenomenon: self-radicalized individuals who adopt ideological labels without organizational membership.

He wasn't 'Antifa' in any operational sense - there's no evidence of group coordination. Instead, he absorbed an ideology online and decided unilaterally to act on it.

This makes prevention extremely difficult. There was no group to infiltrate, no communications to intercept. Just one person, consuming content, and deciding to kill."

KEY DISTINCTION:
- Organizational terrorism: Directed by group
- Lone actor terrorism: Self-directed, ideologically inspired
- Robinson clearly fits the latter category
=====================================`,
            image: "kirk_digital_investigation",
            imagePrompt: "Analysis of online extremism patterns with ideology mapping",
            sources: ["DHS Extremism Report", "Academic Research", "FBI Threat Assessment"],
            choices: [
                {
                    text: "Investigate hate crime elements",
                    nextScene: "hate_crime_analysis",
                    progressIncrease: 12,
                    factual: true
                },
                {
                    text: "Compare to other political violence",
                    nextScene: "political_violence_context",
                    progressIncrease: 14
                },
                {
                    text: "Return to motive analysis",
                    nextScene: "motive_analysis",
                    progressIncrease: 5
                }
            ],
            educationalNote: "Lone actor terrorism has become the dominant form of domestic terrorism in the United States."
        },

        hate_crime_analysis: {
            text: `HATE CRIME DETERMINATION

            SEPTEMBER 19, 2025 - 10:00 AM

Legal analysts examine whether this qualifies as a hate crime:

HATE CRIME ANALYSIS
=====================================
FEDERAL HATE CRIME DEFINITION:
Crime motivated by bias against race, religion, national origin, gender, sexual orientation, or disability.

DOES THIS CASE QUALIFY?

ARGUMENT FOR:
- Kirk targeted for political beliefs
- Could be considered bias against conservatives
- Some jurisdictions include political affiliation

ARGUMENT AGAINST:
- Political affiliation not protected federally
- Utah law doesn't include political belief
- "Hate crime" term may not apply legally

DOJ DECISION:
Prosecuting as domestic terrorism rather than hate crime because:
1. Political motivation clear but not "bias" under law
2. Terrorism statutes carry stronger penalties
3. Sets precedent for political violence

LEGAL EXPERT:
"Whether we call it a hate crime or terrorism, the result is the same - a man was murdered for his beliefs. The label matters less than the justice."
=====================================`,
            image: "kirk_legal_proceedings",
            imagePrompt: "Legal analysis documents with hate crime statutes highlighted",
            sources: ["DOJ Guidelines", "Federal Hate Crime Statutes", "Legal Analysis"],
            choices: [
                {
                    text: "Compare political rhetoric",
                    nextScene: "rhetoric_comparison",
                    progressIncrease: 14,
                    factual: true
                },
                {
                    text: "Review prosecution strategy",
                    nextScene: "prosecutor_interview",
                    progressIncrease: 12
                },
                {
                    text: "Continue investigation",
                    nextScene: "final_report",
                    progressIncrease: 10
                }
            ],
            educationalNote: "Political belief is not a protected category under federal hate crime laws, unlike race or religion."
        },

        rhetoric_comparison: {
            text: `THE RHETORIC OF POLITICAL VIOLENCE

            SEPTEMBER 20, 2025 - 2:00 PM

Media analysts examine the broader context of political rhetoric:

RHETORIC ANALYSIS
=====================================
THE NATIONAL CONVERSATION:

Following the assassination, debate erupts over:
- Responsibility for heated political rhetoric
- Whether violent language incites violence
- Both sides pointing fingers

LEFT-WING RESPONSE:
- Mainstream condemnation of violence
- Some fringe accounts celebrating (condemned)
- Calls for de-escalation

RIGHT-WING RESPONSE:
- Blame placed on "leftist rhetoric"
- Calls for accountability
- Some escalatory language in response

MEDIA ANALYSIS:
"The assassination has not calmed political tensions - it has inflamed them. Both sides are using the tragedy to attack the other, exactly the opposite of what Kirk's widow requested."

HISTORICAL CONTEXT:
- Political violence has occurred across the spectrum
- Recent years: Congressional baseball shooting, January 6th, various plots
- Pattern of escalation concerning experts
=====================================`,
            image: "kirk_political_statements",
            imagePrompt: "Split screen showing various political responses and media coverage",
            sources: ["Media Monitoring", "Social Media Analysis", "Political Statements"],
            choices: [
                {
                    text: "Analyze discourse patterns",
                    nextScene: "discourse_analysis",
                    progressIncrease: 12,
                    factual: true
                },
                {
                    text: "Review Kirk's past statements",
                    nextScene: "kirk_statements_analysis",
                    progressIncrease: 14
                },
                {
                    text: "Continue to final report",
                    nextScene: "final_report",
                    progressIncrease: 10
                }
            ],
            educationalNote: "Research shows that dehumanizing rhetoric correlates with increased political violence, though direct causation is difficult to prove."
        },

        discourse_analysis: {
            text: `ANALYZING POLITICAL DISCOURSE

            SEPTEMBER 21, 2025 - 11:00 AM

Communications experts analyze the state of political discourse:

DISCOURSE ANALYSIS
=====================================
PATTERN IDENTIFICATION:

DR. JAMES MORRISON (Communications Professor):

"What we're seeing is a complete breakdown of shared reality. Two sides operating with different facts, different values, different definitions of words like 'fascism' and 'freedom.'

When one side calls the other 'fascists' and the other calls them 'communists,' we've left the realm of productive debate. These terms have become tribal markers rather than descriptive labels.

Robinson didn't kill Charlie Kirk the person - he killed 'fascism' in his mind. That abstraction allowed him to dehumanize his target.

THE CYCLE:
1. Dehumanizing rhetoric increases
2. 'Other side' seen as existential threat
3. Violence becomes 'self-defense'
4. Act of violence confirms fears
5. Rhetoric escalates further

We're in stage 4 right now. The question is whether we can break the cycle."
=====================================`,
            image: "kirk_digital_investigation",
            imagePrompt: "Academic analysis of political discourse patterns with charts and examples",
            sources: ["Communications Research", "Polling Data", "Academic Studies"],
            choices: [
                {
                    text: "Examine prevention strategies",
                    nextScene: "prevention_analysis",
                    progressIncrease: 14,
                    factual: true
                },
                {
                    text: "Review political violence context",
                    nextScene: "political_violence_context",
                    progressIncrease: 12
                },
                {
                    text: "Continue to final report",
                    nextScene: "final_report",
                    progressIncrease: 10
                }
            ],
            educationalNote: "Political scientists warn that dehumanizing rhetoric across the political spectrum increases risk of violence."
        },

        lone_actor_analysis: {
            text: `THE LONE ACTOR PHENOMENON

            SEPTEMBER 22, 2025 - 9:00 AM

Terrorism experts analyze the lone actor threat:

LONE ACTOR TERRORISM ANALYSIS
=====================================
FBI ASSESSMENT:

"Tyler Robinson fits the classic lone actor profile:

CHARACTERISTICS:
- No formal group membership
- Self-radicalized online
- Planned attack independently
- Did not share plans with others
- Single point of failure for prevention

WHY LONE ACTORS ARE DANGEROUS:
1. No communications to intercept
2. No group dynamics to disrupt
3. No informants to recruit
4. Attack timeline unpredictable

ROBINSON SPECIFICALLY:
- 18-month radicalization period (estimated)
- No red flags to family/employer
- Legal weapon acquisition
- Target selection logical given ideology

THE CHALLENGE:
'We cannot monitor everyone who holds extreme views. The jump from belief to action is unpredictable and often invisible until it's too late.'

- FBI Director, Congressional Testimony"
=====================================`,
            image: "kirk_investigation_report",
            imagePrompt: "FBI threat assessment presentation on lone actor terrorism",
            sources: ["FBI Lone Actor Study", "DHS Threat Assessment", "Congressional Testimony"],
            choices: [
                {
                    text: "Review prevention challenges",
                    nextScene: "prevention_analysis",
                    progressIncrease: 14,
                    factual: true
                },
                {
                    text: "Examine the radicalization timeline",
                    nextScene: "radicalization_timeline",
                    progressIncrease: 12
                },
                {
                    text: "Continue to final report",
                    nextScene: "final_report",
                    progressIncrease: 10
                }
            ],
            educationalNote: "Since 2010, lone actors have been responsible for more domestic terrorism deaths than organized groups."
        },

        performative_violence: {
            text: `VIOLENCE AS PERFORMANCE

            SEPTEMBER 23, 2025 - 2:00 PM

Behavioral experts examine the performative aspects:

PERFORMATIVE VIOLENCE ANALYSIS
=====================================
THE CONCEPT:

Dr. Lisa Park (Terrorism Studies):

"Modern political violence is increasingly 'performative' - designed for an audience as much as for effect.

ROBINSON'S PERFORMATIVE ELEMENTS:
1. Inscribed ammunition (message for investigators)
2. Immediate surrender (ensured survival to see impact)
3. Confession texts (documented his 'why')
4. Target selection (maximum symbolic value)

THE AUDIENCE:
- Media (guaranteed coverage)
- Political allies (hoped for approval)
- Political enemies (intended intimidation)
- History (saw himself as historic actor)

SOCIAL MEDIA AGE:
'Robinson grew up in an era where every act can be broadcast globally. Violence becomes content. The shooter becomes a character in their own narrative.

This is deeply concerning because it gamifies political violence. The act becomes about views, reactions, impact metrics.'

This pattern appears across ideological spectrum in recent attacks."
=====================================`,
            image: "kirk_digital_evidence",
            imagePrompt: "Analysis of social media impact and performative aspects of modern violence",
            sources: ["Terrorism Studies Journal", "FBI Behavioral Unit", "Media Analysis"],
            choices: [
                {
                    text: "Examine internet culture influence",
                    nextScene: "internet_culture_analysis",
                    progressIncrease: 12
                },
                {
                    text: "Review the confession messages",
                    nextScene: "confession_analysis",
                    progressIncrease: 14,
                    factual: true
                },
                {
                    text: "Continue to final report",
                    nextScene: "final_report",
                    progressIncrease: 10
                }
            ],
            educationalNote: "Researchers note that many modern attackers show awareness of media impact, suggesting violence is planned partly for audience effect."
        },

        prevention_analysis: {
            text: `COULD THIS HAVE BEEN PREVENTED?

            SEPTEMBER 24, 2025 - 10:00 AM

Security experts assess prevention possibilities:

PREVENTION ANALYSIS
=====================================
WHAT COULD HAVE STOPPED THIS?

1. BETTER EVENT SECURITY
   - Secured parking structures
   - Counter-sniper positions
   - Threat assessment protocols
   VERDICT: Likely would have prevented THIS attack

2. THREAT MONITORING
   - No specific threats from Robinson found
   - General threats to Kirk not acted upon
   VERDICT: Unlikely to have identified Robinson specifically

3. RED FLAG LAWS
   - Robinson had no disqualifying history
   - Legal gun owner
   - No reported threats
   VERDICT: Would not have applied

4. ONLINE MONITORING
   - First Amendment concerns
   - Volume makes individual tracking impossible
   - Robinson's posts not explicitly threatening
   VERDICT: Impractical and legally problematic

EXPERT CONSENSUS:
"This attack was preventable through better physical security. It was likely NOT preventable through surveillance or intervention - Robinson simply didn't show the warning signs we look for."
=====================================`,
            image: "kirk_investigation_board",
            imagePrompt: "Security experts analyzing prevention failures with timeline and intervention points",
            sources: ["DHS After-Action Report", "Security Consultants", "Civil Liberties Analysis"],
            choices: [
                {
                    text: "Review security failures",
                    nextScene: "security_investigation",
                    progressIncrease: 10
                },
                {
                    text: "Examine lone actor challenges",
                    nextScene: "lone_actor_analysis",
                    progressIncrease: 12,
                    factual: true
                },
                {
                    text: "Continue to final report",
                    nextScene: "final_report",
                    progressIncrease: 14
                }
            ],
            educationalNote: "Prevention of lone actor attacks remains one of the most challenging problems in counterterrorism."
        },

        // ========== BACKGROUND SCENES ==========

        online_investigation: {
            text: `ROBINSON'S DIGITAL FOOTPRINT

            SEPTEMBER 14, 2025 - 8:00 PM

FBI cyber investigators analyze Robinson's online presence:

DIGITAL FORENSICS REPORT
=====================================
PLATFORMS ANALYZED:
- Discord (primary)
- Reddit (occasional)
- Twitter/X (lurker, no posts)
- Instagram (deleted 6 months prior)

DISCORD FINDINGS:
- Member of 3 political discussion servers
- Increasingly radical posts over 18 months
- "Bella Ciao" as profile anthem
- Referenced "doing something" about fascism
- No specific threats found

REDDIT ACTIVITY:
- Commented on political subreddits
- Generally anti-right-wing sentiment
- Nothing explicitly violent

SEARCH HISTORY:
- Charlie Kirk events
- Utah Valley University campus map
- .30-06 ballistics
- "Political assassination history"
- "Italian resistance fighters"

INVESTIGATOR NOTE:
"His digital trail shows radicalization but nothing that would have triggered a report. Millions share similar views without acting on them."
=====================================`,
            image: "kirk_digital_investigation",
            imagePrompt: "FBI cyber lab with multiple screens showing social media analysis",
            sources: ["FBI Digital Forensics", "Platform Data Requests", "ISP Records"],
            choices: [
                {
                    text: "Examine specific online communities",
                    nextScene: "online_communities",
                    progressIncrease: 14,
                    evidence: true
                },
                {
                    text: "Review the radicalization timeline",
                    nextScene: "radicalization_timeline",
                    progressIncrease: 12,
                    factual: true
                },
                {
                    text: "Look for manifesto",
                    nextScene: "manifesto_investigation",
                    progressIncrease: 16,
                    evidence: true
                }
            ],
            educationalNote: "Digital forensics has become essential in understanding the radicalization pathways of lone actor terrorists."
        },

        online_communities: {
            text: `THE ONLINE ECHO CHAMBERS

            SEPTEMBER 15, 2025 - 11:00 AM

Investigators map Robinson's online community involvement:

ONLINE COMMUNITY ANALYSIS
=====================================
PRIMARY DISCORD SERVER: "Political Underground"
- ~5,000 members
- Mix of leftist ideologies
- Anti-fascist content common
- Not explicitly violent
- Robinson: Active member since 2024

HIS ROLE:
- Not a moderator or leader
- Regular commenter
- Shared news articles
- Engaged in debates
- Gradually more extreme takes

CONCERNING POSTS (Selected):

March 2025: "Sometimes I wonder if debate even works against fascists"

June 2025: "The Italian partisans had the right idea"

August 2025: "Kirk is speaking in Utah next month. Fascism coming to my backyard."

September 10, 2025: "Some things are worth sacrificing for" (2 days before attack)

EXPERT ANALYSIS:
"These posts show escalation but nothing that would clearly indicate imminent violence. Thousands post similar content without acting."
=====================================`,
            image: "kirk_digital_evidence",
            imagePrompt: "Analysis of online community structure and radicalization pathway",
            sources: ["FBI Community Analysis", "Platform Data", "Extremism Research"],
            choices: [
                {
                    text: "Search for a manifesto",
                    nextScene: "manifesto_investigation",
                    progressIncrease: 16,
                    evidence: true
                },
                {
                    text: "Analyze the radicalization pattern",
                    nextScene: "internet_radicalization",
                    progressIncrease: 14,
                    factual: true
                },
                {
                    text: "Return to background investigation",
                    nextScene: "suspect_background",
                    progressIncrease: 5
                }
            ],
            educationalNote: "Online radicalization often occurs gradually in communities that aren't explicitly violent but normalize extreme views."
        },

        manifesto_investigation: {
            text: `SEARCHING FOR A MANIFESTO

            SEPTEMBER 16, 2025 - 4:00 PM

Investigators search for any written explanation:

MANIFESTO SEARCH
=====================================
INVESTIGATION STATUS:

Traditional manifesto: NOT FOUND
- No document left behind
- No email to media
- No pre-scheduled posts

WHAT WAS FOUND:

1. DISCORD MESSAGE (referenced):
   Robinson mentioned "writing something" to explain his views in August 2025. No document recovered.

2. TEXT TO PARTNER:
   Confession messages serve as de facto explanation of motive. "I killed the fascist. I'm not sorry."

3. BULLET INSCRIPTIONS:
   "Hey Facist! Catch!" and "Bella Ciao" serve as ideological statement.

4. SEARCH HISTORY:
   Researched other manifestos (Christchurch, El Paso) but apparently didn't write his own.

FBI ASSESSMENT:
"Robinson may have decided a manifesto wasn't necessary - his target and method would speak for themselves. The inscribed ammunition was his statement."

This differs from many recent attackers who left extensive writings.
=====================================`,
            image: "kirk_digital_investigation",
            imagePrompt: "Digital forensics search for hidden documents and deleted files",
            sources: ["FBI Digital Analysis", "Device Forensics", "Platform Subpoenas"],
            choices: [
                {
                    text: "Analyze what the inscriptions reveal",
                    nextScene: "internet_culture_analysis",
                    progressIncrease: 14,
                    factual: true
                },
                {
                    text: "Review the confession messages",
                    nextScene: "confession_analysis",
                    progressIncrease: 12
                },
                {
                    text: "Continue investigation",
                    nextScene: "final_report",
                    progressIncrease: 10
                }
            ],
            educationalNote: "Not all attackers leave manifestos. Some communicate through their target selection and method instead."
        },

        january6_connection: {
            text: `INVESTIGATING JANUARY 6TH CONNECTIONS

            SEPTEMBER 17, 2025 - 9:00 AM

Investigators check for any connection to January 6th events:

JANUARY 6TH ANALYSIS
=====================================
INVESTIGATION QUESTION:
Did Robinson's radicalization connect to January 6, 2021?

FINDINGS:

DIRECT INVOLVEMENT: None
- Robinson not present at Capitol
- No charges related to J6
- No known associates involved

IDEOLOGICAL CONNECTION: Significant
- Discord posts reference J6 as "proof of fascism"
- Cited J6 as reason to "fight back"
- Viewed J6 participants as "terrorists"
- Saw Kirk as J6 supporter/enabler

TIMELINE CORRELATION:
- Robinson's online radicalization began ~2023
- Accelerated after J6 prosecutions and coverage
- Frequently posted about "accountability"

EXPERT ASSESSMENT:
"January 6th served as a radicalizing event for Robinson - but from the opposite perspective. He saw it as confirmation that fascism was real and imminent, requiring resistance."
=====================================

J6 appears to be an ideological catalyst, not an operational connection.`,
            image: "kirk_investigation_board",
            imagePrompt: "Investigation board showing timeline correlation between January 6th and radicalization",
            sources: ["FBI Investigation", "Capitol Police Records", "Social Media Analysis"],
            choices: [
                {
                    text: "Examine broader political violence context",
                    nextScene: "political_violence_context",
                    progressIncrease: 14,
                    factual: true
                },
                {
                    text: "Review Robinson's ideology",
                    nextScene: "ideology_analysis",
                    progressIncrease: 12
                },
                {
                    text: "Continue investigation",
                    nextScene: "final_report",
                    progressIncrease: 10
                }
            ],
            educationalNote: "Major political events can serve as radicalizing catalysts for individuals across the ideological spectrum."
        },

        campus_conflicts: {
            text: `CAMPUS POLITICAL TENSIONS

            SEPTEMBER 18, 2025 - 1:00 PM

Investigators examine the climate at Utah Valley University:

CAMPUS CONTEXT
=====================================
UVU POLITICAL ENVIRONMENT:

CONSERVATIVE PRESENCE:
- Active TPUSA chapter (200+ members)
- Regular conservative speakers
- Kirk had visited previously (2023)

OPPOSITION:
- Progressive student groups
- Faculty critics
- Protest at every major event

THE KIRK EVENT:
- Announced 3 weeks prior
- Immediate controversy
- Counter-protest planned
- Heightened security discussed but not implemented

PRIOR INCIDENTS:
- 2023 Kirk visit: Protests, no violence
- 2024 Other speaker: Minor scuffle
- General tension but no serious threats

STUDENT INTERVIEWS:
"Campus was polarized about Kirk coming. Some saw it as free speech, others as platforming hate. But protests were planned - no one expected THIS."

Robinson was NOT a UVU student - he traveled from 300 miles away.
=====================================`,
            image: "kirk_university_investigation",
            imagePrompt: "University campus with political tension visible through posters and divided student groups",
            sources: ["University Administration", "Student Government", "Campus Police"],
            choices: [
                {
                    text: "Review TPUSA's campus presence",
                    nextScene: "tpusa_history",
                    progressIncrease: 12,
                    factual: true
                },
                {
                    text: "Examine security decisions",
                    nextScene: "security_investigation",
                    progressIncrease: 14,
                    evidence: true
                },
                {
                    text: "Return to crime scene",
                    nextScene: "crime_scene_analysis",
                    progressIncrease: 10
                }
            ],
            educationalNote: "Campus political events have become increasingly contentious, requiring enhanced security planning."
        },

        planning_week: {
            text: `THE WEEK BEFORE THE ATTACK

            SEPTEMBER 19, 2025 - 3:00 PM

Investigators reconstruct Robinson's final week:

PLANNING TIMELINE
=====================================
SEPTEMBER 4-10, 2025:

SEPTEMBER 4 (Thursday):
- Normal work day at electrical company
- Searched "UVU Kirk event details"
- Called in sick for September 11-12

SEPTEMBER 5 (Friday):
- Visited shooting range (confirmed by records)
- Purchased ammunition
- Told roommate he was "visiting family"

SEPTEMBER 6-7 (Weekend):
- Whereabouts unclear
- Phone data shows home location
- Possibly writing/planning

SEPTEMBER 8 (Monday):
- Drove to Salt Lake City area (recon?)
- Returned same day
- "Bella Ciao" posts on Discord

SEPTEMBER 9 (Tuesday):
- Work (via phone check-in only)
- Packed vehicle (neighbor observed)

SEPTEMBER 10 (Wednesday):
- Final Discord post
- Final text to partner (normal)
- Vehicle loaded with rifle

SEPTEMBER 11 (Thursday):
- Left at 6:30 AM
- Arrived UVU 1:15 PM
- Executed attack 3:47 PM
=====================================`,
            image: "kirk_timeline_investigation",
            imagePrompt: "Detailed timeline board showing Robinson's activities in final week",
            sources: ["FBI Timeline Analysis", "Phone Records", "Witness Statements"],
            choices: [
                {
                    text: "Examine the trigger event",
                    nextScene: "trigger_investigation",
                    progressIncrease: 14,
                    factual: true
                },
                {
                    text: "Review the day of attack",
                    nextScene: "suspect_movements",
                    progressIncrease: 12,
                    evidence: true
                },
                {
                    text: "Continue to final report",
                    nextScene: "final_report",
                    progressIncrease: 10
                }
            ],
            educationalNote: "The planning phase of targeted violence often shows specific preparation behaviors that may be observable in retrospect."
        },

        trigger_investigation: {
            text: `WHAT TRIGGERED THE ATTACK?

            SEPTEMBER 20, 2025 - 10:00 AM

Behavioral analysts examine potential triggers:

TRIGGER ANALYSIS
=====================================
QUESTION: What pushed Robinson from ideation to action?

POTENTIAL TRIGGERS EXAMINED:

1. KIRK'S ANNOUNCEMENT (August 2025)
   - Event announced 3 weeks before
   - Robinson's posts increased after
   - "Fascism coming to my backyard"
   ASSESSMENT: Likely primary trigger

2. PERSONAL STRESSORS
   - No job loss
   - No relationship breakdown
   - No family crisis
   ASSESSMENT: Not a factor

3. ONLINE ESCALATION
   - Increasingly extreme posts
   - Possible encouragement (investigating)
   - Echo chamber effect
   ASSESSMENT: Contributing factor

4. SPECIFIC CONTENT
   - Watched Kirk debate clips
   - Read criticism of TPUSA
   - Consumed anti-fascist content
   ASSESSMENT: Reinforcing factor

FBI CONCLUSION:
"The Kirk event announcement appears to be the crystallizing event. Robinson had the ideology; Kirk's visit provided the opportunity and urgency."
=====================================`,
            image: "kirk_investigation_board",
            imagePrompt: "Behavioral analysis chart showing trigger factors and escalation pathway",
            sources: ["FBI Behavioral Unit", "Digital Timeline", "Psychological Assessment"],
            choices: [
                {
                    text: "Review the radicalization process",
                    nextScene: "radicalization_timeline",
                    progressIncrease: 12
                },
                {
                    text: "Examine the planning week",
                    nextScene: "planning_week",
                    progressIncrease: 10
                },
                {
                    text: "Continue to final report",
                    nextScene: "final_report",
                    progressIncrease: 14
                }
            ],
            educationalNote: "Targeted violence often requires both long-term radicalization and a specific triggering event or opportunity."
        },

        // ========== POLITICAL SCENES ==========

        political_response: {
            text: `THE POLITICAL AFTERMATH

            SEPTEMBER 13, 2025 - 8:00 AM

Political leaders respond to the assassination:

POLITICAL RESPONSES
=====================================
PRESIDENT TRUMP:
"Charlie Kirk was a patriot, a friend, and a warrior for our movement. He was murdered by a leftist terrorist. The radical left has blood on their hands. We will not forget, and we will not forgive."

PRESIDENT BIDEN (former):
"Political violence has no place in America. I condemn this act unequivocally. My prayers are with the Kirk family."

GOVERNOR COX (Utah):
"This is a dark day for Utah and America. We will pursue justice to the fullest extent of the law. Violence is never the answer to political disagreement."

SENATOR BERNIE SANDERS:
"I strongly condemn this horrific act of violence. In a democracy, we defeat bad ideas with better ideas, not with bullets."

SENATOR TED CRUZ:
"The left has created a climate of hate that led directly to this. They called Kirk a fascist for years. Words have consequences."
=====================================

The responses largely fell along partisan lines, each side blaming the other.`,
            image: "kirk_political_statements",
            imagePrompt: "Multiple screens showing political leaders giving statements about assassination",
            sources: ["Official Statements", "Press Conferences", "Social Media"],
            choices: [
                {
                    text: "Analyze the rhetoric comparison",
                    nextScene: "rhetoric_comparison",
                    progressIncrease: 14,
                    factual: true
                },
                {
                    text: "Review TPUSA's response",
                    nextScene: "tpusa_response",
                    progressIncrease: 12
                },
                {
                    text: "Continue investigation",
                    nextScene: "final_report",
                    progressIncrease: 10
                }
            ],
            educationalNote: "Political assassinations historically inflame partisan tensions rather than unite the country."
        },

        political_violence_context: {
            text: `POLITICAL VIOLENCE IN CONTEXT

            SEPTEMBER 21, 2025 - 2:00 PM

Historians contextualize the assassination:

HISTORICAL CONTEXT
=====================================
RECENT POLITICAL VIOLENCE (2016-2025):

2017: Congressional Baseball Shooting
      - Target: Republican congressmen
      - Shooter: Left-wing activist
      - Outcome: Rep. Scalise wounded

2017-2020: Various plots foiled
      - Targets across spectrum
      - Most intercepted before execution

2021: January 6th Capitol Attack
      - Target: Congress, VP Pence
      - Participants: Pro-Trump
      - Outcome: Deaths, injuries, prosecutions

2022: Pelosi Attack
      - Target: Nancy Pelosi
      - Outcome: Husband injured

2024: Trump Assassination Attempts
      - Multiple incidents
      - Various motivations

2025: Kirk Assassination
      - First successful political assassination of major figure since RFK (1968)
=====================================

EXPERT: "We're in an era of escalating political violence from all directions. Kirk's death is not an aberration - it's a culmination."`,
            image: "kirk_investigation_board",
            imagePrompt: "Historical timeline of political violence in America with photographs and dates",
            sources: ["FBI Domestic Terrorism Reports", "Historical Archives", "Academic Studies"],
            choices: [
                {
                    text: "Examine prevention strategies",
                    nextScene: "prevention_analysis",
                    progressIncrease: 14,
                    factual: true
                },
                {
                    text: "Review the lone actor phenomenon",
                    nextScene: "lone_actor_analysis",
                    progressIncrease: 12
                },
                {
                    text: "Continue to final report",
                    nextScene: "final_report",
                    progressIncrease: 10
                }
            ],
            educationalNote: "Political violence in America has increased significantly since 2016, affecting figures across the political spectrum."
        },

        kirk_statements_analysis: {
            text: `KIRK'S CONTROVERSIAL STATEMENTS

            SEPTEMBER 22, 2025 - 11:00 AM

Media analysts examine Kirk's rhetoric and its critics:

KIRK'S PUBLIC STATEMENTS
=====================================
SUPPORTERS HIGHLIGHT:
- Free speech advocacy
- Pro-American messaging
- Youth engagement
- Anti-establishment appeal

CRITICS POINTED TO:
- Inflammatory rhetoric about opponents
- "Fascism" accusations against left
- Dismissal of systemic racism
- LGBTQ+ policy positions
- Election fraud claims

SPECIFIC STATEMENTS (Documented):
- Called universities "indoctrination camps"
- Referred to diversity programs as "racist"
- Questioned election integrity repeatedly
- Criticized transgender rights

THE DEBATE:
- Does controversial speech justify targeting?
- CLEAR ANSWER: No. Never.
- But understanding why someone was targeted is not justification

LEGAL EXPERT:
"Kirk's speech was fully protected by the First Amendment. Disagreement with speech - no matter how strongly felt - never justifies violence. This is fundamental to democracy."
=====================================`,
            image: "kirk_controversy_documents",
            imagePrompt: "Collection of media clips and headlines showing Kirk's controversial statements",
            sources: ["TPUSA Archives", "Media Coverage", "Fact-Check Organizations"],
            choices: [
                {
                    text: "Review TPUSA controversies",
                    nextScene: "tpusa_controversies",
                    progressIncrease: 12,
                    factual: true
                },
                {
                    text: "Examine the ideology analysis",
                    nextScene: "ideology_analysis",
                    progressIncrease: 14
                },
                {
                    text: "Continue to final report",
                    nextScene: "final_report",
                    progressIncrease: 10
                }
            ],
            educationalNote: "Examining a victim's public statements provides context but never justification for violence against them."
        },

        tpusa_response: {
            text: `TURNING POINT USA RESPONDS

            SEPTEMBER 14, 2025 - 10:00 AM

TPUSA releases official response:

ORGANIZATIONAL RESPONSE
=====================================
OFFICIAL STATEMENT:

"Turning Point USA mourns the loss of our founder, our leader, and our friend Charlie Kirk.

Charlie built TPUSA from nothing into a movement of millions. He believed that ideas should be debated, not silenced. He gave his life for that belief.

We will honor his legacy by:
1. Continuing our mission
2. Expanding campus presence
3. Never backing down from debate
4. Working for a less violent America

To those who celebrated his death: you reveal only your own moral bankruptcy.

To our supporters: do not respond with hate. That's not what Charlie would want.

TPUSA will endure. Charlie's ideas will endure. The assassin failed."

NEW LEADERSHIP:
- Interim CEO appointed
- Operations continuing
- Membership surge reported post-assassination
=====================================`,
            image: "kirk_tpusa_organization_profile",
            imagePrompt: "TPUSA headquarters with memorial and organizational response being coordinated",
            sources: ["TPUSA Official Statement", "Press Release", "Organizational Filings"],
            choices: [
                {
                    text: "Review political aftermath",
                    nextScene: "political_response",
                    progressIncrease: 10
                },
                {
                    text: "Examine legacy impact",
                    nextScene: "martyrdom_analysis",
                    progressIncrease: 14,
                    factual: true
                },
                {
                    text: "Continue to final report",
                    nextScene: "final_report",
                    progressIncrease: 12
                }
            ],
            educationalNote: "Organizations often experience membership surges following attacks on their leaders, a phenomenon called the 'martyr effect.'"
        },

        martyrdom_analysis: {
            text: `THE MARTYRDOM EFFECT

            SEPTEMBER 25, 2025 - 3:00 PM

Analysts examine how the assassination affected Kirk's legacy:

MARTYRDOM ANALYSIS
=====================================
IMMEDIATE IMPACT:

TPUSA MEMBERSHIP:
- Pre-assassination: ~500,000
- Two weeks after: ~750,000 (+50%)
- Donations surged 300%

PUBLIC PERCEPTION:
- Kirk favorability increased post-death
- Previous critics expressed condolences
- Controversial positions less discussed

MEDIA COVERAGE:
- Focused on Kirk as victim
- Criticism largely paused
- Legacy pieces predominantly positive

POLITICAL EFFECT:
- Right-wing rhetoric intensified
- "Don't let his death be in vain"
- Used to attack left broadly

HISTORICAL PARALLEL:
"This follows the pattern of political martyrdom. The person's controversial aspects fade while their status as victim of political violence elevates them. Robinson may have created exactly what he sought to destroy."

- Political Scientist, Stanford
=====================================`,
            image: "kirk_aftermath_memorial",
            imagePrompt: "Memorial services and tribute coverage showing martyrdom effect in action",
            sources: ["Polling Data", "Membership Records", "Media Analysis"],
            choices: [
                {
                    text: "Review the outstanding questions",
                    nextScene: "outstanding_questions",
                    progressIncrease: 12,
                    factual: true
                },
                {
                    text: "Examine the investigation conclusion",
                    nextScene: "final_report",
                    progressIncrease: 14
                },
                {
                    text: "Review the full evidence",
                    nextScene: "evidence_review",
                    progressIncrease: 10
                }
            ],
            educationalNote: "Political assassinations often backfire by elevating victims to martyr status, amplifying rather than silencing their message."
        },

        // ========== QUIZ SCENES ==========

        quiz_correct_1: {
            text: `CORRECT!

That's right. Tyler Robinson was confirmed as the lone shooter through extensive evidence including DNA, forensics, confession, and eyewitness testimony.

The investigation found no evidence of accomplices or organizational involvement.

Your investigative instincts are sharp.`,
            image: "kirk_quiz_screen",
            imagePrompt: "Green checkmark indicating correct answer on investigation quiz",
            sources: [],
            choices: [
                {
                    text: "Continue to next question",
                    nextScene: "knowledge_assessment",
                    progressIncrease: 5
                }
            ]
        },

        quiz_correct_2: {
            text: `CORRECT!

Yes, the bullet casings were inscribed with "Hey Facist! Catch!" and lyrics from "Bella Ciao," the Italian anti-fascist anthem.

This evidence was crucial in establishing ideological motivation.

Excellent attention to detail.`,
            image: "kirk_quiz_screen",
            imagePrompt: "Green checkmark indicating correct answer on investigation quiz",
            sources: [],
            choices: [
                {
                    text: "Continue to final assessment",
                    nextScene: "quiz_complete",
                    progressIncrease: 5
                }
            ]
        },

        quiz_wrong_1: {
            text: `NOT QUITE.

That's not accurate based on the evidence we reviewed.

Remember: All evidence pointed to Tyler Robinson acting alone. No accomplices or organizational backing was found despite extensive investigation.

Let's continue your assessment.`,
            image: "kirk_quiz_screen",
            imagePrompt: "Review screen showing correct information",
            sources: [],
            choices: [
                {
                    text: "Continue assessment",
                    nextScene: "knowledge_assessment",
                    progressIncrease: 0
                }
            ]
        },

        quiz_wrong_2: {
            text: `INCORRECT.

The evidence showed Robinson had no formal ties to any organization. He was self-radicalized online and acted independently.

This is a crucial distinction in understanding lone actor terrorism.`,
            image: "kirk_quiz_screen",
            imagePrompt: "Review screen with correct information highlighted",
            sources: [],
            choices: [
                {
                    text: "Continue assessment",
                    nextScene: "knowledge_assessment",
                    progressIncrease: 0
                }
            ]
        },

        quiz_wrong_3: {
            text: `NOT CORRECT.

Review the evidence more carefully. The investigation established clear facts about the perpetrator, weapon, and motive.

Accurate understanding of cases like this is crucial for preventing future violence.`,
            image: "kirk_quiz_screen",
            imagePrompt: "Review screen encouraging careful evidence analysis",
            sources: [],
            choices: [
                {
                    text: "Return to assessment",
                    nextScene: "knowledge_assessment",
                    progressIncrease: 0
                }
            ]
        },

        // ========== REMAINING SCENES ==========

        fbi_sources: {
            text: `FBI SOURCE DOCUMENTS

            CLASSIFIED BRIEFING

Your FBI sources provide additional context:

INTERNAL ASSESSMENT
=====================================
THREAT LEVEL: Elevated nationwide
- Copycat attacks possible
- Both left and right extremists activated
- Enhanced protection for political figures

INVESTIGATION STATUS:
- Primary case: Closed (suspect in custody)
- Conspiracy investigation: Ongoing
- No evidence of broader plot found

DOMESTIC TERRORISM LANDSCAPE:
- Lone actors remain primary threat
- Online radicalization accelerating
- Prevention extremely challenging

RECOMMENDATIONS:
1. Enhanced security for high-profile events
2. Improved threat assessment protocols
3. Social media monitoring (within legal limits)
4. Community intervention programs

CLASSIFIED NOTE:
"Robinson's case is textbook lone actor terrorism. No group to disrupt, no communications to intercept. Our prevention capabilities are limited against this threat type."
=====================================`,
            image: "kirk_investigation_report",
            imagePrompt: "FBI classified briefing document with threat assessments",
            sources: ["FBI Internal Documents", "Classified Briefing"],
            choices: [
                {
                    text: "Review final report",
                    nextScene: "final_report",
                    progressIncrease: 14
                },
                {
                    text: "Examine prevention challenges",
                    nextScene: "prevention_analysis",
                    progressIncrease: 12,
                    factual: true
                }
            ],
            educationalNote: "FBI threat assessments help prioritize resources but cannot predict all lone actor attacks."
        },

        former_members: {
            text: `FORMER TPUSA MEMBERS SPEAK

            SEPTEMBER 23, 2025 - 4:00 PM

Former TPUSA members provide perspective:

FORMER MEMBER INTERVIEWS
=====================================
FORMER CAMPUS LEADER (Anonymous):
"I left TPUSA because it got too extreme for me. But Kirk didn't deserve this. Nobody does. I disagreed with him, but I'm horrified."

FORMER STAFF MEMBER:
"Charlie was intense but he genuinely believed in what he was doing. He wasn't the monster people made him out to be. He was a true believer."

FORMER MEMBER NOW PROGRESSIVE:
"I went through a political transformation. I used to be TPUSA, now I'm on the opposite side. But this? This makes me sick. This isn't justice. This is murder."

CONSERVATIVE WHO LEFT OVER RHETORIC:
"TPUSA's rhetoric got too heated for me. But that's true on both sides now. We're all guilty of dehumanizing each other. This is where it leads."
=====================================

Even those who left show universal condemnation of violence.`,
            image: "kirk_witness_interview",
            imagePrompt: "Anonymous interviews with faces obscured discussing TPUSA experience",
            sources: ["Anonymous Interviews", "Former Member Statements"],
            choices: [
                {
                    text: "Review TPUSA history",
                    nextScene: "tpusa_history",
                    progressIncrease: 10
                },
                {
                    text: "Continue to final report",
                    nextScene: "final_report",
                    progressIncrease: 12
                }
            ],
            educationalNote: "Former members of political organizations often provide valuable perspective on organizational culture and evolution."
        },

        family_decision: {
            text: `THE KIRK FAMILY'S DECISION

            SEPTEMBER 26, 2025 - 2:00 PM

The Kirk family announces their decision on involvement in prosecution:

FAMILY STATEMENT
=====================================
ERIKA KIRK:

"Our family has decided to participate in the prosecution process. We will be present at trial. We will face the man who killed Charlie.

We considered staying away. The pain is unbearable. But Charlie would have faced this. He never backed down from anything.

We support the death penalty in this case. Not out of vengeance, but because we believe in consequences. Charlie believed in accountability.

To those who ask about forgiveness: we're not there yet. Maybe we never will be. But we won't let hate consume us. That's not who we are.

Charlie's children will know their father was a hero to millions. They'll know he died standing up for his beliefs. That's his legacy.

We ask for continued privacy but wanted to share our position. God bless America, and God bless Charlie Kirk."
=====================================`,
            image: "kirk_press_conference",
            imagePrompt: "Kirk family at press conference announcing their position on prosecution",
            sources: ["Family Statement", "Legal Filings"],
            choices: [
                {
                    text: "Review the legal proceedings",
                    nextScene: "legal_proceedings",
                    progressIncrease: 12,
                    factual: true
                },
                {
                    text: "Continue to final report",
                    nextScene: "final_report",
                    progressIncrease: 10
                }
            ],
            educationalNote: "Victim family participation in prosecution is a constitutional right and often provides closure."
        },

        verified_facts_focus: {
            text: `VERIFIED FACTS SUMMARY

            CASE STATUS: Active Prosecution

This investigation focused exclusively on verified, documented facts:

CONFIRMED FACTS
=====================================
THE VICTIM:
- Charlie Kirk, 31
- Founder, Turning Point USA
- Conservative activist and commentator

THE PERPETRATOR:
- Tyler James Robinson, 22
- Electrician from Washington, Utah
- No prior criminal record

THE ACT:
- September 11, 2025, 3:47 PM
- Utah Valley University
- Single shot, 142 yards
- Mauser Model 98 rifle

THE EVIDENCE:
- DNA match confirmed
- Confession messages recovered
- Forensic evidence conclusive
- Eyewitness testimony consistent

THE MOTIVE:
- Political/ideological
- Anti-fascist self-identification
- No organizational ties found

THE STATUS:
- Defendant in federal custody
- Capital charges filed
- Trial pending
=====================================`,
            image: "kirk_final_report",
            imagePrompt: "Official case summary document with verified facts highlighted",
            sources: ["Court Documents", "FBI Reports", "Official Statements"],
            choices: [
                {
                    text: "Complete investigation",
                    nextScene: "final_report",
                    progressIncrease: 10
                },
                {
                    text: "Review all evidence",
                    nextScene: "evidence_review",
                    progressIncrease: 5
                }
            ],
            educationalNote: "Investigative journalism requires strict adherence to verified facts, especially in politically charged cases."
        },

        outstanding_questions: {
            text: `QUESTIONS THAT REMAIN

            INVESTIGATION NOTES

Despite extensive investigation, some questions remain:

OUTSTANDING QUESTIONS
=====================================
1. THE MANIFESTO
   - Robinson referenced "writing something"
   - No document found
   - Was it destroyed? Never completed?

2. RADICALIZATION SPECIFICS
   - General pathway understood
   - Specific triggering content unclear
   - Full online history still being analyzed

3. RECONNAISSANCE
   - Evidence suggests prior visit to campus
   - Details unclear
   - How long was this planned?

4. ONLINE ENCOURAGEMENT
   - Did anyone encourage him?
   - Discord analysis ongoing
   - Potential charges for others?

5. SECURITY DECISIONS
   - Who decided against enhanced security?
   - Were threats properly communicated?
   - Civil liability questions remain

6. COPYCAT CONCERNS
   - Has this inspired others?
   - Ongoing threat monitoring
   - Prevention measures unclear
=====================================

Some questions may never be fully answered.`,
            image: "kirk_investigation_board",
            imagePrompt: "Investigation board with remaining questions highlighted",
            sources: ["Ongoing Investigation", "FBI Briefings"],
            choices: [
                {
                    text: "Complete investigation",
                    nextScene: "final_report",
                    progressIncrease: 12
                },
                {
                    text: "Review verified facts",
                    nextScene: "verified_facts_focus",
                    progressIncrease: 10,
                    factual: true
                }
            ],
            educationalNote: "Complex investigations often leave questions unanswered, requiring ongoing analysis."
        },

        death_penalty_analysis: {
            text: `THE DEATH PENALTY QUESTION

            LEGAL ANALYSIS

Federal prosecutors are seeking capital punishment:

DEATH PENALTY ANALYSIS
=====================================
LEGAL BASIS:
- 18 U.S.C. § 1111 (Murder)
- Federal death penalty authorized
- DOJ authorization received

AGGRAVATING FACTORS:
1. Premeditation (extensive planning)
2. Political motivation (domestic terrorism)
3. Public figure victim
4. Intent to influence political process
5. Lack of remorse (per confession)

MITIGATING FACTORS:
1. No prior criminal history
2. Young age (22)
3. Potential mental health issues (pending evaluation)
4. Cooperated after arrest

PUBLIC OPINION:
- Conservatives strongly favor execution
- Some progressives oppose on principle
- Legal experts divided

HISTORICAL CONTEXT:
- Last federal political assassination execution: None in modern era
- Would be precedent-setting case
- Appeals likely to take years
=====================================

The death penalty decision will be made by jury if case goes to trial.`,
            image: "kirk_legal_proceedings",
            imagePrompt: "Legal documents showing death penalty analysis and precedents",
            sources: ["DOJ Guidelines", "Legal Precedents", "Constitutional Analysis"],
            choices: [
                {
                    text: "Review prosecution case",
                    nextScene: "prosecutor_interview",
                    progressIncrease: 10
                },
                {
                    text: "Continue to final report",
                    nextScene: "final_report",
                    progressIncrease: 12
                }
            ],
            educationalNote: "Federal death penalty cases require DOJ authorization and present unique constitutional considerations."
        }
    }
};

// Make it available globally
window.CharlieKirkStoryExpanded = CharlieKirkStoryExpanded;

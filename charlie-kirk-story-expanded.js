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
        }
    }
};

// Make it available globally
window.CharlieKirkStoryExpanded = CharlieKirkStoryExpanded;

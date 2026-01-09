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
            imagePrompt: "1970s FBI office at night, activists searching through filing cabinets by flashlight, classified COINTELPRO documents scattered",
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
                    nextScene: "systematic_violations",
                    progressIncrease: 25
                }
            ],
            educationalNote: "COINTELPRO was the FBI's secret program to surveil, infiltrate, and disrupt domestic political organizations from 1956-1971."
        },

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
                    nextScene: "black_panther_disruption",
                    progressIncrease: 25
                },
                {
                    text: "Examine anti-war movement infiltration",
                    nextScene: "antiwar_infiltration",
                    progressIncrease: 20
                }
            ],
            educationalNote: "The stolen documents revealed the full scope of FBI domestic surveillance and disruption operations."
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
            sources: ["Church Committee Report", "FBI Files on MLK"],
            choices: [
                {
                    text: "This must be exposed immediately",
                    nextScene: "media_release_strategy",
                    progressIncrease: 35,
                    evidence: true
                },
                {
                    text: "Find more evidence of FBI crimes",
                    nextScene: "systematic_violations",
                    progressIncrease: 30
                },
                {
                    text: "Connect to other civil rights targeting",
                    nextScene: "civil_rights_persecution",
                    progressIncrease: 30
                }
            ],
            educationalNote: "The FBI's campaign against MLK is one of the most documented cases of government harassment of a civil rights leader."
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
            sources: ["Church Committee Report", "COINTELPRO Papers"],
            choices: [
                {
                    text: "Focus on Fred Hampton assassination",
                    nextScene: "hampton_assassination",
                    progressIncrease: 40,
                    evidence: true
                },
                {
                    text: "Document the provocateur operations",
                    nextScene: "provocateur_network",
                    progressIncrease: 30
                },
                {
                    text: "Expose the community program targeting",
                    nextScene: "community_program_destruction",
                    progressIncrease: 25
                }
            ],
            educationalNote: "The FBI considered the Panthers' free breakfast program a greater threat than any violent activity."
        },

        antiwar_infiltration: {
            text: `INFILTRATING THE ANTI-WAR MOVEMENT

COINTELPRO targeted Americans opposing the Vietnam War:

✌️ OPERATION: CHAOS (CIA) + COINTELPRO (FBI)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Infiltrate every major anti-war group
• Use provocateurs to encourage violence
• Create fake organizations to divert energy
• Spy on college campuses nationwide
• Monitor religious groups opposing war
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 FBI TACTICS AGAINST ANTI-WAR ACTIVISTS:
• Notify employers about "subversive" employees
• Send anonymous letters to family members
• Inform draft boards about activists
• Plant false news stories
• Create conflicts between groups

🎯 THE GOAL: Make peaceful protest impossible and drive activists toward violence that could be used to discredit the movement.

The government was at war with its own citizens.`,
            image: "antiwar_infiltration",
            imagePrompt: "1960s anti-war protest infiltrated by FBI agents, surveillance photos, provocateur activities, Vietnam era activism",
            sources: ["Church Committee Report", "COINTELPRO: New Left files"],
            choices: [
                {
                    text: "Document specific infiltration cases",
                    nextScene: "provocateur_network",
                    progressIncrease: 30,
                    evidence: true
                },
                {
                    text: "Connect to broader surveillance state",
                    nextScene: "systematic_violations",
                    progressIncrease: 25
                },
                {
                    text: "Prepare for media release",
                    nextScene: "media_release_strategy",
                    progressIncrease: 35
                }
            ],
            educationalNote: "The anti-war movement was subject to massive surveillance coordinated between FBI, CIA, and military intelligence."
        },

        systematic_violations: {
            text: `SYSTEMATIC CONSTITUTIONAL VIOLATIONS

The scope of illegal FBI activity is staggering:

⚖️ CONSTITUTIONAL VIOLATIONS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• First Amendment: Suppressing free speech/assembly
• Fourth Amendment: Warrantless searches/wiretaps
• Fifth Amendment: Due process violations
• Sixth Amendment: Interference with legal defense
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 BY THE NUMBERS:
• 500,000+ intelligence files on Americans
• 1,000+ COINTELPRO operations documented
• 300+ "Black Nationalist" disruption operations
• 285+ "New Left" disruption operations
• Uncounted illegal break-ins and wiretaps

🎯 NO OVERSIGHT:
Congress was never informed. Courts were never consulted. The FBI operated as a law unto itself under J. Edgar Hoover.

This wasn't protecting America - it was attacking the Constitution.`,
            image: "constitutional_violations",
            imagePrompt: "Constitution with surveillance overlay, FBI files on citizens, systematic abuse of power, Hoover's FBI",
            badges: ["truthSeeker"],
            sources: ["Church Committee Final Report", "FBI Internal Documents"],
            choices: [
                {
                    text: "Focus on specific civil rights targeting",
                    nextScene: "civil_rights_persecution",
                    progressIncrease: 30,
                    evidence: true
                },
                {
                    text: "Release everything to the media",
                    nextScene: "media_release_strategy",
                    progressIncrease: 40
                },
                {
                    text: "Build case for congressional investigation",
                    nextScene: "church_committee_cointelpro",
                    progressIncrease: 35
                }
            ],
            educationalNote: "COINTELPRO violated virtually every constitutional protection for American citizens."
        },

        civil_rights_persecution: {
            text: `PERSECUTION OF CIVIL RIGHTS LEADERS

The FBI systematically targeted civil rights leadership:

👤 TARGETS DOCUMENTED:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Martin Luther King Jr. - Suicide letter, constant surveillance
• Malcolm X - Infiltration, possibly assassination complicity
• Stokely Carmichael - Harassment, discrediting campaign
• SNCC leadership - Full infiltration
• NAACP chapters - Surveillance nationwide
• SCLC - Complete wiretapping
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 HOOVER'S DIRECTIVE:
"Prevent the rise of a 'messiah' who could unify and electrify the militant black nationalist movement."

🎯 EXPLICIT GOALS:
1. Prevent coalition of Black nationalist groups
2. Prevent rise of unifying leadership
3. Discredit groups in eyes of community
4. Prevent violence (while using provocateurs)

The FBI was actively working to destroy the civil rights movement.`,
            image: "civil_rights_targeting",
            imagePrompt: "Civil rights leaders under FBI surveillance, protest movements infiltrated, government persecution of activists",
            badges: ["justiceSeeker"],
            sources: ["Church Committee Report", "COINTELPRO Racial Matters files"],
            choices: [
                {
                    text: "Focus on Fred Hampton case",
                    nextScene: "hampton_assassination",
                    progressIncrease: 40,
                    evidence: true
                },
                {
                    text: "Document the infiltration network",
                    nextScene: "provocateur_network",
                    progressIncrease: 30
                },
                {
                    text: "Prepare public release strategy",
                    nextScene: "media_release_strategy",
                    progressIncrease: 35
                }
            ],
            educationalNote: "The FBI treated the civil rights movement as a greater threat than organized crime or foreign espionage."
        },

        hampton_assassination: {
            text: `THE ASSASSINATION OF FRED HAMPTON

DECEMBER 4, 1969 - CHICAGO

The most damning evidence of COINTELPRO's lethal nature:

💀 THE RAID:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
4:45 AM: Chicago police raid Hampton's apartment
• 99 bullets fired by police
• 1 bullet fired by Panthers
• Fred Hampton, 21, killed in his bed
• Mark Clark, 22, killed at door
• Hampton likely drugged by FBI informant
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 FBI INVOLVEMENT:
• Informant William O'Neal provided floor plan
• O'Neal likely drugged Hampton that night
• FBI coordinated with State's Attorney Hanrahan
• FBI paid O'Neal $300 bonus after raid

🎯 THE COVER-UP:
Initial claims: "Shootout with dangerous Panthers"
Reality: Execution of sleeping civil rights leader

The FBI orchestrated the murder of a 21-year-old.`,
            image: "hampton_assassination",
            imagePrompt: "Fred Hampton memorial, Chicago apartment raid scene, FBI complicity in assassination, civil rights martyr",
            badges: ["truthSeeker", "courageousAct"],
            sources: ["Cook County investigation", "FBI informant payments records", "Ballistics analysis"],
            choices: [
                {
                    text: "This proves FBI murder - release immediately",
                    nextScene: "post_publication",
                    progressIncrease: 50,
                    evidence: true
                },
                {
                    text: "Document other assassinations",
                    nextScene: "civil_rights_persecution",
                    progressIncrease: 35
                },
                {
                    text: "Build case for prosecution",
                    nextScene: "victim_lawsuits",
                    progressIncrease: 40
                }
            ],
            educationalNote: "The Hampton family eventually won a $1.85 million wrongful death settlement from the FBI and Chicago."
        },

        provocateur_network: {
            text: `THE PROVOCATEUR NETWORK

COINTELPRO used informants to destroy movements from within:

🕵️ INFORMANT OPERATIONS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Paid informants in every major organization
• Provocateurs encouraging illegal activity
• Agents promoting violence to justify crackdowns
• False testimony used to imprison activists
• Informants reaching leadership positions
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 DOCUMENTED CASES:
• William O'Neal - Black Panthers (Hampton assassination)
• Gary Thomas Rowe - KKK informant (allowed murders)
• Numerous SDS and anti-war infiltrators

🎯 THE STRATEGY:
When movements were too peaceful to discredit, FBI agents would encourage violence that could be used against the entire movement.

The FBI didn't just watch - it actively created the violence it claimed to prevent.`,
            image: "provocateur_network",
            imagePrompt: "FBI informant files, provocateur operations, infiltration diagrams, government agents in activist groups",
            sources: ["Church Committee testimony", "Informant payment records"],
            choices: [
                {
                    text: "Document specific provocateur cases",
                    nextScene: "systematic_violations",
                    progressIncrease: 30,
                    evidence: true
                },
                {
                    text: "Connect to Hampton assassination",
                    nextScene: "hampton_assassination",
                    progressIncrease: 40
                },
                {
                    text: "Prepare comprehensive media release",
                    nextScene: "multi_media_release",
                    progressIncrease: 35
                }
            ],
            educationalNote: "FBI informants often rose to leadership positions in targeted organizations, directing their activities."
        },

        community_program_destruction: {
            text: `DESTROYING COMMUNITY PROGRAMS

The FBI specifically targeted positive community services:

🍳 BLACK PANTHER PROGRAMS TARGETED:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Free Breakfast for Children Program
• Free Health Clinics
• Community education programs
• Legal aid services
• Sickle cell anemia testing
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 HOOVER MEMO:
"The BPP survival programs represent the best and most
influential activity going for the BPP. These programs
must be destroyed."

🎯 TACTICS USED:
• Spread false rumors about programs
• Pressure landlords to evict program sites
• Harass volunteers and donors
• Send anonymous letters to churches hosting programs
• Coordinate with local police to raid program locations

The FBI saw feeding hungry children as a threat to national security.`,
            image: "community_program_destruction",
            imagePrompt: "Black Panther free breakfast program, FBI disruption of community services, children affected by government interference",
            sources: ["FBI memos on survival programs", "Church Committee testimony"],
            choices: [
                {
                    text: "Document the human cost",
                    nextScene: "civil_rights_persecution",
                    progressIncrease: 30
                },
                {
                    text: "Connect to broader FBI strategy",
                    nextScene: "systematic_violations",
                    progressIncrease: 25,
                    evidence: true
                },
                {
                    text: "Release to media immediately",
                    nextScene: "media_release_strategy",
                    progressIncrease: 40
                }
            ],
            educationalNote: "The Panthers' breakfast program fed thousands of children and inspired the federal school breakfast program."
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
                    nextScene: "strategic_release",
                    progressIncrease: 35
                }
            ],
            educationalNote: "The Citizens' Commission sent documents to multiple journalists to ensure publication couldn't be suppressed."
        },

        multi_media_release: {
            text: `COORDINATED MEDIA RELEASE

You decide to send documents to multiple outlets simultaneously:

📰 DISTRIBUTION STRATEGY:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Washington Post - General COINTELPRO overview
• New York Times - MLK surveillance documents
• Los Angeles Times - Black Panther operations
• Underground papers - Complete document sets
• Congressional offices - For investigation leverage
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎯 THE RESULT:
No single outlet can be pressured to suppress the story. Even if some refuse to publish, others will.

📺 MEDIA RESPONSE:
Most major papers initially refuse to publish, citing "national security concerns."

But the underground press runs everything. Eventually, mainstream media cannot ignore the story.

Your strategy ensures the truth survives.`,
            image: "multi_media_release",
            imagePrompt: "Multiple newspaper offices receiving COINTELPRO documents, coordinated release strategy, journalism ethics debate",
            badges: ["whistleblower"],
            sources: ["Citizens' Commission strategy documents", "Media coverage timeline"],
            choices: [
                {
                    text: "Watch the story break nationally",
                    nextScene: "post_publication",
                    progressIncrease: 45,
                    evidence: true
                },
                {
                    text: "Prepare for congressional investigation",
                    nextScene: "church_committee_cointelpro",
                    progressIncrease: 40
                }
            ],
            educationalNote: "The multi-outlet strategy prevented government suppression of the COINTELPRO revelations."
        },

        strategic_release: {
            text: `STRATEGIC DOCUMENT RELEASE

You hold back the most damaging documents as insurance:

🔒 DOCUMENTS HELD BACK:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Hampton assassination evidence
• MLK suicide letter documentation
• Informant payment records
• Names of active FBI infiltrators
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 RELEASE TIMELINE:
Phase 1: General COINTELPRO existence
Phase 2: Specific operations and targets
Phase 3: Most damaging evidence (if needed)

🎯 THE REASONING:
If the FBI attempts to discredit or suppress the initial release, you can escalate with more damaging revelations.

This provides ongoing leverage and ensures the story stays in the news.

Your strategic approach maximizes long-term impact.`,
            image: "strategic_release",
            imagePrompt: "Documents being sorted for staged release, strategic planning, whistleblower tactics, leverage strategy",
            sources: ["Whistleblower protection strategies", "Media timing analysis"],
            choices: [
                {
                    text: "Begin the phased release",
                    nextScene: "post_publication",
                    progressIncrease: 40,
                    evidence: true
                },
                {
                    text: "Release everything immediately",
                    nextScene: "multi_media_release",
                    progressIncrease: 45
                }
            ],
            educationalNote: "Staged document releases can maintain media attention and prevent story suppression."
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
            sources: ["Washington Post archives", "Public reaction documentation"],
            choices: [
                {
                    text: "Force Congressional investigation",
                    nextScene: "church_committee_cointelpro",
                    progressIncrease: 50,
                    evidence: true
                },
                {
                    text: "Help victims file lawsuits",
                    nextScene: "victim_lawsuits",
                    progressIncrease: 40
                },
                {
                    text: "Continue investigating other programs",
                    nextScene: "deeper_investigation",
                    progressIncrease: 35
                }
            ],
            educationalNote: "The COINTELPRO revelations eventually led to major congressional investigations and FBI reforms."
        },

        church_committee_cointelpro: {
            text: `THE CHURCH COMMITTEE INVESTIGATION

1975-1976 - CONGRESSIONAL RECKONING

Senator Frank Church leads a comprehensive investigation:

🏛️ CHURCH COMMITTEE FINDINGS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• COINTELPRO violated constitutional rights
• FBI operated without legal authority
• Intelligence agencies abused power for decades
• No effective oversight existed
• Americans were targeted for political beliefs
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 KEY TESTIMONY:
Former FBI officials admit to:
• Illegal wiretapping without warrants
• Mail opening programs
• Burglaries of activist offices
• Assassination attempts against foreign leaders

⚖️ REFORMS ENACTED:
• Foreign Intelligence Surveillance Act (FISA)
• Executive Order limiting domestic surveillance
• Congressional intelligence oversight committees
• FBI domestic guidelines

Your courage helped create accountability for intelligence abuses.`,
            image: "church_committee",
            imagePrompt: "Senator Frank Church leading congressional hearings, FBI officials testifying, intelligence accountability, 1970s Senate chamber",
            badges: ["justiceSeeker", "truthSeeker"],
            sources: ["Church Committee Final Report", "Senate hearing transcripts"],
            choices: [
                {
                    text: "Help victims seek justice",
                    nextScene: "victim_lawsuits",
                    progressIncrease: 40,
                    evidence: true
                },
                {
                    text: "Ensure reforms are implemented",
                    nextScene: "victory",
                    progressIncrease: 50
                }
            ],
            educationalNote: "The Church Committee created the modern framework for intelligence oversight in America."
        },

        victim_lawsuits: {
            text: `VICTIMS SEEK JUSTICE

The revelations enable lawsuits against the FBI:

⚖️ MAJOR LAWSUITS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Hampton family vs. FBI - $1.85 million settlement
• Socialist Workers Party - Decades of harassment documented
• American Indian Movement - COINTELPRO targeting proven
• Puerto Rican independence activists - Surveillance exposed
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 LEGAL VICTORIES:
• FBI forced to admit illegal operations
• Government pays millions in damages
• Documents released through discovery
• Precedents set for future accountability

💔 THE LIMITATIONS:
• Most perpetrators never prosecuted
• Many documents already destroyed
• Statute of limitations expired for many crimes
• Institutional protection for FBI agents

Justice is incomplete, but the truth is established.`,
            image: "victim_lawsuits",
            imagePrompt: "Courtroom with COINTELPRO victims testifying, civil rights lawyers, FBI accountability lawsuits, 1970s legal proceedings",
            badges: ["justiceSeeker"],
            sources: ["Hampton lawsuit records", "Socialist Workers Party lawsuit"],
            choices: [
                {
                    text: "Support ongoing reform efforts",
                    nextScene: "victory",
                    progressIncrease: 45,
                    evidence: true
                },
                {
                    text: "Continue documenting FBI abuses",
                    nextScene: "deeper_investigation",
                    progressIncrease: 35
                }
            ],
            educationalNote: "Civil lawsuits provided accountability when criminal prosecution proved impossible."
        },

        deeper_investigation: {
            text: `CONTINUING THE INVESTIGATION

The initial revelations lead to deeper discoveries:

🔍 ADDITIONAL PROGRAMS EXPOSED:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Operation CHAOS (CIA domestic surveillance)
• Project MINARET (NSA communications monitoring)
• Army domestic intelligence programs
• IRS targeting of political groups
• Post office mail opening programs
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 PATTERNS REVEALED:
The intelligence community operated as a coordinated surveillance state targeting American citizens.

🎯 THE SCOPE:
• Millions of Americans had files
• Every major social movement infiltrated
• No effective legal restraints
• Presidents used agencies against opponents

Your investigation helped expose the full scope of domestic surveillance abuse.`,
            image: "deeper_investigation",
            imagePrompt: "Expanded investigation revealing multiple agencies, surveillance state documentation, intelligence community abuses",
            sources: ["Church Committee comprehensive report", "Additional agency investigations"],
            choices: [
                {
                    text: "Support comprehensive reform",
                    nextScene: "church_committee_cointelpro",
                    progressIncrease: 40,
                    evidence: true
                },
                {
                    text: "Complete the investigation",
                    nextScene: "victory",
                    progressIncrease: 50
                }
            ],
            educationalNote: "COINTELPRO was part of a broader pattern of intelligence community domestic surveillance abuse."
        },

        victory: {
            text: `INVESTIGATION COMPLETE
TRUTH REVEALED

🏆 YOUR ACHIEVEMENTS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ Exposed FBI's illegal COINTELPRO operations
✓ Revealed systematic targeting of civil rights leaders
✓ Documented FBI complicity in assassination
✓ Forced congressional investigation
✓ Helped establish intelligence oversight
✓ Enabled victims to seek justice
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 LASTING IMPACT:
The COINTELPRO revelations led to:
• Church Committee and intelligence reform
• FISA Court oversight (later weakened)
• FBI domestic guidelines
• Public awareness of surveillance dangers

⚠️ THE WARNING:
The Citizens' Commission members were never caught. Their courage exposed one of the greatest government scandals in American history.

Your investigation helped protect democracy from those sworn to defend it.`,
            image: "investigation_complete",
            imagePrompt: "Investigation complete, justice served, truth revealed, historical significance, COINTELPRO exposed",
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
            educationalNote: "The Media, PA burglary remains one of the most successful acts of civil disobedience in American history."
        },

        mainMenu: {
            text: "Returning to case selection...",
            image: "main_menu",
            imagePrompt: "Investigation files, case selection, detective desk",
            choices: []
        },

        // J. Edgar Hoover and FBI Background
        hoover_background: {
            text: `J. EDGAR HOOVER - THE MAN BEHIND COINTELPRO

Understanding COINTELPRO requires understanding its creator:

👤 J. EDGAR HOOVER (1895-1972):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• FBI Director for 48 years (1924-1972)
• Served under 8 presidents
• Accumulated blackmail files on politicians
• Obsessed with "subversive" movements
• Deeply racist - labeled civil rights "communist"
• Created cult of personality around FBI
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 HOOVER'S POWER:
Presidents feared him. He maintained secret files on everyone in Washington - politicians, judges, journalists.

🎯 HIS OBSESSION:
From the 1950s, Hoover was convinced that civil rights and anti-war movements were communist conspiracies requiring "neutralization."

No president dared fire him. He was the most powerful unelected official in American history.`,
            image: "hoover_portrait",
            imagePrompt: "J. Edgar Hoover in his FBI office, surrounded by files, American flag, powerful bureaucrat, 1960s",
            sources: ["FBI: An Uncensored Look", "Hoover biographies"],
            choices: [
                {
                    text: "Examine Hoover's anti-communist crusade",
                    nextScene: "red_scare_origins",
                    progressIncrease: 20
                },
                {
                    text: "Investigate his targeting of MLK",
                    nextScene: "mlk_surveillance",
                    progressIncrease: 25
                },
                {
                    text: "Learn about his blackmail files",
                    nextScene: "hoover_blackmail",
                    progressIncrease: 20
                }
            ],
            educationalNote: "Hoover's 48-year reign at the FBI gave him unprecedented power over American political life."
        },

        red_scare_origins: {
            text: `THE ORIGINS OF COINTELPRO

COINTELPRO emerged from Cold War paranoia:

🔴 TIMELINE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1919: Hoover leads Palmer Raids against "radicals"
1947: House Un-American Activities Committee rises
1950: McCarthy era begins
1956: COINTELPRO officially launched against CPUSA
1961: Expanded to "Black Nationalist" groups
1968: Peak operations against Panthers and anti-war
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 THE JUSTIFICATION:
Hoover claimed all dissent was communist-inspired. Civil rights? Communist plot. Anti-war movement? Soviet manipulation.

🎯 THE REALITY:
Most targets had no communist connections. The label was used to justify surveillance of anyone challenging the status quo.

COINTELPRO wasn't about national security - it was about crushing political dissent.`,
            image: "red_scare_origins",
            imagePrompt: "1950s anti-communist propaganda, McCarthy hearings, red scare, FBI surveillance beginnings",
            sources: ["Church Committee origins report", "Cold War domestic surveillance history"],
            choices: [
                {
                    text: "See how this expanded to civil rights",
                    nextScene: "civil_rights_persecution",
                    progressIncrease: 25
                },
                {
                    text: "Examine Communist Party targeting",
                    nextScene: "cpusa_operations",
                    progressIncrease: 20
                },
                {
                    text: "Return to document analysis",
                    nextScene: "document_analysis",
                    progressIncrease: 15
                }
            ],
            educationalNote: "COINTELPRO began as anti-communist but evolved to target any group Hoover considered threatening."
        },

        hoover_blackmail: {
            text: `HOOVER'S SECRET FILES

Hoover maintained blackmail material on Washington's elite:

🗃️ THE FILES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Personal files on presidents, congressmen, judges
• Sexual indiscretions, financial improprieties
• Political associations, embarrassing statements
• Files used to ensure FBI budget increases
• No politician dared challenge FBI
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 DOCUMENTED TARGETS:
• President Kennedy - Affair documentation
• President Johnson - Business connections
• Senator McCarthy - Supplied and later controlled
• Numerous congressmen - Various compromising material

🎯 THE EFFECT:
Congress rubber-stamped FBI requests. Presidents tolerated illegal operations. No oversight existed because overseers feared exposure.

Hoover's files made COINTELPRO possible by neutralizing accountability.`,
            image: "hoover_files",
            imagePrompt: "FBI secret files cabinet, classified folders, Washington DC, political blackmail material, Hoover's power",
            sources: ["Hoover's Secret Files", "Church Committee findings on FBI director power"],
            choices: [
                {
                    text: "See how this enabled COINTELPRO",
                    nextScene: "systematic_violations",
                    progressIncrease: 25
                },
                {
                    text: "Examine specific operations",
                    nextScene: "document_analysis",
                    progressIncrease: 20
                },
                {
                    text: "Continue to media strategy",
                    nextScene: "media_release_strategy",
                    progressIncrease: 30
                }
            ],
            educationalNote: "Hoover's blackmail files ensured no one in Washington would challenge FBI operations."
        },

        cpusa_operations: {
            text: `COINTELPRO - CPUSA (1956-1971)

The first COINTELPRO targeted the Communist Party USA:

☭ OPERATIONS AGAINST CPUSA:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Mass infiltration with FBI informants
• Forged documents to create internal conflict
• Anonymous mailings to employers
• Tax harassment through IRS coordination
• Planted media stories discrediting members
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 BY THE NUMBERS:
• 1,388 documented COINTELPRO actions
• Party membership decimated from 80,000 to 3,000
• Internal paranoia made organizing impossible

🎯 THE TEMPLATE:
CPUSA operations created the playbook later used against civil rights and anti-war movements.

While CPUSA had actual Soviet ties, the tactics developed here were applied to completely legitimate American movements.`,
            image: "cpusa_operations",
            imagePrompt: "Communist Party USA meetings infiltrated by FBI, 1950s surveillance, red scare operations",
            sources: ["COINTELPRO: CPUSA documents", "Church Committee findings"],
            choices: [
                {
                    text: "See how tactics expanded to civil rights",
                    nextScene: "civil_rights_persecution",
                    progressIncrease: 25
                },
                {
                    text: "Examine Socialist Workers Party targeting",
                    nextScene: "swp_surveillance",
                    progressIncrease: 20
                },
                {
                    text: "Return to main investigation",
                    nextScene: "document_analysis",
                    progressIncrease: 15
                }
            ],
            educationalNote: "The CPUSA program provided the template for all subsequent COINTELPRO operations."
        },

        swp_surveillance: {
            text: `SOCIALIST WORKERS PARTY - 40 YEARS OF HARASSMENT

The SWP faced the longest documented COINTELPRO campaign:

📋 SWP TARGETING (1940s-1980s):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Over 1,300 informants infiltrated the party
• 20,000 days of wiretaps documented
• 12,000 days of "mail covers" (reading addresses)
• 300+ "black bag jobs" (burglaries)
• Party finances, membership lists stolen
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚖️ THE LAWSUIT:
In 1973, SWP sued the FBI. After 15 years of litigation:
• FBI admitted all operations were illegal
• $264,000 in damages awarded
• Complete FBI files released

📄 JUDGE'S RULING:
"The FBI exceeded its legal authority and violated constitutional rights of SWP members repeatedly."

The SWP case proved COINTELPRO violated American law.`,
            image: "swp_lawsuit",
            imagePrompt: "Socialist Workers Party lawsuit against FBI, courtroom, civil rights legal victory",
            sources: ["SWP v. Attorney General", "FBI SWP files"],
            choices: [
                {
                    text: "Connect to broader pattern",
                    nextScene: "systematic_violations",
                    progressIncrease: 25
                },
                {
                    text: "Examine other political targeting",
                    nextScene: "puerto_rico_targeting",
                    progressIncrease: 20
                },
                {
                    text: "See how victims sought justice",
                    nextScene: "victim_lawsuits",
                    progressIncrease: 30
                }
            ],
            educationalNote: "The SWP lawsuit produced the most complete documentation of COINTELPRO tactics."
        },

        // Media PA Burglary Details
        media_burglary_planning: {
            text: `PLANNING THE MEDIA BURGLARY

The Citizens' Commission spent months planning:

🎯 THE PLAN:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Target: FBI Resident Agency, Media, Pennsylvania
Date: March 8, 1971 (Ali-Frazier fight night)
Team: 8 activists, no criminal backgrounds
Goal: Prove FBI domestic surveillance
Risk: 40+ years in federal prison
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 PREPARATION:
• Months of surveillance of the office
• Tested locks, knew security schedule
• Chose fight night when attention elsewhere
• Prepared safe houses for document analysis
• Planned media distribution strategy

👤 THE TEAM:
Including physics professor William Davidon, graduate students, and community activists. Average Americans risking everything.

They believed exposing FBI crimes was worth any personal cost.`,
            image: "media_burglary_planning",
            imagePrompt: "Activists planning FBI office break-in, maps and diagrams, 1971, citizen resistance",
            sources: ["The Burglary by Betty Medsger", "Citizens' Commission accounts"],
            choices: [
                {
                    text: "Continue to the break-in",
                    nextScene: "intro",
                    progressIncrease: 10
                },
                {
                    text: "Learn about the team members",
                    nextScene: "citizens_commission",
                    progressIncrease: 15
                },
                {
                    text: "Skip to document discovery",
                    nextScene: "document_analysis",
                    progressIncrease: 20
                }
            ],
            educationalNote: "The Media burglary was planned by ordinary citizens who felt compelled to expose government abuse."
        },

        citizens_commission: {
            text: `THE CITIZENS' COMMISSION TO INVESTIGATE THE FBI

Who were these ordinary Americans who risked everything?

👥 THE TEAM:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• William Davidon - Physics professor, Quaker pacifist
• John and Bonnie Raines - Professor and activist couple
• Keith Forsyth - Cab driver, amateur locksmith
• Bob Williamson - Social worker
• Other members - Names protected for decades
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 THEIR MOTIVATION:
Years of anti-war activism had convinced them the FBI was monitoring peace groups. They needed proof.

🎯 THE STAKES:
If caught, they faced 40+ years in prison. They would lose careers, families, freedom.

💫 THE OUTCOME:
The FBI conducted a massive investigation but never identified them. They kept the secret for 43 years, finally revealing themselves in 2014.

Ordinary citizens changed American history.`,
            image: "citizens_commission",
            imagePrompt: "1970s activists, middle-class Americans, anti-war movement, citizen courage, Media PA burglary team",
            sources: ["The Burglary by Betty Medsger", "2014 interviews"],
            choices: [
                {
                    text: "See what they discovered",
                    nextScene: "document_analysis",
                    progressIncrease: 20
                },
                {
                    text: "Learn about the FBI investigation",
                    nextScene: "fbi_hunt",
                    progressIncrease: 25
                },
                {
                    text: "Continue to media release",
                    nextScene: "media_release_strategy",
                    progressIncrease: 30
                }
            ],
            educationalNote: "The Citizens' Commission members risked everything and were never caught despite massive FBI investigation."
        },

        fbi_hunt: {
            text: `THE FBI MANHUNT

After the burglary, the FBI launched a massive investigation:

🔍 MEDBURG INVESTIGATION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• 200+ FBI agents assigned
• Largest FBI investigation since Lindbergh kidnapping
• Suspected anti-war activists interrogated
• Grand jury convened
• Five-year statute of limitations deadline
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 FBI TACTICS:
• Infiltrated every peace group in Philadelphia area
• Monitored mail of suspected activists
• Interviewed hundreds of potential suspects
• Offered informant payments for tips

🎯 THE IRONY:
The FBI used COINTELPRO tactics to try to catch those who exposed COINTELPRO.

The investigation failed. The statute of limitations expired in 1976. The perpetrators were never identified until they voluntarily came forward in 2014.`,
            image: "fbi_manhunt",
            imagePrompt: "FBI agents investigating Media PA burglary, wanted posters, massive manhunt, 1970s law enforcement",
            sources: ["MEDBURG FBI files", "Investigation documentation"],
            choices: [
                {
                    text: "See what documents revealed",
                    nextScene: "document_analysis",
                    progressIncrease: 25
                },
                {
                    text: "Watch the scandal unfold",
                    nextScene: "post_publication",
                    progressIncrease: 30
                },
                {
                    text: "Learn about document destruction",
                    nextScene: "document_destruction",
                    progressIncrease: 20
                }
            ],
            educationalNote: "Despite the largest FBI investigation in decades, the burglars were never caught."
        },

        document_destruction: {
            text: `FBI DOCUMENT DESTRUCTION

When COINTELPRO was exposed, the FBI scrambled to destroy evidence:

🔥 HOOVER'S ORDER - APRIL 28, 1971:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
"All COINTELPRO operations must cease immediately.
All references to COINTELPRO must be removed from
FBI files. All documentation must be consolidated
for secure storage [destruction]."
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 WHAT WAS DESTROYED:
• Unknown quantity of operational files
• Informant identities and payments
• Evidence of illegal break-ins
• Documentation of mail opening
• Records of wiretaps

🎯 WHAT SURVIVED:
Despite destruction orders, many field offices kept files. Church Committee later recovered substantial documentation.

We may never know the full scope of COINTELPRO because of deliberate evidence destruction.`,
            image: "document_destruction",
            imagePrompt: "FBI agents destroying files, shredding documents, cover-up, evidence destruction, 1971",
            sources: ["Church Committee findings", "FBI internal memos"],
            choices: [
                {
                    text: "See what evidence survived",
                    nextScene: "systematic_violations",
                    progressIncrease: 25
                },
                {
                    text: "Push for congressional investigation",
                    nextScene: "church_committee_cointelpro",
                    progressIncrease: 35
                },
                {
                    text: "Document specific operations",
                    nextScene: "civil_rights_persecution",
                    progressIncrease: 25
                }
            ],
            educationalNote: "FBI document destruction means we still don't know the full scope of COINTELPRO abuses."
        },

        // MLK Detailed Operations
        mlk_suicide_letter: {
            text: `THE FBI'S SUICIDE LETTER TO MLK

November 1964 - The FBI's most shameful document:

📄 THE LETTER (sent with audio recordings):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
"King, there is only one thing left for you to do.
You know what it is. You have just 34 days in which
to do it... There is but one way out for you.
You better take it before your filthy, abnormal
fraudulent self is bared to the nation."
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎯 THE TIMING:
Sent 34 days before MLK was to receive the Nobel Peace Prize. The clear implication: commit suicide.

📋 FBI INTERNAL MEMO:
"The purpose is to completely discredit MLK as the leader of the Negro movement. When the true facts concerning his activities are presented, he will be completely discredited."

The FBI tried to drive America's greatest civil rights leader to suicide.`,
            image: "mlk_suicide_letter",
            imagePrompt: "FBI anonymous letter to MLK, threatening correspondence, surveillance package, civil rights persecution",
            badges: ["truthSeeker"],
            sources: ["Church Committee exhibits", "FBI King files"],
            choices: [
                {
                    text: "Document full MLK surveillance",
                    nextScene: "mlk_surveillance",
                    progressIncrease: 25
                },
                {
                    text: "Connect to broader civil rights targeting",
                    nextScene: "civil_rights_persecution",
                    progressIncrease: 30
                },
                {
                    text: "Release this to media",
                    nextScene: "media_release_strategy",
                    progressIncrease: 35
                }
            ],
            educationalNote: "The suicide letter is considered one of the most egregious abuses of FBI power in American history."
        },

        mlk_final_years: {
            text: `FBI TARGETING OF MLK'S FINAL YEARS

1966-1968: FBI intensified operations as King opposed Vietnam:

📋 ESCALATED OPERATIONS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• 24/7 surveillance of all King activities
• Infiltration of SCLC inner circle
• Wiretaps on all organizational phones
• Hotel room bugging across the country
• Attempts to discredit with clergy and donors
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 WHY ESCALATION?
King's April 1967 speech against Vietnam War infuriated the FBI. He was now attacking both racism AND U.S. foreign policy.

🎯 POOR PEOPLE'S CAMPAIGN:
FBI feared King's planned 1968 march on Washington would create mass disruption. Extensive operations planned to disrupt.

💀 APRIL 4, 1968:
King assassinated in Memphis. FBI surveillance was active until the moment of his death.

The FBI tracked King's every move until he was murdered.`,
            image: "mlk_final_years",
            imagePrompt: "Martin Luther King Jr final years, Vietnam War opposition, surveillance intensified, 1967-1968",
            sources: ["FBI MURKIN files", "King surveillance documents"],
            choices: [
                {
                    text: "Investigate FBI knowledge of assassination",
                    nextScene: "mlk_assassination_questions",
                    progressIncrease: 30
                },
                {
                    text: "Document other civil rights targeting",
                    nextScene: "civil_rights_persecution",
                    progressIncrease: 25
                },
                {
                    text: "Connect to broader COINTELPRO",
                    nextScene: "systematic_violations",
                    progressIncrease: 25
                }
            ],
            educationalNote: "FBI surveillance of King intensified dramatically after his opposition to the Vietnam War."
        },

        mlk_assassination_questions: {
            text: `QUESTIONS ABOUT FBI AND MLK'S ASSASSINATION

Did the FBI have advance knowledge of the assassination?

❓ UNANSWERED QUESTIONS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• FBI surveillance was active in Memphis
• Local informants present at Lorraine Motel
• FBI had predicted King would be killed
• Post-assassination FBI memos show no surprise
• James Earl Ray's connections still unclear
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 CHURCH COMMITTEE FINDING:
"While no evidence directly implicates the FBI in the assassination, the Bureau's campaign against Dr. King unquestionably created an atmosphere of hostility."

🎯 THE PROBLEM:
FBI document destruction makes definitive answers impossible. Many relevant files were "lost" or destroyed.

The King family ultimately concluded in a 1999 civil trial that government agencies were involved in King's death.`,
            image: "mlk_assassination_questions",
            imagePrompt: "MLK assassination investigation, Lorraine Motel, conspiracy questions, FBI involvement theories",
            sources: ["House Select Committee findings", "King family civil trial 1999"],
            choices: [
                {
                    text: "Document FBI cover-up attempts",
                    nextScene: "document_destruction",
                    progressIncrease: 25
                },
                {
                    text: "Examine other assassinations",
                    nextScene: "malcolm_x_fbi",
                    progressIncrease: 30
                },
                {
                    text: "Release evidence to public",
                    nextScene: "media_release_strategy",
                    progressIncrease: 35
                }
            ],
            educationalNote: "In 1999, a civil jury found that government agencies were involved in King's assassination."
        },

        // Malcolm X
        malcolm_x_fbi: {
            text: `FBI OPERATIONS AGAINST MALCOLM X

The FBI extensively targeted Malcolm X:

📋 SURVEILLANCE OPERATIONS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• FBI file opened in 1953
• Constant surveillance until death in 1965
• Infiltration of Nation of Islam
• Later infiltration of his new organizations
• Coordination with NYPD intelligence
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 FBI TACTICS:
• Created conflict between Malcolm and NOI
• Forged letters suggesting Malcolm was informant
• Monitored his international travel
• Warned countries against hosting him

🎯 THE ASSASSINATION:
February 21, 1965 - Malcolm assassinated in New York.

FBI had informants in both NOI and OAAU (Malcolm's new org). FBI had advance warning of threats. FBI took no action.

Questions about FBI role in Malcolm's death remain.`,
            image: "malcolm_x_fbi",
            imagePrompt: "Malcolm X under FBI surveillance, COINTELPRO operations, Nation of Islam infiltration, 1960s",
            sources: ["FBI Malcolm X files", "Malcolm X assassination investigation"],
            choices: [
                {
                    text: "Examine FBI informant role",
                    nextScene: "malcolm_informants",
                    progressIncrease: 25
                },
                {
                    text: "Connect to broader targeting",
                    nextScene: "civil_rights_persecution",
                    progressIncrease: 25
                },
                {
                    text: "Document NOI infiltration",
                    nextScene: "noi_infiltration",
                    progressIncrease: 20
                }
            ],
            educationalNote: "The FBI had advance warning of threats against Malcolm X but took no action to protect him."
        },

        malcolm_informants: {
            text: `FBI INFORMANTS AND MALCOLM X'S DEATH

FBI had penetrated organizations on all sides:

🕵️ KNOWN INFORMANTS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• John Ali - NOI National Secretary (suspected)
• Gene Roberts - Malcolm's bodyguard (confirmed)
• Multiple NOI mosque informants
• OAAU member informants
• NYPD undercover officers present
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 THE DAY OF ASSASSINATION:
• NYPD undercover present in audience
• FBI informant Roberts gave Malcolm CPR
• Neither security nor police intervened effectively
• Only three men convicted, questions remain

🎯 2021 EXONERATION:
Two men convicted of Malcolm's murder were exonerated after 55 years. Investigation revealed FBI and NYPD withheld evidence.

The FBI's informant network was present when Malcolm died, raising lasting questions.`,
            image: "malcolm_informants",
            imagePrompt: "Malcolm X assassination scene, Audubon Ballroom, informants present, 1965 tragedy",
            sources: ["2021 Malcolm X exoneration", "FBI informant files"],
            badges: ["truthSeeker"],
            choices: [
                {
                    text: "Examine the cover-up",
                    nextScene: "malcolm_coverup",
                    progressIncrease: 30
                },
                {
                    text: "Connect to other assassinations",
                    nextScene: "hampton_assassination",
                    progressIncrease: 35
                },
                {
                    text: "Document NOI operations",
                    nextScene: "noi_infiltration",
                    progressIncrease: 25
                }
            ],
            educationalNote: "In 2021, two men convicted of Malcolm X's murder were exonerated after evidence showed FBI/NYPD failures."
        },

        malcolm_coverup: {
            text: `THE MALCOLM X COVER-UP

Evidence suppressed for over 50 years:

📋 CONCEALED EVIDENCE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• FBI reports on assassination conspiracy
• NYPD undercover officer reports
• Informant testimony never disclosed
• FBI surveillance of actual shooters
• Advance warning of assassination plot
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 2021 INVESTIGATION FINDINGS:
Manhattan DA concluded FBI and NYPD:
• Had advance knowledge of threat
• Withdrew surveillance on day of murder
• Withheld evidence from defense
• Prosecuted likely innocent men

⚖️ JUSTICE DELAYED:
Muhammad Aziz and Khalil Islam spent 20+ years in prison for a crime they likely didn't commit.

The full truth about Malcolm's assassination may never be known due to deliberate evidence destruction.`,
            image: "malcolm_coverup",
            imagePrompt: "Malcolm X case files, evidence suppression, 2021 exoneration, justice delayed",
            sources: ["2021 Manhattan DA investigation", "Malcolm X documentary evidence"],
            choices: [
                {
                    text: "Document other COINTELPRO victims",
                    nextScene: "civil_rights_persecution",
                    progressIncrease: 25
                },
                {
                    text: "Examine Black Panther targeting",
                    nextScene: "black_panther_disruption",
                    progressIncrease: 30
                },
                {
                    text: "Push for full disclosure",
                    nextScene: "media_release_strategy",
                    progressIncrease: 35
                }
            ],
            educationalNote: "The 2021 exoneration showed FBI and NYPD deliberately concealed evidence for over 50 years."
        },

        noi_infiltration: {
            text: `FBI INFILTRATION OF NATION OF ISLAM

The FBI penetrated the NOI at every level:

🕌 INFILTRATION OPERATIONS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Informants in every major mosque
• Penetration of national leadership
• Financial surveillance
• Phone taps on Elijah Muhammad
• Mail interception program
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 DIVISION OPERATIONS:
FBI actively promoted conflict between:
• Elijah Muhammad and Malcolm X
• Various NOI factions
• NOI and other Black organizations

🎯 THE GOAL:
Prevent the NOI from becoming a unifying force in Black America. Promote internal conflicts that would tear the organization apart.

The FBI used the NOI against Malcolm, then targeted both.`,
            image: "noi_infiltration",
            imagePrompt: "Nation of Islam meetings infiltrated by FBI, surveillance of Elijah Muhammad, COINTELPRO religious targeting",
            sources: ["FBI NOI files", "Church Committee religious surveillance findings"],
            choices: [
                {
                    text: "See how this affected Malcolm",
                    nextScene: "malcolm_x_fbi",
                    progressIncrease: 25
                },
                {
                    text: "Examine Black Panther targeting",
                    nextScene: "black_panther_disruption",
                    progressIncrease: 30
                },
                {
                    text: "Document religious targeting",
                    nextScene: "religious_targeting",
                    progressIncrease: 20
                }
            ],
            educationalNote: "FBI infiltration of the NOI contributed to the conflict that led to Malcolm X's assassination."
        },

        // Black Panther Expanded
        panther_leadership_targeting: {
            text: `SYSTEMATIC TARGETING OF PANTHER LEADERSHIP

FBI sought to "neutralize" every Panther leader:

👥 TARGETED LEADERS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Huey Newton - Framed, imprisoned
• Bobby Seale - RICO prosecution, gagged in court
• Fred Hampton - Assassinated by FBI/police
• Eldridge Cleaver - Forced into exile
• Bobby Hutton - Killed by police, age 17
• Bunchy Carter - Killed in FBI-manufactured conflict
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 FBI MEMO:
"We must prevent the rise of any leader capable of unifying the Black nationalist movement."

🎯 THE STRATEGY:
If arrest didn't work, use other means. FBI coordinated with local police to conduct "routine" raids that often ended in killings.

By 1970, the Panthers' original leadership was dead, imprisoned, or in exile.`,
            image: "panther_leadership_targeting",
            imagePrompt: "Black Panther Party leaders targeted by FBI, systematic persecution, 1960s activism destroyed",
            sources: ["COINTELPRO Black Nationalist files", "Church Committee Panther findings"],
            badges: ["truthSeeker"],
            choices: [
                {
                    text: "Focus on Fred Hampton case",
                    nextScene: "hampton_assassination",
                    progressIncrease: 35
                },
                {
                    text: "Examine Carter/Huggins murders",
                    nextScene: "carter_huggins",
                    progressIncrease: 30
                },
                {
                    text: "Document provocateur operations",
                    nextScene: "provocateur_network",
                    progressIncrease: 25
                }
            ],
            educationalNote: "FBI operations successfully destroyed the Black Panther Party leadership within a few years."
        },

        carter_huggins: {
            text: `THE MURDER OF BUNCHY CARTER AND JOHN HUGGINS

January 17, 1969 - UCLA Campus

FBI manufactured conflict led to deaths:

💀 THE INCIDENT:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Meeting to discuss Black Studies program
• Conflict between Panthers and US Organization
• Bunchy Carter, 26, shot and killed
• John Huggins, 23, shot and killed
• US Organization members responsible
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 FBI ROLE:
FBI had promoted conflict between Panthers and US:
• Sent forged letters to each side
• Planted rumors of assassination plots
• Informants encouraged violence
• FBI celebrated the deaths

🎯 FBI MEMO AFTER DEATHS:
"It is believed this incident has resulted in
beneficial effects for the Bureau."

The FBI created the conditions that led to these murders, then celebrated.`,
            image: "carter_huggins",
            imagePrompt: "Bunchy Carter and John Huggins memorial, UCLA 1969, FBI manufactured conflict, Black Panther martyrs",
            sources: ["FBI US Organization files", "UCLA shooting investigation"],
            badges: ["truthSeeker"],
            choices: [
                {
                    text: "Document FBI forged letters",
                    nextScene: "forged_letters",
                    progressIncrease: 30
                },
                {
                    text: "See other FBI-linked deaths",
                    nextScene: "hampton_assassination",
                    progressIncrease: 35
                },
                {
                    text: "Expose the full pattern",
                    nextScene: "media_release_strategy",
                    progressIncrease: 40
                }
            ],
            educationalNote: "FBI manufactured conflict between Panthers and US Organization led directly to murders."
        },

        william_oneal: {
            text: `WILLIAM O'NEAL - THE INFORMANT WHO BETRAYED HAMPTON

The man who enabled Fred Hampton's assassination:

👤 WILLIAM O'NEAL:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Age 17 when recruited by FBI
• Rose to Panther security chief
• Provided floor plan of Hampton's apartment
• Likely drugged Hampton the night of raid
• Received $300 bonus after Hampton's death
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 O'NEAL'S TASKS:
• Create weapons stash to justify raids
• Report on Panther activities and plans
• Identify leadership for targeting
• Serve as agent provocateur

💀 HIS FATE:
In 1990, O'Neal gave interview admitting his role. Same night, he died running into traffic - ruled suicide.

He said: "I don't feel like I'm a traitor. I wasn't thinking about the destruction of the party... I just wanted to do what I could do to survive."`,
            image: "william_oneal",
            imagePrompt: "FBI informant William O'Neal, betrayal of Fred Hampton, COINTELPRO infiltration, 1969 Chicago",
            sources: ["Eyes on the Prize interview", "FBI informant files"],
            choices: [
                {
                    text: "See the Hampton assassination",
                    nextScene: "hampton_assassination",
                    progressIncrease: 35
                },
                {
                    text: "Document other informants",
                    nextScene: "provocateur_network",
                    progressIncrease: 25
                },
                {
                    text: "Examine FBI recruitment tactics",
                    nextScene: "informant_recruitment",
                    progressIncrease: 20
                }
            ],
            educationalNote: "O'Neal was recruited at 17 and rose to Panther security chief while betraying everything to FBI."
        },

        informant_recruitment: {
            text: `HOW THE FBI RECRUITED INFORMANTS

FBI targeted vulnerable individuals for recruitment:

🎯 RECRUITMENT TACTICS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Threaten prosecution for minor crimes
• Offer money to people in poverty
• Exploit family vulnerabilities
• Promise protection from other charges
• Appeal to patriotism and fear
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 TARGETS FOR RECRUITMENT:
• Young people with minor arrest records
• Those with financial problems
• People with family members in trouble
• Ideological waverers
• Those seeking FBI "protection"

💰 THE PAYMENTS:
Informants received regular payments:
• William O'Neal: $200-300/month + bonuses
• Top informants: $500+/month
• Performance bonuses for "productive" intelligence

The FBI built its network by exploiting the vulnerable.`,
            image: "informant_recruitment",
            imagePrompt: "FBI recruiting informants, coercion tactics, 1960s surveillance state, exploitation of vulnerable",
            sources: ["FBI informant payment records", "Church Committee informant testimony"],
            choices: [
                {
                    text: "See how informants operated",
                    nextScene: "provocateur_network",
                    progressIncrease: 25
                },
                {
                    text: "Document specific cases",
                    nextScene: "william_oneal",
                    progressIncrease: 25
                },
                {
                    text: "Expose full system",
                    nextScene: "systematic_violations",
                    progressIncrease: 30
                }
            ],
            educationalNote: "FBI exploited vulnerable individuals to build informant networks inside targeted organizations."
        },

        // Forged Letters
        forged_letters: {
            text: `THE FBI'S FORGED LETTER CAMPAIGNS

FBI created fake correspondence to destroy organizations:

📝 FORGED LETTER OPERATIONS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Letters between Panther chapters creating conflict
• Fake letters from MLK's "supporters" criticizing him
• Letters to spouses about alleged affairs
• Forged "confessions" from activists
• Fake letters threatening violence
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 PANTHER EXAMPLE:
FBI sent letter to Eldridge Cleaver (in Algeria) suggesting Huey Newton was embezzling party funds. Cleaver believed it, creating split.

🎯 MLK EXAMPLE:
FBI sent letters to donors claiming King was a communist. Sent letters to clergy questioning his Christianity.

JEAN SEBERG EXAMPLE:
FBI planted false story that white actress (supporting Panthers) was pregnant by Black Panther leader. She miscarried, later committed suicide.

The FBI destroyed lives with fabricated information.`,
            image: "forged_letters",
            imagePrompt: "FBI forged letters operations, fake correspondence, COINTELPRO manipulation tactics",
            badges: ["truthSeeker"],
            sources: ["Church Committee exhibits", "FBI letter operation files"],
            choices: [
                {
                    text: "Investigate Jean Seberg case",
                    nextScene: "jean_seberg",
                    progressIncrease: 30
                },
                {
                    text: "Document Panther letter operations",
                    nextScene: "black_panther_disruption",
                    progressIncrease: 25
                },
                {
                    text: "Expose to media",
                    nextScene: "media_release_strategy",
                    progressIncrease: 35
                }
            ],
            educationalNote: "FBI forged letter campaigns destroyed organizations and drove individuals to suicide."
        },

        jean_seberg: {
            text: `THE DESTRUCTION OF JEAN SEBERG

Actress targeted for supporting civil rights:

👤 JEAN SEBERG (1938-1979):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Famous actress (Breathless, Paint Your Wagon)
• Donated to Panthers, NAACP, Native American causes
• FBI opened file in 1968
• Subject of extensive surveillance
• Targeted for destruction
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 THE LIE:
FBI planted false story in LA Times that Seberg was pregnant by Black Panther leader. She was actually pregnant by her white husband.

💔 THE AFTERMATH:
• Seberg attempted suicide while pregnant
• Baby was born prematurely, died two days later
• Seberg's mental health destroyed
• Multiple subsequent suicide attempts
• Found dead in 1979, apparent suicide

🎯 FBI MEMO:
"The possible publication will probably be damaging to the woman's image... this could cause her embarrassment and tarnish her image."

The FBI destroyed her life and drove her to death.`,
            image: "jean_seberg",
            imagePrompt: "Jean Seberg actress, FBI targeting of celebrity, COINTELPRO victim, tragic destruction",
            badges: ["truthSeeker"],
            sources: ["FBI Seberg files", "Church Committee celebrity targeting"],
            choices: [
                {
                    text: "Document other celebrity targeting",
                    nextScene: "celebrity_targeting",
                    progressIncrease: 25
                },
                {
                    text: "Connect to broader operations",
                    nextScene: "systematic_violations",
                    progressIncrease: 30
                },
                {
                    text: "Expose this to media",
                    nextScene: "media_release_strategy",
                    progressIncrease: 40
                }
            ],
            educationalNote: "Jean Seberg's death by suicide in 1979 followed years of FBI harassment that destroyed her life."
        },

        celebrity_targeting: {
            text: `FBI TARGETING OF CELEBRITIES

FBI monitored and harassed famous supporters of civil rights:

🌟 TARGETED CELEBRITIES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• John Lennon - Deportation attempt, constant surveillance
• Muhammad Ali - Tax harassment, draft prosecution
• Paul Robeson - Passport revoked, career destroyed
• Marlon Brando - Extensive monitoring
• Jane Fonda - FBI file of 2,000+ pages
• Eartha Kitt - Career destroyed after White House incident
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 THE STRATEGY:
Celebrities provided funding and visibility to movements. FBI sought to silence them through harassment.

🎯 PAUL ROBESON:
The singer and actor had his passport revoked, was blacklisted, and had his income reduced from $150,000 to $6,000 annually.

The FBI sought to silence any prominent voice supporting civil rights.`,
            image: "celebrity_targeting",
            imagePrompt: "Famous celebrities under FBI surveillance, John Lennon, Muhammad Ali, Paul Robeson, Hollywood and civil rights",
            sources: ["FBI celebrity files", "Lennon deportation case"],
            choices: [
                {
                    text: "Focus on John Lennon case",
                    nextScene: "lennon_targeting",
                    progressIncrease: 25
                },
                {
                    text: "Examine Muhammad Ali targeting",
                    nextScene: "ali_targeting",
                    progressIncrease: 25
                },
                {
                    text: "Connect to broader pattern",
                    nextScene: "systematic_violations",
                    progressIncrease: 30
                }
            ],
            educationalNote: "FBI targeted celebrities to cut off funding and visibility for civil rights movements."
        },

        lennon_targeting: {
            text: `THE FBI VS. JOHN LENNON

Nixon administration sought to silence the former Beatle:

🎸 OPERATION AGAINST LENNON:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• FBI file opened after Lennon moved to NYC (1971)
• Constant surveillance and phone taps
• INS deportation proceedings initiated
• Goal: Remove Lennon before 1972 election
• Fear: Lennon would register young voters
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 FBI CONCERNS:
Lennon planned concert tour to register young voters against Nixon. FBI documented:
• Every Lennon public appearance
• His donations to activist causes
• Associates and political connections

⚖️ THE DEPORTATION FIGHT:
Lennon fought deportation for four years, finally winning in 1976.

🎯 NIXON'S ROLE:
White House memos show direct presidential interest in removing Lennon from the country.

The U.S. government tried to deport a musician for opposing the president.`,
            image: "lennon_targeting",
            imagePrompt: "John Lennon FBI surveillance, immigration proceedings, Nixon administration targeting, 1970s",
            sources: ["Lennon FBI files (FOIA)", "INS deportation records"],
            choices: [
                {
                    text: "Document other celebrity cases",
                    nextScene: "celebrity_targeting",
                    progressIncrease: 20
                },
                {
                    text: "Connect to anti-war operations",
                    nextScene: "antiwar_infiltration",
                    progressIncrease: 25
                },
                {
                    text: "Expose Nixon administration role",
                    nextScene: "systematic_violations",
                    progressIncrease: 30
                }
            ],
            educationalNote: "The FBI and Nixon administration tried to deport John Lennon for his anti-war activism."
        },

        ali_targeting: {
            text: `MUHAMMAD ALI - THE HEAVYWEIGHT CHAMPION VS. THE FBI

The government's war on the greatest boxer:

🥊 ALI TARGETING:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• FBI file opened after joining Nation of Islam
• Monitored every speech and appearance
• Draft prosecution after refusing Vietnam service
• Boxing license revoked in all 50 states
• Passport confiscated
• Three and a half years lost from career prime
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 ALI'S STATEMENT:
"I ain't got no quarrel with them Vietcong. No Vietcong ever called me n****r."

⚖️ THE LEGAL FIGHT:
Convicted of draft evasion, faced 5 years in prison. Supreme Court unanimously overturned conviction in 1971.

🎯 THE COST:
• Lost heavyweight title
• Banned from boxing during prime years (age 25-28)
• Lost millions in earnings
• Faced imprisonment for his beliefs

The government tried to destroy Ali for his religious and political beliefs.`,
            image: "ali_targeting",
            imagePrompt: "Muhammad Ali, draft resistance, FBI surveillance, Vietnam War protest, boxing champion persecuted",
            sources: ["Ali FBI files", "Supreme Court decision Clay v. United States"],
            choices: [
                {
                    text: "Connect to NOI targeting",
                    nextScene: "noi_infiltration",
                    progressIncrease: 25
                },
                {
                    text: "Document anti-war operations",
                    nextScene: "antiwar_infiltration",
                    progressIncrease: 25
                },
                {
                    text: "Expose religious persecution",
                    nextScene: "religious_targeting",
                    progressIncrease: 25
                }
            ],
            educationalNote: "Muhammad Ali lost three prime years of his career for refusing to serve in Vietnam."
        },

        religious_targeting: {
            text: `FBI TARGETING OF RELIGIOUS GROUPS

COINTELPRO targeted religions associated with activism:

⛪ RELIGIOUS TARGETS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Nation of Islam - Complete infiltration
• Black churches supporting civil rights
• Quaker peace groups
• Catholic peace activists (Berrigan brothers)
• Jewish organizations supporting civil rights
• Liberation theology clergy
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 TACTICS USED:
• Infiltrate congregations with informants
• Monitor sermons and religious activities
• Target clergy for harassment
• Send letters to religious superiors
• Use IRS to investigate tax exemptions

🎯 THE BERRIGAN CASE:
Catholic priests Daniel and Philip Berrigan were targeted for anti-war activism. FBI considered kidnapping charges based on informant fabrications.

The FBI treated religious opposition to war and racism as threats to national security.`,
            image: "religious_targeting",
            imagePrompt: "Religious groups targeted by FBI, churches monitored, priests arrested, COINTELPRO religious persecution",
            sources: ["FBI religious organization files", "Church Committee religious surveillance findings"],
            choices: [
                {
                    text: "Document Quaker targeting",
                    nextScene: "quaker_surveillance",
                    progressIncrease: 20
                },
                {
                    text: "Connect to anti-war operations",
                    nextScene: "antiwar_infiltration",
                    progressIncrease: 25
                },
                {
                    text: "Expose constitutional violations",
                    nextScene: "systematic_violations",
                    progressIncrease: 30
                }
            ],
            educationalNote: "FBI targeted religious groups that supported civil rights and peace movements."
        },

        quaker_surveillance: {
            text: `FBI SURVEILLANCE OF QUAKER PEACE GROUPS

The FBI infiltrated pacifist religious communities:

☮️ QUAKER TARGETING:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• American Friends Service Committee monitored
• Infiltrated Meeting Houses
• Surveilled peace conferences
• Citizens' Commission leader was Quaker
• Draft counseling labeled "subversive"
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 THE IRONY:
Quakers have been pacifists for 350 years. Their opposition to all war was treated as a threat to national security.

🎯 FBI CONCERNS:
• Draft counseling programs
• War tax resistance
• Support for conscientious objectors
• International peace initiatives

💫 MEDIA PA CONNECTION:
William Davidon, leader of the Citizens' Commission, was a Quaker physics professor. FBI surveillance of his community convinced him to act.

The FBI's targeting of peaceful religious groups helped inspire the exposure of COINTELPRO.`,
            image: "quaker_surveillance",
            imagePrompt: "Quaker peace activists, FBI surveillance of religious pacifists, Meeting House monitoring, 1960s",
            sources: ["AFSC FBI files", "Quaker surveillance documents"],
            choices: [
                {
                    text: "Learn about the Media burglary",
                    nextScene: "citizens_commission",
                    progressIncrease: 25
                },
                {
                    text: "Document broader violations",
                    nextScene: "systematic_violations",
                    progressIncrease: 30
                },
                {
                    text: "Connect to anti-war movement",
                    nextScene: "antiwar_infiltration",
                    progressIncrease: 25
                }
            ],
            educationalNote: "FBI surveillance of Quaker peace groups helped inspire the Citizens' Commission action."
        },

        // Other targeted groups
        puerto_rico_targeting: {
            text: `COINTELPRO IN PUERTO RICO

FBI conducted extensive operations against independence movement:

🇵🇷 PUERTO RICO OPERATIONS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Independence Party (PIP) - completely infiltrated
• Pro-Independence University Federation - monitored
• All independence activists - carpetas (dossiers)
• 75,000+ Puerto Ricans in FBI files
• Over 20% of independence activists were informants
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 CARPETAS SYSTEM:
FBI maintained files (carpetas) on anyone supporting Puerto Rican independence - students, professors, artists, journalists.

🎯 OPERATIONS:
• Infiltrate all independence organizations
• Blacklist activists from employment
• Coordinate with local police
• Target student movements
• Monitor entire communities

The FBI treated Puerto Rican independence as a threat requiring total surveillance.`,
            image: "puerto_rico_cointelpro",
            imagePrompt: "Puerto Rican independence movement surveillance, FBI carpetas files, 1970s Puerto Rico activism",
            sources: ["Puerto Rico Civil Rights Commission", "FBI Puerto Rico files"],
            choices: [
                {
                    text: "Connect to broader targeting",
                    nextScene: "systematic_violations",
                    progressIncrease: 25
                },
                {
                    text: "Examine Native American targeting",
                    nextScene: "aim_targeting",
                    progressIncrease: 25
                },
                {
                    text: "Document political persecution",
                    nextScene: "civil_rights_persecution",
                    progressIncrease: 30
                }
            ],
            educationalNote: "FBI maintained files on approximately 75,000 Puerto Ricans - nearly 3% of the island's population."
        },

        aim_targeting: {
            text: `FBI TARGETING OF AMERICAN INDIAN MOVEMENT

COINTELPRO tactics continued against AIM:

🦅 AIM OPERATIONS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Extensive infiltration of AIM leadership
• Coordination with Bureau of Indian Affairs
• Armed confrontations provoked
• Leonard Peltier framed for murder
• Wounded Knee siege (1973) - 71 day standoff
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 WOUNDED KNEE:
AIM occupied Wounded Knee, South Dakota to protest conditions on Pine Ridge Reservation. FBI surrounded them with armored vehicles.

🎯 LEONARD PELTIER:
Convicted of killing two FBI agents in 1975 shootout. Evidence suppressed, witnesses coerced. Still imprisoned after 45+ years.

⚠️ REIGN OF TERROR:
1973-1976: Over 60 AIM members and supporters killed on Pine Ridge. FBI conducted no investigations.

FBI treated Native American rights as a threat requiring military-style response.`,
            image: "aim_targeting",
            imagePrompt: "American Indian Movement, Wounded Knee siege, Leonard Peltier, FBI confrontation with Native Americans",
            sources: ["AIM COINTELPRO files", "Peltier case documents"],
            badges: ["truthSeeker"],
            choices: [
                {
                    text: "Investigate Leonard Peltier case",
                    nextScene: "peltier_case",
                    progressIncrease: 30
                },
                {
                    text: "Connect to broader pattern",
                    nextScene: "systematic_violations",
                    progressIncrease: 25
                },
                {
                    text: "Document other targeted groups",
                    nextScene: "womens_movement",
                    progressIncrease: 20
                }
            ],
            educationalNote: "Leonard Peltier has been imprisoned since 1977 in a case marked by FBI evidence manipulation."
        },

        peltier_case: {
            text: `THE CASE OF LEONARD PELTIER

America's longest-serving political prisoner:

⚖️ THE CASE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Date: June 26, 1975
Location: Pine Ridge Reservation
Incident: Shootout, 2 FBI agents killed
Convicted: Leonard Peltier (despite questions)
Sentence: Two consecutive life terms
Imprisoned: Since 1977
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 EVIDENCE PROBLEMS:
• Ballistics evidence later proved false
• Key witness recanted, said FBI coerced her
• FBI hid evidence favorable to defense
• Other suspects acquitted on self-defense

🎯 AMNESTY INTERNATIONAL:
Designated Peltier a political prisoner, called for his release.

💔 THE SITUATION:
Peltier is now in his late 70s, in poor health, still imprisoned. Multiple parole denials. No evidence he fired the fatal shots.

The FBI has blocked clemency for nearly 50 years.`,
            image: "leonard_peltier",
            imagePrompt: "Leonard Peltier, political prisoner, Pine Ridge, American Indian Movement, justice denied",
            badges: ["justiceSeeker"],
            sources: ["Amnesty International Peltier report", "Court documents"],
            choices: [
                {
                    text: "Connect to FBI pattern",
                    nextScene: "systematic_violations",
                    progressIncrease: 30
                },
                {
                    text: "Support justice campaigns",
                    nextScene: "victim_lawsuits",
                    progressIncrease: 35
                },
                {
                    text: "Document other victims",
                    nextScene: "civil_rights_persecution",
                    progressIncrease: 25
                }
            ],
            educationalNote: "Leonard Peltier has been imprisoned since 1977 and is considered a political prisoner by Amnesty International."
        },

        womens_movement: {
            text: `FBI SURVEILLANCE OF WOMEN'S MOVEMENT

The FBI monitored feminist organizations:

♀️ WOMEN'S MOVEMENT TARGETING:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• National Organization for Women (NOW) monitored
• Women's liberation groups infiltrated
• Feminist publications surveilled
• Women's health organizations tracked
• Lesbian rights groups targeted
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 FBI CONCERNS:
• "Extremist" positions on equality
• Connections to anti-war movement
• Support for other targeted groups
• "Radical" feminist ideology

🎯 THE PATTERN:
Any social movement challenging existing power structures attracted FBI attention, regardless of whether it advocated violence.

Women seeking equal rights were treated as potential subversives by J. Edgar Hoover's FBI.`,
            image: "womens_movement_surveillance",
            imagePrompt: "Women's liberation movement under FBI surveillance, 1970s feminism, NOW organization monitored",
            sources: ["FBI women's organization files", "Church Committee findings"],
            choices: [
                {
                    text: "Connect to anti-war targeting",
                    nextScene: "antiwar_infiltration",
                    progressIncrease: 25
                },
                {
                    text: "Document student targeting",
                    nextScene: "student_surveillance",
                    progressIncrease: 25
                },
                {
                    text: "See the full pattern",
                    nextScene: "systematic_violations",
                    progressIncrease: 30
                }
            ],
            educationalNote: "The FBI treated the women's movement as a potential threat worthy of surveillance."
        },

        student_surveillance: {
            text: `FBI SURVEILLANCE OF STUDENT MOVEMENTS

Campuses were thoroughly infiltrated:

🎓 CAMPUS OPERATIONS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Students for a Democratic Society (SDS) - infiltrated
• Student Nonviolent Coordinating Committee (SNCC)
• Campus anti-war groups nationwide
• Black Student Unions at every major university
• Underground student newspapers monitored
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 TACTICS:
• Informants enrolled as students
• Professors recruited to report on students
• University administrators pressured to cooperate
• Financial aid information obtained illegally
• Draft boards informed about activists

🎯 THE SCALE:
Virtually every campus had FBI presence. Student protest was treated as a national security threat.

KENT STATE CONNECTION:
FBI informants were present in groups that planned protests, potentially contributing to tensions that erupted in shootings.`,
            image: "student_surveillance",
            imagePrompt: "Campus anti-war protests, FBI surveillance of students, 1960s university activism, SDS infiltration",
            sources: ["FBI campus files", "Church Committee student surveillance"],
            choices: [
                {
                    text: "Connect to anti-war operations",
                    nextScene: "antiwar_infiltration",
                    progressIncrease: 25
                },
                {
                    text: "Examine provocateur role",
                    nextScene: "provocateur_network",
                    progressIncrease: 25
                },
                {
                    text: "Document full scope",
                    nextScene: "systematic_violations",
                    progressIncrease: 30
                }
            ],
            educationalNote: "FBI maintained informants on virtually every major American university campus during the Vietnam era."
        },

        // KKK Operations
        white_hate_groups: {
            text: `COINTELPRO - WHITE HATE GROUPS

FBI did target white supremacist organizations:

🔥 KKK OPERATIONS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Klan infiltrated extensively
• Informants in leadership positions
• Operations to create internal conflict
• Some members prosecuted with FBI help
• BUT: Informants participated in violence
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 THE PROBLEM:
FBI informants were present during Klan violence, including:
• Birmingham church bombing (1963)
• Murder of civil rights workers in Mississippi
• Attack on Freedom Riders
• Viola Liuzzo murder

🎯 GARY THOMAS ROWE:
FBI informant in Klan. Present during Birmingham bombing. Participated in Freedom Rider beatings. May have fired shots that killed Viola Liuzzo.

The FBI protected informants who participated in racial violence.`,
            image: "white_hate_groups",
            imagePrompt: "KKK FBI infiltration, Klan violence with informants present, civil rights era terrorism, FBI complicity",
            sources: ["Gary Thomas Rowe files", "Church Committee KKK findings"],
            choices: [
                {
                    text: "Investigate Gary Thomas Rowe",
                    nextScene: "gary_rowe",
                    progressIncrease: 30
                },
                {
                    text: "Compare to Black movement targeting",
                    nextScene: "civil_rights_persecution",
                    progressIncrease: 25
                },
                {
                    text: "Document the double standard",
                    nextScene: "systematic_violations",
                    progressIncrease: 30
                }
            ],
            educationalNote: "FBI informants in the KKK often participated in the violence they were supposedly monitoring."
        },

        gary_rowe: {
            text: `GARY THOMAS ROWE - FBI INFORMANT IN THE KLAN

The informant who participated in murder:

👤 GARY THOMAS ROWE (1933-1998):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• FBI informant in Klan 1960-1965
• Present during Freedom Rider attack
• Present during 16th Street Baptist Church bombing
• In car when Viola Liuzzo shot dead
• Protected by FBI throughout
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 VIOLA LIUZZO MURDER:
March 25, 1965 - Civil rights volunteer shot dead.
Rowe was in the car with the killers. FBI protected him, may have destroyed evidence of his participation.

🎯 FBI JUSTIFICATION:
FBI claimed informant had to participate in violence to maintain cover. Church Committee disagreed:
"FBI supervision of Rowe was grossly deficient."

The FBI allowed civil rights workers to be murdered to protect its informant network.`,
            image: "gary_rowe",
            imagePrompt: "Gary Thomas Rowe, FBI Klan informant, Freedom Riders attack, Viola Liuzzo murder, civil rights violence",
            badges: ["truthSeeker"],
            sources: ["Church Committee Rowe investigation", "Liuzzo murder files"],
            choices: [
                {
                    text: "Document the double standard",
                    nextScene: "civil_rights_persecution",
                    progressIncrease: 30
                },
                {
                    text: "Expose the pattern",
                    nextScene: "systematic_violations",
                    progressIncrease: 35
                },
                {
                    text: "Release to media",
                    nextScene: "media_release_strategy",
                    progressIncrease: 40
                }
            ],
            educationalNote: "Gary Thomas Rowe participated in KKK violence while FBI protected him as an informant."
        },

        // Legacy and Modern Relevance
        cointelpro_legacy: {
            text: `THE LEGACY OF COINTELPRO

What happened after the reforms?

📋 REFORMS ENACTED:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• 1976: Attorney General guidelines on FBI
• 1978: Foreign Intelligence Surveillance Act
• Congressional oversight committees created
• Executive orders limiting domestic operations
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 REFORMS ERODED:
• 1981: Reagan loosened restrictions
• 2001: Patriot Act expanded surveillance
• 2008: FISA Amendments allowed mass collection
• 2013: Snowden revealed NSA mass surveillance

🎯 THE PATTERN CONTINUES:
Modern programs targeting:
• Muslim American communities
• Black Lives Matter activists
• Environmental activists
• Anti-pipeline protesters
• Political movements

COINTELPRO tactics never really ended - they evolved.`,
            image: "cointelpro_legacy",
            imagePrompt: "Modern surveillance state, NSA data collection, civil liberties today, COINTELPRO legacy continues",
            sources: ["Post-9/11 surveillance expansion", "Modern targeting reports"],
            choices: [
                {
                    text: "Learn about modern targeting",
                    nextScene: "modern_surveillance",
                    progressIncrease: 25
                },
                {
                    text: "Complete the investigation",
                    nextScene: "victory",
                    progressIncrease: 50
                },
                {
                    text: "Support ongoing reform",
                    nextScene: "victim_lawsuits",
                    progressIncrease: 30
                }
            ],
            educationalNote: "Many reforms enacted after COINTELPRO exposure were later weakened or reversed."
        },

        modern_surveillance: {
            text: `COINTELPRO'S MODERN DESCENDANTS

Surveillance programs continue today:

🔍 POST-9/11 PROGRAMS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• NSA mass data collection (exposed by Snowden)
• FBI infiltration of mosques
• NYPD surveillance of Muslim communities
• Monitoring of Black Lives Matter
• "Extremism" investigations of activists
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 DOCUMENTED CASES:
• FBI labeled Black Lives Matter "Black Identity Extremists"
• Environmental activists monitored as terrorists
• Standing Rock protesters subjected to military-style surveillance
• Muslim community informant programs widespread

🎯 THE LESSON:
Without constant vigilance, the surveillance state expands. The rights we don't protect, we lose.

Your investigation of COINTELPRO helps prevent history from repeating.`,
            image: "modern_surveillance",
            imagePrompt: "Modern surveillance, NSA, Black Lives Matter monitoring, activist surveillance today, digital COINTELPRO",
            sources: ["Snowden revelations", "ACLU surveillance reports"],
            choices: [
                {
                    text: "Complete the investigation",
                    nextScene: "victory",
                    progressIncrease: 50
                },
                {
                    text: "Support reform efforts",
                    nextScene: "cointelpro_legacy",
                    progressIncrease: 30
                }
            ],
            educationalNote: "FBI and NSA surveillance programs after 9/11 have drawn comparisons to COINTELPRO tactics."
        }
    }
};

// Make it available globally
window.COINTELPROStoryExpanded = COINTELPROStoryExpanded;

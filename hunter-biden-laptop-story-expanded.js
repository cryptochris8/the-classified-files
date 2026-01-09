// Hunter Biden Laptop Investigation - Expanded Story
// Based on verified court documents, FBI statements, and official reports

const HunterBidenLaptopStoryExpanded = {
    name: "Hunter Biden Laptop Investigation",
    description: "Examine the controversial laptop case through verified court documents and official statements. Navigate media reports and separate fact from speculation.",
    version: "1.0",
    scenes: {
        intro: {
            id: "intro",
            title: "The Delaware Computer Shop",
            text: `DATE: April 2019
LOCATION: Wilmington, Delaware

A water-damaged laptop is dropped off at a computer repair shop. The customer never returns to claim it.

What follows becomes one of the most politically charged investigations in recent history, involving the FBI, major media outlets, and questions about information authenticity during an election year.

Your task: Examine the verified facts, court documents, and official statements to understand what actually happened.`,
            image: "computer_repair_shop",
            imagePrompt: "A small computer repair shop interior in Delaware, laptop on counter with repair ticket, professional photography style, no people visible",
            choices: [
                {
                    text: "Review the repair shop records",
                    nextScene: "repair_shop_facts",
                    type: "investigate"
                },
                {
                    text: "Examine the FBI's involvement timeline",
                    nextScene: "fbi_timeline",
                    type: "evidence"
                }
            ],
            evidence: "CASE INITIALIZED: Delaware Computer Shop, April 2019"
        },

        repair_shop_facts: {
            id: "repair_shop_facts",
            title: "Repair Shop Documentation",
            text: `VERIFIED FACTS FROM SHOP OWNER TESTIMONY:
            
• Date: April 12, 2019
• Three laptops dropped off for repair
• Water damage reported on one device
• Customer did not provide clear identification
• Repair invoice created under the name "Hunter Biden"
• Estimated cost: $85

LEGAL NOTICE: Under Delaware law, abandoned property becomes possession of the shop after 90 days.

FBI VERIFICATION: The FBI later confirmed taking possession of the laptop in December 2019.`,
            image: "repair_invoice",
            imagePrompt: "Close-up of a computer repair invoice on a desk, showing date April 2019 and water damage notes, documentary style photography",
            choices: [
                {
                    text: "Investigate the laptop contents claims",
                    nextScene: "laptop_contents",
                    type: "investigate"
                },
                {
                    text: "Review FBI subpoena documentation",
                    nextScene: "fbi_subpoena",
                    type: "evidence"
                }
            ],
            sources: [
                "Shop owner testimony to Congress",
                "Delaware property law statutes",
                "FBI receipt for property"
            ]
        },

        fbi_timeline: {
            id: "fbi_timeline",
            title: "FBI Investigation Timeline",
            text: `VERIFIED FBI INVOLVEMENT:

November 2019: Shop owner contacts FBI field office
December 9, 2019: FBI issues subpoena for laptop
December 2019: FBI takes possession of the device

IMPORTANT: The FBI's possession of the laptop is verified through official documentation. However, the FBI has not publicly confirmed the authenticity of all materials attributed to the laptop.

2022 UPDATE: Federal prosecutors confirmed the laptop's authenticity as evidence in tax investigation proceedings.`,
            image: "fbi_headquarters",
            imagePrompt: "FBI headquarters building exterior, official government architecture, daytime professional photograph",
            choices: [
                {
                    text: "Examine media coverage timeline",
                    nextScene: "media_coverage",
                    type: "investigate"
                },
                {
                    text: "Review authentication efforts",
                    nextScene: "authentication_process",
                    type: "technical"
                }
            ],
            evidence: "FBI CUSTODY CONFIRMED: December 2019"
        },

        laptop_contents: {
            id: "laptop_contents",
            title: "Reported Contents Analysis",
            text: `REPORTED CONTENTS (Per various media outlets):

• Personal emails and messages
• Business correspondence  
• Financial records
• Personal photographs and videos

CRITICAL CONTEXT:
- Multiple copies of data were reportedly made before FBI acquisition
- Chain of custody questions exist for non-FBI copies
- Some files show signs of tampering (per forensic analysts)
- Authenticity varies by individual file

EXPERT ANALYSIS: "While the laptop itself is real, not all files attributed to it have been authenticated." - Washington Post forensic review`,
            image: "data_analysis",
            imagePrompt: "Computer forensics lab with monitors showing data analysis, professional setting, no sensitive information visible",
            choices: [
                {
                    text: "Investigate media handling",
                    nextScene: "media_october_2020",
                    type: "investigate"
                },
                {
                    text: "Review forensic authentication",
                    nextScene: "forensic_analysis",
                    type: "technical"
                }
            ],
            sources: [
                "Washington Post forensic analysis",
                "CBS News digital forensics review",
                "Court filing authentication records"
            ]
        },

        fbi_subpoena: {
            id: "fbi_subpoena",
            title: "Official FBI Documentation",
            text: `SUBPOENA DETAILS:

Date: December 9, 2019
Issuing Office: FBI Wilmington
Case Type: Money Laundering Investigation
Items Requested: One laptop computer and external hard drive

KEY FACT: The subpoena predates the 2020 election by nearly a year, indicating an ongoing investigation unrelated to election politics.

The shop owner retained a copy of the signed receipt showing FBI custody of the equipment.`,
            image: "legal_documents",
            imagePrompt: "Official legal documents and FBI subpoena paperwork on a desk, professional legal setting",
            choices: [
                {
                    text: "Explore the October 2020 story",
                    nextScene: "media_october_2020",
                    type: "investigate"
                },
                {
                    text: "Review legal implications",
                    nextScene: "legal_analysis",
                    type: "analysis"
                }
            ],
            evidence: "FBI SUBPOENA: Money Laundering Investigation, Dec 2019"
        },

        media_october_2020: {
            id: "media_october_2020",
            title: "October 2020 Media Storm",
            text: `TIMELINE OF MEDIA COVERAGE:

October 14, 2020: NY Post publishes laptop story
October 14-15: Twitter and Facebook limit story distribution
October 15-20: Major outlets express skepticism
October 19: 51 former intelligence officials sign letter about "Russian information operation"

CRITICAL CONTEXT:
- Story emerged 3 weeks before 2020 election
- Social media platforms cited "hacked materials" policies
- Journalistic verification was limited by time constraints

2022 REVELATIONS: Major outlets including NYT and WaPo authenticated portions of the laptop contents through independent forensic analysis.`,
            image: "newsroom_october",
            imagePrompt: "Busy newsroom during breaking news, journalists at computers, October 2020 calendar visible, documentary style",
            choices: [
                {
                    text: "Analyze the intelligence officials' letter",
                    nextScene: "intelligence_letter",
                    type: "document"
                },
                {
                    text: "Investigate social media response",
                    nextScene: "social_media_response",
                    type: "investigate"
                }
            ],
            sources: [
                "NY Post October 14, 2020",
                "Twitter Safety statement",
                "Facebook policy announcement"
            ]
        },

        authentication_process: {
            id: "authentication_process",
            title: "Digital Forensics Analysis",
            text: `FORENSIC AUTHENTICATION METHODS:

1. Cryptographic signatures on emails
2. Metadata analysis of files
3. Cross-reference with known authentic communications
4. Hardware serial number verification

FINDINGS BY OUTLET:
• Washington Post (2022): Authenticated thousands of emails
• New York Times (2022): Confirmed authenticity of key emails
• CBS News (2022): Validated laptop as Hunter Biden's

LIMITATIONS:
- Not all files could be authenticated
- Some metadata showed inconsistencies
- Chain of custody gaps for non-FBI copies`,
            image: "forensic_lab",
            imagePrompt: "Digital forensics laboratory with computer screens showing authentication software, technical professional environment",
            choices: [
                {
                    text: "Review court usage of evidence",
                    nextScene: "court_proceedings",
                    type: "legal"
                },
                {
                    text: "Examine media corrections",
                    nextScene: "media_corrections",
                    type: "investigate"
                }
            ],
            sources: [
                "Washington Post forensic report",
                "NYT authentication article",
                "CBS News investigation"
            ]
        },

        intelligence_letter: {
            id: "intelligence_letter",
            title: "The Intelligence Officials' Letter",
            text: `OCTOBER 19, 2020 LETTER:

51 former intelligence officials signed a letter stating the laptop story had "all the classic earmarks of a Russian information operation."

KEY QUOTES:
"We want to emphasize that we do not know if the emails... are genuine or not"
"We do not have evidence of Russian involvement"

CRITICAL ANALYSIS:
- Letter was opinion, not based on laptop examination
- No intelligence assessment was conducted
- Signatories had no access to the actual laptop

2023 CONTEXT: Congressional testimony revealed the letter was organized quickly for political impact.`,
            image: "intelligence_document",
            imagePrompt: "Official letter document with signatures, government office setting, serious documentary style",
            choices: [
                {
                    text: "Investigate impact on coverage",
                    nextScene: "coverage_impact",
                    type: "investigate"
                },
                {
                    text: "Review subsequent revelations",
                    nextScene: "later_findings",
                    type: "evidence"
                }
            ],
            sources: [
                "Politico publication of letter",
                "Congressional testimony 2023",
                "Signatory interviews"
            ]
        },

        social_media_response: {
            id: "social_media_response",
            title: "Platform Content Moderation",
            text: `SOCIAL MEDIA ACTIONS:

Twitter: Blocked sharing of NY Post article links, locked accounts including NY Post's
Facebook: Reduced distribution pending fact-checker review

STATED REASONS:
- Potential violation of "hacked materials" policies
- Unverified claims close to election
- Concerns about foreign interference

2023 REVELATIONS:
- Twitter Files showed internal debate over decision
- FBI had regular communications with platforms
- Decisions were made rapidly under pressure

AFTERMATH: Both platforms later reversed or modified their policies regarding such content.`,
            image: "social_media_moderation",
            imagePrompt: "Social media platform logos and content moderation dashboard screens, tech office environment",
            choices: [
                {
                    text: "Examine policy changes",
                    nextScene: "policy_aftermath",
                    type: "investigate"
                },
                {
                    text: "Review legal challenges",
                    nextScene: "legal_challenges",
                    type: "legal"
                }
            ],
            sources: [
                "Twitter transparency report",
                "Facebook policy updates",
                "Congressional testimony from executives"
            ]
        },

        court_proceedings: {
            id: "court_proceedings",
            title: "Legal Proceedings and Evidence",
            text: `LAPTOP IN LEGAL CONTEXT:

2022: Federal prosecutors include laptop as evidence in tax investigation
2023: Laptop contents cited in federal gun charges case

AUTHENTICATION IN COURT:
- Prosecutors established chain of custody from FBI
- Defense did not challenge laptop authenticity
- Specific emails and messages admitted as evidence

IMPORTANT: Court authentication focused on specific files relevant to charges, not entire laptop contents.

Legal experts note the distinction between authenticated evidence and broader claims about laptop contents.`,
            image: "federal_courthouse",
            imagePrompt: "Federal courthouse exterior with official architecture, daytime professional photograph",
            choices: [
                {
                    text: "Review media corrections",
                    nextScene: "media_corrections",
                    type: "investigate"
                },
                {
                    text: "Examine ongoing investigations",
                    nextScene: "ongoing_investigations",
                    type: "current"
                }
            ],
            evidence: "COURT VERIFICATION: Laptop admitted as evidence in federal proceedings"
        },

        media_corrections: {
            id: "media_corrections",
            title: "Media Reassessments",
            text: `MAJOR MEDIA CORRECTIONS AND UPDATES:

March 2022 - New York Times: "authenticated emails" from the laptop
March 2022 - Washington Post: Confirmed thousands of authentic emails
November 2022 - CBS News: "laptop data we obtained is authentic"

KEY CHANGES:
- Initial skepticism gave way to partial authentication
- Distinction made between laptop authenticity and all attributed content
- Acknowledgment of premature dismissal

JOURNALISM REVIEW: Columbia Journalism Review criticized media's initial handling, citing:
- Over-reliance on intelligence letter
- Insufficient independent verification attempts
- Political timing influenced coverage decisions`,
            image: "newspaper_corrections",
            imagePrompt: "Stack of major newspapers with correction notices, journalism setting, professional photography",
            choices: [
                {
                    text: "Investigate ongoing impact",
                    nextScene: "ongoing_impact",
                    type: "analysis"
                },
                {
                    text: "Review lessons learned",
                    nextScene: "lessons_learned",
                    type: "conclusion"
                }
            ],
            sources: [
                "NYT March 2022 report",
                "WaPo authentication article",
                "CBS News investigation"
            ]
        },

        lessons_learned: {
            id: "lessons_learned",
            title: "Investigation Conclusions",
            text: `KEY FINDINGS:

1. The laptop itself is authentic (confirmed by FBI custody and court proceedings)
2. Many emails and files are verified as genuine
3. Not all content attributed to the laptop has been authenticated
4. Chain of custody issues exist for non-FBI copies
5. Initial media and platform responses were influenced by:
   - Election timing
   - Foreign interference concerns
   - Lack of time for verification

BROADER IMPLICATIONS:
- Importance of independent verification
- Challenges of reporting in political contexts
- Role of social media in information distribution
- Need for transparent authentication processes

This case illustrates the complexity of digital evidence in the modern information environment.`,
            image: "investigation_conclusion",
            imagePrompt: "Professional investigation summary documents on desk with laptop, serious documentary style",
            choices: [
                {
                    text: "Review full case timeline",
                    nextScene: "complete_timeline",
                    type: "summary"
                },
                {
                    text: "Return to case files",
                    nextScene: "case_selection",
                    type: "menu"
                }
            ],
            evidence: "INVESTIGATION COMPLETE: Verified facts separated from speculation"
        },

        complete_timeline: {
            id: "complete_timeline",
            title: "Complete Case Timeline",
            text: `HUNTER BIDEN LAPTOP TIMELINE:

April 2019: Laptop dropped at repair shop
July 2019: Laptop legally abandoned (90-day period)
November 2019: Shop owner contacts FBI
December 2019: FBI takes custody of laptop
October 2020: NY Post publishes story
October 2020: Social media platforms restrict
October 2020: 51 officials sign letter
2022: Major outlets authenticate portions
2022-2023: Laptop used in federal cases
2023: Congressional investigations into response

VERIFICATION STATUS:
✓ Laptop ownership: Confirmed
✓ FBI custody: Confirmed
✓ Many emails: Authenticated
⚠ All attributed content: Not verified
✓ Court evidence: Accepted

This investigation revealed how technical evidence intersects with media, politics, and justice.`,
            image: "timeline_document",
            imagePrompt: "Professional timeline infographic document showing key dates from 2019-2023, clean design",
            choices: [
                {
                    text: "Return to main menu",
                    nextScene: "case_selection",
                    type: "menu"
                }
            ],
            evidence: "CASE CLOSED: Comprehensive timeline documented"
        },

        media_coverage: {
            id: "media_coverage",
            title: "Media Coverage Analysis",
            text: `MEDIA COVERAGE TIMELINE:

INITIAL COVERAGE (October 2020):
• NY Post: Original story publication
• Most major outlets: Cautious or dismissive coverage
• Reason cited: Unverified claims during election season

SHIFTING COVERAGE (2021-2022):
• Increased independent verification efforts
• Forensic analysis by multiple outlets
• Gradual acknowledgment of authenticity

KEY MEDIA DECISIONS:
- CNN, MSNBC: Initially minimal coverage
- Fox News: Extensive coverage from start
- NYT, WaPo: Cautious then authenticated in 2022

The media response illustrates challenges in covering politically charged stories with limited verification time.`,
            image: "media_coverage_analysis",
            imagePrompt: "Multiple news network logos on screens in media monitoring center, journalism analysis setting",
            choices: [
                {
                    text: "Examine forensic authentication details",
                    nextScene: "forensic_analysis",
                    type: "technical"
                },
                {
                    text: "Review coverage impact",
                    nextScene: "coverage_impact",
                    type: "investigate"
                }
            ],
            sources: [
                "Media coverage analysis studies",
                "Journalism review articles"
            ]
        },

        forensic_analysis: {
            id: "forensic_analysis",
            title: "Digital Forensics Deep Dive",
            text: `FORENSIC AUTHENTICATION METHODOLOGY:

CRYPTOGRAPHIC VERIFICATION:
• DKIM signatures on emails verified sender authenticity
• Google, Yahoo, Apple servers confirmed email routing
• Thousands of emails passed cryptographic verification

METADATA ANALYSIS:
• File creation dates examined
• Device serial numbers verified
• GPS data in photos analyzed

FORENSIC FINDINGS:
• Core laptop data: Authenticated
• Personal correspondence: Verified through DKIM
• Some files: Showed signs of post-creation modification
• Chain of custody gaps: Identified for copies made before FBI seizure

EXPERT CONSENSUS: The laptop itself is genuine, but not all content circulating online can be definitively attributed to it.`,
            image: "digital_forensics",
            imagePrompt: "Digital forensics workstation with multiple monitors showing data analysis, professional lab environment",
            choices: [
                {
                    text: "Review authentication process",
                    nextScene: "authentication_process",
                    type: "technical"
                },
                {
                    text: "Examine court proceedings",
                    nextScene: "court_proceedings",
                    type: "legal"
                }
            ],
            sources: [
                "Washington Post digital forensics team",
                "CBS News independent analysis",
                "NYT verification methodology"
            ]
        },

        legal_analysis: {
            id: "legal_analysis",
            title: "Legal Framework Analysis",
            text: `LEGAL ISSUES EXAMINED:

PROPERTY LAW:
• Delaware abandoned property statute
• 90-day claim period expired
• Shop owner acquired legal possession

PRIVACY CONCERNS:
• Personal data on abandoned property
• Fourth Amendment considerations
• Data distribution legality questions

EVIDENCE AUTHENTICATION:
• Federal Rules of Evidence standards
• Chain of custody requirements
• Expert witness authentication protocols

ONGOING LEGAL QUESTIONS:
• Liability for distributing unverified content
• Privacy rights vs. public interest
• Platform moderation legal framework

The case raised novel legal questions about digital evidence and abandoned property.`,
            image: "legal_analysis",
            imagePrompt: "Law library with legal books and documents, scales of justice, professional legal setting",
            choices: [
                {
                    text: "Review court proceedings",
                    nextScene: "court_proceedings",
                    type: "legal"
                },
                {
                    text: "Examine legal challenges",
                    nextScene: "legal_challenges",
                    type: "investigate"
                }
            ],
            sources: [
                "Delaware property law",
                "Federal Rules of Evidence",
                "Legal expert analysis"
            ]
        },

        coverage_impact: {
            id: "coverage_impact",
            title: "Impact of Coverage Decisions",
            text: `ANALYSIS OF COVERAGE IMPACT:

IMMEDIATE EFFECTS (October 2020):
• Story reached limited audience initially
• Social media restrictions reduced spread
• Intelligence letter influenced media decisions

LONG-TERM EFFECTS:
• Debates over media gatekeeping
• Questions about platform neutrality
• Journalism ethics discussions

PUBLIC TRUST IMPLICATIONS:
• 2022 polls showed public concern about coverage
• Media credibility debates intensified
• Platform moderation policies questioned

INDUSTRY RESPONSE:
• Some outlets acknowledged errors
• Policy changes at major platforms
• Increased focus on verification speed

The episode became a case study in modern information gatekeeping.`,
            image: "coverage_impact",
            imagePrompt: "Public opinion polling data on screens, media analysis center, journalism impact assessment",
            choices: [
                {
                    text: "Review later findings",
                    nextScene: "later_findings",
                    type: "evidence"
                },
                {
                    text: "Examine media corrections",
                    nextScene: "media_corrections",
                    type: "investigate"
                }
            ],
            sources: [
                "Public opinion polling data",
                "Media ethics analyses",
                "Platform policy reviews"
            ]
        },

        later_findings: {
            id: "later_findings",
            title: "Subsequent Discoveries",
            text: `POST-2020 REVELATIONS:

2022 AUTHENTICATION:
• Multiple outlets independently verified email authenticity
• Court proceedings accepted laptop as evidence
• FBI confirmation through legal proceedings

TWITTER FILES (2023):
• Internal communications revealed
• Decision-making process exposed
• FBI communications with platforms documented

CONGRESSIONAL INVESTIGATIONS:
• Intelligence letter organization examined
• Platform decision-makers testified
• Policy recommendations developed

NEW INFORMATION:
• More context on verification capabilities
• Details on platform-government communications
• Timeline of internal decision-making

These revelations provided unprecedented insight into information control during elections.`,
            image: "later_findings",
            imagePrompt: "Congressional hearing room with documents and testimony, investigative journalism setting",
            choices: [
                {
                    text: "Review policy aftermath",
                    nextScene: "policy_aftermath",
                    type: "investigate"
                },
                {
                    text: "Examine ongoing impact",
                    nextScene: "ongoing_impact",
                    type: "analysis"
                }
            ],
            sources: [
                "Twitter Files releases",
                "Congressional testimony records",
                "2022-2023 media investigations"
            ]
        },

        policy_aftermath: {
            id: "policy_aftermath",
            title: "Policy Changes and Reforms",
            text: `PLATFORM POLICY CHANGES:

TWITTER/X:
• Hacked materials policy revised
• Content moderation transparency increased
• New ownership brought policy overhauls

FACEBOOK/META:
• Fact-checking process modifications
• Reduced reliance on third-party warnings
• New election-related content policies

BROADER INDUSTRY:
• Increased focus on verification speed
• Greater transparency in moderation decisions
• Enhanced appeals processes

LEGISLATIVE PROPOSALS:
• Platform liability discussions
• Section 230 reform debates
• Election information integrity laws

The case influenced ongoing debates about information governance.`,
            image: "policy_aftermath",
            imagePrompt: "Policy document revisions on screens, tech company headquarters, regulatory reform setting",
            choices: [
                {
                    text: "Examine legal challenges",
                    nextScene: "legal_challenges",
                    type: "legal"
                },
                {
                    text: "Review lessons learned",
                    nextScene: "lessons_learned",
                    type: "conclusion"
                }
            ],
            sources: [
                "Platform policy announcements",
                "Congressional proposals",
                "Industry reform initiatives"
            ]
        },

        legal_challenges: {
            id: "legal_challenges",
            title: "Legal Challenges and Proceedings",
            text: `LEGAL PROCEEDINGS INVOLVING THE LAPTOP:

FEDERAL TAX CASE:
• Laptop contents used as evidence
• Defense did not challenge authenticity
• Emails admitted regarding financial matters

GUN PURCHASE CASE:
• Laptop data relevant to timeline
• Communications cited by prosecutors
• Digital evidence authenticated

RELATED LEGAL ACTIONS:
• Defamation claims filed
• Shop owner legal representation
• Congressional subpoena compliance

CONSTITUTIONAL QUESTIONS:
• First Amendment and platform moderation
• Due process in digital evidence
• Privacy rights in abandoned property

Multiple legal venues examined different aspects of the laptop evidence.`,
            image: "legal_challenges",
            imagePrompt: "Federal courthouse with scales of justice, legal proceedings documents, professional judicial setting",
            choices: [
                {
                    text: "Review court proceedings",
                    nextScene: "court_proceedings",
                    type: "legal"
                },
                {
                    text: "Examine ongoing investigations",
                    nextScene: "ongoing_investigations",
                    type: "current"
                }
            ],
            sources: [
                "Federal court filings",
                "Legal analysis from experts",
                "Constitutional law reviews"
            ]
        },

        ongoing_investigations: {
            id: "ongoing_investigations",
            title: "Ongoing Investigations",
            text: `CURRENT INVESTIGATION STATUS:

FEDERAL PROSECUTIONS:
• Tax-related charges resolved
• Gun case proceedings concluded
• Potential additional investigations ongoing

CONGRESSIONAL INVESTIGATIONS:
• House oversight committee inquiries
• Intelligence committee reviews
• Judiciary committee examinations

MEDIA INVESTIGATIONS:
• Continued forensic analysis by outlets
• Historical coverage reviews
• Journalism ethics assessments

UNRESOLVED QUESTIONS:
• Full scope of authenticated content
• All parties involved in distribution
• Complete chain of custody documentation

The case remains subject to ongoing examination and legal proceedings.`,
            image: "ongoing_investigations",
            imagePrompt: "Investigation board with ongoing case materials, active case files, federal investigation setting",
            choices: [
                {
                    text: "Review lessons learned",
                    nextScene: "lessons_learned",
                    type: "conclusion"
                },
                {
                    text: "Examine ongoing impact",
                    nextScene: "ongoing_impact",
                    type: "analysis"
                }
            ],
            sources: [
                "Current federal case status",
                "Congressional investigation updates",
                "Media investigation reports"
            ]
        },

        ongoing_impact: {
            id: "ongoing_impact",
            title: "Lasting Impact Analysis",
            text: `ONGOING IMPLICATIONS:

MEDIA LANDSCAPE:
• Changed approach to pre-election stories
• Increased verification pressure
• Trust deficit with some audiences

PLATFORM GOVERNANCE:
• Evolving content moderation policies
• Government-platform relationship scrutiny
• Transparency expectations heightened

POLITICAL DISCOURSE:
• Became symbol of media bias debates
• Referenced in information freedom discussions
• Cited in platform regulation arguments

JOURNALISM PRACTICES:
• New verification protocols developed
• Election coverage guidelines revised
• Source authentication emphasized

The case continues to influence debates about media, technology, and democracy.`,
            image: "ongoing_impact",
            imagePrompt: "Media analysis center with multiple screens showing ongoing coverage, journalism impact assessment",
            choices: [
                {
                    text: "Review lessons learned",
                    nextScene: "lessons_learned",
                    type: "conclusion"
                },
                {
                    text: "Return to case files",
                    nextScene: "case_selection",
                    type: "menu"
                }
            ],
            sources: [
                "Media analysis reports",
                "Platform governance studies",
                "Democracy and technology research"
            ]
        },

        case_selection: {
            id: "case_selection",
            title: "Return to Case Files",
            text: "Returning to case selection...",
            image: "case_files",
            imagePrompt: "Investigation case files on desk, detective office setting",
            choices: []
        },

        // John Paul Mac Isaac Details
        shop_owner_background: {
            text: `JOHN PAUL MAC ISAAC - THE SHOP OWNER

The man who found the laptop:

👤 BACKGROUND:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Computer repair technician in Wilmington, DE
• Legally blind (cannot positively identify customers)
• Operated "The Mac Shop" repair business
• Registered Republican
• No prior public profile
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 HIS ACCOUNT:
• Customer dropped off 3 laptops in April 2019
• Water damage repair requested
• No return to claim property
• Delaware law gave him ownership after 90 days
• Contacted FBI after discovering contents

⚖️ AFTERMATH:
• Received death threats
• Business suffered
• Wrote book about experience
• Testified before Congress
• Filed defamation lawsuits

His decision to go public transformed his life permanently.`,
            image: "shop_owner",
            imagePrompt: "Small computer repair shop interior, Delaware location, technician workspace",
            sources: ["Congressional testimony", "Mac Isaac book and interviews"],
            choices: [
                {
                    text: "Review what he discovered",
                    nextScene: "laptop_contents",
                    type: "investigate"
                },
                {
                    text: "Examine FBI contact",
                    nextScene: "fbi_timeline",
                    type: "evidence"
                },
                {
                    text: "See how story went public",
                    nextScene: "rudy_giuliani_involvement",
                    type: "investigate"
                }
            ]
        },

        rudy_giuliani_involvement: {
            text: `RUDY GIULIANI'S ROLE

How the laptop reached the media:

👤 GIULIANI'S INVOLVEMENT:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Mac Isaac contacted Giuliani's lawyer in 2020
• Received copy of hard drive
• Provided materials to NY Post
• Became public face of laptop story
• Timing: Weeks before 2020 election
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 CONCERNS RAISED:
• Giuliani's role as Trump's personal lawyer
• Chain of custody questions
• Political motivation accusations
• Selective release of materials

🎯 MEDIA SKEPTICISM:
Many outlets questioned Giuliani's credibility due to:
• Prior false claims
• Clear political interest
• Opposition research connections
• Timing relative to election

The messenger affected how the message was received.`,
            image: "giuliani_laptop",
            imagePrompt: "Legal documents and hard drives on desk, political operative setting",
            sources: ["NY Post reporting", "Media analysis"],
            choices: [
                {
                    text: "See NY Post publication",
                    nextScene: "ny_post_story",
                    type: "investigate"
                },
                {
                    text: "Review media skepticism",
                    nextScene: "media_october_2020",
                    type: "investigate"
                },
                {
                    text: "Examine authentication later",
                    nextScene: "authentication_process",
                    type: "technical"
                }
            ]
        },

        ny_post_story: {
            text: `THE NEW YORK POST STORY

October 14, 2020 - The story breaks:

📰 ORIGINAL STORY:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Headline: "Smoking-gun email reveals how Hunter
Biden introduced Ukrainian businessman to VP dad"

Key Claims:
• Email showing Burisma meeting request
• "Big guy" reference in separate email
• Business dealing documentation
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 INTERNAL ISSUES:
• Some Post reporters refused bylines
• Concerns about verification level
• Questions about sourcing transparency
• Tight deadline before election

🔄 PLATFORM RESPONSE:
Within hours:
• Twitter blocked link sharing
• Facebook reduced distribution
• NY Post account temporarily locked

The story's rollout created as much controversy as its content.`,
            image: "ny_post_front_page",
            imagePrompt: "Newspaper front page headline, newsroom printing press, October 2020",
            sources: ["NY Post original reporting", "Media analysis"],
            choices: [
                {
                    text: "See social media blocking",
                    nextScene: "social_media_response",
                    type: "investigate"
                },
                {
                    text: "Review intelligence letter",
                    nextScene: "intelligence_letter",
                    type: "document"
                },
                {
                    text: "Examine later authentication",
                    nextScene: "media_corrections",
                    type: "investigate"
                }
            ]
        },

        // Burisma Details
        burisma_connection: {
            text: `THE BURISMA CONNECTION

Hunter Biden's Ukrainian business dealings:

🏢 BURISMA HOLDINGS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Ukrainian natural gas company
• Owner Mykola Zlochevsky - former official
• Company under investigation when Biden joined
• Hunter Biden: Board member 2014-2019
• Compensation: ~$50,000/month reported
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 KEY QUESTIONS:
• What qualified Hunter for the position?
• Did his father's role influence dealings?
• Did board position affect U.S. policy?

⚖️ INVESTIGATIONS FOUND:
• No evidence Joe Biden changed policy for Burisma
• Hunter's position created appearance problem
• Ukrainian prosecutor firing unrelated to Burisma case
• Multiple investigations found no policy corruption

🎯 LAPTOP RELEVANCE:
Emails showed business discussions, but critical question remains: Did influence affect official actions?`,
            image: "burisma_headquarters",
            imagePrompt: "Ukrainian corporate headquarters, natural gas company, international business",
            sources: ["Senate investigation reports", "Ukrainian government records"],
            choices: [
                {
                    text: "Examine Chinese business ties",
                    nextScene: "china_business",
                    type: "investigate"
                },
                {
                    text: "Review Senate investigation",
                    nextScene: "senate_investigation",
                    type: "document"
                },
                {
                    text: "See Devon Archer testimony",
                    nextScene: "devon_archer_testimony",
                    type: "witness"
                }
            ]
        },

        china_business: {
            text: `CHINESE BUSINESS DEALINGS

Hunter Biden's business connections in China:

🇨🇳 CEFC CHINA ENERGY:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Chinese energy conglomerate
• Hunter involved in potential deals 2017+
• Chairman Ye Jianming later arrested in China
• Company collapsed amid scandal
• No evidence deals completed successfully
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📧 KEY EMAILS:
• Discussed potential equity arrangements
• "Big guy" reference in one email
• Tony Bobulinski claimed "big guy" = Joe Biden
• Biden campaign denied Joe's involvement

🔍 INVESTIGATION FINDINGS:
• Some payments received from Chinese entities
• Tax issues arose from income reporting
• No evidence of completed investment deals
• Timing: After Joe Biden left VP office

The Chinese dealings became central to later tax charges.`,
            image: "china_business",
            imagePrompt: "International business documents, Chinese and American flags, corporate dealings",
            sources: ["Court filings", "Congressional testimony"],
            choices: [
                {
                    text: "Review Tony Bobulinski claims",
                    nextScene: "bobulinski_testimony",
                    type: "witness"
                },
                {
                    text: "Examine tax charges",
                    nextScene: "tax_charges",
                    type: "legal"
                },
                {
                    text: "See investigation findings",
                    nextScene: "senate_investigation",
                    type: "document"
                }
            ]
        },

        devon_archer_testimony: {
            text: `DEVON ARCHER TESTIMONY

Hunter Biden's business partner testifies:

👤 DEVON ARCHER:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Hunter Biden's longtime business partner
• Served together on Burisma board
• Convicted in separate fraud case
• Testified to Congress in 2023
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 KEY TESTIMONY POINTS:
• Joe Biden was on speakerphone calls with Hunter
• Described calls as "selling the brand"
• Said no business discussed on calls
• Confirmed Hunter traded on family name

🎯 INTERPRETATION DEBATES:
Republicans: Showed Joe Biden's awareness
Democrats: No policy discussions on calls
Both: Hunter leveraged family connections

⚖️ LEGAL IMPLICATIONS:
Archer's testimony provided context but didn't establish direct wrongdoing by Joe Biden.`,
            image: "congressional_testimony",
            imagePrompt: "Congressional hearing room, witness testimony, official government proceedings",
            sources: ["House Oversight Committee testimony", "Transcript analysis"],
            choices: [
                {
                    text: "Review Burisma details",
                    nextScene: "burisma_connection",
                    type: "investigate"
                },
                {
                    text: "Examine Republican investigation",
                    nextScene: "house_investigation",
                    type: "document"
                },
                {
                    text: "See legal proceedings",
                    nextScene: "court_proceedings",
                    type: "legal"
                }
            ]
        },

        bobulinski_testimony: {
            text: `TONY BOBULINSKI CLAIMS

Former business associate goes public:

👤 TONY BOBULINSKI:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Former business associate of Hunter Biden
• Navy veteran, CEO background
• Went public October 2020
• Claimed direct knowledge of Joe Biden's involvement
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 KEY CLAIMS:
• "Big guy" in emails referred to Joe Biden
• Joe Biden was aware of business dealings
• Met with Joe Biden briefly in 2017
• Had text messages showing discussions

🔍 VERIFICATION STATUS:
• Meeting with Joe Biden disputed
• Text messages authentic
• No documentary proof of direct Joe Biden financial involvement
• FBI interviewed Bobulinski

⚖️ IMPACT:
Claims were politically significant but didn't result in charges against Joe Biden.`,
            image: "bobulinski_testimony",
            imagePrompt: "Press conference setting, businessman testimony, political controversy",
            sources: ["Bobulinski press statements", "FBI interview records"],
            choices: [
                {
                    text: "Review Chinese business deals",
                    nextScene: "china_business",
                    type: "investigate"
                },
                {
                    text: "See Republican investigation",
                    nextScene: "house_investigation",
                    type: "document"
                },
                {
                    text: "Examine later findings",
                    nextScene: "later_findings",
                    type: "evidence"
                }
            ]
        },

        // IRS Whistleblowers
        irs_whistleblowers: {
            text: `IRS WHISTLEBLOWER TESTIMONY

IRS agents raise concerns about investigation:

👥 THE WHISTLEBLOWERS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Gary Shapley - IRS Supervisory Special Agent
Joseph Ziegler - IRS Special Agent (original anonymous)
Both worked on Hunter Biden investigation
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 KEY ALLEGATIONS:
• DOJ interfered with investigation
• Prevented interviews of Joe Biden
• Blocked search warrants
• Gave preferential treatment
• Slow-walked investigation

🔍 DOJ RESPONSE:
• Denied political interference
• Investigation handled appropriately
• David Weiss had full authority
• Process followed guidelines

⚖️ SIGNIFICANCE:
Testimony fueled Republican calls for special counsel and investigations into DOJ.`,
            image: "irs_whistleblowers",
            imagePrompt: "Congressional hearing, government agents testifying, oversight proceedings",
            sources: ["House testimony transcripts", "IRS agent statements"],
            choices: [
                {
                    text: "See DOJ investigation",
                    nextScene: "doj_investigation",
                    type: "legal"
                },
                {
                    text: "Review special counsel",
                    nextScene: "special_counsel",
                    type: "legal"
                },
                {
                    text: "Examine Republican response",
                    nextScene: "house_investigation",
                    type: "document"
                }
            ]
        },

        doj_investigation: {
            text: `DOJ INVESTIGATION TIMELINE

The federal investigation into Hunter Biden:

📅 INVESTIGATION TIMELINE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
2018: Investigation opened (Trump DOJ)
2019: FBI receives laptop
2020-2022: Grand jury proceedings
2023: Plea deal proposed then collapsed
2023: Special counsel appointed
2024: Trials and convictions
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 KEY DEVELOPMENTS:
• David Weiss appointed by Trump DOJ
• Investigation spanned both administrations
• Initial charges focused on tax issues
• Gun charge added separately

⚖️ CONTROVERSIES:
• Length of investigation questioned
• Plea deal collapse raised questions
• IRS whistleblower allegations
• Special counsel appointment timing

The investigation became politically charged from all sides.`,
            image: "doj_investigation",
            imagePrompt: "Department of Justice building, federal investigation documents, legal proceedings",
            sources: ["DOJ press releases", "Court filings"],
            choices: [
                {
                    text: "Review tax charges",
                    nextScene: "tax_charges",
                    type: "legal"
                },
                {
                    text: "See gun charge case",
                    nextScene: "gun_charges",
                    type: "legal"
                },
                {
                    text: "Examine special counsel",
                    nextScene: "special_counsel",
                    type: "legal"
                }
            ]
        },

        tax_charges: {
            text: `TAX CHARGES AND CONVICTION

Federal tax case against Hunter Biden:

⚖️ TAX CHARGES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Failed to pay taxes 2016-2019
• Approximately $1.4 million owed
• Filed false returns
• Evaded tax obligations
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 CASE DETAILS:
• Income from foreign business dealings
• Burisma, CEFC payments included
• Spent money on personal expenses
• Eventually paid back taxes with penalties

🔍 TRIAL OUTCOME:
September 2024: Convicted on all counts
• 3 felony tax charges
• 6 misdemeanor tax charges
• Faced up to 17 years potential sentence

💡 LAPTOP EVIDENCE:
Laptop contents used to establish income and spending patterns, contributing to conviction.`,
            image: "tax_court",
            imagePrompt: "Federal courtroom, tax documents, legal proceedings",
            sources: ["Court filings", "Trial transcripts"],
            choices: [
                {
                    text: "See gun case",
                    nextScene: "gun_charges",
                    type: "legal"
                },
                {
                    text: "Review pardon decision",
                    nextScene: "pardon_decision",
                    type: "legal"
                },
                {
                    text: "Examine political impact",
                    nextScene: "political_impact",
                    type: "analysis"
                }
            ]
        },

        gun_charges: {
            text: `GUN CHARGES AND CONVICTION

Federal firearms case:

🔫 GUN CHARGES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• October 2018 gun purchase
• Lied on federal form about drug use
• Possessed firearm while addicted
• Three felony counts
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 CASE DETAILS:
• Firearm form asks about drug addiction
• Hunter answered "no"
• Laptop and other evidence showed drug use
• Gun disposed of after 11 days

🔍 TRIAL OUTCOME:
June 2024: Convicted on all three counts
• First conviction of sitting president's child
• Sentencing pending at time of pardon

💡 LAPTOP RELEVANCE:
Laptop contents and other messages established timeline of drug use, critical to prosecution.`,
            image: "gun_case",
            imagePrompt: "Federal courtroom, firearms exhibit, legal proceedings",
            sources: ["Court filings", "Trial evidence"],
            choices: [
                {
                    text: "See tax conviction",
                    nextScene: "tax_charges",
                    type: "legal"
                },
                {
                    text: "Review pardon decision",
                    nextScene: "pardon_decision",
                    type: "legal"
                },
                {
                    text: "Examine political impact",
                    nextScene: "political_impact",
                    type: "analysis"
                }
            ]
        },

        special_counsel: {
            text: `SPECIAL COUNSEL APPOINTMENT

David Weiss becomes special counsel:

👤 DAVID WEISS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Trump-appointed U.S. Attorney
• Led Hunter Biden investigation since 2019
• Appointed Special Counsel August 2023
• Full authority over investigation
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 WHY SPECIAL COUNSEL:
• Plea deal collapsed
• IRS whistleblower testimony
• Political pressure from all sides
• Need for perceived independence

🔍 AUTHORITY GRANTED:
• Full prosecution authority
• Can investigate related matters
• Reports directly to AG
• Independent of normal DOJ chain

⚖️ RESULT:
Led to convictions on both tax and gun charges.`,
            image: "special_counsel",
            imagePrompt: "Department of Justice, special counsel documents, federal investigation",
            sources: ["AG appointment order", "DOJ announcements"],
            choices: [
                {
                    text: "See investigation findings",
                    nextScene: "doj_investigation",
                    type: "legal"
                },
                {
                    text: "Review convictions",
                    nextScene: "tax_charges",
                    type: "legal"
                },
                {
                    text: "Examine pardon",
                    nextScene: "pardon_decision",
                    type: "legal"
                }
            ]
        },

        pardon_decision: {
            text: `THE PRESIDENTIAL PARDON

December 2024 - Joe Biden pardons his son:

📜 THE PARDON:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Date: December 1, 2024
Scope: All offenses 2014-2024
Coverage: Both convictions plus any potential charges
President's Statement: Called prosecution "selective"
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 BIDEN'S JUSTIFICATION:
• Called it political persecution
• Cited no other president's family treated this way
• Said he initially hoped justice system would work
• Claimed DOJ tainted by political opponents

🔍 CRITICISM:
• Biden previously promised not to pardon Hunter
• Unprecedented scope of pardon
• Both parties criticized decision
• Questions about equal justice

⚖️ LEGAL EFFECT:
Ended all federal cases; no state jurisdiction applies.`,
            image: "presidential_pardon",
            imagePrompt: "White House, presidential documents, pardon signing",
            sources: ["White House statement", "Pardon text"],
            choices: [
                {
                    text: "See political reactions",
                    nextScene: "political_impact",
                    type: "analysis"
                },
                {
                    text: "Review full case",
                    nextScene: "lessons_learned",
                    type: "conclusion"
                },
                {
                    text: "Examine media response",
                    nextScene: "pardon_media_reaction",
                    type: "investigate"
                }
            ]
        },

        pardon_media_reaction: {
            text: `MEDIA REACTION TO PARDON

Coverage of Biden's pardon decision:

📰 MEDIA RESPONSE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• "Biden breaks promise on pardon" - multiple outlets
• Comparisons to Trump's pardon record
• Editorial criticism across spectrum
• Analysis of pardon scope
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 KEY MEDIA POINTS:
• Previous statements promising no pardon
• Broad scope covering decade
• Timing after election loss
• Precedent concerns

🔍 COMPARISON COVERAGE:
Media noted similarities and differences with:
• Trump family member pardons
• Clinton's Marc Rich pardon
• Other presidential pardons

⚖️ JOURNALISM REFLECTION:
Some outlets noted irony of initial laptop skepticism followed by convictions followed by pardon.`,
            image: "pardon_media",
            imagePrompt: "News coverage screens, multiple outlets, pardon reaction",
            sources: ["Media coverage compilation", "Editorial analyses"],
            choices: [
                {
                    text: "See political impact",
                    nextScene: "political_impact",
                    type: "analysis"
                },
                {
                    text: "Review lessons learned",
                    nextScene: "lessons_learned",
                    type: "conclusion"
                },
                {
                    text: "Return to case files",
                    nextScene: "case_selection",
                    type: "menu"
                }
            ]
        },

        political_impact: {
            text: `POLITICAL IMPACT ANALYSIS

The laptop story's political significance:

📊 ELECTION IMPACT DEBATE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Story emerged 3 weeks before 2020 election
• Social media blocked distribution
• Intelligence letter affected coverage
• Polling on impact disputed
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 PARTISAN INTERPRETATIONS:
Republicans: Media and platforms protected Biden
Democrats: Unverified info was appropriately checked
Both: Acknowledge verification failures

🔍 LONGER-TERM IMPACT:
• Became symbol in media bias debates
• Changed platform policies
• Influenced 2024 campaign coverage
• Fueled impeachment efforts

⚖️ ASSESSED IMPACT:
Difficult to measure electoral effect, but undeniably shaped media and platform practices.`,
            image: "political_impact",
            imagePrompt: "Political analysis, polling data, electoral maps, media coverage",
            sources: ["Polling data", "Media analysis studies"],
            choices: [
                {
                    text: "See House investigation",
                    nextScene: "house_investigation",
                    type: "document"
                },
                {
                    text: "Review lessons learned",
                    nextScene: "lessons_learned",
                    type: "conclusion"
                },
                {
                    text: "Return to case files",
                    nextScene: "case_selection",
                    type: "menu"
                }
            ]
        },

        house_investigation: {
            text: `HOUSE REPUBLICAN INVESTIGATION

Congressional oversight efforts:

🏛️ HOUSE OVERSIGHT INVESTIGATION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Began after 2022 Republican House majority
• Focus on Biden family business dealings
• Subpoenas for bank records
• Witness depositions conducted
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 KEY FINDINGS CLAIMED:
• Millions in foreign payments to Biden family
• Shell companies used
• Suspicious activity reports filed by banks
• Joe Biden allegedly involved

🔍 DEMOCRATIC RESPONSE:
• No evidence of policy corruption
• No direct payments to Joe Biden
• Legal business activities
• Political motivation questioned

⚖️ IMPEACHMENT EFFORT:
House voted to impeach Biden on other grounds; Senate did not convict.`,
            image: "house_investigation",
            imagePrompt: "Congressional hearing room, oversight investigation, political proceedings",
            sources: ["House Oversight Committee reports", "Witness transcripts"],
            choices: [
                {
                    text: "See Senate investigation",
                    nextScene: "senate_investigation",
                    type: "document"
                },
                {
                    text: "Review witness testimony",
                    nextScene: "devon_archer_testimony",
                    type: "witness"
                },
                {
                    text: "Examine political impact",
                    nextScene: "political_impact",
                    type: "analysis"
                }
            ]
        },

        senate_investigation: {
            text: `SENATE INVESTIGATIONS

Multiple Senate inquiries examined the case:

🏛️ SENATE INVESTIGATIONS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
2020 Republican Report:
• Found Hunter's position created conflict
• No evidence of policy change
• Questioned judgment, not criminality

2021 Democratic Response:
• Called findings partisan
• Noted no wrongdoing found
• Criticized investigation scope
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 BIPARTISAN CONCERNS:
Both parties acknowledged:
• Hunter traded on family name
• Appearance of conflict problematic
• Foreign business ties questionable

⚖️ KEY DISTINCTION:
Investigations found no evidence Joe Biden took official action to benefit Hunter's business partners.`,
            image: "senate_investigation",
            imagePrompt: "Senate hearing room, bipartisan investigation, official proceedings",
            sources: ["Senate committee reports", "Hearing transcripts"],
            choices: [
                {
                    text: "See Burisma details",
                    nextScene: "burisma_connection",
                    type: "investigate"
                },
                {
                    text: "Review House investigation",
                    nextScene: "house_investigation",
                    type: "document"
                },
                {
                    text: "Examine conclusions",
                    nextScene: "lessons_learned",
                    type: "conclusion"
                }
            ]
        },

        fifty_one_officials: {
            text: `THE 51 INTELLIGENCE OFFICIALS

Examining the controversial letter signers:

👥 THE SIGNATORIES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• 51 former intelligence officials
• Included former CIA directors
• Former DNI James Clapper
• Former CIA Director John Brennan
• All signed October 19, 2020 letter
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 LETTER'S ACTUAL LANGUAGE:
• "Has all the classic earmarks of Russian information operation"
• "We do not know if the emails are genuine"
• Presented as expert opinion, not assessment

🔍 LATER SCRUTINY:
• None examined the actual laptop
• No intelligence assessment conducted
• Organization of letter investigated
• Some signers expressed regret

⚖️ IMPACT:
Letter heavily cited to dismiss story; later authentication undermined its premise.`,
            image: "intelligence_officials",
            imagePrompt: "Former intelligence officials, CIA logos, official letter document",
            sources: ["Original letter text", "Congressional investigation"],
            choices: [
                {
                    text: "See media impact",
                    nextScene: "coverage_impact",
                    type: "investigate"
                },
                {
                    text: "Review later authentication",
                    nextScene: "media_corrections",
                    type: "investigate"
                },
                {
                    text: "Examine investigation",
                    nextScene: "intelligence_letter",
                    type: "document"
                }
            ]
        },

        addiction_context: {
            text: `HUNTER BIDEN'S ADDICTION STRUGGLES

Personal context for the investigation:

👤 ADDICTION HISTORY:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Long struggle with alcohol and drugs
• Multiple rehabilitation stays
• Publicly acknowledged addiction
• Wrote memoir "Beautiful Things" about it
• Gun charge related to addiction status
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 FAMILY TRAGEDY:
• Brother Beau Biden died of cancer 2015
• Hunter spiraled after brother's death
• Joe Biden publicly supported son's recovery
• Family dynamic became part of story

🔍 LEGAL RELEVANCE:
• Gun form question about drug addiction
• Tax issues during addiction period
• Defense cited addiction as mitigating factor

⚖️ PUBLIC REACTION:
Some sympathy for addiction struggle; others noted it didn't excuse legal violations.`,
            image: "addiction_recovery",
            imagePrompt: "Recovery journey, family support, personal struggles, memoir",
            sources: ["Hunter Biden memoir", "Court proceedings"],
            choices: [
                {
                    text: "See gun charges",
                    nextScene: "gun_charges",
                    type: "legal"
                },
                {
                    text: "Review tax case",
                    nextScene: "tax_charges",
                    type: "legal"
                },
                {
                    text: "Examine pardon context",
                    nextScene: "pardon_decision",
                    type: "legal"
                }
            ]
        },

        art_controversy: {
            text: `THE ART SALES CONTROVERSY

Hunter Biden's art career raised ethics questions:

🎨 ART SALES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Hunter began painting during recovery
• Art priced up to $500,000 per piece
• Multiple gallery shows
• Buyers' identities kept anonymous
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 ETHICS CONCERNS:
• Could buyers seek access through purchases?
• Anonymity prevented conflict tracking
• No precedent for situation
• White House adopted "blind sale" policy

🔍 WHITE HOUSE RESPONSE:
• Implemented rules to keep buyers anonymous
• Ethics experts remained concerned
• No evidence of influence sought

⚖️ OUTCOME:
Art sales continued controversy but produced no specific wrongdoing evidence.`,
            image: "art_gallery",
            imagePrompt: "Art gallery showing, abstract paintings, high-end art sale",
            sources: ["Gallery records", "Ethics analyses"],
            choices: [
                {
                    text: "See business dealings",
                    nextScene: "china_business",
                    type: "investigate"
                },
                {
                    text: "Review overall investigation",
                    nextScene: "lessons_learned",
                    type: "conclusion"
                },
                {
                    text: "Return to case files",
                    nextScene: "case_selection",
                    type: "menu"
                }
            ]
        }
    }
};

// Register the story with the game engine
if (typeof window !== 'undefined') {
    window.HunterBidenLaptopStoryExpanded = HunterBidenLaptopStoryExpanded;
}
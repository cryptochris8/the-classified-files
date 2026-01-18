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
        }
    }
};

// Register the story with the game engine
if (typeof window !== 'undefined') {
    window.HunterBidenLaptopStoryExpanded = HunterBidenLaptopStoryExpanded;
}
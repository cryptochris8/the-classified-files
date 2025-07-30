const EpsteinStoryFactual = {
    scenes: {
        intro: {
            text: `EDUCATIONAL INVESTIGATION: THE EPSTEIN FILES
            
You are an investigative journalist examining the recently declassified Epstein files released by the Department of Justice in 2025. These 341 pages of documents represent the most comprehensive official release about convicted sex offender Jeffrey Epstein's crimes.

VERIFIED FACTS FROM DOJ RELEASE:
- Over 250 underage girls were sexually exploited
- More than 1,000 total victims have been identified
- Flight logs span 1991-2006, signed by chief pilot David Rodgers
- Evidence included 40 computers, 26 storage drives, 70+ CDs

The FBI concluded after exhaustive review: "No client list existed" and "No evidence of blackmail operations." Epstein died by suicide on August 10, 2019.

Your task: Examine these official documents to understand how this case unfolded and what investigative journalism techniques revealed the truth.`,
            image: "newsroom_investigation",
            imagePrompt: "A serious investigative journalist in a dimly lit newsroom examining stacks of official government documents spread across a desk, with computer screens showing FBI files, dramatic lighting, realistic photography style",
            sources: ["DOJ Press Release 2025", "FBI Records Vault", "Southern District NY Court Documents"],
            choices: [
                {
                    text: "Start with the 2005 Palm Beach Police investigation that began this case",
                    nextScene: "palm_beach_investigation",
                    progressIncrease: 10,
                    factual: true
                },
                {
                    text: "Examine the recently released flight logs (1991-2006)",
                    nextScene: "flight_logs_analysis",
                    evidence: true,
                    progressIncrease: 15,
                    factual: true
                },
                {
                    text: "Review the 2019 federal charges that led to Epstein's arrest",
                    nextScene: "federal_charges_2019",
                    progressIncrease: 12,
                    factual: true
                }
            ],
            educationalNote: "This investigation is based entirely on officially released government documents and court records."
        },

        palm_beach_investigation: {
            text: `THE PALM BEACH INVESTIGATION (2005-2008)
            
VERIFIED TIMELINE FROM COURT RECORDS:

2005: Palm Beach Police began investigating after reports that a 14-year-old girl was molested at Epstein's mansion. The initial report came from the girl's mother.

2006: A grand jury indicted Epstein on a single count of prostitution. However, Palm Beach Police Chief Michael Reiter and lead detective Joe Recarey referred the case to the FBI, stating the charge didn't reflect "the totality of Epstein's conduct."

2008: Despite extensive evidence, Epstein pleaded guilty to only one state count of soliciting prostitution and one count of soliciting prostitution from someone under 18. He served approximately one year, largely on work release.

INVESTIGATIVE JOURNALISM LESSON: The Miami Herald's 2018 investigation revealed how this plea deal covered up the scope of Epstein's crimes, showing there were approximately 50 victims rather than the single case prosecuted.

The contrast between evidence and prosecution became a key example of how powerful individuals can escape justice.`,
            image: "palm_beach_police_station",
            imagePrompt: "Palm Beach police station exterior in 2005, with police cars and official building facade, documentary photography style, showing the beginning of a major investigation",
            sources: ["Palm Beach Police Records", "Miami Herald Investigation 2018", "Federal Court Documents SDNY"],
            choices: [
                {
                    text: "Investigate why the plea deal was so lenient despite extensive evidence",
                    nextScene: "plea_deal_analysis",
                    evidence: true,
                    progressIncrease: 20,
                    factual: true
                },
                {
                    text: "Examine how the Miami Herald uncovered the full scope in 2018",
                    nextScene: "miami_herald_investigation",
                    progressIncrease: 18,
                    factual: true
                },
                {
                    text: "Follow the FBI referral and what federal agents initially found",
                    nextScene: "fbi_initial_investigation",
                    evidence: true,
                    progressIncrease: 15,
                    factual: true
                }
            ],
            educationalNote: "This demonstrates how initial investigations can be limited by jurisdictional and political factors."
        },

        flight_logs_analysis: {
            text: `FLIGHT LOGS ANALYSIS (1991-2006)
            
OFFICIAL EVIDENCE FROM DOJ RELEASE:

The declassified flight logs comprise nearly 120 pages of handwritten records, each signed by David Rodgers, Epstein's chief pilot for over a decade.

VERIFIED FACTS FROM THE LOGS:
- Time period: 1991 through early 2006
- Aircraft: Epstein's private jet (nicknamed "Lolita Express" by media)
- Passengers included politicians, musicians, models, and financiers
- Routes frequently included New York, Palm Beach, and the U.S. Virgin Islands

INVESTIGATIVE METHODOLOGY:
These logs became crucial evidence because they provided:
1. Timeline of when individuals traveled with Epstein
2. Geographic patterns showing frequent trips to private locations
3. Corroboration for victim testimonies about when abuse occurred

IMPORTANT CLARIFICATION: The DOJ concluded that being on flight logs does not indicate knowledge of or participation in criminal activity. Many passengers were unaware of Epstein's crimes.`,
            image: "flight_logs_examination",
            imagePrompt: "Close-up of authentic handwritten flight logs on a desk, with pilot signatures and passenger names, official aviation documents, investigative journalism setting with magnifying glass",
            sources: ["DOJ Declassified Files 2025", "USA vs. Maxwell Trial Evidence", "Aviation Records"],
            choices: [
                {
                    text: "Cross-reference flight dates with victim testimonies from court records",
                    nextScene: "victim_testimony_correlation",
                    evidence: true,
                    progressIncrease: 25,
                    factual: true
                },
                {
                    text: "Examine the geographic patterns and property connections",
                    nextScene: "property_network_analysis",
                    evidence: true,
                    progressIncrease: 20,
                    factual: true
                },
                {
                    text: "Study how investigators used these logs as evidence",
                    nextScene: "evidence_methodology",
                    progressIncrease: 22,
                    factual: true
                }
            ],
            educationalNote: "Flight logs provide circumstantial evidence but require careful analysis to avoid false conclusions."
        },

        federal_charges_2019: {
            text: `FEDERAL CHARGES AND INVESTIGATION (2019)
            
VERIFIED TIMELINE FROM COURT DOCUMENTS:

July 6, 2019: Federal agents arrested Epstein at Teterboro Airport in New Jersey. He was charged in the Southern District Court of New York with:
- One count of sex trafficking of minors
- One count of conspiracy to commit sex trafficking of minors

THE EVIDENCE COLLECTED:
According to the official DOJ evidence list released in 2025:
- 40 computers and electronic devices
- 26 storage drives containing over 300 gigabytes of data
- More than 70 CDs and 6 recording devices
- "One CD labelled 'girl pics nude book 4'"
- Multiple massage tables (one used as evidence in Maxwell trial)
- Photo albums including "photo album of girl and Epstein"

August 10, 2019: Epstein died by suicide at the Metropolitan Correctional Center. The FBI's independent review of footage confirmed no one entered his cell area between 10:40 PM August 9 and 6:30 AM August 10.

INVESTIGATIVE IMPACT: This federal case revealed the systematic nature of the crimes and led to Ghislaine Maxwell's conviction.`,
            image: "federal_courthouse_2019",
            imagePrompt: "Federal courthouse in New York with FBI agents and media presence during the 2019 Epstein arrest, dramatic courthouse steps, news vans, official law enforcement presence",
            sources: ["SDNY Indictment July 2019", "FBI Evidence Inventory 2025", "DOJ Suicide Investigation Report"],
            choices: [
                {
                    text: "Examine the evidence collection process and what it revealed",
                    nextScene: "evidence_analysis_detailed",
                    evidence: true,
                    progressIncrease: 30,
                    factual: true
                },
                {
                    text: "Study how this case led to Ghislaine Maxwell's prosecution",
                    nextScene: "maxwell_connection",
                    progressIncrease: 25,
                    factual: true
                },
                {
                    text: "Investigate the FBI's suicide investigation methodology",
                    nextScene: "suicide_investigation",
                    progressIncrease: 20,
                    factual: true
                }
            ],
            educationalNote: "Federal cases require different standards of evidence than state prosecutions, explaining the stronger charges in 2019."
        },

        evidence_analysis_detailed: {
            text: `EVIDENCE ANALYSIS: WHAT THE DATA REVEALED
            
OFFICIAL DOJ FINDINGS FROM DIGITAL EVIDENCE:

The 300+ gigabytes of data across 40 computers and 26 storage drives contained:
- Over 10,000 images and videos of illegal child sexual abuse material
- Photographs of victims who appear to be minors
- Images and videos showing the systematic nature of the operation

INVESTIGATIVE TECHNIQUES USED:
1. Digital forensics to recover deleted files
2. Photo analysis to identify victims and locations
3. Timeline reconstruction using metadata
4. Cross-referencing with victim testimonies

EDUCATIONAL LESSON: Modern investigations rely heavily on digital evidence, but this evidence must be carefully preserved and analyzed using proper forensic techniques to be admissible in court.

The scope of digital evidence helped prosecutors understand that this was not isolated incidents but a systematic operation spanning years.

FBI CONCLUSION: After exhaustive review, no evidence was found of a "client list" or blackmail operations, contrary to speculation.`,
            image: "digital_forensics_lab",
            imagePrompt: "FBI digital forensics laboratory with computer screens showing evidence analysis, official government setting, cybercrime investigation equipment, professional law enforcement environment",
            sources: ["FBI Digital Forensics Report", "DOJ Evidence Analysis 2025", "Cybercrime Investigation Protocols"],
            choices: [
                {
                    text: "Study how digital forensics techniques helped identify victims",
                    nextScene: "victim_identification_process",
                    evidence: true,
                    progressIncrease: 35,
                    factual: true
                },
                {
                    text: "Examine why no 'client list' was found despite speculation",
                    nextScene: "client_list_investigation",
                    progressIncrease: 30,
                    factual: true
                },
                {
                    text: "Learn about legal standards for digital evidence in federal court",
                    nextScene: "digital_evidence_standards",
                    progressIncrease: 25,
                    factual: true
                }
            ],
            educationalNote: "Digital forensics has revolutionized criminal investigations but requires specialized expertise and legal protocols."
        },

        victim_identification_process: {
            text: `VICTIM IDENTIFICATION AND SUPPORT
            
OFFICIAL DOJ STATISTICS:
- Over 1,000 victims have been identified through the investigation
- More than 250 underage girls were directly exploited
- Victims came from diverse backgrounds, often from vulnerable situations

INVESTIGATIVE PROCESS FOR VICTIM IDENTIFICATION:
1. Cross-referencing photographic evidence with missing persons reports
2. Following up on tips from law enforcement and social services
3. Analyzing travel records and school attendance patterns
4. Victim interviews conducted by specially trained investigators

VICTIM SERVICES PROVIDED:
- Trauma-informed interview techniques
- Psychological support and counseling referrals  
- Legal assistance for civil cases
- Protection of identity in court proceedings

EDUCATIONAL INSIGHT: Modern victim-centered investigations focus on supporting survivors while gathering evidence. This represents a significant evolution from past practices where victims were often re-traumatized by the legal process.

The scale of victimization revealed through careful forensic work demonstrated this was one of the largest sex trafficking operations prosecuted in U.S. history.

Your investigation has now documented the full scope of this case using official sources and proper investigative methodology.`,
            image: "victim_services_center",
            imagePrompt: "Professional victim services center with counselors and support staff, warm and supportive environment, showing the care and resources provided to survivors of trafficking",
            sources: ["DOJ Victim Services Reports", "FBI Victim Identification Protocols", "Trauma-Informed Investigation Guidelines"],
            choices: [
                {
                    text: "Complete investigation summary with educational conclusions",
                    nextScene: "investigation_complete_educational",
                    progressIncrease: 40,
                    factual: true
                },
                {
                    text: "Study how this case changed investigative protocols for similar crimes",
                    nextScene: "policy_changes_impact",
                    progressIncrease: 35,
                    factual: true
                },
                {
                    text: "Research the ongoing civil cases and victim compensation",
                    nextScene: "civil_litigation_impact",
                    progressIncrease: 30,
                    factual: true
                }
            ],
            educationalNote: "Victim-centered approaches are now standard in trafficking investigations, representing important progress in law enforcement."
        },

        investigation_complete_educational: {
            text: `INVESTIGATION COMPLETE: EDUCATIONAL SUMMARY

You have successfully examined the Epstein case using verified facts from official government sources. Here's what proper investigative journalism revealed:

VERIFIED FACTS DISCOVERED:
✓ Initial 2005 investigation by Palm Beach Police
✓ 2008 controversial plea deal that limited prosecution  
✓ 2019 federal charges that revealed the full scope
✓ Over 1,000 victims identified through systematic investigation
✓ Massive digital evidence cache analyzed by FBI
✓ No evidence found of "client lists" or blackmail operations
✓ Suicide confirmed through independent FBI review

INVESTIGATIVE TECHNIQUES LEARNED:
• Document analysis and source verification
• Digital forensics and evidence preservation
• Victim identification and trauma-informed interviews
• Timeline reconstruction using multiple sources
• Cross-referencing different types of evidence

EDUCATIONAL IMPACT:
This case demonstrates how:
- Investigative journalism can expose institutional failures
- Proper law enforcement techniques can identify large numbers of victims
- Digital evidence has transformed modern investigations
- Victim-centered approaches improve both justice and healing

SOURCES CONSULTED: DOJ Press Releases, FBI Records Vault, Federal Court Documents, Miami Herald Investigation, Official Evidence Lists

Your fact-based investigation shows how real journalism uncovers truth through careful verification rather than speculation.`,
            image: "educational_conclusion",
            imagePrompt: "A completed investigation board with verified facts, official documents, and educational conclusions, showing the professional results of fact-based journalism",
            sources: ["Complete DOJ File Review", "FBI Investigation Summary", "Educational Analysis"],
            choices: [
                {
                    text: "Begin new investigation with verified historical classified files",
                    nextScene: "intro",
                    progressIncrease: 0
                }
            ],
            educationalNote: "This investigation demonstrates the importance of using verified sources and official documents in journalism."
        }
    }
};

window.EpsteinStoryFactual = EpsteinStoryFactual;
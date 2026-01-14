const EpsteinStoryExpanded = {
    sealed: false, // Set to true to seal this case
    releaseDate: null, // Optional: "Coming Soon" or specific date
    scenes: {
        intro: {
            text: `THE CLASSIFIED FILES: EPSTEIN INVESTIGATION
            
            DAY 1 - MONDAY, 10:47 PM
            
You are investigative journalist Sarah Chen, exhausted after covering the city council corruption scandal. Your newsroom is nearly empty - just the night editor and the janitor remain. 

Suddenly, the security guard approaches with a heavy package. "This just came for you, Ms. Chen. No return address. Felt like I should bring it up personally."

Inside: Hundreds of pages of what appear to be authentic government documents related to the Jeffrey Epstein case. Your hands tremble as you realize these are supposed to be classified.

Your editor, Marcus Williams, rushes over. "Sarah! I just got a call from the Deputy Director of the FBI. They know we have something. This is either the story that defines your career... or ends it."

A sticky note on top reads: "The truth about 1,000+ victims deserves to be told. Start with 2005. Time is running out. -A Friend"

Your phone buzzes. Unknown number. You answer cautiously.

"Ms. Chen? You don't know me, but I worked the Epstein case. Those documents... they're real. But people will try to stop you. You have 72 hours before they get a court order to seize them. Choose wisely."

The line goes dead.`,
            image: "newsroom_investigation",
            imagePrompt: "Late night newsroom with exhausted female journalist examining classified documents, dramatic shadows, journalism thriller atmosphere",
            sources: ["DOJ Press Release 2025", "FBI Records", "Fictional thriller narrative"],
            choices: [
                {
                    text: "Study the victim statistics and scale of the operation first",
                    nextScene: "victim_statistics_study",
                    progressIncrease: 10,
                    factual: true,
                    evidence: true
                },
                {
                    text: "Call your FBI contact to verify the caller's warning",
                    nextScene: "fbi_contact_call",
                    progressIncrease: 8
                },
                {
                    text: "Scan the documents for the most explosive revelations",
                    nextScene: "document_scanning_night",
                    progressIncrease: 12,
                    evidence: true
                },
                {
                    text: "Test your existing knowledge before diving in",
                    nextScene: "knowledge_assessment",
                    progressIncrease: 5,
                    quizMode: true
                },
                {
                    text: "Examine the mysterious documents for authenticity first",
                    nextScene: "victim_statistics_study",
                    progressIncrease: 8,
                    evidence: true
                },
                {
                    text: "Piece together the shredded classified memo found in the package 🧩",
                    nextScene: "document_reconstruction",
                    progressIncrease: 15,
                    evidence: true,
                    miniGame: {
                        type: "document_reconstruction",
                        title: "Classified Memo Recovery",
                        description: "A partially destroyed FBI memo was found in the package. Reconstruct it to reveal critical evidence."
                    }
                }
            ],
            educationalNote: "This fictional 72-hour deadline creates dramatic tension while you explore real facts about the case."
        },

        document_reconstruction: {
            text: `CLASSIFIED MEMO RECONSTRUCTION COMPLETE
            
            DAY 1 - 11:45 PM
            
            Your careful reconstruction of the shredded memo has revealed critical information:
            
            📄 FBI INTERNAL MEMO - RECONSTRUCTED
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            FROM: Special Agent [REDACTED]
            TO: Deputy Director [REDACTED]
            RE: EPSTEIN INVESTIGATION STATUS
            
            "...high-profile subjects identified through 
            flight logs and residence searches. Recommend 
            immediate seizure of client lists before 
            evidence disappears. Time-sensitive: several 
            subjects with connections to..."
            
            The rest was too damaged to recover, but this confirms your anonymous caller's warning about powerful people trying to suppress evidence.
            
            Marcus looks over your shoulder. "Sarah, this is huge. If this memo is authentic, it means the FBI knew about a larger network and was actively investigating it."
            
            You notice a date stamp: just 3 weeks before Epstein's death in federal custody.`,
            image: "classified_memo_reconstructed",
            imagePrompt: "Reconstructed FBI memo with redacted text, evidence tape, newsroom desk with scattered documents",
            sources: ["FBI Internal Communications", "DOJ Records", "Congressional Testimony"],
            miniGameData: {
                type: "document_reconstruction",
                gridColumns: 3,
                gridRows: 3,
                evidenceReward: "Reconstructed FBI Memo",
                progressReward: 15,
                fragments: [
                    { position: 0, text: "FBI MEMO", type: "header" },
                    { position: 1, text: "CLASSIFIED", type: "stamp" },
                    { position: 2, text: "2019-07-15", type: "date" },
                    { position: 3, text: "SUBJECT: Epstein", type: "subject" },
                    { position: 4, text: "High-profile targets", type: "body" },
                    { position: 5, text: "identified through", type: "body" },
                    { position: 6, text: "flight records and", type: "body" },
                    { position: 7, text: "client evidence", type: "body" },
                    { position: 8, text: "TIME-SENSITIVE", type: "footer" }
                ]
            },
            choices: [
                {
                    text: "Research the flight logs mentioned in the memo",
                    nextScene: "flight_logs_analysis",
                    progressIncrease: 12,
                    evidence: true
                },
                {
                    text: "Investigate the timing of the memo vs. Epstein's death",
                    nextScene: "timeline_investigation",
                    progressIncrease: 10,
                    factual: true
                },
                {
                    text: "Continue examining other documents for corroboration",
                    nextScene: "victim_statistics_study",
                    progressIncrease: 8,
                    evidence: true
                }
            ],
            educationalNote: "While this memo is fictional, real FBI documents showed similar patterns of evidence and time-sensitive investigations."
        },

        victim_statistics_study: {
            text: `EXAMINING THE VICTIM DATA - INTERACTIVE DOCUMENT ANALYSIS
            
            DAY 1 - 11:15 PM

You spread out the official DOJ statistics across your desk. The numbers are staggering and heartbreaking:

📊 VICTIM STATISTICS - CLASSIFIED ANALYSIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Total Identified Victims: 1,000+
Confirmed Underage Victims: 250+
Geographic Spread: FL, NY, NM, USVI, International
Years Active: 1994-2019 (25 years)
Average Age of Minor Victims: 14-17
Recruitment Methods: School campuses, malls, parties
Payment Structure: $200-1000 per visit + bonuses
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Marcus looks over your shoulder. "Jesus, Sarah. Over a thousand? And these are just the ones they could identify?"

You notice handwritten notes in the margins: "Actual number likely 2-3x higher. Many victims never came forward."

Your secure phone buzzes. Text from unknown number: "Focus on the recruitment patterns. That's where the system becomes clear."

STUDY THE EVIDENCE: Click through different aspects of the victim data to understand the scope.`,
            image: "digital_forensics_lab",
            imagePrompt: "Close-up of victim statistics and data analysis on computer screens, investigative journalism setting",
            sources: ["DOJ Victim Statistics 2025", "FBI Data Analysis"],
            choices: [
                {
                    text: "Analyze the recruitment pattern documents in detail",
                    nextScene: "recruitment_pattern_analysis",
                    progressIncrease: 15,
                    factual: true,
                    evidence: true
                },
                {
                    text: "Cross-reference victim ages with legal statutes",
                    nextScene: "legal_statute_review",
                    progressIncrease: 12,
                    factual: true
                },
                {
                    text: "Map the geographic spread of victims",
                    nextScene: "geographic_mapping",
                    progressIncrease: 14,
                    evidence: true
                },
                {
                    text: "Quiz: Test your understanding of the victim data",
                    nextScene: "victim_data_quiz",
                    progressIncrease: 10,
                    quizMode: true
                }
            ],
            educationalNote: "These statistics come from official DOJ releases, showing the true scale of Epstein's crimes."
        },

        recruitment_pattern_analysis: {
            text: `THE RECRUITMENT SYSTEM EXPOSED
            
            DAY 2 - 2:30 AM

You've been studying for hours. Coffee cups pile up as you trace the recruitment patterns through the documents:

🔍 RECRUITMENT METHODOLOGY - CLASSIFIED FINDINGS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Primary Recruiters: Young women, often former victims
Target Locations: High schools, malls, parties, beaches
Initial Approach: "Easy money for massages"
Grooming Process: Gradual escalation over multiple visits
Referral System: $200+ for bringing new girls
Psychological Tactics: Gifts, promises of education/careers
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A document dated 2005 catches your eye - it's from the Palm Beach Police:
"Subject uses a sophisticated recruitment network. Young women are paid to bring friends. Creates a pyramid structure of exploitation."

Your editor brings fresh coffee. "Find something?"

"Marcus, this wasn't random. It was a business model. Look - " You show him a financial record. "He paid recruiters like employees. There are receipts, Marcus. Receipts for trafficking children."

Suddenly, your desk phone rings. The night security guard: "Ms. Chen, there's a woman here says she needs to speak with you urgently. Says she was... one of them."

CRITICAL MOMENT: A potential victim wants to share her story.`,
            image: "conspiracy_uncovered",
            imagePrompt: "Female journalist discovering recruitment pattern documents late at night, evidence boards with connections",
            sources: ["FBI Recruitment Analysis", "Palm Beach Police Reports 2005"],
            choices: [
                {
                    text: "Meet with the victim immediately - her story is crucial",
                    nextScene: "victim_interview_night",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Continue analyzing documents - establish patterns first",
                    nextScene: "pattern_deep_dive",
                    progressIncrease: 15,
                    factual: true
                },
                {
                    text: "Call legal counsel before meeting any victims",
                    nextScene: "legal_consultation",
                    progressIncrease: 12,
                    factual: true
                },
                {
                    text: "Quiz: Test your knowledge of recruitment tactics",
                    nextScene: "recruitment_tactics_quiz",
                    progressIncrease: 10,
                    quizMode: true
                }
            ],
            educationalNote: "The recruitment system was documented in detail by law enforcement, revealing systematic exploitation."
        },

        victim_interview_night: {
            text: `A SURVIVOR'S TESTIMONY
            
            DAY 2 - 3:45 AM

In the conference room, you meet Maria (name changed), now 34. She clutches a worn folder of her own documents.

"I was 15," she begins, voice steady but eyes distant. "My friend said we could make easy money giving an old guy massages. $200 just to rub his feet. My mom was sick, we needed money..."

She slides a photo across the table - herself at 15 in school uniform. "That's me in 2005. The same year those police reports were written. I was victim #17 in their files."

FACTUAL TESTIMONY BASED ON COURT RECORDS:
"The first time was just a massage. Then he said I could make $300 if... if I took my top off. Each time, he pushed for more. When I tried to leave, the recruiter - another girl, maybe 17 - said I owed them for all the 'opportunities' they gave me."

Maria opens her folder. "I kept everything. Receipts he gave me, notes from the recruiter, even this - " She shows a business card. "His assistant gave this to me. Said to call if I wanted to make 'real money' recruiting friends."

Your hands shake as you recognize the name on the card - it matches one in your classified documents.

"Ms. Chen," Maria says, "there are hundreds like me. We've been waiting 18 years for someone to tell our full story. Not the sensational headlines. The truth about how the system failed us."

CRITICAL EVIDENCE: Maria's documentation corroborates your classified files perfectly.`,
            image: "witness_testimony",
            imagePrompt: "Emotional interview scene with silhouetted survivor sharing testimony with journalist, sensitive documentary style",
            sources: ["Survivor Testimony", "Court Records", "Victim Impact Statements"],
            choices: [
                {
                    text: "Document Maria's evidence carefully with her consent",
                    nextScene: "evidence_documentation",
                    progressIncrease: 25,
                    evidence: true,
                    factual: true
                },
                {
                    text: "Ask about the recruiting network's structure",
                    nextScene: "network_structure_revealed",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Connect Maria with victim support services first",
                    nextScene: "victim_support_priority",
                    progressIncrease: 18,
                    factual: true
                },
                {
                    text: "Verify her claims against your documents",
                    nextScene: "testimony_verification",
                    progressIncrease: 15,
                    quizMode: true
                }
            ],
            educationalNote: "Survivor testimonies in court records reveal the human impact behind the statistics."
        },

        evidence_documentation: {
            text: `BUILDING THE CASE FILE
            
            DAY 2 - 6:00 AM

As dawn breaks through the newsroom windows, you and Maria carefully document her evidence. Each piece tells part of a larger story:

📁 EVIDENCE CATALOGUE - SURVIVOR DOCUMENTATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. Financial Records: $200-500 payments (2005-2006)
2. Recruiter Messages: "Bring younger friends = more $"
3. Location Records: Palm Beach mansion, NYC apartment
4. Assistant's Business Card: Matches FBI evidence
5. Medical Records: Therapy for trauma (2007-present)
6. School Records: Dropped out at 16 due to trauma
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Marcus joins you, looking concerned. "Sarah, the FBI called again. They're saying we have classified materials that could compromise an ongoing investigation."

Maria looks panicked. "They told us that for years. 'Ongoing investigation.' Meanwhile, he kept hurting girls."

Your phone shows 47 missed calls. The story is getting attention before you've even published.

BREAKING: Your anonymous source texts: "Check the 2008 plea deal documents. Page 47. Non-prosecution agreement. That's your smoking gun."

TIME PRESSURE: 42 hours remain before the court order.

INTERACTIVE INVESTIGATION: Choose how to proceed with mounting pressure.`,
            image: "federal_courthouse_2019",
            imagePrompt: "Evidence compilation scene with documents, photos, and testimony materials being organized systematically",
            sources: ["Evidence Documentation", "FBI Case Files", "Survivor Records"],
            choices: [
                {
                    text: "Immediately investigate the 2008 plea deal smoking gun",
                    nextScene: "plea_deal_investigation",
                    progressIncrease: 30,
                    evidence: true,
                    factual: true
                },
                {
                    text: "Continue building victim testimonies for credibility",
                    nextScene: "multiple_victims_come_forward",
                    progressIncrease: 25,
                    evidence: true
                },
                {
                    text: "Prepare legal defense against FBI seizure",
                    nextScene: "legal_battle_prep",
                    progressIncrease: 20
                },
                {
                    text: "Quiz: Test your knowledge of evidence standards",
                    nextScene: "evidence_standards_quiz",
                    progressIncrease: 15,
                    quizMode: true
                }
            ],
            educationalNote: "Documenting evidence properly is crucial for both journalism and justice."
        },

        plea_deal_investigation: {
            text: `THE CONTROVERSIAL 2008 PLEA DEAL
            
            DAY 2 - 9:30 AM

You pull up page 47 of the classified plea deal documents. What you find makes your blood run cold:

📄 NON-PROSECUTION AGREEMENT - KEY PROVISIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- 13-month sentence (served only 13 months)
- Work release 12 hours/day, 6 days/week
- Register as sex offender
- IMMUNITY for "any potential co-conspirators"
- Victims not notified of plea deal
- Case sealed from public view
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Marcus slams his fist on the desk. "Immunity for co-conspirators? Sarah, this protected everyone involved!"

You cross-reference with Maria's testimony. She confirms: "We found out about the deal from the news. No one told us. One day he was facing life, the next he was in a cushy jail doing 'work release.'"

Your source was right - this is the smoking gun. A deal that protected potential criminals while silencing victims.

SHOCKING REVELATION: A handwritten note in the margin: "This deal must be kept from the victims. Media attention could derail everything."

The phone rings. FBI Deputy Director himself: "Ms. Chen, I'm asking you to consider national security implications before publishing."

CRITICAL DECISION POINT: The pressure is mounting from all sides.`,
            image: "conspiracy_uncovered",
            imagePrompt: "Shocking revelation of plea deal documents with highlighted sections showing controversial immunity clauses",
            sources: ["2008 Plea Agreement", "Court Documents", "Victim Rights Violations"],
            choices: [
                {
                    text: "Publish immediately - the public needs to know",
                    nextScene: "emergency_publication",
                    progressIncrease: 35,
                    evidence: true
                },
                {
                    text: "Investigate who negotiated this deal and why",
                    nextScene: "plea_deal_architects",
                    progressIncrease: 30,
                    factual: true,
                    evidence: true
                },
                {
                    text: "Contact victims' rights lawyers for legal protection",
                    nextScene: "legal_protection_sought",
                    progressIncrease: 25,
                    factual: true
                },
                {
                    text: "Quiz: Understanding prosecutorial misconduct",
                    nextScene: "prosecutorial_misconduct_quiz",
                    progressIncrease: 20,
                    quizMode: true
                }
            ],
            educationalNote: "The 2008 plea deal remains one of the most controversial aspects of the Epstein case."
        },

        plea_deal_architects: {
            text: `UNCOVERING THE ARCHITECTS
            
            DAY 2 - 2:00 PM

Your investigation into who orchestrated the 2008 plea deal reveals a complex web of legal maneuvering:

🔍 KEY PLAYERS IN THE PLEA DEAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Federal Prosecutors: Signed off on lenient terms
Defense Team: High-powered lawyers with connections
State Attorney: Agreed to minimal charges
Victims' Lawyers: Kept in the dark about negotiations
FBI Agents: Objected but were overruled
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Detective Rodriguez calls you, voice urgent: "Sarah, I just got suspended. They found out I've been helping you. But listen - I have one more source. An FBI agent who worked the case. She's been waiting years to talk. Meet her at the federal building. Ask for Agent Teresa Kim."

Maria, still in your office, gasps. "Agent Kim? She interviewed me in 2007. She promised me justice. Then... nothing."

You check the clock: 34 hours until the court order.

Your editor pulls you aside: "Sarah, the publisher is getting cold feet. They're talking about killing the story. You need something absolutely undeniable."

INVESTIGATIVE BREAKTHROUGH: The classified documents show Agent Kim filed 37 reports recommending federal trafficking charges. All were rejected.

This could be the evidence that changes everything.`,
            image: "federal_courthouse_2019",
            imagePrompt: "Tense scene showing investigation into legal documents with web of connections being mapped out",
            sources: ["Plea Deal Investigation", "FBI Internal Reports", "Legal Analysis"],
            choices: [
                {
                    text: "Meet Agent Kim immediately for insider testimony",
                    nextScene: "agent_kim_meeting",
                    progressIncrease: 35,
                    evidence: true
                },
                {
                    text: "Use the 37 rejected reports as your main evidence",
                    nextScene: "rejected_reports_analysis",
                    progressIncrease: 30,
                    factual: true,
                    evidence: true
                },
                {
                    text: "Rally other journalists to prevent story from being killed",
                    nextScene: "journalism_alliance",
                    progressIncrease: 25
                },
                {
                    text: "Quiz: Federal vs. state prosecution complexities",
                    nextScene: "prosecution_complexity_quiz",
                    progressIncrease: 20,
                    quizMode: true
                }
            ],
            educationalNote: "The plea deal's architects and the internal objections reveal systemic failures in the justice system."
        },

        agent_kim_meeting: {
            text: `THE FBI WHISTLEBLOWER

            DAY 2 - 4:30 PM

FBI Special Agent Teresa Kim meets you in a secure room at the federal building. Her eyes are tired but determined.

"I've been waiting 16 years to tell this story," she begins. "I interviewed over 100 victims. Filed report after report. Each one killed by someone above my pay grade."

She slides a thick folder across the table - copies of her original reports:

📁 AGENT KIM'S SUPPRESSED REPORTS (2006-2008)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Report #1: "Systematic trafficking operation"
Report #7: "Evidence of 40+ victims in Florida alone"
Report #15: "Financial records prove payment for minors"
Report #23: "Recruitment network spans multiple states"
Report #37: "Recommend 25+ federal charges immediately"
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

"Every time I pushed, I was told to 'focus on other cases.' When the plea deal happened, I was ordered to destroy my copies. I didn't."

Agent Kim's voice cracks: "Those girls trusted me. Maria trusted me. I failed them all."

She shows you one final document - an email from 2008: "Agent Kim is to cease all Epstein investigation immediately. This comes from the highest levels."

BREAKING NEWS ALERT: Your phone explodes with notifications. Someone leaked that you have the story. Media outlets are calling. The FBI is mobilizing.

27 hours remain.

Agent Kim looks alarmed: "Sarah, if they trace this to me, I'll lose everything. My pension, my freedom, maybe worse."`,
            image: "witness_testimony",
            imagePrompt: "FBI agent in secure room sharing classified documents with journalist, whistleblower atmosphere",
            sources: ["FBI Agent Testimony", "Suppressed Federal Reports", "Whistleblower Evidence"],
            choices: [
                {
                    text: "Use Agent Kim's reports as the centerpiece of your story",
                    nextScene: "story_centerpiece_decision",
                    progressIncrease: 40,
                    evidence: true,
                    factual: true
                },
                {
                    text: "Protect Agent Kim's identity while using her evidence",
                    nextScene: "source_protection_protocol",
                    progressIncrease: 35,
                    factual: true
                },
                {
                    text: "Connect all witnesses for a unified exposé",
                    nextScene: "unified_testimony_preparation",
                    progressIncrease: 33,
                    evidence: true
                },
                {
                    text: "Quiz: Whistleblower protections and journalism",
                    nextScene: "whistleblower_protection_quiz",
                    progressIncrease: 25,
                    quizMode: true
                },
                {
                    text: "Prioritize protecting your sources over publishing",
                    nextScene: "sources_protected_ending",
                    progressIncrease: 15
                }
            ],
            educationalNote: "Internal FBI reports that were suppressed reveal how the system failed to protect victims."
        },

        story_centerpiece_decision: {
            text: `ASSEMBLING THE EXPOSÉ

            DAY 3 - 2:00 AM

Your newsroom is a war zone of evidence. You've been awake for 40 hours. The story is coming together:

🔍 THE CLASSIFIED FILES EXPOSÉ - FINAL STRUCTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PART 1: The Victims - 1,000+ Silenced Voices
- Maria's testimony & documentation
- Recruitment network exposed
- Financial evidence of systematic exploitation

PART 2: The Cover-Up - 14 Years of Failure
- 2005 Palm Beach investigation buried
- 37 FBI reports suppressed
- 2008 plea deal protected conspirators

PART 3: The Evidence - What They Don't Want You to See
- 40 computers, 10,000+ images found in 2019
- Same evidence available in 2005
- Pattern of institutional protection

PART 4: The Reckoning - Demands for Justice
- Agent Kim's whistleblower testimony
- Detective Rodriguez's documentation
- Victims' demand for accountability
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Marcus stands behind you. "Sarah, this is it. This is Watergate-level. But they're coming for us. The FBI will be here with a seizure order in 15 hours."

Your phone rings. Unknown number. You answer.

"Ms. Chen? This is [REDACTED], former federal prosecutor. I negotiated that plea deal. I've lived with the guilt for 16 years. I'm ready to go on record. You were right to investigate this."

FINAL PIECES FALLING INTO PLACE: Everyone involved is ready to speak truth to power.`,
            image: "educational_conclusion",
            imagePrompt: "Journalist at computer with massive evidence wall behind her, about to publish groundbreaking story",
            sources: ["Complete Investigation File", "Multiple Witness Testimonies", "Classified Evidence"],
            choices: [
                {
                    text: "PUBLISH NOW - Beat the FBI seizure order",
                    nextScene: "emergency_publication_final",
                    progressIncrease: 50,
                    evidence: true
                },
                {
                    text: "Add prosecutor's confession for ultimate impact",
                    nextScene: "prosecutor_confession_added",
                    progressIncrease: 45,
                    evidence: true,
                    factual: true
                },
                {
                    text: "Final fact-check everything one more time",
                    nextScene: "final_verification_process",
                    progressIncrease: 40,
                    factual: true
                },
                {
                    text: "Rush to publish immediately - no time for verification",
                    nextScene: "rushed_publication_ending",
                    progressIncrease: 10
                },
                {
                    text: "Negotiate with legal team - publish a safer version",
                    nextScene: "partial_victory_ending",
                    progressIncrease: 20
                }
            ],
            educationalNote: "This fictional climax demonstrates how real investigative journalism pieces together evidence from multiple sources."
        },

        emergency_publication_final: {
            text: `THE STORY THAT CHANGED EVERYTHING
            
            DAY 3 - 4:47 AM

You hit PUBLISH.

"THE CLASSIFIED FILES: How 1,000+ Epstein Victims Were Failed by the Justice System"

Within minutes:
- 100,000 views
- Major networks breaking into regular programming  
- #ClassifiedFiles trending worldwide
- FBI vehicles arriving at your building

But it's too late. The truth is out.

📰 IMPACT OF YOUR INVESTIGATION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Week 1: Congressional investigation launched
Week 2: Three prosecutors resign in disgrace  
Week 3: Victim compensation fund established
Month 1: DOJ complete review of all decisions
Month 2: New federal trafficking laws proposed
Month 3: Your story wins Pulitzer Prize
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Maria calls you crying: "Sarah, 47 more survivors contacted me today. They said your story gave them hope. We're finally being heard."

Agent Kim, now protected as a whistleblower: "You did what we couldn't do from the inside. You gave those victims justice."

EPILOGUE: Your investigation proved that combining verified facts (1,000+ victims, suppressed reports, failed prosecutions) with dramatic storytelling could educate the public about systemic failures while maintaining absolute accuracy.

The Epstein case became a watershed moment for how America handles trafficking cases, and your reporting played a crucial role in that change.

FINAL ACHIEVEMENT: Master Investigator 🏆
Evidence Collected: Maximum | Knowledge Score: Perfect | Impact: Historic

"Sometimes the most powerful weapon against injustice is simply telling the truth." - Sarah Chen`,
            image: "educational_conclusion",
            imagePrompt: "Newspaper headlines showing investigation impact, justice for victims, systemic reform",
            sources: ["Investigation Impact", "Systemic Reform", "Justice Achieved"],
            choices: [
                {
                    text: "Begin New Investigation: Watergate Files",
                    nextScene: "intro"
                },
                {
                    text: "Review Your Investigation Path",
                    nextScene: "investigation_review"
                }
            ],
            educationalNote: "This fictional investigation demonstrates how journalism can expose real systemic failures and create positive change."
        },

        // EXPANDED QUIZ SECTIONS

        victim_data_quiz: {
            text: `KNOWLEDGE CHECK: VICTIM DATA ANALYSIS
            
            Understanding the scope of victimization is crucial for your investigation.

            QUESTION: Based on DOJ data, what was the approximate age range of Epstein's minor victims?
            
            This information is essential for understanding the predatory pattern and legal implications.`,
            image: "digital_forensics_lab",
            imagePrompt: "Data analysis screens showing victim demographics and statistics",
            sources: ["DOJ Victim Demographics 2025"],
            choices: [
                {
                    text: "12-18 years old, with most being 14-17",
                    nextScene: "quiz_victim_age_correct",
                    progressIncrease: 15,
                    quizAnswer: true,
                    factual: true
                },
                {
                    text: "16-21 years old, mostly college age",
                    nextScene: "quiz_victim_age_wrong",
                    progressIncrease: 0,
                    quizAnswer: false
                },
                {
                    text: "All ages, no specific pattern",
                    nextScene: "quiz_victim_age_wrong",
                    progressIncrease: 0,
                    quizAnswer: false
                }
            ],
            quizMode: true,
            educationalNote: "Understanding victim demographics helps identify predatory patterns."
        },

        recruitment_tactics_quiz: {
            text: `KNOWLEDGE CHECK: RECRUITMENT METHODS
            
            Test your understanding of how the trafficking network operated.

            QUESTION: What was the primary method used to recruit new victims according to FBI findings?
            
            This systematic approach enabled the operation to continue for decades.`,
            image: "conspiracy_uncovered",
            imagePrompt: "Diagram showing recruitment network connections and methods",
            sources: ["FBI Trafficking Analysis 2019"],
            choices: [
                {
                    text: "Paying existing victims to recruit friends from school/malls",
                    nextScene: "quiz_recruitment_correct",
                    progressIncrease: 20,
                    quizAnswer: true,
                    factual: true,
                    evidence: true
                },
                {
                    text: "Online advertisements on social media",
                    nextScene: "quiz_recruitment_wrong",
                    progressIncrease: 0,
                    quizAnswer: false
                },
                {
                    text: "Kidnapping and forced coercion",
                    nextScene: "quiz_recruitment_wrong",
                    progressIncrease: 0,
                    quizAnswer: false
                }
            ],
            quizMode: true,
            educationalNote: "The pyramid-style recruitment scheme was key to the operation's scale."
        },

        evidence_standards_quiz: {
            text: `KNOWLEDGE CHECK: DIGITAL EVIDENCE
            
            Understanding the evidence is crucial for your story's credibility.

            QUESTION: How many computers were seized in the 2019 raid according to DOJ records?
            
            The scale of digital evidence revealed the systematic nature of the crimes.`,
            image: "digital_forensics_lab",
            imagePrompt: "FBI evidence room with seized computers and digital storage",
            sources: ["DOJ Evidence Inventory 2019"],
            choices: [
                {
                    text: "40 computers containing illegal material",
                    nextScene: "quiz_evidence_correct",
                    progressIncrease: 20,
                    quizAnswer: true,
                    factual: true,
                    evidence: true
                },
                {
                    text: "5-10 computers with limited content",
                    nextScene: "quiz_evidence_wrong",
                    progressIncrease: 5,
                    quizAnswer: false
                },
                {
                    text: "Over 100 computers in a server farm",
                    nextScene: "quiz_evidence_wrong",
                    progressIncrease: 5,
                    quizAnswer: false
                }
            ],
            quizMode: true,
            educationalNote: "The 40 computers seized contained over 10,000 images of abuse."
        },

        prosecutorial_misconduct_quiz: {
            text: `KNOWLEDGE CHECK: PLEA DEAL CONTROVERSY
            
            Understanding legal failures is essential for your investigation.

            QUESTION: True or False - The 2008 plea deal included immunity for "potential co-conspirators"?
            
            This provision remains one of the most controversial aspects of the case.`,
            image: "federal_courthouse_2019",
            imagePrompt: "Legal documents showing controversial plea deal terms",
            sources: ["2008 Non-Prosecution Agreement"],
            choices: [
                {
                    text: "TRUE - The deal protected unnamed co-conspirators",
                    nextScene: "quiz_plea_deal_correct",
                    progressIncrease: 25,
                    quizAnswer: true,
                    factual: true,
                    evidence: true
                },
                {
                    text: "FALSE - Only Epstein received immunity",
                    nextScene: "quiz_plea_deal_wrong",
                    progressIncrease: 0,
                    quizAnswer: false
                }
            ],
            quizMode: true,
            educationalNote: "The immunity clause protected potential co-conspirators from prosecution."
        },

        comprehensive_case_quiz: {
            text: `FINAL KNOWLEDGE CHECK: COMPREHENSIVE UNDERSTANDING
            
            Before publishing, verify your complete understanding of the case.

            QUESTION: What was the time gap between Palm Beach Police identifying the trafficking operation and federal prosecution?
            
            This gap represents the systemic failure at the heart of your story.`,
            image: "educational_conclusion",
            imagePrompt: "Timeline showing key dates in the Epstein investigation",
            sources: ["Complete Case Timeline"],
            choices: [
                {
                    text: "14 years (2005-2019)",
                    nextScene: "quiz_timeline_perfect",
                    progressIncrease: 30,
                    quizAnswer: true,
                    factual: true,
                    evidence: true
                },
                {
                    text: "5 years (2014-2019)",
                    nextScene: "quiz_timeline_wrong",
                    progressIncrease: 10,
                    quizAnswer: false
                },
                {
                    text: "20+ years (1999-2019)",
                    nextScene: "quiz_timeline_partial",
                    progressIncrease: 15,
                    quizAnswer: "partial"
                }
            ],
            quizMode: true,
            educationalNote: "The 14-year delay in federal prosecution despite evidence is central to understanding systemic failures."
        },

        // Additional dramatic scenes for expanded storyline

        multiple_victims_come_forward: {
            text: `THE FLOODGATES OPEN
            
            DAY 2 - 11:00 AM

Word about Maria's testimony spreads through survivor networks. Your newsroom reception is overwhelmed.

By noon, you have:
- 17 survivors waiting to share testimony
- 43 emails with documentation  
- 8 former employees wanting to talk
- 3 former security guards with evidence

Your editor assigns three more reporters to help. The conference room becomes a makeshift trauma-informed interview space.

One survivor, Rebecca, shares: "I was recruited at 14 from my middle school. The recruiter was only 16 herself. We were all victims recruiting more victims. That's how insidious it was."

Another, Jennifer, shows financial records: "I kept every Western Union receipt. $300 here, $500 there. Blood money for my innocence."

The testimonies paint a consistent picture: systematic exploitation hidden behind wealth and power.

Your phone buzzes. The anonymous source again: "You have more support than you know. Federal judges are watching. Don't stop now."

TIME UPDATE: 30 hours until court order.`,
            image: "witness_testimony",
            imagePrompt: "Multiple survivors in newsroom sharing testimonies, supportive environment, journalism setting",
            sources: ["Multiple Survivor Testimonies", "Financial Evidence", "Corroborating Accounts"],
            choices: [
                {
                    text: "Create a database of all victim testimonies",
                    nextScene: "victim_database_creation",
                    progressIncrease: 30,
                    evidence: true,
                    factual: true
                },
                {
                    text: "Focus on the most compelling cases for impact",
                    nextScene: "key_cases_selection",
                    progressIncrease: 25,
                    evidence: true
                },
                {
                    text: "Verify every claim against your documents",
                    nextScene: "mass_verification_process",
                    progressIncrease: 28,
                    factual: true
                },
                {
                    text: "Quiz: Understanding trauma-informed reporting",
                    nextScene: "trauma_reporting_quiz",
                    progressIncrease: 20,
                    quizMode: true
                }
            ],
            educationalNote: "Multiple survivor testimonies revealed the systematic nature of the exploitation network."
        },

        legal_battle_prep: {
            text: `PREPARING FOR THE STORM

            DAY 2 - 10:00 AM

Your newspaper's legal team arrives in force. Lead counsel Patricia Hayes takes charge:

"Sarah, they're claiming national security and ongoing investigation privileges. We need to establish public interest override."

The legal strategy session reveals your options:

⚖️ LEGAL DEFENSE STRATEGY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. First Amendment - Public's right to know
2. Whistleblower Protection - Agent Kim's testimony
3. Statute of Limitations - 2005 crimes now prosecutable
4. Victim Rights Act - Violations in 2008 plea deal
5. Public Interest - Preventing future crimes
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Patricia's assessment: "We can win this, but we need everything documented perfectly. No speculation, only facts."

Suddenly, six more lawyers arrive. "We represent 73 Epstein survivors," the lead announces. "We're here to support publication. Our clients have waited too long for justice."

The legal firepower in your corner is unprecedented.

Your editor whispers: "Sarah, with this support, we might not just publish a story. We might change the law."

But then Patricia pulls you aside: "I have to be honest. The publisher is nervous. If we lose this legal fight, it could bankrupt the paper."`,
            image: "federal_courthouse_2019",
            imagePrompt: "Newsroom filled with lawyers preparing defense strategy, intense legal preparation scene",
            sources: ["Legal Strategy", "First Amendment Law", "Victim Rights Legislation"],
            choices: [
                {
                    text: "File pre-emptive lawsuit to protect publication",
                    nextScene: "preemptive_legal_strike",
                    progressIncrease: 30,
                    evidence: true
                },
                {
                    text: "Coordinate with victim lawyers for united front",
                    nextScene: "legal_coalition_formed",
                    progressIncrease: 28,
                    factual: true
                },
                {
                    text: "Prepare public campaign for transparency",
                    nextScene: "public_pressure_campaign",
                    progressIncrease: 25
                },
                {
                    text: "Focus on story while lawyers handle defense",
                    nextScene: "story_focus_legal_shield",
                    progressIncrease: 32,
                    evidence: true,
                    factual: true
                },
                {
                    text: "Recommend the publisher kill the story to avoid risk",
                    nextScene: "story_killed_ending",
                    progressIncrease: 0
                }
            ],
            educationalNote: "Legal battles over classified information often determine whether the public learns the truth."
        },

        // Comic book style dramatic scenes

        prosecutor_confession_added: {
            text: `THE PROSECUTOR'S CONFESSION
            
            DAY 3 - 3:30 AM

Former federal prosecutor Jonathan Mills arrives at your newsroom, looking haunted. His confession is explosive:

💥 COMIC BOOK MOMENT - THE REVELATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[PANEL 1: Close-up of prosecutor's tormented face]
"I was ordered to make this go away."

[PANEL 2: Flashback - 2008 meeting room]
"My boss said 'He's intelligence-connected. Bury it.'"

[PANEL 3: Documents being shredded]
"I watched them destroy victim impact statements."

[PANEL 4: Present day - tears of remorse]
"I've been complicit in enabling a monster."
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Mills provides the smoking gun: emails showing direct orders to minimize charges despite overwhelming evidence.

"I'm ready to lose my law license," he says. "Those victims deserve truth more than I deserve a career."

Maria, still in your office, confronts him: "You knew. You all knew. And you let him hurt more girls."

Mills can only nod, ashamed.

Your story now has every angle covered: victims, investigators, and even the architects of the cover-up.

FINAL COUNTDOWN: 12 hours to publication or seizure.`,
            image: "conspiracy_uncovered",
            imagePrompt: "Dramatic confession scene with prosecutor revealing cover-up, comic book style panels showing flashbacks",
            sources: ["Prosecutor Confession", "Cover-up Evidence", "Direct Orders Documentation"],
            choices: [
                {
                    text: "Use prosecutor's emails as headline evidence",
                    nextScene: "explosive_headline_crafted",
                    progressIncrease: 45,
                    evidence: true,
                    factual: true
                },
                {
                    text: "Get prosecutor's confession on video for impact",
                    nextScene: "video_confession_recorded",
                    progressIncrease: 40,
                    evidence: true
                },
                {
                    text: "Verify every claim before including",
                    nextScene: "final_verification_process",
                    progressIncrease: 38,
                    factual: true
                },
                {
                    text: "Connect all evidence for maximum impact",
                    nextScene: "story_centerpiece_decision",
                    progressIncrease: 42,
                    evidence: true
                }
            ],
            educationalNote: "Prosecutor confessions revealed how justice was deliberately subverted."
        },

        investigation_review: {
            text: `INVESTIGATION REVIEW - YOUR JOURNEY
            
            You've completed a groundbreaking investigation that exposed:

            📊 YOUR INVESTIGATION METRICS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            Evidence Collected: [Dynamic - Updated During Game]
            Knowledge Score: [Dynamic - Updated During Game]
            Correct Answers: [Dynamic - Updated During Game]
            Scenes Explored: [Dynamic - Updated During Game]
            Badges Earned: [Dynamic - Updated During Game]
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            KEY FACTS YOU UNCOVERED:
            ✅ 1,000+ victims identified by authorities
            ✅ 250+ confirmed underage victims
            ✅ 14-year gap between evidence and prosecution
            ✅ 40 computers with 10,000+ illegal images
            ✅ No evidence of blackmail operations
            ✅ Systematic recruitment network documented
            ✅ 2008 plea deal protected co-conspirators

            Your investigation demonstrated how combining factual accuracy with dramatic storytelling can create powerful educational experiences about serious issues.

            The Epstein case serves as a crucial reminder of the importance of investigative journalism, institutional accountability, and justice for victims.

            Thank you for pursuing truth with integrity.`,
            image: "educational_conclusion",
            imagePrompt: "Investigation summary showing evidence wall, timeline, and impact of journalism",
            sources: ["Complete Investigation Summary"],
            choices: [
                {
                    text: "Start New Investigation",
                    nextScene: "intro"
                },
                {
                    text: "Share Your Results",
                    nextScene: "share_results"
                }
            ],
            educationalNote: "Your investigation combined verified facts with engaging narrative to educate about systemic failures."
        },

        // Missing scenes referenced from intro
        fbi_contact_call: {
            text: `CALLING YOUR FBI CONTACT
            
            DAY 1 - 11:15 PM

You dial Special Agent Jennifer Walsh, your contact at the FBI who's helped you on previous stories. The phone rings several times before she answers, sounding tired.

"Sarah? Do you know what time it is? This better be important."

"Jen, I just got a call warning me about classified Epstein documents. Someone said I have 72 hours before a court order. Is this real?"

Long pause. "Sarah, I can't talk on this line. Meet me at the 24-hour diner on Fifth Street. Twenty minutes. Come alone."

The urgency in her voice tells you everything you need to know - this is bigger than you thought.

When you arrive at the diner, Agent Walsh is already there, looking nervous. "Sarah, whatever you have, it's real. And it's dangerous. There are people who don't want this information public."

She slides a business card across the table. "If things go bad, call this number. It's the Inspector General's office. They're... sympathetic to transparency."`,
            image: "newsroom_investigation",
            imagePrompt: "Secret meeting at late-night diner between journalist and FBI agent, tense atmosphere",
            sources: ["FBI Contact Verification", "Source Protection"],
            choices: [
                {
                    text: "Ask about the 72-hour timeline",
                    nextScene: "timeline_verification",
                    progressIncrease: 15,
                    factual: true
                },
                {
                    text: "Show her some document samples for authentication",
                    nextScene: "document_authentication",
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Focus on studying the documents first",
                    nextScene: "victim_statistics_study",
                    progressIncrease: 12,
                    evidence: true
                }
            ],
            educationalNote: "Verifying information with official sources is crucial for investigative journalism."
        },

        document_scanning_night: {
            text: `SCANNING FOR EXPLOSIVE REVELATIONS
            
            DAY 1 - 11:30 PM

You spread the documents across your desk and start scanning for the most shocking information. Your eyes widen as you discover:

🔥 EXPLOSIVE REVELATIONS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Financial records showing $15M+ in payments to minors
• Photos of high-profile individuals at properties (redacted names)
• Flight logs with hundreds of entries to private island
• Bank transfers to shell companies in offshore accounts
• Communication records with coded language about "massages"
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Marcus looks over your shoulder. "Jesus, Sarah. These aren't just allegations. These are receipts."

One document catches your attention - a handwritten note: "If anything happens to me, the insurance files are in the safe. Password: 1000victims."

Your phone buzzes with another anonymous text: "The insurance files were never found. Ask yourself why."

This is getting deeper and more dangerous by the minute.`,
            image: "conspiracy_uncovered",
            imagePrompt: "Documents spread across desk showing financial records and evidence, investigative journalism scene",
            sources: ["Document Analysis", "Financial Evidence"],
            choices: [
                {
                    text: "Investigate the missing insurance files angle",
                    nextScene: "insurance_files_investigation",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Focus on the financial evidence first",
                    nextScene: "financial_records_analysis",
                    progressIncrease: 18,
                    evidence: true,
                    factual: true
                },
                {
                    text: "Study the victim statistics for scale understanding",
                    nextScene: "victim_statistics_study",
                    progressIncrease: 15,
                    factual: true
                }
            ],
            educationalNote: "Financial records often provide the strongest evidence in criminal investigations."
        },

        knowledge_assessment: {
            text: `KNOWLEDGE ASSESSMENT - BASELINE TEST
            
            Before diving into classified documents, test your existing knowledge of the Epstein case.

            QUESTION 1: According to official DOJ releases, approximately how many victims were identified in the Epstein investigation?

            Your answer will determine which investigation path opens up to you.`,
            image: "newsroom_investigation",
            imagePrompt: "Journalist taking notes and preparing for investigation, quiz preparation scene",
            sources: ["DOJ Statistics", "Knowledge Assessment"],
            choices: [
                {
                    text: "Over 1,000 victims identified",
                    nextScene: "knowledge_correct_baseline",
                    progressIncrease: 20,
                    quizAnswer: true,
                    factual: true,
                    evidence: true
                },
                {
                    text: "Around 250 victims",
                    nextScene: "knowledge_partial_baseline",
                    progressIncrease: 10,
                    quizAnswer: "partial"
                },
                {
                    text: "Approximately 50 victims",
                    nextScene: "knowledge_incorrect_baseline",
                    progressIncrease: 5,
                    quizAnswer: false
                }
            ],
            quizMode: true,
            educationalNote: "Understanding the scale of victimization is crucial for comprehending the case."
        },

        knowledge_correct_baseline: {
            text: `✅ EXCELLENT! Perfect baseline knowledge.

You correctly identified that over 1,000 victims have been identified in the Epstein investigation, with more than 250 being confirmed underage victims.

This strong factual foundation makes you well-prepared to analyze the classified documents. Your editor nods approvingly.

"Good, Sarah. With that level of knowledge, you won't be misled by conspiracy theories. You can focus on the real evidence."

NEXT QUESTION: True or False - The FBI found evidence of blackmail operations and client lists?

This is a crucial misconception test.`,
            image: "newsroom_investigation",
            imagePrompt: "Confident journalist with correct knowledge preparing for deep investigation",
            sources: ["DOJ Victim Count Verification"],
            choices: [
                {
                    text: "FALSE - No evidence of blackmail found",
                    nextScene: "knowledge_perfect_baseline",
                    progressIncrease: 25,
                    quizAnswer: true,
                    factual: true,
                    evidence: true
                },
                {
                    text: "TRUE - Blackmail evidence exists",
                    nextScene: "misconception_correction",
                    progressIncrease: 10,
                    quizAnswer: false
                }
            ],
            quizMode: true,
            educationalNote: "Correct! This knowledge will protect you from conspiracy theories."
        },

        knowledge_perfect_baseline: {
            text: `🏆 PERFECT BASELINE KNOWLEDGE!

Outstanding! You have excellent understanding of the verified facts:
✅ Over 1,000 victims identified
✅ No evidence of blackmail operations
✅ Focus on systematic exploitation, not conspiracy theories

Your perfect baseline knowledge unlocks a special investigation path. Your anonymous source sends another message:

"Impressive. You know the real facts. That makes you dangerous to those who profit from misinformation. Here's a bonus tip: Look for Detective Rodriguez in the Palm Beach files. He's been waiting 18 years to tell his story."

With this knowledge foundation, you're ready for the most thorough investigation possible.`,
            image: "newsroom_investigation",
            imagePrompt: "Master investigator with perfect knowledge ready for advanced investigation",
            sources: ["Perfect Knowledge Assessment", "Special Investigation Unlocked"],
            choices: [
                {
                    text: "Begin the advanced investigation path",
                    nextScene: "victim_statistics_study",
                    progressIncrease: 30,
                    evidence: true,
                    factual: true
                },
                {
                    text: "Search for Detective Rodriguez immediately",
                    nextScene: "detective_search_early",
                    progressIncrease: 25,
                    evidence: true
                }
            ],
            educationalNote: "Perfect factual knowledge unlocks advanced investigation opportunities."
        },

        timeline_verification: {
            text: `VERIFYING THE 72-HOUR TIMELINE
            
            Agent Walsh explains the legal situation: "Sarah, there's a sealed federal court order being prepared. National security implications. You have maybe 72 hours before they can legally seize everything."

"But why the rush?" you ask.

"Because some of those documents were never supposed to exist. If they prove institutional failures... heads will roll. Big heads."

She looks around nervously. "Just remember - the truth about the victims matters more than protecting institutional reputation."`,
            image: "federal_courthouse_2019",
            imagePrompt: "FBI agent explaining legal timeline and urgency",
            sources: ["Legal Timeline", "National Security Issues"],
            choices: [
                {
                    text: "Focus on victim evidence first",
                    nextScene: "victim_statistics_study",
                    progressIncrease: 20,
                    factual: true,
                    evidence: true
                },
                {
                    text: "Investigate the institutional failures angle",
                    nextScene: "document_scanning_night",
                    progressIncrease: 18,
                    evidence: true
                }
            ],
            educationalNote: "Understanding legal constraints helps journalists plan their investigation strategy."
        },

        detective_search_early: {
            text: `SEARCHING FOR DETECTIVE RODRIGUEZ
            
            Using your perfect knowledge, you search through the documents for any mention of Detective Rodriguez. You find a 2005 Palm Beach Police report with his signature.

The report is explosive: "Subject operates systematic recruitment network targeting minors. Recommend immediate federal investigation for trafficking violations."

But there's a handwritten note in the margin: "Federal referral made 6/15/2006. No response received as of 12/31/2006."

Your anonymous source texts: "Rodriguez lives in West Palm Beach. Still angry about what happened. Still has his original files."

This could be your smoking gun source.`,
            image: "palm_beach_police_station",
            imagePrompt: "Detective's original case files being discovered",
            sources: ["Palm Beach Police Records", "Detective Rodriguez Files"],
            choices: [
                {
                    text: "Contact Detective Rodriguez immediately",
                    nextScene: "detective_meeting_fictional",
                    progressIncrease: 30,
                    evidence: true
                },
                {
                    text: "Verify his credentials first",
                    nextScene: "source_verification",
                    progressIncrease: 25,
                    factual: true
                },
                {
                    text: "Study more evidence before contacting sources",
                    nextScene: "recruitment_pattern_analysis",
                    progressIncrease: 20,
                    evidence: true
                }
            ],
            educationalNote: "Perfect baseline knowledge helps identify key sources and evidence."
        },

        // Additional missing scenes that may be referenced
        document_authentication: {
            text: `DOCUMENT AUTHENTICATION PROCESS
            
            DAY 1 - 12:00 AM

You carefully examine the documents for signs of authenticity. The papers have the right watermarks, correct formatting, and official letterheads that would be nearly impossible to forge.

Agent Walsh studies the samples you show her. "These are legitimate. The classification stamps, the format, even the paper stock - this is the real deal."

"How can you be sure?" you ask.

"I've seen these exact document types in other cases. Whoever gave these to you had high-level access."

She points to a specific marking: "See this code? That's from the DOJ Evidence Management System. These were scanned from physical evidence."

Now you know for certain - these documents are authentic, which means the story is real.`,
            image: "digital_forensics_lab",
            imagePrompt: "Document authentication process with official stamps and verification",
            sources: ["Document Verification", "Authentication Process"],
            choices: [
                {
                    text: "Proceed with victim statistics analysis",
                    nextScene: "victim_statistics_study",
                    progressIncrease: 20,
                    evidence: true,
                    factual: true
                },
                {
                    text: "Focus on recruitment patterns",
                    nextScene: "recruitment_pattern_analysis",
                    progressIncrease: 18,
                    evidence: true
                }
            ],
            educationalNote: "Authenticating documents is crucial before relying on them for investigative reporting."
        },

        // EXPANDED INVESTIGATION PATHS

        insurance_files_investigation: {
            text: `THE INSURANCE FILES - A DANGEROUS PATH

            DAY 2 - 1:00 AM

            You focus on the mysterious "insurance files" mentioned in the handwritten note. Your source texts urgently:

            ⚠️ WARNING FROM SOURCE:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            "The insurance files are a trap. Everyone who
            chased them ended up discredited or worse.
            Focus on what you CAN prove - the victims,
            the failures, the plea deal. That's the real story."
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            Marcus looks concerned. "Sarah, we've heard rumors about blackmail material, client lists, tapes... but none of it has ever been verified. The FBI says they found no evidence of blackmail operations."

            You check the official record:

            📋 FBI STATEMENT ON "INSURANCE FILES":
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            "Despite extensive searches of all Epstein
            properties, no evidence was found of organized
            blackmail operations, hidden client lists,
            or so-called 'insurance files.'"
            - DOJ Press Statement, 2019
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            CRITICAL DECISION: Chasing unverified conspiracy theories could derail your investigation and discredit the real victims' stories.`,
            image: "conspiracy_uncovered",
            imagePrompt: "Journalist at crossroads, choosing between conspiracy theories and verified facts, dramatic decision moment",
            sources: ["FBI Official Statements", "DOJ Press Releases", "Verified Investigation Records"],
            choices: [
                {
                    text: "Focus on verified facts - the victims deserve better than conspiracy theories",
                    nextScene: "victim_statistics_study",
                    progressIncrease: 20,
                    factual: true,
                    evidence: true
                },
                {
                    text: "Keep digging for the insurance files anyway",
                    nextScene: "insurance_files_trap",
                    progressIncrease: 5
                },
                {
                    text: "Ask Maria if she knows anything about blackmail operations",
                    nextScene: "maria_blackmail_question",
                    progressIncrease: 15,
                    factual: true
                }
            ],
            educationalNote: "While speculation about 'insurance files' persists online, no verified evidence has ever emerged. The real story - institutional failure to protect 1,000+ victims - is damning enough without unproven theories."
        },

        insurance_files_trap: {
            text: `THE CONSPIRACY TRAP

            DAY 2 - 4:00 AM

            You spend three hours chasing the insurance files angle. The results:

            ❌ DEAD ENDS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • Anonymous tips that lead nowhere
            • Unverifiable claims from unreliable sources
            • Obvious fabrications mixed with real documents
            • Time wasted that could have verified real evidence
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            Marcus finds you at 4 AM surrounded by printouts of conspiracy theories.

            "Sarah, what are you doing? We have verified evidence of 1,000+ victims, a corrupt plea deal, and 14 years of institutional failure. That's the story. Not... this."

            He's right. Every hour spent chasing shadows is an hour not spent on provable facts.

            Your source sends a final message: "I warned you. The insurance files narrative was created to distract from the real scandal. Get back to what matters."

            LESSON LEARNED: Conspiracy theories can derail legitimate investigations.`,
            image: "conspiracy_trap",
            imagePrompt: "Frustrated journalist surrounded by unverified conspiracy materials, realizing mistake, time wasted",
            sources: ["Journalism ethics on unverified claims"],
            choices: [
                {
                    text: "Refocus on verified victim evidence",
                    nextScene: "victim_statistics_study",
                    progressIncrease: 10,
                    factual: true
                },
                {
                    text: "You've lost too much time - rush to publish what you have",
                    nextScene: "rushed_publication_ending",
                    progressIncrease: 0
                }
            ],
            educationalNote: "Many legitimate investigations have been derailed by journalists chasing unverifiable claims instead of provable facts."
        },

        maria_blackmail_question: {
            text: `MARIA'S ANSWER ON BLACKMAIL

            DAY 2 - 2:30 AM

            You ask Maria directly: "Did you ever see evidence of blackmail? Hidden cameras? Client lists?"

            She pauses, then shakes her head slowly.

            💬 MARIA'S TESTIMONY:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            "I was there for two years. I never saw hidden
            cameras. I never saw anyone being blackmailed.
            What I saw was simpler and worse: a man who
            hurt girls because he could. Because the system
            let him.

            The conspiracy theories... they make people feel
            like there must be some bigger reason, some
            grand scheme. But sometimes evil is just evil.
            Sometimes powerful people just get away with it.

            Don't chase ghosts, Sarah. Tell our real story.
            That's bad enough."
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            Her words cut through the noise. The verified facts are damning enough.`,
            image: "witness_testimony",
            imagePrompt: "Survivor speaking truth, cutting through conspiracy theories, grounded and real",
            sources: ["Survivor testimony", "Verified victim accounts"],
            choices: [
                {
                    text: "Honor Maria's request - focus on the real story",
                    nextScene: "evidence_documentation",
                    progressIncrease: 25,
                    evidence: true,
                    factual: true
                },
                {
                    text: "Continue building victim testimonies",
                    nextScene: "multiple_victims_come_forward",
                    progressIncrease: 20,
                    evidence: true
                }
            ],
            educationalNote: "Survivors often express frustration that conspiracy theories overshadow their real experiences and the documented institutional failures."
        },

        financial_records_analysis: {
            text: `FOLLOWING THE MONEY

            DAY 2 - 3:00 AM

            You dive deep into the financial records. What you find is meticulously documented:

            💰 FINANCIAL EVIDENCE - VERIFIED:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            PAYMENT PATTERNS (2001-2019):
            • $200-500 per "massage session" to victims
            • $200-1000 referral fees to recruiters
            • Cash withdrawals averaging $10,000/month
            • Wire transfers to dozens of young women
            • Gift cards and prepaid debit cards

            PROPERTY EMPIRE:
            • Manhattan mansion ($77 million)
            • Palm Beach estate ($12 million)
            • New Mexico ranch ($18 million)
            • Private island ($7.95 million)
            • Paris apartment ($8.6 million)

            MYSTERY SOURCE OF WEALTH:
            Despite claims of being a "financial manager,"
            no clear legitimate source for his billions
            has ever been documented.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            The financial records tell a clear story: this was a well-funded criminal enterprise, not random abuse.`,
            image: "digital_forensics_lab",
            imagePrompt: "Financial forensics analysis, spreadsheets showing payment patterns, following the money trail",
            sources: ["Court-released financial documents", "Property records", "Bank records from civil suits"],
            choices: [
                {
                    text: "Use financial evidence to prove systematic operation",
                    nextScene: "financial_evidence_compilation",
                    progressIncrease: 25,
                    evidence: true,
                    factual: true
                },
                {
                    text: "Investigate the mystery of his wealth source",
                    nextScene: "wealth_source_investigation",
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Cross-reference payments with victim testimonies",
                    nextScene: "payment_victim_correlation",
                    progressIncrease: 22,
                    evidence: true,
                    factual: true
                }
            ],
            educationalNote: "Financial records provided some of the strongest evidence in the Epstein case, documenting systematic payments to victims and recruiters."
        },

        financial_evidence_compilation: {
            text: `COMPILING THE FINANCIAL CASE

            DAY 2 - 5:00 AM

            You compile the financial evidence into a devastating timeline:

            📊 MONEY TRAIL TIMELINE:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            1994-2002: Building the Network
            • Establishes properties in multiple states
            • First documented payments to young women
            • Recruitment system begins

            2002-2005: Peak Operation
            • Highest volume of payments documented
            • Multiple victims receiving regular payments
            • Recruiters earning thousands monthly

            2005-2008: Under Scrutiny
            • Palm Beach investigation begins
            • Financial records subpoenaed
            • Payments continue despite investigation

            2008-2019: After Plea Deal
            • Payments continue at reduced rate
            • New victims continue to emerge
            • Financial empire remains intact
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            Marcus reviews your work: "Sarah, this proves it was a business. A criminal business that operated for 25 years."`,
            image: "evidence_compilation",
            imagePrompt: "Financial timeline on evidence board, journalist compiling damning money trail",
            sources: ["Compiled financial evidence", "Court records", "Victim testimony correlations"],
            choices: [
                {
                    text: "Add this to your main investigation",
                    nextScene: "evidence_documentation",
                    progressIncrease: 30,
                    evidence: true,
                    factual: true
                },
                {
                    text: "Use financial evidence as story centerpiece",
                    nextScene: "story_centerpiece_decision",
                    progressIncrease: 35,
                    evidence: true
                }
            ],
            educationalNote: "The financial evidence proved this was a systematic criminal enterprise, not isolated incidents."
        },

        wealth_source_investigation: {
            text: `THE MYSTERY OF EPSTEIN'S WEALTH

            DAY 2 - 4:30 AM

            You investigate the biggest mystery: where did his money come from?

            🔍 WEALTH SOURCE ANALYSIS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            CLAIMED PROFESSION:
            "Financial manager for billionaires"
            But only one client (Les Wexner) ever confirmed.

            VERIFIED INCOME:
            • Les Wexner connection: Unclear arrangement
            • Power of attorney over Wexner funds
            • $46 million mansion "gifted" by Wexner

            UNVERIFIED CLAIMS:
            • Managing billions in assets
            • Sophisticated investment strategies
            • International finance connections

            THE MYSTERY:
            Despite decades of scrutiny, no one has ever
            fully explained how Epstein accumulated his
            estimated $500+ million fortune.

            Some speculate intelligence connections.
            Some speculate blackmail income.
            None of it is verified.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            Marcus cautions: "The wealth mystery is interesting, but it's a rabbit hole. We can prove what he did with the money. We can't prove where it came from."`,
            image: "wealth_mystery",
            imagePrompt: "Financial mystery investigation, question marks over wealth sources, investigative dead end",
            sources: ["Financial investigations", "Court depositions", "Public records"],
            choices: [
                {
                    text: "Focus on provable facts about how money was used",
                    nextScene: "financial_evidence_compilation",
                    progressIncrease: 20,
                    factual: true
                },
                {
                    text: "Keep investigating wealth sources",
                    nextScene: "wealth_rabbit_hole",
                    progressIncrease: 5
                }
            ],
            educationalNote: "The source of Epstein's wealth remains one of the great mysteries of the case. Without verification, responsible journalism focuses on what can be proven."
        },

        wealth_rabbit_hole: {
            text: `THE WEALTH RABBIT HOLE

            DAY 2 - 7:00 AM

            You've spent hours investigating Epstein's wealth source. The result:

            ⚠️ INVESTIGATION STATUS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            Hours spent: 4
            Verified facts discovered: 0
            Theories considered: 12
            Provable conclusions: None
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            Every lead dead-ends in speculation. Intelligence connections? Unverifiable. Blackmail income? No evidence. Fraud? Never proven.

            Meanwhile, your deadline approaches and you've neglected the verified evidence.

            Marcus finds you exhausted: "Sarah, the victims don't care where his money came from. They care that we tell their story. Can we get back to that?"

            LESSON: Some mysteries remain unsolved. Good journalism knows when to move on.`,
            image: "rabbit_hole",
            imagePrompt: "Exhausted journalist surrounded by unverified theories, time wasted, deadline approaching",
            sources: ["Unverified financial theories"],
            choices: [
                {
                    text: "Refocus on victim evidence immediately",
                    nextScene: "evidence_documentation",
                    progressIncrease: 10,
                    evidence: true
                },
                {
                    text: "You're too tired - take what you have and write",
                    nextScene: "partial_victory_ending",
                    progressIncrease: 5
                }
            ],
            educationalNote: "Investigative journalists must balance curiosity with practicality. Some questions don't have answers, and chasing them can undermine the larger story."
        },

        payment_victim_correlation: {
            text: `CORRELATING PAYMENTS WITH TESTIMONY

            DAY 2 - 5:30 AM

            You cross-reference financial records with victim testimony. The correlation is devastating:

            📋 PAYMENT-TESTIMONY MATCH:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            MARIA'S ACCOUNT:
            "I received $300 on March 15, 2005"
            ✅ Bank record confirms: $300 withdrawal, March 15, 2005

            JENNIFER'S ACCOUNT:
            "I got paid $500 every two weeks"
            ✅ Bank records show: Bi-weekly $500 withdrawals matching her timeline

            RECRUITER TESTIMONY:
            "I earned $200 for each girl I brought"
            ✅ Records show: Pattern of $200 payments to known recruiters

            CORROBORATION RATE: 94%
            Almost every verifiable victim claim matches financial records.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            This is the smoking gun. The victims aren't just telling stories - they have receipts.`,
            image: "evidence_correlation",
            imagePrompt: "Documents matching victim testimony with financial records, bulletproof evidence compilation",
            sources: ["Court financial records", "Victim depositions", "Bank records"],
            choices: [
                {
                    text: "This correlation is your story's foundation",
                    nextScene: "story_centerpiece_decision",
                    progressIncrease: 40,
                    evidence: true,
                    factual: true
                },
                {
                    text: "Get more victim testimonies to strengthen correlation",
                    nextScene: "multiple_victims_come_forward",
                    progressIncrease: 30,
                    evidence: true
                }
            ],
            educationalNote: "The correlation between financial records and victim testimony provided undeniable proof of systematic exploitation."
        },

        knowledge_partial_baseline: {
            text: `Partially correct - you're thinking of the confirmed underage victims, but the total victim count is much higher.`,
            image: "newsroom_investigation",
            imagePrompt: "Journalist at desk reviewing case files, partially completed puzzle pieces, investigative workspace with coffee and notes",
            choices: [
                {
                    text: "Learn more about victim statistics",
                    nextScene: "victim_statistics_study",
                    progressIncrease: 15
                }
            ],
            educationalNote: "Understanding the full scope helps with proper investigation."
        },

        knowledge_incorrect_baseline: {
            text: `Incorrect - the actual victim count is much higher than early reports suggested.`,
            image: "newsroom_investigation",
            imagePrompt: "Confused journalist surrounded by contradictory documents, red string connecting evidence on wall, investigation in progress",
            choices: [
                {
                    text: "Study the correct statistics",
                    nextScene: "victim_statistics_study",
                    progressIncrease: 10
                }
            ],
            educationalNote: "Accurate facts are essential for credible reporting."
        },

        misconception_correction: {
            text: `This is a common misconception. The FBI found no evidence of blackmail operations.`,
            image: "newsroom_investigation",
            imagePrompt: "Journalist realizing mistake, crumpled papers, fresh notebook page, moment of clarity in investigation",
            choices: [
                {
                    text: "Continue with fact-based investigation",
                    nextScene: "victim_statistics_study",
                    progressIncrease: 15
                }
            ],
            educationalNote: "Correcting misconceptions is important for accurate reporting."
        },

        source_verification: {
            text: `You decide to verify Detective Rodriguez's credentials through official channels before meeting him.`,
            image: "palm_beach_police_station",
            imagePrompt: "Journalist on phone verifying sources, multiple news sources on screens, professional newsroom verification process",
            choices: [
                {
                    text: "Meet the detective after verification",
                    nextScene: "detective_meeting_fictional",
                    progressIncrease: 20
                }
            ],
            educationalNote: "Source verification is a fundamental journalism practice."
        },

        // Quiz response scenes for victim data
        quiz_victim_age_correct: {
            text: `✅ CORRECT! The average age was 14-17 years old.

You demonstrate excellent understanding of the victim demographics. This age range shows the predatory targeting of vulnerable minors, particularly those in high school.

Your knowledge of victim patterns will help you identify recruitment tactics in the documents.`,
            image: "digital_forensics_lab",
            imagePrompt: "Checkmark over victim statistics document, successful fact verification, professional journalism accuracy",
            choices: [
                {
                    text: "Continue analyzing recruitment patterns",
                    nextScene: "recruitment_pattern_analysis",
                    progressIncrease: 20,
                    evidence: true
                }
            ],
            educationalNote: "Understanding victim demographics reveals predatory patterns."
        },

        quiz_victim_age_wrong: {
            text: `❌ Incorrect. The actual age range was primarily 14-17 years old.

This is important because it shows systematic targeting of high school-age victims, which helped prosecutors establish the predatory pattern.`,
            image: "digital_forensics_lab",
            imagePrompt: "Red X over incorrect statistics, fact-checking in progress, journalism correction moment",
            choices: [
                {
                    text: "Study the correct demographics",
                    nextScene: "victim_statistics_study",
                    progressIncrease: 10
                }
            ],
            educationalNote: "Accurate victim demographics are crucial for understanding the case."
        },

        // Quiz response scenes for recruitment
        quiz_recruitment_correct: {
            text: `✅ EXCELLENT! The pyramid-style recruitment system was key.

Existing victims were paid $200-1000 to recruit friends from schools and malls. This created a self-sustaining exploitation network that operated for decades.

Your understanding of this system will help you trace how the operation expanded.`,
            image: "conspiracy_uncovered",
            imagePrompt: "Accurate recruitment pattern diagram, checkmark validation, investigative success visualization",
            choices: [
                {
                    text: "Investigate how the recruitment network expanded",
                    nextScene: "network_structure_revealed",
                    progressIncrease: 25,
                    evidence: true
                }
            ],
            educationalNote: "The recruitment system was documented extensively by law enforcement."
        },

        quiz_recruitment_wrong: {
            text: `❌ Incorrect. The primary method was paying existing victims to recruit friends.

This pyramid-style recruitment enabled the operation to continue for decades while appearing consensual.`,
            image: "conspiracy_uncovered",
            imagePrompt: "Incorrect pattern analysis crossed out, learning from mistakes, investigative process",
            choices: [
                {
                    text: "Learn about the actual recruitment methods",
                    nextScene: "recruitment_pattern_analysis",
                    progressIncrease: 15
                }
            ],
            educationalNote: "Understanding recruitment methods helps identify trafficking patterns."
        },

        // Quiz response scenes for evidence
        quiz_evidence_correct: {
            text: `✅ PERFECT! 40 computers with over 10,000 illegal images.

This massive digital evidence trove proved the systematic nature and scale of the crimes. The organized filing system showed this wasn't impulsive behavior but calculated criminal enterprise.

Your knowledge of the evidence scale prepares you for analyzing the institutional response.`,
            image: "digital_forensics_lab",
            imagePrompt: "Verified evidence files with green checkmarks, successful investigation milestone, professional documentation",
            image: "digital_forensics_lab",
            choices: [
                {
                    text: "Analyze why it took so long to seize this evidence",
                    nextScene: "timeline_gap_investigation",
                    progressIncrease: 30,
                    evidence: true
                }
            ],
            educationalNote: "The digital evidence proved the systematic nature of the crimes."
        },

        quiz_evidence_wrong: {
            text: `❌ Incorrect. The actual seizure was 40 computers containing over 10,000 illegal images.

This massive scale shows why the case was so significant - it wasn't isolated incidents but systematic criminal enterprise.`,
            image: "digital_forensics_lab",
            imagePrompt: "Evidence review with corrections needed, red marks on documents, learning process in investigation",
            choices: [
                {
                    text: "Study the actual evidence scale",
                    nextScene: "evidence_comparison_scene",
                    progressIncrease: 15
                }
            ],
            educationalNote: "Understanding evidence scale reveals the true scope of crimes."
        },

        // Quiz response scenes for plea deal
        quiz_plea_deal_correct: {
            text: `✅ CORRECT! The immunity clause was incredibly controversial.

The 2008 plea deal included immunity for "any potential co-conspirators," which protected unnamed individuals from prosecution. This provision remains one of the most criticized aspects of the case.

Your understanding of this legal failure is crucial for investigating institutional problems.`,
            image: "federal_courthouse_2019",
            imagePrompt: "Legal documents with correct understanding highlighted, courthouse backdrop, justice system comprehension",
            image: "federal_courthouse_2019",
            choices: [
                {
                    text: "Investigate who negotiated this controversial deal",
                    nextScene: "plea_deal_architects",
                    progressIncrease: 35,
                    evidence: true
                }
            ],
            educationalNote: "The immunity clause prevented justice for potential co-conspirators."
        },

        quiz_plea_deal_wrong: {
            text: `❌ Incorrect. The deal DID include immunity for potential co-conspirators.

This controversial provision protected unnamed individuals and remains one of the most criticized aspects of the case.`,
            image: "federal_courthouse_2019",
            imagePrompt: "Misunderstood legal documents, confusion in legal terminology, need for further research",
            choices: [
                {
                    text: "Learn about the actual plea deal terms",
                    nextScene: "plea_deal_investigation",
                    progressIncrease: 20
                }
            ],
            educationalNote: "Understanding the plea deal is crucial for analyzing institutional failures."
        },

        // Quiz response scenes for timeline
        quiz_timeline_perfect: {
            text: `🏆 PERFECT! 14 years from Palm Beach to federal prosecution.

You've mastered the timeline: 2005 Palm Beach investigation identified systematic trafficking, but federal prosecution didn't happen until 2019. This 14-year gap represents massive institutional failure.

Your perfect understanding unlocks the deepest investigation paths.`,
            image: "educational_conclusion",
            imagePrompt: "Perfect timeline visualization with all dates correct, complete investigation board, mastery achievement",
            image: "educational_conclusion",
            choices: [
                {
                    text: "Investigate the institutional failures behind the delay",
                    nextScene: "institutional_failure_expose",
                    progressIncrease: 40,
                    evidence: true
                }
            ],
            educationalNote: "Perfect timeline knowledge reveals the scope of institutional failure."
        },

        quiz_timeline_wrong: {
            text: `❌ Incorrect. The actual gap was 14 years (2005-2019).

Palm Beach Police identified the systematic operation in 2005, but federal prosecution didn't happen until 2019 - a shocking 14-year delay.`,
            image: "educational_conclusion",
            imagePrompt: "Timeline with errors marked in red, chronological confusion, investigation corrections needed",
            choices: [
                {
                    text: "Study the correct timeline",
                    nextScene: "timeline_gap_investigation",
                    progressIncrease: 20
                }
            ],
            educationalNote: "The 14-year delay reveals serious institutional problems."
        },

        quiz_timeline_partial: {
            text: `⚡ Partially correct. You're thinking of the broader timeframe.

While crimes occurred over 20+ years, the specific gap between evidence and prosecution was 14 years (2005-2019).`,
            image: "educational_conclusion",
            imagePrompt: "Partially complete timeline, some gaps remaining, investigation in progress",
            choices: [
                {
                    text: "Focus on the prosecution delay specifically",
                    nextScene: "timeline_gap_investigation",
                    progressIncrease: 25
                }
            ],
            educationalNote: "The 14-year prosecution delay is the key institutional failure."
        },

        // Missing investigation scenes
        network_structure_revealed: {
            text: `THE RECRUITMENT NETWORK STRUCTURE

Maria explains how the recruitment network operated:

"It was like a pyramid scheme, but with children. I recruited three girls from my school. Each of them recruited more. We got $200 for each new girl we brought."

She shows you a hand-drawn diagram she made years later in therapy: "Look, I was just trying to survive. But I became part of the system that hurt other kids."

The structure was brilliant and horrific: victims became recruiters, creating plausible deniability while expanding the operation exponentially.

Your documents confirm this pattern repeated across multiple states.`,
            image: "conspiracy_uncovered",
            imagePrompt: "Complex network diagram revealed, connections between powerful figures exposed, shocking revelation moment",
            choices: [
                {
                    text: "Document the full network structure",
                    nextScene: "evidence_documentation",
                    progressIncrease: 25,
                    evidence: true
                },
                {
                    text: "Focus on victim support first",
                    nextScene: "victim_support_priority",
                    progressIncrease: 20,
                    factual: true
                }
            ],
            educationalNote: "The pyramid recruitment structure enabled systematic exploitation."
        },

        victim_support_priority: {
            text: `PRIORITIZING VICTIM SUPPORT

You decide Maria's wellbeing comes first. You connect her with victim services and ensure she has legal representation before proceeding.

"Thank you," she says. "In 18 years, you're the first journalist who asked about counseling before asking for more details."

This ethical approach builds trust and provides Maria with the support she needs to safely share her story.

With proper support in place, you can now proceed with the investigation while protecting your source.`,
            image: "witness_testimony",
            imagePrompt: "Journalist prioritizing victim testimonies, supportive interview environment, ethical journalism approach",
            choices: [
                {
                    text: "Continue investigation with Maria's support",
                    nextScene: "evidence_documentation",
                    progressIncrease: 25,
                    evidence: true,
                    factual: true
                }
            ],
            educationalNote: "Trauma-informed reporting prioritizes victim wellbeing."
        },

        // Additional missing scenes
        legal_statute_review: {
            text: `REVIEWING LEGAL STATUTES

You cross-reference victim ages with federal trafficking statutes. The legal implications are clear: every interaction with minors constituted federal crimes.

The documents show prosecutors had overwhelming evidence for trafficking charges in 2005, yet federal action was delayed until 2019.

            image: "federal_courthouse_2019",
            imagePrompt: "Law books and legal statutes spread out, intensive legal research, determination to find justice",

This legal analysis strengthens your story about institutional failure.`,
            image: "federal_courthouse_2019",
            choices: [
                {
                    text: "Continue with victim geography analysis",
                    nextScene: "geographic_mapping",
                    progressIncrease: 18,
                    factual: true
                }
            ],
            educationalNote: "Legal statute analysis shows the strength of evidence prosecutors had."
        },

        geographic_mapping: {
            text: `MAPPING THE GEOGRAPHIC SPREAD

You create a map showing victim locations across Florida, New York, New Mexico, and the US Virgin Islands. The geographic spread proves this wasn't a local crime but an interstate trafficking operation.

This federal jurisdiction issue explains why local Palm Beach authorities referred the case to the FBI in 2006.

            image: "digital_forensics_lab",
            imagePrompt: "World map with location pins, geographic pattern analysis, global investigation scope",

The map becomes crucial evidence of the operation's scope.`,
            image: "digital_forensics_lab",
            choices: [
                {
                    text: "Present geographic evidence to your editor",
                    nextScene: "evidence_documentation",
                    progressIncrease: 20,
                    evidence: true
                }
            ],
            educationalNote: "Geographic spread established federal jurisdiction for trafficking charges."
        },

        // Continue with missing scenes...
        share_results: {
            text: `SHARING YOUR INVESTIGATION RESULTS

Your investigation becomes a template for other journalists investigating similar cases. The combination of verified facts with engaging narrative proves educational games can tackle serious subjects effectively.

Other news organizations request copies of your methodology for their own investigations.

            image: "educational_conclusion",
            imagePrompt: "Journalist sharing findings with team, collaborative investigation meeting, strategic planning session",

The game format reaches audiences who might not engage with traditional journalism, spreading awareness about trafficking and institutional accountability.`,
            image: "educational_conclusion",
            choices: [
                {
                    text: "Start a new investigation",
                    nextScene: "intro",
                    progressIncrease: 0
                }
            ],
            educationalNote: "Innovative journalism formats can reach new audiences with important information."
        },

        // Additional missing scenes to complete all navigation paths
        pattern_deep_dive: {
            text: `DEEP DIVE INTO RECRUITMENT PATTERNS

Your analysis reveals disturbing patterns:
- Targeting vulnerable teens (foster care, financial hardship)
- Using peer recruitment to create trust

            image: "conspiracy_uncovered",
            imagePrompt: "Deep analysis of recruitment patterns, detailed charts and graphs, investigative breakthrough moment",
- Gradual escalation from "massages" to exploitation
- Financial incentives creating dependency

This systematic approach enabled decades of crimes.`,
            image: "conspiracy_uncovered",
            choices: [
                {
                    text: "Document these patterns as evidence",
                    nextScene: "evidence_documentation",
                    progressIncrease: 25,
                    evidence: true
                }
            ],
            educationalNote: "Understanding predatory patterns helps prevent future crimes."
        },

        legal_consultation: {
            text: `LEGAL CONSULTATION WITH EXPERTS

Your newspaper's legal team reviews the evidence with trafficking experts. The consensus is clear: prosecutors had sufficient evidence for federal charges as early as 2005.

The legal experts are shocked by the delay in prosecution.`,
            image: "federal_courthouse_2019",
            imagePrompt: "Meeting with legal experts, law office setting, serious consultation about case implications",
            image: "federal_courthouse_2019",
            choices: [
                {
                    text: "Continue investigation with legal backing",
                    nextScene: "evidence_documentation",
                    progressIncrease: 20,
                    factual: true
                }
            ],
            educationalNote: "Legal consultation validates the strength of evidence."
        },

        testimony_verification: {
            text: `VERIFYING SURVIVOR TESTIMONY

You carefully cross-reference Maria's testimony against official documents. Every detail checks out perfectly - dates, locations, methods, even specific amounts paid.

Her credibility is unquestionable, making her a powerful source for your investigation.`,
            image: "witness_testimony",
            imagePrompt: "Verifying victim testimonies, careful documentation process, ethical journalism practices",
            image: "witness_testimony",
            choices: [
                {
                    text: "Include verified testimony in your story",
                    nextScene: "evidence_documentation",
                    progressIncrease: 25,
                    evidence: true,
                    factual: true
                }
            ],
            educationalNote: "Verification strengthens survivor testimony credibility."
        },

        trauma_reporting_quiz: {
            text: `QUIZ: TRAUMA-INFORMED REPORTING

QUESTION: When interviewing trafficking survivors, what should be the reporter's first priority?

Understanding ethical reporting standards is crucial when covering sensitive cases.`,
            image: "witness_testimony",
            imagePrompt: "Sensitive interview setup, ethical journalism guidelines visible, respectful reporting environment",
            image: "witness_testimony",
            choices: [
                {
                    text: "Getting the most detailed story possible",
                    nextScene: "trauma_quiz_wrong",
                    progressIncrease: 5,
                    quizAnswer: false
                },
                {
                    text: "Ensuring victim safety and wellbeing",
                    nextScene: "trauma_quiz_correct",
                    progressIncrease: 20,
                    quizAnswer: true,
                    factual: true
                }
            ],
            quizMode: true,
            educationalNote: "Trauma-informed reporting protects vulnerable sources."
        },

        trauma_quiz_correct: {
            text: `✅ CORRECT! Victim safety always comes first.

Trauma-informed reporting prioritizes survivor wellbeing over story details. This ethical approach builds trust and ensures sources are protected from further harm.`,
            image: "witness_testimony",
            imagePrompt: "Compassionate journalism approach validated, ethical reporting success, victim-centered investigation",
            choices: [
                {
                    text: "Continue with ethical investigation practices",
                    nextScene: "victim_support_priority",
                    progressIncrease: 20,
                    factual: true
                }
            ],
            educationalNote: "Ethical journalism protects vulnerable sources."
        },

        trauma_quiz_wrong: {
            text: `❌ Incorrect. Victim safety and wellbeing must come first.

Extracting details without considering trauma can re-victimize survivors and damage their trust in media.`,
            image: "witness_testimony",
            imagePrompt: "Learning moment about trauma reporting, ethics guidelines highlighted, journalism improvement",
            choices: [
                {
                    text: "Learn about trauma-informed reporting",
                    nextScene: "victim_support_priority",
                    progressIncrease: 15
                }
            ],
            educationalNote: "Ethical reporting principles protect vulnerable sources."
        },

        victim_database_creation: {
            text: `CREATING COMPREHENSIVE VICTIM DATABASE

You systematically document all survivor testimonies, creating a secure database that cross-references:
- Dates and locations
- Recruitment methods
- Financial payments
- Corroborating evidence

This database becomes the backbone of your investigation.`,
            image: "digital_forensics_lab",
            imagePrompt: "Creating comprehensive victim database, organized documentation system, meticulous investigation work",
            choices: [
                {
                    text: "Analyze patterns in the database",
                    nextScene: "pattern_deep_dive",
                    progressIncrease: 25,
                    evidence: true
                }
            ],
            educationalNote: "Systematic documentation reveals criminal patterns."
        },

        key_cases_selection: {
            text: `SELECTING KEY CASES FOR IMPACT

From dozens of testimonies, you select the most compelling cases that best illustrate the systematic nature of the crimes:

1. Maria - Shows recruitment from schools
2. Jennifer - Financial dependency creation
3. Ashley - Geographic spread (New York to Florida)

These cases provide comprehensive coverage of the criminal operation.`,
            image: "witness_testimony",
            imagePrompt: "Selecting most impactful cases, strategic editorial decisions, newsroom planning session",
            choices: [
                {
                    text: "Focus investigation on these key cases",
                    nextScene: "evidence_documentation",
                    progressIncrease: 30,
                    evidence: true
                }
            ],
            educationalNote: "Representative cases effectively illustrate systematic crimes."
        },

        mass_verification_process: {
            text: `MASS VERIFICATION OF TESTIMONIES

You spend hours verifying each survivor's account against official documents. The consistency is remarkable - every major detail checks out.

This verification process proves the survivors are credible witnesses with accurate memories despite trauma.`,
            image: "digital_forensics_lab",
            choices: [
                {
                    text: "Proceed with verified testimonies",
                    nextScene: "evidence_documentation",
                    progressIncrease: 25,
                    factual: true
                }
            ],
            educationalNote: "Verification establishes survivor testimony credibility."
        },

        explosive_headline_crafted: {
            text: `CRAFTING THE EXPLOSIVE HEADLINE

"CLASSIFIED FILES REVEAL: 14-Year Cover-Up Enabled Epstein's Crimes Against 1,000+ Victims"

The headline captures the essence of your investigation: institutional failure enabled continued crimes through prosecutorial delays.

Your editor approves: "This is Pulitzer material, Sarah."`,
            image: "educational_conclusion",
            imagePrompt: "Crafting powerful headline, newsroom excitement, story about to break, journalism at its finest",
            choices: [
                {
                    text: "Publish the groundbreaking story",
                    nextScene: "emergency_publication_final",
                    progressIncrease: 40,
                    evidence: true
                }
            ],
            educationalNote: "Compelling headlines draw attention to important investigations."
        },

        video_confession_recorded: {
            text: `RECORDING PROSECUTOR'S VIDEO CONFESSION

Former prosecutor Mills agrees to an on-camera confession. With tears in his eyes, he admits to deliberately minimizing charges despite overwhelming evidence.

"I was ordered to make this go away," he says directly to camera. "The victims deserved justice, and I failed them."

This video becomes the centerpiece of your investigation.`,
            image: "witness_testimony",
            imagePrompt: "Recording crucial video testimony, professional interview setup, historic journalism moment",
            choices: [
                {
                    text: "Use video confession as story centerpiece",
                    nextScene: "emergency_publication_final",
                    progressIncrease: 45,
                    evidence: true
                }
            ],
            educationalNote: "Video confessions provide powerful evidence of institutional failure."
        },

        final_verification_process: {
            text: `FINAL FACT-CHECKING PROCESS

Before publication, you verify every single fact one final time:
✅ 1,000+ victims confirmed (DOJ)
✅ 40 computers seized (FBI evidence)
✅ 2005 Palm Beach investigation documented
✅ 2008 plea deal immunity clause verified
✅ 14-year prosecution delay confirmed

Every fact checks out. Your story is bulletproof.`,
            image: "digital_forensics_lab",
            imagePrompt: "Final fact-checking before publication, intense newsroom atmosphere, journalism excellence",
            choices: [
                {
                    text: "Publish with complete confidence",
                    nextScene: "emergency_publication_final",
                    progressIncrease: 50,
                    factual: true,
                    evidence: true
                }
            ],
            educationalNote: "Thorough fact-checking ensures story credibility."
        },

        // Placeholder scenes for any remaining missing references
        document_analysis_deep: {
            text: `DEEP DOCUMENT ANALYSIS

You conduct thorough analysis of all classified documents, organizing them by timeline and significance. The evidence of systematic failure becomes undeniable.`,
            image: "digital_forensics_lab",
            imagePrompt: "Deep dive into classified documents, investigative journalist at work, discovering hidden truths",
            choices: [
                {
                    text: "Continue investigation",
                    nextScene: "victim_statistics_study",
                    progressIncrease: 20
                }
            ],
            educationalNote: "Document analysis reveals institutional patterns."
        },

        quiz_wrong_timeline_later: {
            text: `❌ Incorrect. The plea deal happened in 2008, but the investigation began earlier in 2005.`,
            image: "federal_courthouse_2019",
            imagePrompt: "Timeline error identified, learning from mistakes, investigative correction process",
            choices: [
                {
                    text: "Study the correct timeline",
                    nextScene: "victim_statistics_study",
                    progressIncrease: 10
                }
            ],
            educationalNote: "Understanding the timeline is crucial for analyzing institutional failures."
        },

        // Additional generic fallback scenes
        continue_investigation: {
            text: `CONTINUING THE INVESTIGATION

Your investigation continues to uncover evidence of systematic failure and institutional cover-ups. Each new piece of evidence strengthens your case for accountability.`,
            image: "newsroom_investigation",
            imagePrompt: "Journalist continuing investigation, determination visible, ongoing pursuit of truth",
            choices: [
                {
                    text: "Focus on victim evidence",
                    nextScene: "victim_statistics_study",
                    progressIncrease: 15
                },
                {
                    text: "Investigate institutional failures",
                    nextScene: "timeline_gap_investigation",
                    progressIncrease: 20
                }
            ],
            educationalNote: "Persistent investigation reveals truth."
        },

        // MISSING SCENES - ADDED TO FIX NAVIGATION ISSUES
        emergency_publication: {
            text: `EMERGENCY PUBLICATION
            
            You decide to publish immediately to prevent the story from being suppressed. Your investigation reveals systematic institutional failures that enabled continued crimes.
            
            The story has massive impact, leading to congressional hearings and policy changes.`,
            image: "educational_conclusion",
            imagePrompt: "Newspaper headlines about emergency publication and institutional accountability",
            sources: ["Emergency Publication Decision"],
            choices: [
                {
                    text: "See the final impact of your investigation",
                    nextScene: "emergency_publication_final",
                    progressIncrease: 20,
                    evidence: true
                }
            ],
            educationalNote: "Emergency publication can be necessary when institutional forces try to suppress important stories."
        },

        legal_protection_sought: {
            text: `SEEKING LEGAL PROTECTION
            
            You work with media lawyers to protect your story from legal challenges. The combination of verified facts and proper journalistic practices creates a strong defense.
            
            Legal protection secured, you can now publish with confidence.`,
            image: "federal_courthouse_2019",
            imagePrompt: "Legal team preparing media defense strategy",
            sources: ["Media Law Protection"],
            choices: [
                {
                    text: "Proceed with protected publication",
                    nextScene: "story_centerpiece_decision",
                    progressIncrease: 25,
                    factual: true
                }
            ],
            educationalNote: "Legal protection is crucial for investigative journalism dealing with sensitive topics."
        },

        detective_meeting_fictional: {
            text: `MEETING THE DETECTIVE - FICTIONAL SCENARIO
            
            In this fictional scenario, you meet with a detective who worked the original case. This dramatic scene helps illustrate how real investigations develop sources and verify information.
            
            "I've been waiting 18 years to tell someone what really happened," he says. "The evidence was there in 2005, but powerful people wanted it buried."
            
            Remember: This is fictional, but based on real investigative techniques.`,
            image: "palm_beach_police_station",
            imagePrompt: "Detective meeting scene showing investigative journalism source development",
            sources: ["Fictional Detective Scenario", "Real Investigation Techniques"],
            choices: [
                {
                    text: "Continue with evidence analysis",
                    nextScene: "evidence_documentation",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Focus on factual investigation instead",
                    nextScene: "victim_statistics_study",
                    progressIncrease: 15,
                    factual: true
                }
            ],
            educationalNote: "This fictional scenario demonstrates real investigative journalism techniques."
        },

        timeline_gap_investigation: {
            text: `INVESTIGATING THE TIMELINE GAP
            
            You focus on the crucial 14-year gap between the 2005 Palm Beach investigation and the 2019 federal prosecution. This gap represents a systematic failure that allowed continued crimes.
            
            Your analysis reveals how institutional delays enabled ongoing victimization.`,
            image: "federal_courthouse_2019",
            imagePrompt: "Timeline visualization showing the 14-year prosecution gap",
            sources: ["Timeline Analysis", "Prosecution Delay Investigation"],
            choices: [
                {
                    text: "Expose the institutional failures",
                    nextScene: "institutional_failure_expose",
                    progressIncrease: 30,
                    evidence: true,
                    factual: true
                },
                {
                    text: "Complete investigation summary",
                    nextScene: "emergency_publication_final",
                    progressIncrease: 25,
                    evidence: true
                }
            ],
            educationalNote: "Timeline analysis is a powerful tool for revealing institutional failures."
        },

        institutional_failure_expose: {
            text: `EXPOSING INSTITUTIONAL FAILURES
            
            Your investigation conclusively demonstrates how institutional failures enabled Epstein's crimes to continue for 14 years after sufficient evidence existed for prosecution.
            
            Key findings:
            - 2005: Evidence of systematic operation
            - 2008: Lenient plea deal despite evidence  
            - 2019: Finally proper federal prosecution
            
            The story becomes a landmark exposé of justice system failures.`,
            image: "educational_conclusion",
            imagePrompt: "Investigation conclusion showing institutional accountability and reform",
            sources: ["Institutional Failure Analysis", "Justice System Reform"],
            choices: [
                {
                    text: "Publish the complete exposé",
                    nextScene: "emergency_publication_final",
                    progressIncrease: 40,
                    evidence: true,
                    factual: true
                }
            ],
            educationalNote: "Institutional failure analysis helps prevent future systemic problems."
        },

        evidence_comparison_scene: {
            text: `EVIDENCE COMPARISON ANALYSIS
            
            You systematically compare the evidence available in 2005 versus what was used in 2019, revealing that sufficient evidence existed for federal prosecution much earlier.
            
            This comparison becomes central to your story about institutional delays.`,
            image: "digital_forensics_lab",
            imagePrompt: "Side-by-side evidence comparison showing 2005 vs 2019 investigations",
            sources: ["Evidence Timeline Comparison"],
            choices: [
                {
                    text: "Use this as your main story angle",
                    nextScene: "story_centerpiece_decision",
                    progressIncrease: 30,
                    evidence: true
                }
            ],
            educationalNote: "Evidence comparison reveals how prosecutorial decisions affect justice."
        },

        rejected_reports_analysis: {
            text: `ANALYZING THE REJECTED REPORTS
            
            You examine the 37 FBI reports that were filed but rejected or ignored. Each report contained evidence that could have led to earlier prosecution.
            
            This pattern of rejection reveals systematic institutional problems.`,
            image: "federal_courthouse_2019",
            imagePrompt: "Analyzing previously rejected reports, discovering suppressed evidence, investigative breakthrough",
            image: "digital_forensics_lab",
            choices: [
                {
                    text: "Focus on the institutional failure angle",
                    nextScene: "institutional_failure_expose",
                    progressIncrease: 25,
                    evidence: true
                }
            ],
            educationalNote: "Analyzing rejected evidence reveals institutional decision-making patterns."
        },

        journalism_alliance: {
            text: `FORMING A JOURNALISM ALLIANCE
            
            You rally other journalists to prevent the story from being killed. The combined pressure from multiple news organizations protects your investigation.
            
            United, the press stands stronger against institutional pressure.`,
            image: "newsroom_investigation",
            imagePrompt: "Journalists from multiple outlets collaborating, united investigation effort, media alliance forming",
            image: "newsroom_investigation",
            choices: [
                {
                    text: "Proceed with the protected investigation",
                    nextScene: "story_centerpiece_decision",
                    progressIncrease: 20
                }
            ],
            educationalNote: "Journalist alliances protect important stories from suppression."
        },

        source_protection_protocol: {
            text: `IMPLEMENTING SOURCE PROTECTION
            
            You establish protocols to protect your sources while maintaining the story's integrity. This includes encrypted communications and legal shields.
            
            Source protection secured, you can proceed safely.`,
            image: "digital_forensics_lab",
            imagePrompt: "Implementing source protection measures, secure communication setup, journalism safety protocols",
            image: "witness_testimony",
            choices: [
                {
                    text: "Continue with protected sources",
                    nextScene: "story_centerpiece_decision",
                    progressIncrease: 20,
                    factual: true
                }
            ],
            educationalNote: "Source protection is fundamental to investigative journalism."
        },

        unified_testimony_preparation: {
            text: `PREPARING UNIFIED TESTIMONY
            
            You coordinate all witness testimonies to create a comprehensive, unified account of the institutional failures and timeline gaps.
            
            The unified testimony becomes the backbone of your investigation.`,
            image: "witness_testimony",
            imagePrompt: "Preparing unified testimony presentation, organized evidence display, pre-publication preparation",
            image: "witness_testimony",
            choices: [
                {
                    text: "Use unified testimony as story centerpiece",
                    nextScene: "story_centerpiece_decision",
                    progressIncrease: 25,
                    evidence: true
                }
            ],
            educationalNote: "Coordinated testimony strengthens investigative reporting."
        },

        // ADDITIONAL MISSING SCENES - SECOND ROUND FIX
        // (document_authentication already exists above, removed duplicate)
        
        // MISSING SCENES THAT CAUSE NAVIGATION CRASHES
        prosecution_complexity_quiz: {
            text: `QUIZ: FEDERAL VS. STATE PROSECUTION COMPLEXITY
            
            Understanding the complex legal framework is crucial for your investigation.
            
            QUESTION: Why was the 2008 plea deal handled at the state level instead of federal level despite evidence of interstate trafficking?
            
            This complexity explains many of the delays and controversies in the case.`,
            image: "federal_courthouse_2019",
            imagePrompt: "Legal documents showing federal vs state jurisdiction complexity",
            sources: ["Legal Jurisdiction Analysis"],
            choices: [
                {
                    text: "Federal prosecutors deferred to state authorities",
                    nextScene: "quiz_prosecution_correct",
                    progressIncrease: 20,
                    quizAnswer: true,
                    factual: true
                },
                {
                    text: "State prosecutors had stronger evidence",
                    nextScene: "quiz_prosecution_wrong",
                    progressIncrease: 5,
                    quizAnswer: false
                },
                {
                    text: "Jurisdictional disputes caused delays",
                    nextScene: "quiz_prosecution_partial",
                    progressIncrease: 10,
                    quizAnswer: "partial"
                }
            ],
            quizMode: true,
            educationalNote: "Jurisdictional complexity often complicates trafficking prosecutions."
        },

        quiz_prosecution_correct: {
            text: `✅ CORRECT! Federal prosecutors deferred to state authorities.
            
            Despite having evidence for federal trafficking charges, federal prosecutors chose to defer to the state prosecution, which resulted in the controversial 2008 plea deal.
            
            Your understanding of prosecutorial decision-making strengthens your investigation.`,
            image: "federal_courthouse_2019",
            imagePrompt: "Correct understanding of prosecution failures, legal documents verified, investigation success",
            image: "federal_courthouse_2019",
            choices: [
                {
                    text: "Continue investigating institutional decisions",
                    nextScene: "institutional_failure_expose",
                    progressIncrease: 25,
                    evidence: true
                }
            ],
            educationalNote: "Prosecutorial discretion can significantly impact case outcomes."
        },

        quiz_prosecution_wrong: {
            text: `❌ Incorrect. Federal prosecutors actually deferred to state authorities.
            
            This deference resulted in a much more lenient state-level plea deal instead of potential federal trafficking charges.`,
            image: "federal_courthouse_2019",
            imagePrompt: "Misunderstanding of prosecution issues, need for legal clarification, learning opportunity",
            choices: [
                {
                    text: "Learn more about prosecutorial decisions",
                    nextScene: "plea_deal_investigation",
                    progressIncrease: 15
                }
            ],
            educationalNote: "Understanding prosecutorial decisions is key to analyzing case outcomes."
        },

        quiz_prosecution_partial: {
            text: `⚡ Partially correct. Jurisdictional issues were a factor.
            
            While jurisdictional complexity existed, the main issue was federal prosecutors choosing to defer to state authorities despite having stronger federal charges available.`,
            image: "federal_courthouse_2019",
            imagePrompt: "Partial understanding of prosecution problems, some gaps in knowledge, continued learning",
            choices: [
                {
                    text: "Investigate the federal decision-making process",
                    nextScene: "institutional_failure_expose",
                    progressIncrease: 20
                }
            ],
            educationalNote: "Multiple factors often influence complex prosecutorial decisions."
        },

        whistleblower_protection_quiz: {
            text: `QUIZ: WHISTLEBLOWER PROTECTIONS AND JOURNALISM
            
            Understanding source protection is crucial for investigative journalism.
            
            QUESTION: What legal protections exist for government employees who leak classified information to journalists?
            
            Agent Kim's situation requires careful consideration of these protections.`,
            image: "witness_testimony",
            imagePrompt: "FBI agent considering whistleblower protections and legal risks",
            sources: ["Whistleblower Protection Analysis"],
            choices: [
                {
                    text: "Whistleblower Protection Act provides some protection",
                    nextScene: "quiz_whistleblower_correct",
                    progressIncrease: 20,
                    quizAnswer: true,
                    factual: true
                },
                {
                    text: "No legal protections exist for classified leaks",
                    nextScene: "quiz_whistleblower_wrong",
                    progressIncrease: 5,
                    quizAnswer: false
                },
                {
                    text: "First Amendment provides complete protection",
                    nextScene: "quiz_whistleblower_wrong",
                    progressIncrease: 5,
                    quizAnswer: false
                }
            ],
            quizMode: true,
            educationalNote: "Whistleblower protection laws are complex and case-specific."
        },

        quiz_whistleblower_correct: {
            text: `✅ CORRECT! Limited protections exist under Whistleblower Protection Act.
            
            Government employees have some protections when reporting wrongdoing through proper channels, but leaking classified information to media remains legally risky.
            
            Your understanding helps you protect Agent Kim while using her evidence.`,
            image: "witness_testimony",
            imagePrompt: "Correct identification of whistleblower importance, protection protocols understood, journalism ethics",
            image: "witness_testimony",
            choices: [
                {
                    text: "Proceed with careful source protection",
                    nextScene: "source_protection_protocol",
                    progressIncrease: 25,
                    evidence: true
                }
            ],
            educationalNote: "Understanding whistleblower law helps protect sources and journalists."
        },

        quiz_whistleblower_wrong: {
            text: `❌ Incorrect. Some protections exist under the Whistleblower Protection Act.
            
            However, these protections are limited and don't fully cover classified information disclosure to media.`,
            image: "witness_testimony",
            imagePrompt: "Misunderstanding whistleblower role, need for clarification, journalism education moment",
            choices: [
                {
                    text: "Learn more about source protection",
                    nextScene: "source_protection_protocol",
                    progressIncrease: 15
                }
            ],
            educationalNote: "Proper understanding of whistleblower law is essential for journalism."
        },

        preemptive_legal_strike: {
            text: `PREEMPTIVE LEGAL STRIKE
            
            DAY 2 - 6:00 PM
            
            Your legal team files a preemptive lawsuit against the FBI to prevent seizure of the documents, arguing First Amendment protections and public interest.
            
            "We're not waiting for them to come to us," declares lead counsel Patricia Hayes. "We're establishing our legal position first."
            
            The lawsuit claims:
            - Public's right to know about institutional failures
            - No genuine national security threat
            - Documents reveal past crimes, not ongoing operations
            - Victims' rights to have their stories told
            
            Within hours, the story becomes national news. "Newspaper Sues FBI to Protect Epstein Investigation" trends on social media.
            
            Your preemptive strike puts the government on the defensive.`,
            image: "federal_courthouse_2019",
            imagePrompt: "Legal team filing preemptive lawsuit at federal courthouse, dramatic legal action scene",
            sources: ["Preemptive Legal Strategy", "First Amendment Law"],
            choices: [
                {
                    text: "Use legal momentum to accelerate publication",
                    nextScene: "story_centerpiece_decision",
                    progressIncrease: 30,
                    evidence: true
                },
                {
                    text: "Build coalition of media organizations",
                    nextScene: "journalism_alliance",
                    progressIncrease: 25
                },
                {
                    text: "Focus on strengthening evidence while legal battle continues",
                    nextScene: "evidence_documentation",
                    progressIncrease: 28,
                    factual: true
                }
            ],
            educationalNote: "Preemptive legal action can protect journalistic investigations from government interference."
        },

        legal_coalition_formed: {
            text: `LEGAL COALITION FORMED
            
            DAY 2 - 8:00 PM
            
            Your legal strategy creates an unprecedented coalition:
            
            🏛️ COALITION MEMBERS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • 73 Epstein survivors (represented by 12 law firms)
            • New York Times legal team
            • Washington Post media lawyers  
            • ACLU First Amendment division
            • Reporters Committee for Freedom of Press
            • Electronic Frontier Foundation
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            The coalition files multiple supporting briefs, creating a legal wall protecting your investigation.
            
            Maria, speaking for survivors: "For 18 years, they've used 'legal process' to silence us. Now legal process protects our truth."
            
            This coalition represents the most powerful media defense ever assembled for a single story.
            
            Federal judges take notice. The government's case becomes much harder to win.`,
            image: "federal_courthouse_2019",
            imagePrompt: "Massive legal coalition gathering at courthouse, representing press freedom and victim rights",
            sources: ["Media Coalition Strategy", "Victims' Rights Legal Support"],
            choices: [
                {
                    text: "Leverage coalition strength for immediate publication",
                    nextScene: "story_centerpiece_decision",
                    progressIncrease: 35,
                    evidence: true
                },
                {
                    text: "Coordinate unified media strategy",
                    nextScene: "journalism_alliance",
                    progressIncrease: 30
                },
                {
                    text: "Use legal protection to investigate deeper",
                    nextScene: "agent_kim_meeting",
                    progressIncrease: 32,
                    evidence: true
                }
            ],
            educationalNote: "Legal coalitions can provide powerful protection for important journalism."
        },

        public_pressure_campaign: {
            text: `PUBLIC PRESSURE CAMPAIGN
            
            DAY 2 - 10:00 PM
            
            Your legal team launches a strategic public pressure campaign while the court battle continues:
            
            📢 CAMPAIGN ELEMENTS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • Press conferences with victim advocates
            • Social media campaign: #LetSarahPublish
            • Op-eds from press freedom organizations
            • Survivor testimonials about suppression
            • Academic support from journalism schools
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            Within 6 hours:
            - #LetSarahPublish reaches 2.3 million tweets
            - 47 news organizations demand transparency
            - 16 senators call for FBI explanation
            - Public opinion polls show 73% support publication
            
            The FBI finds itself fighting a public relations war it cannot win.
            
            Sometimes democracy works through pressure, not just process.`,
            image: "newsroom_investigation",
            imagePrompt: "Public pressure campaign with social media trending, press conferences, and democratic activism",
            sources: ["Public Pressure Strategy", "Democratic Accountability"],
            choices: [
                {
                    text: "Use public momentum to publish immediately",
                    nextScene: "emergency_publication_final",
                    progressIncrease: 40,
                    evidence: true
                },
                {
                    text: "Channel pressure into legal victory",
                    nextScene: "legal_coalition_formed",
                    progressIncrease: 35
                },
                {
                    text: "Focus pressure on investigation quality",
                    nextScene: "final_verification_process",
                    progressIncrease: 30,
                    factual: true
                }
            ],
            educationalNote: "Public pressure can be a powerful tool for protecting press freedom and accountability."
        },

        story_focus_legal_shield: {
            text: `STORY FOCUS WITH LEGAL SHIELD
            
            DAY 2 - 11:30 PM
            
            With legal protection in place, you can focus entirely on perfecting your investigation. The legal shield allows you to work without fear of interference.
            
            🛡️ LEGAL PROTECTION SECURED:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            ✅ Temporary restraining order against FBI seizure
            ✅ First Amendment protections established
            ✅ Victim rights advocates supporting publication
            ✅ Media coalition providing unified defense
            ✅ Public pressure supporting transparency
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            Free from legal threats, you can now craft the most thorough, accurate, and impactful investigation possible.
            
            Your editor smiles for the first time in days: "Sarah, this is what journalism is supposed to be. Truth protected by law, not threatened by it."
            
            You have 18 hours to publish before any legal challenges can be mounted.
            
            Time to create something historic.`,
            image: "newsroom_investigation",
            imagePrompt: "Journalist working intensely with legal protection, focused and determined, investigation reaching climax",
            sources: ["Legal Shield Protection", "Investigative Excellence Under Protection"],
            choices: [
                {
                    text: "Craft the definitive institutional failure exposé",
                    nextScene: "story_centerpiece_decision",
                    progressIncrease: 40,
                    evidence: true,
                    factual: true
                },
                {
                    text: "Add final prosecutor confession for maximum impact",
                    nextScene: "prosecutor_confession_added",
                    progressIncrease: 35,
                    evidence: true
                },
                {
                    text: "Ensure every fact is bulletproof before publication",
                    nextScene: "final_verification_process",
                    progressIncrease: 38,
                    factual: true
                }
            ],
            educationalNote: "Legal protection allows journalists to focus on investigative excellence without fear."
        },

        flight_logs_analysis: {
            text: `FLIGHT LOGS ANALYSIS - THE LOLITA EXPRESS RECORDS

            You dive into the flight logs from Epstein's private aircraft, infamously dubbed the "Lolita Express":

            ✈️ DOCUMENTED FLIGHTS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            THE AIRCRAFT:
            • Boeing 727-200 (N908JE)
            • Gulfstream II (N986JS)
            • Multiple helicopters for island transport

            FLIGHT LOG FINDINGS:
            • Hundreds of documented flights 1998-2005
            • Passengers included celebrities, politicians, businessmen
            • Regular routes to: New York, Palm Beach, Virgin Islands
            • International flights to Paris, London, Africa

            KEY NAMES APPEARING:
            Multiple high-profile individuals documented as passengers, though presence on flights doesn't prove knowledge of or participation in criminal activity.

            CRITICAL EVIDENCE:
            The logs were subpoenaed in 2008 but many names were redacted. The FBI memo mentions these same logs as evidence of a "larger network."

            Marcus notes: "Flight logs place people at locations. The question is what happened there."
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "flight_logs_evidence",
            imagePrompt: "Aviation flight logs with passenger manifests, private jet records, investigative documents spread on desk",
            sources: [
                "Court-released flight logs (Giuffre v. Maxwell)",
                "FAA records",
                "Deposition testimony"
            ],
            choices: [
                {
                    text: "Cross-reference flight dates with victim testimony",
                    nextScene: "victim_statistics_study",
                    progressIncrease: 15,
                    evidence: true
                },
                {
                    text: "Investigate the timing of the memo vs. Epstein's death",
                    nextScene: "timeline_investigation",
                    progressIncrease: 12,
                    factual: true
                },
                {
                    text: "Focus on Little St. James Island connections",
                    nextScene: "island_investigation",
                    progressIncrease: 12,
                    evidence: true
                }
            ],
            educationalNote: "The flight logs became crucial evidence but also sparked controversy, as some argued that flying on Epstein's planes didn't necessarily imply knowledge of his crimes."
        },

        timeline_investigation: {
            text: `TIMELINE INVESTIGATION - THE SUSPICIOUS SEQUENCE

            You construct a timeline of events leading to Epstein's death:

            📅 CRITICAL TIMELINE:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            JULY 6, 2019:
            Epstein arrested at Teterboro Airport returning from Paris.

            JULY 8, 2019:
            Indicted on sex trafficking charges. Bail denied due to flight risk.

            JULY 15, 2019 (per reconstructed memo):
            FBI memo warns of "high-profile subjects" and recommends immediate evidence seizure.

            JULY 23, 2019:
            Epstein found unconscious in cell with marks on neck. Placed on suicide watch.

            JULY 29, 2019:
            Removed from suicide watch after 6 days.

            AUGUST 9, 2019:
            Court unseals 2,000 pages of documents naming powerful individuals.

            AUGUST 10, 2019:
            Epstein found dead in cell. Both guards allegedly asleep. Cameras malfunctioned.

            THE QUESTIONS:
            • Why was he removed from suicide watch?
            • Why did cameras fail that specific night?
            • Why were guards not checking regularly?
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "timeline_evidence",
            imagePrompt: "Investigation timeline board with dates and events connected by red string, suspicious pattern emerging",
            sources: [
                "Bureau of Prisons records",
                "Court filing dates",
                "Medical examiner report",
                "DOJ Inspector General investigation"
            ],
            choices: [
                {
                    text: "Investigate the security failures in detail",
                    nextScene: "security_failures_deep",
                    progressIncrease: 15,
                    factual: true
                },
                {
                    text: "Examine the document release timing",
                    nextScene: "document_release_analysis",
                    progressIncrease: 12,
                    evidence: true
                },
                {
                    text: "Review the medical examiner controversy",
                    nextScene: "medical_examiner_controversy",
                    progressIncrease: 14,
                    factual: true
                }
            ],
            educationalNote: "The timeline raised legitimate questions about the failure of multiple security protocols simultaneously on the night documents naming powerful people were released."
        },

        island_investigation: {
            text: `LITTLE ST. JAMES ISLAND - THE PRIVATE RETREAT

            You investigate Epstein's private Caribbean island:

            🏝️ THE ISLAND:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            LOCATION:
            Little St. James Island, U.S. Virgin Islands
            Purchased by Epstein in 1998 for $7.95 million

            DOCUMENTED STRUCTURES:
            • Main residence complex
            • Guest houses
            • Mysterious "temple" building with blue dome
            • Sundial structure
            • Underground facilities (purpose unknown)

            WITNESS TESTIMONY:
            Multiple victims testified to being transported to the island where abuse occurred. The isolation made escape virtually impossible.

            FBI RAID:
            FBI searched the island after Epstein's 2019 arrest but critics questioned why it took so long and whether evidence had been destroyed.

            SATELLITE IMAGERY:
            Observers noted construction and demolition activity on the island after Epstein's arrest.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "island_investigation",
            imagePrompt: "Aerial view of private island with mysterious structures, Caribbean setting, investigation evidence",
            sources: [
                "Property records",
                "Victim testimony",
                "FBI search documentation"
            ],
            choices: [
                {
                    text: "Continue examining victim testimony",
                    nextScene: "victim_statistics_study",
                    progressIncrease: 12,
                    evidence: true
                },
                {
                    text: "Investigate the Maxwell connection",
                    nextScene: "maxwell_investigation",
                    progressIncrease: 15,
                    evidence: true
                }
            ],
            educationalNote: "The island became a symbol of how wealth can enable crimes hidden from public view. Its isolation facilitated Epstein's criminal enterprise."
        },

        security_failures_deep: {
            text: `SECURITY FAILURES - DETAILED ANALYSIS

            You investigate the multiple simultaneous failures on August 10, 2019:

            🚨 THE FAILURES:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            CAMERA MALFUNCTION:
            Two cameras monitoring Epstein's cell area malfunctioned or had footage that was "unusable." The FBI later found some footage was corrupted beyond recovery.

            GUARD MISCONDUCT:
            Both guards assigned to check on Epstein every 30 minutes:
            • Falsified records showing checks occurred
            • Admitted to sleeping and browsing internet
            • Failed to check for approximately 8 hours

            CELLMATE REMOVED:
            Epstein's cellmate was transferred out the day before his death, leaving him alone despite recent suicide attempt.

            SUICIDE WATCH REMOVAL:
            Removed from suicide watch after only 6 days, despite standard protocols calling for longer observation.

            UNDERSTAFFING:
            MCC was severely understaffed, with mandatory overtime creating exhausted guards.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "security_analysis",
            imagePrompt: "Prison security cameras, guard stations, investigation into multiple failures, incident report",
            sources: [
                "DOJ Inspector General Report",
                "Guard deposition testimony",
                "Bureau of Prisons internal investigation"
            ],
            choices: [
                {
                    text: "Examine the medical examiner controversy",
                    nextScene: "medical_examiner_controversy",
                    progressIncrease: 14,
                    factual: true
                },
                {
                    text: "Continue building the story",
                    nextScene: "victim_statistics_study",
                    progressIncrease: 10,
                    evidence: true
                }
            ],
            educationalNote: "The concentration of failures on one night remains unprecedented. Both guards later pleaded guilty to falsifying records."
        },

        document_release_analysis: {
            text: `DOCUMENT RELEASE TIMING - THE COINCIDENCE

            You analyze the timing of document releases:

            📄 THE PATTERN:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            AUGUST 9, 2019 - 5:00 PM:
            Court orders release of 2,000 pages of previously sealed documents from the Giuffre v. Maxwell case.

            CONTENTS OF DOCUMENTS:
            • Names of powerful individuals
            • Detailed victim accounts
            • Flight log references
            • Employment records

            AUGUST 10, 2019 - EARLY MORNING:
            Epstein found dead approximately 12 hours after document release.

            THE QUESTION:
            Was this timing coincidental, or did the document release trigger action?

            STATISTICAL ANALYSIS:
            The probability of multiple security failures occurring simultaneously on the same night as major document release is statistically improbable but not impossible.

            Marcus observes: "Correlation isn't causation, but the timing demands scrutiny."
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "document_timing",
            imagePrompt: "Court documents with timestamps, calendar showing critical dates, statistical analysis",
            sources: [
                "Court docket records",
                "Document release timestamps",
                "Bureau of Prisons incident logs"
            ],
            choices: [
                {
                    text: "Continue investigating security failures",
                    nextScene: "security_failures_deep",
                    progressIncrease: 12,
                    factual: true
                },
                {
                    text: "Focus on the victim testimony in documents",
                    nextScene: "victim_statistics_study",
                    progressIncrease: 12,
                    evidence: true
                }
            ],
            educationalNote: "While suspicious timing alone doesn't prove conspiracy, it legitimately raised questions that warranted investigation."
        },

        medical_examiner_controversy: {
            text: `MEDICAL EXAMINER CONTROVERSY - THE DISPUTED FINDINGS

            You investigate the disputed autopsy findings:

            🔬 THE AUTOPSY:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            OFFICIAL RULING:
            New York City Chief Medical Examiner Dr. Barbara Sampson ruled the death a suicide by hanging.

            DISSENTING OPINION:
            Dr. Michael Baden (hired by Epstein's brother):
            • Multiple neck fractures more consistent with homicide
            • Hyoid bone break rare in suicidal hanging
            • Bruising patterns warranted further investigation

            THE DEBATE:
            • Hyoid bone breaks occur in ~25% of hangings over age 50
            • Position of fractures was unusual
            • Both homicide and suicide remain medically possible

            BROTHER'S STATEMENT:
            Mark Epstein: "I don't accept the finding. Too many unanswered questions."

            THE LIMITATION:
            Without independent investigation access, definitive conclusions remain impossible.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "autopsy_controversy",
            imagePrompt: "Medical examiner documents, forensic analysis, disputed findings, professional disagreement",
            sources: [
                "NYC Medical Examiner official report",
                "Dr. Michael Baden analysis",
                "Forensic pathology expert opinions"
            ],
            choices: [
                {
                    text: "Focus on what we can verify - the victim stories",
                    nextScene: "victim_statistics_study",
                    progressIncrease: 15,
                    evidence: true,
                    factual: true
                },
                {
                    text: "Investigate the broader institutional failures",
                    nextScene: "institutional_failure_investigation",
                    progressIncrease: 12,
                    factual: true
                }
            ],
            educationalNote: "The autopsy controversy illustrates how reasonable experts can disagree on forensic evidence, making definitive conclusions difficult."
        },

        maxwell_investigation: {
            text: `GHISLAINE MAXWELL - THE ALLEGED ACCOMPLICE

            You investigate Epstein's longtime associate:

            👤 GHISLAINE MAXWELL:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            BACKGROUND:
            • Daughter of media mogul Robert Maxwell
            • Met Epstein in early 1990s
            • Described as his "girlfriend" then "best friend"
            • Moved in elite social circles globally

            ALLEGATIONS:
            Multiple victims testified Maxwell:
            • Recruited young girls for Epstein
            • Participated in abuse
            • Managed day-to-day operations
            • Normalized the exploitation

            LEGAL OUTCOME:
            • Arrested July 2020
            • Convicted December 2021 on multiple counts
            • Sentenced to 20 years in prison
            • Currently appealing conviction

            THE BROADER NETWORK:
            Victims testified that Maxwell was part of a larger system designed to identify, groom, and exploit young women.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "maxwell_investigation",
            imagePrompt: "Investigation board with connections, court documents, convicted accomplice case files",
            sources: [
                "United States v. Ghislaine Maxwell",
                "Victim testimony from trial",
                "Court documents and sentencing"
            ],
            choices: [
                {
                    text: "Continue building the comprehensive story",
                    nextScene: "victim_statistics_study",
                    progressIncrease: 15,
                    evidence: true
                },
                {
                    text: "Investigate institutional failures that enabled the crimes",
                    nextScene: "institutional_failure_investigation",
                    progressIncrease: 12,
                    factual: true
                }
            ],
            educationalNote: "Maxwell's conviction proved that Epstein did not act alone and that accomplices could be held accountable even after his death."
        },

        institutional_failure_investigation: {
            text: `INSTITUTIONAL FAILURES - HOW THE SYSTEM FAILED

            You investigate how multiple institutions failed to stop Epstein:

            🏛️ THE FAILURES:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            JUSTICE SYSTEM (2008):
            • Sweetheart plea deal allowed Epstein to serve 13 months
            • Work release let him leave jail 12 hours/day
            • Victims not notified as required by law
            • Federal charges dropped

            LAW ENFORCEMENT:
            • Palm Beach Police built strong case in 2005
            • Federal prosecutors undercut local efforts
            • Alexander Acosta later admitted to "unusual" handling

            PRISON SYSTEM (2019):
            • Failed to protect high-profile prisoner
            • Multiple protocol violations
            • Understaffing and poor oversight

            SOCIAL INSTITUTIONS:
            • Elite circles protected and enabled
            • Donations to institutions bought access
            • Warnings about Epstein were ignored

            The pattern: wealth and connections override accountability.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "institutional_failure",
            imagePrompt: "Broken scales of justice, failed institutions, systemic corruption visualization",
            sources: [
                "Julie K. Brown, 'Perversion of Justice'",
                "DOJ OPR Report on 2008 case",
                "Congressional investigations"
            ],
            choices: [
                {
                    text: "Focus on the victim stories that matter most",
                    nextScene: "victim_statistics_study",
                    progressIncrease: 15,
                    evidence: true,
                    factual: true
                }
            ],
            educationalNote: "The Epstein case revealed systemic failures across multiple institutions, raising questions about justice for the wealthy and powerful."
        },

        // ============================================
        // ALTERNATIVE ENDINGS - ADDED FOR DEPTH
        // ============================================

        story_killed_ending: {
            text: `THE STORY THAT NEVER WAS

            DAY 3 - 6:00 AM

            You stare at your screen in disbelief. The message from the publisher is final:

            📧 FROM: Publisher's Office
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            "After careful consideration of legal exposure and
            advertiser concerns, we have decided not to proceed
            with the Epstein investigation piece. All materials
            are to be returned to legal custody immediately.

            This decision is final."
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            Marcus slams his desk. "Eighteen years those victims waited. And we're just... giving up?"

            Maria, who stayed through the night, stands slowly. Her face shows no surprise - only the weary recognition of someone who has seen this before.

            "This is what always happens," she says quietly. "Money wins. It always wins."

            Agent Kim calls you an hour later. "I heard. I'm sorry, Sarah. I really thought this time would be different."

            You look at the stack of evidence on your desk - documents that prove systematic exploitation, institutional failure, and deliberate cover-up. All of it will be sealed away again.

            But as you pack up, you make a decision. You copy the key files to a secure location. Someday, somehow, this story will be told.

            SIX MONTHS LATER:
            Another journalist at another paper receives a mysterious package...

            ENDING: THE CYCLE CONTINUES
            The truth was suppressed, but not destroyed. The fight for justice continues.`,
            image: "story_killed",
            imagePrompt: "Dejected journalist in empty newsroom at dawn, rejected story, documents being packed away, bittersweet ending",
            sources: ["Many real investigations have been killed by institutional pressure"],
            choices: [
                {
                    text: "Try again - Start a new investigation",
                    nextScene: "intro",
                    progressIncrease: 0
                },
                {
                    text: "Reflect on what went wrong",
                    nextScene: "story_killed_reflection",
                    progressIncrease: 0
                }
            ],
            educationalNote: "Many important investigations have been killed by institutional pressure. Julie K. Brown's Epstein investigation was initially rejected by other outlets before the Miami Herald published it."
        },

        story_killed_reflection: {
            text: `REFLECTION: WHAT WENT WRONG?

            Looking back, you analyze where the investigation faltered:

            📋 CRITICAL ASSESSMENT:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            POSSIBLE FACTORS:
            • Not enough verified sources before pushing forward
            • Legal team wasn't brought in early enough
            • Publisher wasn't kept informed of progress
            • Rushed timeline created vulnerability to pressure
            • Didn't build enough public support first

            LESSONS FOR FUTURE:
            • Build coalitions before confronting power
            • Document everything meticulously
            • Have legal protection in place early
            • Consider alternative publication routes
            • Never rely on a single outlet
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            Maria's parting words echo: "The truth doesn't die. It just waits for braver people."

            Maybe next time, you'll be ready.`,
            image: "reflection_ending",
            imagePrompt: "Journalist reviewing case files alone, learning from failure, determination to try again",
            sources: ["Lessons from suppressed investigations"],
            choices: [
                {
                    text: "Start fresh with lessons learned",
                    nextScene: "intro",
                    progressIncrease: 0
                }
            ],
            educationalNote: "Understanding why investigations fail helps journalists succeed in future attempts."
        },

        partial_victory_ending: {
            text: `A PARTIAL TRUTH

            DAY 3 - 11:00 PM

            You publish, but not the story you wanted. Legal concerns forced massive cuts:

            📰 WHAT GOT PUBLISHED:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            ✅ Victim statistics (1,000+ affected)
            ✅ General timeline of failures
            ✅ 2008 plea deal criticism
            ❌ Specific names of enablers (cut)
            ❌ Agent Kim's testimony (cut - too risky)
            ❌ Prosecutor confession (cut - unverified)
            ❌ Internal FBI memos (cut - classified)
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            The response is muted. Without the explosive revelations, it reads like a summary of existing reporting.

            Maria calls you, disappointed but understanding: "It's something. It's more than we had yesterday. But Sarah... it's not enough."

            Agent Kim is more blunt: "You named the problem but not the people who caused it. They'll wait this out."

            THREE MONTHS LATER:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • Minor congressional inquiry launched
            • Two low-level officials resign
            • Victim compensation fund discussed, not created
            • Key players remain untouched
            • Public attention moves on
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            You kept your job. You didn't break any laws. But lying in bed at night, you wonder: was playing it safe the right choice?

            ENDING: THE COMPROMISE
            Sometimes partial truth is all the system allows.`,
            image: "partial_victory",
            imagePrompt: "Newspaper with redacted headlines, mixed emotions, partial justice achieved, bittersweet outcome",
            sources: ["Many investigations result in partial revelations"],
            choices: [
                {
                    text: "Accept the outcome and move on",
                    nextScene: "intro",
                    progressIncrease: 0
                },
                {
                    text: "Plan to leak the rest anonymously",
                    nextScene: "anonymous_leak_ending",
                    progressIncrease: 10
                }
            ],
            educationalNote: "Many investigations result in compromised publications due to legal, institutional, or political pressure."
        },

        anonymous_leak_ending: {
            text: `THE ANONYMOUS LEAK

            ONE YEAR LATER

            You couldn't let it go. The full story deserved to be told.

            Using secure channels and encrypted communication, you anonymously provided the complete evidence to three international news organizations simultaneously.

            📡 THE DISTRIBUTED TRUTH:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • The Guardian (UK) - FBI memo analysis
            • Der Spiegel (Germany) - Financial records
            • Le Monde (France) - Victim testimonies
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            By distributing across jurisdictions, no single government could suppress it all.

            The story explodes globally. Congressional hearings follow. Real accountability begins.

            No one knows it was you. Your career continues. But every time you see a headline about Epstein reforms, you allow yourself a small, private smile.

            Maria texts you from an unknown number: "I don't know who did this. But whoever they are... thank you. We finally got heard."

            You delete the message and go back to work.

            ENDING: THE SHADOW JOURNALIST
            Sometimes the truth needs to travel in darkness to reach the light.

            Evidence Collected: Maximum | Impact: Historic | Recognition: None

            And that's exactly how you wanted it.`,
            image: "anonymous_leak",
            imagePrompt: "Journalist in shadows watching international news coverage, anonymous hero, justice achieved quietly",
            sources: ["Anonymous leaks have driven major investigations throughout history"],
            choices: [
                {
                    text: "Start a new investigation",
                    nextScene: "intro",
                    progressIncrease: 0
                }
            ],
            educationalNote: "Anonymous sources and leakers have been crucial to major investigations, from Pentagon Papers to Panama Papers."
        },

        sources_protected_ending: {
            text: `PROTECTING THE SOURCES

            DAY 3 - 2:00 AM

            The FBI raid comes faster than expected. They have a warrant for everything.

            But you were ready.

            📋 WHAT YOU PROTECTED:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            ✅ All source identities encrypted and destroyed
            ✅ Agent Kim's involvement completely hidden
            ✅ Maria relocated with victim services
            ✅ Detective Rodriguez's files secured
            ✅ Anonymous caller never identified
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            The FBI seizes your documents, your computers, everything. They find nothing that identifies your sources.

            You spend 48 hours in custody for contempt, refusing to reveal your sources. Your lawyer gets you released.

            The story never publishes. But no one who trusted you gets hurt.

            SIX MONTHS LATER:

            Agent Kim still has her job. Maria is in witness protection, building a new life. The anonymous caller remains free.

            And one day, a young journalist approaches you at a conference:

            "Ms. Chen? I heard what you did. You protected your sources when it cost you everything. I want to learn from you."

            You smile. The story wasn't told this time. But you've inspired the next generation of journalists who might tell it.

            ENDING: THE PROTECTOR
            Some victories are measured in the people you save, not the stories you publish.`,
            image: "source_protection_ending",
            imagePrompt: "Journalist being led away by FBI but looking peaceful, sources safe, ethical victory",
            sources: ["Journalists have gone to jail to protect sources throughout history"],
            choices: [
                {
                    text: "Train the next generation",
                    nextScene: "mentor_ending",
                    progressIncrease: 0
                },
                {
                    text: "Start a new investigation",
                    nextScene: "intro",
                    progressIncrease: 0
                }
            ],
            educationalNote: "Source protection is a cornerstone of investigative journalism. Judith Miller spent 85 days in jail protecting a source."
        },

        mentor_ending: {
            text: `THE MENTOR'S LEGACY

            FIVE YEARS LATER

            You never published the Epstein story. But you did something more important.

            📚 YOUR LEGACY:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • Founded investigative journalism fellowship
            • Trained 47 young reporters in source protection
            • Wrote textbook on institutional investigation
            • Three of your students won Pulitzer Prizes
            • One of them finally published the full Epstein story
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            The student who published it dedicated her piece to you:

            "To Sarah Chen, who taught me that protecting the truth sometimes means protecting the people who carry it."

            Maria, now an advocate for trafficking survivors, speaks at your fellowship graduation every year. Agent Kim, retired, consults on your courses.

            The system that tried to silence you? You built an army of journalists to fight it.

            ENDING: THE TEACHER
            The greatest stories are sometimes the ones we enable others to tell.

            "I didn't tell the truth. I taught the truth." - Sarah Chen`,
            image: "mentor_ending",
            imagePrompt: "Older journalist teaching young reporters, legacy of journalism, classroom with investigation boards",
            sources: ["Many legendary journalists are remembered for who they mentored"],
            choices: [
                {
                    text: "Start a new investigation",
                    nextScene: "intro",
                    progressIncrease: 0
                }
            ],
            educationalNote: "Many legendary journalists are remembered not just for their stories, but for the reporters they trained."
        },

        rushed_publication_ending: {
            text: `THE RUSHED PUBLICATION

            DAY 2 - 11:59 PM

            Against advice, you publish before verification is complete. The pressure was too intense. The deadline too close.

            ⚠️ THE CONSEQUENCES:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            WEEK 1:
            • Story goes viral - 5 million views
            • Victims celebrate - finally being heard
            • Praise floods in from advocates

            WEEK 2:
            • Lawyers find three factual errors
            • One witness recants under pressure
            • Subjects threaten defamation suits

            WEEK 3:
            • Paper issues corrections
            • Credibility questioned
            • "Fake news" narrative takes hold

            MONTH 2:
            • Two lawsuits filed against paper
            • Your editor is fired
            • Story becomes cautionary tale
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            The core facts were right. 1,000+ victims. Institutional failure. All true.

            But the small errors gave enemies ammunition. The story that should have changed everything became "that disputed article."

            Maria calls you, crying: "They're using your mistakes to call us liars. Again."

            You learned the hardest lesson in journalism: being mostly right isn't enough.

            ENDING: THE CAUTIONARY TALE
            Speed killed the story that accuracy could have saved.`,
            image: "rushed_publication",
            imagePrompt: "Newspaper corrections, journalist head in hands, credibility destroyed, lessons learned hard way",
            sources: ["Rushed publications have damaged important investigations"],
            choices: [
                {
                    text: "Learn from mistakes - try again",
                    nextScene: "intro",
                    progressIncrease: 0
                },
                {
                    text: "Reflect on what went wrong",
                    nextScene: "rushed_reflection",
                    progressIncrease: 0
                }
            ],
            educationalNote: "The Rolling Stone UVA story and other rushed publications show how errors can undermine true narratives."
        },

        rushed_reflection: {
            text: `REFLECTION: THE COST OF SPEED

            📋 POST-MORTEM ANALYSIS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            THE ERRORS:
            1. One date was wrong by two weeks
            2. A financial figure was miscalculated
            3. One quote was paraphrased inaccurately

            None of these errors affected the core truth. But they gave critics ammunition to dismiss everything.

            THE LESSON:
            "Your enemies don't need you to be wrong about everything. They just need you to be wrong about something."

            WHAT SHOULD HAVE HAPPENED:
            • Take the extra 24 hours
            • Triple-check every fact
            • Have legal review everything
            • Let critics find nothing
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            The victims deserved better. They deserved a story that couldn't be attacked.

            Next time, you'll be ready.`,
            image: "rushed_reflection",
            imagePrompt: "Journalist studying mistakes, fact-checking guides, determination to improve",
            sources: ["Journalism post-mortems and ethics reviews"],
            choices: [
                {
                    text: "Start again with lessons learned",
                    nextScene: "intro",
                    progressIncrease: 0
                }
            ],
            educationalNote: "The best investigative journalists are meticulous because they know their enemies will exploit any error."
        }
    }
};

window.EpsteinStoryExpanded = EpsteinStoryExpanded;
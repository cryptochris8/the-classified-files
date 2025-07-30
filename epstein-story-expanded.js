const EpsteinStoryExpanded = {
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
                }
            ],
            educationalNote: "This fictional 72-hour deadline creates dramatic tension while you explore real facts about the case."
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

27 hours remain.`,
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
                    text: "Quiz: Test your complete case knowledge",
                    nextScene: "comprehensive_case_quiz",
                    progressIncrease: 35,
                    quizMode: true
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

Your editor whispers: "Sarah, with this support, we might not just publish a story. We might change the law."`,
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
            Evidence Collected: ${this.gameState.evidenceCount}
            Knowledge Score: ${this.gameState.knowledgeScore}/${this.gameState.totalQuestions}
            Correct Answers: ${this.gameState.correctAnswers}
            Scenes Explored: ${this.gameState.visitedScenes.size}
            Badges Earned: ${this.gameState.badges.length}
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
        }
    }
};

window.EpsteinStoryExpanded = EpsteinStoryExpanded;
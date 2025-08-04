const DiddyCaseStoryExpanded = {
    sealed: false,
    releaseDate: null,
    scenes: {
        intro: {
            text: `THE CLASSIFIED FILES: DIDDY INVESTIGATION
            
            DAY 1 - TUESDAY, 3:47 AM
            
Your phone buzzes you awake. Unknown number. As an investigative journalist covering the dark underbelly of the entertainment industry, you've learned to answer every call.

"Alex Rivera? This is Agent Sarah Chen, Homeland Security Investigations. We met briefly during the Maxwell case coverage."

You sit up in bed, instantly alert. HSI doesn't call journalists at 4 AM unless something massive is happening.

"Agent Chen? What's going on?"

"Sean Combs was arrested three hours ago in Manhattan. Federal indictment unsealed at dawn. This isn't just another celebrity scandal, Rivera. We've been building this RICO case for over a year. The scope... it's bigger than anything we've seen in entertainment."

Through your apartment window, you see news vans already racing through the empty streets toward Lower Manhattan.

"There's something else," Chen continues, her voice dropping. "Someone's been leaking information about our investigation for months. We think there's a coordinated effort to discredit key witnesses. Watch your back."

The line goes dead. You check your secure inbox - a encrypted message from an unknown sender:

"The indictment is just the beginning. The real evidence is buried deeper. Meeting spot: Federal Plaza, 6 AM. Come alone. -A Friend"

Your hands shake as you realize this case will either make your career... or end it.`,
            image: "federal_courthouse_morning.png",
            imagePrompt: "Federal courthouse in Manhattan with journalists gathering, morning light, serious investigative atmosphere",
            sources: ["SDNY Press Release", "Federal Indictment", "Court Records"],
            choices: [
                {
                    text: "Study the federal indictment document first",
                    nextScene: "indictment_analysis",
                    progressIncrease: 15,
                    factual: true,
                    evidence: true
                },
                {
                    text: "Meet the mysterious contact at Federal Plaza first",
                    nextScene: "mysterious_contact_meeting",
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Examine the racketeering conspiracy allegations",
                    nextScene: "racketeering_investigation",
                    progressIncrease: 18,
                    factual: true,
                    evidence: true
                },
                {
                    text: "Test your knowledge of federal trafficking laws",
                    nextScene: "legal_knowledge_quiz",
                    progressIncrease: 8,
                    quizMode: true
                },
                {
                    text: "Analyze the seizure warrant and evidence collected 🔍",
                    nextScene: "evidence_analysis",
                    progressIncrease: 20,
                    evidence: true,
                    miniGame: {
                        type: "evidence_analysis",
                        title: "Federal Evidence Review",
                        description: "Examine the evidence seized during the federal raids to understand the scope of the investigation."
                    }
                }
            ],
            educationalNote: "This case involves real federal charges filed in September 2024 by the U.S. Attorney's Office for the Southern District of New York."
        },

        mysterious_contact_meeting: {
            text: `FEDERAL PLAZA RENDEZVOUS
            
            DAY 1 - 6:00 AM
            
            The early morning air is crisp as you approach Federal Plaza. HSI and FBI agents move purposefully through the building, their faces grim. This is clearly the epicenter of something huge.

            A figure in a dark coat approaches from the shadows near the courthouse steps. Female, mid-40s, carrying a manila envelope marked "CONFIDENTIAL."

            "Rivera? I'm Dr. Lisa Martinez, former entertainment industry consultant. I've been documenting what I witnessed for years, waiting for someone with courage to investigate."

            She hands you the envelope. Inside: photographs, financial documents, and what appears to be pages from a private investigator's report.

            "The federal indictment is solid - everything in there is true. But there's more they couldn't include. Corporate shell companies, international money movements, a network that spans multiple industries."

            Her phone buzzes. She checks it and her face goes pale.

            "They know we're meeting. I have to go. Those documents are copies - I kept the originals hidden. The real story isn't just about one person, Rivera. It's about how power protects power."

            She disappears into the crowd of federal employees entering the building. You're left holding evidence that could blow this case wide open... or make you a target.

            Agent Chen appears beside you. "I see you met our star witness. She's been under federal protection for six months. What she gave you... use it carefully."`,
            image: "federal_plaza_dawn.png",
            imagePrompt: "Federal Plaza at dawn with mysterious figures meeting, HSI building in background, tense atmosphere",
            sources: ["Witness Protection Program", "Federal Investigation Files", "Confidential Sources"],
            choices: [
                {
                    text: "Examine the secret documents before reading the indictment",
                    nextScene: "secret_documents_analysis",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Study the federal indictment with this new context",
                    nextScene: "indictment_analysis",
                    progressIncrease: 18,
                    factual: true,
                    evidence: true
                },
                {
                    text: "Follow up with Agent Chen about witness protection",
                    nextScene: "agent_chen_briefing",
                    progressIncrease: 15,
                    evidence: true
                },
                {
                    text: "Investigate the corporate shell companies mentioned",
                    nextScene: "corporate_investigation",
                    progressIncrease: 22,
                    evidence: true
                }
            ],
            educationalNote: "While this meeting is fictional, federal investigations often rely on protected witnesses and confidential sources."
        },

        secret_documents_analysis: {
            text: `CONFIDENTIAL DOCUMENTS REVEALED
            
            DAY 1 - 7:30 AM - SECURE LOCATION
            
            You've found a quiet corner in a 24-hour diner near the courthouse to examine Dr. Martinez's documents. What you see makes your blood run cold:

            📄 PRIVATE INVESTIGATOR REPORT - EXCERPTS
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            "Subject: Sean Combs Enterprise Investigation
            Duration: 2019-2024
            Client: [REDACTED - Federal Agency]
            
            FINANCIAL NETWORKS IDENTIFIED:
            - 23 shell companies across 7 states
            - Bermuda and Cayman accounts (estimated $47M)
            - Property purchases using intermediary LLCs
            - Cash transactions exceeding $10M annually
            
            PATTERN OF BEHAVIOR DOCUMENTED:
            - Consistent interstate transportation activities
            - Multiple properties used for same purposes
            - Electronic surveillance evidence (court authorized)
            - Witness statements corroborating federal charges"
            
            A handwritten note in the margin reads: "This is just what we could prove. The real network goes deeper."

            Your phone buzzes - text from unknown number: "Stop digging or join the others who disappeared. Last warning."

            Dr. Martinez was right. This isn't just about the federal charges - it's about a system designed to hide the truth. But now you have documentation that bridges the gap between what's public and what's buried.`,
            image: "confidential_documents.png",
            imagePrompt: "Secret documents spread on diner table, redacted pages, coffee cup, tense investigative atmosphere",
            sources: ["Private Investigation Files", "Financial Records", "Federal Surveillance Reports"],
            choices: [
                {
                    text: "Cross-reference with the official federal indictment",
                    nextScene: "indictment_analysis",
                    progressIncrease: 25,
                    factual: true,
                    evidence: true
                },
                {
                    text: "Investigate the threatening message sender",
                    nextScene: "threat_investigation",
                    progressIncrease: 15,
                    evidence: true
                },
                {
                    text: "Focus on the shell company financial network",
                    nextScene: "financial_investigation",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Contact Dr. Martinez about the disappeared investigators",
                    nextScene: "disappeared_investigators",
                    progressIncrease: 18,
                    evidence: true
                }
            ],
            educationalNote: "Financial networks and shell companies are common in federal RICO investigations, though specific details here are dramatized."
        },

        indictment_analysis: {
            text: `FEDERAL INDICTMENT ANALYSIS
            
            DAY 1 - 10:30 AM
            
            You've obtained a copy of the unsealed federal indictment. The document is extensive - 14 pages outlining serious federal charges:

            📄 UNITED STATES v. SEAN COMBS
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            COUNT 1: Racketeering Conspiracy (RICO)
            - Alleged criminal enterprise from 2008 to present
            - Pattern of criminal activity including sex trafficking, forced labor, kidnapping, arson, bribery, obstruction of justice
            
            COUNT 2: Sex Trafficking by Force, Fraud, or Coercion
            - Multiple victims over extended period
            - Interstate transportation for commercial sex acts
            
            COUNT 3: Transportation to Engage in Prostitution
            - Federal Mann Act violations
            - Cross-state transportation allegations
            
            The indictment describes what it calls "Freak Offs" - alleged elaborate sexual performances that were arranged, directed, and often recorded.
            
            Your legal source explains: "RICO charges are extremely serious. The government has to prove an ongoing criminal enterprise with a pattern of racketeering activity."`,
            image: "federal_indictment_document.png",
            imagePrompt: "Official federal indictment document with Department of Justice seal, legal papers spread on desk",
            sources: ["U.S. v. Sean Combs Indictment", "SDNY Court Filings", "Federal Criminal Code"],
            choices: [
                {
                    text: "Investigate the timeline of alleged criminal activity (2008-2024)",
                    nextScene: "timeline_investigation",
                    progressIncrease: 15,
                    factual: true,
                    evidence: true
                },
                {
                    text: "Research similar RICO cases in entertainment industry",
                    nextScene: "rico_precedents",
                    progressIncrease: 12,
                    factual: true
                },
                {
                    text: "Interview legal experts about federal trafficking laws",
                    nextScene: "expert_legal_analysis",
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Examine the arrest and detention details",
                    nextScene: "arrest_details",
                    progressIncrease: 10,
                    factual: true
                }
            ],
            educationalNote: "These charges represent actual federal counts filed by federal prosecutors in the Southern District of New York."
        },

        timeline_investigation: {
            text: `CRIMINAL TIMELINE INVESTIGATION
            
            DAY 1 - 2:15 PM
            
            You've spent hours mapping out the alleged timeline from the federal charges:

            📅 ALLEGED CRIMINAL ACTIVITY TIMELINE
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            2008: Beginning of alleged racketeering conspiracy
            - Formation of purported criminal enterprise
            - Initial pattern of alleged illegal activities
            
            2009-2018: Expansion of alleged operations
            - Multiple alleged victims across various locations
            - Interstate transportation allegations
            - Alleged use of businesses to facilitate crimes
            
            2019-2023: Continued alleged criminal activity
            - More sophisticated alleged operations
            - Increased alleged use of technology and recordings
            
            2024: Federal investigation culminates
            - March/September: Federal raids on properties
            - September 16: Arrest and indictment
            
            A former federal prosecutor tells you: "Sixteen years is a long alleged conspiracy. The government needs to prove continuity and that this was an ongoing criminal enterprise, not isolated incidents."
            
            You notice the charges span multiple presidential administrations and changes in federal law enforcement priorities.`,
            image: "investigation_timeline_board.png",
            imagePrompt: "Detective-style timeline board with photos, documents, and red string connections showing chronological investigation",
            sources: ["Federal Indictment", "DOJ Timeline", "Court Records"],
            choices: [
                {
                    text: "Investigate the alleged victims and their testimonies",
                    nextScene: "victim_testimony_analysis",
                    progressIncrease: 20,
                    factual: true,
                    evidence: true
                },
                {
                    text: "Examine the business empire and alleged money laundering",
                    nextScene: "business_empire_investigation",
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Study the federal raids and evidence seized",
                    nextScene: "federal_raids_analysis",
                    progressIncrease: 15,
                    factual: true,
                    evidence: true
                },
                {
                    text: "Analyze the legal defense strategy",
                    nextScene: "defense_strategy_analysis",
                    progressIncrease: 12
                }
            ],
            educationalNote: "The timeline spans 2008-2024 according to the federal indictment, representing one of the longest alleged criminal conspiracies in entertainment industry history."
        },

        federal_raids_analysis: {
            text: `FEDERAL RAIDS INVESTIGATION
            
            DAY 2 - 11:00 AM
            
            You've interviewed federal law enforcement sources about the coordinated raids that preceded the arrest:

            🏠 FEDERAL SEARCH OPERATIONS
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            MARCH 2024: Initial Federal Raids
            - Los Angeles mansion searched by federal agents
            - Miami property simultaneously raided
            - Homeland Security Investigations (HSI) led operation
            
            EVIDENCE ALLEGEDLY SEIZED:
            - Electronic devices and computers
            - Financial records and documents
            - Communications equipment
            - Alleged recordings mentioned in indictment
            - Business records spanning multiple years
            
            SEPTEMBER 2024: Arrest Operation
            - Manhattan hotel arrest by federal agents
            - Additional search warrants executed
            - Coordination between multiple federal agencies
            
            A federal law enforcement source explains: "These weren't random raids. This represents months, maybe years of investigation. The simultaneous nature suggests they were worried about evidence destruction."
            
            The scope suggests federal investigators built their case methodically, following financial trails and gathering electronic evidence before making arrests.`,
            image: "federal_raid_evidence.png",
            imagePrompt: "Federal agents processing evidence boxes, official HSI badges visible, professional law enforcement operation",
            sources: ["HSI Press Releases", "Federal Search Warrants", "DOJ Statements"],
            choices: [
                {
                    text: "Examine the electronic evidence and digital forensics",
                    nextScene: "digital_evidence_analysis",
                    progressIncrease: 22,
                    evidence: true,
                    factual: true
                },
                {
                    text: "Investigate the financial records and money trail",
                    nextScene: "financial_investigation",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Study the multi-agency coordination of the investigation",
                    nextScene: "federal_agency_coordination",
                    progressIncrease: 15,
                    factual: true
                },
                {
                    text: "Analyze the legal implications of the seized evidence",
                    nextScene: "evidence_legal_analysis",
                    progressIncrease: 18,
                    evidence: true
                }
            ],
            educationalNote: "Federal raids in March and September 2024 were conducted by Homeland Security Investigations as part of a comprehensive federal investigation."
        },

        victim_testimony_analysis: {
            text: `VICTIM TESTIMONY INVESTIGATION
            
            DAY 2 - 4:45 PM
            
            Through court filings and legal documents, you've learned about the prosecution's key witnesses:

            👥 PROSECUTION WITNESSES
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            CASSIE VENTURA (Former girlfriend):
            - 2023 civil lawsuit filed with detailed allegations
            - Key witness in federal case
            - Alleged victim in trafficking charges
            - Settlement reached in civil case
            
            "JANE DOE" WITNESS:
            - Testified under pseudonym for protection
            - Another alleged victim in federal charges
            - Corroborates prosecution timeline
            - Protected witness status
            
            ADDITIONAL WITNESSES:
            - Former employees and associates
            - Business partners with immunity agreements
            - Federal agents who conducted investigation
            - Financial experts on money laundering allegations
            
            A victims' rights attorney explains: "In trafficking cases, witness testimony is crucial. The government needs to prove coercion, force, or fraud. These witnesses provide firsthand accounts of alleged criminal activity."
            
            The prosecution's case relies heavily on these testimonies to establish the pattern of alleged criminal behavior over the 16-year timeframe.`,
            image: "witness_testimony_courtroom.png",
            imagePrompt: "Federal courtroom with witness stand, serious legal proceedings, professional judicial setting",
            sources: ["Federal Court Testimony", "Victim Impact Statements", "DOJ Witness Protection"],
            choices: [
                {
                    text: "Study the civil lawsuit that preceded federal charges",
                    nextScene: "civil_lawsuit_analysis",
                    progressIncrease: 18,
                    factual: true,
                    evidence: true
                },
                {
                    text: "Examine the witness protection and security measures",
                    nextScene: "witness_protection_analysis",
                    progressIncrease: 15,
                    factual: true
                },
                {
                    text: "Investigate the corroborating evidence for witness claims",
                    nextScene: "corroborating_evidence",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Analyze the defense's challenge to witness credibility",
                    nextScene: "defense_witness_challenge",
                    progressIncrease: 16,
                    evidence: true
                }
            ],
            educationalNote: "Federal prosecutors rely on victim testimony to prove trafficking and coercion charges, often using witness protection measures."
        },

        trial_verdict_analysis: {
            text: `FEDERAL TRIAL VERDICT ANALYSIS
            
            DAY 30 - FINAL REPORT
            
            After weeks of testimony, the federal jury reached a split verdict that shocked the legal community:

            ⚖️ FEDERAL JURY VERDICT - UNITED STATES v. COMBS
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            ACQUITTED:
            ✓ Racketeering Conspiracy (RICO) - NOT GUILTY
            ✓ Sex Trafficking by Force (Cassie Ventura) - NOT GUILTY  
            ✓ Sex Trafficking by Force ("Jane Doe") - NOT GUILTY
            
            CONVICTED:
            ❌ Transportation for Prostitution (Ventura) - GUILTY
            ❌ Transportation for Prostitution ("Jane Doe") - GUILTY
            
            SENTENCING:
            - Maximum 10 years per count (20 years total possible)
            - Prosecutors seek 51-63 months (4-5 years)
            - 10 months credit for time served
            - Sentencing scheduled for October 3, 2025
            - Bail denied, remains in federal detention
            
            Legal experts are calling it a "partial victory" for both sides. The government failed to prove the most serious racketeering charges but secured convictions on federal transportation charges.
            
            Federal Judge Arun Subramanian: "While the jury rejected the conspiracy allegations, the transportation convictions reflect serious federal crimes that warrant significant punishment."`,
            image: "federal_courthouse_verdict.png",
            imagePrompt: "Federal courthouse with media gathered outside, serious news reporting atmosphere, justice scales visible",
            sources: ["Federal Court Records", "Jury Verdict", "Sentencing Guidelines"],
            choices: [
                {
                    text: "Analyze the legal significance of the split verdict",
                    nextScene: "verdict_legal_analysis",
                    progressIncrease: 15,
                    factual: true,
                    evidence: true
                },
                {
                    text: "Examine the sentencing guidelines and appeal options",
                    nextScene: "sentencing_analysis",
                    progressIncrease: 12,
                    factual: true
                },
                {
                    text: "Study the impact on the entertainment industry",
                    nextScene: "industry_impact_analysis",
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Complete final investigative report",
                    nextScene: "final_report",
                    progressIncrease: 25,
                    evidence: true,
                    factual: true
                }
            ],
            educationalNote: "The May 2025 federal trial resulted in convictions on transportation charges but acquittals on the most serious racketeering and trafficking counts."
        },

        final_report: {
            text: `FINAL INVESTIGATIVE REPORT: THE DIDDY CASE
            
            CASE CLOSED - COMPREHENSIVE ANALYSIS
            
            After months of investigation, you've compiled a definitive report on one of the most significant federal cases in entertainment history:

            📄 EXECUTIVE SUMMARY
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            THE CHARGES: Federal prosecutors alleged a 16-year criminal conspiracy involving racketeering, sex trafficking, and transportation for prostitution.
            
            THE EVIDENCE: Coordinated federal raids, electronic evidence, financial records, and victim testimony formed the prosecution's case.
            
            THE VERDICT: Split decision - acquittals on most serious charges (RICO, trafficking) but convictions on federal transportation charges.
            
            THE IMPACT: 
            - First major federal trafficking case in hip-hop industry
            - Precedent for entertainment industry accountability
            - Victim advocacy and survivors' rights highlighted
            - Federal law enforcement methods scrutinized
            
            LESSONS LEARNED:
            ✓ Federal RICO cases require extensive proof of criminal enterprise
            ✓ Victim testimony crucial but challenged by defense
            ✓ Electronic evidence and financial records key to prosecution
            ✓ Celebrity status doesn't provide immunity from federal prosecution
            
            Your investigation revealed the complex intersection of fame, power, and federal law enforcement in modern America.
            
            INVESTIGATION COMPLETE - CASE ARCHIVED`,
            image: "final_report_complete.png",
            imagePrompt: "Completed investigative report with official seals, professional journalism achievement, case files organized",
            sources: ["Complete Case Files", "Federal Court Records", "Investigative Research"],
            choices: [
                {
                    text: "Return to Case Selection",
                    nextScene: "case_selection",
                    progressIncrease: 5
                },
                {
                    text: "Archive Case Files",
                    nextScene: "archive_complete",
                    progressIncrease: 10,
                    evidence: true
                }
            ],
            educationalNote: "This comprehensive investigation covered the complete federal case from indictment through trial verdict and sentencing."
        }
    }
};
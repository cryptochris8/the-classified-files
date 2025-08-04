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

        threat_investigation: {
            text: `TRACING THE THREAT
            
            DAY 1 - 8:45 AM - FBI CYBERSECURITY DIVISION
            
            Agent Chen has connected you with FBI Cyber Division to trace the threatening message. The sterile offices hum with digital forensics equipment.

            "The message came from a burner phone purchased with cash in Newark," explains Agent Torres, pulling up cellular tower data. "But here's what's interesting - the same phone made calls to three entertainment industry executives last week."

            On the screen, you see a network diagram showing connections between phone numbers, email addresses, and social media accounts.

            "Someone's coordinating a campaign to intimidate witnesses and journalists. This isn't random - it's organized intimidation."

            Your phone buzzes. Another message: "We know where you live, Rivera. Drop the story or face consequences."

            Agent Torres immediately begins tracing the new message. "They're getting desperate. That was sloppy - we can track this one."

            Through the office window, you notice a black SUV parked across the street that wasn't there when you arrived.`,
            image: "fbi_cyber_division.png",
            imagePrompt: "FBI cybersecurity office with digital forensics equipment, agent tracing phone calls on computers, high-tech investigation",
            sources: ["FBI Cyber Division", "Digital Forensics", "Witness Intimidation Investigation"],
            choices: [
                {
                    text: "Request immediate federal protection",
                    nextScene: "federal_protection_decision",
                    progressIncrease: 15,
                    evidence: true
                },
                {
                    text: "Investigate the entertainment industry executives contacted",
                    nextScene: "industry_executive_investigation",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Set up surveillance to catch the intimidation network",
                    nextScene: "surveillance_operation",
                    progressIncrease: 22,
                    evidence: true
                },
                {
                    text: "Continue investigation despite threats",
                    nextScene: "defiant_investigation_continues",
                    progressIncrease: 18,
                    evidence: true
                }
            ],
            educationalNote: "Federal agencies take witness and journalist intimidation very seriously in high-profile cases."
        },

        disappeared_investigators: {
            text: `THE DISAPPEARED INVESTIGATORS
            
            DAY 1 - 9:30 AM - SECURE MEETING LOCATION
            
            Dr. Martinez agreed to meet you at a secure location - a private room in the New York Public Library's research archives.

            "Three private investigators have gone missing over the past two years," she whispers, sliding you a folder. "All were working on entertainment industry cases involving similar allegations."

            The folder contains missing person reports, incomplete investigation files, and photos of three investigators:

            📄 THE MISSING INVESTIGATORS
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            MARCUS WEBB - Missing March 2023
            - Last known working on financial records case
            - Car found abandoned at JFK Airport
            - Phone traced to Bahamas, then went dark
            
            SARAH CHEN - Missing August 2023  
            - Investigating celebrity protection racket
            - Left her apartment with packed bags
            - Credit cards used once in Mexico, then stopped
            
            DAVID RODRIGUEZ - Missing December 2023
            - Working multiple entertainment industry cases
            - Office broken into night before disappearance
            - Backup drives and files all missing

            "They were all getting close to something big. The same network we're investigating now."

            Dr. Martinez checks her watch nervously. "I have to go. But Rivera... these people don't just threaten. They follow through."`,
            image: "library_secret_meeting.png",
            imagePrompt: "Private library research room with missing person files spread on table, mysterious atmosphere, archive shelves",
            sources: ["Missing Person Reports", "Private Investigation Files", "NYPD Records"],
            choices: [
                {
                    text: "Contact families of missing investigators",
                    nextScene: "missing_investigators_families",
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Investigate the office break-in evidence",
                    nextScene: "office_break_in_investigation",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Follow the financial trail to the Bahamas",
                    nextScene: "bahamas_financial_trail",
                    progressIncrease: 22,
                    evidence: true
                },
                {
                    text: "Focus on the celebrity protection racket angle",
                    nextScene: "protection_racket_investigation",
                    progressIncrease: 19,
                    evidence: true
                }
            ],
            educationalNote: "While these disappearances are fictional, intimidation of investigators does occur in high-stakes cases."
        },

        agent_chen_briefing: {
            text: `HSI AGENT BRIEFING
            
            DAY 1 - 10:15 AM - FEDERAL BUILDING - CLASSIFIED BRIEFING ROOM
            
            Agent Chen leads you through multiple security checkpoints to a windowless briefing room marked "AUTHORIZED PERSONNEL ONLY."

            "What I'm about to show you is still classified, but given the threats against you, you need to understand what we're dealing with."

            She activates a large display screen showing a complex network diagram with photos, financial records, and connection lines.

            "This isn't just about one person. We've identified what we call 'The Network' - a systematic operation involving:

            🔍 THE NETWORK STRUCTURE
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            TIER 1: Primary Subject (Combs)
            - Central coordination point
            - Financial control mechanisms
            - Direct oversight of operations
            
            TIER 2: Inner Circle (8 individuals)
            - Business managers and associates  
            - Property and logistics coordinators
            - Security and enforcement personnel
            
            TIER 3: Extended Network (23+ individuals)
            - Entertainment industry connections
            - Financial service providers
            - Legal and political contacts"

            Agent Chen points to red lines connecting various nodes. "These connections represent financial transfers, communications, and coordinated activities spanning 16 years."

            "The federal indictment only scratches the surface. We're building cases against the entire network."`,
            image: "hsi_classified_briefing.png",
            imagePrompt: "Classified HSI briefing room with network diagrams on screens, federal agents, high-security environment",
            sources: ["HSI Intelligence", "Federal Investigation Files", "Network Analysis"],
            choices: [
                {
                    text: "Investigate the Inner Circle members",
                    nextScene: "inner_circle_investigation",
                    progressIncrease: 25,
                    evidence: true,
                    factual: true
                },
                {
                    text: "Focus on the financial service providers",
                    nextScene: "financial_providers_investigation",
                    progressIncrease: 22,
                    evidence: true
                },
                {
                    text: "Examine the political and legal connections",
                    nextScene: "political_connections_investigation",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Request access to the full classified files",
                    nextScene: "classified_files_access",
                    progressIncrease: 18,
                    evidence: true
                }
            ],
            educationalNote: "Federal investigations often uncover larger networks beyond the primary subject of charges."
        },

        corporate_investigation: {
            text: `CORPORATE SHELL COMPANY INVESTIGATION
            
            DAY 1 - 2:00 PM - FINANCIAL CRIMES UNIT
            
            You've partnered with Financial Crimes investigator Detective Sarah Kim to trace the corporate shell companies mentioned in Dr. Martinez's documents.

            "This is a masterclass in financial obfuscation," Kim explains, pulling up corporate registration records on multiple screens.

            💰 SHELL COMPANY NETWORK ANALYSIS
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            PRIMARY HOLDING COMPANIES:
            - Combs Enterprises Holdings LLC (Delaware)
            - Bad Boy Entertainment Investments (Nevada)
            - Sean John Capital Management (Cayman Islands)
            
            SECONDARY OPERATIONS:
            - Property acquisition LLCs (7 different states)
            - Entertainment service companies (12 entities)
            - Financial management firms (5 offshore locations)
            
            TERTIARY LAYER:
            - Event planning businesses
            - Security service companies
            - Travel and transportation services

            "Money flows through this network like water through a maze. By the time it reaches its destination, it's nearly impossible to trace back to the source."

            Detective Kim highlights suspicious transactions. "Look at these patterns - large cash deposits followed immediately by wire transfers to offshore accounts. Classic money laundering structure."

            A notification pops up on her screen: "URGENT: Federal freeze order issued on 12 accounts. Assets seized: $47.3 million."`,
            image: "financial_crimes_investigation.png",
            imagePrompt: "Financial crimes unit with multiple computer screens showing corporate charts, money flow diagrams, detective analyzing data",
            sources: ["FinCEN Reports", "Corporate Registration Records", "Banking Compliance"],
            choices: [
                {
                    text: "Investigate the seized bank accounts",
                    nextScene: "seized_accounts_analysis",
                    progressIncrease: 24,
                    evidence: true,
                    factual: true
                },
                {
                    text: "Follow the offshore Cayman Islands connection",
                    nextScene: "cayman_islands_investigation",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Examine the property acquisition network",
                    nextScene: "property_network_investigation",
                    progressIncrease: 22,
                    evidence: true
                },
                {
                    text: "Focus on the entertainment service companies",
                    nextScene: "entertainment_services_investigation",
                    progressIncrease: 18,
                    evidence: true
                }
            ],
            educationalNote: "Complex corporate structures are commonly used in financial crimes to obscure money trails."
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

        racketeering_investigation: {
            text: `RACKETEERING CONSPIRACY ANALYSIS
            
            DAY 1 - 11:45 AM
            
            You're examining the RICO charges - the most serious count in the federal indictment:

            ⚖️ RACKETEERING CONSPIRACY (18 U.S.C. § 1962)
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            ENTERPRISE ELEMENTS:
            - "Combs Enterprise" - alleged criminal organization
            - Associates including employees, security, business partners
            - Pattern of racketeering activity over 16+ years
            
            PREDICATE ACTS ALLEGED:
            - Sex trafficking of multiple victims
            - Forced labor and services
            - Interstate transportation for prostitution
            - Kidnapping and attempted kidnapping
            - Arson related to witness intimidation
            - Bribery of public officials
            - Obstruction of justice
            
            LEGAL REQUIREMENTS:
            Government must prove:
            1. Existence of criminal enterprise
            2. Defendant's connection to enterprise
            3. Pattern of racketeering activity (2+ predicate acts)
            4. Interstate commerce nexus
            
            A former federal prosecutor explains: "RICO is designed for organized crime. The government alleges this wasn't random criminal acts, but a systematic criminal enterprise disguised as legitimate business operations."`,
            image: "rico_investigation_board.png",
            imagePrompt: "Federal investigation board showing RICO enterprise chart with connections between associates and criminal activities",
            sources: ["RICO Statute", "Federal Indictment", "Legal Precedents"],
            choices: [
                {
                    text: "Study the predicate acts in detail",
                    nextScene: "predicate_acts_analysis",
                    progressIncrease: 20,
                    factual: true,
                    evidence: true
                },
                {
                    text: "Examine the alleged criminal enterprise structure",
                    nextScene: "enterprise_structure_analysis",
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Research RICO precedents in celebrity cases",
                    nextScene: "rico_precedents",
                    progressIncrease: 15,
                    factual: true
                },
                {
                    text: "Analyze the interstate commerce connections",
                    nextScene: "interstate_commerce_analysis",
                    progressIncrease: 16,
                    evidence: true
                }
            ],
            educationalNote: "RICO charges require proving an ongoing criminal enterprise, not just individual criminal acts."
        },

        legal_knowledge_quiz: {
            text: `FEDERAL TRAFFICKING LAW QUIZ
            
            DAY 1 - 12:30 PM
            
            Test your knowledge of the federal laws involved in this case:

            📚 FEDERAL TRAFFICKING AND RICO LAW QUIZ
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            Understanding these laws is crucial for following this investigation. Let's see how well you know federal criminal law:`,
            image: "legal_education_quiz.png",
            imagePrompt: "Law books and federal statutes open on desk, educational setting for legal knowledge",
            sources: ["Federal Criminal Code", "Legal Education Materials"],
            choices: [
                {
                    text: "The Mann Act criminalizes transportation across state lines for what purpose?",
                    nextScene: "mann_act_question",
                    progressIncrease: 5,
                    quizMode: true,
                    quizAnswer: true
                },
                {
                    text: "RICO requires proof of how many predicate criminal acts?",
                    nextScene: "rico_elements_question", 
                    progressIncrease: 5,
                    quizMode: true,
                    quizAnswer: true
                },
                {
                    text: "What federal agency primarily investigates trafficking crimes?",
                    nextScene: "agency_question",
                    progressIncrease: 5,
                    quizMode: true,
                    quizAnswer: true
                },
                {
                    text: "Skip quiz and continue investigation",
                    nextScene: "indictment_analysis",
                    progressIncrease: 8
                }
            ],
            educationalNote: "Understanding federal criminal law helps in analyzing the charges and evidence in complex cases."
        },

        evidence_analysis: {
            text: `FEDERAL EVIDENCE EXAMINATION
            
            DAY 1 - 1:15 PM - EVIDENCE PROCESSING CENTER
            
            You're reviewing the evidence seized during federal raids:

            📦 EVIDENCE INVENTORY - FEDERAL SEIZURE
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            ELECTRONIC DEVICES:
            - 120+ cell phones, tablets, computers
            - Surveillance system hard drives
            - Recording equipment and cameras
            - Digital storage devices with encrypted data
            
            FINANCIAL RECORDS:
            - Bank statements from multiple accounts
            - Wire transfer documentation
            - Cash counting machines
            - Ledgers showing payments to various individuals
            
            PHYSICAL EVIDENCE:
            - Firearms and ammunition
            - Narcotics and controlled substances
            - Baby oil and lubricants (in large quantities)
            - Business documents and contracts
            
            COMMUNICATIONS:
            - Text messages between co-conspirators
            - Email communications spanning years
            - Recorded phone conversations
            - Social media communications
            
            The scope of evidence suggests a systematic operation rather than isolated incidents.`,
            image: "evidence_processing_lab.png",
            imagePrompt: "Federal evidence processing facility with agents cataloging seized items, professional forensics environment",
            sources: ["Federal Search Warrants", "Evidence Inventory", "Forensics Reports"],
            miniGameData: {
                type: "evidence_reconstruction",
                title: "Federal Evidence Analysis",
                description: "Analyze seized evidence to understand the scope of the alleged criminal enterprise",
                evidence: [
                    { type: "digital", item: "Encrypted communications", relevance: "high" },
                    { type: "financial", item: "Wire transfer records", relevance: "high" },
                    { type: "physical", item: "Recording equipment", relevance: "medium" },
                    { type: "documentation", item: "Business contracts", relevance: "medium" }
                ]
            },
            choices: [
                {
                    text: "Focus on digital communications evidence",
                    nextScene: "digital_evidence_analysis",
                    progressIncrease: 22,
                    evidence: true,
                    factual: true
                },
                {
                    text: "Examine the financial records and money trail",
                    nextScene: "financial_investigation",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Study the recording equipment and surveillance systems",
                    nextScene: "surveillance_evidence_analysis",
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Analyze the business documents for criminal enterprise proof",
                    nextScene: "business_documents_analysis",
                    progressIncrease: 19,
                    evidence: true
                }
            ],
            educationalNote: "Federal raids typically yield extensive evidence that must be forensically analyzed to build criminal cases."
        },

        digital_evidence_analysis: {
            text: `DIGITAL FORENSICS INVESTIGATION
            
            DAY 2 - 9:00 AM - FBI CYBER CRIMES UNIT
            
            Digital forensics experts have been analyzing the electronic evidence:

            💻 DIGITAL EVIDENCE ANALYSIS
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            COMMUNICATIONS ANALYSIS:
            - 50,000+ text messages recovered
            - Encrypted messaging apps broken
            - Email accounts spanning 15+ years
            - Social media direct messages preserved
            
            KEY FINDINGS:
            - Coordination of alleged criminal activities
            - Instructions to subordinates and associates
            - Evidence of alleged coercion and threats
            - Financial arrangements documented
            
            METADATA EVIDENCE:
            - Location data proving interstate travel
            - Timestamps corroborating witness testimony
            - Device synchronization showing coordination
            - Deleted files recovered through forensic methods
            
            VIDEO/AUDIO EVIDENCE:
            - Alleged recordings of criminal activities
            - Surveillance footage from multiple properties
            - Cell phone videos and photos
            - Security camera systems data
            
            FBI Cyber Agent Rodriguez: "The digital evidence creates a detailed timeline of alleged criminal behavior. Modern criminals leave digital fingerprints everywhere."`,
            image: "digital_forensics_lab.png",
            imagePrompt: "High-tech FBI digital forensics laboratory with multiple computer screens showing data analysis",
            sources: ["FBI Digital Forensics", "Electronic Evidence", "Metadata Analysis"],
            choices: [
                {
                    text: "Study the recovered encrypted communications",
                    nextScene: "encrypted_communications_analysis",
                    progressIncrease: 24,
                    evidence: true,
                    factual: true
                },
                {
                    text: "Examine the video and audio recordings",
                    nextScene: "audio_video_evidence",
                    progressIncrease: 22,
                    evidence: true
                },
                {
                    text: "Analyze the location data and travel patterns",
                    nextScene: "location_data_analysis",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Focus on deleted files and data recovery",
                    nextScene: "deleted_data_recovery",
                    progressIncrease: 18,
                    evidence: true
                }
            ],
            educationalNote: "Digital forensics is crucial in modern federal cases, often providing the strongest evidence of criminal conspiracy."
        },

        financial_investigation: {
            text: `FINANCIAL CRIMES INVESTIGATION
            
            DAY 2 - 2:00 PM - TREASURY DEPARTMENT
            
            Financial investigators have traced the money flows through the alleged criminal enterprise:

            💰 FINANCIAL INVESTIGATION FINDINGS
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            MONEY LAUNDERING PATTERNS:
            - $47+ million moved through shell companies
            - Large cash deposits immediately wired offshore
            - Property purchases using intermediary LLCs
            - Payments to alleged victims disguised as business expenses
            
            BANKING COMPLIANCE VIOLATIONS:
            - Structured deposits to avoid reporting requirements
            - Multiple accounts used to fragment large transactions
            - Foreign bank accounts not properly disclosed
            - Suspicious Activity Reports (SARs) filed by banks
            
            PAYMENT PATTERNS:
            - Regular payments to alleged co-conspirators
            - Travel expenses for interstate transportation
            - Property maintenance for multiple locations
            - Legal fees and settlements to suppress allegations
            
            ASSET FORFEITURE:
            - Real estate properties seized (7 locations)
            - Bank accounts frozen ($12.3 million)
            - Luxury vehicles and jewelry confiscated
            - Business interests under federal control
            
            Treasury Agent Kim: "The financial evidence shows this wasn't amateur hour. This was sophisticated money laundering designed to hide criminal proceeds."`,
            image: "treasury_financial_investigation.png",
            imagePrompt: "Treasury Department financial crimes unit with charts showing money flows and banking records",
            sources: ["FinCEN Reports", "Banking Records", "Asset Forfeiture Orders"],
            choices: [
                {
                    text: "Examine the offshore banking connections",
                    nextScene: "offshore_banking_investigation",
                    progressIncrease: 22,
                    evidence: true
                },
                {
                    text: "Study the asset forfeiture and seizure process",
                    nextScene: "asset_forfeiture_analysis",
                    progressIncrease: 20,
                    factual: true,
                    evidence: true
                },
                {
                    text: "Investigate payments to alleged co-conspirators",
                    nextScene: "co_conspirator_payments",
                    progressIncrease: 24,
                    evidence: true
                },
                {
                    text: "Analyze the money laundering methodology",
                    nextScene: "money_laundering_analysis",
                    progressIncrease: 18,
                    evidence: true
                }
            ],
            educationalNote: "Financial evidence is often the backbone of federal conspiracy cases, showing the systematic nature of alleged crimes."
        },

        federal_protection_decision: {
            text: `FEDERAL PROTECTION DECISION
            
            DAY 1 - 4:30 PM - FEDERAL BUILDING
            
            Agent Chen presents you with options for your safety:

            🛡️ WITNESS PROTECTION OPTIONS
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            OPTION 1: FULL WITNESS PROTECTION
            - Relocation to secure facility
            - 24/7 federal agent protection
            - Limited contact with outside world
            - Complete case investigation access
            
            OPTION 2: ENHANCED SECURITY
            - Protective detail during investigations
            - Secure communications equipment
            - Safe house for meetings
            - Continue normal life with precautions
            
            OPTION 3: MINIMAL PROTECTION
            - Emergency contact protocols
            - Panic button and tracking device
            - Regular check-ins with agents
            - Full freedom but higher risk
            
            "The threats are real," Agent Chen warns. "Three investigators have disappeared. Your choice affects not just your safety, but how deep you can dig into this case."
            
            Your decision will shape how the rest of this investigation unfolds.`,
            image: "federal_protection_briefing.png",
            imagePrompt: "Federal building secure briefing room with protection options being discussed by HSI agents",
            sources: ["Witness Protection Program", "Federal Security Protocols"],
            choices: [
                {
                    text: "Accept full witness protection",
                    nextScene: "witness_protection_program",
                    progressIncrease: 15,
                    evidence: true
                },
                {
                    text: "Request enhanced security while continuing investigation",
                    nextScene: "enhanced_security_investigation",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Decline protection and continue independently",
                    nextScene: "independent_investigation_continues",
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Negotiate a custom protection arrangement",
                    nextScene: "custom_protection_deal",
                    progressIncrease: 16,
                    evidence: true
                }
            ],
            educationalNote: "Federal witness protection is available for journalists and investigators facing credible threats in major cases."
        },

        rico_precedents: {
            text: `RICO PRECEDENTS IN CELEBRITY CASES
            
            DAY 1 - 3:45 PM - LAW LIBRARY
            
            You're researching how RICO has been used in entertainment industry cases:

            📚 RICO ENTERTAINMENT PRECEDENTS
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            MAJOR RICO ENTERTAINMENT CASES:
            
            R. KELLY CASE (2021):
            - Successful RICO prosecution
            - Racketeering enterprise proven
            - Multiple victims over decades
            - Conviction on all RICO counts
            
            MURDER INC. RECORDS (2005):
            - Record label RICO prosecution
            - Money laundering and violence
            - Mixed results at trial
            - Some convictions, some acquittals
            
            CASH MONEY RECORDS INVESTIGATION:
            - IRS and DEA investigation
            - Financial crimes focus
            - No formal RICO charges filed
            - Civil settlements reached
            
            LEGAL ANALYSIS:
            "Entertainment RICO cases are challenging," explains Professor Martinez, criminal law expert. "You need to prove the business was primarily criminal, not just that crimes occurred within a legitimate business."
            
            The precedents show mixed success rates, with conviction depending on the strength of the criminal enterprise evidence.`,
            image: "legal_precedents_research.png",
            imagePrompt: "Law library with RICO case books and legal precedents being researched by investigative journalist",
            sources: ["Federal Case Law", "RICO Precedents", "Legal Analysis"],
            choices: [
                {
                    text: "Study the R. Kelly case parallels in detail",
                    nextScene: "r_kelly_case_comparison",
                    progressIncrease: 18,
                    factual: true,
                    evidence: true
                },
                {
                    text: "Examine why some entertainment RICO cases fail",
                    nextScene: "rico_failure_analysis",
                    progressIncrease: 16,
                    factual: true
                },
                {
                    text: "Research the legal requirements for enterprise proof",
                    nextScene: "enterprise_proof_requirements",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Continue with current case analysis",
                    nextScene: "indictment_analysis",
                    progressIncrease: 12
                }
            ],
            educationalNote: "RICO prosecutions in entertainment have mixed success rates, with the R. Kelly case being a notable successful precedent."
        },

        expert_legal_analysis: {
            text: `EXPERT LEGAL ANALYSIS
            
            DAY 2 - 1:00 PM
            
            You've interviewed several legal experts about the federal charges:

            ⚖️ EXPERT LEGAL OPINIONS
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            PROFESSOR SARAH CHEN, NYU LAW:
            "The RICO charge is ambitious. The government needs to prove this was primarily a criminal enterprise, not a legitimate business where crimes occurred. The 16-year timeline helps, but they need concrete evidence of systematic criminal activity."
            
            FORMER SDNY PROSECUTOR DAVID MARTINEZ:
            "Sex trafficking charges are very serious. The government has to prove force, fraud, or coercion. Witness testimony is crucial, but it will be heavily scrutinized by the defense. The electronic evidence could be decisive."
            
            DEFENSE ATTORNEY LISA RODRIGUEZ:
            "The defense will argue this is a legitimate business empire being criminalized. They'll challenge witness credibility, claim consensual adult relationships, and argue the government is overreaching with RICO."
            
            FEDERAL JUDGE (RETIRED) ROBERT JOHNSON:
            "These cases often come down to credibility. Did the jury believe the witnesses? Is there corroborating evidence? Celebrity defendants present unique challenges - fame can work for or against them."
            
            The consensus: This is a complex case that will test the boundaries of federal criminal law.`,
            image: "legal_expert_panel.png",
            imagePrompt: "Panel of legal experts discussing federal criminal law in professional law school setting",
            sources: ["Legal Expert Interviews", "Academic Analysis", "Federal Court Experience"],
            choices: [
                {
                    text: "Focus on the prosecution's burden of proof",
                    nextScene: "prosecution_burden_analysis",
                    progressIncrease: 20,
                    factual: true,
                    evidence: true
                },
                {
                    text: "Examine potential defense strategies",
                    nextScene: "defense_strategy_analysis",
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Study the role of celebrity status in federal cases",
                    nextScene: "celebrity_status_legal_analysis",
                    progressIncrease: 16,
                    evidence: true
                },
                {
                    text: "Continue with evidence examination",
                    nextScene: "federal_raids_analysis",
                    progressIncrease: 15
                }
            ],
            educationalNote: "Legal experts emphasize that federal trafficking and RICO cases require extensive corroborating evidence beyond witness testimony."
        },

        arrest_details: {
            text: `ARREST AND DETENTION DETAILS
            
            DAY 2 - 5:00 PM
            
            You've obtained details about the arrest and current detention:

            🚔 ARREST AND DETENTION FACTS
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            ARREST DETAILS:
            - September 16, 2024, 8:15 PM
            - Park Hyatt Hotel, Manhattan
            - Homeland Security Investigations (HSI) agents
            - No resistance offered during arrest
            - Immediately transported to federal facility
            
            BAIL HEARINGS:
            - Initial bail denied by Magistrate Judge
            - Defense requested $50 million bail package
            - Government argued flight risk and danger to community
            - Multiple bail applications all denied
            
            CURRENT DETENTION:
            - Metropolitan Detention Center (MDC) Brooklyn
            - Special Housing Unit for protection
            - Limited contact with other inmates
            - Regular attorney visits permitted
            
            LEGAL STATUS:
            - Pleaded not guilty to all charges
            - Trial date set for May 2025
            - Pretrial motions ongoing
            - Appeals of bail denial unsuccessful
            
            Former federal prosecutor: "Flight risk determination considers wealth, international connections, and severity of charges. With potential life sentence, bail is often denied in trafficking cases."`,
            image: "federal_detention_facility.png",
            imagePrompt: "Federal detention center with secure facilities, serious law enforcement atmosphere",
            sources: ["Court Records", "Bail Hearing Transcripts", "Federal Bureau of Prisons"],
            choices: [
                {
                    text: "Study the bail denial reasoning",
                    nextScene: "bail_denial_analysis",
                    progressIncrease: 15,
                    factual: true,
                    evidence: true
                },
                {
                    text: "Examine pretrial detention conditions",
                    nextScene: "detention_conditions_analysis",
                    progressIncrease: 12,
                    factual: true
                },
                {
                    text: "Research flight risk assessment in federal cases",
                    nextScene: "flight_risk_analysis",
                    progressIncrease: 16,
                    evidence: true
                },
                {
                    text: "Continue with trial preparation investigation",
                    nextScene: "trial_preparation_investigation",
                    progressIncrease: 18,
                    evidence: true
                }
            ],
            educationalNote: "Federal defendants in trafficking cases are often held without bail due to flight risk and public safety concerns."
        },

        surveillance_operation: {
            text: `COVERT SURVEILLANCE OPERATION
            
            DAY 2 - 11:00 PM - SURVEILLANCE VAN
            
            Agent Torres has equipped you with a wire and surveillance equipment for a dangerous undercover operation:

            🎭 OPERATION: NIGHTFALL
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            MISSION BRIEFING:
            You're posing as a freelance journalist interested in "positive coverage" of the entertainment industry. Your target: Marcus Webb, an alleged associate who's been making payments to silence witnesses.
            
            LOCATION: Exclusive Manhattan nightclub
            COVER STORY: Writing a "redemption piece" about misunderstood celebrities
            OBJECTIVE: Record incriminating conversations about witness intimidation
            
            As you enter the dimly lit club, pulsing music masks the tension. Marcus Webb sits in a VIP booth, surrounded by security. He's agreed to meet because he thinks you're corrupt.
            
            "Rivera, right?" Webb's voice cuts through the bass. "I hear you're the type of journalist who understands... business arrangements."
            
            He slides an envelope across the table. "$50,000. All you need to write is how the federal case is a witch hunt. How the 'victims' are really just opportunists."
            
            Your wire is recording everything. But Webb's security team is scanning for electronic devices.
            
            Suddenly, one of his men points at your jacket. "Boss, this guy's wired up."
            
            Webb's friendly demeanor vanishes. The exits are blocked. You're trapped.`,
            image: "undercover_surveillance_nightclub.png",
            imagePrompt: "Dark nightclub surveillance operation, undercover journalist with wire, tension and danger, VIP booth meeting",
            sources: ["FBI Surveillance Protocols", "Undercover Operations", "Witness Intimidation Evidence"],
            choices: [
                {
                    text: "Activate emergency signal and try to escape",
                    nextScene: "emergency_extraction",
                    progressIncrease: 25,
                    evidence: true
                },
                {
                    text: "Bluff your way out - claim the wire is for recording interviews",
                    nextScene: "surveillance_bluff_attempt",
                    progressIncrease: 22,
                    evidence: true
                },
                {
                    text: "Pretend to accept the bribe to gather more evidence",
                    nextScene: "double_agent_gambit",
                    progressIncrease: 28,
                    evidence: true
                },
                {
                    text: "Create a distraction and destroy the wire to protect your cover",
                    nextScene: "cover_preservation_gambit",
                    progressIncrease: 20,
                    evidence: true
                }
            ],
            educationalNote: "While this surveillance scenario is fictional, federal investigations do use undercover operations to gather evidence of witness intimidation."
        },

        emergency_extraction: {
            text: `EMERGENCY EXTRACTION
            
            DAY 2 - 11:47 PM - NIGHTCLUB CHAOS
            
            You hit the panic button on your wire. Within seconds, the nightclub erupts in controlled chaos:

            🚨 FEDERAL RAID IN PROGRESS
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            FBI tactical teams storm through multiple entrances. Strobe lights, tear gas, and the thunder of boots on marble floors. This isn't a rescue - it's a full federal raid.
            
            "FEDERAL AGENTS! EVERYONE ON THE GROUND!"
            
            Webb's security team reaches for weapons, but they're outgunned 10-to-1. You dive behind the bar as gunshots echo through the club.
            
            Agent Chen's voice crackles through your earpiece: "Rivera, get to the kitchen! Extraction point Alpha!"
            
            You crawl through broken glass and spilled champagne, dodging fleeing club-goers. Behind you, Webb screams: "This is a setup! Find that journalist!"
            
            In the kitchen, Agent Torres grabs you. "We got it all on tape. Webb just confessed to paying off three witnesses and threatening families. But there's a problem..."
            
            She points to security monitors showing Webb's men escaping through service tunnels. "They took our evidence. The recording device is gone, and Webb's phone has everything - names, amounts, the whole conspiracy."
            
            Through the kitchen window, you see black SUVs speeding away into the night.
            
            "The operation was blown," Torres admits. "Someone tipped them off. We have a leak in federal law enforcement."`,
            image: "fbi_raid_nightclub_chaos.png",
            imagePrompt: "FBI tactical raid in nightclub with chaos, broken glass, federal agents in action, emergency extraction",
            sources: ["FBI Tactical Operations", "Emergency Extraction Protocols", "Federal Raid Procedures"],
            choices: [
                {
                    text: "Pursue Webb's escaping associates",
                    nextScene: "high_speed_pursuit",
                    progressIncrease: 30,
                    evidence: true
                },
                {
                    text: "Investigate the leak in federal law enforcement",
                    nextScene: "federal_leak_investigation",
                    progressIncrease: 26,
                    evidence: true
                },
                {
                    text: "Focus on recovering the stolen recording device",
                    nextScene: "stolen_evidence_recovery",
                    progressIncrease: 24,
                    evidence: true
                },
                {
                    text: "Return to safety and analyze what went wrong",
                    nextScene: "operation_debriefing",
                    progressIncrease: 18,
                    evidence: true
                }
            ],
            educationalNote: "Federal tactical operations involve extensive coordination, though this dramatic scenario is fictionalized for the story."
        },

        federal_leak_investigation: {
            text: `THE FEDERAL LEAK INVESTIGATION
            
            DAY 3 - 6:00 AM - FBI INTERNAL AFFAIRS
            
            The failed nightclub operation has triggered an internal investigation. Someone with high-level access warned Webb:

            🕵️ OPERATION: MOLE HUNT
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            FBI Internal Affairs has taken over. You're in a sterile interrogation room, but this time you're the one asking questions.
            
            "Five people knew about last night's operation," explains IA Agent Rebecca Stone, sliding photos across the table. "One of them is feeding information to Webb's network."
            
            THE SUSPECTS:
            
            AGENT SARAH CHEN (HSI): Your primary contact, access to all case files
            AGENT MIGUEL TORRES (FBI Cyber): Provided technical surveillance equipment  
            DETECTIVE SARAH KIM (Financial Crimes): Has banking and financial intelligence
            PROSECUTOR JAMES WRIGHT (SDNY): Knows legal strategy and timing
            JUDGE'S CLERK MARIA SANTOS: Processes sealed warrants and orders
            
            Agent Stone continues: "We've been monitoring communications. Someone made an encrypted call 20 minutes before the raid. The call was traced to a burner phone registered under a fake name."
            
            She shows you phone records with highlighted calls.
            
            "Here's the problem, Rivera. The timing of that call matches exactly when you were getting wired up for the operation. Whoever called had real-time intelligence."
            
            Your blood runs cold. One of your trusted sources is working for the other side.`,
            image: "fbi_internal_affairs_investigation.png",
            imagePrompt: "FBI Internal Affairs sterile investigation room with suspect photos and phone records spread on table",
            sources: ["FBI Internal Affairs", "OPSEC Investigation", "Counter-Intelligence"],
            choices: [
                {
                    text: "Investigate Agent Chen's communications",
                    nextScene: "agent_chen_leak_investigation",
                    progressIncrease: 22,
                    evidence: true
                },
                {
                    text: "Focus on the prosecutor's office connections",
                    nextScene: "prosecutor_office_investigation",
                    progressIncrease: 24,
                    evidence: true
                },
                {
                    text: "Set up a sting operation to catch the mole",
                    nextScene: "mole_sting_operation",
                    progressIncrease: 28,
                    evidence: true
                },
                {
                    text: "Analyze the encrypted phone records for patterns",
                    nextScene: "encrypted_communications_analysis",
                    progressIncrease: 20,
                    evidence: true
                }
            ],
            educationalNote: "While this mole hunt scenario is fictional, federal agencies do investigate internal leaks in high-profile cases."
        },

        mole_sting_operation: {
            text: `THE MOLE STING OPERATION
            
            DAY 3 - 4:00 PM - CLASSIFIED OPERATION CENTER
            
            You've designed a brilliant sting to catch the federal mole. Five pieces of false information, each given to only one suspect:

            🎯 OPERATION: CANARY TRAP
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            THE TRAP:
            Each suspect receives unique false intelligence about fictional upcoming raids:
            
            CHEN: "Raid on Miami property tonight at 2 AM"
            TORRES: "Asset seizure at Wells Fargo Bank, 3 PM tomorrow"  
            KIM: "Cayman Islands account freeze, 9 AM Friday"
            WRIGHT: "Grand jury testimony scheduled for Monday"
            SANTOS: "Search warrant for recording studio, Saturday"
            
            Now you wait. Whichever false information gets back to Webb's network will expose the mole.
            
            3:47 PM - Your phone buzzes. Agent Stone: "We have movement."
            
            Surveillance teams report unusual activity at the Miami property. Webb's associates are rapidly removing equipment and documents - responding to the false tip given only to Agent Chen.
            
            Your trusted HSI contact is the leak.
            
            4:15 PM - Agent Chen calls you directly: "Rivera, emergency meeting. Federal Plaza, 20 minutes. Come alone. I have critical information about the case."
            
            Agent Stone's voice crackles through your earpiece: "It's a trap, Rivera. Chen just burned her cover by reacting to our fake intelligence. She's trying to eliminate you before we can arrest her."
            
            You're standing outside Federal Plaza. Agent Chen approaches from the shadows, just like your first meeting. But this time, you know she's working for the other side.`,
            image: "federal_plaza_trap_meeting.png",
            imagePrompt: "Federal Plaza at dusk with dangerous confrontation brewing, agent approaching with hidden motives, tense atmosphere",
            sources: ["Counter-Intelligence Operations", "Sting Operations", "Federal Security"],
            choices: [
                {
                    text: "Confront Chen directly about being the mole",
                    nextScene: "mole_confrontation",
                    progressIncrease: 30,
                    evidence: true
                },
                {
                    text: "Play along to gather more evidence against her",
                    nextScene: "double_agent_evidence_gathering",
                    progressIncrease: 32,
                    evidence: true
                },
                {
                    text: "Signal for immediate FBI backup and arrest",
                    nextScene: "mole_arrest_operation",
                    progressIncrease: 28,
                    evidence: true
                },
                {
                    text: "Attempt to turn Chen into a double agent",
                    nextScene: "turning_the_mole",
                    progressIncrease: 26,
                    evidence: true
                }
            ],
            educationalNote: "Canary trap operations are real counter-intelligence techniques used to identify leaks within organizations."
        },

        mole_confrontation: {
            text: `THE MOLE'S CONFESSION
            
            DAY 3 - 5:30 PM - FEDERAL PLAZA STEPS
            
            You decide to confront Agent Chen directly. Sometimes the direct approach yields the most truth:

            🎭 THE UNMASKING
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            "I know it's you, Chen. You're the leak."
            
            For a moment, she freezes. Then her shoulders sag, and the professional facade crumbles.
            
            "How long have you known?" Her voice is tired, defeated.
            
            "Since Miami. You were the only one who knew about the fake raid timing."
            
            Chen sits heavily on the federal building steps. "They have my daughter, Rivera. Webb's people kidnapped Emma three months ago. She's eight years old."
            
            She shows you a photo on her phone - a little girl with Chen's eyes, holding today's newspaper in what looks like a warehouse.
            
            "Every day I don't cooperate, they send me a new photo. Every federal operation I compromise buys Emma another day alive. What would you do?"
            
            The weight of her confession hits you. This isn't greed or corruption - it's a mother trying to save her child.
            
            "They said if the federal case goes to trial, Emma disappears forever. They want the whole investigation shut down. Witnesses silenced, evidence destroyed, prosecutors intimidated."
            
            She pulls out a burner phone. "They're expecting a call in ten minutes. If I don't report that you've been eliminated, they'll know something's wrong."
            
            In the distance, you see FBI tactical teams moving into position. Agent Stone has been listening to everything through your wire.`,
            image: "emotional_mole_confession.png",
            imagePrompt: "Federal agent breaking down emotionally on building steps, showing photo of kidnapped daughter, dramatic confrontation",
            sources: ["Compromised Agent Scenarios", "Kidnapping and Extortion", "Federal Employee Protection"],
            choices: [
                {
                    text: "Help Chen fake your elimination to save her daughter",
                    nextScene: "fake_elimination_gambit",
                    progressIncrease: 35,
                    evidence: true
                },
                {
                    text: "Use Chen's phone to trace Webb's location",
                    nextScene: "phone_trace_rescue_operation",
                    progressIncrease: 32,
                    evidence: true
                },
                {
                    text: "Coordinate with FBI to simultaneously arrest Webb and rescue Emma",
                    nextScene: "synchronized_rescue_arrest",
                    progressIncrease: 38,
                    evidence: true
                },
                {
                    text: "Convince Chen to become a double agent for the rescue",
                    nextScene: "double_agent_rescue_plan",
                    progressIncrease: 30,
                    evidence: true
                }
            ],
            educationalNote: "While this kidnapping scenario is fictional, federal agents and their families can face real threats in high-stakes cases."
        },

        synchronized_rescue_arrest: {
            text: `SYNCHRONIZED RESCUE AND ARREST
            
            DAY 3 - 7:45 PM - MULTI-LOCATION FEDERAL OPERATION
            
            The most complex federal operation in the case's history is about to unfold across three locations simultaneously:

            ⚡ OPERATION: THUNDERSTRIKE
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            LOCATION ALPHA (Warehouse - Brooklyn): FBI Hostage Rescue Team moving to save Emma Chen
            LOCATION BRAVO (Webb's Penthouse - Manhattan): Federal arrest team for Webb
            LOCATION CHARLIE (Private Airport - New Jersey): Customs intercept fleeing associates
            
            You're in the FBI command vehicle, coordinating all three operations while Agent Chen, now working with authorities, makes the crucial call to Webb's network.
            
            "This is Chen. Rivera has been eliminated. The investigation dies with him."
            
            7:52 PM - "Alpha Team, we have visual on the child. Warehouse, second floor. Four armed subjects."
            
            7:53 PM - "Bravo Team in position. Webb is in the penthouse with three associates. Preparing for breach."
            
            7:54 PM - "Charlie Team, aircraft engines starting. Suspects attempting immediate departure."
            
            Agent Stone gives the order: "All teams, GO GO GO!"
            
            Through multiple radio channels, you hear the operations unfold:
            
            ALPHA: "Hostage secured! Emma Chen is safe! Four suspects in custody!"
            BRAVO: "Webb in custody! Resisting arrest! Taser deployed!"  
            CHARLIE: "Aircraft stopped! Three subjects arrested! Evidence recovered!"
            
            But Webb's voice cuts through the radio chatter: "You think this ends anything? The network goes deeper than you know! Other journalists will die for this!"`,
            image: "synchronized_federal_operation.png",
            imagePrompt: "FBI command center with multiple operation screens, agents coordinating complex multi-location raid",
            sources: ["FBI Hostage Rescue", "Coordinated Federal Operations", "Multi-Jurisdiction Arrests"],
            choices: [
                {
                    text: "Interrogate Webb about the deeper network",
                    nextScene: "webb_interrogation_deeper_network",
                    progressIncrease: 30,
                    evidence: true
                },
                {
                    text: "Analyze the evidence recovered from the private jet",
                    nextScene: "private_jet_evidence_analysis",
                    progressIncrease: 28,
                    evidence: true
                },
                {
                    text: "Investigate Webb's warning about other journalists",
                    nextScene: "journalist_threat_investigation",
                    progressIncrease: 32,
                    evidence: true
                },
                {
                    text: "Focus on reuniting Agent Chen with her daughter",
                    nextScene: "family_reunion_aftermath",
                    progressIncrease: 25,
                    evidence: true
                }
            ],
            educationalNote: "While this synchronized operation is fictional, federal agencies do coordinate complex multi-location operations in major cases."
        },

        journalist_threat_investigation: {
            text: `THE JOURNALIST KILL LIST
            
            DAY 4 - 9:00 AM - FBI THREAT ASSESSMENT CENTER
            
            Webb's final warning about other journalists wasn't a bluff. The evidence from his private jet revealed a horrifying truth:

            📋 OPERATION: MEDIA SILENCE
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            Documents recovered from Webb's jet reveal a systematic campaign to eliminate investigative journalists covering entertainment industry crimes:
            
            THE HIT LIST:
            ✓ Marcus Rivera (YOU) - Status: ELIMINATED (false report)
            ✓ Sarah Martinez, Miami Herald - Status: COMPLETED 
            ✓ David Chen, Rolling Stone - Status: COMPLETED
            ▶ Jessica Rodriguez, Washington Post - Status: IN PROGRESS
            ▶ Michael Johnson, New York Times - Status: PLANNING PHASE
            ▶ Lisa Thompson, CNN - Status: SURVEILLANCE
            
            The files contain detailed surveillance photos, home addresses, family member information, and preferred "accident" methods for each journalist.
            
            Agent Stone shows you the most chilling document: a payment ledger showing $2.3 million paid to professional assassins over the past two years.
            
            "Rivera, you weren't paranoid. They really were trying to kill you. Webb's network has been systematically eliminating anyone who gets too close to the truth."
            
            Your phone rings. Unknown number.
            
            "Rivera? This is Jessica Rodriguez, Washington Post. I just got a call that someone broke into my apartment. My editor is dead. They left a note: 'Stop investigating or join Rivera.'"
            
            The operation is still active. Even with Webb in custody, the killing network is still operational.`,
            image: "journalist_kill_list_evidence.png",
            imagePrompt: "FBI evidence table showing assassination contracts, journalist photos with red X marks, threatening documents",
            sources: ["Journalist Safety Investigation", "Professional Assassination Networks", "Media Intimidation Campaigns"],
            choices: [
                {
                    text: "Coordinate immediate protection for all targeted journalists",
                    nextScene: "journalist_protection_operation",
                    progressIncrease: 35,
                    evidence: true
                },
                {
                    text: "Set up a trap using yourself as bait to catch the assassins",
                    nextScene: "journalist_bait_operation",
                    progressIncrease: 40,
                    evidence: true
                },
                {
                    text: "Investigate the assassination network's financial backing",
                    nextScene: "assassination_network_investigation",
                    progressIncrease: 32,
                    evidence: true
                },
                {
                    text: "Go public with the kill list to expose the conspiracy",
                    nextScene: "public_exposure_gambit",
                    progressIncrease: 30,
                    evidence: true
                }
            ],
            educationalNote: "While this assassination network is fictional, journalists do face real threats when investigating powerful criminal organizations."
        },

        public_exposure_gambit: {
            text: `GOING PUBLIC: THE BOMBSHELL REVELATION
            
            DAY 4 - 6:00 PM - LIVE TELEVISION BROADCAST
            
            You've made the most dangerous decision of your career: exposing the entire conspiracy on live national television:

            📺 BREAKING NEWS: THE DIDDY CONSPIRACY EXPOSED
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            "Good evening. I'm Alex Rivera, and what I'm about to reveal will shock you to your core."
            
            You're live on CNN with Anderson Cooper, the assassination list spread across the news desk. Every major network is carrying the feed.
            
            "The Sean Combs federal case is just the tip of the iceberg. Behind it lies a professional assassination network that has murdered at least six journalists over the past two years."
            
            You hold up the kill list. "These are the names of journalists marked for death simply for investigating entertainment industry crimes."
            
            Cooper leans forward: "You're saying there's an active conspiracy to murder journalists?"
            
            "Not just a conspiracy, Anderson. A successful one. Sarah Martinez and David Chen are dead. Jessica Rodriguez barely escaped with her life tonight."
            
            Your phone explodes with notifications. Social media is on fire. #JournalistKillList is trending worldwide.
            
            But through the studio window, you see something terrifying: three black SUVs pulling up outside CNN headquarters.
            
            Cooper's earpiece crackles. His face goes pale. "Alex, we're getting reports of armed men entering the building. Security is... oh God."
            
            The studio lights go out. Emergency power kicks in. This was supposed to protect you by going public, but you've just painted a target on everyone in the building.`,
            image: "live_tv_revelation_danger.png",
            imagePrompt: "CNN studio during live broadcast with assassination documents, emergency lighting, danger approaching",
            sources: ["Live Television Journalism", "Public Disclosure Protection", "Media Security Threats"],
            choices: [
                {
                    text: "Barricade in the studio and continue broadcasting",
                    nextScene: "studio_siege_broadcast",
                    progressIncrease: 45,
                    evidence: true
                },
                {
                    text: "Evacuate immediately and go into federal protection",
                    nextScene: "emergency_evacuation_protection",
                    progressIncrease: 35,
                    evidence: true
                },
                {
                    text: "Try to negotiate with the armed men",
                    nextScene: "studio_negotiation_attempt",
                    progressIncrease: 30,
                    evidence: true
                },
                {
                    text: "Use the CNN security system to trap the assassins",
                    nextScene: "media_security_counterattack",
                    progressIncrease: 38,
                    evidence: true
                }
            ],
            educationalNote: "While this dramatic scenario is fictional, investigative journalists do face real risks when exposing powerful criminal networks."
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
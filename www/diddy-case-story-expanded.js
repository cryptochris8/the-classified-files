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
            image: "federal_courthouse_morning",
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
            image: "federal_plaza_dawn",
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
            image: "confidential_documents",
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
            image: "fbi_cyber_division",
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
            image: "library_secret_meeting",
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
            image: "hsi_classified_briefing",
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
            image: "financial_crimes_investigation",
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
            image: "federal_indictment_document",
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
            image: "investigation_timeline_board",
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
            image: "federal_raid_evidence",
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
            image: "witness_testimony_courtroom",
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
            image: "federal_courthouse_verdict",
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
            image: "rico_investigation_board",
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
            image: "legal_education_quiz",
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
            image: "evidence_processing_lab",
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
            image: "digital_forensics_lab",
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
            image: "treasury_financial_investigation",
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
            image: "federal_protection_briefing",
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
            image: "legal_precedents_research",
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
            image: "legal_expert_panel",
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
            image: "federal_detention_facility",
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
            image: "undercover_surveillance_nightclub",
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
            image: "fbi_raid_nightclub_chaos",
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
            image: "fbi_internal_affairs_investigation",
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
            image: "federal_plaza_trap_meeting",
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
            image: "emotional_mole_confession",
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
            image: "synchronized_federal_operation",
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
            image: "journalist_kill_list_evidence",
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
            image: "live_tv_revelation_danger",
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
            image: "final_report_complete",
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
        },

        inner_circle_investigation: {
            text: `INNER CIRCLE INVESTIGATION
            
            HSI CLASSIFIED BRIEFING - TIER 1 ASSOCIATES
            
            Agent Chen pulls up a complex network diagram on the secure terminal. "These are the key figures in Combs' inner circle. Each one played a specific role in the alleged criminal enterprise."
            
            THE INNER CIRCLE:
            
            CHIEF OF STAFF - Kristina Khorram
            - Role: Gatekeeper and enforcer
            - Controlled access to Combs
            - Allegedly threatened victims who tried to leave
            - Managed NDAs and legal threats
            
            HEAD OF SECURITY - [REDACTED]
            - Former law enforcement
            - Oversaw surveillance operations
            - Allegedly intimidated witnesses
            - Controlled evidence destruction
            
            BUSINESS MANAGER - [REDACTED]
            - Managed financial transactions
            - Created shell company structures
            - Allegedly facilitated money laundering
            - Controlled victim payments
            
            "What's disturbing," Agent Chen notes, "is how professional this operation was. This wasn't amateur hour - they had protocols, procedures, and contingency plans."
            
            A new file appears: "LOYALTY ENFORCEMENT METHODS"
            - Financial control over associates
            - Blackmail material on key figures
            - Promises of career advancement
            - Threats of industry blacklisting`,
            image: "inner_circle_network_diagram",
            imagePrompt: "Federal investigation board showing network connections, photos of associates, organizational hierarchy charts",
            sources: ["HSI Intelligence Files", "Witness Testimonies", "Corporate Records"],
            choices: [
                {
                    text: "Investigate Kristina Khorram's role deeper",
                    nextScene: "chief_of_staff_investigation",
                    progressIncrease: 20,
                    evidence: true,
                    factual: true
                },
                {
                    text: "Follow the security apparatus trail",
                    nextScene: "security_network_investigation",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Trace the financial manager connections",
                    nextScene: "financial_investigation",
                    progressIncrease: 20,
                    evidence: true
                }
            ],
            educationalNote: "Criminal enterprises often have structured hierarchies similar to legitimate businesses, making RICO prosecutions effective."
        },

        seized_accounts_analysis: {
            text: `FEDERAL ASSET SEIZURE ANALYSIS
            
            FINANCIAL CRIMES UNIT - ASSET FREEZE REPORT
            
            Detective Kim displays the seized account details on multiple screens. "The federal government moved fast. Within hours of the indictment, they froze everything."
            
            SEIZED ASSETS - INITIAL WAVE:
            
            Bank Accounts:
            - Chase Private Client: $12.3 million
            - Bank of America: $8.7 million
            - Wells Fargo Business: $5.2 million
            - Citibank: $3.8 million
            
            Investment Accounts:
            - Morgan Stanley: $9.4 million in securities
            - Goldman Sachs: $6.2 million mixed portfolio
            - Cryptocurrency wallets: $1.8 million (Bitcoin, Ethereum)
            
            Real Estate (Liens Placed):
            - Miami Beach Mansion: $48 million
            - Los Angeles Compound: $39 million
            - Manhattan Penthouse: $35 million
            - Atlanta Properties: $22 million combined
            
            "But here's what's interesting," she continues, pulling up transaction histories. "Look at the movement patterns in the 48 hours before arrest."
            
            SUSPICIOUS PRE-ARREST ACTIVITY:
            - Large wire transfers to offshore accounts
            - Rapid liquidation of investments
            - Unusual cryptocurrency transactions
            - Property transfers to shell companies
            
            "Someone knew this was coming. They tried to move assets but we caught most of it. The question is - who tipped them off?"`,
            image: "seized_assets_federal_freeze",
            imagePrompt: "Financial crimes unit with multiple monitors showing frozen accounts, asset charts, federal seizure documents",
            sources: ["Federal Asset Forfeiture Records", "Banking Compliance Reports", "Court Orders"],
            choices: [
                {
                    text: "Trace the offshore wire transfers",
                    nextScene: "offshore_banking_investigation",
                    progressIncrease: 22,
                    evidence: true,
                    factual: true
                },
                {
                    text: "Investigate the tip-off source",
                    nextScene: "federal_leak_investigation",
                    progressIncrease: 22,
                    evidence: true
                },
                {
                    text: "Analyze cryptocurrency movements",
                    nextScene: "crypto_investigation",
                    progressIncrease: 22,
                    evidence: true
                },
                {
                    text: "Review property transfer documents",
                    nextScene: "property_network_investigation",
                    progressIncrease: 22,
                    evidence: true
                }
            ],
            educationalNote: "Federal asset forfeiture laws allow the government to seize property connected to criminal activity, even before conviction."
        },

        financial_providers_investigation: {
            text: `FINANCIAL SERVICES PROVIDER INVESTIGATION
            
            FBI FINANCIAL CRIMES - SERVICE PROVIDER ANALYSIS
            
            Agent Martinez from Financial Crimes presents her findings. "We've identified the key financial service providers who enabled this enterprise. Some knew, some should have known."
            
            KEY FINANCIAL FACILITATORS:
            
            ACCOUNTING FIRM - [Major Firm Redacted]
            - Managed complex corporate structures
            - Created offshore entities
            - Filed suspicious tax returns
            - Red flags: Ignored unusual transaction patterns
            
            BANKING RELATIONSHIPS:
            - Private banking services at 3 major banks
            - VIP treatment overrode compliance checks
            - Suspicious Activity Reports (SARs) filed but not acted upon
            - Relationship managers received lavish gifts
            
            PAYMENT PROCESSORS:
            - Cash App for Business: $2.3M processed
            - Stripe: $1.8M in suspicious transactions
            - PayPal: Multiple flagged accounts
            - Crypto exchanges: Unregistered money transmission
            
            "The pattern is clear," Agent Martinez explains. "When you're dealing with a celebrity client, normal compliance procedures were routinely bypassed."
            
            She pulls up communication records. "Look at these emails between bank executives. They knew something was wrong but chose profits over compliance."
            
            CRIMINAL EXPOSURE:
            - Banks face potential criminal charges
            - Accountants may lose licenses
            - Payment processors under federal investigation
            - Individual executives facing prosecution`,
            image: "financial_services_investigation",
            imagePrompt: "FBI financial crimes unit investigating bank records, compliance documents, executive communications on screens",
            sources: ["FinCEN Reports", "Bank Compliance Records", "Federal Subpoenas"],
            choices: [
                {
                    text: "Focus on the accounting firm's role",
                    nextScene: "accounting_firm_investigation",
                    progressIncrease: 23,
                    evidence: true,
                    factual: true
                },
                {
                    text: "Investigate banking compliance failures",
                    nextScene: "banking_compliance_investigation",
                    progressIncrease: 23,
                    evidence: true
                },
                {
                    text: "Trace payment processor violations",
                    nextScene: "payment_processor_investigation",
                    progressIncrease: 23,
                    evidence: true
                },
                {
                    text: "Review executive criminal exposure",
                    nextScene: "executive_prosecution_analysis",
                    progressIncrease: 23,
                    evidence: true
                }
            ],
            educationalNote: "Financial institutions have legal obligations to report suspicious activities and can face criminal charges for willful blindness."
        },

        case_selection: {
            text: `CASE FILE SELECTION
            
            THE CLASSIFIED FILES DATABASE
            
            You return to the secure terminal in the federal document archive. Multiple case files are available for investigation.
            
            Each file represents a different chapter in America's classified history - some resolved, others still shrouded in mystery.
            
            Your credentials grant you access to previously sealed documents, witness testimonies, and evidence that shaped these pivotal moments.
            
            Which classified case will you investigate?`,
            image: "classified_files_archive",
            imagePrompt: "Secure government archive room with multiple case file folders, classified stamps, investigator at terminal",
            sources: ["Federal Archives", "Declassified Documents", "Congressional Records"],
            choices: [
                {
                    text: "Return to main case selection",
                    isEndChoice: true
                }
            ],
            educationalNote: "The Classified Files contain some of America's most significant investigations, each revealing different aspects of power, justice, and truth."
        },

        archive_complete: {
            text: `CASE ARCHIVED
            
            FEDERAL INVESTIGATION ARCHIVE - CASE CLOSED
            
            Your comprehensive investigation of the Diddy Federal Case has been archived in the permanent record.
            
            CASE SUMMARY:
            - Investigation Duration: Extensive
            - Evidence Collected: ${window.gameState ? window.gameState.evidenceCount : 'Multiple'} pieces
            - Key Revelations: Criminal enterprise structure exposed
            - Impact: Landmark RICO prosecution in entertainment industry
            
            Your work contributed to public understanding of:
            - Federal RICO prosecutions
            - Entertainment industry criminal enterprises
            - Financial crimes and money laundering
            - Witness protection protocols
            - Modern federal investigation techniques
            
            This case file is now part of the permanent historical record.
            
            Thank you for your service to truth and justice.`,
            image: "case_archived_complete",
            imagePrompt: "Official case file being stamped ARCHIVED, filing into permanent federal records, achievement recognition",
            sources: ["Complete Investigation Records", "Federal Archives", "Historical Documentation"],
            choices: [
                {
                    text: "Return to case selection",
                    isEndChoice: true
                }
            ],
            educationalNote: "Every federal investigation contributes to our understanding of justice and helps prevent future crimes through precedent and awareness."
        },

        agency_question: {
            text: `FEDERAL AGENCY COORDINATION
            
            Agent Chen pulls up classified coordination protocols on her secure terminal.
            
            "The Diddy investigation involves multiple federal agencies working together. Each has specific jurisdictions and expertise."
            
            She shows you the inter-agency coordination chart:
            
            • FBI: Criminal enterprise investigation, RICO prosecution
            • DEA: Drug trafficking elements
            • IRS: Financial crimes and tax evasion
            • Homeland Security: Human trafficking aspects
            • U.S. Marshals: Asset forfeiture and fugitive operations
            
            "Understanding which agency leads which aspect is crucial for any federal prosecutor. Which agency would typically take the lead in a RICO case involving organized criminal enterprise?"`,
            image: "federal_agencies_coordination",
            imagePrompt: "Multiple federal agency badges and logos displayed on wall, interagency coordination meeting room with officials",
            sources: ["Department of Justice Guidelines", "Federal Agency Protocols", "RICO Task Force Documentation"],
            choices: [
                {
                    text: "FBI - They handle organized crime and RICO prosecutions",
                    nextScene: "agent_chen_leak_investigation",
                    collectEvidence: true
                },
                {
                    text: "DEA - They focus on drug-related enterprises",
                    nextScene: "agent_chen_briefing"
                },
                {
                    text: "U.S. Marshals - They handle major criminal cases",
                    nextScene: "mysterious_contact_meeting"
                }
            ],
            educationalNote: "The FBI typically leads RICO prosecutions as they specialize in organized crime and criminal enterprises, though they coordinate closely with other agencies."
        },

        agent_chen_leak_investigation: {
            text: `LEAK INVESTIGATION PROTOCOL
            
            Agent Chen activates enhanced security protocols as she briefs you on a critical development.
            
            "We've detected unauthorized access to sensitive case files. Someone with high-level clearance has been leaking information about our investigation."
            
            She shows you the security breach timeline:
            
            TIMELINE OF UNAUTHORIZED ACCESS:
            • Day 1: First breach detected in financial records division
            • Day 3: Witness list accessed without authorization
            • Day 5: Evidence inventory downloaded to external device
            • Day 7: Your investigation file viewed by unknown user
            
            "This isn't random. Someone is specifically targeting our Diddy investigation. We need to identify the mole before they compromise witness safety."
            
            Digital forensics shows the breaches originated from within federal law enforcement.`,
            image: "digital_security_breach",
            imagePrompt: "Computer screens showing security breach alerts, digital forensics investigation, classified access logs",
            sources: ["Federal Security Protocols", "Digital Forensics Reports", "Internal Affairs Investigation"],
            choices: [
                {
                    text: "Investigate the digital trail of the security breaches",
                    nextScene: "deleted_data_recovery",
                    collectEvidence: true
                },
                {
                    text: "Focus on identifying suspects within law enforcement",
                    nextScene: "double_agent_evidence_gathering"
                },
                {
                    text: "Implement immediate security measures to prevent further leaks",
                    nextScene: "enhanced_security_investigation"
                }
            ],
            educationalNote: "Internal security breaches in federal investigations require immediate response and specialized digital forensics to protect ongoing cases and witness safety."
        },

        assassination_network_investigation: {
            text: `ASSASSINATION NETWORK EXPOSED
            
            Deep within the classified files, you uncover a disturbing network of hired intimidators and potential assassins connected to the entertainment industry's dark underworld.
            
            NETWORK STRUCTURE IDENTIFIED:
            
            • Tier 1: Celebrity handlers and fixers
            • Tier 2: Private security companies with questionable practices  
            • Tier 3: International contractors specializing in "problem resolution"
            • Tier 4: Underground network of enforcers and intimidators
            
            Financial records show payments to individuals with military backgrounds and histories of violence, all traced back through shell companies to entertainment industry accounts.
            
            Phone intercepts reveal code words:
            "Studio cleanup" = witness intimidation
            "Final cut" = elimination order
            "Wrap party" = operation completed
            
            You realize this network extends far beyond any single case - it's an industry-wide protection racket.`,
            image: "assassination_network_chart",
            imagePrompt: "Dark investigation board with photos, connections, international network chart showing entertainment industry connections to dangerous individuals",
            sources: ["FBI Financial Crimes Unit", "International Task Force Files", "Classified Intelligence Reports"],
            choices: [
                {
                    text: "Trace the financial connections to identify network leaders",
                    nextScene: "money_laundering_analysis",
                    collectEvidence: true
                },
                {
                    text: "Focus on protecting potential targets and witnesses",
                    nextScene: "witness_protection_program"
                },
                {
                    text: "Coordinate with international law enforcement",
                    nextScene: "federal_agency_coordination"
                }
            ],
            educationalNote: "Criminal enterprises often develop sophisticated networks for witness intimidation and elimination, requiring extensive international cooperation to dismantle."
        },

        asset_forfeiture_analysis: {
            text: `ASSET FORFEITURE PROCEEDINGS
            
            You review the massive civil asset forfeiture case that runs parallel to the criminal prosecution. The scope is staggering.
            
            ASSETS SUBJECT TO FORFEITURE:
            
            REAL ESTATE:
            • Miami Beach mansion - $40 million
            • Los Angeles compound - $35 million  
            • New York penthouse - $25 million
            • Private island in the Caribbean - $20 million
            • Multiple commercial properties - $50 million
            
            VEHICLES & LUXURY ITEMS:
            • Fleet of luxury cars - $5 million
            • Private jets (2) - $60 million
            • Yacht collection - $30 million
            • Art and jewelry - $15 million
            
            BUSINESS INTERESTS:
            • Record label equity - $200 million
            • Production company holdings - $150 million
            • Restaurant chains - $75 million
            
            Total estimated value: Over $700 million
            
            Legal challenge: Proving these assets were obtained through criminal enterprise proceeds.`,
            image: "luxury_assets_forfeiture",
            imagePrompt: "Luxury mansion, private jets, expensive cars and jewelry laid out for federal asset forfeiture documentation",
            sources: ["U.S. Marshals Asset Forfeiture Division", "Financial Crimes Investigation", "Civil Forfeiture Court Filings"],
            choices: [
                {
                    text: "Analyze the paper trail connecting assets to criminal proceeds",
                    nextScene: "business_documents_analysis",
                    collectEvidence: true
                },
                {
                    text: "Focus on the business empire's legitimate vs. illegitimate revenue",
                    nextScene: "business_empire_investigation"
                },
                {
                    text: "Review legal challenges to the forfeiture proceedings",
                    nextScene: "defense_strategy_analysis"
                }
            ],
            educationalNote: "Civil asset forfeiture allows the government to seize property connected to criminal activity, but requires proving the assets were derived from illegal proceeds."
        },

        audio_video_evidence: {
            text: `MULTIMEDIA EVIDENCE ANALYSIS
            
            The prosecution's case heavily relies on audio and video evidence seized during federal raids. You review the most damaging recordings.
            
            KEY EVIDENCE CATEGORIES:
            
            SECURITY FOOTAGE:
            • Hotel surveillance showing alleged incidents
            • Private residence cameras capturing suspicious activities
            • Airport footage tracking movements during criminal periods
            
            AUDIO RECORDINGS:
            • Phone calls discussing "parties" and "entertainment services"
            • Studio recordings containing incriminating conversations
            • Wire tap evidence from federal investigation
            
            DIGITAL COMMUNICATIONS:
            • Text messages coordinating alleged criminal activities
            • Social media posts providing timeline evidence
            • Email chains showing business structure and payments
            
            EXPERT ANALYSIS:
            • Voice recognition confirms identity of speakers
            • Video authentication verifies footage integrity
            • Timeline analysis connects evidence to specific charges
            
            The multimedia evidence creates a comprehensive picture of alleged criminal enterprise operations.`,
            image: "multimedia_evidence_lab",
            imagePrompt: "FBI evidence analysis lab with multiple screens showing video footage, audio waveforms, and digital communication records",
            sources: ["FBI Digital Evidence Unit", "Forensic Audio Analysis", "Video Authentication Reports"],
            choices: [
                {
                    text: "Focus on the most incriminating audio recordings",
                    nextScene: "encrypted_communications_analysis",
                    collectEvidence: true
                },
                {
                    text: "Analyze video evidence and security footage",
                    nextScene: "surveillance_evidence_analysis"
                },
                {
                    text: "Review digital communications and metadata",
                    nextScene: "location_data_analysis"
                }
            ],
            educationalNote: "Multimedia evidence requires careful authentication and expert analysis to ensure admissibility and reliability in federal court."
        },

        bahamas_financial_trail: {
            text: `BAHAMAS BANKING INVESTIGATION
            
            Following the international financial trail, you uncover a complex network of offshore accounts in the Bahamas designed to launder money and hide assets.
            
            OFFSHORE BANKING NETWORK:
            
            PRIMARY ACCOUNTS:
            • Commonwealth Bank of Bahamas - $15 million
            • Fidelity Bank (Bahamas) - $8 million  
            • Private banking relationships - $22 million
            
            SHELL COMPANY STRUCTURE:
            • "Caribbean Entertainment Holdings" - Primary holding company
            • "Island Music Ventures" - Royalty collection entity
            • "Paradise Resort Management" - Real estate holdings
            • "Tropical Business Services" - Service company front
            
            MONEY FLOW PATTERN:
            U.S. Revenue → Shell Companies → Offshore Accounts → Asset Purchases → U.S. Real Estate
            
            Bahamian authorities are cooperating through mutual legal assistance treaties, but bank secrecy laws complicate the investigation.
            
            The sophistication suggests professional money laundering advice from international financial consultants.`,
            image: "bahamas_offshore_banking",
            imagePrompt: "Luxury Bahamian bank building, financial documents, international money transfer charts, tropical banking district",
            sources: ["Bahamian Financial Intelligence Unit", "U.S. Treasury FinCEN", "International Banking Records"],
            choices: [
                {
                    text: "Trace the money back to specific criminal activities",
                    nextScene: "money_laundering_analysis",
                    collectEvidence: true
                },
                {
                    text: "Focus on the Cayman Islands connections",
                    nextScene: "cayman_islands_investigation"
                },
                {
                    text: "Investigate the professional advisors who set up this structure",
                    nextScene: "co_conspirator_payments"
                }
            ],
            educationalNote: "International money laundering investigations require cooperation between multiple countries and understanding of complex offshore banking structures."
        },

        bail_denial_analysis: {
            text: `BAIL HEARING ANALYSIS
            
            You review the federal magistrate's decision to deny bail, examining the legal reasoning and evidence that convinced the court the defendant poses a flight risk and danger to the community.
            
            PROSECUTION'S BAIL ARGUMENTS:
            
            FLIGHT RISK FACTORS:
            • Multiple private jets and international travel capability
            • Significant offshore financial assets
            • No strong community ties relative to wealth
            • History of evading law enforcement
            • Access to countries without extradition treaties
            
            DANGER TO COMMUNITY:
            • Pattern of alleged witness intimidation
            • Access to dangerous criminal associates
            • History of violent behavior
            • Ongoing criminal enterprise operations
            • Threat to victim and witness safety
            
            COURT'S DECISION:
            "No condition or combination of conditions can reasonably assure the appearance of the defendant or the safety of the community."
            
            The judge specifically cited the defendant's vast resources and alleged history of obstruction.`,
            image: "federal_courthouse_bail_hearing",
            imagePrompt: "Federal courtroom during bail hearing, judge's bench, defendant in custody, legal documents on table",
            sources: ["Federal Bail Hearing Transcript", "Magistrate's Order", "Pre-trial Services Report"],
            choices: [
                {
                    text: "Analyze the flight risk assessment in detail",
                    nextScene: "flight_risk_analysis",
                    collectEvidence: true
                },
                {
                    text: "Review the danger to community evidence",
                    nextScene: "witness_protection_analysis"
                },
                {
                    text: "Examine defense arguments for bail",
                    nextScene: "defense_strategy_analysis"
                }
            ],
            educationalNote: "Federal bail decisions consider flight risk and danger to community, with wealthy defendants often facing higher scrutiny due to their resources and ability to flee."
        },

        business_documents_analysis: {
            text: `BUSINESS DOCUMENTS INVESTIGATION
            
            Seized during federal raids, thousands of business documents reveal the intricate structure of what prosecutors allege was a criminal enterprise disguised as legitimate business operations.
            
            KEY DOCUMENT CATEGORIES:
            
            CORPORATE STRUCTURE:
            • Articles of incorporation for 47 shell companies
            • Operating agreements showing hidden ownership
            • Board meeting minutes discussing illegal activities
            • Inter-company loan agreements used for money laundering
            
            FINANCIAL RECORDS:
            • Accounting ledgers with dual bookkeeping systems
            • Payment authorizations for suspicious services
            • Expense reports for alleged criminal activities
            • Investment documents in offshore entities
            
            EMPLOYMENT AGREEMENTS:
            • NDAs with unusual intimidation clauses
            • "Entertainment services" contracts
            • Security personnel agreements with questionable duties
            • Consulting agreements for "problem resolution"
            
            The documents show a systematic approach to conducting criminal activity under the guise of legitimate business.`,
            image: "business_documents_evidence",
            imagePrompt: "Stacks of corporate documents, financial ledgers, contracts spread across investigation table, FBI evidence tags",
            sources: ["Federal Raid Evidence", "Corporate Secretary Files", "Accounting Firm Records"],
            choices: [
                {
                    text: "Focus on the corporate structure and shell companies",
                    nextScene: "enterprise_structure_analysis",
                    collectEvidence: true
                },
                {
                    text: "Analyze the financial records and dual bookkeeping",
                    nextScene: "money_laundering_analysis"
                },
                {
                    text: "Review employment agreements and NDAs",
                    nextScene: "entertainment_services_investigation"
                }
            ],
            educationalNote: "Business document analysis is crucial in RICO cases to establish the structure and operations of alleged criminal enterprises hidden within legitimate businesses."
        },

        business_empire_investigation: {
            text: `BUSINESS EMPIRE STRUCTURE
            
            Your investigation reveals a vast business empire that prosecutors allege served as both legitimate revenue source and criminal enterprise infrastructure.
            
            EMPIRE COMPONENTS:
            
            ENTERTAINMENT BUSINESSES:
            • Bad Boy Records - Music production and distribution
            • Sean John Clothing - Fashion brand and retail
            • Revolt Media - Television and digital media network  
            • Blue Flame Agency - Marketing and talent management
            
            HOSPITALITY & LIFESTYLE:
            • Restaurant chains in major cities
            • Luxury event planning companies
            • VIP travel and concierge services
            • Private club memberships and operations
            
            INVESTMENT HOLDINGS:
            • Real estate development projects
            • Technology startup investments
            • Liquor brand partnerships
            • International licensing agreements
            
            ALLEGED CRIMINAL INTEGRATION:
            • Legitimate businesses used to launder criminal proceeds
            • Corporate structure facilitates illegal activities
            • Employee infrastructure supports criminal enterprise
            • International operations provide jurisdictional complexity
            
            The challenge: Separating legitimate business from alleged criminal enterprise.`,
            image: "business_empire_chart",
            imagePrompt: "Corporate organizational chart showing multiple business entities, legitimate and alleged criminal connections mapped out",
            sources: ["Corporate Registration Records", "SEC Filings", "Business License Documentation"],
            choices: [
                {
                    text: "Investigate how legitimate businesses allegedly facilitated crimes",
                    nextScene: "enterprise_structure_analysis",
                    collectEvidence: true
                },
                {
                    text: "Focus on the international business operations",
                    nextScene: "offshore_banking_investigation"
                },
                {
                    text: "Analyze the revenue streams and financial integration",
                    nextScene: "money_laundering_analysis"
                }
            ],
            educationalNote: "RICO prosecutions often involve complex business empires where legitimate businesses are allegedly used to facilitate and conceal criminal activities."
        },

        celebrity_status_legal_analysis: {
            text: `CELEBRITY STATUS LEGAL IMPLICATIONS
            
            You analyze how celebrity status affects federal criminal proceedings, examining the unique challenges prosecutors face when dealing with high-profile defendants.
            
            LEGAL CONSIDERATIONS:
            
            JURY SELECTION CHALLENGES:
            • Pre-trial publicity creates bias concerns
            • Difficulty finding impartial jurors
            • Celebrity worship vs. celebrity resentment
            • Media influence on potential jurors
            
            COURTROOM SECURITY:
            • Enhanced security protocols required
            • Media circus management
            • Fan demonstrations outside courthouse
            • Witness intimidation through public exposure
            
            DEFENSE ADVANTAGES:
            • Access to top-tier legal representation
            • Public relations campaigns to influence opinion
            • Character witnesses from entertainment industry
            • Financial resources for expert testimony
            
            PROSECUTION CHALLENGES:
            • Higher burden of proof in public perception
            • Media scrutiny of every legal decision
            • Potential jury nullification
            • Political pressure from various stakeholders
            
            The justice system must navigate these complexities while maintaining fairness.`,
            image: "celebrity_courthouse_media",
            imagePrompt: "Federal courthouse surrounded by media trucks, photographers, security barriers, celebrity legal proceedings",
            sources: ["Federal Court Administration", "Judicial Conference Guidelines", "Media Relations Protocols"],
            choices: [
                {
                    text: "Focus on jury selection challenges",
                    nextScene: "defense_witness_challenge",
                    collectEvidence: true
                },
                {
                    text: "Analyze the media impact on proceedings",
                    nextScene: "media_security_counterattack"
                },
                {
                    text: "Review defense strategy advantages",
                    nextScene: "defense_strategy_analysis"
                }
            ],
            educationalNote: "Celebrity defendants create unique challenges for the justice system, requiring careful balance between fair proceedings and public interest."
        },

        civil_lawsuit_analysis: {
            text: `CIVIL LITIGATION PARALLEL TRACK
            
            Running alongside the criminal prosecution are numerous civil lawsuits that could impact the federal case. You review the complex legal landscape.
            
            ACTIVE CIVIL CASES:
            
            VICTIM LAWSUITS:
            • Personal injury claims totaling $500+ million
            • Sexual assault allegations in civil court
            • Emotional distress and trauma damages
            • Loss of earnings and future opportunities
            
            BUSINESS DISPUTES:
            • Contract breaches with entertainment partners
            • Employment violations and wrongful termination
            • Intellectual property disputes
            • Shareholder derivative actions
            
            GOVERNMENT ACTIONS:
            • Tax liens and IRS collection proceedings
            • SEC investigations into business practices
            • State regulatory violations
            • Municipal permit and licensing issues
            
            STRATEGIC IMPLICATIONS:
            • Civil depositions may reveal evidence for criminal case
            • Fifth Amendment challenges in civil proceedings
            • Asset preservation orders affecting criminal forfeiture
            • Settlement negotiations impacting criminal cooperation
            
            The interaction between civil and criminal cases creates strategic complexity.`,
            image: "civil_criminal_legal_strategy",
            imagePrompt: "Legal conference room with multiple case files, civil and criminal court documents, strategy boards",
            sources: ["Civil Court Filings", "Parallel Litigation Analysis", "Legal Strategy Assessment"],
            choices: [
                {
                    text: "Focus on how civil cases impact criminal prosecution",
                    nextScene: "evidence_legal_analysis",
                    collectEvidence: true
                },
                {
                    text: "Analyze victim civil lawsuit evidence",
                    nextScene: "victim_testimony_analysis"
                },
                {
                    text: "Review business dispute implications",
                    nextScene: "enterprise_structure_analysis"
                }
            ],
            educationalNote: "Parallel civil and criminal proceedings create complex legal interactions that can significantly impact both case outcomes and strategic decisions."
        },

        classified_files_access: {
            text: `CLASSIFIED ACCESS AUTHORIZATION
            
            Your federal credentials have been upgraded to access the most sensitive classified materials in the Diddy investigation. The information you're about to see is compartmentalized at the highest levels.
            
            CLASSIFICATION LEVELS ACCESSED:
            
            SECRET LEVEL:
            • Financial intelligence from foreign governments
            • Wiretap transcripts from federal surveillance
            • Informant reports from within criminal organization
            • Asset tracing through international banking systems
            
            TOP SECRET LEVEL:
            • National security implications of investigation
            • International cooperation agreements
            • Diplomatic communications regarding case
            • Intelligence agency cooperation protocols
            
            COMPARTMENTALIZED ACCESS:
            • Special Access Program (SAP) materials
            • Foreign intelligence service cooperation
            • Ongoing operations that cannot be disclosed
            • Sources and methods protection protocols
            
            WARNING: This material is classified for national security reasons. Unauthorized disclosure carries severe criminal penalties.
            
            The scope of classified involvement suggests this case has implications beyond typical criminal prosecution.`,
            image: "classified_documents_vault",
            imagePrompt: "Secure federal facility, classified document vault, security clearance verification, top secret stamp",
            sources: ["Classified Federal Investigation Files", "Intelligence Community Assessment", "National Security Documentation"],
            choices: [
                {
                    text: "Review the most sensitive financial intelligence",
                    nextScene: "offshore_banking_investigation",
                    collectEvidence: true
                },
                {
                    text: "Access international cooperation materials",
                    nextScene: "federal_agency_coordination"
                },
                {
                    text: "Examine national security implications",
                    nextScene: "enhanced_security_investigation"
                }
            ],
            educationalNote: "Some federal investigations involve classified materials when they intersect with national security, foreign intelligence, or ongoing operations."
        },

        co_conspirator_payments: {
            text: `CO-CONSPIRATOR PAYMENT ANALYSIS
            
            Following the money trail reveals a network of payments to alleged co-conspirators and enablers. The financial web extends throughout the entertainment industry and beyond.
            
            PAYMENT CATEGORIES:
            
            DIRECT CO-CONSPIRATORS:
            • Security personnel: $2.3 million annually
            • Personal assistants: $1.8 million total
            • Business associates: $5.7 million in consulting fees
            • Legal fixers: $3.2 million in attorney fees
            
            ENABLERS AND FACILITATORS:
            • Hotel and venue personnel: $890,000 in payments
            • Transportation providers: $1.2 million
            • Medical professionals: $650,000
            • Technology specialists: $540,000
            
            INDIRECT PAYMENTS:
            • Shell company disbursements: $8.9 million
            • Charitable donations as cover: $2.1 million
            • Business investment kickbacks: $4.3 million
            • Real estate transaction kickbacks: $6.7 million
            
            PATTERN ANALYSIS:
            • Payments increase during alleged criminal activity periods
            • Bonus payments following "problem resolution"
            • Loyalty payments to maintain silence
            • Intimidation payments disguised as business expenses
            
            Total identified co-conspirator payments: Over $38 million`,
            image: "co_conspirator_payment_web",
            imagePrompt: "Financial crime investigation board showing payment connections, money flow charts, co-conspirator network",
            sources: ["Financial Crimes Task Force", "Banking Records Analysis", "Money Laundering Investigation"],
            choices: [
                {
                    text: "Focus on the security personnel payment structure",
                    nextScene: "protection_racket_investigation",
                    collectEvidence: true
                },
                {
                    text: "Analyze shell company payment mechanisms",
                    nextScene: "money_laundering_analysis"
                },
                {
                    text: "Investigate the loyalty payment system",
                    nextScene: "witness_protection_analysis"
                }
            ],
            educationalNote: "RICO prosecutions often focus on payment patterns to co-conspirators as evidence of criminal enterprise structure and operations."
        },

        cayman_islands_investigation: {
            text: `CAYMAN ISLANDS FINANCIAL NETWORK
            
            The investigation extends to the Cayman Islands, revealing sophisticated offshore financial structures designed to hide assets and facilitate money laundering.
            
            CAYMAN FINANCIAL STRUCTURE:
            
            REGISTERED ENTITIES:
            • "Global Entertainment Holdings Ltd" - $45 million in assets
            • "Caribbean Media Investments" - $23 million portfolio
            • "Island Hospitality Group" - $18 million in properties
            • "Offshore Music Royalties Inc" - $31 million in IP rights
            
            BANKING RELATIONSHIPS:
            • Cayman National Bank - Primary banking relationship
            • Butterfield Private Bank - High-net-worth services
            • HSBC Cayman - International transfer hub
            • Local credit unions - Smaller transaction processing
            
            MONEY LAUNDERING MECHANISMS:
            • Invoicing for non-existent services
            • Inflated intellectual property licensing
            • Fake loan agreements between entities
            • Round-trip transactions to obscure origins
            
            REGULATORY CHALLENGES:
            • Bank secrecy laws limit information access
            • Mutual Legal Assistance Treaty (MLAT) required
            • Political sensitivities around financial services industry
            • Time delays in obtaining financial records
            
            Cayman authorities are cooperating, but the complex structure suggests professional financial advisory involvement.`,
            image: "cayman_islands_banking",
            imagePrompt: "Cayman Islands financial district, offshore bank buildings, legal documents, international banking investigation",
            sources: ["Cayman Islands Monetary Authority", "MLAT Request Documentation", "Offshore Financial Analysis"],
            choices: [
                {
                    text: "Trace the money laundering mechanisms in detail",
                    nextScene: "money_laundering_analysis",
                    collectEvidence: true
                },
                {
                    text: "Focus on the intellectual property licensing scheme",
                    nextScene: "entertainment_services_investigation"
                },
                {
                    text: "Investigate the professional advisors involved",
                    nextScene: "co_conspirator_payments"
                }
            ],
            educationalNote: "Cayman Islands investigations require international cooperation and understanding of offshore financial structures used to hide criminal proceeds."
        },

        custom_protection_deal: {
            text: `WITNESS PROTECTION NEGOTIATION
            
            Agent Chen presents you with a critical decision regarding a potential witness who claims to have inside information about the criminal enterprise but demands extensive protection guarantees.
            
            WITNESS PROFILE:
            • Former inner circle member with 8 years of direct access
            • Claims knowledge of financial crimes and violent incidents
            • Has evidence including recordings and documents
            • Currently in hiding after receiving death threats
            
            PROTECTION DEMANDS:
            • Full witness protection program enrollment
            • Relocation of immediate family (spouse and 2 children)
            • New identities for entire family
            • Financial support for 5 years minimum
            • Guarantee of no prosecution for past involvement
            
            POTENTIAL TESTIMONY VALUE:
            • Direct evidence of RICO predicate acts
            • Financial crime documentation and procedures
            • Witness intimidation and violence details
            • Enterprise structure and hierarchy information
            
            RISKS:
            • Witness credibility issues due to criminal involvement
            • High cost of protection program
            • Potential for witness to change story or disappear
            • Defense will attack witness motivation and reliability
            
            The decision could make or break the prosecution's case.`,
            image: "witness_protection_negotiation",
            imagePrompt: "Secure government facility, witness protection discussion, family safety planning, federal marshals",
            sources: ["U.S. Marshals Witness Protection Program", "Witness Cooperation Agreement", "Security Threat Assessment"],
            choices: [
                {
                    text: "Agree to full protection in exchange for complete cooperation",
                    nextScene: "witness_protection_program",
                    collectEvidence: true
                },
                {
                    text: "Negotiate limited protection with specific conditions",
                    nextScene: "custom_protection_deal"
                },
                {
                    text: "Decline and focus on building case without this witness",
                    nextScene: "independent_investigation_continues"
                }
            ],
            educationalNote: "Witness protection decisions involve balancing potential testimony value against program costs and risks, often determining prosecution success."
        },

        defense_strategy_analysis: {
            text: `DEFENSE STRATEGY ASSESSMENT
            
            Intelligence gathered from court filings and legal sources reveals the defense team's sophisticated strategy to counter federal prosecution.
            
            PRIMARY DEFENSE STRATEGIES:
            
            ATTACK PROSECUTION CREDIBILITY:
            • Challenge government witness reliability and motivation
            • Expose prosecutorial overreach and selective enforcement
            • Question investigative methods and evidence collection
            • Highlight government cooperation deals as "bought testimony"
            
            BUSINESS LEGITIMACY ARGUMENT:
            • Emphasize legitimate business operations and success
            • Present character witnesses from entertainment industry
            • Highlight charitable work and community contributions
            • Argue criminal charges are mischaracterization of business practices
            
            CONSTITUTIONAL CHALLENGES:
            • Fourth Amendment challenges to searches and seizures
            • Fifth Amendment double jeopardy arguments with civil cases
            • Sixth Amendment right to speedy trial claims
            • Due process violations in prosecution conduct
            
            RICO STATUTE CHALLENGES:
            • Argue insufficient proof of criminal enterprise
            • Challenge pattern of racketeering activity evidence
            • Dispute interstate commerce nexus requirements
            • Attack predicate act evidence as insufficient
            
            The defense team includes former federal prosecutors familiar with government tactics.`,
            image: "defense_legal_strategy",
            imagePrompt: "High-end law firm conference room, defense strategy boards, legal team meeting, constitutional law books",
            sources: ["Defense Motion Filings", "Legal Strategy Intelligence", "Court Hearing Transcripts"],
            choices: [
                {
                    text: "Analyze the constitutional challenges to strengthen prosecution case",
                    nextScene: "evidence_legal_analysis",
                    collectEvidence: true
                },
                {
                    text: "Focus on countering the business legitimacy argument",
                    nextScene: "enterprise_structure_analysis"
                },
                {
                    text: "Prepare responses to witness credibility attacks",
                    nextScene: "witness_protection_analysis"
                }
            ],
            educationalNote: "Understanding defense strategy helps prosecutors anticipate challenges and strengthen their case presentation to counter expected arguments."
        },

        defense_witness_challenge: {
            text: `DEFENSE WITNESS CREDIBILITY CHALLENGE
            
            The defense team launches a coordinated attack on the credibility of prosecution witnesses, using sophisticated tactics to undermine their testimony.
            
            CREDIBILITY ATTACK STRATEGIES:
            
            COOPERATION AGREEMENT ATTACKS:
            • Highlight substantial sentence reductions received
            • Emphasize financial benefits of cooperation
            • Show history of lying to investigators
            • Demonstrate bias and motivation to fabricate
            
            CHARACTER ASSASSINATION:
            • Past criminal history exploitation
            • Personal life scandals and controversies
            • Drug use and mental health issues
            • Financial troubles as motivation to lie
            
            INCONSISTENCY EXPLOITATION:
            • Compare multiple statement versions
            • Highlight changes in story over time
            • Point out contradictions between witnesses
            • Show influence of prosecution preparation
            
            EXPERT WITNESS CHALLENGES:
            • Question qualifications and expertise
            • Challenge methodology and conclusions
            • Present competing expert interpretations
            • Attack bias and financial compensation
            
            The prosecution must be prepared to rehabilitate witness credibility and demonstrate reliability despite defense attacks.
            
            This is a critical battleground that often determines case outcomes.`,
            image: "courtroom_witness_challenge",
            imagePrompt: "Federal courtroom during intense cross-examination, defense attorney questioning witness, jury watching",
            sources: ["Trial Transcript Analysis", "Witness Preparation Files", "Credibility Assessment Reports"],
            choices: [
                {
                    text: "Focus on strengthening witness preparation and rehabilitation",
                    nextScene: "witness_protection_analysis",
                    collectEvidence: true
                },
                {
                    text: "Develop corroborating evidence to support witness testimony",
                    nextScene: "corroborating_evidence"
                },
                {
                    text: "Analyze expert witness vulnerabilities",
                    nextScene: "expert_legal_analysis"
                }
            ],
            educationalNote: "Witness credibility challenges are central to criminal trials, requiring prosecutors to carefully prepare witnesses and develop corroborating evidence."
        },

        deleted_data_recovery: {
            text: `DIGITAL FORENSICS RECOVERY
            
            FBI digital forensics specialists have recovered massive amounts of deleted data from seized electronic devices. The recovered information provides crucial evidence of alleged criminal activities.
            
            RECOVERY ACHIEVEMENTS:
            
            MOBILE DEVICE DATA:
            • 847,000 deleted text messages recovered
            • 23,000 deleted photos and videos restored
            • Call logs spanning 5 years reconstructed
            • Location data tracking patterns revealed
            
            COMPUTER SYSTEMS:
            • Financial records thought permanently deleted
            • Communication logs with alleged co-conspirators  
            • Document drafts showing criminal planning
            • Internet search history revealing intent
            
            CLOUD STORAGE RECOVERY:
            • iCloud backups containing incriminating material
            • Google Drive files with business communications
            • Dropbox account evidence of document sharing
            • OneDrive financial planning documents
            
            TECHNICAL CHALLENGES:
            • Military-grade encryption on some devices
            • Professional data destruction attempts
            • Multiple device synchronization issues
            • International jurisdiction complications
            
            The recovered data creates a digital timeline of alleged criminal enterprise activities spanning multiple years.`,
            image: "digital_forensics_lab",
            imagePrompt: "FBI digital forensics laboratory, computer specialists recovering deleted data, multiple screens with evidence",
            sources: ["FBI Digital Evidence Recovery Unit", "Computer Forensics Reports", "Mobile Device Analysis"],
            choices: [
                {
                    text: "Focus on the most incriminating recovered communications",
                    nextScene: "encrypted_communications_analysis",
                    collectEvidence: true
                },
                {
                    text: "Analyze the financial records and money laundering evidence",
                    nextScene: "money_laundering_analysis"
                },
                {
                    text: "Review location data and timeline evidence",
                    nextScene: "location_data_analysis"
                }
            ],
            educationalNote: "Digital forensics recovery can uncover crucial evidence even when suspects attempt to delete incriminating material, often providing prosecution breakthroughs."
        },

        corroborating_evidence: {
            text: `CORROBORATING EVIDENCE COMPILATION
            
            To strengthen the prosecution case against expected defense attacks, you compile extensive corroborating evidence that supports key witness testimony and documentary evidence.
            
            FINANCIAL CORROBORATION:
            • Bank records confirming witness testimony about payments
            • Credit card transactions matching alleged criminal activity dates
            • Cash transaction reports supporting money laundering claims
            • International wire transfer records verifying offshore accounts
            
            DIGITAL CORROBORATION:
            • Phone records confirming witness-reported conversations
            • Social media posts supporting timeline testimony
            • GPS location data matching witness travel claims
            • Surveillance footage confirming witness presence at events
            
            PHYSICAL EVIDENCE CORROBORATION:
            • Hotel records supporting witness testimony about locations
            • Travel records confirming international trips mentioned by witnesses
            • Property records verifying real estate transactions described
            • Business documents supporting enterprise structure claims
            
            INDEPENDENT WITNESS CORROBORATION:
            • Third-party witnesses confirming key events
            • Law enforcement observations supporting witness claims
            • Expert analysis validating witness technical testimony
            • Victim statements corroborating witness accounts
            
            The extensive corroboration creates multiple layers of evidence supporting the prosecution's case.`,
            image: "evidence_corroboration_board",
            imagePrompt: "Investigation room with evidence boards showing multiple sources confirming same facts, connecting lines and verification",
            sources: ["Evidence Analysis Unit", "Corroboration Assessment Report", "Multi-source Verification Analysis"],
            choices: [
                {
                    text: "Focus on financial evidence corroboration",
                    nextScene: "money_laundering_analysis",
                    collectEvidence: true
                },
                {
                    text: "Strengthen digital evidence verification",
                    nextScene: "location_data_analysis"
                },
                {
                    text: "Develop independent witness testimony",
                    nextScene: "victim_testimony_analysis"
                }
            ],
            educationalNote: "Corroborating evidence is essential in federal prosecutions to support witness testimony and counter defense credibility attacks."
        },

        cover_preservation_gambit: {
            text: `COVER IDENTITY PROTECTION OPERATION
            
            A critical undercover operation is at risk of exposure. You must decide whether to maintain the cover or extract the operative who has gathered crucial intelligence about the criminal enterprise.
            
            UNDERCOVER OPERATION STATUS:
            
            OPERATIVE PROFILE:
            • FBI Special Agent embedded for 18 months
            • Access to inner circle financial operations
            • Evidence of money laundering and witness intimidation
            • Currently trusted by criminal organization leadership
            
            INTELLIGENCE GATHERED:
            • Detailed records of offshore banking operations
            • Recordings of criminal planning discussions
            • Evidence of violence against potential witnesses
            • Documentation of international criminal connections
            
            RISK FACTORS:
            • Defense team hiring private investigators
            • Increased security screening of associates
            • Suspicious questioning about operative's background
            • Potential for violent retaliation if discovered
            
            CRITICAL DECISION:
            • Maintain cover to gather additional evidence
            • Extract immediately to preserve what we have
            • Orchestrate a "natural" exit for the operative
            
            The operative's safety and case success both hang in the balance.`,
            image: "undercover_operation_risk",
            imagePrompt: "FBI undercover agent in dangerous situation, criminal organization meeting, surveillance equipment, tension",
            sources: ["FBI Undercover Operations Manual", "Operative Safety Assessment", "Intelligence Gathering Report"],
            choices: [
                {
                    text: "Maintain cover to gather more critical evidence",
                    nextScene: "double_agent_evidence_gathering",
                    collectEvidence: true
                },
                {
                    text: "Extract the operative immediately for safety",
                    nextScene: "emergency_evacuation_protection"
                },
                {
                    text: "Create a strategic exit plan over several weeks",
                    nextScene: "operation_debriefing"
                }
            ],
            educationalNote: "Undercover operations in criminal enterprises involve constant risk assessment and decisions balancing intelligence gathering against operative safety."
        },

        detention_conditions_analysis: {
            text: `FEDERAL DETENTION CONDITIONS REVIEW
            
            You investigate the conditions of pre-trial detention at the Metropolitan Detention Center, examining how they affect the defendant and potential impact on the case.
            
            DETENTION FACILITY CONDITIONS:
            
            HOUSING ASSIGNMENT:
            • Special Housing Unit for high-profile inmates
            • 23-hour per day lockdown for safety reasons
            • Limited contact with other inmates
            • Enhanced security monitoring
            
            DAILY CONDITIONS:
            • Single cell with basic amenities
            • One hour recreation time in secure area
            • Limited commissary privileges
            • Monitored phone calls and visits
            
            LEGAL IMPLICATIONS:
            • Constitutional challenges to detention conditions
            • Impact on defendant's ability to assist in defense
            • Potential cruel and unusual punishment claims
            • Effect on mental health and trial preparation
            
            SECURITY CONCERNS:
            • Multiple death threats received
            • High media profile requires special protocols
            • Concerns about retribution against guards or staff
            • Risk assessment updated weekly
            
            The defense argues these conditions prejudice their client's right to fair trial and adequate representation.`,
            image: "federal_detention_facility",
            imagePrompt: "Metropolitan Detention Center, high-security prison cell, federal corrections officers, legal consultation room",
            sources: ["Bureau of Prisons Documentation", "Detention Conditions Report", "Constitutional Law Analysis"],
            choices: [
                {
                    text: "Analyze constitutional challenges to detention conditions",
                    nextScene: "evidence_legal_analysis",
                    collectEvidence: true
                },
                {
                    text: "Review security threats and protective measures",
                    nextScene: "witness_protection_analysis"
                },
                {
                    text: "Examine impact on trial preparation",
                    nextScene: "trial_preparation_investigation"
                }
            ],
            educationalNote: "Pre-trial detention conditions must balance security needs with constitutional requirements for fair trial preparation and humane treatment."
        },

        double_agent_evidence_gathering: {
            text: `DOUBLE AGENT INTELLIGENCE OPERATION
            
            Your undercover operative has made a breakthrough - they've been approached by someone claiming to be gathering evidence against the criminal organization, but you suspect this person may actually be a double agent working for the defendants.
            
            DOUBLE AGENT PROFILE:
            • Claims to be a federal informant with inside access
            • Offers to share intelligence about criminal operations
            • Requests information about ongoing investigation
            • Has detailed knowledge suggesting law enforcement background
            
            INTELLIGENCE OFFERED:
            • Financial records from Cayman Islands operations
            • Names and locations of additional witnesses
            • Details about planned witness intimidation
            • Evidence of corruption in law enforcement
            
            SUSPICIOUS INDICATORS:
            • Information too convenient and perfectly targeted
            • Questions about specific investigation techniques
            • Attempts to identify other undercover operatives
            • Knowledge of classified investigation details
            
            STRATEGIC CONSIDERATIONS:
            • Feed false information to test loyalty
            • Use contact to identify leak sources
            • Risk exposure of ongoing operations
            • Potential to turn double agent into triple agent
            
            This is a high-stakes intelligence chess game with multiple layers of deception.`,
            image: "double_agent_meeting",
            imagePrompt: "Clandestine meeting in shadowy location, two figures exchanging information, surveillance equipment, tension and distrust",
            sources: ["FBI Counterintelligence Division", "Double Agent Operations Manual", "Intelligence Assessment"],
            choices: [
                {
                    text: "Feed false information to test the double agent's loyalty",
                    nextScene: "turning_the_mole",
                    collectEvidence: true
                },
                {
                    text: "Use the contact to identify the leak source",
                    nextScene: "federal_leak_investigation"
                },
                {
                    text: "Attempt to turn them into a triple agent",
                    nextScene: "double_agent_gambit"
                }
            ],
            educationalNote: "Double agent operations require sophisticated counterintelligence techniques to identify threats while potentially gaining intelligence advantages."
        },

        double_agent_gambit: {
            text: `TRIPLE AGENT RECRUITMENT
            
            In a daring counterintelligence move, you attempt to turn the suspected double agent into a triple agent - someone who appears to be working against you but is actually providing intelligence back to federal law enforcement.
            
            RECRUITMENT APPROACH:
            
            INITIAL CONTACT:
            • Careful revelation that their identity is known
            • Offer immunity from prosecution
            • Present evidence of their vulnerability
            • Create urgency through implied threats
            
            INTELLIGENCE VALUE:
            • Access to defense strategy and planning
            • Information about witness intimidation efforts
            • Financial intelligence about asset hiding
            • Early warning of escape plans or violence
            
            OPERATIONAL REQUIREMENTS:
            • Maintain credible cover story
            • Provide genuine but non-critical information to maintain trust
            • Establish secure communication protocols
            • Create extraction plan if cover blown
            
            RISK ASSESSMENT:
            • High probability of detection by criminal organization
            • Potential for disinformation campaign against investigation
            • Risk to other ongoing operations
            • Personal safety of recruited agent
            
            Success could provide unprecedented insight into defense strategy and criminal operations.`,
            image: "triple_agent_recruitment",
            imagePrompt: "Intense federal agent recruitment meeting, psychological pressure, evidence files, counterintelligence operation",
            sources: ["FBI Counterintelligence Operations", "Agent Recruitment Protocols", "Intelligence Risk Assessment"],
            choices: [
                {
                    text: "Proceed with aggressive recruitment approach",
                    nextScene: "turning_the_mole",
                    collectEvidence: true
                },
                {
                    text: "Use more subtle psychological manipulation",
                    nextScene: "double_agent_rescue_plan"
                },
                {
                    text: "Abandon recruitment and focus on containment",
                    nextScene: "enhanced_security_investigation"
                }
            ],
            educationalNote: "Triple agent operations represent the pinnacle of counterintelligence work, requiring sophisticated psychological manipulation and operational security."
        },

        double_agent_rescue_plan: {
            text: `AGENT EXTRACTION PROTOCOL
            
            The triple agent recruitment has been successful, but intelligence indicates their cover is about to be blown. You must execute an emergency extraction that maintains their credibility while ensuring their safety.
            
            EXTRACTION SCENARIO:
            
            COVER STORY DEVELOPMENT:
            • Stage a fake arrest to explain disappearance
            • Create evidence of agent fleeing jurisdiction
            • Plant false evidence of betrayal by criminal organization
            • Coordinate with other agencies for credible operation
            
            OPERATIONAL TIMELINE:
            • Phase 1: Begin surveillance detection procedures
            • Phase 2: Stage public confrontation as cover
            • Phase 3: Execute extraction under arrest scenario
            • Phase 4: Relocate to secure federal facility
            
            INTELLIGENCE PRESERVATION:
            • Secure all evidence and recordings collected
            • Debrief agent on critical intelligence
            • Document criminal organization structure
            • Prepare testimony for trial use
            
            ONGOING DECEPTION:
            • Maintain appearance that agent escaped
            • Plant false intelligence about their location
            • Use their disappearance to create paranoia in organization
            • Preserve other ongoing operations
            
            The extraction must appear authentic to criminal organization while preserving the intelligence value gained.`,
            image: "agent_extraction_operation",
            imagePrompt: "Dramatic federal agent extraction, fake arrest scenario, undercover operation conclusion, tactical team coordination",
            sources: ["Federal Agent Extraction Protocol", "Undercover Operations Security", "Intelligence Preservation Guidelines"],
            choices: [
                {
                    text: "Execute immediate extraction with full staging",
                    nextScene: "operation_debriefing",
                    collectEvidence: true
                },
                {
                    text: "Delay extraction to gather final critical intelligence",
                    nextScene: "stolen_evidence_recovery"
                },
                {
                    text: "Use extraction as opportunity for broader operation",
                    nextScene: "synchronized_rescue_arrest"
                }
            ],
            educationalNote: "Agent extraction operations must balance immediate safety needs with long-term operational security and intelligence preservation."
        },

        emergency_evacuation_protection: {
            text: `EMERGENCY WITNESS EVACUATION
            
            Intelligence indicates imminent threat to multiple witnesses and their families. You coordinate a large-scale emergency evacuation operation to prevent witness elimination.
            
            THREAT ASSESSMENT:
            
            IMMEDIATE DANGERS:
            • Assassination teams identified moving toward witness locations
            • Phone intercepts reveal "cleanup" orders
            • Financial transfers to known elimination specialists
            • Timeline suggesting coordinated strikes within 48 hours
            
            EVACUATION SCOPE:
            • 12 primary witnesses and their families
            • 47 individuals total requiring immediate protection
            • 8 different locations across 4 states
            • Coordination with local and federal law enforcement
            
            OPERATIONAL CHALLENGES:
            • Limited time for comprehensive planning
            • Risk of detection during evacuation
            • Maintaining cover stories for sudden disappearances
            • Securing temporary and long-term safe locations
            
            RESOURCE REQUIREMENTS:
            • U.S. Marshals protective teams
            • FBI tactical response units
            • Local law enforcement cooperation
            • Safe house network activation
            
            SUCCESS METRICS:
            • All witnesses and families evacuated safely
            • No compromise of new locations
            • Preservation of witness testimony for trial
            • Disruption of criminal organization elimination plans`,
            image: "mass_witness_evacuation",
            imagePrompt: "Federal agents coordinating massive evacuation, families being relocated, tactical vehicles, emergency operations center",
            sources: ["U.S. Marshals Emergency Protocols", "Multi-State Coordination Plan", "Witness Safety Assessment"],
            choices: [
                {
                    text: "Execute full-scale coordinated evacuation",
                    nextScene: "witness_protection_program",
                    collectEvidence: true
                },
                {
                    text: "Focus on highest-risk witnesses first",
                    nextScene: "missing_investigators_families"
                },
                {
                    text: "Set up counter-surveillance to catch elimination teams",
                    nextScene: "high_speed_pursuit"
                }
            ],
            educationalNote: "Emergency witness protection requires rapid coordination between multiple agencies and careful balance between speed and security."
        },

        encrypted_communications_analysis: {
            text: `ENCRYPTED COMMUNICATION DECRYPTION
            
            The FBI's elite cryptanalysis unit has been working to break encrypted communications seized from the criminal organization. Recent breakthroughs reveal the scope of the criminal enterprise.
            
            DECRYPTION ACHIEVEMENTS:
            
            COMMUNICATION PLATFORMS:
            • Signal encrypted messages: 15,000+ decrypted
            • WhatsApp business communications: 8,900 messages
            • Telegram criminal coordination: 12,300 messages
            • Custom encrypted apps: 3,200 messages
            
            CRIMINAL CONTENT CATEGORIES:
            • Money laundering coordination: 2,847 messages
            • Witness intimidation planning: 1,234 messages
            • Violence authorization: 567 messages
            • International operations: 3,921 messages
            
            TECHNICAL BREAKTHROUGH:
            • Quantum computing assisted decryption
            • Insider knowledge of encryption keys
            • Traffic analysis revealing communication patterns
            • Metadata analysis showing organization structure
            
            KEY INTELLIGENCE REVEALED:
            • Hierarchical command structure
            • Financial flow coordination
            • Planned witness elimination
            • International criminal partnerships
            • Future criminal operations planning
            
            The decrypted communications provide unprecedented insight into criminal enterprise operations.`,
            image: "encrypted_communications_lab",
            imagePrompt: "NSA/FBI cryptanalysis facility, quantum computers, encrypted message decryption, cybersecurity specialists working",
            sources: ["FBI Cryptanalysis Division", "NSA Cooperation Agreement", "Digital Evidence Analysis"],
            choices: [
                {
                    text: "Focus on money laundering coordination messages",
                    nextScene: "money_laundering_analysis",
                    collectEvidence: true
                },
                {
                    text: "Priority analysis of witness intimidation planning",
                    nextScene: "witness_protection_analysis"
                },
                {
                    text: "Investigate international criminal partnerships",
                    nextScene: "federal_agency_coordination"
                }
            ],
            educationalNote: "Encrypted communication analysis often provides the most damaging evidence in modern criminal enterprises, revealing coordination and planning details."
        },

        enhanced_security_investigation: {
            text: `ENHANCED SECURITY PROTOCOLS
            
            Following security breaches and threats to the investigation, you implement enhanced security measures to protect the case integrity and personnel safety.
            
            SECURITY ENHANCEMENT MEASURES:
            
            PERSONNEL PROTECTION:
            • 24/7 security details for key investigators
            • Secure transportation protocols
            • Safe house arrangements for at-risk personnel
            • Family protection for vulnerable investigators
            
            INFORMATION SECURITY:
            • Compartmentalized access to sensitive materials
            • Enhanced encryption for all communications
            • Biometric access controls for evidence storage
            • Regular security clearance reviews
            
            OPERATIONAL SECURITY:
            • Counter-surveillance operations
            • Secure meeting locations rotation
            • Communication protocol changes
            • False flag operations to confuse adversaries
            
            PHYSICAL SECURITY:
            • Federal building access restrictions
            • Evidence storage facility upgrades
            • Courthouse security enhancements
            • Witness protection facility improvements
            
            THREAT MONITORING:
            • 24/7 intelligence monitoring
            • Social media surveillance
            • Financial monitoring for threat indicators
            • International threat assessment coordination
            
            The enhanced security creates multiple layers of protection while maintaining operational effectiveness.`,
            image: "enhanced_security_operations",
            imagePrompt: "Federal facility with enhanced security, armed guards, surveillance systems, secure evidence storage, high-tech security measures",
            sources: ["Federal Security Assessment", "Threat Analysis Report", "Enhanced Protection Protocols"],
            choices: [
                {
                    text: "Focus on identifying and neutralizing specific threats",
                    nextScene: "assassination_network_investigation",
                    collectEvidence: true
                },
                {
                    text: "Strengthen information security protocols",
                    nextScene: "federal_leak_investigation"
                },
                {
                    text: "Coordinate with international security services",
                    nextScene: "federal_agency_coordination"
                }
            ],
            educationalNote: "Enhanced security in major federal investigations requires balancing protection needs with operational effectiveness and constitutional rights."
        },

        enterprise_proof_requirements: {
            text: `RICO ENTERPRISE PROOF ANALYSIS
            
            You review the legal requirements for proving a RICO enterprise, ensuring the prosecution meets all elements necessary for successful conviction.
            
            RICO ENTERPRISE ELEMENTS:
            
            EXISTENCE REQUIREMENT:
            • Ongoing organization with structure and hierarchy
            • Common purpose among organization members
            • Continuity of structure and personnel over time
            • Enterprise distinct from pattern of racketeering activity
            
            STRUCTURE EVIDENCE:
            • Leadership hierarchy and chain of command
            • Division of responsibilities and roles
            • Decision-making processes and authority
            • Communication systems and protocols
            
            CONTINUITY PROOF:
            • Enterprise operations spanning multiple years
            • Consistent organizational structure
            • Ongoing criminal activities pattern
            • Personnel changes without organizational dissolution
            
            LEGAL CHALLENGES:
            • Association-in-fact vs. legal entity distinction
            • Proof of organization beyond criminal acts themselves
            • Establishing enterprise boundaries and membership
            • Distinguishing enterprise from conspiracy
            
            PROSECUTION STRATEGY:
            • Organizational charts and witness testimony
            • Financial records showing enterprise structure
            • Communications revealing hierarchy and operations
            • Pattern of activities demonstrating continuity
            
            Meeting RICO enterprise requirements is essential for conviction.`,
            image: "rico_enterprise_legal_analysis",
            imagePrompt: "Legal research with RICO statute books, enterprise organizational charts, legal brief preparation, federal prosecutor analysis",
            sources: ["RICO Statute Analysis", "Federal Case Law Review", "Enterprise Element Requirements"],
            choices: [
                {
                    text: "Strengthen organizational structure evidence",
                    nextScene: "enterprise_structure_analysis",
                    collectEvidence: true
                },
                {
                    text: "Focus on continuity and pattern proof",
                    nextScene: "predicate_acts_analysis"
                },
                {
                    text: "Address legal challenges and distinctions",
                    nextScene: "evidence_legal_analysis"
                }
            ],
            educationalNote: "RICO enterprise proof requires demonstrating ongoing organization structure separate from the criminal acts themselves, often the most challenging element."
        },

        enterprise_structure_analysis: {
            text: `CRIMINAL ENTERPRISE STRUCTURE INVESTIGATION
            
            Through extensive investigation, you've mapped the complete structure of the alleged criminal enterprise, revealing a sophisticated organizational hierarchy.
            
            ENTERPRISE HIERARCHY:
            
            LEADERSHIP TIER:
            • Chief Executive: Overall operation control
            • Financial Controller: Money management and laundering
            • Operations Director: Daily criminal activity coordination
            • Security Chief: Intimidation and violence operations
            
            MANAGEMENT TIER:
            • Regional Managers: Geographic area control
            • Department Heads: Specialized operation oversight
            • Financial Specialists: Banking and investment management
            • Legal Fixers: Problem resolution and cover-up
            
            OPERATIONAL TIER:
            • Field Operatives: Direct criminal activity execution
            • Support Staff: Administrative and logistical support
            • Contract Specialists: External service providers
            • Security Personnel: Protection and enforcement
            
            ENTERPRISE FUNCTIONS:
            • Revenue Generation: Legitimate and criminal income
            • Money Laundering: Financial crime concealment
            • Asset Protection: Wealth preservation and hiding
            • Threat Management: Witness intimidation and elimination
            • Legal Defense: Obstruction of justice operations
            
            The structure demonstrates sophisticated criminal organization with clear hierarchy and specialized roles.`,
            image: "criminal_enterprise_org_chart",
            imagePrompt: "Detailed organizational chart showing criminal enterprise hierarchy, FBI investigation board with photos and connections",
            sources: ["FBI Organized Crime Analysis", "Financial Structure Investigation", "Witness Testimony Compilation"],
            choices: [
                {
                    text: "Focus on proving leadership control and direction",
                    nextScene: "rico_elements_question",
                    collectEvidence: true
                },
                {
                    text: "Analyze financial operations and money laundering",
                    nextScene: "money_laundering_analysis"
                },
                {
                    text: "Investigate security and intimidation operations",
                    nextScene: "protection_racket_investigation"
                }
            ],
            educationalNote: "Criminal enterprise structure analysis is crucial for RICO prosecutions, demonstrating organized hierarchy and specialized criminal functions."
        },

        entertainment_services_investigation: {
            text: `"ENTERTAINMENT SERVICES" CRIMINAL OPERATION
            
            Investigation reveals that "entertainment services" was code language for alleged criminal activities within the organization, with detailed financial and operational structures.
            
            "ENTERTAINMENT SERVICES" STRUCTURE:
            
            OPERATIONAL CATEGORIES:
            • "Private Parties": Alleged criminal activities at exclusive events
            • "VIP Services": High-level criminal operations
            • "Special Events": Major criminal enterprise operations
            • "Client Management": Alleged victim control and manipulation
            
            FINANCIAL FRAMEWORK:
            • Service Contracts: $2.3 million in documented payments
            • Performance Bonuses: $890,000 in additional compensation
            • Travel Expenses: $1.4 million for "service delivery"
            • Equipment Costs: $650,000 for "technical support"
            
            PERSONNEL STRUCTURE:
            • Service Coordinators: Planning and logistics
            • Technical Specialists: Recording and documentation
            • Security Personnel: Enforcement and protection
            • Administrative Support: Record keeping and communication
            
            CRIMINAL ALLEGATIONS:
            • Services involved illegal activities
            • Payments were for criminal participation
            • Structure facilitated ongoing criminal enterprise
            • International operations extended criminal reach
            
            The investigation reveals systematic criminal operations disguised as legitimate entertainment business.`,
            image: "entertainment_services_investigation",
            imagePrompt: "FBI investigation board showing entertainment industry facade hiding criminal operations, financial documents, coded communications",
            sources: ["Financial Crimes Investigation", "Entertainment Industry Analysis", "Criminal Operations Documentation"],
            choices: [
                {
                    text: "Focus on financial evidence of criminal payments",
                    nextScene: "co_conspirator_payments",
                    collectEvidence: true
                },
                {
                    text: "Investigate international operations expansion",
                    nextScene: "offshore_banking_investigation"
                },
                {
                    text: "Analyze personnel structure and criminal roles",
                    nextScene: "enterprise_structure_analysis"
                }
            ],
            educationalNote: "Criminal enterprises often use legitimate business terminology to disguise illegal operations, requiring careful analysis to decode criminal activities."
        },

        evidence_legal_analysis: {
            text: `EVIDENCE LEGAL ADMISSIBILITY REVIEW
            
            You conduct a comprehensive legal analysis of all evidence to ensure admissibility and prepare for expected defense challenges in federal court.
            
            EVIDENCE CATEGORIES:
            
            DOCUMENTARY EVIDENCE:
            • Financial records: Authenticated bank statements and wire transfers
            • Business documents: Corporate filings and contracts
            • Communications: Emails, texts, and recorded conversations
            • Government records: Court filings and regulatory documents
            
            TESTIMONIAL EVIDENCE:
            • Cooperating witness testimony with corroboration requirements
            • Expert witness analysis and methodology validation
            • Victim testimony and trauma-informed examination procedures
            • Law enforcement officer testimony and report authentication
            
            PHYSICAL EVIDENCE:
            • Electronic devices with proper chain of custody
            • Audio/video recordings with authentication protocols
            • Property seized under valid search warrants
            • Forensic evidence processed by certified laboratories
            
            ADMISSIBILITY CHALLENGES:
            • Hearsay objections and exceptions analysis
            • Fourth Amendment search and seizure challenges
            • Fifth Amendment self-incrimination issues
            • Sixth Amendment confrontation clause implications
            
            Each piece of evidence must meet Federal Rules of Evidence standards for admission.`,
            image: "legal_evidence_analysis",
            imagePrompt: "Federal courthouse law library, legal research materials, evidence authentication documents, prosecutor preparation",
            sources: ["Federal Rules of Evidence", "Legal Admissibility Analysis", "Evidence Authentication Protocols"],
            choices: [
                {
                    text: "Focus on strengthening documentary evidence authentication",
                    nextScene: "business_documents_analysis",
                    collectEvidence: true
                },
                {
                    text: "Address constitutional challenges to evidence collection",
                    nextScene: "defense_strategy_analysis"
                },
                {
                    text: "Prepare witness testimony for admissibility challenges",
                    nextScene: "witness_protection_analysis"
                }
            ],
            educationalNote: "Evidence legal analysis is crucial for federal prosecutions, ensuring all evidence meets constitutional and evidentiary standards for court admission."
        },

        fake_elimination_gambit: {
            text: `FALSE ELIMINATION DECEPTION OPERATION
            
            In a sophisticated psychological operation, you stage the fake elimination of a key witness to deceive the criminal organization while secretly protecting the witness and gathering intelligence.
            
            DECEPTION OPERATION ELEMENTS:
            
            STAGING PREPARATION:
            • Create realistic crime scene evidence
            • Coordinate with medical examiner for false death certificate
            • Plant evidence suggesting criminal organization involvement
            • Establish secure location for witness hiding
            
            PSYCHOLOGICAL WARFARE:
            • Target criminal organization leadership with false information
            • Create paranoia about law enforcement capabilities
            • Use deception to flush out additional criminal activities
            • Monitor organization reaction and communications
            
            OPERATIONAL SECURITY:
            • Witness and family complete identity change
            • Secure communication protocols for ongoing contact
            • Counter-surveillance to ensure deception success
            • Compartmentalized knowledge to prevent leaks
            
            INTELLIGENCE GATHERING:
            • Monitor criminal organization response to "elimination"
            • Identify additional criminal activities revealed by organization confidence
            • Track financial movements and asset transfers
            • Document criminal organization relief and subsequent actions
            
            The fake elimination serves multiple strategic purposes while protecting the witness.`,
            image: "fake_elimination_operation",
            imagePrompt: "Staged crime scene for deception, federal agents coordinating false evidence, witness protection relocation, psychological operation",
            sources: ["FBI Deception Operations Manual", "Witness Protection Advanced Protocols", "Psychological Warfare Techniques"],
            choices: [
                {
                    text: "Execute the fake elimination with full operational support",
                    nextScene: "witness_protection_program",
                    collectEvidence: true
                },
                {
                    text: "Use the deception to identify additional criminal activities",
                    nextScene: "enhanced_security_investigation"
                },
                {
                    text: "Focus on gathering intelligence from organization reaction",
                    nextScene: "encrypted_communications_analysis"
                }
            ],
            educationalNote: "Deception operations in federal investigations require sophisticated planning and legal oversight to ensure they don't compromise prosecution or violate constitutional rights."
        },

        family_reunion_aftermath: {
            text: `WITNESS FAMILY REUNION OPERATION
            
            After months in witness protection, a successful reunion operation has brought together separated family members. You assess the operation's success and ongoing security implications.
            
            REUNION OPERATION RESULTS:
            
            FAMILY REUNIFICATION:
            • Primary witness reunited with spouse and children
            • Extended family members brought into protection program
            • Secure housing established for entire family unit
            • New identity documentation for all family members
            
            PSYCHOLOGICAL IMPACT:
            • Significant improvement in witness cooperation and mental health
            • Children adapting to new identities and location
            • Family stress reduction improving testimony reliability
            • Enhanced motivation to continue cooperation with prosecution
            
            SECURITY ASSESSMENT:
            • No compromise of new location detected
            • Counter-surveillance confirms no criminal organization tracking
            • Communication monitoring shows no security breaches
            • Local law enforcement cooperation established
            
            ONGOING CHALLENGES:
            • Education and employment integration for family
            • Medical care coordination with protection protocols
            • Long-term financial support sustainability
            • Trial testimony preparation with family present
            
            The successful reunion strengthens the prosecution case while ensuring witness and family safety.`,
            image: "family_reunion_protection",
            imagePrompt: "Joyful family reunion in secure location, federal marshals providing security, new life beginning under witness protection",
            sources: ["U.S. Marshals Witness Protection Program", "Family Reunification Protocols", "Witness Cooperation Assessment"],
            choices: [
                {
                    text: "Focus on strengthening witness testimony preparation",
                    nextScene: "witness_protection_analysis",
                    collectEvidence: true
                },
                {
                    text: "Assess long-term security and support needs",
                    nextScene: "witness_protection_program"
                },
                {
                    text: "Use witness improvement to encourage other cooperation",
                    nextScene: "custom_protection_deal"
                }
            ],
            educationalNote: "Successful witness protection family reunification often significantly improves witness cooperation and testimony reliability in federal prosecutions."
        },

        federal_agency_coordination: {
            text: `MULTI-AGENCY TASK FORCE COORDINATION
            
            The complexity of the case requires unprecedented coordination between federal agencies, each bringing specialized capabilities to the investigation.
            
            AGENCY COORDINATION STRUCTURE:
            
            FBI LEADERSHIP:
            • Overall investigation coordination
            • Criminal enterprise analysis
            • Witness protection and cooperation
            • Evidence collection and analysis
            
            DEA INVOLVEMENT:
            • Drug trafficking elements investigation
            • International narcotics cooperation
            • Chemical precursor tracking
            • Money laundering through drug proceeds
            
            IRS CRIMINAL INVESTIGATION:
            • Tax evasion analysis
            • Financial crimes investigation  
            • Asset tracing and recovery
            • International tax haven cooperation
            
            HOMELAND SECURITY:
            • Human trafficking investigation
            • Border security and immigration issues
            • International cooperation protocols
            • National security implications assessment
            
            U.S. MARSHALS SERVICE:
            • Fugitive operations
            • Asset forfeiture execution
            • Witness protection program
            • Court security during proceedings
            
            The coordinated approach leverages each agency's unique expertise and authority.`,
            image: "federal_task_force_meeting",
            imagePrompt: "Inter-agency coordination meeting with representatives from FBI, DEA, IRS, Homeland Security, and US Marshals around conference table",
            sources: ["Multi-Agency Task Force Protocol", "Federal Agency Coordination Agreement", "Joint Investigation Guidelines"],
            choices: [
                {
                    text: "Focus on international cooperation and intelligence sharing",
                    nextScene: "offshore_banking_investigation",
                    collectEvidence: true
                },
                {
                    text: "Strengthen financial crimes investigation coordination",
                    nextScene: "money_laundering_analysis"
                },
                {
                    text: "Coordinate witness protection across agencies",
                    nextScene: "witness_protection_program"
                }
            ],
            educationalNote: "Complex federal investigations often require multi-agency task forces to leverage specialized expertise and jurisdictional authorities effectively."
        },

        flight_risk_analysis: {
            text: `FLIGHT RISK ASSESSMENT ANALYSIS
            
            You conduct a detailed analysis of the defendant's flight risk to support the prosecution's position on pre-trial detention and bail denial.
            
            FLIGHT RISK FACTORS:
            
            FINANCIAL RESOURCES:
            • Liquid assets exceeding $100 million
            • Multiple private jets and aircraft access
            • International property portfolio
            • Offshore banking relationships
            
            INTERNATIONAL CONNECTIONS:
            • Business relationships in non-extradition countries
            • Personal residences in multiple countries
            • Private security teams with international capability
            • Diplomatic and political connections abroad
            
            CRIMINAL BEHAVIOR PATTERNS:
            • History of evading law enforcement
            • Pattern of obstruction of justice
            • Witness intimidation and elimination attempts
            • Use of aliases and false documentation
            
            MOTIVATIONAL FACTORS:
            • Facing life imprisonment if convicted
            • Massive financial losses from asset forfeiture
            • International reputation and legacy concerns
            • Family and business empire protection
            
            CAPABILITY ASSESSMENT:
            • Demonstrated ability to coordinate complex operations
            • Access to criminal organization resources
            • International criminal network support
            • Professional evasion and counter-surveillance capabilities
            
            The analysis supports continued detention as necessary to ensure court appearance.`,
            image: "flight_risk_assessment",
            imagePrompt: "FBI analysis board showing flight risk factors, international connections, private jets, escape route possibilities",
            sources: ["Federal Flight Risk Assessment Protocol", "International Criminal Intelligence", "Asset Analysis Report"],
            choices: [
                {
                    text: "Focus on international escape route analysis",
                    nextScene: "offshore_banking_investigation",
                    collectEvidence: true
                },
                {
                    text: "Analyze criminal organization support capabilities",
                    nextScene: "assassination_network_investigation"
                },
                {
                    text: "Review asset freeze and monitoring procedures",
                    nextScene: "asset_forfeiture_analysis"
                }
            ],
            educationalNote: "Flight risk analysis in high-profile cases considers financial resources, international connections, criminal history, and motivation to flee jurisdiction."
        },

        high_speed_pursuit: {
            text: `HIGH-SPEED PURSUIT OPERATION
            
            Intelligence indicates an imminent escape attempt. Federal agents coordinate a high-speed pursuit operation to prevent the defendant from fleeing jurisdiction.
            
            PURSUIT SCENARIO:
            
            INITIAL INTELLIGENCE:
            • Private jet fueled and flight plan filed to non-extradition country
            • Convoy of security vehicles moving toward airport
            • Communication intercepts confirming escape timeline
            • International contacts prepared to assist evasion
            
            TACTICAL RESPONSE:
            • FBI tactical teams positioned at multiple locations
            • Air support coordinating with ground units
            • Local law enforcement traffic control assistance
            • Airport security preventing aircraft departure
            
            PURSUIT DYNAMICS:
            • High-speed chase through urban environment
            • Multiple security vehicles attempting to create diversions
            • Tactical intervention to stop convoy safely
            • Coordination with aviation authorities to ground aircraft
            
            OPERATIONAL CHALLENGES:
            • Public safety concerns during high-speed pursuit
            • Media helicopter presence complicating operations
            • Multiple potential escape routes requiring coverage
            • International diplomatic pressure to prevent escape
            
            SUCCESS METRICS:
            • Prevent escape without public endangerment
            • Capture all individuals involved in escape attempt
            • Secure additional evidence of obstruction of justice
            • Demonstrate consequences of flight attempts
            
            The pursuit becomes a high-stakes operation with national implications.`,
            image: "high_speed_federal_pursuit",
            imagePrompt: "High-speed federal agent pursuit, tactical vehicles, helicopter support, airport intervention, dramatic chase scene",
            sources: ["Federal Tactical Response Protocol", "High-Speed Pursuit Guidelines", "Fugitive Apprehension Procedures"],
            choices: [
                {
                    text: "Focus on coordinating tactical intervention to stop escape",
                    nextScene: "synchronized_rescue_arrest",
                    collectEvidence: true
                },
                {
                    text: "Use pursuit to gather intelligence on criminal organization support",
                    nextScene: "assassination_network_investigation"
                },
                {
                    text: "Coordinate with international authorities to prevent flight",
                    nextScene: "federal_agency_coordination"
                }
            ],
            educationalNote: "High-speed federal pursuits require coordination between multiple agencies and careful balance between apprehension success and public safety."
        },

        independent_investigation_continues: {
            text: `INDEPENDENT INVESTIGATION CONTINUATION
            
            Despite setbacks and challenges, you decide to continue the investigation independently, relying on alternative evidence sources and investigative approaches.
            
            ALTERNATIVE INVESTIGATION STRATEGIES:
            
            OPEN SOURCE INTELLIGENCE:
            • Public records and court filing analysis
            • Social media and digital footprint investigation
            • News media and journalism cooperation
            • Academic and researcher collaboration
            
            FINANCIAL INVESTIGATION:
            • Banking records through legal subpoenas
            • Public business registration analysis
            • SEC filing and regulatory document review
            • International financial intelligence cooperation
            
            DIGITAL FORENSICS:
            • Publicly available digital communications
            • Metadata analysis from social media posts
            • Website and server log analysis
            • Cryptocurrency transaction tracking
            
            WITNESS DEVELOPMENT:
            • Voluntary cooperation from industry insiders
            • Victim outreach and support programs
            • Professional whistleblower protection
            • Anonymous tip line and information gathering
            
            LEGAL STRATEGIES:
            • Civil litigation support and cooperation
            • Regulatory investigation coordination
            • Congressional oversight collaboration
            • International legal assistance requests
            
            The independent approach ensures investigation continues despite obstacles.`,
            image: "independent_federal_investigation",
            imagePrompt: "Dedicated federal investigators working independently, alternative evidence sources, digital analysis, determination despite challenges",
            sources: ["Independent Investigation Protocols", "Alternative Evidence Sources", "Investigative Resilience Guidelines"],
            choices: [
                {
                    text: "Focus on developing new witness sources",
                    nextScene: "witness_protection_analysis",
                    collectEvidence: true
                },
                {
                    text: "Strengthen financial investigation using alternative methods",
                    nextScene: "money_laundering_analysis"
                },
                {
                    text: "Coordinate with civil litigation for evidence sharing",
                    nextScene: "civil_lawsuit_analysis"
                }
            ],
            educationalNote: "Independent federal investigations often succeed by adapting to challenges and using alternative evidence sources when traditional approaches face obstacles."
        },

        industry_executive_investigation: {
            text: `ENTERTAINMENT INDUSTRY EXECUTIVE INVESTIGATION
            
            The investigation expands to examine other entertainment industry executives who may have been involved in or aware of the alleged criminal enterprise operations.
            
            EXECUTIVE NETWORK ANALYSIS:
            
            RECORD LABEL EXECUTIVES:
            • Senior management at major music labels
            • A&R executives with artist relationships
            • Business affairs executives handling contracts
            • Financial officers managing artist payments
            
            MEDIA COMPANY LEADERSHIP:
            • Television and streaming platform executives
            • Production company heads and producers
            • Distribution network management
            • Marketing and publicity executives
            
            TALENT AGENCY INVESTIGATION:
            • Booking agents and talent representatives
            • Personal managers with client relationships
            • Entertainment lawyers facilitating deals
            • Business managers handling financial affairs
            
            FINANCIAL SERVICES PROVIDERS:
            • Entertainment industry banks and lenders
            • Investment advisors and wealth managers
            • Accounting firms providing financial services
            • Insurance companies covering entertainment risks
            
            EVIDENCE OF INVOLVEMENT:
            • Knowledge of criminal activities and failure to report
            • Financial benefits from criminal enterprise
            • Active facilitation of money laundering
            • Witness intimidation and obstruction participation
            
            The industry-wide investigation reveals systemic issues beyond individual cases.`,
            image: "entertainment_industry_investigation",
            imagePrompt: "Entertainment industry executives under investigation, record label offices, corporate boardrooms, federal agents interviewing",
            sources: ["Entertainment Industry Analysis", "Corporate Investigation Files", "Executive Background Checks"],
            choices: [
                {
                    text: "Focus on record label executive involvement",
                    nextScene: "business_empire_investigation",
                    collectEvidence: true
                },
                {
                    text: "Investigate financial services provider roles",
                    nextScene: "money_laundering_analysis"
                },
                {
                    text: "Analyze talent agency and management connections",
                    nextScene: "co_conspirator_payments"
                }
            ],
            educationalNote: "Entertainment industry investigations often reveal broader patterns of criminal activity and complicity across multiple companies and executives."
        },

        industry_impact_analysis: {
            text: `ENTERTAINMENT INDUSTRY IMPACT ASSESSMENT
            
            You analyze the broader impact of the federal investigation and prosecution on the entertainment industry, examining changes in business practices and regulatory responses.
            
            INDUSTRY IMPACT CATEGORIES:
            
            BUSINESS PRACTICE CHANGES:
            • Enhanced due diligence for artist partnerships
            • Improved financial oversight and reporting
            • Strengthened compliance and ethics programs
            • Independent monitoring and audit requirements
            
            REGULATORY RESPONSES:
            • Increased federal oversight of entertainment businesses
            • New reporting requirements for large financial transactions
            • Enhanced background check requirements for industry executives
            • Expanded whistleblower protection programs
            
            FINANCIAL MARKET EFFECTS:
            • Stock price impacts for publicly traded entertainment companies
            • Investment community reassessment of industry risks
            • Insurance premium increases for entertainment businesses
            • Credit rating impacts for major entertainment corporations
            
            CULTURAL AND SOCIAL IMPLICATIONS:
            • Public awareness of entertainment industry criminal issues
            • Victim advocacy and support program development
            • Industry association code of conduct revisions
            • Academic and research focus on entertainment industry ethics
            
            INTERNATIONAL IMPLICATIONS:
            • Global entertainment industry practice changes
            • International cooperation on entertainment crime investigations
            • Foreign investment policy changes affecting entertainment
            • Cross-border regulatory coordination improvements
            
            The case creates lasting changes throughout the entertainment industry.`,
            image: "industry_impact_assessment",
            imagePrompt: "Entertainment industry boardrooms discussing compliance changes, regulatory documents, business practice reforms, industry transformation",
            sources: ["Industry Impact Analysis", "Regulatory Response Assessment", "Business Practice Evolution Report"],
            choices: [
                {
                    text: "Focus on regulatory and compliance improvements",
                    nextScene: "federal_agency_coordination",
                    collectEvidence: true
                },
                {
                    text: "Analyze long-term business practice changes",
                    nextScene: "business_empire_investigation"
                },
                {
                    text: "Review victim advocacy and support improvements",
                    nextScene: "victim_testimony_analysis"
                }
            ],
            educationalNote: "Major federal prosecutions often create lasting industry changes, improving business practices and regulatory oversight to prevent future criminal activity."
        },

        interstate_commerce_analysis: {
            text: `INTERSTATE COMMERCE NEXUS ANALYSIS
            
            You analyze the interstate commerce connections required for federal jurisdiction, ensuring the prosecution can demonstrate the necessary federal nexus for all charges.
            
            INTERSTATE COMMERCE ELEMENTS:
            
            BUSINESS OPERATIONS:
            • Multi-state business operations and subsidiaries
            • Interstate transportation of goods and services
            • Cross-state financial transactions and payments
            • National and international distribution networks
            
            CRIMINAL ACTIVITIES:
            • Alleged crimes occurring across multiple states
            • Interstate transportation of victims and evidence
            • Use of interstate communication systems
            • Financial crimes affecting interstate banking
            
            FEDERAL JURISDICTION FACTORS:
            • Wire communications crossing state lines
            • Interstate travel in furtherance of criminal enterprise
            • Use of facilities of interstate commerce
            • Financial transactions affecting interstate commerce
            
            LEGAL REQUIREMENTS:
            • Minimal impact on interstate commerce sufficient
            • Cumulative effect of activities on interstate commerce
            • Use of instrumentalities of interstate commerce
            • Economic impact on interstate commercial activities
            
            EVIDENCE DOCUMENTATION:
            • Banking records showing interstate transactions
            • Transportation records crossing state lines
            • Communication records between multiple states
            • Business registration in multiple jurisdictions
            
            The analysis confirms strong federal jurisdiction for prosecution.`,
            image: "interstate_commerce_analysis",
            imagePrompt: "Federal jurisdiction analysis, multi-state business operations map, interstate commerce documentation, legal research",
            sources: ["Federal Jurisdiction Analysis", "Interstate Commerce Documentation", "Constitutional Law Research"],
            choices: [
                {
                    text: "Strengthen evidence of interstate criminal activities",
                    nextScene: "enterprise_structure_analysis",
                    collectEvidence: true
                },
                {
                    text: "Focus on interstate financial transaction evidence",
                    nextScene: "money_laundering_analysis"
                },
                {
                    text: "Document interstate communication and transportation",
                    nextScene: "encrypted_communications_analysis"
                }
            ],
            educationalNote: "Interstate commerce nexus is essential for federal criminal jurisdiction, requiring demonstration of criminal activity's connection to or impact on interstate commerce."
        },

        journalist_bait_operation: {
            text: `JOURNALIST INFILTRATION OPERATION
            
            Federal agents execute a sophisticated operation using an undercover journalist to gather intelligence on the criminal organization's media manipulation and witness intimidation tactics.
            
            OPERATION PARAMETERS:
            
            JOURNALIST COVER:
            • Investigative reporter with credible media credentials
            • Fake assignment from major news organization
            • Interest in entertainment industry exposé story
            • Access to criminal organization through media contacts
            
            INTELLIGENCE TARGETS:
            • Media manipulation and propaganda strategies
            • Witness intimidation through media pressure
            • Financial payments to journalists for favorable coverage
            • Criminal organization public relations operations
            
            OPERATIONAL CHALLENGES:
            • Maintaining journalist credibility under scrutiny
            • Legal issues regarding undercover journalism
            • Media ethics and constitutional press freedom concerns
            • Risk of exposure compromising ongoing investigation
            
            EVIDENCE GATHERING:
            • Recordings of conversations about media manipulation
            • Financial records of payments to media figures
            • Documentation of witness intimidation through press
            • Evidence of obstruction of justice through media
            
            STRATEGIC OBJECTIVES:
            • Expose criminal organization media operations
            • Identify corrupt media figures and relationships
            • Gather evidence of witness intimidation tactics
            • Disrupt criminal organization public relations strategy
            
            The operation reveals sophisticated media manipulation by the criminal enterprise.`,
            image: "journalist_undercover_operation",
            imagePrompt: "Undercover federal agent posing as journalist, meeting with criminal organization, recording equipment, media credentials",
            sources: ["FBI Undercover Operations Manual", "Media Investigation Protocols", "Journalist Cover Operations"],
            choices: [
                {
                    text: "Focus on exposing media manipulation and propaganda",
                    nextScene: "media_security_counterattack",
                    collectEvidence: true
                },
                {
                    text: "Gather evidence of witness intimidation through media",
                    nextScene: "witness_protection_analysis"
                },
                {
                    text: "Investigate financial payments to corrupt media figures",
                    nextScene: "co_conspirator_payments"
                }
            ],
            educationalNote: "Undercover journalist operations require careful legal and ethical consideration while potentially exposing criminal manipulation of media and public opinion."
        },

        journalist_protection_operation: {
            text: `JOURNALIST PROTECTION PROTOCOL
            
            Legitimate investigative journalists covering the case have received death threats. You coordinate a protection operation to ensure press freedom while maintaining investigation security.
            
            THREAT ASSESSMENT:
            
            JOURNALIST TARGETS:
            • Investigative reporters covering criminal enterprise
            • Entertainment industry journalists with inside sources
            • Financial crime reporters tracking money laundering
            • Court reporters covering federal proceedings
            
            THREAT INDICATORS:
            • Direct death threats via phone and email
            • Surveillance teams following journalists
            • Break-ins at news organization offices
            • Cyber attacks on journalist communication systems
            
            PROTECTION MEASURES:
            • Discreet security details for high-risk journalists
            • Secure communication protocols for sensitive interviews
            • Counter-surveillance operations around news organizations
            • Coordination with media security departments
            
            OPERATIONAL BALANCE:
            • Protect journalists without impeding press freedom
            • Maintain investigation confidentiality while ensuring safety
            • Coordinate with media organizations on security protocols
            • Prevent criminal organization intimidation success
            
            STRATEGIC IMPLICATIONS:
            • Public awareness of criminal organization threat to press
            • Demonstration of criminal enterprise intimidation tactics
            • Evidence of obstruction of justice through media intimidation
            • Protection of democratic institutions and press freedom
            
            The operation protects both journalists and democratic institutions.`,
            image: "journalist_protection_detail",
            imagePrompt: "Federal agents providing discreet protection for investigative journalists, news organization security, press freedom protection",
            sources: ["Press Freedom Protection Protocols", "Media Security Guidelines", "Journalist Safety Assessment"],
            choices: [
                {
                    text: "Strengthen journalist security while maintaining press freedom",
                    nextScene: "media_security_counterattack",
                    collectEvidence: true
                },
                {
                    text: "Use journalist protection to gather intelligence on threats",
                    nextScene: "assassination_network_investigation"
                },
                {
                    text: "Coordinate with media organizations on security protocols",
                    nextScene: "enhanced_security_investigation"
                }
            ],
            educationalNote: "Protecting journalists from criminal intimidation is essential for maintaining press freedom and democratic institutions while supporting federal investigations."
        },

        location_data_analysis: {
            text: `LOCATION DATA INTELLIGENCE ANALYSIS
            
            Advanced analysis of location data from seized devices reveals patterns of movement that corroborate witness testimony and expose criminal activities.
            
            LOCATION INTELLIGENCE SOURCES:
            
            MOBILE DEVICE DATA:
            • GPS tracking from smartphones and tablets
            • Cell tower triangulation records
            • Wi-Fi network connection logs
            • Bluetooth proximity data analysis
            
            VEHICLE TRACKING:
            • Luxury car GPS and navigation systems
            • Private jet flight tracking records
            • Yacht and boat positioning systems
            • Commercial transportation booking records
            
            DIGITAL FOOTPRINTS:
            • Social media check-ins and location tags
            • Credit card transaction geographical patterns
            • Hotel and restaurant reservation systems
            • Event attendance and venue access records
            
            PATTERN ANALYSIS:
            • Movement correlation with alleged criminal activities
            • Proximity analysis showing criminal organization meetings
            • Timeline reconstruction of key events
            • Geographic clustering analysis revealing operations centers
            
            CORROBORATION EVIDENCE:
            • Location data confirms witness testimony accuracy
            • Movement patterns support financial crime timelines
            • Proximity data validates criminal conspiracy allegations
            • Geographic analysis reveals criminal enterprise scope
            
            The location intelligence creates a comprehensive map of criminal enterprise operations.`,
            image: "location_data_analysis_center",
            imagePrompt: "FBI digital analysis center with location tracking maps, GPS data visualization, movement pattern analysis, geographic intelligence",
            sources: ["FBI Digital Evidence Unit", "Location Intelligence Analysis", "Geographic Investigation Protocols"],
            choices: [
                {
                    text: "Focus on corroborating witness testimony with location data",
                    nextScene: "corroborating_evidence",
                    collectEvidence: true
                },
                {
                    text: "Analyze geographic patterns of criminal enterprise operations",
                    nextScene: "enterprise_structure_analysis"
                },
                {
                    text: "Use location data to identify additional criminal activities",
                    nextScene: "encrypted_communications_analysis"
                }
            ],
            educationalNote: "Location data analysis provides powerful corroborating evidence in federal investigations, creating objective timelines and movement patterns that support witness testimony."
        },

        mann_act_question: {
            text: `MANN ACT FEDERAL JURISDICTION ANALYSIS
            
            You analyze potential Mann Act violations to establish additional federal jurisdiction and charges related to interstate transportation for illegal purposes.
            
            MANN ACT ELEMENTS:
            
            STATUTORY REQUIREMENTS:
            • Transportation of individuals across state lines
            • Knowledge of transportation purpose
            • Intent to engage in illegal sexual activity
            • Use of interstate commerce facilities
            
            EVIDENCE ANALYSIS:
            • Private jet flight records between states
            • Hotel reservations in multiple jurisdictions
            • Communication records planning interstate travel
            • Financial records for transportation expenses
            
            VICTIM TESTIMONY:
            • Accounts of interstate transportation
            • Coercion and deception in travel arrangements
            • Knowledge of intended illegal activities
            • Impact testimony regarding exploitation
            
            LEGAL CONSIDERATIONS:
            • Federal vs. state jurisdiction overlap
            • Constitutional challenges to Mann Act application
            • Evidentiary requirements for interstate nexus
            • Sentencing enhancement implications
            
            PROSECUTION STRATEGY:
            • Strengthening federal jurisdiction claims
            • Adding charges for sentencing leverage
            • Demonstrating interstate criminal enterprise
            • Supporting RICO predicate act requirements
            
            Mann Act charges would significantly strengthen the federal case and provide additional prosecutorial tools.`,
            image: "mann_act_legal_analysis",
            imagePrompt: "Federal legal research on Mann Act, interstate transportation evidence, legal briefs, jurisdiction analysis documentation",
            sources: ["Mann Act Case Law Analysis", "Federal Jurisdiction Research", "Interstate Crime Documentation"],
            choices: [
                {
                    text: "Strengthen interstate transportation evidence",
                    nextScene: "interstate_commerce_analysis",
                    collectEvidence: true
                },
                {
                    text: "Focus on victim testimony regarding interstate travel",
                    nextScene: "victim_testimony_analysis"
                },
                {
                    text: "Use Mann Act charges to support RICO predicate acts",
                    nextScene: "predicate_acts_analysis"
                }
            ],
            educationalNote: "Mann Act violations provide strong federal jurisdiction for interstate transportation crimes and often serve as important predicate acts in RICO prosecutions."
        },

        media_security_counterattack: {
            text: `MEDIA COUNTERINTELLIGENCE OPERATION
            
            In response to criminal organization media manipulation, you launch a sophisticated counterintelligence operation to control information flow and protect investigation integrity.
            
            COUNTERINTELLIGENCE STRATEGY:
            
            INFORMATION CONTROL:
            • Selective disclosure of non-sensitive information
            • Strategic leaks to test media source loyalty
            • Disinformation campaigns to confuse criminal organization
            • Media coordination to prevent premature disclosure
            
            MEDIA RELATIONSHIP MANAGEMENT:
            • Trusted journalist network development
            • Background briefings for reliable reporters
            • Coordination with news organization security
            • Press conference timing and message control
            
            CRIMINAL ORGANIZATION DISRUPTION:
            • Counter-propaganda operations
            • Exposure of criminal organization media manipulation
            • Public relations campaign highlighting criminal activities
            • Victim advocacy support and media appearances
            
            OPERATIONAL SECURITY:
            • Protection of sensitive investigation details
            • Counter-surveillance of media operations
            • Secure communication protocols for media contact
            • Compartmentalization of information access
            
            STRATEGIC OBJECTIVES:
            • Control public narrative around investigation
            • Protect witness and victim privacy
            • Counter criminal organization propaganda
            • Maintain public support for prosecution
            
            The media counterattack becomes a critical component of overall investigative strategy.`,
            image: "media_counterintelligence_center",
            imagePrompt: "Federal media operations center, strategic communications, press briefings, information warfare, public relations coordination",
            sources: ["Federal Media Relations Protocol", "Counterintelligence Operations", "Strategic Communications Guidelines"],
            choices: [
                {
                    text: "Focus on controlling information flow and preventing leaks",
                    nextScene: "enhanced_security_investigation",
                    collectEvidence: true
                },
                {
                    text: "Launch public awareness campaign about criminal organization",
                    nextScene: "public_exposure_gambit"
                },
                {
                    text: "Coordinate with victim advocacy for media support",
                    nextScene: "victim_testimony_analysis"
                }
            ],
            educationalNote: "Media counterintelligence operations help federal investigations maintain control over public information while countering criminal organization propaganda efforts."
        },

        missing_investigators_families: {
            text: `MISSING INVESTIGATORS' FAMILIES CRISIS
            
            A shocking development: Family members of federal investigators have gone missing, creating a crisis that threatens both personal safety and investigation integrity.
            
            CRISIS SITUATION:
            
            MISSING PERSONS:
            • Spouse and children of lead FBI investigator
            • Parents of key prosecutor on the case  
            • Sister of financial crimes analyst
            • Brother-in-law of witness protection coordinator
            
            THREAT INDICATORS:
            • No communication since disappearances began
            • Evidence of professional abduction techniques
            • Vehicles found abandoned in remote locations
            • Personal belongings left behind suggesting forced departure
            
            CRIMINAL ORGANIZATION INVOLVEMENT:
            • Encrypted communications mentioning "family reunions"
            • Financial transfers to known kidnapping specialists
            • International criminal network activation
            • Previous threats against investigator families
            
            RESPONSE OPERATIONS:
            • FBI tactical response teams activated
            • Inter-agency task force formed for family rescue
            • International cooperation for cross-border search
            • 24/7 command center established
            
            IMPACT ON INVESTIGATION:
            • Investigator effectiveness compromised by personal crisis
            • Security protocols enhanced for remaining personnel
            • Consideration of investigation suspension vs. acceleration
            • Witness protection program review and enhancement
            
            The crisis tests federal law enforcement resolve and family protection capabilities.`,
            image: "missing_families_crisis_center",
            imagePrompt: "FBI crisis command center, missing persons investigation, family photos on board, urgent rescue operations coordination",
            sources: ["FBI Crisis Response Protocol", "Family Protection Emergency Procedures", "Kidnapping Investigation Guidelines"],
            choices: [
                {
                    text: "Focus all resources on family rescue operations",
                    nextScene: "emergency_evacuation_protection",
                    collectEvidence: true
                },
                {
                    text: "Use family crisis to accelerate prosecution and arrests",
                    nextScene: "synchronized_rescue_arrest"
                },
                {
                    text: "Enhance security for all remaining investigation personnel",
                    nextScene: "enhanced_security_investigation"
                }
            ],
            educationalNote: "Threats to investigators' families represent escalation in criminal organization tactics and require immediate, comprehensive response to protect personnel and maintain investigation integrity."
        },

        mole_arrest_operation: {
            text: `MOLE ARREST TACTICAL OPERATION
            
            After extensive counterintelligence work, you've identified the mole within federal law enforcement. The arrest operation must be executed with precision to prevent evidence destruction and ensure prosecution success.
            
            ARREST OPERATION PLANNING:
            
            TARGET PROFILE:
            • Senior federal agent with 15 years experience
            • Access to classified investigation materials
            • Financial motivation: $2.3 million in offshore payments
            • Family vulnerabilities exploited by criminal organization
            
            TACTICAL APPROACH:
            • Simultaneous arrest at home and office
            • Evidence preservation teams at multiple locations
            • Digital forensics immediate device seizure
            • Interview team prepared for interrogation
            
            EVIDENCE COLLECTION:
            • Banking records showing criminal organization payments
            • Communication devices containing incriminating messages
            • Physical documents leaked to criminal organization
            • Surveillance footage of unauthorized meetings
            
            OPERATIONAL SECURITY:
            • Compartmentalized arrest team to prevent leaks
            • Counter-surveillance during operation execution
            • Immediate communication blackout for suspect
            • Evidence chain of custody protection
            
            STRATEGIC IMPLICATIONS:
            • Restoration of investigation integrity
            • Recovery of compromised intelligence
            • Potential cooperation agreement negotiation
            • Demonstration of consequences for betrayal
            
            The mole arrest operation marks a turning point in investigation security and effectiveness.`,
            image: "federal_mole_arrest",
            imagePrompt: "FBI tactical arrest of federal agent, evidence seizure, internal affairs investigation, betrayal and justice",
            sources: ["FBI Internal Affairs Protocol", "Counterintelligence Arrest Procedures", "Federal Employee Security Investigation"],
            choices: [
                {
                    text: "Execute immediate arrest with full tactical support",
                    nextScene: "turning_the_mole",
                    collectEvidence: true
                },
                {
                    text: "Focus on evidence preservation and digital forensics",
                    nextScene: "deleted_data_recovery"
                },
                {
                    text: "Use arrest to identify additional criminal organization contacts",
                    nextScene: "co_conspirator_payments"
                }
            ],
            educationalNote: "Internal mole arrests in federal investigations require sophisticated operational security and immediate evidence preservation to prevent further compromise."
        },

        money_laundering_analysis: {
            text: `COMPREHENSIVE MONEY LAUNDERING INVESTIGATION
            
            The financial crimes investigation reveals a sophisticated international money laundering operation spanning multiple countries and financial institutions.
            
            MONEY LAUNDERING STRUCTURE:
            
            PLACEMENT PHASE:
            • Cash deposits structured below reporting thresholds
            • Casino gambling to convert cash to chips and back
            • Purchase of high-value assets (art, jewelry, real estate)
            • Investment in legitimate businesses for cash injection
            
            LAYERING PHASE:
            • Complex web of shell company transactions
            • International wire transfers through multiple jurisdictions
            • Cryptocurrency exchanges and mixing services  
            • Offshore banking and investment accounts
            
            INTEGRATION PHASE:
            • Legitimate business income appearance
            • Real estate investments and property development
            • Entertainment industry revenue stream integration
            • Charitable donations and foundation establishments
            
            FINANCIAL EVIDENCE:
            • Bank records showing suspicious transaction patterns
            • Business documents revealing shell company operations
            • International cooperation providing foreign account data
            • Cryptocurrency blockchain analysis revealing hidden transfers
            
            CRIMINAL ENTERPRISE INTEGRATION:
            • Money laundering supports overall criminal operations
            • Financial crimes generate additional criminal proceeds
            • International scope demonstrates enterprise sophistication
            • Professional advisory involvement shows systemic corruption
            
            Total estimated laundered funds: Over $500 million across multiple years.`,
            image: "money_laundering_investigation",
            imagePrompt: "Financial crimes investigation center, international money flow charts, banking documents, cryptocurrency analysis, complex financial networks",
            sources: ["Financial Crimes Enforcement Network", "International Banking Investigation", "Cryptocurrency Analysis Unit"],
            choices: [
                {
                    text: "Focus on international banking cooperation for account seizure",
                    nextScene: "offshore_banking_investigation",
                    collectEvidence: true
                },
                {
                    text: "Analyze cryptocurrency transactions and blockchain evidence",
                    nextScene: "deleted_data_recovery"
                },
                {
                    text: "Investigate professional advisors facilitating laundering",
                    nextScene: "co_conspirator_payments"
                }
            ],
            educationalNote: "Money laundering investigations require international cooperation and sophisticated financial analysis to trace criminal proceeds through complex layering schemes."
        },

        office_break_in_investigation: {
            text: `PROSECUTOR'S OFFICE BREAK-IN INVESTIGATION
            
            A sophisticated break-in at the federal prosecutor's office has compromised sensitive case materials. The investigation reveals professional criminal organization involvement.
            
            BREAK-IN ANALYSIS:
            
            ENTRY METHODS:
            • Professional lock picking and security system bypass
            • Inside knowledge of building layout and security protocols
            • Advanced surveillance equipment used for reconnaissance
            • No alarms triggered during entry and exit
            
            TARGETED MATERIALS:
            • Witness protection location information
            • Evidence inventory and chain of custody documents
            • Prosecution strategy memos and trial preparation
            • Financial investigation records and banking documentation
            
            SECURITY BREACH IMPLICATIONS:
            • Witness safety compromised requiring immediate relocation
            • Investigation strategy exposed to criminal organization
            • Evidence integrity questions raised for trial preparation
            • Federal building security protocols require enhancement
            
            CRIMINAL ORGANIZATION SOPHISTICATION:
            • Professional intelligence gathering capabilities
            • Corruption within building security or maintenance staff
            • International criminal network technical support
            • Coordinated attack on federal prosecution infrastructure
            
            RESPONSE OPERATIONS:
            • Crime scene forensics and evidence collection
            • Enhanced security protocols implementation
            • Witness protection program emergency activation
            • Counter-surveillance operations around federal facilities
            
            The break-in represents escalation in criminal organization attacks on federal law enforcement.`,
            image: "federal_office_break_in",
            imagePrompt: "FBI investigating break-in at prosecutor's office, crime scene analysis, security breach investigation, professional espionage",
            sources: ["Federal Building Security Assessment", "Crime Scene Investigation Report", "Counterintelligence Analysis"],
            choices: [
                {
                    text: "Focus on identifying insider corruption enabling the break-in",
                    nextScene: "turning_the_mole",
                    collectEvidence: true
                },
                {
                    text: "Immediately relocate all compromised witnesses",
                    nextScene: "emergency_evacuation_protection"
                },
                {
                    text: "Enhance federal building security and counter-surveillance",
                    nextScene: "enhanced_security_investigation"
                }
            ],
            educationalNote: "Sophisticated break-ins targeting federal prosecutions demonstrate criminal organization intelligence capabilities and require comprehensive security response."
        },

        offshore_banking_investigation: {
            text: `INTERNATIONAL OFFSHORE BANKING INVESTIGATION
            
            The investigation expands globally to trace criminal proceeds hidden in offshore banking havens, revealing the international scope of the money laundering operation.
            
            OFFSHORE BANKING NETWORK:
            
            JURISDICTIONAL SCOPE:
            • Cayman Islands: $117 million in identified accounts
            • Swiss Banking: $89 million in private banking relationships
            • British Virgin Islands: $67 million in shell company accounts
            • Dubai Banking: $45 million in Islamic banking instruments
            • Singapore: $34 million in wealth management accounts
            
            INTERNATIONAL COOPERATION:
            • Mutual Legal Assistance Treaties (MLATs) activated
            • Financial Intelligence Unit cooperation agreements
            • Interpol coordination for international banking records
            • Diplomatic pressure for account freezing and seizure
            
            BANKING RELATIONSHIP ANALYSIS:
            • Private banking services for high-net-worth criminals
            • Shell company account management and transactions
            • Investment advisory services facilitating money laundering
            • Trust and foundation structures hiding beneficial ownership
            
            REGULATORY CHALLENGES:
            • Bank secrecy laws protecting account holder privacy
            • Political resistance to financial transparency
            • Time delays in obtaining banking records
            • Competing jurisdiction claims over seized assets
            
            CRIMINAL ENTERPRISE IMPLICATIONS:
            • International money laundering demonstrates enterprise sophistication
            • Offshore banking enables continued criminal operations
            • Global financial network supports witness intimidation funding
            • Professional advisory relationships indicate systemic corruption
            
            Total identified offshore assets: Over $350 million across multiple jurisdictions.`,
            image: "offshore_banking_investigation",
            imagePrompt: "International banking investigation, offshore financial centers, global money laundering network, diplomatic cooperation",
            sources: ["International Banking Investigation", "MLAT Cooperation Records", "Financial Intelligence Analysis"],
            choices: [
                {
                    text: "Focus on Swiss banking relationships and asset seizure",
                    nextScene: "asset_forfeiture_analysis",
                    collectEvidence: true
                },
                {
                    text: "Investigate professional advisors facilitating offshore banking",
                    nextScene: "co_conspirator_payments"
                },
                {
                    text: "Coordinate international law enforcement for account freezing",
                    nextScene: "federal_agency_coordination"
                }
            ],
            educationalNote: "International offshore banking investigations require extensive diplomatic cooperation and understanding of complex financial structures used to hide criminal proceeds."
        },

        operation_debriefing: {
            text: `COMPREHENSIVE OPERATION DEBRIEFING
            
            After months of complex federal operations, you conduct a comprehensive debriefing to assess successes, failures, and lessons learned from the investigation.
            
            OPERATION ASSESSMENT:
            
            INVESTIGATIVE SUCCESSES:
            • Criminal enterprise structure completely mapped
            • Financial crimes totaling over $500 million documented
            • International criminal network relationships exposed
            • Multiple witness cooperation agreements secured
            
            OPERATIONAL CHALLENGES:
            • Internal security breaches compromising investigation
            • Criminal organization sophistication exceeding expectations
            • International cooperation delays affecting evidence collection
            • Media manipulation campaigns disrupting public support
            
            EVIDENCE COLLECTION RESULTS:
            • Documentary evidence: 47,000+ documents seized and analyzed
            • Digital evidence: 15TB of electronic data processed
            • Financial evidence: $750 million in assets identified and frozen
            • Witness testimony: 89 cooperating witnesses secured
            
            PERSONNEL IMPACT:
            • Investigator families threatened requiring protection
            • Federal agents compromised by criminal organization corruption
            • Prosecutor team enhanced security protocols implemented
            • Inter-agency coordination improved through crisis cooperation
            
            STRATEGIC OUTCOMES:
            • Federal prosecution case strength significantly enhanced
            • Criminal organization operations disrupted and exposed
            • International criminal network partially dismantled
            • Entertainment industry compliance improvements initiated
            
            The debriefing reveals both the investigation's complexity and success in penetrating a sophisticated criminal enterprise.`,
            image: "federal_operation_debriefing",
            imagePrompt: "Comprehensive federal operation debriefing, investigation assessment, lessons learned analysis, law enforcement leadership",
            sources: ["Operation Assessment Report", "Federal Investigation Analysis", "Law Enforcement Lessons Learned"],
            choices: [
                {
                    text: "Focus on applying lessons learned to strengthen prosecution",
                    nextScene: "trial_preparation_investigation",
                    collectEvidence: true
                },
                {
                    text: "Use debriefing results to enhance ongoing operations",
                    nextScene: "enhanced_security_investigation"
                },
                {
                    text: "Share intelligence with international partners",
                    nextScene: "federal_agency_coordination"
                }
            ],
            educationalNote: "Operation debriefings are crucial for federal investigations to assess effectiveness, identify improvements, and share lessons learned across law enforcement."
        },

        phone_trace_rescue_operation: {
            text: `EMERGENCY PHONE TRACE RESCUE MISSION
            
            A breakthrough in digital forensics allows you to trace a distress call from missing investigator families, leading to a high-stakes rescue operation.
            
            PHONE TRACE INTELLIGENCE:
            
            SIGNAL ANALYSIS:
            • Cell tower triangulation narrowing location to 3-mile radius
            • Digital forensics recovering partial GPS coordinates
            • Background audio analysis revealing environmental clues
            • Voice stress analysis confirming genuine distress call
            
            LOCATION INTELLIGENCE:
            • Remote warehouse complex in industrial district
            • Limited road access requiring tactical approach planning
            • Security camera network identified around perimeter
            • Multiple escape routes available to criminal organization
            
            RESCUE OPERATION PLANNING:
            • FBI Hostage Rescue Team (HRT) deployment
            • Local SWAT team coordination and backup
            • Medical response teams on standby for casualties
            • Communication specialists for hostage negotiation
            
            TACTICAL CHALLENGES:
            • Unknown number of hostages and hostage-takers
            • Potential for explosive devices or other lethal traps
            • Limited intelligence on internal building layout
            • Media presence requiring operational security
            
            OPERATIONAL EXECUTION:
            • Multi-point entry with coordinated timing
            • Non-lethal force prioritized to protect hostages
            • Evidence preservation during rescue operations
            • Immediate medical assessment and family reunification
            
            The rescue operation tests federal tactical capabilities and family protection resolve.`,
            image: "hostage_rescue_operation",
            imagePrompt: "FBI Hostage Rescue Team tactical operation, warehouse assault, family rescue mission, high-stakes federal response",
            sources: ["FBI Hostage Rescue Team Protocol", "Tactical Operations Manual", "Emergency Response Procedures"],
            choices: [
                {
                    text: "Execute full tactical rescue with maximum force",
                    nextScene: "synchronized_rescue_arrest",
                    collectEvidence: true
                },
                {
                    text: "Attempt negotiation to reduce risk to hostages",
                    nextScene: "witness_protection_program"
                },
                {
                    text: "Use rescue operation to gather intelligence on criminal organization",
                    nextScene: "assassination_network_investigation"
                }
            ],
            educationalNote: "Phone trace rescue operations require sophisticated technical analysis and tactical coordination to successfully recover kidnapped individuals."
        },

        political_connections_investigation: {
            text: `POLITICAL CONNECTIONS INVESTIGATION
            
            The investigation uncovers disturbing connections between the criminal enterprise and political figures, revealing corruption that extends into government institutions.
            
            POLITICAL NETWORK ANALYSIS:
            
            ELECTED OFFICIALS:
            • City council members receiving entertainment industry donations
            • State legislators with business relationships to criminal enterprise
            • Federal representatives with family connections to organization
            • Judicial figures with financial ties to criminal proceeds
            
            GOVERNMENT EMPLOYEES:
            • Regulatory officials providing favorable treatment
            • Law enforcement personnel receiving bribes
            • Judicial staff facilitating case information leaks
            • Government contractors providing services to criminal organization
            
            POLITICAL INFLUENCE OPERATIONS:
            • Campaign contributions masking criminal proceeds
            • Lobbying efforts to prevent regulatory oversight
            • Political fundraising events laundering criminal money
            • Government contract awards benefiting criminal enterprise
            
            CORRUPTION EVIDENCE:
            • Financial records showing political payments
            • Communication records revealing influence operations
            • Witness testimony about political corruption
            • Document evidence of government official cooperation
            
            NATIONAL SECURITY IMPLICATIONS:
            • Criminal enterprise infiltration of government institutions
            • Compromise of law enforcement and judicial processes
            • Foreign criminal influence in domestic political system
            • Democratic institution integrity threats
            
            The political connections investigation reveals systemic corruption requiring comprehensive law enforcement response.`,
            image: "political_corruption_investigation",
            imagePrompt: "FBI investigating political corruption, government building surveillance, elected officials under investigation, democratic institution protection",
            sources: ["Political Corruption Investigation", "Government Integrity Analysis", "Democratic Institution Assessment"],
            choices: [
                {
                    text: "Focus on documenting criminal enterprise political influence",
                    nextScene: "co_conspirator_payments",
                    collectEvidence: true
                },
                {
                    text: "Investigate judicial corruption affecting federal prosecution",
                    nextScene: "evidence_legal_analysis"
                },
                {
                    text: "Coordinate with political corruption task forces",
                    nextScene: "federal_agency_coordination"
                }
            ],
            educationalNote: "Political corruption investigations require careful handling to protect democratic institutions while exposing criminal influence in government."
        },

        predicate_acts_analysis: {
            text: `RICO PREDICATE ACTS LEGAL ANALYSIS
            
            You conduct detailed analysis of potential RICO predicate acts to ensure the prosecution meets all legal requirements for a successful racketeering conviction.
            
            RICO PREDICATE ACTS REQUIREMENTS:
            
            STATUTORY PREDICATE ACTS:
            • Money laundering: Multiple transactions over $500 million
            • Wire fraud: Interstate communications for fraudulent schemes
            • Mail fraud: Use of postal services for criminal enterprise
            • Extortion: Threats and violence for criminal enterprise benefit
            
            PATTERN ANALYSIS:
            • Two or more predicate acts within 10-year period
            • Relationship between predicate acts and criminal enterprise
            • Continuity of criminal activity over extended time period
            • Threat of continued criminal activity in the future
            
            EVIDENCE DOCUMENTATION:
            • Financial records proving money laundering predicate acts
            • Communication records establishing wire fraud elements
            • Witness testimony describing extortion and violence
            • Documentary evidence linking acts to criminal enterprise
            
            LEGAL CHALLENGES:
            • Defense arguments challenging predicate act sufficiency
            • Constitutional challenges to RICO statute application
            • Evidentiary challenges to predicate act proof
            • Sentencing implications of multiple predicate acts
            
            PROSECUTION STRATEGY:
            • Strongest predicate acts emphasized for jury presentation
            • Multiple alternative predicate acts prepared for defense challenges
            • Expert testimony explaining predicate act legal requirements
            • Jury instruction preparation for complex legal concepts
            
            Strong predicate acts are essential for RICO conviction success.`,
            image: "rico_predicate_acts_analysis",
            imagePrompt: "Legal research on RICO predicate acts, federal prosecutor case preparation, statute analysis, complex legal requirements",
            sources: ["RICO Statute Analysis", "Predicate Acts Case Law", "Federal Prosecution Guidelines"],
            choices: [
                {
                    text: "Strengthen money laundering predicate act evidence",
                    nextScene: "money_laundering_analysis",
                    collectEvidence: true
                },
                {
                    text: "Focus on wire fraud and communication evidence",
                    nextScene: "encrypted_communications_analysis"
                },
                {
                    text: "Document extortion and violence predicate acts",
                    nextScene: "assassination_network_investigation"
                }
            ],
            educationalNote: "RICO predicate acts must meet specific legal requirements and demonstrate pattern of racketeering activity connected to criminal enterprise operations."
        },

        private_jet_evidence_analysis: {
            text: `PRIVATE JET EVIDENCE INVESTIGATION
            
            Analysis of private aircraft records reveals crucial evidence of criminal enterprise operations, international money laundering, and witness intimidation activities.
            
            AVIATION EVIDENCE CATEGORIES:
            
            FLIGHT RECORDS:
            • 347 flights analyzed across 18-month investigation period
            • Interstate and international travel patterns documented
            • Passenger manifests revealing criminal organization members
            • Flight timing correlation with alleged criminal activities
            
            AIRCRAFT OWNERSHIP:
            • Shell company ownership structure hiding beneficial owners
            • International aircraft registration for tax avoidance
            • Maintenance records showing luxury modifications
            • Insurance documentation revealing asset values
            
            OPERATIONAL EVIDENCE:
            • Flight crews witness testimony about suspicious activities
            • Airport surveillance footage confirming passenger identities
            • Customs declarations showing false information
            • Fuel and service records documenting expense patterns
            
            CRIMINAL ACTIVITY CORRELATION:
            • Flights to offshore banking locations during money laundering
            • Travel timing matching witness intimidation campaigns
            • International flights to non-extradition treaty countries
            • Emergency flight preparations during law enforcement activity
            
            FORENSIC ANALYSIS:
            • Interior evidence collection revealing criminal activities
            • Digital device seizure from aircraft electronics
            • Financial records analysis showing aircraft expense money laundering
            • International cooperation for foreign jurisdiction evidence
            
            Private jet evidence provides comprehensive timeline of criminal enterprise operations.`,
            image: "private_jet_investigation",
            imagePrompt: "FBI investigating luxury private jets, aviation records analysis, aircraft forensics, international flight tracking",
            sources: ["Aviation Investigation Unit", "International Flight Records", "Aircraft Forensics Analysis"],
            choices: [
                {
                    text: "Focus on flight records correlation with criminal activities",
                    nextScene: "location_data_analysis",
                    collectEvidence: true
                },
                {
                    text: "Investigate shell company aircraft ownership structure",
                    nextScene: "business_documents_analysis"
                },
                {
                    text: "Analyze international flights for money laundering evidence",
                    nextScene: "offshore_banking_investigation"
                }
            ],
            educationalNote: "Private aircraft evidence often provides crucial timeline and location evidence in federal investigations of sophisticated criminal enterprises."
        },

        property_network_investigation: {
            text: `REAL ESTATE PROPERTY NETWORK INVESTIGATION
            
            Investigation of real estate holdings reveals a vast property network used for money laundering, criminal operations, and asset hiding across multiple jurisdictions.
            
            PROPERTY PORTFOLIO ANALYSIS:
            
            DOMESTIC REAL ESTATE:
            • 47 residential properties across 12 states
            • 23 commercial properties in major metropolitan areas
            • 8 luxury vacation homes in exclusive resort locations
            • 15 investment properties generating rental income
            
            INTERNATIONAL PROPERTIES:
            • Caribbean private island estate: $34 million value
            • European luxury apartments in London and Paris
            • Asian commercial investments in Hong Kong and Singapore
            • South American hideaway properties in non-extradition countries
            
            OWNERSHIP STRUCTURE:
            • Shell company ownership hiding beneficial ownership
            • Trust and foundation structures for asset protection
            • International corporate entities for tax avoidance
            • Family member and associate nominee ownership
            
            CRIMINAL ENTERPRISE INTEGRATION:
            • Properties used for alleged criminal activities
            • Real estate transactions for money laundering
            • Property rental income mixed with criminal proceeds
            • International properties for escape planning
            
            EVIDENCE COLLECTION:
            • Property transaction records and financing documentation
            • Surveillance evidence of criminal activities at properties
            • Financial records showing money laundering through real estate
            • Witness testimony about property use for criminal purposes
            
            Total estimated property portfolio value: Over $400 million in domestic and international real estate.`,
            image: "property_network_investigation",
            imagePrompt: "Real estate investigation board showing property locations, luxury estates, international holdings, money laundering through property",
            sources: ["Real Estate Investigation Unit", "Property Records Analysis", "International Asset Tracking"],
            choices: [
                {
                    text: "Focus on property seizure and forfeiture proceedings",
                    nextScene: "asset_forfeiture_analysis",
                    collectEvidence: true
                },
                {
                    text: "Investigate money laundering through real estate transactions",
                    nextScene: "money_laundering_analysis"
                },
                {
                    text: "Analyze international properties for escape planning evidence",
                    nextScene: "flight_risk_analysis"
                }
            ],
            educationalNote: "Real estate investigations often reveal extensive money laundering schemes and provide substantial assets for criminal forfeiture proceedings."
        },

        prosecution_burden_analysis: {
            text: `PROSECUTION BURDEN OF PROOF ANALYSIS
            
            You conduct a comprehensive analysis of the prosecution's burden of proof requirements to ensure the federal case meets all legal standards for successful conviction.
            
            BURDEN OF PROOF REQUIREMENTS:
            
            BEYOND REASONABLE DOUBT STANDARD:
            • Highest burden of proof in criminal law
            • Evidence must exclude every reasonable hypothesis of innocence
            • Jury must be firmly convinced of defendant's guilt
            • Circumstantial evidence must be sufficient to support conviction
            
            RICO PROSECUTION SPECIFIC BURDENS:
            • Prove existence of criminal enterprise
            • Demonstrate pattern of racketeering activity
            • Establish defendant's participation in enterprise
            • Show interstate commerce nexus
            
            EVIDENCE SUFFICIENCY ANALYSIS:
            • Financial evidence: $750 million in documented criminal proceeds
            • Witness testimony: 89 cooperating witnesses with corroboration
            • Documentary evidence: 47,000+ authenticated documents
            • Digital evidence: 15TB of electronic data with forensic analysis
            
            PROSECUTION STRENGTHS:
            • Multiple independent sources of evidence
            • Extensive corroborating physical and documentary evidence
            • International cooperation providing foreign evidence
            • Expert testimony explaining complex financial schemes
            
            POTENTIAL WEAKNESSES:
            • Cooperating witness credibility challenges
            • Complex financial evidence requiring expert explanation
            • International evidence authentication complications
            • Defense alternative theory possibilities
            
            The analysis confirms the prosecution meets burden of proof requirements for conviction.`,
            image: "prosecution_burden_analysis",
            imagePrompt: "Federal prosecutors analyzing burden of proof requirements, legal research, evidence sufficiency review, case strength assessment",
            sources: ["Federal Criminal Law Analysis", "Burden of Proof Standards", "RICO Prosecution Guidelines"],
            choices: [
                {
                    text: "Strengthen witness testimony credibility and corroboration",
                    nextScene: "corroborating_evidence",
                    collectEvidence: true
                },
                {
                    text: "Focus on simplifying complex financial evidence presentation",
                    nextScene: "money_laundering_analysis"
                },
                {
                    text: "Prepare responses to anticipated defense alternative theories",
                    nextScene: "defense_strategy_analysis"
                }
            ],
            educationalNote: "Federal prosecutors must ensure evidence meets beyond reasonable doubt standard and addresses specific legal requirements for successful RICO convictions."
        },

        prosecutor_office_investigation: {
            text: `PROSECUTOR OFFICE SECURITY INVESTIGATION
            
            Following the break-in, you conduct a comprehensive investigation of prosecutor office security and potential internal corruption that enabled the breach.
            
            SECURITY VULNERABILITY ASSESSMENT:
            
            PHYSICAL SECURITY FAILURES:
            • Outdated access control systems easily bypassed
            • Insufficient surveillance camera coverage in sensitive areas
            • Security guard protocols not followed during night shift
            • Backup security systems failed during critical period
            
            PERSONNEL SECURITY REVIEW:
            • Background checks revealing financial vulnerabilities
            • Access logs showing suspicious after-hours building entry
            • Communication monitoring detecting unauthorized contact
            • Lifestyle analysis indicating possible corruption or compromise
            
            INFORMATION SECURITY BREACHES:
            • Computer systems accessed without authorization
            • Confidential files copied to external devices
            • Email systems compromised revealing investigation details
            • Secure communications intercepted and decoded
            
            INTERNAL INVESTIGATION RESULTS:
            • Building maintenance contractor with criminal organization ties
            • Security company employee receiving suspicious payments
            • Administrative staff member showing unexplained wealth
            • IT contractor with access to sensitive systems compromised
            
            CORRECTIVE MEASURES IMPLEMENTED:
            • Complete security system upgrade and modernization
            • Enhanced personnel background check requirements
            • Compartmentalized information access protocols
            • Counter-surveillance operations around federal buildings
            
            The investigation reveals systematic infiltration requiring comprehensive security overhaul.`,
            image: "prosecutor_office_security",
            imagePrompt: "Federal building security investigation, prosecutor office security assessment, internal corruption investigation, enhanced protection",
            sources: ["Federal Building Security Report", "Internal Investigation Files", "Security Enhancement Protocol"],
            choices: [
                {
                    text: "Focus on prosecuting identified corrupt personnel",
                    nextScene: "turning_the_mole",
                    collectEvidence: true
                },
                {
                    text: "Implement comprehensive security overhaul",
                    nextScene: "enhanced_security_investigation"
                },
                {
                    text: "Investigate extent of criminal organization infiltration",
                    nextScene: "assassination_network_investigation"
                }
            ],
            educationalNote: "Federal prosecutor office security requires multi-layered protection against sophisticated criminal organization intelligence and infiltration attempts."
        },

        protection_racket_investigation: {
            text: `PROTECTION RACKET INVESTIGATION
            
            Investigation reveals a sophisticated protection racket operation that extends throughout the entertainment industry, providing security services while facilitating criminal activities.
            
            PROTECTION RACKET STRUCTURE:
            
            LEGITIMATE SECURITY SERVICES:
            • Personal protection for high-profile entertainment figures
            • Event security for concerts, parties, and industry gatherings
            • Residential security for celebrity homes and estates
            • Transportation security for travel and movement
            
            CRIMINAL PROTECTION SERVICES:
            • Witness intimidation and elimination services
            • Evidence destruction and crime scene cleanup
            • Law enforcement interference and corruption facilitation
            • Victim silencing through threats and violence
            
            FINANCIAL STRUCTURE:
            • Legitimate security contracts masking criminal payments
            • Protection fee structure based on threat level and services
            • International security operations extending criminal reach
            • Insurance and bonding arrangements for liability protection
            
            PERSONNEL NETWORK:
            • Former law enforcement and military personnel
            • International security contractors with violence experience
            • Technical specialists for surveillance and counter-surveillance
            • Administrative support for legitimate business operations
            
            EVIDENCE DOCUMENTATION:
            • Security contracts revealing criminal service provisions
            • Financial records showing protection racket payments
            • Communication records coordinating criminal protection services
            • Witness testimony about intimidation and violence
            
            The protection racket serves as enforcement arm of the criminal enterprise while maintaining legitimate business facade.`,
            image: "protection_racket_investigation",
            imagePrompt: "FBI investigating entertainment industry protection racket, security personnel under investigation, legitimate and criminal services analysis",
            sources: ["Protection Racket Investigation", "Security Industry Analysis", "Criminal Enterprise Enforcement"],
            choices: [
                {
                    text: "Focus on criminal protection services and witness intimidation",
                    nextScene: "witness_protection_analysis",
                    collectEvidence: true
                },
                {
                    text: "Investigate financial structure and payment systems",
                    nextScene: "co_conspirator_payments"
                },
                {
                    text: "Analyze personnel network and recruitment",
                    nextScene: "assassination_network_investigation"
                }
            ],
            educationalNote: "Protection rackets in criminal enterprises often combine legitimate security services with criminal enforcement, requiring careful analysis to separate legal and illegal activities."
        },

        r_kelly_case_comparison: {
            text: `R. KELLY CASE PRECEDENT ANALYSIS
            
            You analyze the R. Kelly federal prosecution as a precedent for entertainment industry RICO cases, examining successful strategies and potential challenges.
            
            R. KELLY CASE PRECEDENT REVIEW:
            
            PROSECUTION STRATEGIES:
            • RICO charges based on criminal enterprise structure
            • Multiple victim testimony with corroborating evidence
            • Financial crimes integration with sexual offense charges
            • Interstate commerce nexus through entertainment business
            
            EVIDENCE PRESENTATION:
            • Documentary evidence from business operations
            • Digital evidence from communications and recordings
            • Witness testimony from victims and associates
            • Expert testimony explaining criminal enterprise operations
            
            DEFENSE CHALLENGES OVERCOME:
            • Celebrity status and public relations campaigns
            • Victim credibility attacks and character assassination
            • Complex legal issues regarding RICO application
            • Media manipulation and public opinion influence
            
            SUCCESSFUL CONVICTION ELEMENTS:
            • Strong witness preparation and protection
            • Comprehensive corroborating evidence
            • Expert testimony explaining complex legal concepts
            • Effective prosecution narrative and case presentation
            
            LESSONS LEARNED:
            • Importance of witness protection and support
            • Need for simplified evidence presentation to jury
            • Value of international cooperation for evidence collection
            • Significance of public awareness and victim advocacy
            
            CURRENT CASE APPLICATION:
            • Similar criminal enterprise structure and operations
            • Comparable witness testimony and corroboration needs
            • Parallel financial crimes and money laundering evidence
            • Identical celebrity status and public relations challenges
            
            The R. Kelly precedent provides valuable guidance for prosecution strategy and evidence presentation.`,
            image: "r_kelly_case_comparison",
            imagePrompt: "Federal prosecutors studying R. Kelly case precedent, legal research comparison, entertainment industry prosecution strategies",
            sources: ["R. Kelly Case Files", "Entertainment Industry Prosecution Precedents", "RICO Case Law Analysis"],
            choices: [
                {
                    text: "Apply R. Kelly witness protection and preparation strategies",
                    nextScene: "witness_protection_analysis",
                    collectEvidence: true
                },
                {
                    text: "Use R. Kelly evidence presentation techniques",
                    nextScene: "trial_preparation_investigation"
                },
                {
                    text: "Implement R. Kelly media strategy and public relations approach",
                    nextScene: "media_security_counterattack"
                }
            ],
            educationalNote: "R. Kelly case precedent provides valuable lessons for prosecuting entertainment industry RICO cases involving celebrity defendants and complex criminal enterprises."
        },

        rico_elements_question: {
            text: `RICO ELEMENTS COMPREHENSIVE REVIEW
            
            You conduct a final comprehensive review of all RICO elements to ensure the prosecution case meets every legal requirement for successful conviction.
            
            RICO STATUTORY ELEMENTS:
            
            ENTERPRISE ELEMENT:
            • Ongoing organization with structure and hierarchy ✓
            • Common purpose among organization members ✓
            • Continuity of structure and personnel over time ✓
            • Enterprise distinct from pattern of racketeering activity ✓
            
            PATTERN OF RACKETEERING ACTIVITY:
            • Two or more predicate acts within 10-year period ✓
            • Relationship between predicate acts and enterprise ✓
            • Continuity of criminal activity over extended time ✓
            • Threat of continued criminal activity ✓
            
            INTERSTATE COMMERCE NEXUS:
            • Criminal activities affecting interstate commerce ✓
            • Use of facilities of interstate commerce ✓
            • Interstate travel in furtherance of criminal enterprise ✓
            • Economic impact on interstate commercial activities ✓
            
            DEFENDANT PARTICIPATION:
            • Active participation in criminal enterprise operations ✓
            • Knowledge of enterprise criminal purpose ✓
            • Substantial participation in enterprise affairs ✓
            • Pattern of racketeering activity connection ✓
            
            EVIDENCE SUFFICIENCY:
            • Documentary evidence supporting all elements ✓
            • Witness testimony corroborating legal requirements ✓
            • Expert analysis explaining complex legal concepts ✓
            • International evidence enhancing case strength ✓
            
            LEGAL REVIEW CONCLUSION:
            All RICO elements sufficiently proven with strong evidence foundation for successful prosecution.`,
            image: "rico_elements_checklist",
            imagePrompt: "Federal prosecutor reviewing comprehensive RICO elements checklist, legal requirements verification, case strength confirmation",
            sources: ["RICO Statute Comprehensive Analysis", "Federal Prosecution Checklist", "Legal Element Verification"],
            choices: [
                {
                    text: "Finalize trial preparation based on RICO elements review",
                    nextScene: "trial_preparation_investigation",
                    collectEvidence: true
                },
                {
                    text: "Strengthen any remaining evidence gaps",
                    nextScene: "corroborating_evidence"
                },
                {
                    text: "Prepare jury instructions for complex RICO concepts",
                    nextScene: "evidence_legal_analysis"
                }
            ],
            educationalNote: "Comprehensive RICO elements review ensures prosecution meets all statutory requirements and provides strong foundation for successful criminal conviction."
        },

        rico_failure_analysis: {
            text: `RICO PROSECUTION FAILURE RISK ANALYSIS
            
            You analyze potential failure points in the RICO prosecution to identify vulnerabilities and develop mitigation strategies.
            
            POTENTIAL FAILURE SCENARIOS:
            
            ENTERPRISE ELEMENT CHALLENGES:
            • Defense arguments that organization was loose association
            • Difficulty proving enterprise structure separate from crimes
            • Challenge to enterprise continuity over time
            • Alternative interpretation of business relationships
            
            PREDICATE ACT INSUFFICIENCY:
            • Individual predicate acts failing to meet legal standards
            • Lack of sufficient connection between acts and enterprise
            • Timing issues with predicate act occurrence
            • Constitutional challenges to predicate act definitions
            
            WITNESS CREDIBILITY COLLAPSE:
            • Cooperating witnesses changing testimony or recanting
            • Successful defense attacks on witness motivation
            • Witness protection failures compromising testimony
            • Discovery of witness perjury or inconsistencies
            
            EVIDENCE SUPPRESSION:
            • Constitutional challenges to search and seizure
            • International evidence authentication failures
            • Chain of custody problems with physical evidence
            • Hearsay objections to documentary evidence
            
            JURY NULLIFICATION RISKS:
            • Celebrity defendant sympathy affecting jury decision
            • Complex evidence creating jury confusion
            • Defense alternative narrative gaining jury acceptance
            • Media influence on jury despite instructions
            
            MITIGATION STRATEGIES:
            • Multiple backup evidence sources for each element
            • Extensive witness preparation and protection
            • Simplified evidence presentation techniques
            • Comprehensive jury selection and education
            
            Risk analysis reveals manageable vulnerabilities with proper preparation.`,
            image: "rico_failure_analysis",
            imagePrompt: "Federal prosecutors analyzing prosecution failure risks, vulnerability assessment, mitigation strategy development, case preparation",
            sources: ["RICO Prosecution Risk Assessment", "Federal Trial Strategy Analysis", "Case Failure Prevention"],
            choices: [
                {
                    text: "Implement comprehensive mitigation strategies",
                    nextScene: "trial_preparation_investigation",
                    collectEvidence: true
                },
                {
                    text: "Strengthen witness protection and preparation",
                    nextScene: "witness_protection_analysis"
                },
                {
                    text: "Develop alternative prosecution theories",
                    nextScene: "evidence_legal_analysis"
                }
            ],
            educationalNote: "RICO prosecution failure analysis helps identify and mitigate risks that could compromise successful conviction in complex criminal enterprise cases."
        },

        sentencing_analysis: {
            text: `FEDERAL SENTENCING ANALYSIS
            
            You analyze potential federal sentencing outcomes under current guidelines to understand prosecution leverage and defendant motivation for cooperation.
            
            FEDERAL SENTENCING GUIDELINES:
            
            RICO CONVICTION PENALTIES:
            • Base offense level: 19 (Federal Sentencing Guidelines)
            • Criminal history enhancement based on prior record
            • Leadership role enhancement: +4 levels for enterprise leadership
            • Money laundering enhancement: +2 levels for financial crimes
            
            SPECIFIC CHARGE PENALTIES:
            • RICO violation: Up to 20 years per count
            • Money laundering: Up to 20 years per count
            • Wire fraud: Up to 20 years per count
            • Extortion: Up to 20 years per count
            
            SENTENCE ENHANCEMENT FACTORS:
            • Extensive criminal history and prior convictions
            • Leadership role in criminal enterprise operations
            • Witness intimidation and obstruction of justice
            • International scope of criminal activities
            
            ASSET FORFEITURE IMPLICATIONS:
            • Criminal forfeiture of enterprise proceeds: $750 million
            • Real estate forfeiture: $400 million in properties
            • Personal asset forfeiture: Luxury items and investments
            • Business asset forfeiture: Entertainment industry holdings
            
            COOPERATION AGREEMENT POTENTIAL:
            • Substantial assistance reduction: Up to 50% sentence reduction
            • Information about other criminal enterprises
            • Testimony against co-conspirators and associates
            • Asset cooperation for victim restitution
            
            REALISTIC SENTENCING RANGE:
            Without cooperation: 25-30 years federal prison
            With substantial cooperation: 12-15 years federal prison
            
            Total financial penalties and forfeiture: Over $1 billion`,
            image: "federal_sentencing_analysis",
            imagePrompt: "Federal sentencing guidelines analysis, courthouse legal research, penalty assessment, cooperation agreement consideration",
            sources: ["Federal Sentencing Guidelines", "RICO Penalty Analysis", "Asset Forfeiture Assessment"],
            choices: [
                {
                    text: "Use sentencing analysis for cooperation agreement negotiations",
                    nextScene: "custom_protection_deal",
                    collectEvidence: true
                },
                {
                    text: "Focus on maximizing asset forfeiture for victim restitution",
                    nextScene: "asset_forfeiture_analysis"
                },
                {
                    text: "Prepare sentencing memorandum for maximum penalties",
                    nextScene: "trial_preparation_investigation"
                }
            ],
            educationalNote: "Federal sentencing analysis provides prosecution leverage for cooperation agreements while ensuring appropriate penalties for serious criminal enterprise crimes."
        },

        stolen_evidence_recovery: {
            text: `STOLEN EVIDENCE RECOVERY OPERATION
            
            Critical evidence stolen during the prosecutor's office break-in must be recovered before it can be destroyed or used to compromise the investigation.
            
            STOLEN EVIDENCE INVENTORY:
            
            CRITICAL DOCUMENTS:
            • Witness protection location lists and security protocols
            • Financial investigation summaries and banking records
            • Digital forensics reports and analysis summaries
            • Prosecution strategy memos and trial preparation notes
            
            INTELLIGENCE GATHERING:
            • Criminal organization plans for evidence use
            • Witness intimidation strategy based on stolen information
            • Media manipulation using confidential investigation details
            • Defense strategy advantage from prosecution exposure
            
            RECOVERY OPERATIONS:
            
            ELECTRONIC SURVEILLANCE:
            • Communication intercepts revealing evidence location
            • Financial transaction monitoring showing evidence buyers
            • Digital forensics tracking stolen information distribution
            • Social media monitoring for evidence exposure
            
            HUMAN INTELLIGENCE:
            • Informant networks within criminal organization
            • Undercover operations to identify evidence handlers
            • Witness cooperation providing inside information
            • Criminal organization member surveillance and investigation
            
            TACTICAL RECOVERY:
            • Search warrant execution at suspected evidence locations
            • Undercover purchase operations to recover materials
            • International cooperation for cross-border evidence recovery
            • Digital forensics recovery of electronically transmitted evidence
            
            SUCCESS METRICS:
            • Recovery of physical evidence preventing destruction
            • Identification of additional criminal organization members
            • Protection of witness safety through location security
            • Preservation of prosecution strategy confidentiality
            
            Evidence recovery operation becomes critical for investigation success.`,
            image: "evidence_recovery_operation",
            imagePrompt: "FBI tactical evidence recovery operation, stolen document investigation, criminal organization infiltration, evidence preservation",
            sources: ["Evidence Recovery Protocol", "Stolen Information Investigation", "Criminal Organization Infiltration"],
            choices: [
                {
                    text: "Focus on immediate witness protection relocation",
                    nextScene: "emergency_evacuation_protection",
                    collectEvidence: true
                },
                {
                    text: "Use recovery operation to identify criminal organization structure",
                    nextScene: "assassination_network_investigation"
                },
                {
                    text: "Accelerate prosecution timeline to prevent further compromise",
                    nextScene: "trial_preparation_investigation"
                }
            ],
            educationalNote: "Stolen evidence recovery requires rapid response to prevent witness compromise and preserve prosecution integrity in federal investigations."
        },

        studio_negotiation_attempt: {
            text: `ENTERTAINMENT STUDIO NEGOTIATION
            
            In a dramatic development, representatives from major entertainment studios attempt to negotiate a resolution to avoid industry-wide scandal and regulatory oversight.
            
            STUDIO NEGOTIATION PROPOSAL:
            
            INDUSTRY REPRESENTATIVES:
            • Major record label executives and legal counsel
            • Entertainment conglomerate corporate leadership
            • Industry association representatives and lobbyists
            • High-profile entertainment lawyers and fixers
            
            PROPOSED SETTLEMENT TERMS:
            • Significant financial settlement for victim compensation
            • Industry-wide compliance and oversight program implementation
            • Charitable contributions to victim advocacy organizations
            • Enhanced industry standards and monitoring systems
            
            INDUSTRY CONCERNS:
            • Public relations damage from criminal prosecution
            • Regulatory oversight and government intervention
            • Financial market impact on publicly traded companies
            • International business relationship damage
            
            FEDERAL RESPONSE CONSIDERATIONS:
            
            PROSECUTION POSITION:
            • Criminal charges cannot be negotiated away through civil settlements
            • Public interest in holding criminal enterprise accountable
            • Deterrent effect of successful criminal prosecution
            • Victim rights and justice considerations
            
            REGULATORY IMPLICATIONS:
            • SEC investigations into entertainment industry business practices
            • Tax authority reviews of industry financial arrangements
            • International regulatory cooperation and oversight
            • Congressional oversight and potential legislation
            
            STRATEGIC DECISION:
            The negotiation attempt represents industry recognition of criminal liability but cannot substitute for criminal justice.`,
            image: "studio_negotiation_meeting",
            imagePrompt: "High-stakes entertainment industry negotiation, corporate lawyers, federal prosecutors, industry damage control attempt",
            sources: ["Industry Settlement Negotiation", "Corporate Legal Strategy", "Federal Prosecution Policy"],
            choices: [
                {
                    text: "Reject settlement and proceed with full criminal prosecution",
                    nextScene: "trial_preparation_investigation",
                    collectEvidence: true
                },
                {
                    text: "Use negotiation to gather additional evidence and cooperation",
                    nextScene: "co_conspirator_payments"
                },
                {
                    text: "Coordinate with regulatory agencies for comprehensive response",
                    nextScene: "federal_agency_coordination"
                }
            ],
            educationalNote: "Entertainment industry settlement negotiations cannot substitute for criminal prosecution but may provide opportunities for enhanced cooperation and industry reform."
        },

        surveillance_evidence_analysis: {
            text: `COMPREHENSIVE SURVEILLANCE EVIDENCE ANALYSIS
            
            Analysis of extensive surveillance evidence collected throughout the investigation reveals patterns of criminal behavior and enterprise operations.
            
            SURVEILLANCE EVIDENCE CATEGORIES:
            
            VIDEO SURVEILLANCE:
            • Security camera footage from 47 different locations
            • Hotel and venue surveillance showing alleged criminal activities
            • Private residence cameras capturing suspicious behavior
            • Airport and transportation surveillance tracking movement
            
            AUDIO SURVEILLANCE:
            • Wiretap recordings of criminal planning conversations
            • Undercover recording devices capturing criminal admissions
            • Environmental surveillance of criminal enterprise meetings
            • Phone call recordings revealing criminal coordination
            
            ELECTRONIC SURVEILLANCE:
            • Email and text message communications
            • Social media monitoring and digital footprint analysis
            • Financial transaction surveillance and pattern analysis
            • Internet activity monitoring revealing criminal planning
            
            PHYSICAL SURVEILLANCE:
            • FBI surveillance teams documenting criminal enterprise activities
            • Counter-surveillance detection revealing criminal awareness
            • International surveillance cooperation providing foreign evidence
            • Undercover operative surveillance from within criminal organization
            
            EVIDENCE ANALYSIS RESULTS:
            • Timeline reconstruction of criminal enterprise operations
            • Pattern analysis revealing criminal behavior consistency
            • Geographic analysis showing criminal activity scope
            • Behavioral analysis demonstrating criminal intent and planning
            
            CORROBORATION VALUE:
            • Independent verification of witness testimony
            • Objective documentation of alleged criminal activities
            • Timeline confirmation supporting prosecution narrative
            • Comprehensive evidence foundation for trial presentation
            
            Surveillance evidence provides objective foundation for entire federal prosecution.`,
            image: "surveillance_evidence_center",
            imagePrompt: "FBI surveillance evidence analysis center, multiple screens showing video and audio evidence, comprehensive criminal activity documentation",
            sources: ["FBI Surveillance Division", "Electronic Evidence Analysis", "Multi-source Intelligence Integration"],
            choices: [
                {
                    text: "Focus on timeline reconstruction for trial presentation",
                    nextScene: "trial_preparation_investigation",
                    collectEvidence: true
                },
                {
                    text: "Use surveillance evidence to corroborate witness testimony",
                    nextScene: "corroborating_evidence"
                },
                {
                    text: "Analyze surveillance evidence for additional criminal activities",
                    nextScene: "encrypted_communications_analysis"
                }
            ],
            educationalNote: "Surveillance evidence provides objective, independent documentation of criminal activities essential for federal prosecution success and witness testimony corroboration."
        },

        trial_preparation_investigation: {
            text: `COMPREHENSIVE TRIAL PREPARATION
            
            As the federal prosecution approaches trial, you oversee comprehensive preparation ensuring every aspect of the case is ready for successful presentation to a jury.
            
            TRIAL PREPARATION COMPONENTS:
            
            EVIDENCE ORGANIZATION:
            • 47,000+ documents organized into chronological and thematic exhibits
            • 15TB of digital evidence processed and authenticated for court presentation
            • Surveillance footage edited and prepared for jury viewing
            • Financial evidence simplified into understandable charts and timelines
            
            WITNESS PREPARATION:
            • 89 cooperating witnesses prepared for direct examination
            • Cross-examination preparation to counter defense attacks
            • Witness protection coordination for trial security
            • Expert witness testimony refined for jury comprehension
            
            LEGAL BRIEF PREPARATION:
            • Pre-trial motions addressing anticipated defense challenges
            • Evidence admissibility briefs supporting prosecution exhibits
            • RICO instruction requests for jury education
            • Sentencing memoranda prepared for post-conviction
            
            JURY CONSIDERATIONS:
            • Jury selection strategy for complex federal prosecution
            • Demonstrative exhibits designed for jury understanding
            • Opening statement narrative development
            • Closing argument strategy emphasizing key evidence
            
            SECURITY PREPARATIONS:
            • Courthouse security enhanced for high-profile trial
            • Witness protection protocols during trial testimony
            • Media management and public information strategy
            • International cooperation for foreign witness testimony
            
            The trial preparation represents the culmination of years of federal investigation work.`,
            image: "trial_preparation_center",
            imagePrompt: "Federal trial preparation center, organized evidence exhibits, witness preparation rooms, legal brief writing, prosecution team coordination",
            sources: ["Federal Trial Preparation Guidelines", "Prosecution Strategy Manual", "Complex Case Trial Procedures"],
            choices: [
                {
                    text: "Focus on witness preparation and protection for trial testimony",
                    nextScene: "witness_protection_program",
                    collectEvidence: true
                },
                {
                    text: "Emphasize evidence organization for clear jury presentation",
                    nextScene: "corroborating_evidence"
                },
                {
                    text: "Prepare for anticipated defense challenges and strategies",
                    nextScene: "defense_strategy_analysis"
                }
            ],
            educationalNote: "Federal trial preparation for complex RICO cases requires extensive organization, witness preparation, and strategic planning to ensure successful prosecution."
        },

        turning_the_mole: {
            text: `MOLE INTERROGATION AND COOPERATION
            
            The arrested federal mole faces a critical decision: continued loyalty to the criminal organization or cooperation with federal authorities to reduce their sentence.
            
            INTERROGATION STRATEGY:
            
            PSYCHOLOGICAL PRESSURE:
            • Evidence of financial payments totaling $2.3 million presented
            • Family vulnerabilities exploited by criminal organization exposed
            • Career destruction and federal conviction consequences explained
            • Potential for reduced sentence through cooperation offered
            
            COOPERATION INCENTIVES:
            • Witness protection program eligibility for informant and family
            • Substantial sentence reduction for meaningful cooperation
            • Financial support during cooperation period
            • Career rehabilitation possibilities after cooperation
            
            INTELLIGENCE VALUE:
            • Inside knowledge of criminal organization operations
            • Identification of other corrupted federal personnel
            • Access to criminal organization communication systems
            • Understanding of criminal organization law enforcement countermeasures
            
            OPERATIONAL SECURITY:
            • Compartmentalized cooperation to prevent criminal organization awareness
            • Secure communication protocols for ongoing intelligence gathering
            • Counter-surveillance protection during cooperation period
            • Evidence preservation for criminal organization prosecution
            
            COOPERATION AGREEMENT TERMS:
            • Complete truthfulness and ongoing cooperation required
            • Testimony in federal court against criminal organization
            • Assistance in identifying additional criminal activities
            • Asset cooperation for financial recovery operations
            
            The mole's decision could provide unprecedented insight into criminal organization operations and law enforcement infiltration.`,
            image: "federal_mole_interrogation",
            imagePrompt: "Federal agent interrogation room, mole cooperation negotiation, psychological pressure, witness protection discussion",
            sources: ["Federal Cooperation Agreement Protocol", "Informant Development Guidelines", "Internal Corruption Investigation"],
            choices: [
                {
                    text: "Secure comprehensive cooperation agreement",
                    nextScene: "enhanced_security_investigation",
                    collectEvidence: true
                },
                {
                    text: "Use mole intelligence to identify additional corruption",
                    nextScene: "federal_leak_investigation"
                },
                {
                    text: "Protect mole identity while gathering ongoing intelligence",
                    nextScene: "double_agent_evidence_gathering"
                }
            ],
            educationalNote: "Turning compromised federal personnel into cooperating witnesses can provide crucial intelligence about criminal organization operations and law enforcement infiltration."
        },

        verdict_legal_analysis: {
            text: `TRIAL VERDICT LEGAL ANALYSIS
            
            As the federal trial concludes, you analyze the jury's verdict and its legal implications for the criminal enterprise prosecution and broader law enforcement efforts.
            
            JURY VERDICT ANALYSIS:
            
            RICO CONVICTION SUCCESS:
            • All elements of RICO enterprise proven beyond reasonable doubt
            • Pattern of racketeering activity established through multiple predicate acts
            • Defendant's leadership role in criminal enterprise confirmed
            • Interstate commerce nexus demonstrated through business operations
            
            SPECIFIC CHARGE OUTCOMES:
            • Money laundering: Guilty on 23 of 25 counts
            • Wire fraud: Guilty on 17 of 20 counts
            • Extortion: Guilty on 8 of 10 counts
            • Conspiracy: Guilty on all counts
            
            LEGAL PRECEDENT IMPLICATIONS:
            • Entertainment industry criminal enterprise prosecution precedent
            • RICO application to celebrity defendant cases
            • International money laundering prosecution standards
            • Complex financial evidence presentation techniques
            
            SENTENCING IMPLICATIONS:
            • Federal sentencing guidelines calculation: 25-30 years
            • Asset forfeiture orders: Over $750 million
            • Victim restitution requirements: $200+ million
            • Supervised release and monitoring conditions
            
            APPEAL CONSIDERATIONS:
            • Anticipated defense appeals on constitutional grounds
            • Evidence admissibility challenges expected
            • Jury instruction challenges regarding RICO complexity
            • International evidence authentication appeals
            
            BROADER IMPACT:
            • Criminal enterprise dismantling and associate prosecutions
            • Entertainment industry compliance and regulatory changes
            • International cooperation precedents for future cases
            • Victim advocacy and support program enhancements
            
            The verdict represents successful federal prosecution of sophisticated criminal enterprise.`,
            image: "federal_trial_verdict",
            imagePrompt: "Federal courtroom during verdict reading, successful prosecution celebration, justice served, legal precedent established",
            sources: ["Federal Trial Verdict Analysis", "RICO Prosecution Success Assessment", "Legal Precedent Documentation"],
            choices: [
                {
                    text: "Focus on sentencing preparation and asset forfeiture",
                    nextScene: "sentencing_analysis",
                    collectEvidence: true
                },
                {
                    text: "Prepare for anticipated appeals and legal challenges",
                    nextScene: "evidence_legal_analysis"
                },
                {
                    text: "Coordinate follow-up prosecutions of criminal associates",
                    nextScene: "co_conspirator_payments"
                }
            ],
            educationalNote: "Successful RICO convictions create important legal precedents and provide foundation for dismantling entire criminal enterprises and prosecuting associates."
        },

        webb_interrogation_deeper_network: {
            text: `WEBB INTERROGATION: DEEPER NETWORK EXPOSURE
            
            The interrogation of a key figure known only as "Webb" reveals connections to an even deeper criminal network spanning international borders and multiple industries.
            
            WEBB PROFILE ANALYSIS:
            
            BACKGROUND INFORMATION:
            • International business consultant with 20-year criminal history
            • Connections to offshore banking and money laundering networks
            • Professional relationships with criminal organizations worldwide
            • Technical expertise in financial crimes and asset hiding
            
            CRIMINAL NETWORK REVELATIONS:
            • Entertainment industry criminal enterprises in multiple countries
            • International money laundering network serving multiple criminal organizations
            • Corruption networks within international banking systems
            • Professional criminal service providers operating globally
            
            INTERROGATION BREAKTHROUGHS:
            
            INTERNATIONAL SCOPE:
            • Criminal enterprises operating in 15+ countries
            • Coordinated money laundering through major international banks
            • Professional criminal services network spanning continents
            • Government corruption in multiple jurisdictions
            
            ADDITIONAL CRIMINAL ACTIVITIES:
            • Arms trafficking through entertainment industry connections
            • Human trafficking networks using entertainment venues
            • Drug trafficking coordination through international tours
            • Political corruption and election interference operations
            
            COOPERATION POTENTIAL:
            • Detailed knowledge of international criminal network structure
            • Access to financial records and banking relationships
            • Information about government officials and law enforcement corruption
            • Intelligence about ongoing criminal operations and planning
            
            STRATEGIC IMPLICATIONS:
            • International law enforcement cooperation requirements
            • Diplomatic implications of cross-border criminal prosecution
            • National security concerns regarding criminal network scope
            • Long-term investigation expansion possibilities
            
            Webb's cooperation could expose criminal networks far beyond the current investigation scope.`,
            image: "international_criminal_network",
            imagePrompt: "Global criminal network investigation, international connections, Webb interrogation, worldwide criminal enterprise mapping",
            sources: ["International Criminal Network Analysis", "Webb Interrogation Transcripts", "Global Criminal Enterprise Intelligence"],
            choices: [
                {
                    text: "Secure Webb cooperation for international network investigation",
                    nextScene: "federal_agency_coordination",
                    collectEvidence: true
                },
                {
                    text: "Focus on immediate prosecution while preserving international intelligence",
                    nextScene: "trial_preparation_investigation"
                },
                {
                    text: "Coordinate with international law enforcement for broader investigation",
                    nextScene: "offshore_banking_investigation"
                }
            ],
            educationalNote: "International criminal network investigations require extensive cooperation between law enforcement agencies and careful coordination to address jurisdictional complexities."
        },

        witness_protection_analysis: {
            text: `WITNESS PROTECTION PROGRAM COMPREHENSIVE ANALYSIS
            
            You conduct a thorough analysis of the witness protection program's effectiveness in safeguarding the 89 cooperating witnesses crucial to the federal prosecution.
            
            WITNESS PROTECTION ASSESSMENT:
            
            PROGRAM STATISTICS:
            • 89 cooperating witnesses enrolled in various protection levels
            • 47 family members relocated for safety
            • 23 witnesses requiring maximum security protocols
            • 12 international witness relocations coordinated
            
            SECURITY EFFECTIVENESS:
            • Zero successful criminal organization attacks on protected witnesses
            • 97% witness cooperation retention rate throughout investigation
            • Enhanced security protocols implemented after initial threats
            • Counter-surveillance operations preventing witness location compromise
            
            PROTECTION LEVELS:
            
            MAXIMUM SECURITY:
            • Complete identity change and relocation
            • 24/7 federal marshal protection
            • Secure communication protocols only
            • Family member inclusion in protection program
            
            STANDARD PROTECTION:
            • Temporary relocation during testimony period
            • Regular security check-ins and monitoring
            • Secure transportation to court proceedings
            • Communication monitoring and threat assessment
            
            MINIMAL PROTECTION:
            • Enhanced security awareness and training
            • Emergency contact protocols established
            • Periodic threat assessment and security updates
            • Local law enforcement coordination for protection
            
            PROGRAM CHALLENGES:
            • High cost of comprehensive protection programs
            • Psychological impact on witnesses and families
            • Long-term sustainability of protection measures
            • Balance between protection and witness quality of life
            
            PROGRAM SUCCESS FACTORS:
            • Professional witness protection personnel
            • Comprehensive threat assessment and response
            • International cooperation for cross-border protection
            • Victim advocacy and psychological support services
            
            The witness protection program has been essential for federal prosecution success.`,
            image: "witness_protection_analysis",
            imagePrompt: "U.S. Marshals witness protection analysis, safety statistics, protected witness success stories, comprehensive security assessment",
            sources: ["U.S. Marshals Witness Protection Program", "Witness Safety Assessment", "Protection Program Effectiveness Analysis"],
            choices: [
                {
                    text: "Enhance protection protocols based on analysis results",
                    nextScene: "enhanced_security_investigation",
                    collectEvidence: true
                },
                {
                    text: "Use protection program success to encourage additional cooperation",
                    nextScene: "custom_protection_deal"
                },
                {
                    text: "Share protection program lessons with international partners",
                    nextScene: "federal_agency_coordination"
                }
            ],
            educationalNote: "Witness protection program effectiveness is crucial for federal prosecution success, requiring comprehensive security measures and ongoing threat assessment."
        },

        witness_protection_program: {
            text: `WITNESS PROTECTION PROGRAM OPERATIONS
            
            The federal witness protection program coordinates comprehensive safety measures for cooperating witnesses and their families, ensuring testimony can proceed without intimidation or violence.
            
            PROGRAM IMPLEMENTATION:
            
            IMMEDIATE PROTECTION MEASURES:
            • Emergency relocation within 48 hours of cooperation agreement
            • Secure housing in undisclosed federal protection facilities
            • Identity documentation preparation for long-term protection
            • Medical and psychological support services coordination
            
            FAMILY PROTECTION INTEGRATION:
            • Spouse and children included in protection protocols
            • Extended family threat assessment and protection consideration
            • Education and employment coordination for family members
            • Financial support during protection period
            
            LONG-TERM SECURITY PLANNING:
            • Permanent relocation and identity change procedures
            • Career rehabilitation and employment assistance
            • Ongoing security monitoring and threat assessment
            • Emergency contact and response protocols
            
            OPERATIONAL COORDINATION:
            • U.S. Marshals Service primary protection responsibility
            • FBI coordination for ongoing investigation support
            • Local law enforcement integration for area security
            • International cooperation for cross-border witness protection
            
            TESTIMONY SECURITY:
            • Secure transportation to court proceedings
            • Courthouse security enhancement during witness testimony
            • Communication security between witnesses and prosecution
            • Post-testimony security assessment and continued protection
            
            PROGRAM OUTCOMES:
            • 100% witness safety record during federal prosecution
            • High witness cooperation retention throughout investigation
            • Successful testimony without intimidation or compromise
            • Long-term witness and family integration in new identities
            
            The witness protection program enables successful federal prosecution while ensuring witness and family safety.`,
            image: "witness_protection_operations",
            imagePrompt: "Federal witness protection operations, family relocation, secure facilities, U.S. Marshals coordination, comprehensive safety measures",
            sources: ["Federal Witness Protection Operations", "U.S. Marshals Protection Protocol", "Witness Safety Program Documentation"],
            choices: [
                {
                    text: "Focus on long-term witness integration and identity protection",
                    nextScene: "family_reunion_aftermath",
                    collectEvidence: true
                },
                {
                    text: "Enhance security measures based on ongoing threat assessment",
                    nextScene: "enhanced_security_investigation"
                },
                {
                    text: "Use protection program success for additional witness recruitment",
                    nextScene: "custom_protection_deal"
                }
            ],
            educationalNote: "Federal witness protection programs provide comprehensive safety measures enabling successful prosecution of dangerous criminal enterprises while protecting cooperating witnesses."
        },

        studio_siege_broadcast: {
            text: `ENTERTAINMENT STUDIO SIEGE RESOLUTION
            
            In a final dramatic confrontation, federal agents coordinate a complex operation to resolve a siege situation at a major entertainment studio where criminal organization members have barricaded themselves.
            
            SIEGE SITUATION ANALYSIS:
            
            TACTICAL SCENARIO:
            • Criminal organization associates barricaded in recording studio
            • Multiple hostages including studio personnel and media figures
            • Evidence destruction attempts ongoing inside facility
            • Media coverage creating national attention and pressure
            
            FEDERAL RESPONSE COORDINATION:
            • FBI Hostage Rescue Team leading tactical operations
            • Local SWAT team support and perimeter security
            • Negotiation specialists attempting peaceful resolution
            • Evidence preservation teams preparing for facility breach
            
            HOSTAGE SITUATION:
            • 12 civilians held including studio employees and journalists
            • Criminal organization demands for prosecution dismissal
            • Hostage welfare monitoring through building surveillance
            • Medical response teams prepared for casualty treatment
            
            MEDIA COMPLICATIONS:
            • Live television coverage creating operational security challenges
            • Social media monitoring revealing tactical information
            • Public relations pressure for rapid peaceful resolution
            • Criminal organization propaganda attempts through media
            
            RESOLUTION STRATEGY:
            • Psychological operations to reduce criminal organization resolve
            • Technical surveillance providing interior intelligence
            • Coordinated assault plan minimizing civilian casualties
            • Evidence preservation during tactical operations
            
            OPERATIONAL OUTCOME:
            • Successful hostage rescue with zero civilian casualties
            • Criminal organization associates arrested and charged
            • Critical evidence preserved preventing destruction
            • Media coverage demonstrating federal law enforcement effectiveness
            
            The studio siege resolution demonstrates federal coordination and tactical excellence while protecting civilians and preserving justice.`,
            image: "studio_siege_resolution",
            imagePrompt: "FBI tactical operation at entertainment studio, hostage rescue, media coverage, successful federal law enforcement response",
            sources: ["FBI Hostage Rescue Operations", "Tactical Response Protocol", "Media Crisis Management"],
            choices: [
                {
                    text: "Use siege resolution success to strengthen prosecution case",
                    nextScene: "trial_preparation_investigation",
                    collectEvidence: true
                },
                {
                    text: "Analyze evidence recovered during siege for additional prosecutions",
                    nextScene: "stolen_evidence_recovery"
                },
                {
                    text: "Coordinate with media for public awareness and support",
                    nextScene: "media_security_counterattack"
                }
            ],
            educationalNote: "Complex federal operations require coordination between multiple agencies and careful balance between tactical success, civilian safety, and evidence preservation."
        },

        surveillance_bluff_attempt: {
            text: `SURVEILLANCE DECEPTION OPERATION
            
            In a sophisticated counterintelligence move, you coordinate a surveillance deception operation designed to mislead the criminal organization while gathering additional intelligence.
            
            DECEPTION OPERATION STRATEGY:
            
            FALSE SURVEILLANCE INDICATORS:
            • Deliberately visible surveillance teams to misdirect attention
            • Fake surveillance equipment placement for criminal organization discovery
            • False surveillance reports leaked through controlled channels
            • Decoy investigation activities to confuse criminal organization planning
            
            ACTUAL INTELLIGENCE GATHERING:
            • Covert surveillance operations invisible to criminal organization
            • Electronic surveillance through compromised communication systems
            • Human intelligence from deep cover operatives within organization
            • Financial surveillance through banking cooperation agreements
            
            PSYCHOLOGICAL WARFARE ELEMENTS:
            • Creating paranoia within criminal organization leadership
            • Encouraging internal suspicion and communication breakdowns
            • Forcing criminal organization into defensive posture
            • Disrupting criminal organization operational planning and execution
            
            OPERATIONAL SECURITY:
            • Compartmentalized knowledge of actual vs. deception operations
            • Counter-surveillance detection to monitor criminal organization response
            • Communication security preventing deception operation exposure
            • Evidence preservation during deception activities
            
            INTELLIGENCE OBJECTIVES:
            • Identifying criminal organization counter-surveillance capabilities
            • Gathering information about criminal organization security protocols
            • Detecting additional criminal activities through organization reaction
            • Testing criminal organization communication security and procedures
            
            DECEPTION RESULTS:
            • Criminal organization diverted resources to counter fake surveillance
            • Real surveillance operations remained undetected and effective
            • Additional criminal activities revealed through organization panic
            • Internal criminal organization conflicts created through paranoia
            
            The surveillance deception operation successfully confused criminal organization while enhancing federal intelligence gathering.`,
            image: "surveillance_deception_operation",
            imagePrompt: "Complex federal surveillance deception, fake surveillance equipment, psychological warfare, criminal organization misdirection",
            sources: ["FBI Counterintelligence Operations", "Surveillance Deception Techniques", "Psychological Warfare Manual"],
            choices: [
                {
                    text: "Use deception success to launch final coordinated arrests",
                    nextScene: "synchronized_rescue_arrest",
                    collectEvidence: true
                },
                {
                    text: "Exploit criminal organization paranoia for additional intelligence",
                    nextScene: "turning_the_mole"
                },
                {
                    text: "Coordinate with prosecution team for trial evidence presentation",
                    nextScene: "trial_preparation_investigation"
                }
            ],
            educationalNote: "Surveillance deception operations can effectively mislead criminal organizations while enhancing actual intelligence gathering and creating operational advantages."
        }
    }
};

// Export for both Node.js and browser environments
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DiddyCaseStoryExpanded;
} else if (typeof window !== 'undefined') {
    window.DiddyCaseStoryExpanded = DiddyCaseStoryExpanded;
}
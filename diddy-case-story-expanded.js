const DiddyCaseStoryExpanded = {
    sealed: false,
    releaseDate: null,
    scenes: {
        intro: {
            text: `THE CLASSIFIED FILES: DIDDY INVESTIGATION
            
            DAY 1 - TUESDAY, 9:15 AM
            
You are investigative journalist Alex Rivera, covering the entertainment industry beat for the New York Tribune. You've just received a call from your editor about a major federal indictment that dropped overnight.

"Alex, you need to get down to the Southern District courthouse immediately," your editor Marcus says urgently. "The feds just unsealed an indictment against Sean Combs - Diddy. This is bigger than anything we've seen in the music industry."

You grab your press credentials and notebook, scanning the breaking news alerts flooding your phone:

📱 BREAKING: Hip-hop mogul Sean "Diddy" Combs indicted on federal charges
📱 SDNY announces sex trafficking, racketeering charges
📱 Homeland Security arrest made in Manhattan hotel

Your phone rings - it's Detective Rodriguez from NYPD, someone you've worked with on previous stories.

"Rivera? You covering the Combs case? This thing goes back over 15 years. The feds have been building this for months. The indictment is just the beginning."

Outside the courthouse, you see other reporters already gathering. This case will define your career in investigative journalism.`,
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
                    text: "Interview former associates about the timeline",
                    nextScene: "associate_interviews",
                    progressIncrease: 12,
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
        }
    }
};
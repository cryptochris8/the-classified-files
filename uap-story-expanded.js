const UAPStoryExpanded = {
    sealed: false, // Set to true to seal this case
    releaseDate: null, // Optional: "Coming Soon" or specific date
    scenes: {
        intro: {
            text: `THE CLASSIFIED FILES: UAP INVESTIGATION
            
            DAY 1 - TUESDAY, 9:15 PM
            
You are Dr. Amanda Torres, senior aerospace analyst for the All-domain Anomaly Resolution Office (AARO). The Pentagon office is quiet except for the hum of secure servers processing classified UAP reports.

Your supervisor approaches with a classified briefcase. "Dr. Torres, we just received the latest batch of UAP incident reports. 757 new cases from the past year, including 21 that our analysts can't explain."

Inside: The most recent Pentagon UAP data, including incidents at nuclear facilities, military installations, and encounters with advanced flight characteristics that defy known physics.

Your colleague, Dr. Sarah Kim, leans over. "Amanda, look at this - we have multiple reports of UAPs exhibiting transmedium travel, instantaneous acceleration, and no visible propulsion. The Senate hearing is tomorrow."

A classified memo catches your eye: "18 incidents near nuclear weapons facilities. Congressional oversight demanded. Full transparency protocols now in effect."

Your secure phone buzzes. Text from AARO Director: "The public deserves answers based on evidence, not speculation. Start with the most credible cases. Time to separate fact from fiction."

The weight of scientific truth rests on your analysis.`,
            image: "pentagon_uap_office",
            imagePrompt: "Modern Pentagon office with multiple screens displaying UAP tracking data, female analyst examining classified reports, high-tech government facility atmosphere",
            sources: ["Pentagon AARO Reports 2024", "Congressional UAP Hearings", "Declassified Military Analysis"],
            choices: [
                {
                    text: "Examine the 757 new UAP reports and statistical breakdown",
                    nextScene: "uap_statistics_analysis",
                    progressIncrease: 10,
                    factual: true,
                    evidence: true
                },
                {
                    text: "Focus on the 21 unexplained cases with anomalous characteristics",
                    nextScene: "anomalous_cases_study",
                    progressIncrease: 12,
                    evidence: true
                },
                {
                    text: "Investigate UAP incidents at nuclear weapons facilities",
                    nextScene: "nuclear_facility_incidents",
                    progressIncrease: 15,
                    factual: true,
                    evidence: true
                },
                {
                    text: "Test your knowledge of official UAP terminology and classifications",
                    nextScene: "uap_knowledge_quiz",
                    progressIncrease: 5,
                    quizMode: true
                },
                {
                    text: "Review the Pentagon's historical UAP disinformation campaign",
                    nextScene: "historical_disinformation",
                    progressIncrease: 8,
                    factual: true,
                    evidence: true
                }
            ],
            educationalNote: "This investigation uses real data from Pentagon AARO reports and congressional testimony to explore factual UAP phenomena."
        },

        uap_statistics_analysis: {
            text: `UAP REPORT ANALYSIS - AARO DATA BREAKDOWN
            
            DAY 1 - 9:45 PM

You spread the latest AARO statistical analysis across your workstation. The numbers reveal patterns in the most comprehensive UAP study ever conducted.

📊 AARO UAP STATISTICS - FISCAL YEAR 2024
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Total Reports Received: 757 cases
New Incidents (May 2023-June 2024): 485 cases
Historical Reports (2021-2022): 272 cases
Cases Resolved: 118 cases
Resolution Categories:
- Balloons (weather/party): 42 cases
- Birds: 31 cases  
- Drones/UAS: 28 cases
- Other prosaic objects: 17 cases
Cases Under Investigation: 639 cases
Unexplained "True Anomalies": 21 cases
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Dr. Kim reviews the data. "Amanda, only 15% of cases have been resolved. That's a significant investigative backlog."

You notice a pattern in the unresolved cases: "Look at this - the unexplained incidents show consistent flight characteristics: instantaneous acceleration, right-angle turns at high speed, no visible propulsion."

Your secure terminal displays a new message: "Congressional briefing requires focus on cases with multiple sensor confirmations and military witness testimony."`,
            image: "uap_data_analysis",
            imagePrompt: "High-tech analysis room with UAP incident maps, statistical charts, and radar data displays, government analyst reviewing classified information",
            sources: ["AARO FY2024 Consolidated Annual Report", "Pentagon UAP Database"],
            choices: [
                {
                    text: "Analyze the flight characteristics of unexplained cases",
                    nextScene: "flight_characteristics_study",
                    progressIncrease: 18,
                    factual: true,
                    evidence: true
                },
                {
                    text: "Review multi-sensor data from military encounters",
                    nextScene: "military_sensor_data",
                    progressIncrease: 15,
                    evidence: true
                },
                {
                    text: "Examine the cases resolved as conventional objects",
                    nextScene: "resolved_cases_analysis",
                    progressIncrease: 10,
                    factual: true
                },
                {
                    text: "Study the investigative methodology used by AARO",
                    nextScene: "aaro_methodology",
                    progressIncrease: 12,
                    evidence: true
                }
            ],
            educationalNote: "These statistics are taken directly from the Pentagon's official AARO annual report to Congress."
        },

        nuclear_facility_incidents: {
            text: `NUCLEAR FACILITY UAP INCIDENTS - CLASSIFIED ANALYSIS
            
            DAY 1 - 10:20 PM

You access the most sensitive files - UAP encounters at nuclear weapons facilities. The implications for national security are profound.

☢️ NUCLEAR FACILITY INCIDENTS - CLASSIFIED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Total Nuclear Site Incidents: 18 reports
Extended Overflights (>5 minutes): 10 incidents
Historical Pattern: F.E. Warren AFB (1967, 2010)
Malmstrom AFB: Multiple incidents spanning decades
Reported Effects: Temporary weapons system anomalies
Witness Accounts: Military personnel, radar operators
Common Characteristics: Hovering behavior, no heat signature
Security Response: Immediate scrambled intercepts
Investigation Status: Ongoing analysis
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Dr. Kim looks concerned. "These aren't random encounters, Amanda. There's a clear pattern of interest in our most sensitive military assets."

A classified supplement reveals: "Former missile launch officers report UAPs allegedly interfering with nuclear weapon systems in 1967. Similar reports continue to present day."

Your analysis terminal flags a correlation: "Historical incidents show UAPs appearing during weapons system tests and maintenance periods."

The national security implications are undeniable.`,
            image: "nuclear_facility_monitoring",
            imagePrompt: "Military command center with nuclear facility surveillance screens, UAP tracking radar, and classified incident reports, tense security atmosphere",
            sources: ["AARO Nuclear Facility Analysis", "Classified Military Reports", "Congressional Security Briefings"],
            choices: [
                {
                    text: "Study the 1967 Malmstrom AFB incident in detail",
                    nextScene: "malmstrom_incident_study",
                    progressIncrease: 20,
                    factual: true,
                    evidence: true
                },
                {
                    text: "Analyze modern radar tracking of nuclear site overflights",
                    nextScene: "radar_tracking_analysis",
                    progressIncrease: 15,
                    evidence: true
                },
                {
                    text: "Review witness testimony from military personnel",
                    nextScene: "military_witness_testimony",
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Examine the pattern of UAP behavior near sensitive sites",
                    nextScene: "behavioral_pattern_analysis",
                    progressIncrease: 12,
                    evidence: true
                }
            ],
            educationalNote: "AARO has confirmed 18 UAP incidents near nuclear weapons facilities, with ongoing investigation into their nature and intent."
        },

        flight_characteristics_study: {
            text: `ANOMALOUS FLIGHT CHARACTERISTICS - PHYSICS ANALYSIS
            
            DAY 1 - 11:00 PM

You examine the most puzzling aspect of UAP reports - flight characteristics that appear to violate known physics principles.

🛸 ANOMALOUS FLIGHT PATTERNS - TECHNICAL ANALYSIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Instantaneous Acceleration: 0 to Mach 2+ in <1 second
G-Force Calculations: 700+ G's (lethal to any known crew)
Right-Angle Direction Changes: No deceleration observed
Altitude Performance: Sea level to 80,000+ feet instantly
Transmedium Travel: Air-to-water without velocity change
No Visible Propulsion: No exhaust, heat signature, or sonic boom
Hovering Capability: Stationary for extended periods
Silent Operation: No acoustic signature detected
Radar Characteristics: Intermittent tracking, size inconsistencies
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Your physics background makes this data troubling. "These performance characteristics exceed anything in our aerospace inventory by orders of magnitude."

Dr. Kim examines sensor data. "Amanda, if these readings are accurate, we're looking at technology that operates on principles we don't understand."

A technical memo notes: "Multiple independent sensor systems confirm these flight patterns. Equipment malfunction ruled out through redundant verification."

The scientific implications challenge current understanding of physics.`,
            image: "physics_analysis_lab",
            imagePrompt: "Advanced physics laboratory with flight trajectory models, acceleration calculations, and aerospace engineering data on multiple screens",
            sources: ["AARO Technical Analysis Division", "Military Sensor Data", "Aerospace Physics Calculations"],
            choices: [
                {
                    text: "Analyze the propulsion implications of these flight patterns",
                    nextScene: "propulsion_analysis",
                    progressIncrease: 22,
                    factual: true,
                    evidence: true
                },
                {
                    text: "Study radar and sensor data validation procedures",
                    nextScene: "sensor_validation_study",
                    progressIncrease: 15,
                    evidence: true
                },
                {
                    text: "Compare UAP performance to known aircraft capabilities",
                    nextScene: "aircraft_comparison_analysis",
                    progressIncrease: 18,
                    factual: true,
                    evidence: true
                },
                {
                    text: "Review congressional testimony on these phenomena",
                    nextScene: "congressional_testimony_review",
                    progressIncrease: 12,
                    evidence: true
                }
            ],
            educationalNote: "These flight characteristics are documented in official Pentagon reports and represent genuine scientific anomalies requiring investigation."
        },

        historical_disinformation: {
            text: `PENTAGON DISINFORMATION CAMPAIGN - DECLASSIFIED REVELATION
            
            DAY 2 - 12:30 AM

You access the newly declassified Pentagon review revealing decades of deliberate UFO disinformation used to conceal classified weapons programs.

🎭 OPERATION UFO DISINFORMATION - COLD WAR ANALYSIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Time Period: 1947-1990s (Cold War era)
Primary Purpose: Conceal classified aircraft testing
Methods Used: Staged UFO photos, false briefings, planted stories
Target Programs: U-2, SR-71, F-117 stealth projects
Disinformation Assets: Military personnel, media contacts
Geographic Focus: Area 51, Edwards AFB, classified test sites
Public Impact: Created widespread UFO mythology
Unintended Consequence: Obscured legitimate UAP phenomena
Current Status: Officially acknowledged and declassified
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Dr. Kim shakes her head. "So the government was simultaneously denying UFOs existed while spreading UFO stories to hide their own secret aircraft."

You discover a crucial insight: "This explains why some historical UAP cases were dismissed - they were covering up legitimate military technology, not investigating unknown phenomena."

A Pentagon review document states: "The use of UFO disinformation was effective in protecting classified programs but inadvertently hindered serious investigation of genuine UAP incidents."

The revelation adds context to current transparency efforts.`,
            image: "declassified_documents",
            imagePrompt: "Government office with Cold War era documents, staged UFO photographs, and classified program files spread across desk, historical analysis setting",
            sources: ["Pentagon Historical Review 2024", "Declassified Cold War Documents", "Congressional Disinformation Findings"],
            choices: [
                {
                    text: "Study how disinformation affected legitimate UAP investigations",
                    nextScene: "disinformation_impact_analysis",
                    progressIncrease: 18,
                    factual: true,
                    evidence: true
                },
                {
                    text: "Examine the classified aircraft programs that were concealed",
                    nextScene: "classified_aircraft_programs",
                    progressIncrease: 15,
                    factual: true,
                    evidence: true
                },
                {
                    text: "Review current transparency protocols to prevent future deception",
                    nextScene: "transparency_protocols",
                    progressIncrease: 12,
                    evidence: true
                },
                {
                    text: "Analyze the impact on public trust in government UAP investigations",
                    nextScene: "public_trust_analysis",
                    progressIncrease: 10,
                    evidence: true
                }
            ],
            educationalNote: "The Pentagon's acknowledgment of historical UFO disinformation campaigns demonstrates the complexity of separating fact from deliberate fiction in UAP research."
        },

        congressional_testimony_review: {
            text: `CONGRESSIONAL UAP HEARINGS - WITNESS TESTIMONY ANALYSIS
            
            DAY 2 - 1:15 AM

You review testimony from military witnesses at recent Congressional hearings on UAPs, including unprecedented on-record statements from intelligence officials.

🏛️ CONGRESSIONAL UAP HEARING TESTIMONY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Key Witnesses: Military pilots, intelligence officials, AARO leadership
Primary Claims: Advanced UAP technology observed by trained personnel
Corroborating Evidence: Multi-sensor data, radar tracking, video footage
Geographic Scope: Global incidents across multiple theaters
Timeframe: Incidents spanning decades to present day
Classification Level: Previously classified incidents now disclosed
Congressional Response: Demands for increased transparency and funding
Public Interest: Unprecedented media coverage and public attention
Scientific Community: Calls for rigorous investigation protocols
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Notable testimony includes Navy pilots describing "objects that appeared to defy the laws of physics" with "instantaneous acceleration and no visible means of propulsion."

Dr. Kim reviews the transcripts. "Amanda, these witnesses are highly trained military personnel with security clearances. Their credibility is unprecedented."

A congressional summary notes: "Multiple witnesses independently described similar flight characteristics, suggesting systematic phenomena rather than isolated incidents."

The congressional oversight marks a new era of UAP transparency.`,
            image: "congressional_hearing",
            imagePrompt: "Congressional hearing room with military witnesses testifying about UAP encounters, formal government oversight atmosphere with media coverage",
            sources: ["Congressional UAP Hearing Transcripts", "Military Witness Testimony", "Intelligence Community Briefings"],
            choices: [
                {
                    text: "Compile final analysis for congressional briefing",
                    nextScene: "final_congressional_briefing",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Review international UAP data sharing protocols",
                    nextScene: "international_cooperation",
                    progressIncrease: 15,
                    evidence: true
                },
                {
                    text: "Examine the scientific methodology for future UAP studies",
                    nextScene: "scientific_methodology",
                    progressIncrease: 18,
                    factual: true,
                    evidence: true
                },
                {
                    text: "Study the implications for aerospace technology development",
                    nextScene: "technology_implications",
                    progressIncrease: 16,
                    evidence: true
                }
            ],
            educationalNote: "Congressional UAP hearings represent the most significant government transparency effort on this topic in modern history."
        },

        final_congressional_briefing: {
            text: `FINAL ANALYSIS - CONGRESSIONAL UAP BRIEFING
            
            DAY 2 - 2:45 AM

You compile your comprehensive analysis for the congressional briefing. The evidence presents a complex picture requiring scientific rigor and continued investigation.

📋 FINAL UAP INVESTIGATION REPORT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CONCLUSION: Genuine Anomalous Phenomena Confirmed

Evidence Summary:
✓ 757 new UAP reports with 21 unexplained cases
✓ 18 incidents at nuclear weapons facilities
✓ Flight characteristics exceeding known technology
✓ Multi-sensor confirmation from trained military personnel
✓ Historical disinformation campaigns now acknowledged
✓ Congressional oversight ensuring transparency
✓ No evidence of extraterrestrial technology confirmed
✓ Scientific investigation protocols established

AARO Assessment: "While most UAP incidents resolve to conventional explanations, a small percentage represent genuine anomalies requiring continued scientific investigation."

The phenomena are real, the technology is unknown, and the investigation continues with unprecedented transparency.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Dr. Kim reviews your report. "This represents the most comprehensive government analysis of UAP phenomena in history."

You prepare for the briefing: "We've moved from denial and ridicule to serious scientific investigation. The American people deserve evidence-based analysis, not speculation."

INVESTIGATION STATUS: COMPLETE
Scientific Approach: ESTABLISHED
Congressional Oversight: ONGOING`,
            image: "pentagon_briefing_room",
            imagePrompt: "Pentagon briefing room prepared for congressional presentation with UAP analysis displays, professional government setting at dawn",
            sources: ["AARO Comprehensive Analysis", "Congressional Briefing Materials", "Scientific Investigation Protocols"],
            choices: [
                {
                    text: "Present findings to congressional oversight committee",
                    nextScene: "congressional_presentation",
                    progressIncrease: 15,
                    evidence: true
                },
                {
                    text: "Recommend increased funding for UAP scientific research",
                    nextScene: "research_funding_proposal",
                    progressIncrease: 12
                },
                {
                    text: "Establish international UAP data sharing agreements",
                    nextScene: "international_protocols",
                    progressIncrease: 10
                },
                {
                    text: "Start a new UAP case investigation",
                    nextScene: "intro",
                    progressIncrease: 5
                }
            ],
            educationalNote: "This investigation reflects the current state of official UAP research: scientifically rigorous, transparent, and ongoing."
        },

        uap_knowledge_quiz: {
            text: `KNOWLEDGE ASSESSMENT - UAP TERMINOLOGY AND CLASSIFICATION
            
            Before proceeding with the analysis, test your knowledge of official UAP terminology and investigation protocols.

QUESTION: What does "UAP" officially stand for in Pentagon documentation?

This will help establish your baseline understanding of current military terminology.`,
            image: "pentagon_training_room",
            imagePrompt: "Pentagon training facility with UAP classification charts and official terminology displays, educational government setting",
            sources: ["Pentagon AARO Training Materials"],
            choices: [
                {
                    text: "Unidentified Anomalous Phenomena",
                    nextScene: "uap_statistics_analysis",
                    quizAnswer: true,
                    progressIncrease: 10,
                    evidence: true
                },
                {
                    text: "Unidentified Aerial Phenomena", 
                    nextScene: "uap_statistics_analysis",
                    quizAnswer: false,
                    progressIncrease: 5
                },
                {
                    text: "Unknown Atmospheric Phenomena",
                    nextScene: "uap_statistics_analysis",
                    quizAnswer: false,
                    progressIncrease: 5
                },
                {
                    text: "Unidentified Flying Objects",
                    nextScene: "uap_statistics_analysis",
                    quizAnswer: false,
                    progressIncrease: 5
                }
            ],
            educationalNote: "The Pentagon officially uses 'Unidentified Anomalous Phenomena' to encompass not just aerial objects but also transmedium and space-based phenomena."
        }
    }
};

window.UAPStoryExpanded = UAPStoryExpanded;
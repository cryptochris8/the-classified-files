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
            prompt: "How will you proceed with your investigation?",
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
                },
                {
                    text: "Investigate reports of a 'Black Triangle' UAP stalking your investigation team",
                    nextScene: "black_triangle_threat",
                    progressIncrease: 20,
                    dangerous: true,
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
        },

        anomalous_cases_study: {
            text: `ANOMALOUS CASES ANALYSIS - THE UNEXPLAINED 21
            
            DAY 2 - 8:15 AM

You focus on the 21 cases that defied conventional explanation. These represent the most compelling evidence in AARO's database.

🔬 ANOMALOUS CHARACTERISTICS ANALYSIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Case #1: Transmedium Travel
- Object transitions air-to-water seamlessly
- No deceleration at water entry
- Continues at same speed underwater

Case #7: Instantaneous Acceleration  
- Radar tracking: 0 to Mach 3 in <1 second
- No sonic boom detected
- G-forces would be fatal to known aircraft

Case #14: Right-Angle Maneuvers
- 90-degree turns at 2,000+ mph
- No banking or deceleration
- Defies aerodynamic principles

Case #21: Anti-Gravity Behavior
- Hovering motionless against 40mph winds
- No visible propulsion or control surfaces
- Electromagnetic effects on nearby electronics
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Dr. Kim reviews the data: "Amanda, these cases share impossible flight characteristics. Either our physics is incomplete, or we're dealing with technology beyond our current understanding."`,
            image: "anomalous_uap_analysis",
            imagePrompt: "Advanced analysis lab with UAP case files, impossible flight path diagrams, and physics equations on whiteboards",
            sources: ["AARO Anomalous Case Database", "Physics Analysis Reports"],
            choices: [
                {
                    text: "Analyze the propulsion systems (or lack thereof)",
                    nextScene: "propulsion_analysis",
                    progressIncrease: 15,
                    evidence: true
                },
                {
                    text: "Study the radar and sensor validation data",
                    nextScene: "sensor_validation_study", 
                    progressIncrease: 12,
                    factual: true
                },
                {
                    text: "Compare with classified aircraft programs",
                    nextScene: "classified_aircraft_programs",
                    progressIncrease: 10
                },
                {
                    text: "Examine the behavioral patterns across incidents",
                    nextScene: "behavioral_pattern_analysis",
                    progressIncrease: 8,
                    evidence: true
                }
            ],
            educationalNote: "These characteristics match no known aircraft or natural phenomena, representing genuine scientific anomalies requiring investigation."
        },

        propulsion_analysis: {
            text: `PROPULSION SYSTEMS ANALYSIS
            
            DAY 2 - 10:30 AM

Your analysis of the propulsion characteristics reveals technology that appears to violate known physics.

⚡ PROPULSION ANALYSIS RESULTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Observable Characteristics:
• No visible exhaust plumes
• No heat signatures from engines
• No acoustic signatures (silent operation)
• No electromagnetic emissions from propulsion

Impossible Maneuvers:
• Instantaneous acceleration without inertial effects
• Sharp angular turns without momentum conservation
• Hovering against strong winds with no downwash
• Transmedium operation with no configuration changes

Scientific Implications:
• Challenges Newton's laws of motion
• Suggests unknown energy manipulation
• Possible spacetime metric engineering
• Advanced field propulsion concepts
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

"The propulsion mechanisms are beyond our current technological capabilities," notes your aerospace engineering consultant. "We're either missing fundamental physics or observing technology centuries ahead of ours."`,
            image: "propulsion_analysis_lab",
            imagePrompt: "High-tech propulsion research lab with exotic physics equations, field theory diagrams, and UAP propulsion models",
            sources: ["Advanced Propulsion Research", "Breakthrough Physics Institute"],
            choices: [
                {
                    text: "Research theoretical exotic propulsion concepts",
                    nextScene: "technology_implications",
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Cross-reference with military black projects",
                    nextScene: "classified_aircraft_programs",
                    progressIncrease: 12
                },
                {
                    text: "Present findings to Congressional committee",
                    nextScene: "congressional_presentation",
                    progressIncrease: 15,
                    factual: true
                }
            ],
            educationalNote: "Current propulsion physics cannot explain these observed characteristics, suggesting either measurement errors or revolutionary technology."
        },

        sensor_validation_study: {
            text: `MULTI-SENSOR VALIDATION ANALYSIS
            
            DAY 2 - 2:15 PM

You examine the sensor data to validate the authenticity of the anomalous readings across multiple detection systems.

📡 SENSOR VALIDATION RESULTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Primary Radar Confirmation: 21/21 cases
- Multiple radar stations tracking same object
- Consistent velocity and position data
- Cross-platform verification

Secondary Sensor Validation:
• Infrared (FLIR): 18/21 cases confirmed
• Electro-optical: 16/21 cases confirmed  
• Electronic Support Measures: 14/21 cases
• Pilot visual confirmation: 19/21 cases

Data Integrity Assessment:
✓ No evidence of sensor malfunction
✓ No weather-related false positives
✓ No electronic warfare interference
✓ Multiple independent confirmations

Calibration Status:
All systems within normal parameters
Recent maintenance records verified
Cross-platform correlation validates accuracy
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Dr. Kim reviews the technical analysis: "The sensors are working correctly, Amanda. Multiple independent systems are all reporting the same impossible flight characteristics."`,
            image: "radar_sensor_analysis",
            imagePrompt: "Military radar analysis center with multiple screens showing tracking data, sensor readings, and validation protocols",
            sources: ["Multi-Sensor Analysis Report", "Radar Calibration Data"],
            choices: [
                {
                    text: "Review pilot testimony and witness accounts",
                    nextScene: "military_witness_testimony",
                    progressIncrease: 14,
                    evidence: true,
                    factual: true
                },
                {
                    text: "Analyze radar tracking patterns in detail",
                    nextScene: "radar_tracking_analysis",
                    progressIncrease: 12,
                    evidence: true
                },
                {
                    text: "Proceed to final congressional briefing",
                    nextScene: "final_congressional_briefing",
                    progressIncrease: 16,
                    factual: true
                }
            ],
            educationalNote: "Multiple independent sensor systems provide robust validation that these anomalous characteristics are genuine observations."
        },

        military_witness_testimony: {
            text: `MILITARY WITNESS TESTIMONY ANALYSIS
            
            DAY 2 - 4:45 PM

You review firsthand accounts from trained military personnel who observed these anomalous phenomena.

🎖️ WITNESS TESTIMONY COMPILATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Lt. Commander Sarah Chen (F/A-18 Pilot):
"The object accelerated from stationary to hypersonic in under two seconds. No aircraft can do that. I've been flying for 12 years - this was unlike anything in our inventory."

Major David Rodriguez (Radar Operator):
"I watched it on three different radar systems simultaneously. The object made an instantaneous 90-degree turn at Mach 2.3. Physics says that's impossible."

Captain Jennifer Walsh (Naval Aviator):
"It went from 40,000 feet to sea level in three seconds, then disappeared underwater. No splash, no deceleration. I still can't explain what I saw."

Senior Chief Marcus Thompson (Sonar Operator):
"The object continued underwater at the same speed it had in air - over 500 knots submerged. Our fastest submarines top out at 40 knots."
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

These are highly trained observers with years of experience identifying conventional aircraft and natural phenomena.`,
            image: "military_witness_briefing",
            imagePrompt: "Pentagon briefing room with military personnel giving testimony, official UAP documentation on display",
            sources: ["Classified Witness Statements", "Military Personnel Interviews"],
            choices: [
                {
                    text: "Compile comprehensive report for Congress",
                    nextScene: "congressional_presentation",
                    progressIncrease: 20,
                    factual: true,
                    evidence: true
                },
                {
                    text: "Research international cooperation on UAP data",
                    nextScene: "international_cooperation",
                    progressIncrease: 12,
                    evidence: true
                },
                {
                    text: "Propose expanded research funding",
                    nextScene: "research_funding_proposal",
                    progressIncrease: 15
                }
            ],
            educationalNote: "Military personnel are trained observers with extensive experience in aircraft identification, making their testimony particularly credible."
        },

        congressional_presentation: {
            text: `CONGRESSIONAL UAP BRIEFING PREPARATION
            
            DAY 3 - 9:00 AM

You prepare the comprehensive briefing for the Senate Intelligence Committee, knowing this will shape public understanding of the UAP phenomenon.

📋 CONGRESSIONAL BRIEFING SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Key Findings:
• 757 new UAP reports analyzed
• 21 cases exhibit anomalous characteristics  
• Multiple sensor confirmation in all cases
• No conventional explanations found

Scientific Conclusions:
• Technology exceeds known capabilities
• Physics-defying flight characteristics observed
• No evidence of foreign adversary involvement
• Continued investigation strongly recommended

Policy Recommendations:
1. Increase AARO funding and resources
2. Expand international data sharing
3. Establish university research partnerships
4. Maintain scientific approach to investigation
5. Continue public transparency efforts
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Senator Williams: "Dr. Torres, in your professional opinion, what are we dealing with?"

Your response will shape how Congress approaches this phenomenon.`,
            image: "senate_hearing_room",
            imagePrompt: "Congressional hearing room with senators, UAP evidence displays, and official testimony setup",
            sources: ["Congressional Briefing Materials", "Scientific Analysis Summary"],
            choices: [
                {
                    text: "Recommend continued scientific investigation with expanded resources",
                    nextScene: "research_funding_proposal",
                    progressIncrease: 25,
                    factual: true,
                    evidence: true
                },
                {
                    text: "Emphasize the need for international cooperation",
                    nextScene: "international_protocols",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Conclude the investigation with current findings",
                    nextScene: "final_congressional_briefing",
                    progressIncrease: 18,
                    factual: true
                }
            ],
            educationalNote: "Congressional oversight ensures public accountability while maintaining scientific rigor in UAP investigation."
        },

        research_funding_proposal: {
            text: `UAP RESEARCH FUNDING PROPOSAL
            
            DAY 3 - 2:30 PM

Based on your investigation, you draft a comprehensive proposal for expanded UAP research funding.

💰 PROPOSED RESEARCH BUDGET
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Advanced Sensor Arrays: $50M
- Next-generation radar systems
- Multi-spectrum detection platforms
- Space-based monitoring networks

Scientific Research Partnerships: $30M
- University collaboration programs
- International data sharing initiatives
- Peer-reviewed publication support

Enhanced Investigation Capabilities: $25M
- Rapid response teams
- Advanced analysis laboratories
- Specialized equipment procurement

Public Transparency Programs: $15M
- Regular public reporting
- Educational outreach initiatives
- Declassification review processes

Total Annual Budget: $120M
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Senator Rodriguez reviews your proposal: "Dr. Torres, you're asking for a significant investment. What guarantees do we have that this will yield answers?"

Your response will determine funding for years of future UAP research.`,
            image: "congressional_budget_hearing",
            imagePrompt: "Congressional budget hearing with UAP research funding charts, scientific equipment displays, senators reviewing proposals",
            sources: ["Research Budget Analysis", "Scientific Funding Proposals"],
            choices: [
                {
                    text: "Emphasize the scientific method and peer review process",
                    nextScene: "scientific_methodology",
                    progressIncrease: 22,
                    factual: true,
                    evidence: true
                },
                {
                    text: "Highlight national security implications",
                    nextScene: "technology_implications",
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Propose international scientific collaboration",
                    nextScene: "international_cooperation",
                    progressIncrease: 20,
                    factual: true
                }
            ],
            educationalNote: "Scientific investigation requires sustained funding and rigorous methodology to produce credible results."
        },

        international_cooperation: {
            text: `INTERNATIONAL UAP COOPERATION INITIATIVE
            
            DAY 3 - 5:00 PM

You draft protocols for international cooperation on UAP data sharing and joint research initiatives.

🌍 INTERNATIONAL COOPERATION FRAMEWORK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Partner Nations with UAP Programs:
• United Kingdom - UAP Investigation Unit
• France - GEIPAN (Study Group)  
• Canada - Transport Canada UAP Database
• Australia - Defence Intelligence UAP Unit
• Japan - Self-Defense Forces UAP Research

Data Sharing Protocols:
1. Standardized reporting formats
2. Real-time incident notification
3. Joint analysis capabilities
4. Coordinated public disclosure

Scientific Collaboration Benefits:
• Larger data sets for analysis
• Diverse sensor technologies
• Multiple perspective analysis
• Reduced duplication of effort
• Enhanced credibility through collaboration

Proposed International UAP Research Center:
- Neutral location (Switzerland proposed)
- Joint funding from participating nations
- Shared technology development
- Coordinated investigation protocols
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Ambassador Chen from the UN Science Council: "Dr. Torres, this could revolutionize how we approach unexplained phenomena globally."`,
            image: "international_cooperation_meeting",
            imagePrompt: "United Nations meeting room with international delegates, world map showing UAP cooperation networks, diplomatic setting",
            sources: ["International UAP Programs", "UN Science Cooperation Protocols"],
            choices: [
                {
                    text: "Establish formal international protocols",
                    nextScene: "international_protocols",
                    progressIncrease: 25,
                    factual: true,
                    evidence: true
                },
                {
                    text: "Focus on transparency and public trust",
                    nextScene: "transparency_protocols",
                    progressIncrease: 20,
                    factual: true
                },
                {
                    text: "Present comprehensive findings to global audience",
                    nextScene: "final_congressional_briefing",
                    progressIncrease: 18,
                    evidence: true
                }
            ],
            educationalNote: "International cooperation enhances scientific credibility and provides broader data sets for UAP analysis."
        },

        technology_implications: {
            text: `TECHNOLOGY IMPLICATIONS ASSESSMENT
            
            DAY 4 - 10:00 AM

You analyze the broader implications of the observed UAP technology for human scientific understanding and national security.

🔬 TECHNOLOGY IMPLICATIONS ANALYSIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Physics Paradigm Challenges:
• Apparent violations of thermodynamics
• Non-Newtonian propulsion mechanisms  
• Possible spacetime manipulation
• Unknown energy sources

Potential Breakthrough Technologies:
1. Field Propulsion Systems
   - Gravity manipulation
   - Inertial mass reduction
   - Electromagnetic field drives

2. Advanced Materials Science
   - Metamaterials with exotic properties
   - Programmable matter capabilities
   - Self-healing structures

3. Energy Generation/Storage
   - Zero-point energy extraction
   - Exotic matter interactions
   - Quantum energy systems

National Security Considerations:
• Technology gap assessment
• Strategic research priorities  
• International cooperation vs. competition
• Public vs. classified research balance
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Dr. Martinez, Chief Technology Officer: "Amanda, if even 10% of these observations are accurate, we're looking at a technological revolution that could transform civilization."`,
            image: "advanced_technology_lab",
            imagePrompt: "Futuristic technology research laboratory with exotic physics experiments, advanced propulsion models, breakthrough technology displays",
            sources: ["Advanced Physics Research", "Technology Assessment Reports"],
            choices: [
                {
                    text: "Recommend aggressive research into breakthrough physics",
                    nextScene: "scientific_methodology",
                    progressIncrease: 28,
                    evidence: true
                },
                {
                    text: "Assess potential aircraft comparison studies",
                    nextScene: "aircraft_comparison_analysis",
                    progressIncrease: 15,
                    factual: true
                },
                {
                    text: "Conclude with final congressional presentation",
                    nextScene: "final_congressional_briefing",
                    progressIncrease: 22,
                    factual: true,
                    evidence: true
                }
            ],
            educationalNote: "Observed UAP capabilities suggest technologies that could revolutionize energy, transportation, and our understanding of physics."
        },

        aircraft_comparison_analysis: {
            text: `CONVENTIONAL AIRCRAFT COMPARISON STUDY
            
            DAY 4 - 2:15 PM

You conduct a detailed comparison between UAP performance characteristics and the most advanced known aircraft.

✈️ AIRCRAFT PERFORMANCE COMPARISON
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Advanced Military Aircraft Capabilities:

F-22 Raptor (USA):
• Max Speed: Mach 2.25
• Service Ceiling: 65,000 ft
• Turn Rate: ~28°/second
• Acceleration: 0-Mach 1 in ~30 seconds

SR-71 Blackbird (Retired):
• Max Speed: Mach 3.3  
• Service Ceiling: 85,000 ft
• Turn Capability: Limited at speed
• Acceleration: Gradual over minutes

Experimental Aircraft (X-15):
• Max Speed: Mach 6.7
• Service Ceiling: 354,200 ft
• Maneuverability: Minimal
• Acceleration: Rocket-powered

UAP Observed Capabilities:
• Speed: 0 to Mach 3+ instantaneously
• Altitude: Sea level to space seamlessly
• Maneuverability: 90° turns at hypersonic speeds  
• Acceleration: Physics-defying rapid changes
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Colonel Harris, Test Pilot: "Dr. Torres, no aircraft in our inventory or development can match these performance characteristics. The G-forces alone would be lethal."`,
            image: "aircraft_comparison_charts",
            imagePrompt: "Military aviation analysis center with aircraft performance charts, UAP capability comparisons, flight test data displays",
            sources: ["Military Aircraft Database", "Flight Test Performance Data"],
            choices: [
                {
                    text: "Investigate classified aircraft development programs",
                    nextScene: "classified_aircraft_programs",
                    progressIncrease: 15
                },
                {
                    text: "Focus on the scientific methodology of investigation",
                    nextScene: "scientific_methodology",
                    progressIncrease: 18,
                    factual: true
                },
                {
                    text: "Prepare final conclusions for Congress",
                    nextScene: "final_congressional_briefing",
                    progressIncrease: 20,
                    factual: true,
                    evidence: true
                }
            ],
            educationalNote: "UAP performance characteristics exceed all known aircraft capabilities by orders of magnitude, ruling out conventional explanations."
        },

        classified_aircraft_programs: {
            text: `CLASSIFIED AIRCRAFT PROGRAMS INVESTIGATION
            
            DAY 4 - 4:30 PM

You review classified military aircraft development programs to determine if any could explain the UAP observations.

🔒 CLASSIFIED PROGRAMS REVIEW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Known Black Projects (Declassified):
• F-117 Nighthawk - Stealth technology
• B-2 Spirit - Advanced stealth bomber  
• SR-71 Blackbird - High-speed reconnaissance
• Have Blue - Stealth demonstrator

Current Development Programs:
• B-21 Raider - Next-generation bomber
• NGAD - Next Generation Air Dominance
• X-37B - Unmanned space plane
• Classified hypersonic projects

Performance Limitations:
Even the most advanced classified programs are constrained by:
- Known propulsion physics
- Material strength limitations  
- Human pilot G-force tolerance
- Conventional aerodynamic principles

Assessment Results:
❌ No classified program matches UAP capabilities
❌ Technology gap too significant to bridge
❌ Physics violations cannot be explained
✓ Continued unexplained phenomena confirmed
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Admiral Thompson, Black Programs Director: "Dr. Torres, I can confirm that no U.S. program, classified or otherwise, can account for these observations."`,
            image: "classified_briefing_room",
            imagePrompt: "High-security Pentagon briefing room with classified aircraft displays, military officials, top secret documentation",
            sources: ["Classified Programs Database", "Advanced Technology Assessment"],
            choices: [
                {
                    text: "Focus on scientific methodology for investigation",
                    nextScene: "scientific_methodology",
                    progressIncrease: 20,
                    factual: true,
                    evidence: true
                },
                {
                    text: "Examine behavioral patterns across all cases",
                    nextScene: "behavioral_pattern_analysis",
                    progressIncrease: 15,
                    evidence: true
                },
                {
                    text: "Proceed to final congressional briefing",
                    nextScene: "final_congressional_briefing",
                    progressIncrease: 18,
                    factual: true
                }
            ],
            educationalNote: "Even the most advanced classified military programs cannot explain the observed UAP capabilities."
        },

        scientific_methodology: {
            text: `SCIENTIFIC METHODOLOGY FOR UAP INVESTIGATION
            
            DAY 5 - 9:00 AM

You establish rigorous scientific protocols for ongoing UAP investigation to ensure credible, peer-reviewed research.

🔬 SCIENTIFIC METHODOLOGY FRAMEWORK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Research Principles:
1. Hypothesis-driven investigation
2. Reproducible measurement protocols
3. Peer review of all findings
4. Open data sharing (where possible)
5. Multi-disciplinary collaboration

Data Collection Standards:
• Calibrated instrumentation requirements
• Multiple sensor confirmations mandatory
• Witness training and debriefing protocols
• Chain of custody documentation
• Statistical analysis methodologies

Quality Control Measures:
✓ Independent verification systems
✓ Bias elimination procedures
✓ Error analysis and uncertainty quantification
✓ Publication in peer-reviewed journals
✓ International collaboration standards

Proposed Research Areas:
- Advanced propulsion physics
- Exotic materials analysis  
- Sensor technology development
- Data analysis algorithms
- International cooperation protocols
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Dr. Elizabeth Warren, MIT Physics: "Dr. Torres, this methodology could establish UAP research as a legitimate scientific discipline."`,
            image: "scientific_research_lab",
            imagePrompt: "Modern scientific laboratory with UAP research equipment, peer review documentation, international collaboration displays",
            sources: ["Scientific Research Protocols", "Peer Review Standards"],
            choices: [
                {
                    text: "Implement comprehensive research program",
                    nextScene: "research_funding_proposal",
                    progressIncrease: 25,
                    factual: true,
                    evidence: true
                },
                {
                    text: "Focus on international cooperation protocols",
                    nextScene: "international_protocols",
                    progressIncrease: 20,
                    factual: true
                },
                {
                    text: "Present final findings to Congress",
                    nextScene: "final_congressional_briefing",
                    progressIncrease: 22,
                    factual: true,
                    evidence: true
                }
            ],
            educationalNote: "Rigorous scientific methodology is essential for establishing UAP research credibility and advancing our understanding."
        },

        behavioral_pattern_analysis: {
            text: `UAP BEHAVIORAL PATTERN ANALYSIS
            
            DAY 5 - 2:00 PM

You analyze behavioral patterns across UAP incidents to identify consistent characteristics and potential intelligence indicators.

🧠 BEHAVIORAL ANALYSIS RESULTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Consistent Behaviors Observed:
• Approach to military installations (78% of cases)
• Interest in nuclear facilities (85% at nuclear sites)
• Avoidance of populated civilian areas
• Reaction to military intercept attempts
• Demonstration of superior performance capabilities

Response Patterns:
When approached by military aircraft:
- Immediate awareness of intercept attempts
- Superior evasive maneuvers demonstrated
- No aggressive actions toward human aircraft
- Often deliberate display of capabilities
- Strategic withdrawal when pursued

Strategic Locations:
Most frequent appearances:
1. Nuclear weapons facilities
2. Aircraft carriers
3. Military training ranges  
4. Aerospace testing facilities
5. Strategic missile installations

Intelligence Indicators:
• Selective targeting suggests awareness
• Timing often coincides with military exercises
• Technological demonstrations appear intentional
• No hostile actions despite clear superiority
• Consistent interest in human military capabilities
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Colonel Martinez, Intelligence Analyst: "Dr. Torres, these patterns suggest organized, intelligent behavior with specific objectives."`,
            image: "behavioral_analysis_center",
            imagePrompt: "Intelligence analysis center with UAP behavior charts, pattern recognition displays, strategic location maps",
            sources: ["UAP Behavioral Database", "Intelligence Pattern Analysis"],
            choices: [
                {
                    text: "Analyze implications for national security",
                    nextScene: "technology_implications",
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Focus on transparency and public disclosure",
                    nextScene: "transparency_protocols",
                    progressIncrease: 16,
                    factual: true
                },
                {
                    text: "Conclude investigation with comprehensive briefing",
                    nextScene: "final_congressional_briefing",
                    progressIncrease: 20,
                    factual: true,
                    evidence: true
                }
            ],
            educationalNote: "Consistent behavioral patterns suggest intelligent, purposeful activity rather than random phenomena."
        },

        transparency_protocols: {
            text: `PUBLIC TRANSPARENCY PROTOCOLS
            
            DAY 5 - 5:30 PM

You develop protocols for responsible public disclosure of UAP findings while maintaining necessary security classifications.

📢 TRANSPARENCY FRAMEWORK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Public Disclosure Principles:
1. Maximum transparency consistent with security
2. Regular public reporting schedules
3. Clear communication of uncertainties
4. Educational context for findings
5. Proactive declassification reviews

Information Categories:
🟢 Fully Public:
- Statistical summaries
- Resolved case explanations
- Scientific methodologies
- Educational materials

🟡 Partially Classified:
- Specific sensor capabilities
- Military operational details
- Witness personal information
- Ongoing investigation methods

🔴 Classified:
- Intelligence sources/methods
- Advanced technology details
- National security implications
- Foreign relations impacts

Communication Strategy:
• Annual public reports
• Scientific journal publications
• Congressional testimony broadcasts
• Educational outreach programs
• International cooperation announcements
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Press Secretary Johnson: "Dr. Torres, the public has a right to know, but we must balance transparency with national security."`,
            image: "press_briefing_room",
            imagePrompt: "White House press briefing room with UAP transparency displays, media representatives, official disclosure protocols",
            sources: ["Public Disclosure Guidelines", "Classification Review Protocols"],
            choices: [
                {
                    text: "Implement comprehensive transparency program",
                    nextScene: "public_trust_analysis",
                    progressIncrease: 22,
                    factual: true,
                    evidence: true
                },
                {
                    text: "Focus on international cooperation standards",
                    nextScene: "international_protocols",
                    progressIncrease: 18,
                    factual: true
                },
                {
                    text: "Present final recommendations to Congress",
                    nextScene: "final_congressional_briefing",
                    progressIncrease: 20,
                    factual: true
                }
            ],
            educationalNote: "Public transparency builds trust while scientific rigor ensures credible findings in UAP investigation."
        },

        international_protocols: {
            text: `INTERNATIONAL UAP INVESTIGATION PROTOCOLS
            
            DAY 6 - 11:00 AM

You finalize international protocols for standardized UAP investigation and data sharing across allied nations.

🌐 INTERNATIONAL PROTOCOLS ESTABLISHED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Participating Nations: 12 countries committed
Standardized Procedures:
✓ Common reporting formats implemented
✓ Real-time data sharing networks established  
✓ Joint investigation protocols agreed
✓ Coordinated public disclosure standards
✓ Shared research funding commitments

Research Collaboration Framework:
• International UAP Research Center (Geneva)
• Quarterly joint analysis sessions
• Standardized sensor calibration
• Cross-platform data validation
• Peer review partnerships

Scientific Benefits:
- 300% increase in validated reports
- Multi-national sensor confirmation
- Diverse technological perspectives
- Reduced investigation duplication
- Enhanced scientific credibility

Ambassador Williams, NATO Science Division: "Dr. Torres, this represents the largest international science cooperation initiative since the International Space Station."`,
            image: "international_treaty_signing",
            imagePrompt: "International diplomatic ceremony with UAP cooperation treaty signing, world leaders, scientific collaboration displays",
            sources: ["International Cooperation Treaty", "NATO Science Protocols"],
            choices: [
                {
                    text: "Present comprehensive findings to global audience",
                    nextScene: "final_congressional_briefing",
                    progressIncrease: 30,
                    factual: true,
                    evidence: true
                }
            ],
            educationalNote: "International cooperation legitimizes UAP research and provides unprecedented data sharing capabilities."
        },

        public_trust_analysis: {
            text: `PUBLIC TRUST AND TRANSPARENCY ANALYSIS
            
            DAY 6 - 3:00 PM

You analyze the impact of transparency on public trust and the importance of honest communication about UAP phenomena.

📊 PUBLIC TRUST ASSESSMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Transparency Impact Survey Results:
🟢 Positive Public Response: 73%
- Appreciation for honest disclosure
- Increased trust in government science
- Support for continued investigation
- Interest in educational programs

🟡 Neutral/Uncertain: 18%
- Need for more educational context
- Concerns about funding priorities
- Questions about implications

🔴 Negative Response: 9%
- Security concerns
- Skepticism about phenomena
- Preference for complete classification

Key Findings:
• Transparency increases public support
• Scientific approach builds credibility
• Educational context reduces fear
• Regular updates maintain engagement
• International cooperation enhances trust

Recommendation: Continue maximum transparency consistent with security requirements while providing comprehensive educational context.`,
            image: "public_opinion_analysis",
            imagePrompt: "Public opinion research center with transparency impact charts, public trust surveys, communication strategy displays",
            sources: ["Public Opinion Research", "Transparency Impact Studies"],
            choices: [
                {
                    text: "Conclude with comprehensive final briefing",
                    nextScene: "final_congressional_briefing",
                    progressIncrease: 25,
                    factual: true,
                    evidence: true
                }
            ],
            educationalNote: "Public transparency in scientific investigation builds trust and supports continued research funding."
        },

        // Additional scenes needed for complete navigation
        resolved_cases_analysis: {
            text: `RESOLVED CASES ANALYSIS
            
            DAY 2 - 12:00 PM

You examine the 118 cases that AARO successfully resolved to understand how conventional explanations were determined.

✅ RESOLVED CASES BREAKDOWN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Resolution Categories:
• Weather Balloons: 42 cases (36%)
• Birds/Wildlife: 31 cases (26%)
• Drones/UAS: 28 cases (24%)
• Other Prosaic Objects: 17 cases (14%)

Resolution Methods:
- Multi-sensor correlation analysis
- Weather data comparison
- Flight path reconstruction
- Witness re-interviews
- Additional evidence collection

Key Success Factors:
✓ Multiple data sources available
✓ Clear atmospheric conditions
✓ Known objects in vicinity
✓ Conventional flight characteristics
✓ Corroborating evidence found

The resolved cases demonstrate that rigorous scientific analysis can identify conventional explanations when sufficient data is available.`,
            image: "resolved_cases_display",
            imagePrompt: "Analysis center showing resolved UAP cases with conventional explanations, weather balloon tracking, bird migration data",
            sources: ["AARO Resolved Cases Database"],
            choices: [
                {
                    text: "Continue to congressional briefing",
                    nextScene: "final_congressional_briefing",
                    progressIncrease: 15,
                    factual: true
                }
            ],
            educationalNote: "Systematic analysis successfully identifies conventional explanations in the majority of UAP reports."
        },

        aaro_methodology: {
            text: `AARO INVESTIGATION METHODOLOGY
            
            DAY 2 - 3:30 PM

You review AARO's systematic approach to UAP investigation and analysis protocols.

🔍 AARO METHODOLOGY FRAMEWORK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Investigation Process:
1. Initial Report Collection
2. Multi-Source Data Gathering
3. Sensor Data Analysis
4. Witness Interviews
5. Environmental Factor Assessment
6. Conventional Explanation Testing
7. Anomaly Identification
8. Classification and Documentation

Scientific Standards:
• Multiple sensor confirmation required
• Independent analysis verification
• Peer review of findings
• Statistical significance testing
• Uncertainty quantification

Quality Assurance:
✓ Calibrated instrumentation
✓ Chain of custody protocols
✓ Bias elimination procedures
✓ Regular methodology review
✓ International standard compliance

This systematic approach ensures reliable, scientific analysis of UAP phenomena.`,
            image: "aaro_methodology_center",
            imagePrompt: "AARO headquarters with investigation methodology charts, scientific analysis protocols, quality assurance displays",
            sources: ["AARO Investigation Protocols"],
            choices: [
                {
                    text: "Proceed to final congressional briefing",
                    nextScene: "final_congressional_briefing",
                    progressIncrease: 18,
                    factual: true
                }
            ],
            educationalNote: "AARO's rigorous methodology ensures scientific credibility in UAP investigation."
        },

        radar_tracking_analysis: {
            text: `RADAR TRACKING ANALYSIS
            
            DAY 2 - 6:00 PM

You conduct detailed analysis of radar tracking data from the most compelling UAP cases.

📡 RADAR ANALYSIS RESULTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Tracking Capabilities Demonstrated:
• Instantaneous acceleration: 0 to Mach 3 in <1 second
• Right-angle maneuvers at hypersonic speeds
• Altitude changes of 40,000+ feet in seconds
• Transmedium operation (air to water)
• Extended hovering against strong winds

Radar Characteristics:
- Strong radar return signals
- Consistent across multiple radar types
- No stealth characteristics observed
- Predictable tracking until maneuvers
- Cross-platform verification achieved

Technical Validation:
✓ All radar systems calibrated and functional
✓ No atmospheric interference detected
✓ Multiple operator confirmation
✓ Recording systems verified
✓ Data integrity confirmed

The radar data provides objective measurement of impossible flight characteristics.`,
            image: "radar_tracking_display",
            imagePrompt: "Military radar control center with UAP tracking displays, impossible flight path charts, multiple radar confirmations",
            sources: ["Military Radar Data", "FAA Tracking Records"],
            choices: [
                {
                    text: "Proceed to final briefing",
                    nextScene: "final_congressional_briefing",
                    progressIncrease: 20,
                    evidence: true
                }
            ],
            educationalNote: "Radar tracking provides objective, quantifiable evidence of anomalous flight characteristics."
        },

        black_triangle_threat: {
            text: `BLACK TRIANGLE STALKING - IMMINENT DANGER
            
            DAY 2 - 11:47 PM
            
            You've been working late analyzing data when your colleague Dr. Kim bursts into your office, visibly shaken.
            
            "Amanda, we have a problem. A massive black triangular craft has been hovering outside the Pentagon for the past hour. It's tracking our investigation."
            
            Your secure phone buzzes with an emergency alert: "UNKNOWN AERIAL VEHICLE - PENTAGON AIRSPACE VIOLATION - ALL PERSONNEL SHELTER IN PLACE"
            
            Through your office window, you see it - a 300-foot black triangle, silent, motionless, directly above your building. No lights except three pulsing red orbs at each corner.
            
            Dr. Kim grabs your arm. "Amanda, it appeared right after you accessed the classified nuclear facility files. This isn't coincidence."
            
            Your computer screen flickers. All your UAP files are being accessed by an unknown entity. The investigation data is being copied in real-time.
            
            Security alarms blare throughout the Pentagon. Armed guards are evacuating floors below you. You hear helicopters approaching, but they maintain distance from the craft.
            
            Your phone rings. Unknown number. Against protocol, you answer.
            
            A distorted voice: "Dr. Torres, you're getting too close to the truth. Stop the investigation now, or face the consequences."
            
            The line goes dead. The black triangle pulses brighter.`,
            image: "black_triangle_pentagon",
            imagePrompt: "Massive black triangular UFO hovering over Pentagon at night, red pulsing lights, emergency vehicles below, dark threatening atmosphere",
            sources: ["Classified Pentagon Security Reports", "Military UAP Encounters"],
            choices: [
                {
                    text: "Continue the investigation despite the threat",
                    nextScene: "defiant_investigation",
                    progressIncrease: 25,
                    dangerous: true,
                    evidence: true
                },
                {
                    text: "Attempt to evacuate the building immediately", 
                    nextScene: "evacuation_attempt",
                    progressIncrease: 10,
                    dangerous: true
                },
                {
                    text: "Try to communicate with the craft using military protocols",
                    nextScene: "communication_attempt",
                    progressIncrease: 15,
                    dangerous: true
                },
                {
                    text: "Comply with the threat and shut down the investigation",
                    nextScene: "career_ending_compliance",
                    progressIncrease: -50,
                    careerEnding: true
                }
            ],
            educationalNote: "Black triangle UAPs are among the most commonly reported unexplained craft, often near military installations."
        },

        defiant_investigation: {
            text: `DEFYING THE THREAT - LIFE ON THE LINE
            
            DAY 2 - 11:52 PM
            
            You stand firm. "I'm a scientist, Dr. Kim. I won't be intimidated by threats, no matter their origin."
            
            You continue accessing the classified files. The black triangle responds immediately - dropping to just 50 feet above your office window. The building shakes from an unknown energy field.
            
            Your computer screens flicker violently. The lights go out. Emergency power kicks in with red lighting.
            
            Dr. Kim pleads: "Amanda, this is insane! We need to leave NOW!"
            
            Suddenly, your office door slams shut and won't open. The electronic locks have engaged. You're trapped.
            
            Through the window, you see the craft's underside - geometric patterns pulsing with energy. It's scanning your office with beams of light.
            
            Your secure phone receives a text: "Final warning, Dr. Torres. You have 60 seconds to delete all UAP files or face elimination."
            
            The temperature in your office plummets. Ice forms on the windows. Something is draining all energy from the room.
            
            You notice your backup drive with all the critical UAP evidence. This could be your only chance to preserve the truth.
            
            30 seconds remaining...`,
            image: "office_under_attack",
            imagePrompt: "Pentagon office under alien attack, black triangle UFO outside window, emergency lighting, ice forming, scientist at computer with UAP data",
            sources: ["Pentagon Emergency Protocols", "UAP Encounter Reports"],
            choices: [
                {
                    text: "Upload the evidence to a secure off-site server before it's too late",
                    nextScene: "data_transmission_success",
                    progressIncrease: 30,
                    heroic: true,
                    evidence: true
                },
                {
                    text: "Destroy the evidence to save your life",
                    nextScene: "evidence_destroyed",
                    progressIncrease: -30,
                    survival: true
                },
                {
                    text: "Try to break through the locked door",
                    nextScene: "escape_attempt_failure",
                    progressIncrease: 0,
                    fatal: true
                },
                {
                    text: "Stand your ground and refuse to comply",
                    nextScene: "ultimate_sacrifice",
                    progressIncrease: 50,
                    fatal: true,
                    heroic: true
                }
            ],
            educationalNote: "UAP encounters often involve electromagnetic effects and unexplained technology interactions."
        },

        evacuation_attempt: {
            text: `EVACUATION GONE WRONG
            
            DAY 2 - 11:49 PM
            
            "You're right, Dr. Kim. We need to get out of here immediately."
            
            You grab the most critical UAP files and head for the emergency exit. The hallways are filled with panicked personnel.
            
            As you reach the stairwell, all the lights cut out. Emergency lighting fails. You're in complete darkness.
            
            Dr. Kim grabs your arm. "Amanda, something's wrong. The emergency exits should have power."
            
            You hear a low humming sound growing louder. The black triangle has moved directly over the exit routes.
            
            Your phone's flashlight reveals something horrifying - the stairwell walls are covered in ice. The temperature has dropped to subzero levels.
            
            Other evacuees ahead of you have collapsed from hypothermia. Their breath is visible in the freezing air.
            
            The humming intensifies. You realize the craft is systematically disabling each escape route.
            
            Dr. Kim's lips are turning blue. "Amanda... can't... feel my legs..."
            
            You have seconds before hypothermia sets in.`,
            image: "frozen_evacuation",
            imagePrompt: "Pentagon stairwell covered in ice, frozen personnel, emergency evacuation failing, black triangle UFO effect",
            sources: ["Pentagon Emergency Response", "UAP Environmental Effects"],
            choices: [
                {
                    text: "Return to your office where it's warmer",
                    nextScene: "return_to_office_trap",
                    progressIncrease: 5,
                    dangerous: true
                },
                {
                    text: "Push through the cold to reach an exit",
                    nextScene: "hypothermia_death",
                    progressIncrease: 0,
                    fatal: true
                },
                {
                    text: "Use the service elevator to reach a different floor",
                    nextScene: "elevator_malfunction",
                    progressIncrease: 10,
                    dangerous: true
                },
                {
                    text: "Break into a secure communications room to call for help",
                    nextScene: "communications_rescue",
                    progressIncrease: 15,
                    evidence: true
                }
            ],
            educationalNote: "Many UAP encounters report sudden temperature changes and environmental anomalies."
        },

        communication_attempt: {
            text: `ATTEMPTING FIRST CONTACT - DANGEROUS PROTOCOL
            
            DAY 2 - 11:50 PM
            
            "Dr. Kim, this could be the most important moment in human history. We need to try to communicate."
            
            You access the Pentagon's emergency broadcast system and transmit on multiple frequencies: "Unknown craft, this is Dr. Amanda Torres, Pentagon UAP Research. We seek peaceful communication."
            
            The response is immediate and terrifying.
            
            The black triangle descends to just 20 feet above your office. The windows crack from the pressure. Your ears pop painfully.
            
            Every electronic device in your office activates simultaneously - phones ringing, computers typing by themselves, printers spewing pages of alien symbols.
            
            Then, impossibly, a voice emanates from every speaker in the building: "Dr. Torres, your species is not ready for this knowledge. Your investigation threatens the carefully maintained balance."
            
            The voice continues: "We have observed your kind for millennia. Your leaders know of our presence. The investigation you conduct will lead to panic and chaos."
            
            Dr. Kim collapses, overwhelmed by the psychic pressure. "Amanda... I can hear them... in my mind... they're showing me things..."
            
            The voice concludes: "You have one choice: Join our liaison program and help manage disclosure, or be eliminated as a threat to planetary stability."
            
            The craft hovers silently, awaiting your response.`,
            image: "alien_communication",
            imagePrompt: "Pentagon office with alien communication equipment, black triangle UFO outside, electromagnetic effects, scientist making first contact",
            sources: ["Pentagon Communication Protocols", "First Contact Scenarios"],
            choices: [
                {
                    text: "Accept their liaison offer and join the program",
                    nextScene: "alien_collaboration",
                    progressIncrease: 40,
                    worldChanging: true
                },
                {
                    text: "Refuse and demand they respect human independence",
                    nextScene: "defiant_rejection",
                    progressIncrease: 20,
                    dangerous: true,
                    heroic: true
                },
                {
                    text: "Ask for time to consider their offer",
                    nextScene: "negotiation_attempt",
                    progressIncrease: 15,
                    diplomatic: true
                },
                {
                    text: "Try to record everything for evidence before they leave",
                    nextScene: "evidence_gathering_risk",
                    progressIncrease: 25,
                    dangerous: true,
                    evidence: true
                }
            ],
            educationalNote: "Some UAP researchers theorize that advanced civilizations may be monitoring human technological development."
        },

        career_ending_compliance: {
            text: `CAREER DESTROYED - INVESTIGATION TERMINATED
            
            DAY 2 - 11:51 PM
            
            Fear overwhelms your scientific integrity. You immediately begin deleting all UAP investigation files.
            
            "Dr. Kim, help me destroy everything. We're not equipped for this."
            
            As the files disappear, the black triangle slowly ascends and vanishes into the night sky. The immediate threat is gone, but so is your life's work.
            
            Dr. Kim looks at you with disappointment. "Amanda, we just destroyed evidence that could have changed human understanding of the universe."
            
            Within hours, news of your "equipment malfunction" and "data corruption" spreads throughout AARO. Your colleagues question your competence.
            
            By morning, your security clearance is revoked. Your reputation as a reliable scientist is destroyed.
            
            The Pentagon reassigns you to analyzing weather balloon reports. Your career in UAP research is over.
            
            Months later, you watch other researchers present the same evidence you had discovered. They're hailed as heroes while you're forgotten.
            
            You saved your life, but lost everything that made it meaningful.
            
            Dr. Kim transfers to another department, unable to work with someone who chose fear over truth.
            
            The UAP phenomenon continues, but without your participation.
            
            INVESTIGATION TERMINATED - CAREER ENDED
            
            You compromised scientific integrity and lost everything that mattered to your professional life.`,
            image: "career_destroyed",
            imagePrompt: "Empty office with deleted computer files, scientist in despair, Pentagon badge being revoked, professional failure",
            sources: ["Pentagon Personnel Records", "Scientific Ethics Cases"],
            choices: [
                {
                    text: "Try to restart your investigation privately",
                    nextScene: "private_investigation_danger",
                    progressIncrease: 10,
                    dangerous: true
                }
            ],
            educationalNote: "Scientific integrity often requires personal sacrifice to preserve truth and evidence."
        },

        ultimate_sacrifice: {
            text: `THE ULTIMATE SACRIFICE - HERO'S END
            
            DAY 2 - 11:53 PM
            
            You stand defiantly in your freezing office as the countdown reaches zero.
            
            "I'm a scientist. I serve the truth, not threats. Do your worst."
            
            The black triangle pulses with blinding energy. Your office windows explode inward from an invisible force.
            
            Dr. Kim screams as she's thrown against the wall. "AMANDA, NO!"
            
            You feel an overwhelming energy surge through your body. Your vision blurs, but you use your final moments to hit 'SEND' on the data transmission.
            
            The evidence uploads to servers worldwide just as the alien energy overwhelms your nervous system.
            
            Your last conscious thought: "The truth will survive, even if I don't."
            
            You collapse, but your sacrifice ensures that the complete UAP investigation data reaches Congress, the media, and the scientific community.
            
            EPILOGUE - THREE MONTHS LATER:
            
            Dr. Kim speaks at your memorial service. "Dr. Amanda Torres died protecting the most important discovery in human history. Her data has revolutionized our understanding of UAP phenomena."
            
            The evidence you transmitted leads to full UAP disclosure, congressional hearings, and a new era of human understanding.
            
            Your sacrifice saved humanity's right to the truth.
            
            MISSION COMPLETED - ULTIMATE SACRIFICE
            
            You died as a hero, ensuring that UAP truth reached the world despite deadly opposition.`,
            image: "heroic_sacrifice",
            imagePrompt: "Scientist's final moments transmitting UAP data as alien energy overwhelms her, heroic sacrifice for truth, memorial service",
            sources: ["Pentagon Memorial Records", "UAP Disclosure Timeline"],
            choices: [],
            educationalNote: "Scientific martyrdom has often been necessary to advance human knowledge against powerful opposition."
        },

        data_transmission_success: {
            text: `DATA TRANSMISSION SUCCESS - EVIDENCE PRESERVED
            
            DAY 2 - 11:54 PM
            
            With seconds to spare, you hit ENTER. The classified UAP data uploads to secure servers worldwide.
            
            "Evidence transmitted successfully!" appears on your screen just as the black triangle unleashes its energy.
            
            The craft's beam hits your office, but the damage is done - the truth is now beyond their reach.
            
            Your office equipment shorts out completely. The temperature returns to normal. The black triangle retreats into the night sky.
            
            Dr. Kim helps you to your feet. "Amanda, you did it! The data is safe!"
            
            Within hours, the transmitted evidence reaches Congress, intelligence agencies, and international researchers.
            
            Your heroic action ensures that UAP disclosure proceeds despite the opposition.
            
            MISSION ACCOMPLISHED - EVIDENCE PRESERVED
            
            You risked everything to preserve the truth, and humanity's understanding of UAP phenomena advances because of your courage.`,
            image: "successful_transmission",
            imagePrompt: "Pentagon office with successful data upload, scientist victorious, UAP evidence transmitted to world, heroic moment",
            sources: ["Data Security Protocols", "UAP Evidence Preservation"],
            choices: [
                {
                    text: "Proceed to final congressional briefing with the evidence",
                    nextScene: "final_congressional_briefing",
                    progressIncrease: 40,
                    heroic: true,
                    evidence: true
                }
            ],
            educationalNote: "Preserving scientific evidence often requires personal courage in the face of powerful opposition."
        },

        hypothermia_death: {
            text: `FROZEN TO DEATH - INVESTIGATION ENDS
            
            DAY 2 - 11:51 PM
            
            You push forward through the freezing stairwell, determined to escape with the evidence.
            
            But the black triangle's energy field has dropped the temperature to -40°F. Your body can't withstand the extreme cold.
            
            Dr. Kim collapses beside you. "Amanda... I can't... move..."
            
            Your fingers go numb. You can't hold the evidence files anymore. They scatter across the icy floor.
            
            Your vision blurs as hypothermia sets in. Your last sight is the scattered UAP documents freezing to the floor.
            
            Both you and Dr. Kim freeze to death in the Pentagon stairwell.
            
            The black triangle departs, leaving only frozen bodies and destroyed evidence.
            
            The UAP investigation dies with you.
            
            MISSION FAILED - FATAL CONSEQUENCES
            
            Your investigation ended in death, and the UAP truth was lost forever.`,
            image: "frozen_death",
            imagePrompt: "Pentagon stairwell with frozen bodies, scattered UAP documents covered in ice, dark tragedy",
            sources: ["Pentagon Emergency Records", "UAP Investigation Casualties"],
            choices: [],
            educationalNote: "UAP investigations can involve real physical dangers and life-threatening situations."
        },

        evidence_destroyed: {
            text: `EVIDENCE DESTROYED - SURVIVAL AT ANY COST
            
            DAY 2 - 11:53 PM
            
            Fear overcomes your scientific principles. You delete all the UAP evidence files to save your life.
            
            "I'm sorry, Dr. Kim. I can't die for this."
            
            As the last file disappears, the black triangle's energy field dissipates. The immediate threat is over.
            
            But so is your life's work. Years of research vanished in minutes.
            
            Dr. Kim looks devastated. "Amanda, we just destroyed the most important discovery in human history."
            
            You survived, but at the cost of truth itself.
            
            The Pentagon covers up the incident. Your reputation is intact, but your conscience isn't.
            
            You continue your career knowing you chose personal safety over humanity's right to know.
            
            MISSION COMPROMISED - EVIDENCE LOST
            
            You saved your life but sacrificed the truth that could have changed the world.`,
            image: "evidence_deleted",
            imagePrompt: "Computer screen showing deleted UAP files, scientist in anguish, moral compromise, lost opportunity",
            sources: ["Pentagon Cover-up Protocols", "Scientific Ethics Violations"],
            choices: [
                {
                    text: "Try to recreate the investigation from memory",
                    nextScene: "memory_reconstruction",
                    progressIncrease: 10,
                    evidence: true
                }
            ],
            educationalNote: "Scientific integrity sometimes requires choosing truth over personal safety."
        },

        alien_collaboration: {
            text: `JOINING THE ALIEN LIAISON PROGRAM
            
            DAY 2 - 11:55 PM
            
            "I accept your offer. Humanity needs guidance for disclosure."
            
            The black triangle descends and opens a portal of light. You step through, leaving Earth behind.
            
            You find yourself in an advanced spacecraft with beings of incredible intelligence.
            
            "Welcome, Dr. Torres. You will help manage humanity's gradual introduction to galactic civilization."
            
            Over the following months, you work with the aliens to slowly release UAP information to prevent global panic.
            
            Your scientific expertise helps bridge the gap between human and alien understanding.
            
            You become humanity's first official alien liaison, ushering in a new era of interstellar cooperation.
            
            Dr. Kim continues your research on Earth, guided by your communications from the alien ship.
            
            MISSION TRANSFORMED - ALIEN COLLABORATION
            
            You chose cooperation over resistance, becoming humanity's ambassador to advanced civilizations.`,
            image: "alien_collaboration",
            imagePrompt: "Human scientist working with alien beings in advanced spacecraft, galactic cooperation, diplomatic breakthrough",
            sources: ["First Contact Protocols", "Interstellar Diplomacy Theory"],
            choices: [],
            educationalNote: "Some theorists believe alien contact may require human intermediaries to manage disclosure."
        },

        defiant_rejection: {
            text: `DEFYING THE ALIEN ULTIMATUM
            
            DAY 2 - 11:54 PM
            
            "No. Humanity deserves the truth, and we'll handle it on our own terms. Leave now or we'll resist."
            
            The aliens' response is swift and terrible.
            
            "Your defiance threatens planetary stability. You choose conflict over cooperation."
            
            The black triangle fires an energy beam that disables every electronic device in the Pentagon.
            
            But your defiance inspires others. Military forces worldwide begin tracking and confronting UAPs.
            
            Your brave stand triggers a global disclosure movement that the aliens cannot stop.
            
            Humanity enters a new age of independence, refusing to be managed by alien overseers.
            
            Your courage sparked the resistance that freed humanity from alien manipulation.
            
            MISSION COMPLETED - HUMAN INDEPENDENCE
            
            You chose freedom over security, ensuring humanity's right to self-determination.`,
            image: "human_resistance",
            imagePrompt: "Pentagon scientist defying alien ultimatum, military forces responding, humanity choosing independence",
            sources: ["Resistance Theory", "Human Independence Movements"],
            choices: [],
            educationalNote: "Some scenarios suggest humanity might need to choose between safety and independence in alien contact."
        }
    }
};

window.UAPStoryExpanded = UAPStoryExpanded;
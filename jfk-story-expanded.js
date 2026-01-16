const JFKStoryExpanded = {
    sealed: true, // Set to true to seal this case
    releaseDate: "Coming Soon", // Optional: "Coming Soon" or specific date
    scenes: {
        intro: {
            text: `THE CLASSIFIED FILES: JFK ASSASSINATION INVESTIGATION
            
            DAY 1 - FRIDAY, 11:33 PM
            
You are investigative historian Dr. Elena Rodriguez, exhausted after a long day at the National Archives. The research facility is nearly empty - just security guards and the night shift custodial team remain.

Suddenly, the senior archivist approaches with a secure briefcase. "Dr. Rodriguez, this just arrived through classified channels. It's marked for your eyes only - something about your JFK research request from last month."

Inside: Previously unseen CIA, FBI, and Warren Commission documents that were supposed to remain classified until 2039. Your hands shake as you realize these files could rewrite American history.

The archivist whispers urgently, "Elena, I just got a call from someone claiming to be from the National Security Council. They know about the files. This could be the historical breakthrough you've been seeking... or it could destroy your career."

A handwritten note tucked between the documents reads: "The truth about November 22, 1963 was buried with the witnesses. Time is running out before these disappear forever. Start with the ballistics. -A Patriot"

Your secure phone rings. Unknown caller. You answer cautiously.

"Dr. Rodriguez? You don't know me, but I was there in Dallas. Those documents... they tell the real story. But powerful people will try to stop you. You have 48 hours before they invoke national security to seize everything. The American people deserve the truth."

The line goes dead.`,
            image: "archives_investigation",
            imagePrompt: "Late night National Archives research room with female historian examining classified JFK documents, dramatic lighting, conspiracy thriller atmosphere",
            sources: ["National Archives JFK Collection", "Classified CIA Files", "Fictional historical thriller narrative"],
            choices: [
                {
                    text: "Examine the ballistics evidence and trajectory analysis first",
                    nextScene: "ballistics_analysis",
                    progressIncrease: 10,
                    factual: true,
                    evidence: true
                },
                {
                    text: "Call your contact at the JFK Research Center to verify the caller",
                    nextScene: "research_center_call",
                    progressIncrease: 8
                },
                {
                    text: "Scan all documents for the most explosive revelations",
                    nextScene: "document_scanning_night",
                    progressIncrease: 12,
                    evidence: true
                },
                {
                    text: "Test your knowledge of the official Warren Commission findings",
                    nextScene: "warren_commission_quiz",
                    progressIncrease: 5,
                    quizMode: true
                },
                {
                    text: "Authenticate the documents before proceeding",
                    nextScene: "document_authentication",
                    progressIncrease: 8,
                    evidence: true
                }
            ],
            educationalNote: "This fictional 48-hour deadline creates dramatic tension while exploring real historical questions about the JFK assassination."
        },

        ballistics_analysis: {
            text: `BALLISTICS EVIDENCE REVIEW - CLASSIFIED ANALYSIS
            
            DAY 1 - 11:55 PM

You spread out the official ballistics reports across your desk. The technical analysis is complex and contradictory:

🎯 BALLISTICS EVIDENCE - CLASSIFIED REVIEW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Location: Dealey Plaza, Dallas, Texas
Date: November 22, 1963, 12:30 PM
Weather: Clear, light wind from the southeast
Primary Location: Texas School Book Depository, 6th Floor
Distance to Target: 265 feet (final shot)
Rifle: Mannlicher-Carcano, bolt-action, 6.5mm
Total Shots Fired: 3 (Warren Commission conclusion)
Hit Ratio: 2 of 3 shots struck the President
Time Frame: 5.6 seconds (Zapruder film analysis)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Your research assistant looks over your shoulder. "Dr. Rodriguez, look at this trajectory analysis. The angles don't match what the Commission claimed."

You notice handwritten notes in red ink: "Acoustic evidence suggests 4 shots, not 3. Grassy knoll trajectory confirmed by multiple witnesses."

Your secure phone buzzes. Encrypted text: "The single bullet theory was manufactured to fit a predetermined conclusion. Look deeper."

EXAMINE THE EVIDENCE: Choose your next investigative path carefully.`,
            image: "dealey_plaza_analysis",
            imagePrompt: "Detailed ballistics analysis with trajectory maps of Dealey Plaza overlaid on historical photographs, forensic investigation setting",
            sources: ["Warren Commission Report", "House Select Committee on Assassinations", "Classified FBI Ballistics Analysis"],
            choices: [
                {
                    text: "Analyze the acoustic evidence from police recordings",
                    nextScene: "acoustic_evidence_study",
                    progressIncrease: 15,
                    factual: true,
                    evidence: true
                },
                {
                    text: "Study the Zapruder film frame-by-frame analysis",
                    nextScene: "zapruder_film_analysis",
                    progressIncrease: 12,
                    factual: true,
                    evidence: true
                },
                {
                    text: "Examine witness testimony about additional shots",
                    nextScene: "witness_testimony_review",
                    progressIncrease: 10,
                    evidence: true
                },
                {
                    text: "Cross-reference the single bullet theory with medical evidence",
                    nextScene: "medical_evidence_review",
                    progressIncrease: 13,
                    factual: true,
                    evidence: true
                }
            ],
            educationalNote: "The ballistics evidence in the JFK case remains one of the most debated aspects, with multiple scientific analyses reaching different conclusions."
        },

        acoustic_evidence_study: {
            text: `ACOUSTIC ANALYSIS - BREAKTHROUGH DISCOVERY
            
            DAY 2 - 12:20 AM

You put on headphones and listen to the Dallas Police Department radio recordings from November 22, 1963. The audio quality is poor, but sophisticated modern analysis reveals crucial details.

🔊 ACOUSTIC EVIDENCE ANALYSIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Recording Source: DPD Radio Channel 1
Time: 12:30:47 - 12:30:52 PM (5 seconds)
Analysis Method: Impulse pattern matching
Probable Gunshots Detected: 4 distinct impulses
Location Indicators: 2 from Book Depository area, 2 from Grassy Knoll area
Confidence Level: 95% probability of gunfire
Expert Conclusion: Multiple shooter scenario supported
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Your research assistant gasps. "Elena, this completely contradicts the Warren Commission's lone gunman theory."

A classified memo tucked between pages reads: "Acoustic analysis suppressed from final report. National security implications if multiple shooters confirmed."

Your phone rings. The same mysterious voice: "You're getting close to the truth. The acoustic evidence was buried because it proved conspiracy. But be careful - others have tried to expose this."

The weight of American history sits heavy on your shoulders.`,
            image: "audio_analysis_lab",
            imagePrompt: "Audio forensics laboratory with waveform analysis of police radio recordings from 1963, sophisticated modern equipment analyzing historical audio",
            sources: ["House Select Committee on Assassinations", "Classified FBI Audio Analysis", "Dallas Police Department Records"],
            choices: [
                {
                    text: "Cross-reference acoustic findings with witness positions",
                    nextScene: "witness_position_mapping",
                    progressIncrease: 18,
                    factual: true,
                    evidence: true
                },
                {
                    text: "Examine the suppressed sections of the Warren Commission report",
                    nextScene: "suppressed_warren_sections",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Study the CIA files on Lee Harvey Oswald's connections",
                    nextScene: "oswald_cia_connections",
                    progressIncrease: 15,
                    evidence: true
                },
                {
                    text: "Test your knowledge of the House Committee findings",
                    nextScene: "house_committee_quiz",
                    progressIncrease: 8,
                    quizMode: true,
                    quizAnswer: true
                }
            ],
            educationalNote: "The House Select Committee on Assassinations (1976-1979) concluded there was likely a conspiracy based on acoustic evidence, contradicting the Warren Commission."
        },

        witness_position_mapping: {
            text: `WITNESS TESTIMONY CORRELATION - PATTERN EMERGES
            
            DAY 2 - 12:45 AM

You create a detailed map of Dealey Plaza, marking the positions of over 178 witnesses. A disturbing pattern emerges when you overlay their testimonies with the acoustic evidence.

📍 WITNESS POSITION ANALYSIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Total Witnesses: 178 people present in Dealey Plaza
Shots from Book Depository: 49 witnesses (27.5%)
Shots from Grassy Knoll: 78 witnesses (43.8%)
Shots from Multiple Locations: 35 witnesses (19.7%)
Uncertain/No Opinion: 16 witnesses (9.0%)
Secret Service Reaction: Immediate turn toward grassy knoll
Key Witness Deaths: 18 within 3 years (statistical anomaly)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

"My God, Elena," your assistant whispers. "Nearly half the witnesses heard shots from the grassy knoll, but the Warren Commission ignored most of them."

A handwritten note emerges from the files: "Witness intimidation documented. Several changed stories after FBI visits. Some key witnesses died under suspicious circumstances."

Your secure phone buzzes with an encrypted message: "The witness pattern proves multiple shooters. But look at who died afterward - that's the real story."

The conspiracy deepens with each document.`,
            image: "dealey_plaza_witness_map",
            imagePrompt: "Aerial view of Dealey Plaza with detailed witness position markers and trajectory lines, forensic mapping analysis",
            sources: ["Warren Commission Testimony Volumes", "FBI Witness Interviews", "Classified Witness Protection Documents"],
            choices: [
                {
                    text: "Investigate the suspicious deaths of key witnesses",
                    nextScene: "witness_death_investigation",
                    progressIncrease: 25,
                    evidence: true
                },
                {
                    text: "Examine the medical evidence from Parkland Hospital",
                    nextScene: "parkland_medical_evidence",
                    progressIncrease: 20,
                    factual: true,
                    evidence: true
                },
                {
                    text: "Study the Secret Service's immediate response patterns",
                    nextScene: "secret_service_response",
                    progressIncrease: 15,
                    evidence: true
                },
                {
                    text: "Review the classified files on potential conspirators",
                    nextScene: "conspirator_files",
                    progressIncrease: 22,
                    evidence: true
                },
                {
                    text: "Map the connections between witnesses, locations, and suspects 🔗",
                    nextScene: "jfk_evidence_mapped",
                    progressIncrease: 25,
                    evidence: true,
                    miniGame: {
                        type: 'evidence_connection',
                        title: 'JFK Evidence Board',
                        description: 'Connect the witnesses, locations, and suspects to reveal the conspiracy.'
                    }
                }
            ],
            educationalNote: "The statistical anomaly of witness deaths following the JFK assassination has been studied by researchers, though causation versus correlation remains debated."
        },

        jfk_evidence_mapped: {
            text: `EVIDENCE CONNECTION BOARD - CONSPIRACY MAPPED

            DAY 2 - 3:00 AM

Your evidence board reveals the interconnected web of the JFK assassination:

🔗 CONSPIRACY NETWORK ANALYSIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
OSWALD ←→ CIA TRAINING
- Military intelligence background
- Defection to USSR facilitated
- Return to US expedited

OSWALD ←→ RUBY
- Both in Dallas before assassination
- Ruby seen at police station
- Phone records show connections

GRASSY KNOLL ←→ WITNESSES
- 51 witnesses heard shots from knoll
- Witness testimony suppressed
- Many witnesses died mysteriously

CIA TRAINING ←→ CUBA OPS
- Bay of Pigs connection
- Anti-Castro operations
- Shared personnel and resources

INSIGHT:
The evidence points to a coordinated operation involving intelligence assets, not a lone gunman acting independently.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "jfk_conspiracy_board",
            imagePrompt: "Investigation board with photos of Oswald, Ruby, Dealey Plaza connected by red string, noir detective atmosphere",
            sources: ["Warren Commission Documents", "HSCA Investigation", "Declassified CIA Files"],
            miniGameData: {
                type: 'evidence_connection',
                evidence: [
                    { id: 'oswald', label: 'Lee Harvey Oswald', icon: '👤', x: 50, y: 20 },
                    { id: 'cia', label: 'CIA Training', icon: '🕵️', x: 20, y: 40 },
                    { id: 'ruby', label: 'Jack Ruby', icon: '👤', x: 80, y: 40 },
                    { id: 'knoll', label: 'Grassy Knoll', icon: '📍', x: 35, y: 70 },
                    { id: 'witnesses', label: 'Witnesses', icon: '👥', x: 65, y: 70 }
                ],
                connections: [
                    { from: 'oswald', to: 'cia' },
                    { from: 'oswald', to: 'ruby' },
                    { from: 'knoll', to: 'witnesses' },
                    { from: 'cia', to: 'knoll' }
                ],
                maxHints: 3,
                evidenceReward: 'JFK Conspiracy Map',
                progressReward: 25
            },
            choices: [
                {
                    text: "Investigate the suspicious deaths of key witnesses",
                    nextScene: "witness_death_investigation",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Examine Operation MOCKINGBIRD's role",
                    nextScene: "mockingbird_operation",
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Return to witness testimony analysis",
                    nextScene: "witness_testimony_analysis",
                    progressIncrease: 5
                }
            ],
            educationalNote: "Evidence boards help investigators visualize complex relationships between suspects, witnesses, and locations."
        },

        witness_death_investigation: {
            text: `WITNESS DEATHS - STATISTICAL IMPOSSIBILITY
            
            DAY 2 - 1:15 AM

You examine the mortality records of key JFK assassination witnesses. The numbers are chilling and statistically impossible.

☠️ WITNESS MORTALITY ANALYSIS - CLASSIFIED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Key Witnesses Dead (1963-1966): 18 individuals
Expected Deaths (statistical): 0.3 individuals
Probability Calculation: 100,000 to 1 against
Death Classifications:
- Murdered: 6 cases
- Suicide: 3 cases
- Heart Attack (under 50): 4 cases
- Accident: 3 cases
- Cancer (rapid onset): 2 cases
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Notable Cases:
- Dorothy Kilgallen: Journalist investigating case, found dead 1965
- David Ferrie: Former CIA operative, died night before testimony
- Lee Bowers: Traffic control tower witness, died in car crash 1966
- Gary Underhill: CIA agent who claimed agency involved, shot 1964

Your research assistant turns pale. "Elena, this isn't coincidence. Someone was systematically eliminating witnesses."

A classified memo surfaces: "Operation MOCKINGBIRD assets deployed to manage witness testimony. Extreme measures authorized to protect national security."

The truth becomes terrifyingly clear.`,
            image: "witness_files_morgue",
            imagePrompt: "Dark filing room with witness death certificates and mortality statistics, ominous investigative atmosphere with dramatic shadows",
            sources: ["Classified FBI Mortality Analysis", "CIA Operations Files", "Congressional Death Investigation Records"],
            choices: [
                {
                    text: "Examine Operation MOCKINGBIRD's role in the cover-up",
                    nextScene: "mockingbird_operation",
                    progressIncrease: 30,
                    evidence: true
                },
                {
                    text: "Study the final medical evidence from the autopsy",
                    nextScene: "autopsy_evidence_final",
                    progressIncrease: 25,
                    factual: true,
                    evidence: true
                },
                {
                    text: "Investigate the CIA-Mafia connection theories",
                    nextScene: "cia_mafia_investigation",
                    progressIncrease: 28,
                    evidence: true
                },
                {
                    text: "Prepare your final conclusions for publication",
                    nextScene: "final_conclusions",
                    progressIncrease: 20,
                    evidence: true
                }
            ],
            educationalNote: "The London Times calculated the odds of these witness deaths as 100,000 to 1 against chance, though critics debate the statistical methodology used."
        },

        final_conclusions: {
            text: `INVESTIGATION COMPLETE - THE TRUTH REVEALED
            
            DAY 2 - 2:30 AM

After hours of analyzing classified documents, you compile your explosive findings. The evidence is overwhelming and undeniable.

📋 FINAL INVESTIGATION REPORT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CONCLUSION: Multiple Shooter Conspiracy Confirmed

Evidence Summary:
✓ Acoustic analysis proves 4 shots from 2 locations
✓ 78 witnesses reported shots from grassy knoll
✓ Medical evidence contradicts single bullet theory
✓ 18 key witnesses died under suspicious circumstances
✓ CIA operations files show active cover-up
✓ Warren Commission suppressed contradictory evidence

The assassination of President Kennedy was not the work of a lone gunman. Multiple shooters were involved in a coordinated conspiracy that was subsequently covered up by elements within the U.S. government for "national security" reasons.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Your phone rings. The mysterious caller one final time: "Dr. Rodriguez, you've uncovered the truth that's been buried for 60 years. The American people deserve to know. But be prepared for the consequences."

As dawn breaks, you realize you hold the most explosive historical revelation of the 20th century. The question now is: what will you do with it?

INVESTIGATION STATUS: COMPLETE
Historical Truth: REVEALED`,
            image: "final_revelation",
            imagePrompt: "Dramatic sunrise over Washington DC with classified documents spread across desk, moment of historical truth revelation",
            sources: ["Compiled Evidence Analysis", "Historical Truth Investigation"],
            choices: [
                {
                    text: "Publish your findings immediately to expose the truth",
                    nextScene: "truth_publication",
                    progressIncrease: 15,
                    evidence: true
                },
                {
                    text: "Contact major news outlets for coordinated release",
                    nextScene: "media_coordination",
                    progressIncrease: 12
                },
                {
                    text: "Submit findings to Congressional oversight committee",
                    nextScene: "congressional_submission",
                    progressIncrease: 10
                },
                {
                    text: "Start a new JFK case investigation",
                    nextScene: "intro",
                    progressIncrease: 5
                }
            ],
            educationalNote: "This fictional investigation explores real historical questions that continue to fascinate researchers and the American public."
        },

        warren_commission_quiz: {
            text: `KNOWLEDGE ASSESSMENT - WARREN COMMISSION FINDINGS
            
            Before proceeding with the classified documents, test your knowledge of the official investigation.

QUESTION: What was the Warren Commission's primary conclusion about the JFK assassination?

This will help determine your baseline knowledge for the investigation ahead.`,
            image: "warren_commission_report",
            imagePrompt: "Official Warren Commission Report cover with government seal, formal investigation atmosphere",
            sources: ["Warren Commission Report 1964"],
            choices: [
                {
                    text: "Lee Harvey Oswald acted alone as the sole gunman",
                    nextScene: "ballistics_analysis",
                    quizAnswer: true,
                    progressIncrease: 10,
                    evidence: true
                },
                {
                    text: "Multiple shooters were involved in a conspiracy",
                    nextScene: "ballistics_analysis", 
                    quizAnswer: false,
                    progressIncrease: 5
                },
                {
                    text: "The evidence was inconclusive",
                    nextScene: "ballistics_analysis",
                    quizAnswer: false,
                    progressIncrease: 5
                },
                {
                    text: "Foreign government involvement was suspected",
                    nextScene: "ballistics_analysis",
                    quizAnswer: false,
                    progressIncrease: 5
                }
            ],
            educationalNote: "The Warren Commission concluded that Lee Harvey Oswald acted alone, though this finding has been extensively debated."
        },

        document_authentication: {
            text: `DOCUMENT VERIFICATION - AUTHENTICATION ANALYSIS
            
            DAY 1 - 11:50 PM

You carefully examine the physical documents for signs of authenticity. The papers bear all the hallmarks of genuine classified materials.

🔍 AUTHENTICATION CHECKLIST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Paper Quality: Government standard, correct watermarks
Classification Stamps: Authentic CIA/FBI markings
Typewriter Analysis: Period-appropriate IBM Selectric
Carbon Dating: Paper dated 1963-1979 (verified)
Security Features: Microprint, sequential serial numbers
Chain of Custody: National Archives transfer documents
Digital Analysis: No signs of modern forgery
Expert Opinion: 99.7% probability of authenticity
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

"These are real, Elena," your research assistant confirms. "Every technical indicator points to authentic government documents."

A verification stamp catches your eye: "EYES ONLY - COSMIC CLEARANCE REQUIRED - NOT FOR RELEASE UNTIL 2039"

Your secure phone displays a new message: "Authentication confirmed. These documents were never supposed to see daylight. Proceed carefully."

The documents are genuine. The investigation can proceed.`,
            image: "document_authentication_lab",
            imagePrompt: "Scientific document analysis laboratory with magnifying equipment examining classified papers under specialized lighting",
            sources: ["National Archives Authentication Protocols", "CIA Document Analysis Standards"],
            choices: [
                {
                    text: "Proceed to examine the ballistics evidence",
                    nextScene: "ballistics_analysis",
                    progressIncrease: 12,
                    evidence: true
                },
                {
                    text: "Study the timeline of events on November 22, 1963",
                    nextScene: "timeline_analysis",
                    progressIncrease: 10,
                    factual: true,
                    evidence: true
                },
                {
                    text: "Review classified witness protection files first",
                    nextScene: "witness_protection_files",
                    progressIncrease: 15,
                    evidence: true
                }
            ],
            educationalNote: "Document authentication is crucial in historical research, especially with classified materials that could reshape our understanding of major events."
        },

        research_center_call: {
            text: `CONTACTING THE JFK RESEARCH CENTER

You call your trusted contact at the JFK Research Center to verify the mysterious caller's identity.

📞 PHONE CONVERSATION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Your contact: "Elena, I've heard rumors about new documents surfacing. There's been unusual activity at Langley."

You: "Someone called claiming to have been in Dallas. They knew about my research."

Contact: "Be careful. Several researchers have been warned off this topic. But if those documents are authentic... this could change everything we know about Dallas."
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Your contact can't identify the caller but confirms something significant is happening in the JFK research community.`,
            image: "phone_call_research",
            imagePrompt: "Late night phone call in research office, JFK documents visible, tense conversation atmosphere",
            sources: ["JFK Research Community Records"],
            choices: [
                {
                    text: "Proceed with document examination",
                    nextScene: "ballistics_analysis",
                    progressIncrease: 10,
                    evidence: true
                },
                {
                    text: "Authenticate the documents first",
                    nextScene: "document_authentication",
                    progressIncrease: 8
                }
            ],
            educationalNote: "The JFK research community continues to analyze newly released documents and share findings."
        },

        document_scanning_night: {
            text: `SCANNING DOCUMENTS FOR KEY REVELATIONS

You quickly scan through the documents looking for the most explosive information:

📄 DOCUMENT HIGHLIGHTS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• CIA memo re: "Oswald surveillance prior to Dallas"
• FBI report: "Alternative shooter positions analyzed"
• Warren Commission: "Suppressed witness testimonies"
• Medical: "Conflicting autopsy observations"
• Secret Service: "Motorcade security failures"
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Each document opens new questions about the official narrative.`,
            image: "document_scanning",
            imagePrompt: "Historian rapidly scanning classified documents, highlighted passages visible, research urgency",
            sources: ["Classified Document Collection"],
            choices: [
                {
                    text: "Focus on ballistics evidence",
                    nextScene: "ballistics_analysis",
                    progressIncrease: 12,
                    evidence: true
                },
                {
                    text: "Examine medical evidence",
                    nextScene: "medical_evidence_review",
                    progressIncrease: 15,
                    evidence: true
                },
                {
                    text: "Study CIA connections",
                    nextScene: "oswald_cia_connections",
                    progressIncrease: 18,
                    evidence: true
                }
            ],
            educationalNote: "Researchers continue to find new information in declassified JFK assassination documents."
        },

        zapruder_film_analysis: {
            text: `ZAPRUDER FILM FRAME-BY-FRAME ANALYSIS

You examine the enhanced Zapruder film with modern digital analysis:

🎬 ZAPRUDER FILM ANALYSIS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Frame 313: Fatal head shot visible
Direction of movement: Back and to the left
Shot trajectory implication: Inconsistent with Depository alone
Time between shots: 1.6 seconds (some sequences)
Rifle capability: 2.3 seconds minimum between shots
Frames missing: 4 frames (frames 208-211)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The film raises more questions than answers about shot directions and timing.`,
            image: "zapruder_analysis",
            imagePrompt: "Digital enhancement of Zapruder film frames, forensic analysis screens, historical footage examination",
            sources: ["National Archives Zapruder Film", "Digital Enhancement Studies"],
            choices: [
                {
                    text: "Cross-reference with acoustic evidence",
                    nextScene: "acoustic_evidence_study",
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Examine witness testimony",
                    nextScene: "witness_testimony_review",
                    progressIncrease: 15,
                    evidence: true
                },
                {
                    text: "Review medical evidence",
                    nextScene: "medical_evidence_review",
                    progressIncrease: 16,
                    evidence: true
                }
            ],
            educationalNote: "The Zapruder film remains the most important visual evidence of the assassination."
        },

        witness_testimony_review: {
            text: `WITNESS TESTIMONY COMPREHENSIVE REVIEW

You catalog witness statements from that day:

👥 WITNESS TESTIMONY SUMMARY:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Total witnesses interviewed: 178
Reported shots from Depository: 49 (27%)
Reported shots from Grassy Knoll: 78 (44%)
Reported multiple locations: 35 (20%)
Uncertain: 16 (9%)

Key testimony patterns:
• Many witnesses ran toward grassy knoll
• Secret Service agents looked toward knoll
• Several witnesses reported seeing smoke
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "witness_testimony",
            imagePrompt: "Interview transcripts and witness statements spread across desk, Dealey Plaza diagram",
            sources: ["Warren Commission Testimony", "HSCA Witness Interviews"],
            choices: [
                {
                    text: "Map witness positions",
                    nextScene: "witness_position_mapping",
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Investigate suspicious witness deaths",
                    nextScene: "witness_death_investigation",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Review medical evidence",
                    nextScene: "medical_evidence_review",
                    progressIncrease: 15,
                    evidence: true
                }
            ],
            educationalNote: "Witness testimony remains divided about the origin of the shots in Dealey Plaza."
        },

        medical_evidence_review: {
            text: `MEDICAL EVIDENCE ANALYSIS

You examine the medical records and autopsy findings:

🏥 MEDICAL EVIDENCE SUMMARY:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Parkland Hospital Observations:
• Entry wound: Back of head (doctors' initial observation)
• Exit wound: Front right side (inconsistent with official story)

Bethesda Autopsy:
• Wound descriptions differ from Parkland
• Photos show different wound locations
• Brain examination records missing

Single Bullet Theory Problems:
• CE 399 (magic bullet) nearly pristine
• Seven wounds from one bullet considered impossible by critics
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "medical_evidence",
            imagePrompt: "Medical records and anatomical diagrams showing wound trajectory analysis, forensic medical examination",
            sources: ["Parkland Hospital Records", "Bethesda Autopsy Report", "HSCA Medical Panel"],
            choices: [
                {
                    text: "Examine Parkland doctors' testimony",
                    nextScene: "parkland_medical_evidence",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Review autopsy evidence in detail",
                    nextScene: "autopsy_evidence_final",
                    progressIncrease: 22,
                    evidence: true
                },
                {
                    text: "Cross-reference with ballistics",
                    nextScene: "ballistics_analysis",
                    progressIncrease: 15,
                    evidence: true
                }
            ],
            educationalNote: "Medical evidence in the JFK case remains highly contested among researchers and medical experts."
        },

        suppressed_warren_sections: {
            text: `SUPPRESSED WARREN COMMISSION SECTIONS

You discover sections that were classified and excluded from the public report:

📋 SUPPRESSED FINDINGS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Evidence of CIA surveillance of Oswald
• FBI failure to share intelligence
• Contradictory witness statements excluded
• Alternative trajectory analyses rejected
• Questions about Oswald's intelligence connections
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A handwritten note reads: "Commission mandate was to calm the nation, not find complete truth."`,
            image: "suppressed_documents",
            imagePrompt: "Classified Warren Commission documents with REDACTED stamps, hidden files being revealed",
            sources: ["Classified Warren Commission Files", "NARA Recent Releases"],
            choices: [
                {
                    text: "Investigate CIA involvement",
                    nextScene: "oswald_cia_connections",
                    progressIncrease: 22,
                    evidence: true
                },
                {
                    text: "Examine witness death patterns",
                    nextScene: "witness_death_investigation",
                    progressIncrease: 25,
                    evidence: true
                },
                {
                    text: "Prepare conclusions",
                    nextScene: "final_conclusions",
                    progressIncrease: 20,
                    evidence: true
                }
            ],
            educationalNote: "Many Warren Commission documents remained classified for decades and some remain redacted today."
        },

        oswald_cia_connections: {
            text: `OSWALD'S CIA CONNECTIONS INVESTIGATED

Classified files reveal disturbing connections:

🕵️ OSWALD - INTELLIGENCE CONNECTIONS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Marine radar operator with security clearance
• Defected to USSR, returned without prosecution
• FBI informant file (since destroyed)
• CIA 201 file opened before defection
• Association with known intelligence assets
• New Orleans activities with CIA-connected groups
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A classified memo states: "Oswald of continuing interest to the Agency."`,
            image: "oswald_cia_files",
            imagePrompt: "CIA files on Lee Harvey Oswald, surveillance photos, intelligence connections diagram",
            sources: ["CIA 201 File", "HSCA Intelligence Investigation"],
            choices: [
                {
                    text: "Investigate CIA-Mafia connections",
                    nextScene: "cia_mafia_investigation",
                    progressIncrease: 25,
                    evidence: true
                },
                {
                    text: "Examine Operation Mockingbird",
                    nextScene: "mockingbird_operation",
                    progressIncrease: 22,
                    evidence: true
                },
                {
                    text: "Review witness deaths",
                    nextScene: "witness_death_investigation",
                    progressIncrease: 20,
                    evidence: true
                }
            ],
            educationalNote: "Oswald's intelligence connections remain one of the most debated aspects of the assassination."
        },

        house_committee_quiz: {
            text: `KNOWLEDGE CHECK - HOUSE COMMITTEE FINDINGS

QUESTION: What did the House Select Committee on Assassinations conclude in 1979?

This committee reinvestigated the JFK assassination 15 years after the Warren Commission.`,
            image: "hsca_report",
            imagePrompt: "House Select Committee on Assassinations report cover, congressional investigation",
            sources: ["HSCA Final Report 1979"],
            choices: [
                {
                    text: "Probable conspiracy based on acoustic evidence",
                    nextScene: "acoustic_evidence_study",
                    quizAnswer: true,
                    progressIncrease: 12,
                    evidence: true
                },
                {
                    text: "Warren Commission was correct",
                    nextScene: "acoustic_evidence_study",
                    quizAnswer: false,
                    progressIncrease: 5
                },
                {
                    text: "Foreign government involvement confirmed",
                    nextScene: "acoustic_evidence_study",
                    quizAnswer: false,
                    progressIncrease: 5
                }
            ],
            educationalNote: "The HSCA concluded in 1979 that JFK was 'probably assassinated as a result of a conspiracy.'"
        },

        parkland_medical_evidence: {
            text: `PARKLAND HOSPITAL MEDICAL TESTIMONY

Doctors who treated Kennedy at Parkland described wounds differently than the official record:

🏥 PARKLAND DOCTORS' OBSERVATIONS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Dr. Malcolm Perry: "Entrance wound in the throat"
Dr. Charles Carrico: "Small wound in front of neck"
Dr. Kemp Clark: "Large wound in back of head"
Dr. Robert McClelland: "Exit wound in back of skull"

All initially described wounds inconsistent with shots from behind.

Later, under pressure, some modified statements.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "parkland_hospital",
            imagePrompt: "Parkland Hospital emergency room, medical staff testimony, historical medical evidence",
            sources: ["Parkland Hospital Records", "Doctor Testimony Transcripts"],
            choices: [
                {
                    text: "Compare to autopsy findings",
                    nextScene: "autopsy_evidence_final",
                    progressIncrease: 22,
                    evidence: true
                },
                {
                    text: "Examine witness testimony",
                    nextScene: "witness_position_mapping",
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Prepare final conclusions",
                    nextScene: "final_conclusions",
                    progressIncrease: 25,
                    evidence: true
                }
            ],
            educationalNote: "The discrepancy between Parkland doctors' observations and the official autopsy remains controversial."
        },

        secret_service_response: {
            text: `SECRET SERVICE RESPONSE ANALYSIS

Examining the Secret Service reaction to the shots:

🛡️ SECRET SERVICE FAILURES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Motorcade route changed last minute
• Security protocols not followed
• Agents reportedly out drinking night before
• Slow response to initial shots
• Direction of agent movement: toward grassy knoll
• Limousine slowed rather than accelerated
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Several agents immediately turned toward the grassy knoll area, suggesting they perceived shots from that direction.`,
            image: "secret_service_response",
            imagePrompt: "Secret Service agents responding to shots, Dealey Plaza, presidential motorcade",
            sources: ["Secret Service Records", "Agent Testimony"],
            choices: [
                {
                    text: "Examine witness positions",
                    nextScene: "witness_position_mapping",
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Review conspirator files",
                    nextScene: "conspirator_files",
                    progressIncrease: 22,
                    evidence: true
                },
                {
                    text: "Prepare conclusions",
                    nextScene: "final_conclusions",
                    progressIncrease: 20,
                    evidence: true
                }
            ],
            educationalNote: "Secret Service security failures on November 22, 1963 have been extensively documented."
        },

        conspirator_files: {
            text: `CLASSIFIED FILES ON POTENTIAL CONSPIRATORS

You examine files on individuals connected to assassination theories:

🗂️ PERSONS OF INTEREST:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• David Ferrie: CIA asset, Oswald connection
• Clay Shaw: CIA contact, Garrison investigation target
• Jack Ruby: Organized crime ties, killed Oswald
• Carlos Marcello: Mafia boss, Castro connections
• Santos Trafficante: Florida mob, CIA anti-Castro plots
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The web of connections suggests coordination between intelligence agencies and organized crime.`,
            image: "conspirator_files",
            imagePrompt: "FBI and CIA files on assassination suspects, connection diagram, intelligence investigation",
            sources: ["FBI Investigation Files", "CIA Operations Records"],
            choices: [
                {
                    text: "Investigate CIA-Mafia alliance",
                    nextScene: "cia_mafia_investigation",
                    progressIncrease: 25,
                    evidence: true
                },
                {
                    text: "Examine Operation Mockingbird",
                    nextScene: "mockingbird_operation",
                    progressIncrease: 22,
                    evidence: true
                },
                {
                    text: "Prepare final conclusions",
                    nextScene: "final_conclusions",
                    progressIncrease: 20,
                    evidence: true
                }
            ],
            educationalNote: "Investigations have revealed connections between various persons of interest, though direct proof of conspiracy remains elusive."
        },

        mockingbird_operation: {
            text: `OPERATION MOCKINGBIRD AND MEDIA CONTROL

You discover evidence of CIA media manipulation:

📺 OPERATION MOCKINGBIRD:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• CIA program to influence media coverage
• Journalists on CIA payroll
• News stories planted to support official narrative
• Critics discredited as "conspiracy theorists"
• Term "conspiracy theory" promoted to dismiss questions
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A memo states: "Countering conspiracy theories remains a priority."

The media manipulation helped cement the lone gunman narrative.`,
            image: "mockingbird_operation",
            imagePrompt: "CIA Operation Mockingbird documents, media manipulation evidence, propaganda campaign",
            sources: ["Church Committee CIA Hearings", "Declassified Mockingbird Files"],
            choices: [
                {
                    text: "Examine witness deaths",
                    nextScene: "witness_death_investigation",
                    progressIncrease: 25,
                    evidence: true
                },
                {
                    text: "Review CIA-Mafia connections",
                    nextScene: "cia_mafia_investigation",
                    progressIncrease: 22,
                    evidence: true
                },
                {
                    text: "Prepare final conclusions",
                    nextScene: "final_conclusions",
                    progressIncrease: 28,
                    evidence: true
                }
            ],
            educationalNote: "Operation Mockingbird was a real CIA program to influence media, confirmed by the Church Committee."
        },

        autopsy_evidence_final: {
            text: `AUTOPSY EVIDENCE - FINAL ANALYSIS

Comparing all medical evidence reveals troubling discrepancies:

📋 AUTOPSY DISCREPANCIES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Photos don't match witness descriptions
• Brain weight inconsistent with damage described
• Chain of custody problems documented
• Pathologists inexperienced with gunshot wounds
• Key evidence (brain, tissue slides) now missing
• Multiple witnesses dispute photo authenticity
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The medical evidence suggests the official record may have been altered.`,
            image: "autopsy_evidence",
            imagePrompt: "Autopsy documentation analysis, medical forensics review, classified medical files",
            sources: ["Bethesda Autopsy Records", "ARRB Medical Investigation"],
            choices: [
                {
                    text: "Review CIA involvement",
                    nextScene: "oswald_cia_connections",
                    progressIncrease: 22,
                    evidence: true
                },
                {
                    text: "Examine media manipulation",
                    nextScene: "mockingbird_operation",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Prepare final conclusions",
                    nextScene: "final_conclusions",
                    progressIncrease: 30,
                    evidence: true
                }
            ],
            educationalNote: "The JFK autopsy remains one of the most contested aspects of the assassination investigation."
        },

        cia_mafia_investigation: {
            text: `CIA-MAFIA ALLIANCE INVESTIGATION

Evidence reveals cooperation between the CIA and organized crime:

🤝 CIA-MAFIA OPERATIONS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Joint plots to assassinate Castro
• Mob provided operational support for CIA
• Same individuals connected to both JFK and Castro plots
• Jack Ruby's organized crime ties documented
• CIA destroyed records of these operations
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The same network targeting Castro may have turned on Kennedy.`,
            image: "cia_mafia_connection",
            imagePrompt: "CIA and Mafia connection documents, organized crime files, intelligence operations evidence",
            sources: ["Church Committee Findings", "HSCA Organized Crime Report"],
            choices: [
                {
                    text: "Examine witness deaths",
                    nextScene: "witness_death_investigation",
                    progressIncrease: 25,
                    evidence: true
                },
                {
                    text: "Review Oswald connections",
                    nextScene: "oswald_cia_connections",
                    progressIncrease: 22,
                    evidence: true
                },
                {
                    text: "Prepare final conclusions",
                    nextScene: "final_conclusions",
                    progressIncrease: 30,
                    evidence: true
                }
            ],
            educationalNote: "The CIA-Mafia plots against Castro are documented fact, revealed by the Church Committee."
        },

        truth_publication: {
            text: `PUBLISHING THE TRUTH

You decide to publish your findings:

📰 PUBLICATION STRATEGY:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Academic journal submission
• Press conference announcement
• Documentary cooperation
• Congressional testimony preparation
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Your findings will challenge the official narrative and spark renewed debate about the JFK assassination.

INVESTIGATION COMPLETE - TRUTH REVEALED`,
            image: "truth_publication",
            imagePrompt: "Press conference about JFK findings, historian presenting evidence, media attention",
            sources: ["Investigation Summary"],
            choices: [
                {
                    text: "Return to main menu",
                    nextScene: "mainMenu"
                },
                {
                    text: "Start new investigation",
                    nextScene: "intro"
                }
            ],
            educationalNote: "Researchers continue to publish new findings about the JFK assassination."
        },

        media_coordination: {
            text: `COORDINATING MEDIA RELEASE

You reach out to multiple news outlets to ensure wide coverage:

📺 MEDIA CONTACTS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Major newspapers: Interested in exclusive
• Television networks: Documentary potential
• Online platforms: Immediate reach
• International media: Global interest
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Coordinated release ensures the story cannot be suppressed.

INVESTIGATION COMPLETE`,
            image: "media_coordination",
            imagePrompt: "Media coordination meeting, multiple news outlets, coordinated release strategy",
            sources: ["Investigation Summary"],
            choices: [
                {
                    text: "Return to main menu",
                    nextScene: "mainMenu"
                },
                {
                    text: "Start new investigation",
                    nextScene: "intro"
                }
            ],
            educationalNote: "Coordinated media releases help ensure important findings reach the public."
        },

        congressional_submission: {
            text: `CONGRESSIONAL SUBMISSION

You submit your findings to Congressional oversight:

🏛️ CONGRESSIONAL PATH:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• House Oversight Committee briefed
• Senate Intelligence Committee notified
• Request for new investigation submitted
• Protection for documents secured
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Congress has the power to reopen the investigation based on new evidence.

INVESTIGATION COMPLETE`,
            image: "congressional_submission",
            imagePrompt: "Congressional submission of JFK findings, Capitol building, official proceedings",
            sources: ["Investigation Summary"],
            choices: [
                {
                    text: "Return to main menu",
                    nextScene: "mainMenu"
                },
                {
                    text: "Start new investigation",
                    nextScene: "intro"
                }
            ],
            educationalNote: "Congressional investigations have been instrumental in revealing JFK assassination information."
        },

        timeline_analysis: {
            text: `NOVEMBER 22, 1963 - TIMELINE ANALYSIS

You reconstruct the events of that day:

⏱️ CRITICAL TIMELINE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
11:40 AM - JFK arrives Love Field
11:55 AM - Motorcade departs
12:21 PM - Motorcade enters downtown Dallas
12:29 PM - Turn onto Houston Street
12:30 PM - Turn onto Elm Street
12:30:12 PM - First shot (approximate)
12:30:18 PM - Final shot
12:30:25 PM - Motorcade accelerates
12:38 PM - Arrival at Parkland Hospital
1:00 PM - JFK pronounced dead
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "timeline_analysis",
            imagePrompt: "Dallas motorcade timeline diagram, Dealey Plaza route map, historical documentation",
            sources: ["Warren Commission Timeline", "HSCA Reconstruction"],
            choices: [
                {
                    text: "Examine ballistics evidence",
                    nextScene: "ballistics_analysis",
                    progressIncrease: 12,
                    evidence: true
                },
                {
                    text: "Review witness testimony",
                    nextScene: "witness_testimony_review",
                    progressIncrease: 15,
                    evidence: true
                }
            ],
            educationalNote: "The precise timeline of events remains crucial to understanding the assassination."
        },

        witness_protection_files: {
            text: `CLASSIFIED WITNESS PROTECTION FILES

You discover files on witness protection and intimidation:

🔒 WITNESS HANDLING:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Several witnesses received FBI "visits"
• Stories changed after government contact
• Some witnesses placed in protection
• Others reported threats and intimidation
• Key witnesses died before testimony
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The pattern suggests organized effort to control witness testimony.`,
            image: "witness_protection",
            imagePrompt: "FBI witness files, protection documents, intimidation evidence, classified records",
            sources: ["Classified FBI Witness Files", "HSCA Witness Investigation"],
            choices: [
                {
                    text: "Investigate witness deaths",
                    nextScene: "witness_death_investigation",
                    progressIncrease: 25,
                    evidence: true
                },
                {
                    text: "Map witness positions",
                    nextScene: "witness_position_mapping",
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Review testimony",
                    nextScene: "witness_testimony_review",
                    progressIncrease: 15,
                    evidence: true
                }
            ],
            educationalNote: "Witness handling in the JFK case has been a subject of ongoing investigation and debate."
        },

        mainMenu: {
            text: "Returning to case selection...",
            image: "main_menu",
            imagePrompt: "Investigation files, case selection, detective desk",
            choices: []
        },

        oswald_background: {
            text: `LEE HARVEY OSWALD - COMPREHENSIVE BACKGROUND

            You dive deep into Oswald's life before Dallas:

            👤 OSWALD'S EARLY LIFE:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            Born: October 18, 1939, New Orleans
            Father: Died 2 months before his birth
            Childhood: Troubled, frequently moved
            Diagnoses: "Personality pattern disturbance"

            📋 MARINE SERVICE (1956-1959):
            • Radar operator - Atsugi Base, Japan
            • CIA U-2 spy plane operations at Atsugi
            • Security clearance for classified work
            • Learned Russian (unusual for enlisted Marine)
            • Court-martialed twice
            • "Hardship discharge" 1959
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            A classified note states: "Oswald had access to U-2 flight information. His defection posed security risk yet State Department facilitated his return."`,
            image: "oswald_marine_years",
            imagePrompt: "Lee Harvey Oswald in Marine uniform, Atsugi Japan base, U-2 surveillance operations, military intelligence",
            sources: ["Marine Corps Records", "CIA Atsugi Files"],
            choices: [
                {
                    text: "Investigate his Soviet defection",
                    nextScene: "oswald_soviet_defection",
                    progressIncrease: 15,
                    evidence: true
                },
                {
                    text: "Examine his intelligence connections",
                    nextScene: "oswald_cia_connections",
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Study his New Orleans activities",
                    nextScene: "oswald_new_orleans",
                    progressIncrease: 16,
                    evidence: true
                }
            ],
            educationalNote: "Oswald's time at Atsugi, where U-2 planes operated, and his subsequent defection have raised questions about intelligence connections."
        },

        oswald_soviet_defection: {
            text: `OSWALD'S SOVIET DEFECTION - INTELLIGENCE OPERATION?

            You examine Oswald's 2.5 years in the USSR:

            🇷🇺 SOVIET YEARS (1959-1962):
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            October 1959: Arrives Moscow, declares defection
            Offers: "Give Soviets radar secrets"
            Suicide attempt: After visa denied (questionable)
            Status: Granted residency, not citizenship
            Location: Minsk radio factory
            Wife: Marries Marina Prusakova (KGB connection?)

            📋 RETURN TO USA (June 1962):
            • State Department LOANS him money
            • No prosecution for defection
            • No FBI surveillance initially
            • Passport returned easily
            • Settled in Dallas-Fort Worth area
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            Question: Why would the U.S. government facilitate the return of a defector who offered radar secrets to the Soviets during the Cold War?`,
            image: "oswald_soviet_years",
            imagePrompt: "Oswald in Soviet Union, Minsk factory, Cold War defector, intelligence operation questions",
            sources: ["State Department Defector Files", "KGB Files Released Post-Cold War"],
            choices: [
                {
                    text: "Was he a U.S. intelligence asset?",
                    nextScene: "oswald_false_defector",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Examine his return to America",
                    nextScene: "oswald_return_america",
                    progressIncrease: 15,
                    evidence: true
                },
                {
                    text: "Study his wife Marina's background",
                    nextScene: "marina_oswald_background",
                    progressIncrease: 12,
                    evidence: true
                }
            ],
            educationalNote: "Oswald's easy return to America after defecting and offering secrets has led to speculation about a 'false defector' program."
        },

        oswald_false_defector: {
            text: `FALSE DEFECTOR PROGRAM - CIA OPERATION?

            Evidence suggests Oswald may have been a U.S. intelligence asset:

            🕵️ FALSE DEFECTOR THEORY:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            CIA "False Defector" Program:
            • Sent agents to USSR posing as defectors
            • Gather intelligence on Soviet methods
            • Assess KGB recruitment techniques
            • Report back upon return

            Oswald fits the profile:
            ✓ Military intelligence background
            ✓ Russian language training
            ✓ Easy exit from Marine Corps
            ✓ Funded trip to USSR
            ✓ Protected upon return
            ✓ No prosecution for defection
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            A classified memo notes: "ONI (Office of Naval Intelligence) has continuing interest in subject."`,
            image: "false_defector_program",
            imagePrompt: "CIA false defector program documents, Cold War intelligence operations, Oswald as potential agent",
            sources: ["CIA Defector Programs Files", "ONI Records"],
            choices: [
                {
                    text: "Investigate his New Orleans activities",
                    nextScene: "oswald_new_orleans",
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Examine George de Mohrenschildt connection",
                    nextScene: "de_mohrenschildt_connection",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Review FBI surveillance files",
                    nextScene: "fbi_oswald_surveillance",
                    progressIncrease: 15,
                    evidence: true
                }
            ],
            educationalNote: "The CIA ran false defector programs during the Cold War, and some researchers believe Oswald may have been part of such an operation."
        },

        oswald_new_orleans: {
            text: `OSWALD IN NEW ORLEANS - SUMMER 1963

            The summer before Dallas reveals disturbing connections:

            🌴 NEW ORLEANS ACTIVITIES:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            April-September 1963

            Pro-Castro Activities:
            • Founded "Fair Play for Cuba Committee" chapter
            • Leafleted on streets
            • Appeared on radio debates

            Anti-Castro Connections (same time!):
            • Office at 544 Camp Street - same building as:
              - Guy Banister (ex-FBI, anti-Castro operations)
              - Cuban exile groups
            • Seen with David Ferrie (CIA pilot)
            • Training at anti-Castro camps
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            How could Oswald be both pro-Castro AND connected to anti-Castro operations?`,
            image: "oswald_new_orleans",
            imagePrompt: "New Orleans 1963, 544 Camp Street, Oswald with Fair Play for Cuba pamphlets, anti-Castro operations",
            sources: ["Garrison Investigation Files", "HSCA New Orleans Report"],
            choices: [
                {
                    text: "Investigate Guy Banister",
                    nextScene: "guy_banister_investigation",
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Examine David Ferrie connection",
                    nextScene: "david_ferrie_investigation",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Study the Garrison investigation",
                    nextScene: "garrison_investigation",
                    progressIncrease: 22,
                    evidence: true
                }
            ],
            educationalNote: "Oswald's contradictory activities in New Orleans - appearing pro-Castro while connected to anti-Castro operatives - remain unexplained."
        },

        david_ferrie_investigation: {
            text: `DAVID FERRIE - CIA PILOT, OSWALD CONNECTION

            You investigate one of the most mysterious figures:

            👤 DAVID WILLIAM FERRIE:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            Background:
            • Pilot, former Eastern Airlines
            • CIA contract pilot (Bay of Pigs)
            • Civil Air Patrol leader (taught Oswald)
            • Worked for Carlos Marcello (mob boss)
            • Expert in hypnosis and cancer research

            Oswald Connection:
            • CAP leader when Oswald was member (1955)
            • Photo of them together exists
            • Both at Guy Banister's office 1963
            • Ferrie in Dallas day before assassination
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            February 22, 1967: Ferrie found dead - night before scheduled Garrison interview. Ruled "natural causes" despite two typed suicide notes.`,
            image: "david_ferrie",
            imagePrompt: "David Ferrie, unusual appearance with fake eyebrows, CIA pilot, mysterious death circumstances",
            sources: ["Garrison Investigation", "CIA Contract Files"],
            badges: ["truthSeeker"],
            choices: [
                {
                    text: "Investigate his death",
                    nextScene: "ferrie_death_mystery",
                    progressIncrease: 22,
                    evidence: true
                },
                {
                    text: "Examine Guy Banister connection",
                    nextScene: "guy_banister_investigation",
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Study Carlos Marcello connection",
                    nextScene: "carlos_marcello_investigation",
                    progressIncrease: 20,
                    evidence: true
                }
            ],
            educationalNote: "David Ferrie's death on the eve of his scheduled testimony remains one of the most suspicious events in JFK assassination history."
        },

        ferrie_death_mystery: {
            text: `DAVID FERRIE'S DEATH - CONVENIENT TIMING

            The circumstances of Ferrie's death raise serious questions:

            ☠️ DEATH CIRCUMSTANCES:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            Date: February 22, 1967
            Location: His New Orleans apartment
            Official cause: Berry aneurysm

            Suspicious elements:
            • Two typed suicide notes found
            • Coroner ruled "natural causes" despite notes
            • Died night before Garrison interview
            • Had told friends he was "a dead man"
            • Apartment appeared searched
            • Key documents missing
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            Ferrie told a reporter days before: "No matter what happens to me, I'm not going to kill myself."`,
            image: "ferrie_death_scene",
            imagePrompt: "Investigation of Ferrie's apartment, suspicious death scene, mysterious circumstances, evidence photos",
            sources: ["NOPD Death Investigation", "Garrison Files"],
            choices: [
                {
                    text: "Examine other suspicious deaths",
                    nextScene: "witness_death_investigation",
                    progressIncrease: 25,
                    evidence: true
                },
                {
                    text: "Study Garrison investigation",
                    nextScene: "garrison_investigation",
                    progressIncrease: 22,
                    evidence: true
                },
                {
                    text: "Review CIA connections",
                    nextScene: "oswald_cia_connections",
                    progressIncrease: 18,
                    evidence: true
                }
            ],
            educationalNote: "Ferrie's death eliminated a key potential witness just as Garrison was preparing to question him about the assassination."
        },

        garrison_investigation: {
            text: `JIM GARRISON - THE NEW ORLEANS INVESTIGATION

            New Orleans DA Jim Garrison launched the only prosecution:

            ⚖️ GARRISON INVESTIGATION (1966-1969):
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            Lead Prosecutor: Jim Garrison, Orleans Parish DA

            Key findings:
            • New Orleans conspiracy to assassinate JFK
            • CIA involvement through anti-Castro operations
            • Oswald was intelligence asset, not lone nut
            • Local operatives included Ferrie, Banister, Shaw

            Defendant: Clay Shaw
            • New Orleans businessman
            • CIA contact (confirmed in 1979)
            • Connected to Ferrie and Oswald

            Verdict: Acquitted (March 1, 1969)
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            Later confirmed: CIA admitted Shaw was indeed a contact, just as Garrison alleged.`,
            image: "garrison_investigation",
            imagePrompt: "Jim Garrison in courtroom, Clay Shaw trial, New Orleans investigation, conspiracy prosecution",
            sources: ["Garrison Investigation Records", "Shaw Trial Transcripts"],
            badges: ["truthSeeker"],
            choices: [
                {
                    text: "Examine Clay Shaw in detail",
                    nextScene: "clay_shaw_trial",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Why did Shaw get acquitted?",
                    nextScene: "shaw_acquittal_analysis",
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Review Garrison's key evidence",
                    nextScene: "garrison_evidence_review",
                    progressIncrease: 22,
                    evidence: true
                }
            ],
            educationalNote: "Garrison's investigation was the only criminal prosecution related to the JFK assassination. While Shaw was acquitted, the CIA later confirmed Shaw was indeed an agency contact."
        },

        clay_shaw_trial: {
            text: `CLAY SHAW - THE ONLY CONSPIRACY TRIAL

            You examine the case against Clay Shaw:

            👤 CLAY LAVERGNE SHAW:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            Background:
            • Director, International Trade Mart
            • OSS officer in WWII
            • Decorated for intelligence work
            • Well-connected New Orleans socialite

            CIA Connection (confirmed 1979):
            • Domestic Contact Service informant
            • Code name: "Clay Bertrand" (alleged)
            • Connected to anti-Castro Cubans

            Garrison's allegations:
            • Met with Ferrie and Oswald
            • Planned assassination route
            • Part of CIA/anti-Castro plot
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "clay_shaw_trial",
            imagePrompt: "Clay Shaw in court, New Orleans trial, conspiracy defendant, elegant southern gentleman",
            sources: ["Shaw Trial Records", "CIA Contact Confirmation 1979"],
            choices: [
                {
                    text: "Why was he acquitted?",
                    nextScene: "shaw_acquittal_analysis",
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Examine CIA contact confirmation",
                    nextScene: "cia_shaw_confirmation",
                    progressIncrease: 22,
                    evidence: true
                },
                {
                    text: "Review other conspirator files",
                    nextScene: "conspirator_files",
                    progressIncrease: 20,
                    evidence: true
                }
            ],
            educationalNote: "The CIA's 1979 confirmation that Shaw was an agency contact vindicated a key element of Garrison's investigation."
        },

        guy_banister_investigation: {
            text: `GUY BANISTER - EX-FBI, ANTI-CASTRO OPERATIONS

            You investigate the man whose office Oswald frequented:

            👤 W. GUY BANISTER:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            Background:
            • FBI Special Agent in Charge, Chicago
            • Fired for pulling gun in bar
            • Set up detective agency, New Orleans
            • Office: 544 Camp Street

            Anti-Castro Operations:
            • Trained Cuban exiles
            • CIA connections documented
            • Weapons trafficking to exiles
            • Employed David Ferrie

            Oswald Connection:
            • Oswald's FPCC pamphlets stamped "544 Camp"
            • Witnesses saw Oswald at Banister's office
            • Banister and Oswald seen together
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            Banister died June 1964 - "heart attack" - before Warren Commission could investigate.`,
            image: "guy_banister",
            imagePrompt: "Guy Banister at 544 Camp Street office, ex-FBI agent, anti-Castro operations, New Orleans 1963",
            sources: ["Garrison Files", "FBI Personnel Records"],
            choices: [
                {
                    text: "Examine anti-Castro exile connections",
                    nextScene: "anti_castro_cubans",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Study David Ferrie connection",
                    nextScene: "david_ferrie_investigation",
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Review CIA operations in New Orleans",
                    nextScene: "cia_new_orleans_operations",
                    progressIncrease: 22,
                    evidence: true
                }
            ],
            educationalNote: "The connection between Oswald and the anti-Castro operations at 544 Camp Street remains one of the most damning pieces of evidence against the lone gunman theory."
        },

        jack_ruby_investigation: {
            text: `JACK RUBY - THE MAN WHO SILENCED OSWALD

            You investigate why a nightclub owner killed the prime suspect:

            👤 JACOB LEON RUBENSTEIN (Jack Ruby):
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            Background:
            • Born Chicago, 1911
            • Ran nightclubs in Dallas
            • Connected to organized crime
            • Known to Dallas police (gave them free drinks)

            Mob Connections:
            • Chicago Outfit associates
            • Carlos Marcello territory
            • Santos Trafficante connection
            • Gun running to Cuba (1959)
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            November 24, 1963: Ruby walks into Dallas police basement, shoots Oswald on live television. Claims he did it to spare Jackie Kennedy the trauma of a trial.`,
            image: "jack_ruby",
            imagePrompt: "Jack Ruby shooting Oswald, Dallas police basement, live television moment, chaos",
            sources: ["Warren Commission Ruby Testimony", "HSCA Organized Crime Report"],
            badges: ["truthSeeker"],
            choices: [
                {
                    text: "Examine his mob connections",
                    nextScene: "ruby_mob_connections",
                    progressIncrease: 22,
                    evidence: true
                },
                {
                    text: "Study how he got access to Oswald",
                    nextScene: "ruby_police_access",
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Review his statements before death",
                    nextScene: "ruby_final_statements",
                    progressIncrease: 25,
                    evidence: true
                }
            ],
            educationalNote: "Ruby's killing of Oswald eliminated the only person who could have revealed whether he acted alone or as part of a conspiracy."
        },

        ruby_mob_connections: {
            text: `RUBY'S ORGANIZED CRIME TIES

            You trace Jack Ruby's mob connections:

            🎰 RUBY'S MOB NETWORK:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            Chicago Connections:
            • Worked for Al Capone organization
            • Connected to Sam Giancana

            Dallas Operations:
            • Nightclubs as fronts
            • Gambling, prostitution involvement
            • Paid off local police

            Cuba Connection (1959):
            • Visited Santos Trafficante in Havana
            • Gun running operations
            • Just before Castro took over

            Carlos Marcello Territory:
            • Dallas in Marcello's sphere
            • Ruby paid tribute to organization
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            The same mob figures appear in both Ruby's life AND CIA anti-Castro operations.`,
            image: "ruby_mob_connections",
            imagePrompt: "Organized crime connection map, Jack Ruby, mob bosses, nightclub operations, underworld ties",
            sources: ["HSCA Organized Crime Report", "FBI Ruby Files"],
            choices: [
                {
                    text: "Investigate Carlos Marcello",
                    nextScene: "carlos_marcello_investigation",
                    progressIncrease: 25,
                    evidence: true
                },
                {
                    text: "Examine Santos Trafficante",
                    nextScene: "trafficante_investigation",
                    progressIncrease: 22,
                    evidence: true
                },
                {
                    text: "Study CIA-Mafia alliance",
                    nextScene: "cia_mafia_investigation",
                    progressIncrease: 28,
                    evidence: true
                }
            ],
            educationalNote: "Ruby's extensive mob connections contradict his claim of acting alone out of grief."
        },

        ruby_final_statements: {
            text: `JACK RUBY'S DYING WORDS

            Ruby's statements before his death suggest conspiracy:

            🗣️ RUBY'S KEY STATEMENTS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            To Warren Commission (1964):
            "I want to tell the truth, and I can't tell it here... take me to Washington... I can't say it here."

            "A whole new form of government is going to take over the country."

            "The people who put me in this position will never let the truth come out."

            To psychiatrist (1966):
            "They're going to find out about Cuba, and then I'll be killed."

            January 3, 1967: Ruby dies of cancer - just as new trial was granted.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "ruby_final_words",
            imagePrompt: "Jack Ruby in prison, final interview, dying man's confession, conspiracy hints",
            sources: ["Warren Commission Ruby Testimony", "Prison Medical Records"],
            badges: ["victimAdvocate"],
            choices: [
                {
                    text: "What did he mean about Cuba?",
                    nextScene: "anti_castro_cubans",
                    progressIncrease: 22,
                    evidence: true
                },
                {
                    text: "Examine other suspicious deaths",
                    nextScene: "witness_death_investigation",
                    progressIncrease: 25,
                    evidence: true
                },
                {
                    text: "Review final conclusions",
                    nextScene: "final_conclusions",
                    progressIncrease: 20,
                    evidence: true
                }
            ],
            educationalNote: "Ruby repeatedly asked to be taken to Washington to tell the truth, suggesting he knew of a conspiracy but feared speaking in Dallas."
        },

        carlos_marcello_investigation: {
            text: `CARLOS MARCELLO - GODFATHER OF NEW ORLEANS

            You investigate the most powerful mob boss in the South:

            👤 CARLOS MARCELLO:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            Control: Louisiana, Texas, portions of Florida
            Worth: Estimated $2 billion

            Kennedy Conflict:
            • RFK (Attorney General) targeted Marcello
            • 1961: Illegally deported to Guatemala
            • Publicly threatened Kennedys

            Alleged threat (1962):
            "Take the stone from my shoe... if you cut off the dog's head, the tail dies too."
            (Meaning: kill JFK, and RFK loses power)

            Connections:
            • Jack Ruby in his territory
            • David Ferrie was his pilot
            • Carlos involved in CIA-Cuba plots
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "carlos_marcello",
            imagePrompt: "Carlos Marcello, New Orleans godfather, mafia boss, organized crime power, Kennedy threat",
            sources: ["FBI Organized Crime Files", "HSCA Marcello Investigation"],
            badges: ["truthSeeker"],
            choices: [
                {
                    text: "Examine Trafficante connection",
                    nextScene: "trafficante_investigation",
                    progressIncrease: 22,
                    evidence: true
                },
                {
                    text: "Study CIA-Mafia plots",
                    nextScene: "cia_mafia_investigation",
                    progressIncrease: 25,
                    evidence: true
                },
                {
                    text: "Review Jack Ruby ties",
                    nextScene: "ruby_mob_connections",
                    progressIncrease: 18,
                    evidence: true
                }
            ],
            educationalNote: "Marcello's alleged threat and his connections to both Ruby and Ferrie place him at the center of conspiracy theories."
        },

        trafficante_investigation: {
            text: `SANTOS TRAFFICANTE - FLORIDA MOB BOSS

            Another mob figure with means, motive, and connections:

            👤 SANTOS TRAFFICANTE JR.:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            Control: Florida, Cuba (pre-Castro)

            Cuba Losses:
            • Owned Havana casinos
            • Lost everything when Castro seized power
            • Blamed Kennedys for Bay of Pigs failure

            CIA Connection:
            • Recruited for Castro assassination plots
            • Provided poison pills, assassins
            • Operation MONGOOSE participant

            Key testimony (HSCA 1978):
            "Carlos and I talked about getting Kennedy. Not about making him President."

            Jack Ruby Connection:
            • Ruby visited Trafficante in Cuba (1959)
            • Same social circles
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "santos_trafficante",
            imagePrompt: "Santos Trafficante, Florida mob boss, Havana casino owner, CIA plots, Kennedy conspiracy",
            sources: ["HSCA Organized Crime Report", "CIA Castro Files"],
            choices: [
                {
                    text: "Study CIA-Mafia assassination plots",
                    nextScene: "cia_mafia_investigation",
                    progressIncrease: 28,
                    evidence: true
                },
                {
                    text: "Examine anti-Castro Cuban exiles",
                    nextScene: "anti_castro_cubans",
                    progressIncrease: 22,
                    evidence: true
                },
                {
                    text: "Review Marcello connection",
                    nextScene: "carlos_marcello_investigation",
                    progressIncrease: 20,
                    evidence: true
                }
            ],
            educationalNote: "Trafficante's involvement in CIA plots against Castro put him in contact with the same people connected to the JFK assassination."
        },

        anti_castro_cubans: {
            text: `ANTI-CASTRO CUBAN EXILES - BETRAYED BY KENNEDY

            A group with strong motive to kill Kennedy:

            🇨🇺 CUBAN EXILE COMMUNITY:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            Bay of Pigs (April 1961):
            • CIA-trained exile invasion
            • Kennedy withdrew air support
            • Invasion crushed, 1,200 captured
            • Exiles blamed Kennedy for betrayal

            Key Groups:
            • Alpha 66 - militant anti-Castro
            • DRE - CIA-funded student group
            • Operation 40 - CIA assassination unit

            Oswald Connections:
            • DRE members encountered Oswald in New Orleans
            • Some exiles trained at same camps as Oswald
            • Anti-Castro and pro-Castro at same addresses
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            The exiles had motive (betrayal), means (CIA training), and opportunity (connections to Oswald).`,
            image: "cuban_exiles",
            imagePrompt: "Cuban exile training camps, Bay of Pigs veterans, anti-Castro operations, Kennedy betrayal anger",
            sources: ["CIA Cuban Operations Files", "HSCA Cuban Exile Report"],
            choices: [
                {
                    text: "Examine Operation 40",
                    nextScene: "operation_40_investigation",
                    progressIncrease: 25,
                    evidence: true
                },
                {
                    text: "Study Oswald's Cuban connections",
                    nextScene: "oswald_new_orleans",
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Review CIA anti-Castro programs",
                    nextScene: "cia_anti_castro_programs",
                    progressIncrease: 22,
                    evidence: true
                }
            ],
            educationalNote: "Cuban exiles felt deeply betrayed by Kennedy's withdrawal of support at the Bay of Pigs."
        },

        grassy_knoll_investigation: {
            text: `THE GRASSY KNOLL - SECOND SHOOTER LOCATION?

            You investigate the most famous alternate shooter location:

            📍 GRASSY KNOLL EVIDENCE:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            Location: Northwest of Elm Street, behind picket fence

            Witness Reports:
            • 78 witnesses (44%) reported shots from knoll
            • Several saw smoke behind fence
            • Witnesses ran toward knoll
            • Secret Service agents looked toward knoll

            Physical Evidence:
            • Acoustic analysis: Shot from knoll (HSCA)
            • Trajectory: Consistent with front shot
            • Footprints found behind fence (day of)
            • Cigarette butts, muddy footprints

            The "Badge Man":
            • Photo enhancement shows figure behind fence
            • Appears to be holding rifle
            • Wearing badge or reflective object
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "grassy_knoll",
            imagePrompt: "Grassy knoll Dealey Plaza, picket fence, second shooter location, assassination site investigation",
            sources: ["HSCA Acoustic Report", "Witness Testimonies"],
            badges: ["truthSeeker"],
            choices: [
                {
                    text: "Examine the Badge Man photo",
                    nextScene: "badge_man_analysis",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Review acoustic evidence",
                    nextScene: "acoustic_evidence_study",
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Study witness testimony",
                    nextScene: "witness_position_mapping",
                    progressIncrease: 15,
                    evidence: true
                }
            ],
            educationalNote: "The grassy knoll remains the most commonly cited location for a potential second shooter."
        },

        umbrella_man_mystery: {
            text: `THE UMBRELLA MAN - MYSTERIOUS FIGURE

            You investigate one of Dealey Plaza's enduring mysteries:

            ☂️ THE UMBRELLA MAN:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            Observation:
            • Sunny day, no rain
            • One man holding open black umbrella
            • Standing directly at kill zone
            • Pumped umbrella as shots fired
            • Only person in crowd with umbrella

            Theories:
            • Signal to shooters
            • Poison dart weapon
            • Distraction device

            1978 Testimony (HSCA):
            Louie Steven Witt came forward
            Claimed umbrella was "protest" of JFK's father
            (Joseph Kennedy supported appeasement of Hitler)

            Problem: Witt couldn't explain his behavior
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "umbrella_man",
            imagePrompt: "Umbrella Man in Dealey Plaza, sunny day with umbrella, mysterious figure at assassination site",
            sources: ["HSCA Testimony", "Photographic Evidence"],
            choices: [
                {
                    text: "Examine the Dark Complected Man",
                    nextScene: "dark_complected_man",
                    progressIncrease: 15,
                    evidence: true
                },
                {
                    text: "Review photographic evidence",
                    nextScene: "zapruder_film_analysis",
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Study other mysterious figures",
                    nextScene: "three_tramps_investigation",
                    progressIncrease: 20,
                    evidence: true
                }
            ],
            educationalNote: "The Umbrella Man's presence on a sunny day and his movements during the shooting have never been satisfactorily explained."
        },

        three_tramps_investigation: {
            text: `THE THREE TRAMPS - ARRESTED THEN RELEASED

            You investigate three men arrested near Dealey Plaza:

            👤 THE THREE TRAMPS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            Arrest: November 22, 1963
            Location: Railroad cars behind grassy knoll
            Time: Shortly after assassination

            Suspicious elements:
            • Clean shaven, well-dressed for "tramps"
            • New shoes despite vagrant claim
            • Arrested but records "lost"
            • Released without booking
            • Names not recorded

            Later identification (disputed):
            • Some researchers: E. Howard Hunt, Frank Sturgis
            • Official 1992 ID: Gus Abrams, Harold Doyle, John Gedney
            • Fingerprint comparisons inconclusive
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "three_tramps",
            imagePrompt: "Three tramps being escorted by Dallas police, well-dressed vagrants, Dealey Plaza arrest",
            sources: ["Dallas Police Photos", "HSCA Investigation"],
            choices: [
                {
                    text: "Examine Dallas police failures",
                    nextScene: "dallas_police_investigation",
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Study evidence handling problems",
                    nextScene: "evidence_chain_custody",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Review other mysterious figures",
                    nextScene: "umbrella_man_mystery",
                    progressIncrease: 15,
                    evidence: true
                }
            ],
            educationalNote: "The Three Tramps remain unidentified with certainty, and the loss of their arrest records adds to the mystery."
        },

        single_bullet_theory: {
            text: `THE SINGLE BULLET THEORY - "MAGIC BULLET"

            You analyze the most controversial aspect of the official story:

            🔫 CE 399 - THE MAGIC BULLET:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            Official claim: One bullet caused seven wounds

            Alleged trajectory:
            1. Enter JFK's back
            2. Exit JFK's throat
            3. Enter Connally's back
            4. Exit Connally's chest
            5. Through Connally's wrist
            6. Into Connally's thigh
            7. Fall out onto stretcher (nearly pristine)

            Problems:
            • Bullet almost undamaged after 7 wounds
            • Trajectory requires "magic" path changes
            • More bullet fragments in Connally than missing from CE 399
            • Connally said he was hit by separate shot
            • Nellie Connally: "Two separate shots"
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "magic_bullet",
            imagePrompt: "CE 399 magic bullet trajectory diagram, pristine bullet, impossible path visualization",
            sources: ["Warren Commission Exhibit 399", "HSCA Ballistics Review"],
            choices: [
                {
                    text: "Examine the bullet itself",
                    nextScene: "ce399_bullet_analysis",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Review Governor Connally's testimony",
                    nextScene: "connally_testimony",
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Study ballistics evidence",
                    nextScene: "ballistics_analysis",
                    progressIncrease: 15,
                    evidence: true
                }
            ],
            educationalNote: "The single bullet theory was necessary to support the three-shot, lone gunman conclusion but has been widely disputed."
        },

        connally_testimony: {
            text: `GOVERNOR CONNALLY'S TESTIMONY

            The man wounded with Kennedy had crucial testimony:

            🗣️ JOHN CONNALLY'S ACCOUNT:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            Position: Seated in front of JFK
            Wounds: Back, chest, wrist, thigh

            His testimony:
            "I heard a shot... I turned to look... then I felt something hit me. It was NOT the same shot that hit Kennedy."

            "There were two shots. I am convinced of that."

            Nellie Connally (his wife, in car):
            "I heard a shot. The President said 'My God, I am hit.' Then John was hit by a DIFFERENT shot."

            The people actually in the car contradicted the single bullet theory.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "connally_testimony",
            imagePrompt: "Governor Connally testifying, showing wounds, Warren Commission hearing, crucial eyewitness",
            sources: ["Warren Commission Connally Testimony", "Nellie Connally Interview"],
            choices: [
                {
                    text: "Analyze single bullet theory",
                    nextScene: "single_bullet_theory",
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Review medical evidence",
                    nextScene: "medical_evidence_review",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Study Zapruder film timing",
                    nextScene: "zapruder_film_analysis",
                    progressIncrease: 22,
                    evidence: true
                }
            ],
            educationalNote: "Both John and Nellie Connally maintained until their deaths that Kennedy and Connally were hit by separate shots."
        },

        tippit_shooting: {
            text: `THE TIPPIT SHOOTING - 45 MINUTES LATER

            Officer J.D. Tippit was killed shortly after JFK:

            👮 OFFICER TIPPIT'S DEATH:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            Time: 1:15 PM (45 minutes after JFK)
            Location: Oak Cliff, Dallas
            Victim: Officer J.D. Tippit, 11-year veteran

            Official story:
            • Tippit stopped Oswald for questioning
            • Oswald shot him with revolver
            • Witnesses identified Oswald fleeing

            Problems:
            • Why was Tippit in Oak Cliff? (not his patrol area)
            • Some witnesses described different shooter
            • Bullets didn't match Oswald's gun (initially)
            • Shell casings: 2 different manufacturers
            • Was Tippit meeting someone?
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "tippit_shooting",
            imagePrompt: "Officer Tippit crime scene, Dallas Oak Cliff, police investigation, second murder same day",
            sources: ["Dallas Police Tippit Files", "Warren Commission"],
            choices: [
                {
                    text: "Examine Oswald's arrest at theater",
                    nextScene: "oswald_arrest",
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Review conflicting witness accounts",
                    nextScene: "tippit_witnesses",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Investigate Tippit's background",
                    nextScene: "tippit_background",
                    progressIncrease: 15,
                    evidence: true
                }
            ],
            educationalNote: "The Tippit shooting provided the main evidence linking Oswald to violent crime, but questions remain about the circumstances."
        },

        oswald_arrest: {
            text: `OSWALD'S ARREST - TEXAS THEATRE

            Oswald was captured at a movie theater:

            🎬 THE ARREST:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            Time: 1:50 PM
            Location: Texas Theatre, Oak Cliff
            Film playing: "War is Hell"

            Circumstances:
            • Oswald slipped in without paying
            • Shoe store manager called police
            • 15+ officers responded (unusual for ticket violation)
            • Oswald allegedly pulled gun
            • Arrested after brief struggle

            Oswald's statements:
            "I'm not resisting arrest!"
            "I want a lawyer!"
            "I'm just a patsy!"

            Questions:
            • Why so many officers for movie violation?
            • Did someone tip them off?
            • Why "patsy" comment?
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "oswald_arrest",
            imagePrompt: "Texas Theatre arrest, Oswald being taken into custody, Dallas police, historic capture moment",
            sources: ["Dallas Police Arrest Records", "Theatre Employee Testimony"],
            choices: [
                {
                    text: "Analyze 'patsy' statement",
                    nextScene: "oswald_patsy_claim",
                    progressIncrease: 22,
                    evidence: true
                },
                {
                    text: "Examine his interrogation",
                    nextScene: "oswald_interrogation",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Review evidence against Oswald",
                    nextScene: "oswald_evidence_review",
                    progressIncrease: 18,
                    evidence: true
                }
            ],
            educationalNote: "Oswald's claim to be 'just a patsy' has fueled conspiracy theories ever since."
        },

        oswald_patsy_claim: {
            text: `"I'M JUST A PATSY" - WHAT DID HE MEAN?

            Analyzing Oswald's most famous statement:

            🗣️ THE PATSY CLAIM:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            Definition: A patsy is someone set up to take blame

            Oswald's situation:
            • Worked at Book Depository (started Oct 1963)
            • Got job through Ruth Paine (intelligence connections?)
            • Rifle found "hidden" in building
            • Photos with rifle (disputed authenticity)
            • Prior pro-Castro activity (public record)

            Perfect "legend" (spy term):
            ✓ Communist sympathizer
            ✓ Russian defector
            ✓ Pro-Castro activist
            ✓ Access to assassination site
            ✓ Owned right type of rifle
            ✓ Military marksman

            Was Oswald set up to take the fall?
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "oswald_patsy",
            imagePrompt: "Oswald press conference, 'I'm just a patsy' moment, surrounded by police, claiming innocence",
            sources: ["Press Conference Footage", "Analysis of Oswald Background"],
            choices: [
                {
                    text: "Examine backyard photos",
                    nextScene: "backyard_photos_analysis",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Review his intelligence connections",
                    nextScene: "oswald_cia_connections",
                    progressIncrease: 22,
                    evidence: true
                },
                {
                    text: "Study who got him the job",
                    nextScene: "ruth_paine_investigation",
                    progressIncrease: 18,
                    evidence: true
                }
            ],
            educationalNote: "Oswald's claim to be a patsy, if true, implies he was aware of being set up but unable to prove it."
        },

        de_mohrenschildt_connection: {
            text: `GEORGE DE MOHRENSCHILDT - OSWALD'S "HANDLER"?

            A mysterious aristocrat befriended the Oswalds:

            👤 GEORGE DE MOHRENSCHILDT:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            Background:
            • Russian aristocrat, fled revolution
            • Oil geologist (cover for intelligence work?)
            • CIA contact (confirmed)
            • Friends with George H.W. Bush, Jackie Kennedy's family

            Oswald relationship:
            • Befriended Oswalds upon return from USSR (1962)
            • Introduced them to White Russian community
            • Far above Oswald's social class
            • Continued relationship until just before Dallas

            Death (March 29, 1977):
            • Gunshot wound, ruled suicide
            • Same day Gaeton Fonzi (HSCA) located him
            • Was about to be interviewed about Oswald
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "de_mohrenschildt",
            imagePrompt: "George de Mohrenschildt, aristocratic spy, intelligence connections, Oswald handler",
            sources: ["HSCA de Mohrenschildt Files", "CIA Contact Records"],
            badges: ["truthSeeker"],
            choices: [
                {
                    text: "Examine his suspicious death",
                    nextScene: "de_mohrenschildt_death",
                    progressIncrease: 25,
                    evidence: true
                },
                {
                    text: "Study his CIA connections",
                    nextScene: "oswald_cia_connections",
                    progressIncrease: 22,
                    evidence: true
                },
                {
                    text: "Review other witness deaths",
                    nextScene: "witness_death_investigation",
                    progressIncrease: 20,
                    evidence: true
                }
            ],
            educationalNote: "De Mohrenschildt's death hours before his HSCA interview is one of the most suspicious in the case."
        },

        lbj_motive_investigation: {
            text: `LBJ - MOTIVE AND OPPORTUNITY

            Some researchers point to Vice President Johnson:

            👤 LYNDON BAINES JOHNSON:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            Position: Vice President, powerless role

            Potential motives:
            • About to be dropped from 1964 ticket
            • Bobby Baker scandal (corruption investigation)
            • Billy Sol Estes investigation
            • Multiple pending criminal charges
            • Faced political destruction

            Texas connections:
            • Dallas was HIS state
            • Controlled Texas political machine
            • Close to J. Edgar Hoover
            • Connected to Texas oil interests

            After assassination:
            • Became President immediately
            • Baker investigation dropped
            • Estes case buried
            • All legal troubles disappeared
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "lbj_investigation",
            imagePrompt: "LBJ as Vice President, political power, Texas connections, motive investigation",
            sources: ["LBJ Political Files", "Bobby Baker Investigation"],
            choices: [
                {
                    text: "Examine LBJ's criminal exposure",
                    nextScene: "lbj_criminal_exposure",
                    progressIncrease: 22,
                    evidence: true
                },
                {
                    text: "Study Texas oil connection",
                    nextScene: "texas_oil_investigation",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Review who benefited from JFK's death",
                    nextScene: "cui_bono_analysis",
                    progressIncrease: 25,
                    evidence: true
                }
            ],
            educationalNote: "LBJ's potential motives and Texas connections have made him a subject of conspiracy theories, though direct evidence is lacking."
        },

        cui_bono_analysis: {
            text: `CUI BONO - WHO BENEFITED?

            The ancient question: Who gained from JFK's death?

            📊 BENEFICIARIES ANALYSIS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            LYNDON JOHNSON:
            ✓ Became President
            ✓ Criminal investigations dropped
            ✓ Vietnam War escalated (profitable)

            CIA:
            ✓ Bay of Pigs embarrassment avenged
            ✓ Anti-Castro operations continued
            ✓ Budget increased
            ✓ No Kennedy oversight

            MILITARY-INDUSTRIAL COMPLEX:
            ✓ Vietnam War escalated
            ✓ Trillions in defense spending
            ✓ JFK planned to withdraw from Vietnam

            ORGANIZED CRIME:
            ✓ RFK crusade ended
            ✓ No more deportations
            ✓ Casino interests protected

            CUBAN EXILES:
            ✓ Betrayal avenged
            ✓ Hope for new invasion
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "cui_bono_diagram",
            imagePrompt: "Diagram of who benefited from JFK assassination, power structures, motive analysis",
            sources: ["Political Analysis", "Historical Research"],
            badges: ["truthSeeker"],
            choices: [
                {
                    text: "Examine military-industrial complex",
                    nextScene: "military_industrial_investigation",
                    progressIncrease: 22,
                    evidence: true
                },
                {
                    text: "Review Vietnam war connection",
                    nextScene: "vietnam_connection",
                    progressIncrease: 25,
                    evidence: true
                },
                {
                    text: "Prepare final conclusions",
                    nextScene: "final_conclusions",
                    progressIncrease: 30,
                    evidence: true
                }
            ],
            educationalNote: "Multiple powerful groups had motives to eliminate JFK, which is why determining responsibility remains so difficult."
        },

        vietnam_connection: {
            text: `THE VIETNAM CONNECTION - WAR PROFITS

            JFK's plans for Vietnam changed with his death:

            🇻🇳 VIETNAM POLICY SHIFT:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            JFK's plans (documented):
            • NSAM 263 (Oct 1963): Withdraw 1,000 troops by end of 1963
            • Full withdrawal planned by 1965
            • "Their war, not ours"

            LBJ's reversal:
            • NSAM 273 (Nov 26, 1963): Reversed withdrawal
            • Gulf of Tonkin (1964): Full escalation
            • 500,000+ troops by 1968
            • 58,000 Americans killed

            War profits:
            • Defense contractors made billions
            • Bell Helicopter (Texas): LBJ connection
            • Brown & Root: LBJ's political backers
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            JFK's death transformed America's Vietnam policy within 4 days.`,
            image: "vietnam_policy",
            imagePrompt: "Vietnam War escalation, military industrial complex, defense contracts, policy reversal",
            sources: ["NSAM 263 and 273", "Defense Contract Records"],
            choices: [
                {
                    text: "Examine military-industrial complex",
                    nextScene: "military_industrial_investigation",
                    progressIncrease: 22,
                    evidence: true
                },
                {
                    text: "Review who benefited",
                    nextScene: "cui_bono_analysis",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Prepare final conclusions",
                    nextScene: "final_conclusions",
                    progressIncrease: 30,
                    evidence: true
                }
            ],
            educationalNote: "JFK's documented plans to withdraw from Vietnam were reversed within days of his death."
        },

        modern_document_releases: {
            text: `MODERN DOCUMENT RELEASES

            New documents continue to emerge:

            📄 JFK RECORDS ACT (1992):
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            Established Assassination Records Review Board
            Mandate: Release all JFK documents by 2017

            Reality:
            • Thousands of documents still classified
            • Trump delayed full release (2017)
            • Biden delayed again (2021, 2022)
            • CIA continues to resist release

            Key withheld documents:
            • CIA Oswald files
            • FBI informant records
            • Intelligence agency communications
            • "Sources and methods" claims

            Why still classified after 60 years?
            "National security" - or protecting guilty parties?
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "document_releases",
            imagePrompt: "Modern JFK document releases, National Archives, declassification process, ongoing secrecy",
            sources: ["JFK Records Act", "NARA Release Reports"],
            choices: [
                {
                    text: "What are they still hiding?",
                    nextScene: "still_classified_analysis",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Review known evidence",
                    nextScene: "evidence_summary",
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Prepare final conclusions",
                    nextScene: "final_conclusions",
                    progressIncrease: 25,
                    evidence: true
                }
            ],
            educationalNote: "Despite the JFK Records Act mandate, thousands of documents remain classified over 60 years later."
        },

        evidence_summary: {
            text: `EVIDENCE SUMMARY - THE COMPLETE PICTURE

            Reviewing all the evidence gathered:

            📋 EVIDENCE FOR CONSPIRACY:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            Ballistics:
            ✓ Acoustic evidence: 4 shots from 2 locations
            ✓ Magic bullet theory: Physically implausible
            ✓ 44% of witnesses: Shots from grassy knoll

            Medical:
            ✓ Parkland vs Bethesda contradictions
            ✓ Missing brain and tissue evidence
            ✓ Altered autopsy photos (alleged)

            Connections:
            ✓ Oswald's intelligence background
            ✓ CIA-Mafia assassination plots
            ✓ Cuban exile connections
            ✓ Organized crime involvement

            Cover-up:
            ✓ 18+ witness deaths (statistical impossibility)
            ✓ Evidence destroyed/missing
            ✓ Documents still classified
            ✓ HSCA concluded "probable conspiracy"
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "evidence_summary",
            imagePrompt: "Complete evidence board, all connections mapped, conspiracy proof compiled",
            sources: ["Complete Investigation Files"],
            badges: ["truthSeeker"],
            choices: [
                {
                    text: "Present final conclusions",
                    nextScene: "final_conclusions",
                    progressIncrease: 30,
                    evidence: true
                },
                {
                    text: "Review individual evidence areas",
                    nextScene: "ballistics_analysis",
                    progressIncrease: 15,
                    evidence: true
                }
            ],
            educationalNote: "While the full truth may never be known, the weight of evidence points to conspiracy rather than lone gunman."
        },

        oswald_return_america: {
            text: `OSWALD'S RETURN TO AMERICA

            The suspicious ease of his repatriation:

            🇺🇸 RETURN PROCESS (1962):
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            Normal process for defectors:
            • Extensive debriefing
            • Criminal investigation
            • Possible prosecution
            • Surveillance for years

            Oswald's treatment:
            • State Department LOANED him money
            • No prosecution
            • No extensive debriefing (records show brief)
            • Passport returned
            • Settled easily in Dallas

            CIA claims:
            • "No debriefing" of Oswald
            • Yet he had radar secrets from Atsugi
            • Had lived in USSR 2.5 years
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            His easy return suggests government protection.`,
            image: "oswald_return",
            imagePrompt: "Oswald returning to America, passport processing, government facilitation, suspicious ease",
            sources: ["State Department Files", "CIA Debriefing Records"],
            choices: [
                {
                    text: "Was he a CIA asset?",
                    nextScene: "oswald_false_defector",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Examine FBI surveillance",
                    nextScene: "fbi_oswald_surveillance",
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Study his Dallas activities",
                    nextScene: "oswald_new_orleans",
                    progressIncrease: 16,
                    evidence: true
                }
            ],
            educationalNote: "The ease with which Oswald returned to America after defecting remains one of the case's enduring mysteries."
        },

        fbi_oswald_surveillance: {
            text: `FBI SURVEILLANCE OF OSWALD

            The FBI's knowledge of Oswald before Dallas:

            🔍 FBI MONITORING:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            FBI knew Oswald:
            • Returned defector (automatic interest)
            • Pro-Castro activities in New Orleans
            • Contacted Soviet embassy in Mexico City
            • Subscribed to Communist publications

            Dallas FBI office:
            • Agent James Hosty assigned to Oswald
            • Hosty visited Marina twice before assassination
            • Oswald left threatening note at FBI office

            After assassination:
            • Hosty ordered to DESTROY Oswald's note
            • By FBI Director J. Edgar Hoover
            • Evidence destruction admitted in 1975
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "fbi_surveillance",
            imagePrompt: "FBI surveillance files, Hoover's FBI, Oswald monitoring, evidence destruction",
            sources: ["FBI Oswald Files", "Hosty Testimony"],
            choices: [
                {
                    text: "Why was evidence destroyed?",
                    nextScene: "fbi_evidence_destruction",
                    progressIncrease: 22,
                    evidence: true
                },
                {
                    text: "Examine Mexico City trip",
                    nextScene: "oswald_mexico_city",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Review Hoover's role",
                    nextScene: "hoover_investigation",
                    progressIncrease: 18,
                    evidence: true
                }
            ],
            educationalNote: "The FBI's destruction of Oswald's note suggests they had information they wanted to hide."
        },

        oswald_mexico_city: {
            text: `OSWALD IN MEXICO CITY - SEPTEMBER 1963

            A crucial trip just weeks before Dallas:

            🇲🇽 MEXICO CITY VISIT:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            Dates: September 26 - October 3, 1963

            Official story:
            • Visited Soviet Embassy
            • Visited Cuban Embassy
            • Sought visas to Cuba, USSR
            • Photographed by CIA

            Problems:
            • CIA photo shows DIFFERENT man
            • Transcripts of calls: Different voice
            • Could Oswald have been impersonated?
            • CIA claimed tapes "routinely destroyed"
            • Later admitted tapes existed post-assassination
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            The Mexico City evidence may show someone impersonating Oswald to create a trail.`,
            image: "oswald_mexico_city",
            imagePrompt: "Mexico City surveillance photos, Soviet and Cuban embassies, wrong man photographed, identity confusion",
            sources: ["CIA Mexico City Station Files", "HSCA Investigation"],
            choices: [
                {
                    text: "Examine the impersonation evidence",
                    nextScene: "oswald_impersonation",
                    progressIncrease: 25,
                    evidence: true
                },
                {
                    text: "Study CIA surveillance operation",
                    nextScene: "cia_mexico_city_operation",
                    progressIncrease: 22,
                    evidence: true
                },
                {
                    text: "Review timeline to assassination",
                    nextScene: "timeline_analysis",
                    progressIncrease: 18,
                    evidence: true
                }
            ],
            educationalNote: "The discrepancy between CIA surveillance photos and Oswald's actual appearance suggests possible impersonation."
        },

        shaw_acquittal_analysis: {
            text: `WHY WAS CLAY SHAW ACQUITTED?

            Analyzing the trial's outcome:

            ⚖️ TRIAL FACTORS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            Obstacles Garrison faced:
            • Key witness (Ferrie) dead before trial
            • CIA refused to cooperate
            • Media attacked Garrison relentlessly
            • Witnesses threatened and intimidated
            • Evidence classified "national security"

            Defense advantages:
            • Unlimited resources
            • Shaw denied CIA connection (later proven false)
            • Character witnesses testified
            • Reasonable doubt standard

            Jury deliberation: Less than 1 hour
            Verdict: Not guilty

            Irony: CIA admitted Shaw WAS their contact in 1979
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "shaw_acquittal",
            imagePrompt: "Clay Shaw trial verdict, jury acquittal, Garrison defeat, later vindication",
            sources: ["Shaw Trial Records", "CIA 1979 Admission"],
            choices: [
                {
                    text: "Examine CIA confirmation",
                    nextScene: "cia_shaw_confirmation",
                    progressIncrease: 22,
                    evidence: true
                },
                {
                    text: "Review Garrison's key evidence",
                    nextScene: "garrison_evidence_review",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Study media attacks on Garrison",
                    nextScene: "media_garrison_attacks",
                    progressIncrease: 18,
                    evidence: true
                }
            ],
            educationalNote: "Shaw's acquittal doesn't prove Garrison was wrong - the CIA's later confirmation of Shaw's role vindicated key elements of his investigation."
        },

        cia_shaw_confirmation: {
            text: `CIA CONFIRMS SHAW CONNECTION (1979)

            The agency finally admitted the truth:

            📄 CIA ADMISSION:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            1969 Trial:
            Shaw denied ANY CIA connection
            CIA refused to confirm or deny

            1979 HSCA Investigation:
            CIA Director Stansfield Turner admitted:
            "Clay Shaw was a contact of the CIA's Domestic Contact Service"

            Implications:
            • Shaw lied under oath
            • CIA allowed perjury to protect asset
            • Garrison's core claim proven true
            • What else did they hide?

            Shaw died in 1974 - never faced consequences for perjury.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "cia_shaw_admission",
            imagePrompt: "CIA document confirming Shaw connection, vindication of Garrison, government admission",
            sources: ["CIA Turner Statement 1979", "HSCA Final Report"],
            badges: ["truthSeeker"],
            choices: [
                {
                    text: "What else has CIA hidden?",
                    nextScene: "cia_hidden_evidence",
                    progressIncrease: 25,
                    evidence: true
                },
                {
                    text: "Review Garrison investigation",
                    nextScene: "garrison_investigation",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Prepare final conclusions",
                    nextScene: "final_conclusions",
                    progressIncrease: 28,
                    evidence: true
                }
            ],
            educationalNote: "The CIA's 1979 admission proved Garrison had been right about Shaw's intelligence connection all along."
        },

        marina_oswald_background: {
            text: `MARINA OSWALD - THE RUSSIAN WIFE

            Examining the woman who married Oswald in USSR:

            👤 MARINA NIKOLAYEVNA PRUSAKOVA:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            Background:
            • Pharmacist in Minsk
            • Uncle: MVD (Soviet intelligence) officer
            • Met Oswald at dance in Minsk
            • Married after 6-week courtship

            Suspicious elements:
            • Soviet women couldn't easily marry foreigners
            • Exit visa granted quickly
            • Uncle's intelligence connection
            • Was she assigned to Oswald?

            After assassination:
            • Changed testimony multiple times
            • Initially supported "lone gunman"
            • Later said she believes conspiracy
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "marina_oswald",
            imagePrompt: "Marina Oswald, Russian wife, testimony changes, KGB family connection",
            sources: ["Warren Commission Marina Testimony", "HSCA Investigation"],
            choices: [
                {
                    text: "Examine her changing testimony",
                    nextScene: "marina_testimony_changes",
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Study Oswald's Soviet years",
                    nextScene: "oswald_soviet_defection",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Review Ruth Paine connection",
                    nextScene: "ruth_paine_investigation",
                    progressIncrease: 16,
                    evidence: true
                }
            ],
            educationalNote: "Marina Oswald's ability to leave the Soviet Union with an American defector raised questions from the beginning."
        },

        ruth_paine_investigation: {
            text: `RUTH PAINE - OSWALD'S CONVENIENT HELPER

            The woman who got Oswald his fateful job:

            👤 RUTH HYDE PAINE:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            Background:
            • Quaker, studied Russian
            • Befriended Marina Oswald (1963)
            • Housed Marina and children

            Suspicious connections:
            • Father: Insurance industry, OSS contacts
            • Sister: CIA employee
            • Brother-in-law: Bell Helicopter (defense contractor)

            Key actions:
            • Got Oswald job at Book Depository (October 1963)
            • Stored his "curtain rods" (rifle?)
            • Police found evidence at her garage
            • Translated for Marina after arrest
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            Did Ruth Paine unknowingly - or knowingly - help position Oswald?`,
            image: "ruth_paine",
            imagePrompt: "Ruth Paine house in Irving, Marina Oswald connection, job referral to Depository",
            sources: ["Warren Commission Paine Testimony", "HSCA Investigation"],
            choices: [
                {
                    text: "Examine how Oswald got the job",
                    nextScene: "depository_job_investigation",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Study her intelligence family connections",
                    nextScene: "paine_family_connections",
                    progressIncrease: 22,
                    evidence: true
                },
                {
                    text: "Review evidence found at her home",
                    nextScene: "paine_garage_evidence",
                    progressIncrease: 18,
                    evidence: true
                }
            ],
            educationalNote: "Ruth Paine's connections to intelligence community members and her role in getting Oswald his job have raised questions."
        },

        garrison_evidence_review: {
            text: `GARRISON'S KEY EVIDENCE

            Reviewing the evidence Garrison assembled:

            📋 GARRISON'S EVIDENCE:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • Oswald at Banister's office (witnesses)
            • Ferrie-Oswald Civil Air Patrol connection (photos)
            • Shaw using "Clay Bertrand" alias (witnesses)
            • New Orleans conspiracy meetings (testimony)
            • Anti-Castro Cuban exile involvement (documents)
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            Much of Garrison's evidence was later corroborated by the HSCA and CIA admissions.`,
            image: "garrison_evidence",
            imagePrompt: "Evidence board from Garrison investigation, New Orleans connections",
            sources: ["Garrison Investigation Files"],
            choices: [
                { text: "Review Shaw trial", nextScene: "clay_shaw_trial", progressIncrease: 18, evidence: true },
                { text: "Examine CIA involvement", nextScene: "oswald_cia_connections", progressIncrease: 20, evidence: true },
                { text: "Prepare conclusions", nextScene: "final_conclusions", progressIncrease: 25, evidence: true }
            ],
            educationalNote: "Garrison's investigation revealed connections later confirmed by official investigations."
        },

        cia_new_orleans_operations: {
            text: `CIA OPERATIONS IN NEW ORLEANS

            New Orleans was a center for anti-Castro operations:

            🕵️ CIA NEW ORLEANS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • Training camps for Cuban exiles
            • Weapons storage and distribution
            • Guy Banister as coordinator
            • David Ferrie as pilot
            • Clay Shaw as contact
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            Oswald moved directly into this network.`,
            image: "cia_new_orleans",
            imagePrompt: "CIA anti-Castro operations in New Orleans, exile training",
            sources: ["CIA Cuban Operations Files"],
            choices: [
                { text: "Study Oswald's role", nextScene: "oswald_new_orleans", progressIncrease: 18, evidence: true },
                { text: "Examine anti-Castro Cubans", nextScene: "anti_castro_cubans", progressIncrease: 20, evidence: true },
                { text: "Review Garrison findings", nextScene: "garrison_investigation", progressIncrease: 22, evidence: true }
            ],
            educationalNote: "New Orleans was a hub for CIA anti-Castro operations in the early 1960s."
        },

        ruby_police_access: {
            text: `HOW RUBY GOT ACCESS TO OSWALD

            Ruby walked into a police station full of officers:

            🚔 SECURITY FAILURE:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • Dallas police knew Ruby well (free drinks at clubs)
            • No credential check
            • Walked in moments before transfer
            • Perfect timing (coincidence?)
            • Some say he was seen inside earlier
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            How did Ruby know the exact moment to appear?`,
            image: "ruby_police_access",
            imagePrompt: "Dallas police station basement, security failure, Ruby access",
            sources: ["Dallas Police Records"],
            choices: [
                { text: "Examine Ruby's mob ties", nextScene: "ruby_mob_connections", progressIncrease: 20, evidence: true },
                { text: "Review his statements", nextScene: "ruby_final_statements", progressIncrease: 22, evidence: true },
                { text: "Study Dallas police", nextScene: "dallas_police_investigation", progressIncrease: 18, evidence: true }
            ],
            educationalNote: "Ruby's easy access to Oswald in police custody has never been adequately explained."
        },

        operation_40_investigation: {
            text: `OPERATION 40 - CIA ASSASSINATION UNIT

            A secret CIA squad with assassination capability:

            🎯 OPERATION 40:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • Created 1960 for Cuban operations
            • Assassination and sabotage team
            • Cuban exile operatives
            • CIA trained and funded
            • Members appear in JFK evidence
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            Some Operation 40 members were allegedly photographed in Dealey Plaza.`,
            image: "operation_40",
            imagePrompt: "CIA Operation 40, Cuban exile assassination team, covert operations",
            sources: ["CIA Cuban Files", "HSCA Investigation"],
            choices: [
                { text: "Study anti-Castro Cubans", nextScene: "anti_castro_cubans", progressIncrease: 22, evidence: true },
                { text: "Examine CIA-Mafia connection", nextScene: "cia_mafia_investigation", progressIncrease: 25, evidence: true },
                { text: "Review Three Tramps", nextScene: "three_tramps_investigation", progressIncrease: 18, evidence: true }
            ],
            educationalNote: "Operation 40 was a real CIA unit with documented assassination capabilities."
        },

        cia_anti_castro_programs: {
            text: `CIA ANTI-CASTRO PROGRAMS

            The full scope of CIA operations against Cuba:

            🇨🇺 CIA CUBAN OPERATIONS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • Bay of Pigs invasion (1961)
            • Operation MONGOOSE (sabotage)
            • Castro assassination plots
            • Exile training camps
            • Mafia cooperation
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            JFK's perceived "betrayal" at Bay of Pigs created enemies with means and motive.`,
            image: "cia_anti_castro",
            imagePrompt: "CIA anti-Castro programs, Bay of Pigs, Cuban exile operations",
            sources: ["CIA Cuban Files", "Church Committee"],
            choices: [
                { text: "Examine Cuban exiles", nextScene: "anti_castro_cubans", progressIncrease: 20, evidence: true },
                { text: "Study CIA-Mafia plots", nextScene: "cia_mafia_investigation", progressIncrease: 25, evidence: true },
                { text: "Review motives", nextScene: "cui_bono_analysis", progressIncrease: 22, evidence: true }
            ],
            educationalNote: "CIA anti-Castro operations created networks of skilled operatives with grievances against Kennedy."
        },

        badge_man_analysis: {
            text: `THE BADGE MAN PHOTO ANALYSIS

            Photo enhancement reveals mysterious figure behind fence:

            📷 BADGE MAN EVIDENCE:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • Figure visible behind picket fence
            • Appears to hold rifle
            • Badge or reflective object on chest
            • Consistent with grassy knoll shooter theory
            • Enhancement disputed by some analysts
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "badge_man",
            imagePrompt: "Badge Man photo enhancement, grassy knoll fence, mysterious figure",
            sources: ["Photographic Enhancement Studies"],
            choices: [
                { text: "Study grassy knoll evidence", nextScene: "grassy_knoll_investigation", progressIncrease: 20, evidence: true },
                { text: "Review witness testimony", nextScene: "witness_position_mapping", progressIncrease: 18, evidence: true },
                { text: "Examine acoustic evidence", nextScene: "acoustic_evidence_study", progressIncrease: 22, evidence: true }
            ],
            educationalNote: "The Badge Man photo remains controversial, with experts disagreeing on what it shows."
        },

        dark_complected_man: {
            text: `THE DARK COMPLECTED MAN

            Seated next to Umbrella Man in Dealey Plaza:

            👤 UNIDENTIFIED FIGURE:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • Sat on curb next to Umbrella Man
            • Made hand signals during shots
            • Never identified
            • Cuban exile connection suspected
            • May have been signaling shooters
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "dark_complected_man",
            imagePrompt: "Dark complected man in Dealey Plaza, mysterious figure, signaling",
            sources: ["HSCA Investigation"],
            choices: [
                { text: "Study Umbrella Man", nextScene: "umbrella_man_mystery", progressIncrease: 15, evidence: true },
                { text: "Examine Cuban connections", nextScene: "anti_castro_cubans", progressIncrease: 20, evidence: true },
                { text: "Review other figures", nextScene: "three_tramps_investigation", progressIncrease: 18, evidence: true }
            ],
            educationalNote: "The Dark Complected Man has never been identified despite appearing prominently in photos."
        },

        dallas_police_investigation: {
            text: `DALLAS POLICE INVESTIGATION FAILURES

            Multiple failures in the Dallas investigation:

            🚔 POLICE FAILURES:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • Evidence handling problems
            • Lost arrest records (Three Tramps)
            • Ruby access to police basement
            • Chain of custody breaks
            • Rushed conclusions
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "dallas_police",
            imagePrompt: "Dallas Police Department investigation failures, evidence problems",
            sources: ["Warren Commission Criticism", "HSCA Review"],
            choices: [
                { text: "Examine evidence problems", nextScene: "evidence_chain_custody", progressIncrease: 20, evidence: true },
                { text: "Study Ruby access", nextScene: "ruby_police_access", progressIncrease: 18, evidence: true },
                { text: "Review witness handling", nextScene: "witness_protection_files", progressIncrease: 22, evidence: true }
            ],
            educationalNote: "Dallas police investigation was heavily criticized for poor evidence handling."
        },

        evidence_chain_custody: {
            text: `EVIDENCE CHAIN OF CUSTODY PROBLEMS

            Critical evidence handling failures:

            ⚠️ CUSTODY PROBLEMS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • Magic bullet appeared on stretcher (who put it there?)
            • Autopsy photos don't match descriptions
            • Brain evidence now missing
            • Photographs show conflicting wound locations
            • Key evidence transported improperly
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "evidence_problems",
            imagePrompt: "Evidence handling problems, chain of custody failures, crime scene",
            sources: ["HSCA Evidence Review"],
            choices: [
                { text: "Examine medical evidence", nextScene: "medical_evidence_review", progressIncrease: 20, evidence: true },
                { text: "Study autopsy problems", nextScene: "autopsy_evidence_final", progressIncrease: 22, evidence: true },
                { text: "Review magic bullet", nextScene: "single_bullet_theory", progressIncrease: 18, evidence: true }
            ],
            educationalNote: "Evidence handling problems have undermined confidence in the official findings."
        },

        ce399_bullet_analysis: {
            text: `CE 399 - THE PRISTINE BULLET

            Analyzing the nearly intact "magic bullet":

            🔫 BULLET ANALYSIS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • Found on stretcher at Parkland
            • Nearly pristine condition
            • Allegedly caused 7 wounds
            • More fragments in victims than bullet lost
            • Who placed it on stretcher?
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "ce399_bullet",
            imagePrompt: "CE 399 pristine bullet, magic bullet evidence, forensic analysis",
            sources: ["Warren Commission Exhibit 399"],
            choices: [
                { text: "Analyze single bullet theory", nextScene: "single_bullet_theory", progressIncrease: 20, evidence: true },
                { text: "Review ballistics", nextScene: "ballistics_analysis", progressIncrease: 18, evidence: true },
                { text: "Study evidence handling", nextScene: "evidence_chain_custody", progressIncrease: 22, evidence: true }
            ],
            educationalNote: "CE 399's pristine condition despite allegedly causing 7 wounds has been heavily criticized."
        },

        tippit_witnesses: {
            text: `TIPPIT SHOOTING WITNESSES

            Conflicting accounts of who shot Officer Tippit:

            👁️ WITNESS CONFLICTS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • Some described different shooter than Oswald
            • Two men seen leaving scene
            • Shell casings from two different guns
            • Some witnesses changed stories after FBI visits
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "tippit_witnesses",
            imagePrompt: "Tippit shooting witnesses, conflicting testimony, Dallas investigation",
            sources: ["Warren Commission Testimony"],
            choices: [
                { text: "Examine Tippit's background", nextScene: "tippit_background", progressIncrease: 18, evidence: true },
                { text: "Study Oswald's arrest", nextScene: "oswald_arrest", progressIncrease: 20, evidence: true },
                { text: "Review witness deaths", nextScene: "witness_death_investigation", progressIncrease: 22, evidence: true }
            ],
            educationalNote: "Witness accounts of the Tippit shooting were inconsistent from the beginning."
        },

        tippit_background: {
            text: `OFFICER TIPPIT'S BACKGROUND

            Questions about why Tippit was in Oak Cliff:

            👮 TIPPIT QUESTIONS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • Not his patrol area
            • Known to work at Ruby's club
            • Possible mob connections
            • Meeting someone?
            • Why was he stopped there?
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "tippit_background",
            imagePrompt: "Officer Tippit background investigation, Dallas police",
            sources: ["Dallas Police Records"],
            choices: [
                { text: "Examine Ruby connection", nextScene: "jack_ruby_investigation", progressIncrease: 20, evidence: true },
                { text: "Study the shooting", nextScene: "tippit_shooting", progressIncrease: 18, evidence: true },
                { text: "Review witness accounts", nextScene: "tippit_witnesses", progressIncrease: 16, evidence: true }
            ],
            educationalNote: "Tippit's presence in Oak Cliff and possible connections remain unexplained."
        },

        oswald_interrogation: {
            text: `OSWALD'S INTERROGATION - NO RECORDINGS

            12 hours of interrogation with no record:

            ❓ INTERROGATION MYSTERY:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • No recording made
            • No transcript
            • No attorney present
            • Officers' notes vary significantly
            • What did Oswald actually say?
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "oswald_interrogation",
            imagePrompt: "Oswald being interrogated, Dallas police, no recording",
            sources: ["Dallas Police Records"],
            choices: [
                { text: "Examine 'patsy' claim", nextScene: "oswald_patsy_claim", progressIncrease: 20, evidence: true },
                { text: "Review evidence against him", nextScene: "oswald_evidence_review", progressIncrease: 18, evidence: true },
                { text: "Study Ruby's role", nextScene: "jack_ruby_investigation", progressIncrease: 22, evidence: true }
            ],
            educationalNote: "The failure to record Oswald's interrogation is a major investigative failure."
        },

        oswald_evidence_review: {
            text: `EVIDENCE AGAINST OSWALD - CRITICAL REVIEW

            Examining the case against Lee Harvey Oswald:

            📋 EVIDENCE ANALYSIS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            Circumstantial:
            • Worked at Book Depository
            • Owned rifle (allegedly)
            • Left building after shots
            • Backyard photos with rifle (disputed)

            Problems:
            • No fingerprints on trigger
            • Nitrate test inconclusive
            • Shooting ability questioned
            • Alibi witnesses dismissed
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "oswald_evidence",
            imagePrompt: "Evidence against Oswald, crime scene analysis, investigation",
            sources: ["Warren Commission Evidence"],
            choices: [
                { text: "Examine backyard photos", nextScene: "backyard_photos_analysis", progressIncrease: 20, evidence: true },
                { text: "Study his alibi", nextScene: "oswald_patsy_claim", progressIncrease: 18, evidence: true },
                { text: "Review rifle evidence", nextScene: "ballistics_analysis", progressIncrease: 22, evidence: true }
            ],
            educationalNote: "The evidence against Oswald was largely circumstantial and has been heavily questioned."
        },

        backyard_photos_analysis: {
            text: `BACKYARD PHOTOS - AUTHENTIC OR FAKE?

            The famous photos of Oswald with rifle:

            📷 PHOTO CONTROVERSY:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • Oswald claimed photos were faked
            • Shadow analysis inconsistent
            • Chin appears different from other photos
            • HSCA confirmed authentic (disputed)
            • Marina said she took them
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "backyard_photos",
            imagePrompt: "Oswald backyard photos, rifle pose, photo analysis",
            sources: ["Warren Commission", "HSCA Analysis"],
            choices: [
                { text: "Review evidence against Oswald", nextScene: "oswald_evidence_review", progressIncrease: 18, evidence: true },
                { text: "Study Marina's testimony", nextScene: "marina_oswald_background", progressIncrease: 20, evidence: true },
                { text: "Examine 'patsy' claim", nextScene: "oswald_patsy_claim", progressIncrease: 22, evidence: true }
            ],
            educationalNote: "The backyard photos remain controversial despite official authentication."
        },

        de_mohrenschildt_death: {
            text: `DE MOHRENSCHILDT'S DEATH - SAME DAY AS HSCA CONTACT

            The timing of his death was suspicious:

            ☠️ DEATH CIRCUMSTANCES:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            Date: March 29, 1977
            Cause: Gunshot wound (ruled suicide)
            Same day: HSCA investigator Fonzi located him
            About to be interviewed about Oswald
            Left behind: Diary mentioning Bush, CIA
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "de_mohrenschildt_death",
            imagePrompt: "De Mohrenschildt death investigation, suspicious timing",
            sources: ["HSCA Investigation"],
            badges: ["truthSeeker"],
            choices: [
                { text: "Review other witness deaths", nextScene: "witness_death_investigation", progressIncrease: 25, evidence: true },
                { text: "Study his CIA connections", nextScene: "oswald_cia_connections", progressIncrease: 22, evidence: true },
                { text: "Prepare conclusions", nextScene: "final_conclusions", progressIncrease: 28, evidence: true }
            ],
            educationalNote: "De Mohrenschildt died the same day he was located by congressional investigators."
        },

        lbj_criminal_exposure: {
            text: `LBJ'S CRIMINAL EXPOSURE

            Johnson faced serious legal jeopardy before Dallas:

            ⚖️ LBJ'S LEGAL TROUBLES:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • Bobby Baker scandal (corruption)
            • Billy Sol Estes fraud case
            • Multiple suspicious deaths connected to LBJ
            • About to be dropped from 1964 ticket
            • Life magazine investigation pending
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            All investigations stopped after November 22, 1963.`,
            image: "lbj_criminal",
            imagePrompt: "LBJ criminal investigations, Bobby Baker scandal, legal troubles",
            sources: ["Congressional Records", "FBI Files"],
            choices: [
                { text: "Examine who benefited", nextScene: "cui_bono_analysis", progressIncrease: 22, evidence: true },
                { text: "Study Texas oil connection", nextScene: "texas_oil_investigation", progressIncrease: 20, evidence: true },
                { text: "Review Vietnam policy change", nextScene: "vietnam_connection", progressIncrease: 25, evidence: true }
            ],
            educationalNote: "LBJ's legal troubles disappeared completely after becoming president."
        },

        texas_oil_investigation: {
            text: `TEXAS OIL INTERESTS

            The oil industry had motives against Kennedy:

            🛢️ OIL INDUSTRY MOTIVES:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • JFK planned to end oil depletion allowance
            • Would cost industry billions
            • Texas oil money backed LBJ
            • Hunt family extreme right-wing
            • Dallas: Oil capital of America
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "texas_oil",
            imagePrompt: "Texas oil interests, Dallas power structure, industry motives",
            sources: ["Economic Analysis"],
            choices: [
                { text: "Examine who benefited", nextScene: "cui_bono_analysis", progressIncrease: 22, evidence: true },
                { text: "Study LBJ connections", nextScene: "lbj_motive_investigation", progressIncrease: 20, evidence: true },
                { text: "Review military-industrial complex", nextScene: "military_industrial_investigation", progressIncrease: 25, evidence: true }
            ],
            educationalNote: "Texas oil interests stood to lose significantly from Kennedy's proposed tax reforms."
        },

        military_industrial_investigation: {
            text: `THE MILITARY-INDUSTRIAL COMPLEX

            Eisenhower's warning came true:

            🎖️ MILITARY INTERESTS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • JFK planned Vietnam withdrawal
            • Defense contractors needed war
            • CIA wanted revenge for Bay of Pigs
            • Pentagon opposed Kennedy's détente
            • Trillions in profits at stake
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "military_industrial",
            imagePrompt: "Military industrial complex, defense contractors, war profits",
            sources: ["Defense Department Records"],
            choices: [
                { text: "Study Vietnam policy change", nextScene: "vietnam_connection", progressIncrease: 25, evidence: true },
                { text: "Examine who benefited", nextScene: "cui_bono_analysis", progressIncrease: 22, evidence: true },
                { text: "Prepare conclusions", nextScene: "final_conclusions", progressIncrease: 28, evidence: true }
            ],
            educationalNote: "The military-industrial complex had enormous financial stakes in continuing the Cold War and Vietnam."
        },

        still_classified_analysis: {
            text: `STILL CLASSIFIED AFTER 60 YEARS

            What are they still hiding?

            🔒 UNRELEASED DOCUMENTS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • CIA Oswald files
            • Intelligence agency communications
            • FBI informant records
            • "Sources and methods" claims
            • Multiple delays by multiple presidents
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            If Oswald acted alone, why classify anything?`,
            image: "classified_documents",
            imagePrompt: "Still classified JFK documents, national security claims, ongoing secrecy",
            sources: ["NARA Release Records"],
            choices: [
                { text: "Review document releases", nextScene: "modern_document_releases", progressIncrease: 20, evidence: true },
                { text: "Examine CIA involvement", nextScene: "oswald_cia_connections", progressIncrease: 22, evidence: true },
                { text: "Prepare conclusions", nextScene: "final_conclusions", progressIncrease: 25, evidence: true }
            ],
            educationalNote: "Continued classification suggests information that would embarrass or implicate government agencies."
        },

        fbi_evidence_destruction: {
            text: `FBI DESTROYED EVIDENCE

            The FBI destroyed key Oswald evidence:

            🗑️ DESTROYED EVIDENCE:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • Oswald's note to FBI (threats?)
            • Agent Hosty ordered to destroy it
            • Order came from top of FBI
            • Admitted in 1975
            • What else was destroyed?
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "fbi_destruction",
            imagePrompt: "FBI evidence destruction, Hosty note, cover-up",
            sources: ["Church Committee"],
            choices: [
                { text: "Study Hoover's role", nextScene: "hoover_investigation", progressIncrease: 22, evidence: true },
                { text: "Review FBI surveillance", nextScene: "fbi_oswald_surveillance", progressIncrease: 20, evidence: true },
                { text: "Examine cover-up", nextScene: "suppressed_warren_sections", progressIncrease: 25, evidence: true }
            ],
            educationalNote: "The FBI's destruction of Oswald's note proves evidence was deliberately eliminated."
        },

        hoover_investigation: {
            text: `J. EDGAR HOOVER'S ROLE

            The FBI Director had his own motives:

            👤 HOOVER'S INTERESTS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • RFK was his boss (hated this)
            • JFK planned to force his retirement
            • Close friend of LBJ
            • Declared "case closed" within days
            • Controlled investigation direction
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "hoover_investigation",
            imagePrompt: "J Edgar Hoover FBI Director, investigation control",
            sources: ["FBI Records"],
            choices: [
                { text: "Examine evidence destruction", nextScene: "fbi_evidence_destruction", progressIncrease: 22, evidence: true },
                { text: "Study Warren Commission", nextScene: "suppressed_warren_sections", progressIncrease: 20, evidence: true },
                { text: "Review who benefited", nextScene: "cui_bono_analysis", progressIncrease: 25, evidence: true }
            ],
            educationalNote: "Hoover declared the case closed within days and controlled the FBI's investigation direction."
        },

        oswald_impersonation: {
            text: `WAS OSWALD IMPERSONATED?

            Evidence of Oswald impersonation in Mexico City:

            👥 IMPERSONATION EVIDENCE:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • CIA photo shows different man
            • Voice on tapes doesn't match
            • Witnesses describe different person
            • "Oswald" made unusual statements
            • Creating a false trail?
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "oswald_impersonation",
            imagePrompt: "Oswald impersonation evidence, Mexico City, identity confusion",
            sources: ["CIA Mexico City Files", "HSCA Investigation"],
            choices: [
                { text: "Study Mexico City trip", nextScene: "oswald_mexico_city", progressIncrease: 22, evidence: true },
                { text: "Examine 'patsy' claim", nextScene: "oswald_patsy_claim", progressIncrease: 20, evidence: true },
                { text: "Review intelligence connections", nextScene: "oswald_cia_connections", progressIncrease: 25, evidence: true }
            ],
            educationalNote: "Evidence suggests someone may have impersonated Oswald to create a trail leading to him."
        },

        cia_mexico_city_operation: {
            text: `CIA MEXICO CITY STATION

            The CIA's heavy surveillance in Mexico City:

            🎥 CIA SURVEILLANCE:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • Cameras on Soviet, Cuban embassies
            • Phone taps on all communications
            • Photo shows wrong man labeled "Oswald"
            • Tapes allegedly "routinely destroyed"
            • Later admitted tapes existed
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "cia_mexico_city",
            imagePrompt: "CIA Mexico City surveillance, embassy monitoring, Oswald tracking",
            sources: ["CIA Mexico City Files"],
            choices: [
                { text: "Examine impersonation", nextScene: "oswald_impersonation", progressIncrease: 22, evidence: true },
                { text: "Study Oswald's trip", nextScene: "oswald_mexico_city", progressIncrease: 20, evidence: true },
                { text: "Review CIA involvement", nextScene: "oswald_cia_connections", progressIncrease: 25, evidence: true }
            ],
            educationalNote: "The CIA's Mexico City operation raises questions about what they really knew about Oswald."
        },

        media_garrison_attacks: {
            text: `MEDIA ATTACKS ON GARRISON

            The coordinated campaign against Garrison:

            📺 MEDIA CAMPAIGN:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • NBC special attacking Garrison
            • Life magazine negative coverage
            • CIA assets in media (Mockingbird)
            • Witnesses discredited
            • Investigation sabotaged
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            Later: CIA admitted Shaw was their contact.`,
            image: "garrison_media_attacks",
            imagePrompt: "Media attacks on Garrison investigation, Operation Mockingbird",
            sources: ["Media Records", "CIA Mockingbird Files"],
            choices: [
                { text: "Study Operation Mockingbird", nextScene: "mockingbird_operation", progressIncrease: 22, evidence: true },
                { text: "Review Garrison investigation", nextScene: "garrison_investigation", progressIncrease: 20, evidence: true },
                { text: "Examine CIA Shaw admission", nextScene: "cia_shaw_confirmation", progressIncrease: 25, evidence: true }
            ],
            educationalNote: "The media campaign against Garrison was later revealed to have CIA connections."
        },

        cia_hidden_evidence: {
            text: `WHAT THE CIA HAS HIDDEN

            Evidence the CIA has concealed:

            🔒 HIDDEN EVIDENCE:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • Oswald CIA file opened before defection
            • Contact with agency assets
            • Mexico City full records
            • Anti-Castro operation details
            • Shaw connection (hidden until 1979)
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            "National security" has been used to hide embarrassing truths.`,
            image: "cia_hidden",
            imagePrompt: "CIA hidden evidence, classified documents, concealed truth",
            sources: ["HSCA Investigation", "Document Releases"],
            choices: [
                { text: "Review what's still classified", nextScene: "still_classified_analysis", progressIncrease: 22, evidence: true },
                { text: "Study Oswald CIA connections", nextScene: "oswald_cia_connections", progressIncrease: 20, evidence: true },
                { text: "Prepare conclusions", nextScene: "final_conclusions", progressIncrease: 28, evidence: true }
            ],
            educationalNote: "The CIA's concealment of evidence has undermined confidence in official findings."
        },

        marina_testimony_changes: {
            text: `MARINA'S CHANGING TESTIMONY

            Marina Oswald's story evolved over time:

            🔄 TESTIMONY CHANGES:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            1963-64: Supported lone gunman theory
            Later: "I believe there was a conspiracy"
            Changed stories about rifle, photos
            Under FBI control after assassination
            Language barrier exploited?
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "marina_testimony",
            imagePrompt: "Marina Oswald testimony changes, interview, changing stories",
            sources: ["Warren Commission", "Later Interviews"],
            choices: [
                { text: "Study her background", nextScene: "marina_oswald_background", progressIncrease: 18, evidence: true },
                { text: "Examine Ruth Paine connection", nextScene: "ruth_paine_investigation", progressIncrease: 20, evidence: true },
                { text: "Review backyard photos", nextScene: "backyard_photos_analysis", progressIncrease: 22, evidence: true }
            ],
            educationalNote: "Marina eventually said she believed there was a conspiracy to kill JFK."
        },

        depository_job_investigation: {
            text: `HOW OSWALD GOT THE DEPOSITORY JOB

            The suspicious job placement:

            💼 JOB PLACEMENT:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • Ruth Paine got him the job
            • Started October 1963 (one month before)
            • Motorcade route past building (later addition)
            • Perfect sniper position
            • Convenient timing
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "depository_job",
            imagePrompt: "Texas School Book Depository, Oswald job placement, assassination site",
            sources: ["Warren Commission"],
            choices: [
                { text: "Study Ruth Paine", nextScene: "ruth_paine_investigation", progressIncrease: 20, evidence: true },
                { text: "Examine 'patsy' theory", nextScene: "oswald_patsy_claim", progressIncrease: 22, evidence: true },
                { text: "Review motorcade route", nextScene: "secret_service_response", progressIncrease: 18, evidence: true }
            ],
            educationalNote: "The timing and circumstances of Oswald's job at the Depository remain suspicious."
        },

        paine_family_connections: {
            text: `THE PAINE FAMILY'S INTELLIGENCE CONNECTIONS

            Ruth Paine's family had intelligence ties:

            🕵️ FAMILY CONNECTIONS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • Sister: CIA employee
            • Brother-in-law: Bell Helicopter (LBJ connection)
            • Father: OSS background
            • Family friends with intelligence community
            • "Coincidentally" befriended Marina
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "paine_connections",
            imagePrompt: "Paine family intelligence connections, CIA links",
            sources: ["Research Records"],
            choices: [
                { text: "Study Ruth Paine", nextScene: "ruth_paine_investigation", progressIncrease: 20, evidence: true },
                { text: "Examine evidence at her home", nextScene: "paine_garage_evidence", progressIncrease: 22, evidence: true },
                { text: "Review Oswald's job placement", nextScene: "depository_job_investigation", progressIncrease: 18, evidence: true }
            ],
            educationalNote: "Ruth Paine's family connections to intelligence have raised questions about her role."
        },

        paine_garage_evidence: {
            text: `EVIDENCE FOUND AT PAINE'S HOME

            Critical evidence was at Ruth Paine's house:

            🔍 GARAGE EVIDENCE:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • Rifle stored there (allegedly)
            • Backyard photos found there
            • Oswald's belongings stored
            • Police search immediate
            • How did they know to look there?
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "paine_garage",
            imagePrompt: "Paine garage search, evidence discovery, police investigation",
            sources: ["Dallas Police Records"],
            choices: [
                { text: "Study Ruth Paine", nextScene: "ruth_paine_investigation", progressIncrease: 20, evidence: true },
                { text: "Examine backyard photos", nextScene: "backyard_photos_analysis", progressIncrease: 22, evidence: true },
                { text: "Review evidence handling", nextScene: "evidence_chain_custody", progressIncrease: 18, evidence: true }
            ],
            educationalNote: "Key evidence linking Oswald to the crime was found at Ruth Paine's home."
        },

        justice_dept_failure: {
            text: `JUSTICE DEPARTMENT FAILURE TO FOLLOW UP

            The DOJ never acted on HSCA recommendations:

            ⚖️ INACTION:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • HSCA concluded "probable conspiracy"
            • Recommended DOJ investigation
            • DOJ did nothing
            • No further prosecution
            • Case effectively closed
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            The government concluded conspiracy was probable, then did nothing.`,
            image: "doj_failure",
            imagePrompt: "Department of Justice inaction, HSCA recommendations ignored",
            sources: ["HSCA Final Report", "DOJ Records"],
            choices: [
                { text: "Review HSCA conclusions", nextScene: "hsca_conclusions", progressIncrease: 22, evidence: true },
                { text: "Examine ongoing secrecy", nextScene: "still_classified_analysis", progressIncrease: 20, evidence: true },
                { text: "Prepare conclusions", nextScene: "final_conclusions", progressIncrease: 28, evidence: true }
            ],
            educationalNote: "Despite concluding conspiracy was probable, no further investigation was conducted."
        },

        hsca_conclusions: {
            text: `HOUSE SELECT COMMITTEE CONCLUSIONS (1979)

            The second major investigation's findings:

            🏛️ HSCA FINAL REPORT:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            Major conclusion:
            "President Kennedy was PROBABLY ASSASSINATED AS A RESULT OF A CONSPIRACY"

            Key findings:
            • Scientific evidence indicates 4 shots
            • High probability of second gunman
            • Organized crime "probably involved"
            • FBI and CIA were "deficient" in investigation
            • Warren Commission relied on incomplete information

            Failed to determine:
            • Full extent of conspiracy
            • All participants
            • Degree of government involvement

            Recommendations:
            • Justice Department investigate further
            • (Never happened)
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "hsca_conclusions",
            imagePrompt: "House Select Committee report, conspiracy conclusion, congressional investigation findings",
            sources: ["HSCA Final Report 1979"],
            badges: ["truthSeeker"],
            choices: [
                {
                    text: "Why didn't Justice Department follow up?",
                    nextScene: "justice_dept_failure",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Review acoustic evidence",
                    nextScene: "acoustic_evidence_study",
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Prepare final conclusions",
                    nextScene: "final_conclusions",
                    progressIncrease: 30,
                    evidence: true
                }
            ],
            educationalNote: "The HSCA's conclusion of 'probable conspiracy' is often overlooked - the U.S. government itself determined JFK was likely killed by more than one person."
        }
    }
};

window.JFKStoryExpanded = JFKStoryExpanded;
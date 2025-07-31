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
                }
            ],
            educationalNote: "The statistical anomaly of witness deaths following the JFK assassination has been studied by researchers, though causation versus correlation remains debated."
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
        }
    }
};

window.JFKStoryExpanded = JFKStoryExpanded;
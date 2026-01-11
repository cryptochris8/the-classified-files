const September11CommissionExpanded = {
    sealed: false, // Set to true to seal this case
    releaseDate: null, // Optional: "Coming Soon" or specific date
    scenes: {
        intro: {
            text: `THE CLASSIFIED FILES: 9/11 COMMISSION INVESTIGATION
            
            DAY 1 - MONDAY, 7:45 AM
            
You are Dr. Rebecca Martinez, senior intelligence analyst for the 9/11 Commission. The federal building in Washington D.C. is already bustling with investigators, lawyers, and intelligence officials preparing for today's crucial hearings.

Your supervisor approaches with several thick binders. "Dr. Martinez, we've just received the final batch of declassified intelligence documents from CIA, FBI, and NSA. The Commission needs your analysis of the intelligence failures before this afternoon's testimony."

Inside: Previously classified Presidential Daily Briefs, FBI intelligence reports, CIA cables, and inter-agency communications that reveal the timeline of missed opportunities and intelligence failures leading to September 11, 2001.

Your colleague, Dr. James Chen, looks over the documents. "Rebecca, this is the complete picture - from the August 6th PDB warning to the communication breakdowns between agencies. The families of the victims deserve answers."

A classified memo catches your eye: "Pattern Analysis: 36 Presidential Daily Briefs mentioned Al Qaeda prior to 9/11. System was 'blinking red' but agencies failed to connect the dots."

Your secure phone buzzes. Text from Commission Chairman: "Focus on the intelligence timeline and agency coordination failures. Congress and the American people need to understand what went wrong and how to prevent it."

The weight of 2,977 lives lost rests on finding the truth.`,
            image: "commission_headquarters",
            imagePrompt: "Federal government building with 9/11 Commission investigation room, stacks of classified documents, serious investigative atmosphere",
            sources: ["9/11 Commission Report", "Declassified Intelligence Documents", "Congressional Investigation"],
            choices: [
                {
                    text: "Examine the August 6, 2001 Presidential Daily Brief warning",
                    nextScene: "august_6_pdb_analysis",
                    progressIncrease: 12,
                    factual: true,
                    evidence: true
                },
                {
                    text: "Analyze the intelligence agency communication failures",
                    nextScene: "agency_communication_failures",
                    progressIncrease: 10,
                    evidence: true
                },
                {
                    text: "Study the timeline of Al Qaeda warnings in 2001",
                    nextScene: "alqaeda_warnings_timeline",
                    progressIncrease: 15,
                    factual: true,
                    evidence: true
                },
                {
                    text: "Test your knowledge of the Commission's structure and mandate",
                    nextScene: "commission_knowledge_quiz",
                    progressIncrease: 5,
                    quizMode: true
                },
                {
                    text: "Review the hijacker identification and tracking failures",
                    nextScene: "hijacker_tracking_failures",
                    progressIncrease: 8,
                    evidence: true
                }
            ],
            educationalNote: "This investigation uses real findings from the official 9/11 Commission Report to understand intelligence failures and systemic breakdowns."
        },

        august_6_pdb_analysis: {
            text: `PRESIDENTIAL DAILY BRIEF ANALYSIS - "BIN LADIN DETERMINED TO STRIKE IN US"
            
            DAY 1 - 8:30 AM

You examine the most crucial intelligence document in the case - the August 6, 2001 Presidential Daily Brief that warned of Bin Laden's determination to attack inside the United States.

📋 AUGUST 6, 2001 PDB - DECLASSIFIED ANALYSIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Document Title: "Bin Ladin Determined To Strike in US"
Classification: Top Secret (Declassified 2004)
Recipient: President George W. Bush (Crawford, Texas)
Date Delivered: August 6, 2001 (36 days before 9/11)
Key Warnings:
- Patterns of suspicious activity consistent with hijacking preparations
- Al Qaeda members including US citizens residing in America
- Support structure inside US capable of aiding attacks
- Reference to 1993 World Trade Center attack precedent
Response: No significant policy changes implemented
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Dr. Chen reviews the document with you. "Rebecca, this PDB was the 36th item about Al Qaeda delivered to President Bush. The warnings were escalating but no decisive action was taken."

You notice critical details: "The brief mentioned 'patterns of suspicious activity consistent with preparations for hijacking' but didn't specify using planes as weapons."

A classified analysis reveals: "CIA prepared this PDB in response to President's specific questions about domestic threats. Intelligence community recognized summer 2001 threat reports were 'unprecedented.'"

The timeline shows a clear pattern of missed warnings.`,
            image: "classified_pdb_document",
            imagePrompt: "Declassified Presidential Daily Brief document with CIA seal, August 6 2001 date, government intelligence analysis room",
            sources: ["Declassified Presidential Daily Brief", "9/11 Commission Report Chapter 8", "CIA Intelligence Analysis"],
            choices: [
                {
                    text: "Examine the CIA's follow-up after delivering the PDB",
                    nextScene: "cia_followup_analysis",
                    progressIncrease: 18,
                    factual: true,
                    evidence: true
                },
                {
                    text: "Study the 35 previous Al Qaeda-related PDBs",
                    nextScene: "previous_pdb_analysis",
                    progressIncrease: 15,
                    evidence: true
                },
                {
                    text: "Analyze why the warning didn't trigger policy changes",
                    nextScene: "policy_response_failures",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Review the intelligence community's threat assessment process",
                    nextScene: "threat_assessment_process",
                    progressIncrease: 12,
                    factual: true,
                    evidence: true
                }
            ],
            educationalNote: "The August 6, 2001 PDB is a real declassified document that warned of Bin Laden's intention to strike inside the US, though it lacked operational specifics."
        },

        agency_communication_failures: {
            text: `INTER-AGENCY COMMUNICATION BREAKDOWN ANALYSIS
            
            DAY 1 - 9:15 AM

You examine the systematic failures in information sharing between CIA, FBI, and NSA that prevented the intelligence community from connecting the dots before 9/11.

🔗 INTELLIGENCE SHARING FAILURES - COMMISSION FINDINGS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CIA-FBI Communication: Critical intelligence withheld
NSA-Domestic Agencies: Surveillance data not shared effectively
Watchlist Management: Hundreds of names withheld from TIPOFF database
Legal Barriers: "Wall" between intelligence and law enforcement
Cultural Barriers: Agencies protecting sources and methods
Hijacker Intelligence: CIA had information on 2 hijackers, didn't inform FBI
Timeline: Failures occurred from January 2000 through September 11, 2001
MOU Agreement: January 2001 intelligence sharing agreement largely ineffective
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Dr. Chen highlights a critical finding: "The CIA knew about Khalid al-Mihdhar and Nawaf al-Hazmi as early as January 2000 but didn't place them on the FBI's watchlist until August 23, 2001."

You discover a pattern: "The agencies signed explicit agreements for coordination, including a January 2001 MOU, but institutional barriers prevented effective implementation."

A Commission analysis reveals: "The practical impossibility of knowing travel plans meant CIA withheld hundreds of suspected terrorist names from watchlist databases."

The systemic nature of the failures becomes clear.`,
            image: "intelligence_agency_chart",
            imagePrompt: "Government intelligence analysis room with organizational charts showing CIA, FBI, NSA connections and communication breakdowns",
            sources: ["9/11 Commission Report", "Intelligence Community Assessments", "FBI Inspector General Reports"],
            choices: [
                {
                    text: "Investigate the specific case of the two known hijackers",
                    nextScene: "known_hijackers_case_study",
                    progressIncrease: 25,
                    factual: true,
                    evidence: true
                },
                {
                    text: "Examine the legal and cultural barriers to sharing",
                    nextScene: "information_sharing_barriers",
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Study the watchlist and visa screening failures",
                    nextScene: "watchlist_screening_failures",
                    progressIncrease: 20,
                    factual: true,
                    evidence: true
                },
                {
                    text: "Review the post-9/11 intelligence reforms implemented",
                    nextScene: "intelligence_reform_analysis",
                    progressIncrease: 15,
                    evidence: true
                }
            ],
            educationalNote: "These communication failures are documented in the official 9/11 Commission Report and led to major intelligence community reforms."
        },

        known_hijackers_case_study: {
            text: `CASE STUDY: KHALID AL-MIHDHAR AND NAWAF AL-HAZMI TRACKING FAILURE
            
            DAY 1 - 10:00 AM

You examine the most egregious intelligence failure - the case of two known Al Qaeda operatives who were allowed to enter and remain in the United States undetected.

👥 KNOWN HIJACKER TRACKING FAILURE - DETAILED TIMELINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
January 2000: CIA identifies al-Mihdhar and al-Hazmi at Al Qaeda meeting
January 15, 2000: Both hijackers enter US on valid visas in Los Angeles
CIA Knowledge: Knew they were Al Qaeda operatives with US visas
FBI Notification: Never informed until August 23, 2001 (19 days before 9/11)
US Activities: Lived openly, took flight lessons, used real names
Watchlist Status: Not placed on any US government watchlist for 20 months
Final Location: American Airlines Flight 77 (Pentagon attack)
Commission Finding: "Opportunity to detect and potentially derail the plot"
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Dr. Chen shakes his head. "Rebecca, this is the smoking gun. The CIA had photographs, knew their names, and knew they were dangerous, but never told the FBI they were in America."

You analyze the timeline: "For 20 months, these known terrorists lived in California and later Virginia, completely undetected by domestic law enforcement."

A Commission assessment states: "This was not a single mistake but a systematic failure spanning multiple agencies and decision points over nearly two years."

The magnitude of the missed opportunity is staggering.`,
            image: "hijacker_surveillance_photos",
            imagePrompt: "Intelligence surveillance photos and documents tracking terrorist suspects, FBI investigation board with timeline",
            sources: ["9/11 Commission Report", "CIA Surveillance Records", "FBI Investigation Files"],
            choices: [
                {
                    text: "Examine how they operated undetected in the United States",
                    nextScene: "hijackers_us_activities",
                    progressIncrease: 22,
                    factual: true,
                    evidence: true
                },
                {
                    text: "Study the decision-making process that led to non-notification",
                    nextScene: "notification_decision_analysis",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Investigate what could have been prevented with proper tracking",
                    nextScene: "prevention_opportunity_analysis",
                    progressIncrease: 25,
                    evidence: true
                },
                {
                    text: "Review the accountability measures for this failure",
                    nextScene: "accountability_assessment",
                    progressIncrease: 15,
                    evidence: true
                }
            ],
            educationalNote: "The al-Mihdhar and al-Hazmi case represents one of the most significant missed opportunities to potentially prevent 9/11."
        },

        alqaeda_warnings_timeline: {
            text: `AL QAEDA THREAT WARNINGS - SUMMER 2001 TIMELINE
            
            DAY 1 - 11:30 AM

You reconstruct the escalating pattern of Al Qaeda threat warnings throughout 2001, showing how the intelligence community recognized an unprecedented level of terrorist chatter and planning.

⚠️ THREAT WARNING ESCALATION - 2001 TIMELINE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Spring 2001: Intelligence reports of imminent Al Qaeda attacks increase
June 2001: CIA reports "UBL [Bin Laden] Threats Are Real" (response to skepticism)
June 28, 2001: Clarke memo warns of "spectacular" attacks against US interests
July 2001: FBI issues Phoenix Memo about suspicious flight school students
July 10, 2001: CIA briefs White House on "significant terrorist attack" planning
August 6, 2001: PDB warns "Bin Ladin Determined To Strike in US"
August 16, 2001: FBI arrests Zacarias Moussaoui (suspicious flight training)
August 23, 2001: CIA finally requests al-Mihdhar/al-Hazmi be watchlisted
September 4, 2001: NSC principals meeting on Al Qaeda (delayed from summer)
September 11, 2001: Attacks occur despite escalating warnings
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Dr. Chen reviews the timeline with concern. "The intelligence community was practically screaming that something massive was coming, but the dots were never connected."

You notice a critical pattern: "CIA Director Tenet later said the 'system was blinking red,' yet no single agency had the complete picture or authority to act decisively."

A Commission finding reveals: "Many officials told us they knew something terrible was planned, and they were desperate to stop it, but the intelligence was fragmentary and not specific about time, place, or method."

The warnings were there, but the system failed to respond effectively.`,
            image: "threat_warning_timeline",
            imagePrompt: "Intelligence analysis room with timeline charts showing escalating Al Qaeda warnings throughout 2001, red alert indicators",
            sources: ["9/11 Commission Report", "Intelligence Community Threat Assessments", "NSC Meeting Records"],
            choices: [
                {
                    text: "Examine the Phoenix Memo and flight training intelligence",
                    nextScene: "phoenix_memo_analysis",
                    progressIncrease: 20,
                    factual: true,
                    evidence: true
                },
                {
                    text: "Study the delayed National Security Council response",
                    nextScene: "nsc_response_delay",
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Analyze why threats weren't elevated to operational response",
                    nextScene: "operational_response_failures",
                    progressIncrease: 22,
                    evidence: true
                },
                {
                    text: "Review the Moussaoui arrest and missed connections",
                    nextScene: "moussaoui_missed_connections",
                    progressIncrease: 15,
                    factual: true,
                    evidence: true
                }
            ],
            educationalNote: "The summer 2001 threat warnings show the intelligence community detected increased Al Qaeda activity but couldn't prevent the attacks."
        },

        phoenix_memo_analysis: {
            text: `PHOENIX MEMO - FBI FLIGHT TRAINING INTELLIGENCE FAILURE
            
            DAY 1 - 12:15 PM

You examine one of the most prescient but ignored pieces of intelligence - FBI Agent Kenneth Williams' memo about suspicious Middle Eastern students at flight schools.

✈️ PHOENIX MEMO - JULY 10, 2001 ANALYSIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Author: FBI Special Agent Kenneth Williams (Phoenix Division)
Date: July 10, 2001 (9 weeks before 9/11)
Subject: "Radical fundamentalists learning to fly"
Warning: Bin Laden followers training at US flight schools
Recommendation: Canvas all flight schools for Middle Eastern students
Target: Suspected coordination of terrorist flight training
Distribution: FBI Counterterrorism Division, New York FBI office
Action Taken: No systematic follow-up or investigation
Connection Missed: None made to ongoing Al Qaeda threat assessments
Prescience Level: Identified exact method used in 9/11 attacks
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Dr. Chen examines the memo with amazement. "Agent Williams essentially predicted the 9/11 attack method two months in advance, but headquarters never acted on his intelligence."

You analyze the investigative recommendation: "Williams specifically suggested FBI canvas flight schools nationwide to identify Middle Eastern students who might be connected to terrorist organizations."

A Commission finding reveals: "The Phoenix memo was not circulated outside the FBI, and even within the FBI, it received no systematic analytical review or follow-up investigation."

The failure to act on this prescient intelligence was catastrophic.`,
            image: "fbi_phoenix_memo",
            imagePrompt: "FBI field office with agent reviewing flight school documents and suspicious student files, investigative atmosphere",
            sources: ["Phoenix FBI Memo", "9/11 Commission Report", "FBI Inspector General Investigation"],  
            choices: [
                {
                    text: "Study why FBI headquarters didn't act on the memo",
                    nextScene: "fbi_headquarters_inaction",
                    progressIncrease: 25,
                    evidence: true
                },
                {
                    text: "Examine flight school connections to the 19 hijackers",
                    nextScene: "flight_school_connections",
                    progressIncrease: 20,
                    factual: true,
                    evidence: true
                },
                {
                    text: "Analyze the information sharing failures within FBI",
                    nextScene: "fbi_internal_communication",
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Review similar intelligence that was ignored",
                    nextScene: "ignored_intelligence_pattern",
                    progressIncrease: 15,
                    evidence: true
                }
            ],
            educationalNote: "The Phoenix Memo represents one of the most specific and accurate intelligence warnings that was ignored before 9/11."
        },

        operational_response_failures: {
            text: `OPERATIONAL RESPONSE FAILURES - FROM INTELLIGENCE TO ACTION
            
            DAY 1 - 1:45 PM

You examine why the escalating intelligence warnings failed to translate into effective operational responses that could have prevented the attacks.

🚨 INTELLIGENCE-TO-ACTION FAILURE ANALYSIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Intelligence Warnings: Abundant and escalating throughout 2001
Policy Response: Minimal changes to domestic security posture
Aviation Security: No significant enhancements despite hijacking warnings  
Border Security: Watchlist and visa processes remained inadequate
Law Enforcement: No nationwide alert or enhanced surveillance
Military Options: Limited and not considered for domestic threat
Coordination: No single agency empowered to coordinate response
Resource Allocation: Counterterrorism not highest intelligence priority
Strategic Planning: Long-term Al Qaeda strategy delayed until September 4
Congressional Oversight: Limited awareness of threat level
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Dr. Chen reviews the operational gaps: "We had unprecedented intelligence warnings, but our response mechanisms were designed for Cold War state threats, not non-state terrorist actors."

You identify systemic issues: "No single official or agency had the authority to coordinate a comprehensive domestic response to the Al Qaeda threat."

A Commission assessment concludes: "The failure was not just intelligence gathering, but the inability to translate warnings into protective action across multiple government agencies and jurisdictions."

The gap between knowing and acting proved fatal.`,
            image: "government_response_coordination",
            imagePrompt: "Government crisis coordination center with multiple agency representatives, response planning boards, national security atmosphere",
            sources: ["9/11 Commission Report", "National Security Council Records", "Interagency Coordination Analysis"],
            choices: [
                {
                    text: "Examine the Commission's recommendations for reform",  
                    nextScene: "commission_reform_recommendations",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Study the institutional barriers to coordinated response",
                    nextScene: "institutional_barriers_analysis", 
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Analyze what preventive measures could have been taken",
                    nextScene: "preventive_measures_analysis",
                    progressIncrease: 22,
                    evidence: true
                },
                {
                    text: "Review the lessons learned for future threat response",
                    nextScene: "lessons_learned_assessment",
                    progressIncrease: 15,
                    evidence: true
                }
            ],
            educationalNote: "The Commission identified that intelligence warnings alone are insufficient without effective mechanisms to translate them into coordinated protective action."
        },

        commission_reform_recommendations: {
            text: `9/11 COMMISSION REFORM RECOMMENDATIONS - PREVENTING FUTURE ATTACKS
            
            DAY 1 - 2:30 PM

You compile the Commission's comprehensive recommendations for intelligence reform and homeland security improvements based on the investigation's findings.

📋 COMMISSION REFORM RECOMMENDATIONS - FINAL REPORT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INTELLIGENCE REFORMS:
✓ Create Director of National Intelligence (unified intelligence leadership)
✓ Establish National Counterterrorism Center (coordinate threat analysis)
✓ Break down information sharing barriers between agencies
✓ Reform congressional oversight of intelligence community

HOMELAND SECURITY REFORMS:
✓ Strengthen border security and immigration controls
✓ Improve aviation security screening and procedures
✓ Enhance first responder communication and coordination
✓ Create unified incident command system

POLICY REFORMS:
✓ Develop comprehensive counterterrorism strategy
✓ Address terrorist financing and money laundering
✓ Strengthen international intelligence cooperation
✓ Reform visa and watchlist screening processes
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Dr. Chen reviews the recommendations: "These reforms address every major failure we've identified - from intelligence sharing to operational coordination to policy implementation."

You assess the implementation: "Many of these recommendations became law through the Intelligence Reform and Terrorism Prevention Act of 2004, fundamentally restructuring how America approaches national security."

A Commission summary states: "The goal is unity of effort across the U.S. government to prevent terrorist attacks and to be prepared to respond if prevention fails."

The investigation has revealed both failures and the path forward.`,
            image: "commission_final_report",
            imagePrompt: "9/11 Commission final report presentation with reform recommendations, congressional hearing room, official government setting",
            sources: ["9/11 Commission Final Report", "Intelligence Reform Act 2004", "Congressional Implementation Records"],
            choices: [
                {
                    text: "Present final conclusions to the Commission",
                    nextScene: "final_commission_presentation",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Assess the effectiveness of implemented reforms",
                    nextScene: "reform_effectiveness_analysis",
                    progressIncrease: 15,
                    evidence: true
                },
                {
                    text: "Review ongoing challenges in intelligence coordination",
                    nextScene: "ongoing_coordination_challenges",
                    progressIncrease: 12,
                    evidence: true
                },
                {
                    text: "Start a new 9/11 Commission investigation",
                    nextScene: "intro",
                    progressIncrease: 5
                }
            ],
            educationalNote: "The 9/11 Commission's recommendations led to the most significant intelligence and homeland security reforms since the creation of the CIA."
        },

        final_commission_presentation: {
            text: `FINAL INVESTIGATION REPORT - 9/11 COMMISSION FINDINGS
            
            DAY 1 - 3:15 PM

You prepare your comprehensive analysis for the Commission's final report to Congress and the American people, summarizing the intelligence failures and systemic breakdowns that enabled 9/11.

📋 FINAL 9/11 COMMISSION INVESTIGATION REPORT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CONCLUSION: Systemic Intelligence and Coordination Failures

KEY FINDINGS:
✓ 36 Presidential Daily Briefs warned of Al Qaeda threats
✓ August 6 PDB specifically warned of domestic attack plans
✓ CIA knew identities of 2 hijackers for 20 months, never notified FBI
✓ Phoenix Memo predicted flight training attack method, ignored
✓ Multiple agencies received escalating warnings but failed to coordinate
✓ No single official had authority to coordinate domestic response
✓ Information sharing barriers prevented connecting the dots
✓ Aviation and border security remained inadequate despite warnings

The attacks were preventable through better intelligence coordination, information sharing, and unified national security leadership. The failure was not lack of intelligence, but failure to act on available intelligence.

VICTIMS: 2,977 lives lost due to systemic government failures
LESSONS: Intelligence reform and unified command essential for national security
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Dr. Chen reviews your comprehensive analysis. "This represents the most thorough investigation of intelligence failures in American history."

You prepare for the presentation: "The families of the victims and the American people deserve to understand how these failures occurred and how we've reformed to prevent them."

INVESTIGATION STATUS: COMPLETE
Historical Truth: DOCUMENTED
Reform Implementation: ONGOING`,
            image: "commission_final_presentation",
            imagePrompt: "Formal 9/11 Commission presentation to Congress with final report, families of victims in attendance, solemn government atmosphere",
            sources: ["9/11 Commission Final Report", "Congressional Testimony", "Intelligence Community Reform Analysis"],
            choices: [
                {
                    text: "Deliver findings to Congress and victim families",
                    nextScene: "congressional_family_briefing",
                    progressIncrease: 15,
                    evidence: true
                },
                {
                    text: "Focus on implementation of security reforms",
                    nextScene: "security_reform_implementation",
                    progressIncrease: 12
                },
                {
                    text: "Document lessons for future threat prevention",
                    nextScene: "future_threat_prevention",
                    progressIncrease: 10
                },
                {
                    text: "Start a new 9/11 Commission investigation",
                    nextScene: "intro",
                    progressIncrease: 5
                }
            ],
            educationalNote: "The 9/11 Commission's work provides crucial lessons about intelligence failures and the importance of coordinated national security response."
        },

        commission_knowledge_quiz: {
            text: `KNOWLEDGE ASSESSMENT - 9/11 COMMISSION STRUCTURE AND MANDATE

            Before proceeding with the investigation, test your knowledge of the Commission's official structure and purpose.

QUESTION: What was the official name of the independent commission that investigated the September 11 attacks?

This will help establish your understanding of the Commission's mandate and authority.`,
            image: "commission_seal",
            imagePrompt: "Official 9/11 Commission seal and congressional authorization documents, formal government investigation setting",
            sources: ["9/11 Commission Official Records"],
            choices: [
                {
                    text: "National Commission on Terrorist Attacks Upon the United States",
                    nextScene: "august_6_pdb_analysis",
                    quizAnswer: true,
                    progressIncrease: 10,
                    evidence: true
                },
                {
                    text: "Independent Commission on September 11 Intelligence Failures",
                    nextScene: "august_6_pdb_analysis",
                    quizAnswer: false,
                    progressIncrease: 5
                },
                {
                    text: "Congressional Committee on Homeland Security",
                    nextScene: "august_6_pdb_analysis",
                    quizAnswer: false,
                    progressIncrease: 5
                },
                {
                    text: "Federal Investigation Commission on Terrorist Attacks",
                    nextScene: "august_6_pdb_analysis",
                    quizAnswer: false,
                    progressIncrease: 5
                }
            ],
            educationalNote: "The official name was the 'National Commission on Terrorist Attacks Upon the United States,' commonly known as the 9/11 Commission."
        },

        hijacker_tracking_failures: {
            text: `HIJACKER TRACKING AND IDENTIFICATION FAILURES

            DAY 1 - 8:00 AM

You examine the systematic failures in tracking and identifying the 19 hijackers before they carried out their attack, despite multiple opportunities for detection.

👥 HIJACKER IDENTIFICATION FAILURES - COMPREHENSIVE ANALYSIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Total Hijackers: 19 individuals across 4 flights
Known to Intelligence: 2 (al-Mihdhar, al-Hazmi) - CIA aware since January 2000
Visa Violations: Multiple hijackers had expired or fraudulent visas
Watch List Status: Only 2 placed on watchlist (August 23, 2001 - 19 days before)
Flight Training: Several attended US flight schools openly
Immigration Contacts: Multiple encounters with border/immigration officials
Red Flags Missed: Suspicious travel patterns, cash payments, one-way tickets
FBI Field Reports: Phoenix Memo and Moussaoui arrest not connected
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Dr. Chen reviews the tracking failures: "The hijackers weren't invisible. They used real names, attended flight schools, and had multiple contacts with government officials. The system simply wasn't designed to connect these dots."

You analyze the pattern: "Each agency had pieces of the puzzle, but no mechanism existed to assemble them into a coherent threat picture."

A Commission finding states: "The 19 hijackers were not combatants skilled in the use of weaponry. They relied on taking advantage of weaknesses in the US system."`,
            image: "hijacker_tracking_board",
            imagePrompt: "Intelligence tracking board with 19 hijacker photos and movement patterns, FBI investigation room, red flags and missed connections highlighted",
            sources: ["9/11 Commission Report", "FBI Hijacker Investigation Files", "Immigration Records Analysis"],
            choices: [
                {
                    text: "Study the specific case of the two known hijackers",
                    nextScene: "known_hijackers_case_study",
                    progressIncrease: 20,
                    factual: true,
                    evidence: true
                },
                {
                    text: "Examine the visa and immigration screening failures",
                    nextScene: "watchlist_screening_failures",
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Analyze the flight school intelligence connections",
                    nextScene: "flight_school_connections",
                    progressIncrease: 15,
                    evidence: true
                },
                {
                    text: "Review the inter-agency communication breakdowns",
                    nextScene: "agency_communication_failures",
                    progressIncrease: 12,
                    evidence: true
                }
            ],
            educationalNote: "The hijacker tracking failures demonstrate how fragmented intelligence systems allowed known threats to operate undetected inside the United States."
        },

        cia_followup_analysis: {
            text: `CIA FOLLOW-UP AFTER THE AUGUST 6 PDB WARNING

            DAY 1 - 9:00 AM

You examine what actions the CIA took - or failed to take - after delivering the stark warning about Bin Laden's intention to strike inside the United States.

🔍 CIA POST-PDB RESPONSE ANALYSIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PDB Delivery Date: August 6, 2001
Presidential Response: Asked "All right, you've covered your ass now"
CIA Follow-Up Actions: No new collection requirements issued
Threat Level: Remained at elevated status (no increase)
Domestic Focus: CIA maintained overseas focus per legal restrictions
FBI Coordination: No urgent briefing to FBI leadership on domestic threat
Field Office Alert: No directive to intensify domestic surveillance
Strategic Assessment: No new analysis requested or produced
Days Until Attack: 36
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Dr. Chen reviews the aftermath: "The PDB was delivered, but it triggered no significant policy response. The President later said he didn't recall any specific recommendations for action."

You examine CIA protocols: "The Agency's legal mandate focused on foreign intelligence. Even after warning of a domestic threat, institutional boundaries limited their response."

A Commission assessment notes: "The PDB did not lead to any new initiatives, threat briefings, or policy decisions that might have disrupted the plot."`,
            image: "cia_briefing_aftermath",
            imagePrompt: "CIA briefing room after PDB delivery, analysts reviewing documents, no urgent action being taken, institutional complacency atmosphere",
            sources: ["9/11 Commission Report", "CIA Briefing Records", "White House Response Analysis"],
            choices: [
                {
                    text: "Examine why no policy changes were implemented",
                    nextScene: "policy_response_failures",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Study the previous 35 Al Qaeda PDBs",
                    nextScene: "previous_pdb_analysis",
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Analyze the legal constraints on CIA domestic action",
                    nextScene: "information_sharing_barriers",
                    progressIncrease: 15,
                    evidence: true
                },
                {
                    text: "Review the threat assessment escalation process",
                    nextScene: "threat_assessment_process",
                    progressIncrease: 12,
                    evidence: true
                }
            ],
            educationalNote: "The lack of follow-up action after the August 6 PDB represents a critical failure to translate intelligence warnings into protective measures."
        },

        previous_pdb_analysis: {
            text: `ANALYSIS OF 35 PRIOR AL QAEDA PRESIDENTIAL DAILY BRIEFS

            DAY 1 - 9:45 AM

You examine the pattern of Al Qaeda warnings delivered to the President before the August 6, 2001 PDB, revealing an escalating threat picture that wasn't acted upon.

📋 AL QAEDA PDB PATTERN ANALYSIS - PRE-AUGUST 6, 2001
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Total Al Qaeda PDBs: 36 items (January 2001 - September 11, 2001)
Pre-August 6 Items: 35 warnings over 7 months
Threat Escalation: Significant increase in spring/summer 2001
Key Themes: Attack planning, operational preparations, US targets
CIA Assessment: "System was blinking red" (Director Tenet)
Specificity Level: Strategic warnings, limited tactical details
Domestic vs. Overseas: Most focused on overseas targets
Response Pattern: No significant policy changes implemented
Cumulative Effect: Warnings became normalized
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Dr. Chen reviews the pattern: "The intelligence community was practically screaming about Al Qaeda, but the constant drumbeat of warnings may have paradoxically dulled the response."

You note a troubling pattern: "When threats are constant but attacks don't materialize, decision-makers can become desensitized to warnings."

A Commission finding reveals: "The threat reporting was so voluminous that intelligence professionals had difficulty distinguishing the signal from the noise."`,
            image: "pdb_archive_analysis",
            imagePrompt: "Intelligence analyst reviewing stacks of Presidential Daily Briefs, Al Qaeda warnings highlighted, pattern analysis charts",
            sources: ["Declassified PDB Records", "9/11 Commission Report", "Intelligence Community Threat Analysis"],
            choices: [
                {
                    text: "Examine the August 6 PDB in detail",
                    nextScene: "august_6_pdb_analysis",
                    progressIncrease: 15,
                    factual: true,
                    evidence: true
                },
                {
                    text: "Study why warnings didn't trigger action",
                    nextScene: "policy_response_failures",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Analyze the 2001 threat timeline",
                    nextScene: "alqaeda_warnings_timeline",
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Review the ignored intelligence pattern",
                    nextScene: "ignored_intelligence_pattern",
                    progressIncrease: 12,
                    evidence: true
                }
            ],
            educationalNote: "The volume of pre-9/11 Al Qaeda intelligence demonstrates that the attacks weren't due to lack of warning, but failure to act on warnings."
        },

        policy_response_failures: {
            text: `POLICY RESPONSE FAILURES - WHY WARNINGS DIDN'T TRIGGER ACTION

            DAY 1 - 10:30 AM

You analyze why the mounting intelligence warnings about Al Qaeda failed to generate meaningful policy responses that could have prevented the attacks.

⚠️ POLICY RESPONSE FAILURE ANALYSIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Intelligence Quality: Abundant strategic warnings
Tactical Specifics: Limited (no time, place, method details)
Policy Paralysis: Uncertainty led to inaction
Competing Priorities: China, missile defense, other issues
Institutional Bias: Overseas focus, limited domestic threat framework
Resource Constraints: Counterterrorism underfunded relative to threat
Decision Authority: No single official empowered to act
Risk Assessment: Uncertain costs vs. uncertain threats
Political Environment: New administration, policy review ongoing
Historical Precedent: No previous domestic mass-casualty attack
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Dr. Chen examines the decision-making: "The warnings were real, but they lacked the specificity that would compel dramatic action. Officials asked 'What should we do?' and couldn't find clear answers."

You identify systemic issues: "The system was designed to respond to specific, imminent threats. Strategic warnings about a determined adversary's intentions didn't fit existing response protocols."

A Commission assessment concludes: "The government was not organized, led, or equipped to respond adequately to the unprecedented nature of the threat."`,
            image: "policy_meeting_inaction",
            imagePrompt: "White House policy meeting with officials debating threat response, charts showing intelligence warnings, institutional paralysis atmosphere",
            sources: ["9/11 Commission Report", "NSC Policy Records", "White House Decision-Making Analysis"],
            choices: [
                {
                    text: "Study the institutional barriers to coordinated response",
                    nextScene: "institutional_barriers_analysis",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Examine what preventive measures could have been taken",
                    nextScene: "preventive_measures_analysis",
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Analyze the delayed NSC policy review",
                    nextScene: "nsc_response_delay",
                    progressIncrease: 15,
                    evidence: true
                },
                {
                    text: "Review the Commission's reform recommendations",
                    nextScene: "commission_reform_recommendations",
                    progressIncrease: 12,
                    evidence: true
                }
            ],
            educationalNote: "The policy response failures show how institutional structures and decision-making processes can prevent effective action even when threats are known."
        },

        threat_assessment_process: {
            text: `INTELLIGENCE COMMUNITY THREAT ASSESSMENT PROCESS

            DAY 1 - 11:00 AM

You examine how the intelligence community assessed and communicated threats before 9/11, revealing systemic weaknesses in translating raw intelligence into actionable warnings.

🔎 THREAT ASSESSMENT PROCESS ANALYSIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Collection: Multiple agencies gathering intelligence independently
Analysis: Each agency produced separate assessments
Synthesis: No mechanism to combine all-source intelligence
Dissemination: Information sharing limited by legal and cultural barriers
Actionable Intelligence: Strategic vs. tactical gap
Warning Thresholds: No clear criteria for elevated response
Domestic Focus: FBI had law enforcement focus, not strategic analysis
Foreign Focus: CIA prohibited from domestic collection
Coordination: No unified threat assessment authority
Consumer Feedback: Limited guidance on what policymakers needed
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Dr. Chen reviews the process flaws: "Each agency was doing its job, but no one was responsible for putting all the pieces together into a coherent picture."

You analyze the structural issues: "The CIA knew about overseas threats, the FBI knew about domestic suspicious activity, but the wall between them prevented synthesis."

A Commission finding states: "The intelligence community struggled to pierce the veil of terrorist compartmentalization and secrecy because its own structure was equally compartmentalized."`,
            image: "threat_assessment_center",
            imagePrompt: "Intelligence analysis center with multiple agency feeds, threat assessment boards, fragmented information flow visualization",
            sources: ["9/11 Commission Report", "Intelligence Community Process Analysis", "Threat Assessment Protocols"],
            choices: [
                {
                    text: "Examine the information sharing barriers",
                    nextScene: "information_sharing_barriers",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Study the Al Qaeda warnings timeline",
                    nextScene: "alqaeda_warnings_timeline",
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Analyze the intelligence reform recommendations",
                    nextScene: "intelligence_reform_analysis",
                    progressIncrease: 15,
                    evidence: true
                },
                {
                    text: "Review the August 6 PDB creation process",
                    nextScene: "august_6_pdb_analysis",
                    progressIncrease: 12,
                    evidence: true
                }
            ],
            educationalNote: "The threat assessment process failures led to creation of the National Counterterrorism Center to synthesize all-source intelligence."
        },

        information_sharing_barriers: {
            text: `LEGAL AND CULTURAL BARRIERS TO INTELLIGENCE SHARING

            DAY 1 - 11:45 AM

You examine the legal restrictions and institutional culture that prevented effective information sharing between intelligence and law enforcement agencies.

🚧 INFORMATION SHARING BARRIERS - COMPREHENSIVE ANALYSIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
THE WALL:
Legal Origin: 1978 FISA Act interpretation
Purpose: Separate intelligence from criminal investigations
Effect: Prevented FBI agents from sharing information internally
Consequence: Intelligence and criminal cases couldn't be connected

CULTURAL BARRIERS:
Need-to-Know: Agencies hoarded information for competitive advantage
Sources & Methods: Fear of exposing collection capabilities
Turf Protection: Agencies resisted sharing credit or resources
Classification: Over-classification limited distribution
Technology: Incompatible databases prevented information flow

RESULT: Critical intelligence about hijackers never reached those who could act
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Dr. Chen reviews the systemic barriers: "The Wall wasn't malicious - it was designed to protect civil liberties. But its interpretation became so restrictive that it prevented FBI agents from even talking to each other."

You analyze the cultural issues: "Beyond legal restrictions, agencies simply didn't trust each other or see sharing as beneficial to their missions."

A Commission assessment notes: "The biggest impediment to information sharing was not lack of technology, but lack of trust and will to share."`,
            image: "information_wall_diagram",
            imagePrompt: "Diagram showing information flow barriers between CIA, FBI, NSA, with wall preventing communication, frustrated analysts on both sides",
            sources: ["9/11 Commission Report", "FISA Court Records", "Intelligence Community Culture Analysis"],
            choices: [
                {
                    text: "Study the known hijackers case as example of sharing failure",
                    nextScene: "known_hijackers_case_study",
                    progressIncrease: 22,
                    factual: true,
                    evidence: true
                },
                {
                    text: "Examine the FBI internal communication failures",
                    nextScene: "fbi_internal_communication",
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Analyze post-9/11 information sharing reforms",
                    nextScene: "intelligence_reform_analysis",
                    progressIncrease: 15,
                    evidence: true
                },
                {
                    text: "Review the watchlist and screening failures",
                    nextScene: "watchlist_screening_failures",
                    progressIncrease: 12,
                    evidence: true
                }
            ],
            educationalNote: "The information sharing barriers led to the USA PATRIOT Act provisions allowing greater intelligence-law enforcement coordination."
        },

        watchlist_screening_failures: {
            text: `WATCHLIST AND VISA SCREENING FAILURES

            DAY 1 - 12:30 PM

You examine the failures in terrorist watchlist management and visa screening that allowed known threats to enter and remain in the United States.

📋 WATCHLIST & SCREENING FAILURES - ANALYSIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WATCHLIST ISSUES:
Multiple Databases: No unified terrorist watchlist
TIPOFF Database: State Department list incomplete
CIA Knowledge: Knew about hijackers but didn't add to lists
FBI Awareness: Limited access to CIA intelligence
Timeliness: Al-Mihdhar added 19 days before attack

VISA SCREENING FAILURES:
Fraudulent Documents: Multiple hijackers used suspicious applications
Interview Quality: Consular officers undertrained on terrorism
Red Flags Missed: Incomplete applications approved
Saudi Arabia: High-volume, expedited processing
Re-entry: Known suspicious individuals allowed back into US

BORDER SECURITY:
Immigration Contacts: Multiple encounters with INS
Overstays: Several hijackers violated visa terms
No-Fly List: Virtually non-existent before 9/11
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Dr. Chen examines the screening gaps: "The hijackers weren't master spies. Many of their visa applications had obvious problems that should have triggered additional scrutiny."

You analyze the systemic issues: "No single agency owned the watchlist problem. Information existed in silos that were never connected to border screening."

A Commission finding states: "Nine of the hijackers had their visa applications approved by a single consular officer in Jeddah, Saudi Arabia, in a high-volume environment with minimal scrutiny."`,
            image: "visa_screening_failure",
            imagePrompt: "Consular office with visa applications, watchlist database showing gaps, immigration screening station, security failure visualization",
            sources: ["9/11 Commission Report", "State Department Visa Records", "Immigration Screening Analysis"],
            choices: [
                {
                    text: "Study the hijacker identification failures",
                    nextScene: "hijacker_tracking_failures",
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Examine the two known hijackers case",
                    nextScene: "known_hijackers_case_study",
                    progressIncrease: 22,
                    factual: true,
                    evidence: true
                },
                {
                    text: "Analyze the flight school connections",
                    nextScene: "flight_school_connections",
                    progressIncrease: 15,
                    evidence: true
                },
                {
                    text: "Review the post-9/11 screening reforms",
                    nextScene: "security_reform_implementation",
                    progressIncrease: 12,
                    evidence: true
                }
            ],
            educationalNote: "The watchlist and screening failures led to creation of the Terrorist Screening Center and unified terrorist watchlist after 9/11."
        },

        intelligence_reform_analysis: {
            text: `POST-9/11 INTELLIGENCE COMMUNITY REFORMS

            DAY 1 - 1:00 PM

You analyze the comprehensive intelligence reforms implemented after 9/11 based on the Commission's findings about systemic failures.

🔄 INTELLIGENCE REFORM IMPLEMENTATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STRUCTURAL REFORMS (2004 Intelligence Reform Act):
✓ Director of National Intelligence (DNI) created
✓ National Counterterrorism Center (NCTC) established
✓ Information Sharing Environment mandated
✓ Privacy and Civil Liberties Board created

OPERATIONAL REFORMS:
✓ Joint Terrorism Task Forces expanded
✓ Terrorist Screening Center unified watchlists
✓ FBI National Security Branch created
✓ Intelligence fusion centers established

CULTURAL REFORMS:
✓ "Need to share" vs. "need to know" emphasis
✓ Joint duty assignments across agencies
✓ Unified training programs
✓ Common databases and systems

ONGOING CHALLENGES:
- Budget authority still fragmented
- Cultural resistance to change
- Balancing security and civil liberties
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Dr. Chen reviews the reforms: "The Commission's recommendations fundamentally restructured how America approaches intelligence and counterterrorism."

You assess implementation: "The DNI and NCTC addressed the coordination failures, but some Commission members argue the reforms didn't go far enough."

A follow-up assessment notes: "The reforms have prevented another 9/11-scale attack, but the system remains imperfect and requires constant vigilance."`,
            image: "intelligence_reform_signing",
            imagePrompt: "President signing Intelligence Reform Act, DNI organizational chart, new counterterrorism structure diagrams",
            sources: ["Intelligence Reform and Terrorism Prevention Act 2004", "9/11 Commission Implementation Reports", "DNI Establishment Records"],
            choices: [
                {
                    text: "Examine the effectiveness of implemented reforms",
                    nextScene: "reform_effectiveness_analysis",
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Study ongoing coordination challenges",
                    nextScene: "ongoing_coordination_challenges",
                    progressIncrease: 15,
                    evidence: true
                },
                {
                    text: "Review the Commission's final recommendations",
                    nextScene: "commission_reform_recommendations",
                    progressIncrease: 12,
                    evidence: true
                },
                {
                    text: "Present findings to the Commission",
                    nextScene: "final_commission_presentation",
                    progressIncrease: 20,
                    evidence: true
                }
            ],
            educationalNote: "The post-9/11 intelligence reforms represent the most significant restructuring of the US intelligence community since the 1947 National Security Act."
        },

        hijackers_us_activities: {
            text: `HIJACKER ACTIVITIES INSIDE THE UNITED STATES

            DAY 1 - 1:30 PM

You examine how the 19 hijackers lived and operated inside the United States, revealing multiple missed opportunities for detection.

🏠 HIJACKER US ACTIVITIES - DETAILED ANALYSIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RESIDENCE PATTERNS:
California: Al-Mihdhar and al-Hazmi lived openly in San Diego
Florida: Multiple hijackers clustered near flight schools
New Jersey: Final staging area for multiple hijackers
Virginia: Al-Hazmi lived near CIA headquarters

FLIGHT TRAINING:
Huffman Aviation (Florida): Atta and al-Shehhi trained
Pan Am International (Florida): Additional hijacker training
SimCenter (Minnesota): Moussaoui's suspicious training request

FINANCIAL ACTIVITIES:
Bank accounts opened with real names
Wire transfers from UAE totaling ~$300,000
Cash purchases, no credit histories
SunTrust bank accounts in Florida

CONTACT WITH AUTHORITIES:
Traffic stops (multiple)
Visa renewals
Flight school enrollments
Apartment rentals with real IDs
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Dr. Chen reviews the activities: "They weren't hiding. They used real names, had driver's licenses, and conducted business openly. The system simply wasn't looking for them."

You analyze the missed opportunities: "Any one of these touchpoints could have led to detection if the watchlist had been properly maintained."`,
            image: "hijacker_us_locations",
            imagePrompt: "Map of United States showing hijacker locations, flight schools, residences, and missed detection opportunities",
            sources: ["9/11 Commission Report", "FBI Investigation Files", "Financial Transaction Records"],
            choices: [
                {
                    text: "Study the flight school connections in detail",
                    nextScene: "flight_school_connections",
                    progressIncrease: 20,
                    factual: true,
                    evidence: true
                },
                {
                    text: "Examine the known hijackers case",
                    nextScene: "known_hijackers_case_study",
                    progressIncrease: 22,
                    evidence: true
                },
                {
                    text: "Analyze the Moussaoui arrest and missed connections",
                    nextScene: "moussaoui_missed_connections",
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Review the prevention opportunities",
                    nextScene: "prevention_opportunity_analysis",
                    progressIncrease: 15,
                    evidence: true
                }
            ],
            educationalNote: "The hijackers' open activities in the US demonstrate that detection was possible with better intelligence coordination and watchlist management."
        },

        notification_decision_analysis: {
            text: `ANALYSIS OF THE DECISION NOT TO NOTIFY FBI

            DAY 1 - 2:00 PM

You examine the critical decision-making process within the CIA that resulted in failing to notify the FBI about known Al Qaeda operatives inside the United States.

🔐 NON-NOTIFICATION DECISION ANALYSIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TIMELINE OF KNOWLEDGE:
January 2000: CIA aware of al-Mihdhar's US visa
January 2000: CIA aware both operatives traveling to US
March 2000: CIA learns they entered US in Los Angeles
June 2001: CIA re-reviews Kuala Lumpur meeting intelligence
August 2001: CIA finally requests FBI notification

DECISION FACTORS:
Sources & Methods: Concern about protecting intelligence sources
Legal Uncertainty: Confusion about notification requirements
Institutional Culture: Information hoarding as standard practice
Oversight Gaps: No system to flag critical notifications
Competing Priorities: Other operational demands

RESULT:
20 months of silence while terrorists operated freely
No FBI surveillance or investigation initiated
Hijackers lived near CIA headquarters in Virginia
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Dr. Chen reviews the decision chain: "Multiple CIA officers knew about these terrorists over 20 months. The failure to notify wasn't a single mistake - it was systemic."

You analyze the institutional factors: "The CIA's culture prioritized protecting sources over sharing information, even when domestic threats were identified."

A Commission assessment concludes: "This was not a failure of a single individual, but a failure of institutional design and priorities."`,
            image: "cia_decision_making",
            imagePrompt: "CIA conference room with analysts discussing notification decisions, classified files, institutional barriers visualization",
            sources: ["9/11 Commission Report", "CIA Inspector General Report", "Intelligence Oversight Analysis"],
            choices: [
                {
                    text: "Study the accountability measures for this failure",
                    nextScene: "accountability_assessment",
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Examine the information sharing barriers",
                    nextScene: "information_sharing_barriers",
                    progressIncrease: 15,
                    evidence: true
                },
                {
                    text: "Analyze what prevention was possible",
                    nextScene: "prevention_opportunity_analysis",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Review the post-9/11 reforms addressing this",
                    nextScene: "intelligence_reform_analysis",
                    progressIncrease: 12,
                    evidence: true
                }
            ],
            educationalNote: "The non-notification decision represents one of the most consequential intelligence failures in American history."
        },

        prevention_opportunity_analysis: {
            text: `PREVENTION OPPORTUNITY ANALYSIS - WHAT COULD HAVE STOPPED 9/11

            DAY 1 - 2:30 PM

You analyze the specific opportunities that existed to potentially detect and disrupt the 9/11 plot before the attacks occurred.

✋ PREVENTION OPPORTUNITIES - COMPREHENSIVE ANALYSIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WATCHLIST OPPORTUNITIES:
- Al-Mihdhar on watchlist in January 2000 → Could have been stopped at border
- Al-Hazmi identified at Kuala Lumpur meeting → Could have been tracked

VISA SCREENING OPPORTUNITIES:
- Incomplete/suspicious visa applications → Could have been rejected
- Known associate connections → Could have triggered additional scrutiny

FBI INVESTIGATION OPPORTUNITIES:
- Phoenix Memo follow-up → Could have identified flight school pattern
- Moussaoui investigation expansion → Could have uncovered broader plot
- Known hijackers notification → Could have led to surveillance

AVIATION SECURITY OPPORTUNITIES:
- Enhanced cockpit security → Could have prevented takeover
- Suspicious ticket purchases → Could have triggered screening
- No-fly list implementation → Could have prevented boarding

INTELLIGENCE SYNTHESIS:
- Connected Al Qaeda chatter → Could have predicted attack timing
- Pattern analysis → Could have identified coordinated preparations
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Dr. Chen reviews the opportunities: "The Commission concluded that the attacks were not inevitable. Multiple intervention points existed that could have disrupted the plot."

You assess the implications: "This isn't about blame - it's about understanding how systemic failures prevented any of these opportunities from being realized."`,
            image: "prevention_analysis_board",
            imagePrompt: "Investigation board showing intervention points, timeline of missed opportunities, counterfactual analysis",
            sources: ["9/11 Commission Report", "Prevention Opportunity Analysis", "Counterfactual Assessment Studies"],
            choices: [
                {
                    text: "Study the accountability measures taken",
                    nextScene: "accountability_assessment",
                    progressIncrease: 15,
                    evidence: true
                },
                {
                    text: "Examine the lessons learned for future prevention",
                    nextScene: "lessons_learned_assessment",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Analyze the preventive measures that could have worked",
                    nextScene: "preventive_measures_analysis",
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Review the Commission's final conclusions",
                    nextScene: "final_commission_presentation",
                    progressIncrease: 12,
                    evidence: true
                }
            ],
            educationalNote: "The prevention opportunity analysis demonstrates that 9/11 was not inevitable - multiple systemic failures had to occur for the attacks to succeed."
        },

        accountability_assessment: {
            text: `ACCOUNTABILITY ASSESSMENT - WHO WAS RESPONSIBLE

            DAY 1 - 3:00 PM

You examine the Commission's assessment of accountability for the intelligence and policy failures that enabled the 9/11 attacks.

⚖️ ACCOUNTABILITY ASSESSMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COMMISSION APPROACH:
Finding: "Failure of imagination" was collective, not individual
Focus: Systemic failures rather than individual blame
Purpose: Reform, not prosecution

AGENCY ACCOUNTABILITY:
CIA: Failed to share hijacker information with FBI
FBI: Failed to pursue leads and connect dots
NSA: Collection capabilities not shared effectively
FAA: Aviation security inadequate for threat
INS: Border security and tracking failures

INDIVIDUAL ACCOUNTABILITY:
No senior officials fired or prosecuted
Some officials received criticism in report
Inspector General investigations produced limited consequences
Congressional oversight found systemic, not individual, failures

SYSTEMIC ACCOUNTABILITY:
Congress: Underfunded counterterrorism pre-9/11
Executive Branch: No unified command structure
Intelligence Community: Information sharing barriers

VICTIM FAMILY PERSPECTIVE:
Many sought greater individual accountability
Commission focused on preventing future attacks
Tension between justice and reform objectives
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Dr. Chen reflects on accountability: "The Commission's mandate was to understand what happened and prevent future attacks, not to prosecute individuals."

You assess the implications: "Some argue this approach let responsible officials escape consequences. Others believe systemic reform was more important than individual blame."`,
            image: "accountability_hearing",
            imagePrompt: "Congressional hearing room with victim families, agency officials, accountability discussion, scales of justice",
            sources: ["9/11 Commission Report", "Congressional Oversight Records", "Inspector General Reports"],
            choices: [
                {
                    text: "Examine the lessons learned for future prevention",
                    nextScene: "lessons_learned_assessment",
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Study the reform implementation",
                    nextScene: "intelligence_reform_analysis",
                    progressIncrease: 15,
                    evidence: true
                },
                {
                    text: "Review the Commission's final conclusions",
                    nextScene: "final_commission_presentation",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Analyze ongoing coordination challenges",
                    nextScene: "ongoing_coordination_challenges",
                    progressIncrease: 12,
                    evidence: true
                }
            ],
            educationalNote: "The accountability debate continues, with some arguing systemic reform was prioritized over individual responsibility."
        },

        nsc_response_delay: {
            text: `NSC POLICY RESPONSE DELAY - SUMMER 2001

            DAY 1 - 10:15 AM

You examine the delayed National Security Council response to the escalating Al Qaeda threat during the summer of 2001.

📅 NSC RESPONSE TIMELINE - POLICY DELAY ANALYSIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TRANSITION PERIOD:
January 2001: New administration takes office
Inherited: Clinton-era Al Qaeda policy under review
Clarke Warning: Richard Clarke urged immediate focus on Al Qaeda

POLICY DEVELOPMENT:
Spring 2001: Deputies Committee meetings on Al Qaeda
Focus: Long-term strategy development
Delay Factor: New administration wanted comprehensive review
Alternative: Could have adopted interim Clinton policies

PRINCIPALS MEETING:
Scheduled: Multiple times, repeatedly postponed
Finally Held: September 4, 2001 (7 days before attacks)
Topic: Comprehensive Al Qaeda strategy approval
Timing: Too late to implement any measures

MEANWHILE:
Threat reporting: "System blinking red"
CIA: Requesting urgent policy guidance
Clarke: Frustrated by lack of urgency
Warning Signs: Escalating throughout summer
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Dr. Chen reviews the timeline: "The Principals Committee finally approved an Al Qaeda strategy on September 4, 2001. By then, the hijackers were already in final preparation."

You analyze the delay factors: "The new administration wanted to develop its own comprehensive strategy rather than simply adopting Clinton-era policies."

A Commission finding notes: "The principals meeting scheduled for months finally occurred seven days before the attacks, approving a strategy that would take three years to fully implement."`,
            image: "nsc_meeting_delay",
            imagePrompt: "White House situation room, empty chairs, postponed meeting notices, escalating threat reports on table",
            sources: ["9/11 Commission Report", "NSC Meeting Records", "Clarke Testimony"],
            choices: [
                {
                    text: "Study the policy response failures in detail",
                    nextScene: "policy_response_failures",
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Examine the Al Qaeda warnings timeline",
                    nextScene: "alqaeda_warnings_timeline",
                    progressIncrease: 15,
                    evidence: true
                },
                {
                    text: "Analyze what preventive measures were available",
                    nextScene: "preventive_measures_analysis",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Review the operational response failures",
                    nextScene: "operational_response_failures",
                    progressIncrease: 12,
                    evidence: true
                }
            ],
            educationalNote: "The NSC policy delay illustrates how bureaucratic processes can impede urgent threat response during government transitions."
        },

        moussaoui_missed_connections: {
            text: `ZACARIAS MOUSSAOUI - THE MISSED CONNECTION

            DAY 1 - 12:45 PM

You examine the arrest of Zacarias Moussaoui in August 2001 and the failed attempts to connect him to the broader 9/11 plot.

🔗 MOUSSAOUI CASE - MISSED CONNECTIONS ANALYSIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ARREST TIMELINE:
August 16, 2001: Moussaoui arrested in Minnesota
Reason: Suspicious flight training requests
Red Flags: Wanted to learn to fly but not take off or land
Immigration Status: Visa overstay

FBI INVESTIGATION ATTEMPTS:
Minneapolis Field Office: Believed he was terrorist
Headquarters Response: Declined search warrant request
FISA Application: Rejected by FBI supervisors
French Intelligence: Provided information on extremist connections
Legal Barrier: "The Wall" prevented criminal investigation

WHAT WAS KNOWN:
- French intelligence connected him to extremist networks
- Flight instructor reported suspicious training requests
- Immigration violations provided legal basis for action
- Minneapolis agents believed he was planning hijacking

WHAT WASN'T CONNECTED:
- Al-Mihdhar and al-Hazmi (CIA knowledge)
- Phoenix Memo (FBI flight school warning)
- Overall Al Qaeda threat picture
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Dr. Chen reviews the case: "Minneapolis FBI agents were convinced they had a terrorist. They sent more than 70 communications to headquarters trying to get permission to search his belongings."

You analyze the barriers: "If the Phoenix Memo, Moussaoui case, and CIA hijacker information had been connected, the plot might have been disrupted."

A Commission finding states: "Moussaoui was in custody for three weeks before 9/11, but institutional barriers prevented connecting him to the broader threat."`,
            image: "moussaoui_investigation",
            imagePrompt: "FBI field office with Moussaoui file, frustrated agents, communication barriers visualization, missed connection diagram",
            sources: ["9/11 Commission Report", "FBI Minneapolis Field Office Records", "Moussaoui Trial Documents"],
            choices: [
                {
                    text: "Examine the FBI headquarters inaction",
                    nextScene: "fbi_headquarters_inaction",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Study the Phoenix Memo and flight school connections",
                    nextScene: "phoenix_memo_analysis",
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Analyze the information sharing barriers",
                    nextScene: "information_sharing_barriers",
                    progressIncrease: 15,
                    evidence: true
                },
                {
                    text: "Review the prevention opportunity analysis",
                    nextScene: "prevention_opportunity_analysis",
                    progressIncrease: 12,
                    evidence: true
                }
            ],
            educationalNote: "The Moussaoui case represents a critical missed opportunity where an actual plot participant was in custody but couldn't be connected to the broader conspiracy."
        },

        fbi_headquarters_inaction: {
            text: `FBI HEADQUARTERS INACTION ON FIELD INTELLIGENCE

            DAY 1 - 1:15 PM

You examine why FBI headquarters failed to act on critical intelligence from field offices about flight training and terrorist activities.

🏛️ FBI HEADQUARTERS RESPONSE FAILURES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PHOENIX MEMO RESPONSE:
Received: July 10, 2001
Action: Filed without systematic review
Analysis: None conducted
Distribution: Not shared with field offices
Follow-up: None until after 9/11

MOUSSAOUI CASE RESPONSE:
Field Request: Search warrant application
HQ Response: Declined to pursue FISA warrant
Reasoning: Insufficient evidence of foreign power connection
Field Office: Sent 70+ communications urging action
Result: No search conducted before 9/11

INSTITUTIONAL FACTORS:
Workload: Counterterrorism overwhelmed with cases
Priorities: Criminal prosecutions emphasized over prevention
Legal Caution: Risk-averse culture on sensitive investigations
Coordination: Poor communication between divisions
Resources: Inadequate analyst support for field offices

SYSTEMIC ISSUES:
No mechanism to flag critical warnings
Field intelligence not synthesized centrally
Counterterrorism not highest FBI priority
Legal barriers created cautious culture
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Dr. Chen reviews the failures: "Field agents were doing their jobs - they identified threats and reported them. The system failed to respond to their warnings."

You analyze the institutional problems: "FBI headquarters was structured for criminal prosecution, not intelligence synthesis and threat prevention."`,
            image: "fbi_headquarters_inaction",
            imagePrompt: "FBI headquarters with incoming field reports piling up, overwhelmed analysts, institutional bureaucracy visualization",
            sources: ["9/11 Commission Report", "FBI Inspector General Report", "Congressional Investigation"],
            choices: [
                {
                    text: "Study the FBI internal communication failures",
                    nextScene: "fbi_internal_communication",
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Examine the Phoenix Memo in detail",
                    nextScene: "phoenix_memo_analysis",
                    progressIncrease: 15,
                    evidence: true
                },
                {
                    text: "Analyze the institutional barriers",
                    nextScene: "institutional_barriers_analysis",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Review the post-9/11 FBI reforms",
                    nextScene: "intelligence_reform_analysis",
                    progressIncrease: 12,
                    evidence: true
                }
            ],
            educationalNote: "FBI headquarters inaction demonstrates how institutional structures can prevent field intelligence from reaching decision-makers."
        },

        flight_school_connections: {
            text: `FLIGHT SCHOOL CONNECTIONS - HIJACKER TRAINING PATTERNS

            DAY 1 - 1:45 PM

You examine the flight training activities of the 9/11 hijackers and the missed opportunities to identify their coordinated preparation.

✈️ FLIGHT SCHOOL TRAINING - COMPREHENSIVE ANALYSIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PILOT HIJACKERS (Those who flew the planes):
Mohamed Atta: Huffman Aviation, Venice FL (Private pilot license)
Marwan al-Shehhi: Huffman Aviation, Venice FL (Private pilot license)
Hani Hanjour: Multiple schools, Arizona (Commercial pilot rating)
Ziad Jarrah: Flight Safety Academy, Florida (Private pilot license)

TRAINING PATTERNS:
- Concentrated in Florida and Arizona
- Large aircraft simulator time requested
- Little interest in takeoff/landing procedures
- Cash payments, foreign students
- Compressed training schedules

MISSED WARNING SIGNS:
Phoenix Memo: Warned about suspicious flight students
Moussaoui: "Wanted to fly but not take off or land"
Instructor Reports: Some instructors had concerns
FAA Notifications: None triggered despite red flags

CONNECTED IF SHARED:
CIA hijacker information + FBI flight school warning + Moussaoui arrest = Plot identification opportunity
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Dr. Chen reviews the training patterns: "The hijackers trained openly at legitimate flight schools. Their requests for large aircraft training without caring about landing should have raised alarms."

You analyze the connections: "If the Phoenix Memo had been distributed and acted upon, flight schools nationwide would have been canvassed and the hijackers potentially identified."`,
            image: "flight_school_evidence",
            imagePrompt: "Flight school with training records, pilot certificates, map showing hijacker training locations, suspicious pattern highlighted",
            sources: ["9/11 Commission Report", "FAA Training Records", "Flight School Investigation"],
            choices: [
                {
                    text: "Study the Phoenix Memo analysis",
                    nextScene: "phoenix_memo_analysis",
                    progressIncrease: 18,
                    factual: true,
                    evidence: true
                },
                {
                    text: "Examine the Moussaoui missed connection",
                    nextScene: "moussaoui_missed_connections",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Analyze the hijacker tracking failures",
                    nextScene: "hijacker_tracking_failures",
                    progressIncrease: 15,
                    evidence: true
                },
                {
                    text: "Review the prevention opportunities",
                    nextScene: "prevention_opportunity_analysis",
                    progressIncrease: 12,
                    evidence: true
                }
            ],
            educationalNote: "The flight school training patterns show how coordinated terrorist preparation could have been detected with proper intelligence sharing."
        },

        fbi_internal_communication: {
            text: `FBI INTERNAL COMMUNICATION FAILURES

            DAY 1 - 2:15 PM

You examine the communication breakdowns within the FBI itself that prevented critical information from being shared between divisions.

📡 FBI INTERNAL COMMUNICATION ANALYSIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
THE INTERNAL WALL:
Intelligence vs. Criminal: Separate divisions couldn't share
FISA Information: Restricted from criminal investigators
Case Coordination: No mechanism to connect related investigations
Field-HQ Communication: Often one-way and delayed

SPECIFIC FAILURES:
Cole Investigation: FBI New York had hijacker information
Minneapolis Office: Couldn't access intelligence on Moussaoui
Phoenix Office: Memo never reached relevant analysts
Counterterrorism: Understaffed and overwhelmed

CULTURAL ISSUES:
Competition: Divisions competed rather than cooperated
Case Ownership: Information hoarded for prosecution credit
Risk Aversion: Fear of legal challenges limited sharing
Technology: Incompatible databases between divisions

ORGANIZATIONAL STRUCTURE:
56 Field Offices: Operated semi-independently
Headquarters: Coordination function underdeveloped
Legal Counsel: Conservative interpretation of sharing rules
No Intelligence Division: Created only after 9/11
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Dr. Chen reviews the internal barriers: "The FBI was structured as a law enforcement agency, not an intelligence organization. It couldn't share information even with itself."

You analyze the consequences: "Multiple FBI offices had pieces of the puzzle. If they had been combined, the threat picture would have been clearer."`,
            image: "fbi_communication_breakdown",
            imagePrompt: "FBI organizational chart showing communication barriers between divisions, disconnected databases, frustrated agents",
            sources: ["9/11 Commission Report", "FBI Inspector General Report", "Congressional Investigation"],
            choices: [
                {
                    text: "Study the broader information sharing barriers",
                    nextScene: "information_sharing_barriers",
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Examine FBI headquarters inaction",
                    nextScene: "fbi_headquarters_inaction",
                    progressIncrease: 15,
                    evidence: true
                },
                {
                    text: "Analyze the post-9/11 FBI reforms",
                    nextScene: "intelligence_reform_analysis",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Review the institutional barriers",
                    nextScene: "institutional_barriers_analysis",
                    progressIncrease: 12,
                    evidence: true
                }
            ],
            educationalNote: "The FBI's internal communication failures led to creation of the FBI National Security Branch and new information sharing protocols."
        },

        ignored_intelligence_pattern: {
            text: `PATTERN OF IGNORED INTELLIGENCE WARNINGS

            DAY 1 - 2:45 PM

You examine the broader pattern of intelligence warnings that were ignored, dismissed, or failed to trigger appropriate responses before 9/11.

⚠️ IGNORED INTELLIGENCE PATTERN ANALYSIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STRATEGIC WARNINGS IGNORED:
1998: Embassy bombings demonstrate Al Qaeda capability
1999: Millennium plot disrupted, showing US as target
2000: USS Cole attack confirms continued threat
2001: 36 PDBs mention Al Qaeda with increasing urgency

SPECIFIC WARNINGS NOT ACTED UPON:
Phoenix Memo: Flight school warning - no follow-up
August 6 PDB: Domestic attack warning - no policy change
Threat Reporting: "System blinking red" - no enhanced posture
Multiple PDBs: Hijacking patterns mentioned - no aviation security upgrade

INSTITUTIONAL RESPONSES:
Fatigue: Constant warnings without attacks led to complacency
Specificity Gap: Strategic warnings lacked tactical details
Resource Competition: Counterterrorism competed for attention
Political Environment: Other priorities dominated agenda

NORMALIZATION OF THREAT:
Warning signals became background noise
Officials grew accustomed to elevated threat levels
Urgency lost when attacks didn't immediately materialize
"Crying wolf" effect reduced responsiveness
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Dr. Chen reviews the pattern: "The intelligence community was warning about Al Qaeda constantly. But without specific tactical intelligence, policymakers didn't know how to respond."

You analyze the systemic issue: "The system was designed for specific, imminent threats. Persistent strategic warnings didn't fit the response framework."`,
            image: "ignored_warnings_pattern",
            imagePrompt: "Stack of ignored intelligence reports, warning flags, pattern of dismissed alerts, institutional complacency visualization",
            sources: ["9/11 Commission Report", "Intelligence Warning Analysis", "Threat Response Assessment"],
            choices: [
                {
                    text: "Study the Al Qaeda warnings timeline",
                    nextScene: "alqaeda_warnings_timeline",
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Examine the policy response failures",
                    nextScene: "policy_response_failures",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Analyze the Phoenix Memo case",
                    nextScene: "phoenix_memo_analysis",
                    progressIncrease: 15,
                    evidence: true
                },
                {
                    text: "Review the lessons learned",
                    nextScene: "lessons_learned_assessment",
                    progressIncrease: 12,
                    evidence: true
                }
            ],
            educationalNote: "The pattern of ignored warnings demonstrates how institutional structures can prevent effective response even when threats are recognized."
        },

        institutional_barriers_analysis: {
            text: `INSTITUTIONAL BARRIERS TO COORDINATED RESPONSE

            DAY 1 - 3:15 PM

You analyze the deep-seated institutional barriers that prevented coordinated response to the Al Qaeda threat.

🏛️ INSTITUTIONAL BARRIERS - COMPREHENSIVE ANALYSIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STRUCTURAL BARRIERS:
No Unified Command: 15+ agencies with counterterrorism roles
Budget Authority: Dispersed across multiple appropriations
Personnel Systems: Different agencies, different rules
Technology: Incompatible systems and databases

LEGAL BARRIERS:
FISA Restrictions: Limited intelligence-criminal coordination
Posse Comitatus: Military restricted from domestic operations
Privacy Laws: Constrained information sharing
Agency Mandates: CIA foreign focus, FBI domestic/criminal

CULTURAL BARRIERS:
Turf Protection: Agencies guarded their domains
Information Hoarding: Sharing seen as losing advantage
Risk Aversion: Fear of legal/political consequences
Stovepipes: Vertical information flow, limited horizontal sharing

LEADERSHIP BARRIERS:
No Single Official: Responsible for domestic counterterrorism
Competing Priorities: Terrorism competed with other issues
Political Sensitivity: Counterterrorism was contentious
Transition Effects: New administration reviewing all policies
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Dr. Chen summarizes: "The barriers weren't intentional sabotage - they were the accumulated effect of decades of institutional development without a unified counterterrorism framework."

You assess the implications: "Breaking down these barriers required fundamental reform of how the government approaches national security."`,
            image: "institutional_barriers_diagram",
            imagePrompt: "Government organizational chart showing barriers between agencies, disconnected systems, reform pathways",
            sources: ["9/11 Commission Report", "Government Organization Analysis", "Reform Recommendations"],
            choices: [
                {
                    text: "Examine the intelligence reform recommendations",
                    nextScene: "intelligence_reform_analysis",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Study the information sharing barriers",
                    nextScene: "information_sharing_barriers",
                    progressIncrease: 15,
                    evidence: true
                },
                {
                    text: "Analyze the policy response failures",
                    nextScene: "policy_response_failures",
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Review the Commission's reform recommendations",
                    nextScene: "commission_reform_recommendations",
                    progressIncrease: 12,
                    evidence: true
                }
            ],
            educationalNote: "The institutional barriers analysis provided the foundation for the most significant government reorganization since the 1947 National Security Act."
        },

        preventive_measures_analysis: {
            text: `PREVENTIVE MEASURES THAT COULD HAVE BEEN TAKEN

            DAY 1 - 3:45 PM

You analyze the specific preventive measures that were available but not implemented before 9/11.

🛡️ AVAILABLE PREVENTIVE MEASURES - ANALYSIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
AVIATION SECURITY MEASURES:
- Reinforced cockpit doors (recommended but not required)
- Enhanced passenger screening (not implemented)
- Federal air marshals expansion (limited deployment)
- No-fly list implementation (virtually non-existent)
- Box cutter prohibition (not on prohibited items list)

INTELLIGENCE MEASURES:
- Watchlist sharing with border agencies (not systematic)
- Flight school canvassing (recommended but not done)
- Enhanced domestic surveillance (legal barriers)
- CIA-FBI information integration (not established)

POLICY MEASURES:
- Al Qaeda strategy acceleration (delayed until September 4)
- Military options against Al Qaeda (limited consideration)
- Enhanced threat posture (not elevated domestically)
- International pressure on Taliban (ongoing but ineffective)

BORDER SECURITY MEASURES:
- Visa screening enhancement (not implemented)
- Entry-exit tracking system (mandated but not built)
- Immigration enforcement (limited resources)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Dr. Chen reviews the options: "Many of these measures were considered or even recommended before 9/11. The Commission found that implementation was blocked by cost concerns, civil liberties debates, or bureaucratic inertia."

You assess the implications: "No single measure would have definitely prevented the attacks, but multiple interventions might have disrupted the plot."`,
            image: "preventive_measures_board",
            imagePrompt: "Security planning board showing available countermeasures, implementation barriers, cost-benefit analysis",
            sources: ["9/11 Commission Report", "Aviation Security Assessment", "Policy Options Analysis"],
            choices: [
                {
                    text: "Examine the prevention opportunities",
                    nextScene: "prevention_opportunity_analysis",
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Study the lessons learned",
                    nextScene: "lessons_learned_assessment",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Analyze the security reform implementation",
                    nextScene: "security_reform_implementation",
                    progressIncrease: 15,
                    evidence: true
                },
                {
                    text: "Review the Commission's recommendations",
                    nextScene: "commission_reform_recommendations",
                    progressIncrease: 12,
                    evidence: true
                }
            ],
            educationalNote: "The preventive measures analysis shows that options existed but weren't implemented due to institutional, political, and resource constraints."
        },

        lessons_learned_assessment: {
            text: `LESSONS LEARNED - PREVENTING FUTURE ATTACKS

            DAY 1 - 4:00 PM

You compile the key lessons from the 9/11 Commission investigation for preventing future terrorist attacks.

📚 KEY LESSONS LEARNED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INTELLIGENCE LESSONS:
✓ Information sharing is more important than information hoarding
✓ Strategic warnings require operational follow-through
✓ All-source intelligence synthesis is essential
✓ Domestic and foreign intelligence must be integrated
✓ Field intelligence must reach decision-makers

POLICY LESSONS:
✓ Terrorism must be treated as highest national security priority
✓ Policy development cannot wait for perfect intelligence
✓ Transition periods are particularly vulnerable
✓ Interagency coordination requires clear authority
✓ Prevention is more important than prosecution

OPERATIONAL LESSONS:
✓ Aviation security requires constant adaptation
✓ Border security must integrate intelligence
✓ First responders need unified command
✓ Public awareness is a security asset
✓ Resilience planning is essential

INSTITUTIONAL LESSONS:
✓ Legacy structures can prevent effective response
✓ Cultural change is as important as organizational change
✓ Congressional oversight must be consolidated
✓ Accountability requires clear responsibility
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Dr. Chen reflects: "These lessons cost 2,977 lives to learn. The Commission's hope is that by documenting them clearly, we can prevent similar failures."

You summarize: "The fundamental lesson is that security requires integration - of intelligence, policy, operations, and institutions."`,
            image: "lessons_learned_display",
            imagePrompt: "Educational display showing 9/11 lessons learned, memorial imagery, reform implementation, future prevention",
            sources: ["9/11 Commission Report", "Lessons Learned Analysis", "Reform Implementation Assessment"],
            choices: [
                {
                    text: "Examine the reform effectiveness",
                    nextScene: "reform_effectiveness_analysis",
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Study the future threat prevention",
                    nextScene: "future_threat_prevention",
                    progressIncrease: 15,
                    evidence: true
                },
                {
                    text: "Present final conclusions to Commission",
                    nextScene: "final_commission_presentation",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Review ongoing challenges",
                    nextScene: "ongoing_coordination_challenges",
                    progressIncrease: 12,
                    evidence: true
                }
            ],
            educationalNote: "The lessons learned from 9/11 continue to inform counterterrorism policy and national security organization."
        },

        reform_effectiveness_analysis: {
            text: `REFORM EFFECTIVENESS ANALYSIS

            DAY 1 - 4:15 PM

You assess how effectively the post-9/11 reforms have addressed the failures identified by the Commission.

📊 REFORM EFFECTIVENESS ASSESSMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
HIGHLY EFFECTIVE REFORMS:
✓ Unified terrorist watchlist (Terrorist Screening Center)
✓ Aviation security enhancements (TSA, reinforced cockpits)
✓ Information sharing improvements (ISE)
✓ Joint Terrorism Task Forces expansion
✓ NCTC establishment and threat integration

MODERATELY EFFECTIVE REFORMS:
◐ DNI coordination authority (still competing with agencies)
◐ Congressional oversight consolidation (partially implemented)
◐ FBI intelligence transformation (ongoing cultural challenges)
◐ Border security integration (DHS coordination issues)

ONGOING CHALLENGES:
○ Budget authority fragmentation (DNI lacks full control)
○ Cultural resistance in agencies (territorial behavior persists)
○ Privacy vs. security balance (continuous tension)
○ Evolving threat landscape (new challenges emerge)

POST-9/11 RECORD:
No comparable mass-casualty attack on US soil
Multiple plots disrupted through improved coordination
New threats (domestic terrorism, cyber) require adaptation
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Dr. Chen assesses progress: "The reforms have clearly improved our security posture, but the Commission's vision of unified intelligence leadership remains incompletely realized."

You analyze the gaps: "Some recommendations were implemented in form but not substance. Agencies still protect their equities."`,
            image: "reform_assessment_dashboard",
            imagePrompt: "Dashboard showing reform implementation status, effectiveness metrics, ongoing challenges, security improvements",
            sources: ["9/11 Commission Follow-up Reports", "Reform Implementation Assessment", "GAO Evaluations"],
            choices: [
                {
                    text: "Study ongoing coordination challenges",
                    nextScene: "ongoing_coordination_challenges",
                    progressIncrease: 15,
                    evidence: true
                },
                {
                    text: "Examine future threat prevention",
                    nextScene: "future_threat_prevention",
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Present final conclusions",
                    nextScene: "final_commission_presentation",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Review the Commission's original recommendations",
                    nextScene: "commission_reform_recommendations",
                    progressIncrease: 12,
                    evidence: true
                }
            ],
            educationalNote: "Reform effectiveness assessment shows significant progress but also identifies areas where the Commission's vision remains unfulfilled."
        },

        ongoing_coordination_challenges: {
            text: `ONGOING INTELLIGENCE COORDINATION CHALLENGES

            DAY 1 - 4:30 PM

You examine the persistent challenges in intelligence coordination that continue to affect national security despite post-9/11 reforms.

🔄 PERSISTENT COORDINATION CHALLENGES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STRUCTURAL CHALLENGES:
- DNI authority limited vs. CIA, FBI, NSA
- Budget control remains with agencies
- Pentagon controls 80%+ of intelligence budget
- Congressional oversight still fragmented

CULTURAL CHALLENGES:
- "Need to know" culture persists
- Agency loyalty often trumps mission
- Information sharing seen as career risk
- Different agency cultures clash

TECHNOLOGICAL CHALLENGES:
- Legacy systems resist integration
- Cybersecurity concerns limit sharing
- Data volume overwhelms analysis
- Privacy protections complicate access

EVOLVING THREAT CHALLENGES:
- Domestic terrorism requires new approaches
- Cyber threats cross all boundaries
- Lone wolves harder to detect
- Social media as radicalization vector

NEW COORDINATION ISSUES:
- State/local fusion center integration
- Private sector information sharing
- International partner coordination
- Real-time threat response
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Dr. Chen reflects: "We've made enormous progress since 9/11, but perfect coordination remains elusive. The challenge is ongoing, not solved."

You assess the situation: "The threat landscape continues to evolve, requiring constant adaptation of our coordination mechanisms."`,
            image: "coordination_challenges_modern",
            imagePrompt: "Modern intelligence coordination center showing ongoing challenges, multiple agency feeds, evolving threat displays",
            sources: ["Intelligence Community Assessments", "GAO Reports", "Congressional Oversight Hearings"],
            choices: [
                {
                    text: "Examine future threat prevention strategies",
                    nextScene: "future_threat_prevention",
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Present final conclusions to Commission",
                    nextScene: "final_commission_presentation",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Review reform effectiveness",
                    nextScene: "reform_effectiveness_analysis",
                    progressIncrease: 15,
                    evidence: true
                },
                {
                    text: "Study the lessons learned",
                    nextScene: "lessons_learned_assessment",
                    progressIncrease: 12,
                    evidence: true
                }
            ],
            educationalNote: "Ongoing coordination challenges demonstrate that national security requires continuous improvement, not a one-time fix."
        },

        congressional_family_briefing: {
            text: `CONGRESSIONAL AND FAMILY BRIEFING - FINAL REPORT

            DAY 1 - 4:45 PM

You prepare to deliver the Commission's findings to Congress and the families of 9/11 victims, the people who most deserve answers.

📋 FINAL BRIEFING PREPARATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
AUDIENCE:
- Congressional leadership (bipartisan)
- 9/11 victim families (2,977 represented)
- Intelligence community leaders
- Media representatives
- American public

KEY MESSAGES:
1. The attacks were not inevitable
2. Systemic failures enabled the plot
3. No single individual is solely responsible
4. Comprehensive reform is essential
5. Prevention must be our focus

FAMILY CONCERNS ADDRESSED:
✓ What did the government know?
✓ Why weren't the warnings heeded?
✓ Could their loved ones have been saved?
✓ Who is accountable?
✓ What will prevent future attacks?

COMMISSION LEGACY:
- Most thorough investigation of intelligence failures
- Bipartisan consensus on reform
- Foundation for fundamental restructuring
- Memorial to those who died
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Dr. Chen stands beside you: "We owe these families the truth. Our investigation has documented what happened and why. Now we must honor the victims by implementing reforms."

The weight of 2,977 lives informs every word of your presentation.`,
            image: "congressional_family_briefing",
            imagePrompt: "Congressional hearing room with victim families, Commission members presenting findings, emotional but dignified atmosphere",
            sources: ["9/11 Commission Final Report", "Congressional Testimony", "Family Briefing Records"],
            choices: [
                {
                    text: "Focus on security reform implementation",
                    nextScene: "security_reform_implementation",
                    progressIncrease: 15,
                    evidence: true
                },
                {
                    text: "Emphasize future threat prevention",
                    nextScene: "future_threat_prevention",
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Complete the investigation",
                    nextScene: "investigation_complete",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Start a new investigation",
                    nextScene: "intro",
                    progressIncrease: 5
                }
            ],
            educationalNote: "The Commission's briefing to Congress and families fulfilled its mandate of providing answers and recommendations to prevent future attacks."
        },

        security_reform_implementation: {
            text: `SECURITY REFORM IMPLEMENTATION - BUILDING A SAFER NATION

            DAY 1 - 5:00 PM

You document the comprehensive security reforms implemented following the Commission's recommendations.

🛡️ SECURITY REFORM IMPLEMENTATION STATUS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
AVIATION SECURITY:
✓ Transportation Security Administration (TSA) created
✓ Federal air marshals program expanded
✓ Reinforced cockpit doors mandated
✓ Enhanced passenger screening
✓ No-fly and selectee lists implemented
✓ Checked baggage screening required

BORDER SECURITY:
✓ US-VISIT entry-exit tracking system
✓ Enhanced visa screening procedures
✓ Biometric identification requirements
✓ Secure travel documents
✓ Improved watchlist integration

EMERGENCY RESPONSE:
✓ Department of Homeland Security created
✓ Unified incident command system
✓ Enhanced first responder communication
✓ National preparedness programs
✓ Public-private partnerships

INTELLIGENCE INTEGRATION:
✓ Director of National Intelligence
✓ National Counterterrorism Center
✓ Terrorist Screening Center
✓ Information Sharing Environment
✓ Joint Terrorism Task Forces expanded
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Dr. Chen reviews the implementation: "These reforms represent the most significant restructuring of American national security since the 1940s."

You assess the result: "America is demonstrably safer, though vigilance must be permanent."`,
            image: "security_reform_implementation",
            imagePrompt: "Modern security infrastructure, TSA screening, intelligence fusion center, reformed national security apparatus",
            sources: ["Homeland Security Implementation Reports", "9/11 Commission Follow-up", "Security Reform Assessment"],
            choices: [
                {
                    text: "Examine future threat prevention",
                    nextScene: "future_threat_prevention",
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Complete the investigation",
                    nextScene: "investigation_complete",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Review ongoing challenges",
                    nextScene: "ongoing_coordination_challenges",
                    progressIncrease: 12,
                    evidence: true
                },
                {
                    text: "Start a new investigation",
                    nextScene: "intro",
                    progressIncrease: 5
                }
            ],
            educationalNote: "The security reforms implemented after 9/11 have fundamentally changed how America protects against terrorism."
        },

        future_threat_prevention: {
            text: `FUTURE THREAT PREVENTION - APPLYING LESSONS LEARNED

            DAY 1 - 5:15 PM

You analyze how the lessons of 9/11 apply to preventing future threats and maintaining national security.

🔮 FUTURE THREAT PREVENTION FRAMEWORK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
EVOLVING THREATS:
- Domestic terrorism and extremism
- Cyber attacks on critical infrastructure
- Biological and chemical threats
- Lone wolf attacks
- State-sponsored terrorism
- Emerging technology threats

APPLYING 9/11 LESSONS:
✓ Information sharing across all threats
✓ Integrated threat assessment
✓ Prevention over prosecution mindset
✓ Public awareness as force multiplier
✓ International cooperation
✓ Continuous adaptation

ONGOING VIGILANCE REQUIREMENTS:
- Maintain reformed structures
- Adapt to new threat vectors
- Balance security and liberty
- Invest in intelligence capabilities
- Foster interagency cooperation
- Engage international partners

COMMISSION LEGACY:
The 9/11 Commission's work provides a framework for addressing any national security threat requiring coordinated government response.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Dr. Chen concludes: "The specific threat of Al Qaeda has evolved, but the lessons about coordination, information sharing, and prevention remain essential."

You summarize: "The best memorial to those lost on 9/11 is a nation better prepared to prevent future attacks."`,
            image: "future_threat_prevention",
            imagePrompt: "Modern threat prevention center, evolving threat displays, integrated security systems, vigilant national security posture",
            sources: ["National Security Strategy", "Threat Prevention Analysis", "Future Security Assessment"],
            choices: [
                {
                    text: "Complete the investigation",
                    nextScene: "investigation_complete",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Review security reform implementation",
                    nextScene: "security_reform_implementation",
                    progressIncrease: 15,
                    evidence: true
                },
                {
                    text: "Examine ongoing challenges",
                    nextScene: "ongoing_coordination_challenges",
                    progressIncrease: 12,
                    evidence: true
                },
                {
                    text: "Start a new investigation",
                    nextScene: "intro",
                    progressIncrease: 5
                }
            ],
            educationalNote: "The 9/11 Commission's lessons about coordination and prevention apply to all future national security threats."
        },

        investigation_complete: {
            text: `9/11 COMMISSION INVESTIGATION - COMPLETE

            FINAL REPORT SUBMITTED

Your comprehensive investigation into the intelligence failures before September 11, 2001 is complete. The 9/11 Commission has documented the systemic breakdowns that enabled the attacks and provided a roadmap for preventing future tragedies.

📋 INVESTIGATION SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
VICTIMS: 2,977 lives lost

KEY FINDINGS:
✓ 36 Presidential Daily Briefs warned of Al Qaeda
✓ CIA knew identities of 2 hijackers for 20 months
✓ FBI Phoenix Memo predicted flight training method
✓ Information sharing barriers prevented connection
✓ No unified command existed for counterterrorism
✓ Multiple prevention opportunities were missed

ROOT CAUSES:
• Failure of imagination
• Failure of policy
• Failure of capabilities
• Failure of management

REFORMS IMPLEMENTED:
✓ Director of National Intelligence
✓ National Counterterrorism Center
✓ Department of Homeland Security
✓ TSA and aviation security overhaul
✓ Information sharing improvements

LEGACY:
The attacks were not inevitable. By understanding what went wrong, we can build a more secure nation and honor those who died.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

INVESTIGATION STATUS: COMPLETE
Historical Truth: DOCUMENTED
Reform Implementation: ACHIEVED
Memorial: 2,977 NEVER FORGOTTEN`,
            image: "investigation_complete_memorial",
            imagePrompt: "9/11 Memorial with investigation complete overlay, Commission report, reformed national security, solemn tribute",
            sources: ["9/11 Commission Final Report", "Memorial Records", "Reform Implementation"],
            choices: [
                {
                    text: "Start a new 9/11 Commission investigation",
                    nextScene: "intro",
                    progressIncrease: 5
                },
                {
                    text: "Review the key findings",
                    nextScene: "final_commission_presentation",
                    progressIncrease: 10
                },
                {
                    text: "Examine the lessons learned",
                    nextScene: "lessons_learned_assessment",
                    progressIncrease: 8
                },
                {
                    text: "Study future threat prevention",
                    nextScene: "future_threat_prevention",
                    progressIncrease: 8
                }
            ],
            educationalNote: "The 9/11 Commission's work stands as a model for how democracies can learn from tragedy and implement meaningful reform."
        }
    }
};

window.September11CommissionExpanded = September11CommissionExpanded;

window.September11CommissionExpanded = September11CommissionExpanded;
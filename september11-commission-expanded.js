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
        }
    }
};

window.September11CommissionExpanded = September11CommissionExpanded;
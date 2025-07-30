const EpsteinStoryHybrid = {
    scenes: {
        intro: {
            text: `THE CLASSIFIED FILES: EPSTEIN INVESTIGATION
            
You are investigative journalist Sarah Chen, working late in your cramped newsroom office when a mysterious package arrives with no return address. Inside are what appear to be authentic government documents related to the Jeffrey Epstein case - files that were supposed to be classified.

Your editor walks over, coffee in hand, looking concerned. "Sarah, I've been getting calls all day. Someone leaked that we might have sensitive Epstein materials. This could be the story of the decade... or it could destroy us if we get it wrong."

The weight of the documents feels heavy in your hands. You know the basic facts: Over 250 underage girls were exploited, more than 1,000 victims have been identified, and recent DOJ releases show there was no evidence of blackmail operations or client lists despite public speculation.

But these documents suggest there's more to uncover about how the investigation unfolded...

Your phone buzzes with an encrypted message: "The truth is in the timeline. Start with 2005. -A Friend"`,
            image: "newsroom_investigation",
            imagePrompt: "A tense female investigative journalist in a dimly lit newsroom examining classified documents spread across a desk, with computer screens showing FBI files, dramatic lighting, realistic photography style",
            sources: ["DOJ Press Release 2025", "FBI Records Vault", "Journalist fictional narrative"],
            choices: [
                {
                    text: "Quiz yourself on the basic facts before diving deeper",
                    nextScene: "knowledge_check_basics",
                    progressIncrease: 5,
                    quizMode: true
                },
                {
                    text: "Follow the timeline clue - investigate the 2005 Palm Beach case",
                    nextScene: "quiz_perfect_score",
                    progressIncrease: 10,
                    factual: true
                },
                {
                    text: "Examine the mysterious documents for authenticity first",
                    nextScene: "document_authentication",
                    evidence: true,
                    progressIncrease: 8
                }
            ],
            educationalNote: "This combines verified facts with fictional investigative scenarios to create an engaging learning experience."
        },

        knowledge_check_basics: {
            text: `KNOWLEDGE CHECK: EPSTEIN CASE BASICS
            
Before proceeding with your investigation, test your knowledge of the verified facts from official sources:

QUESTION 1 OF 3: According to the DOJ's 2025 release, how many victims were identified in the Epstein case?

This is crucial information that will affect how you approach your investigation. Getting the facts right is essential for credible journalism.`,
            image: "newsroom_investigation",
            imagePrompt: "Close-up of official FBI documents with statistics and victim counts, professional journalism research setting",
            sources: ["DOJ Victim Statistics 2025"],
            choices: [
                {
                    text: "Approximately 50 victims (from early reports)",
                    nextScene: "quiz_wrong_victim_count",
                    progressIncrease: 0,
                    quizAnswer: false
                },
                {
                    text: "Over 1,000 victims identified through investigation",
                    nextScene: "quiz_correct_victim_count",
                    progressIncrease: 15,
                    evidence: true,
                    quizAnswer: true,
                    factual: true
                },
                {
                    text: "Around 250 victims (the exploited minors only)",
                    nextScene: "quiz_partial_victim_count",
                    progressIncrease: 8,
                    quizAnswer: "partial"
                }
            ],
            quizMode: true,
            educationalNote: "Testing factual knowledge helps reinforce learning and affects your investigation path."
        },

        quiz_correct_victim_count: {
            text: `✅ CORRECT! Excellent knowledge of the facts.

You remember the DOJ's finding: "More than 1,000 victims have been identified through the investigation," with over 250 being underage girls who were directly exploited. This comprehensive victim identification was possible through modern digital forensics and systematic investigation techniques.

Your editor nods approvingly. "Good, you know the scope. This wasn't just a few isolated incidents - it was a massive operation. That knowledge will help you understand what you're looking for in these documents."

QUESTION 2 OF 3: True or False - The FBI found evidence of a "client list" that Epstein used for blackmail operations?

This is a critical misconception that has spread widely online. Your answer will determine how you approach analyzing the documents.`,
            image: "newsroom_investigation", 
            imagePrompt: "FBI documents showing investigation conclusions and evidence analysis, professional law enforcement setting",
            sources: ["FBI Investigation Conclusions 2025", "DOJ Comprehensive Review"],
            choices: [
                {
                    text: "TRUE - There was evidence of blackmail operations",
                    nextScene: "quiz_wrong_blackmail",
                    progressIncrease: 0,
                    quizAnswer: false
                },
                {
                    text: "FALSE - No evidence of client lists or blackmail found",
                    nextScene: "quiz_correct_blackmail",
                    progressIncrease: 20,
                    evidence: true,
                    quizAnswer: true,
                    factual: true
                }
            ],
            quizMode: true,
            knowledgeScore: 1,
            educationalNote: "Correct! Your strong factual foundation will help you avoid conspiracy theories and focus on real evidence."
        },

        quiz_correct_blackmail: {
            text: `✅ EXCELLENT! You're demonstrating strong factual knowledge.

Exactly right. The FBI concluded after exhaustive review: "No incriminating 'client list'" and "no credible evidence that Epstein blackmailed prominent individuals." This is crucial because it means you need to focus on the actual crimes - the systematic exploitation of victims - rather than speculation about powerful people.

Your editor smiles. "Perfect. Too many journalists get caught up in conspiracy theories. The real story is already horrific enough - over 1,000 victims deserve justice, not sensational speculation."

FINAL QUESTION: In what year did the federal charges that led to Epstein's 2019 arrest begin with the initial Palm Beach investigation?

Getting the timeline right is essential for understanding how this case developed and why it took so long to reach federal prosecution.`,
            image: "palm_beach_police_station",
            imagePrompt: "Palm Beach police station exterior showing the beginning of the investigation, documentary photography style with official law enforcement presence",
            sources: ["Palm Beach Police Records", "Timeline of Federal Case"],
            choices: [
                {
                    text: "2003 - When rumors first started",
                    nextScene: "quiz_wrong_timeline",
                    progressIncrease: 0,
                    quizAnswer: false
                },
                {
                    text: "2005 - When Palm Beach Police began investigating",
                    nextScene: "quiz_perfect_score",
                    progressIncrease: 25,
                    evidence: true,
                    quizAnswer: true,
                    factual: true
                },
                {
                    text: "2008 - When the controversial plea deal happened",
                    nextScene: "quiz_wrong_timeline_later",
                    progressIncrease: 5,
                    quizAnswer: false
                }
            ],
            quizMode: true,
            knowledgeScore: 2,
            educationalNote: "Your solid understanding of the timeline will be crucial for investigating how this case unfolded."
        },

        quiz_perfect_score: {
            text: `🏆 PERFECT SCORE! Outstanding factual knowledge.

You've demonstrated excellent understanding of the verified facts:
✅ Over 1,000 victims identified (not just the early estimates)
✅ No evidence of blackmail or client lists (contrary to speculation)
✅ Investigation began in 2005 with Palm Beach Police

Your editor is impressed. "Sarah, you clearly understand the difference between facts and fiction in this case. That's exactly what we need for credible investigative journalism."

BREAKING: Your secure phone buzzes with an urgent message from Detective Mike Rodriguez, your contact at Palm Beach PD who worked the original 2005 case:

"Sarah, I heard you might have new documents. I've been waiting 18 years to tell someone what really happened during our investigation. The FBI referral we made in 2006... there's more to that story. Meet me at the pier at midnight if you want the truth about how powerful people tried to shut us down."

This could be the breakthrough you need, but meeting an anonymous source is risky...`,
            image: "palm_beach_police_station",
            imagePrompt: "Detective's office with case files and evidence boards, showing the intensive investigation work from 2005",
            sources: ["Perfect Quiz Score Bonus", "Palm Beach Detective Fictional Contact"],
            choices: [
                {
                    text: "Meet Detective Rodriguez - this could be the key source",
                    nextScene: "detective_meeting_fictional",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Verify the detective's identity first using official channels",
                    nextScene: "source_verification",
                    progressIncrease: 15,
                    factual: true
                },
                {
                    text: "Focus on document analysis instead of risky meetings",
                    nextScene: "document_analysis_deep",
                    progressIncrease: 18,
                    evidence: true
                }
            ],
            knowledgeScore: 3,
            educationalNote: "Perfect knowledge unlocks special investigation paths! Your factual foundation enables deeper fictional scenarios."
        },

        detective_meeting_fictional: {
            text: `MIDNIGHT AT THE PIER - A FICTIONAL INVESTIGATION SCENE

The salty ocean breeze cuts through the darkness as you wait at the deserted pier. Detective Rodriguez emerges from the shadows - a weathered man in his 50s with tired eyes that have seen too much.

"I've been a cop for 30 years," he begins, lighting a cigarette with shaking hands. "The Epstein case in 2005... it started simple. A mother came to us about her 14-year-old daughter. Standard procedure, right? But when we dug deeper..."

He pulls out a worn notebook. "We identified nearly 40 girls locally. Forty! And that was just in Palm Beach. But every time we got close to bigger names, we'd get calls from Tallahassee, from Washington. 'Wrap it up, Rodriguez. You're making waves.'"

FICTIONAL SCENARIO BASED ON REAL FACTS: While this conversation is fictional, it's built on the verified fact that Palm Beach Police referred the case to FBI saying the charges didn't reflect "the totality of Epstein's conduct."

Rodriguez continues: "The plea deal in 2008... that wasn't justice. That was politics. But these documents you have..." He eyes your briefcase nervously. "They might prove what we always suspected."

How do you handle this crucial source?`,
            image: "palm_beach_police_station",
            imagePrompt: "Nighttime scene of a detective meeting at a pier, dramatic lighting with ocean in background, film noir investigative journalism style",
            sources: ["Fictional Detective Scenario", "Based on Real Palm Beach Investigation Facts"],
            choices: [
                {
                    text: "Ask for specific evidence to verify his claims",
                    nextScene: "detective_evidence_check",
                    progressIncrease: 15,
                    factual: true
                },
                {
                    text: "Share some document details to build trust",
                    nextScene: "mutual_information_exchange",
                    progressIncrease: 12,
                    evidence: true
                },
                {
                    text: "Test his knowledge with a fact-check question",
                    nextScene: "detective_knowledge_test",
                    progressIncrease: 18,
                    quizMode: true
                }
            ],
            educationalNote: "Fictional scenarios help explore how real investigations work while maintaining factual accuracy."
        },

        detective_knowledge_test: {
            text: `TESTING YOUR SOURCE - INVESTIGATIVE JOURNALISM TECHNIQUE

You decide to verify Detective Rodriguez's credibility by testing his knowledge of facts only someone who worked the case would know.

"Detective," you say carefully, "if you really worked this case, you'll know specific details. When Palm Beach PD referred this to the FBI in 2006, what was the main reason given in your report?"

Rodriguez nods approvingly. "Smart journalist. Always verify your sources." He takes a drag from his cigarette. "We told the FBI that the single prostitution charge didn't reflect 'the totality of Epstein's conduct.' Those were the exact words in our referral."

FACT CHECK: This is accurate according to official records. The detective's knowledge seems genuine.

"But here's what the records don't show," Rodriguez continues. "We had evidence of a systematic operation. Recruiters, a pipeline of girls, financial payments... it was organized crime, not just some rich guy's personal misconduct."

He points to your documents. "The question is: do those papers prove the federal agents found the same systematic operation we did? And if so, why did it take until 2019 for proper federal charges?"

How do you proceed with this investigation?`,
            image: "palm_beach_police_station",
            imagePrompt: "Detective reviewing case files under streetlight, showing authentic police investigation work from the original case",
            sources: ["Verified Detective Quote", "FBI Referral Records", "Fictional Investigation Scenario"],
            choices: [
                {
                    text: "Show him the federal evidence list from your documents",
                    nextScene: "evidence_comparison_scene",
                    progressIncrease: 25,
                    evidence: true,
                    factual: true
                },
                {
                    text: "Ask about specific victims to verify his involvement",
                    nextScene: "victim_verification_scene", 
                    progressIncrease: 20,
                    factual: true
                },
                {
                    text: "Focus on the 'systematic operation' claim with facts",
                    nextScene: "systematic_operation_analysis",
                    progressIncrease: 22,
                    evidence: true
                }
            ],
            educationalNote: "Source verification is crucial in investigative journalism. Testing knowledge against known facts helps establish credibility."
        },

        evidence_comparison_scene: {
            text: `THE EVIDENCE REVELATION - FICTIONAL SCENE WITH REAL DATA

You carefully pull out the official DOJ evidence list from 2025 and show Detective Rodriguez the key findings:

"Detective, look at this. When federal agents finally executed proper search warrants in 2019, they found: 40 computers, 26 storage drives, over 70 CDs, and more than 10,000 images and videos of illegal child sexual abuse material."

Rodriguez whistles low. "Jesus... 40 computers? We knew he was tech-savvy back in 2005, but that scale..." He studies the document. "Wait, look at this item: 'Evidence List includes one CD labelled girl pics nude book 4.' That suggests multiple volumes, Sarah. This wasn't casual - it was catalogued, organized."

REAL FACT: This evidence comes directly from the official DOJ release.

"You know what this proves?" Rodriguez says, his voice rising with excitement. "Everything we suspected in 2005 was true. The systematic nature, the scale, the organization. If federal agents had acted on our referral with this level of investigation back then..."

He trails off, but you understand. Hundreds more victims might have been spared if the initial federal response had been more thorough.

INVESTIGATIVE CHOICE: This is a crucial moment in your investigation. How do you use this revelation?`,
            image: "digital_forensics_lab",
            imagePrompt: "FBI evidence room with computers and digital storage devices laid out for analysis, showing the massive scale of digital evidence",
            sources: ["DOJ Evidence List 2025", "FBI Digital Forensics", "Fictional Detective Comparison"],
            choices: [
                {
                    text: "Focus on the timeline gap between 2005 and 2019",
                    nextScene: "timeline_gap_investigation",
                    progressIncrease: 30,
                    evidence: true,
                    factual: true
                },
                {
                    text: "Investigate why federal response was initially limited",
                    nextScene: "federal_response_analysis", 
                    progressIncrease: 25,
                    factual: true
                },
                {
                    text: "Quiz: Test your knowledge of digital evidence standards",
                    nextScene: "digital_evidence_quiz",
                    progressIncrease: 15,
                    quizMode: true
                }
            ],
            educationalNote: "Comparing evidence across different time periods reveals how investigations evolved and highlights missed opportunities."
        },

        timeline_gap_investigation: {
            text: `THE 14-YEAR GAP - INVESTIGATIVE BREAKTHROUGH

Working with Detective Rodriguez, you create a timeline that reveals the shocking truth:

2005: Palm Beach Police identify systematic operation with ~40 local victims
2006: FBI referral warns charges don't reflect "totality of conduct"  
2008: Controversial plea deal - 1 year, work release
2019: Federal agents find evidence of 1,000+ victims and massive digital archive

"Fourteen years, Sarah," Rodriguez says, shaking his head. "Fourteen years where this operation could have been expanding, finding new victims, while the evidence we handed them gathered dust."

FICTIONAL REVELATION BASED ON REAL TIMELINE: Rodriguez pulls out a faded folder. "I kept copies of everything. Look at this - our 2005 investigation notes mention Epstein's 'recruitment system' and 'financial incentives for referrals.' Sound familiar?"

You check the 2019 federal evidence: it describes exactly the same systematic recruitment operation Rodriguez documented 14 years earlier.

"The question isn't whether the evidence existed," you realize. "It's why federal authorities didn't act on a systematic child exploitation case for over a decade."

This could be the central thesis of your investigation - not just what Epstein did, but how institutional failures allowed it to continue.

CRITICAL DECISION POINT: How do you frame this story?`,
            image: "federal_courthouse_2019", 
            imagePrompt: "Split screen showing 2005 police station and 2019 federal courthouse, emphasizing the time gap in prosecution",
            sources: ["Timeline Analysis", "Federal Prosecution Delays", "Institutional Failure Investigation"],
            choices: [
                {
                    text: "Expose the institutional failures that enabled continued crimes",
                    nextScene: "institutional_failure_expose",
                    progressIncrease: 35,
                    evidence: true,
                    factual: true
                },
                {
                    text: "Focus on victim impact during the 14-year delay",
                    nextScene: "victim_impact_investigation",
                    progressIncrease: 30,
                    factual: true
                },
                {
                    text: "Investigate what changed in 2019 to enable prosecution",
                    nextScene: "prosecution_breakthrough_analysis",
                    progressIncrease: 28,
                    evidence: true
                }
            ],
            educationalNote: "Timeline analysis is a powerful investigative tool that can reveal institutional failures and systemic problems."
        },

        institutional_failure_expose: {
            text: `THE INSTITUTIONAL FAILURE INVESTIGATION - CLIMAX

Your investigation has uncovered a disturbing pattern of institutional failure that enabled Epstein's crimes to continue for 14 years after law enforcement had sufficient evidence to stop them.

VERIFIED FACTS YOU'VE UNCOVERED:
✅ 2005: Palm Beach Police identified systematic operation
✅ 2006: Proper FBI referral made warning of broader conduct  
✅ 2008: Lenient plea deal despite evidence of multiple victims
✅ 2019: Federal case finally reveals 1,000+ victims and massive evidence

FICTIONAL CONCLUSION BASED ON REAL TIMELINE: Detective Rodriguez provides the final piece. "Sarah, I've got one more thing." He hands you a sealed envelope. "This is a copy of our original 2005 memo to the FBI. Compare it to what they found in 2019. You'll see we gave them everything they needed."

You open it with trembling hands. The memo describes recruitment networks, systematic abuse, financial payments, and multiple victims - essentially everything the 2019 federal case would later prove.

"The victims who suffered between 2005 and 2019," Rodriguez says quietly, "that's on the system, not just on Epstein."

FINAL INVESTIGATIVE CHOICE: You have enough evidence for a major story about institutional failure. But you know this will have serious consequences - careers will end, trust in law enforcement will be damaged, and powerful people will try to discredit you.

How do you complete this investigation?`,
            image: "educational_conclusion",
            imagePrompt: "Investigative journalist at computer writing final story with evidence boards and documents around, showing the completion of a major investigation",
            sources: ["Institutional Failure Analysis", "Victim Impact Assessment", "Investigative Journalism Ethics"],
            choices: [
                {
                    text: "Publish the full story with institutional accountability focus",
                    nextScene: "publish_institutional_expose",
                    progressIncrease: 40,
                    evidence: true
                },
                {
                    text: "Seek expert verification before publishing such serious claims",
                    nextScene: "expert_verification_process",
                    progressIncrease: 35,
                    factual: true
                },
                {
                    text: "Contact institutions for comment before publication",
                    nextScene: "journalistic_ethics_scene",
                    progressIncrease: 30,
                    factual: true
                }
            ],
            educationalNote: "This fictional investigation demonstrates how real institutional failures can be exposed through careful analysis of verified facts and timelines."
        },

        publish_institutional_expose: {
            text: `THE STORY THAT CHANGED EVERYTHING

Your exposé, "The 14-Year Delay: How Institutional Failures Enabled Epstein's Continued Crimes," becomes a landmark piece of investigative journalism.

IMPACT OF YOUR INVESTIGATION:
🏆 Pulitzer Prize nomination for investigative reporting
📰 Congressional hearings on federal prosecution delays  
🔍 DOJ Inspector General investigation launched
👥 New victim support programs established
📚 Case study used in journalism schools nationwide

FICTIONAL CONCLUSION WITH REAL IMPACT: Your combination of verified facts, timeline analysis, and fictional investigative scenarios created a compelling narrative that educated readers while maintaining strict factual accuracy.

Detective Rodriguez calls you months later: "Sarah, I've had more victims contact me in the past six months than in the previous 18 years. Your story gave them hope that someone cares about getting the truth."

EDUCATIONAL ACHIEVEMENT UNLOCKED: 
✅ Master Investigator - Perfect factual knowledge
✅ Timeline Detective - Identified institutional failures
✅ Ethical Journalist - Maintained accuracy while creating engagement
✅ Public Service - Used fictional elements to educate about real issues

Your investigation demonstrated how combining verified facts with engaging fictional scenarios can create powerful educational experiences that inform the public about serious issues.

FINAL SCORE: Evidence Collected: ${this.gameState ? this.gameState.evidenceCount : 'X'} | Knowledge Score: Perfect | Investigation Impact: Maximum

The truth about the Epstein case - both the verified facts and the institutional failures that enabled it - is now part of the public record thanks to your careful, ethical investigation.`,
            image: "educational_conclusion",
            imagePrompt: "Newspaper headlines about institutional reforms and victim justice, showing the positive impact of investigative journalism",
            sources: ["Fictional Investigation Conclusion", "Real Educational Impact", "Investigative Journalism Success"],
            choices: [
                {
                    text: "Begin new investigation into other classified cases",
                    nextScene: "intro",
                    progressIncrease: 0
                }
            ],
            educationalNote: "This demonstrates how fictional investigative scenarios based on real facts can create engaging educational experiences while maintaining accuracy."
        }
    }
};

window.EpsteinStoryHybrid = EpsteinStoryHybrid;
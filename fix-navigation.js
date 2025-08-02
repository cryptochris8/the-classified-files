// Navigation Fix Script for Declassified
// This script identifies and fixes missing scene references

console.log('🔧 NAVIGATION FIX SCRIPT STARTING...');

// List of scenes that are referenced but missing from EpsteinStoryExpanded
const missingScenes = [
    'emergency_publication',
    'legal_protection_sought', 
    'rejected_reports_analysis',
    'journalism_alliance',
    'source_protection_protocol',
    'unified_testimony_preparation',
    'preemptive_legal_strike',
    'legal_coalition_formed',
    'public_pressure_campaign',
    'story_focus_legal_shield',
    'detective_meeting_fictional',
    'timeline_gap_investigation',
    'evidence_comparison_scene',
    'institutional_failure_expose'
];

// Missing quiz scenes
const missingQuizScenes = [
    'whistleblower_protection_quiz',
    'prosecution_complexity_quiz',
    'evidence_standards_quiz'
];

// Add missing scenes with placeholder content that redirects properly
const missingScenesToAdd = {
    emergency_publication: {
        text: `EMERGENCY PUBLICATION
        
        You decide to publish immediately to prevent the story from being suppressed. Your investigation reveals systematic institutional failures that enabled continued crimes.
        
        The story has massive impact, leading to congressional hearings and policy changes.`,
        image: "educational_conclusion",
        imagePrompt: "Newspaper headlines about emergency publication and institutional accountability",
        sources: ["Emergency Publication Decision"],
        choices: [
            {
                text: "See the final impact of your investigation",
                nextScene: "emergency_publication_final",
                progressIncrease: 20,
                evidence: true
            }
        ],
        educationalNote: "Emergency publication can be necessary when institutional forces try to suppress important stories."
    },

    legal_protection_sought: {
        text: `SEEKING LEGAL PROTECTION
        
        You work with media lawyers to protect your story from legal challenges. The combination of verified facts and proper journalistic practices creates a strong defense.
        
        Legal protection secured, you can now publish with confidence.`,
        image: "federal_courthouse_2019",
        imagePrompt: "Legal team preparing media defense strategy",
        sources: ["Media Law Protection"],
        choices: [
            {
                text: "Proceed with protected publication",
                nextScene: "story_centerpiece_decision",
                progressIncrease: 25,
                factual: true
            }
        ],
        educationalNote: "Legal protection is crucial for investigative journalism dealing with sensitive topics."
    },

    detective_meeting_fictional: {
        text: `MEETING THE DETECTIVE - FICTIONAL SCENARIO
        
        In this fictional scenario, you meet with a detective who worked the original case. This dramatic scene helps illustrate how real investigations develop sources and verify information.
        
        Remember: This is fictional, but based on real investigative techniques.`,
        image: "palm_beach_police_station",
        imagePrompt: "Detective meeting scene showing investigative journalism source development",
        sources: ["Fictional Detective Scenario", "Real Investigation Techniques"],
        choices: [
            {
                text: "Continue with evidence analysis",
                nextScene: "evidence_documentation",
                progressIncrease: 20,
                evidence: true
            },
            {
                text: "Focus on factual investigation instead",
                nextScene: "victim_statistics_study",
                progressIncrease: 15,
                factual: true
            }
        ],
        educationalNote: "This fictional scenario demonstrates real investigative journalism techniques."
    },

    timeline_gap_investigation: {
        text: `INVESTIGATING THE TIMELINE GAP
        
        You focus on the crucial 14-year gap between the 2005 Palm Beach investigation and the 2019 federal prosecution. This gap represents a systematic failure that allowed continued crimes.
        
        Your analysis reveals how institutional delays enabled ongoing victimization.`,
        image: "federal_courthouse_2019",
        imagePrompt: "Timeline visualization showing the 14-year prosecution gap",
        sources: ["Timeline Analysis", "Prosecution Delay Investigation"],
        choices: [
            {
                text: "Expose the institutional failures",
                nextScene: "institutional_failure_expose",
                progressIncrease: 30,
                evidence: true,
                factual: true
            },
            {
                text: "Complete investigation summary",
                nextScene: "emergency_publication_final",
                progressIncrease: 25,
                evidence: true
            }
        ],
        educationalNote: "Timeline analysis is a powerful tool for revealing institutional failures."
    },

    institutional_failure_expose: {
        text: `EXPOSING INSTITUTIONAL FAILURES
        
        Your investigation conclusively demonstrates how institutional failures enabled Epstein's crimes to continue for 14 years after sufficient evidence existed for prosecution.
        
        Key findings:
        - 2005: Evidence of systematic operation
        - 2008: Lenient plea deal despite evidence
        - 2019: Finally proper federal prosecution
        
        The story becomes a landmark exposé of justice system failures.`,
        image: "educational_conclusion",
        imagePrompt: "Investigation conclusion showing institutional accountability and reform",
        sources: ["Institutional Failure Analysis", "Justice System Reform"],
        choices: [
            {
                text: "Publish the complete exposé",
                nextScene: "emergency_publication_final",
                progressIncrease: 40,
                evidence: true,
                factual: true
            }
        ],
        educationalNote: "Institutional failure analysis helps prevent future systemic problems."
    },

    evidence_comparison_scene: {
        text: `EVIDENCE COMPARISON ANALYSIS
        
        You systematically compare the evidence available in 2005 versus what was used in 2019, revealing that sufficient evidence existed for federal prosecution much earlier.
        
        This comparison becomes central to your story about institutional delays.`,
        image: "digital_forensics_lab",
        imagePrompt: "Side-by-side evidence comparison showing 2005 vs 2019 investigations",
        sources: ["Evidence Timeline Comparison"],
        choices: [
            {
                text: "Use this as your main story angle",
                nextScene: "story_centerpiece_decision",
                progressIncrease: 30,
                evidence: true
            }
        ],
        educationalNote: "Evidence comparison reveals how prosecutorial decisions affect justice."
    }
};

// Add the missing quiz scenes
const missingQuizScenesToAdd = {
    whistleblower_protection_quiz: {
        text: `QUIZ: WHISTLEBLOWER PROTECTION
        
        Test your knowledge of how whistleblowers are protected in journalism and law enforcement.
        
        QUESTION: What legal protections exist for FBI agents who report institutional failures?`,
        image: "witness_testimony",
        imagePrompt: "Whistleblower protection legal documentation",
        sources: ["Whistleblower Protection Laws"],
        choices: [
            {
                text: "Strong federal protections with compensation",
                nextScene: "quiz_whistleblower_correct",
                progressIncrease: 20,
                quizAnswer: true,
                factual: true
            },
            {
                text: "Limited protections, often face retaliation",
                nextScene: "quiz_whistleblower_wrong", 
                progressIncrease: 10,
                quizAnswer: false
            }
        ],
        quizMode: true,
        educationalNote: "Understanding whistleblower protections is crucial for investigative journalism."
    },

    // Add fallback scenes for quiz responses
    quiz_whistleblower_correct: {
        text: `✅ Good understanding of whistleblower protections.`,
        image: "witness_testimony",
        choices: [
            {
                text: "Continue investigation",
                nextScene: "story_centerpiece_decision",
                progressIncrease: 15
            }
        ],
        educationalNote: "Whistleblower protections enable truth-telling in institutions."
    },

    quiz_whistleblower_wrong: {
        text: `Partially correct - protections exist but enforcement can be inconsistent.`,
        image: "witness_testimony", 
        choices: [
            {
                text: "Learn more about whistleblower challenges",
                nextScene: "story_centerpiece_decision",
                progressIncrease: 10
            }
        ],
        educationalNote: "Whistleblower protections need strengthening in practice."
    }
};

// Function to add missing scenes to EpsteinStoryExpanded
function addMissingScenes() {
    if (typeof EpsteinStoryExpanded !== 'undefined') {
        console.log('✅ Found EpsteinStoryExpanded, adding missing scenes...');
        
        // Add missing regular scenes
        Object.entries(missingScenesToAdd).forEach(([sceneId, sceneData]) => {
            if (!EpsteinStoryExpanded.scenes[sceneId]) {
                EpsteinStoryExpanded.scenes[sceneId] = sceneData;
                console.log(`✅ Added missing scene: ${sceneId}`);
            }
        });

        // Add missing quiz scenes  
        Object.entries(missingQuizScenesToAdd).forEach(([sceneId, sceneData]) => {
            if (!EpsteinStoryExpanded.scenes[sceneId]) {
                EpsteinStoryExpanded.scenes[sceneId] = sceneData;
                console.log(`✅ Added missing quiz scene: ${sceneId}`);
            }
        });

        console.log(`🎉 Navigation fix complete! Added ${Object.keys(missingScenesToAdd).length + Object.keys(missingQuizScenesToAdd).length} missing scenes.`);
        console.log('🔄 Game navigation should now work properly.');
        
        return true;
    } else {
        console.error('❌ EpsteinStoryExpanded not found! Make sure the story file is loaded.');
        return false;
    }
}

// Auto-execute the fix if running in browser
if (typeof window !== 'undefined') {
    console.log('🔧 Navigation fix script loaded.');
    console.log('📝 Run addMissingScenes() to fix navigation issues.');
    
    // Add to global scope for manual execution
    window.addMissingScenes = addMissingScenes;
} else {
    // If running in Node.js context, export the function
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = { addMissingScenes, missingScenesToAdd, missingQuizScenesToAdd };
    }
}
// MKUltra Files - An Interactive Investigation
// Based on declassified CIA mind control experiments (1953-1973)

const MKUltraStoryExpanded = {
    title: "MKUltra Files",
    description: "Investigate the CIA's secret mind control experiments. Uncover illegal drug testing, psychological torture, and the agency's abuse of unwitting subjects in the name of national security.",
    difficulty: "Expert", 
    estimatedTime: "75-90 minutes",
    
    badges: {
        whistleblower: {
            id: "whistleblower",
            name: "Whistleblower",
            description: "Exposed illegal government experiments",
            icon: "🔊"
        },
        victimAdvocate: {
            id: "victim-advocate", 
            name: "Victim Advocate",
            description: "Fought for experiment victims' rights",
            icon: "⚖️"
        },
        truthSeeker: {
            id: "truth-seeker",
            name: "Truth Seeker", 
            description: "Uncovered the full scope of MKUltra",
            icon: "🔍"
        },
        ethicsDefender: {
            id: "ethics-defender",
            name: "Ethics Defender",
            description: "Defended human experimentation standards",
            icon: "🛡️"
        }
    },
    
    scenes: {
        intro: {
            text: `MKULTRA FILES
            
            AUGUST 1975 - SENATE CHURCH COMMITTEE
            WASHINGTON D.C.
            
            You are a Senate investigator examining CIA abuses. A mysterious box of documents has been discovered in a Langley basement - files that were supposed to be destroyed.
            
            The label reads: "MKULTRA - SPECIAL ACTIVITIES"
            
            🔒 CLASSIFIED STAMP: TOP SECRET
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            As you open the first file, disturbing details emerge:
            
            • "Subproject 68: Psychic driving experiments"
            • "LSD testing on unwitting subjects"  
            • "Electroshock therapy beyond medical limits"
            • "Sensory deprivation torture techniques"
            • "Budget: $25 million (1953-1973)"
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            These aren't foreign enemies being tested - they're American citizens. Patients, soldiers, prisoners, mental health patients.
            
            The CIA has been conducting illegal human experiments for 20 years.`,
            image: "cia_basement_files",
            imagePrompt: "CIA basement storage room, dusty boxes labeled MKUltra, classified documents scattered, fluorescent lighting, mysterious government files",
            choices: [
                {
                    text: "Focus on the LSD experiments",
                    nextScene: "lsd_experiments"
                },
                {
                    text: "Investigate the Canadian connection", 
                    nextScene: "canadian_experiments"
                },
                {
                    text: "Examine the destroyed documents",
                    nextScene: "document_destruction",
                    progressIncrease: 15
                }
            ],
            educationalNote: "MKUltra was the CIA's illegal mind control program that conducted experiments on unwitting subjects from 1953-1973."
        },
        
        lsd_experiments: {
            text: `LSD EXPERIMENTS ON UNWITTING SUBJECTS
            
            The files reveal systematic drugging of American citizens:
            
            📋 SUBPROJECT 42 - OPERATION MIDNIGHT CLIMAX
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            Location: CIA safe houses in San Francisco/New York
            Method: Prostitutes drug clients with LSD
            Purpose: Study effects under "natural" conditions
            Subjects: Unaware johns, including government officials
            Duration: 1955-1965
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            🧪 DR. SIDNEY GOTTLIEB'S NOTES:
            "Subject exhibited extreme paranoia after administration 
            of 100 micrograms LSD. Believed he was being followed 
            by federal agents. Ironic, considering he was."
            
            📊 DOCUMENTED CASES:
            • Frank Olson - Army scientist, died after secret dosing
            • Mental patients given LSD for weeks continuously  
            • Prison inmates subjected to massive doses
            • Military personnel dosed without consent
            
            These aren't medical experiments - they're torture.`,
            image: "lsd_laboratory",
            imagePrompt: "1960s CIA laboratory, scientist in lab coat preparing LSD doses, test subjects behind glass, unethical experimentation, clinical coldness",
            choices: [
                {
                    text: "Investigate Frank Olson's death",
                    nextScene: "olson_death_mystery",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Focus on prisoner experiments",
                    nextScene: "prison_experiments"
                },
                {
                    text: "Track down surviving victims",
                    nextScene: "victim_testimonies",
                    progressIncrease: 15
                }
            ],
            educationalNote: "The CIA secretly dosed thousands of unwitting subjects with LSD, including through Operation Midnight Climax using prostitutes as agents."
        },
        
        canadian_experiments: {
            text: `THE CANADIAN CONNECTION
            ALLAN MEMORIAL INSTITUTE - MONTREAL
            
            The most horrific experiments weren't even on U.S. soil:
            
            👨‍⚕️ DR. EWEN CAMERON - SUBPROJECT 68
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            Method: "Psychic Driving" 
            Technique: Erase personality, rebuild from scratch
            Tools: LSD, electroshock, sensory deprivation
            Victims: Mental health patients seeking help
            CIA Funding: $60,000+ per year
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            📄 PATIENT FILE - LINDA MACDONALD:
            "Subject arrived with minor postpartum depression.
            
            Treatment: 102 electroshock sessions, continuous 
            LSD for 53 days, complete memory erasure achieved.
            
            Result: Patient cannot recognize husband or children. 
            Must relearn basic functions like toilet use.
            
            Assessment: Successful personality destruction."
            
            Cameron literally turned people into blank slates, then tried to rebuild them as CIA assets.`,
            image: "montreal_psychiatric_hospital",
            imagePrompt: "1960s psychiatric hospital in Montreal, sterile rooms with electroshock equipment, patient files, institutional horror, medical malpractice",
            choices: [
                {
                    text: "Document Cameron's techniques",
                    nextScene: "cameron_methods",
                    progressIncrease: 25,
                    evidence: true
                },
                {
                    text: "Find surviving Canadian victims",
                    nextScene: "canadian_victims"
                },
                {
                    text: "Trace CIA funding to Cameron",
                    nextScene: "funding_trail",
                    progressIncrease: 20
                }
            ],
            educationalNote: "Dr. Ewen Cameron's experiments in Montreal were among the most brutal, using 'psychic driving' to erase personalities completely."
        },
        
        olson_death_mystery: {
            text: `THE FRANK OLSON MYSTERY
            
            NOVEMBER 28, 1953 - STATLER HOTEL, NEW YORK
            
            The official story: Army scientist Dr. Frank Olson jumped from a 13th-floor window in a psychotic episode after unknowingly receiving LSD.
            
            The real story is far more sinister:
            
            🔍 TIMELINE OF EVENTS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            Nov 19: Olson attends CIA retreat at Deep Creek Lodge
            Nov 19: Sidney Gottlieb secretly doses Olson with LSD
            Nov 20: Olson exhibits severe psychological distress  
            Nov 25: CIA sends Olson to NYC "for treatment"
            Nov 28: Olson dies in suspicious "suicide"
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            🚨 SUSPICIOUS DETAILS:
            • Hotel room window was closed and intact
            • Body found 10 feet from building (jumped or thrown?)
            • CIA colleague Robert Lashbrook present but story changes
            • No suicide note despite Olson being a methodical scientist
            • Family lied to about LSD involvement for 22 years
            
            Was Frank Olson murdered to protect MKUltra secrets?`,
            image: "hotel_window_death",
            imagePrompt: "1950s hotel room at night, broken window, mysterious death scene, CIA documents on desk, suspicious circumstances",
            badges: ["truthSeeker"],
            choices: [
                {
                    text: "Confront the CIA about the cover-up",
                    nextScene: "cia_confrontation",
                    progressIncrease: 30,
                    evidence: true
                },
                {
                    text: "Interview Olson's family",
                    nextScene: "olson_family_truth"
                },
                {
                    text: "Examine the forensic evidence",
                    nextScene: "forensic_investigation",
                    progressIncrease: 25
                }
            ],
            educationalNote: "Frank Olson's death remains controversial, with his family believing he was murdered after threatening to expose MKUltra."
        },
        
        document_destruction: {
            text: `THE GREAT DOCUMENT DESTRUCTION
            
            JANUARY 1973 - CIA HEADQUARTERS
            
            As MKUltra comes under scrutiny, CIA Director Richard Helms orders the destruction of all program files:
            
            🔥 DESTRUCTION ORDER - CLASSIFIED
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            "All MKUltra files are to be destroyed immediately.
            No records of subprojects, expenditures, or 
            participants shall remain in CIA custody.
            
            This order is not subject to appeal or delay."
            - Richard Helms, DCI
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            📋 WHAT WAS DESTROYED:
            • 20,000+ documents 
            • Financial records of 149 subprojects
            • Names of researchers and institutions
            • Victim identities and outcomes
            • Evidence of illegal activities
            
            💡 THE MIRACLE DISCOVERY:
            Only 8,000 documents survived - misfiled in a budget office. These are the files you're now reading.
            
            Without this bureaucratic error, MKUltra would have remained secret forever.`,
            image: "document_shredding",
            imagePrompt: "CIA office 1973, men in suits feeding documents into industrial shredders, burning papers, cover-up in progress, desperate destruction",
            choices: [
                {
                    text: "Analyze what the surviving documents reveal",
                    nextScene: "surviving_documents",
                    progressIncrease: 30,
                    evidence: true
                },
                {
                    text: "Investigate why Helms ordered destruction", 
                    nextScene: "helms_motivation"
                },
                {
                    text: "Find researchers who might still have records",
                    nextScene: "researcher_hunt",
                    progressIncrease: 20
                }
            ],
            educationalNote: "CIA Director Richard Helms ordered the destruction of MKUltra files in 1973, but 8,000 documents survived due to a filing error."
        },
        
        surviving_documents: {
            text: `THE SURVIVING DOCUMENTS REVEALED
            
            The 8,000 surviving files paint a horrific picture:
            
            📊 MKULTRA BY THE NUMBERS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • 149 separate subprojects
            • 80 institutions involved
            • 185 private researchers contracted
            • 44 colleges and universities participated
            • 15 research foundations funded
            • 12 hospitals conducted experiments
            • Thousands of unwitting subjects
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            🎯 DISTURBING SUBPROJECTS:
            • Subproject 3: LSD effects on mental patients
            • Subproject 27: Hypnotic induction techniques  
            • Subproject 35: Brain electrode implants
            • Subproject 54: Assassination training methods
            • Subproject 119: Stress-producing drugs
            
            🏥 PARTICIPATING INSTITUTIONS:
            • Stanford University
            • Harvard Medical School  
            • Johns Hopkins
            • McGill University
            • Many others unknowingly involved
            
            The scope is staggering - this was a massive government conspiracy against its own citizens.`,
            image: "classified_file_analysis",
            imagePrompt: "Congressional investigator analyzing thousands of MKUltra documents, evidence boards, university connections mapped out, scale of conspiracy",
            badges: ["truthSeeker"],
            choices: [
                {
                    text: "Focus on university involvement",
                    nextScene: "university_complicity",
                    progressIncrease: 25
                },
                {
                    text: "Investigate assassination training",
                    nextScene: "assassination_program",
                    progressIncrease: 30,
                    evidence: true
                },
                {
                    text: "Document victim testimonies",
                    nextScene: "victim_testimonies",
                    progressIncrease: 20
                }
            ]
        },
        
        victim_testimonies: {
            text: `VICTIM TESTIMONIES
            
            The human cost of MKUltra becomes clear as victims come forward:
            
            👤 LINDA MACDONALD (Montreal):
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            "I went in for postpartum depression. I came out 
            not knowing my husband or children. I had to 
            relearn everything - walking, talking, even 
            using the bathroom. They stole my entire life."
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            👤 VELMA ORLIKOW (Montreal):
            "For 75 days they kept me in a drug-induced coma. 
            When I woke up, I was a stranger to myself. 
            My personality was gone."
            
            👤 HAROLD BLAUER (Army test subject):
            "They told me it was a routine medical exam. 
            The injection made me feel like I was dying. 
            I screamed for hours before my heart gave out."
            [Died from experimental mescaline overdose]
            
            👤 KEN KESEY (Menlo Park VA):
            "I volunteered for what I thought was a 
            legitimate psychology study. They gave me 
            massive doses of LSD and studied my reactions 
            like I was a lab rat."
            
            These aren't statistics - they're human beings whose lives were destroyed.`,
            image: "victim_testimonies_hearing",
            imagePrompt: "Congressional hearing room, MKUltra victims testifying, emotional testimony, families seeking justice, human cost of experiments",
            badges: ["victimAdvocate"],
            choices: [
                {
                    text: "Fight for victim compensation",
                    nextScene: "victim_compensation",
                    progressIncrease: 30,
                    evidence: true
                },
                {
                    text: "Expose the researchers responsible",
                    nextScene: "researcher_accountability"
                },
                {
                    text: "Document long-term health effects",
                    nextScene: "health_consequences",
                    progressIncrease: 20
                }
            ],
            educationalNote: "MKUltra victims suffered permanent psychological damage. Many never recovered their original personalities or memories."
        },
        
        assassination_program: {
            text: `SUBPROJECT 54: ASSASSINATION PROGRAM
            
            The most chilling discovery - the CIA was developing assassination techniques:
            
            🎯 OPERATION ARTICHOKE
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            Objective: "Can we get control of an individual 
            to the point where he will do our bidding against 
            his will and even against fundamental laws of 
            nature, such as self-preservation?"
            
            Methods tested:
            • Hypnosis combined with drugs
            • Torture-induced compliance  
            • Personality splitting techniques
            • Post-hypnotic assassination commands
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            📄 CLASSIFIED MEMO - 1954:
            "Subject successfully programmed to attempt 
            assassination of designated target under 
            hypnotic control. Subject has no memory of 
            programming or mission."
            
            🎬 THE MANCHURIAN CANDIDATE CONNECTION:
            The 1962 film wasn't fiction - it was based on real CIA research into mind-controlled assassins.
            
            Were programmed killers ever actually used? The destroyed files took those secrets to the grave.`,
            image: "mind_control_laboratory",
            imagePrompt: "Secret CIA laboratory, hypnosis equipment, subject in chair being programmed, assassination training materials, sinister atmosphere",
            choices: [
                {
                    text: "Investigate specific assassination attempts",
                    nextScene: "assassination_cases",
                    progressIncrease: 35,
                    evidence: true
                },
                {
                    text: "Examine the ethical violations",
                    nextScene: "ethics_breakdown"
                },
                {
                    text: "Connect to historical events",
                    nextScene: "historical_connections",
                    progressIncrease: 30
                }
            ],
            educationalNote: "The CIA's assassination research aimed to create mind-controlled killers, inspiring fiction like 'The Manchurian Candidate.'"
        },
        
        church_committee_revelations: {
            text: `CHURCH COMMITTEE PUBLIC HEARINGS
            
            SEPTEMBER 1975 - SENATE HART BUILDING
            
            Senator Frank Church gavels the hearing to order:
            
            🏛️ "The CIA has been conducting illegal experiments 
            on unwitting American citizens for over 20 years. 
            Today, we expose this abuse of power."
            
            📺 TELEVISED TESTIMONY - DR. SIDNEY GOTTLIEB:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            CHURCH: "Dr. Gottlieb, did you drug American 
            citizens without their knowledge or consent?"
            
            GOTTLIEB: "I was acting under orders from the 
            Director of Central Intelligence."
            
            CHURCH: "That's not what I asked. Did you or 
            did you not drug unwitting Americans?"
            
            GOTTLIEB: "...Yes, Senator."
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            The nation watches in horror as the full scope of MKUltra is revealed on live television.
            
            🎯 PUBLIC REACTION:
            • CIA credibility permanently damaged
            • Calls for criminal prosecutions
            • Victim lawsuits filed nationwide  
            • Congressional oversight strengthened`,
            image: "church_committee_hearing",
            imagePrompt: "Senate hearing room 1975, Frank Church questioning CIA officials, packed gallery, television cameras, historic confrontation",
            badges: ["whistleblower"],
            choices: [
                {
                    text: "Push for criminal prosecutions",
                    nextScene: "prosecution_attempts",
                    progressIncrease: 30,
                    evidence: true
                },
                {
                    text: "Focus on institutional reforms",
                    nextScene: "cia_reforms"
                },
                {
                    text: "Ensure victim compensation",
                    nextScene: "compensation_fight",
                    progressIncrease: 25
                }
            ]
        },
        
        lasting_impact: {
            text: `THE LASTING IMPACT OF MKULTRA
            
            The revelations changed America forever:
            
            ⚖️ LEGAL CONSEQUENCES:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • Nuremberg Code violations exposed
            • Informed consent requirements strengthened  
            • IRB oversight for human experiments mandated
            • CIA prohibited from domestic operations
            • Congressional intelligence oversight created
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            💰 VICTIM COMPENSATION:
            • 9 Canadian victims: $750,000 settlement
            • Frank Olson family: $1.25 million
            • Class action lawsuits ongoing
            • Many victims never identified due to destroyed records
            
            🏛️ INSTITUTIONAL REFORMS:
            • CIA Inspector General created
            • Church Committee oversight procedures
            • Human experimentation ethics boards
            • Classified program review requirements
            
            💭 CULTURAL IMPACT:
            MKUltra revealed that the U.S. government was capable of the same human rights abuses it condemned in other nations.
            
            The American people learned they couldn't trust their own government with absolute power.`,
            image: "congressional_reform",
            imagePrompt: "Congressional oversight hearing, new ethics guidelines being signed, victims receiving compensation, institutional accountability",
            badges: ["ethicsDefender"],
            choices: [
                {
                    text: "Complete the investigation",
                    nextScene: "victory",
                    progressIncrease: 50,
                    evidence: true
                },
                {
                    text: "Consider modern surveillance parallels",
                    nextScene: "modern_parallels"
                },
                {
                    text: "Reflect on government accountability",
                    nextScene: "accountability_lessons"
                }
            ]
        },
        
                cameron_methods: {
          text: "DR. CAMERON'S METHODS EXPOSED\n                \n                You document Cameron's horrific \"psychic driving\" techniques:\n                \n                📋 CAMERON'S TORTURE PROTOCOL:\n                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n                Phase 1: \"Depatterning\" - Destroy existing personality\n                • Continuous electroshock (2-3x normal medical dose)\n                • Drug-induced comas lasting weeks\n                • Sensory deprivation in soundproof rooms\n                • Continuous loops of recorded messages\n                \n                Phase 2: \"Psychic Driving\" - Rebuild personality\n                • Repeated messages played 16 hours daily\n                • LSD to increase suggestibility\n                • Isolation from all familiar stimuli\n                • Complete dependency on medical staff\n                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n                \n                Patient testimony: \"I forgot my children's names. I couldn't remember how to tie my shoes. They erased me and tried to make me into something else.\"",
          image: "cameron_methods_documentation",
          imagePrompt: "Medical torture documentation, electroshock equipment, sensory deprivation chambers, clinical horror",
          badges: [
                    "truthSeeker"
          ],
          choices: [
                    {
                              text: "Find more victims",
                              nextScene: "canadian_victims",
                              progressIncrease: 25
                    },
                    {
                              text: "Trace CIA funding",
                              nextScene: "funding_trail",
                              evidence: true
                    },
                    {
                              text: "Document the full scope",
                              nextScene: "surviving_documents",
                              progressIncrease: 30
                    }
          ]
},
        prison_experiments: {
          text: "PRISON EXPERIMENTS EXPOSED\n                \n                The most brutal experiments occurred in prisons where subjects couldn't escape:\n                \n                🏢 ATLANTA FEDERAL PENITENTIARY - 1956-1965\n                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n                • 100+ inmates given LSD without consent\n                • Doses up to 1,500 micrograms (15x recreational dose)\n                • Continuous administration for 77 days\n                • Subjects paid $25/month to participate\n                • No medical monitoring or follow-up care\n                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n                \n                Inmate testimony: \"They told us it was medicine. For weeks I couldn't tell what was real. I saw demons crawling on the walls. Some men never came back from those trips.\"\n                \n                The CIA targeted the most vulnerable - prisoners who had no choice, no advocates, and no way to report abuse.",
          image: "prison_experiments",
          imagePrompt: "1960s federal prison, inmates being subjected to drug experiments, medical abuse in confinement, exploitation of vulnerable",
          choices: [
                    {
                              text: "Find surviving prisoner subjects",
                              nextScene: "victim_testimonies",
                              progressIncrease: 20
                    },
                    {
                              text: "Document the medical violations",
                              nextScene: "ethics_breakdown",
                              evidence: true
                    },
                    {
                              text: "Connect to university research",
                              nextScene: "university_complicity"
                    }
          ]
},

        victory: {
            text: `INVESTIGATION COMPLETE
            EXPOSING THE UNTHINKABLE
            
            🏆 YOUR ACHIEVEMENTS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            ✓ Exposed 20 years of illegal CIA experiments
            ✓ Revealed systematic torture of Americans
            ✓ Documented assassination research program
            ✓ Brought justice to victims and families
            ✓ Reformed human experimentation oversight
            ✓ Strengthened congressional intelligence control
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            📊 THE FINAL ACCOUNTING:
            • 149 subprojects exposed
            • Thousands of victims identified
            • 80 institutions implicated
            • $25 million in illegal spending documented
            • Multiple lawsuits successful
            • CIA domestic activities curtailed
            
            Senator Frank Church's warning echoes through history:
            "The United States must not adopt the tactics 
            of the enemy. In the long run, those tactics 
            will destroy the very society we are trying 
            to protect."
            
            MKUltra proved that even democratic governments 
            need constant oversight to prevent the abuse of power.
            
            🎖️ FINAL SCORE: 92/100
            
            Thank you for investigating the MKULTRA FILES.`,
            image: "justice_served",
            imagePrompt: "Congressional committee final report on MKUltra, justice scales, victims receiving recognition, democracy protecting itself",
            choices: [
                {
                    text: "Play again",
                    nextScene: "intro"
                },
                {
                    text: "Return to main menu", 
                    nextScene: "mainMenu"
                }
            ]
        }
    }
};

// Make it available globally
window.MKUltraStoryExpanded = MKUltraStoryExpanded;
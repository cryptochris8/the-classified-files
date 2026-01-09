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
            text: `DR. CAMERON'S METHODS EXPOSED

            You document Cameron's horrific "psychic driving" techniques:

            📋 CAMERON'S TORTURE PROTOCOL:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            Phase 1: "Depatterning" - Destroy existing personality
            • Continuous electroshock (2-3x normal medical dose)
            • Drug-induced comas lasting weeks
            • Sensory deprivation in soundproof rooms
            • Continuous loops of recorded messages

            Phase 2: "Psychic Driving" - Rebuild personality
            • Repeated messages played 16 hours daily
            • LSD to increase suggestibility
            • Isolation from all familiar stimuli
            • Complete dependency on medical staff
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            Patient testimony: "I forgot my children's names. I couldn't remember how to tie my shoes. They erased me and tried to make me into something else."`,
            image: "cameron_methods_documentation",
            imagePrompt: "Medical torture documentation, electroshock equipment, sensory deprivation chambers, clinical horror",
            badges: ["truthSeeker"],
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
            ],
            educationalNote: "Dr. Cameron's 'psychic driving' involved destroying personalities through electroshock, drugs, and sensory deprivation, then attempting to rebuild them."
        },

        prison_experiments: {
            text: `PRISON EXPERIMENTS EXPOSED

            The most brutal experiments occurred in prisons where subjects couldn't escape:

            🏢 ATLANTA FEDERAL PENITENTIARY - 1956-1965
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • 100+ inmates given LSD without consent
            • Doses up to 1,500 micrograms (15x recreational dose)
            • Continuous administration for 77 days
            • Subjects paid $25/month to participate
            • No medical monitoring or follow-up care
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            Inmate testimony: "They told us it was medicine. For weeks I couldn't tell what was real. I saw demons crawling on the walls. Some men never came back from those trips."

            The CIA targeted the most vulnerable - prisoners who had no choice, no advocates, and no way to report abuse.`,
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
            ],
            educationalNote: "The CIA conducted LSD experiments on federal prisoners who had no ability to refuse or report abuse."
        },

        canadian_victims: {
            text: `CANADIAN VICTIMS SPEAK OUT

            Tracking down survivors of Dr. Cameron's experiments in Montreal:

            👤 JEAN-CHARLES PAGE - Victim #127
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            "I went in for anxiety. They put me in a coma for
            86 days. When I woke up, I didn't know my own
            mother. I was 30 years old and had to learn
            to read again like a child."
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            👤 JEANINE HUARD - Victim #89
            "They played tape recordings into my ears for
            weeks while I was drugged. 'You killed your mother.
            You are worthless. You must obey.' Over and over.
            I still hear those voices 20 years later."

            👤 ROBERT LOGIE - Victim #156
            "Cameron said he could cure my depression. Instead
            he took away everything that made me who I was.
            My wife says I came home a different person."

            📊 CANADIAN VICTIMS STATISTICS:
            • At least 300 known victims
            • Average treatment: 30-90 days
            • Permanent damage: 90%+
            • Suicides linked to treatment: 12+

            These were Canadian citizens experimented on with CIA funding on Canadian soil.`,
            image: "canadian_victims_testimonies",
            imagePrompt: "Canadian victims of MKUltra testifying, Montreal courtroom, families seeking justice, emotional testimony",
            badges: ["victimAdvocate"],
            choices: [
                {
                    text: "Push for Canadian government compensation",
                    nextScene: "compensation_fight",
                    progressIncrease: 25
                },
                {
                    text: "Document health consequences",
                    nextScene: "health_consequences",
                    evidence: true
                },
                {
                    text: "Trace CIA funding to Cameron",
                    nextScene: "funding_trail",
                    progressIncrease: 20
                }
            ],
            educationalNote: "Hundreds of Canadian citizens were victimized by CIA-funded experiments at McGill University's Allan Memorial Institute."
        },

        funding_trail: {
            text: `FOLLOWING THE CIA MONEY

            Tracing how the CIA funded illegal experiments:

            💰 THE MONEY LAUNDERING SYSTEM
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            CIA → Society for Human Ecology → Cameron
            CIA → Geschickter Fund → University Labs
            CIA → Josiah Macy Foundation → Researchers
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            📋 FUNDING TRAIL TO MONTREAL:
            • "Society for Investigation of Human Ecology"
            • CIA front organization based in New York
            • Funneled $60,000+ annually to Dr. Cameron
            • University administration unaware of true source
            • Research presented as legitimate psychiatry

            🏛️ KEY FOUNDATIONS USED AS FRONTS:
            • Geschickter Fund for Medical Research
            • Human Ecology Fund
            • Josiah Macy Jr. Foundation
            • Research Foundation Grants

            The CIA deliberately obscured its involvement to allow "plausible deniability" if experiments were discovered.

            When Cameron's victims sued, the CIA claimed they had no direct control over his methods - despite paying his bills.`,
            image: "cia_funding_diagram",
            imagePrompt: "Financial documents showing CIA front organizations, money trail diagram, shell companies funding experiments",
            badges: ["truthSeeker"],
            choices: [
                {
                    text: "Expose the front organizations",
                    nextScene: "church_committee_revelations",
                    progressIncrease: 30
                },
                {
                    text: "Document university complicity",
                    nextScene: "university_complicity",
                    evidence: true
                },
                {
                    text: "Connect to broader MKUltra network",
                    nextScene: "surviving_documents",
                    progressIncrease: 25
                }
            ],
            educationalNote: "The CIA used front organizations to fund MKUltra experiments, maintaining plausible deniability through complex money laundering."
        },

        cia_confrontation: {
            text: `CONFRONTING THE CIA ABOUT OLSON

            You bring your evidence directly to CIA leadership:

            🏛️ MEETING WITH CIA GENERAL COUNSEL
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            YOU: "The evidence shows Frank Olson didn't
            commit suicide. He was murdered to prevent
            him from exposing MKUltra."

            CIA COUNSEL: "Dr. Olson's death was a tragedy,
            but the agency has already acknowledged its
            role and compensated the family."

            YOU: "Compensated them for suicide - not murder.
            The forensic evidence shows he was struck on
            the head before falling from that window."

            CIA COUNSEL: [Long pause] "Those files are
            classified for national security reasons."
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            🔍 WHAT YOU'VE UNCOVERED:
            • Olson threatened to go public about biological weapons
            • He was "walked back" from resignation just days before death
            • Witness Robert Lashbrook's story has changed multiple times
            • Hotel phone records show suspicious call patterns

            The CIA knows more than they're admitting.`,
            image: "cia_headquarters_confrontation",
            imagePrompt: "Senate investigator confronting CIA officials, tense meeting room at Langley, classified documents on table",
            choices: [
                {
                    text: "Demand forensic investigation",
                    nextScene: "forensic_investigation",
                    progressIncrease: 30,
                    evidence: true
                },
                {
                    text: "Bring evidence to Church Committee",
                    nextScene: "church_committee_revelations",
                    progressIncrease: 35
                },
                {
                    text: "Interview the Olson family",
                    nextScene: "olson_family_truth"
                }
            ],
            educationalNote: "The CIA maintained that Frank Olson's death was suicide for decades, despite mounting evidence of foul play."
        },

        olson_family_truth: {
            text: `THE OLSON FAMILY SEEKS TRUTH

            Frank Olson's son Eric has spent decades investigating:

            👤 ERIC OLSON'S TESTIMONY
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            "I was 9 years old when they told us Dad
            killed himself. We believed it for 22 years.

            Then the Church Committee revealed he'd been
            secretly dosed with LSD. The CIA paid us
            $750,000 to go away.

            But the money didn't buy truth. I had my
            father's body exhumed in 1994. The forensic
            evidence was clear - he was struck on the
            head before he went out that window."
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            🔬 1994 EXHUMATION FINDINGS:
            • Cranial injury inconsistent with fall
            • No glass cuts on body (window supposedly broken)
            • Position of body suggests pushed, not jumped
            • Second forensic team confirmed findings

            Eric Olson: "My father was murdered. He knew too much about CIA assassination programs. They silenced him."

            The Manhattan DA opened a homicide investigation, but it was closed without charges when CIA witnesses invoked national security.`,
            image: "olson_family_investigation",
            imagePrompt: "Eric Olson with photos of his father, forensic evidence documents, family seeking closure after decades",
            badges: ["victimAdvocate"],
            choices: [
                {
                    text: "Push for criminal prosecution",
                    nextScene: "prosecution_attempts",
                    progressIncrease: 25
                },
                {
                    text: "Examine the forensic evidence",
                    nextScene: "forensic_investigation",
                    progressIncrease: 30,
                    evidence: true
                },
                {
                    text: "Connect to assassination program",
                    nextScene: "assassination_program",
                    progressIncrease: 20
                }
            ],
            educationalNote: "Frank Olson's son Eric had his father's body exhumed in 1994, finding forensic evidence suggesting murder rather than suicide."
        },

        forensic_investigation: {
            text: `FORENSIC EVIDENCE ANALYSIS

            Examining the physical evidence from Frank Olson's death:

            🔬 FORENSIC FINDINGS - 1994 EXHUMATION
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            FINDING 1: Cranial hematoma on left temple
            - Consistent with blunt force trauma
            - Occurred BEFORE death
            - Not consistent with fall impact

            FINDING 2: No defensive wounds
            - Suicide victims typically have hesitation marks
            - No evidence of self-harm attempts

            FINDING 3: Body position anomalies
            - Found far from building wall
            - Trajectory inconsistent with jump
            - More consistent with being pushed
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            👨‍⚕️ DR. JAMES STARRS (Forensic Pathologist):
            "The scientific evidence suggests Dr. Olson
            was rendered unconscious before exiting that
            window. This was not a suicide."

            The window was found closed and intact - inconsistent with someone crashing through it.

            Despite this evidence, no one has ever been charged with Frank Olson's murder.`,
            image: "forensic_evidence_review",
            imagePrompt: "Forensic laboratory, scientists examining evidence from Olson case, medical reports, criminal investigation",
            badges: ["truthSeeker"],
            choices: [
                {
                    text: "Demand prosecution of CIA officers",
                    nextScene: "prosecution_attempts",
                    progressIncrease: 30,
                    evidence: true
                },
                {
                    text: "Present to Church Committee",
                    nextScene: "church_committee_revelations",
                    progressIncrease: 35
                },
                {
                    text: "Investigate assassination program link",
                    nextScene: "assassination_cases",
                    progressIncrease: 25
                }
            ],
            educationalNote: "Forensic evidence from Frank Olson's 1994 exhumation strongly suggests he was murdered, not a suicide victim."
        },

        helms_motivation: {
            text: `WHY HELMS ORDERED DESTRUCTION

            Investigating CIA Director Richard Helms's decision:

            👤 RICHARD HELMS - DCI 1966-1973
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            By 1973, Watergate was unraveling Nixon's presidency.
            Congressional investigations were expanding.
            Helms knew MKUltra exposure was inevitable.

            His solution: destroy everything.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            📋 WHAT HELMS FEARED:
            • Criminal prosecution for human experimentation
            • International scandal (Canadian experiments)
            • Exposure of assassination research
            • Civil lawsuits from thousands of victims
            • Personal liability for authorizing torture

            🎭 HELMS'S TESTIMONY:
            SENATE: "Did you order the destruction of
            MKUltra files?"

            HELMS: "I felt it was better to destroy them
            than have them fall into the wrong hands."

            SENATE: "Whose hands? The American people's?"

            [No response]

            Helms later pled no contest to lying to Congress about CIA activities in Chile. He paid a $2,000 fine. No one was ever prosecuted for MKUltra.`,
            image: "richard_helms_testimony",
            imagePrompt: "Richard Helms testifying before Congress, defensive body language, CIA director under scrutiny",
            choices: [
                {
                    text: "Pursue criminal charges",
                    nextScene: "prosecution_attempts",
                    progressIncrease: 25
                },
                {
                    text: "Focus on surviving documents",
                    nextScene: "surviving_documents",
                    progressIncrease: 30,
                    evidence: true
                },
                {
                    text: "Examine CIA reforms",
                    nextScene: "cia_reforms"
                }
            ],
            educationalNote: "CIA Director Richard Helms ordered MKUltra files destroyed in 1973 to avoid prosecution and scandal during Watergate."
        },

        researcher_hunt: {
            text: `TRACKING DOWN MKULTRA RESEARCHERS

            Finding scientists who might have kept records:

            🔬 DR. SIDNEY GOTTLIEB - MKUltra Director
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            Status: Retired, living in Virginia
            Role: Headed MKUltra from 1953-1973
            Known as: "The Black Sorcerer"
            Special note: Personally administered LSD to Olson
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            When subpoenaed, Gottlieb claims memory problems.
            "I don't recall the specifics of individual experiments."

            🔬 DR. LOUIS JOLYON WEST
            Status: Professor at UCLA
            Role: LSD experiments on elephants and humans
            Records: Claims destroyed "per protocol"

            🔬 DR. HARRIS ISBELL
            Status: Deceased
            Role: Addiction Research Center experiments
            Records: Prison medical files "lost"

            📋 PATTERN EMERGES:
            Every researcher claims records were destroyed.
            Every institution claims no knowledge.
            Every funding source denies CIA connection.

            The coverup extends far beyond Langley.`,
            image: "researcher_investigation",
            imagePrompt: "Investigator visiting retired CIA scientist, suburban home with classified past, reluctant witness",
            choices: [
                {
                    text: "Subpoena Gottlieb to testify",
                    nextScene: "church_committee_revelations",
                    progressIncrease: 30
                },
                {
                    text: "Investigate university records",
                    nextScene: "university_complicity",
                    progressIncrease: 25,
                    evidence: true
                },
                {
                    text: "Focus on victim testimonies",
                    nextScene: "victim_testimonies",
                    progressIncrease: 20
                }
            ],
            educationalNote: "Most MKUltra researchers claimed destroyed records or memory problems when questioned, extending the coverup beyond the CIA."
        },

        university_complicity: {
            text: `UNIVERSITY INVOLVEMENT EXPOSED

            America's top universities participated in MKUltra:

            🏛️ PARTICIPATING INSTITUTIONS
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            HARVARD UNIVERSITY
            • Henry Murray's personality research
            • Subjects included Ted Kaczynski (age 16)
            • 200+ hours of psychological abuse

            STANFORD UNIVERSITY
            • Ken Kesey's LSD experiments
            • Graduate students as test subjects
            • Led to "acid tests" and counterculture

            MIT
            • Radiation experiments on mental patients
            • Connected to MKUltra through funding

            McGILL UNIVERSITY (Montreal)
            • Dr. Cameron's psychic driving
            • 300+ victims permanently damaged
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            📋 THE DEFENSE:
            Universities claim they didn't know the true
            funding source. CIA used front organizations.

            But did prestigious institutions really not
            question grants for "personality destruction"
            and "interrogation techniques"?

            Academic ethics were sacrificed for government money.`,
            image: "university_mkultra_investigation",
            imagePrompt: "University campus with dark secret, research building, academic complicity in government experiments",
            badges: ["truthSeeker"],
            choices: [
                {
                    text: "Demand university accountability",
                    nextScene: "researcher_accountability",
                    progressIncrease: 25
                },
                {
                    text: "Examine ethical violations",
                    nextScene: "ethics_breakdown",
                    progressIncrease: 30,
                    evidence: true
                },
                {
                    text: "Document institutional reforms",
                    nextScene: "cia_reforms"
                }
            ],
            educationalNote: "Major American universities including Harvard, Stanford, and MIT participated in MKUltra experiments through CIA front organization funding."
        },

        victim_compensation: {
            text: `FIGHTING FOR VICTIM COMPENSATION

            Pursuing justice for MKUltra victims:

            ⚖️ LAWSUIT: ORLIKOW v. UNITED STATES
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            Plaintiffs: 9 Canadian victims of Dr. Cameron
            Defendant: CIA (United States Government)
            Claim: $10 million for tortious experimentation

            CIA Defense: "Cameron was an independent
            contractor. We are not liable for his methods."

            Result: Out-of-court settlement - $750,000 total
            ($83,333 per victim - for destroyed lives)
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            📋 OTHER SETTLEMENTS:
            • Frank Olson family: $1.25 million (1975)
            • VA hospital victims: Class action pending
            • Prison experiment subjects: Denied standing

            💔 THE INJUSTICE:
            Most victims cannot sue because:
            • Destroyed records hide their identities
            • Statute of limitations has expired
            • They don't know they were experimented on
            • They're dead

            Thousands of victims will never receive compensation.`,
            image: "victim_compensation_hearing",
            imagePrompt: "Courtroom with MKUltra victims seeking justice, lawyers presenting evidence, emotional testimony",
            badges: ["victimAdvocate"],
            choices: [
                {
                    text: "Push for congressional compensation fund",
                    nextScene: "compensation_fight",
                    progressIncrease: 30
                },
                {
                    text: "Document all known victims",
                    nextScene: "health_consequences",
                    progressIncrease: 25,
                    evidence: true
                },
                {
                    text: "Examine lasting impact",
                    nextScene: "lasting_impact",
                    progressIncrease: 35
                }
            ],
            educationalNote: "Most MKUltra victims received little or no compensation, with settlements averaging less than $100,000 for destroyed lives."
        },

        researcher_accountability: {
            text: `HOLDING RESEARCHERS ACCOUNTABLE

            Can the scientists who conducted experiments be prosecuted?

            ⚖️ LEGAL CHALLENGES
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • Statute of limitations expired
            • "Following orders" defense
            • National security classification
            • Lack of documentation
            • Witnesses deceased or uncooperative
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            👨‍⚕️ DR. SIDNEY GOTTLIEB
            The "Black Sorcerer" personally:
            • Designed torture protocols
            • Administered drugs to unwitting subjects
            • Oversaw Olson's "treatment" before death

            Never charged with any crime.
            Died in 1999, taking secrets to his grave.

            👨‍⚕️ DR. EWEN CAMERON
            Tortured 300+ patients in Montreal:
            • Died in 1967 before exposure
            • Never faced any legal consequences
            • Eulogized as "pioneering psychiatrist"

            The Nuremberg defense worked for American scientists just as it had failed for Nazi doctors.`,
            image: "researcher_accountability_investigation",
            imagePrompt: "Congressional investigation into scientists, empty dock where perpetrators should be, justice denied",
            choices: [
                {
                    text: "Push for late prosecution",
                    nextScene: "prosecution_attempts",
                    progressIncrease: 25
                },
                {
                    text: "Focus on institutional reform",
                    nextScene: "cia_reforms",
                    progressIncrease: 30
                },
                {
                    text: "Document for historical record",
                    nextScene: "lasting_impact",
                    progressIncrease: 35,
                    evidence: true
                }
            ],
            educationalNote: "No MKUltra researcher was ever criminally prosecuted despite conducting experiments that violated the Nuremberg Code."
        },

        health_consequences: {
            text: `DOCUMENTING LONG-TERM HEALTH EFFECTS

            The permanent damage caused by MKUltra:

            🏥 MEDICAL FINDINGS
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            PSYCHOLOGICAL EFFECTS:
            • Permanent memory loss
            • PTSD and anxiety disorders
            • Personality fragmentation
            • Inability to form relationships
            • Chronic depression
            • Increased suicide risk

            PHYSICAL EFFECTS:
            • Brain damage from electroshock
            • Cardiovascular damage from drugs
            • Neurological impairment
            • Chronic pain syndromes
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            📊 CAMERON'S VICTIMS STUDY:
            Of patients who received "psychic driving":
            • 100% reported permanent memory impairment
            • 85% required ongoing psychiatric care
            • 60% couldn't work or live independently
            • 25% died by suicide

            Linda Macdonald: "I had to be retrained as a
            human being. How to walk, talk, use a toilet.
            At 25 years old, I was an infant again."

            These people went to doctors for help. They received torture instead.`,
            image: "health_consequences_documentation",
            imagePrompt: "Medical documentation of MKUltra victims, brain scans showing damage, lifetime of suffering",
            badges: ["victimAdvocate"],
            choices: [
                {
                    text: "Fight for victim compensation",
                    nextScene: "compensation_fight",
                    progressIncrease: 30
                },
                {
                    text: "Examine ethical reforms needed",
                    nextScene: "ethics_breakdown",
                    progressIncrease: 25,
                    evidence: true
                },
                {
                    text: "Document for final report",
                    nextScene: "lasting_impact",
                    progressIncrease: 35
                }
            ],
            educationalNote: "MKUltra victims suffered permanent psychological and physical damage, with many never recovering basic life functions."
        },

        assassination_cases: {
            text: `INVESTIGATING ASSASSINATION CONNECTIONS

            Did the CIA use MKUltra techniques for assassinations?

            🎯 DOCUMENTED ASSASSINATION PROGRAMS
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            PROJECT ZRRIFLE
            Objective: Assassination capability
            Connection: Used MKUltra research

            OPERATION MONGOOSE
            Target: Fidel Castro
            Methods: Poisoned cigars, exploding seashells
            MKUltra link: Drug and toxin development
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            🔍 SUSPICIOUS QUESTIONS:
            • Was Frank Olson killed using MKUltra methods?
            • Did "programmed assassins" ever exist?
            • What destroyed files contained?

            📋 CHURCH COMMITTEE FINDINGS:
            "The CIA developed assassination capability and
            maintained it as a capability option. Whether
            it was used against American citizens or others
            remains unknown due to destroyed documentation."

            The truth died with the shredded files.`,
            image: "assassination_program_investigation",
            imagePrompt: "Intelligence files on assassination programs, redacted documents, Cold War espionage",
            badges: ["truthSeeker"],
            choices: [
                {
                    text: "Connect to broader conspiracy",
                    nextScene: "historical_connections",
                    progressIncrease: 30
                },
                {
                    text: "Present to Church Committee",
                    nextScene: "church_committee_revelations",
                    progressIncrease: 35,
                    evidence: true
                },
                {
                    text: "Focus on reforms to prevent future abuse",
                    nextScene: "cia_reforms",
                    progressIncrease: 25
                }
            ],
            educationalNote: "MKUltra research was connected to CIA assassination programs, though the full extent remains unknown due to destroyed files."
        },

        ethics_breakdown: {
            text: `EXAMINING THE ETHICAL VIOLATIONS

            How did American scientists violate every principle of medical ethics?

            📜 NUREMBERG CODE (1947)
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            Principle 1: Voluntary consent is essential
            MKUltra: Subjects were drugged without knowledge

            Principle 2: Experiment must yield results
            MKUltra: "Mind control" was pseudoscience

            Principle 5: No death or disabling injury
            MKUltra: Multiple deaths, permanent brain damage

            Principle 9: Subject can quit at any time
            MKUltra: Prisoners, patients had no choice
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            🏛️ THE HYPOCRISY:
            These same principles were used to prosecute
            Nazi doctors at Nuremberg in 1946.

            Seven years later, American scientists began
            violating every single one of them.

            Dr. Cameron was president of the American
            Psychiatric Association while torturing patients.
            Dr. Gottlieb held security clearance while
            murdering Frank Olson.

            The code only applied to our enemies.`,
            image: "ethics_violations_analysis",
            imagePrompt: "Nuremberg Code document contrasted with MKUltra files, medical ethics violated, American hypocrisy",
            choices: [
                {
                    text: "Push for new ethical safeguards",
                    nextScene: "cia_reforms",
                    progressIncrease: 30
                },
                {
                    text: "Demand accountability",
                    nextScene: "researcher_accountability",
                    progressIncrease: 25
                },
                {
                    text: "Document the full scope",
                    nextScene: "lasting_impact",
                    progressIncrease: 35,
                    evidence: true
                }
            ],
            educationalNote: "MKUltra violated every principle of the Nuremberg Code that America had used to prosecute Nazi doctors just years earlier."
        },

        historical_connections: {
            text: `CONNECTING MKULTRA TO HISTORY

            MKUltra's roots in Nazi research and Cold War paranoia:

            📜 OPERATION PAPERCLIP CONNECTION
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            After WWII, the CIA recruited Nazi scientists:
            • Mind control researchers
            • Chemical weapons experts
            • Interrogation specialists

            Some MKUltra techniques were developed from
            Nazi concentration camp experiments.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            🎯 COLD WAR JUSTIFICATION:
            1950: Korean POWs appear "brainwashed"
            CIA panics: "The Soviets have mind control!"
            MKUltra launched to "close the mind control gap"

            Reality: Soviet "brainwashing" was torture, not
            science. The CIA tortured Americans based on
            a misunderstanding of communist propaganda.

            📋 THE IRONY:
            To fight totalitarianism abroad, America
            adopted totalitarian methods at home.

            To prevent enemy mind control, the CIA
            destroyed American minds.`,
            image: "historical_connections_mkultra",
            imagePrompt: "Cold War timeline showing Nazi connection to MKUltra, propaganda posters, American paranoia",
            badges: ["truthSeeker"],
            choices: [
                {
                    text: "Examine modern parallels",
                    nextScene: "modern_parallels",
                    progressIncrease: 25
                },
                {
                    text: "Focus on reforms",
                    nextScene: "cia_reforms",
                    progressIncrease: 30
                },
                {
                    text: "Complete the investigation",
                    nextScene: "lasting_impact",
                    progressIncrease: 35,
                    evidence: true
                }
            ],
            educationalNote: "MKUltra was rooted in Cold War paranoia about Soviet brainwashing and drew on Nazi human experimentation research."
        },

        prosecution_attempts: {
            text: `ATTEMPTS TO PROSECUTE

            Can anyone be held criminally accountable?

            ⚖️ PROSECUTION BARRIERS
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            1. Statute of limitations expired
            2. Evidence destroyed by CIA
            3. Witnesses claim memory loss
            4. National security classification
            5. "Following orders" defense
            6. Key perpetrators died
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            📋 WHAT HAPPENED:
            • Richard Helms: $2,000 fine for lying to Congress
            • Sidney Gottlieb: Never charged
            • Ewen Cameron: Died before exposure
            • Robert Lashbrook: Immunity for testimony

            Manhattan DA James Morgenthau:
            "Even if we could prove Frank Olson was murdered,
            the CIA witnesses would invoke national security
            and we'd get nowhere."

            🏛️ THE LESSON:
            When the government commits crimes, the government
            investigates itself. No one is held accountable.

            The only "punishment" for MKUltra was embarrassment.`,
            image: "prosecution_blocked",
            imagePrompt: "Empty courtroom where prosecution should happen, scales of justice unbalanced, accountability denied",
            choices: [
                {
                    text: "Focus on institutional reforms",
                    nextScene: "cia_reforms",
                    progressIncrease: 30
                },
                {
                    text: "Ensure historical record",
                    nextScene: "accountability_lessons",
                    progressIncrease: 25
                },
                {
                    text: "Complete the investigation",
                    nextScene: "lasting_impact",
                    progressIncrease: 35,
                    evidence: true
                }
            ],
            educationalNote: "No one was criminally prosecuted for MKUltra despite documented torture and deaths. The strongest penalty was a $2,000 fine."
        },

        cia_reforms: {
            text: `CIA REFORMS AFTER MKULTRA

            Changes implemented to prevent future abuses:

            🏛️ INSTITUTIONAL REFORMS
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            1975: Church Committee established
            - Permanent intelligence oversight
            - Required congressional notification

            1976: Executive Order 11905
            - Banned assassination as policy tool

            1978: Foreign Intelligence Surveillance Act
            - Warrant requirements for surveillance

            1981: Executive Order 12333
            - Prohibited experimentation without consent
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            📋 MEDICAL ETHICS REFORMS:
            • Institutional Review Boards required
            • Informed consent mandated for all research
            • Human Subjects Protection regulations

            💭 BUT QUESTIONS REMAIN:
            • Can these rules be secretly bypassed?
            • Who watches the watchers?
            • Did torture programs really end?

            Post-9/11 "enhanced interrogation" suggests
            the lessons of MKUltra weren't fully learned.`,
            image: "cia_reform_signing",
            imagePrompt: "President signing reform legislation, congressional oversight committee, new era of accountability",
            choices: [
                {
                    text: "Consider modern parallels",
                    nextScene: "modern_parallels",
                    progressIncrease: 25
                },
                {
                    text: "Examine lasting lessons",
                    nextScene: "accountability_lessons",
                    progressIncrease: 30
                },
                {
                    text: "Complete the investigation",
                    nextScene: "lasting_impact",
                    progressIncrease: 35,
                    evidence: true
                }
            ],
            educationalNote: "MKUltra led to intelligence reforms including congressional oversight, though post-9/11 programs raised questions about their effectiveness."
        },

        compensation_fight: {
            text: `THE FIGHT FOR COMPENSATION CONTINUES

            Seeking justice for all MKUltra victims:

            💰 CURRENT COMPENSATION STATUS
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            Canadian victims (9): $750,000 total (1988)
            Olson family: $1.25 million (1975)
            VA hospital victims: Pending
            Prison subjects: Claims denied
            Unknown victims: No recourse
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            📋 ONGOING EFFORTS:
            • Class action lawsuits still pending
            • Canadian government compensation program
            • Victims advocacy groups seeking justice
            • Legislative proposals for compensation fund

            👤 VELMA ORLIKOW'S TESTIMONY:
            "They gave us $83,000 each for destroyed lives.
            My husband David spent 30 years fighting.
            He died before seeing real justice."

            🇨🇦 CANADIAN GOVERNMENT:
            Finally acknowledged victims in 2017
            Established $31 million compensation fund
            Still excludes children of victims

            Most American victims have received nothing.`,
            image: "compensation_fight_ongoing",
            imagePrompt: "Victims advocacy rally, families seeking compensation, ongoing fight for justice",
            badges: ["victimAdvocate"],
            choices: [
                {
                    text: "Document health consequences",
                    nextScene: "health_consequences",
                    progressIncrease: 25
                },
                {
                    text: "Examine lasting impact",
                    nextScene: "lasting_impact",
                    progressIncrease: 35,
                    evidence: true
                },
                {
                    text: "Consider lessons learned",
                    nextScene: "accountability_lessons",
                    progressIncrease: 30
                }
            ],
            educationalNote: "Most MKUltra victims received minimal or no compensation. Canada only established a formal compensation fund in 2017."
        },

        modern_parallels: {
            text: `MODERN PARALLELS: DID WE LEARN?

            Examining post-MKUltra government abuses:

            🔍 POST-9/11 "ENHANCED INTERROGATION"
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            CIA Black Sites: Secret prisons abroad
            Techniques: Waterboarding, sleep deprivation
            Justification: "Not torture" under new definitions
            Accountability: One prosecution, pardoned
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            📋 THE SIMILARITIES:
            ✓ Classified programs hidden from Congress
            ✓ Legal memos to justify illegality
            ✓ "National security" blocks accountability
            ✓ Documents destroyed
            ✓ No prosecutions

            💭 KEY QUESTIONS:
            • What programs exist today that we don't know about?
            • Are intelligence reforms actually enforced?
            • Will we discover new abuses in 20 years?

            Senator Dianne Feinstein (2014):
            "The CIA's actions were a stain on our values
            and on our history. They must never happen again."

            That's what they said about MKUltra too.`,
            image: "modern_surveillance_concerns",
            imagePrompt: "Modern surveillance state, CIA black sites, post-9/11 interrogation, cycle repeating",
            choices: [
                {
                    text: "Examine accountability lessons",
                    nextScene: "accountability_lessons",
                    progressIncrease: 30
                },
                {
                    text: "Focus on institutional safeguards",
                    nextScene: "cia_reforms",
                    progressIncrease: 25
                },
                {
                    text: "Complete the investigation",
                    nextScene: "lasting_impact",
                    progressIncrease: 35,
                    evidence: true
                }
            ],
            educationalNote: "Post-9/11 interrogation programs showed disturbing parallels to MKUltra, raising questions about whether reforms were effective."
        },

        accountability_lessons: {
            text: `LESSONS ON GOVERNMENT ACCOUNTABILITY

            What MKUltra teaches us about power:

            📚 KEY LESSONS
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            1. Secret programs enable abuse
            "What you don't know can hurt you"

            2. Oversight must be real, not symbolic
            Congressional committees failed for 20 years

            3. "National security" can justify anything
            Including torture of citizens

            4. Without accountability, abuse continues
            No prosecution = no deterrence

            5. Bureaucratic errors reveal truth
            MKUltra only exposed due to misfiled documents
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            🏛️ SENATOR FRANK CHURCH:
            "The United States must not adopt the tactics
            of the enemy. Each time we do, each time the
            means we use are wrong, our inner strength,
            the strength which makes us free, is lessened."

            💡 THE ETERNAL QUESTION:
            How do we protect national security without
            destroying the values we're trying to protect?

            MKUltra showed we don't always have the answer.`,
            image: "accountability_lessons_reflection",
            imagePrompt: "Scales of justice, constitutional documents, balance between security and liberty",
            badges: ["ethicsDefender"],
            choices: [
                {
                    text: "Complete the investigation",
                    nextScene: "lasting_impact",
                    progressIncrease: 35,
                    evidence: true
                },
                {
                    text: "Consider the victims one more time",
                    nextScene: "victim_testimonies",
                    progressIncrease: 20
                },
                {
                    text: "End with final report",
                    nextScene: "victory",
                    progressIncrease: 50
                }
            ],
            educationalNote: "MKUltra's most important lesson: democratic oversight of intelligence agencies is essential to prevent abuse of power."
        },

        mainMenu: {
            text: `Thank you for investigating the MKUltra Files.

            This case revealed how the CIA conducted illegal mind control experiments on unwitting American and Canadian citizens from 1953-1973, violating every principle of medical ethics.

            The lessons of MKUltra remain relevant today as we continue to balance national security with civil liberties and government accountability.`,
            image: "mkultra_conclusion",
            imagePrompt: "MKUltra investigation complete, historical documents, justice sought",
            choices: []
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
// Tuskegee Experiment - An Interactive Investigation
// Based on historical events and verified facts

const TuskegeeExperimentStoryExpanded = {
    title: "Tuskegee Experiment",
    description: "Investigate the 40-year unethical medical study that denied treatment to African American men with syphilis in the name of science.",
    difficulty: "Expert",
    estimatedTime: "60-90 minutes",
    
    badges: {
        truthSeeker: {
            id: "truth-seeker",
            name: "Truth Seeker",
            description: "Uncovered the conspiracy",
            icon: "🔍"
        },
        whistleblower: {
            id: "whistleblower", 
            name: "Whistleblower",
            description: "Exposed government secrets",
            icon: "📢"
        },
        justiceSeeker: {
            id: "justice-seeker",
            name: "Justice Seeker", 
            description: "Fought for accountability",
            icon: "⚖️"
        },
        courageousAct: {
            id: "courageous-act",
            name: "Courageous Act",
            description: "Showed moral courage under pressure", 
            icon: "🦸"
        }
    },
    
    scenes: {
        intro: {
            text: `TUSKEGEE EXPERIMENT

            1972 - PUBLIC HEALTH SERVICE OFFICES

            You are Peter Buxtun, a Public Health Service investigator who has discovered disturbing details about a 40-year medical study called "The Tuskegee Study of Untreated Syphilis in the Negro Male."

            📋 STUDY PARAMETERS (1932-1972):
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • 600 African American men enrolled
            • 399 with syphilis, 201 controls
            • Told they were being treated for "bad blood"
            • Actually never received proper treatment
            • Penicillin discovered as cure in 1940s - WITHHELD
            • Families infected, children born with congenital syphilis
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            The government has been using these men as human guinea pigs for four decades, watching them die from a treatable disease.

            This isn't medicine - it's torture disguised as science.`,
            image: "tuskegee_medical_records",
            imagePrompt: "1970s medical office, African American patient files marked with syphilis studies, unethical medical experimentation evidence",
            choices: [
                {
                    text: "Investigate the study's methodology",
                    nextScene: "study_methodology",
                    progressIncrease: 15
                },
                {
                    text: "Focus on the ethical violations",
                    nextScene: "ethical_violations",
                    progressIncrease: 20
                },
                {
                    text: "Find the victims and their families",
                    nextScene: "victim_families",
                    progressIncrease: 15
                }
            ],
            educationalNote: "The Tuskegee Experiment (1932-1972) studied untreated syphilis in African American men without their informed consent, denying them treatment even after penicillin was discovered."
        },

        study_methodology: {
            text: `STUDY METHODOLOGY INVESTIGATION

            You dive deep into the medical records and discover the horrifying methodology:

            📋 THE STUDY DESIGN:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            The U.S. Public Health Service partnered with Tuskegee Institute in 1932 to study the "natural progression" of untreated syphilis in African American men.

            🔬 KEY FINDINGS:
            • Participants were told they had "bad blood" (a local term for various ailments)
            • They were given free meals, medical exams, and burial insurance as incentives
            • Actual treatment was DELIBERATELY withheld
            • Spinal taps (painful diagnostic procedures) were disguised as "treatment"
            • When penicillin became the standard cure in the 1940s, it was NOT provided
            • Researchers actively prevented participants from receiving treatment elsewhere
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            Dr. John Heller, who directed the study in the 1960s, later said: "The men's status did not warrant ethical debate. They were subjects, not patients."`,
            image: "tuskegee_methodology",
            imagePrompt: "Medical research documents showing unethical study design, 1930s-1970s Public Health Service files, African American patients",
            sources: [
                "CDC: The Tuskegee Timeline",
                "James H. Jones, 'Bad Blood: The Tuskegee Syphilis Experiment'",
                "Susan Reverby, 'Examining Tuskegee'"
            ],
            choices: [
                {
                    text: "Investigate how participants were recruited",
                    nextScene: "recruitment_tactics",
                    progressIncrease: 15
                },
                {
                    text: "Examine the role of Nurse Eunice Rivers",
                    nextScene: "nurse_rivers",
                    progressIncrease: 15
                },
                {
                    text: "Look into the penicillin denial",
                    nextScene: "penicillin_denial",
                    progressIncrease: 20
                }
            ],
            educationalNote: "The study violated basic principles of medical ethics, including informed consent, which had been established in the Nuremberg Code (1947) following Nazi medical experiments."
        },

        ethical_violations: {
            text: `ETHICAL VIOLATIONS DOCUMENTED

            Your investigation reveals a cascade of ethical violations spanning four decades:

            ⚖️ VIOLATIONS OF MEDICAL ETHICS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            1. NO INFORMED CONSENT
            Participants were never told the true nature of the study. They believed they were receiving free healthcare.

            2. DELIBERATE DECEPTION
            Diagnostic spinal taps were called "special free treatment" in letters to participants.

            3. DENIAL OF TREATMENT
            Even after penicillin was proven effective in 1947, participants were denied the cure.

            4. PREVENTION OF OUTSIDE TREATMENT
            Researchers contacted local doctors to prevent participants from receiving treatment elsewhere.

            5. EXPLOITATION OF VULNERABLE POPULATION
            Poor, rural African American men were specifically targeted due to limited access to healthcare and education.

            6. VIOLATION OF HIPPOCRATIC OATH
            "First, do no harm" was systematically violated by allowing preventable suffering and death.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "tuskegee_ethics",
            imagePrompt: "Legal documents showing medical ethics violations, courtroom evidence, 1970s civil rights investigation",
            sources: [
                "Presidential Commission for the Study of Bioethical Issues",
                "Belmont Report (1979)",
                "National Research Act of 1974"
            ],
            choices: [
                {
                    text: "Investigate deaths caused by the study",
                    nextScene: "death_toll",
                    progressIncrease: 20
                },
                {
                    text: "Look into government knowledge and coverup",
                    nextScene: "government_coverup",
                    progressIncrease: 20
                },
                {
                    text: "Research previous whistleblower attempts",
                    nextScene: "earlier_whistleblowers",
                    progressIncrease: 15
                }
            ],
            educationalNote: "The Tuskegee study led directly to the National Research Act of 1974 and the establishment of Institutional Review Boards (IRBs) for protecting human research subjects."
        },

        victim_families: {
            text: `FINDING THE VICTIMS AND FAMILIES

            You track down survivors and families of participants. Their stories are heartbreaking:

            👥 VICTIM TESTIMONIES:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            HERMAN SHAW (Participant):
            "They just said I had bad blood and they'd take care of me. I trusted them. I was a veteran, served my country. And this is what they did to us."

            CHARLIE POLLARD (Participant):
            "I thought they were helping me. For 40 years I thought that. Then I find out they were just watching me die."

            FAMILY IMPACT:
            • Wives infected by husbands who didn't know they were contagious
            • Children born with congenital syphilis
            • Generational trauma and distrust of medical institutions
            • Deaths that could have been prevented with a simple penicillin injection
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            By 1972, of the original 399 infected men:
            • 128 had died of syphilis or related complications
            • 40 wives had been infected
            • 19 children had been born with congenital syphilis`,
            image: "tuskegee_victims",
            imagePrompt: "African American families in 1970s Alabama, elderly men in rural setting, medical injustice victims",
            sources: [
                "Tuskegee Syphilis Study Legacy Committee",
                "Survivor testimonies, Congressional hearings 1973",
                "CDC Final Report on Tuskegee"
            ],
            choices: [
                {
                    text: "Document their stories for the press",
                    nextScene: "press_exposure",
                    progressIncrease: 25
                },
                {
                    text: "Help families seek legal action",
                    nextScene: "legal_action",
                    progressIncrease: 20
                },
                {
                    text: "Connect with civil rights organizations",
                    nextScene: "civil_rights_support",
                    progressIncrease: 15
                }
            ],
            educationalNote: "The study's impact on African American communities created lasting distrust of the medical establishment, affecting vaccination rates and clinical trial participation for decades."
        },

        recruitment_tactics: {
            text: `RECRUITMENT TACTICS EXPOSED

            You uncover how the Public Health Service recruited vulnerable men:

            📢 RECRUITMENT METHODS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            TARGETING VULNERABILITY:
            • Focused on Macon County, Alabama - one of the poorest areas in America
            • 82% African American population
            • Extreme poverty - sharecroppers earning less than $1/day
            • Limited education - most couldn't read recruitment materials
            • No access to regular healthcare

            INCENTIVES OFFERED:
            • Free medical examinations
            • Free meals on examination days
            • Free transportation to and from clinics
            • Free treatment for "minor ailments"
            • $50 burial stipend (ensuring autopsy access to study effects)

            THE DECEPTION:
            Letters invited participants for "special free treatment." In reality, they received:
            • Aspirin
            • Vitamins
            • Painful spinal taps (diagnostic, not treatment)
            • NO actual syphilis treatment
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "tuskegee_recruitment",
            imagePrompt: "1930s Alabama rural community, Public Health Service recruitment, African American sharecroppers",
            sources: [
                "Original PHS recruitment documents",
                "Macon County historical records",
                "Congressional testimony 1973"
            ],
            choices: [
                {
                    text: "Investigate the role of Tuskegee Institute",
                    nextScene: "tuskegee_institute_role",
                    progressIncrease: 15
                },
                {
                    text: "Examine the informed consent forms",
                    nextScene: "consent_fraud",
                    progressIncrease: 20
                },
                {
                    text: "Continue to ethical violations",
                    nextScene: "ethical_violations",
                    progressIncrease: 10
                }
            ],
            educationalNote: "The exploitation of poverty and lack of education highlights how vulnerable populations can be victimized by those in positions of power and trust."
        },

        nurse_rivers: {
            text: `NURSE EUNICE RIVERS - THE COMPLEX LEGACY

            Eunice Rivers was an African American nurse who served as the primary point of contact with study participants for nearly 40 years:

            👩‍⚕️ EUNICE RIVERS' ROLE:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            HER DUTIES:
            • Maintained contact with all participants
            • Transported men to appointments
            • Ensured they returned for follow-up examinations
            • Built trusted relationships with participants and families
            • Kept detailed records throughout the study

            THE ETHICAL DILEMMA:
            Rivers later defended her participation, stating she believed the men received better medical care through the study than they otherwise would have had access to - even though that "care" was deliberately incomplete.

            HISTORICAL CONTEXT:
            • One of few professional opportunities for Black women in 1930s Alabama
            • Pressure to comply with white medical establishment
            • May not have fully understood the ethical implications
            • Some historians view her as both victim and complicit participant
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "nurse_rivers",
            imagePrompt: "African American nurse in 1940s medical setting, moral complexity, Tuskegee study documentation",
            sources: [
                "Susan Reverby, 'Examining Tuskegee'",
                "Eunice Rivers oral history interviews",
                "National Archives PHS records"
            ],
            choices: [
                {
                    text: "Investigate why she didn't speak out",
                    nextScene: "systemic_pressure",
                    progressIncrease: 15
                },
                {
                    text: "Examine the broader institutional complicity",
                    nextScene: "institutional_complicity",
                    progressIncrease: 20
                },
                {
                    text: "Return to methodology investigation",
                    nextScene: "study_methodology",
                    progressIncrease: 5
                }
            ],
            educationalNote: "Eunice Rivers' story illustrates how systemic racism and limited opportunities can make individuals complicit in harmful systems, raising complex questions about individual vs. institutional responsibility."
        },

        penicillin_denial: {
            text: `THE PENICILLIN DENIAL - MURDER BY OMISSION

            In 1947, penicillin was proven effective against syphilis. The decision to withhold it from participants was deliberate and documented:

            💉 THE PENICILLIN DECISION:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            1943: Penicillin becomes available for military use
            1945: Penicillin becomes widely available to public
            1947: Penicillin proven as standard cure for syphilis

            PHS RESPONSE:
            Internal memos show researchers actively decided to CONTINUE the study without treatment:

            "The study would be continued with participants being given aspirin and vitamins, but no penicillin."

            ACTIVE PREVENTION:
            • Researchers contacted local health departments
            • Draft boards were given participant lists to prevent treatment during WWII
            • Local doctors were asked not to treat study participants
            • Men seeking treatment elsewhere were tracked and discouraged

            DEATH TOLL POST-PENICILLIN:
            After 1947, every death from syphilis was PREVENTABLE.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "penicillin_denial",
            imagePrompt: "1940s penicillin vials next to denied patients, medical injustice, preventable death documentation",
            sources: [
                "PHS internal memoranda 1947-1972",
                "CDC Tuskegee documentation",
                "James H. Jones research archives"
            ],
            choices: [
                {
                    text: "Document the preventable deaths",
                    nextScene: "death_toll",
                    progressIncrease: 20
                },
                {
                    text: "Investigate who made the decision",
                    nextScene: "decision_makers",
                    progressIncrease: 20
                },
                {
                    text: "Prepare evidence for exposure",
                    nextScene: "press_exposure",
                    progressIncrease: 25
                }
            ],
            educationalNote: "The deliberate withholding of a known cure transformed the study from unethical research into what many consider medical murder."
        },

        death_toll: {
            text: `THE DEATH TOLL - COUNTING THE VICTIMS

            Your investigation reveals the full human cost:

            💀 CASUALTIES OF THE STUDY:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            DIRECT DEATHS:
            • 128 men died of syphilis or related complications
            • Many more died of conditions accelerated by untreated syphilis

            SECONDARY VICTIMS:
            • 40 wives infected through sexual transmission
            • 19 children born with congenital syphilis
            • Unknown number of other sexual partners infected

            PREVENTABLE SUFFERING:
            • Blindness from neurosyphilis
            • Heart disease and cardiovascular damage
            • Mental deterioration
            • Paralysis
            • Chronic pain

            GENERATIONAL IMPACT:
            • Children orphaned by preventable deaths
            • Families impoverished by medical costs
            • Lasting trauma passed to descendants
            • Community-wide distrust of medicine
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "death_toll_evidence",
            imagePrompt: "Medical records showing death statistics, cemetery headstones, 1970s documentation of casualties",
            sources: [
                "Final CDC Report on Tuskegee Study",
                "Autopsy records 1932-1972",
                "Congressional investigation findings"
            ],
            choices: [
                {
                    text: "This must be exposed to the public",
                    nextScene: "press_exposure",
                    progressIncrease: 25
                },
                {
                    text: "Seek accountability for those responsible",
                    nextScene: "accountability_quest",
                    progressIncrease: 20
                },
                {
                    text: "Document everything for legal proceedings",
                    nextScene: "legal_action",
                    progressIncrease: 20
                }
            ],
            educationalNote: "The true death toll may never be known, as many participants died before the study ended and records were incomplete."
        },

        government_coverup: {
            text: `GOVERNMENT KNOWLEDGE AND COVERUP

            Your investigation reveals that multiple levels of government knew about and protected the study:

            🏛️ THE COVERUP NETWORK:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            FEDERAL INVOLVEMENT:
            • U.S. Public Health Service ran the study
            • Surgeon General's office received regular reports
            • CDC (then Communicable Disease Center) inherited oversight
            • Multiple administrations (FDR through Nixon) were aware

            PUBLISHED IN PLAIN SIGHT:
            • 13 articles published in medical journals
            • Presented at medical conferences
            • Won awards from medical societies
            • Medical community knew but didn't object

            PREVIOUS COMPLAINTS IGNORED:
            • 1966: Peter Buxtun first raised concerns internally
            • 1968: Buxtun complained again - study continued
            • 1969: CDC committee reviewed and approved continuation
            • 1972: Only public exposure finally ended the study
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "government_coverup",
            imagePrompt: "Government offices, classified documents, bureaucratic complicity, 1970s Washington DC",
            sources: [
                "PHS internal communications",
                "CDC historical records",
                "Congressional investigation 1973"
            ],
            choices: [
                {
                    text: "Go to the press with everything",
                    nextScene: "press_exposure",
                    progressIncrease: 25
                },
                {
                    text: "Investigate the medical community's silence",
                    nextScene: "medical_community_silence",
                    progressIncrease: 15
                },
                {
                    text: "Document the chain of responsibility",
                    nextScene: "accountability_quest",
                    progressIncrease: 20
                }
            ],
            educationalNote: "The study's 40-year duration demonstrates how institutional inertia and moral blindness can perpetuate atrocities even when they're not secret."
        },

        earlier_whistleblowers: {
            text: `EARLIER WHISTLEBLOWER ATTEMPTS

            You discover that concerns were raised internally years before the public exposure:

            📢 VOICES THAT WERE SILENCED:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            1966 - PETER BUXTUN'S FIRST COMPLAINT:
            As a PHS venereal disease investigator in San Francisco, you first learned of the study and immediately recognized the ethical violations. You wrote to the Division of Venereal Diseases expressing concerns.

            RESPONSE: Your concerns were dismissed. Officials defended the study's "scientific value."

            1968 - SECOND ATTEMPT:
            You complained again, this time more forcefully, arguing that the study violated medical ethics established at Nuremberg.

            RESPONSE: The CDC convened a committee that voted to CONTINUE the study until all participants had died so autopsies could be performed.

            1969 - CDC COMMITTEE DECISION:
            "Nothing learned will prevent, find, or cure a single case of infectious syphilis or bring us closer to our basic mission of controlling venereal disease in the United States."

            Yet they continued anyway.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "whistleblower_attempts",
            imagePrompt: "1960s government office, concerned investigator with documents, ignored warnings",
            sources: [
                "Peter Buxtun personal papers",
                "PHS correspondence 1966-1968",
                "CDC committee minutes 1969"
            ],
            choices: [
                {
                    text: "Internal channels have failed - go to the press",
                    nextScene: "press_exposure",
                    progressIncrease: 30
                },
                {
                    text: "Try one more time through official channels",
                    nextScene: "final_internal_attempt",
                    progressIncrease: 10
                },
                {
                    text: "Gather more evidence first",
                    nextScene: "evidence_gathering",
                    progressIncrease: 15
                }
            ],
            educationalNote: "Buxtun's persistence over six years demonstrates both the difficulty of whistleblowing against institutional resistance and the importance of not giving up."
        },

        press_exposure: {
            text: `GOING TO THE PRESS - THE STORY BREAKS

            After years of being ignored internally, you make the decision that will change everything:

            📰 JULY 25, 1972 - ASSOCIATED PRESS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            You contact Jean Heller, an Associated Press reporter. She investigates and confirms your information.

            HEADLINE:
            "Syphilis Victims in U.S. Study Went Untreated for 40 Years"

            THE STORY EXPLODES:
            • Front page news across America
            • Public outrage is immediate and intense
            • Congressional hearings announced within days
            • Study terminated within 24 hours of publication
            • HEW Secretary promises investigation

            PUBLIC REACTION:
            "How could this happen in America?"
            "This is no different than Nazi experiments!"
            "The government deliberately let Black men die!"

            Senator Edward Kennedy: "An outrageous and intolerable situation which this Government never should have been involved in."
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "press_exposure",
            imagePrompt: "1972 newspaper headlines about Tuskegee, shocked Americans reading news, press conference",
            sources: [
                "Associated Press archives, July 25, 1972",
                "Jean Heller's original reporting",
                "Congressional Record, Kennedy statement"
            ],
            choices: [
                {
                    text: "Prepare for Congressional testimony",
                    nextScene: "congressional_hearings",
                    progressIncrease: 20
                },
                {
                    text: "Help survivors get treatment",
                    nextScene: "survivor_treatment",
                    progressIncrease: 15
                },
                {
                    text: "Push for legal accountability",
                    nextScene: "legal_action",
                    progressIncrease: 20
                }
            ],
            educationalNote: "The power of investigative journalism to expose government wrongdoing is a cornerstone of democracy. Jean Heller's reporting ended a 40-year atrocity in 24 hours."
        },

        congressional_hearings: {
            text: `CONGRESSIONAL HEARINGS - TESTIMONY OF SHAME

            Senator Edward Kennedy convenes hearings on the Tuskegee Study:

            🏛️ FEBRUARY-MARCH 1973:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            SURVIVOR TESTIMONY:
            Charlie Pollard, one of the survivors, testifies:
            "I don't know why they done us this way. I was in my twenties when they started. Now I'm in my seventies and I just found out I was never treated."

            GOVERNMENT OFFICIALS:
            Former CDC officials attempt to defend the study's "scientific value" but are met with outrage.

            MEDICAL EXPERTS:
            Dr. Jay Katz, Yale: "There is no defensible justification for the study. It was racist in conception and racist in execution."

            KEY REVELATIONS:
            • Study had no scientific controls or valid methodology
            • No new knowledge was gained that couldn't have been obtained ethically
            • Racism was explicit in study design and documentation
            • Multiple opportunities to end study were ignored

            OUTCOME:
            Congress mandates creation of National Commission for the Protection of Human Subjects.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "congressional_hearings",
            imagePrompt: "1973 Congressional hearing room, elderly African American men testifying, senators listening",
            sources: [
                "Congressional hearings transcript, 1973",
                "C-SPAN historical archives",
                "Senate Health Subcommittee records"
            ],
            choices: [
                {
                    text: "Push for victim compensation",
                    nextScene: "compensation_fight",
                    progressIncrease: 20
                },
                {
                    text: "Work on preventing future abuses",
                    nextScene: "reform_efforts",
                    progressIncrease: 20
                },
                {
                    text: "Document the full legacy",
                    nextScene: "victory",
                    progressIncrease: 25
                }
            ],
            educationalNote: "The hearings led directly to the Belmont Report (1979), which established the ethical principles still governing human research today."
        },

        legal_action: {
            text: `LEGAL ACTION - JUSTICE DELAYED

            Civil rights attorney Fred Gray files a class-action lawsuit on behalf of the survivors:

            ⚖️ POLLARD v. UNITED STATES (1973):
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            PLAINTIFFS:
            • Surviving participants
            • Families of deceased participants
            • Wives and children infected as secondary victims

            DEFENDANTS:
            • U.S. Public Health Service
            • Centers for Disease Control
            • State of Alabama
            • Tuskegee Institute
            • Individual doctors and officials

            SETTLEMENT (1974):
            • $10 million total settlement
            • $37,500 to each living syphilitic participant
            • $15,000 to heirs of deceased participants
            • $16,000 to living controls
            • $5,000 to heirs of deceased controls
            • Free lifetime medical care for survivors and families

            THE LIMITATION:
            No criminal charges were ever filed. No one went to prison.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "legal_settlement",
            imagePrompt: "1974 courthouse, attorneys with settlement documents, elderly African American survivors",
            sources: [
                "Pollard v. United States settlement documents",
                "Fred Gray, 'The Tuskegee Syphilis Study'",
                "Court records, Middle District of Alabama"
            ],
            choices: [
                {
                    text: "This isn't enough - continue fighting",
                    nextScene: "continued_advocacy",
                    progressIncrease: 15
                },
                {
                    text: "Focus on systemic reforms",
                    nextScene: "reform_efforts",
                    progressIncrease: 20
                },
                {
                    text: "Document the legacy for history",
                    nextScene: "victory",
                    progressIncrease: 25
                }
            ],
            educationalNote: "Attorney Fred Gray, who also represented Rosa Parks and the Selma marchers, called Tuskegee 'the most devastating case of governmental abuse I've seen.'"
        },

        reform_efforts: {
            text: `SYSTEMIC REFORMS - NEVER AGAIN

            Your exposure of the Tuskegee Study triggers the most significant reforms in research ethics history:

            📜 LEGISLATIVE REFORMS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            NATIONAL RESEARCH ACT (1974):
            • Created National Commission for Protection of Human Subjects
            • Required Institutional Review Boards (IRBs) for all federally funded research
            • Mandated informed consent for all research participants

            THE BELMONT REPORT (1979):
            Established three core principles for ethical research:
            1. RESPECT FOR PERSONS - Informed consent is mandatory
            2. BENEFICENCE - Research must benefit participants or society
            3. JUSTICE - Burdens and benefits must be distributed fairly

            COMMON RULE (1991):
            Federal regulations requiring:
            • IRB review and approval
            • Informed consent documentation
            • Special protections for vulnerable populations
            • Ongoing monitoring of research studies

            These reforms now protect millions of research participants worldwide.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "research_reforms",
            imagePrompt: "Modern research ethics board meeting, diverse participants, informed consent documents",
            sources: [
                "National Research Act of 1974",
                "The Belmont Report, 1979",
                "45 CFR 46 (Common Rule)"
            ],
            choices: [
                {
                    text: "The fight continues for full accountability",
                    nextScene: "presidential_apology",
                    progressIncrease: 20
                },
                {
                    text: "Examine the lasting impact",
                    nextScene: "lasting_impact",
                    progressIncrease: 15
                },
                {
                    text: "Complete the investigation",
                    nextScene: "victory",
                    progressIncrease: 25
                }
            ],
            educationalNote: "Every clinical trial, medical study, and research project today follows rules created because of Tuskegee. The tragedy became a catalyst for protecting future generations."
        },

        presidential_apology: {
            text: `PRESIDENTIAL APOLOGY - MAY 16, 1997

            Twenty-five years after the study ended, President Bill Clinton delivers a formal apology:

            🇺🇸 THE WHITE HOUSE - EAST ROOM:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            Five elderly survivors sit in the front row as President Clinton speaks:

            "The United States government did something that was wrong - deeply, profoundly, morally wrong. It was an outrage to our commitment to integrity and equality for all our citizens."

            "To the survivors, to the wives and family members, the children and the grandchildren, I say what you know: No power on Earth can give you back the lives lost, the pain suffered, the years of internal torment and anguish."

            "What was done cannot be undone. But we can end the silence. We can stop turning our heads away. We can look at you in the eye and finally say on behalf of the American people, what the United States government did was shameful, and I am sorry."

            HERMAN SHAW'S RESPONSE (age 94):
            "We were treated unfairly, and to some extent like guinea pigs. We were not pigs. We were all hard-working men, not boys, and citizens of the USA."
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "presidential_apology",
            imagePrompt: "White House East Room 1997, President Clinton with elderly Tuskegee survivors, historic apology moment",
            sources: [
                "White House archives, May 16, 1997",
                "Presidential apology transcript",
                "New York Times coverage, May 17, 1997"
            ],
            choices: [
                {
                    text: "Examine the lasting legacy",
                    nextScene: "lasting_impact",
                    progressIncrease: 15
                },
                {
                    text: "Complete the investigation",
                    nextScene: "victory",
                    progressIncrease: 30
                }
            ],
            educationalNote: "The presidential apology came 25 years after the study ended and 65 years after it began. Most participants had already died without ever receiving an acknowledgment of the wrong done to them."
        },

        lasting_impact: {
            text: `THE LASTING IMPACT - A WOUND NOT YET HEALED

            The Tuskegee Study's impact extends far beyond its direct victims:

            🏥 MEDICAL DISTRUST:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            VACCINATION HESITANCY:
            Studies show African Americans cite Tuskegee as a reason for vaccine hesitancy. During COVID-19, this historical trauma contributed to lower initial vaccination rates.

            CLINICAL TRIAL PARTICIPATION:
            African Americans are significantly underrepresented in clinical trials, partly due to distrust rooted in Tuskegee.

            HEALTHCARE DISPARITIES:
            • Delayed medical treatment seeking
            • Reluctance to trust doctor recommendations
            • Lower rates of preventive care
            • Generational transmission of medical distrust

            THE CRUEL IRONY:
            The study that was supposed to help understand disease among Black Americans instead created barriers to healthcare that persist to this day.

            ONGOING EFFORTS:
            Tuskegee University now houses the National Center for Bioethics in Research and Health Care, working to rebuild trust.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "lasting_impact",
            imagePrompt: "Modern healthcare setting with African American patients, rebuilding trust, community health outreach",
            sources: [
                "American Journal of Public Health studies",
                "Tuskegee University National Center for Bioethics",
                "CDC health disparities research"
            ],
            choices: [
                {
                    text: "Complete the investigation",
                    nextScene: "victory",
                    progressIncrease: 30
                }
            ],
            educationalNote: "Understanding Tuskegee is essential for healthcare providers seeking to build trust with communities that have historical reasons to be wary of medical institutions."
        },

        tuskegee_institute_role: {
            text: `THE ROLE OF TUSKEGEE INSTITUTE

            The involvement of the historically Black Tuskegee Institute adds another layer of complexity:

            🏫 TUSKEGEE INSTITUTE'S PARTICIPATION:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            WHY THEY PARTICIPATED:
            • Offered opportunity for Black medical professionals in Jim Crow era
            • Provided funding during Great Depression
            • Hoped to bring healthcare resources to underserved community
            • Believed (initially) study would benefit Black health

            WHAT THEY PROVIDED:
            • Hospital facilities for examinations
            • Black nurses and staff (including Eunice Rivers)
            • Legitimacy and trust within the community
            • Access to a population that might distrust white doctors

            THE ETHICAL BLIND SPOT:
            Institute leadership either didn't understand or chose to ignore that participants were being denied treatment. The desire for institutional prestige and resources overcame ethical concerns.

            LEGACY:
            The Institute has since worked to address this history, including hosting the National Center for Bioethics.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "tuskegee_institute",
            imagePrompt: "1930s Tuskegee Institute campus, Black medical professionals, complex historical legacy",
            sources: [
                "Tuskegee University historical archives",
                "Susan Reverby, 'Examining Tuskegee'",
                "National Archives PHS records"
            ],
            choices: [
                {
                    text: "Continue investigating the methodology",
                    nextScene: "study_methodology",
                    progressIncrease: 10
                },
                {
                    text: "Examine the broader institutional complicity",
                    nextScene: "institutional_complicity",
                    progressIncrease: 15
                },
                {
                    text: "Focus on the ethical violations",
                    nextScene: "ethical_violations",
                    progressIncrease: 15
                }
            ],
            educationalNote: "The involvement of Black institutions and professionals shows how systemic racism can co-opt even those working within marginalized communities."
        },

        consent_fraud: {
            text: `CONSENT FRAUD - THE LIES THEY TOLD

            You examine what participants were actually told versus what was true:

            📋 THE DECEPTION:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            WHAT THEY WERE TOLD:
            • You have "bad blood" (a vague term covering many ailments)
            • We will give you free treatment
            • These examinations will help you
            • The spinal taps are "special treatment"

            THE TRUTH:
            • They had syphilis, a specific treatable disease
            • No actual treatment was ever provided
            • Examinations were purely for data collection
            • Spinal taps were painful diagnostic procedures, not treatment

            A LETTER SENT TO PARTICIPANTS (1930s):
            "Dear Sir: Some time ago you were given a thorough examination and since that time we hope you have gotten a great deal of treatment for bad blood. You will now be given your last chance to get a second examination. This examination is a very special one and after it is finished you will be given a special treatment if it is believed you are in a condition to stand it."

            The "special treatment" was a spinal tap. The "condition to stand it" was being alive.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "consent_fraud",
            imagePrompt: "Original Tuskegee study letters, deceptive medical documents, 1930s correspondence",
            sources: [
                "National Archives PHS correspondence",
                "Original participant letters",
                "Congressional exhibits 1973"
            ],
            choices: [
                {
                    text: "This is criminal fraud - document everything",
                    nextScene: "evidence_gathering",
                    progressIncrease: 20
                },
                {
                    text: "Investigate the penicillin denial",
                    nextScene: "penicillin_denial",
                    progressIncrease: 20
                },
                {
                    text: "Focus on the ethical violations",
                    nextScene: "ethical_violations",
                    progressIncrease: 15
                }
            ],
            educationalNote: "Informed consent requires that participants understand what will happen to them. The Tuskegee deception violated every principle of ethical research."
        },

        systemic_pressure: {
            text: `SYSTEMIC PRESSURE - WHY NO ONE SPOKE UP

            You investigate why so many people knew about the study but no one stopped it:

            🔇 THE SILENCE:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            FOR BLACK PROFESSIONALS:
            • Jim Crow limited professional opportunities
            • Defying white medical establishment meant career suicide
            • Tuskegee Institute needed federal funding
            • Speaking out could harm the entire Black community's access to resources

            FOR WHITE RESEARCHERS:
            • Scientific racism was accepted in medical establishment
            • Career advancement tied to study participation
            • Peer pressure to continue "important research"
            • Dehumanization made ethical concerns seem irrelevant

            FOR GOVERNMENT OFFICIALS:
            • Bureaucratic inertia - "we've always done it this way"
            • No one wanted to admit decades of wrongdoing
            • Political cover from "scientific" justification

            THE BYSTANDER EFFECT:
            Hundreds of people knew. Thirteen articles were published. Presentations were given at conferences. Everyone assumed someone else would object.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "systemic_pressure",
            imagePrompt: "1950s medical conference, segregated society, professional pressure, silent complicity",
            sources: [
                "Susan Reverby, 'Examining Tuskegee'",
                "Published medical journal articles 1936-1972",
                "Historical analysis of institutional silence"
            ],
            choices: [
                {
                    text: "Investigate the medical community's role",
                    nextScene: "medical_community_silence",
                    progressIncrease: 15
                },
                {
                    text: "Focus on the government coverup",
                    nextScene: "government_coverup",
                    progressIncrease: 15
                },
                {
                    text: "Break the silence - go to the press",
                    nextScene: "press_exposure",
                    progressIncrease: 25
                }
            ],
            educationalNote: "Understanding systemic pressure helps explain how good people can become complicit in evil systems. It's not an excuse, but a warning about institutional power."
        },

        institutional_complicity: {
            text: `INSTITUTIONAL COMPLICITY - THE NETWORK OF SILENCE

            The Tuskegee Study wasn't a secret - it was an open conspiracy:

            🏛️ WHO KNEW AND DID NOTHING:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            U.S. PUBLIC HEALTH SERVICE:
            • Ran the study directly
            • Multiple Surgeons General were briefed
            • Annual reports documented progress

            CENTERS FOR DISEASE CONTROL:
            • Inherited oversight in 1957
            • Approved continuation in 1969
            • Defended study until exposure

            AMERICAN MEDICAL ASSOCIATION:
            • Published study results
            • Never raised ethical objections
            • Awarded honors to researchers

            TUSKEGEE INSTITUTE:
            • Provided facilities and staff
            • Gave legitimacy within Black community

            ALABAMA STATE HEALTH DEPARTMENT:
            • Provided local support
            • Helped track participants

            Over 40 years, hundreds of doctors, nurses, administrators, and officials participated. The silence was deafening.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "institutional_complicity",
            imagePrompt: "Network diagram of institutions involved, bureaucratic complicity, official documents",
            sources: [
                "James H. Jones, 'Bad Blood'",
                "Congressional investigation findings",
                "PHS organizational records"
            ],
            choices: [
                {
                    text: "Someone must break this conspiracy of silence",
                    nextScene: "press_exposure",
                    progressIncrease: 25
                },
                {
                    text: "Document the full chain of responsibility",
                    nextScene: "accountability_quest",
                    progressIncrease: 20
                },
                {
                    text: "Focus on helping the victims",
                    nextScene: "victim_families",
                    progressIncrease: 15
                }
            ],
            educationalNote: "Institutional complicity shows how unethical practices can continue when everyone defers to authority and assumes someone else is checking the ethics."
        },

        medical_community_silence: {
            text: `THE MEDICAL COMMUNITY'S SILENCE

            Perhaps the most disturbing aspect: the study was published openly for decades:

            📚 PUBLISHED IN PLAIN SIGHT:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            JOURNAL ARTICLES (1936-1972):
            • 13 peer-reviewed articles published
            • Appeared in prestigious medical journals
            • Presented at national medical conferences
            • Read by thousands of physicians

            NO ONE OBJECTED.

            SAMPLE TITLES:
            "Untreated Syphilis in the Male Negro" (1936)
            "Twenty Years of Follow-up Experience in a Long-Range Medical Study" (1953)
            "The Tuskegee Study of Untreated Syphilis: The 30th Year of Observation" (1964)

            WHY THE SILENCE?
            • Scientific racism was normalized
            • "Colored" patients seen as different
            • Career pressures to not rock the boat
            • Assumption that someone in authority approved
            • Peer review focused on methodology, not ethics

            The medical community's failure was total and complete.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "medical_journals",
            imagePrompt: "Medical journals from 1940s-1960s, published articles about Tuskegee, professional silence",
            sources: [
                "Journal of the American Medical Association archives",
                "Public Health Reports historical issues",
                "Medical literature review 1936-1972"
            ],
            choices: [
                {
                    text: "The public must know - contact the press",
                    nextScene: "press_exposure",
                    progressIncrease: 25
                },
                {
                    text: "Document this failure for the record",
                    nextScene: "evidence_gathering",
                    progressIncrease: 15
                },
                {
                    text: "Focus on accountability",
                    nextScene: "accountability_quest",
                    progressIncrease: 20
                }
            ],
            educationalNote: "The medical community's failure to object despite public knowledge led to reforms requiring ethics review be separate from scientific peer review."
        },

        decision_makers: {
            text: `THE DECISION MAKERS - WHO CHOSE TO LET THEM DIE

            You identify the officials who made the deliberate decision to withhold treatment:

            👔 KEY DECISION MAKERS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            DR. TALIAFERRO CLARK (1932):
            Originally proposed the study, expected it to last 6-8 months.

            DR. RAYMOND VONDERLEHR (1933-1943):
            Extended the study indefinitely. Designed the deception protocols.

            DR. JOHN HELLER (1943-1972):
            Director during penicillin era. Made explicit decision to withhold cure. Said: "The men's status did not warrant ethical debate."

            DR. SIDNEY OLANSKY (1950s-1960s):
            Continued the study, published multiple papers, never questioned ethics.

            CDC COMMITTEE (1969):
            Reviewed the study after internal complaints and voted unanimously to CONTINUE until all subjects died.

            Committee member Dr. J. Lawton Smith: "You will never have another study like this; take advantage of it."
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "decision_makers",
            imagePrompt: "Government health officials at conference table, 1940s-1970s, deliberate decisions to continue",
            sources: [
                "PHS personnel records",
                "CDC committee minutes 1969",
                "Congressional testimony transcripts"
            ],
            choices: [
                {
                    text: "These men must face accountability",
                    nextScene: "accountability_quest",
                    progressIncrease: 20
                },
                {
                    text: "Expose them to the public",
                    nextScene: "press_exposure",
                    progressIncrease: 25
                },
                {
                    text: "Document for legal proceedings",
                    nextScene: "legal_action",
                    progressIncrease: 20
                }
            ],
            educationalNote: "No criminal charges were ever filed against any of these officials. Some continued their careers without consequence."
        },

        accountability_quest: {
            text: `THE QUEST FOR ACCOUNTABILITY

            You pursue accountability for those responsible:

            ⚖️ SEEKING JUSTICE:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            CRIMINAL PROSECUTION:
            Despite clear evidence of deliberate harm, no criminal charges were ever filed. The Justice Department declined to prosecute.

            REASONS GIVEN:
            • "No specific law was violated" (though murder statutes existed)
            • Statute of limitations concerns
            • Difficulty proving individual criminal intent
            • Government immunity claims

            CIVIL SETTLEMENT:
            The only legal consequence was the civil settlement - money, not prison time.

            CAREER CONSEQUENCES:
            • Most researchers continued their careers
            • Some received awards and honors
            • No medical licenses were revoked
            • No professional sanctions were imposed

            THE BITTER REALITY:
            You can deliberately let hundreds of men die of a treatable disease, and face no personal consequences - if you do it in the name of science.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "accountability_quest",
            imagePrompt: "Scales of justice unbalanced, government officials walking free, frustrated pursuit of accountability",
            sources: [
                "DOJ records on prosecution decisions",
                "Civil settlement documents",
                "Academic analysis of accountability failures"
            ],
            choices: [
                {
                    text: "Focus on systemic reforms instead",
                    nextScene: "reform_efforts",
                    progressIncrease: 20
                },
                {
                    text: "Ensure history records the truth",
                    nextScene: "victory",
                    progressIncrease: 25
                },
                {
                    text: "Continue pushing for justice",
                    nextScene: "continued_advocacy",
                    progressIncrease: 15
                }
            ],
            educationalNote: "The lack of criminal accountability for Tuskegee remains a source of outrage and demonstrates how difficult it is to hold powerful institutions responsible."
        },

        evidence_gathering: {
            text: `EVIDENCE GATHERING - BUILDING THE CASE

            You systematically compile evidence of the wrongdoing:

            📁 EVIDENCE COLLECTED:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            DOCUMENTARY EVIDENCE:
            ✓ Original study protocols from 1932
            ✓ Internal memos discussing withholding penicillin
            ✓ Letters deceiving participants about "treatment"
            ✓ Death certificates listing syphilis complications
            ✓ Autopsy records showing preventable deaths
            ✓ 13 published articles admitting no treatment was given

            TESTIMONIAL EVIDENCE:
            ✓ Survivor accounts of deception
            ✓ Family testimonies about infected relatives
            ✓ Statements from participating nurses and doctors
            ✓ Internal whistleblower complaints (ignored)

            STATISTICAL EVIDENCE:
            ✓ 128 dead from syphilis/complications
            ✓ 40 wives infected
            ✓ 19 children with congenital syphilis
            ✓ 40 years of deliberate non-treatment

            The evidence is overwhelming and irrefutable.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "evidence_gathering",
            imagePrompt: "Stacks of documents and files, organized evidence, investigation materials",
            sources: [
                "National Archives PHS records",
                "CDC historical files",
                "Congressional investigation exhibits"
            ],
            choices: [
                {
                    text: "Take everything to the press",
                    nextScene: "press_exposure",
                    progressIncrease: 30
                },
                {
                    text: "Prepare for legal action",
                    nextScene: "legal_action",
                    progressIncrease: 20
                },
                {
                    text: "Submit to Congressional investigators",
                    nextScene: "congressional_hearings",
                    progressIncrease: 20
                }
            ],
            educationalNote: "Peter Buxtun spent years gathering evidence before finally going to the press in 1972. His persistence was essential to exposing the truth."
        },

        final_internal_attempt: {
            text: `FINAL INTERNAL ATTEMPT - ONE LAST TRY

            You make one final effort to stop the study through official channels:

            📝 YOUR APPEAL:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            You write directly to the Director of the CDC:

            "I am writing to formally request the immediate termination of the Tuskegee Syphilis Study. The continued withholding of treatment from participants constitutes a violation of medical ethics established at Nuremberg and violates the basic principles of the Hippocratic Oath.

            Men are dying of a disease that has been curable for 25 years. This is not research - it is murder by government neglect."

            THE RESPONSE:
            Your letter is forwarded to a committee. The committee reviews the study and votes to continue.

            Their reasoning: "The study has scientific value and the subjects are getting better medical care than they would otherwise receive."

            Internal channels have completely failed. The system protects itself.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "final_internal_attempt",
            imagePrompt: "Official correspondence rejected, bureaucratic stonewalling, frustrated whistleblower",
            sources: [
                "Peter Buxtun correspondence 1966-1972",
                "CDC committee meeting minutes",
                "PHS internal documents"
            ],
            choices: [
                {
                    text: "There's only one option left - the press",
                    nextScene: "press_exposure",
                    progressIncrease: 30
                }
            ],
            educationalNote: "Buxtun's experience shows why external whistleblower channels and investigative journalism are essential - internal systems often protect wrongdoing rather than correct it."
        },

        survivor_treatment: {
            text: `SURVIVOR TREATMENT - FINALLY GETTING CARE

            After the exposure, survivors finally receive the treatment they were denied for 40 years:

            💊 TREATMENT BEGINS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            IMMEDIATE ACTIONS:
            • All surviving participants receive penicillin
            • Comprehensive medical examinations conducted
            • Ongoing healthcare provided at no cost
            • Family members tested and treated

            THE SURVIVORS:
            By 1972, only about 74 of the original participants were still alive. Many had suffered decades of preventable complications:
            • Cardiovascular damage
            • Neurological problems
            • Blindness
            • Chronic pain

            For many, treatment came too late to reverse the damage.

            HEALTHCARE PROGRAM:
            The government established a lifetime healthcare program for survivors and their families - a small measure of compensation for 40 years of deliberate harm.

            The last survivor, Ernest Hendon, died in 2004.
            The last widow receiving benefits died in 2009.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "survivor_treatment",
            imagePrompt: "Elderly African American men receiving medical care, 1970s hospital, long-delayed treatment",
            sources: [
                "HEW healthcare program records",
                "Survivor medical records",
                "CDC final participant report"
            ],
            choices: [
                {
                    text: "Push for compensation",
                    nextScene: "compensation_fight",
                    progressIncrease: 15
                },
                {
                    text: "Work on systemic reforms",
                    nextScene: "reform_efforts",
                    progressIncrease: 20
                },
                {
                    text: "Document the full story",
                    nextScene: "victory",
                    progressIncrease: 25
                }
            ],
            educationalNote: "Treatment after 40 years could not undo the damage already done. Prevention of harm is always better than belated correction."
        },

        civil_rights_support: {
            text: `CIVIL RIGHTS SUPPORT - ALLIES JOIN THE FIGHT

            Civil rights organizations rally to support the victims:

            ✊ THE MOVEMENT RESPONDS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            NAACP:
            Issues statement condemning the study as "government-sanctioned racism" and provides legal support.

            SOUTHERN CHRISTIAN LEADERSHIP CONFERENCE:
            Calls for full investigation and accountability.

            NATIONAL MEDICAL ASSOCIATION:
            The Black physicians' organization demands reforms and apologizes for any member involvement.

            FRED GRAY:
            The legendary civil rights attorney (Rosa Parks' lawyer) takes the case and files the class-action lawsuit.

            COMMUNITY RESPONSE:
            Churches in Macon County organize support for survivors and families. Local leaders demand justice.

            The Tuskegee Study becomes a symbol of systemic racism in American institutions - not an aberration, but an example of a pattern.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "civil_rights_support",
            imagePrompt: "Civil rights leaders supporting Tuskegee survivors, 1970s protest and solidarity",
            sources: [
                "NAACP archives 1972-1973",
                "Fred Gray personal papers",
                "Civil rights organization records"
            ],
            choices: [
                {
                    text: "Join the legal fight",
                    nextScene: "legal_action",
                    progressIncrease: 20
                },
                {
                    text: "Push for Congressional action",
                    nextScene: "congressional_hearings",
                    progressIncrease: 20
                },
                {
                    text: "Focus on systemic change",
                    nextScene: "reform_efforts",
                    progressIncrease: 20
                }
            ],
            educationalNote: "The civil rights movement's support helped ensure that Tuskegee was understood not as an isolated incident but as part of systemic racism in American institutions."
        },

        compensation_fight: {
            text: `THE COMPENSATION FIGHT

            You work to secure fair compensation for victims:

            💰 FIGHTING FOR JUSTICE:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            THE LEGAL BATTLE:
            Fred Gray argues that monetary compensation cannot truly address the harm, but it can:
            • Acknowledge wrongdoing
            • Provide for survivors' medical needs
            • Support affected families
            • Create a record of accountability

            THE SETTLEMENT (1974):
            Total: $10 million
            • Living participants with syphilis: $37,500 each
            • Heirs of deceased syphilitic participants: $15,000
            • Living control group members: $16,000 each
            • Heirs of deceased controls: $5,000
            • Lifetime medical care for all survivors and families

            WAS IT ENOUGH?
            Critics argue the amounts were insultingly low for 40 years of deliberate harm. Defenders note it was more than many expected from a government that denied wrongdoing.

            No amount of money can compensate for a life cut short or decades of preventable suffering.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "compensation_fight",
            imagePrompt: "Legal settlement proceedings, elderly survivors receiving compensation, bittersweet justice",
            sources: [
                "Pollard v. United States settlement",
                "Fred Gray, 'The Tuskegee Syphilis Study'",
                "HEW compensation program records"
            ],
            choices: [
                {
                    text: "Continue fighting for full accountability",
                    nextScene: "continued_advocacy",
                    progressIncrease: 15
                },
                {
                    text: "Focus on preventing future abuses",
                    nextScene: "reform_efforts",
                    progressIncrease: 20
                },
                {
                    text: "Document the full legacy",
                    nextScene: "victory",
                    progressIncrease: 25
                }
            ],
            educationalNote: "The settlement established a precedent for government compensation for research abuses, though many felt it was inadequate for the magnitude of the harm."
        },

        continued_advocacy: {
            text: `CONTINUED ADVOCACY - THE FIGHT GOES ON

            Even after the settlement, there is more work to do:

            📢 ONGOING EFFORTS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            PUSHING FOR:
            • Criminal prosecution of responsible officials
            • Higher compensation for families
            • Formal government apology (achieved in 1997)
            • Memorials and education programs
            • Healthcare access for affected communities

            EDUCATION INITIATIVES:
            • Tuskegee History Center established
            • National Center for Bioethics at Tuskegee University
            • Curriculum development for medical schools
            • Annual commemorations

            HEALING WORK:
            • Community health programs
            • Trust-building initiatives
            • Support for descendants
            • Documentation of oral histories

            The survivors became advocates themselves, ensuring their story would never be forgotten.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "continued_advocacy",
            imagePrompt: "Elderly survivors as advocates, memorial dedication, community education programs",
            sources: [
                "Tuskegee History Center records",
                "National Center for Bioethics",
                "Survivor advocacy documentation"
            ],
            choices: [
                {
                    text: "See the presidential apology",
                    nextScene: "presidential_apology",
                    progressIncrease: 20
                },
                {
                    text: "Examine the lasting impact",
                    nextScene: "lasting_impact",
                    progressIncrease: 15
                },
                {
                    text: "Complete the investigation",
                    nextScene: "victory",
                    progressIncrease: 25
                }
            ],
            educationalNote: "The survivors' transformation into advocates shows how victims can reclaim their narrative and work to prevent future harm."
        },

        victory: {
            text: `INVESTIGATION COMPLETE
            THE TUSKEGEE TRUTH REVEALED

            🏆 YOUR INVESTIGATION UNCOVERED:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            ✓ 40 years of deliberate medical abuse
            ✓ Hundreds of preventable deaths
            ✓ Government-sanctioned racism in medicine
            ✓ Institutional complicity across agencies
            ✓ The power of whistleblowing to expose truth
            ✓ Reforms that now protect research subjects worldwide
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            THE LEGACY:
            The Tuskegee Syphilis Study remains one of the most infamous examples of unethical research in history. Its exposure led to fundamental reforms in how human research is conducted.

            But it also left a wound that has never fully healed - a justified distrust of medical institutions that continues to affect health outcomes in Black communities today.

            REMEMBERING THE VICTIMS:
            600 men were enrolled. They trusted their government. That trust was betrayed. We must never forget.

            Thank you for investigating the TUSKEGEE EXPERIMENT.`,
            image: "investigation_complete",
            imagePrompt: "Memorial to Tuskegee victims, historical truth revealed, solemn remembrance",
            sources: [
                "CDC Final Report on Tuskegee Study",
                "Presidential Apology 1997",
                "Tuskegee University Legacy Project"
            ],
            choices: [],
            educationalNote: "The Tuskegee Study teaches us that 'never again' requires constant vigilance, strong ethical oversight, and the courage to speak out against wrongdoing."
        },

        mainMenu: {
            text: `Returning to case selection...`,
            image: "investigation_complete",
            choices: []
        }
    }
};

// Make it available globally
window.TuskegeeExperimentStoryExpanded = TuskegeeExperimentStoryExpanded;
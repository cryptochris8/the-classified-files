// Operation Paperclip - An Interactive Investigation
// Based on historical events and verified facts

const OperationPaperclipStoryExpanded = {
    title: "Operation Paperclip",
    description: "Uncover how the U.S. secretly recruited Nazi scientists after WWII, hiding their war crimes to gain technological advantages in the Cold War.",
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
            text: `OPERATION PAPERCLIP

            MAY 1945 - POST-WAR GERMANY

            You are a State Department investigator tasked with vetting German scientists for potential recruitment. As the Third Reich collapses, a secret U.S. program is capturing Nazi scientists and bringing them to America.

            🚀 PROJECT OBJECTIVES:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • Recruit rocket technology experts
            • Prevent Soviet capture of German scientists
            • Accelerate U.S. missile/space programs
            • Overlook war crimes for strategic advantage
            • Falsify background reports as needed
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            📄 FILE: DR. WERNHER VON BRAUN
            "Brilliant rocket scientist, Father of V-2 program
            CLASSIFIED: Used slave labor, 20,000+ deaths at factory
            RECOMMENDATION: Recruit despite war crimes"

            The U.S. is making deals with the devil to win the Cold War.

            How many Nazi war criminals are we willing to protect for technological secrets?`,
            image: "nazi_scientist_recruitment",
            imagePrompt: "1945 post-war Germany, American officials interviewing German scientists, Nazi documents being reviewed, moral compromise",
            choices: [
                {
                    text: "Focus on the rocket scientists",
                    nextScene: "von_braun_investigation",
                    progressIncrease: 15
                },
                {
                    text: "Investigate the war crimes cover-up",
                    nextScene: "war_crimes_coverup",
                    progressIncrease: 20
                },
                {
                    text: "Examine the Cold War justification",
                    nextScene: "cold_war_context",
                    progressIncrease: 15
                }
            ],
            educationalNote: "Operation Paperclip (1945-1959) secretly recruited Nazi scientists to the U.S., often hiding their war crimes to gain technological advantages in the Cold War."
        },

        von_braun_investigation: {
            text: `WERNHER VON BRAUN - THE CELEBRITY NAZI

            Your investigation focuses on the most famous Paperclip recruit:

            🚀 DR. WERNHER VON BRAUN:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            PUBLIC RECORD:
            • Brilliant rocket engineer
            • "Father of American space program"
            • Director of NASA's Marshall Space Flight Center
            • Designed Saturn V rocket for Apollo missions
            • American hero who put man on the moon

            CLASSIFIED HISTORY:
            • SS-Sturmbannführer (Major) in the Nazi SS
            • Director of V-2 rocket program at Peenemünde
            • V-2 production used slave labor from Mittelbau-Dora
            • 20,000+ prisoners died building his rockets
            • Personally witnessed and approved slave labor conditions
            • Selected prisoners for work details at factory

            Von Braun later claimed: "I was so busy, I never realized what was happening."

            Yet records show he visited Mittelbau-Dora multiple times and personally requested prisoners.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "von_braun_profile",
            imagePrompt: "Wernher von Braun in both Nazi uniform and NASA suit, duality of his history, V-2 rockets",
            sources: [
                "Michael Neufeld, 'Von Braun: Dreamer of Space, Engineer of War'",
                "National Archives Nazi records",
                "Mittelbau-Dora survivor testimonies"
            ],
            choices: [
                {
                    text: "Investigate the Mittelbau-Dora factory",
                    nextScene: "mittelbau_dora",
                    progressIncrease: 20
                },
                {
                    text: "Examine his SS membership",
                    nextScene: "ss_membership",
                    progressIncrease: 15
                },
                {
                    text: "Look at other recruited scientists",
                    nextScene: "other_scientists",
                    progressIncrease: 15
                }
            ],
            educationalNote: "Von Braun's transformation from SS officer to American hero represents the moral compromises made during the Cold War."
        },

        war_crimes_coverup: {
            text: `THE COVER-UP - SANITIZING NAZI RECORDS

            You discover how the U.S. government systematically erased Nazi pasts:

            📋 THE WHITEWASH PROCESS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            THE PROBLEM:
            A 1945 Truman directive prohibited recruitment of anyone who was:
            • An active Nazi Party member
            • More than a "nominal" participant in Nazi activities
            • A war criminal

            THE SOLUTION:
            The Joint Intelligence Objectives Agency (JIOA) simply rewrote the files.

            DOCUMENTED CHANGES:
            • SS memberships were removed or downplayed
            • War crimes allegations were deleted
            • "Ardent Nazi" became "not a Nazi"
            • Concentration camp connections were erased
            • Background checks were falsified

            STATE DEPARTMENT OBJECTIONS:
            When State Department officials protested the falsifications, JIOA director Bosquet Wev responded: "The best interests of the United States have been subjugated to the efforts expended in beating a dead Nazi horse."
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "falsified_records",
            imagePrompt: "1940s government documents being altered, classified files with sections blacked out, typewriter changing records",
            sources: [
                "Annie Jacobsen, 'Operation Paperclip'",
                "Declassified JIOA documents",
                "State Department memoranda 1945-1950"
            ],
            choices: [
                {
                    text: "Examine specific falsified records",
                    nextScene: "falsified_files",
                    progressIncrease: 20
                },
                {
                    text: "Investigate who ordered the cover-up",
                    nextScene: "chain_of_command",
                    progressIncrease: 15
                },
                {
                    text: "Look at State Department objections",
                    nextScene: "state_department_fight",
                    progressIncrease: 15
                }
            ],
            educationalNote: "The systematic falsification of records violated Truman's direct orders and U.S. law, yet no one was ever prosecuted."
        },

        cold_war_context: {
            text: `THE COLD WAR JUSTIFICATION

            Officials defended Paperclip as a necessary evil in the fight against Communism:

            🌍 THE STRATEGIC ARGUMENT:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            THE RACE FOR SCIENTISTS:
            As WWII ended, the U.S. and Soviet Union competed to capture German scientists. Both nations understood that technological superiority would determine the Cold War's outcome.

            SOVIET PROGRAM:
            The USSR recruited their own German scientists through "Operation Osoaviakhim," taking 2,000+ specialists to the Soviet Union.

            U.S. REASONING:
            "If we don't take them, the Soviets will."
            "Their knowledge is more valuable than their crimes."
            "The ends justify the means."

            WHAT WE GAINED:
            • V-2 rocket technology
            • Jet propulsion advances
            • Chemical weapons expertise
            • Aviation medicine research
            • Nuclear weapons development

            WHAT WE SACRIFICED:
            • Justice for Holocaust victims
            • Our moral standing
            • The principle that war criminals face consequences
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "cold_war_competition",
            imagePrompt: "1940s Cold War map showing US and Soviet spheres, German scientists as pawns, ideological battle",
            sources: [
                "John Gimbel, 'Science, Technology, and Reparations'",
                "CIA declassified Cold War documents",
                "National Security Council records"
            ],
            choices: [
                {
                    text: "Examine what technologies we gained",
                    nextScene: "technology_gains",
                    progressIncrease: 15
                },
                {
                    text: "Investigate the moral costs",
                    nextScene: "moral_costs",
                    progressIncrease: 20
                },
                {
                    text: "Compare with Soviet program",
                    nextScene: "soviet_comparison",
                    progressIncrease: 15
                }
            ],
            educationalNote: "The Cold War created a moral framework where any action could be justified if it countered Communism - even protecting war criminals."
        },

        mittelbau_dora: {
            text: `MITTELBAU-DORA - THE DEATH FACTORY

            You investigate the underground factory where V-2 rockets were built:

            💀 THE HORROR BELOW:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            THE FACILITY:
            After Allied bombing of Peenemünde, the Nazis moved V-2 production underground to Mittelbau-Dora, a tunnel complex in the Harz Mountains.

            THE WORKFORCE:
            • 60,000 prisoners passed through the complex
            • Forced to dig tunnels by hand
            • Worked 12-hour shifts, 7 days a week
            • Slept in tunnels with no sanitation
            • Beaten for minor infractions
            • Hanged publicly for "sabotage"

            THE DEATH TOLL:
            • 20,000+ prisoners died at Mittelbau-Dora
            • More people died building V-2s than were killed by them
            • Causes: exhaustion, starvation, disease, execution

            SURVIVOR TESTIMONY:
            "We were worked until we dropped dead. The bodies were stacked like firewood."
            - Jean Michel, French prisoner

            Von Braun and other Paperclip scientists worked directly with this labor force.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "mittelbau_dora",
            imagePrompt: "Underground V-2 factory tunnels, concentration camp prisoners working, dark industrial horror",
            sources: [
                "André Sellier, 'A History of the Dora Camp'",
                "Mittelbau-Dora Memorial records",
                "Nuremberg Trial documents"
            ],
            choices: [
                {
                    text: "Examine von Braun's direct involvement",
                    nextScene: "von_braun_complicity",
                    progressIncrease: 20
                },
                {
                    text: "Review survivor testimonies",
                    nextScene: "survivor_accounts",
                    progressIncrease: 15
                },
                {
                    text: "Investigate why no one was prosecuted",
                    nextScene: "lack_of_prosecution",
                    progressIncrease: 20
                }
            ],
            educationalNote: "Mittelbau-Dora was one of the deadliest concentration camps. The scientists recruited under Paperclip were directly connected to this system."
        },

        ss_membership: {
            text: `SS MEMBERSHIP - THE INNER CIRCLE

            You investigate the SS connections of Paperclip scientists:

            ⚡ THE SS FILES:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            VON BRAUN'S SS CAREER:
            • Joined SS in 1940 (SS #185,068)
            • Rose to rank of SS-Sturmbannführer (Major)
            • Required SS membership for V-2 leadership
            • Personally signed by Heinrich Himmler

            HIS DEFENSE:
            Von Braun claimed he was "ordered" to join and had no choice. He said the SS uniform was like "a railroad conductor's uniform."

            THE EVIDENCE:
            • He wore the uniform proudly at Nazi ceremonies
            • Met personally with Himmler multiple times
            • Attended SS social events
            • His brother Magnus was also SS
            • No evidence he ever objected or resisted

            OTHER SS MEMBERS RECRUITED:
            • Arthur Rudolph - SS member, Mittelwerk production manager
            • Hubertus Strughold - "Father of Space Medicine," linked to Dachau experiments
            • Kurt Debus - SA and SS member, launch director at Cape Canaveral
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "ss_records",
            imagePrompt: "Nazi SS personnel files, membership cards with skull insignia, scientists in black uniforms",
            sources: [
                "Berlin Document Center SS files",
                "National Archives Nazi records",
                "Michael Neufeld research"
            ],
            choices: [
                {
                    text: "Investigate Arthur Rudolph's case",
                    nextScene: "arthur_rudolph",
                    progressIncrease: 20
                },
                {
                    text: "Examine Hubertus Strughold's experiments",
                    nextScene: "strughold_experiments",
                    progressIncrease: 20
                },
                {
                    text: "Look at how SS membership was hidden",
                    nextScene: "war_crimes_coverup",
                    progressIncrease: 15
                }
            ],
            educationalNote: "The SS was not merely a military unit - it was the organization most directly responsible for the Holocaust and Nazi atrocities."
        },

        other_scientists: {
            text: `THE PAPERCLIP ROSTER - 1,600 NAZIS IN AMERICA

            You examine the full scope of the recruitment program:

            📋 BY THE NUMBERS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            OPERATION PAPERCLIP RECRUITED:
            • 1,600+ German scientists and engineers
            • Rocket experts, chemists, physicists, physicians
            • Many with direct Nazi Party membership
            • Some with documented war crimes
            • Families brought over too (total: 3,000+)

            CATEGORIES OF RECRUITS:

            ROCKET SCIENTISTS:
            Von Braun, Rudolph, Debus - V-2 program

            AVIATION MEDICINE:
            Hubertus Strughold - human experiments

            CHEMICAL WEAPONS:
            Walter Schreiber - biological warfare
            Kurt Blome - plague experiments

            NUCLEAR PHYSICS:
            Various uranium project scientists

            INTELLIGENCE ASSETS:
            Nazi spymasters for CIA operations

            The program wasn't just about rockets - it encompassed the entire Nazi scientific apparatus.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "paperclip_roster",
            imagePrompt: "Wall of personnel files, hundreds of German scientists, 1940s government facility, secret program",
            sources: [
                "Annie Jacobsen, 'Operation Paperclip'",
                "National Archives JIOA records",
                "Clarence Lasby, 'Project Paperclip'"
            ],
            choices: [
                {
                    text: "Investigate the medical experiments connection",
                    nextScene: "medical_experiments",
                    progressIncrease: 20
                },
                {
                    text: "Examine the chemical weapons scientists",
                    nextScene: "chemical_weapons",
                    progressIncrease: 15
                },
                {
                    text: "Look at intelligence recruitment",
                    nextScene: "intelligence_assets",
                    progressIncrease: 15
                }
            ],
            educationalNote: "Paperclip was one of the largest transfers of scientific knowledge in history - along with a massive transfer of moral responsibility."
        },

        falsified_files: {
            text: `FALSIFIED FILES - THE DOCTORED EVIDENCE

            You examine specific examples of record falsification:

            📝 BEFORE AND AFTER:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            WERNHER VON BRAUN:
            Original evaluation: "An SS officer who should not be admitted to the United States."
            Altered evaluation: "Not a war criminal. Not a threat to U.S. security."

            ARTHUR RUDOLPH:
            Original: "100 percent Nazi, dangerous type"
            Altered: "Not a war criminal"

            HUBERTUS STRUGHOLD:
            Original: Connected to Dachau human experiments
            Altered: All references to experiments removed

            KURT DEBUS:
            Original: "Ardent Nazi," turned in colleague to Gestapo
            Altered: References deleted

            THE PAPERCLIP METHOD:
            Files were literally attached with paperclips after being rewritten. The original damning documents were separated and classified, while sanitized versions were submitted.

            This is how the program got its name.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "paperclip_files",
            imagePrompt: "Documents with paperclips, typewritten pages being altered, classified stamps, 1940s bureaucracy",
            sources: [
                "Declassified JIOA files",
                "Linda Hunt, 'Secret Agenda'",
                "National Archives comparison studies"
            ],
            choices: [
                {
                    text: "Investigate who ordered the falsification",
                    nextScene: "chain_of_command",
                    progressIncrease: 15
                },
                {
                    text: "Look at Arthur Rudolph's full file",
                    nextScene: "arthur_rudolph",
                    progressIncrease: 20
                },
                {
                    text: "Examine why Strughold's experiments were hidden",
                    nextScene: "strughold_experiments",
                    progressIncrease: 20
                }
            ],
            educationalNote: "The falsification of government records to circumvent presidential orders and federal law represents a serious abuse of power."
        },

        chain_of_command: {
            text: `THE CHAIN OF COMMAND - WHO GAVE THE ORDERS?

            You trace who authorized the cover-up:

            🏛️ THE DECISION MAKERS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            JOINT INTELLIGENCE OBJECTIVES AGENCY (JIOA):
            Created specifically to manage Paperclip
            Director: Colonel Bosquet Wev
            Directly ordered falsification of records

            ARMY INTELLIGENCE (G-2):
            Coordinated scientist capture and evaluation
            Provided military cover for recruitment

            OFFICE OF STRATEGIC SERVICES (OSS):
            Precursor to CIA
            Identified and recruited intelligence assets

            THE WHITE HOUSE:
            President Truman signed directive allowing recruitment
            But explicitly prohibited war criminals
            His orders were systematically violated

            PLAUSIBLE DENIABILITY:
            Senior officials created layers of bureaucracy so no single person could be held accountable.

            When questioned, everyone pointed to someone else.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "chain_of_command",
            imagePrompt: "Pentagon organizational chart, military officers in meeting, 1940s Washington bureaucracy",
            sources: [
                "JIOA organizational records",
                "Truman Library presidential directives",
                "Army G-2 historical files"
            ],
            choices: [
                {
                    text: "Examine Truman's actual directive",
                    nextScene: "truman_directive",
                    progressIncrease: 15
                },
                {
                    text: "Investigate JIOA director Bosquet Wev",
                    nextScene: "bosquet_wev",
                    progressIncrease: 15
                },
                {
                    text: "Look at later revelations",
                    nextScene: "exposure",
                    progressIncrease: 20
                }
            ],
            educationalNote: "The diffusion of responsibility across multiple agencies made accountability nearly impossible - a pattern repeated in later scandals."
        },

        state_department_fight: {
            text: `STATE DEPARTMENT OBJECTIONS - THE DISSENTING VOICES

            Not everyone agreed with Paperclip. You find evidence of internal resistance:

            📣 THE OBJECTORS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            SAMUEL KLAUS - STATE DEPARTMENT:
            "These men should be tried as war criminals, not given American citizenship."
            STATUS: Overruled

            HERBERT CUMMINGS - STATE DEPARTMENT:
            Documented Nazi backgrounds being hidden
            STATUS: Transferred to different assignment

            VISA DIVISION OBJECTIONS:
            Multiple officials refused to process falsified visa applications
            STATUS: Applications processed anyway through military channels

            STATE DEPARTMENT MEMO (1947):
            "The War Department is evading the law by bringing in Nazi scientists under military custody rather than proper immigration procedures."

            JIOA RESPONSE:
            Director Wev called State Department concerns "beating a dead Nazi horse" and accused objectors of lacking patriotism.

            The objectors lost. The Nazis came to America.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "state_department",
            imagePrompt: "1940s State Department office, officials arguing over documents, bureaucratic conflict",
            sources: [
                "State Department historical files",
                "Declassified visa processing records",
                "Linda Hunt research"
            ],
            choices: [
                {
                    text: "Examine how objectors were silenced",
                    nextScene: "silencing_dissent",
                    progressIncrease: 15
                },
                {
                    text: "Look at the legal violations",
                    nextScene: "legal_violations",
                    progressIncrease: 20
                },
                {
                    text: "See how the program continued",
                    nextScene: "program_continuation",
                    progressIncrease: 15
                }
            ],
            educationalNote: "Internal dissent within the government was systematically overridden in the name of national security."
        },

        von_braun_complicity: {
            text: `VON BRAUN'S COMPLICITY - THE EVIDENCE

            You compile the evidence of von Braun's direct involvement in slave labor:

            🔍 THE CASE AGAINST VON BRAUN:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            DOCUMENTED VISITS:
            • Visited Mittelbau-Dora factory at least 15 times
            • Toured production lines worked by prisoners
            • Inspected living conditions in tunnels
            • Personally approved production schedules

            PRISONER REQUESTS:
            Von Braun wrote requests for prisoner labor. One surviving document requests "ichundert gefangener" - one hundred prisoners.

            WITNESS TESTIMONY:
            French prisoner Adam Cabala: "I saw Dr. von Braun standing by as prisoners were hanged for 'sabotage.' He did nothing."

            HIS DEFENSE:
            "I was so busy that I never realized what was happening."
            "I was forced to join the SS."
            "I couldn't have done anything anyway."

            THE CONTRADICTION:
            A man brilliant enough to send humans to the moon claims he didn't understand the slavery happening feet from his office.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "von_braun_evidence",
            imagePrompt: "Documents showing von Braun's visits to factory, witness testimony, moral confrontation",
            sources: [
                "Michael Neufeld, 'Von Braun: Dreamer of Space, Engineer of War'",
                "Adam Cabala testimony",
                "Mittelbau-Dora visitor logs"
            ],
            choices: [
                {
                    text: "Review the survivor testimonies",
                    nextScene: "survivor_accounts",
                    progressIncrease: 15
                },
                {
                    text: "Examine his American transformation",
                    nextScene: "von_braun_transformation",
                    progressIncrease: 15
                },
                {
                    text: "Investigate why he was never prosecuted",
                    nextScene: "lack_of_prosecution",
                    progressIncrease: 20
                }
            ],
            educationalNote: "Von Braun's case raises the question: At what point does 'following orders' or 'being too busy' become complicity in mass murder?"
        },

        survivor_accounts: {
            text: `SURVIVOR ACCOUNTS - VOICES FROM MITTELBAU-DORA

            The prisoners who survived tell a different story than the scientists:

            💔 THEIR WORDS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            JEAN MICHEL (French Resistance):
            "The scientists treated us like we were nothing - not even animals. Animals are fed. We worked until we died, then were replaced. Von Braun walked past us like we were invisible."

            YVES BÉON (French prisoner):
            "I was forced to carry V-2 components that weighed more than I did. If you dropped something, you were beaten. If it broke, you might be hanged. The scientists watched and took notes."

            ADAM CABALA (French prisoner):
            "I personally saw Dr. von Braun standing by while prisoners were executed. He showed no emotion. To him, we were nothing but labor units."

            GÜNTHER HAUCKE (German political prisoner):
            "They told us we were building weapons that would win the war. We were building our own coffins. Every rocket that flew meant another hundred of us dead."

            20,000+ DEAD:
            More prisoners died building V-2 rockets than were killed by them.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "survivor_testimony",
            imagePrompt: "Elderly survivors showing tattoos, 1980s testimony settings, haunted faces, historical justice",
            sources: [
                "Jean Michel, 'Dora' (memoir)",
                "Yves Béon, 'Planet Dora' (memoir)",
                "USC Shoah Foundation testimonies"
            ],
            choices: [
                {
                    text: "Investigate efforts to bring justice",
                    nextScene: "justice_efforts",
                    progressIncrease: 20
                },
                {
                    text: "Examine the Arthur Rudolph case",
                    nextScene: "arthur_rudolph",
                    progressIncrease: 20
                },
                {
                    text: "See how America honored these men instead",
                    nextScene: "american_honors",
                    progressIncrease: 15
                }
            ],
            educationalNote: "Survivor testimonies provide essential evidence that contradicts the sanitized narratives told by the scientists themselves."
        },

        arthur_rudolph: {
            text: `ARTHUR RUDOLPH - THE ONLY CONSEQUENCE

            Of all Paperclip scientists, only one faced any accountability:

            ⚖️ THE RUDOLPH CASE:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            HIS CAREER:
            • Production manager at Mittelwerk (V-2 factory)
            • Directly supervised slave labor operations
            • Recruited under Paperclip in 1945
            • Became program manager for Saturn V rocket
            • Received NASA Distinguished Service Medal

            THE INVESTIGATION (1979-1984):
            Justice Department's Office of Special Investigations finally examined wartime records.

            EVIDENCE FOUND:
            • Original JIOA evaluation: "100 percent Nazi"
            • Personally requested prisoner transfers
            • Supervised production using slave labor
            • Witnessed hangings and did nothing

            THE OUTCOME:
            Rather than face prosecution, Rudolph agreed to:
            • Renounce his U.S. citizenship
            • Return to West Germany
            • Never return to America

            No prison time. No trial. No formal accountability.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "rudolph_case",
            imagePrompt: "Arthur Rudolph in NASA facility then departing USA, dual identity, belated accountability",
            sources: [
                "DOJ Office of Special Investigations files",
                "Eli Rosenbaum, 'Betrayal'",
                "NASA historical records"
            ],
            choices: [
                {
                    text: "Examine why others weren't investigated",
                    nextScene: "lack_of_prosecution",
                    progressIncrease: 15
                },
                {
                    text: "See the controversy over his treatment",
                    nextScene: "rudolph_controversy",
                    progressIncrease: 15
                },
                {
                    text: "Complete the investigation",
                    nextScene: "victory",
                    progressIncrease: 25
                }
            ],
            educationalNote: "Rudolph was stripped of citizenship in 1984 - nearly 40 years after arriving in America. He never faced criminal charges."
        },

        strughold_experiments: {
            text: `HUBERTUS STRUGHOLD - THE "FATHER OF SPACE MEDICINE"

            Your investigation uncovers the darkest chapter of Paperclip:

            🔬 DR. HUBERTUS STRUGHOLD:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            AMERICAN CAREER:
            • "Father of Space Medicine"
            • Director of Aerospace Medical Division, Brooks AFB
            • Developed survival protocols for astronauts
            • School of Aerospace Medicine named after him

            NAZI CAREER:
            • Director of Aeromedical Research Institute, Berlin
            • Supervised human experiments at Dachau
            • Prisoners subjected to:
              - High-altitude decompression (fatal)
              - Freezing water immersion (fatal)
              - Oxygen deprivation (fatal)
            • Data used for his "research"

            THE DACHAU CONNECTION:
            Strughold attended 1942 conference where Dachau experiment results were presented. He received research reports from the experiments. He published papers using the data.

            His defense: "I never personally conducted experiments."

            But he used data from murdered prisoners for his career.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "strughold_profile",
            imagePrompt: "Split image of scientist in lab coat and Dachau experiments, medical horror, dual identity",
            sources: [
                "Annie Jacobsen, 'Operation Paperclip'",
                "Nuremberg Medical Trial documents",
                "Dachau experiment records"
            ],
            choices: [
                {
                    text: "Examine the Dachau experiments",
                    nextScene: "dachau_experiments",
                    progressIncrease: 20
                },
                {
                    text: "See how his name was eventually removed",
                    nextScene: "strughold_legacy",
                    progressIncrease: 15
                },
                {
                    text: "Investigate the cover-up of his past",
                    nextScene: "medical_coverup",
                    progressIncrease: 15
                }
            ],
            educationalNote: "Strughold was honored by NASA until 2013, when his name was removed from buildings after journalists exposed his Nazi connections."
        },

        technology_gains: {
            text: `WHAT AMERICA GAINED - THE TECHNOLOGICAL HARVEST

            You examine the scientific advances that came from Paperclip:

            🚀 THE BENEFITS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            ROCKET TECHNOLOGY:
            • V-2 blueprints became foundation for U.S. missile program
            • Redstone missile (first U.S. nuclear-armed ballistic missile)
            • Jupiter-C (first U.S. satellite launch)
            • Saturn V (Apollo moon missions)

            SPACE MEDICINE:
            • High-altitude survival protocols
            • Pressure suit development
            • Zero-gravity effects research

            JET PROPULSION:
            • Swept-wing aircraft design
            • Turbojet engine improvements

            CHEMICAL RESEARCH:
            • Nerve agent antidotes
            • Rocket fuel development

            THE SPACE RACE:
            Without Paperclip scientists, the U.S. might have lost the space race to the Soviets. Von Braun's Saturn V put men on the moon.

            But at what cost?
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "technology_gains",
            imagePrompt: "V-2 rocket morphing into Saturn V, moon landing, technological progression from Nazi to NASA",
            sources: [
                "NASA History Division",
                "Smithsonian Air and Space Museum records",
                "Army Ballistic Missile Agency history"
            ],
            choices: [
                {
                    text: "Examine the moral costs",
                    nextScene: "moral_costs",
                    progressIncrease: 20
                },
                {
                    text: "Look at von Braun's American career",
                    nextScene: "von_braun_transformation",
                    progressIncrease: 15
                },
                {
                    text: "Complete the investigation",
                    nextScene: "victory",
                    progressIncrease: 25
                }
            ],
            educationalNote: "The technological advances were real and significant - but they came at the cost of protecting war criminals and denying justice to their victims."
        },

        moral_costs: {
            text: `THE MORAL COSTS - WHAT AMERICA LOST

            Beyond the technological gains, you examine what Paperclip cost America:

            💔 THE PRICE WE PAID:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            JUSTICE DENIED:
            • War criminals lived in comfort in America
            • Victims received no acknowledgment
            • Survivors had to watch their tormentors celebrated
            • Nuremberg principles were violated

            MORAL CREDIBILITY:
            • U.S. claimed to stand for justice at Nuremberg
            • Simultaneously protected the very criminals we condemned
            • Undermined our claim to moral leadership
            • Set precedent for expedience over principle

            PRECEDENT SET:
            • National security justifies any action
            • Ends justify means
            • Technical expertise outweighs moral culpability
            • Powerful enough criminals go free

            ONGOING IMPACT:
            The logic of Paperclip - that strategic value excuses moral crimes - influenced decades of Cold War policy.

            If you're useful enough, America will protect you.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "moral_costs",
            imagePrompt: "Scales of justice unbalanced, Nazi scientists versus victims, American flag in background",
            sources: [
                "Christopher Simpson, 'Blowback'",
                "Nuremberg Trial records comparison",
                "Cold War ethics analysis"
            ],
            choices: [
                {
                    text: "See how victims sought justice",
                    nextScene: "justice_efforts",
                    progressIncrease: 15
                },
                {
                    text: "Examine the eventual exposure",
                    nextScene: "exposure",
                    progressIncrease: 20
                },
                {
                    text: "Complete the investigation",
                    nextScene: "victory",
                    progressIncrease: 25
                }
            ],
            educationalNote: "The moral compromise of Paperclip raises enduring questions about the relationship between national security and ethical principles."
        },

        von_braun_transformation: {
            text: `VON BRAUN'S TRANSFORMATION - FROM SS TO NASA

            You trace von Braun's remarkable reinvention in America:

            🇺🇸 THE AMERICAN HERO:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            1950s - THE PUBLIC RELATIONS CAMPAIGN:
            • Featured in Collier's magazine series on space
            • Appeared on Disney TV programs
            • "Man in Space" made him household name
            • Charming, articulate spokesperson for space exploration

            1960s - THE APOLLO ERA:
            • Director of NASA Marshall Space Flight Center
            • Chief architect of Saturn V rocket
            • Face of American space program
            • Credited with putting man on moon

            PUBLIC IMAGE:
            "A visionary who dreamed of the stars"
            "An American hero"
            "The man who made Apollo possible"

            HIDDEN PAST:
            His SS membership, slave labor involvement, and Nazi career were systematically suppressed.

            When confronted later in life, he said: "I was only 23 when the Nazis came to power. What would you have done?"

            Many Germans his age refused. Many died for refusing.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "von_braun_nasa",
            imagePrompt: "Von Braun with Saturn V rocket, American flags, NASA glory, hidden shadows of past",
            sources: [
                "Michael Neufeld, 'Von Braun'",
                "NASA oral history interviews",
                "Collier's magazine archives"
            ],
            choices: [
                {
                    text: "Examine his eventual exposure",
                    nextScene: "exposure",
                    progressIncrease: 20
                },
                {
                    text: "See the legacy debate",
                    nextScene: "legacy_debate",
                    progressIncrease: 15
                },
                {
                    text: "Complete the investigation",
                    nextScene: "victory",
                    progressIncrease: 25
                }
            ],
            educationalNote: "Von Braun died in 1977, largely still celebrated. Serious examination of his Nazi past didn't begin until decades later."
        },

        exposure: {
            text: `THE EXPOSURE - TRUTH FINALLY EMERGES

            Decades later, the truth about Paperclip began to emerge:

            📰 THE REVELATIONS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            1979 - JUSTICE DEPARTMENT INVESTIGATION:
            Office of Special Investigations begins examining Paperclip scientists. Arthur Rudolph exposed.

            1984 - NAZI WAR CRIMES DISCLOSURE ACT:
            Requires release of government records on Nazi war criminals.

            1985 - LINDA HUNT INVESTIGATION:
            Journalist discovers falsified files at National Archives. Publishes "Secret Agenda" exposing the cover-up.

            2005 - NATIONAL ARCHIVES RELEASE:
            750,000 pages of Paperclip records declassified. Full scope of program revealed.

            2013 - STRUGHOLD NAME REMOVED:
            After 50 years, Air Force removes Strughold's name from aerospace medicine building.

            ONGOING RESEARCH:
            Historians continue to uncover new connections between Paperclip scientists and Nazi atrocities.

            The full truth is still being revealed.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "paperclip_exposure",
            imagePrompt: "Journalists examining declassified documents, 1980s newsrooms, truth emerging from files",
            sources: [
                "Linda Hunt, 'Secret Agenda'",
                "National Archives declassification records",
                "DOJ OSI case files"
            ],
            choices: [
                {
                    text: "See the ongoing legacy debate",
                    nextScene: "legacy_debate",
                    progressIncrease: 15
                },
                {
                    text: "Examine what lessons we learned",
                    nextScene: "lessons_learned",
                    progressIncrease: 15
                },
                {
                    text: "Complete the investigation",
                    nextScene: "victory",
                    progressIncrease: 25
                }
            ],
            educationalNote: "It took nearly 40 years for the truth about Paperclip to begin emerging, and research continues to this day."
        },

        legacy_debate: {
            text: `THE LEGACY DEBATE - HOW SHOULD WE REMEMBER?

            The question of how to remember Paperclip scientists remains contentious:

            🤔 THE ONGOING DEBATE:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            DEFENDERS ARGUE:
            • They were essential to American space program
            • Many were "reluctant Nazis"
            • The Soviets would have taken them anyway
            • Their contributions outweigh their crimes
            • We should separate their science from their politics

            CRITICS RESPOND:
            • Their "contributions" were built on slave labor
            • Many were enthusiastic Nazis, not reluctant
            • We violated our own principles to protect them
            • Victims deserve acknowledgment
            • Science cannot be separated from ethics

            MONUMENTS AND NAMES:
            • Schools, buildings, and awards named for Paperclip scientists
            • Some names removed after exposure (Strughold)
            • Others remain honored (von Braun)

            THE QUESTION:
            Can a man be both a war criminal and an American hero?
            Should we celebrate achievements built on the bodies of slaves?
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "legacy_debate",
            imagePrompt: "Memorial monuments, protesters debating, historical reckoning, complex legacy",
            sources: [
                "Modern historiographical debate",
                "NASA naming controversies",
                "Ethics in history scholarship"
            ],
            choices: [
                {
                    text: "Examine the lessons learned",
                    nextScene: "lessons_learned",
                    progressIncrease: 15
                },
                {
                    text: "Complete the investigation",
                    nextScene: "victory",
                    progressIncrease: 30
                }
            ],
            educationalNote: "The debate over Paperclip reflects broader questions about how we remember complicated historical figures and whether achievements can redeem crimes."
        },

        lessons_learned: {
            text: `LESSONS LEARNED - WHAT PAPERCLIP TEACHES US

            What can we learn from Operation Paperclip?

            📚 THE LESSONS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            1. NATIONAL SECURITY CAN BE ABUSED:
            "Security" was used to justify violating laws, lying to the public, and protecting war criminals.

            2. BUREAUCRACY ENABLES WRONGDOING:
            The diffusion of responsibility across agencies made accountability impossible.

            3. USEFUL PEOPLE ESCAPE JUSTICE:
            If you have something powerful people want, your crimes may be forgiven.

            4. SECRECY HIDES MISCONDUCT:
            Classification was used not to protect security, but to prevent embarrassment.

            5. WHISTLEBLOWERS ARE SILENCED:
            Those who objected were overruled and sidelined.

            6. TRUTH EVENTUALLY EMERGES:
            Despite decades of cover-up, the truth came out through persistent journalism and declassification.

            The patterns of Paperclip have repeated throughout American history - and continue today.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "lessons_learned",
            imagePrompt: "Historical timeline connecting past to present, recurring patterns, lessons for today",
            sources: [
                "Christopher Simpson, 'Blowback'",
                "Patterns in national security abuse",
                "Historical ethics scholarship"
            ],
            choices: [
                {
                    text: "Complete the investigation",
                    nextScene: "victory",
                    progressIncrease: 30
                }
            ],
            educationalNote: "Understanding Paperclip helps us recognize similar patterns when they appear in our own time."
        },

        lack_of_prosecution: {
            text: `WHY NO ONE WAS PROSECUTED

            You investigate why Paperclip scientists faced no accountability:

            ⚖️ THE FAILURE OF JUSTICE:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            LEGAL OBSTACLES:
            • Evidence was classified or destroyed
            • Falsified records protected them
            • Statute of limitations questions
            • International jurisdiction issues

            POLITICAL OBSTACLES:
            • Cold War made prosecutions "unpatriotic"
            • Scientists were "too valuable" to lose
            • Prosecution would expose government lies
            • Both parties complicit in cover-up

            INSTITUTIONAL OBSTACLES:
            • NASA, Army, Air Force protected "their" scientists
            • No agency wanted to admit wrongdoing
            • Career bureaucrats buried evidence

            THE RESULT:
            Of 1,600+ Paperclip scientists:
            • 0 criminally prosecuted
            • 1 (Rudolph) lost citizenship - no prison
            • Most died honored American citizens
            • Many received medals and awards

            The message: If you're useful enough, you're above the law.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "no_prosecution",
            imagePrompt: "Empty courtroom, scales of justice unbalanced, Nazi scientists walking free, failed accountability",
            sources: [
                "DOJ Office of Special Investigations records",
                "Eli Rosenbaum, 'Betrayal'",
                "Congressional investigations"
            ],
            choices: [
                {
                    text: "See the Arthur Rudolph case",
                    nextScene: "arthur_rudolph",
                    progressIncrease: 15
                },
                {
                    text: "Examine victim efforts for justice",
                    nextScene: "justice_efforts",
                    progressIncrease: 15
                },
                {
                    text: "Complete the investigation",
                    nextScene: "victory",
                    progressIncrease: 25
                }
            ],
            educationalNote: "The total lack of criminal accountability represents one of the greatest failures of justice in the post-WWII era."
        },

        justice_efforts: {
            text: `EFFORTS FOR JUSTICE - THE SURVIVORS' FIGHT

            You document the long struggle for accountability:

            ✊ SEEKING JUSTICE:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            MITTELBAU-DORA SURVIVORS:
            • Formed organizations to document their experiences
            • Provided testimony to Justice Department
            • Lobbied for recognition and accountability
            • Most died before any action was taken

            LEGAL EFFORTS:
            • 1979: OSI begins investigating Paperclip scientists
            • 1984: Nazi War Crimes Disclosure Act passed
            • Lawsuits against German companies using slave labor

            SYMBOLIC VICTORIES:
            • Strughold name removed from Air Force building (2013)
            • Some plaques and honors quietly removed
            • Historical markers added at Mittelbau-Dora
            • Books and documentaries bring attention

            THE BITTER REALITY:
            By the time America acknowledged the truth, most perpetrators had died of old age. The survivors had to watch their tormentors celebrated while they struggled for recognition.

            Justice delayed is justice denied.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "justice_efforts",
            imagePrompt: "Elderly survivors at memorial, legal proceedings, decades-long fight for recognition",
            sources: [
                "Mittelbau-Dora Memorial records",
                "DOJ OSI case files",
                "Survivor organization archives"
            ],
            choices: [
                {
                    text: "See the eventual exposure",
                    nextScene: "exposure",
                    progressIncrease: 15
                },
                {
                    text: "Complete the investigation",
                    nextScene: "victory",
                    progressIncrease: 25
                }
            ],
            educationalNote: "The survivors' persistence ensured that the truth was eventually documented, even if justice was never fully achieved."
        },

        american_honors: {
            text: `AMERICAN HONORS - HOW WE CELEBRATED NAZIS

            You compile the honors bestowed on Paperclip scientists:

            🏆 THE ACCOLADES:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            WERNHER VON BRAUN:
            • National Medal of Science
            • NASA Distinguished Service Medal
            • Time Magazine Man of the Year (shared)
            • Honorary degrees from multiple universities
            • NASA's von Braun Space Flight Center

            ARTHUR RUDOLPH:
            • NASA Distinguished Service Medal
            • NASA Exceptional Service Medal
            • Saturn V program leadership honor

            HUBERTUS STRUGHOLD:
            • School of Aerospace Medicine named for him
            • "Father of Space Medicine" title
            • Multiple Air Force honors

            KURT DEBUS:
            • NASA Distinguished Service Medal
            • Kennedy Space Center director

            The men who used slave labor and watched prisoners die were celebrated as American heroes.

            Their victims received nothing.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "american_honors",
            imagePrompt: "Award ceremonies, medals being presented, contrast with concentration camp images",
            sources: [
                "NASA awards database",
                "Air Force honors records",
                "Presidential medal citations"
            ],
            choices: [
                {
                    text: "See the eventual reckoning",
                    nextScene: "exposure",
                    progressIncrease: 20
                },
                {
                    text: "Examine the legacy debate",
                    nextScene: "legacy_debate",
                    progressIncrease: 15
                },
                {
                    text: "Complete the investigation",
                    nextScene: "victory",
                    progressIncrease: 25
                }
            ],
            educationalNote: "The extensive honors given to Paperclip scientists show how thoroughly their Nazi pasts were erased from public memory."
        },

        soviet_comparison: {
            text: `SOVIET OPERATION OSOAVIAKHIM - THE OTHER SIDE

            The Soviets ran their own program to capture German scientists:

            🔴 THE SOVIET APPROACH:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            OPERATION OSOAVIAKHIM (1946):
            In a single night, Soviet forces rounded up 2,000+ German specialists and their families, forcing them to relocate to the USSR.

            KEY DIFFERENCES:
            • Soviets used force; Americans used inducements
            • Soviets eventually sent most scientists home (1950s)
            • Americans gave permanent citizenship
            • Both ignored Nazi backgrounds

            NOTABLE SOVIET RECRUITS:
            • Helmut Gröttrup - V-2 engineer
            • Various rocket and aviation specialists
            • Nuclear physicists

            THE COMPETITION:
            Both superpowers raced to capture German expertise. The Americans simply had better PR - presenting recruitment as voluntary.

            Neither side cared about justice for Nazi crimes.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "soviet_comparison",
            imagePrompt: "Cold War competition, Soviet and American flags, German scientists in middle, ideological battle",
            sources: [
                "Asif Siddiqi, 'The Red Rockets' Glare'",
                "Soviet space program historical records",
                "Cold War scientist recruitment analysis"
            ],
            choices: [
                {
                    text: "Return to Cold War justification",
                    nextScene: "cold_war_context",
                    progressIncrease: 10
                },
                {
                    text: "Complete the investigation",
                    nextScene: "victory",
                    progressIncrease: 25
                }
            ],
            educationalNote: "Both superpowers prioritized scientific expertise over justice - the Cold War made ethics secondary to strategic competition."
        },

        medical_experiments: {
            text: `MEDICAL EXPERIMENTS CONNECTION

            Some Paperclip recruits were linked to Nazi medical atrocities:

            🔬 THE MEDICAL HORROR:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            AVIATION MEDICINE EXPERIMENTS:
            Nazi doctors conducted lethal experiments on concentration camp prisoners to study:
            • High-altitude survival (decompression chambers)
            • Hypothermia survival (freezing water immersion)
            • Oxygen deprivation effects
            • Seawater drinking effects

            PAPERCLIP MEDICAL RECRUITS:
            • Hubertus Strughold - Linked to Dachau experiments
            • Other aviation medicine specialists
            • Researchers who received data from experiments

            THE NUREMBERG MEDICAL TRIAL:
            23 Nazi doctors were tried for medical crimes. Seven were executed. Yet doctors connected to the same research came to America under Paperclip.

            The data from murdered prisoners was used to advance American aerospace medicine.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "medical_experiments",
            imagePrompt: "Nazi medical documents, contrast between Nuremberg trials and American recruitment",
            sources: [
                "Nuremberg Medical Trial records",
                "Annie Jacobsen research on medical recruits",
                "Dachau experiment documentation"
            ],
            choices: [
                {
                    text: "Investigate Strughold specifically",
                    nextScene: "strughold_experiments",
                    progressIncrease: 20
                },
                {
                    text: "Examine the Dachau experiments",
                    nextScene: "dachau_experiments",
                    progressIncrease: 20
                },
                {
                    text: "Complete the investigation",
                    nextScene: "victory",
                    progressIncrease: 25
                }
            ],
            educationalNote: "The use of Nazi medical experiment data remains ethically controversial - can knowledge gained through atrocity be used ethically?"
        },

        chemical_weapons: {
            text: `CHEMICAL WEAPONS SCIENTISTS

            Paperclip also recruited Nazi chemical and biological weapons experts:

            ☠️ THE POISON MAKERS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            WALTER SCHREIBER:
            • Nazi Surgeon General
            • Oversaw biological warfare research
            • Connected to human experiments
            • Recruited by Air Force in 1951
            • Exposed by journalist Drew Pearson
            • Quietly sent to Argentina

            KURT BLOME:
            • Deputy Surgeon General
            • Director of biological warfare
            • Tried at Nuremberg (acquitted)
            • Recruited by U.S. Army
            • Worked at Camp Detrick (germ warfare)

            NERVE AGENT RESEARCH:
            Nazi scientists developed Sarin and Tabun nerve agents. American military wanted their expertise for both offensive and defensive purposes.

            The men who created weapons of mass destruction became American employees.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "chemical_weapons",
            imagePrompt: "Chemical weapons research facility, hazmat suits, sinister scientific research",
            sources: [
                "Annie Jacobsen, 'Operation Paperclip'",
                "Fort Detrick historical records",
                "Nuremberg Trial documents"
            ],
            choices: [
                {
                    text: "Return to other scientists",
                    nextScene: "other_scientists",
                    progressIncrease: 10
                },
                {
                    text: "Complete the investigation",
                    nextScene: "victory",
                    progressIncrease: 25
                }
            ],
            educationalNote: "The recruitment of biological and chemical weapons experts shows Paperclip extended far beyond rocket science."
        },

        intelligence_assets: {
            text: `INTELLIGENCE RECRUITMENT - NAZI SPIES FOR AMERICA

            Paperclip wasn't just about scientists - the CIA recruited Nazi intelligence officers:

            🕵️ THE SPY CONNECTION:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            REINHARD GEHLEN:
            • Nazi General, Eastern Front intelligence chief
            • Surrendered to Americans with files on USSR
            • Created "Gehlen Organization" for CIA
            • Later became head of West German intelligence
            • Employed former SS and Gestapo members

            OPERATION BLOODSTONE:
            Separate program recruiting Nazi intelligence assets for anti-Soviet operations.

            WHAT THEY PROVIDED:
            • Networks of agents in Eastern Europe
            • Intelligence on Soviet military
            • Anti-communist expertise
            • Willingness to conduct covert operations

            THE TRADEOFF:
            Mass murderers became American intelligence assets because they were anti-Communist.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "intelligence_assets",
            imagePrompt: "Cold War spy imagery, CIA documents, Nazi intelligence files, covert operations",
            sources: [
                "Christopher Simpson, 'Blowback'",
                "CIA Gehlen Organization files",
                "Operation Bloodstone documentation"
            ],
            choices: [
                {
                    text: "Return to other scientists",
                    nextScene: "other_scientists",
                    progressIncrease: 10
                },
                {
                    text: "Complete the investigation",
                    nextScene: "victory",
                    progressIncrease: 25
                }
            ],
            educationalNote: "The intelligence recruitment programs show how comprehensively America absorbed Nazi expertise across all fields."
        },

        truman_directive: {
            text: `TRUMAN'S DIRECTIVE - THE RULES THAT WERE BROKEN

            President Truman set clear limits on scientist recruitment:

            📜 THE PRESIDENTIAL ORDER:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            TRUMAN DIRECTIVE (1946):
            "No person found to have been a member of the Nazi Party and more than a nominal participant in its activities, or an active supporter of Nazism or militarism shall be brought to the United States."

            THE INTENT:
            • Allow recruitment of useful scientists
            • Exclude war criminals and active Nazis
            • Maintain American moral standards
            • Balance security needs with ethics

            THE VIOLATION:
            JIOA systematically falsified records to make war criminals appear innocent, directly violating the President's explicit orders.

            Truman likely never knew his directive was being circumvented. The military created a system of plausible deniability.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "truman_directive",
            imagePrompt: "Presidential documents, White House, Truman signing orders, bureaucratic subversion",
            sources: [
                "Truman Library archives",
                "Presidential directive text",
                "JIOA response documents"
            ],
            choices: [
                {
                    text: "See how JIOA violated these orders",
                    nextScene: "war_crimes_coverup",
                    progressIncrease: 15
                },
                {
                    text: "Complete the investigation",
                    nextScene: "victory",
                    progressIncrease: 25
                }
            ],
            educationalNote: "The gap between presidential intent and bureaucratic action shows how subordinates can subvert policy they disagree with."
        },

        bosquet_wev: {
            text: `COLONEL BOSQUET WEV - THE MAN WHO MADE IT HAPPEN

            One official was more responsible than any other for protecting Nazi scientists:

            👤 COLONEL BOSQUET WEV:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            POSITION:
            Director, Joint Intelligence Objectives Agency (JIOA)

            HIS PHILOSOPHY:
            When State Department officials objected to recruiting war criminals, Wev responded:

            "The best interests of the United States have been subjugated to the efforts expended in beating a dead Nazi horse."

            HIS ACTIONS:
            • Ordered falsification of background files
            • Overruled State Department objections
            • Created system to bypass visa requirements
            • Accused objectors of lacking patriotism
            • Protected scientists with clear Nazi records

            THE LEGACY:
            Wev faced no consequences. He believed he was serving American interests - and by Cold War logic, he was.

            The question is whether "American interests" should include protecting war criminals.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "bosquet_wev",
            imagePrompt: "1940s military officer at desk, classified documents, bureaucratic power",
            sources: [
                "JIOA records",
                "Linda Hunt research",
                "State Department correspondence"
            ],
            choices: [
                {
                    text: "See the State Department fight",
                    nextScene: "state_department_fight",
                    progressIncrease: 15
                },
                {
                    text: "Complete the investigation",
                    nextScene: "victory",
                    progressIncrease: 25
                }
            ],
            educationalNote: "Individuals like Wev show how bureaucrats can reshape policy through implementation, regardless of official directives."
        },

        silencing_dissent: {
            text: `SILENCING DISSENT - HOW OBJECTORS WERE HANDLED

            Those who opposed Paperclip faced professional consequences:

            🤐 THE SILENCING:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            SAMUEL KLAUS (State Department):
            • Opposed recruiting war criminals
            • Documented falsified records
            • STATUS: Accused of being "soft on Communism"
            • Career effectively ended

            HERBERT CUMMINGS (State Department):
            • Flagged Nazi backgrounds being hidden
            • Raised ethical objections
            • STATUS: Transferred to unrelated assignment

            VISA DIVISION OFFICERS:
            • Multiple officials refused to process falsified applications
            • STATUS: Applications routed around them through military channels

            THE MESSAGE:
            Object to Paperclip and your career suffers. The system protected itself by punishing anyone who questioned it.

            Patriotism was redefined to mean supporting the program, not upholding principles.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "silencing_dissent",
            imagePrompt: "Bureaucrats being reassigned, career consequences, institutional pressure",
            sources: [
                "State Department personnel records",
                "Linda Hunt research interviews",
                "Internal memoranda"
            ],
            choices: [
                {
                    text: "See the legal violations",
                    nextScene: "legal_violations",
                    progressIncrease: 15
                },
                {
                    text: "Complete the investigation",
                    nextScene: "victory",
                    progressIncrease: 25
                }
            ],
            educationalNote: "The treatment of internal objectors shows how institutions protect wrongdoing by punishing those who speak up."
        },

        legal_violations: {
            text: `LEGAL VIOLATIONS - CRIMES WITHOUT PROSECUTION

            Paperclip violated numerous laws and policies:

            ⚖️ THE VIOLATIONS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            IMMIGRATION LAW:
            • Nazi Party membership barred entry to U.S.
            • Falsified records circumvented this requirement
            • Thousands entered illegally under military cover

            PRESIDENTIAL DIRECTIVE:
            • Truman explicitly prohibited war criminals
            • JIOA systematically violated this order
            • No one was ever held accountable

            FEDERAL RECORDS LAWS:
            • Government documents were falsified
            • Original records were hidden or destroyed
            • False information entered into official files

            INTERNATIONAL LAW:
            • Nuremberg established war crimes standards
            • U.S. simultaneously prosecuted some Nazis
            • While protecting others with identical records

            NO CONSEQUENCES:
            No official was ever prosecuted for these violations. The statute of limitations expired before investigations began.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "legal_violations",
            imagePrompt: "Law books and violated statutes, scales of justice, unenforced laws",
            sources: [
                "Immigration Act of 1924",
                "Truman Presidential Directive",
                "Legal analysis of Paperclip violations"
            ],
            choices: [
                {
                    text: "See why no one was prosecuted",
                    nextScene: "lack_of_prosecution",
                    progressIncrease: 15
                },
                {
                    text: "Complete the investigation",
                    nextScene: "victory",
                    progressIncrease: 25
                }
            ],
            educationalNote: "When powerful institutions break the law, they often face no consequences - the law applies differently to those with power."
        },

        program_continuation: {
            text: `PROGRAM CONTINUATION - PAPERCLIP'S LONG LIFE

            Paperclip continued far longer than most realize:

            📅 THE TIMELINE:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            1945: Operation Overcast begins
            1946: Renamed Operation Paperclip
            1947-1959: Active recruitment continues
            1959: Official program ends
            1960s-1970s: Scientists continue working

            THE NUMBERS:
            • 1,600+ scientists recruited
            • 3,000+ family members brought
            • Decades of service to U.S. programs
            • Many naturalized as citizens

            THE NORMALIZATION:
            Over time, the program became routine. Questions about Nazi backgrounds faded. The scientists became respected American professionals.

            By the time they retired, most were simply seen as "German immigrants who helped with the space program."

            The moral complexity was erased by time.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "program_continuation",
            imagePrompt: "Timeline graphic showing decades of program, normalization over time",
            sources: [
                "JIOA program records",
                "Immigration naturalization records",
                "NASA employment histories"
            ],
            choices: [
                {
                    text: "See the eventual exposure",
                    nextScene: "exposure",
                    progressIncrease: 20
                },
                {
                    text: "Complete the investigation",
                    nextScene: "victory",
                    progressIncrease: 25
                }
            ],
            educationalNote: "Time can normalize almost anything - what seems outrageous initially can become accepted through familiarity."
        },

        rudolph_controversy: {
            text: `THE RUDOLPH CONTROVERSY - DEFENDING A NAZI

            When Arthur Rudolph lost his citizenship, some defended him:

            🗣️ THE DEBATE:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            DEFENDERS ARGUED:
            • He was essential to Saturn V success
            • He "had no choice" under Nazi regime
            • His American contributions should count
            • The investigation was "witch hunt"
            • He should be honored, not punished

            NASA COLLEAGUES:
            Many former colleagues publicly defended Rudolph, calling him a "great American" and protesting his treatment.

            THE RESPONSE:
            • Mittelbau-Dora survivors were outraged
            • Jewish organizations condemned the defense
            • Evidence of his role was overwhelming

            THE DEEPER ISSUE:
            Can technical achievement erase moral culpability?
            Should we honor accomplishments built on slave labor?

            Rudolph's defenders essentially argued: yes.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "rudolph_controversy",
            imagePrompt: "Public debate, defenders and critics, moral controversy over Nazi scientist",
            sources: [
                "NASA colleagues' statements",
                "Survivor group responses",
                "Media coverage of Rudolph case"
            ],
            choices: [
                {
                    text: "See the legacy debate",
                    nextScene: "legacy_debate",
                    progressIncrease: 15
                },
                {
                    text: "Complete the investigation",
                    nextScene: "victory",
                    progressIncrease: 25
                }
            ],
            educationalNote: "The Rudolph controversy shows how achievement can be used to excuse moral failings - and how divisive that argument remains."
        },

        dachau_experiments: {
            text: `DACHAU EXPERIMENTS - THE SOURCE OF THE DATA

            The Dachau experiments provided data used by Paperclip scientists:

            💀 THE ATROCITIES:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            HIGH-ALTITUDE EXPERIMENTS:
            Prisoners placed in decompression chambers simulating altitudes up to 68,000 feet. Most died. Purpose: Study pilot survival.

            FREEZING EXPERIMENTS:
            Prisoners immersed in ice water for hours. Many died. Purpose: Study hypothermia treatment for downed pilots.

            SEAWATER EXPERIMENTS:
            Prisoners forced to drink seawater. Purpose: Survival at sea.

            THE SCIENTISTS:
            • Dr. Sigmund Rascher - Executed by SS
            • Dr. Karl Gebhardt - Executed at Nuremberg
            • Others - Recruited by America

            THE DATA:
            Results from these lethal experiments were shared at conferences attended by Paperclip scientists. The data was later used in American aerospace medicine research.

            Knowledge built on murder.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "dachau_experiments",
            imagePrompt: "Dachau concentration camp documentation, medical horror, historical atrocity",
            sources: [
                "Nuremberg Medical Trial records",
                "Dachau experiment documentation",
                "Post-war investigation files"
            ],
            choices: [
                {
                    text: "See how Strughold was connected",
                    nextScene: "strughold_experiments",
                    progressIncrease: 15
                },
                {
                    text: "Complete the investigation",
                    nextScene: "victory",
                    progressIncrease: 25
                }
            ],
            educationalNote: "The ethical question of whether to use data obtained through atrocity remains debated in medical ethics today."
        },

        strughold_legacy: {
            text: `STRUGHOLD'S LEGACY - HONOR AND DISHONOR

            Hubertus Strughold's legacy underwent dramatic revision:

            📛 THE RECKONING:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            THE HONORS:
            • "Father of Space Medicine"
            • Strughold Award (prestigious aerospace honor)
            • School of Aerospace Medicine named for him
            • NASA tributes and memorials

            THE EXPOSURE:
            2000s: Researchers document his Dachau connections
            2012: German journalist publishes damning evidence
            2013: Air Force removes his name from building
            2013: Strughold Award quietly renamed

            WHAT CHANGED:
            • New documents surfaced
            • Survivors' testimonies gained attention
            • Journalists investigated
            • Public pressure mounted

            It took 60 years for America to acknowledge what Strughold was - and quietly remove his honors without ever formally condemning him.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "strughold_legacy",
            imagePrompt: "Name being removed from building, honors revoked, belated reckoning",
            sources: [
                "Air Force name removal announcement",
                "Aerospace Medical Association records",
                "Journalist investigations"
            ],
            choices: [
                {
                    text: "See the broader legacy debate",
                    nextScene: "legacy_debate",
                    progressIncrease: 15
                },
                {
                    text: "Complete the investigation",
                    nextScene: "victory",
                    progressIncrease: 25
                }
            ],
            educationalNote: "Strughold's case shows that honors can be revoked - but it took decades and external pressure to achieve even that."
        },

        medical_coverup: {
            text: `THE MEDICAL COVERUP - HIDING EXPERIMENT CONNECTIONS

            The connections between Paperclip scientists and human experiments were systematically hidden:

            🩺 THE CONCEALMENT:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            WHAT WAS HIDDEN:
            • Attendance at conferences presenting experiment data
            • Receipt of research reports from concentration camps
            • Use of data in publications
            • Connections to doctors tried at Nuremberg

            HOW IT WAS HIDDEN:
            • References deleted from background files
            • Connections described as "indirect" or "unknowing"
            • Focus placed on American achievements
            • Questions discouraged as "ancient history"

            WHY IT MATTERED:
            • Aerospace medicine built on atrocity data
            • Victims never acknowledged
            • Ethical questions suppressed
            • American research tainted

            The medical establishment preferred not to examine how their knowledge was obtained.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "medical_coverup",
            imagePrompt: "Medical records being altered, files hidden, institutional cover-up",
            sources: [
                "Aerospace medicine historical analysis",
                "Ethics in research studies",
                "Post-war medical community response"
            ],
            choices: [
                {
                    text: "See the eventual exposure",
                    nextScene: "exposure",
                    progressIncrease: 20
                },
                {
                    text: "Complete the investigation",
                    nextScene: "victory",
                    progressIncrease: 25
                }
            ],
            educationalNote: "The medical establishment's reluctance to examine the origins of its knowledge shows how institutional interests can override ethical inquiry."
        },

        victory: {
            text: `INVESTIGATION COMPLETE
            OPERATION PAPERCLIP EXPOSED

            🏆 YOUR INVESTIGATION UNCOVERED:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            ✓ 1,600+ Nazi scientists secretly recruited
            ✓ War crimes systematically covered up
            ✓ Government records falsified
            ✓ Presidential orders violated
            ✓ Slave labor overlooked for technology
            ✓ Victims denied justice for decades
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            THE LEGACY:
            Operation Paperclip shows how easily moral principles can be sacrificed for strategic advantage. The same logic that protected Nazi scientists has been used to justify countless other compromises with evil.

            THE QUESTION:
            When national security conflicts with human rights, which wins?

            For Paperclip, national security won completely. The results - American technological dominance AND the protection of war criminals - are both part of that legacy.

            Thank you for investigating OPERATION PAPERCLIP.`,
            image: "investigation_complete",
            imagePrompt: "V-2 rocket morphing into Saturn V, Nazi files, American flag, complex legacy revealed",
            sources: [
                "National Archives Paperclip files",
                "Annie Jacobsen, 'Operation Paperclip'",
                "Declassified government documents"
            ],
            choices: [],
            educationalNote: "Understanding Paperclip is essential for understanding how America's Cold War victory came at a moral cost that we're still reckoning with today."
        },

        mainMenu: {
            text: `Returning to case selection...`,
            image: "investigation_complete",
            choices: []
        }
    }
};

// Make it available globally
window.OperationPaperclipStoryExpanded = OperationPaperclipStoryExpanded;
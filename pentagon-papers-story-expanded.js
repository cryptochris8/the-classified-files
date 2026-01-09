// The Pentagon Papers - An Interactive Investigation
// Based on the real 1971 leak of classified Vietnam War documents

const PentagonPapersStoryExpanded = {
    title: "The Pentagon Papers",
    description: "Uncover the secret history of the Vietnam War through classified government documents. Follow Daniel Ellsberg's moral journey and the press's fight for the public's right to know.",
    difficulty: "Expert",
    estimatedTime: "60-90 minutes",
    
    badges: {
        moralCourage: {
            id: "moral-courage",
            name: "Moral Courage",
            description: "Made the difficult decision to leak the documents",
            icon: "⚖️"
        },
        pressFreedom: {
            id: "press-freedom",
            name: "Press Freedom",
            description: "Fought government censorship in court",
            icon: "📰"
        },
        truthRevealed: {
            id: "truth-revealed",
            name: "Truth Revealed",
            description: "Exposed government deception to the public",
            icon: "🔍"
        },
        constitutionalVictory: {
            id: "constitutional-victory",
            name: "Constitutional Victory",
            description: "Upheld First Amendment rights",
            icon: "🏛️"
        }
    },
    
    scenes: {
        intro: {
            text: `THE PENTAGON PAPERS
            
            MARCH 1968 - PENTAGON, WASHINGTON D.C.
            
            You are Daniel Ellsberg, a military analyst working on a top-secret study commissioned by Defense Secretary Robert McNamara. The study examines how the United States became involved in Vietnam.
            
            As you read through thousands of classified documents spanning four administrations, a disturbing pattern emerges: The government has been lying to the American people about Vietnam for decades.
            
            🔒 CLASSIFIED FINDINGS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • Presidents knew the war was unwinnable
            • Gulf of Tonkin incident was exaggerated
            • Secret bombing campaigns in Laos/Cambodia
            • Military advisors inflated casualty estimates
            • Public statements contradicted private assessments
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            58,000 Americans have died. Millions of Vietnamese. And the government continues to escalate a war it knows cannot be won.
            
            What do you do with this knowledge?`,
            image: "pentagon_basement_office",
            imagePrompt: "Pentagon basement office 1970s, classified documents stacked high, fluorescent lighting, government analyst at desk reading secret papers, serious atmosphere",
            choices: [
                {
                    text: "Continue working - it's not my place to question policy",
                    nextScene: "complicit_silence"
                },
                {
                    text: "Try to influence policy through official channels",
                    nextScene: "official_channels"
                },
                {
                    text: "Consider leaking to expose the truth",
                    nextScene: "moral_awakening",
                    progressIncrease: 15
                }
            ],
            educationalNote: "The Pentagon Papers were a classified Department of Defense study revealing the secret history of U.S. involvement in Vietnam from 1945-1967."
        },
        
        moral_awakening: {
            text: `A CRISIS OF CONSCIENCE
            
            You've spent months reading the Pentagon Papers. The weight of knowledge is crushing:
            
            📄 DOCUMENT EXCERPT - NSC MEETING, 1965:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            "The situation in South Vietnam is deteriorating. 
            Even with 200,000 troops, success is unlikely. 
            However, we cannot appear to be losing."
            
            Meanwhile, President Johnson told Congress:
            "We are winning in Vietnam."
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            Every day, young Americans are dying in a war their leaders know is hopeless. The public deserves to know what their government is doing in their name.
            
            But leaking these documents would violate your oath, destroy your career, and could land you in prison for life.
            
            🤔 INTERNAL STRUGGLE:
            "What is my higher duty - to the government that employs me, or to the American people who are dying based on lies?"`,
            image: "ellsberg_moral_crisis",
            imagePrompt: "Daniel Ellsberg alone in office late at night, surrounded by classified documents, face showing moral anguish, dramatic shadows, weight of decision",
            choices: [
                {
                    text: "The oath to secrecy is sacred - keep quiet",
                    nextScene: "silent_complicity"
                },
                {
                    text: "Try one more time through official channels",
                    nextScene: "official_rejection",
                    progressIncrease: 10
                },
                {
                    text: "The public's right to know comes first",
                    nextScene: "decision_to_leak",
                    progressIncrease: 25,
                    evidence: true
                }
            ],
            educationalNote: "Ellsberg struggled for months with the moral implications of leaking classified information versus allowing the war to continue based on deception."
        },
        
        decision_to_leak: {
            text: `THE DECISION TO LEAK
            
            October 1969 - Your decision is made.
            
            You cannot be complicit in this deception any longer. The American people have the right to know what their government has done in their name.
            
            🎯 YOUR PLAN:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            1. Copy the most damaging documents
            2. Approach major newspapers
            3. Ensure proper journalistic verification
            4. Accept the consequences
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            You begin the dangerous process of copying 7,000 pages of classified documents. Each page could be considered treason.
            
            But as you work through the night at a Xerox machine, you think of the young soldiers in Vietnam who deserved better from their leaders.
            
            "Truth is a higher loyalty than any oath," you tell yourself.`,
            image: "document_copying",
            imagePrompt: "1970s office at night, man secretly photocopying classified documents, stacks of papers labeled TOP SECRET, tension and urgency",
            badges: ["moralCourage"],
            choices: [
                {
                    text: "Approach The New York Times first",
                    nextScene: "times_approach",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Try The Washington Post instead",
                    nextScene: "post_approach"
                },
                {
                    text: "Contact multiple papers simultaneously",
                    nextScene: "media_strategy"
                }
            ],
            educationalNote: "Ellsberg spent months secretly copying the Pentagon Papers, knowing he faced possible life imprisonment for espionage."
        },
        
        times_approach: {
            text: `THE NEW YORK TIMES
            
            MARCH 1971 - NEW YORK TIMES BUILDING
            
            You meet with Times reporter Neil Sheehan, whom you knew from his Vietnam coverage. You explain what you have:
            
            "Neil, I have documents that prove the government has been lying about Vietnam for years. The public deserves to know."
            
            📰 THE TIMES' DILEMMA:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • Biggest story in decades
            • Clearly in public interest
            • Could face criminal charges
            • Government will seek injunction
            • Setting precedent for press freedom
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            The Times' editorial board debates for weeks. Publisher Arthur Ochs Sulzberger is torn between journalistic duty and legal risk.
            
            Finally: "We're going to publish. The public has a right to know."
            
            The decision will change American journalism forever.`,
            image: "ny_times_newsroom",
            imagePrompt: "1970s New York Times newsroom, editors debating around conference table, classified documents spread out, serious discussion, historic moment",
            choices: [
                {
                    text: "Prepare for government reaction",
                    nextScene: "publication_preparation",
                    progressIncrease: 25
                },
                {
                    text: "Worry about legal consequences",
                    nextScene: "legal_concerns"
                },
                {
                    text: "Focus on journalistic verification",
                    nextScene: "document_verification",
                    evidence: true
                }
            ],
            educationalNote: "The New York Times spent weeks verifying the Pentagon Papers and debating whether to risk government prosecution."
        },
        
        publication_preparation: {
            text: `PREPARING FOR PUBLICATION
            
            The Times assembles a secret team in a hotel suite to analyze the documents:
            
            👥 THE PENTAGON PAPERS TEAM:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • Neil Sheehan - Lead Reporter
            • Hedrick Smith - Diplomatic Correspondent  
            • E.W. Kenworthy - Washington Bureau
            • Fox Butterfield - Asian Affairs
            • James Greenfield - Foreign Editor
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            For three months, they work in absolute secrecy, writing stories that will expose decades of government deception.
            
            📋 KEY FINDINGS TO PUBLISH:
            • Tonkin Gulf incident was exaggerated to justify escalation
            • JFK increased advisors despite private doubts
            • LBJ planned escalation while publicly seeking peace
            • Secret bombing campaigns in Cambodia
            
            June 13, 1971 - Publication day approaches.`,
            image: "secret_hotel_room",
            imagePrompt: "Hotel suite converted to newsroom, journalists working intensely, classified documents everywhere, typewriters, serious concentration, 1970s setting",
            choices: [
                {
                    text: "Publish the full story immediately",
                    nextScene: "publication_day",
                    progressIncrease: 30,
                    evidence: true
                },
                {
                    text: "Notify government before publication",
                    nextScene: "government_notification"
                },
                {
                    text: "Publish selectively to minimize damage",
                    nextScene: "selective_publication"
                }
            ]
        },
        
        publication_day: {
            text: `PUBLICATION DAY
            
            JUNE 13, 1971 - THE NEW YORK TIMES
            
            The headline screams across America:
            
            📰 "VIETNAM ARCHIVE: PENTAGON STUDY TRACES
            3 DECADES OF GROWING U.S. INVOLVEMENT"
            
            The story reveals:
            
            🔍 SHOCKING REVELATIONS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • Government knew war was unwinnable by 1965
            • Tonkin Gulf attack reports were "false or misleading"
            • Secret plans for escalation while promising peace
            • Cambodia bombing hidden from Congress
            • Casualty projections were deliberately inflated
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            The American public is stunned. For years, they believed their government's assurances about Vietnam. Now they know they were lied to.
            
            Within hours, the White House is in crisis mode.
            
            Nixon aide John Ehrlichman: "This will undermine public confidence in everything we say!"`,
            image: "pentagon_papers_headline",
            imagePrompt: "New York Times front page June 13 1971, Pentagon Papers headline, newspaper stands, people reading shocking revelations, historic moment",
            badges: ["truthRevealed"],
            choices: [
                {
                    text: "Await government response",
                    nextScene: "government_reaction",
                    progressIncrease: 35
                },
                {
                    text: "Prepare for legal battle",
                    nextScene: "legal_preparation",
                    evidence: true
                },
                {
                    text: "Continue publishing follow-up stories",
                    nextScene: "continued_publication"
                }
            ],
            educationalNote: "The Pentagon Papers' publication was front-page news that shocked the American public and revealed the extent of government deception."
        },
        
        government_reaction: {
            text: `GOVERNMENT STRIKES BACK
            
            JUNE 14, 1971 - WHITE HOUSE SITUATION ROOM
            
            President Nixon is furious, not about Vietnam (a Democratic war), but about the precedent:
            
            🎙️ NIXON ON TAPE:
            "This is treasonous! If we let the Times get away with this, every government secret will be leaked!"
            
            Attorney General John Mitchell calls Times publisher Sulzberger:
            "Publication of this material is illegal. You must cease immediately or face prosecution."
            
            ⚖️ GOVERNMENT ACTION:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • Justice Department seeks injunction
            • Federal court hearing scheduled
            • Times ordered to stop publication
            • First prior restraint in U.S. history
            • Constitutional crisis begins
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            For the first time in American history, the federal government has censored a major newspaper before publication.
            
            The First Amendment is under attack.`,
            image: "federal_courthouse",
            imagePrompt: "Federal courthouse 1971, reporters and protesters outside, government censorship battle, First Amendment crisis, dramatic confrontation",
            choices: [
                {
                    text: "Focus on the legal battle",
                    nextScene: "supreme_court_case",
                    progressIncrease: 30,
                    evidence: true
                },
                {
                    text: "Get other papers to publish",
                    nextScene: "washington_post_joins",
                    progressIncrease: 25
                },
                {
                    text: "Ellsberg reveals himself as source",
                    nextScene: "ellsberg_reveals",
                    progressIncrease: 20
                }
            ],
            educationalNote: "The government's attempt to stop publication created the first prior restraint case in U.S. history, leading to a Supreme Court showdown."
        },
        
        washington_post_joins: {
            text: `THE WASHINGTON POST JOINS THE FIGHT
            
            While the Times battles in court, The Washington Post obtains their own copy of the Pentagon Papers from Daniel Ellsberg.
            
            Editor Ben Bradlee faces the same dilemma as the Times:
            
            💭 BRADLEE'S DECISION:
            "The government can't stop one paper and let another publish. 
            If we don't stand with the Times, press freedom dies."
            
            📰 JUNE 18, 1971 - POST HEADLINE:
            "DOCUMENTS REVEAL U.S. EFFORT IN '64 TO PROVOKE NORTH VIETNAM"
            
            🏛️ GOVERNMENT RESPONSE:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • Justice Department sues Post
            • Two major papers now censored
            • Other papers prepare to publish
            • Boston Globe, Chicago Sun-Times join fight
            • St. Louis Post-Dispatch ready with documents
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            The government realizes they're fighting a hydra - stop one paper, two more publish.
            
            The battle for the First Amendment is spreading nationwide.`,
            image: "washington_post_newsroom_decision",
            imagePrompt: "Washington Post newsroom 1971, Ben Bradlee and editors making historic decision, Pentagon Papers documents, press freedom battle, determination",
            badges: ["pressFreedom"],
            choices: [
                {
                    text: "Watch the Supreme Court case unfold",
                    nextScene: "supreme_court_case",
                    progressIncrease: 35,
                    evidence: true
                },
                {
                    text: "Focus on Ellsberg's legal troubles",
                    nextScene: "ellsberg_charges"
                },
                {
                    text: "Examine the impact on public opinion",
                    nextScene: "public_reaction"
                }
            ]
        },
        
        supreme_court_case: {
            text: `SUPREME COURT SHOWDOWN
            
            JUNE 30, 1971 - SUPREME COURT OF THE UNITED STATES
            
            The case: New York Times Co. v. United States
            The issue: Can the government censor the press?
            
            🏛️ GOVERNMENT ARGUMENT:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • National security requires secrecy
            • Classified information must be protected  
            • Government has inherent censorship power
            • Publication will harm ongoing operations
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            📰 PRESS ARGUMENT:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • First Amendment prohibits prior restraint
            • Public has right to know government actions
            • No evidence of immediate harm
            • Democracy requires informed citizens
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            Justice Hugo Black writes:
            "The press was to serve the governed, not the governors... 
            The press was protected so that it could bare the secrets 
            of government and inform the people."
            
            The Court's decision will define press freedom for generations.`,
            image: "supreme_court_hearing",
            imagePrompt: "Supreme Court 1971, justices hearing Pentagon Papers case, packed courtroom, historic First Amendment battle, gravitas and tension",
            choices: [
                {
                    text: "Await the historic decision",
                    nextScene: "supreme_court_victory",
                    progressIncrease: 40,
                    evidence: true
                },
                {
                    text: "Consider what defeat would mean",
                    nextScene: "censorship_concerns"
                },
                {
                    text: "Focus on public support for press",
                    nextScene: "public_support"
                }
            ],
            educationalNote: "The Pentagon Papers case established crucial precedent limiting the government's ability to censor the press through prior restraint."
        },
        
        supreme_court_victory: {
            text: `VICTORY FOR PRESS FREEDOM
            
            JUNE 30, 1971 - SUPREME COURT DECISION
            
            By a 6-3 margin, the Supreme Court rules for the press:
            
            ⚖️ THE DECISION:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            "Any system of prior restraints of expression 
            comes to this Court bearing a heavy presumption 
            against its constitutional validity."
            
            The government has NOT met the burden of proving 
            that publication would cause grave and irreparable 
            danger to national security.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            🎉 IMMEDIATE RESULTS:
            • New York Times resumes publication
            • Washington Post continues series
            • Other papers publish their portions
            • Full Pentagon Papers eventually released
            • Press freedom is strengthened
            
            Justice Black's concurrence becomes legendary:
            "The founding fathers gave the free press the protection 
            it must have to fulfill its essential role in our democracy."
            
            The First Amendment has survived its greatest test.`,
            image: "supreme_court_victory",
            imagePrompt: "Supreme Court steps 1971, journalists celebrating victory, newspapers with Pentagon Papers headlines, triumph of press freedom, historic moment",
            badges: ["constitutionalVictory"],
            choices: [
                {
                    text: "Examine the long-term impact",
                    nextScene: "lasting_impact",
                    progressIncrease: 45,
                    evidence: true
                },
                {
                    text: "Focus on Ellsberg's fate",
                    nextScene: "ellsberg_aftermath"
                },
                {
                    text: "Consider lessons for democracy",
                    nextScene: "democratic_lessons"
                }
            ],
            educationalNote: "The Supreme Court's decision in New York Times Co. v. United States remains the strongest protection of press freedom in American law."
        },
        
        ellsberg_reveals: {
            text: `ELLSBERG REVEALS HIMSELF
            
            JUNE 28, 1971 - Press Conference
            
            With the legal battle raging, Daniel Ellsberg steps forward:
            
            🎙️ "I am the source of the Pentagon Papers. I gave them to the press because the American people have been lied to about Vietnam."
            
            📋 ELLSBERG'S STATEMENT:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            "I felt that as an American citizen, as a responsible 
            citizen, I could no longer cooperate in concealing 
            this information from the American public.
            
            I did this clearly at my own jeopardy and I am 
            prepared to answer to all the consequences."
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            ⚖️ GOVERNMENT CHARGES:
            • Espionage Act violations
            • Theft of government property  
            • Conspiracy charges
            • Facing 115 years in prison
            
            Ellsberg becomes a symbol of moral courage - willing to sacrifice his freedom to tell the truth.`,
            image: "ellsberg_press_conference",
            imagePrompt: "Daniel Ellsberg at press conference 1971, revealing himself as Pentagon Papers source, microphones, reporters, moral courage moment",
            choices: [
                {
                    text: "Follow his trial",
                    nextScene: "ellsberg_trial"
                },
                {
                    text: "Examine government overreach",
                    nextScene: "government_persecution",
                    evidence: true
                },
                {
                    text: "Focus on public reaction",
                    nextScene: "hero_or_traitor"
                }
            ]
        },
        
        lasting_impact: {
            text: `THE LASTING IMPACT
            
            The Pentagon Papers changed America forever:
            
            🏛️ CONSTITUTIONAL LEGACY:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • Strongest protection for press freedom
            • Government burden of proof for censorship
            • "Pentagon Papers Standard" established
            • Prior restraint virtually eliminated
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            📰 JOURNALISM IMPACT:
            • Investigative reporting emboldened
            • Government secrecy challenged
            • Source protection strengthened
            • Public's right to know affirmed
            
            🗳️ POLITICAL CONSEQUENCES:
            • Accelerated end of Vietnam War
            • "Credibility gap" exposed
            • Government trust permanently damaged
            • Led to Nixon's downfall (Plumbers → Watergate)
            
            💭 ELLSBERG'S REFLECTION:
            "It was clear to me that the war was going to continue 
            and get larger until the American public understood 
            what we were really doing there."
            
            Mission accomplished.`,
            image: "vietnam_war_end",
            imagePrompt: "Vietnam War ending, helicopters leaving Saigon, Pentagon Papers on desk showing their role in exposing the truth, historical significance",
            choices: [
                {
                    text: "Complete the investigation",
                    nextScene: "victory",
                    progressIncrease: 50,
                    evidence: true
                },
                {
                    text: "Reflect on moral courage",
                    nextScene: "moral_lessons"
                },
                {
                    text: "Consider modern implications",
                    nextScene: "modern_relevance"
                }
            ]
        },
        
        complicit_silence: {
            text: `COMPLICIT SILENCE
            
            You decide to keep quiet and continue your work. After all, you're just an analyst - policy isn't your job.
            
            📊 SIX MONTHS LATER:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • U.S. troop levels: 543,000 (up from 485,000)
            • American casualties: 11,100 additional deaths
            • Vietnamese casualties: Hundreds of thousands more
            • Public support: Continues to decline
            • Government lies: Continue unabated
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            Your colleague mentions: "Another 200 boys from Ohio died last week. President says we're making progress."
            
            You know he's lying. Can you live with that?`,
            image: "silent_complicity",
            imagePrompt: "Pentagon analyst looking troubled at desk, casualty reports stacked high, weight of silence and moral burden, dark atmosphere",
            choices: [
                {
                    text: "I can't stay silent anymore",
                    nextScene: "moral_awakening",
                    progressIncrease: 20
                },
                {
                    text: "It's not my responsibility",
                    nextScene: "moral_failure"
                }
            ]
        },
        
        moral_failure: {
            text: `MORAL FAILURE
            
            You choose personal security over moral courage. The Pentagon Papers remain classified, the public stays deceived, and the war continues.
            
            📊 FINAL TALLY (by war's end):
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • 58,220 Americans killed
            • 3+ million Vietnamese killed
            • War lasted until 1975
            • Government lies never exposed
            • Public trust in institutions maintained through deception
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            History will never know that the government knew the war was unwinnable, because you chose silence over truth.
            
            Sometimes individual conscience is the only check on institutional power. When conscience fails, democracy fails.
            
            🎖️ INVESTIGATION SCORE: 15/100
            
            The truth died with your silence.`,
            image: "moral_failure_consequences",
            imagePrompt: "Vietnam War memorial with additional names, consequences of silence, moral failure visualization, what could have been",
            choices: [
                {
                    text: "Try again with courage",
                    nextScene: "intro"
                },
                {
                    text: "Return to main menu",
                    nextScene: "mainMenu"
                }
            ]
        },
        
        government_persecution: {
            text: `GOVERNMENT PERSECUTION
            
            The Nixon administration's response to Ellsberg reveals authoritarian tendencies:
            
            🕵️ WHITE HOUSE "ENEMIES LIST":
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • IRS audits of Ellsberg and supporters
            • FBI surveillance and harassment
            • CIA "psychological profile" compilation  
            • Break-in at psychiatrist's office
            • Plans for physical "incapacitation"
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            📎 CLASSIFIED MEMO FROM EHRLICHMAN:
            "We need to discredit Ellsberg personally. Find 
            dirt on his mental health, sex life, anything 
            that makes him look unstable or treasonous."
            
            This isn't law enforcement - it's political persecution using the tools of government against a citizen who revealed uncomfortable truths.
            
            The Pentagon Papers exposed not just Vietnam lies, but the authoritarian impulse to destroy those who challenge power.`,
            image: "government_persecution",
            imagePrompt: "FBI surveillance photos, government persecution tactics, authoritarian response to truth-telling, abuse of power",
            badges: ["truthSeeker"],
            choices: [
                {
                    text: "This proves the need for oversight",
                    nextScene: "lasting_impact",
                    progressIncrease: 40,
                    evidence: true
                },
                {
                    text: "Connect to Watergate scandal",
                    nextScene: "watergate_connection",
                    progressIncrease: 35
                },
                {
                    text: "Focus on Ellsberg's vindication",
                    nextScene: "ellsberg_trial"
                }
            ]
        },

        official_channels: {
            text: `WORKING WITHIN THE SYSTEM

            You decide to work through proper channels to change policy:

            📋 YOUR EFFORTS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • Wrote memos to superiors - Filed and ignored
            • Briefed Defense Secretary - "Policy is set"
            • Contacted friendly Senators - No action taken
            • Met with National Security Advisor - Told to "stay in your lane"
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            ASSISTANT SECRETARY WARNKE:
            "Dan, we all know the situation is difficult. But policy is made above our pay grade. Your job is to analyze, not to question."

            💭 REALIZATION:
            The system is designed to maintain itself. Those who might change policy are kept from the information that would motivate change. Those who have the information are powerless to act on it.

            The official channels are a dead end.`,
            image: "official_channels_failure",
            imagePrompt: "Pentagon meeting room, bureaucrats dismissing concerns, memos piled on desk ignored, institutional inertia",
            choices: [
                {
                    text: "Try one more approach - Congress",
                    nextScene: "official_rejection",
                    progressIncrease: 10
                },
                {
                    text: "Accept that the system won't change",
                    nextScene: "silent_complicity"
                },
                {
                    text: "Consider options outside the system",
                    nextScene: "moral_awakening",
                    progressIncrease: 15
                }
            ],
            educationalNote: "Ellsberg spent years trying to change Vietnam policy through official channels before deciding to leak the Pentagon Papers."
        },

        silent_complicity: {
            text: `THE COST OF SILENCE

            You decide to stay quiet. It's not your place to question policy.

            📊 ONE YEAR LATER:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • Additional U.S. deaths: 16,899
            • War expanded into Cambodia
            • Public still believes government assurances
            • You receive a promotion
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            Every day, you read about boys dying in Vietnam. You know the government is lying. You say nothing.

            Your security clearance is renewed. Your pension grows. Your conscience withers.

            Is this the person you wanted to become?`,
            image: "silent_complicity_burden",
            imagePrompt: "Man looking troubled at desk, casualty reports, American flag, moral weight of silence, psychological toll",
            choices: [
                {
                    text: "I can't live with this anymore",
                    nextScene: "moral_awakening",
                    progressIncrease: 20
                },
                {
                    text: "This isn't my responsibility",
                    nextScene: "moral_failure"
                }
            ],
            educationalNote: "Many government officials knew the truth about Vietnam but stayed silent, enabling the war to continue for years."
        },

        official_rejection: {
            text: `REJECTED BY THE SYSTEM

            You make one last attempt to work within the system:

            🏛️ MEETING WITH SENATOR FULBRIGHT
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            YOU: "Senator, I have evidence the government has been lying about Vietnam. Documents that prove--"

            FULBRIGHT: "Daniel, I chair the Foreign Relations Committee. I've had my suspicions for years."

            YOU: "Then release the documents! Hold hearings!"

            FULBRIGHT: "It's not that simple. These are classified. We could both go to prison. And Congress doesn't want to be seen as undermining the troops."
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            Even those who know the truth are afraid to act.

            The system protects itself. Change will not come from within.`,
            image: "congressional_rejection",
            imagePrompt: "Senate office meeting, frustrated whistleblower, sympathetic but unwilling senator, institutional barriers to truth",
            choices: [
                {
                    text: "The public must know directly",
                    nextScene: "decision_to_leak",
                    progressIncrease: 25,
                    evidence: true
                },
                {
                    text: "Accept defeat and move on",
                    nextScene: "moral_failure"
                },
                {
                    text: "Keep trying official channels",
                    nextScene: "official_channels"
                }
            ],
            educationalNote: "Even sympathetic members of Congress were unwilling to expose the Pentagon Papers through official channels."
        },

        post_approach: {
            text: `THE WASHINGTON POST OPTION

            You approach The Washington Post's Ben Bradlee:

            📰 BRADLEE'S RESPONSE:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            "Let me see what you've got."

            After reviewing the documents:

            "This is explosive. But we need to verify everything. And our lawyers are worried. The Times has a bigger legal team to fight the government."

            "Try the Times first. If they won't do it, come back to me. Either way, this story will be told."
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            Bradlee's honesty is refreshing. The Post will be there as backup, but the Times is the natural home for this story.`,
            image: "washington_post_meeting",
            imagePrompt: "Ben Bradlee's office at Washington Post, reviewing classified documents, serious discussion, newspaper legacy",
            choices: [
                {
                    text: "Approach the Times as suggested",
                    nextScene: "times_approach",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Insist the Post publish first",
                    nextScene: "publication_preparation",
                    progressIncrease: 15
                },
                {
                    text: "Try multiple papers simultaneously",
                    nextScene: "media_strategy"
                }
            ],
            educationalNote: "The Washington Post became the second major paper to publish the Pentagon Papers after the Times was enjoined."
        },

        media_strategy: {
            text: `MULTIPLE PAPERS STRATEGY

            You decide to approach several newspapers to ensure the story gets out:

            📰 YOUR MEDIA CONTACTS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • The New York Times - Primary target
            • The Washington Post - Backup
            • The Boston Globe - Regional power
            • St. Louis Post-Dispatch - Strong editorial board
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            💭 STRATEGIC THINKING:
            "If the government stops one paper, others can continue. The truth is too important for a single point of failure."

            The risks are higher - more people know your identity - but so are the chances of success.`,
            image: "media_strategy_planning",
            imagePrompt: "Map with newspaper headquarters marked, strategic planning, multiple copies of documents, coordinated leak strategy",
            choices: [
                {
                    text: "Start with the Times",
                    nextScene: "times_approach",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Approach all at once",
                    nextScene: "publication_preparation",
                    progressIncrease: 25
                },
                {
                    text: "Focus on one paper first",
                    nextScene: "times_approach"
                }
            ],
            educationalNote: "Ellsberg's strategy of providing documents to multiple papers proved crucial when courts tried to stop publication."
        },

        legal_concerns: {
            text: `LEGAL RISKS

            The Times' lawyers outline the potential consequences:

            ⚖️ LEGAL ASSESSMENT:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            FOR THE NEWSPAPER:
            • Criminal prosecution possible
            • Injunction likely
            • Advertiser backlash
            • Congressional investigation

            FOR ELLSBERG:
            • Espionage Act violations
            • Theft of government property
            • Conspiracy charges
            • Up to 115 years in prison
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            TIMES LAWYER: "There's never been a case like this. The government has never tried to stop a newspaper from publishing. We don't know how it will go."

            But the editorial board decides: "The public interest outweighs the legal risk."`,
            image: "legal_team_meeting",
            imagePrompt: "Law office at newspaper, lawyers discussing risks, legal documents, tense deliberation about publishing",
            choices: [
                {
                    text: "Proceed with publication",
                    nextScene: "publication_preparation",
                    progressIncrease: 25
                },
                {
                    text: "Verify documents first",
                    nextScene: "document_verification",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Prepare for legal battle now",
                    nextScene: "legal_preparation"
                }
            ],
            educationalNote: "The Times' lawyers warned of serious legal consequences, but the paper decided the public interest outweighed the risk."
        },

        document_verification: {
            text: `VERIFYING THE DOCUMENTS

            The Times spends three months in a secret hotel suite verifying every claim:

            🔍 VERIFICATION PROCESS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • Cross-reference with public statements
            • Compare to known historical events
            • Interview sources who were present
            • Authenticate document signatures
            • Verify classification markings
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            📋 KEY CONFIRMATIONS:
            ✓ Tonkin Gulf incident - Verified as exaggerated
            ✓ Bombing campaigns - Confirmed and expanded
            ✓ Casualty projections - Proven deliberately false
            ✓ Peace talk positions - Documented deception

            The documents are authentic. The deception is real.

            Now comes the hard part: publishing.`,
            image: "document_verification_process",
            imagePrompt: "Hotel room converted to newsroom, journalists verifying documents, evidence boards, fact-checking process",
            badges: ["truthSeeker"],
            choices: [
                {
                    text: "Begin publication",
                    nextScene: "publication_day",
                    progressIncrease: 30,
                    evidence: true
                },
                {
                    text: "Prepare for government reaction",
                    nextScene: "publication_preparation",
                    progressIncrease: 25
                },
                {
                    text: "Consider legal preparations",
                    nextScene: "legal_preparation"
                }
            ],
            educationalNote: "The Times spent three months verifying the Pentagon Papers before publishing, ensuring accuracy and authenticity."
        },

        government_notification: {
            text: `NOTIFYING THE GOVERNMENT

            Some editors argue the Times should notify the government before publishing:

            📞 ARGUMENT FOR NOTIFICATION:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • Professional courtesy
            • Allows response preparation
            • May identify security risks
            • Shows good faith
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            📞 ARGUMENT AGAINST:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • Government will seek injunction
            • Source may be identified
            • Gives time to prepare cover story
            • Undermines press independence
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            The decision: No notification. The government has had 25 years to tell the truth. They chose to lie instead.`,
            image: "editorial_board_decision",
            imagePrompt: "New York Times editorial board meeting, heated debate, newspaper tradition vs unprecedented situation",
            choices: [
                {
                    text: "Publish without warning",
                    nextScene: "publication_day",
                    progressIncrease: 30,
                    evidence: true
                },
                {
                    text: "Notify government first",
                    nextScene: "government_reaction"
                },
                {
                    text: "Consult lawyers again",
                    nextScene: "legal_preparation"
                }
            ],
            educationalNote: "The Times decided not to notify the government before publication, preserving the element of surprise and protecting their source."
        },

        selective_publication: {
            text: `SELECTIVE PUBLICATION APPROACH

            Some editors argue for publishing only selected portions:

            📋 SELECTIVE APPROACH:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            PROS:
            • Less legal risk
            • Focus on most damning evidence
            • Easier for public to digest
            • May avoid injunction

            CONS:
            • Government can claim cherry-picking
            • Full scope not revealed
            • May miss important connections
            • Half-truths can mislead
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            The decision: Publish comprehensively. The story is the pattern of deception over four administrations, not individual incidents.`,
            image: "editorial_selection_process",
            imagePrompt: "Editors reviewing documents, selecting stories, comprehensive journalism approach, newspaper archives",
            choices: [
                {
                    text: "Publish everything",
                    nextScene: "publication_day",
                    progressIncrease: 30,
                    evidence: true
                },
                {
                    text: "Start with key revelations",
                    nextScene: "publication_preparation",
                    progressIncrease: 25
                },
                {
                    text: "Consult with lawyers first",
                    nextScene: "legal_concerns"
                }
            ],
            educationalNote: "The Times chose to publish comprehensively rather than selectively, showing the full pattern of government deception."
        },

        legal_preparation: {
            text: `PREPARING FOR LEGAL BATTLE

            The Times' lawyers prepare for inevitable government action:

            ⚖️ LEGAL STRATEGY:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            PRIMARY DEFENSE: First Amendment
            "Congress shall make no law... abridging the freedom of speech, or of the press"

            PRECEDENT TO CITE:
            Near v. Minnesota (1931) - Prior restraint is presumptively unconstitutional

            EXPECTED GOVERNMENT ARGUMENT:
            • National security emergency
            • Executive privilege
            • Classified information protection
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            TIMES LEGAL TEAM:
            "The First Amendment was designed for exactly this situation - when government tries to suppress information the public needs to govern itself."`,
            image: "legal_strategy_preparation",
            imagePrompt: "Law library, constitutional law books, lawyers preparing First Amendment defense, preparing for historic case",
            badges: ["pressFreedom"],
            choices: [
                {
                    text: "Proceed with publication",
                    nextScene: "publication_day",
                    progressIncrease: 30,
                    evidence: true
                },
                {
                    text: "Await government reaction",
                    nextScene: "government_reaction",
                    progressIncrease: 25
                },
                {
                    text: "Continue legal research",
                    nextScene: "supreme_court_case"
                }
            ],
            educationalNote: "The Times' lawyers built their defense on First Amendment principles, setting the stage for a historic Supreme Court case."
        },

        continued_publication: {
            text: `CONTINUING TO PUBLISH

            Despite the injunction against the Times, the story continues:

            📰 OTHER PAPERS JOIN:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            June 18: Washington Post publishes
            June 19: Post also enjoined
            June 22: Boston Globe publishes
            June 24: St. Louis Post-Dispatch publishes
            June 25: Chicago Sun-Times joins
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            Each time the government stops one paper, another publishes.

            ATTORNEY GENERAL MITCHELL:
            "We can't stop them all. This is like playing whack-a-mole with the First Amendment."

            The cascade of publication proves the government cannot control information in a democracy with a free press.`,
            image: "newspapers_cascade",
            imagePrompt: "Multiple newspaper front pages with Pentagon Papers headlines, cascade of publication, press solidarity",
            badges: ["pressFreedom"],
            choices: [
                {
                    text: "Focus on Supreme Court case",
                    nextScene: "supreme_court_case",
                    progressIncrease: 35,
                    evidence: true
                },
                {
                    text: "Examine Ellsberg's situation",
                    nextScene: "ellsberg_charges"
                },
                {
                    text: "Watch public reaction",
                    nextScene: "public_reaction"
                }
            ],
            educationalNote: "When courts stopped individual newspapers, others continued publishing, demonstrating the resilience of press freedom."
        },

        ellsberg_charges: {
            text: `ELLSBERG FACES CHARGES

            June 28, 1971 - A federal grand jury indicts Daniel Ellsberg:

            ⚖️ CRIMINAL CHARGES:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • Theft of government property
            • Unauthorized possession of documents
            • Violation of Espionage Act (6 counts)
            • Conspiracy to commit espionage
            • Total potential sentence: 115 years
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            ELLSBERG AT HIS ARRAIGNMENT:
            "I felt that as a citizen, I could no longer cooperate in concealing this information from the American public. I did this clearly at my own jeopardy."

            The government wants to make an example of Ellsberg.

            But history will judge differently.`,
            image: "ellsberg_indictment",
            imagePrompt: "Federal courthouse, Ellsberg arriving for arraignment, reporters, facing espionage charges, courage under fire",
            choices: [
                {
                    text: "Follow the trial",
                    nextScene: "ellsberg_trial",
                    progressIncrease: 25
                },
                {
                    text: "Examine government overreach",
                    nextScene: "government_persecution",
                    evidence: true
                },
                {
                    text: "Focus on public support",
                    nextScene: "public_support"
                }
            ],
            educationalNote: "Ellsberg faced 115 years in prison for leaking the Pentagon Papers, but maintained that telling the truth was worth the risk."
        },

        public_reaction: {
            text: `AMERICA REACTS

            The Pentagon Papers revelations shock the nation:

            📊 PUBLIC OPINION POLLS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            "Was government right to classify these documents?"
            Yes: 35%
            No: 58%

            "Should the press have published?"
            Yes: 71%
            No: 21%

            "Do you trust government statements about Vietnam?"
            Yes: 23%
            No: 72%
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            📺 PUBLIC COMMENTS:
            "They lied to us for years."
            "My son died for a war they knew was pointless."
            "The press did its job. The government didn't."

            The "credibility gap" is now a canyon.`,
            image: "public_reaction_protests",
            imagePrompt: "Americans reading Pentagon Papers headlines, anti-war protests, credibility gap, public awakening",
            choices: [
                {
                    text: "Focus on Supreme Court case",
                    nextScene: "supreme_court_case",
                    progressIncrease: 30,
                    evidence: true
                },
                {
                    text: "Examine impact on war",
                    nextScene: "lasting_impact",
                    progressIncrease: 35
                },
                {
                    text: "Consider Ellsberg's fate",
                    nextScene: "ellsberg_charges"
                }
            ],
            educationalNote: "Public trust in government plummeted after the Pentagon Papers revealed decades of official deception about Vietnam."
        },

        censorship_concerns: {
            text: `IF THE PRESS LOSES

            What would defeat in the Supreme Court mean?

            🚫 CONSEQUENCES OF LOSING:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • Government could censor any "national security" story
            • Prior restraint becomes standard tool
            • Whistleblowers completely unprotected
            • Press reduced to publishing government releases
            • Democracy cannot function without informed citizens
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            JUSTICE BLACK'S WARNING:
            "The word 'security' is a broad, vague generality whose contours should not be invoked to abrogate the fundamental law embodied in the First Amendment."

            A free press is the immune system of democracy. Without it, corruption spreads unchecked.`,
            image: "press_freedom_at_stake",
            imagePrompt: "Scales of justice with press freedom vs government secrecy, constitutional crisis, democracy at stake",
            choices: [
                {
                    text: "Await the decision",
                    nextScene: "supreme_court_victory",
                    progressIncrease: 40,
                    evidence: true
                },
                {
                    text: "Rally public support",
                    nextScene: "public_support"
                },
                {
                    text: "Prepare for any outcome",
                    nextScene: "legal_preparation"
                }
            ],
            educationalNote: "If the government had won, it would have established precedent for censoring any press story it deemed a national security risk."
        },

        public_support: {
            text: `PUBLIC SUPPORT FOR PRESS FREEDOM

            Americans rally behind the newspapers:

            🇺🇸 DEMONSTRATIONS OF SUPPORT:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • Subscriptions to Times, Post surge
            • Journalists' unions march in solidarity
            • Academic freedom statements signed
            • Civil liberties groups file briefs
            • Former government officials speak out
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            FORMER SUPREME COURT JUSTICE GOLDBERG:
            "The government's case represents the most serious threat to the First Amendment since the Alien and Sedition Acts."

            EDITORIAL FROM ST. LOUIS POST-DISPATCH:
            "This case will determine whether the American press is free or merely tolerated."

            The battle for the Pentagon Papers has become a battle for the soul of American democracy.`,
            image: "press_freedom_rally",
            imagePrompt: "Demonstrations supporting press freedom, First Amendment signs, journalists and citizens together, 1971",
            choices: [
                {
                    text: "Await Supreme Court decision",
                    nextScene: "supreme_court_victory",
                    progressIncrease: 40,
                    evidence: true
                },
                {
                    text: "Focus on Ellsberg's trial",
                    nextScene: "ellsberg_trial"
                },
                {
                    text: "Consider long-term impact",
                    nextScene: "lasting_impact"
                }
            ],
            educationalNote: "The Pentagon Papers case became a rallying point for press freedom advocates across the political spectrum."
        },

        ellsberg_aftermath: {
            text: `ELLSBERG'S VINDICATION

            The case against Daniel Ellsberg collapses:

            ⚖️ MAY 11, 1973 - CASE DISMISSED
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            Judge Matthew Byrne dismisses all charges due to:
            • Illegal wiretapping of Ellsberg
            • Break-in at psychiatrist's office
            • Government misconduct throughout
            • "Bizarre events" revealed during Watergate
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            The Nixon administration's attempt to destroy Ellsberg proved to be part of the same criminal conspiracy that led to Watergate.

            ELLSBERG ON THE COURTHOUSE STEPS:
            "I'm glad this case is over. Now maybe the country can focus on ending this war."

            The whistleblower walks free. The truth prevailed.`,
            image: "ellsberg_vindication",
            imagePrompt: "Daniel Ellsberg celebrating outside courthouse, case dismissed, vindication, press and supporters cheering",
            badges: ["moralCourage"],
            choices: [
                {
                    text: "Consider the lessons",
                    nextScene: "democratic_lessons",
                    progressIncrease: 30
                },
                {
                    text: "Examine Watergate connection",
                    nextScene: "watergate_connection",
                    progressIncrease: 35,
                    evidence: true
                },
                {
                    text: "Complete the investigation",
                    nextScene: "victory",
                    progressIncrease: 50
                }
            ],
            educationalNote: "Ellsberg's case was dismissed in 1973 after revelations of government misconduct, including the illegal break-in at his psychiatrist's office."
        },

        democratic_lessons: {
            text: `LESSONS FOR DEMOCRACY

            The Pentagon Papers case taught America important lessons:

            📚 KEY LESSONS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            1. GOVERNMENT CAN LIE
            Even democracies can systematically deceive their citizens when not held accountable.

            2. SECRECY ENABLES ABUSE
            Classification was used to hide embarrassment, not protect security.

            3. CONSCIENCE MATTERS
            One person with moral courage can change history.

            4. PRESS FREEDOM IS ESSENTIAL
            Without a free press, citizens cannot hold government accountable.

            5. THE SYSTEM DOESN'T SELF-CORRECT
            Only external pressure - from individuals, press, courts - can force change.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            These lessons remain relevant whenever government operates in secret.`,
            image: "democracy_lessons",
            imagePrompt: "Classroom or museum exhibit on Pentagon Papers, constitutional principles, lessons of history, civic education",
            choices: [
                {
                    text: "Consider modern relevance",
                    nextScene: "modern_relevance",
                    progressIncrease: 25
                },
                {
                    text: "Reflect on moral courage",
                    nextScene: "moral_lessons"
                },
                {
                    text: "Complete the investigation",
                    nextScene: "victory",
                    progressIncrease: 50,
                    evidence: true
                }
            ],
            educationalNote: "The Pentagon Papers case established enduring principles about government accountability and press freedom."
        },

        ellsberg_trial: {
            text: `THE ELLSBERG TRIAL

            January 1973 - The trial of Daniel Ellsberg begins:

            ⚖️ THE PROSECUTION'S CASE:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • Ellsberg had security clearance
            • He knew documents were classified
            • He deliberately leaked them
            • The Espionage Act is clear
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            ⚖️ THE DEFENSE'S ARGUMENT:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • Documents revealed crimes, not secrets
            • No harm to national security
            • Public interest justified disclosure
            • Over-classification was the real crime
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            But as the trial proceeds, government misconduct begins to emerge...`,
            image: "ellsberg_trial_courtroom",
            imagePrompt: "Federal courtroom, Ellsberg on trial, lawyers arguing, historic espionage case, tension and drama",
            choices: [
                {
                    text: "Watch for government misconduct",
                    nextScene: "government_persecution",
                    progressIncrease: 30,
                    evidence: true
                },
                {
                    text: "Follow to case dismissal",
                    nextScene: "ellsberg_aftermath"
                },
                {
                    text: "Connect to Watergate",
                    nextScene: "watergate_connection",
                    progressIncrease: 35
                }
            ],
            educationalNote: "Ellsberg's trial revealed extensive government misconduct, eventually leading to the case's dismissal."
        },

        hero_or_traitor: {
            text: `HERO OR TRAITOR?

            America debates Daniel Ellsberg's legacy:

            👍 HERO ARGUMENT:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            "He told the truth about government lies."
            "His courage helped end the war."
            "He sacrificed everything for principle."
            "The public had a right to know."
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            👎 TRAITOR ARGUMENT:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            "He violated his oath of secrecy."
            "National security requires trust."
            "He endangered intelligence sources."
            "This encourages future leaks."
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            ELLSBERG'S VIEW:
            "I felt that if I could end this war I would be willing to go to prison for life."

            History increasingly vindicates the whistleblower.`,
            image: "ellsberg_legacy_debate",
            imagePrompt: "Split image showing Ellsberg as hero and accused traitor, public debate, historical judgment",
            choices: [
                {
                    text: "Examine his vindication",
                    nextScene: "ellsberg_aftermath",
                    progressIncrease: 25
                },
                {
                    text: "Consider the moral lessons",
                    nextScene: "moral_lessons"
                },
                {
                    text: "Compare to modern whistleblowers",
                    nextScene: "modern_relevance",
                    progressIncrease: 20
                }
            ],
            educationalNote: "The debate over Ellsberg's actions continues to inform discussions about whistleblowing and government secrecy."
        },

        moral_lessons: {
            text: `LESSONS IN MORAL COURAGE

            Daniel Ellsberg's example teaches us about moral courage:

            💭 ELLSBERG'S REASONING:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            "I had the privilege of knowing things that most Americans couldn't know. With that knowledge came responsibility."

            "I had to ask myself: What's my oath really to? Is it to secrecy, or to the Constitution? To my career, or to my country?"

            "The Constitution requires an informed electorate. Without truth, self-government is impossible."
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            📚 KEY INSIGHT:
            Sometimes doing the right thing means breaking the rules.
            Sometimes loyalty to principle requires disloyalty to institutions.
            Sometimes one person can make a difference.

            Moral courage is rare because it costs something. Ellsberg risked everything.`,
            image: "moral_courage_reflection",
            imagePrompt: "Contemplative image of conscience, individual vs institution, moral courage visualization, doing right",
            badges: ["moralCourage"],
            choices: [
                {
                    text: "Consider modern relevance",
                    nextScene: "modern_relevance",
                    progressIncrease: 25
                },
                {
                    text: "Examine democratic lessons",
                    nextScene: "democratic_lessons"
                },
                {
                    text: "Complete the investigation",
                    nextScene: "victory",
                    progressIncrease: 50,
                    evidence: true
                }
            ],
            educationalNote: "Ellsberg's moral courage - risking his freedom to tell the truth - has inspired generations of whistleblowers."
        },

        modern_relevance: {
            text: `MODERN RELEVANCE

            The Pentagon Papers lessons echo today:

            📊 MODERN PARALLELS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            EDWARD SNOWDEN (2013)
            • Leaked NSA surveillance programs
            • Revealed mass data collection on Americans
            • Fled to Russia to avoid prosecution
            • Hero or traitor debate continues

            CHELSEA MANNING (2010)
            • Leaked military documents to WikiLeaks
            • Revealed civilian casualties in Iraq
            • Sentenced to 35 years (commuted)
            • Raised questions about military transparency

            REALITY WINNER (2017)
            • Leaked classified report on Russian election interference
            • Sentenced to 5+ years
            • Served until 2021
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            The tension between government secrecy and public right to know remains unresolved.`,
            image: "modern_whistleblowers",
            imagePrompt: "Timeline of whistleblowers from Ellsberg to Snowden, evolution of truth-telling, digital age leaks",
            choices: [
                {
                    text: "Reflect on lasting impact",
                    nextScene: "lasting_impact",
                    progressIncrease: 35,
                    evidence: true
                },
                {
                    text: "Consider democratic lessons",
                    nextScene: "democratic_lessons",
                    progressIncrease: 25
                },
                {
                    text: "Complete the investigation",
                    nextScene: "victory",
                    progressIncrease: 50
                }
            ],
            educationalNote: "Modern whistleblowers like Snowden and Manning face similar moral and legal dilemmas to those Ellsberg confronted."
        },

        watergate_connection: {
            text: `THE WATERGATE CONNECTION

            The Pentagon Papers led directly to Watergate:

            🔗 THE CHAIN OF EVENTS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            June 1971: Pentagon Papers published
            June 1971: Nixon creates "Plumbers" unit
            September 1971: Plumbers break into Ellsberg's psychiatrist's office
            June 1972: Plumbers break into Watergate
            May 1973: Ellsberg case dismissed due to Plumber misconduct
            August 1974: Nixon resigns
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            NIXON ON TAPE:
            "We have got to keep our eye on the ball. The Pentagon Papers thing is going to be a damn tough problem. We've got to stop these leaks."

            The same team Nixon assembled to destroy Ellsberg was the team that brought down his presidency.

            The Pentagon Papers didn't just end the Vietnam War - they ended the Nixon presidency.`,
            image: "watergate_connection",
            imagePrompt: "Visual connection between Pentagon Papers and Watergate, Nixon, timeline of events, ironic consequences",
            badges: ["truthSeeker"],
            choices: [
                {
                    text: "See Ellsberg's vindication",
                    nextScene: "ellsberg_aftermath",
                    progressIncrease: 30
                },
                {
                    text: "Examine lasting impact",
                    nextScene: "lasting_impact",
                    progressIncrease: 35,
                    evidence: true
                },
                {
                    text: "Complete the investigation",
                    nextScene: "victory",
                    progressIncrease: 50
                }
            ],
            educationalNote: "Nixon's response to the Pentagon Papers - creating the 'Plumbers' - led directly to Watergate and his resignation."
        },

        mainMenu: {
            text: `Thank you for investigating the Pentagon Papers.

            This case revealed how four U.S. administrations deceived the American public about Vietnam, and how the courage of one man and the freedom of the press brought the truth to light.

            The lessons about government accountability, press freedom, and moral courage remain essential to democracy today.`,
            image: "pentagon_papers_conclusion",
            imagePrompt: "Pentagon Papers documents preserved, press freedom monument, democracy served by truth",
            choices: []
        },

        victory: {
            text: `INVESTIGATION COMPLETE
            TRUTH TRIUMPHANT
            
            🏆 YOUR ACHIEVEMENTS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            ✓ Exposed government deception about Vietnam
            ✓ Defended the First Amendment
            ✓ Demonstrated moral courage under pressure
            ✓ Strengthened press freedom for generations
            ✓ Helped end an unjust war
            ✓ Affirmed the public's right to know
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            
            📊 THE RESULTS:
            • 58,000 American lives lost in Vietnam
            • Millions of Vietnamese casualties
            • Government credibility permanently damaged
            • Press freedom constitutionally protected
            • Democracy strengthened through transparency
            
            Daniel Ellsberg's words ring through history:
            "There are times when you have to choose between 
            your loyalty to your government and your loyalty 
            to your country and its people."
            
            The Pentagon Papers proved that in a democracy, 
            the people's right to know must prevail over 
            government desires for secrecy.
            
            🎖️ FINAL SCORE: 95/100
            
            Thank you for investigating THE PENTAGON PAPERS.`,
            image: "press_freedom_monument",
            imagePrompt: "Memorial to press freedom, First Amendment text carved in stone, Pentagon Papers documents displayed, tribute to investigative journalism",
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
window.PentagonPapersStoryExpanded = PentagonPapersStoryExpanded;
// The Pentagon Papers - An Interactive Investigation
// Based on the real 1971 leak of classified Vietnam War documents

const PentagonpapersStory = {
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

export default PentagonpapersStory

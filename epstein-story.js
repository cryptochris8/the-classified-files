const EpsteinStory = {
    scenes: {
        intro: {
            text: `You are an investigative journalist who has just received a mysterious package containing previously classified documents related to the Jeffrey Epstein case.

The documents appear to contain information that was never made public, including flight logs, financial records, and correspondence that could reveal the full extent of the conspiracy.

As you examine the manila envelope with no return address, you notice it bears an official government seal that has been partially obscured. The weight of what you're holding becomes apparent - this could be the story that exposes the truth.

Your phone buzzes with an unknown number. Do you answer it, or focus on the documents first?`,
            choices: [
                {
                    text: "Answer the phone call - it might be the source",
                    nextScene: "phone_call",
                    progressIncrease: 5
                },
                {
                    text: "Ignore the call and examine the documents immediately",
                    nextScene: "first_documents", 
                    evidence: true,
                    progressIncrease: 10
                },
                {
                    text: "Secure the location first - you might be being watched",
                    nextScene: "security_check",
                    progressIncrease: 5
                }
            ]
        },

        phone_call: {
            text: `You answer the phone with trembling hands.

"You received the package," a distorted voice says. No greeting, no identification.

"Who is this?" you ask, but the voice continues without acknowledgment.

"The documents you have are copies. The originals were destroyed in 2019, but these survived. They detail financial transactions between Epstein and several high-profile individuals that were never disclosed in the official investigation."

The line crackles with static. "You have 48 hours before they realize these are missing. Use them wisely."

The call ends abruptly, leaving you with a dial tone and racing heart.`,
            choices: [
                {
                    text: "Immediately start photographing every document as backup",
                    nextScene: "document_backup",
                    evidence: true,
                    progressIncrease: 15
                },
                {
                    text: "Call your editor to inform them of the potential story",
                    nextScene: "editor_call",
                    progressIncrease: 10
                },
                {
                    text: "Pack everything and leave your location immediately",
                    nextScene: "safe_house",
                    progressIncrease: 5
                }
            ],
            effects: [
                {
                    type: "suspense_pause",
                    text: "The silence after the call is deafening...",
                    delay: 2000
                }
            ]
        },

        first_documents: {
            text: `You spread the documents across your desk under the harsh fluorescent light. The first page is a financial statement from a bank in the Cayman Islands, dated three months before Epstein's arrest.

The amounts are staggering - millions of dollars transferred between accounts with cryptic beneficiary names: "Phoenix Holdings," "Cerberus Trust," "Meridian Foundation."

But it's the next document that makes your blood run cold. A handwritten note on expensive letterhead: "The arrangement must continue. The photographs provide sufficient insurance. - V.H."

At the bottom, a list of initials and corresponding dollar amounts. Some of the initials you recognize from headlines and political coverage.`,
            document: "images/financial_doc.jpg",
            choices: [
                {
                    text: "Cross-reference the initials with public figures",
                    nextScene: "name_matching",
                    evidence: true,
                    progressIncrease: 20
                },
                {
                    text: "Research the offshore companies mentioned",
                    nextScene: "company_research",
                    evidence: true,
                    progressIncrease: 15
                },
                {
                    text: "Focus on the handwritten note and try to identify 'V.H.'",
                    nextScene: "vh_investigation",
                    evidence: true,
                    progressIncrease: 25
                }
            ]
        },

        security_check: {
            text: `You move to the window and carefully peer through the blinds. The street appears normal - a few parked cars, a jogger passing by, nothing obviously suspicious.

But your journalistic instincts, honed by years of investigating sensitive stories, tell you something isn't right. That black sedan has been parked across the street since this morning, and you're certain you saw the same car yesterday.

You grab your camera with the telephoto lens and carefully photograph the license plate and the shadowy figure you can barely make out in the driver's seat.

Your paranoia might be justified. These documents, if authentic, could implicate some of the most powerful people in the world.`,
            choices: [
                {
                    text: "Set up additional security measures and document everything",
                    nextScene: "security_setup",
                    progressIncrease: 10
                },
                {
                    text: "Leave immediately through the back exit with the documents",
                    nextScene: "escape_route",
                    progressIncrease: 15
                },
                {
                    text: "Call a trusted source in law enforcement",
                    nextScene: "police_contact",
                    progressIncrease: 20
                }
            ],
            effects: [
                {
                    type: "document_flash"
                }
            ]
        },

        name_matching: {
            text: `Hours of cross-referencing reveal a disturbing pattern. The initials correspond to senators, business moguls, entertainment industry leaders, and even foreign dignitaries.

"R.D." - $250,000 - matches Robert Donnelly, the pharmaceutical billionaire who testified before Congress about pricing transparency just last month.

"M.C." - $500,000 - could be Michael Crawford, the Hollywood producer whose films have grossed billions worldwide.

"S.P." - $1,200,000 - aligns with Senator Patricia Stevens, chair of the Banking Committee.

Each payment is accompanied by dates that correspond with specific votes, business deals, or public appearances. The pattern suggests systematic blackmail or influence peddling on an unprecedented scale.

But one entry stands out: "POTUS-45" - $5,000,000.`,
            choices: [
                {
                    text: "Investigate the Presidential connection immediately",
                    nextScene: "presidential_link",
                    evidence: true,
                    progressIncrease: 30
                },
                {
                    text: "Focus on building cases against the business leaders first",
                    nextScene: "business_corruption",
                    evidence: true,
                    progressIncrease: 25
                },
                {
                    text: "Examine the Hollywood connection for potential wider network",
                    nextScene: "hollywood_network",
                    evidence: true,
                    progressIncrease: 20
                }
            ]
        },

        vh_investigation: {
            text: `The handwriting analysis software you use for document verification suggests the note was written by someone with European education - the specific way certain letters are formed indicates classical penmanship training.

"V.H." - you rack your brain. Then it hits you. Victor Harington, the British financier who was found dead in his London apartment six months after Epstein's death. Officially ruled a suicide, but many questioned the circumstances.

You dig deeper into Harington's background. Oxford educated, connections to several intelligence agencies, and most importantly - he managed offshore accounts for ultra-high-net-worth individuals who valued discretion above all else.

The note suggests Harington was not just a financial facilitator, but potentially the architect of a blackmail operation that extended far beyond Epstein's direct involvement.

A new document catches your eye - bank routing numbers for transfers that occurred AFTER Epstein's death, with Harington's signature.`,
            choices: [
                {
                    text: "Investigate Harington's death more thoroughly",
                    nextScene: "harington_death",
                    evidence: true,
                    progressIncrease: 35
                },
                {
                    text: "Trace the post-mortem financial transactions",
                    nextScene: "posthumous_transfers",
                    evidence: true,
                    progressIncrease: 30
                },
                {
                    text: "Research Harington's intelligence connections",
                    nextScene: "intelligence_web",
                    evidence: true,
                    progressIncrease: 40
                }
            ]
        },

        presidential_link: {
            text: `The Presidential connection file is sealed with a classified stamp you've never seen before. As you carefully break the seal, your hands are shaking.

Inside are photographs - clear, high-resolution images that leave no room for doubt. The former President at what appears to be a private party on Epstein's island, surrounded by individuals who look disturbingly young.

But it's not just photographs. There are transcripts of recorded conversations, financial records showing payments disguised as "consulting fees" to shell companies, and most damaging of all - a handwritten letter from the President's personal attorney acknowledging receipt of "insurance materials" and promising "continued cooperation with the arrangement."

The dates span several years, both before and during the presidency.

This isn't just scandal - this is evidence of potential criminal activity at the highest levels of government, with implications for national security.`,
            choices: [
                {
                    text: "Prepare to publish immediately - the public needs to know",
                    nextScene: "immediate_publication",
                    progressIncrease: 50
                },
                {
                    text: "Seek additional verification and protection first",
                    nextScene: "verification_process",
                    evidence: true,
                    progressIncrease: 25
                },
                {
                    text: "Contact the current administration with the evidence",
                    nextScene: "government_contact",
                    progressIncrease: 30
                }
            ],
            effects: [
                {
                    type: "suspense_pause",
                    text: "The weight of this revelation could change everything...",
                    delay: 3000
                }
            ]
        },

        intelligence_web: {
            text: `Victor Harington's intelligence connections run deeper than you initially imagined. Through encrypted files on a USB drive hidden in the package, you discover he was a contract asset for multiple agencies - not just British intelligence, but CIA, Mossad, and even Russian SVR.

The documents reveal Epstein's operation was just one node in a massive international network of kompromat (compromising material) designed to influence and control powerful individuals across the globe.

Harington's files detail operations in over thirty countries, with similar "honey trap" operations targeting politicians, judges, business leaders, and military officials. The scope is breathtaking - a shadow system of control that has influenced elections, business deals, and foreign policy decisions for decades.

One file is labeled "SUCCESSION PROTOCOLS" - apparently, the network didn't end with Epstein's death. It adapted, evolved, and continued operating under new management.

The final document in this section is a list of "Assets Still Active" - hundreds of names, locations, and current operations.`,
            choices: [
                {
                    text: "Expose the entire international network immediately",
                    nextScene: "global_exposure",
                    evidence: true,
                    progressIncrease: 60
                },
                {
                    text: "Focus on dismantling current active operations",
                    nextScene: "active_operations",
                    evidence: true,
                    progressIncrease: 45
                },
                {
                    text: "Work with international journalists to coordinate exposure",
                    nextScene: "international_coordination",
                    evidence: true,
                    progressIncrease: 50
                }
            ]
        },

        global_exposure: {
            text: `You decide the world needs to know the full truth, immediately. Working through the night, you prepare a comprehensive exposé that details the entire international network.

Your article, titled "The Shadow Network: How Intelligence Agencies Used Blackmail to Control World Leaders," is published simultaneously across multiple platforms and in several languages.

The response is immediate and explosive. Governments fall within days. Stock markets crash as implicated business leaders resign or are arrested. The FBI, CIA, and several foreign intelligence agencies launch massive internal investigations.

But the victory comes at a cost. Three days after publication, you receive a package containing a single photograph - you leaving your apartment this morning - with a red X drawn over your face.

The network is damaged, but not destroyed. And now you're a target.

However, your courage has inspired journalists worldwide. The classified files case becomes a catalyst for the largest political scandal in modern history, with investigations launched in over forty countries.`,
            choices: [
                {
                    text: "Continue investigating despite the threats",
                    nextScene: "continue_despite_danger",
                    progressIncrease: 20
                },
                {
                    text: "Go into hiding but continue publishing",
                    nextScene: "underground_journalism",
                    progressIncrease: 15
                },
                {
                    text: "Work with authorities for protection and further investigation",
                    nextScene: "protected_witness",
                    progressIncrease: 25
                }
            ]
        },

        continue_despite_danger: {
            text: `Despite the threats, you refuse to be silenced. The truth is too important, the implications too vast for democracy and justice worldwide.

You implement serious security measures - encrypted communications, safe houses, trusted contacts in law enforcement and intelligence communities who are working to clean house from within.

Over the following months, you publish a series of follow-up investigations that expose additional nodes of the network. Each story brings new revelations, new arrests, and new reforms to intelligence oversight.

Your work inspires a new generation of investigative journalists who refuse to be intimidated by powerful interests. News organizations worldwide establish new protocols for protecting sources and journalists working on sensitive stories.

The Epstein files become more than just a scandal - they become a turning point in the fight for transparency and accountability in government and business.

Five years later, as you accept the Pulitzer Prize for Public Service, you reflect on that first moment when you opened the mysterious package. The choice to pursue the truth, despite the risks, changed the world.`,
            choices: [
                {
                    text: "Restart investigation to explore more classified files",
                    nextScene: "intro",
                    progressIncrease: 0
                }
            ],
            effects: [
                {
                    type: "suspense_pause",
                    text: "Your investigation has changed the world forever...",
                    delay: 2000
                }
            ]
        }
    }
};

window.EpsteinStory = EpsteinStory;
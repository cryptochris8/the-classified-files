// Panama Papers - An Interactive Investigation
// Based on historical events and verified facts

const PanamaPapersStoryExpanded = {
    title: "Panama Papers",
    description: "Investigate the world's largest data leak exposing offshore tax havens, money laundering, and global corruption through 11.5 million documents.",
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
            text: `PANAMA PAPERS

            APRIL 3, 2016 - SÜDDEUTSCHE ZEITUNG, MUNICH

            You are an investigative journalist who has received the largest data leak in history. An anonymous source calling themselves "John Doe" has given you 11.5 million documents from Panamanian law firm Mossack Fonseca.

            🔍 THE LEAK CONTAINS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • 4.8 million emails
            • 3 million database files
            • 2.1 million PDFs
            • 1.2 million images
            • 320,000 text files
            • 2.6 terabytes of data
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            The documents reveal a global network of offshore shell companies used by world leaders, criminals, and celebrities to hide money and avoid taxes.

            This investigation could expose corruption at the highest levels of power worldwide.`,
            image: "data_leak_documents",
            imagePrompt: "Massive database of leaked documents on computer screens, investigative journalist overwhelmed by data, 2016 modern newsroom setting",
            choices: [
                {
                    text: "Start analyzing the data systematically",
                    nextScene: "investigation_begins",
                    progressIncrease: 15
                },
                {
                    text: "Look for famous names first",
                    nextScene: "world_leaders_exposed",
                    progressIncrease: 10
                },
                {
                    text: "Follow the money trails",
                    nextScene: "money_laundering_network",
                    progressIncrease: 15
                }
            ],
            educationalNote: "The Panama Papers were the largest data leak in history, exposing global corruption and tax avoidance by world leaders and celebrities."
        },

        investigation_begins: {
            text: `THE INVESTIGATION BEGINS

            You've received 11.5 million documents. Where do you start?

            💻 INITIAL DATA ANALYSIS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • 214,488 offshore entities
            • 14,153 intermediaries
            • 12 heads of state implicated
            • 128 other public officials
            • $2 trillion in transactions
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            🎯 EARLY DISCOVERIES:
            • Vladimir Putin's $2 billion network
            • FIFA corruption payments
            • Drug cartel money laundering
            • Tax evasion by celebrities

            This isn't just about tax avoidance - it's about how the wealthy and powerful hide their crimes from public scrutiny.`,
            image: "panama_papers_investigation",
            imagePrompt: "Modern newsroom with massive data analysis, journalists working on leaked documents, global corruption investigation, 2016 setting",
            choices: [
                {
                    text: "Focus on world leaders",
                    nextScene: "world_leaders_exposed",
                    progressIncrease: 25,
                    evidence: true
                },
                {
                    text: "Follow the money trails",
                    nextScene: "money_laundering_network",
                    progressIncrease: 20
                },
                {
                    text: "Investigate the law firm",
                    nextScene: "mossack_fonseca_operations",
                    progressIncrease: 20
                },
                {
                    text: "Map the offshore financial network 🔗",
                    nextScene: "financial_network_mapped",
                    progressIncrease: 25,
                    evidence: true,
                    miniGame: {
                        type: 'evidence_connection',
                        title: 'Offshore Network Map',
                        description: 'Connect the shell companies, banks, and politicians to reveal the corruption network.'
                    }
                }
            ],
            educationalNote: "The ICIJ coordinated 370 journalists from 80 countries to analyze the Panama Papers - the largest journalism collaboration in history."
        },

        financial_network_mapped: {
            text: `OFFSHORE FINANCIAL NETWORK MAPPED

            APRIL 2016 - NETWORK ANALYSIS

Your evidence board reveals the interconnected web of offshore corruption:

🔗 CORRUPTION NETWORK ANALYSIS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MOSSACK FONSECA ←→ SHELL COMPANIES
- Created 214,000+ offshore entities
- Anonymous ownership structures
- Multiple jurisdictions to hide trails

SHELL COMPANIES ←→ WORLD LEADERS
- Hidden assets for presidents, kings
- Billion-dollar fortunes concealed
- Tax-free wealth accumulation

SHELL COMPANIES ←→ BANKS
- Major banks facilitated transfers
- Compliance failures documented
- Money laundering enabled

WORLD LEADERS ←→ BANKS
- Direct account relationships
- Preferential treatment for elites
- Regulatory blind spots exploited

The network reveals how the global elite hide wealth from their citizens.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "offshore_network_map",
            imagePrompt: "Global financial network visualization, shell companies connected to politicians and banks, corruption web exposed",
            sources: ["ICIJ Analysis", "Panama Papers Database", "Financial Network Mapping"],
            miniGameData: {
                type: 'evidence_connection',
                evidence: [
                    { id: 'mossack', label: 'Mossack Fonseca', icon: '🏢', x: 50, y: 15 },
                    { id: 'shells', label: 'Shell Companies', icon: '📦', x: 50, y: 45 },
                    { id: 'leaders', label: 'World Leaders', icon: '👑', x: 20, y: 75 },
                    { id: 'banks', label: 'Banks', icon: '🏦', x: 80, y: 75 }
                ],
                connections: [
                    { from: 'mossack', to: 'shells' },
                    { from: 'shells', to: 'leaders' },
                    { from: 'shells', to: 'banks' },
                    { from: 'leaders', to: 'banks' }
                ],
                maxHints: 3,
                evidenceReward: 'Offshore Network Map',
                progressReward: 25
            },
            choices: [
                {
                    text: "Focus on world leaders",
                    nextScene: "world_leaders_exposed",
                    progressIncrease: 20,
                    evidence: true
                },
                {
                    text: "Investigate the banks involved",
                    nextScene: "money_laundering_network",
                    progressIncrease: 18,
                    evidence: true
                },
                {
                    text: "Examine Mossack Fonseca operations",
                    nextScene: "mossack_fonseca_operations",
                    progressIncrease: 15
                }
            ],
            educationalNote: "The Panama Papers revealed how a single law firm helped create over 200,000 offshore entities for global elites."
        },

        world_leaders_exposed: {
            text: `WORLD LEADERS EXPOSED

            The Panama Papers reveal corruption at the highest levels of power:

            👑 HEADS OF STATE IMPLICATED:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            • ICELAND: PM Sigmundur Gunnlaugsson - Hidden millions
            • UKRAINE: President Petro Poroshenko - Offshore empire
            • PAKISTAN: PM Nawaz Sharif - London properties
            • SAUDI ARABIA: King Salman - $1 billion in assets
            • ARGENTINA: President Mauricio Macri - Bahamas accounts
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            🇷🇺 THE PUTIN NETWORK:
            His cellist friend Sergei Roldugin controls $2 billion in offshore accounts - money that clearly belongs to Putin himself.

            These aren't legitimate business deals - they're kleptocrats stealing from their own people.`,
            image: "world_leaders_corruption",
            imagePrompt: "World map with corruption networks, offshore accounts visualization, global kleptocracy exposed, political scandal",
            badges: ["truthSeeker"],
            sources: [
                "ICIJ Panama Papers Database",
                "Süddeutsche Zeitung Investigation",
                "Guardian Panama Papers Coverage"
            ],
            choices: [
                {
                    text: "Publish the world leader stories",
                    nextScene: "global_publication",
                    progressIncrease: 40,
                    evidence: true
                },
                {
                    text: "Investigate the consequences",
                    nextScene: "political_fallout",
                    progressIncrease: 20
                },
                {
                    text: "Focus on the financial system",
                    nextScene: "offshore_system_exposed",
                    progressIncrease: 25
                }
            ],
            educationalNote: "The Panama Papers exposed 12 current or former heads of state and 128 other public officials from around the world."
        },

        money_laundering_network: {
            text: `THE MONEY LAUNDERING NETWORK

            You trace the financial flows through the offshore system:

            💰 HOW DIRTY MONEY MOVES:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            THE LAYERING PROCESS:
            1. Shell company created in secrecy jurisdiction
            2. Bank accounts opened in company name
            3. Money transferred through multiple entities
            4. Origin becomes impossible to trace
            5. Funds emerge as "legitimate" investments

            CRIMINAL CONNECTIONS FOUND:
            • Mexican drug cartel money through Panama companies
            • Russian mafia funds in British Virgin Islands
            • Sanctions evasion by Iran and North Korea
            • Bribery payments by multinational corporations

            KEY FINDING:
            Banks like HSBC, Deutsche Bank, and Credit Suisse all facilitated these transactions despite "know your customer" requirements.

            The system isn't broken - it was designed this way.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "money_laundering_flow",
            imagePrompt: "Complex financial flow diagram showing shell companies, offshore accounts, money trail visualization",
            sources: [
                "ICIJ financial analysis",
                "FinCEN Files (2020)",
                "Anti-money laundering experts"
            ],
            choices: [
                {
                    text: "Investigate the banks' role",
                    nextScene: "banking_complicity",
                    progressIncrease: 20
                },
                {
                    text: "Focus on the law firm enablers",
                    nextScene: "mossack_fonseca_operations",
                    progressIncrease: 20
                },
                {
                    text: "Expose the entire system",
                    nextScene: "offshore_system_exposed",
                    progressIncrease: 25
                }
            ],
            educationalNote: "The United Nations estimates that $1.6 trillion is laundered globally each year - about 2.7% of global GDP."
        },

        mossack_fonseca_operations: {
            text: `MOSSACK FONSECA - THE SECRECY FACTORY

            You investigate the law firm at the center of the leak:

            🏢 THE FIRM:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            FOUNDED: 1977 in Panama City
            PARTNERS: Jürgen Mossack (German) & Ramón Fonseca (Panamanian)

            SERVICES PROVIDED:
            • Shell company creation ($1,000+)
            • Nominee directors (hiding real owners)
            • Bearer shares (anonymous ownership)
            • Bank account facilitation
            • Tax structure optimization

            SCALE OF OPERATIONS:
            • 300,000+ companies created
            • Offices in 40+ countries
            • 600 employees worldwide
            • $42 million annual revenue

            INTERNAL COMMUNICATIONS:
            Emails show staff knew they were helping clients hide assets from authorities. One employee wrote: "We just create the structures - what they do with them isn't our business."
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "mossack_fonseca_office",
            imagePrompt: "Panama City law firm office, corporate secrecy, shell company factory, offshore services",
            sources: [
                "Leaked Mossack Fonseca internal documents",
                "Panama corporate registry",
                "ICIJ partner firm analysis"
            ],
            choices: [
                {
                    text: "Examine how they screened clients",
                    nextScene: "due_diligence_failure",
                    progressIncrease: 15
                },
                {
                    text: "Investigate their famous clients",
                    nextScene: "world_leaders_exposed",
                    progressIncrease: 20
                },
                {
                    text: "See what happened to the firm",
                    nextScene: "firm_aftermath",
                    progressIncrease: 15
                }
            ],
            educationalNote: "Mossack Fonseca was the fourth largest offshore law firm in the world before the leak. It closed in 2018 due to the scandal."
        },

        global_publication: {
            text: `GLOBAL PUBLICATION - RELEASING THE STORY

            April 3, 2016 - The world changes forever:

            📰 COORDINATED RELEASE:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            PUBLISHING PARTNERS:
            • 107 media organizations
            • 80 countries
            • 370 journalists
            • Simultaneous publication

            IMMEDIATE IMPACT:
            • 4.8 million readers in first hour
            • #PanamaPapers trends globally
            • Politicians begin resigning
            • Investigations launched worldwide

            JOHN DOE'S STATEMENT:
            "Income inequality is one of the defining issues of our time. The Panama Papers prove how deeply ingrained the culture of corruption and tax evasion is."

            GOVERNMENT RESPONSES:
            • Iceland: Protests demand PM resignation
            • Pakistan: Supreme Court investigation
            • UK: Cameron faces questions about father
            • Panama: Defends its financial sector
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "global_publication",
            imagePrompt: "Newspapers worldwide with Panama Papers headlines, global news coverage, historic journalism moment",
            sources: [
                "ICIJ publication records",
                "Global media coverage April 2016",
                "John Doe manifesto"
            ],
            badges: ["whistleblower"],
            choices: [
                {
                    text: "Follow the political fallout",
                    nextScene: "political_fallout",
                    progressIncrease: 25
                },
                {
                    text: "Monitor the legal consequences",
                    nextScene: "legal_consequences",
                    progressIncrease: 20
                },
                {
                    text: "Complete the investigation",
                    nextScene: "victory",
                    progressIncrease: 30
                }
            ],
            educationalNote: "The Panama Papers were published by 107 media outlets simultaneously to prevent any single government from suppressing the story."
        },

        political_fallout: {
            text: `POLITICAL FALLOUT - CONSEQUENCES BEGIN

            The publication triggers a global reckoning:

            🏛️ RESIGNATIONS & INVESTIGATIONS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            ICELAND:
            PM Sigmundur Gunnlaugsson resigns after mass protests.
            He hid millions in an offshore company while negotiating
            with creditors during Iceland's financial crisis.

            PAKISTAN:
            Supreme Court disqualifies PM Nawaz Sharif from office.
            His children owned expensive London properties through
            offshore companies.

            SPAIN:
            Industry Minister José Manuel Soria resigns over
            connections to offshore companies in Jersey and Bahamas.

            UK:
            David Cameron admits benefiting from his late father's
            offshore fund but denies wrongdoing.

            ONGOING INVESTIGATIONS:
            Tax authorities in 79 countries launch investigations.
            Over $1.2 billion recovered in first two years.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "political_protests",
            imagePrompt: "Mass protests in Reykjavik Iceland, politicians resigning, Panama Papers fallout, public anger",
            sources: [
                "Reuters political coverage",
                "Iceland protest documentation",
                "Pakistan Supreme Court ruling"
            ],
            badges: ["justiceSeeker"],
            choices: [
                {
                    text: "Examine the legal reforms that followed",
                    nextScene: "reforms_implemented",
                    progressIncrease: 20
                },
                {
                    text: "Investigate what wasn't reformed",
                    nextScene: "system_unchanged",
                    progressIncrease: 20
                },
                {
                    text: "Complete the investigation",
                    nextScene: "victory",
                    progressIncrease: 30
                }
            ],
            educationalNote: "The Panama Papers led to the resignation of 2 heads of government, criminal investigations in dozens of countries, and over $1.2 billion in recovered taxes."
        },

        offshore_system_exposed: {
            text: `THE OFFSHORE SYSTEM EXPOSED

            You reveal how the global offshore system actually works:

            🌐 THE INFRASTRUCTURE OF SECRECY:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            KEY SECRECY JURISDICTIONS:
            • Panama - 350,000+ shell companies
            • British Virgin Islands - More companies than people
            • Delaware, USA - 1 million+ entities
            • Switzerland - Bank secrecy tradition
            • Cayman Islands - $2 trillion in deposits

            HOW IT WORKS:
            1. Create company in secrecy jurisdiction
            2. Use nominee directors (paid stand-ins)
            3. Open bank account elsewhere
            4. Move money through layered structures
            5. True owner hidden behind corporate veil

            WHO ENABLES IT:
            • Law firms like Mossack Fonseca
            • Major banks worldwide
            • Accounting firms (Big Four involved)
            • Real estate agents
            • Art dealers

            This isn't illegal - it's how the system was designed.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "offshore_system",
            imagePrompt: "Global map of tax havens and secrecy jurisdictions, financial flow visualization, offshore system diagram",
            sources: [
                "Tax Justice Network",
                "ICIJ offshore leaks database",
                "Gabriel Zucman, 'The Hidden Wealth of Nations'"
            ],
            choices: [
                {
                    text: "See who benefits from this system",
                    nextScene: "beneficiaries_exposed",
                    progressIncrease: 20
                },
                {
                    text: "Examine reform efforts",
                    nextScene: "reforms_implemented",
                    progressIncrease: 20
                },
                {
                    text: "Complete the investigation",
                    nextScene: "victory",
                    progressIncrease: 30
                }
            ],
            educationalNote: "Economists estimate $8.7 trillion is held in offshore accounts - about 11% of global GDP hidden from tax authorities."
        },

        banking_complicity: {
            text: `BANKING COMPLICITY - THE ENABLERS

            Major banks facilitated offshore secrecy despite regulations:

            🏦 BANKS IMPLICATED:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            HSBC:
            Helped clients evade taxes through Panama structures.
            Already fined $1.9 billion for money laundering (2012).

            DEUTSCHE BANK:
            Processed $10 billion in suspicious transactions.
            Linked to Russian money laundering.

            CREDIT SUISSE:
            Set up accounts for sanctioned individuals.
            Helped clients hide assets from US authorities.

            UBS:
            Operated nominee director services.
            Previously fined for tax evasion assistance.

            THE PATTERN:
            Banks pay fines as a "cost of doing business" while
            continuing practices that enable corruption and tax evasion.

            No senior banker has gone to prison.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "banking_complicity",
            imagePrompt: "Major bank logos with scandal headlines, financial corruption, too big to jail",
            sources: [
                "FinCEN enforcement actions",
                "DOJ settlement documents",
                "ICIJ banking analysis"
            ],
            choices: [
                {
                    text: "See what reforms followed",
                    nextScene: "reforms_implemented",
                    progressIncrease: 20
                },
                {
                    text: "Complete the investigation",
                    nextScene: "victory",
                    progressIncrease: 30
                }
            ],
            educationalNote: "Despite billions in fines, no major bank executive has been criminally prosecuted for enabling money laundering through offshore structures."
        },

        due_diligence_failure: {
            text: `DUE DILIGENCE FAILURE - LOOKING THE OTHER WAY

            Internal emails reveal Mossack Fonseca knew about problematic clients:

            📧 FROM THE EMAILS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            ON RUSSIAN CLIENTS:
            "Be very careful with Russians, but they're good clients."

            ON COMPLIANCE:
            "We have to do something for compliance. I'm thinking fake paperwork."

            ON SANCTIONS:
            "Yes, they're sanctioned, but we can work around it."

            ON NOMINEE DIRECTORS:
            "Just use the same directors. No one checks anyway."

            THE SYSTEMATIC FAILURE:
            • 33% of clients had inadequate documentation
            • Known criminals continued as clients
            • Warning signs routinely ignored
            • Compliance treated as paperwork exercise

            Due diligence wasn't a failure - it was a facade.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "due_diligence_failure",
            imagePrompt: "Internal emails on screen, compliance paperwork being ignored, willful blindness",
            sources: [
                "Leaked Mossack Fonseca emails",
                "ICIJ compliance analysis",
                "Anti-money laundering expert testimony"
            ],
            choices: [
                {
                    text: "See the firm's fate",
                    nextScene: "firm_aftermath",
                    progressIncrease: 15
                },
                {
                    text: "Complete the investigation",
                    nextScene: "victory",
                    progressIncrease: 30
                }
            ],
            educationalNote: "Anti-money laundering rules require firms to 'know your customer' but enforcement is weak and penalties are treated as business costs."
        },

        firm_aftermath: {
            text: `FIRM AFTERMATH - WHAT HAPPENED TO MOSSACK FONSECA

            The leak destroyed the world's fourth-largest offshore law firm:

            📉 THE COLLAPSE:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            MARCH 2018:
            Mossack Fonseca announces closure after 40 years.
            "Reputational damage has made it impossible to continue."

            CRIMINAL CHARGES:
            • Jürgen Mossack and Ramón Fonseca arrested
            • Charged with money laundering in Panama
            • Cases ongoing in multiple countries
            • German prosecutors issue international arrest warrants

            FINANCIAL IMPACT:
            • 600 employees lost jobs
            • Offices closed in 40 countries
            • Clients scrambled to find new providers
            • (But the system continued with other firms)

            THE BIGGER PICTURE:
            Mossack Fonseca was replaced by other firms. The offshore
            industry lost one player but the game continues.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "firm_closure",
            imagePrompt: "Empty law office, for lease signs, fallen corporate giant, justice served",
            sources: [
                "Mossack Fonseca closure announcement",
                "Panama prosecution records",
                "Reuters business coverage"
            ],
            choices: [
                {
                    text: "See what reforms followed",
                    nextScene: "reforms_implemented",
                    progressIncrease: 20
                },
                {
                    text: "Complete the investigation",
                    nextScene: "victory",
                    progressIncrease: 30
                }
            ],
            educationalNote: "Mossack Fonseca founders face ongoing criminal charges. As of 2024, trials continue in multiple jurisdictions."
        },

        legal_consequences: {
            text: `LEGAL CONSEQUENCES - JUSTICE IN ACTION

            The Panama Papers triggered global enforcement:

            ⚖️ BY THE NUMBERS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            TAX RECOVERED:
            • $1.36 billion (as of 2022)
            • 79 countries conducting investigations
            • 150+ inquiries and audits opened

            CRIMINAL CHARGES:
            • Mossack Fonseca founders charged
            • Dozens of intermediaries prosecuted
            • Several politicians indicted
            • FIFA officials arrested

            NOTABLE CASES:
            Pakistan: PM disqualified by Supreme Court
            Iceland: PM forced to resign
            Spain: Minister resigned
            UK: HMRC recovered £325 million

            THE LIMITATION:
            Most wealthy individuals settled quietly, paying back
            taxes plus penalties. Few faced criminal prosecution.

            Wealth still protects the powerful.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "legal_consequences",
            imagePrompt: "Courtroom proceedings, tax authority investigations, wealthy individuals settling cases",
            sources: [
                "ICIJ impact tracker",
                "Tax authority press releases",
                "Court proceedings worldwide"
            ],
            choices: [
                {
                    text: "Examine the reforms",
                    nextScene: "reforms_implemented",
                    progressIncrease: 20
                },
                {
                    text: "Complete the investigation",
                    nextScene: "victory",
                    progressIncrease: 30
                }
            ],
            educationalNote: "Tax recovery from the Panama Papers exceeded $1.36 billion, but experts believe the total hidden wealth exposed was worth hundreds of billions."
        },

        reforms_implemented: {
            text: `REFORMS IMPLEMENTED - CHANGES MADE

            The Panama Papers triggered regulatory reforms:

            📋 POST-PANAMA REFORMS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            BENEFICIAL OWNERSHIP REGISTERS:
            • UK established public register (2016)
            • EU required member state registers
            • Several Caribbean jurisdictions complied
            • (USA still lacks federal requirement)

            AUTOMATIC INFORMATION EXCHANGE:
            • 100+ countries now share tax data
            • Common Reporting Standard expanded
            • Harder to hide accounts offshore

            ANTI-MONEY LAUNDERING:
            • Enhanced due diligence requirements
            • Higher fines for non-compliance
            • More scrutiny of shell companies

            THE GAP:
            Reforms are patchy. Delaware still allows anonymous
            companies. Many jurisdictions drag their feet.
            The wealthy can still find secrecy.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "reforms_implemented",
            imagePrompt: "Legislative chambers, new regulations being passed, transparency measures, partial victory",
            sources: [
                "Tax Justice Network assessments",
                "OECD CRS implementation",
                "Transparency International reports"
            ],
            choices: [
                {
                    text: "See what still needs to change",
                    nextScene: "system_unchanged",
                    progressIncrease: 15
                },
                {
                    text: "Complete the investigation",
                    nextScene: "victory",
                    progressIncrease: 30
                }
            ],
            educationalNote: "The Panama Papers accelerated transparency reforms but many loopholes remain, including in the United States."
        },

        system_unchanged: {
            text: `WHAT HASN'T CHANGED - THE ONGOING PROBLEM

            Despite reforms, offshore secrecy persists:

            ⚠️ REMAINING LOOPHOLES:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            UNITED STATES:
            • Delaware, Nevada, Wyoming still allow anonymous LLCs
            • No federal beneficial ownership register (until 2024)
            • Real estate purchases hide billions in dirty money

            TRUSTS:
            • South Dakota has become a tax haven
            • Dynasty trusts can last forever
            • Trust ownership often hidden

            NEW PLAYERS:
            Other firms replaced Mossack Fonseca:
            • Trident Trust
            • Asiaciti Trust
            • Dozens of smaller providers

            THE WEALTH DEFENSE INDUSTRY:
            An army of lawyers, accountants, and bankers exists
            to help the wealthy avoid taxes legally.

            The game continues with new players.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "system_unchanged",
            imagePrompt: "Offshore industry continuing, new players emerging, wealth defense industry",
            sources: [
                "Pandora Papers (2021)",
                "Tax Justice Network Financial Secrecy Index",
                "ICIJ ongoing investigations"
            ],
            choices: [
                {
                    text: "Complete the investigation",
                    nextScene: "victory",
                    progressIncrease: 30
                }
            ],
            educationalNote: "The 2021 Pandora Papers revealed that offshore secrecy continues largely unchanged, with new jurisdictions and providers replacing those exposed."
        },

        beneficiaries_exposed: {
            text: `WHO BENEFITS FROM OFFSHORE SECRECY

            The Panama Papers revealed who uses the offshore system:

            👥 THE USERS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            KLEPTOCRATS:
            Leaders stealing from their own countries use offshore
            companies to hide their theft.

            CRIMINALS:
            Drug cartels, arms dealers, and human traffickers
            launder money through shell companies.

            TAX EVADERS:
            Wealthy individuals and corporations avoid paying
            taxes owed to their home countries.

            SANCTIONS EVADERS:
            Countries like North Korea and Iran use offshore
            structures to evade international sanctions.

            CORRUPT CORPORATIONS:
            Companies bribe officials and hide profits through
            complex offshore arrangements.

            THE COMMON THREAD:
            All benefit from secrecy. All harm ordinary citizens
            who pay their fair share.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "beneficiaries_exposed",
            imagePrompt: "Various corrupt actors benefiting from offshore system, kleptocrats criminals and corporations",
            sources: [
                "ICIJ analysis",
                "Transparency International",
                "Global Witness reports"
            ],
            choices: [
                {
                    text: "See the impact on ordinary people",
                    nextScene: "impact_on_society",
                    progressIncrease: 15
                },
                {
                    text: "Complete the investigation",
                    nextScene: "victory",
                    progressIncrease: 30
                }
            ],
            educationalNote: "Offshore tax evasion costs governments an estimated $600 billion annually - money that could fund public services."
        },

        impact_on_society: {
            text: `THE IMPACT ON ORDINARY PEOPLE

            Offshore secrecy affects everyone:

            💔 THE HIDDEN COSTS:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            LOST TAX REVENUE:
            • $600 billion lost annually worldwide
            • Schools, hospitals, infrastructure underfunded
            • Higher taxes on those who can't hide income

            INEQUALITY:
            • Wealthy pay lower effective rates
            • Middle class bears more of the burden
            • Social mobility decreases

            CORRUPTION:
            • Stolen public funds hidden offshore
            • Bribery facilitated by secrecy
            • Democratic accountability undermined

            CRIME:
            • Drug money cleaned through shell companies
            • Human trafficking proceeds hidden
            • Terrorism financing enabled

            The offshore system isn't victimless - we all pay.
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
            image: "impact_on_society",
            imagePrompt: "Contrast between offshore wealth and public services struggling, inequality visualization",
            sources: [
                "IMF tax gap estimates",
                "World Bank inequality studies",
                "Oxfam offshore analysis"
            ],
            choices: [
                {
                    text: "Complete the investigation",
                    nextScene: "victory",
                    progressIncrease: 30
                }
            ],
            educationalNote: "When the wealthy hide income offshore, ordinary taxpayers and public services bear the cost."
        },

        victory: {
            text: `INVESTIGATION COMPLETE
            THE PANAMA PAPERS EXPOSED

            🏆 YOUR INVESTIGATION UNCOVERED:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            ✓ 11.5 million documents analyzed
            ✓ Global corruption network exposed
            ✓ World leaders held accountable
            ✓ $1.36 billion in taxes recovered
            ✓ Reforms implemented worldwide
            ✓ Ongoing impact on financial transparency
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

            THE LEGACY:
            The Panama Papers changed investigative journalism
            forever. They proved that global collaboration can
            expose corruption that no single outlet could tackle alone.

            JOHN DOE'S FINAL WORDS:
            "The revolution will be digitized. The wealth of the
            few at the expense of the many will eventually end."

            The fight for transparency continues.

            Thank you for investigating the PANAMA PAPERS.`,
            image: "investigation_complete",
            imagePrompt: "Global journalism collaboration victory, transparency achieved, historic investigation",
            sources: [
                "ICIJ Panama Papers final report",
                "John Doe manifesto",
                "Pulitzer Prize documentation"
            ],
            choices: [],
            educationalNote: "The Panama Papers won the Pulitzer Prize and led to the largest journalism collaboration in history."
        },

        mainMenu: {
            text: `Returning to case selection...`,
            image: "investigation_complete",
            choices: []
        },

        // John Doe - The Anonymous Source
        john_doe_identity: {
            text: `JOHN DOE - THE ANONYMOUS SOURCE

Who leaked 2.6 terabytes of data?

🕵️ THE MYSTERY:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Identity remains unknown
• No financial motive stated
• Communicated only through encrypted channels
• Rejected any payment
• Still anonymous as of 2024
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 JOHN DOE'S MANIFESTO:
"I decided to expose Mossack Fonseca because I thought its founders, employees and clients should have to answer for their roles in these crimes."

"Income inequality is one of the defining issues of our time."

"The revolution will be digitized."

🎯 MOTIVATION STATED:
• Not seeking asylum
• Not seeking payment
• Motivated by public interest
• Believes in accountability

Unlike Snowden, John Doe chose to remain completely anonymous.`,
            image: "john_doe_anonymous",
            imagePrompt: "Anonymous figure, encrypted communications, whistleblower mystery, digital shadows",
            sources: ["John Doe manifesto", "ICIJ communications"],
            choices: [
                {
                    text: "See how the leak happened",
                    nextScene: "leak_mechanics",
                    progressIncrease: 20
                },
                {
                    text: "Examine ICIJ collaboration",
                    nextScene: "icij_collaboration",
                    progressIncrease: 20
                },
                {
                    text: "Return to investigation",
                    nextScene: "investigation_begins",
                    progressIncrease: 15
                }
            ],
            educationalNote: "John Doe remains the only major leaker whose identity has never been discovered or revealed."
        },

        leak_mechanics: {
            text: `HOW THE LEAK HAPPENED

The largest data breach in journalism history:

💻 THE LEAK:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• 2.6 terabytes of data
• Leaked over several months in 2015
• Transmitted through encrypted channels
• Received by Süddeutsche Zeitung reporters
• Shared with ICIJ for global investigation
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 THE DATA:
• 4.8 million emails
• 3 million database entries
• 2.1 million PDFs
• 1.2 million images
• 320,000 text documents
• 40 years of records

🔐 SECURITY:
• All communications encrypted
• Air-gapped computers used
• Data stored on secure servers
• Source identity protected

The leak was so large it crashed servers when first downloaded.`,
            image: "data_leak_mechanics",
            imagePrompt: "Massive encrypted data transfer, terabytes of files, secure journalism infrastructure",
            sources: ["ICIJ infrastructure reports", "Journalist interviews"],
            choices: [
                {
                    text: "See ICIJ collaboration",
                    nextScene: "icij_collaboration",
                    progressIncrease: 20
                },
                {
                    text: "Learn about source protection",
                    nextScene: "source_protection",
                    progressIncrease: 15
                },
                {
                    text: "Start analyzing data",
                    nextScene: "investigation_begins",
                    progressIncrease: 20
                }
            ],
            educationalNote: "The Panama Papers leak was larger than WikiLeaks, Snowden, and all previous major leaks combined."
        },

        icij_collaboration: {
            text: `THE ICIJ COLLABORATION

Largest journalism collaboration in history:

🌍 INTERNATIONAL CONSORTIUM:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• 370 journalists
• 107 media organizations
• 80 countries
• 1 year of secret work
• Simultaneous global publication
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📰 MAJOR PARTNERS:
• Süddeutsche Zeitung (Germany)
• The Guardian (UK)
• BBC (UK)
• Le Monde (France)
• La Nación (Argentina)
• Asahi Shimbun (Japan)
• Many others worldwide

🔧 TECHNOLOGY:
• Secure encrypted platform
• Shared searchable database
• Real-time collaboration tools
• Video conferencing for coordination

📋 METHODOLOGY:
Each outlet investigated local angles while sharing findings globally. No single government could suppress the story.

Journalism at unprecedented scale.`,
            image: "icij_collaboration",
            imagePrompt: "Global newsroom network, journalists collaborating worldwide, ICIJ headquarters, international investigation",
            sources: ["ICIJ methodology reports", "Partner organization statements"],
            choices: [
                {
                    text: "See the publication strategy",
                    nextScene: "global_publication",
                    progressIncrease: 25
                },
                {
                    text: "Learn about source protection",
                    nextScene: "source_protection",
                    progressIncrease: 15
                },
                {
                    text: "Start investigating stories",
                    nextScene: "world_leaders_exposed",
                    progressIncrease: 25
                }
            ],
            educationalNote: "The ICIJ won the Pulitzer Prize for the Panama Papers and has continued exposing offshore secrecy with the Paradise and Pandora Papers."
        },

        source_protection: {
            text: `SOURCE PROTECTION

How journalists kept John Doe safe:

🔒 SECURITY MEASURES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• End-to-end encryption for all communications
• No identifying metadata collected
• Air-gapped computers for sensitive work
• Physical security for data storage
• Need-to-know basis even among journalists
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 LEGAL PROTECTIONS:
• Source confidentiality laws invoked
• Multiple jurisdictions provided legal cover
• No journalist has ever revealed source
• Even under government pressure

⚠️ THE STAKES:
Mossack Fonseca clients include:
• Intelligence agencies
• Organized crime figures
• Authoritarian governments
• People who have killed for less

💡 THE RESULT:
Years later, John Doe's identity remains unknown. The security worked.`,
            image: "source_protection",
            imagePrompt: "Encrypted communications, journalist security, source protection measures, digital anonymity",
            sources: ["ICIJ security protocols", "Press freedom organizations"],
            choices: [
                {
                    text: "See tragic case of Daphne Caruana Galizia",
                    nextScene: "daphne_caruana_galizia",
                    progressIncrease: 25
                },
                {
                    text: "Continue investigation",
                    nextScene: "world_leaders_exposed",
                    progressIncrease: 25
                },
                {
                    text: "Learn about ICIJ collaboration",
                    nextScene: "icij_collaboration",
                    progressIncrease: 20
                }
            ],
            educationalNote: "The Panama Papers source remains protected because journalists followed strict security protocols."
        },

        daphne_caruana_galizia: {
            text: `DAPHNE CARUANA GALIZIA - MURDERED FOR REPORTING

The journalist killed for investigating Panama Papers connections:

👤 DAPHNE CARUANA GALIZIA (1964-2017):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Maltese investigative journalist
• Led Malta's Panama Papers investigation
• Exposed corruption at highest levels
• Assassinated by car bomb October 16, 2017
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 HER INVESTIGATION:
• Malta's Prime Minister's chief of staff - offshore accounts
• Energy Minister - secret Panama company
• Prime Minister's wife - company owner
• Connections to organized crime

💣 THE ASSASSINATION:
Car bomb detonated near her home. She died instantly.

⚖️ JUSTICE:
• Three men convicted of planting the bomb
• Businessman charged with ordering murder
• Questions about government involvement persist
• Her family continues fighting for full truth

"There are crooks everywhere you look. The situation is desperate." - Her final blog post.`,
            image: "daphne_memorial",
            imagePrompt: "Memorial for murdered journalist, Malta, Panama Papers martyr, press freedom under attack",
            badges: ["courageousAct"],
            sources: ["Daphne Caruana Galizia Foundation", "Malta court records", "ICIJ memorial"],
            choices: [
                {
                    text: "See the Malta connection",
                    nextScene: "malta_corruption",
                    progressIncrease: 25
                },
                {
                    text: "Return to global investigation",
                    nextScene: "world_leaders_exposed",
                    progressIncrease: 20
                },
                {
                    text: "See journalism's dangers",
                    nextScene: "press_freedom_threats",
                    progressIncrease: 20
                }
            ],
            educationalNote: "Daphne Caruana Galizia became a martyr for press freedom. Her murder exposed how dangerous Panama Papers reporting could be."
        },

        malta_corruption: {
            text: `THE MALTA CONNECTION

One of the most damaging Panama Papers revelations:

🇲🇹 MALTA EXPOSED:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Prime Minister's chief of staff - offshore company
• Energy Minister - secret Panama structure
• PM's wife Michelle Muscat - named as company owner
• Payments from Azerbaijan linked to officials
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 THE ELECTROGAS SCANDAL:
• Malta energy deal with Azerbaijan
• Massive payments to offshore companies
• Companies linked to PM's inner circle
• Daphne connected the dots

⚠️ THE COVER-UP:
• Government initially denied everything
• Police investigations stalled
• Journalist murdered mid-investigation
• International pressure forced accountability

⚖️ AFTERMATH:
• PM Joseph Muscat resigned (2020)
• Chief of staff charged with corruption
• Investigation continues
• But many questions remain

Malta shows how Panama Papers corruption touches even small European democracies.`,
            image: "malta_corruption",
            imagePrompt: "Malta government corruption, offshore connections, European scandal, political accountability",
            sources: ["Times of Malta", "EU investigations", "Court proceedings"],
            choices: [
                {
                    text: "See other European scandals",
                    nextScene: "european_fallout",
                    progressIncrease: 20
                },
                {
                    text: "Return to global leaders",
                    nextScene: "world_leaders_exposed",
                    progressIncrease: 20
                },
                {
                    text: "Examine full impact",
                    nextScene: "political_fallout",
                    progressIncrease: 25
                }
            ],
            educationalNote: "Malta's corruption scandal led to the resignation of PM Muscat and ongoing criminal investigations."
        },

        press_freedom_threats: {
            text: `PRESS FREEDOM UNDER THREAT

The Panama Papers show journalism's dangers:

☠️ JOURNALISTS AT RISK:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Daphne Caruana Galizia (Malta) - Killed 2017
Investigating Malta's Panama Papers connections

Ján Kuciak (Slovakia) - Killed 2018
Investigating fraud linked to Panama structures

Plus:
• Legal threats in multiple countries
• Government surveillance of journalists
• Physical intimidation attempts
• Cyberattacks on news organizations
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 THE PATTERN:
Exposing offshore corruption means exposing:
• Organized crime money
• Intelligence agency funds
• Authoritarian regime assets
• People with resources to retaliate

⚖️ PROTECTION NEEDED:
• Journalist protection laws
• International solidarity
• Security training
• Digital protection tools

Investigative journalism is increasingly dangerous.`,
            image: "press_freedom_threats",
            imagePrompt: "Journalists under threat, press freedom under attack, investigative reporting dangers",
            sources: ["Committee to Protect Journalists", "Reporters Without Borders"],
            choices: [
                {
                    text: "Return to investigation",
                    nextScene: "world_leaders_exposed",
                    progressIncrease: 20
                },
                {
                    text: "See source protection",
                    nextScene: "source_protection",
                    progressIncrease: 15
                },
                {
                    text: "Examine legacy",
                    nextScene: "journalism_legacy",
                    progressIncrease: 25
                }
            ],
            educationalNote: "Two journalists investigating Panama Papers-related stories were murdered within 18 months of publication."
        },

        // Putin's Network
        putin_network: {
            text: `PUTIN'S $2 BILLION NETWORK

The Russian president's hidden wealth:

🇷🇺 THE REVELATION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• $2 billion traced through offshore companies
• Money controlled by Putin's close associates
• Cellist Sergei Roldugin - key figure
• Complex web of shell companies
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎻 SERGEI ROLDUGIN:
• Professional cellist, Putin's childhood friend
• Godfather to Putin's daughter
• Officially modest income
• Controls companies worth billions
• No business experience

📄 THE MONEY TRAIL:
• Loans issued and never repaid
• Shares sold at artificially low prices
• Companies receiving Russian state contracts
• Funds flowing through Panama structures

🎯 THE CONCLUSION:
Roldugin is a front man. The money belongs to Putin, hidden behind his trusted friend.

Russia denied everything. But the documents speak clearly.`,
            image: "putin_network",
            imagePrompt: "Putin's offshore wealth network, Russian oligarch connections, hidden billions, Kremlin corruption",
            badges: ["truthSeeker"],
            sources: ["ICIJ Putin investigation", "OCCRP Russian money trails"],
            choices: [
                {
                    text: "See other world leaders",
                    nextScene: "world_leaders_exposed",
                    progressIncrease: 20
                },
                {
                    text: "Examine Russian response",
                    nextScene: "russian_response",
                    progressIncrease: 15
                },
                {
                    text: "See the impact",
                    nextScene: "political_fallout",
                    progressIncrease: 25
                }
            ],
            educationalNote: "Putin was not directly named in the documents but his closest associates controlled billions in offshore assets."
        },

        russian_response: {
            text: `RUSSIA'S RESPONSE

How the Kremlin reacted to exposure:

🇷🇺 RUSSIAN DENIAL:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Called it "Putinophobia"
• Claimed Western intelligence fabrication
• State media attacked journalists
• No domestic investigation launched
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📺 KREMLIN MEDIA:
• Dismissed as CIA plot
• Attacked George Soros funding of ICIJ
• Claimed NATO disinformation campaign
• Refused to address substance

👤 PUTIN'S RESPONSE:
"They are trying to destabilize us from within... They are trying to make us more manageable."

⚠️ RETALIATION:
• Journalists covering story harassed
• Russian ICIJ partners investigated
• Source of leak never pursued by Russia
• Offshore system continues unchanged

Russia's response was denial and attack - not investigation.`,
            image: "russian_response",
            imagePrompt: "Kremlin denial, Russian state media response, propaganda counterattack, disinformation",
            sources: ["Russian media coverage", "Kremlin statements"],
            choices: [
                {
                    text: "See other leader responses",
                    nextScene: "political_fallout",
                    progressIncrease: 25
                },
                {
                    text: "Return to investigation",
                    nextScene: "world_leaders_exposed",
                    progressIncrease: 20
                },
                {
                    text: "Examine sanctions evasion",
                    nextScene: "sanctions_evasion",
                    progressIncrease: 20
                }
            ],
            educationalNote: "Russia's denial of Panama Papers revelations followed its standard playbook of claiming Western conspiracy."
        },

        david_cameron: {
            text: `DAVID CAMERON - THE UK PRIME MINISTER

The British leader caught in the scandal:

🇬🇧 THE REVELATION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Father Ian Cameron ran offshore fund
• Blairmore Holdings based in Panama
• David Cameron held shares until 2010
• Sold shares just before becoming PM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 THE STORY:
• Blairmore never paid UK tax in 30 years
• Used "nominee" directors in Bahamas
• Cameron inherited £300,000 from father
• Unclear how much from offshore fund

💬 CAMERON'S RESPONSE:
• Initially refused to comment
• Then issued multiple clarifying statements
• Admitted benefiting from father's fund
• Released tax returns (first UK PM to do so)
• Denied any wrongdoing

⚖️ THE HYPOCRISY:
Cameron had previously called tax avoidance "morally wrong" while benefiting from family offshore arrangements.

No laws broken - but public trust damaged.`,
            image: "david_cameron",
            imagePrompt: "British Prime Minister under pressure, 10 Downing Street, tax controversy, political scandal",
            sources: ["UK media coverage", "Cameron statements", "ICIJ UK investigation"],
            choices: [
                {
                    text: "See other leaders exposed",
                    nextScene: "world_leaders_exposed",
                    progressIncrease: 20
                },
                {
                    text: "Examine UK reforms",
                    nextScene: "uk_reforms",
                    progressIncrease: 20
                },
                {
                    text: "See political fallout",
                    nextScene: "political_fallout",
                    progressIncrease: 25
                }
            ],
            educationalNote: "Cameron's father's offshore fund embarrassed the PM who had campaigned against tax avoidance."
        },

        uk_reforms: {
            text: `UK REFORMS AFTER PANAMA PAPERS

Britain's response to the scandal:

🇬🇧 REFORMS IMPLEMENTED:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Public beneficial ownership register (first major economy)
• Unexplained Wealth Orders introduced
• HMRC task force created
• Crown Dependencies promised registers
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 RESULTS:
• £325+ million recovered by HMRC
• Multiple investigations opened
• Some prosecutions initiated
• Register created (though with gaps)

⚠️ LIMITATIONS:
• Crown Dependencies delayed compliance
• British Virgin Islands resisted
• London real estate still opaque
• "Scottish Limited Partnerships" loophole
• Enforcement remains weak

📄 ONGOING ISSUES:
• UK overseas territories remain havens
• Company House data quality poor
• Professional enablers rarely punished
• "London laundromat" concerns continue

Progress made, but UK remains part of the problem.`,
            image: "uk_reforms",
            imagePrompt: "British Parliament, financial reform legislation, transparency measures, regulatory response",
            sources: ["UK government announcements", "Transparency International UK"],
            choices: [
                {
                    text: "See global reforms",
                    nextScene: "reforms_implemented",
                    progressIncrease: 20
                },
                {
                    text: "Examine what hasn't changed",
                    nextScene: "system_unchanged",
                    progressIncrease: 20
                },
                {
                    text: "Complete investigation",
                    nextScene: "victory",
                    progressIncrease: 30
                }
            ],
            educationalNote: "The UK created the first major public beneficial ownership register but its overseas territories remain secrecy jurisdictions."
        },

        european_fallout: {
            text: `EUROPEAN POLITICAL FALLOUT

The Panama Papers shook Europe:

🇪🇺 EUROPEAN CONSEQUENCES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ICELAND: PM Sigmundur Gunnlaugsson resigned
SPAIN: Industry Minister José Manuel Soria resigned
MALTA: PM Joseph Muscat resigned (2020)
UK: David Cameron faced intense scrutiny
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🇮🇸 ICELAND'S RESPONSE:
• Mass protests in Reykjavik
• 10% of population demonstrated
• PM resigned within days
• Early elections called

🇪🇸 SPAIN'S SCANDAL:
• Minister had Bahamas company
• Initially denied then admitted
• Resigned after days of pressure

📋 EU RESPONSE:
• Anti-Money Laundering Directive strengthened
• Beneficial ownership registers mandated
• Automatic information exchange expanded

Europe moved faster than most regions on reform.`,
            image: "european_fallout",
            imagePrompt: "European capitals, political protests, ministers resigning, continental scandal",
            sources: ["European media coverage", "EU legislative records"],
            choices: [
                {
                    text: "See reforms implemented",
                    nextScene: "reforms_implemented",
                    progressIncrease: 20
                },
                {
                    text: "Compare to other regions",
                    nextScene: "global_response_compared",
                    progressIncrease: 20
                },
                {
                    text: "Complete investigation",
                    nextScene: "victory",
                    progressIncrease: 30
                }
            ],
            educationalNote: "Iceland's response was the fastest - the PM resigned within days after massive public protests."
        },

        // Subsequent Leaks
        paradise_papers: {
            text: `THE PARADISE PAPERS (2017)

Another massive leak one year later:

📄 PARADISE PAPERS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• 13.4 million documents
• Leaked from Appleby law firm
• Bermuda, Cayman Islands focus
• Released November 2017
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🌟 KEY REVELATIONS:
• Queen Elizabeth's offshore investments
• US Commerce Secretary Wilbur Ross - Russian ties
• Apple's offshore tax structure
• Nike's tax avoidance schemes
• Numerous celebrities and politicians

🎯 NEW FINDINGS:
• Showed offshore system continued post-Panama
• Different law firm, same practices
• More sophisticated structures revealed
• Corporate tax avoidance highlighted

💡 THE LESSON:
Mossack Fonseca wasn't unique. The offshore industry is vast and continues operating.

One leak wasn't enough.`,
            image: "paradise_papers",
            imagePrompt: "Second major leak, Paradise Papers documents, continued offshore exposure, sequel investigation",
            sources: ["ICIJ Paradise Papers database", "Appleby documents"],
            choices: [
                {
                    text: "See the Pandora Papers",
                    nextScene: "pandora_papers",
                    progressIncrease: 20
                },
                {
                    text: "Compare to Panama Papers",
                    nextScene: "leaks_compared",
                    progressIncrease: 15
                },
                {
                    text: "See ongoing impact",
                    nextScene: "journalism_legacy",
                    progressIncrease: 25
                }
            ],
            educationalNote: "The Paradise Papers showed that offshore secrecy continued largely unchanged after the Panama Papers."
        },

        pandora_papers: {
            text: `THE PANDORA PAPERS (2021)

The largest leak yet:

📄 PANDORA PAPERS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• 11.9 million documents
• 14 offshore service providers
• 600 journalists, 150 outlets
• Released October 2021
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🌟 KEY REVELATIONS:
• King Abdullah II of Jordan - $100M properties
• Czech PM Andrej Babiš - French chateau
• Pakistan PM Imran Khan's inner circle
• Kenya President Uhuru Kenyatta family
• 35 current/former leaders exposed

🇺🇸 US FOCUS:
• South Dakota trusts highlighted
• US now major secrecy jurisdiction
• Trust industry enables tax avoidance
• Domestic haven exposed

💡 THE PATTERN:
Five years after Panama Papers:
• Same practices continue
• New jurisdictions emerge
• Wealthy still hiding assets
• System adapts but survives

Offshore secrecy is resilient.`,
            image: "pandora_papers",
            imagePrompt: "Latest major leak, Pandora Papers, continuing offshore exposure, 2021 investigation",
            sources: ["ICIJ Pandora Papers database", "2021 publication"],
            badges: ["truthSeeker"],
            choices: [
                {
                    text: "See US as tax haven",
                    nextScene: "us_tax_haven",
                    progressIncrease: 25
                },
                {
                    text: "Compare all leaks",
                    nextScene: "leaks_compared",
                    progressIncrease: 20
                },
                {
                    text: "See ongoing fight",
                    nextScene: "ongoing_fight",
                    progressIncrease: 25
                }
            ],
            educationalNote: "The Pandora Papers revealed the United States has become a major tax haven, particularly through South Dakota trusts."
        },

        us_tax_haven: {
            text: `THE UNITED STATES AS TAX HAVEN

America's role in offshore secrecy:

🇺🇸 US SECRECY JURISDICTIONS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Delaware - 1.5 million companies, minimal disclosure
• Nevada - No corporate income tax, privacy
• Wyoming - Anonymous LLCs
• South Dakota - Dynasty trusts forever
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 BY THE NUMBERS:
• $4 trillion in foreign-held US securities
• Delaware has more companies than people
• South Dakota trusts tripled since 2011
• No federal beneficial ownership register (until 2024)

📄 THE IRONY:
• US pressures other countries on transparency
• While offering secrecy services domestically
• Foreign wealth flows to US havens
• "America First" in secrecy

⚖️ RECENT CHANGES:
Corporate Transparency Act (2024) requires beneficial ownership disclosure, but implementation is slow.

America lectures the world while being part of the problem.`,
            image: "us_tax_haven",
            imagePrompt: "Delaware corporate secrecy, American tax haven, domestic offshore services, state competition",
            sources: ["Tax Justice Network", "Pandora Papers US coverage"],
            choices: [
                {
                    text: "See reform efforts",
                    nextScene: "reforms_implemented",
                    progressIncrease: 20
                },
                {
                    text: "Examine what hasn't changed",
                    nextScene: "system_unchanged",
                    progressIncrease: 20
                },
                {
                    text: "Complete investigation",
                    nextScene: "victory",
                    progressIncrease: 30
                }
            ],
            educationalNote: "The United States ranks as one of the world's top financial secrecy jurisdictions according to the Tax Justice Network."
        },

        leaks_compared: {
            text: `COMPARING THE MAJOR LEAKS

How the offshore investigations compare:

📊 THE BIG THREE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PANAMA PAPERS (2016):
• 11.5 million documents
• One law firm (Mossack Fonseca)
• 2.6 terabytes
• First massive collaboration

PARADISE PAPERS (2017):
• 13.4 million documents
• Appleby law firm + corporate registries
• More corporate focus
• Queen Elizabeth, Apple exposed

PANDORA PAPERS (2021):
• 11.9 million documents
• 14 service providers
• US tax haven focus
• Most leaders exposed
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💡 THE PATTERN:
Each leak shows:
• Offshore secrecy continues
• New providers replace old
• Same clients, new structures
• System adapts to exposure

Three major leaks haven't ended offshore secrecy.`,
            image: "leaks_compared",
            imagePrompt: "Three major leaks comparison, Panama Paradise Pandora Papers, offshore investigation timeline",
            sources: ["ICIJ leak databases", "Comparative analysis"],
            choices: [
                {
                    text: "See ongoing fight",
                    nextScene: "ongoing_fight",
                    progressIncrease: 25
                },
                {
                    text: "Examine reforms",
                    nextScene: "reforms_implemented",
                    progressIncrease: 20
                },
                {
                    text: "Complete investigation",
                    nextScene: "victory",
                    progressIncrease: 30
                }
            ],
            educationalNote: "The ICIJ has published three massive offshore leaks, collectively exposing how the global elite hide their wealth."
        },

        // Additional Topics
        sanctions_evasion: {
            text: `SANCTIONS EVASION EXPOSED

Panama Papers revealed how sanctions are evaded:

🚫 SANCTIONED ENTITIES FOUND:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• North Korean front companies
• Iranian businesses evading sanctions
• Syrian regime-linked entities
• Russian sanctioned individuals
• Venezuelan kleptocrats
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 HOW IT WORKS:
1. Create shell company in Panama
2. Use nominee directors to hide ownership
3. Open bank accounts in company name
4. Conduct transactions through layers
5. Real owner invisible to sanctions enforcers

🎯 EXAMPLES FOUND:
• North Korean arms dealers
• Syrian barrel bomb suppliers
• Russian oligarchs post-Crimea
• Iranian nuclear-linked entities

⚠️ THE PROBLEM:
Sanctions only work if ownership is visible. Offshore secrecy defeats sanctions enforcement.

Mossack Fonseca helped sanctioned entities access the financial system.`,
            image: "sanctions_evasion",
            imagePrompt: "Sanctions evasion schemes, shell company networks, international enforcement challenges",
            sources: ["ICIJ sanctions analysis", "Treasury enforcement records"],
            choices: [
                {
                    text: "See criminal connections",
                    nextScene: "criminal_connections",
                    progressIncrease: 20
                },
                {
                    text: "Examine banking role",
                    nextScene: "banking_complicity",
                    progressIncrease: 20
                },
                {
                    text: "See reforms needed",
                    nextScene: "reforms_implemented",
                    progressIncrease: 20
                }
            ],
            educationalNote: "Panama Papers revealed extensive sanctions evasion by countries including North Korea, Iran, and Syria."
        },

        criminal_connections: {
            text: `CRIMINAL CONNECTIONS

The Panama Papers exposed organized crime's offshore presence:

☠️ CRIMINALS USING MOSSACK FONSECA:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Sinaloa cartel money laundering
• Russian mafia structures
• Italian organized crime
• Human trafficking proceeds
• Arms dealing profits
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 FIFA CORRUPTION:
• Offshore accounts for bribery payments
• World Cup bid corruption
• Marketing rights kickbacks
• All flowing through Panama companies

🔫 ARMS DEALERS:
Companies linked to:
• Conflict zones weapons sales
• Sanctions evasion
• Human rights abusers

💊 DRUG TRAFFICKING:
• Mexican cartel proceeds laundered
• Colombian drug money cleaned
• Distribution network financing

The offshore system serves criminals alongside the merely tax-averse.`,
            image: "criminal_connections",
            imagePrompt: "Criminal money laundering, organized crime offshore, cartel proceeds, corrupt networks",
            sources: ["ICIJ criminal analysis", "Law enforcement investigations"],
            choices: [
                {
                    text: "See FIFA corruption",
                    nextScene: "fifa_corruption",
                    progressIncrease: 20
                },
                {
                    text: "Examine money laundering",
                    nextScene: "money_laundering_network",
                    progressIncrease: 20
                },
                {
                    text: "See enforcement response",
                    nextScene: "legal_consequences",
                    progressIncrease: 25
                }
            ],
            educationalNote: "Panama Papers revealed that the offshore system serves drug cartels and organized crime as readily as wealthy tax avoiders."
        },

        fifa_corruption: {
            text: `FIFA CORRUPTION EXPOSED

The world soccer body's offshore secrets:

⚽ FIFA IN THE PAPERS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Bribery payments through shell companies
• World Cup bid corruption
• Marketing rights kickbacks
• Officials' hidden wealth
• Decades of corrupt payments documented
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📄 KEY FIGURES:
• Eugenio Figueredo - $5 million in bribes traced
• Jack Warner - Millions through Trinidad companies
• Multiple FIFA executives with offshore accounts

💰 THE SCHEMES:
• Companies received TV rights payments
• Millions distributed to officials
• All hidden behind corporate veils
• Decades of systematic corruption

⚖️ ENFORCEMENT:
Panama Papers evidence contributed to:
• US indictments of FIFA officials
• Swiss investigations
• Multiple convictions
• FIFA governance reforms

Soccer's beautiful game had an ugly financial underside.`,
            image: "fifa_corruption",
            imagePrompt: "FIFA corruption scandal, soccer officials bribery, World Cup scandal, sports corruption",
            sources: ["US DOJ FIFA indictments", "Swiss investigations"],
            choices: [
                {
                    text: "See other criminal connections",
                    nextScene: "criminal_connections",
                    progressIncrease: 20
                },
                {
                    text: "Examine legal consequences",
                    nextScene: "legal_consequences",
                    progressIncrease: 25
                },
                {
                    text: "Complete investigation",
                    nextScene: "victory",
                    progressIncrease: 30
                }
            ],
            educationalNote: "Panama Papers evidence contributed to the prosecution of FIFA officials in what US prosecutors called 'rampant, systemic' corruption."
        },

        global_response_compared: {
            text: `COMPARING GLOBAL RESPONSES

How different countries reacted to the Panama Papers:

🌍 RESPONSE COMPARISON:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STRONG RESPONSE:
• Iceland - PM resigned, reforms enacted
• UK - Beneficial ownership register created
• Germany - Tax investigations launched
• Australia - $322M recovered

WEAK RESPONSE:
• Russia - Denied, attacked journalists
• China - Censored coverage
• UAE - No investigation
• Panama - Defended offshore industry
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 FACTORS IN RESPONSE:
• Press freedom - Free press = stronger response
• Rule of law - Independent courts = accountability
• Political will - Leadership matters
• Public pressure - Protests drive action

💡 THE PATTERN:
Democracies with free press responded better. Authoritarian states suppressed information.

Global inequality in accountability mirrors economic inequality.`,
            image: "global_response_compared",
            imagePrompt: "World map showing different responses, accountability spectrum, reform comparison",
            sources: ["ICIJ impact analysis", "Transparency International assessments"],
            choices: [
                {
                    text: "See reforms implemented",
                    nextScene: "reforms_implemented",
                    progressIncrease: 20
                },
                {
                    text: "Examine what hasn't changed",
                    nextScene: "system_unchanged",
                    progressIncrease: 20
                },
                {
                    text: "Complete investigation",
                    nextScene: "victory",
                    progressIncrease: 30
                }
            ],
            educationalNote: "Response to the Panama Papers varied dramatically based on press freedom and rule of law in each country."
        },

        ongoing_fight: {
            text: `THE ONGOING FIGHT

The battle for financial transparency continues:

⚔️ CURRENT CAMPAIGNS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Beneficial ownership registers worldwide
• Closing US secrecy jurisdictions
• Strengthening anti-money laundering
• Taxing offshore wealth
• Corporate transparency rules
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 PROGRESS:
• 100+ countries share tax information
• EU requires ownership registers
• UK register is public
• US finally passing requirements (2024)

⚠️ RESISTANCE:
• Offshore industry lobbies against reform
• Tax haven jurisdictions resist pressure
• Wealthy fund opposition campaigns
• Enablers protect their business model

💡 THE CHALLENGE:
Money flows globally but regulation is national. Closing loopholes requires international cooperation.

The wealthy will always find new havens until the system fundamentally changes.`,
            image: "ongoing_fight",
            imagePrompt: "Financial transparency campaign, reform advocates, ongoing battle against offshore secrecy",
            sources: ["Tax Justice Network", "ICIJ ongoing work"],
            choices: [
                {
                    text: "See journalism's legacy",
                    nextScene: "journalism_legacy",
                    progressIncrease: 25
                },
                {
                    text: "Complete investigation",
                    nextScene: "victory",
                    progressIncrease: 30
                }
            ],
            educationalNote: "The fight for financial transparency continues, with progress made but many loopholes remaining."
        },

        journalism_legacy: {
            text: `THE JOURNALISM LEGACY

How the Panama Papers changed journalism:

🏆 AWARDS AND RECOGNITION:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Pulitzer Prize for Explanatory Reporting
• George Polk Award
• Investigative Reporters and Editors Award
• European Press Prize
• Countless national awards worldwide
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📰 JOURNALISM INNOVATIONS:
• Proven model for global collaboration
• Secure communication infrastructure
• Data journalism techniques
• Cross-border investigation methods

🌍 CONTINUING IMPACT:
• ICIJ continues investigating offshore secrecy
• Paradise Papers (2017), Pandora Papers (2021)
• Methodology adopted by others
• Press freedom advocacy strengthened

💡 THE LESSON:
• Big stories require collaboration
• Technology enables secure journalism
• Public interest journalism can work
• Transparency demands persistence

The Panama Papers proved journalism can still change the world.`,
            image: "journalism_legacy",
            imagePrompt: "Journalism awards, Pulitzer Prize, global collaboration model, press freedom triumph",
            sources: ["Pulitzer Prize citation", "ICIJ methodology"],
            badges: ["courageousAct"],
            choices: [
                {
                    text: "Complete investigation",
                    nextScene: "victory",
                    progressIncrease: 40
                }
            ],
            educationalNote: "The Panama Papers won the Pulitzer Prize and established a new model for global investigative journalism collaboration."
        }
    }
};

// Make it available globally
window.PanamaPapersStoryExpanded = PanamaPapersStoryExpanded;
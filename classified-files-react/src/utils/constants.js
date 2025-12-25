// Game Constants

export const GAME_CONFIG = {
  // Typewriter settings
  TYPEWRITER_SPEED: 50,
  TYPEWRITER_SKIP_DELAY: 100,

  // Progress settings
  MAX_PROGRESS: 100,

  // Badge thresholds
  PERFECT_KNOWLEDGE_THRESHOLD: 3,
  EVIDENCE_MASTER_THRESHOLD: 5,
  FACT_FINDER_THRESHOLD: 3,

  // Purchase validity (days)
  PURCHASE_VALIDITY_DAYS: 365,
}

export const SEAL_STATUS = {
  FREE: 'free',
  SEALED: 'sealed',
  UNSEALED: 'unsealed',
  COMING_SOON: 'coming_soon',
  // Deprecated - for backwards compatibility
  OPEN: 'free',
  PREMIUM: 'sealed',
}

export const CASE_PRICING = {
  DEFAULT_PRICE: 4.99,
  CURRENCY: 'USD',
}

// Case configuration - which cases are available/sealed
export const CASES_CONFIG = {
  uap: {
    id: 'uap',
    title: 'UAP Investigation',
    description: 'Investigate Unidentified Aerial Phenomena reports from Pentagon AARO',
    sealStatus: SEAL_STATUS.FREE,
    releaseDate: 'FREE - Always Available',
    difficulty: 2,
  },
  epstein: {
    id: 'epstein',
    title: 'Epstein Investigation',
    description: 'Uncover the network of power and influence',
    sealStatus: SEAL_STATUS.SEALED,
    price: '$4.99',
    difficulty: 4,
  },
  jfk: {
    id: 'jfk',
    title: 'JFK Assassination',
    description: 'November 22, 1963 - What really happened?',
    sealStatus: SEAL_STATUS.SEALED,
    price: '$4.99',
    difficulty: 4,
  },
  september11: {
    id: 'september11',
    title: '9/11 Commission',
    description: 'The Day That Changed Everything',
    sealStatus: SEAL_STATUS.SEALED,
    price: '$4.99',
    difficulty: 5,
  },
  'diddy-case': {
    id: 'diddy-case',
    title: 'Diddy Federal Case',
    description: 'RICO Investigation into allegations',
    sealStatus: SEAL_STATUS.SEALED,
    price: '$4.99',
    difficulty: 3,
  },
  hunterlaptop: {
    id: 'hunterlaptop',
    title: 'Hunter Biden Laptop',
    description: 'Political Controversy Examined',
    sealStatus: SEAL_STATUS.COMING_SOON,
    releaseDate: 'FREE - August 11, 2025',
    difficulty: 3,
  },
  watergate: {
    id: 'watergate',
    title: 'Watergate Files',
    description: 'The Nixon Tapes',
    sealStatus: SEAL_STATUS.COMING_SOON,
    releaseDate: 'Coming Soon',
    difficulty: 3,
  },
  'pentagon-papers': {
    id: 'pentagon-papers',
    title: 'Pentagon Papers',
    description: 'Vietnam War Secrets',
    sealStatus: SEAL_STATUS.COMING_SOON,
    releaseDate: 'Coming Soon',
    difficulty: 4,
  },
  mkultra: {
    id: 'mkultra',
    title: 'MKUltra Files',
    description: 'CIA Mind Control Program',
    sealStatus: SEAL_STATUS.COMING_SOON,
    releaseDate: 'Coming Soon',
    difficulty: 4,
  },
  cointelpro: {
    id: 'cointelpro',
    title: 'COINTELPRO',
    description: 'FBI Surveillance Programs',
    sealStatus: SEAL_STATUS.COMING_SOON,
    releaseDate: 'Coming Soon',
    difficulty: 3,
  },
  snowden: {
    id: 'snowden',
    title: 'Snowden Revelations',
    description: 'NSA Mass Surveillance',
    sealStatus: SEAL_STATUS.COMING_SOON,
    releaseDate: 'Coming Soon',
    difficulty: 4,
  },
  'iran-contra': {
    id: 'iran-contra',
    title: 'Iran-Contra Affair',
    description: 'Arms for Hostages',
    sealStatus: SEAL_STATUS.COMING_SOON,
    releaseDate: 'Coming Soon',
    difficulty: 4,
  },
  'panama-papers': {
    id: 'panama-papers',
    title: 'Panama Papers',
    description: 'Global Tax Evasion Exposed',
    sealStatus: SEAL_STATUS.COMING_SOON,
    releaseDate: 'Coming Soon',
    difficulty: 3,
  },
  tuskegee: {
    id: 'tuskegee',
    title: 'Tuskegee Experiment',
    description: 'Unethical Medical Research',
    sealStatus: SEAL_STATUS.COMING_SOON,
    releaseDate: 'Coming Soon',
    difficulty: 3,
  },
  paperclip: {
    id: 'paperclip',
    title: 'Operation Paperclip',
    description: 'Nazi Scientists in America',
    sealStatus: SEAL_STATUS.COMING_SOON,
    releaseDate: 'Coming Soon',
    difficulty: 4,
  },
}

export const ROUTES = {
  HOME: '/',
  CASES: '/cases',
  GAME: '/game',
  PURCHASE: '/purchase',
  PAYMENT_SUCCESS: '/payment-success',
  PAYMENT_CANCEL: '/payment-cancel',
}

export const STORAGE_KEYS = {
  GAME_STATE: 'classifiedFiles_gameState',
  PURCHASED_CASES: 'classifiedFiles_purchasedCases',
  SETTINGS: 'classifiedFiles_settings',
  CURRENT_STORY: 'classifiedFiles_currentStory',
}

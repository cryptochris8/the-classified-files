/**
 * Unified configuration for The Classified Files
 *
 * Consolidates game-config.js, stripe-prices.js, and payment-config.js
 */

import type { StoryKey } from '@/types/story.types';

/**
 * Game configuration constants
 */
export const GAME_CONFIG = {
  /** Typewriter text speed in milliseconds per character */
  typewriterSpeed: 50,
  /** Maximum investigation progress value */
  maxProgress: 100,
  /** Loading screen display duration in milliseconds */
  loadingScreenDuration: 3000,
  /** Loading delay before showing game content */
  loadingDelay: 3000,
  /** Perfect knowledge badge threshold */
  perfectKnowledgeThreshold: 3,
  /** Fact finder badge threshold */
  factFinderThreshold: 3,
  /** Evidence master badge threshold */
  evidenceMasterThreshold: 5,
  /** Purchase validity in days */
  purchaseValidityDays: 365,
  /** Default price for premium content */
  defaultPrice: 4.99,
} as const;

/**
 * Payment server URLs
 */
export const PAYMENT_CONFIG = {
  /** Railway production server */
  serverUrl:
    import.meta.env.VITE_PAYMENT_SERVER_URL ||
    'https://the-classified-files-production-1c78.up.railway.app',
  /** Stripe publishable key */
  stripePublishableKey: import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || '',
  /** RevenueCat iOS API key */
  revenueCatIosKey: import.meta.env.VITE_REVENUECAT_IOS_API_KEY || '',
} as const;

/**
 * Stripe price IDs for each case
 */
export const STRIPE_PRICES: Record<string, string> = {
  epstein: 'price_1Si6m0PmM4NpiDNLMSLjKv2g',
  jfk: 'price_1Si6okPmM4NpiDNLIGyIv6CW',
  september11: 'price_1Si6q7PmM4NpiDNL1e3KPQ5n',
  hunterlaptop: 'price_1SjU2GPmM4NpiDNLe4KaZ1f9',
  watergate: 'price_1Si6r6PmM4NpiDNLfVxqabKp',
  'pentagon-papers': 'price_1Si6rePmM4NpiDNLLqHxbfnH',
  mkultra: 'price_1Si6sDPmM4NpiDNLrqBl2hwO',
  'panama-papers': 'price_1Si6snPmM4NpiDNLSmhJvcXU',
  'iran-contra': 'price_1Si6tKPmM4NpiDNLAH2P67sh',
  cointelpro: 'price_1Si6tuPmM4NpiDNLyROFQKpT',
  snowden: 'price_1Si6uYPmM4NpiDNLkNYNljqR',
  tuskegee: 'price_1Si6v7PmM4NpiDNLrx2HWFXI',
  paperclip: 'price_1Si6vePmM4NpiDNLRUJLqePR',
  diddy: 'price_1Si6wIPmM4NpiDNLYDgqWLHJ',
  'diddy-case': 'price_1Si6wIPmM4NpiDNLYDgqWLHJ',
  'charlie-kirk': 'price_1Si6x0PmM4NpiDNLHxCqjnGa',
} as const;

/**
 * Case seal status and pricing
 */
export type SealStatus = false | 'premium' | 'coming_soon';

export const CASE_STATUS: Record<StoryKey, SealStatus> = {
  epstein: 'premium',
  jfk: 'premium',
  uap: false, // FREE
  september11: 'premium',
  hunterlaptop: 'premium',
  watergate: 'premium',
  'pentagon-papers': 'premium',
  mkultra: 'premium',
  'panama-papers': 'premium',
  'iran-contra': 'premium',
  cointelpro: 'premium',
  snowden: 'premium',
  tuskegee: 'premium',
  paperclip: 'premium',
  'diddy-case': 'premium',
  'charlie-kirk': 'premium',
} as const;

/**
 * Release dates / status display text
 */
export const RELEASE_DATES: Record<StoryKey, string> = {
  epstein: 'Premium Content - $4.99',
  jfk: 'Premium Content - $4.99',
  uap: 'FREE - Always Available',
  september11: 'Premium Content - $4.99',
  hunterlaptop: 'Premium Content - $4.99',
  watergate: 'Premium Content - $4.99',
  'pentagon-papers': 'Premium Content - $4.99',
  mkultra: 'Premium Content - $4.99',
  'panama-papers': 'Premium Content - $4.99',
  'iran-contra': 'Premium Content - $4.99',
  cointelpro: 'Premium Content - $4.99',
  snowden: 'Premium Content - $4.99',
  tuskegee: 'Premium Content - $4.99',
  paperclip: 'Premium Content - $4.99',
  'diddy-case': 'Premium Content - $4.99',
  'charlie-kirk': 'Premium Content - $4.99',
} as const;

/**
 * Story display names
 */
export const STORY_NAMES: Record<StoryKey, string> = {
  epstein: 'Epstein Investigation',
  jfk: 'JFK Assassination',
  uap: 'UAP Investigation',
  september11: '9/11 Commission Investigation',
  hunterlaptop: 'Hunter Biden Laptop Investigation',
  watergate: 'The Watergate Files',
  'pentagon-papers': 'The Pentagon Papers',
  mkultra: 'MKUltra Files',
  'panama-papers': 'Panama Papers',
  'iran-contra': 'Iran-Contra Affair',
  cointelpro: 'COINTELPRO Files',
  snowden: 'Snowden Revelations',
  tuskegee: 'Tuskegee Experiment',
  paperclip: 'Operation Paperclip',
  'diddy-case': 'Diddy Federal Case',
  'charlie-kirk': 'Charlie Kirk Assassination',
} as const;

/**
 * LocalStorage keys
 */
export const STORAGE_KEYS = {
  gameState: 'classifiedFiles_gameState',
  purchasedCases: 'classifiedFiles_purchasedCases',
  settings: 'classifiedFiles_settings',
  currentStory: 'classifiedFiles_currentStory',
  purchaseToken: 'purchaseToken',
  purchaseData: 'purchaseData',
} as const;

/**
 * Feature flags
 */
export const FEATURES = {
  offlineMode: true,
  speechSynthesis: true,
  miniGames: true,
  ads: import.meta.env.PROD,
} as const;

/**
 * Check if we're in development mode
 */
export function isDevelopment(): boolean {
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;
    return (
      hostname === 'localhost' ||
      hostname === '127.0.0.1' ||
      hostname === '' ||
      window.location.protocol === 'file:'
    );
  }
  return import.meta.env.DEV;
}

/**
 * Check if a case is sealed (requires purchase)
 */
export function isCaseSealed(caseKey: StoryKey): SealStatus {
  if (isDevelopment()) {
    return false;
  }
  return CASE_STATUS[caseKey] ?? 'premium';
}

/**
 * Get the Stripe price ID for a case
 */
export function getStripePriceId(caseKey: string): string | undefined {
  return STRIPE_PRICES[caseKey];
}

/**
 * Get release date / status text for a case
 */
export function getReleaseDate(caseKey: StoryKey): string {
  return RELEASE_DATES[caseKey] ?? 'Premium Content - $4.99';
}

/**
 * Get display name for a case
 */
export function getStoryName(caseKey: StoryKey): string {
  return STORY_NAMES[caseKey] ?? caseKey;
}

/**
 * Get the payment success URL
 */
export function getSuccessUrl(): string {
  const base = window.location.origin + window.location.pathname.replace(/\/[^/]*$/, '');
  return `${base}/payment-success.html`;
}

/**
 * Get the payment cancel URL
 */
export function getCancelUrl(): string {
  const base = window.location.origin + window.location.pathname.replace(/\/[^/]*$/, '');
  return `${base}/payment-cancel.html`;
}

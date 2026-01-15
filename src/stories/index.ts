/**
 * Story Loader Module - Lazy loading and caching for story files
 *
 * This module provides:
 * - Lazy loading of story files to reduce initial bundle size
 * - Caching to prevent duplicate loads
 * - Type-safe story access
 * - Fallback to global variables for legacy compatibility
 */

import type { Story, StoryKey } from '@/types';
import { logger } from '@utils/logger';

// Story loader function type - used for future dynamic imports
// type StoryLoader = () => Promise<{ default: Story }>;

/**
 * Story cache to prevent duplicate loads
 */
const storyCache = new Map<StoryKey, Story>();

/**
 * Loading promises to prevent duplicate requests
 */
const loadingPromises = new Map<StoryKey, Promise<Story | null>>();

/**
 * Story metadata for display
 */
export interface StoryInfo {
  key: StoryKey;
  name: string;
  globalVar: string;
  file: string;
}

/**
 * All available stories with metadata
 */
export const STORY_INFO: Record<StoryKey, StoryInfo> = {
  epstein: {
    key: 'epstein',
    name: 'Epstein Investigation',
    globalVar: 'EpsteinStoryExpanded',
    file: 'epstein-story-expanded.js',
  },
  jfk: {
    key: 'jfk',
    name: 'JFK Assassination',
    globalVar: 'JFKStoryExpanded',
    file: 'jfk-story-expanded.js',
  },
  uap: {
    key: 'uap',
    name: 'UAP Investigation',
    globalVar: 'UAPStoryExpanded',
    file: 'uap-story-expanded.js',
  },
  september11: {
    key: 'september11',
    name: '9/11 Commission Investigation',
    globalVar: 'September11CommissionExpanded',
    file: 'september11-commission-expanded.js',
  },
  hunterlaptop: {
    key: 'hunterlaptop',
    name: 'Hunter Biden Laptop Investigation',
    globalVar: 'HunterBidenLaptopStoryExpanded',
    file: 'hunter-biden-laptop-story-expanded.js',
  },
  watergate: {
    key: 'watergate',
    name: 'The Watergate Files',
    globalVar: 'WatergateStoryExpanded',
    file: 'watergate-story-expanded.js',
  },
  'pentagon-papers': {
    key: 'pentagon-papers',
    name: 'The Pentagon Papers',
    globalVar: 'PentagonPapersStoryExpanded',
    file: 'pentagon-papers-story-expanded.js',
  },
  mkultra: {
    key: 'mkultra',
    name: 'MKUltra Files',
    globalVar: 'MKUltraStoryExpanded',
    file: 'mkultra-story-expanded.js',
  },
  'panama-papers': {
    key: 'panama-papers',
    name: 'Panama Papers',
    globalVar: 'PanamaPapersStoryExpanded',
    file: 'panama-papers-story-expanded.js',
  },
  'iran-contra': {
    key: 'iran-contra',
    name: 'Iran-Contra Affair',
    globalVar: 'IranContraStoryExpanded',
    file: 'iran-contra-story-expanded.js',
  },
  cointelpro: {
    key: 'cointelpro',
    name: 'COINTELPRO Files',
    globalVar: 'COINTELPROStoryExpanded',
    file: 'cointelpro-story-expanded.js',
  },
  snowden: {
    key: 'snowden',
    name: 'Snowden Revelations',
    globalVar: 'SnowdenRevelationsStoryExpanded',
    file: 'snowden-revelations-story-expanded.js',
  },
  tuskegee: {
    key: 'tuskegee',
    name: 'Tuskegee Experiment',
    globalVar: 'TuskegeeExperimentStoryExpanded',
    file: 'tuskegee-experiment-story-expanded.js',
  },
  paperclip: {
    key: 'paperclip',
    name: 'Operation Paperclip',
    globalVar: 'OperationPaperclipStoryExpanded',
    file: 'operation-paperclip-story-expanded.js',
  },
  'diddy-case': {
    key: 'diddy-case',
    name: 'Diddy Federal Case',
    globalVar: 'DiddyCaseStoryExpanded',
    file: 'diddy-case-story-expanded.js',
  },
  'charlie-kirk': {
    key: 'charlie-kirk',
    name: 'Charlie Kirk Assassination',
    globalVar: 'CharlieKirkStoryExpanded',
    file: 'charlie-kirk-story-expanded.js',
  },
};

/**
 * Get story from global variable (legacy compatibility)
 */
function getStoryFromGlobal(key: StoryKey): Story | null {
  const info = STORY_INFO[key];
  if (!info) return null;

  const globalStory = (window as unknown as Record<string, unknown>)[
    info.globalVar
  ] as Story | undefined;

  if (globalStory?.scenes) {
    return globalStory;
  }

  return null;
}

/**
 * Load a story by key
 * - First checks cache
 * - Then checks global variables (for legacy script tags)
 * - Finally attempts dynamic import
 */
export async function loadStory(key: StoryKey): Promise<Story | null> {
  // Check cache first
  const cached = storyCache.get(key);
  if (cached) {
    logger.debug(`Story ${key} loaded from cache`);
    return cached;
  }

  // Check if already loading
  const existingPromise = loadingPromises.get(key);
  if (existingPromise) {
    logger.debug(`Story ${key} already loading, waiting...`);
    return existingPromise;
  }

  // Try to get from global (legacy support)
  const globalStory = getStoryFromGlobal(key);
  if (globalStory) {
    storyCache.set(key, globalStory);
    logger.debug(`Story ${key} loaded from global variable`);
    return globalStory;
  }

  // Create loading promise
  const loadPromise = loadStoryDynamic(key);
  loadingPromises.set(key, loadPromise);

  try {
    const story = await loadPromise;
    loadingPromises.delete(key);
    return story;
  } catch (error) {
    loadingPromises.delete(key);
    throw error;
  }
}

/**
 * Dynamically load a story file
 */
async function loadStoryDynamic(key: StoryKey): Promise<Story | null> {
  const info = STORY_INFO[key];
  if (!info) {
    logger.error(`Unknown story key: ${key}`);
    return null;
  }

  try {
    // Dynamic import based on story key
    // Note: Vite requires static string patterns for dynamic imports
    const story = await importStory(key);

    if (story) {
      storyCache.set(key, story);
      logger.game(`Story ${key} loaded dynamically`);
      return story;
    }

    return null;
  } catch (error) {
    logger.error(`Failed to load story ${key}:`, error);
    return null;
  }
}

/**
 * Import story based on key
 * Using explicit imports for Vite compatibility
 */
async function importStory(key: StoryKey): Promise<Story | null> {
  // For now, return from global since stories are loaded via script tags
  // This will be updated when stories are converted to ES modules
  return getStoryFromGlobal(key);
}

/**
 * Preload stories in background
 */
export async function preloadStories(keys: StoryKey[]): Promise<void> {
  logger.debug(`Preloading ${keys.length} stories...`);

  await Promise.all(
    keys.map(async key => {
      try {
        await loadStory(key);
      } catch (error) {
        logger.warn(`Failed to preload story ${key}:`, error);
      }
    })
  );
}

/**
 * Get all available stories from global scope
 * Returns stories that are already loaded via script tags
 */
export function getAvailableStories(): Map<StoryKey, Story> {
  const available = new Map<StoryKey, Story>();

  for (const key of Object.keys(STORY_INFO) as StoryKey[]) {
    const story = getStoryFromGlobal(key);
    if (story) {
      storyCache.set(key, story);
      available.set(key, story);
    }
  }

  logger.debug(`Found ${available.size} available stories`);
  return available;
}

/**
 * Check if a story is loaded/available
 */
export function isStoryAvailable(key: StoryKey): boolean {
  if (storyCache.has(key)) return true;
  return getStoryFromGlobal(key) !== null;
}

/**
 * Get story info by key
 */
export function getStoryInfo(key: StoryKey): StoryInfo | undefined {
  return STORY_INFO[key];
}

/**
 * Get all story keys
 */
export function getAllStoryKeys(): StoryKey[] {
  return Object.keys(STORY_INFO) as StoryKey[];
}

/**
 * Clear story cache (useful for testing or memory management)
 */
export function clearStoryCache(): void {
  storyCache.clear();
  loadingPromises.clear();
  logger.debug('Story cache cleared');
}

/**
 * Get cache statistics
 */
export function getCacheStats(): { cached: number; total: number } {
  return {
    cached: storyCache.size,
    total: Object.keys(STORY_INFO).length,
  };
}

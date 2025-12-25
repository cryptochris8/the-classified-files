/**
 * Story Loader - Manages loading and caching of story files
 * Stories are lazy-loaded for performance
 */

// Story registry - maps story IDs to loaders
const storyLoaders = {
  uap: () => import('./uap-story'),
  epstein: () => import('./epstein-story'),
  jfk: () => import('./jfk-story'),
  'diddy-case': () => import('./diddy-case-story'),
  watergate: () => import('./watergate-story'),
  'pentagon-papers': () => import('./pentagon-papers-story'),
  mkultra: () => import('./mkultra-story'),
  cointelpro: () => import('./cointelpro-story'),
  snowden: () => import('./snowden-story'),
  'iran-contra': () => import('./iran-contra-story'),
  'panama-papers': () => import('./panama-papers-story'),
  tuskegee: () => import('./tuskegee-story'),
  paperclip: () => import('./paperclip-story'),
  hunterlaptop: () => import('./hunterlaptop-story'),
}

// Story cache
const storyCache = new Map()

/**
 * Load a story by ID
 * @param {string} storyId - The story identifier
 * @returns {Promise<Object>} - The story object
 */
export async function loadStory(storyId) {
  // Check cache first
  if (storyCache.has(storyId)) {
    return storyCache.get(storyId)
  }

  // Get the loader
  const loader = storyLoaders[storyId]
  if (!loader) {
    throw new Error(`Story not found: ${storyId}`)
  }

  try {
    // Load the story module
    const module = await loader()
    const story = module.default || module

    // Cache it
    storyCache.set(storyId, story)

    return story
  } catch (error) {
    console.error(`Failed to load story: ${storyId}`, error)
    throw error
  }
}

/**
 * Check if a story is available
 * @param {string} storyId - The story identifier
 * @returns {boolean}
 */
export function isStoryAvailable(storyId) {
  return storyId in storyLoaders
}

/**
 * Get list of available story IDs
 * @returns {string[]}
 */
export function getAvailableStories() {
  return Object.keys(storyLoaders)
}

/**
 * Preload a story (for performance)
 * @param {string} storyId - The story identifier
 */
export function preloadStory(storyId) {
  if (!storyCache.has(storyId) && storyLoaders[storyId]) {
    loadStory(storyId).catch(() => {
      // Silently fail preloads
    })
  }
}

/**
 * Clear the story cache
 */
export function clearStoryCache() {
  storyCache.clear()
}

export default {
  loadStory,
  isStoryAvailable,
  getAvailableStories,
  preloadStory,
  clearStoryCache,
}

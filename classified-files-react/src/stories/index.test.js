/**
 * Story Loader Tests
 */
import { describe, it, expect, beforeEach } from 'vitest'
import { loadStory, isStoryAvailable, getAvailableStories, clearStoryCache } from './index'

describe('Story Loader', () => {
  beforeEach(() => {
    clearStoryCache()
  })

  describe('isStoryAvailable', () => {
    it('should return true for available stories', () => {
      expect(isStoryAvailable('uap')).toBe(true)
      expect(isStoryAvailable('epstein')).toBe(true)
      expect(isStoryAvailable('jfk')).toBe(true)
    })

    it('should return false for unavailable stories', () => {
      expect(isStoryAvailable('nonexistent')).toBe(false)
      expect(isStoryAvailable('')).toBe(false)
    })
  })

  describe('getAvailableStories', () => {
    it('should return array of story IDs', () => {
      const stories = getAvailableStories()
      
      expect(Array.isArray(stories)).toBe(true)
      expect(stories).toContain('uap')
      expect(stories).toContain('epstein')
      expect(stories.length).toBeGreaterThan(10)
    })
  })

  describe('loadStory', () => {
    it('should load UAP story successfully', async () => {
      const story = await loadStory('uap')
      
      expect(story).toBeDefined()
      expect(story.scenes).toBeDefined()
      expect(story.scenes.intro).toBeDefined()
    })

    it('should throw error for nonexistent story', async () => {
      await expect(loadStory('nonexistent')).rejects.toThrow('Story not found')
    })

    it('should cache loaded stories', async () => {
      const story1 = await loadStory('uap')
      const story2 = await loadStory('uap')
      
      expect(story1).toBe(story2) // Same reference = cached
    })
  })
})

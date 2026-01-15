/**
 * Story Loader Tests
 *
 * Tests story loading, caching, and availability
 */

import { describe, it, expect, beforeEach } from 'vitest';
import {
  loadStory,
  getAvailableStories,
  isStoryAvailable,
  getStoryInfo,
  getAllStoryKeys,
  clearStoryCache,
  getCacheStats,
  preloadStories,
  STORY_INFO,
} from '../index';
import type { Story } from '@/types';

// Create a mock story
const createMockStory = (sealed: boolean | 'premium' | 'coming_soon' = false): Story => ({
  sealed,
  releaseDate: null,
  scenes: {
    intro: {
      text: 'Test intro scene',
      choices: [
        { text: 'Choice 1', nextScene: 'intro' },
      ],
    },
  },
});

describe('Story Loader', () => {
  beforeEach(() => {
    clearStoryCache();
    // Clear any global story objects
    for (const key of Object.keys(STORY_INFO)) {
      const info = STORY_INFO[key as keyof typeof STORY_INFO];
      delete (window as unknown as Record<string, unknown>)[info.globalVar];
    }
  });

  describe('STORY_INFO', () => {
    it('should have entries for all 16 stories', () => {
      expect(Object.keys(STORY_INFO)).toHaveLength(16);
    });

    it('should have correct structure for each entry', () => {
      for (const [key, info] of Object.entries(STORY_INFO)) {
        expect(info.key).toBe(key);
        expect(info.name).toBeTruthy();
        expect(info.globalVar).toBeTruthy();
        expect(info.file).toBeTruthy();
      }
    });

    it('should include UAP story as free case', () => {
      expect(STORY_INFO.uap).toBeDefined();
      expect(STORY_INFO.uap.name).toBe('UAP Investigation');
    });
  });

  describe('loadStory', () => {
    it('should return null for unknown story key', async () => {
      const story = await loadStory('unknown_key' as any);
      expect(story).toBeNull();
    });

    it('should load story from global variable', async () => {
      // Setup mock global
      (window as unknown as Record<string, unknown>).UAPStoryExpanded = createMockStory();

      const story = await loadStory('uap');
      expect(story).toBeTruthy();
      expect(story?.scenes.intro).toBeTruthy();
    });

    it('should cache loaded stories', async () => {
      (window as unknown as Record<string, unknown>).UAPStoryExpanded = createMockStory();

      await loadStory('uap');
      const stats1 = getCacheStats();
      expect(stats1.cached).toBe(1);

      // Load again - should use cache
      await loadStory('uap');
      const stats2 = getCacheStats();
      expect(stats2.cached).toBe(1);
    });

    it('should return cached story on subsequent calls', async () => {
      const mockStory = createMockStory();
      (window as unknown as Record<string, unknown>).UAPStoryExpanded = mockStory;

      const story1 = await loadStory('uap');
      const story2 = await loadStory('uap');

      expect(story1).toBe(story2);
    });
  });

  describe('getAvailableStories', () => {
    it('should return empty map when no stories loaded', () => {
      const stories = getAvailableStories();
      expect(stories.size).toBe(0);
    });

    it('should return stories that are loaded globally', () => {
      (window as unknown as Record<string, unknown>).UAPStoryExpanded = createMockStory();
      (window as unknown as Record<string, unknown>).EpsteinStoryExpanded = createMockStory('premium');

      const stories = getAvailableStories();
      expect(stories.size).toBe(2);
      expect(stories.has('uap')).toBe(true);
      expect(stories.has('epstein')).toBe(true);
    });

    it('should cache stories when getting available', () => {
      (window as unknown as Record<string, unknown>).UAPStoryExpanded = createMockStory();

      getAvailableStories();
      const stats = getCacheStats();
      expect(stats.cached).toBe(1);
    });
  });

  describe('isStoryAvailable', () => {
    it('should return false for unavailable story', () => {
      expect(isStoryAvailable('uap')).toBe(false);
    });

    it('should return true for loaded story', () => {
      (window as unknown as Record<string, unknown>).UAPStoryExpanded = createMockStory();
      expect(isStoryAvailable('uap')).toBe(true);
    });

    it('should return true for cached story', async () => {
      (window as unknown as Record<string, unknown>).UAPStoryExpanded = createMockStory();
      await loadStory('uap');

      // Remove from global but should still be in cache
      delete (window as unknown as Record<string, unknown>).UAPStoryExpanded;

      expect(isStoryAvailable('uap')).toBe(true);
    });
  });

  describe('getStoryInfo', () => {
    it('should return info for valid key', () => {
      const info = getStoryInfo('uap');
      expect(info).toBeDefined();
      expect(info?.name).toBe('UAP Investigation');
    });

    it('should return undefined for invalid key', () => {
      const info = getStoryInfo('invalid' as any);
      expect(info).toBeUndefined();
    });
  });

  describe('getAllStoryKeys', () => {
    it('should return all story keys', () => {
      const keys = getAllStoryKeys();
      expect(keys).toHaveLength(16);
      expect(keys).toContain('uap');
      expect(keys).toContain('epstein');
      expect(keys).toContain('jfk');
    });
  });

  describe('clearStoryCache', () => {
    it('should clear all cached stories', async () => {
      (window as unknown as Record<string, unknown>).UAPStoryExpanded = createMockStory();
      await loadStory('uap');

      expect(getCacheStats().cached).toBe(1);

      clearStoryCache();

      expect(getCacheStats().cached).toBe(0);
    });
  });

  describe('getCacheStats', () => {
    it('should return correct stats', async () => {
      const stats1 = getCacheStats();
      expect(stats1.cached).toBe(0);
      expect(stats1.total).toBe(16);

      (window as unknown as Record<string, unknown>).UAPStoryExpanded = createMockStory();
      (window as unknown as Record<string, unknown>).JFKStoryExpanded = createMockStory();

      await loadStory('uap');
      await loadStory('jfk');

      const stats2 = getCacheStats();
      expect(stats2.cached).toBe(2);
      expect(stats2.total).toBe(16);
    });
  });

  describe('preloadStories', () => {
    it('should preload multiple stories', async () => {
      (window as unknown as Record<string, unknown>).UAPStoryExpanded = createMockStory();
      (window as unknown as Record<string, unknown>).JFKStoryExpanded = createMockStory();
      (window as unknown as Record<string, unknown>).EpsteinStoryExpanded = createMockStory();

      await preloadStories(['uap', 'jfk', 'epstein']);

      const stats = getCacheStats();
      expect(stats.cached).toBe(3);
    });

    it('should not throw on failed preload', async () => {
      // Stories not in global, should not throw
      await expect(preloadStories(['uap', 'jfk'])).resolves.not.toThrow();
    });
  });
});

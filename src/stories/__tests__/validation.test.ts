/**
 * Story Validation Tests
 *
 * Tests story structure validation utilities
 */

import { describe, it, expect } from 'vitest';
import { validateStory } from '../validation';
import type { Story, Scene } from '@/types';

describe('Story Validation', () => {
  const createValidScene = (overrides?: Partial<Scene>): Scene => ({
    text: 'Test scene text',
    choices: [
      {
        text: 'Choice 1',
        nextScene: 'intro',
      },
    ],
    ...overrides,
  });

  const createValidStory = (overrides?: Partial<Story>): Story => ({
    sealed: false,
    releaseDate: null,
    scenes: {
      intro: createValidScene(),
    },
    ...overrides,
  });

  describe('validateStory', () => {
    it('should validate a minimal valid story', () => {
      const story = createValidStory();
      const result = validateStory(story);

      expect(result.valid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    it('should fail if missing intro scene', () => {
      const story = createValidStory({
        scenes: {
          other_scene: createValidScene(),
        },
      });

      const result = validateStory(story);

      expect(result.valid).toBe(false);
      expect(result.errors).toContain("Missing required 'intro' scene");
    });

    it('should fail if scenes property is missing', () => {
      const story = {
        sealed: false,
        releaseDate: null,
      } as Story;

      const result = validateStory(story);

      expect(result.valid).toBe(false);
      expect(result.errors).toContain("Missing 'scenes' property");
    });

    it('should fail if choice references invalid scene', () => {
      const story = createValidStory({
        scenes: {
          intro: {
            text: 'Intro text',
            choices: [
              {
                text: 'Go to nonexistent',
                nextScene: 'nonexistent_scene',
              },
            ],
          },
        },
      });

      const result = validateStory(story);

      expect(result.valid).toBe(false);
      expect(result.errors.some(e => e.includes('nonexistent_scene'))).toBe(true);
    });

    it('should pass with valid scene references', () => {
      const story = createValidStory({
        scenes: {
          intro: {
            text: 'Intro text',
            choices: [
              { text: 'Go to scene 2', nextScene: 'scene2' },
              { text: 'Go to scene 3', nextScene: 'scene3' },
            ],
          },
          scene2: {
            text: 'Scene 2 text',
            choices: [{ text: 'Back to intro', nextScene: 'intro' }],
          },
          scene3: {
            text: 'Scene 3 text',
            choices: [{ text: 'Back to intro', nextScene: 'intro' }],
          },
        },
      });

      const result = validateStory(story);

      expect(result.valid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    it('should warn about orphaned scenes', () => {
      const story = createValidStory({
        scenes: {
          intro: {
            text: 'Intro text',
            choices: [{ text: 'Go to scene 2', nextScene: 'scene2' }],
          },
          scene2: {
            text: 'Scene 2 text',
            choices: [{ text: 'Back to intro', nextScene: 'intro' }],
          },
          orphaned_scene: {
            text: 'This scene is not reachable',
            choices: [{ text: 'Back to intro', nextScene: 'intro' }],
          },
        },
      });

      const result = validateStory(story);

      expect(result.warnings.some(w => w.includes('orphaned_scene'))).toBe(true);
    });

    it('should warn about scenes with no choices', () => {
      const story = createValidStory({
        scenes: {
          intro: {
            text: 'Intro text',
            choices: [{ text: 'Go to ending', nextScene: 'ending' }],
          },
          ending: {
            text: 'The end',
            choices: [],
          },
        },
      });

      const result = validateStory(story);

      expect(result.warnings.some(w => w.includes('ending'))).toBe(true);
    });

    it('should collect statistics', () => {
      const story = createValidStory({
        scenes: {
          intro: {
            text: 'Intro text',
            image: 'intro_image',
            choices: [
              { text: 'Choice 1', nextScene: 'scene2' },
              { text: 'Choice 2', nextScene: 'scene2' },
            ],
          },
          scene2: {
            text: 'Scene 2 text',
            quizMode: true,
            choices: [
              { text: 'Answer A', nextScene: 'intro', quizAnswer: true },
              { text: 'Answer B', nextScene: 'intro', quizAnswer: false },
            ],
          },
        },
      });

      const result = validateStory(story);

      expect(result.stats.sceneCount).toBe(2);
      expect(result.stats.choiceCount).toBe(4);
      expect(result.stats.imageCount).toBe(1);
      expect(result.stats.quizCount).toBeGreaterThan(0);
    });

    it('should validate with story key prefix', () => {
      const story = createValidStory({
        scenes: {
          intro: {
            text: 'Intro',
            choices: [{ text: 'Invalid', nextScene: 'nonexistent' }],
          },
        },
      });

      const result = validateStory(story, 'epstein');

      expect(result.errors.some(e => e.includes('[epstein]'))).toBe(true);
    });
  });

  describe('scene validation', () => {
    it('should fail if scene text is missing', () => {
      const story = createValidStory({
        scenes: {
          intro: {
            text: '',
            choices: [],
          },
        },
      });

      const result = validateStory(story);

      // Empty text is treated as missing - produces an error
      expect(result.valid).toBe(false);
      expect(result.errors.some(e => e.includes("Missing 'text'"))).toBe(true);
    });

    it('should warn about progress increase out of range', () => {
      const story = createValidStory({
        scenes: {
          intro: {
            text: 'Intro text',
            choices: [
              { text: 'Choice', nextScene: 'intro', progressIncrease: 150 },
            ],
          },
        },
      });

      const result = validateStory(story);

      expect(result.warnings.some(w => w.includes('progressIncrease'))).toBe(true);
    });

    it('should fail on invalid quizAnswer value', () => {
      const story = createValidStory({
        scenes: {
          intro: {
            text: 'Intro text',
            choices: [
              {
                text: 'Choice',
                nextScene: 'intro',
                quizAnswer: 'invalid' as unknown as boolean
              },
            ],
          },
        },
      });

      const result = validateStory(story);

      expect(result.errors.some(e => e.includes('quizAnswer'))).toBe(true);
    });

    it('should validate sources as array', () => {
      const story = createValidStory({
        scenes: {
          intro: {
            text: 'Intro text',
            sources: 'not an array' as unknown as string[],
            choices: [{ text: 'Choice', nextScene: 'intro' }],
          },
        },
      });

      const result = validateStory(story);

      expect(result.errors.some(e => e.includes('sources'))).toBe(true);
    });
  });

  describe('reachability analysis', () => {
    it('should find all reachable scenes', () => {
      const story = createValidStory({
        scenes: {
          intro: {
            text: 'Intro',
            choices: [
              { text: 'Path A', nextScene: 'path_a' },
              { text: 'Path B', nextScene: 'path_b' },
            ],
          },
          path_a: {
            text: 'Path A',
            choices: [
              { text: 'Deep A', nextScene: 'deep_a' },
            ],
          },
          path_b: {
            text: 'Path B',
            choices: [
              { text: 'Deep B', nextScene: 'deep_b' },
            ],
          },
          deep_a: {
            text: 'Deep A',
            choices: [{ text: 'Back', nextScene: 'intro' }],
          },
          deep_b: {
            text: 'Deep B',
            choices: [{ text: 'Back', nextScene: 'intro' }],
          },
        },
      });

      const result = validateStory(story);

      expect(result.valid).toBe(true);
      expect(result.stats.sceneCount).toBe(5);
      expect(result.warnings.filter(w => w.includes('Orphaned'))).toHaveLength(0);
    });

    it('should handle circular references', () => {
      const story = createValidStory({
        scenes: {
          intro: {
            text: 'Intro',
            choices: [{ text: 'Go to A', nextScene: 'scene_a' }],
          },
          scene_a: {
            text: 'Scene A',
            choices: [{ text: 'Go to B', nextScene: 'scene_b' }],
          },
          scene_b: {
            text: 'Scene B',
            choices: [{ text: 'Go to A', nextScene: 'scene_a' }],
          },
        },
      });

      const result = validateStory(story);

      expect(result.valid).toBe(true);
      expect(result.stats.sceneCount).toBe(3);
    });
  });
});

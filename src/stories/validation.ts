/**
 * Story Validation Utilities
 *
 * Validates story files for:
 * - Required properties
 * - Valid scene references
 * - Choice integrity
 * - Data consistency
 */

import type { Story, Scene, Choice, StoryKey } from '@/types';
import { logger } from '@utils/logger';
import { STORY_INFO } from './index';

/**
 * Validation result structure
 */
export interface ValidationResult {
  valid: boolean;
  errors: string[];
  warnings: string[];
  stats: {
    sceneCount: number;
    choiceCount: number;
    imageCount: number;
    quizCount: number;
  };
}

/**
 * Validate a complete story
 */
export function validateStory(
  story: Story,
  storyKey?: StoryKey
): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];
  const stats = {
    sceneCount: 0,
    choiceCount: 0,
    imageCount: 0,
    quizCount: 0,
  };

  const keyPrefix = storyKey ? `[${storyKey}] ` : '';

  // Check required properties
  if (story.sealed === undefined) {
    errors.push(`${keyPrefix}Missing 'sealed' property`);
  }

  if (!story.scenes) {
    errors.push(`${keyPrefix}Missing 'scenes' property`);
    return { valid: false, errors, warnings, stats };
  }

  const sceneIds = Object.keys(story.scenes);
  stats.sceneCount = sceneIds.length;

  // Must have intro scene
  if (!story.scenes['intro']) {
    errors.push(`${keyPrefix}Missing required 'intro' scene`);
  }

  // Validate each scene
  for (const [sceneId, scene] of Object.entries(story.scenes)) {
    const sceneErrors = validateScene(scene, sceneId, sceneIds, keyPrefix);
    errors.push(...sceneErrors.errors);
    warnings.push(...sceneErrors.warnings);

    // Collect stats
    stats.choiceCount += scene.choices?.length ?? 0;
    if (scene.image) stats.imageCount++;
    if (scene.quizMode) stats.quizCount++;
    scene.choices?.forEach(choice => {
      if (choice.quizAnswer !== undefined) stats.quizCount++;
    });
  }

  // Check for orphaned scenes (not reachable from intro)
  const reachableScenes = findReachableScenes(story, 'intro');
  const orphanedScenes = sceneIds.filter(id => !reachableScenes.has(id));
  if (orphanedScenes.length > 0) {
    warnings.push(
      `${keyPrefix}Orphaned scenes (not reachable from intro): ${orphanedScenes.join(', ')}`
    );
  }

  // Check for dead ends (scenes with no choices and not ending scenes)
  for (const [sceneId, scene] of Object.entries(story.scenes)) {
    if (!scene.choices || scene.choices.length === 0) {
      // This might be an ending scene - just warn
      warnings.push(
        `${keyPrefix}Scene '${sceneId}' has no choices (potential ending)`
      );
    }
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings,
    stats,
  };
}

/**
 * Validate a single scene
 */
function validateScene(
  scene: Scene,
  sceneId: string,
  allSceneIds: string[],
  keyPrefix: string
): { errors: string[]; warnings: string[] } {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Check required properties
  if (!scene.text) {
    errors.push(`${keyPrefix}Scene '${sceneId}': Missing 'text' property`);
  }

  // Validate choices
  if (scene.choices) {
    scene.choices.forEach((choice, index) => {
      const choiceErrors = validateChoice(
        choice,
        sceneId,
        index,
        allSceneIds,
        keyPrefix
      );
      errors.push(...choiceErrors.errors);
      warnings.push(...choiceErrors.warnings);
    });
  }

  // Check for missing image files (warning only)
  if (scene.image && !scene.image.includes('/')) {
    // Just a filename, not a path - this is expected
  }

  // Check sources format
  if (scene.sources) {
    if (!Array.isArray(scene.sources)) {
      errors.push(
        `${keyPrefix}Scene '${sceneId}': 'sources' must be an array`
      );
    }
  }

  return { errors, warnings };
}

/**
 * Validate a single choice
 */
function validateChoice(
  choice: Choice,
  sceneId: string,
  choiceIndex: number,
  allSceneIds: string[],
  keyPrefix: string
): { errors: string[]; warnings: string[] } {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Check required properties
  if (!choice.text) {
    errors.push(
      `${keyPrefix}Scene '${sceneId}', choice ${choiceIndex}: Missing 'text'`
    );
  }

  if (!choice.nextScene) {
    errors.push(
      `${keyPrefix}Scene '${sceneId}', choice ${choiceIndex}: Missing 'nextScene'`
    );
  } else if (!allSceneIds.includes(choice.nextScene)) {
    errors.push(
      `${keyPrefix}Scene '${sceneId}', choice ${choiceIndex}: Invalid nextScene '${choice.nextScene}'`
    );
  }

  // Check progress increase bounds
  if (
    choice.progressIncrease !== undefined &&
    (choice.progressIncrease < 0 || choice.progressIncrease > 100)
  ) {
    warnings.push(
      `${keyPrefix}Scene '${sceneId}', choice ${choiceIndex}: progressIncrease ${choice.progressIncrease} outside 0-100 range`
    );
  }

  // Check quiz answer format
  if (
    choice.quizAnswer !== undefined &&
    choice.quizAnswer !== true &&
    choice.quizAnswer !== false &&
    choice.quizAnswer !== 'partial'
  ) {
    errors.push(
      `${keyPrefix}Scene '${sceneId}', choice ${choiceIndex}: Invalid quizAnswer value`
    );
  }

  return { errors, warnings };
}

/**
 * Find all scenes reachable from a starting scene
 */
function findReachableScenes(story: Story, startScene: string): Set<string> {
  const reachable = new Set<string>();
  const queue = [startScene];

  while (queue.length > 0) {
    const current = queue.shift()!;
    if (reachable.has(current)) continue;

    reachable.add(current);

    const scene = story.scenes[current];
    if (scene?.choices) {
      for (const choice of scene.choices) {
        if (!reachable.has(choice.nextScene)) {
          queue.push(choice.nextScene);
        }
      }
    }
  }

  return reachable;
}

/**
 * Validate all available stories
 */
export function validateAllStories(): Map<StoryKey, ValidationResult> {
  const results = new Map<StoryKey, ValidationResult>();

  for (const [key, info] of Object.entries(STORY_INFO)) {
    const storyKey = key as StoryKey;
    const globalStory = (window as unknown as Record<string, unknown>)[
      info.globalVar
    ] as Story | undefined;

    if (globalStory) {
      const result = validateStory(globalStory, storyKey);
      results.set(storyKey, result);

      if (result.errors.length > 0) {
        logger.error(`Story ${storyKey} has validation errors:`, result.errors);
      }
      if (result.warnings.length > 0) {
        logger.warn(
          `Story ${storyKey} has validation warnings:`,
          result.warnings
        );
      }
    }
  }

  return results;
}

/**
 * Print validation summary
 */
export function printValidationSummary(
  results: Map<StoryKey, ValidationResult>
): void {
  let totalScenes = 0;
  let totalChoices = 0;
  let totalErrors = 0;
  let totalWarnings = 0;

  logger.group('Story Validation Summary');

  for (const [key, result] of results) {
    totalScenes += result.stats.sceneCount;
    totalChoices += result.stats.choiceCount;
    totalErrors += result.errors.length;
    totalWarnings += result.warnings.length;

    const status = result.valid ? '✅' : '❌';
    logger.log(
      `${status} ${key}: ${result.stats.sceneCount} scenes, ${result.stats.choiceCount} choices`
    );
  }

  logger.log('---');
  logger.log(`Total: ${results.size} stories, ${totalScenes} scenes, ${totalChoices} choices`);
  logger.log(`Errors: ${totalErrors}, Warnings: ${totalWarnings}`);
  logger.groupEnd();
}

/**
 * Development helper to validate stories on load
 */
export function enableDevelopmentValidation(): void {
  if (import.meta.env.DEV) {
    // Wait for DOM to be ready and stories to load
    window.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => {
        const results = validateAllStories();
        printValidationSummary(results);
      }, 1000);
    });
  }
}

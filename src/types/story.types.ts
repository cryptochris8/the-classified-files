/**
 * Story and scene type definitions
 */

import type { MiniGameConfig, MiniGameData, SceneEffect } from './game.types';

/**
 * A single choice option presented to the player
 */
export interface Choice {
  /** Display text for the choice button */
  text: string;
  /** Scene ID to navigate to when chosen */
  nextScene: string;
  /** Progress increase when this choice is made (0-100) */
  progressIncrease?: number;
  /** Whether this choice collects evidence */
  evidence?: boolean;
  /** Whether this choice represents factual information */
  factual?: boolean;
  /** Quiz answer result (true = correct, false = incorrect, 'partial' = partially correct) */
  quizAnswer?: boolean | 'partial';
  /** Whether this choice triggers quiz mode */
  quizMode?: boolean;
  /** Mini-game configuration if this choice triggers a mini-game */
  miniGame?: MiniGameConfig;
  /** Whether this is a dangerous/risky choice */
  dangerous?: boolean;
}

/**
 * A single scene in the story
 */
export interface Scene {
  /** Narrative text displayed to the player */
  text: string;
  /** Image filename (without extension) for scene visual */
  image?: string;
  /** AI image generation prompt (for documentation) */
  imagePrompt?: string;
  /** Document image path for classified document display */
  document?: string;
  /** Array of source citations for factual content */
  sources?: string[];
  /** Educational context note */
  educationalNote?: string;
  /** Custom prompt text before choices */
  prompt?: string;
  /** Whether this scene is in quiz mode */
  quizMode?: boolean;
  /** Mini-game data if scene contains a mini-game */
  miniGameData?: MiniGameData;
  /** Available player choices */
  choices: Choice[];
  /** Special effects to trigger in this scene */
  effects?: SceneEffect[];
}

/**
 * Complete story data structure
 */
export interface Story {
  /**
   * Sealed status:
   * - false: Available/free
   * - true: Generic sealed
   * - 'premium': Requires purchase
   * - 'coming_soon': In development
   */
  sealed: boolean | 'premium' | 'coming_soon';
  /** Release date display text */
  releaseDate: string | null;
  /** Map of scene IDs to scene data */
  scenes: Record<string, Scene>;
}

/**
 * Story key type for all available cases
 */
export type StoryKey =
  | 'epstein'
  | 'jfk'
  | 'uap'
  | 'september11'
  | 'hunterlaptop'
  | 'watergate'
  | 'pentagon-papers'
  | 'mkultra'
  | 'panama-papers'
  | 'iran-contra'
  | 'cointelpro'
  | 'snowden'
  | 'tuskegee'
  | 'paperclip'
  | 'diddy-case'
  | 'charlie-kirk';

/**
 * Story loader function type
 */
export type StoryLoader = () => Promise<{ default: Story }>;

/**
 * Story metadata for case selection (doesn't include full story data)
 */
export interface StoryMetadata {
  key: StoryKey;
  name: string;
  description?: string;
  sealed: boolean | 'premium' | 'coming_soon';
  releaseDate: string | null;
  difficulty?: number;
}

/**
 * Validates that a scene has valid choice references
 */
export function validateSceneChoices(
  scene: Scene,
  allSceneIds: string[]
): string[] {
  const errors: string[] = [];

  scene.choices.forEach((choice, index) => {
    if (!allSceneIds.includes(choice.nextScene)) {
      errors.push(
        `Choice ${index} references invalid scene: ${choice.nextScene}`
      );
    }
  });

  return errors;
}

/**
 * Validates an entire story structure
 */
export function validateStory(story: Story): string[] {
  const errors: string[] = [];
  const sceneIds = Object.keys(story.scenes);

  if (!story.scenes['intro']) {
    errors.push('Story must have an "intro" scene');
  }

  Object.entries(story.scenes).forEach(([sceneId, scene]) => {
    const sceneErrors = validateSceneChoices(scene, sceneIds);
    sceneErrors.forEach(error => {
      errors.push(`Scene "${sceneId}": ${error}`);
    });
  });

  return errors;
}

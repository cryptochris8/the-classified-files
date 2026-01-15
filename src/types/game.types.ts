/**
 * Core game type definitions
 */

/**
 * Badge earned by the player for achievements
 */
export interface Badge {
  name: string;
  icon: string;
  description: string;
}

/**
 * Main game state tracking player progress
 */
export interface GameState {
  /** Number of evidence items collected */
  evidenceCount: number;
  /** Investigation progress percentage (0-100) */
  investigationProgress: number;
  /** History of choice texts made by player */
  choices: string[];
  /** Set of visited scene IDs */
  visitedScenes: Set<string>;
  /** Map of visited choice keys (scene:index) to boolean */
  visitedChoices: Record<string, boolean>;
  /** Knowledge score from quiz questions */
  knowledgeScore: number;
  /** Number of correct quiz answers */
  correctAnswers: number;
  /** Total quiz questions encountered */
  totalQuestions: number;
  /** Badges earned by the player */
  badges: Badge[];
}

/**
 * Player settings and preferences
 */
export interface GameSettings {
  musicEnabled: boolean;
  sfxEnabled: boolean;
  textSpeed: number;
  speechEnabled: boolean;
  autoAdvance: boolean;
}

/**
 * Mini-game configuration
 */
export interface MiniGameConfig {
  type: 'document_reconstruction' | 'evidence_connection' | 'cipher_decoder';
  title: string;
  description: string;
}

/**
 * Mini-game data passed to the mini-game engine
 */
export interface MiniGameData {
  type: string;
  fragments?: MiniGameFragment[];
  gridColumns?: number;
  gridRows?: number;
  evidenceReward?: string;
  progressReward?: number;
}

/**
 * Document fragment for reconstruction mini-game
 */
export interface MiniGameFragment {
  position: number;
  text?: string;
  backgroundImage?: string;
  type?: string;
}

/**
 * Result returned when a mini-game completes
 */
export interface MiniGameResult {
  success: boolean;
  score?: number;
  evidenceGained?: string;
  progressIncrease?: number;
  completionTime?: number;
}

/**
 * Scene effect for special visual/audio effects
 */
export interface SceneEffect {
  type: 'suspense_pause' | 'document_flash';
  text?: string;
  delay?: number;
}

/**
 * DOM element cache for the game UI
 */
export interface GameElements {
  storyText: HTMLElement | null;
  choicesContainer: HTMLElement | null;
  documentImage: HTMLElement | null;
  evidenceNumber: HTMLElement | null;
  progressFill: HTMLElement | null;
  loadingScreen: HTMLElement | null;
  backgroundMusic: HTMLAudioElement | null;
  buttonClickSound: HTMLAudioElement | null;
}

/**
 * Story metadata for case selection display
 */
export interface StoryMeta {
  name: string;
  key: string;
  sealed: boolean | 'premium' | 'coming_soon';
  releaseDate: string | null;
}

/**
 * Initial game state factory
 */
export function createInitialGameState(): GameState {
  return {
    evidenceCount: 0,
    investigationProgress: 0,
    choices: [],
    visitedScenes: new Set(),
    visitedChoices: {},
    knowledgeScore: 0,
    correctAnswers: 0,
    totalQuestions: 0,
    badges: [],
  };
}

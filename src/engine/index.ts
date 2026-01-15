/**
 * Game Engine - Public Exports
 *
 * This module exports all game engine components for use throughout the application.
 */

// Core engine
export { GameEngine } from './GameEngine';

// State management
export { StateManager } from './StateManager';

// UI management
export { UIManager } from './UIManager';

// Audio management
export { AudioManager } from './AudioManager';

// Scene management
export { SceneManager } from './SceneManager';

// Case selection
export { CaseSelector, STORY_REGISTRY } from './CaseSelector';
export type { StoryEntry } from './CaseSelector';

// Quiz system
export { QuizManager } from './QuizManager';

// Badge system
export { BadgeManager, BADGES } from './BadgeManager';

// Mini-games
export { MiniGameEngine } from './MiniGameEngine';
export type { MiniGameCallback } from './MiniGameEngine';

// Error handling
export { ErrorRecovery } from './ErrorRecovery';
export type { ErrorInfo } from './ErrorRecovery';

/**
 * Main entry point for The Classified Files
 *
 * This file bootstraps the game engine and initializes all systems.
 */

import { logger } from '@utils/logger';

// Log startup
logger.log('=== DECLASSIFIED GAME STARTING ===');
logger.log('Loading game engine...');

/**
 * Initialize the game when DOM is ready
 */
function initializeGame(): void {
  logger.log('DOM ready, initializing game...');

  // Check for required DOM elements
  const gameContainer = document.getElementById('game-container');
  if (!gameContainer) {
    logger.error('Game container not found');
    return;
  }

  logger.log('Game container found, ready to initialize');

  // The legacy game engine will be loaded via script tag for now
  // until we complete the full migration
  if (typeof window.GameEngine !== 'undefined') {
    logger.log('Legacy GameEngine found, creating instance...');
    const engine = new window.GameEngine();
    window.gameEngine = engine;

    // Setup speech controls if available
    if (engine.setupSpeechControls) {
      engine.setupSpeechControls();
    }

    logger.log('Game engine initialized successfully');
  } else {
    logger.warn('GameEngine not found - ensure game-engine.js is loaded');
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeGame);
} else {
  initializeGame();
}

// Global type declarations for legacy code
declare global {
  interface Window {
    GameEngine: new () => GameEngineInstance;
    gameEngine: GameEngineInstance | undefined;
    paymentSystem: unknown;
    paymentAbstraction: unknown;
    paymentManager: unknown;
    GameConfig: unknown;
    StripePrices: Record<string, string>;
    PaymentConfig: unknown;
    Capacitor?: {
      isNativePlatform: () => boolean;
      getPlatform: () => string;
    };
    Stripe?: (key: string) => unknown;
  }

  interface GameEngineInstance {
    setupSpeechControls?: () => void;
    startGame: () => void;
    loadStory: (story: unknown) => void;
  }
}

export {};

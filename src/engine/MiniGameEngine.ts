/**
 * MiniGameEngine - Handles mini-game integration and lifecycle
 */

import type { MiniGameConfig, MiniGameResult } from '@/types';
import { logger } from '@utils/logger';
import { safeSetHTML, createElement, getElement } from '@utils/dom-utils';

/**
 * Mini-game completion callback type
 */
export type MiniGameCallback = (result: MiniGameResult) => void;

/**
 * External MiniGameEngine interface (from mini-games.js)
 */
interface ExternalMiniGameEngine {
  launchGame: (
    type: string,
    data: MiniGameConfig,
    callback: MiniGameCallback
  ) => void;
}

/**
 * Manages mini-game integration within the main game
 */
export class MiniGameEngine {
  private externalEngine: ExternalMiniGameEngine | null = null;
  private isActive = false;
  private currentCallback: MiniGameCallback | null = null;

  constructor() {
    this.initializeExternalEngine();
  }

  /**
   * Initialize connection to external mini-game engine
   */
  private initializeExternalEngine(): void {
    // Check for global MiniGameEngine from mini-games.js
    const globalEngine = (window as unknown as Record<string, unknown>)
      .MiniGameEngine as (new () => ExternalMiniGameEngine) | undefined;

    if (globalEngine) {
      try {
        this.externalEngine = new globalEngine();
        // Make available globally for legacy code
        (window as unknown as Record<string, unknown>).miniGameEngine =
          this.externalEngine;
        logger.game('Mini-game engine initialized');
      } catch (error) {
        logger.error('Failed to initialize mini-game engine:', error);
      }
    } else {
      logger.warn('MiniGameEngine not loaded from mini-games.js');
    }
  }

  /**
   * Check if mini-game engine is available
   */
  isAvailable(): boolean {
    return this.externalEngine !== null;
  }

  /**
   * Check if a mini-game is currently active
   */
  isGameActive(): boolean {
    return this.isActive;
  }

  /**
   * Launch a mini-game
   */
  launchGame(
    type: string,
    config: MiniGameConfig,
    onComplete: MiniGameCallback
  ): void {
    if (!this.externalEngine) {
      logger.error('Mini-game engine not available');
      onComplete({ success: false, score: 0 });
      return;
    }

    if (this.isActive) {
      logger.warn('Another mini-game is already active');
      return;
    }

    this.isActive = true;
    this.currentCallback = onComplete;

    logger.game('Launching mini-game:', type, config.title);

    try {
      this.externalEngine.launchGame(type, config, result => {
        this.handleGameComplete(result);
      });
    } catch (error) {
      logger.error('Failed to launch mini-game:', error);
      this.isActive = false;
      onComplete({ success: false, score: 0 });
    }
  }

  /**
   * Handle mini-game completion
   */
  private handleGameComplete(result: MiniGameResult): void {
    logger.game('Mini-game completed:', result);
    this.isActive = false;

    const callback = this.currentCallback;
    this.currentCallback = null;

    callback?.(result);
  }

  /**
   * Show mini-game loading UI
   */
  showLoadingUI(title: string, description: string): void {
    const storyText = getElement('story-text');
    if (!storyText) return;

    safeSetHTML(
      storyText,
      `
      <div class="mini-game-loading">
        <div class="loading-icon">🎮</div>
        <h3>LAUNCHING INTERACTIVE ANALYSIS</h3>
        <p class="game-title">${title}</p>
        <p class="game-description">${description}</p>
        <div class="loading-spinner"></div>
        <p class="loading-message">Prepare to reconstruct classified evidence...</p>
      </div>
    `
    );
  }

  /**
   * Create mini-game container
   */
  createGameContainer(): HTMLElement {
    // Remove any existing container
    const existing = getElement('mini-game-container');
    if (existing) {
      existing.remove();
    }

    const container = createElement('div', {
      id: 'mini-game-container',
      className: 'mini-game-container',
    });

    container.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.95);
      z-index: 1000;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    `;

    document.body.appendChild(container);
    return container;
  }

  /**
   * Remove mini-game container
   */
  removeGameContainer(): void {
    const container = getElement('mini-game-container');
    if (container) {
      container.style.opacity = '0';
      setTimeout(() => container.remove(), 300);
    }
    this.isActive = false;
  }

  /**
   * Cleanup mini-game resources
   */
  cleanup(): void {
    this.removeGameContainer();
    this.currentCallback = null;
    this.isActive = false;
  }
}

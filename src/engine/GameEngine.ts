/**
 * GameEngine - Main orchestrator that coordinates all game systems
 *
 * Combines:
 * - StateManager: Game state persistence
 * - UIManager: DOM manipulation and typewriter
 * - AudioManager: Music, SFX, speech
 * - SceneManager: Scene loading and navigation
 * - CaseSelector: Case selection screen
 * - QuizManager: Quiz mechanics
 * - BadgeManager: Badge awards
 * - MiniGameEngine: Mini-game integration
 * - ErrorRecovery: Error handling
 */

import type { Choice, MiniGameConfig, MiniGameResult } from '@/types';
import { StateManager } from './StateManager';
import { UIManager } from './UIManager';
import { AudioManager } from './AudioManager';
import { SceneManager } from './SceneManager';
import { CaseSelector, type StoryEntry } from './CaseSelector';
import { QuizManager } from './QuizManager';
import { BadgeManager } from './BadgeManager';
import { MiniGameEngine } from './MiniGameEngine';
import { ErrorRecovery } from './ErrorRecovery';
import { logger } from '@utils/logger';
import { getElement } from '@utils/dom-utils';
import { GAME_CONFIG } from '@config/index';

/**
 * Main game engine that orchestrates all subsystems
 */
export class GameEngine {
  // Core managers
  private stateManager: StateManager;
  private uiManager: UIManager;
  private audioManager: AudioManager;
  private sceneManager: SceneManager;
  private caseSelector: CaseSelector;
  private quizManager: QuizManager;
  private badgeManager: BadgeManager;
  private miniGameEngine: MiniGameEngine;
  private errorRecovery: ErrorRecovery;

  // Game state
  private initialized = false;

  constructor() {
    // Initialize all managers
    this.stateManager = new StateManager();
    this.uiManager = new UIManager();
    this.audioManager = new AudioManager();
    this.errorRecovery = new ErrorRecovery();

    // Initialize managers with dependencies
    this.sceneManager = new SceneManager(
      this.stateManager,
      this.uiManager,
      this.audioManager,
      this.errorRecovery
    );

    this.caseSelector = new CaseSelector(this.uiManager, this.audioManager);

    this.quizManager = new QuizManager(this.stateManager, this.uiManager);

    this.badgeManager = new BadgeManager(this.stateManager, this.uiManager);

    this.miniGameEngine = new MiniGameEngine();

    // Setup callbacks
    this.setupCallbacks();

    // Initialize the game
    this.initialize();
  }

  /**
   * Setup inter-module callbacks
   */
  private setupCallbacks(): void {
    // Error recovery - return to menu
    this.errorRecovery.setReturnToMenuCallback(() => {
      this.returnToMainMenu();
    });

    // Case selector - handle case selection
    this.caseSelector.setSelectionCallback((entry: StoryEntry) => {
      this.loadCase(entry);
    });

    // Scene manager - handle choices
    this.sceneManager.setChoiceCallback((choice: Choice) => {
      this.handleChoice(choice);
    });

    // Scene manager - handle mini-games
    this.sceneManager.setMiniGameCallback(
      (choice: Choice, gameData: unknown) => {
        this.handleMiniGame(choice, gameData as MiniGameConfig);
      }
    );
  }

  /**
   * Initialize the game
   */
  private async initialize(): Promise<void> {
    if (this.initialized) return;

    logger.game('Initializing game engine...');

    try {
      // Setup global error handlers
      this.errorRecovery.setupGlobalHandlers();

      // Initialize audio
      await this.audioManager.initialize();

      // Setup UI interactions
      this.setupUIInteractions();

      // Setup main menu button
      this.setupMainMenuButton();

      // Show loading screen
      this.uiManager.showLoadingScreen();

      // Initialize after delay
      setTimeout(() => {
        this.uiManager.hideLoadingScreen();
        this.audioManager.playBackgroundMusic();
        this.startGame();
        this.initialized = true;
      }, GAME_CONFIG.loadingDelay);

      logger.game('Game engine initialized');
    } catch (error) {
      logger.error('Failed to initialize game engine:', error);
      this.errorRecovery.handleCriticalError(
        error instanceof Error ? error : new Error(String(error))
      );
    }
  }

  /**
   * Setup UI interactions (click to skip, etc.)
   */
  private setupUIInteractions(): void {
    this.uiManager.setupClickToSkip(() => {
      this.uiManager.requestSkipTyping();
    });
  }

  /**
   * Setup main menu button handlers
   */
  private setupMainMenuButton(): void {
    const mainMenuBtn = getElement('main-menu-btn');
    const mainMenuModal = getElement('main-menu-modal');
    const confirmBtn = getElement('confirm-main-menu');
    const cancelBtn = getElement('cancel-main-menu');
    const modalOverlay = mainMenuModal?.querySelector('.modal-overlay');

    if (!mainMenuBtn || !mainMenuModal) {
      logger.warn('Main menu elements not found');
      return;
    }

    // Show modal on button click
    mainMenuBtn.addEventListener('click', () => {
      this.audioManager.playButtonClick();
      mainMenuModal.classList.remove('hidden');
    });

    // Confirm - return to main menu
    confirmBtn?.addEventListener('click', () => {
      this.audioManager.playButtonClick();
      mainMenuModal.classList.add('hidden');
      this.returnToMainMenu();
    });

    // Cancel - close modal
    cancelBtn?.addEventListener('click', () => {
      this.audioManager.playButtonClick();
      mainMenuModal.classList.add('hidden');
    });

    // Click outside to close
    modalOverlay?.addEventListener('click', () => {
      mainMenuModal.classList.add('hidden');
    });

    // Escape key to close
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && !mainMenuModal.classList.contains('hidden')) {
        mainMenuModal.classList.add('hidden');
      }
    });
  }

  /**
   * Start the game (show case selection or load story)
   */
  startGame(): void {
    logger.game('Starting game...');

    const availableStories = this.caseSelector.getAvailableStories();

    if (availableStories.length > 1) {
      this.hideMainMenuButton();
      this.caseSelector.showCaseSelection(availableStories);
    } else if (availableStories.length === 1) {
      const story = availableStories[0];
      if (story) {
        this.loadCase(story);
      }
    } else {
      logger.error('No valid stories loaded');
      this.errorRecovery.showErrorToUser(
        'No case files are available. Please refresh the page.',
        true
      );
    }
  }

  /**
   * Load a selected case
   */
  private loadCase(entry: StoryEntry): void {
    logger.game('Loading case:', entry.name);

    // Show main menu button
    this.showMainMenuButton();

    // Load the story in scene manager
    this.sceneManager.loadStory(entry.story, entry.key, entry.name);
  }

  /**
   * Handle a choice selection
   */
  private handleChoice(choice: Choice): void {
    // Handle quiz answer
    if (choice.quizAnswer !== undefined) {
      const delay = this.quizManager.handleQuizAnswer(choice);

      // Delay before processing effects and loading next scene
      setTimeout(() => {
        this.sceneManager.processChoiceEffects(choice);
        this.badgeManager.checkAndAwardBadges(choice);
        this.sceneManager.loadScene(choice.nextScene);
      }, delay);
      return;
    }

    // Check for badges
    this.badgeManager.checkAndAwardBadges(choice);
  }

  /**
   * Handle mini-game trigger
   */
  private handleMiniGame(choice: Choice, gameData: MiniGameConfig): void {
    const targetScene = choice.nextScene;

    // Show loading UI
    this.miniGameEngine.showLoadingUI(
      gameData.title ?? 'Interactive Analysis',
      gameData.description ?? 'Analyze the evidence'
    );

    // Launch mini-game after brief delay
    setTimeout(() => {
      this.miniGameEngine.launchGame(gameData.type, gameData, result => {
        // Handle completion
        if (result.success) {
          this.sceneManager.processChoiceEffects(choice);
          this.badgeManager.checkAndAwardBadges(choice);
        }

        // Load target scene
        this.sceneManager.loadScene(targetScene);
      });
    }, 1500);
  }

  /**
   * Return to main menu
   */
  returnToMainMenu(): void {
    logger.game('Returning to main menu...');

    // Stop speech
    this.audioManager.stopSpeech();

    // Clear game state
    this.stateManager.clearState();

    // Clear scene manager state
    this.sceneManager.clearStory();

    // Hide main menu button
    this.hideMainMenuButton();

    // Reset UI
    this.uiManager.resetCaseTitle();

    // Show case selection
    this.startGame();
  }

  /**
   * Show main menu button
   */
  private showMainMenuButton(): void {
    const btn = getElement('main-menu-btn');
    btn?.classList.remove('hidden');
  }

  /**
   * Hide main menu button
   */
  private hideMainMenuButton(): void {
    const btn = getElement('main-menu-btn');
    btn?.classList.add('hidden');
  }

  /**
   * Cleanup game resources
   */
  cleanup(): void {
    this.audioManager.cleanup();
    this.miniGameEngine.cleanup();
    this.stateManager.clearState();
  }

  // ========================================
  // Public API for external access
  // ========================================

  /**
   * Get current game state
   */
  getState() {
    return this.stateManager.getState();
  }

  /**
   * Get current scene
   */
  getCurrentScene() {
    return this.sceneManager.getCurrentScene();
  }

  /**
   * Get current story
   */
  getCurrentStory() {
    return this.sceneManager.getCurrentStory();
  }

  /**
   * Launch a mini-game (public API for external triggers)
   */
  launchMiniGame(
    type: string,
    config: MiniGameConfig,
    onComplete: (result: MiniGameResult) => void
  ): void {
    this.miniGameEngine.launchGame(type, config, onComplete);
  }

  /**
   * Check if speech is enabled
   */
  isSpeechEnabled(): boolean {
    return this.audioManager.isSpeechEnabled();
  }

  /**
   * Toggle speech
   */
  toggleSpeech(): boolean {
    return this.audioManager.toggleSpeech();
  }
}

// Export as global for compatibility with legacy code
if (typeof window !== 'undefined') {
  (window as unknown as Record<string, unknown>).GameEngine = GameEngine;
}

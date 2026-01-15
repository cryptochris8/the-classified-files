/**
 * SceneManager - Handles scene loading, navigation, and scene effects
 */

import type { Scene, Story, Choice } from '@/types';
import type { StateManager } from './StateManager';
import type { UIManager } from './UIManager';
import type { AudioManager } from './AudioManager';
import type { ErrorRecovery } from './ErrorRecovery';
import { logger } from '@utils/logger';
import { createElement, getElement } from '@utils/dom-utils';

/**
 * Scene effect type definition
 */
interface SceneEffect {
  type: 'suspense_pause' | 'document_flash';
  delay?: number;
  text?: string;
}

/**
 * Manages scene loading and navigation
 */
export class SceneManager {
  private stateManager: StateManager;
  private uiManager: UIManager;
  private audioManager: AudioManager;
  private errorRecovery: ErrorRecovery;

  private currentStory: Story | null = null;
  private currentStoryKey: string | null = null;
  private currentScene: Scene | null = null;
  private currentSceneName: string | null = null;

  private onChoiceMade: ((choice: Choice) => void) | null = null;
  private onMiniGameTrigger:
    | ((choice: Choice, gameData: unknown) => void)
    | null = null;

  constructor(
    stateManager: StateManager,
    uiManager: UIManager,
    audioManager: AudioManager,
    errorRecovery: ErrorRecovery
  ) {
    this.stateManager = stateManager;
    this.uiManager = uiManager;
    this.audioManager = audioManager;
    this.errorRecovery = errorRecovery;
  }

  /**
   * Set callback for when a choice is made
   */
  setChoiceCallback(callback: (choice: Choice) => void): void {
    this.onChoiceMade = callback;
  }

  /**
   * Set callback for mini-game triggers
   */
  setMiniGameCallback(
    callback: (choice: Choice, gameData: unknown) => void
  ): void {
    this.onMiniGameTrigger = callback;
  }

  /**
   * Load a story for gameplay
   */
  loadStory(story: Story, key: string, name: string): void {
    this.currentStory = story;
    this.currentStoryKey = key;

    // Update available scenes for error recovery
    this.errorRecovery.setAvailableScenes(Object.keys(story.scenes));

    // Update case title
    this.uiManager.updateCaseTitle(name);

    logger.game(
      `Loaded: ${name} with ${Object.keys(story.scenes).length} scenes`
    );
    logger.debug('Available scenes:', Object.keys(story.scenes));

    // Clear any existing choices and load intro
    this.uiManager.clearChoices();
    this.loadScene('intro');
  }

  /**
   * Load a specific scene by ID
   */
  loadScene(sceneId: string): void {
    logger.debug('Attempting to load scene:', sceneId);

    if (!this.currentStory) {
      logger.error('No story loaded');
      this.errorRecovery.showErrorToUser('No story is currently loaded.');
      return;
    }

    // Check if scene exists
    if (!this.currentStory.scenes[sceneId]) {
      logger.error('Scene not found:', sceneId);
      logger.error(
        'Available scenes:',
        Object.keys(this.currentStory.scenes)
      );

      // Try error recovery fallback
      const fallbackScene = this.errorRecovery.handleSceneError(sceneId);
      if (fallbackScene) {
        sceneId = fallbackScene;
      } else {
        return;
      }
    }

    logger.game('Scene found:', sceneId);

    this.currentSceneName = sceneId;
    this.currentScene = this.currentStory.scenes[sceneId] ?? null;

    if (!this.currentScene) {
      logger.error('Scene became null after lookup:', sceneId);
      return;
    }

    this.stateManager.markSceneVisited(sceneId);

    // Clear previous choices
    this.uiManager.clearChoices();

    // Update document/image
    this.updateSceneImage();

    // Capture scene reference for callback
    const scene = this.currentScene;

    // Display text with typewriter effect, then show choices
    this.uiManager.typewriterText(scene.text, () => {
      // Speak text if speech enabled
      if (this.audioManager.isSpeechEnabled()) {
        this.audioManager.speakText(scene.text);
      }

      this.displayChoices();
      this.displaySources();
      this.displayEducationalNote();
      this.stateManager.updateProgress(0); // Trigger progress update
      this.processSceneEffects();
    });
  }

  /**
   * Get current scene
   */
  getCurrentScene(): Scene | null {
    return this.currentScene;
  }

  /**
   * Get current scene name
   */
  getCurrentSceneName(): string | null {
    return this.currentSceneName;
  }

  /**
   * Get current story
   */
  getCurrentStory(): Story | null {
    return this.currentStory;
  }

  /**
   * Get current story key
   */
  getCurrentStoryKey(): string | null {
    return this.currentStoryKey;
  }

  /**
   * Update scene image/document display
   */
  private updateSceneImage(): void {
    if (!this.currentScene) return;

    if (this.currentScene.image) {
      this.uiManager.updateDocumentImage(this.currentScene.image);
    } else {
      this.uiManager.clearDocumentImage();
    }
  }

  /**
   * Display choices for current scene
   */
  private displayChoices(): void {
    const container = this.uiManager.getChoicesContainer();
    if (!container || !this.currentScene) return;

    const choices = this.currentScene.choices;

    // Handle campaign end (no choices)
    if (!choices || choices.length === 0) {
      this.displayCampaignEnd(container);
      return;
    }

    // Add prompt text
    this.displayChoicePrompt(container);

    // Display each choice button with animation
    choices.forEach((choice, index) => {
      setTimeout(() => {
        this.createChoiceButton(container, choice, index);
      }, index * 200);
    });
  }

  /**
   * Display campaign end UI
   */
  private displayCampaignEnd(container: HTMLElement): void {
    const endPrompt = createElement('p', {
      className: 'choice-prompt',
      textContent: 'Investigation Complete',
    });
    container.appendChild(endPrompt);

    const backButton = createElement('button', {
      className: 'choice-button main-menu-button',
      textContent: '🏠 Back to Main Menu',
    });

    backButton.onclick = () => {
      this.audioManager.playButtonClick();
      this.stateManager.clearState();
      window.location.href = 'index.html';
    };

    // Animate button
    backButton.style.opacity = '0';
    backButton.style.transform = 'translateY(20px)';
    container.appendChild(backButton);

    setTimeout(() => {
      backButton.style.transition = 'all 0.5s ease';
      backButton.style.opacity = '1';
      backButton.style.transform = 'translateY(0)';
    }, 100);
  }

  /**
   * Display choice prompt text
   */
  private displayChoicePrompt(container: HTMLElement): void {
    const scene = this.currentScene;
    if (!scene) return;

    let promptText = scene.prompt;

    if (!promptText && scene.choices && scene.choices.length > 0) {
      const defaultPrompts = [
        'What would you like to do?',
        'How will you proceed?',
        "What's your next move?",
        'Choose your approach:',
        'What action will you take?',
        'How do you want to investigate?',
        'Select your next step:',
        "What's your decision?",
        'Which path will you follow?',
        'How will you continue your investigation?',
      ];

      promptText =
        defaultPrompts[Math.floor(Math.random() * defaultPrompts.length)];
    }

    if (promptText) {
      const promptElement = createElement('p', {
        className: 'choice-prompt',
        textContent: promptText,
      });
      container.appendChild(promptElement);
    }
  }

  /**
   * Create a choice button
   */
  private createChoiceButton(
    container: HTMLElement,
    choice: Choice,
    index: number
  ): void {
    const button = createElement('button', {
      className: 'choice-button',
      textContent: choice.text,
    });

    // Check if visited
    const choiceKey = `${this.currentSceneName}:${index}`;
    if (this.stateManager.isChoiceVisited(choiceKey)) {
      button.classList.add('visited');
    }

    // Add factual class
    if (choice.factual) {
      button.classList.add('factual');
    }

    // Add quiz attribute
    if (this.currentScene?.quizMode || choice.quizAnswer !== undefined) {
      button.setAttribute('data-quiz', 'true');
    }

    // Handle click
    button.onclick = () => {
      this.audioManager.playButtonClick();
      this.stateManager.markChoiceVisited(choiceKey);
      this.handleChoice(choice);
    };

    // Animate in
    button.style.opacity = '0';
    button.style.transform = 'translateY(20px)';
    container.appendChild(button);

    setTimeout(() => {
      button.style.transition = 'all 0.5s ease';
      button.style.opacity = '1';
      button.style.transform = 'translateY(0)';
    }, 100);
  }

  /**
   * Handle a choice selection
   */
  private handleChoice(choice: Choice): void {
    this.stateManager.recordChoice(choice.text);

    // Notify callback
    this.onChoiceMade?.(choice);

    // Check for mini-game
    if (choice.miniGame && this.onMiniGameTrigger) {
      this.handleMiniGameChoice(choice);
      return;
    }

    // Normal choice flow
    this.processChoiceEffects(choice);
    this.audioManager.playChoiceSound();
    this.loadScene(choice.nextScene);
  }

  /**
   * Handle mini-game choice
   */
  private handleMiniGameChoice(choice: Choice): void {
    const targetScene = choice.nextScene;
    const nextScene = this.currentStory?.scenes[targetScene];

    if (!nextScene?.miniGameData) {
      logger.error('Mini-game data not found for scene:', targetScene);
      this.loadScene(targetScene);
      return;
    }

    this.onMiniGameTrigger?.(choice, nextScene.miniGameData);
  }

  /**
   * Process choice effects (evidence, progress)
   */
  processChoiceEffects(choice: Choice): void {
    if (choice.evidence) {
      this.stateManager.addEvidence();
      this.uiManager.updateEvidenceCount(
        this.stateManager.getState().evidenceCount
      );
    }

    if (choice.progressIncrease) {
      this.stateManager.updateProgress(choice.progressIncrease);
      this.uiManager.updateProgressBar(
        this.stateManager.getState().investigationProgress
      );
    }
  }

  /**
   * Display sources section
   */
  private displaySources(): void {
    if (this.currentScene?.sources) {
      this.uiManager.displaySources(this.currentScene.sources);
    }
  }

  /**
   * Display educational note
   */
  private displayEducationalNote(): void {
    if (this.currentScene?.educationalNote) {
      this.uiManager.displayEducationalNote(this.currentScene.educationalNote);
    }
  }

  /**
   * Process scene special effects
   */
  private processSceneEffects(): void {
    const effects = this.currentScene?.effects as SceneEffect[] | undefined;
    if (!effects) return;

    effects.forEach(effect => {
      switch (effect.type) {
        case 'suspense_pause':
          if (effect.text) {
            setTimeout(() => {
              this.addSuspenseText(effect.text!);
            }, effect.delay ?? 2000);
          }
          break;
        case 'document_flash':
          this.uiManager.flashDocument();
          break;
      }
    });
  }

  /**
   * Add suspense text to current scene
   */
  private addSuspenseText(text: string): void {
    const storyText = getElement('story-text');
    if (!storyText) return;

    const suspenseDiv = createElement('div', {
      className: 'story-paragraph',
      textContent: text,
    });
    suspenseDiv.style.color = '#ff6b6b';
    suspenseDiv.style.fontStyle = 'italic';

    storyText.appendChild(suspenseDiv);
  }

  /**
   * Clear current story state
   */
  clearStory(): void {
    this.currentStory = null;
    this.currentStoryKey = null;
    this.currentScene = null;
    this.currentSceneName = null;
  }
}

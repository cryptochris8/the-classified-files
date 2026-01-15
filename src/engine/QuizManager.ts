/**
 * QuizManager - Handles quiz questions, scoring, and feedback
 */

import type { Choice } from '@/types';
import type { StateManager } from './StateManager';
import type { UIManager } from './UIManager';
import { safeSetHTML, createElement } from '@utils/dom-utils';

/**
 * Manages quiz mechanics within the game
 */
export class QuizManager {
  private stateManager: StateManager;

  constructor(stateManager: StateManager, _uiManager: UIManager) {
    this.stateManager = stateManager;
    // UIManager kept in signature for future use
  }

  /**
   * Handle a quiz answer selection
   * @returns Delay in milliseconds before proceeding to next scene
   */
  handleQuizAnswer(choice: Choice): number {
    const quizAnswer = choice.quizAnswer;
    if (quizAnswer === undefined) {
      return 0;
    }

    this.stateManager.recordQuizAnswer(quizAnswer);

    if (quizAnswer === true) {
      this.showFeedback(
        true,
        'Correct! Excellent knowledge of the facts.'
      );
    } else if (quizAnswer === 'partial') {
      this.showFeedback(
        'partial',
        'Partially correct - this shows good understanding.'
      );
    } else {
      this.showFeedback(
        false,
        'Incorrect. Learning the facts will help your investigation.'
      );
    }

    this.updateKnowledgeDisplay();

    // Return delay time for feedback to be visible
    return 2500;
  }

  /**
   * Show quiz feedback UI
   */
  private showFeedback(
    correct: boolean | 'partial',
    message: string
  ): void {
    const storyText = document.getElementById('story-text');
    if (!storyText) return;

    const feedbackClass =
      correct === true
        ? 'correct'
        : correct === 'partial'
          ? 'partial'
          : 'incorrect';

    const feedbackIcon =
      correct === true ? '✓' : correct === 'partial' ? '~' : '✗';

    const feedbackDiv = createElement('div', {
      className: `quiz-feedback ${feedbackClass}`,
    });

    safeSetHTML(
      feedbackDiv,
      `
      <div class="feedback-icon">${feedbackIcon}</div>
      <div class="feedback-message">${message}</div>
    `
    );

    storyText.appendChild(feedbackDiv);

    // Fade out after delay
    setTimeout(() => {
      feedbackDiv.style.opacity = '0.7';
    }, 3000);
  }

  /**
   * Update knowledge score display in UI
   */
  updateKnowledgeDisplay(): void {
    const stats = this.stateManager.getQuizStats();
    const knowledgeDisplay =
      document.getElementById('knowledge-score') ||
      this.createKnowledgeDisplay();

    if (knowledgeDisplay) {
      knowledgeDisplay.textContent = `Knowledge: ${stats.score}/${stats.total}`;
    }
  }

  /**
   * Create knowledge display element if it doesn't exist
   */
  private createKnowledgeDisplay(): HTMLElement | null {
    const statusBar = document.getElementById('status-bar');
    if (!statusBar) return null;

    const stats = this.stateManager.getQuizStats();
    const knowledgeDiv = createElement('div', {
      className: 'knowledge-display',
      id: 'knowledge-score',
      textContent: `Knowledge: ${stats.score}/${stats.total}`,
    });

    statusBar.appendChild(knowledgeDiv);
    return knowledgeDiv;
  }

  /**
   * Check if player qualifies for perfect knowledge badge
   */
  checkPerfectKnowledge(): boolean {
    const stats = this.stateManager.getQuizStats();
    return stats.total >= 3 && stats.correct === stats.total;
  }
}

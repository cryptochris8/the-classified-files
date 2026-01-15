/**
 * QuizManager Tests
 *
 * Tests quiz mechanics, scoring, and feedback
 */

import { describe, it, expect, beforeEach, vi } from 'vitest';
import { QuizManager } from '../QuizManager';
import { StateManager } from '../StateManager';
import { UIManager } from '../UIManager';
import type { Choice } from '@/types';

// Mock UIManager
vi.mock('../UIManager', () => {
  return {
    UIManager: vi.fn().mockImplementation(function(this: Record<string, unknown>) {
      this.clearChoices = vi.fn();
      this.getChoicesContainer = vi.fn(() => document.createElement('div'));
      this.updateProgressBar = vi.fn();
      this.updateEvidenceCount = vi.fn();
      return this;
    }),
  };
});

describe('QuizManager', () => {
  let quizManager: QuizManager;
  let stateManager: StateManager;
  let uiManager: UIManager;

  beforeEach(() => {
    localStorage.clear();

    // Setup DOM elements needed by QuizManager
    document.body.innerHTML = `
      <div id="story-text"></div>
      <div id="status-bar"></div>
    `;

    stateManager = new StateManager();
    uiManager = new UIManager();
    quizManager = new QuizManager(stateManager, uiManager);
  });

  describe('handleQuizAnswer', () => {
    it('should return 0 delay for non-quiz choices', () => {
      const choice: Choice = {
        text: 'Regular choice',
        nextScene: 'next_scene',
      };

      const delay = quizManager.handleQuizAnswer(choice);
      expect(delay).toBe(0);
    });

    it('should return delay for correct quiz answer', () => {
      const choice: Choice = {
        text: 'Correct answer',
        nextScene: 'next_scene',
        quizAnswer: true,
      };

      const delay = quizManager.handleQuizAnswer(choice);
      expect(delay).toBe(2500);
    });

    it('should return delay for incorrect quiz answer', () => {
      const choice: Choice = {
        text: 'Wrong answer',
        nextScene: 'next_scene',
        quizAnswer: false,
      };

      const delay = quizManager.handleQuizAnswer(choice);
      expect(delay).toBe(2500);
    });

    it('should return delay for partial quiz answer', () => {
      const choice: Choice = {
        text: 'Partial answer',
        nextScene: 'next_scene',
        quizAnswer: 'partial',
      };

      const delay = quizManager.handleQuizAnswer(choice);
      expect(delay).toBe(2500);
    });

    it('should record correct answer in state', () => {
      const choice: Choice = {
        text: 'Correct answer',
        nextScene: 'next_scene',
        quizAnswer: true,
      };

      quizManager.handleQuizAnswer(choice);

      const stats = stateManager.getQuizStats();
      expect(stats.correct).toBe(1);
      expect(stats.total).toBe(1);
    });

    it('should record incorrect answer in state', () => {
      const choice: Choice = {
        text: 'Wrong answer',
        nextScene: 'next_scene',
        quizAnswer: false,
      };

      quizManager.handleQuizAnswer(choice);

      const stats = stateManager.getQuizStats();
      expect(stats.correct).toBe(0);
      expect(stats.total).toBe(1);
    });

    it('should record partial answer in state', () => {
      const choice: Choice = {
        text: 'Partial answer',
        nextScene: 'next_scene',
        quizAnswer: 'partial',
      };

      quizManager.handleQuizAnswer(choice);

      const stats = stateManager.getQuizStats();
      expect(stats.score).toBe(0.5);
      expect(stats.total).toBe(1);
    });

    it('should display feedback for correct answer', () => {
      const storyText = document.getElementById('story-text')!;

      const choice: Choice = {
        text: 'Correct answer',
        nextScene: 'next_scene',
        quizAnswer: true,
      };

      quizManager.handleQuizAnswer(choice);

      expect(storyText.querySelector('.quiz-feedback')).toBeTruthy();
      expect(storyText.querySelector('.correct')).toBeTruthy();
    });

    it('should display feedback for incorrect answer', () => {
      const storyText = document.getElementById('story-text')!;

      const choice: Choice = {
        text: 'Wrong answer',
        nextScene: 'next_scene',
        quizAnswer: false,
      };

      quizManager.handleQuizAnswer(choice);

      expect(storyText.querySelector('.quiz-feedback')).toBeTruthy();
      expect(storyText.querySelector('.incorrect')).toBeTruthy();
    });

    it('should display feedback for partial answer', () => {
      const storyText = document.getElementById('story-text')!;

      const choice: Choice = {
        text: 'Partial answer',
        nextScene: 'next_scene',
        quizAnswer: 'partial',
      };

      quizManager.handleQuizAnswer(choice);

      expect(storyText.querySelector('.quiz-feedback')).toBeTruthy();
      expect(storyText.querySelector('.partial')).toBeTruthy();
    });
  });

  describe('updateKnowledgeDisplay', () => {
    it('should create knowledge display if not exists', () => {
      quizManager.updateKnowledgeDisplay();

      const knowledgeDisplay = document.getElementById('knowledge-score');
      expect(knowledgeDisplay).toBeTruthy();
    });

    it('should update existing knowledge display', () => {
      // First call creates it
      quizManager.updateKnowledgeDisplay();

      // Record some answers
      stateManager.recordQuizAnswer(true);
      stateManager.recordQuizAnswer(false);

      // Update display
      quizManager.updateKnowledgeDisplay();

      const knowledgeDisplay = document.getElementById('knowledge-score');
      expect(knowledgeDisplay?.textContent).toBe('Knowledge: 1/2');
    });

    it('should show correct score format', () => {
      stateManager.recordQuizAnswer(true);
      stateManager.recordQuizAnswer(true);
      stateManager.recordQuizAnswer('partial');

      quizManager.updateKnowledgeDisplay();

      const knowledgeDisplay = document.getElementById('knowledge-score');
      expect(knowledgeDisplay?.textContent).toBe('Knowledge: 2.5/3');
    });
  });

  describe('checkPerfectKnowledge', () => {
    it('should return false with no answers', () => {
      expect(quizManager.checkPerfectKnowledge()).toBe(false);
    });

    it('should return false with fewer than 3 answers', () => {
      stateManager.recordQuizAnswer(true);
      stateManager.recordQuizAnswer(true);

      expect(quizManager.checkPerfectKnowledge()).toBe(false);
    });

    it('should return true with 3+ correct answers', () => {
      stateManager.recordQuizAnswer(true);
      stateManager.recordQuizAnswer(true);
      stateManager.recordQuizAnswer(true);

      expect(quizManager.checkPerfectKnowledge()).toBe(true);
    });

    it('should return false with any wrong answers', () => {
      stateManager.recordQuizAnswer(true);
      stateManager.recordQuizAnswer(true);
      stateManager.recordQuizAnswer(false);
      stateManager.recordQuizAnswer(true);

      expect(quizManager.checkPerfectKnowledge()).toBe(false);
    });
  });
});

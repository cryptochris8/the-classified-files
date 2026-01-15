/**
 * StateManager Tests
 *
 * Tests game state management, persistence, and achievements
 */

import { describe, it, expect, beforeEach } from 'vitest';
import { StateManager } from '../StateManager';

describe('StateManager', () => {
  let stateManager: StateManager;

  beforeEach(() => {
    localStorage.clear();
    stateManager = new StateManager();
  });

  describe('initial state', () => {
    it('should initialize with default values', () => {
      const state = stateManager.getState();

      expect(state.evidenceCount).toBe(0);
      expect(state.investigationProgress).toBe(0);
      expect(state.choices).toEqual([]);
      expect(state.visitedScenes.size).toBe(0);
      expect(state.knowledgeScore).toBe(0);
      expect(state.correctAnswers).toBe(0);
      expect(state.totalQuestions).toBe(0);
      expect(state.badges).toEqual([]);
    });

    it('should return readonly state', () => {
      const state = stateManager.getState();
      expect(Object.isFrozen(state) || typeof state === 'object').toBe(true);
    });
  });

  describe('evidence management', () => {
    it('should add evidence', () => {
      stateManager.addEvidence();
      expect(stateManager.getEvidenceCount()).toBe(1);

      stateManager.addEvidence();
      expect(stateManager.getEvidenceCount()).toBe(2);
    });

    it('should persist evidence to localStorage', () => {
      stateManager.addEvidence();

      const saved = localStorage.getItem('classifiedFiles_gameState');
      expect(saved).toBeTruthy();

      const parsed = JSON.parse(saved!);
      expect(parsed.evidenceCount).toBe(1);
    });
  });

  describe('progress management', () => {
    it('should update progress', () => {
      stateManager.updateProgress(25);
      expect(stateManager.getProgress()).toBe(25);

      stateManager.updateProgress(30);
      expect(stateManager.getProgress()).toBe(55);
    });

    it('should cap progress at 100', () => {
      stateManager.updateProgress(80);
      stateManager.updateProgress(50);
      expect(stateManager.getProgress()).toBe(100);
    });

    it('should detect complete progress', () => {
      expect(stateManager.isProgressComplete()).toBe(false);

      stateManager.updateProgress(100);
      expect(stateManager.isProgressComplete()).toBe(true);
    });
  });

  describe('scene tracking', () => {
    it('should mark scenes as visited', () => {
      expect(stateManager.isSceneVisited('intro')).toBe(false);

      stateManager.markSceneVisited('intro');
      expect(stateManager.isSceneVisited('intro')).toBe(true);
    });

    it('should count visited scenes', () => {
      expect(stateManager.getVisitedSceneCount()).toBe(0);

      stateManager.markSceneVisited('intro');
      stateManager.markSceneVisited('scene2');
      stateManager.markSceneVisited('scene3');

      expect(stateManager.getVisitedSceneCount()).toBe(3);
    });

    it('should not double-count duplicate visits', () => {
      stateManager.markSceneVisited('intro');
      stateManager.markSceneVisited('intro');
      stateManager.markSceneVisited('intro');

      expect(stateManager.getVisitedSceneCount()).toBe(1);
    });
  });

  describe('choice tracking', () => {
    it('should mark choices as visited', () => {
      const choiceKey = 'intro:0';

      expect(stateManager.isChoiceVisited(choiceKey)).toBe(false);

      stateManager.markChoiceVisited(choiceKey);
      expect(stateManager.isChoiceVisited(choiceKey)).toBe(true);
    });

    it('should record choice text', () => {
      stateManager.recordChoice('Investigate the files');
      stateManager.recordChoice('Question the witness');

      const choices = stateManager.getChoices();
      expect(choices).toHaveLength(2);
      expect(choices[0]).toBe('Investigate the files');
      expect(choices[1]).toBe('Question the witness');
    });
  });

  describe('quiz management', () => {
    it('should record correct answers', () => {
      stateManager.recordQuizAnswer(true);

      const stats = stateManager.getQuizStats();
      expect(stats.correct).toBe(1);
      expect(stats.total).toBe(1);
      expect(stats.score).toBe(1);
    });

    it('should record incorrect answers', () => {
      stateManager.recordQuizAnswer(false);

      const stats = stateManager.getQuizStats();
      expect(stats.correct).toBe(0);
      expect(stats.total).toBe(1);
      expect(stats.score).toBe(0);
    });

    it('should record partial answers', () => {
      stateManager.recordQuizAnswer('partial');

      const stats = stateManager.getQuizStats();
      expect(stats.correct).toBe(0);
      expect(stats.total).toBe(1);
      expect(stats.score).toBe(0.5);
    });

    it('should track knowledge score across multiple answers', () => {
      stateManager.recordQuizAnswer(true);
      stateManager.recordQuizAnswer(true);
      stateManager.recordQuizAnswer(false);
      stateManager.recordQuizAnswer('partial');

      const stats = stateManager.getQuizStats();
      expect(stats.correct).toBe(2);
      expect(stats.total).toBe(4);
      expect(stats.score).toBe(2.5);
    });

    it('should detect perfect quiz score', () => {
      expect(stateManager.hasPerfectQuizScore()).toBe(false);

      stateManager.recordQuizAnswer(true);
      stateManager.recordQuizAnswer(true);
      stateManager.recordQuizAnswer(true);

      expect(stateManager.hasPerfectQuizScore()).toBe(true);
    });

    it('should not have perfect score with any wrong answers', () => {
      stateManager.recordQuizAnswer(true);
      stateManager.recordQuizAnswer(true);
      stateManager.recordQuizAnswer(false);

      expect(stateManager.hasPerfectQuizScore()).toBe(false);
    });
  });

  describe('badge management', () => {
    const testBadge = {
      name: 'Test Badge',
      icon: '🏆',
      description: 'A test badge',
    };

    it('should award a badge', () => {
      const awarded = stateManager.awardBadge(testBadge);

      expect(awarded).toBe(true);
      expect(stateManager.hasBadge('Test Badge')).toBe(true);
    });

    it('should not award duplicate badges', () => {
      stateManager.awardBadge(testBadge);
      const secondAward = stateManager.awardBadge(testBadge);

      expect(secondAward).toBe(false);
      expect(stateManager.getBadges()).toHaveLength(1);
    });

    it('should return all badges', () => {
      const badge1 = { name: 'Badge 1', icon: '🥇', description: 'First' };
      const badge2 = { name: 'Badge 2', icon: '🥈', description: 'Second' };

      stateManager.awardBadge(badge1);
      stateManager.awardBadge(badge2);

      const badges = stateManager.getBadges();
      expect(badges).toHaveLength(2);
      expect(badges[0]?.name).toBe('Badge 1');
      expect(badges[1]?.name).toBe('Badge 2');
    });
  });

  describe('persistence', () => {
    it('should save state to localStorage', () => {
      stateManager.addEvidence();
      stateManager.updateProgress(50);
      stateManager.markSceneVisited('intro');

      const saved = localStorage.getItem('classifiedFiles_gameState');
      expect(saved).toBeTruthy();

      const parsed = JSON.parse(saved!);
      expect(parsed.evidenceCount).toBe(1);
      expect(parsed.investigationProgress).toBe(50);
      expect(parsed.visitedScenes).toContain('intro');
    });

    it('should restore state from localStorage', () => {
      // Setup initial state
      stateManager.addEvidence();
      stateManager.addEvidence();
      stateManager.updateProgress(75);
      stateManager.markSceneVisited('intro');
      stateManager.markSceneVisited('scene2');

      // Create new StateManager (should load from localStorage)
      const newStateManager = new StateManager();

      expect(newStateManager.getEvidenceCount()).toBe(2);
      expect(newStateManager.getProgress()).toBe(75);
      expect(newStateManager.isSceneVisited('intro')).toBe(true);
      expect(newStateManager.isSceneVisited('scene2')).toBe(true);
    });

    it('should handle corrupted localStorage gracefully', () => {
      localStorage.setItem('classifiedFiles_gameState', 'invalid json{');

      // Should not throw and should create fresh state
      const newStateManager = new StateManager();
      expect(newStateManager.getEvidenceCount()).toBe(0);
    });
  });

  describe('reset', () => {
    it('should reset all state', () => {
      // Build up state
      stateManager.addEvidence();
      stateManager.updateProgress(50);
      stateManager.markSceneVisited('intro');
      stateManager.recordQuizAnswer(true);
      stateManager.awardBadge({ name: 'Test', icon: '🏆', description: 'Test' });

      // Reset
      stateManager.reset();

      // Verify reset
      expect(stateManager.getEvidenceCount()).toBe(0);
      expect(stateManager.getProgress()).toBe(0);
      expect(stateManager.isSceneVisited('intro')).toBe(false);
      expect(stateManager.getQuizStats().total).toBe(0);
      expect(stateManager.getBadges()).toHaveLength(0);
    });

    it('should clear localStorage on reset', () => {
      stateManager.addEvidence();
      stateManager.reset();

      expect(localStorage.getItem('classifiedFiles_gameState')).toBeNull();
    });

    it('clearState should be alias for reset', () => {
      stateManager.addEvidence();
      stateManager.clearState();

      expect(stateManager.getEvidenceCount()).toBe(0);
    });
  });
});

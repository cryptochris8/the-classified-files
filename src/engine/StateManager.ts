/**
 * StateManager - Manages game state and progress tracking
 */

import type { GameState, Badge } from '@/types';
import { createInitialGameState } from '@/types';
import { logger } from '@utils/logger';
import { STORAGE_KEYS } from '@config/index';

/**
 * Manages all game state including progress, evidence, and achievements
 */
export class StateManager {
  private state: GameState;

  constructor() {
    this.state = createInitialGameState();
    this.loadFromStorage();
  }

  /**
   * Get the current game state (readonly)
   */
  getState(): Readonly<GameState> {
    return this.state;
  }

  /**
   * Get evidence count
   */
  getEvidenceCount(): number {
    return this.state.evidenceCount;
  }

  /**
   * Get investigation progress (0-100)
   */
  getProgress(): number {
    return this.state.investigationProgress;
  }

  /**
   * Add evidence item
   */
  addEvidence(): void {
    this.state.evidenceCount++;
    logger.game('Evidence collected. Total:', this.state.evidenceCount);
    this.saveToStorage();
  }

  /**
   * Update investigation progress
   * @param amount - Amount to increase (capped at 100)
   */
  updateProgress(amount: number): void {
    this.state.investigationProgress = Math.min(
      100,
      this.state.investigationProgress + amount
    );
    logger.game('Progress updated:', this.state.investigationProgress);
    this.saveToStorage();
  }

  /**
   * Check if progress is complete
   */
  isProgressComplete(): boolean {
    return this.state.investigationProgress >= 100;
  }

  /**
   * Mark a scene as visited
   */
  markSceneVisited(sceneId: string): void {
    this.state.visitedScenes.add(sceneId);
    this.saveToStorage();
  }

  /**
   * Check if scene has been visited
   */
  isSceneVisited(sceneId: string): boolean {
    return this.state.visitedScenes.has(sceneId);
  }

  /**
   * Get count of visited scenes
   */
  getVisitedSceneCount(): number {
    return this.state.visitedScenes.size;
  }

  /**
   * Mark a choice as visited
   * @param choiceKey - Format: "sceneId:choiceIndex"
   */
  markChoiceVisited(choiceKey: string): void {
    this.state.visitedChoices[choiceKey] = true;
    this.saveToStorage();
  }

  /**
   * Check if choice has been visited
   */
  isChoiceVisited(choiceKey: string): boolean {
    return !!this.state.visitedChoices[choiceKey];
  }

  /**
   * Record a choice made by the player
   */
  recordChoice(choiceText: string): void {
    this.state.choices.push(choiceText);
    this.saveToStorage();
  }

  /**
   * Get all choices made
   */
  getChoices(): readonly string[] {
    return this.state.choices;
  }

  // ========================================
  // Quiz Management
  // ========================================

  /**
   * Record a quiz answer
   */
  recordQuizAnswer(correct: boolean | 'partial'): void {
    this.state.totalQuestions++;

    if (correct === true) {
      this.state.correctAnswers++;
      this.state.knowledgeScore++;
    } else if (correct === 'partial') {
      this.state.knowledgeScore += 0.5;
    }

    this.saveToStorage();
  }

  /**
   * Get knowledge score
   */
  getKnowledgeScore(): number {
    return this.state.knowledgeScore;
  }

  /**
   * Get quiz statistics
   */
  getQuizStats(): { correct: number; total: number; score: number } {
    return {
      correct: this.state.correctAnswers,
      total: this.state.totalQuestions,
      score: this.state.knowledgeScore,
    };
  }

  /**
   * Check if player has perfect quiz score
   */
  hasPerfectQuizScore(): boolean {
    return (
      this.state.totalQuestions > 0 &&
      this.state.correctAnswers === this.state.totalQuestions
    );
  }

  // ========================================
  // Badge Management
  // ========================================

  /**
   * Award a badge to the player
   * @returns true if badge was newly awarded, false if already had it
   */
  awardBadge(badge: Badge): boolean {
    if (this.hasBadge(badge.name)) {
      return false;
    }

    this.state.badges.push(badge);
    logger.game('Badge awarded:', badge.name);
    this.saveToStorage();
    return true;
  }

  /**
   * Check if player has a specific badge
   */
  hasBadge(badgeName: string): boolean {
    return this.state.badges.some(b => b.name === badgeName);
  }

  /**
   * Get all badges
   */
  getBadges(): readonly Badge[] {
    return this.state.badges;
  }

  // ========================================
  // Storage
  // ========================================

  /**
   * Save state to localStorage
   */
  private saveToStorage(): void {
    try {
      const serializable = {
        ...this.state,
        visitedScenes: Array.from(this.state.visitedScenes),
      };
      localStorage.setItem(STORAGE_KEYS.gameState, JSON.stringify(serializable));
    } catch (error) {
      logger.error('Failed to save game state:', error);
    }
  }

  /**
   * Load state from localStorage
   */
  private loadFromStorage(): void {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.gameState);
      if (saved) {
        const parsed = JSON.parse(saved);
        this.state = {
          ...parsed,
          visitedScenes: new Set(parsed.visitedScenes || []),
        };
        logger.game('Game state loaded from storage');
      }
    } catch (error) {
      logger.error('Failed to load game state:', error);
      this.state = createInitialGameState();
    }
  }

  /**
   * Reset all game state
   */
  reset(): void {
    this.state = createInitialGameState();
    localStorage.removeItem(STORAGE_KEYS.gameState);
    localStorage.removeItem(STORAGE_KEYS.currentStory);
    logger.game('Game state reset');
  }

  /**
   * Clear game state (alias for reset)
   */
  clearState(): void {
    this.reset();
  }
}

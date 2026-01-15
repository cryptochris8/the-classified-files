/**
 * BadgeManager - Handles badge awards, notifications, and display
 */

import type { Badge, Choice } from '@/types';
import type { StateManager } from './StateManager';
import type { UIManager } from './UIManager';
import { logger } from '@utils/logger';
import { safeSetHTML, createElement, getElement } from '@utils/dom-utils';
import { GAME_CONFIG } from '@config/index';

/**
 * Badge definitions
 */
export const BADGES = {
  PERFECT_KNOWLEDGE: {
    name: 'Perfect Knowledge',
    icon: 'Trophy',
    description: 'Answered all quiz questions correctly',
  },
  FACT_FINDER: {
    name: 'Fact Finder',
    icon: 'Magnifier',
    description: 'Consistently chose fact-based investigation paths',
  },
  EVIDENCE_MASTER: {
    name: 'Evidence Master',
    icon: 'Clipboard',
    description: 'Collected significant evidence',
  },
} as const;

/**
 * Manages badge system for the game
 */
export class BadgeManager {
  private stateManager: StateManager;

  constructor(stateManager: StateManager, _uiManager: UIManager) {
    this.stateManager = stateManager;
    // UIManager kept in signature for future use
  }

  /**
   * Check and award badges based on current state
   */
  checkAndAwardBadges(choice?: Choice): void {
    const state = this.stateManager.getState();

    // Perfect Knowledge Badge
    if (this.stateManager.hasPerfectQuizScore()) {
      const stats = this.stateManager.getQuizStats();
      if (stats.total >= GAME_CONFIG.perfectKnowledgeThreshold) {
        this.awardBadge(BADGES.PERFECT_KNOWLEDGE);
      }
    }

    // Fact Finder Badge
    if (choice?.factual && state.evidenceCount >= GAME_CONFIG.factFinderThreshold) {
      this.awardBadge(BADGES.FACT_FINDER);
    }

    // Evidence Master Badge
    if (state.evidenceCount >= GAME_CONFIG.evidenceMasterThreshold) {
      this.awardBadge(BADGES.EVIDENCE_MASTER);
    }
  }

  /**
   * Award a badge to the player
   */
  awardBadge(badge: Badge): void {
    const awarded = this.stateManager.awardBadge(badge);

    if (awarded) {
      this.showBadgeNotification(badge);
      this.updateBadgeDisplay();
      logger.game('Badge awarded:', badge.name);
    }
  }

  /**
   * Show badge notification popup
   */
  private showBadgeNotification(badge: Badge): void {
    const notification = createElement('div', {
      className: 'badge-notification',
    });

    safeSetHTML(
      notification,
      `
      <div class="badge-earned">
        <div class="badge-icon">${badge.icon}</div>
        <div class="badge-info">
          <div class="badge-name">Badge Earned: ${badge.name}</div>
          <div class="badge-desc">${badge.description}</div>
        </div>
      </div>
    `
    );

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
      notification.style.opacity = '1';
      notification.style.transform = 'translateY(0)';
    }, 100);

    // Animate out and remove
    setTimeout(() => {
      notification.style.opacity = '0';
      setTimeout(() => notification.remove(), 500);
    }, 4000);
  }

  /**
   * Update badge display in status bar
   */
  updateBadgeDisplay(): void {
    const container = this.getBadgeContainer();
    if (!container) return;

    const badges = this.stateManager.getBadges();
    container.innerHTML = badges
      .map(badge => `<span class="badge" title="${badge.description}">${badge.icon}</span>`)
      .join('');
  }

  /**
   * Get or create badge container element
   */
  private getBadgeContainer(): HTMLElement | null {
    let container = getElement('badge-container');

    if (!container) {
      const statusBar = getElement('status-bar');
      if (!statusBar) return null;

      container = createElement('div', {
        className: 'badge-display',
        id: 'badge-container',
      });
      statusBar.appendChild(container);
    }

    return container;
  }

  /**
   * Get all earned badges
   */
  getBadges(): readonly Badge[] {
    return this.stateManager.getBadges();
  }

  /**
   * Check if player has specific badge
   */
  hasBadge(badgeName: string): boolean {
    return this.stateManager.hasBadge(badgeName);
  }
}

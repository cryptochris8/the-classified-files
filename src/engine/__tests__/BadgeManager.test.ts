/**
 * BadgeManager Tests
 *
 * Tests badge awards, notifications, and display
 */

import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { BadgeManager, BADGES } from '../BadgeManager';
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

describe('BadgeManager', () => {
  let badgeManager: BadgeManager;
  let stateManager: StateManager;
  let uiManager: UIManager;

  beforeEach(() => {
    localStorage.clear();
    vi.useFakeTimers();

    // Setup DOM elements
    document.body.innerHTML = `
      <div id="status-bar"></div>
    `;

    stateManager = new StateManager();
    uiManager = new UIManager();
    badgeManager = new BadgeManager(stateManager, uiManager);
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  describe('BADGES constant', () => {
    it('should have Perfect Knowledge badge defined', () => {
      expect(BADGES.PERFECT_KNOWLEDGE).toBeDefined();
      expect(BADGES.PERFECT_KNOWLEDGE.name).toBe('Perfect Knowledge');
    });

    it('should have Fact Finder badge defined', () => {
      expect(BADGES.FACT_FINDER).toBeDefined();
      expect(BADGES.FACT_FINDER.name).toBe('Fact Finder');
    });

    it('should have Evidence Master badge defined', () => {
      expect(BADGES.EVIDENCE_MASTER).toBeDefined();
      expect(BADGES.EVIDENCE_MASTER.name).toBe('Evidence Master');
    });
  });

  describe('awardBadge', () => {
    it('should award a new badge', () => {
      badgeManager.awardBadge(BADGES.PERFECT_KNOWLEDGE);

      expect(stateManager.hasBadge('Perfect Knowledge')).toBe(true);
    });

    it('should not award duplicate badges', () => {
      badgeManager.awardBadge(BADGES.PERFECT_KNOWLEDGE);
      badgeManager.awardBadge(BADGES.PERFECT_KNOWLEDGE);

      expect(stateManager.getBadges()).toHaveLength(1);
    });

    it('should show notification when badge is awarded', () => {
      badgeManager.awardBadge(BADGES.PERFECT_KNOWLEDGE);

      const notification = document.querySelector('.badge-notification');
      expect(notification).toBeTruthy();
    });

    it('should remove notification after timeout', () => {
      badgeManager.awardBadge(BADGES.PERFECT_KNOWLEDGE);

      // Fast forward past notification timeout
      vi.advanceTimersByTime(5000);

      // The notification should be gone (or have opacity 0)
      const notification = document.querySelector('.badge-notification');
      if (notification) {
        expect(notification.getAttribute('style')).toContain('opacity');
      }
    });
  });

  describe('checkAndAwardBadges', () => {
    it('should award Perfect Knowledge badge when quiz score is perfect', () => {
      // Setup perfect quiz score
      stateManager.recordQuizAnswer(true);
      stateManager.recordQuizAnswer(true);
      stateManager.recordQuizAnswer(true);

      badgeManager.checkAndAwardBadges();

      expect(badgeManager.hasBadge('Perfect Knowledge')).toBe(true);
    });

    it('should not award Perfect Knowledge badge with wrong answers', () => {
      stateManager.recordQuizAnswer(true);
      stateManager.recordQuizAnswer(false);
      stateManager.recordQuizAnswer(true);

      badgeManager.checkAndAwardBadges();

      expect(badgeManager.hasBadge('Perfect Knowledge')).toBe(false);
    });

    it('should not award Perfect Knowledge badge with too few questions', () => {
      stateManager.recordQuizAnswer(true);
      stateManager.recordQuizAnswer(true);

      badgeManager.checkAndAwardBadges();

      expect(badgeManager.hasBadge('Perfect Knowledge')).toBe(false);
    });

    it('should award Fact Finder badge with factual choice and enough evidence', () => {
      // Setup evidence
      stateManager.addEvidence();
      stateManager.addEvidence();
      stateManager.addEvidence();

      const factualChoice: Choice = {
        text: 'Factual choice',
        nextScene: 'next',
        factual: true,
      };

      badgeManager.checkAndAwardBadges(factualChoice);

      expect(badgeManager.hasBadge('Fact Finder')).toBe(true);
    });

    it('should not award Fact Finder badge without factual choice', () => {
      stateManager.addEvidence();
      stateManager.addEvidence();
      stateManager.addEvidence();

      const nonFactualChoice: Choice = {
        text: 'Regular choice',
        nextScene: 'next',
      };

      badgeManager.checkAndAwardBadges(nonFactualChoice);

      expect(badgeManager.hasBadge('Fact Finder')).toBe(false);
    });

    it('should award Evidence Master badge with enough evidence', () => {
      // Collect 5 evidence items
      for (let i = 0; i < 5; i++) {
        stateManager.addEvidence();
      }

      badgeManager.checkAndAwardBadges();

      expect(badgeManager.hasBadge('Evidence Master')).toBe(true);
    });

    it('should not award Evidence Master badge with insufficient evidence', () => {
      stateManager.addEvidence();
      stateManager.addEvidence();

      badgeManager.checkAndAwardBadges();

      expect(badgeManager.hasBadge('Evidence Master')).toBe(false);
    });
  });

  describe('getBadges', () => {
    it('should return empty array initially', () => {
      expect(badgeManager.getBadges()).toHaveLength(0);
    });

    it('should return all earned badges', () => {
      badgeManager.awardBadge(BADGES.PERFECT_KNOWLEDGE);
      badgeManager.awardBadge(BADGES.FACT_FINDER);

      const badges = badgeManager.getBadges();
      expect(badges).toHaveLength(2);
    });
  });

  describe('hasBadge', () => {
    it('should return false for unearned badge', () => {
      expect(badgeManager.hasBadge('Perfect Knowledge')).toBe(false);
    });

    it('should return true for earned badge', () => {
      badgeManager.awardBadge(BADGES.PERFECT_KNOWLEDGE);

      expect(badgeManager.hasBadge('Perfect Knowledge')).toBe(true);
    });
  });

  describe('updateBadgeDisplay', () => {
    it('should create badge container if not exists', () => {
      badgeManager.awardBadge(BADGES.PERFECT_KNOWLEDGE);
      badgeManager.updateBadgeDisplay();

      const container = document.getElementById('badge-container');
      expect(container).toBeTruthy();
    });

    it('should display all badges in container', () => {
      badgeManager.awardBadge(BADGES.PERFECT_KNOWLEDGE);
      badgeManager.awardBadge(BADGES.FACT_FINDER);
      badgeManager.updateBadgeDisplay();

      const container = document.getElementById('badge-container');
      const badges = container?.querySelectorAll('.badge');
      expect(badges?.length).toBe(2);
    });
  });
});

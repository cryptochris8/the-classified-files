/**
 * CaseSelector - Handles case selection screen and premium content
 */

import type { Story, StoryKey } from '@/types';
import type { SealStatus } from '@config/index';
import type { UIManager } from './UIManager';
import type { AudioManager } from './AudioManager';
import { logger } from '@utils/logger';
import { safeSetHTML, createElement, getElement, clearElement } from '@utils/dom-utils';
import { CASE_STATUS, GAME_CONFIG } from '@config/index';
import { STORY_INFO, getAvailableStories as getStoriesFromLoader } from '@stories/index';

/**
 * Story metadata for case selection
 */
export interface StoryEntry {
  name: string;
  story: Story;
  key: StoryKey;
  sealed: SealStatus;
  releaseDate: string | null;
}

// Re-export STORY_REGISTRY from stories module for backwards compatibility
export { STORY_INFO as STORY_REGISTRY } from '@stories/index';

/**
 * Manages case selection and premium content flow
 */
export class CaseSelector {
  private uiManager: UIManager;
  private audioManager: AudioManager;
  private onCaseSelected: ((entry: StoryEntry) => void) | null = null;

  constructor(uiManager: UIManager, audioManager: AudioManager) {
    this.uiManager = uiManager;
    this.audioManager = audioManager;
  }

  /**
   * Set callback for when a case is selected
   */
  setSelectionCallback(callback: (entry: StoryEntry) => void): void {
    this.onCaseSelected = callback;
  }

  /**
   * Get all available stories from global scope
   */
  getAvailableStories(): StoryEntry[] {
    const storiesMap = getStoriesFromLoader();
    const stories: StoryEntry[] = [];

    for (const [key, story] of storiesMap) {
      const info = STORY_INFO[key];
      if (info && story.scenes) {
        stories.push({
          name: info.name,
          story: story,
          key: key,
          sealed: CASE_STATUS[key] ?? false,
          releaseDate: story.releaseDate,
        });
      }
    }

    logger.debug('Available stories:', stories.length);
    return stories;
  }

  /**
   * Show case selection screen
   */
  showCaseSelection(stories: StoryEntry[]): void {
    const storyText = getElement('story-text');
    const choicesContainer = getElement('choices-container');

    if (!storyText || !choicesContainer) {
      logger.error('Required DOM elements not found');
      return;
    }

    // Clear any existing content
    this.uiManager.clearChoices();
    document.querySelectorAll('.sources-section').forEach(el => el.remove());
    document.querySelectorAll('.educational-note').forEach(el => el.remove());

    // Reset UI state
    this.uiManager.updateProgressBar(0);
    this.uiManager.updateEvidenceCount(0);
    this.uiManager.showDefaultImage();
    this.uiManager.resetCaseTitle();

    // Display case selection UI
    safeSetHTML(
      storyText,
      `
      <div class="case-selection">
        <h2 style="color: #ff6b6b; text-align: center; margin-bottom: 30px;">SELECT CLASSIFIED CASE FILE</h2>
        <p style="text-align: center; margin-bottom: 40px; color: #e0e0e0;">
          Choose which classified investigation you want to pursue. Each case contains authentic historical
          questions and fictional dramatic elements to create an immersive investigative experience.
        </p>

        <!-- Game Help Section -->
        <div class="game-help-wrapper">
          <button class="game-help-button">
            <span class="help-icon">?</span>
            How to Play
          </button>
          <div class="game-help-tooltip">
            <div class="help-content">
              <p><strong>Choice Symbols:</strong></p>
              <ul style="list-style: none; padding: 0; margin: 10px 0;">
                <li style="margin: 8px 0;"><span style="color: #4a6741;">▶</span> Standard choices - Follow your instincts</li>
                <li style="margin: 8px 0;"><span style="color: #4ecdc4;">✓</span> Factual choices - Verified evidence</li>
                <li style="margin: 8px 0;"><span style="color: #9f94ff;">?</span> Quiz questions - Test knowledge</li>
              </ul>
              <p style="margin-top: 15px;"><strong>Tips:</strong></p>
              <ul style="list-style: none; padding: 0; margin: 10px 0;">
                <li style="margin: 8px 0;">• Click text or SPACEBAR to skip typing</li>
                <li style="margin: 8px 0;">• Factual choices (✓) earn badges</li>
                <li style="margin: 8px 0;">• Multiple paths - replay to explore</li>
                <li style="margin: 8px 0;">• Visited choices appear dimmed</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `
    );

    // Add case buttons
    stories.forEach((storyData, index) => {
      setTimeout(() => {
        this.createCaseButton(choicesContainer, storyData);
      }, index * 300);
    });

    // Add restore purchases button for iOS
    this.addRestorePurchasesButton(choicesContainer, stories.length);
  }

  /**
   * Create a case selection button
   */
  private createCaseButton(
    container: HTMLElement,
    storyData: StoryEntry
  ): void {
    const button = createElement('button', {
      className: `choice-button case-selection-button ${storyData.sealed ? 'sealed' : 'open'}`,
    });
    button.style.marginBottom = '15px';

    // Title
    const titleSpan = createElement('span', {
      className: 'case-title',
      textContent: `📁 CASE FILE: ${storyData.name.toUpperCase()}`,
    });
    button.appendChild(titleSpan);

    // Release date for sealed cases
    if (storyData.sealed && storyData.releaseDate) {
      const releaseDateSpan = createElement('span', {
        className: 'release-date',
        textContent: storyData.releaseDate,
      });
      button.appendChild(releaseDateSpan);
    }

    // Set click handler based on status
    if (storyData.sealed === 'coming_soon') {
      button.onclick = () => {
        this.audioManager.playButtonClick();
        this.showComingSoonMessage(storyData);
      };
    } else if (storyData.sealed === 'premium') {
      const premiumBadge = createElement('span', {
        className: 'premium-badge',
        textContent: 'PREMIUM',
      });
      button.appendChild(premiumBadge);

      button.onclick = () => {
        this.audioManager.playButtonClick();
        this.showPurchasePrompt(storyData);
      };
    } else if (storyData.sealed) {
      button.onclick = () => {
        this.audioManager.playButtonClick();
        this.showSealedCaseMessage(storyData);
      };
    } else {
      button.onclick = () => {
        this.audioManager.playButtonClick();
        this.onCaseSelected?.(storyData);
      };
    }

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
   * Add restore purchases button for iOS users
   */
  private addRestorePurchasesButton(
    container: HTMLElement,
    storyCount: number
  ): void {
    const paymentAbstraction = (window as unknown as Record<string, unknown>)
      .paymentAbstraction as
      | { isIOS: () => boolean; restorePurchases: () => Promise<string[]> }
      | undefined;

    if (!paymentAbstraction?.isIOS()) return;

    setTimeout(() => {
      const restoreButton = createElement('button', {
        className: 'choice-button restore-purchases-button',
      });
      restoreButton.style.marginTop = '30px';
      restoreButton.style.backgroundColor = '#2a4a3a';
      restoreButton.style.borderColor = '#4ecdc4';
      restoreButton.innerHTML = '🔄 Restore Previous Purchases';

      restoreButton.onclick = async () => {
        restoreButton.disabled = true;
        restoreButton.innerHTML = '⏳ Restoring...';
        try {
          const restored = await paymentAbstraction.restorePurchases();
          if (restored.length > 0) {
            this.showNotification(
              `Successfully restored ${restored.length} purchase(s)!`
            );
            location.reload();
          } else {
            this.showNotification('No previous purchases found.');
          }
        } catch (error) {
          this.showNotification(
            'Failed to restore purchases. Please try again.'
          );
          logger.error('Restore error:', error);
        }
        restoreButton.disabled = false;
        restoreButton.innerHTML = '🔄 Restore Previous Purchases';
      };

      container.appendChild(restoreButton);
    }, storyCount * 300 + 500);
  }

  /**
   * Show coming soon message
   */
  showComingSoonMessage(storyData: StoryEntry): void {
    const storyText = getElement('story-text');
    const choicesContainer = getElement('choices-container');

    if (!storyText || !choicesContainer) return;

    clearElement(choicesContainer);

    safeSetHTML(
      storyText,
      `
      <div class="coming-soon-message">
        <div class="classified-stamp">🚧 COMING SOON</div>
        <h2 style="color: #ffa500; text-align: center; margin: 30px 0;">CASE FILE IN DEVELOPMENT</h2>
        <div class="coming-soon-info">
          <p><strong>Case File:</strong> ${storyData.name}</p>
          <p><strong>Status:</strong> Under Investigation</p>
          <p><strong>Expected Release:</strong> ${storyData.releaseDate ?? 'TBD'}</p>
        </div>
        <div class="development-message">
          <p>This classified investigation is currently being developed by our research team.</p>
          <p>We're working hard to bring you the most accurate and engaging investigative experience.</p>
          <p>Stay tuned for updates on the release date!</p>
        </div>

        <div class="notification-section">
          <h3>📧 GET NOTIFIED</h3>
          <p>Want to be notified when this case file is released?</p>
          <p>Follow our updates or bookmark this page to check back later.</p>
        </div>
      </div>
    `
    );

    this.addBackButton(choicesContainer);
  }

  /**
   * Show sealed case message with purchase option
   */
  showSealedCaseMessage(storyData: StoryEntry): void {
    const storyText = getElement('story-text');
    const choicesContainer = getElement('choices-container');

    if (!storyText || !choicesContainer) return;

    clearElement(choicesContainer);

    safeSetHTML(
      storyText,
      `
      <div class="sealed-case-message">
        <div class="classified-stamp">🔒 CLASSIFIED</div>
        <h2 style="color: #ff6b6b; text-align: center; margin: 30px 0;">SECURITY CLEARANCE REQUIRED</h2>
        <div class="sealed-case-info">
          <p><strong>Case File:</strong> ${storyData.name}</p>
          <p><strong>Classification Level:</strong> TOP SECRET</p>
          <p><strong>Access Status:</strong> RESTRICTED</p>
          ${storyData.releaseDate ? `<p><strong>Estimated Release:</strong> ${storyData.releaseDate}</p>` : ''}
        </div>
        <div class="security-message">
          <p>This case file is currently sealed and requires purchase to access.</p>
          <p>Unlock this classified investigation with our secure payment system.</p>
        </div>

        <div class="purchase-section">
          <h3>🔓 UNLOCK ACCESS</h3>
          <p>Get immediate access to this classified investigation case file.</p>
          <ul class="purchase-benefits">
            <li>Complete investigative storyline</li>
            <li>Classified documents and evidence</li>
            <li>Interactive decision-making</li>
            <li>Educational content and sources</li>
            <li>Lifetime access</li>
          </ul>
          <button class="purchase-button" id="purchase-btn">
            🔓 Unlock Case File <span class="price">$${GAME_CONFIG.defaultPrice.toFixed(2)}</span>
          </button>
        </div>

        <div class="ad-container sealed-case-ad">
          <div class="ad-label">SPONSORED CONTENT</div>
          <div data-ea-publisher="classified-files-game"
               data-ea-type="image"
               data-ea-style="stickybox"
               class="ethical-ad"></div>
        </div>
      </div>
    `
    );

    // Setup purchase button
    const purchaseBtn = getElement('purchase-btn');
    if (purchaseBtn) {
      purchaseBtn.onclick = () => this.handlePurchase(storyData.key);
    }

    this.addBackButton(choicesContainer);
  }

  /**
   * Show purchase prompt (alternative purchase flow)
   */
  showPurchasePrompt(storyData: StoryEntry): void {
    const paymentSystem = (window as unknown as Record<string, unknown>).paymentSystem as
      | { createPurchasePrompt: (name: string, key: string) => string }
      | undefined;

    if (paymentSystem) {
      const prompt = paymentSystem.createPurchasePrompt(
        storyData.name,
        storyData.key
      );
      document.body.insertAdjacentHTML('beforeend', prompt);

      const purchasePrompt = document.querySelector(
        '.purchase-prompt:last-child'
      );
      if (purchasePrompt) {
        this.setupPurchasePromptClose(purchasePrompt as HTMLElement);
      }
    } else {
      // Fallback to sealed message
      this.showSealedCaseMessage(storyData);
    }
  }

  /**
   * Setup close functionality for purchase prompt
   */
  private setupPurchasePromptClose(prompt: HTMLElement): void {
    prompt.addEventListener('click', e => {
      if (e.target === prompt) {
        prompt.remove();
      }
    });

    const closeButton = createElement('button');
    closeButton.innerHTML = '✕';
    closeButton.style.cssText = `
      position: absolute;
      top: 15px;
      right: 15px;
      background: none;
      border: none;
      color: #fff;
      font-size: 1.5rem;
      cursor: pointer;
      opacity: 0.7;
      transition: opacity 0.3s;
    `;
    closeButton.onmouseover = () => (closeButton.style.opacity = '1');
    closeButton.onmouseout = () => (closeButton.style.opacity = '0.7');
    closeButton.onclick = () => prompt.remove();

    const content = prompt.querySelector('.purchase-content');
    if (content) {
      (content as HTMLElement).style.position = 'relative';
      content.appendChild(closeButton);
    }
  }

  /**
   * Handle purchase action
   */
  private async handlePurchase(caseKey: string): Promise<void> {
    const paymentAbstraction = (window as unknown as Record<string, unknown>)
      .paymentAbstraction as
      | { purchaseCase: (key: string) => Promise<{ success: boolean }> }
      | undefined;

    const paymentManager = (window as unknown as Record<string, unknown>)
      .paymentManager as { purchaseCase: (key: string) => void } | undefined;

    if (paymentAbstraction) {
      try {
        const result = await paymentAbstraction.purchaseCase(caseKey);
        if (result.success) {
          location.reload();
        }
      } catch (error) {
        logger.error('Purchase failed:', error);
        this.showNotification('Purchase failed. Please try again.');
      }
    } else if (paymentManager) {
      paymentManager.purchaseCase(caseKey);
    }
  }

  /**
   * Add back to case selection button
   */
  private addBackButton(container: HTMLElement): void {
    setTimeout(() => {
      const backButton = createElement('button', {
        className: 'choice-button',
        textContent: '← Return to Case Selection',
      });

      backButton.onclick = () => {
        const stories = this.getAvailableStories();
        this.showCaseSelection(stories);
      };

      backButton.style.opacity = '0';
      backButton.style.transform = 'translateY(20px)';
      container.appendChild(backButton);

      setTimeout(() => {
        backButton.style.transition = 'all 0.5s ease';
        backButton.style.opacity = '1';
        backButton.style.transform = 'translateY(0)';
      }, 100);
    }, 1000);
  }

  /**
   * Show notification message
   */
  private showNotification(message: string): void {
    // Create toast-style notification instead of alert
    const toast = createElement('div', {
      className: 'game-notification-toast',
      textContent: message,
    });

    toast.style.cssText = `
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: #333;
      color: #fff;
      padding: 12px 24px;
      border-radius: 8px;
      z-index: 10000;
      animation: fadeIn 0.3s ease;
    `;

    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }
}

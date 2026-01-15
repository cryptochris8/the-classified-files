/**
 * UIManager - Manages DOM updates, typewriter effect, and UI state
 */

import { logger } from '@utils/logger';
import {
  safeSetHTML,
  createElement,
  getElement,
  clearElement,
} from '@utils/dom-utils';
import { GAME_CONFIG } from '@config/index';

/**
 * Manages all UI rendering and DOM manipulation
 */
export class UIManager {
  private storyText: HTMLElement | null = null;
  private choicesContainer: HTMLElement | null = null;
  private documentImage: HTMLElement | null = null;
  private evidenceNumber: HTMLElement | null = null;
  private progressFill: HTMLElement | null = null;
  private loadingScreen: HTMLElement | null = null;

  private isTyping = false;
  private skipTyping = false;
  private typewriterSpeed: number = GAME_CONFIG.typewriterSpeed;

  constructor() {
    this.cacheElements();
  }

  /**
   * Cache DOM elements for performance
   */
  private cacheElements(): void {
    this.storyText = getElement('story-text');
    this.choicesContainer = getElement('choices-container');
    this.documentImage = getElement('document-image');
    this.evidenceNumber = getElement('evidence-number');
    this.progressFill = getElement('progress-fill');
    this.loadingScreen = getElement('loading-screen');
  }

  // ========================================
  // Loading Screen
  // ========================================

  /**
   * Show loading screen
   */
  showLoadingScreen(): void {
    this.loadingScreen?.classList.remove('hidden');
  }

  /**
   * Hide loading screen
   */
  hideLoadingScreen(): void {
    this.loadingScreen?.classList.add('hidden');
  }

  // ========================================
  // Typewriter Effect
  // ========================================

  /**
   * Display text with typewriter effect
   */
  async typewriterText(text: string, onComplete?: () => void): Promise<void> {
    if (this.isTyping || !this.storyText) return;

    this.isTyping = true;
    this.skipTyping = false;
    // onComplete callback is passed directly to finishTyping

    clearElement(this.storyText);
    this.storyText.classList.add('typing');

    logger.debug('Typewriter started - click or SPACEBAR to skip');

    const paragraphs = text.split('\n\n');

    for (let i = 0; i < paragraphs.length; i++) {
      if (this.skipTyping) {
        this.completeTypingInstantly(text, onComplete);
        return;
      }

      const paragraph = createElement('div', { className: 'story-paragraph' });
      this.storyText.appendChild(paragraph);

      const paragraphText = paragraphs[i];
      if (!paragraphText) continue;

      for (let j = 0; j < paragraphText.length; j++) {
        if (this.skipTyping) {
          this.completeTypingInstantly(text, onComplete);
          return;
        }

        paragraph.textContent += paragraphText[j];
        await this.delay(this.typewriterSpeed);
      }

      if (i < paragraphs.length - 1) {
        await this.delay(500);
      }
    }

    this.finishTyping(onComplete);
  }

  /**
   * Complete typing instantly (when user skips)
   */
  private completeTypingInstantly(
    text: string,
    onComplete?: () => void
  ): void {
    logger.debug('Typing skipped - displaying all text');

    if (this.storyText) {
      clearElement(this.storyText);
      this.storyText.classList.remove('typing');

      const paragraphs = text.split('\n\n');
      paragraphs.forEach(paragraphText => {
        const paragraph = createElement('div', {
          className: 'story-paragraph',
          textContent: paragraphText,
        });
        this.storyText!.appendChild(paragraph);
      });
    }

    this.finishTyping(onComplete);
  }

  /**
   * Finish typing and trigger callback
   */
  private finishTyping(onComplete?: () => void): void {
    this.isTyping = false;
    this.skipTyping = false;
    this.storyText?.classList.remove('typing');

    // Small delay before showing choices
    setTimeout(() => {
      onComplete?.();
    }, 100);
  }

  /**
   * Request to skip typing animation
   */
  requestSkipTyping(): void {
    if (this.isTyping) {
      this.skipTyping = true;
      logger.debug('Skip typing requested');
    }
  }

  /**
   * Check if currently typing
   */
  isCurrentlyTyping(): boolean {
    return this.isTyping;
  }

  /**
   * Set typewriter speed
   */
  setTypewriterSpeed(speed: number): void {
    this.typewriterSpeed = speed;
  }

  /**
   * Setup click-to-skip listeners
   */
  setupClickToSkip(onSkip: () => void): void {
    // Click on story text
    this.storyText?.addEventListener('click', e => {
      if (this.isTyping) {
        e.preventDefault();
        e.stopPropagation();
        onSkip();
      }
    });

    // Spacebar to skip
    document.addEventListener('keydown', e => {
      if (e.code === 'Space' && this.isTyping) {
        e.preventDefault();
        onSkip();
      }
    });
  }

  // ========================================
  // Progress Display
  // ========================================

  /**
   * Update progress bar
   */
  updateProgressBar(progress: number): void {
    if (this.progressFill) {
      this.progressFill.style.width = `${progress}%`;
    }
  }

  /**
   * Update evidence count display
   */
  updateEvidenceCount(count: number): void {
    if (this.evidenceNumber) {
      this.evidenceNumber.textContent = String(count);

      // Add animation class
      const parent = this.evidenceNumber.parentElement;
      parent?.classList.add('evidence-found');
      setTimeout(() => {
        parent?.classList.remove('evidence-found');
      }, 2000);
    }
  }

  // ========================================
  // Document Image
  // ========================================

  /**
   * Update document/scene image
   */
  updateDocumentImage(imageName: string): void {
    if (!this.documentImage) return;

    const imagePath = `images/${imageName}.png`;

    safeSetHTML(
      this.documentImage,
      `
      <div class="scene-image-container">
        <div class="image-placeholder" id="scene-image">
          <div class="image-loading">
            <div class="loading-spinner"></div>
            <p>Loading scene image...</p>
          </div>
        </div>
        <div class="image-caption">
          <strong>Scene:</strong> ${imageName.replace(/_/g, ' ')}
        </div>
      </div>
    `
    );

    // Load the actual image
    const img = new Image();
    img.onload = () => {
      const placeholder = getElement('scene-image');
      if (placeholder) {
        safeSetHTML(
          placeholder,
          `<img src="${imagePath}"
               alt="${imageName}"
               class="scene-image"
               style="width: 100%; height: 100%; object-fit: contain; border-radius: 4px;" />`
        );
      }
    };

    img.onerror = () => {
      const placeholder = getElement('scene-image');
      if (placeholder) {
        safeSetHTML(
          placeholder,
          `
          <div class="image-error">
            <p>Scene: "${imageName}"</p>
            <div class="image-note">
              <small>Image file not found: ${imagePath}</small>
            </div>
          </div>
        `
        );
      }
    };

    img.src = imagePath;
  }

  /**
   * Show default classified image
   */
  showDefaultImage(): void {
    if (this.documentImage) {
      this.documentImage.style.background = `url('images/classifiedtopsecret.png') center/contain no-repeat`;
      this.documentImage.style.backgroundColor = '#2a2a2a';
      this.documentImage.innerHTML = '';
    }
  }

  /**
   * Clear document image
   */
  clearDocumentImage(): void {
    if (this.documentImage) {
      this.documentImage.style.backgroundImage = 'none';
      safeSetHTML(
        this.documentImage,
        '<div class="no-image">No visual content for this scene</div>'
      );
    }
  }

  /**
   * Flash document animation
   */
  flashDocument(): void {
    if (this.documentImage) {
      this.documentImage.style.animation = 'none';
      setTimeout(() => {
        if (this.documentImage) {
          this.documentImage.style.animation =
            'documentFlash 0.5s ease-in-out';
        }
      }, 10);
    }
  }

  // ========================================
  // Choices
  // ========================================

  /**
   * Clear choices container
   */
  clearChoices(): void {
    if (this.choicesContainer) {
      clearElement(this.choicesContainer);
    }
  }

  /**
   * Get choices container element
   */
  getChoicesContainer(): HTMLElement | null {
    return this.choicesContainer;
  }

  // ========================================
  // Sources and Educational Notes
  // ========================================

  /**
   * Display sources section
   */
  displaySources(sources: string[]): void {
    // Remove existing sources
    document.querySelector('.sources-section')?.remove();

    if (sources.length === 0) return;

    const narrativeSection = getElement('narrative-section');
    if (!narrativeSection) return;

    const sourcesDiv = createElement('div', { className: 'sources-section' });
    safeSetHTML(
      sourcesDiv,
      `
      <h4>Sources:</h4>
      <ul>
        ${sources.map(source => `<li>${source}</li>`).join('')}
      </ul>
    `
    );
    narrativeSection.appendChild(sourcesDiv);
  }

  /**
   * Display educational note
   */
  displayEducationalNote(note: string): void {
    // Remove existing note
    document.querySelector('.educational-note')?.remove();

    if (!note) return;

    const narrativeSection = getElement('narrative-section');
    if (!narrativeSection) return;

    const noteDiv = createElement('div', { className: 'educational-note' });
    safeSetHTML(
      noteDiv,
      `
      <div class="note-header">Educational Note:</div>
      <p>${note}</p>
    `
    );
    narrativeSection.appendChild(noteDiv);
  }

  // ========================================
  // Case Title
  // ========================================

  /**
   * Update case title in header
   */
  updateCaseTitle(title: string): void {
    const caseTitle = getElement('case-title');
    if (caseTitle) {
      caseTitle.textContent = `Case File: ${title.toUpperCase()}`;
    }
  }

  /**
   * Reset case title
   */
  resetCaseTitle(): void {
    const caseTitle = getElement('case-title');
    if (caseTitle) {
      caseTitle.textContent = 'Select Case File';
    }
  }

  // ========================================
  // Utility
  // ========================================

  /**
   * Promise-based delay
   */
  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

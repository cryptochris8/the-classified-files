/**
 * AudioManager - Manages background music, sound effects, and speech synthesis
 */

import { logger } from '@utils/logger';

/**
 * Manages all audio for the game
 */
export class AudioManager {
  private backgroundMusic: HTMLAudioElement | null = null;
  private buttonClickSound: HTMLAudioElement | null = null;
  private speechSynthesis: SpeechSynthesis | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;

  private isSpeaking = false;
  private speechEnabled = false;
  private musicWasPlaying = false;
  private musicEnabled = true;
  private sfxEnabled = true;

  constructor() {
    this.cacheElements();
    this.initializeSpeechSynthesis();
  }

  /**
   * Cache audio elements from DOM
   */
  private cacheElements(): void {
    this.backgroundMusic = document.getElementById(
      'background-music'
    ) as HTMLAudioElement | null;
    this.buttonClickSound = document.getElementById(
      'button-click-sound'
    ) as HTMLAudioElement | null;
  }

  /**
   * Initialize speech synthesis if available
   */
  private initializeSpeechSynthesis(): void {
    if ('speechSynthesis' in window) {
      this.speechSynthesis = window.speechSynthesis;
      logger.game('Speech synthesis available');
    } else {
      logger.warn('Speech synthesis not available');
    }
  }

  /**
   * Initialize audio systems
   */
  async initialize(): Promise<void> {
    // Pre-load audio if needed
    if (this.backgroundMusic) {
      this.backgroundMusic.volume = 0.3;
    }
    if (this.buttonClickSound) {
      this.buttonClickSound.volume = 0.5;
    }
    logger.game('Audio manager initialized');
  }

  // ========================================
  // Background Music
  // ========================================

  /**
   * Play background music
   */
  playBackgroundMusic(): void {
    if (!this.backgroundMusic || !this.musicEnabled) return;

    this.backgroundMusic.volume = 0.3;
    this.backgroundMusic.play().catch(_e => {
      logger.warn('Auto-play prevented. User interaction required for audio.');
    });
  }

  /**
   * Pause background music
   */
  pauseBackgroundMusic(): void {
    if (this.backgroundMusic && !this.backgroundMusic.paused) {
      this.backgroundMusic.pause();
    }
  }

  /**
   * Resume background music
   */
  resumeBackgroundMusic(): void {
    if (this.backgroundMusic && this.musicEnabled) {
      this.backgroundMusic.play().catch(() => {});
    }
  }

  /**
   * Toggle music on/off
   */
  toggleMusic(): boolean {
    this.musicEnabled = !this.musicEnabled;
    if (this.musicEnabled) {
      this.resumeBackgroundMusic();
    } else {
      this.pauseBackgroundMusic();
    }
    return this.musicEnabled;
  }

  /**
   * Check if music is playing
   */
  isMusicPlaying(): boolean {
    return this.backgroundMusic ? !this.backgroundMusic.paused : false;
  }

  // ========================================
  // Sound Effects
  // ========================================

  /**
   * Play button click sound
   */
  playButtonClick(): void {
    if (!this.buttonClickSound || !this.sfxEnabled) return;

    this.buttonClickSound.currentTime = 0;
    this.buttonClickSound.volume = 0.5;
    this.buttonClickSound.play().catch(e => {
      logger.warn('Button click sound failed to play:', e);
    });
  }

  /**
   * Play choice sound
   */
  playChoiceSound(): void {
    // Currently using button click for choices
    // Can be extended with dedicated choice sound
    this.playButtonClick();
  }

  /**
   * Toggle sound effects on/off
   */
  toggleSFX(): boolean {
    this.sfxEnabled = !this.sfxEnabled;
    return this.sfxEnabled;
  }

  // ========================================
  // Speech Synthesis
  // ========================================

  /**
   * Check if speech is currently active
   */
  isSpeechActive(): boolean {
    return this.isSpeaking;
  }

  /**
   * Check if speech is enabled
   */
  isSpeechEnabled(): boolean {
    return this.speechEnabled;
  }

  /**
   * Toggle speech on/off
   */
  toggleSpeech(): boolean {
    this.speechEnabled = !this.speechEnabled;

    if (this.speechEnabled) {
      // Pause background music when speech is enabled
      if (this.isMusicPlaying()) {
        this.musicWasPlaying = true;
        this.pauseBackgroundMusic();
      }
    } else {
      this.stopSpeech();
      // Resume background music if it was playing before
      if (this.musicWasPlaying) {
        this.resumeBackgroundMusic();
        this.musicWasPlaying = false;
      }
    }

    return this.speechEnabled;
  }

  /**
   * Speak text using speech synthesis
   */
  speakText(text: string): void {
    if (!this.speechEnabled || !this.speechSynthesis) return;

    // Stop any current speech
    this.stopSpeech();

    // Clean the text for better speech
    const cleanText = text
      .replace(/[━─]/g, '') // Remove decorative lines
      .replace(/[🔍📋📄⚠️☢️🎮📊💡📚🔓🔒]/g, '') // Remove emojis
      .replace(/\n{3,}/g, '\n\n') // Reduce multiple line breaks
      .trim();

    this.currentUtterance = new SpeechSynthesisUtterance(cleanText);
    this.currentUtterance.rate = 0.9;
    this.currentUtterance.pitch = 1.0;
    this.currentUtterance.volume = 1.0;

    // Use an English voice if available
    const voices = this.speechSynthesis.getVoices();
    const englishVoice = voices.find(voice => voice.lang.startsWith('en-'));
    if (englishVoice) {
      this.currentUtterance.voice = englishVoice;
    }

    this.currentUtterance.onstart = () => {
      this.isSpeaking = true;
    };

    this.currentUtterance.onend = () => {
      this.isSpeaking = false;
    };

    this.currentUtterance.onerror = () => {
      this.isSpeaking = false;
    };

    this.speechSynthesis.speak(this.currentUtterance);
  }

  /**
   * Stop current speech
   */
  stopSpeech(): void {
    if (this.speechSynthesis?.speaking) {
      this.speechSynthesis.cancel();
      this.isSpeaking = false;
    }
  }

  // ========================================
  // Cleanup
  // ========================================

  /**
   * Clean up audio resources
   */
  cleanup(): void {
    this.stopSpeech();
    this.pauseBackgroundMusic();
  }
}

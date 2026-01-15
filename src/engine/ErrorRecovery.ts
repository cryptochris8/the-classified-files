/**
 * ErrorRecovery - Handles errors gracefully with user-friendly messages
 *
 * Replaces alert() calls with proper error UI and recovery mechanisms
 */

import { logger } from '@utils/logger';
import { safeSetHTML, createElement } from '@utils/dom-utils';

/**
 * Error information for logging
 */
export interface ErrorInfo {
  errorMessage: string;
  errorStack?: string | undefined;
  componentStack?: string | undefined;
  timestamp: string;
  userAgent: string;
  url: string;
}

/**
 * Manages error handling and recovery for the game
 */
export class ErrorRecovery {
  private onReturnToMenu: (() => void) | null = null;
  private availableScenes: Set<string> = new Set();

  /**
   * Set callback for returning to main menu
   */
  setReturnToMenuCallback(callback: () => void): void {
    this.onReturnToMenu = callback;
  }

  /**
   * Set available scenes for fallback navigation
   */
  setAvailableScenes(scenes: string[]): void {
    this.availableScenes = new Set(scenes);
  }

  /**
   * Handle a scene loading error
   * @returns Fallback scene ID or null if no recovery possible
   */
  handleSceneError(sceneId: string): string | null {
    logger.error('Scene not found:', sceneId);

    // Try fallback scenes in order of preference
    const fallbacks = ['victim_statistics_study', 'intro'];

    for (const fallback of fallbacks) {
      if (this.availableScenes.has(fallback)) {
        logger.warn('Recovering to fallback scene:', fallback);
        this.showWarningToast(`Scene "${sceneId}" not found. Redirecting...`);
        return fallback;
      }
    }

    // No fallback available - show error and return to menu
    this.showErrorToUser(
      'Unable to load the requested scene. Returning to case selection.'
    );

    if (this.onReturnToMenu) {
      setTimeout(() => this.onReturnToMenu?.(), 2000);
    }

    return null;
  }

  /**
   * Handle a critical game error
   */
  handleCriticalError(error: Error): void {
    logger.error('Critical game error:', error);

    this.showErrorToUser(
      'An unexpected error occurred. Please refresh the page to continue.',
      true
    );

    // Log error details
    this.logError({
      errorMessage: error.message,
      errorStack: error.stack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
    });
  }

  /**
   * Handle a payment error
   */
  handlePaymentError(error: Error): void {
    logger.error('Payment error:', error);

    this.showErrorToUser(
      'There was a problem processing your payment. Please try again.'
    );
  }

  /**
   * Show user-friendly error message
   */
  showErrorToUser(message: string, critical = false): void {
    // Remove any existing error messages
    document.querySelectorAll('.game-error-message').forEach(el => el.remove());

    const errorDiv = createElement('div', {
      className: `game-error-message ${critical ? 'critical' : ''}`,
    });

    safeSetHTML(
      errorDiv,
      `
      <div class="error-content">
        <h3>${critical ? 'Critical Error' : 'Something went wrong'}</h3>
        <p>${message}</p>
        <div class="error-actions">
          ${
            critical
              ? `<button class="error-btn primary" onclick="location.reload()">Refresh Page</button>`
              : `
              <button class="error-btn primary" onclick="this.closest('.game-error-message').remove()">Continue</button>
              <button class="error-btn" onclick="location.reload()">Refresh</button>
            `
          }
        </div>
      </div>
    `
    );

    document.body.appendChild(errorDiv);

    // Auto-dismiss non-critical errors after 10 seconds
    if (!critical) {
      setTimeout(() => {
        errorDiv.remove();
      }, 10000);
    }
  }

  /**
   * Show warning toast notification
   */
  showWarningToast(message: string): void {
    const toast = createElement('div', {
      className: 'game-warning-toast',
      textContent: message,
    });

    document.body.appendChild(toast);

    // Animate in
    setTimeout(() => {
      toast.classList.add('visible');
    }, 10);

    // Animate out and remove
    setTimeout(() => {
      toast.classList.remove('visible');
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  /**
   * Log error for analytics/debugging
   */
  private logError(info: ErrorInfo): void {
    // In production, could send to error tracking service
    logger.error('Error logged:', info);

    // Could integrate with Sentry, LogRocket, etc.
    // For now, just log locally
  }

  /**
   * Setup global error handlers
   */
  setupGlobalHandlers(): void {
    // Handle uncaught errors
    window.onerror = (message, source, lineno, colno, error) => {
      logger.error('Uncaught error:', { message, source, lineno, colno });

      this.logError({
        errorMessage: String(message),
        errorStack: error?.stack,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href,
      });

      // Don't show UI for minor errors
      if (error && this.isCriticalError(error)) {
        this.handleCriticalError(error);
      }

      return false;
    };

    // Handle unhandled promise rejections
    window.onunhandledrejection = event => {
      logger.error('Unhandled promise rejection:', event.reason);

      this.logError({
        errorMessage: `Unhandled Promise Rejection: ${event.reason}`,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href,
      });
    };
  }

  /**
   * Determine if an error is critical enough to show UI
   */
  private isCriticalError(error: Error): boolean {
    // Categorize errors that should show UI
    const criticalPatterns = [
      /GameEngine/i,
      /story/i,
      /scene/i,
      /payment/i,
      /stripe/i,
    ];

    return criticalPatterns.some(pattern => pattern.test(error.message));
  }
}

/**
 * Production-safe logging utility
 *
 * Suppresses debug logging in production builds while
 * always allowing error logging.
 */

declare const __DEV__: boolean;

/**
 * Check if we're in development mode
 */
function isDevelopment(): boolean {
  // Check Vite's __DEV__ flag first
  if (typeof __DEV__ !== 'undefined') {
    return __DEV__;
  }

  // Fallback to hostname check
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;
    return (
      hostname === 'localhost' ||
      hostname === '127.0.0.1' ||
      hostname === '' ||
      window.location.protocol === 'file:'
    );
  }

  // Server-side check
  if (typeof process !== 'undefined' && process.env) {
    return process.env['NODE_ENV'] !== 'production';
  }

  return false;
}

const isDev = isDevelopment();

/**
 * Logger with production-safe methods
 *
 * @example
 * ```typescript
 * import { logger } from '@utils/logger';
 *
 * logger.log('This only shows in development');
 * logger.error('This always shows');
 * logger.debug('Debug info', { data: 123 });
 * ```
 */
export const logger = {
  /**
   * Log general information (dev only)
   */
  log: (...args: unknown[]): void => {
    if (isDev) {
      console.log(...args);
    }
  },

  /**
   * Log warnings (dev only)
   */
  warn: (...args: unknown[]): void => {
    if (isDev) {
      console.warn(...args);
    }
  },

  /**
   * Log errors (always, even in production)
   */
  error: (...args: unknown[]): void => {
    console.error(...args);
  },

  /**
   * Log debug information with prefix (dev only)
   */
  debug: (...args: unknown[]): void => {
    if (isDev) {
      console.log('[DEBUG]', ...args);
    }
  },

  /**
   * Log game-specific events (dev only)
   */
  game: (...args: unknown[]): void => {
    if (isDev) {
      console.log('[GAME]', ...args);
    }
  },

  /**
   * Log payment-related events (dev only)
   */
  payment: (...args: unknown[]): void => {
    if (isDev) {
      console.log('[PAYMENT]', ...args);
    }
  },

  /**
   * Group console output (dev only)
   */
  group: (label: string): void => {
    if (isDev) {
      console.group(label);
    }
  },

  /**
   * End console group (dev only)
   */
  groupEnd: (): void => {
    if (isDev) {
      console.groupEnd();
    }
  },

  /**
   * Log with timestamp (dev only)
   */
  time: (label: string, ...args: unknown[]): void => {
    if (isDev) {
      const isoString = new Date().toISOString();
      const timePart = isoString.split('T')[1] ?? isoString;
      const timestamp = timePart.slice(0, 12);
      console.log(`[${timestamp}] ${label}`, ...args);
    }
  },
};

export default logger;

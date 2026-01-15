/**
 * Global Error Boundary
 *
 * Provides global error handling for unhandled errors and promise rejections
 * Can be used standalone without the game engine
 */

import { logger } from './logger';

/**
 * Error report structure
 */
export interface ErrorReport {
  message: string;
  stack?: string | undefined;
  source?: string | undefined;
  line?: number | undefined;
  column?: number | undefined;
  timestamp: string;
  url: string;
  userAgent: string;
  type: 'error' | 'unhandledrejection';
}

/**
 * Error handler callback type
 */
export type ErrorHandler = (report: ErrorReport) => void;

/**
 * Error boundary options
 */
interface ErrorBoundaryOptions {
  /** Custom error handler */
  onError?: ErrorHandler;
  /** Show UI overlay for critical errors */
  showOverlay?: boolean;
  /** Only show overlay for critical errors matching patterns */
  criticalPatterns?: RegExp[];
}

/**
 * Default critical error patterns
 */
const DEFAULT_CRITICAL_PATTERNS = [
  /GameEngine/i,
  /TypeError/i,
  /ReferenceError/i,
  /failed to fetch/i,
  /network/i,
  /stripe/i,
  /payment/i,
];

/**
 * Error reports buffer for batch sending
 */
const errorBuffer: ErrorReport[] = [];
const MAX_BUFFER_SIZE = 50;

/**
 * Create an error report
 */
function createErrorReport(
  message: string,
  type: 'error' | 'unhandledrejection',
  extra?: Partial<ErrorReport>
): ErrorReport {
  return {
    message,
    type,
    timestamp: new Date().toISOString(),
    url: window.location.href,
    userAgent: navigator.userAgent,
    ...extra,
  };
}

/**
 * Store error report
 */
function storeError(report: ErrorReport): void {
  errorBuffer.push(report);

  // Prevent memory issues
  if (errorBuffer.length > MAX_BUFFER_SIZE) {
    errorBuffer.shift();
  }

  // Log to console in dev
  logger.error('Error captured:', report);
}

/**
 * Check if error is critical
 */
function isCriticalError(
  message: string,
  patterns: RegExp[] = DEFAULT_CRITICAL_PATTERNS
): boolean {
  return patterns.some((pattern) => pattern.test(message));
}

/**
 * Show error overlay
 */
function showErrorOverlay(_report: ErrorReport): void {
  // Remove existing overlay
  document.getElementById('global-error-overlay')?.remove();

  const overlay = document.createElement('div');
  overlay.id = 'global-error-overlay';
  overlay.innerHTML = `
    <style>
      #global-error-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 99999;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }
      #global-error-overlay .error-content {
        background: #1a1a2e;
        border: 1px solid #c62828;
        border-radius: 8px;
        padding: 32px;
        max-width: 500px;
        text-align: center;
        color: #e0e0e0;
      }
      #global-error-overlay h2 {
        color: #c62828;
        margin: 0 0 16px 0;
      }
      #global-error-overlay p {
        margin: 0 0 24px 0;
        line-height: 1.5;
      }
      #global-error-overlay .error-actions {
        display: flex;
        gap: 12px;
        justify-content: center;
      }
      #global-error-overlay button {
        padding: 12px 24px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 14px;
        font-weight: 600;
      }
      #global-error-overlay .btn-primary {
        background: #c62828;
        color: white;
      }
      #global-error-overlay .btn-secondary {
        background: #333;
        color: white;
      }
      #global-error-overlay button:hover {
        opacity: 0.9;
      }
    </style>
    <div class="error-content">
      <h2>Something went wrong</h2>
      <p>An unexpected error occurred. You can try refreshing the page to continue.</p>
      <div class="error-actions">
        <button class="btn-primary" onclick="location.reload()">Refresh Page</button>
        <button class="btn-secondary" onclick="this.closest('#global-error-overlay').remove()">Dismiss</button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);
}

/**
 * Initialize global error boundary
 */
export function initErrorBoundary(options: ErrorBoundaryOptions = {}): void {
  const {
    onError,
    showOverlay = true,
    criticalPatterns = DEFAULT_CRITICAL_PATTERNS,
  } = options;

  // Handle window errors
  window.onerror = (
    message,
    source,
    line,
    column,
    error
  ): boolean => {
    const report = createErrorReport(String(message), 'error', {
      stack: error?.stack,
      source,
      line: line ?? undefined,
      column: column ?? undefined,
    });

    storeError(report);
    onError?.(report);

    if (showOverlay && isCriticalError(String(message), criticalPatterns)) {
      showErrorOverlay(report);
    }

    return false;
  };

  // Handle unhandled promise rejections
  window.onunhandledrejection = (event): void => {
    const message =
      event.reason instanceof Error
        ? event.reason.message
        : String(event.reason);

    const report = createErrorReport(message, 'unhandledrejection', {
      stack: event.reason instanceof Error ? event.reason.stack : undefined,
    });

    storeError(report);
    onError?.(report);

    // Don't show overlay for promise rejections by default
    // as they're often less critical
  };

  logger.debug('Error boundary initialized');
}

/**
 * Get stored error reports
 */
export function getErrorReports(): ErrorReport[] {
  return [...errorBuffer];
}

/**
 * Clear stored error reports
 */
export function clearErrorReports(): void {
  errorBuffer.length = 0;
}

/**
 * Report an error manually
 */
export function reportError(
  error: Error | string,
  type: 'error' | 'unhandledrejection' = 'error'
): void {
  const message = error instanceof Error ? error.message : error;
  const stack = error instanceof Error ? error.stack : undefined;

  const report = createErrorReport(message, type, { stack });
  storeError(report);
}

/**
 * Wrap a function with error handling
 */
export function withErrorBoundary<T extends (...args: unknown[]) => unknown>(
  fn: T,
  fallback?: ReturnType<T>
): T {
  return ((...args: unknown[]) => {
    try {
      const result = fn(...args);

      // Handle async functions
      if (result instanceof Promise) {
        return result.catch((error) => {
          reportError(error);
          return fallback;
        });
      }

      return result;
    } catch (error) {
      reportError(error instanceof Error ? error : String(error));
      return fallback;
    }
  }) as T;
}

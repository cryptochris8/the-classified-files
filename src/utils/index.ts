/**
 * Utility Functions Index
 *
 * Central export for all utility functions
 */

// DOM utilities
export {
  safeSetHTML,
  createElement,
  getElement,
  querySelector,
  querySelectorAll,
  clearElement,
  addListener,
  isInViewport,
  escapeHTML,
} from './dom-utils';

// Logging utilities
export { logger } from './logger';

// Service Worker utilities
export {
  isServiceWorkerSupported,
  registerServiceWorker,
  unregisterServiceWorkers,
  checkForUpdates,
  activateNewServiceWorker,
  clearServiceWorkerCaches,
  getCacheStats,
  autoRegisterServiceWorker,
} from './register-sw';

// Error Boundary utilities
export {
  initErrorBoundary,
  getErrorReports,
  clearErrorReports,
  reportError,
  withErrorBoundary,
} from './error-boundary';
export type { ErrorReport, ErrorHandler } from './error-boundary';

/**
 * Service Worker Registration
 *
 * Handles service worker registration, updates, and lifecycle management
 */

import { logger } from './logger';

/**
 * Service Worker registration options
 */
interface SWRegistrationOptions {
  /** Path to the service worker file */
  swPath?: string;
  /** Callback when SW is ready */
  onReady?: (registration: ServiceWorkerRegistration) => void;
  /** Callback when update is available */
  onUpdate?: (registration: ServiceWorkerRegistration) => void;
  /** Callback when SW is installed (first time) */
  onInstalled?: (registration: ServiceWorkerRegistration) => void;
  /** Callback on registration error */
  onError?: (error: Error) => void;
}

/**
 * Service Worker state
 */
let swRegistration: ServiceWorkerRegistration | null = null;

/**
 * Check if service workers are supported
 */
export function isServiceWorkerSupported(): boolean {
  return 'serviceWorker' in navigator;
}

/**
 * Register the service worker
 */
export async function registerServiceWorker(
  options: SWRegistrationOptions = {}
): Promise<ServiceWorkerRegistration | null> {
  const {
    swPath = '/sw.js',
    onReady,
    onUpdate,
    onInstalled,
    onError,
  } = options;

  // Check support
  if (!isServiceWorkerSupported()) {
    logger.warn('Service workers are not supported in this browser');
    return null;
  }

  try {
    // Wait for window to load
    if (document.readyState !== 'complete') {
      await new Promise<void>((resolve) => {
        window.addEventListener('load', () => resolve());
      });
    }

    // Register the service worker
    const registration = await navigator.serviceWorker.register(swPath, {
      scope: '/',
    });

    swRegistration = registration;
    logger.log('Service Worker registered:', registration.scope);

    // Handle updates
    registration.addEventListener('updatefound', () => {
      const newWorker = registration.installing;

      if (newWorker) {
        newWorker.addEventListener('statechange', () => {
          if (newWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              // New update available
              logger.log('New service worker update available');
              onUpdate?.(registration);
            } else {
              // First install
              logger.log('Service worker installed for the first time');
              onInstalled?.(registration);
            }
          }
        });
      }
    });

    // Check if service worker is ready
    const ready = await navigator.serviceWorker.ready;
    onReady?.(ready);

    return registration;
  } catch (error) {
    logger.error('Service Worker registration failed:', error);
    onError?.(error as Error);
    return null;
  }
}

/**
 * Unregister all service workers
 */
export async function unregisterServiceWorkers(): Promise<boolean> {
  if (!isServiceWorkerSupported()) {
    return false;
  }

  try {
    const registrations = await navigator.serviceWorker.getRegistrations();

    for (const registration of registrations) {
      await registration.unregister();
    }

    swRegistration = null;
    logger.log('All service workers unregistered');
    return true;
  } catch (error) {
    logger.error('Failed to unregister service workers:', error);
    return false;
  }
}

/**
 * Check for service worker updates
 */
export async function checkForUpdates(): Promise<void> {
  if (swRegistration) {
    try {
      await swRegistration.update();
      logger.log('Service worker update check completed');
    } catch (error) {
      logger.error('Failed to check for SW updates:', error);
    }
  }
}

/**
 * Skip waiting and activate new service worker
 */
export function activateNewServiceWorker(): void {
  if (swRegistration?.waiting) {
    swRegistration.waiting.postMessage({ type: 'SKIP_WAITING' });
  }
}

/**
 * Clear all service worker caches
 */
export async function clearServiceWorkerCaches(): Promise<void> {
  if ('caches' in window) {
    const cacheNames = await caches.keys();

    await Promise.all(cacheNames.map((name) => caches.delete(name)));

    logger.log('All caches cleared');
  }
}

/**
 * Get cache statistics from service worker
 */
export function getCacheStats(): Promise<Record<string, number>> {
  return new Promise((resolve) => {
    if (!navigator.serviceWorker.controller) {
      resolve({});
      return;
    }

    const messageChannel = new MessageChannel();

    messageChannel.port1.onmessage = (event) => {
      if (event.data?.type === 'CACHE_STATS') {
        resolve(event.data.stats);
      }
    };

    navigator.serviceWorker.controller.postMessage(
      { type: 'GET_CACHE_STATS' },
      [messageChannel.port2]
    );

    // Timeout after 5 seconds
    setTimeout(() => resolve({}), 5000);
  });
}

/**
 * Auto-register service worker with default settings
 *
 * Call this at app startup for basic offline support
 */
export function autoRegisterServiceWorker(): void {
  registerServiceWorker({
    onReady: () => {
      logger.debug('Service worker is ready');
    },
    onUpdate: (registration) => {
      logger.log('New version available! Refresh to update.');
      // Optionally auto-update
      if (registration.waiting) {
        registration.waiting.postMessage({ type: 'SKIP_WAITING' });
      }
    },
    onInstalled: () => {
      logger.log('App is now available offline');
    },
    onError: (error) => {
      logger.error('Service worker failed:', error);
    },
  });
}

/**
 * Service Worker for The Classified Files
 *
 * Caching strategies:
 * - Static assets (HTML, CSS, JS): Cache-first
 * - Images: Cache-first with network fallback
 * - Stories: Network-first with cache fallback
 * - API calls: Network-only (no caching for payments, etc.)
 */

/// <reference lib="webworker" />

declare const self: ServiceWorkerGlobalScope;

const STATIC_CACHE = 'classified-files-static-v1';
const IMAGE_CACHE = 'classified-files-images-v1';
const STORY_CACHE = 'classified-files-stories-v1';

/**
 * Assets to pre-cache on install
 */
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/styles.css',
  '/styles-mobile.css',
  '/main.js',
  '/game-engine.js',
  '/game-config.js',
];

/**
 * File extensions for static assets
 */
const STATIC_EXTENSIONS = ['.html', '.css', '.js', '.woff', '.woff2', '.ttf'];

/**
 * File extensions for images
 */
const IMAGE_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg'];

/**
 * File patterns for story files
 */
const STORY_PATTERNS = [
  /.*-story-expanded\.js/,
  /.*-story\.js/,
  /.*-commission-expanded\.js/,
];

/**
 * API endpoints that should never be cached
 */
const NO_CACHE_PATTERNS = [
  /\/api\//,
  /stripe\.com/,
  /revenuecat\.com/,
  /analytics/,
];

/**
 * Determine cache strategy based on URL
 */
function getCacheStrategy(
  url: URL
): 'cache-first' | 'network-first' | 'network-only' {
  const pathname = url.pathname;
  const hostname = url.hostname;

  // Never cache API calls or payment endpoints
  for (const pattern of NO_CACHE_PATTERNS) {
    if (pattern.test(url.href)) {
      return 'network-only';
    }
  }

  // External domains - network only
  if (hostname !== self.location.hostname) {
    return 'network-only';
  }

  // Story files - network first (might be updated)
  for (const pattern of STORY_PATTERNS) {
    if (pattern.test(pathname)) {
      return 'network-first';
    }
  }

  // Images - cache first
  for (const ext of IMAGE_EXTENSIONS) {
    if (pathname.endsWith(ext)) {
      return 'cache-first';
    }
  }

  // Static assets - cache first
  for (const ext of STATIC_EXTENSIONS) {
    if (pathname.endsWith(ext)) {
      return 'cache-first';
    }
  }

  // Default to network first
  return 'network-first';
}

/**
 * Get the appropriate cache for a URL
 */
function getCacheName(url: URL): string {
  const pathname = url.pathname;

  // Story files
  for (const pattern of STORY_PATTERNS) {
    if (pattern.test(pathname)) {
      return STORY_CACHE;
    }
  }

  // Images
  for (const ext of IMAGE_EXTENSIONS) {
    if (pathname.endsWith(ext)) {
      return IMAGE_CACHE;
    }
  }

  // Default to static cache
  return STATIC_CACHE;
}

/**
 * Cache-first strategy
 */
async function cacheFirst(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const cacheName = getCacheName(url);

  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }

  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    // If network fails and no cache, return offline page
    return new Response('Offline', {
      status: 503,
      statusText: 'Service Unavailable',
    });
  }
}

/**
 * Network-first strategy
 */
async function networkFirst(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const cacheName = getCacheName(url);

  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    return new Response('Offline', {
      status: 503,
      statusText: 'Service Unavailable',
    });
  }
}

/**
 * Network-only strategy
 */
async function networkOnly(request: Request): Promise<Response> {
  return fetch(request);
}

/**
 * Install event - precache static assets
 */
self.addEventListener('install', (event: ExtendableEvent) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(STATIC_CACHE);
      await cache.addAll(PRECACHE_ASSETS);
      // Skip waiting to activate immediately
      await self.skipWaiting();
    })()
  );
});

/**
 * Activate event - clean up old caches
 */
self.addEventListener('activate', (event: ExtendableEvent) => {
  event.waitUntil(
    (async () => {
      // Get all cache names
      const cacheNames = await caches.keys();

      // Delete old caches
      await Promise.all(
        cacheNames
          .filter(
            (name) =>
              name.startsWith('classified-files-') &&
              name !== STATIC_CACHE &&
              name !== IMAGE_CACHE &&
              name !== STORY_CACHE
          )
          .map((name) => caches.delete(name))
      );

      // Take control of all clients immediately
      await self.clients.claim();
    })()
  );
});

/**
 * Fetch event - handle requests with appropriate strategy
 */
self.addEventListener('fetch', (event: FetchEvent) => {
  const request = event.request;
  const url = new URL(request.url);

  // Only handle GET requests
  if (request.method !== 'GET') {
    return;
  }

  const strategy = getCacheStrategy(url);

  switch (strategy) {
    case 'cache-first':
      event.respondWith(cacheFirst(request));
      break;
    case 'network-first':
      event.respondWith(networkFirst(request));
      break;
    case 'network-only':
      event.respondWith(networkOnly(request));
      break;
  }
});

/**
 * Message event - handle cache control messages
 */
self.addEventListener('message', (event: ExtendableMessageEvent) => {
  if (event.data?.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }

  if (event.data?.type === 'CLEAR_CACHE') {
    event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => caches.delete(cacheName))
        );
      })
    );
  }

  if (event.data?.type === 'GET_CACHE_STATS') {
    event.waitUntil(
      (async () => {
        const stats: Record<string, number> = {};

        for (const cacheName of await caches.keys()) {
          const cache = await caches.open(cacheName);
          const keys = await cache.keys();
          stats[cacheName] = keys.length;
        }

        event.source?.postMessage({
          type: 'CACHE_STATS',
          stats,
        });
      })()
    );
  }
});

export {};

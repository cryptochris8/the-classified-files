/**
 * DOM utility functions with XSS protection
 *
 * All HTML manipulation should go through these utilities
 * to ensure content is sanitized with DOMPurify.
 */

import DOMPurify from 'dompurify';

/**
 * DOMPurify configuration type
 */
interface SanitizeConfig {
  ALLOWED_TAGS: string[];
  ALLOWED_ATTR: string[];
  FORBID_TAGS: string[];
  FORBID_ATTR: string[];
  ALLOW_DATA_ATTR?: boolean;
}

/**
 * DOMPurify configuration for safe HTML rendering
 */
const SAFE_HTML_CONFIG: SanitizeConfig = {
  ALLOWED_TAGS: [
    'p',
    'div',
    'span',
    'strong',
    'em',
    'b',
    'i',
    'ul',
    'ol',
    'li',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'br',
    'small',
    'button',
    'a',
    'img',
  ],
  ALLOWED_ATTR: [
    'class',
    'id',
    'style',
    'data-price-id',
    'data-case-key',
    'data-scene',
    'data-choice',
    'href',
    'target',
    'rel',
    'src',
    'alt',
    'title',
  ],
  FORBID_TAGS: ['script', 'iframe', 'object', 'embed', 'form', 'input'],
  FORBID_ATTR: ['onclick', 'onerror', 'onload', 'onmouseover', 'onfocus'],
  ALLOW_DATA_ATTR: true,
};

/**
 * Stricter config for user-generated content
 */
const STRICT_HTML_CONFIG: SanitizeConfig = {
  ALLOWED_TAGS: ['p', 'span', 'strong', 'em', 'br'],
  ALLOWED_ATTR: ['class'],
  FORBID_TAGS: ['script', 'iframe', 'object', 'embed', 'form', 'input', 'a'],
  FORBID_ATTR: ['onclick', 'onerror', 'onload', 'style'],
};

/**
 * Safely set innerHTML with XSS protection
 *
 * @param element - DOM element to update
 * @param html - HTML string to sanitize and insert
 * @param strict - Use stricter sanitization rules
 *
 * @example
 * ```typescript
 * const div = document.getElementById('content');
 * safeSetHTML(div, '<p>Hello <strong>World</strong></p>');
 * ```
 */
export function safeSetHTML(
  element: HTMLElement,
  html: string,
  strict = false
): void {
  const config = strict ? STRICT_HTML_CONFIG : SAFE_HTML_CONFIG;
  element.innerHTML = DOMPurify.sanitize(html, config) as string;
}

/**
 * Create an element with optional properties
 *
 * @param tag - HTML tag name
 * @param options - Element configuration
 * @returns Created DOM element
 *
 * @example
 * ```typescript
 * const button = createElement('button', {
 *   className: 'choice-button',
 *   textContent: 'Choose this option',
 *   dataset: { sceneId: 'intro' }
 * });
 * ```
 */
export function createElement<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  options: {
    className?: string;
    id?: string;
    textContent?: string;
    innerHTML?: string;
    dataset?: Record<string, string>;
    style?: Partial<CSSStyleDeclaration>;
    attributes?: Record<string, string>;
  } = {}
): HTMLElementTagNameMap[K] {
  const element = document.createElement(tag);

  if (options.className) {
    element.className = options.className;
  }

  if (options.id) {
    element.id = options.id;
  }

  if (options.textContent) {
    element.textContent = options.textContent;
  }

  if (options.innerHTML) {
    safeSetHTML(element, options.innerHTML);
  }

  if (options.dataset) {
    Object.entries(options.dataset).forEach(([key, value]) => {
      element.dataset[key] = value;
    });
  }

  if (options.style) {
    Object.assign(element.style, options.style);
  }

  if (options.attributes) {
    Object.entries(options.attributes).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
  }

  return element;
}

/**
 * Safely get an element by ID with type assertion
 *
 * @param id - Element ID
 * @returns Element or null
 */
export function getElement<T extends HTMLElement>(id: string): T | null {
  return document.getElementById(id) as T | null;
}

/**
 * Safely query selector with type assertion
 *
 * @param selector - CSS selector
 * @param parent - Parent element (defaults to document)
 * @returns Element or null
 */
export function querySelector<T extends HTMLElement>(
  selector: string,
  parent: ParentNode = document
): T | null {
  return parent.querySelector(selector) as T | null;
}

/**
 * Query all elements matching selector
 *
 * @param selector - CSS selector
 * @param parent - Parent element (defaults to document)
 * @returns Array of elements
 */
export function querySelectorAll<T extends HTMLElement>(
  selector: string,
  parent: ParentNode = document
): T[] {
  return Array.from(parent.querySelectorAll(selector)) as T[];
}

/**
 * Remove all children from an element
 *
 * @param element - Element to clear
 */
export function clearElement(element: HTMLElement): void {
  element.innerHTML = '';
}

/**
 * Add event listener with automatic cleanup
 *
 * @param element - Target element
 * @param event - Event type
 * @param handler - Event handler
 * @returns Cleanup function to remove listener
 */
export function addListener<K extends keyof HTMLElementEventMap>(
  element: HTMLElement,
  event: K,
  handler: (ev: HTMLElementEventMap[K]) => void
): () => void {
  element.addEventListener(event, handler);
  return () => element.removeEventListener(event, handler);
}

/**
 * Check if element is visible in viewport
 *
 * @param element - Element to check
 * @returns True if element is visible
 */
export function isInViewport(element: HTMLElement): boolean {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/**
 * Escape HTML entities in a string
 *
 * @param text - Text to escape
 * @returns Escaped text
 */
export function escapeHTML(text: string): string {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

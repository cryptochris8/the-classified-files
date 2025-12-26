/**
 * DOM Utilities - Safe HTML rendering to prevent XSS attacks
 * This file provides utility functions to safely manipulate the DOM
 */

// Load DOMPurify from CDN or use the npm package
// For now, we'll create helper functions that will work with DOMPurify when loaded

class DOMUtils {
    constructor() {
        this.purify = window.DOMPurify || null;
        this.initializePurify();
    }

    initializePurify() {
        // Check if DOMPurify is loaded
        if (typeof window.DOMPurify !== 'undefined') {
            this.purify = window.DOMPurify;
            console.log('✅ DOMPurify loaded successfully');
        } else {
            console.warn('⚠️ DOMPurify not loaded - loading from CDN...');
            this.loadDOMPurify();
        }
    }

    loadDOMPurify() {
        // Load DOMPurify from CDN
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/dompurify@3.0.6/dist/purify.min.js';
        script.onload = () => {
            this.purify = window.DOMPurify;
            console.log('✅ DOMPurify loaded from CDN');
        };
        script.onerror = () => {
            console.error('❌ Failed to load DOMPurify - using fallback text-only mode');
        };
        document.head.appendChild(script);
    }

    /**
     * Safely set innerHTML with sanitization
     * @param {HTMLElement} element - The element to update
     * @param {string} html - The HTML content to set
     * @param {object} options - DOMPurify configuration options
     */
    safeSetHTML(element, html, options = {}) {
        if (!element) {
            console.error('❌ DOMUtils.safeSetHTML: element is null or undefined');
            return;
        }

        if (this.purify) {
            // Use DOMPurify to sanitize HTML
            const clean = this.purify.sanitize(html, {
                ALLOWED_TAGS: ['p', 'div', 'span', 'strong', 'em', 'ul', 'ol', 'li', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'br', 'small', 'button'],
                ALLOWED_ATTR: ['class', 'id', 'style', 'data-*'],
                KEEP_CONTENT: true,
                ...options
            });
            element.innerHTML = clean;
        } else {
            // Fallback: use textContent (safe but loses formatting)
            console.warn('⚠️ DOMPurify not available - using textContent (formatting lost)');
            element.textContent = this.stripHTMLTags(html);
        }
    }

    /**
     * Strip HTML tags from a string (fallback for when DOMPurify isn't available)
     * @param {string} html - The HTML string to strip
     * @returns {string} - Plain text
     */
    stripHTMLTags(html) {
        const div = document.createElement('div');
        div.textContent = html;
        return div.textContent || div.innerText || '';
    }

    /**
     * Safely append HTML content
     * @param {HTMLElement} element - The element to append to
     * @param {string} html - The HTML content to append
     */
    safeAppendHTML(element, html) {
        if (!element) return;

        const tempDiv = document.createElement('div');
        this.safeSetHTML(tempDiv, html);

        while (tempDiv.firstChild) {
            element.appendChild(tempDiv.firstChild);
        }
    }

    /**
     * Create a safe text node (always safe, no HTML)
     * @param {string} text - The text content
     * @returns {Text} - Text node
     */
    createTextNode(text) {
        return document.createTextNode(text);
    }

    /**
     * Create an element with safe content
     * @param {string} tagName - The tag name (e.g., 'div', 'p')
     * @param {object} options - Options { className, textContent, innerHTML }
     * @returns {HTMLElement}
     */
    createElement(tagName, options = {}) {
        const element = document.createElement(tagName);

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
            this.safeSetHTML(element, options.innerHTML);
        }

        if (options.attributes) {
            Object.keys(options.attributes).forEach(key => {
                element.setAttribute(key, options.attributes[key]);
            });
        }

        if (options.style) {
            Object.assign(element.style, options.style);
        }

        return element;
    }

    /**
     * Safely update an element's content
     * @param {string|HTMLElement} selector - CSS selector or HTMLElement
     * @param {string} content - Content to set
     * @param {boolean} isHTML - Whether content is HTML (will be sanitized) or plain text
     */
    updateContent(selector, content, isHTML = false) {
        const element = typeof selector === 'string' ?
            document.querySelector(selector) : selector;

        if (!element) {
            console.warn(`⚠️ Element not found: ${selector}`);
            return;
        }

        if (isHTML) {
            this.safeSetHTML(element, content);
        } else {
            element.textContent = content;
        }
    }

    /**
     * Check if content contains potentially dangerous patterns
     * @param {string} content - Content to check
     * @returns {boolean} - True if suspicious patterns detected
     */
    hasSuspiciousPatterns(content) {
        const suspiciousPatterns = [
            /<script[\s\S]*?>[\s\S]*?<\/script>/gi,
            /javascript:/gi,
            /on\w+\s*=/gi, // onclick=, onerror=, etc.
            /<iframe/gi,
            /eval\(/gi,
            /expression\(/gi,
        ];

        return suspiciousPatterns.some(pattern => pattern.test(content));
    }
}

// Create global instance
window.DOMUtils = new DOMUtils();

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DOMUtils;
}

/**
 * Google Analytics 4 Integration
 * Tracks user interactions, game progress, and conversion events
 */

class GameAnalytics {
    constructor(measurementId) {
        this.measurementId = measurementId;
        this.initialized = false;
        this.debug = window.location.hostname === 'localhost';

        if (measurementId && measurementId !== 'G-XXXXXXXXXX') {
            this.initGA4();
        } else {
            console.warn('⚠️ Google Analytics not configured. Set GA4_MEASUREMENT_ID in analytics.js');
        }
    }

    /**
     * Initialize Google Analytics 4
     */
    initGA4() {
        // Load GA4 script
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${this.measurementId}`;
        document.head.appendChild(script);

        // Initialize gtag
        window.dataLayer = window.dataLayer || [];
        window.gtag = function() {
            window.dataLayer.push(arguments);
        };

        gtag('js', new Date());
        gtag('config', this.measurementId, {
            send_page_view: true,
            cookie_flags: 'SameSite=None;Secure'
        });

        this.initialized = true;
        console.log('✅ Google Analytics 4 initialized:', this.measurementId);
    }

    /**
     * Track custom event
     */
    trackEvent(eventName, parameters = {}) {
        if (!this.initialized) {
            if (this.debug) {
                console.log('📊 [Debug] Event:', eventName, parameters);
            }
            return;
        }

        gtag('event', eventName, parameters);

        if (this.debug) {
            console.log('📊 GA4 Event:', eventName, parameters);
        }
    }

    // ========================================
    // GAME-SPECIFIC EVENTS
    // ========================================

    /**
     * User started a case investigation
     */
    trackCaseStart(caseKey, caseName) {
        this.trackEvent('case_start', {
            case_key: caseKey,
            case_name: caseName,
            event_category: 'game',
            event_label: caseName
        });
    }

    /**
     * User completed a case investigation
     */
    trackCaseComplete(caseKey, caseName, progress, knowledgeScore) {
        this.trackEvent('case_complete', {
            case_key: caseKey,
            case_name: caseName,
            progress_percentage: progress,
            knowledge_score: knowledgeScore,
            event_category: 'game',
            event_label: caseName,
            value: progress
        });
    }

    /**
     * User made a choice in the story
     */
    trackChoice(caseKey, sceneId, choiceText, isFactual = false) {
        this.trackEvent('story_choice', {
            case_key: caseKey,
            scene_id: sceneId,
            choice_text: choiceText.substring(0, 100), // Limit length
            is_factual: isFactual,
            event_category: 'engagement'
        });
    }

    /**
     * User collected evidence
     */
    trackEvidenceCollected(caseKey, evidenceCount) {
        this.trackEvent('evidence_collected', {
            case_key: caseKey,
            evidence_count: evidenceCount,
            event_category: 'progress'
        });
    }

    /**
     * User earned a badge
     */
    trackBadgeEarned(badgeName, badgeType) {
        this.trackEvent('badge_earned', {
            badge_name: badgeName,
            badge_type: badgeType,
            event_category: 'achievement'
        });
    }

    /**
     * User answered quiz question
     */
    trackQuizAnswer(caseKey, questionNumber, isCorrect) {
        this.trackEvent('quiz_answer', {
            case_key: caseKey,
            question_number: questionNumber,
            is_correct: isCorrect,
            event_category: 'engagement'
        });
    }

    /**
     * User played a mini-game
     */
    trackMiniGameStart(gameType) {
        this.trackEvent('minigame_start', {
            game_type: gameType,
            event_category: 'engagement'
        });
    }

    /**
     * User completed a mini-game
     */
    trackMiniGameComplete(gameType, score, timeSpent) {
        this.trackEvent('minigame_complete', {
            game_type: gameType,
            score: score,
            time_spent_seconds: timeSpent,
            event_category: 'engagement',
            value: score
        });
    }

    // ========================================
    // CONVERSION EVENTS
    // ========================================

    /**
     * User viewed a premium case (locked)
     */
    trackPremiumCaseView(caseKey, caseName, price) {
        this.trackEvent('view_item', {
            currency: 'USD',
            value: price,
            items: [{
                item_id: caseKey,
                item_name: caseName,
                price: price,
                item_category: 'premium_case'
            }]
        });
    }

    /**
     * User clicked purchase button
     */
    trackBeginCheckout(caseKey, caseName, price) {
        this.trackEvent('begin_checkout', {
            currency: 'USD',
            value: price,
            items: [{
                item_id: caseKey,
                item_name: caseName,
                price: price,
                quantity: 1,
                item_category: 'premium_case'
            }]
        });
    }

    /**
     * User completed purchase
     */
    trackPurchaseComplete(caseKey, caseName, price, transactionId) {
        this.trackEvent('purchase', {
            transaction_id: transactionId,
            currency: 'USD',
            value: price,
            items: [{
                item_id: caseKey,
                item_name: caseName,
                price: price,
                quantity: 1,
                item_category: 'premium_case'
            }]
        });

        // Also track as conversion
        this.trackEvent('conversion', {
            case_key: caseKey,
            amount: price,
            event_category: 'ecommerce'
        });
    }

    // ========================================
    // USER ENGAGEMENT
    // ========================================

    /**
     * User toggled music
     */
    trackMusicToggle(isPlaying) {
        this.trackEvent('music_toggle', {
            action: isPlaying ? 'play' : 'pause',
            event_category: 'engagement'
        });
    }

    /**
     * User used text-to-speech
     */
    trackTextToSpeech(action) {
        this.trackEvent('text_to_speech', {
            action: action, // 'start' or 'stop'
            event_category: 'accessibility'
        });
    }

    /**
     * User clicked "Read Aloud"
     */
    trackReadAloud(sceneId) {
        this.trackEvent('read_aloud', {
            scene_id: sceneId,
            event_category: 'accessibility'
        });
    }

    /**
     * User spent time on a scene
     */
    trackTimeOnScene(caseKey, sceneId, timeSpent) {
        this.trackEvent('scene_time', {
            case_key: caseKey,
            scene_id: sceneId,
            time_spent_seconds: timeSpent,
            event_category: 'engagement',
            value: timeSpent
        });
    }

    // ========================================
    // ERROR TRACKING
    // ========================================

    /**
     * Track JavaScript errors
     */
    trackError(errorMessage, errorStack, fileName, lineNumber) {
        this.trackEvent('exception', {
            description: errorMessage.substring(0, 150),
            fatal: false,
            error_file: fileName,
            error_line: lineNumber
        });
    }

    /**
     * Track payment errors
     */
    trackPaymentError(errorMessage, caseKey) {
        this.trackEvent('payment_error', {
            error_message: errorMessage,
            case_key: caseKey,
            event_category: 'ecommerce'
        });
    }

    // ========================================
    // UTILITY METHODS
    // ========================================

    /**
     * Set user properties
     */
    setUserProperty(propertyName, value) {
        if (!this.initialized) return;

        gtag('set', 'user_properties', {
            [propertyName]: value
        });
    }

    /**
     * Track user ID (after login/purchase)
     */
    setUserId(userId) {
        if (!this.initialized) return;

        gtag('config', this.measurementId, {
            user_id: userId
        });
    }

    /**
     * Track page view (for single-page apps)
     */
    trackPageView(pagePath, pageTitle) {
        if (!this.initialized) return;

        gtag('config', this.measurementId, {
            page_path: pagePath,
            page_title: pageTitle
        });
    }
}

// ========================================
// CONFIGURATION
// ========================================

// Replace with your actual GA4 Measurement ID
// Get this from: https://analytics.google.com/analytics/web/#/a.../admin/streams/table/
const GA4_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // TODO: Replace with your ID

// Initialize analytics
window.gameAnalytics = new GameAnalytics(GA4_MEASUREMENT_ID);

// Track JavaScript errors automatically
window.addEventListener('error', function(e) {
    if (window.gameAnalytics) {
        window.gameAnalytics.trackError(
            e.message,
            e.error?.stack,
            e.filename,
            e.lineno
        );
    }
});

// Track unhandled promise rejections
window.addEventListener('unhandledrejection', function(e) {
    if (window.gameAnalytics) {
        window.gameAnalytics.trackError(
            `Unhandled Promise Rejection: ${e.reason}`,
            e.reason?.stack,
            'promise',
            0
        );
    }
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = GameAnalytics;
}

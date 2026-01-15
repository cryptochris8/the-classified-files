# The Classified Files - Development Roadmap

## Better Investments of Time

Rather than a React migration (which would require significant effort with minimal user-facing benefit), here are higher-impact investments for the game:

### 1. Add More Story Content
- **Impact:** High - Directly increases player engagement and retention
- **Details:**
  - Write additional scenes for existing cases
  - Create new investigation cases
  - Add branching storylines with multiple endings
  - Include more educational notes and source citations

### 2. Improve the Mini-Games
- **Impact:** High - Enhances gameplay variety
- **Details:**
  - Add the Evidence Connection game (already stubbed in mini-game-engine.js)
  - Add the Cipher Decoder game (already stubbed in mini-game-engine.js)
  - Create more document reconstruction puzzles
  - Add difficulty levels to existing mini-games

### 3. Add New Game Mechanics
- **Impact:** Medium-High - Increases replayability
- **Details:**
  - Implement a hint system for difficult sections
  - Add a "notebook" feature to track discovered evidence
  - Create an achievements/badges gallery screen
  - Add timer challenges for speedrun mode
  - Implement a "connections board" to link evidence

### 4. Marketing and User Acquisition
- **Impact:** High - Grows the player base
- **Details:**
  - Social media presence and content
  - App Store optimization (keywords, screenshots)
  - Influencer partnerships
  - Press coverage for new case releases
  - Community building (Discord, Reddit)

### 5. Mobile App Polish (iOS/Android)
- **Impact:** Medium - Improves user experience on mobile
- **Details:**
  - Touch gesture improvements
  - Haptic feedback for interactions
  - Offline mode reliability
  - Push notifications for new content
  - App Store review prompts

---

## Why Not React Migration?

The current architecture using vanilla JavaScript with TypeScript modules:

1. **Works well** - The game is a text-based adventure, not a complex interactive UI
2. **Fast** - No virtual DOM overhead, direct DOM manipulation
3. **Simple** - Easy to understand and maintain
4. **Deployed** - Currently working in production

A React migration would:
- Take significant development time
- Require rewriting all UI code
- Add bundle size (React + ReactDOM)
- Provide minimal user-facing benefits
- Risk introducing new bugs

The current stack (TypeScript + Vite + vanilla JS) is well-suited for this type of game.

---

## Current Architecture

### Core Systems
- **GameEngine** - Main orchestration and scene management
- **MiniGameEngine** - Document reconstruction and puzzle games
- **PaymentAbstraction** - Cross-platform payments (Stripe web, Apple IAP mobile)
- **StateManager** - Game state tracking (evidence, progress, badges)

### Tech Stack
- TypeScript with Vite bundling
- Vitest for testing (99 tests passing)
- Capacitor for iOS/Android builds
- GitHub Pages for web hosting
- Stripe for web payments
- RevenueCat for mobile IAP

---

*Last updated: January 2026*

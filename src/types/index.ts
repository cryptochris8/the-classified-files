/**
 * Central type exports
 */

// Game types
export type {
  Badge,
  GameState,
  GameSettings,
  MiniGameConfig,
  MiniGameData,
  MiniGameFragment,
  MiniGameResult,
  SceneEffect,
  GameElements,
  StoryMeta,
} from './game.types';

export { createInitialGameState } from './game.types';

// Story types
export type {
  Choice,
  Scene,
  Story,
  StoryKey,
  StoryLoader,
  StoryMetadata,
} from './story.types';

export { validateSceneChoices, validateStory } from './story.types';

// Payment types
export type {
  Platform,
  Product,
  PurchaseResult,
  PaymentProvider,
  StripeSessionResponse,
  PurchaseTokenPayload,
  StoredPurchaseData,
  PaymentConfig,
  CasePricing,
  StripePriceMap,
  TokenValidationResult,
} from './payment.types';

// Re-export SealStatus from config for convenience
export type { SealStatus } from '@config/index';

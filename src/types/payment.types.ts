/**
 * Payment and purchase type definitions
 */

/**
 * Platform type for payment provider selection
 */
export type Platform = 'web' | 'ios' | 'android';

/**
 * Product information from payment provider
 */
export interface Product {
  /** Internal case key */
  id: string;
  /** Provider-specific product/price ID */
  priceId?: string;
  productId?: string;
  /** Price in numeric format */
  price: number;
  /** Currency code (USD, EUR, etc.) */
  currency: string;
  /** Display title */
  title: string;
  /** Product description */
  description?: string;
}

/**
 * Result of a purchase attempt
 */
export interface PurchaseResult {
  /** Whether the purchase was successful */
  success: boolean;
  /** Case key that was purchased */
  caseKey?: string;
  /** Error message if failed */
  error?: string;
  /** Whether user cancelled the purchase */
  cancelled?: boolean;
  /** Whether payment is pending (e.g., redirect to Stripe) */
  pending?: boolean;
  /** Entitlement info from provider */
  entitlement?: unknown;
}

/**
 * Interface that all payment providers must implement
 */
export interface PaymentProvider {
  /** Initialize the payment provider */
  initialize(): Promise<void>;

  /** Get all available products */
  getProducts(): Promise<Product[]>;

  /** Initiate a purchase for a specific case */
  purchaseProduct(caseKey: string): Promise<PurchaseResult>;

  /** Restore previous purchases */
  restorePurchases(): Promise<string[]>;
}

/**
 * Stripe checkout session response
 */
export interface StripeSessionResponse {
  id?: string;
  sessionId?: string;
  error?: string;
}

/**
 * JWT purchase token payload
 */
export interface PurchaseTokenPayload {
  sessionId: string;
  customerId?: string;
  paymentStatus: string;
  amount: number;
  currency: string;
  timestamp: string;
  metadata?: Record<string, string>;
}

/**
 * Stored purchase data in localStorage
 */
export interface StoredPurchaseData {
  sessionId: string;
  timestamp: string;
  verified: boolean;
  caseKey?: string;
}

/**
 * Payment configuration
 */
export interface PaymentConfig {
  serverUrl: string;
  stripePublishableKey: string;
  revenueCatApiKey?: string;
}

/**
 * Case pricing information
 */
export interface CasePricing {
  key: string;
  priceId: string;
  price: number;
  currency: string;
}

/**
 * Stripe price IDs for all cases
 */
export type StripePriceMap = Record<string, string>;

/**
 * Validation result for purchase token
 */
export interface TokenValidationResult {
  valid: boolean;
  sessionId?: string;
  timestamp?: string;
  unlockedCases?: string[];
  error?: string;
}

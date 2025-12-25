/**
 * PaymentContext - Payment state management with Stripe
 */
import { createContext, useContext, useState, useCallback, useEffect } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { useLocalStorage } from '@hooks/useLocalStorage'

// Get Stripe keys from environment
const STRIPE_KEY = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY
const API_URL = import.meta.env.VITE_API_URL || 'https://the-classified-files-production.up.railway.app'

// Product configurations
const PRODUCTS = {
  epstein: {
    name: 'Epstein Investigation',
    price: 4.99,
    description: 'Access the classified Epstein investigation files',
  },
  jfk: {
    name: 'JFK Assassination Files',
    price: 4.99,
    description: 'Declassified documents from the JFK assassination investigation',
  },
  september11: {
    name: '9/11 Commission Investigation',
    price: 4.99,
    description: 'Classified 9/11 investigation documents and testimonies',
  },
  'diddy-case': {
    name: 'Diddy Federal Case',
    price: 4.99,
    description: 'Federal RICO investigation files and evidence',
  },
}

// Context
const PaymentContext = createContext(null)

/**
 * PaymentProvider - Provides payment context to the app
 */
export function PaymentProvider({ children }) {
  const [stripePromise, setStripePromise] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [purchasedCases, setPurchasedCases] = useLocalStorage('classifiedFiles_purchasedCases', [])

  // Initialize Stripe
  useEffect(() => {
    if (STRIPE_KEY && STRIPE_KEY !== 'pk_test_your_key_here') {
      setStripePromise(loadStripe(STRIPE_KEY))
    } else {
      console.warn('Stripe key not configured. Payment features disabled.')
    }
  }, [])

  // Check if a case is purchased
  const hasPurchased = useCallback((caseId) => {
    return purchasedCases.includes(caseId)
  }, [purchasedCases])

  // Mark a case as purchased (called after successful payment)
  const markAsPurchased = useCallback((caseId) => {
    if (!purchasedCases.includes(caseId)) {
      setPurchasedCases([...purchasedCases, caseId])
    }
  }, [purchasedCases, setPurchasedCases])

  // Create checkout session and redirect to Stripe
  const purchaseCase = useCallback(async (caseId) => {
    if (!stripePromise) {
      setError('Payment system not configured')
      return { success: false, error: 'Payment system not configured' }
    }

    const product = PRODUCTS[caseId]
    if (!product) {
      setError('Product not found')
      return { success: false, error: 'Product not found' }
    }

    setIsLoading(true)
    setError(null)

    try {
      // Create checkout session on server
      const response = await fetch(`${API_URL}/create-checkout-session`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          caseId,
          successUrl: `${window.location.origin}/payment-success?case=${caseId}`,
          cancelUrl: `${window.location.origin}/payment-cancel`,
        }),
      })

      const session = await response.json()

      if (session.error) {
        throw new Error(session.error)
      }

      // Redirect to Stripe Checkout
      const stripe = await stripePromise
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      })

      if (result.error) {
        throw new Error(result.error.message)
      }

      return { success: true }
    } catch (err) {
      console.error('Payment error:', err)
      setError(err.message)
      return { success: false, error: err.message }
    } finally {
      setIsLoading(false)
    }
  }, [stripePromise])

  // Verify purchase (called on success page)
  const verifyPurchase = useCallback(async (sessionId) => {
    if (!sessionId) return { success: false, error: 'No session ID' }

    try {
      const response = await fetch(`${API_URL}/verify-session`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sessionId }),
      })

      const result = await response.json()

      if (result.success && result.caseId) {
        markAsPurchased(result.caseId)
        return { success: true, caseId: result.caseId }
      }

      return { success: false, error: result.error }
    } catch (err) {
      console.error('Verification error:', err)
      return { success: false, error: err.message }
    }
  }, [markAsPurchased])

  // Get product info
  const getProductInfo = useCallback((caseId) => {
    return PRODUCTS[caseId] || null
  }, [])

  // Check if payment is available
  const isPaymentAvailable = Boolean(stripePromise)

  const value = {
    // State
    isLoading,
    error,
    purchasedCases,
    isPaymentAvailable,

    // Actions
    hasPurchased,
    markAsPurchased,
    purchaseCase,
    verifyPurchase,
    getProductInfo,
  }

  return (
    <PaymentContext.Provider value={value}>
      {children}
    </PaymentContext.Provider>
  )
}

/**
 * usePayment Hook - Access payment context
 */
export function usePayment() {
  const context = useContext(PaymentContext)
  if (!context) {
    throw new Error('usePayment must be used within a PaymentProvider')
  }
  return context
}

export default PaymentProvider

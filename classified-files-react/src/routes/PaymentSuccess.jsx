import { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useLocalStorage } from '@hooks/useLocalStorage'
import './PaymentPages.css'

export function PaymentSuccess() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [purchasedCases, setPurchasedCases] = useLocalStorage('classifiedFiles_purchasedCases', [])

  const sessionId = searchParams.get('session_id')
  const caseId = searchParams.get('case')

  // Mark case as purchased
  useEffect(() => {
    if (caseId && !purchasedCases.includes(caseId)) {
      setPurchasedCases([...purchasedCases, caseId])
    }
  }, [caseId, purchasedCases, setPurchasedCases])

  return (
    <div className="payment-page success">
      <motion.div
        className="payment-content"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="payment-icon success-icon">&#10003;</div>
        <h1>Payment Successful!</h1>
        <p>Thank you for your purchase. Your case file has been unlocked.</p>

        {caseId && (
          <p className="case-info">
            Case File: <strong>{caseId.toUpperCase()}</strong> is now available.
          </p>
        )}

        <div className="payment-actions">
          <button className="primary-button" onClick={() => navigate('/cases')}>
            View Case Files
          </button>
          {caseId && (
            <button className="secondary-button" onClick={() => navigate(`/game/${caseId}`)}>
              Start Investigation
            </button>
          )}
        </div>

        <p className="session-info">
          Session ID: {sessionId || 'N/A'}
        </p>
      </motion.div>
    </div>
  )
}

export default PaymentSuccess

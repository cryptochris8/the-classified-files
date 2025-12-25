import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import './PaymentPages.css'

export function PaymentCancel() {
  const navigate = useNavigate()

  return (
    <div className="payment-page cancel">
      <motion.div
        className="payment-content"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="payment-icon cancel-icon">&#10005;</div>
        <h1>Payment Cancelled</h1>
        <p>Your payment was cancelled. No charges were made.</p>
        <p>You can still enjoy the free case files or try again later.</p>

        <div className="payment-actions">
          <button className="primary-button" onClick={() => navigate('/cases')}>
            Return to Case Files
          </button>
          <button className="secondary-button" onClick={() => navigate('/')}>
            Go to Home
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default PaymentCancel

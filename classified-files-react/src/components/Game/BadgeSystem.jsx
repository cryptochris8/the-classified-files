import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './BadgeSystem.css'

/**
 * BadgeDisplay - Shows earned badges
 */
export function BadgeDisplay({ badges = [] }) {
  if (badges.length === 0) {
    return null
  }

  return (
    <div className="badge-display">
      {badges.map((badge, index) => (
        <motion.span
          key={badge.name}
          className="badge"
          title={`${badge.name}: ${badge.description}`}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: index * 0.1 }}
        >
          {badge.icon}
        </motion.span>
      ))}
    </div>
  )
}

/**
 * BadgeNotification - Popup when badge is earned
 */
export function BadgeNotification({ badge, onDismiss }) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (badge) {
      setIsVisible(true)
      const timer = setTimeout(() => {
        setIsVisible(false)
        setTimeout(onDismiss, 500)
      }, 4000)
      return () => clearTimeout(timer)
    }
  }, [badge, onDismiss])

  return (
    <AnimatePresence>
      {isVisible && badge && (
        <motion.div
          className="badge-notification"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.8 }}
          transition={{ type: 'spring', damping: 15 }}
        >
          <div className="badge-earned">
            <motion.div
              className="badge-icon-large"
              initial={{ rotate: -10, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
            >
              {badge.icon}
            </motion.div>
            <div className="badge-info">
              <div className="badge-label">Badge Earned!</div>
              <div className="badge-name">{badge.name}</div>
              <div className="badge-desc">{badge.description}</div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

/**
 * QuizFeedback - Shows feedback for quiz answers
 */
export function QuizFeedback({ feedback, onComplete }) {
  useEffect(() => {
    if (feedback) {
      const timer = setTimeout(onComplete, 2500)
      return () => clearTimeout(timer)
    }
  }, [feedback, onComplete])

  if (!feedback) return null

  return (
    <motion.div
      className={`quiz-feedback ${feedback.type}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="feedback-icon">{feedback.icon}</div>
      <div className="feedback-message">{feedback.message}</div>
    </motion.div>
  )
}

export default BadgeDisplay

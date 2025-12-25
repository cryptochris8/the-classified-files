import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './LoadingScreen.css'

const LOADING_MESSAGES = [
  'ACCESSING CLASSIFIED DATABASE...',
  'DECRYPTING SEALED FILES...',
  'BYPASSING SECURITY PROTOCOLS...',
  'LOADING INVESTIGATION DATA...',
  'PREPARING EVIDENCE VIEWER...',
  'ESTABLISHING SECURE CONNECTION...',
  'AUTHENTICATING CLEARANCE LEVEL...',
]

/**
 * LoadingScreen - Classified document style loading animation
 */
export function LoadingScreen({
  isLoading = true,
  onComplete = () => {},
  minDisplayTime = 3000,
}) {
  const [messageIndex, setMessageIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [canDismiss, setCanDismiss] = useState(false)

  // Cycle through loading messages
  useEffect(() => {
    if (!isLoading) return

    const messageInterval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % LOADING_MESSAGES.length)
    }, 800)

    return () => clearInterval(messageInterval)
  }, [isLoading])

  // Progress bar animation
  useEffect(() => {
    if (!isLoading) return

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 200)

    return () => clearInterval(progressInterval)
  }, [isLoading])

  // Minimum display time before dismissal
  useEffect(() => {
    const timer = setTimeout(() => {
      setCanDismiss(true)
    }, minDisplayTime)

    return () => clearTimeout(timer)
  }, [minDisplayTime])

  // Call onComplete when loading is done
  useEffect(() => {
    if (canDismiss && progress >= 100) {
      const timer = setTimeout(onComplete, 500)
      return () => clearTimeout(timer)
    }
  }, [canDismiss, progress, onComplete])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="loading-content">
            {/* Classified Header */}
            <motion.div
              className="classified-header"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="classified-stamp">TOP SECRET</div>
              <h1 className="loading-title">THE CLASSIFIED FILES</h1>
              <div className="security-level">SECURITY CLEARANCE: LEVEL 5</div>
            </motion.div>

            {/* Loading Animation */}
            <motion.div
              className="loading-animation"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="document-icon">
                <div className="document-lines">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="document-stamp">CLASSIFIED</div>
              </div>
            </motion.div>

            {/* Loading Message */}
            <motion.div
              className="loading-message"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <p className="message-text">{LOADING_MESSAGES[messageIndex]}</p>
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              className="loading-progress"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: '100%', opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                />
              </div>
              <span className="progress-text">{Math.min(Math.round(progress), 100)}%</span>
            </motion.div>

            {/* Footer */}
            <motion.div
              className="loading-footer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <p>UNAUTHORIZED ACCESS IS PROHIBITED</p>
              <p>ALL ACTIVITY IS MONITORED AND RECORDED</p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LoadingScreen

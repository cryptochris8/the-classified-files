import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './EvidenceCounter.css'

/**
 * EvidenceCounter - Displays collected evidence count with animation
 */
export function EvidenceCounter({ count = 0 }) {
  const [showFlash, setShowFlash] = useState(false)
  const [prevCount, setPrevCount] = useState(count)

  // Trigger flash animation when count increases
  useEffect(() => {
    if (count > prevCount) {
      setShowFlash(true)
      const timer = setTimeout(() => setShowFlash(false), 1500)
      return () => clearTimeout(timer)
    }
    setPrevCount(count)
  }, [count, prevCount])

  return (
    <div className={`evidence-counter ${showFlash ? 'flash' : ''}`}>
      <span className="evidence-icon">📋</span>
      <span className="evidence-label">Evidence:</span>
      <motion.span
        className="evidence-count"
        key={count}
        initial={{ scale: 1.5, color: '#4ecdc4' }}
        animate={{ scale: 1, color: '#e0e0e0' }}
        transition={{ duration: 0.3 }}
      >
        {count}
      </motion.span>

      {/* Flash notification */}
      <AnimatePresence>
        {showFlash && (
          <motion.span
            className="evidence-flash"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            +1 Evidence Found!
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  )
}

export default EvidenceCounter

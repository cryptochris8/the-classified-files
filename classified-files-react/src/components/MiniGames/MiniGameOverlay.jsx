/**
 * MiniGameOverlay - Container for mini-games with backdrop
 */
import { motion, AnimatePresence } from 'framer-motion'
import './MiniGameOverlay.css'

export function MiniGameOverlay({ isActive, onClose, children }) {
  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          className="mini-game-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="mini-game-container"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button className="mini-game-close" onClick={onClose} title="Close">
              ×
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MiniGameOverlay

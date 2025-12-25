import { motion } from 'framer-motion'
import './ProgressBar.css'

/**
 * ProgressBar - Shows investigation progress
 */
export function ProgressBar({ progress = 0, label = 'Investigation Progress' }) {
  const clampedProgress = Math.min(100, Math.max(0, progress))

  return (
    <div className="progress-bar-container">
      {label && <span className="progress-label">{label}</span>}
      <div className="progress-bar-track">
        <motion.div
          className="progress-bar-fill"
          initial={{ width: 0 }}
          animate={{ width: `${clampedProgress}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>
      <span className="progress-percentage">{Math.round(clampedProgress)}%</span>
    </div>
  )
}

export default ProgressBar

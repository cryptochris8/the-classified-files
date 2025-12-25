import { motion } from 'framer-motion'
import clsx from 'clsx'
import './ChoiceButton.css'

/**
 * ChoiceButton - Individual choice button with different states
 */
export function ChoiceButton({
  choice,
  index,
  onClick,
  isVisited = false,
  disabled = false,
  quizMode = false,
}) {
  // Determine button type and indicator
  const getIndicator = () => {
    if (quizMode) {
      return { symbol: '?', className: 'quiz' }
    }
    if (choice.factual) {
      return { symbol: '✓', className: 'factual' }
    }
    return { symbol: '▶', className: 'standard' }
  }

  const indicator = getIndicator()

  const buttonClasses = clsx(
    'choice-button',
    indicator.className,
    {
      'visited': isVisited,
      'disabled': disabled,
      'has-evidence': choice.evidence,
    }
  )

  return (
    <motion.button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.3 }}
      whileHover={!disabled ? { scale: 1.02, x: 5 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
    >
      {/* Number indicator for keyboard shortcut */}
      <span className="choice-number">{index + 1}</span>

      {/* Type indicator */}
      <span className={`choice-indicator ${indicator.className}`}>
        {indicator.symbol}
      </span>

      {/* Choice text */}
      <span className="choice-text">{choice.text}</span>

      {/* Evidence badge */}
      {choice.evidence && (
        <span className="evidence-badge" title="Collects evidence">
          📋
        </span>
      )}

      {/* Visited indicator */}
      {isVisited && (
        <span className="visited-indicator" title="Previously explored">
          ↩
        </span>
      )}
    </motion.button>
  )
}

export default ChoiceButton

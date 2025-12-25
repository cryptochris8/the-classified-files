import { motion } from 'framer-motion'
import './KnowledgeScore.css'

/**
 * KnowledgeScore - Displays quiz score
 */
export function KnowledgeScore({ score = 0, total = 0, correct = 0 }) {
  const percentage = total > 0 ? Math.round((correct / total) * 100) : 0

  if (total === 0) {
    return null
  }

  return (
    <div className="knowledge-score">
      <span className="knowledge-icon">🧠</span>
      <span className="knowledge-label">Knowledge:</span>
      <motion.span
        className="knowledge-value"
        key={`${correct}-${total}`}
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
      >
        {correct}/{total}
      </motion.span>
      <span className={`knowledge-percentage ${percentage >= 70 ? 'good' : ''}`}>
        ({percentage}%)
      </span>
    </div>
  )
}

export default KnowledgeScore

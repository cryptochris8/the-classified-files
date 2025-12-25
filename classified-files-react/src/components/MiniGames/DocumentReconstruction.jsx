/**
 * DocumentReconstruction Mini-Game
 * Drag and drop document fragments to reconstruct a classified file
 */
import { useState, useCallback, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './DocumentReconstruction.css'

const DEFAULT_FRAGMENTS = [
  { position: 0, text: 'CLASSIFIED', type: 'header' },
  { position: 1, text: 'PROJECT [REDACTED]', type: 'title' },
  { position: 2, text: '1947-07-08', type: 'date' },
  { position: 3, text: 'SUBJECT: UFO Recovery', type: 'subject' },
  { position: 4, text: 'Operation conducted at', type: 'body' },
  { position: 5, text: 'Roswell, New Mexico', type: 'location' },
  { position: 6, text: 'Materials secured and', type: 'body' },
  { position: 7, text: 'transported to Area 51', type: 'body' },
  { position: 8, text: 'EYES ONLY', type: 'footer' },
]

function shuffleArray(array) {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export function DocumentReconstruction({
  fragments = DEFAULT_FRAGMENTS,
  gridColumns = 3,
  gridRows = 3,
  evidenceReward = 'Reconstructed Document',
  progressReward = 15,
  onComplete,
}) {
  const [shuffledFragments, setShuffledFragments] = useState([])
  const [placedFragments, setPlacedFragments] = useState({})
  const [draggedId, setDraggedId] = useState(null)
  const [feedback, setFeedback] = useState(null)
  const [isComplete, setIsComplete] = useState(false)
  const startTimeRef = useRef(Date.now())

  // Initialize shuffled fragments
  useEffect(() => {
    setShuffledFragments(shuffleArray(fragments))
  }, [fragments])

  const correctCount = Object.keys(placedFragments).length
  const progress = (correctCount / fragments.length) * 100

  // Show feedback temporarily
  const showFeedback = useCallback((message, type) => {
    setFeedback({ message, type })
    setTimeout(() => setFeedback(null), 2000)
  }, [])

  // Handle drag start
  const handleDragStart = useCallback((e, fragment) => {
    setDraggedId(fragment.position)
    e.dataTransfer.effectAllowed = 'move'
  }, [])

  // Handle drag over
  const handleDragOver = useCallback((e) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
  }, [])

  // Handle drop
  const handleDrop = useCallback(
    (e, dropPosition) => {
      e.preventDefault()

      if (draggedId === null) return

      const fragment = fragments.find((f) => f.position === draggedId)
      if (!fragment) return

      if (fragment.position === dropPosition) {
        // Correct placement
        setPlacedFragments((prev) => ({
          ...prev,
          [dropPosition]: fragment,
        }))

        // Remove from shuffled
        setShuffledFragments((prev) => prev.filter((f) => f.position !== draggedId))

        showFeedback('Correct! Keep going!', 'success')

        // Check if complete
        if (correctCount + 1 === fragments.length) {
          setIsComplete(true)
        }
      } else {
        // Wrong placement
        showFeedback('Incorrect position. Try again!', 'error')
      }

      setDraggedId(null)
    },
    [draggedId, fragments, correctCount, showFeedback]
  )

  // Handle game completion
  const handleFinish = useCallback(() => {
    const completionTime = Date.now() - startTimeRef.current

    if (onComplete) {
      onComplete({
        success: true,
        evidenceGained: evidenceReward,
        progressIncrease: progressReward,
        completionTime,
      })
    }
  }, [onComplete, evidenceReward, progressReward])

  return (
    <div className="document-reconstruction">
      <div className="mini-game-header">
        <h2 className="mini-game-title">DOCUMENT RECONSTRUCTION</h2>
        <div className="mini-game-subtitle">Piece together the classified document fragments</div>
      </div>

      <div className="mini-game-content">
        <div className="reconstruction-layout">
          {/* Fragments Area */}
          <div className="fragments-section">
            <h3>Document Fragments</h3>
            <div className="fragments-area">
              {shuffledFragments.map((fragment) => (
                <motion.div
                  key={fragment.position}
                  className={`document-fragment ${draggedId === fragment.position ? 'dragging' : ''}`}
                  draggable
                  onDragStart={(e) => handleDragStart(e, fragment)}
                  onDragEnd={() => setDraggedId(null)}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {fragment.text}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Reconstruction Area */}
          <div className="reconstruction-section">
            <h3>Reconstruction Zone</h3>
            <div
              className="document-template"
              style={{
                gridTemplateColumns: `repeat(${gridColumns}, 1fr)`,
                gridTemplateRows: `repeat(${gridRows}, 1fr)`,
              }}
            >
              {Array.from({ length: gridColumns * gridRows }, (_, index) => (
                <div
                  key={index}
                  className={`drop-zone ${placedFragments[index] ? 'filled' : ''}`}
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, index)}
                >
                  {placedFragments[index] ? (
                    <motion.div
                      className="placed-fragment"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200 }}
                    >
                      {placedFragments[index].text}
                    </motion.div>
                  ) : (
                    <span className="zone-number">{index + 1}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Progress */}
      <div className="mini-game-progress">
        <div className="progress-text">
          Progress: {correctCount}/{fragments.length}
        </div>
        <div className="progress-bar-mini">
          <motion.div
            className="progress-fill-mini"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Hint */}
      <div className="mini-game-hint">
        <p>Drag document fragments to their correct positions to reveal the classified information</p>
      </div>

      {/* Feedback */}
      <AnimatePresence>
        {feedback && (
          <motion.div
            className={`feedback-message ${feedback.type}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            {feedback.message}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Completion Screen */}
      <AnimatePresence>
        {isComplete && (
          <motion.div
            className="completion-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="completion-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h2>DOCUMENT RECONSTRUCTED!</h2>
              <p>You have successfully pieced together the classified document.</p>

              <div className="rewards">
                <div className="reward-item">
                  <span className="reward-icon">+</span>
                  <span className="reward-text">Evidence Found: {evidenceReward}</span>
                </div>
                <div className="reward-item">
                  <span className="reward-icon">+</span>
                  <span className="reward-text">Investigation Progress: +{progressReward}%</span>
                </div>
              </div>

              <button className="continue-btn" onClick={handleFinish}>
                Continue Investigation
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default DocumentReconstruction

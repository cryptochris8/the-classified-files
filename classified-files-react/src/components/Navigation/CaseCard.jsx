/**
 * CaseCard - Individual case display with status indicators
 */
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { SEAL_STATUS, ROUTES } from '@utils/constants'
import './CaseCard.css'

export function CaseCard({
  caseId,
  title,
  description,
  sealStatus,
  releaseDate,
  price,
  difficulty,
  isUnlocked = false,
  index = 0,
}) {
  const navigate = useNavigate()

  const isComingSoon = sealStatus === SEAL_STATUS.COMING_SOON
  const isFree = sealStatus === SEAL_STATUS.FREE
  const isSealed = sealStatus === SEAL_STATUS.SEALED && !isUnlocked
  const isPlayable = isFree || isUnlocked || sealStatus === SEAL_STATUS.UNSEALED

  const handleClick = () => {
    if (isComingSoon) return

    if (isPlayable) {
      navigate(`${ROUTES.GAME}/${caseId}`)
    } else {
      navigate(`/purchase/${caseId}`)
    }
  }

  const getStatusLabel = () => {
    if (isComingSoon) return 'COMING SOON'
    if (isFree) return 'FREE'
    if (isSealed) return 'SEALED'
    if (isUnlocked) return 'UNLOCKED'
    return null
  }

  const getStatusClass = () => {
    if (isComingSoon) return 'coming-soon'
    if (isFree) return 'free'
    if (isSealed) return 'sealed'
    if (isUnlocked) return 'unlocked'
    return ''
  }

  const getDifficultyStars = () => {
    const stars = []
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={i < difficulty ? 'star filled' : 'star'}>
          ★
        </span>
      )
    }
    return stars
  }

  return (
    <motion.div
      className={`case-card ${getStatusClass()} ${isComingSoon ? 'disabled' : ''}`}
      onClick={handleClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={!isComingSoon ? { scale: 1.02, y: -5 } : {}}
      whileTap={!isComingSoon ? { scale: 0.98 } : {}}
    >
      {/* Status Badge */}
      <div className={`case-status ${getStatusClass()}`}>
        {getStatusLabel()}
      </div>

      {/* Case Info */}
      <div className="case-content">
        <h3 className="case-title">{title}</h3>
        <p className="case-description">{description}</p>

        {/* Difficulty Rating */}
        {difficulty && (
          <div className="case-difficulty">
            <span className="difficulty-label">Difficulty:</span>
            <span className="difficulty-stars">{getDifficultyStars()}</span>
          </div>
        )}

        {/* Release Date for Coming Soon */}
        {isComingSoon && releaseDate && (
          <div className="case-release">
            <span className="release-label">Available:</span>
            <span className="release-date">{releaseDate}</span>
          </div>
        )}

        {/* Price for Sealed Cases */}
        {isSealed && price && (
          <div className="case-price">
            <span className="price-amount">{price}</span>
          </div>
        )}
      </div>

      {/* Action Indicator */}
      <div className="case-action">
        {isComingSoon && <span className="action-icon">🔒</span>}
        {isSealed && <span className="action-icon">💳</span>}
        {isPlayable && <span className="action-icon">▶</span>}
      </div>

      {/* Sealed Overlay */}
      {isSealed && (
        <div className="sealed-overlay">
          <span className="seal-text">CLASSIFIED</span>
        </div>
      )}
    </motion.div>
  )
}

export default CaseCard

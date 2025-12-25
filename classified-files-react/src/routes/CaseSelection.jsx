import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CASES_CONFIG, SEAL_STATUS } from '@utils/constants'
import { useLocalStorage } from '@hooks/useLocalStorage'
import { CaseCard } from '@components/Navigation'
import './CaseSelection.css'

// Order of cases to display
const CASE_ORDER = [
  'uap',
  'epstein',
  'jfk',
  'september11',
  'diddy-case',
  'hunterlaptop',
  'watergate',
  'pentagon-papers',
  'mkultra',
  'cointelpro',
  'snowden',
  'iran-contra',
  'panama-papers',
  'tuskegee',
  'paperclip',
]

export function CaseSelection() {
  const navigate = useNavigate()
  const [unlockedCases] = useLocalStorage('classifiedFiles_purchasedCases', [])

  const cases = useMemo(() => {
    return CASE_ORDER.map((caseId) => {
      const config = CASES_CONFIG[caseId]
      if (!config) return null

      return {
        ...config,
        isUnlocked: unlockedCases.includes(caseId),
      }
    }).filter(Boolean)
  }, [unlockedCases])

  return (
    <div className="case-selection-page">
      <div className="case-selection-content">
        {/* Header */}
        <motion.div
          className="case-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="case-title">SELECT CLASSIFIED CASE FILE</h1>
          <p className="case-subtitle">
            Choose which classified investigation you want to pursue
          </p>
        </motion.div>

        {/* Help Box */}
        <motion.div
          className="help-box"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h3>How to Play</h3>
          <ul>
            <li><span className="symbol">▶</span> Standard choices - Follow your instincts</li>
            <li><span className="symbol fact">✓</span> Factual choices - Verified evidence</li>
            <li><span className="symbol quiz">?</span> Quiz questions - Test knowledge</li>
          </ul>
        </motion.div>

        {/* Cases Grid */}
        <motion.div
          className="cases-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {cases.map((caseConfig, index) => (
            <CaseCard
              key={caseConfig.id}
              caseId={caseConfig.id}
              title={caseConfig.title}
              description={caseConfig.description}
              sealStatus={caseConfig.sealStatus}
              releaseDate={caseConfig.releaseDate}
              price={caseConfig.price}
              difficulty={caseConfig.difficulty}
              isUnlocked={caseConfig.isUnlocked}
              index={index}
            />
          ))}
        </motion.div>

        {/* Back Button */}
        <motion.div
          className="case-actions"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <button className="back-button" onClick={() => navigate('/')}>
            ← Back to Main Menu
          </button>
        </motion.div>
      </div>
    </div>
  )
}

export default CaseSelection

/**
 * ProtectedRoute - Guards routes requiring payment/unlock
 */
import { useState, useEffect } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useLocalStorage } from '@hooks/useLocalStorage'
import { GAME_CONFIG, SEAL_STATUS, ROUTES } from '@utils/constants'
import './ProtectedRoute.css'

export function ProtectedRoute({ caseId, children }) {
  const location = useLocation()
  const [unlockedCases] = useLocalStorage('unlockedCases', [])
  const [isChecking, setIsChecking] = useState(true)
  const [accessDenied, setAccessDenied] = useState(false)

  useEffect(() => {
    // Check if the case is accessible
    const checkAccess = () => {
      const caseConfig = GAME_CONFIG[caseId]

      // Case doesn't exist
      if (!caseConfig) {
        setAccessDenied(true)
        setIsChecking(false)
        return
      }

      // Coming soon cases are never accessible
      if (caseConfig.sealStatus === SEAL_STATUS.COMING_SOON) {
        setAccessDenied(true)
        setIsChecking(false)
        return
      }

      // Free cases are always accessible
      if (caseConfig.sealStatus === SEAL_STATUS.FREE) {
        setIsChecking(false)
        return
      }

      // Premium cases need to be unlocked
      if (caseConfig.sealStatus === SEAL_STATUS.SEALED) {
        const isUnlocked = unlockedCases.includes(caseId)
        setAccessDenied(!isUnlocked)
        setIsChecking(false)
        return
      }

      // Unsealed premium cases
      if (caseConfig.sealStatus === SEAL_STATUS.UNSEALED) {
        const isUnlocked = unlockedCases.includes(caseId)
        setAccessDenied(!isUnlocked)
        setIsChecking(false)
        return
      }

      setIsChecking(false)
    }

    checkAccess()
  }, [caseId, unlockedCases])

  // Loading state
  if (isChecking) {
    return (
      <div className="protected-route-loading">
        <div className="loading-spinner" />
        <p>Verifying access...</p>
      </div>
    )
  }

  // Access denied - show unlock prompt
  if (accessDenied) {
    const caseConfig = GAME_CONFIG[caseId]
    const isComingSoon = caseConfig?.sealStatus === SEAL_STATUS.COMING_SOON

    return (
      <motion.div
        className="access-denied"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="access-denied-content">
          <div className="classified-stamp">
            {isComingSoon ? 'COMING SOON' : 'ACCESS DENIED'}
          </div>

          <h2>{caseConfig?.title || 'Unknown Case'}</h2>

          {isComingSoon ? (
            <>
              <p>This investigation is not yet available.</p>
              <p className="release-date">
                Expected: {caseConfig?.releaseDate || 'TBD'}
              </p>
            </>
          ) : (
            <>
              <p>This classified file requires authorization.</p>
              <p className="price">
                Unlock for {caseConfig?.price || '$4.99'}
              </p>
            </>
          )}

          <div className="access-denied-actions">
            {!isComingSoon && (
              <button
                className="unlock-button"
                onClick={() => window.location.href = `/purchase/${caseId}`}
              >
                Unlock Investigation
              </button>
            )}
            <button
              className="back-button"
              onClick={() => window.location.href = ROUTES.CASES}
            >
              Return to Cases
            </button>
          </div>
        </div>
      </motion.div>
    )
  }

  // Access granted
  return children
}

export default ProtectedRoute

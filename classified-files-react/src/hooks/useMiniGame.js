/**
 * useMiniGame Hook
 * Manages mini-game state and logic
 */
import { useState, useCallback, useRef } from 'react'

export function useMiniGame() {
  const [activeGame, setActiveGame] = useState(null)
  const [isActive, setIsActive] = useState(false)
  const [gameData, setGameData] = useState(null)
  const [gameResult, setGameResult] = useState(null)
  const startTimeRef = useRef(null)

  // Launch a mini-game
  const launchGame = useCallback((gameType, data, onComplete) => {
    if (isActive) {
      console.log('Mini-game already active')
      return
    }

    setActiveGame(gameType)
    setGameData({ ...data, onComplete })
    setIsActive(true)
    setGameResult(null)
    startTimeRef.current = Date.now()
  }, [isActive])

  // Complete the mini-game
  const completeGame = useCallback((success, results = {}) => {
    const completionTime = Date.now() - startTimeRef.current

    const result = {
      success,
      completionTime,
      evidenceGained: results.evidenceGained || null,
      progressIncrease: results.progressIncrease || 0,
      ...results,
    }

    setGameResult(result)

    // Call the onComplete callback if provided
    if (gameData?.onComplete) {
      gameData.onComplete(result)
    }

    return result
  }, [gameData])

  // Close the mini-game
  const closeGame = useCallback(() => {
    setActiveGame(null)
    setGameData(null)
    setIsActive(false)
    startTimeRef.current = null
  }, [])

  return {
    activeGame,
    isActive,
    gameData,
    gameResult,
    launchGame,
    completeGame,
    closeGame,
  }
}

export default useMiniGame

import { useCallback, useMemo } from 'react'
import { useGame } from '@contexts/GameContext'
import { GAME_CONFIG } from '@utils/constants'

/**
 * useGameEngine - Main hook for game logic and scene navigation
 * Provides all game actions and computed state
 */
export function useGameEngine() {
  const { state, actions } = useGame()

  // Load a story into the game engine
  const loadStory = useCallback(
    (story, storyKey) => {
      // Reset game state FIRST, before setting new story
      actions.resetGame()
      // Then set the story
      actions.setStory(story)
      // Load intro scene
      if (story.scenes?.intro) {
        actions.setScene(story.scenes.intro, 'intro')
        actions.markSceneVisited('intro')
      }
    },
    [actions]
  )

  // Navigate to a specific scene
  const navigateToScene = useCallback(
    (sceneName) => {
      if (!state.currentStory?.scenes?.[sceneName]) {
        console.error('Scene not found:', sceneName)
        return false
      }

      const scene = state.currentStory.scenes[sceneName]
      actions.setScene(scene, sceneName)
      actions.markSceneVisited(sceneName)
      return true
    },
    [state.currentStory, actions]
  )

  // Handle a choice selection
  const makeChoice = useCallback(
    (choice, choiceIndex) => {
      // Track the choice
      actions.addChoice(choice.text)

      // Mark choice as visited
      const choiceKey = `${state.currentSceneName}:${choiceIndex}`
      actions.markChoiceVisited(choiceKey)

      // Handle evidence collection
      if (choice.evidence) {
        actions.addEvidence()
      }

      // Handle progress increase
      if (choice.progressIncrease) {
        actions.updateProgress(choice.progressIncrease)
      }

      // Handle quiz answers
      if (choice.quizAnswer !== undefined) {
        handleQuizAnswer(choice)
      }

      // Check for badge awards
      checkForBadges(choice)

      // Navigate to next scene
      if (choice.nextScene) {
        return navigateToScene(choice.nextScene)
      }

      return true
    },
    [state.currentSceneName, actions, navigateToScene]
  )

  // Handle quiz answer scoring
  const handleQuizAnswer = useCallback(
    (choice) => {
      if (choice.quizAnswer === true) {
        actions.updateKnowledge(1, true)
      } else if (choice.quizAnswer === 'partial') {
        actions.updateKnowledge(0.5, false)
      } else {
        actions.updateKnowledge(0, false)
      }
    },
    [actions]
  )

  // Check and award badges
  const checkForBadges = useCallback(
    (choice) => {
      const { gameState } = state

      // Perfect Knowledge Badge
      if (
        gameState.knowledgeScore >= GAME_CONFIG.PERFECT_KNOWLEDGE_THRESHOLD &&
        gameState.correctAnswers === gameState.totalQuestions &&
        gameState.totalQuestions > 0
      ) {
        actions.awardBadge({
          name: 'Perfect Knowledge',
          icon: '🏆',
          description: 'Answered all quiz questions correctly',
        })
      }

      // Fact Finder Badge
      if (choice.factual && gameState.evidenceCount >= GAME_CONFIG.FACT_FINDER_THRESHOLD) {
        actions.awardBadge({
          name: 'Fact Finder',
          icon: '🔍',
          description: 'Consistently chose fact-based investigation paths',
        })
      }

      // Evidence Master Badge
      if (gameState.evidenceCount >= GAME_CONFIG.EVIDENCE_MASTER_THRESHOLD) {
        actions.awardBadge({
          name: 'Evidence Master',
          icon: '📋',
          description: 'Collected significant evidence',
        })
      }
    },
    [state, actions]
  )

  // Check if a choice has been visited
  const isChoiceVisited = useCallback(
    (choiceIndex) => {
      const choiceKey = `${state.currentSceneName}:${choiceIndex}`
      return !!state.gameState.visitedChoices[choiceKey]
    },
    [state.currentSceneName, state.gameState.visitedChoices]
  )

  // Check if a scene has been visited
  const isSceneVisited = useCallback(
    (sceneName) => {
      return state.gameState.visitedScenes.has(sceneName)
    },
    [state.gameState.visitedScenes]
  )

  // Get current scene data
  const currentScene = useMemo(() => state.currentScene, [state.currentScene])

  // Get current scene name
  const currentSceneName = useMemo(() => state.currentSceneName, [state.currentSceneName])

  // Check if game is complete (progress >= 100)
  const isGameComplete = useMemo(
    () => state.gameState.investigationProgress >= GAME_CONFIG.MAX_PROGRESS,
    [state.gameState.investigationProgress]
  )

  // Get game statistics
  const gameStats = useMemo(
    () => ({
      evidenceCount: state.gameState.evidenceCount,
      progress: state.gameState.investigationProgress,
      scenesVisited: state.gameState.visitedScenes.size,
      choicesMade: state.gameState.choices.length,
      knowledgeScore: state.gameState.knowledgeScore,
      totalQuestions: state.gameState.totalQuestions,
      correctAnswers: state.gameState.correctAnswers,
      badges: state.gameState.badges,
    }),
    [state.gameState]
  )

  // Get quiz feedback message
  const getQuizFeedback = useCallback((choice) => {
    if (choice.quizAnswer === true) {
      return {
        type: 'correct',
        message: 'Correct! Excellent knowledge of the facts.',
        icon: '✅',
      }
    } else if (choice.quizAnswer === 'partial') {
      return {
        type: 'partial',
        message: 'Partially correct - this shows good understanding.',
        icon: '⚡',
      }
    } else {
      return {
        type: 'incorrect',
        message: 'Incorrect. Learning the facts will help your investigation.',
        icon: '❌',
      }
    }
  }, [])

  return {
    // State
    currentScene,
    currentSceneName,
    currentStory: state.currentStory,
    gameStats,
    isGameComplete,
    isTyping: state.isTyping,
    isLoading: state.isLoading,
    settings: state.settings,

    // Actions
    loadStory,
    navigateToScene,
    makeChoice,
    isChoiceVisited,
    isSceneVisited,
    getQuizFeedback,
    setTyping: actions.setTyping,
    setLoading: actions.setLoading,
    updateSettings: actions.updateSettings,
    resetGame: actions.resetGame,
  }
}

export default useGameEngine

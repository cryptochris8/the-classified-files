import { useEffect, useState, useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useGameEngine } from '@hooks/useGameEngine'
import { useAudioContext } from '@contexts/AudioContext'
import { loadStory, isStoryAvailable } from '@stories/index'
import TypewriterText from '@components/UI/TypewriterText'
import LoadingScreen from '@components/UI/LoadingScreen'
import Scene from '@components/Game/Scene'
import ChoiceList from '@components/Game/ChoiceList'
import ProgressBar from '@components/Game/ProgressBar'
import EvidenceCounter from '@components/Game/EvidenceCounter'
import KnowledgeScore from '@components/Game/KnowledgeScore'
import { BadgeDisplay, BadgeNotification, QuizFeedback } from '@components/Game/BadgeSystem'
import './Game.css'

// Audio paths
const AUDIO = {
  BACKGROUND_MUSIC: '/audio/music/suspense.mp3',
  CLICK_SFX: '/audio/sfx/button-click.wav',
}

export function Game() {
  const { caseId } = useParams()
  const navigate = useNavigate()

  const {
    currentScene,
    currentStory,
    gameStats,
    isGameComplete,
    loadStory: initStory,
    makeChoice,
    isChoiceVisited,
    getQuizFeedback,
    setTyping,
    resetGame,
  } = useGameEngine()

  const { playBackgroundMusic, stopBackgroundMusic, playSoundEffect } = useAudioContext()

  const [isLoading, setIsLoading] = useState(true)
  const [showChoices, setShowChoices] = useState(false)
  const [storyError, setStoryError] = useState(null)
  const [quizFeedback, setQuizFeedback] = useState(null)
  const [newBadge, setNewBadge] = useState(null)
  const [prevBadgeCount, setPrevBadgeCount] = useState(0)

  // Load story on mount
  useEffect(() => {
    const initializeGame = async () => {
      try {
        // Check if story is available
        if (!isStoryAvailable(caseId)) {
          setStoryError(`Story "${caseId}" is not available yet.`)
          setIsLoading(false)
          return
        }

        // Load the story
        const story = await loadStory(caseId)
        initStory(story, caseId)

        setIsLoading(false)
      } catch (error) {
        console.error('Failed to load story:', error)
        setStoryError('Failed to load the investigation. Please try again.')
        setIsLoading(false)
      }
    }

    initializeGame()
  }, [caseId, initStory])

  // Track if audio has been started (browser requires user interaction)
  const [audioStarted, setAudioStarted] = useState(false)

  // Start background music on first user interaction
  const startAudioOnInteraction = useCallback(() => {
    if (!audioStarted && !isLoading && currentScene) {
      playBackgroundMusic(AUDIO.BACKGROUND_MUSIC)
      setAudioStarted(true)
    }
  }, [audioStarted, isLoading, currentScene, playBackgroundMusic])

  // Stop music on unmount
  useEffect(() => {
    return () => {
      stopBackgroundMusic()
    }
  }, [stopBackgroundMusic])

  // Listen for first click to start audio
  useEffect(() => {
    const handleClick = () => {
      startAudioOnInteraction()
    }
    document.addEventListener('click', handleClick, { once: true })
    return () => document.removeEventListener('click', handleClick)
  }, [startAudioOnInteraction])

  // Detect new badges
  useEffect(() => {
    if (gameStats.badges.length > prevBadgeCount) {
      const latestBadge = gameStats.badges[gameStats.badges.length - 1]
      setNewBadge(latestBadge)
      setPrevBadgeCount(gameStats.badges.length)
    }
  }, [gameStats.badges, prevBadgeCount])

  // Handle text complete
  const handleTextComplete = useCallback(() => {
    setTyping(false)
    setShowChoices(true)
  }, [setTyping])

  // Handle choice selection
  const handleChoice = useCallback((choice, index) => {
    // Play click sound
    playSoundEffect(AUDIO.CLICK_SFX)

    setShowChoices(false)
    setTyping(true)

    // Handle quiz feedback
    if (choice.quizAnswer !== undefined) {
      const feedback = getQuizFeedback(choice)
      setQuizFeedback(feedback)

      // Delay scene navigation for quiz feedback
      setTimeout(() => {
        setQuizFeedback(null)
        makeChoice(choice, index)
      }, 2500)
      return
    }

    // Normal choice
    makeChoice(choice, index)
  }, [makeChoice, getQuizFeedback, setTyping, playSoundEffect])

  // Handle game complete
  const handleGameComplete = useCallback(() => {
    navigate('/cases')
  }, [navigate])

  // Handle badge dismiss
  const handleBadgeDismiss = useCallback(() => {
    setNewBadge(null)
  }, [])

  // Loading state
  if (isLoading) {
    return <LoadingScreen isLoading={true} onComplete={() => setIsLoading(false)} />
  }

  // Error state
  if (storyError) {
    return (
      <div className="game-error">
        <div className="error-content">
          <div className="classified-stamp">ACCESS DENIED</div>
          <h2>Investigation Unavailable</h2>
          <p>{storyError}</p>
          <button className="return-button" onClick={() => navigate('/cases')}>
            Return to Case Selection
          </button>
        </div>
      </div>
    )
  }

  // No scene loaded
  if (!currentScene) {
    return (
      <div className="game-error">
        <div className="error-content">
          <h2>Scene Not Found</h2>
          <p>Unable to load the requested scene.</p>
          <button className="return-button" onClick={() => navigate('/cases')}>
            Return to Cases
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="game-page">
      {/* Status Bar */}
      <header className="game-status-bar">
        <div className="status-left">
          <EvidenceCounter count={gameStats.evidenceCount} />
          <KnowledgeScore
            score={gameStats.knowledgeScore}
            total={gameStats.totalQuestions}
            correct={gameStats.correctAnswers}
          />
          <BadgeDisplay badges={gameStats.badges} />
        </div>

        <div className="status-center">
          <ProgressBar progress={gameStats.progress} label="" />
        </div>

        <div className="status-right">
          <button
            className="menu-button"
            onClick={() => navigate('/cases')}
            title="Return to case selection"
          >
            ☰ Menu
          </button>
        </div>
      </header>

      {/* Main Game Area */}
      <main className="game-content">
        {/* Document/Image Area */}
        <aside className="game-document">
          <Scene scene={currentScene} />
        </aside>

        {/* Narrative Area */}
        <article className="game-narrative">
          <TypewriterText
            text={currentScene.text}
            onComplete={handleTextComplete}
            speed={35}
          />

          {/* Quiz Feedback */}
          <AnimatePresence>
            {quizFeedback && (
              <QuizFeedback
                feedback={quizFeedback}
                onComplete={() => setQuizFeedback(null)}
              />
            )}
          </AnimatePresence>

          {/* Choices */}
          <AnimatePresence>
            {showChoices && !quizFeedback && currentScene.choices?.length > 0 && (
              <ChoiceList
                choices={currentScene.choices}
                prompt={currentScene.prompt}
                onChoice={handleChoice}
                isChoiceVisited={isChoiceVisited}
                quizMode={currentScene.quizMode}
              />
            )}
          </AnimatePresence>

          {/* Investigation Complete */}
          <AnimatePresence>
            {showChoices && (!currentScene.choices || currentScene.choices.length === 0) && (
              <motion.div
                className="game-complete"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                <div className="complete-header">
                  <span className="complete-icon">🏆</span>
                  <h3>Investigation Complete</h3>
                </div>

                <div className="complete-stats">
                  <div className="stat">
                    <span className="stat-value">{gameStats.evidenceCount}</span>
                    <span className="stat-label">Evidence Collected</span>
                  </div>
                  <div className="stat">
                    <span className="stat-value">{gameStats.scenesVisited}</span>
                    <span className="stat-label">Scenes Explored</span>
                  </div>
                  <div className="stat">
                    <span className="stat-value">{gameStats.badges.length}</span>
                    <span className="stat-label">Badges Earned</span>
                  </div>
                </div>

                <button className="return-button" onClick={handleGameComplete}>
                  Return to Case Selection
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </article>
      </main>

      {/* Badge Notification */}
      <BadgeNotification badge={newBadge} onDismiss={handleBadgeDismiss} />
    </div>
  )
}

export default Game

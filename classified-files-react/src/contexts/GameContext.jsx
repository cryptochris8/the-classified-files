import { createContext, useContext, useReducer, useEffect, useMemo } from 'react'
import { STORAGE_KEYS, GAME_CONFIG } from '@utils/constants'

// Initial game state
const initialGameState = {
  currentStory: null,
  currentScene: null,
  currentSceneName: null,
  gameState: {
    evidenceCount: 0,
    investigationProgress: 0,
    choices: [],
    visitedScenes: new Set(),
    visitedChoices: {},
    knowledgeScore: 0,
    correctAnswers: 0,
    totalQuestions: 0,
    badges: [],
  },
  settings: {
    musicEnabled: true,
    sfxEnabled: true,
    textSpeed: GAME_CONFIG.TYPEWRITER_SPEED,
    autoAdvance: false,
    textToSpeech: false,
  },
  isTyping: false,
  isLoading: true,
}

// Action types
const ACTIONS = {
  SET_STORY: 'SET_STORY',
  SET_SCENE: 'SET_SCENE',
  ADD_EVIDENCE: 'ADD_EVIDENCE',
  UPDATE_PROGRESS: 'UPDATE_PROGRESS',
  ADD_CHOICE: 'ADD_CHOICE',
  MARK_SCENE_VISITED: 'MARK_SCENE_VISITED',
  MARK_CHOICE_VISITED: 'MARK_CHOICE_VISITED',
  UPDATE_KNOWLEDGE: 'UPDATE_KNOWLEDGE',
  AWARD_BADGE: 'AWARD_BADGE',
  UPDATE_SETTINGS: 'UPDATE_SETTINGS',
  SET_TYPING: 'SET_TYPING',
  SET_LOADING: 'SET_LOADING',
  RESET_GAME: 'RESET_GAME',
  LOAD_STATE: 'LOAD_STATE',
}

// Reducer function
function gameReducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_STORY:
      return {
        ...state,
        currentStory: action.payload,
      }

    case ACTIONS.SET_SCENE:
      return {
        ...state,
        currentScene: action.payload.scene,
        currentSceneName: action.payload.sceneName,
      }

    case ACTIONS.ADD_EVIDENCE:
      return {
        ...state,
        gameState: {
          ...state.gameState,
          evidenceCount: state.gameState.evidenceCount + 1,
        },
      }

    case ACTIONS.UPDATE_PROGRESS:
      return {
        ...state,
        gameState: {
          ...state.gameState,
          investigationProgress: Math.min(
            GAME_CONFIG.MAX_PROGRESS,
            state.gameState.investigationProgress + action.payload
          ),
        },
      }

    case ACTIONS.ADD_CHOICE:
      return {
        ...state,
        gameState: {
          ...state.gameState,
          choices: [...state.gameState.choices, action.payload],
        },
      }

    case ACTIONS.MARK_SCENE_VISITED:
      const newVisitedScenes = new Set(state.gameState.visitedScenes)
      newVisitedScenes.add(action.payload)
      return {
        ...state,
        gameState: {
          ...state.gameState,
          visitedScenes: newVisitedScenes,
        },
      }

    case ACTIONS.MARK_CHOICE_VISITED:
      return {
        ...state,
        gameState: {
          ...state.gameState,
          visitedChoices: {
            ...state.gameState.visitedChoices,
            [action.payload]: true,
          },
        },
      }

    case ACTIONS.UPDATE_KNOWLEDGE:
      return {
        ...state,
        gameState: {
          ...state.gameState,
          knowledgeScore: state.gameState.knowledgeScore + action.payload.score,
          correctAnswers: action.payload.correct
            ? state.gameState.correctAnswers + 1
            : state.gameState.correctAnswers,
          totalQuestions: state.gameState.totalQuestions + 1,
        },
      }

    case ACTIONS.AWARD_BADGE:
      // Don't award duplicate badges
      if (state.gameState.badges.find((b) => b.name === action.payload.name)) {
        return state
      }
      return {
        ...state,
        gameState: {
          ...state.gameState,
          badges: [...state.gameState.badges, action.payload],
        },
      }

    case ACTIONS.UPDATE_SETTINGS:
      return {
        ...state,
        settings: {
          ...state.settings,
          ...action.payload,
        },
      }

    case ACTIONS.SET_TYPING:
      return {
        ...state,
        isTyping: action.payload,
      }

    case ACTIONS.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      }

    case ACTIONS.RESET_GAME:
      return {
        ...initialGameState,
        settings: state.settings, // Preserve settings
        isLoading: false,
      }

    case ACTIONS.LOAD_STATE:
      return {
        ...state,
        ...action.payload,
        gameState: {
          ...action.payload.gameState,
          visitedScenes: new Set(action.payload.gameState?.visitedScenes || []),
        },
      }

    default:
      return state
  }
}

// Create context
const GameContext = createContext(null)

// Provider component
export function GameProvider({ children }) {
  const [state, dispatch] = useReducer(gameReducer, initialGameState)

  // Load state from localStorage on mount
  useEffect(() => {
    try {
      const savedState = localStorage.getItem(STORAGE_KEYS.GAME_STATE)
      if (savedState) {
        const parsed = JSON.parse(savedState)
        dispatch({ type: ACTIONS.LOAD_STATE, payload: parsed })
      }
    } catch (error) {
      console.error('Failed to load game state:', error)
    }
    dispatch({ type: ACTIONS.SET_LOADING, payload: false })
  }, [])

  // Save state to localStorage when it changes
  useEffect(() => {
    if (!state.isLoading) {
      try {
        const stateToSave = {
          ...state,
          gameState: {
            ...state.gameState,
            visitedScenes: Array.from(state.gameState.visitedScenes),
          },
        }
        localStorage.setItem(STORAGE_KEYS.GAME_STATE, JSON.stringify(stateToSave))
      } catch (error) {
        console.error('Failed to save game state:', error)
      }
    }
  }, [state])

  // Action creators - memoized to prevent infinite loops
  const actions = useMemo(() => ({
    setStory: (story) => dispatch({ type: ACTIONS.SET_STORY, payload: story }),
    setScene: (scene, sceneName) =>
      dispatch({ type: ACTIONS.SET_SCENE, payload: { scene, sceneName } }),
    addEvidence: () => dispatch({ type: ACTIONS.ADD_EVIDENCE }),
    updateProgress: (amount) => dispatch({ type: ACTIONS.UPDATE_PROGRESS, payload: amount }),
    addChoice: (choice) => dispatch({ type: ACTIONS.ADD_CHOICE, payload: choice }),
    markSceneVisited: (sceneName) =>
      dispatch({ type: ACTIONS.MARK_SCENE_VISITED, payload: sceneName }),
    markChoiceVisited: (choiceKey) =>
      dispatch({ type: ACTIONS.MARK_CHOICE_VISITED, payload: choiceKey }),
    updateKnowledge: (score, correct) =>
      dispatch({ type: ACTIONS.UPDATE_KNOWLEDGE, payload: { score, correct } }),
    awardBadge: (badge) => dispatch({ type: ACTIONS.AWARD_BADGE, payload: badge }),
    updateSettings: (settings) => dispatch({ type: ACTIONS.UPDATE_SETTINGS, payload: settings }),
    setTyping: (isTyping) => dispatch({ type: ACTIONS.SET_TYPING, payload: isTyping }),
    setLoading: (isLoading) => dispatch({ type: ACTIONS.SET_LOADING, payload: isLoading }),
    resetGame: () => dispatch({ type: ACTIONS.RESET_GAME }),
  }), [])

  return <GameContext.Provider value={{ state, actions }}>{children}</GameContext.Provider>
}

// Custom hook to use game context
export function useGame() {
  const context = useContext(GameContext)
  if (!context) {
    throw new Error('useGame must be used within a GameProvider')
  }
  return context
}

export { ACTIONS }

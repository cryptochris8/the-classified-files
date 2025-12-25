/**
 * AudioContext - Global audio state management
 */
import { createContext, useContext, useReducer, useEffect, useCallback, useRef } from 'react'
import { useLocalStorage } from '@hooks/useLocalStorage'

// Audio Actions
const AUDIO_ACTIONS = {
  SET_MUSIC_VOLUME: 'SET_MUSIC_VOLUME',
  SET_SFX_VOLUME: 'SET_SFX_VOLUME',
  TOGGLE_MUSIC: 'TOGGLE_MUSIC',
  TOGGLE_SFX: 'TOGGLE_SFX',
  SET_MUTED: 'SET_MUTED',
  LOAD_SETTINGS: 'LOAD_SETTINGS',
}

// Initial state
const initialState = {
  musicEnabled: true,
  sfxEnabled: true,
  musicVolume: 0.4,
  sfxVolume: 0.6,
  isMuted: false,
}

// Reducer
function audioReducer(state, action) {
  switch (action.type) {
    case AUDIO_ACTIONS.SET_MUSIC_VOLUME:
      return { ...state, musicVolume: Math.max(0, Math.min(1, action.payload)) }
    case AUDIO_ACTIONS.SET_SFX_VOLUME:
      return { ...state, sfxVolume: Math.max(0, Math.min(1, action.payload)) }
    case AUDIO_ACTIONS.TOGGLE_MUSIC:
      return { ...state, musicEnabled: !state.musicEnabled }
    case AUDIO_ACTIONS.TOGGLE_SFX:
      return { ...state, sfxEnabled: !state.sfxEnabled }
    case AUDIO_ACTIONS.SET_MUTED:
      return { ...state, isMuted: action.payload }
    case AUDIO_ACTIONS.LOAD_SETTINGS:
      return { ...state, ...action.payload }
    default:
      return state
  }
}

// Context
const AudioContext = createContext(null)

// Sound effect pool for better performance
function createSoundPool(src, poolSize = 3) {
  const pool = []
  for (let i = 0; i < poolSize; i++) {
    const audio = new Audio(src)
    audio.preload = 'auto'
    pool.push({ audio, inUse: false })
  }
  return pool
}

/**
 * AudioProvider - Provides audio context to the app
 */
export function AudioProvider({ children }) {
  const [state, dispatch] = useReducer(audioReducer, initialState)
  const [savedSettings, setSavedSettings] = useLocalStorage('classifiedFiles_audioSettings', null)
  const backgroundMusicRef = useRef(null)
  const soundPoolsRef = useRef({})

  // Load saved settings on mount
  useEffect(() => {
    if (savedSettings) {
      dispatch({ type: AUDIO_ACTIONS.LOAD_SETTINGS, payload: savedSettings })
    }
  }, [])

  // Save settings when they change
  useEffect(() => {
    setSavedSettings({
      musicEnabled: state.musicEnabled,
      sfxEnabled: state.sfxEnabled,
      musicVolume: state.musicVolume,
      sfxVolume: state.sfxVolume,
    })
  }, [state.musicEnabled, state.sfxEnabled, state.musicVolume, state.sfxVolume, setSavedSettings])

  // Play background music
  const playBackgroundMusic = useCallback((src, fadeIn = true) => {
    if (!state.musicEnabled || state.isMuted) return

    // Stop current music
    if (backgroundMusicRef.current) {
      backgroundMusicRef.current.pause()
      backgroundMusicRef.current.src = ''
    }

    const audio = new Audio(src)
    audio.loop = true
    audio.volume = fadeIn ? 0 : state.musicVolume
    backgroundMusicRef.current = audio

    audio.play().then(() => {
      if (fadeIn) {
        // Fade in over 1 second
        const fadeInterval = setInterval(() => {
          if (audio.volume < state.musicVolume) {
            audio.volume = Math.min(state.musicVolume, audio.volume + 0.05)
          } else {
            clearInterval(fadeInterval)
          }
        }, 50)
      }
    }).catch((e) => {
      console.log('Background music play failed:', e)
    })
  }, [state.musicEnabled, state.musicVolume, state.isMuted])

  // Stop background music
  const stopBackgroundMusic = useCallback((fadeOut = true) => {
    if (!backgroundMusicRef.current) return

    const audio = backgroundMusicRef.current

    if (fadeOut && audio.volume > 0) {
      // Fade out over 0.5 second
      const fadeInterval = setInterval(() => {
        if (audio.volume > 0.05) {
          audio.volume = Math.max(0, audio.volume - 0.1)
        } else {
          clearInterval(fadeInterval)
          audio.pause()
          audio.src = ''
          backgroundMusicRef.current = null
        }
      }, 50)
    } else {
      audio.pause()
      audio.src = ''
      backgroundMusicRef.current = null
    }
  }, [])

  // Play sound effect
  const playSoundEffect = useCallback((src, options = {}) => {
    if (!state.sfxEnabled || state.isMuted) return

    const volume = options.volume ?? state.sfxVolume

    // Use sound pool for frequently played sounds
    if (!soundPoolsRef.current[src]) {
      soundPoolsRef.current[src] = createSoundPool(src, 3)
    }

    const pool = soundPoolsRef.current[src]
    const available = pool.find((item) => !item.inUse)

    if (available) {
      available.inUse = true
      available.audio.volume = volume
      available.audio.currentTime = 0
      available.audio.play().catch(() => {})
      available.audio.onended = () => {
        available.inUse = false
      }
    } else {
      // Fallback: create new audio if pool is exhausted
      const audio = new Audio(src)
      audio.volume = volume
      audio.play().catch(() => {})
    }
  }, [state.sfxEnabled, state.sfxVolume, state.isMuted])

  // Update background music volume
  useEffect(() => {
    if (backgroundMusicRef.current) {
      backgroundMusicRef.current.volume = state.isMuted ? 0 : state.musicVolume
    }
  }, [state.musicVolume, state.isMuted])

  // Actions
  const setMusicVolume = useCallback((volume) => {
    dispatch({ type: AUDIO_ACTIONS.SET_MUSIC_VOLUME, payload: volume })
  }, [])

  const setSfxVolume = useCallback((volume) => {
    dispatch({ type: AUDIO_ACTIONS.SET_SFX_VOLUME, payload: volume })
  }, [])

  const toggleMusic = useCallback(() => {
    dispatch({ type: AUDIO_ACTIONS.TOGGLE_MUSIC })
    if (state.musicEnabled && backgroundMusicRef.current) {
      backgroundMusicRef.current.pause()
    }
  }, [state.musicEnabled])

  const toggleSfx = useCallback(() => {
    dispatch({ type: AUDIO_ACTIONS.TOGGLE_SFX })
  }, [])

  const toggleMute = useCallback(() => {
    dispatch({ type: AUDIO_ACTIONS.SET_MUTED, payload: !state.isMuted })
  }, [state.isMuted])

  const value = {
    // State
    musicEnabled: state.musicEnabled,
    sfxEnabled: state.sfxEnabled,
    musicVolume: state.musicVolume,
    sfxVolume: state.sfxVolume,
    isMuted: state.isMuted,

    // Actions
    setMusicVolume,
    setSfxVolume,
    toggleMusic,
    toggleSfx,
    toggleMute,

    // Audio playback
    playBackgroundMusic,
    stopBackgroundMusic,
    playSoundEffect,
  }

  return (
    <AudioContext.Provider value={value}>
      {children}
    </AudioContext.Provider>
  )
}

/**
 * useAudioContext Hook - Access audio context
 */
export function useAudioContext() {
  const context = useContext(AudioContext)
  if (!context) {
    throw new Error('useAudioContext must be used within an AudioProvider')
  }
  return context
}

export default AudioProvider

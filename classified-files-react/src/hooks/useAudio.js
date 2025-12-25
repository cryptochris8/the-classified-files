import { useState, useEffect, useRef, useCallback } from 'react'

/**
 * Custom hook for audio playback management
 * @param {string} src - Audio source URL
 * @param {Object} options - Configuration options
 * @returns {Object} - Audio control methods and state
 */
export function useAudio(src, options = {}) {
  const { volume = 0.5, loop = false, autoPlay = false } = options

  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [error, setError] = useState(null)

  // Initialize audio element
  useEffect(() => {
    const audio = new Audio(src)
    audio.volume = volume
    audio.loop = loop
    audioRef.current = audio

    const handleLoadedData = () => {
      setIsLoaded(true)
      setDuration(audio.duration)
    }

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime)
    }

    const handleEnded = () => {
      setIsPlaying(false)
      if (!loop) {
        setCurrentTime(0)
      }
    }

    const handleError = (e) => {
      setError(e)
      setIsPlaying(false)
    }

    audio.addEventListener('loadeddata', handleLoadedData)
    audio.addEventListener('timeupdate', handleTimeUpdate)
    audio.addEventListener('ended', handleEnded)
    audio.addEventListener('error', handleError)

    if (autoPlay) {
      audio.play().catch((e) => {
        console.log('Autoplay prevented:', e)
      })
    }

    return () => {
      audio.removeEventListener('loadeddata', handleLoadedData)
      audio.removeEventListener('timeupdate', handleTimeUpdate)
      audio.removeEventListener('ended', handleEnded)
      audio.removeEventListener('error', handleError)
      audio.pause()
      audio.src = ''
    }
  }, [src, volume, loop, autoPlay])

  // Update volume when it changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  const play = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true)
      }).catch((e) => {
        console.log('Play failed:', e)
        setError(e)
      })
    }
  }, [])

  const pause = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause()
      setIsPlaying(false)
    }
  }, [])

  const toggle = useCallback(() => {
    if (isPlaying) {
      pause()
    } else {
      play()
    }
  }, [isPlaying, play, pause])

  const stop = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
      setIsPlaying(false)
      setCurrentTime(0)
    }
  }, [])

  const seek = useCallback((time) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time
      setCurrentTime(time)
    }
  }, [])

  const setVolume = useCallback((vol) => {
    if (audioRef.current) {
      audioRef.current.volume = Math.max(0, Math.min(1, vol))
    }
  }, [])

  return {
    isPlaying,
    isLoaded,
    currentTime,
    duration,
    error,
    play,
    pause,
    toggle,
    stop,
    seek,
    setVolume,
    audioRef,
  }
}

/**
 * Hook for playing one-shot sound effects
 */
export function useSoundEffect() {
  const play = useCallback((src, volume = 0.5) => {
    const audio = new Audio(src)
    audio.volume = volume
    audio.play().catch((e) => {
      console.log('Sound effect play failed:', e)
    })
  }, [])

  return { play }
}

export default useAudio

import { useState, useEffect, useCallback, useRef, useMemo } from 'react'
import { GAME_CONFIG } from '@utils/constants'

/**
 * Custom hook for typewriter text animation
 * @param {string} text - The text to animate
 * @param {Object} options - Configuration options
 * @returns {Object} - { displayedText, isTyping, skip, reset }
 */
export function useTypewriter(text, options = {}) {
  const {
    speed = GAME_CONFIG.TYPEWRITER_SPEED,
    onComplete = () => {},
    autoStart = true,
    delay = 0,
  } = options

  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const skipRef = useRef(false)
  const timeoutRef = useRef(null)
  const onCompleteRef = useRef(onComplete)

  // Keep onComplete ref updated
  useEffect(() => {
    onCompleteRef.current = onComplete
  }, [onComplete])

  // Reset the typewriter
  const reset = useCallback(() => {
    setDisplayedText('')
    setCurrentIndex(0)
    setIsTyping(false)
    skipRef.current = false
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }, [])

  // Skip to the end
  const skip = useCallback(() => {
    skipRef.current = true
    setDisplayedText(text)
    setCurrentIndex(text.length)
    setIsTyping(false)
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    onCompleteRef.current?.()
  }, [text])

  // Start typing effect
  useEffect(() => {
    if (!text || !autoStart) return

    // Reset when text changes
    setDisplayedText('')
    setCurrentIndex(0)
    skipRef.current = false

    // Delay before starting
    const startTimeout = setTimeout(() => {
      setIsTyping(true)
    }, delay)

    return () => clearTimeout(startTimeout)
  }, [text, autoStart, delay])

  // Typing animation
  useEffect(() => {
    if (!isTyping || skipRef.current) return

    if (currentIndex < text.length) {
      timeoutRef.current = setTimeout(() => {
        if (skipRef.current) {
          setDisplayedText(text)
          setCurrentIndex(text.length)
          setIsTyping(false)
          onCompleteRef.current?.()
          return
        }

        setDisplayedText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)

      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
        }
      }
    } else {
      setIsTyping(false)
      onCompleteRef.current?.()
    }
  }, [isTyping, currentIndex, text, speed])

  return {
    displayedText,
    isTyping,
    skip,
    reset,
    progress: text ? (currentIndex / text.length) * 100 : 0,
  }
}

export default useTypewriter

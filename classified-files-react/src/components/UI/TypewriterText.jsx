import { useEffect, useCallback } from 'react'
import { useTypewriter } from '@hooks/useTypewriter'
import './TypewriterText.css'

/**
 * TypewriterText - Animated text display component
 * Click or press spacebar to skip animation
 */
export function TypewriterText({
  text,
  onComplete = () => {},
  speed = 50,
  className = '',
  showCursor = true,
}) {
  const { displayedText, isTyping, skip } = useTypewriter(text, {
    speed,
    onComplete,
  })

  // Handle click to skip
  const handleClick = useCallback(() => {
    if (isTyping) {
      skip()
    }
  }, [isTyping, skip])

  // Handle keyboard to skip (spacebar)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Space' && isTyping) {
        e.preventDefault()
        skip()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isTyping, skip])

  // Split text into paragraphs
  const paragraphs = displayedText.split('\n\n')

  return (
    <div
      className={`typewriter-text ${isTyping ? 'typing' : ''} ${className}`}
      onClick={handleClick}
      role="article"
      aria-live="polite"
    >
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="typewriter-paragraph">
          {paragraph}
          {showCursor && isTyping && index === paragraphs.length - 1 && (
            <span className="typewriter-cursor">|</span>
          )}
        </p>
      ))}
      {isTyping && (
        <span className="skip-hint">Click or press SPACE to skip</span>
      )}
    </div>
  )
}

export default TypewriterText

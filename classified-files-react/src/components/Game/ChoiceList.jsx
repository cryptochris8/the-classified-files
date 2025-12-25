import { useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import ChoiceButton from './ChoiceButton'
import './ChoiceList.css'

// Random prompts for variety
const DEFAULT_PROMPTS = [
  'What would you like to do?',
  'How will you proceed?',
  "What's your next move?",
  'Choose your approach:',
  'What action will you take?',
  'How do you want to investigate?',
  'Select your next step:',
  "What's your decision?",
  'Which path will you follow?',
  'How will you continue your investigation?',
]

/**
 * ChoiceList - Displays available choices for the current scene
 */
export function ChoiceList({
  choices = [],
  prompt,
  onChoice,
  isChoiceVisited,
  disabled = false,
  quizMode = false,
}) {
  // Get a random prompt if none provided
  const displayPrompt = prompt || DEFAULT_PROMPTS[Math.floor(Math.random() * DEFAULT_PROMPTS.length)]

  // Handle keyboard navigation (1-9 keys)
  const handleKeyDown = useCallback(
    (e) => {
      if (disabled) return

      const keyNum = parseInt(e.key, 10)
      if (keyNum >= 1 && keyNum <= choices.length) {
        e.preventDefault()
        onChoice(choices[keyNum - 1], keyNum - 1)
      }
    },
    [choices, onChoice, disabled]
  )

  // Add keyboard listener
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  if (!choices || choices.length === 0) {
    return null
  }

  return (
    <motion.div
      className="choice-list"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Prompt */}
      <p className="choice-prompt">{displayPrompt}</p>

      {/* Choices */}
      <div className="choices-container">
        {choices.map((choice, index) => (
          <ChoiceButton
            key={index}
            choice={choice}
            index={index}
            onClick={() => onChoice(choice, index)}
            isVisited={isChoiceVisited?.(index)}
            disabled={disabled}
            quizMode={quizMode || choice.quizAnswer !== undefined}
          />
        ))}
      </div>

      {/* Keyboard hint */}
      <p className="keyboard-hint">
        Press 1-{Math.min(choices.length, 9)} to select
      </p>
    </motion.div>
  )
}

export default ChoiceList

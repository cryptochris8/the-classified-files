/**
 * useTypewriter Hook Tests
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { renderHook, act, waitFor } from '@testing-library/react'
import { useTypewriter } from './useTypewriter'

// Mock the constants
vi.mock('@utils/constants', () => ({
  GAME_CONFIG: {
    TYPEWRITER_SPEED: 50,
  },
}))

describe('useTypewriter', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('should start with empty displayed text', () => {
    const { result } = renderHook(() => useTypewriter('Hello World', { speed: 50 }))
    
    expect(result.current.displayedText).toBe('')
    // isTyping starts false, then becomes true after delay
    expect(result.current.isTyping).toBe(false)
  })

  it('should start typing after delay', () => {
    const { result } = renderHook(() => useTypewriter('Hello', { speed: 50, delay: 0 }))
    
    // Initially not typing
    expect(result.current.isTyping).toBe(false)
    
    // After delay, should be typing
    act(() => {
      vi.advanceTimersByTime(1)
    })
    expect(result.current.isTyping).toBe(true)
  })

  it('should type text character by character', () => {
    const { result } = renderHook(() => useTypewriter('Hi', { speed: 50, delay: 0 }))
    
    // Start typing
    act(() => {
      vi.advanceTimersByTime(1)
    })
    
    // Type first character
    act(() => {
      vi.advanceTimersByTime(50)
    })
    expect(result.current.displayedText).toBe('H')
    
    // Type second character
    act(() => {
      vi.advanceTimersByTime(50)
    })
    expect(result.current.displayedText).toBe('Hi')
  })

  it('should skip to end when skip is called', () => {
    const { result } = renderHook(() => useTypewriter('Hello World', { speed: 50 }))
    
    act(() => {
      result.current.skip()
    })
    
    expect(result.current.displayedText).toBe('Hello World')
    expect(result.current.isTyping).toBe(false)
  })

  it('should reset when reset is called', () => {
    const { result } = renderHook(() => useTypewriter('Test', { speed: 50 }))
    
    act(() => {
      result.current.skip()
    })
    expect(result.current.displayedText).toBe('Test')
    
    act(() => {
      result.current.reset()
    })
    expect(result.current.displayedText).toBe('')
    expect(result.current.isTyping).toBe(false)
  })

  it('should track progress percentage', () => {
    const { result } = renderHook(() => useTypewriter('AB', { speed: 50, delay: 0 }))

    // Start typing
    act(() => {
      vi.advanceTimersByTime(1)
    })
    expect(result.current.progress).toBe(0)

    // Type first character (50% of 2 chars)
    act(() => {
      vi.advanceTimersByTime(50)
    })
    expect(result.current.progress).toBe(50)

    // Type second character (100% of 2 chars)
    act(() => {
      vi.advanceTimersByTime(50)
    })
    expect(result.current.progress).toBe(100)
  })
})

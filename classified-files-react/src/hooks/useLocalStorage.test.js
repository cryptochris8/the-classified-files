/**
 * useLocalStorage Hook Tests
 */
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useLocalStorage } from './useLocalStorage'

describe('useLocalStorage', () => {
  beforeEach(() => {
    localStorage.clear()
    localStorage.getItem.mockClear()
    localStorage.setItem.mockClear()
  })

  it('should return initial value when localStorage is empty', () => {
    localStorage.getItem.mockReturnValue(null)
    
    const { result } = renderHook(() => useLocalStorage('testKey', 'defaultValue'))
    
    expect(result.current[0]).toBe('defaultValue')
  })

  it('should return stored value from localStorage', () => {
    localStorage.getItem.mockReturnValue(JSON.stringify('storedValue'))
    
    const { result } = renderHook(() => useLocalStorage('testKey', 'defaultValue'))
    
    expect(result.current[0]).toBe('storedValue')
  })

  it('should update localStorage when value changes', () => {
    localStorage.getItem.mockReturnValue(null)
    
    const { result } = renderHook(() => useLocalStorage('testKey', 'initial'))
    
    act(() => {
      result.current[1]('newValue')
    })
    
    expect(localStorage.setItem).toHaveBeenCalledWith('testKey', JSON.stringify('newValue'))
    expect(result.current[0]).toBe('newValue')
  })

  it('should handle objects correctly', () => {
    localStorage.getItem.mockReturnValue(null)
    
    const { result } = renderHook(() => useLocalStorage('testKey', { count: 0 }))
    
    act(() => {
      result.current[1]({ count: 5 })
    })
    
    expect(localStorage.setItem).toHaveBeenCalledWith('testKey', JSON.stringify({ count: 5 }))
    expect(result.current[0]).toEqual({ count: 5 })
  })

  it('should handle arrays correctly', () => {
    localStorage.getItem.mockReturnValue(JSON.stringify(['item1', 'item2']))
    
    const { result } = renderHook(() => useLocalStorage('testKey', []))
    
    expect(result.current[0]).toEqual(['item1', 'item2'])
  })
})

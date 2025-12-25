/**
 * Toast - Notification toast component
 */
import { useState, useEffect, useCallback, createContext, useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { createPortal } from 'react-dom'
import './Toast.css'

// Toast Context
const ToastContext = createContext(null)

// Toast types with their icons
const TOAST_TYPES = {
  success: { icon: '✓', className: 'toast-success' },
  error: { icon: '✕', className: 'toast-error' },
  warning: { icon: '⚠', className: 'toast-warning' },
  info: { icon: 'ℹ', className: 'toast-info' },
}

/**
 * Individual Toast Component
 */
function ToastItem({ id, type, message, onDismiss, duration = 4000 }) {
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        onDismiss(id)
      }, duration)
      return () => clearTimeout(timer)
    }
  }, [id, duration, onDismiss])

  const toastConfig = TOAST_TYPES[type] || TOAST_TYPES.info

  return (
    <motion.div
      className={`toast ${toastConfig.className}`}
      initial={{ opacity: 0, x: 100, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 100, scale: 0.9 }}
      transition={{ duration: 0.2 }}
      role="alert"
    >
      <span className="toast-icon">{toastConfig.icon}</span>
      <span className="toast-message">{message}</span>
      <button
        className="toast-dismiss"
        onClick={() => onDismiss(id)}
        aria-label="Dismiss"
      >
        ×
      </button>
    </motion.div>
  )
}

/**
 * Toast Container - Renders all active toasts
 */
function ToastContainer({ toasts, removeToast }) {
  return createPortal(
    <div className="toast-container">
      <AnimatePresence>
        {toasts.map((toast) => (
          <ToastItem
            key={toast.id}
            {...toast}
            onDismiss={removeToast}
          />
        ))}
      </AnimatePresence>
    </div>,
    document.body
  )
}

/**
 * Toast Provider - Provides toast functionality to the app
 */
export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const addToast = useCallback((message, type = 'info', duration = 4000) => {
    const id = Date.now() + Math.random()
    setToasts((prev) => [...prev, { id, message, type, duration }])
    return id
  }, [])

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }, [])

  const toast = {
    success: (message, duration) => addToast(message, 'success', duration),
    error: (message, duration) => addToast(message, 'error', duration),
    warning: (message, duration) => addToast(message, 'warning', duration),
    info: (message, duration) => addToast(message, 'info', duration),
    dismiss: removeToast,
  }

  return (
    <ToastContext.Provider value={toast}>
      {children}
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </ToastContext.Provider>
  )
}

/**
 * useToast Hook - Access toast functions
 */
export function useToast() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}

export default ToastProvider

/**
 * Modal - Reusable modal dialog component
 */
import { useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { createPortal } from 'react-dom'
import './Modal.css'

export function Modal({
  isOpen,
  onClose,
  title,
  children,
  size = 'medium',
  showCloseButton = true,
  closeOnOverlay = true,
  closeOnEscape = true,
}) {
  // Handle escape key
  const handleEscape = useCallback(
    (e) => {
      if (e.key === 'Escape' && closeOnEscape && onClose) {
        onClose()
      }
    },
    [closeOnEscape, onClose]
  )

  // Handle overlay click
  const handleOverlayClick = useCallback(
    (e) => {
      if (e.target === e.currentTarget && closeOnOverlay && onClose) {
        onClose()
      }
    },
    [closeOnOverlay, onClose]
  )

  // Add/remove event listeners
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isOpen, handleEscape])

  const sizeClass = `modal-${size}`

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={handleOverlayClick}
        >
          <motion.div
            className={`modal-container ${sizeClass}`}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby={title ? 'modal-title' : undefined}
          >
            {showCloseButton && (
              <button
                className="modal-close"
                onClick={onClose}
                aria-label="Close modal"
              >
                ×
              </button>
            )}

            {title && (
              <div className="modal-header">
                <h2 id="modal-title" className="modal-title">
                  {title}
                </h2>
              </div>
            )}

            <div className="modal-content">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )

  // Use portal to render modal at document root
  return createPortal(modalContent, document.body)
}

export default Modal

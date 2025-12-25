import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Scene.css'

/**
 * Scene - Displays the current scene with image and handles loading
 */
export function Scene({ scene, onImageLoad, onImageError }) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Reset image state when scene changes
  useEffect(() => {
    setImageLoaded(false)
    setImageError(false)
  }, [scene?.image])

  const handleImageLoad = () => {
    setImageLoaded(true)
    onImageLoad?.()
  }

  const handleImageError = () => {
    setImageError(true)
    onImageError?.()
  }

  // Construct image path
  const getImagePath = (imageName) => {
    if (!imageName) return null
    // Check if it's already a full path
    if (imageName.startsWith('http') || imageName.startsWith('/')) {
      return imageName
    }
    return `/images/${imageName}.png`
  }

  const imagePath = getImagePath(scene?.image)

  return (
    <div className="scene-container" ref={ref}>
      <motion.div
        className="scene-document"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {imagePath && !imageError ? (
          <div className="scene-image-wrapper">
            {/* Loading placeholder */}
            {!imageLoaded && (
              <div className="image-loading">
                <div className="loading-spinner" />
                <p>Loading classified document...</p>
              </div>
            )}

            {/* Actual image - lazy loaded when in view */}
            {inView && (
              <img
                src={imagePath}
                alt={scene?.image || 'Scene'}
                className={`scene-image ${imageLoaded ? 'loaded' : ''}`}
                onLoad={handleImageLoad}
                onError={handleImageError}
                loading="lazy"
              />
            )}

            {/* Image caption */}
            {imageLoaded && scene?.image && (
              <div className="image-caption">
                {scene.image.replace(/_/g, ' ')}
              </div>
            )}
          </div>
        ) : (
          <div className="scene-placeholder">
            <div className="classified-watermark">
              <span className="stamp">CLASSIFIED</span>
              <div className="document-lines">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            {imageError && (
              <p className="image-error-text">Document image unavailable</p>
            )}
          </div>
        )}
      </motion.div>

      {/* Sources section */}
      {scene?.sources && scene.sources.length > 0 && (
        <motion.div
          className="scene-sources"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h4>📚 Sources:</h4>
          <ul>
            {scene.sources.map((source, index) => (
              <li key={index}>{source}</li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* Educational note */}
      {scene?.educationalNote && (
        <motion.div
          className="scene-educational-note"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <div className="note-header">💡 Educational Note:</div>
          <p>{scene.educationalNote}</p>
        </motion.div>
      )}
    </div>
  )
}

export default Scene

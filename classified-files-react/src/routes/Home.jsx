import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import LoadingScreen from '@components/UI/LoadingScreen'
import './Home.css'

export function Home() {
  const [showLoading, setShowLoading] = useState(true)
  const navigate = useNavigate()

  const handleLoadingComplete = () => {
    setShowLoading(false)
  }

  const handleStartGame = () => {
    navigate('/cases')
  }

  if (showLoading) {
    return <LoadingScreen isLoading={true} onComplete={handleLoadingComplete} />
  }

  return (
    <div className="home-page">
      <div className="home-content">
        {/* Main Title */}
        <motion.div
          className="home-header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="classified-badge">TOP SECRET // DECLASSIFIED</div>
          <h1 className="home-title">THE CLASSIFIED FILES</h1>
          <p className="home-subtitle">Interactive Historical Investigations</p>
        </motion.div>

        {/* Description */}
        <motion.div
          className="home-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <p>
            Step into the shoes of an investigator and explore some of history's
            most controversial and classified cases. Uncover evidence, make crucial
            decisions, and discover the truth behind the headlines.
          </p>
          <p>
            Each case combines authentic historical questions with fictional dramatic
            elements to create an immersive investigative experience.
          </p>
        </motion.div>

        {/* Features */}
        <motion.div
          className="home-features"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="feature">
            <span className="feature-icon">15+</span>
            <span className="feature-text">Case Files</span>
          </div>
          <div className="feature">
            <span className="feature-icon">100+</span>
            <span className="feature-text">Scenes</span>
          </div>
          <div className="feature">
            <span className="feature-icon">500+</span>
            <span className="feature-text">Choices</span>
          </div>
        </motion.div>

        {/* Start Button */}
        <motion.div
          className="home-actions"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <button className="start-button" onClick={handleStartGame}>
            <span className="button-text">ACCESS CLASSIFIED FILES</span>
            <span className="button-icon">&#x2192;</span>
          </button>
        </motion.div>

        {/* Footer Warning */}
        <motion.div
          className="home-footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p className="warning-text">
            WARNING: Contains mature themes and sensitive historical content.
            Viewer discretion is advised.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Home

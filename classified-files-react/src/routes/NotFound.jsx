import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import './NotFound.css'

export function NotFound() {
  const navigate = useNavigate()

  return (
    <div className="not-found-page">
      <motion.div
        className="not-found-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="classified-stamp">ACCESS DENIED</div>
        <h1 className="error-code">404</h1>
        <h2>FILE NOT FOUND</h2>
        <p>The classified document you are looking for does not exist or has been redacted.</p>

        <div className="not-found-actions">
          <button className="primary-button" onClick={() => navigate('/')}>
            Return to Home
          </button>
          <button className="secondary-button" onClick={() => navigate('/cases')}>
            View Case Files
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default NotFound

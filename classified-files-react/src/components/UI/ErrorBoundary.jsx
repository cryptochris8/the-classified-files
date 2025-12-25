/**
 * ErrorBoundary - Catches React errors and displays fallback UI
 */
import { Component } from 'react'
import './ErrorBoundary.css'

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo })
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null, errorInfo: null })
  }

  handleGoHome = () => {
    window.location.href = '/'
  }

  render() {
    if (this.state.hasError) {
      const { fallback } = this.props

      if (fallback) {
        return fallback
      }

      return (
        <div className="error-boundary">
          <div className="error-content">
            <div className="error-stamp">SYSTEM ERROR</div>
            <h2>Something went wrong</h2>
            <p>
              An unexpected error occurred. Our agents are investigating the issue.
            </p>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="error-details">
                <summary>Technical Details</summary>
                <pre>{this.state.error.toString()}</pre>
                {this.state.errorInfo && (
                  <pre>{this.state.errorInfo.componentStack}</pre>
                )}
              </details>
            )}

            <div className="error-actions">
              <button className="retry-button" onClick={this.handleRetry}>
                Try Again
              </button>
              <button className="home-button" onClick={this.handleGoHome}>
                Return to Home
              </button>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary

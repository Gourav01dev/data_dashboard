import React from 'react';
import { showToast } from '../../utils/toast';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    
   
    this.logError(error, errorInfo);
    
   
    showToast.error('Something went wrong. Our team has been notified.');
  }
  
  logError(error, errorInfo) { 
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  handleRetry = () => {
    this.setState({ 
      hasError: false,
      error: null,
      errorInfo: null
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Something went wrong.</h2>
          <div className="error-actions">
            <button onClick={this.handleRetry}>
              Try Again
            </button>
            <button onClick={() => window.location.reload()}>
              Reload Page
            </button>
          </div>
          {this.props.showDetails && (
            <details style={{ whiteSpace: 'pre-wrap', marginTop: '20px' }}>
              <summary>Error Details</summary>
              <p>{this.state.error && this.state.error.toString()}</p>
              <p>Component Stack:</p>
              <pre>{this.state.errorInfo && this.state.errorInfo.componentStack}</pre>
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}


export const withErrorBoundary = (Component, options = {}) => {
  return function WithErrorBoundary(props) {
    return (
      <ErrorBoundary showDetails={options.showDetails} {...options}>
        <Component {...props} />
      </ErrorBoundary>
    );
  };
};

export default ErrorBoundary;

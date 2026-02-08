import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/globals.css'

// Suppress harmless Google Maps CSP warnings (blocked by ad blockers/privacy extensions)
// The map still works fine - this is just Google analytics being blocked
const originalError = console.error
console.error = (...args) => {
  const errorMsg = args[0]?.toString() || ''
  
  // Filter out Google Maps CSP test errors (harmless, caused by ad blockers)
  if (errorMsg.includes('gen_204') || errorMsg.includes('ERR_BLOCKED_BY_CLIENT')) {
    return // Silently ignore this specific error
  }
  
  originalError.apply(console, args)
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

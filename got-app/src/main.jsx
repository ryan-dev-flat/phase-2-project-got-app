import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
 //StrictMode - React will call the initializer and updater functions twice in order to help you find accidental impurities like mutating state
 <React.StrictMode>
      <App />
  </React.StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

async function start() {
  try {
    const response = await fetch('/api/v1/config')
    const config = await response.json()
    document.documentElement.dataset.country = config.country || ''
  } catch { /* locale falls back to saved preference or browser time zone */ }
  createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>)
}

start()

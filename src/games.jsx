import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Games from './pages/Games.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Games />
  </StrictMode>,
)
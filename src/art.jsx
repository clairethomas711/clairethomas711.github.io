import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Art from './pages/Art.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Art />
  </StrictMode>,
)
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Hero from './component/hero.jsx'
import Features from './component/Featured.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hero/>
    <Features/>
  </StrictMode>,
)
z
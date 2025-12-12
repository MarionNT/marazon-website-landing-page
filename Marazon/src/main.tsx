import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* The Browser Router must wrap the App for routing to work */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
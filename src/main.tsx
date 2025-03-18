import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from './pages/Home.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HomePage/>
  </StrictMode>,
)

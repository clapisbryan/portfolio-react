import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Pages/App/App'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/main.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

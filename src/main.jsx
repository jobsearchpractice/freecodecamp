import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NewComponenet from './components/newcomponenet.jsx'
import NewComponenets2 from './components/newcomponenets2.jsx'

const root = createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <App />
    <NewComponenet/>
    <NewComponenets2/>
  </StrictMode>
)

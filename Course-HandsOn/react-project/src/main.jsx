import { createRoot } from 'react-dom/client'
import './index.css'
import App, { TimeOfDayGreeting } from './App.jsx'
import { createElement } from 'react'
import Footer from './Footer.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Footer />
  </>
) 






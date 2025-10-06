import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './pages/home.jsx'
import AboutPage from './pages/About.jsx'
import HistoryPage from './pages/History.jsx'
import OurTeamPage from './pages/OurTeam.jsx'
import ClaraPage from './pages/clara.jsx'
import FaqPage from './pages/Faq.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <HomePage /> */}
    {/* <AboutPage/> */}
    {/* <HistoryPage/> */}
    {/* <OurTeamPage/> */}
    {/* <ClaraPage/> */}
    <FaqPage/>
  </StrictMode>,
)
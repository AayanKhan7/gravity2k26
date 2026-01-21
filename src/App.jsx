import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// ✅ EAGER IMPORTS
import HeroSceneWrapper from './components/canvas/HeroSceneWrapper'
import HeroSection from './components/hero/HeroSection'
import Footer from './components/common/Footer'
import About from './components/sections/About'
import Navbar from './components/common/Navbar' // 👈 IMPORT NAVBAR HERE
import { EVENTS } from './data/events'

// 💤 LAZY IMPORTS
const GlobalStarBackground = lazy(() => import('./components/canvas/GlobalStarBackground'))
const PlanetEvents = lazy(() => import('./components/events/PlanetEvents'))
const Gallery = lazy(() => import('./components/sections/Gallery'))
const Sponsors = lazy(() => import('./components/sections/Sponsors'))
const Contact = lazy(() => import('./components/sections/Contact'))
const EventDetailsPage = lazy(() => import('./components/events/EventDetailsPage'))

const LoadingSpinner = () => (
  <div className="flex items-center justify-center w-full h-40 text-cyan-400 font-mono tracking-widest animate-pulse">
    LOADING...
  </div>
)

function App() {
  const pitchData = EVENTS?.find(e => e.id === 'pitch-perfect')
  const cineData = EVENTS?.find(e => e.id === 'cineclash')
  const quadrantData = EVENTS?.find(e => e.id === 'quadrant')
  const nexusData = EVENTS?.find(e => e.id === 'nexus')

  return (
    <Router>
      <div className="relative overflow-x-hidden text-white">
        
        <Suspense fallback={null}>
          <GlobalStarBackground />
        </Suspense>

        <Routes>
          <Route path="/" element={<HomeLayout />} />

          {/* EVENTS PAGES */}
          <Route path="/pitch-perfect" element={<Suspense fallback={<div className="min-h-screen bg-black" />}><EventDetailsPage eventData={pitchData} /></Suspense>} />
          <Route path="/cineclash" element={<Suspense fallback={<div className="min-h-screen bg-black" />}><EventDetailsPage eventData={cineData} /></Suspense>} />
          <Route path="/quadrant" element={<Suspense fallback={<div className="min-h-screen bg-black" />}><EventDetailsPage eventData={quadrantData} /></Suspense>} />
          <Route path="/nexus" element={<Suspense fallback={<div className="min-h-screen bg-black" />}><EventDetailsPage eventData={nexusData} /></Suspense>} />
        </Routes>
      </div>
    </Router>
  )
}

// 📦 HOME LAYOUT (Navbar added here)
function HomeLayout() {
  return (
    <>
      {/* ✅ FIXED NAVBAR: Placed here to sit ON TOP of everything */}
      <div 
        style={{
          position: "fixed",
          top: "20px",
          left: 0,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          zIndex: 9999,      // Maximum Z-Index
          pointerEvents: "none" // Allows clicking through the empty sides
        }}
      >
        <div style={{ pointerEvents: "auto" }}>
          <Navbar />
        </div>
      </div>

      <HeroSceneWrapper />
      
      <div className="relative z-10">
        <main>
          <section id="hero" className="min-h-screen flex items-center justify-center px-4 md:px-0" style={{ background: 'rgba(0,0,0,0.35)' }}>
            <HeroSection />
          </section>

          <div style={{ background: 'rgba(0,0,0,0.35)' }}>
            <About />
            <div className="h-24 md:h-40" />
            <section id="events" className="relative min-h-screen">
              <Suspense fallback={<LoadingSpinner />}>
                <PlanetEvents />
              </Suspense>
            </section>
            <Suspense fallback={<LoadingSpinner />}>
              <Gallery />
            </Suspense>
            <Suspense fallback={<div className="h-20" />}>
              <Sponsors />
            </Suspense>
            <Suspense fallback={<div className="h-20" />}>
              <Contact />
            </Suspense>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
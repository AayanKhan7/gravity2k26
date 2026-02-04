import { Suspense, lazy, useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { motion } from "framer-motion"

// ✅ EAGER IMPORTS
import HeroSceneWrapper from './components/canvas/HeroSceneWrapper'
import HeroSection from './components/hero/HeroSection'
import Footer from './components/common/Footer'
import About from './components/sections/About'
import GuestsSection from './components/sections/GuestsSection'
import Navbar from './components/common/Navbar'
import LoadingScreen from './components/common/LoadingScreen'
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
  const [enableStarfield, setEnableStarfield] = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  // ✅ UPDATED: Only disable stars if user prefers reduced motion (kept mobile enabled)
  useEffect(() => {
    // const widthQuery = window.matchMedia('(max-width: 768px)') // ❌ REMOVED MOBILE CHECK
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    const updateFlags = () => {
      // Only disable if user explicitly requests reduced motion in OS settings
      const shouldDisable = motionQuery.matches 
      setEnableStarfield(!shouldDisable)
    }

    updateFlags()
    // widthQuery.addEventListener('change', updateFlags) // ❌ Removed listener
    motionQuery.addEventListener('change', updateFlags)

    return () => {
      // widthQuery.removeEventListener('change', updateFlags) // ❌ Removed cleanup
      motionQuery.removeEventListener('change', updateFlags)
    }
  }, [])

  const pitchData = EVENTS?.find(e => e.id === 'pitch-perfect')
  const cineData = EVENTS?.find(e => e.id === 'cineclash')
  const quadrantData = EVENTS?.find(e => e.id === 'quadrant')
  const nexusData = EVENTS?.find(e => e.id === 'nexus')

  return (
    <>
      {/* 🚀 LOADING SCREEN */}
      <LoadingScreen onComplete={() => setIsLoading(false)} />

      {/* 🌍 MAIN WEBSITE */}
      {!isLoading && (
        <Router>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative overflow-x-hidden text-white"
          >
            {/* ⭐ STAR BACKGROUND (NOW ENABLED ON MOBILE) */}
            {enableStarfield && (
              <Suspense fallback={null}>
                <GlobalStarBackground enabled={enableStarfield} />
              </Suspense>
            )}

            <Routes>
              <Route path="/" element={<HomeLayout />} />

              {/* 🎯 EVENT PAGES */}
              <Route
                path="/pitch-perfect"
                element={
                  <Suspense fallback={<div className="min-h-screen bg-black" />}>
                    <EventDetailsPage eventData={pitchData} />
                  </Suspense>
                }
              />
              <Route
                path="/cineclash"
                element={
                  <Suspense fallback={<div className="min-h-screen bg-black" />}>
                    <EventDetailsPage eventData={cineData} />
                  </Suspense>
                }
              />
              <Route
                path="/quadrant"
                element={
                  <Suspense fallback={<div className="min-h-screen bg-black" />}>
                    <EventDetailsPage eventData={quadrantData} />
                  </Suspense>
                }
              />
              <Route
                path="/nexus"
                element={
                  <Suspense fallback={<div className="min-h-screen bg-black" />}>
                    <EventDetailsPage eventData={nexusData} />
                  </Suspense>
                }
              />
            </Routes>
          </motion.div>
        </Router>
      )}
    </>
  )
}

// 📦 HOME LAYOUT
function HomeLayout() {
  return (
    <>
      {/* 🧭 FIXED NAVBAR */}
      <div
        style={{
          position: "fixed",
          top: "20px",
          left: 0,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          zIndex: 9999,
          pointerEvents: "none",
        }}
      >
        <div style={{ pointerEvents: "auto" }}>
          <Navbar />
        </div>
      </div>

      {/* 🌍 EARTH CANVAS */}
      <HeroSceneWrapper />

      {/* 📄 PAGE CONTENT */}
      <div className="relative z-10">
        <main>
          <section
            id="hero"
            className="min-h-screen flex items-center justify-center px-4 md:px-0"
            style={{ background: 'rgba(0,0,0,0.35)' }}
          >
            <HeroSection />
          </section>

          <div style={{ background: 'rgba(0,0,0,0.35)' }}>
            <About />
            <div className="h-24 md:h-40" />

            {/* 👥 GUESTS SECTION */}
            <GuestsSection />

            <div className="h-24 md:h-40" />

            {/* 🎯 EVENTS SECTION */}
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
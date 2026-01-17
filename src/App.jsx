import GlobalStarBackground from './components/canvas/GlobalStarBackground'
import HeroSceneWrapper from './components/canvas/HeroSceneWrapper'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import HeroSection from './components/hero/HeroSection'
import About from './components/sections/About'
import EventGrid from './components/events/EventGrid'
import Sponsors from './components/sections/Sponsors'
import Contact from './components/sections/Contact'

function App() {
  return (
    <div className="relative">
      {/* Global Starry Background - Visible on entire website behind everything */}
      <GlobalStarBackground />

      {/* Hero Scene with Earth - Fixed 3D Background */}
      <HeroSceneWrapper />

      {/* Content Overlay */}
      <div className="relative" style={{ zIndex: 10 }}>
        <Navbar />
        
        <main>
          {/* Landing Page - Hero Section */}
          {/* overflow-hidden ensures static ships at the top edge don't cause scrollbars */}
          <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ background: 'rgba(0, 0, 0, 0.3)' }}>
            <HeroSection />
          </section>

          {/* Rest of the website - Transparent background to show stars/earth */}
          <div className="relative" style={{ position: 'relative', zIndex: 10, background: 'rgba(0, 0, 0, 0.3)' }}>
            <About />
            <EventGrid />
            <Sponsors />
            <Contact />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default App
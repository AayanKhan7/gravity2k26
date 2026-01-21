import { useState, useEffect, useRef } from "react"
import { Link } from "react-scroll"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [mouseX, setMouseX] = useState(0)
  const throttleRef = useRef(null)

  // Auto-close menu if screen becomes wide
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Throttled mouse move handler to prevent lag
  const handleMouseMove = (e) => {
    if (throttleRef.current) clearTimeout(throttleRef.current)
    throttleRef.current = setTimeout(() => {
      setMouseX(e.clientX)
    }, 16) // ~60fps
  }

  const navLinks = [
    ["hero", "HOME"],
    ["about", "ABOUT"],
    ["events", "EVENTS"],
    ["gallery", "GALLERY"],
    ["sponsors", "SPONSORS"],
  ]

  // Staggered animation for menu items
  const menuVars = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } }
  }

  const linkVars = {
    initial: { opacity: 0, x: -10 },
    animate: { opacity: 1, x: 0 }
  }

  return (
    <div className="fixed top-3 sm:top-6 left-0 w-full flex justify-center z-50 px-2 sm:px-4 pointer-events-none">
      <motion.nav
        layout
        transition={{ type: "spring", stiffness: 250, damping: 25 }}
        onMouseMove={handleMouseMove}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        style={{ borderRadius: isOpen ? "24px" : "50px" }}
        className={`
          pointer-events-auto
          relative z-50
          backdrop-blur-xl bg-white/10 border border-white/20
          shadow-[0_0_40px_rgba(0,255,255,0.15)]
          overflow-hidden
          flex flex-col
          max-w-[95vw] sm:max-w-none
          will-change-transform
          ${isOpen ? "w-[95vw] sm:w-auto" : "w-auto"} 
        `}
      >
        {/* 🌊 LIQUID BACKGROUND */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-cyan-400/20 blur-2xl pointer-events-none"
        />

        {/* 💧 MOUSE HIGHLIGHT (Desktop Only) */}
        <motion.div
          className="hidden md:block absolute top-1/2 w-40 h-40 bg-cyan-300/30 rounded-full blur-3xl pointer-events-none will-change-transform"
          animate={{
            x: mouseX - (typeof window !== "undefined" ? window.innerWidth / 2 : 0),
            y: "-50%",
          }}
          transition={{ type: "spring", stiffness: 100, damping: 30 }}
        />

        {/* ------------------ TOP BAR ------------------ */}
        <motion.div 
          layout="position" // ⚡ CRITICAL: Prevents content jumping during resize
          className="w-full md:w-auto px-3 sm:px-6 py-2 sm:py-3 flex items-center justify-between gap-3 sm:gap-6 relative z-10"
        >
          
          {/* MOBILE LABEL */}
          <span className="md:hidden text-white font-bold tracking-widest text-xs sm:text-sm">
            MENU
          </span>

          {/* DESKTOP LINKS (Hidden on Mobile) */}
          <ul className="hidden md:flex items-center gap-6 text-sm md:text-base text-white tracking-widest font-medium">
            {navLinks.map(([to, label]) => (
              <li key={to}>
                <Link
                  to={to}
                  smooth
                  offset={-100}
                  duration={600}
                  className="cursor-pointer hover:text-cyan-300 transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* DESKTOP CTA */}
          <div className="hidden md:block">
            <Link to="events" smooth offset={-100} duration={600}>
              <button className="relative px-6 py-2 rounded-full text-sm font-bold text-black bg-gradient-to-r from-cyan-300 to-blue-400 shadow-[0_0_20px_rgba(56,189,248,0.6)] hover:scale-105 transition-transform">
                Explore Events
              </button>
            </Link>
          </div>

          {/* 🍔 HAMBURGER BUTTON (Mobile Only) */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-white focus:outline-none p-1.5 sm:p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <motion.div
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
            >
                {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                )}
            </motion.div>
          </button>
        </motion.div>

        {/* ------------------ MOBILE MENU OVERLAY ------------------ */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              layout="position" // Smoothly slide down with the container expansion
              variants={menuVars}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full md:hidden flex flex-col items-center gap-4 sm:gap-6 pb-6 sm:pb-8 relative z-10 border-t border-white/10 pt-4 sm:pt-6"
            >
              {navLinks.map(([to, label]) => (
                <motion.div key={to} variants={linkVars}>
                  <Link
                    to={to}
                    smooth
                    offset={-100}
                    duration={600}
                    onClick={() => setIsOpen(false)}
                    className="text-white text-base sm:text-lg font-bold tracking-[0.2em] hover:text-cyan-300 cursor-pointer uppercase"
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}

              <motion.div variants={linkVars} className="pt-2 sm:pt-4">
                <Link to="events" smooth offset={-100} duration={600} onClick={() => setIsOpen(false)}>
                  <button className="px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base text-black font-bold bg-gradient-to-r from-cyan-300 to-blue-400 shadow-[0_0_25px_rgba(56,189,248,0.5)] active:scale-95 transition-transform">
                    Explore Events
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  )
}
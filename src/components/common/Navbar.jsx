import { useState, useEffect } from "react"
import { Link } from "react-scroll"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [mouseX, setMouseX] = useState(0)

  // Auto-close menu if screen becomes wide
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const navLinks = [
    ["hero", "HOME"],
    ["about", "ABOUT"],
    ["events", "EVENTS"],
    ["gallery", "GALLERY"],
    ["sponsors", "SPONSORS"],
  ]

  // Staggered animation for menu items
  const menuVars = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    exit: { opacity: 0 }
  }

  const linkVars = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 }
  }

  return (
    <div className="fixed top-6 left-0 w-full flex justify-center z-50 px-4 pointer-events-none">
      <motion.nav
        layout // ⚡ THE FIX: Handles smooth resizing automatically
        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        onMouseMove={(e) => setMouseX(e.clientX)}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`
          pointer-events-auto
          relative z-50
          backdrop-blur-xl bg-white/10 border border-white/25
          shadow-[0_0_50px_rgba(0,255,255,0.25)]
          overflow-hidden
          flex flex-col md:flex-row items-center
          ${isOpen ? "w-[90vw] rounded-3xl" : "w-auto rounded-full"} 
        `}
      >
        {/* 🌊 LIQUID BACKGROUND (Kept exactly as requested) */}
        <motion.div
          layout="position"
          className="absolute inset-0 bg-gradient-to-r from-cyan-400/25 via-purple-400/25 to-cyan-400/25 blur-2xl"
          animate={{ backgroundPositionX: ["0%", "100%", "0%"] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          style={{ backgroundSize: "200% 200%" }}
        />

        {/* 💧 MOUSE HIGHLIGHT (Desktop Only) */}
        <motion.div
          className="hidden md:block absolute top-1/2 w-40 h-40 bg-cyan-300/30 rounded-full blur-3xl pointer-events-none"
          animate={{
            x: mouseX - (typeof window !== "undefined" ? window.innerWidth / 2 : 0),
            y: "-50%",
          }}
          transition={{ type: "spring", stiffness: 70, damping: 30 }}
        />

        {/* ------------------ TOP BAR ------------------ */}
        <div className="w-full md:w-auto px-6 py-3 flex items-center justify-between gap-6 relative z-10">
          
          {/* MOBILE LABEL */}
          <span className="md:hidden text-white font-bold tracking-widest text-sm">
            MENU
          </span>

          {/* DESKTOP LINKS */}
          <ul className="hidden md:flex items-center gap-5 text-sm md:text-base text-white tracking-widest">
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
              <button className="relative px-5 py-2 rounded-full text-sm font-medium text-black bg-gradient-to-r from-cyan-300 to-blue-400 shadow-[0_0_20px_rgba(56,189,248,0.6)] hover:scale-105 transition-transform">
                Explore Events
              </button>
            </Link>
          </div>

          {/* 🍔 HAMBURGER BUTTON (Mobile Only) */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-white focus:outline-none p-2 hover:bg-white/5 rounded-lg transition-colors"
          >
            <motion.div
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
            >
                {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                )}
            </motion.div>
          </button>
        </div>

        {/* ------------------ MOBILE MENU OVERLAY ------------------ */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={menuVars}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full md:hidden flex flex-col items-center gap-6 pb-8 relative z-10 border-t border-white/10 pt-6"
            >
              {navLinks.map(([to, label]) => (
                <motion.div key={to} variants={linkVars}>
                  <Link
                    to={to}
                    smooth
                    offset={-100}
                    duration={600}
                    onClick={() => setIsOpen(false)}
                    className="text-white text-lg font-bold tracking-widest hover:text-cyan-300 cursor-pointer"
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}

              <motion.div variants={linkVars}>
                <Link to="events" smooth offset={-100} duration={600} onClick={() => setIsOpen(false)}>
                  <button className="px-8 py-3 rounded-full text-black font-bold bg-gradient-to-r from-cyan-300 to-blue-400 shadow-[0_0_20px_rgba(56,189,248,0.6)] hover:scale-105 transition-transform">
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
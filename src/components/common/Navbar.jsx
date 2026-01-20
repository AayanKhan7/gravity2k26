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

  // Animation variants
  const linkVars = {
    initial: { y: "30vh", transition: { duration: 0.5 } },
    open: { y: 0, transition: { duration: 0.7 } },
  }

  return (
    <motion.nav
      onMouseMove={(e) => setMouseX(e.clientX)}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`
        relative z-50
        backdrop-blur-xl bg-white/10 border border-white/25
        shadow-[0_0_50px_rgba(0,255,255,0.25)]
        overflow-hidden
        transition-all duration-500 ease-in-out
        ${isOpen ? "w-[90vw] rounded-3xl" : "w-auto rounded-full"} 
        flex flex-col md:flex-row items-center
      `}
    >
      {/* 🌊 LIQUID BACKGROUND */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-cyan-400/25 via-purple-400/25 to-cyan-400/25 blur-2xl"
        animate={{ backgroundPositionX: ["0%", "100%", "0%"] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        style={{ backgroundSize: "200% 200%" }}
      />

      {/* 💧 MOUSE HIGHLIGHT (Desktop Only) */}
      <motion.div
        className="hidden md:block absolute top-1/2 w-40 h-40 bg-cyan-300/30 rounded-full blur-3xl pointer-events-none"
        animate={{
          x: mouseX - (typeof window !== "undefined" ? window.innerWidth : 0) / 2 - 80,
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
          {isOpen ? (
            // Close Icon
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Menu Icon
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* ------------------ MOBILE MENU OVERLAY ------------------ */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="w-full md:hidden flex flex-col items-center gap-6 pb-8 relative z-10 border-t border-white/10 pt-4"
          >
            {navLinks.map(([to, label], index) => (
              <motion.div
                key={to}
                variants={linkVars}
                initial="initial"
                animate="open"
                exit="initial"
                custom={index}
                className="overflow-hidden"
              >
                 <Link
                  to={to}
                  smooth
                  offset={-100}
                  duration={600}
                  onClick={() => setIsOpen(false)}
                  className="text-white text-lg tracking-widest hover:text-cyan-300 cursor-pointer"
                >
                  {label}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
               <Link to="events" smooth offset={-100} duration={600} onClick={() => setIsOpen(false)}>
                <button className="px-8 py-3 rounded-full text-black font-bold bg-gradient-to-r from-cyan-300 to-blue-400 shadow-[0_0_20px_rgba(56,189,248,0.6)]">
                  Explore Events
                </button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
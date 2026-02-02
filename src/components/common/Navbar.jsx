import { useState, useEffect } from "react"
import { Link } from "react-scroll"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  // Auto-close mobile menu on resize
  useEffect(() => {
    const resize = () => {
      if (window.innerWidth >= 768) setOpen(false)
    }
    window.addEventListener("resize", resize)
    return () => window.removeEventListener("resize", resize)
  }, [])

  const navLinks = [
    ["hero", "HOME"],
    ["about", "ABOUT"],
    ["guests", "GUESTS"],
    ["events", "EVENTS"],
    ["gallery", "GALLERY"],
    ["sponsors", "SPONSORS"],
  ]

  return (
    <div className="pointer-events-none">
      {/* ================= NAVBAR ================= */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        className="
          pointer-events-auto
          backdrop-blur-xl bg-white/10
          border border-white/20
          shadow-[0_0_40px_rgba(0,255,255,0.15)]
          rounded-full
          px-6 py-3
          flex items-center gap-6
        "
      >
        {/* ---------- DESKTOP LINKS ---------- */}
        <ul className="hidden md:flex items-center gap-6 text-white tracking-widest text-sm font-medium">
          {navLinks.map(([to, label]) => (
            <li key={to}>
              <Link
                to={to}
                smooth
                offset={-100}
                duration={600}
                className="cursor-pointer hover:text-cyan-300 transition"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* ---------- DESKTOP CTA ---------- */}
        <div className="hidden md:block">
          <Link to="events" smooth offset={-100} duration={600}>
            <button
              className="
                px-5 py-2
                rounded-full
                text-sm font-bold text-black
                bg-gradient-to-r from-cyan-300 to-blue-400
                shadow-[0_0_20px_rgba(56,189,248,0.6)]
                hover:scale-105 transition-transform
              "
            >
              Register Now
            </button>
          </Link>
        </div>

        {/* ---------- MOBILE HAMBURGER ---------- */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-xl"
        >
          ☰
        </button>
      </motion.nav>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="
              pointer-events-auto
              mt-3
              backdrop-blur-xl bg-black/80
              border border-white/20
              rounded-2xl
              p-6
              flex flex-col gap-5
            "
          >
            {navLinks.map(([to, label]) => (
              <Link
                key={to}
                to={to}
                smooth
                offset={-100}
                duration={600}
                onClick={() => setOpen(false)}
                className="text-white font-bold tracking-widest text-center"
              >
                {label}
              </Link>
            ))}

            {/* ---------- MOBILE CTA ---------- */}
            <Link
              to="events"
              smooth
              offset={-100}
              duration={600}
              onClick={() => setOpen(false)}
              className="pt-2"
            >
              <button
                className="
                  w-full
                  px-6 py-3
                  rounded-full
                  text-base font-bold text-black
                  bg-gradient-to-r from-cyan-300 to-blue-400
                  shadow-[0_0_25px_rgba(56,189,248,0.6)]
                  active:scale-95 transition-transform
                "
              >
                Register Now
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

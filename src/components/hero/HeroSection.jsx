import React, { useRef } from "react"
import { Link } from "react-scroll"
import { motion, useScroll, useTransform } from "framer-motion"
import { SITE_CONFIG } from "../../data/index.js"
// ❌ DELETE THIS LINE: import Navbar from "../common/Navbar"

export default function HeroSection() {
  const ref = useRef(null)

  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  // Parallax effects
  const logoY = useTransform(scrollY, [0, 500], [0, -140])
  const logoScale = useTransform(scrollY, [0, 500], [1, 1.05])

  return (
    <section
      ref={ref}
      className="hero-overlay"
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "100vh",
      }}
    >
      {/* ❌ DELETE THE NAVBAR DIV BLOCK THAT WAS HERE */}

      {/* HERO CONTENT */}
      <div
        className="hero-content"
        style={{
          position: "relative",
          zIndex: 40,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          paddingLeft: "1rem",
          paddingRight: "1rem",
        }}
      >
        <motion.img
          src="/assets/images/Gravity logo.PNG"
          alt="Gravity 2K26"
          className="h-[180px] md:h-[320px] w-auto mb-6 md:mb-10 drop-shadow-[0_0_40px_rgba(255,255,255,0.35)]"
          style={{
            maxWidth: "90vw",
            y: logoY,
            scale: logoScale,
          }}
        />

        <p className="hero-subtitle text-white/90 text-sm md:text-lg mb-8 md:mb-10 tracking-widest uppercase font-medium">
          {SITE_CONFIG?.tagline || "THE ULTIMATE TECHFEST"}
        </p>

        <Link to="events" smooth offset={-100} duration={600}>
          <button className="hero-btn primary px-6 py-2 md:px-8 md:py-3 text-sm md:text-base rounded-full bg-white text-black font-bold hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.4)]">
            Explore Events
          </button>
        </Link>
      </div>
    </section>
  )
}
import React, { useRef } from "react"
import { Link } from "react-scroll"
import { motion, useScroll, useTransform } from "framer-motion"

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
      className="hero-overlay relative w-full h-screen overflow-hidden"
    >
      {/* HERO CONTENT */}
      <div className="relative z-40 h-full flex flex-col justify-center items-center text-center px-4">
        
        {/* LOGO */}
        <motion.img
          src="/assets/images/Gravity logo.PNG"
          alt="Gravity 2K26"
          className="h-[180px] md:h-[320px] w-auto mb-12 drop-shadow-[0_0_40px_rgba(255,255,255,0.35)]"
          style={{
            maxWidth: "90vw",
            y: logoY,
            scale: logoScale,
          }}
          onError={(e) => {
            console.error('Logo image failed to load');
            e.currentTarget.style.display = 'none';
          }}
        />

        {/* CTA BUTTON */}
        <Link to="events" smooth offset={-100} duration={600}>
          <button className="
            group
            px-8 py-3 md:px-10 md:py-4 
            text-sm md:text-base font-bold 
            rounded-full bg-white text-black 
            shadow-[0_0_20px_rgba(255,255,255,0.4)] 
            hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.6)]
            transition-all duration-300
          ">
            Explore Events
          </button>
        </Link>

      </div>
    </section>
  )
}
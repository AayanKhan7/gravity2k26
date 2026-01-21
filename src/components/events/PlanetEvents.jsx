import { EVENTS } from "../../data/events"
import EventPlanetCard from "./EventPlanetCard"
import { motion } from "framer-motion"

export default function PlanetEvents() {
  if (!EVENTS || EVENTS.length === 0) {
    return (
      <div className="relative w-full max-w-7xl mx-auto px-4 py-12 flex flex-col items-center text-center">
        <p className="text-white/50 font-mono">No events available</p>
      </div>
    )
  }

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 py-12 flex flex-col items-center"> 
      
      {/* 🏆 EVENTS HEADING */}
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-black uppercase tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-16 text-center drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]"
      >
        Events
      </motion.h1>

      {/* ✅ GRID LAYOUT: 1 column on mobile, 2 columns on desktop (2x2) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 place-items-center w-full">
        
        {EVENTS.map((event) => (
          <div key={event.id} className="w-full h-full flex justify-center">
            <EventPlanetCard
              event={event}
              isActive={true} 
            />
          </div>
        ))}

      </div>
    </div>
  )
}
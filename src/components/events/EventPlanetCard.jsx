import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export default function EventPlanetCard({ event }) {
  // Use the event's specific accent color
  const accentColor = event.planetAccent || '#06b6d4'; 

  return (
    // ✅ Optimized container for Grid Cell
    <div className="w-full h-full flex items-stretch justify-center">
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="relative w-full group rounded-3xl overflow-hidden flex flex-col bg-black"
        style={{
            // Glowing border effect
            border: `1px solid ${accentColor}60`,
            boxShadow: `0 0 40px ${accentColor}10, inset 0 0 20px ${accentColor}05`,
        }}
      >
        {/* 🎨 BACKGROUND LAYERS */}
        <div className="absolute inset-0 z-0">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ 
                backgroundImage: `url(${event.villainImg})`,
                // Fallback background in case image fails to load
                backgroundColor: '#0a0a0a' 
              }}
            />
            
            {/* 🌑 Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90" />
        </div>

        {/* 📐 HUD CORNER ACCENTS */}
        <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 rounded-tl-xl z-20 opacity-60" style={{ borderColor: accentColor }} />
        <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 rounded-tr-xl z-20 opacity-60" style={{ borderColor: accentColor }} />
        <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 rounded-bl-xl z-20 opacity-60" style={{ borderColor: accentColor }} />
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 rounded-br-xl z-20 opacity-60" style={{ borderColor: accentColor }} />

        {/* 📄 CONTENT CONTAINER */}
        <div className="relative z-10 flex flex-col items-center justify-between text-center p-8 md:p-12 space-y-6 h-full">
          
          <div className="flex flex-col items-center space-y-4 w-full">
            {/* Event Type Badge */}
            <div 
              className="inline-block px-4 py-1 rounded-sm border text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] backdrop-blur-md bg-black/40"
              style={{ 
                borderColor: `${accentColor}40`, 
                color: accentColor, 
              }}
            >
              {event.type}
            </div>

            {/* MAIN TITLE */}
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter uppercase leading-none"
              style={{ 
                  color: 'white',
                  textShadow: `0 0 25px ${accentColor}60`
              }}
            >
              {event.title}
            </h1>

            {/* Decorative Divider */}
            <div className="flex items-center gap-4 w-full justify-center opacity-30">
              <div className="h-[1px] w-12 bg-white" />
              <div className="w-2 h-2 rotate-45 border border-white" />
              <div className="h-[1px] w-12 bg-white" />
            </div>

            {/* Description */}
            <p className="text-white/80 text-sm md:text-base leading-relaxed font-light line-clamp-3 drop-shadow-md">
              {event.description}
            </p>
          </div>

          <div className="flex flex-col items-center space-y-6 w-full">
            {/* Stats Row */}
            <div className="flex flex-wrap justify-center gap-6 text-sm font-mono uppercase tracking-wider text-white/70 w-full border-t border-white/10 pt-6">
              <div className="flex flex-col items-center">
                <span className="text-[10px] opacity-50">Prize Pool</span>
                <span style={{ color: accentColor }} className="font-bold">{event.prizePool}</span>
              </div>
              <div className="w-[1px] h-8 bg-white/10 hidden md:block" />
              <div className="flex flex-col items-center">
                <span className="text-[10px] opacity-50">Entry Fee</span>
                <span style={{ color: accentColor }} className="font-bold">{event.registrationFee}</span>
              </div>
            </div>

            {/* CTA Button */}
            <Link to={event.path} className="w-full">
              <button
                className="
                  w-full relative overflow-hidden
                  px-8 py-3 md:py-4
                  text-sm md:text-base font-bold uppercase tracking-[0.2em] rounded-sm
                  transition-all duration-300 hover:brightness-110
                "
                style={{
                  color: '#000',
                  backgroundColor: accentColor,
                  boxShadow: `0 0 20px ${accentColor}40`
                }}
              >
                Explore Protocol
              </button>
            </Link>
          </div>

        </div>

      </motion.div>
    </div>
  )
}
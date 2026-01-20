import { motion } from "framer-motion"
import { Link } from "react-router-dom" 
import EventsPlanetScene from "./EventsPlanetScene"

export default function EventPlanetCard({ event, isActive }) {
  return (
    <div className="w-full md:w-[85vw] max-w-7xl h-full flex items-center justify-center px-2 md:px-16 flex-shrink-0">
      <motion.div
        animate={{ scale: isActive ? 1 : 0.98 }}
        transition={{ duration: 0.4 }}
        style={{
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: `0 0 30px ${event.planetAccent}40`,
        }}
        className="
          w-full h-full md:h-auto rounded-3xl bg-black/40 backdrop-blur-xl
          flex flex-col-reverse md:flex-row gap-4 md:gap-0 p-6 md:p-12
          relative z-10 overflow-hidden
        "
      >
        {/* Background Gradient Mesh */}
        <div 
            className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none"
            style={{ background: `radial-gradient(circle at 80% 50%, ${event.planetAccent}, transparent 60%)` }}
        />

        {/* LEFT TEXT CONTENT */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left z-10">
          <h1
            className="text-3xl md:text-6xl font-bold tracking-widest mb-4 md:mb-6 uppercase"
            style={{ color: event.planetAccent, textShadow: `0 0 20px ${event.planetAccent}50` }}
          >
            {event.title}
          </h1>

          <p className="text-white/80 mb-6 md:mb-8 text-sm md:text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
            {event.description}
          </p>

          <Link to={event.path}>
            <button
              className="px-6 py-2 md:px-8 md:py-3 text-sm md:text-base rounded-full border transition-all duration-300 hover:scale-105 hover:bg-white/10"
              style={{
                borderColor: event.planetAccent,
                color: event.planetAccent,
                boxShadow: `0 0 15px ${event.planetAccent}30`
              }}
            >
              Explore Event
            </button>
          </Link>
        </div>

        {/* RIGHT 3D SCENE (Planet) */}
        <div className="w-full md:w-1/2 flex justify-center items-center h-[250px] md:h-[500px] z-10 relative">
          <div className="w-full h-full absolute inset-0 md:relative">
            <EventsPlanetScene planetType={event.planetType} />
          </div>
        </div>

      </motion.div>
    </div>
  )
}
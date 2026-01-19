import { motion } from "framer-motion"
import { Link } from "react-router-dom" 
import EventsPlanetScene from "./EventsPlanetScene"

export default function EventPlanetCard({ event, isActive }) {
  return (
    <div className="w-[100vw] md:w-[85vw] max-w-7xl h-full flex items-center justify-center px-4 md:px-16 flex-shrink-0">
      <motion.div
        animate={{ scale: isActive ? 1 : 0.98 }}
        transition={{ duration: 0.4 }}
        style={{
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: `0 0 30px ${event.planetAccent}40`, // Soft colored glow
        }}
        className="
          w-full rounded-3xl bg-black/40 backdrop-blur-xl
          flex flex-col md:flex-row gap-8 md:gap-0 p-6 md:p-12
          relative z-10 overflow-hidden
        "
      >
        {/* Background Gradient Mesh */}
        <div 
            className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none"
            style={{ background: `radial-gradient(circle at 80% 50%, ${event.planetAccent}, transparent 60%)` }}
        />

        {/* LEFT TEXT */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left z-10">
          <h1
            className="text-4xl md:text-6xl font-bold tracking-widest mb-6 uppercase"
            style={{ color: event.planetAccent, textShadow: `0 0 20px ${event.planetAccent}50` }}
          >
            {event.title}
          </h1>

          <p className="text-white/80 mb-8 text-lg leading-relaxed max-w-lg">
            {event.description}
          </p>

          <Link to={event.path}>
            <button
              className="px-8 py-3 rounded-full border transition-all duration-300 hover:scale-105 hover:bg-white/10"
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

        {/* RIGHT 3D SCENE */}
        <div className="w-full md:w-1/2 flex justify-center items-center h-[300px] md:h-[500px] z-10">
          <div className="w-full h-full">
            <EventsPlanetScene planetType={event.planetType} />
          </div>
        </div>

      </motion.div>
    </div>
  )
}
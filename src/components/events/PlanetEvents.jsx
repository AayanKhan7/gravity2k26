import { useEffect, useRef, useState } from "react"
import { EVENTS } from "../../data/events"
import EventPlanetCard from "./EventPlanetCard"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function PlanetEvents() {
  const containerRef = useRef(null)
  
  // 🎮 ARROW SCROLL HANDLER
  const scroll = (direction) => {
    if (containerRef.current) {
      const { clientWidth } = containerRef.current
      const scrollAmount = direction === "left" ? -clientWidth : clientWidth
      containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    // ✅ Optimized Height: h-[85vh] for mobile, h-[80vh] for desktop
    <div className="relative h-[85vh] md:h-[80vh] w-full bg-transparent group flex flex-col justify-center"> 
      
      {/* ⬅️ LEFT ARROW BUTTON */}
      <button 
        onClick={() => scroll("left")}
        className="
          absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-50
          w-10 h-10 md:w-14 md:h-14 rounded-full 
          bg-white/10 backdrop-blur-md border border-white/20
          flex items-center justify-center
          text-white/80 hover:text-white hover:bg-white/20 hover:scale-110 active:scale-95
          transition-all duration-300
        "
        aria-label="Previous Event"
      >
        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
      </button>

      {/* ➡️ RIGHT ARROW BUTTON */}
      <button 
        onClick={() => scroll("right")}
        className="
          absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-50
          w-10 h-10 md:w-14 md:h-14 rounded-full 
          bg-white/10 backdrop-blur-md border border-white/20
          flex items-center justify-center
          text-white/80 hover:text-white hover:bg-white/20 hover:scale-110 active:scale-95
          transition-all duration-300
        "
        aria-label="Next Event"
      >
        <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
      </button>

      {/* EVENTS CONTAINER */}
      <div
        ref={containerRef}
        className="
          flex 
          overflow-x-auto 
          snap-x snap-mandatory 
          h-full w-full
          items-center
          no-scrollbar
        "
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <style>{`.no-scrollbar::-webkit-scrollbar { display: none; }`}</style>

        {EVENTS.map((event, index) => (
          // ✅ Added padding to prevent card sticking to edges
          <div key={event.id} className="snap-center h-full flex items-center justify-center min-w-full p-4 md:p-0">
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
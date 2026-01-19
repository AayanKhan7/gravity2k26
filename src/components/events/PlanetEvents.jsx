import { useEffect, useRef, useState } from "react"
import { EVENTS } from "../../data/events"
import EventPlanetCard from "./EventPlanetCard"

export default function PlanetEvents() {
  const containerRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  // Optional: Auto-scroll timer logic can be added here if needed

  return (
    <div className="relative h-screen w-full bg-transparent"> 
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
          <div key={event.id} className="snap-center h-full flex items-center justify-center">
            <EventPlanetCard
              event={event}
              isActive={true} // Simplified active state
            />
          </div>
        ))}
      </div>
    </div>
  )
}
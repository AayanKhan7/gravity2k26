import PlanetEvents from "./PlanetEvents"
import PrizePoolStrip from "./PrizePoolStrip"

export default function EventsSection() {
  return (
    <section className="relative w-full flex flex-col items-center z-10">
      {/* Cards Section (Arrows are inside here) */}
      <PlanetEvents />
      
      {/* Strip at bottom */}
      <PrizePoolStrip />
    </section>
  )
}
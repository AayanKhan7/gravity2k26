import { motion } from "framer-motion"

export default function GuestsSection() {
  // 🧑‍⚖️ GUEST DATA
  const GUESTS = [
    {
      title: "Chief Guest",
      name: "Prof. Dr. Manish Bhalla",
      image: "/assets/images/chief-guest.png",
    },
    {
      title: "Distinguished Guest",
      name: "Dr. Dheeraj Agrawal",
      image: "/assets/images/distinguished-guest.png",
    },
    {
      title: "Judge – Pitch Perfect",
      name: "Mr. Deovrut Jadhav",
      image: "/assets/images/judge1.png",
    },
    {
      title: "Judge – Pitch Perfect",
      name: "Dr. Chandrashekhar Talathi",
      image: "/assets/images/judge2.png",
    },
  ]

  return (
    <section
      id="guests"
      className="relative py-20 px-4 sm:px-6 z-10"
      style={{ background: "rgba(0,0,0,0.35)" }}
    >
      <div className="max-w-7xl mx-auto text-center">

        {/* 🌟 SECTION TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            text-3xl sm:text-4xl md:text-5xl
            font-black uppercase mb-16
            text-transparent bg-clip-text
            bg-gradient-to-r from-amber-300 via-white to-indigo-400
            drop-shadow-lg
          "
        >
          Our Guests
        </motion.h2>

        {/* 👥 GUEST GRID - No Cards, Just Content */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 items-end">
          {GUESTS.map((guest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="
                group
                flex flex-col items-center justify-end
                text-center
                transition-transform duration-300
              "
            >
              {/* IMAGE CONTAINER (Rectangular, No Crop) */}
              <div className="relative mb-5 w-full max-w-[220px]">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-indigo-500/20 blur-[25px] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <img
                  src={guest.image}
                  alt={guest.name}
                  className="
                    relative
                    w-full h-auto
                    object-contain rounded-xl
                    border-2 border-white/40
                    shadow-[0_0_20px_rgba(255,255,255,0.15)]
                    group-hover:scale-105 group-hover:border-white/60
                    transition-all duration-300
                  "
                />
              </div>

              {/* TEXT DETAILS */}
              <div className="z-10">
                {/* TITLE / TYPE */}
                <p className="text-amber-400 text-xs sm:text-sm font-bold uppercase tracking-widest font-mono mb-2">
                  {guest.title}
                </p>

                {/* NAME */}
                <h3 className="text-lg sm:text-xl font-bold text-white leading-tight drop-shadow-md">
                  {guest.name}
                </h3>
              </div>

            </motion.div>
          ))}
        </div>

        {/* ⚖️ LEGAL NOTE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="
            mt-20
            max-w-3xl mx-auto
            border-t border-indigo-500/30
            pt-8
          "
        >
          <p className="text-sm sm:text-base text-indigo-100/80 font-medium tracking-wide">
            For the{" "}
            <span className="text-amber-400 font-bold">
              Top 3 Teams of Pitch Perfect
            </span>, our team will be providing{" "}
            <span className="text-white font-semibold">
              Legal Consultancy
            </span>.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
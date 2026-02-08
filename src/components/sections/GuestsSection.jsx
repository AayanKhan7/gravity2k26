import { motion, useReducedMotion } from "framer-motion"

/* =========================================================
    🧑‍⚖️ GUEST DATA
========================================================= */
const GUESTS = [
  {
    role: "chief",
    title: "Chief Guest",
    name: "Prof. Dr. Manish Bhalla",
    designation: "Vice Chancellor, DYPIU Akurdi, Pune", // Added Designation
    image: "/assets/images/chief-guest.png",
  },
  {
    role: "distinguished",
    title: "Distinguished Guest",
    name: "Dr. Dheeraj Agrawal",
    designation: "Pro-Vice Chancellor, Dnyaan Prasad Global University", // Added Designation
    image: "/assets/images/distinguished-guest.png",
  },
  {
    role: "judge",
    title: "Judge – Pitch Perfect",
    name: "Mr. Deovrut Jadhav",
    designation: "Rayat Centenary Innovation & Incubation Foundation", // Added Designation
    image: "/assets/images/judge1.png",
  },
  {
    role: "judge",
    title: "Judge – Pitch Perfect",
    name: "Dr. Chandrashekhar Talathi",
    designation: "Director, LeapSwitch Networks Pvt. Ltd", // Added Designation
    image: "/assets/images/judge2.png",
  },
  // Swapped Influencer Positions: Kaabil Engineer now comes first
  {
    role: "influencer",
    title: "Influencer",
    name: "Kaabil Engineer",
    designation: "400k+ Followers", // Added Designation
    image: "/assets/images/kaabileng.png",
  },
  {
    role: "influencer",
    title: "Influencer",
    name: "Aalsi Engineer",
    designation: "128k Subscribers", // Added Designation
    image: "/assets/images/aalsieng.png",
  },
]

/* =========================================================
    🎨 ROLE COLOR MAP
========================================================= */
const ROLE_COLOR = {
  chief: "text-amber-400",
  distinguished: "text-emerald-400",
  judge: "text-indigo-300",
  influencer: "text-red-500", 
}

export default function GuestsSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="guests"
      className="relative py-20 px-4 sm:px-6 z-10"
      style={{ background: "rgba(0,0,0,0.35)" }}
      aria-labelledby="guests-heading"
    >
      <div className="max-w-7xl mx-auto text-center">

        {/* 🌟 SECTION TITLE */}
        <motion.h2
          id="guests-heading"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
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

        {/* 👥 GUEST GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-y-16 gap-x-10 items-end">
          {GUESTS.map((guest, index) => {
            const isInfluencer = guest.role === "influencer";
            
            return (
              <motion.article
                key={guest.name}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`
                  group
                  flex flex-col items-center justify-end
                  text-center
                  /* Responsive Spanning */
                  lg:col-span-3
                  ${index === 4 ? "lg:col-start-4" : ""} 
                  /* Remove hover lift for influencers */
                  ${!isInfluencer ? "transition-transform duration-300 hover:-translate-y-1 focus-within:-translate-y-1" : ""}
                `}
              >
                {/* 🖼 IMAGE */}
                <div className="relative mb-5 w-full max-w-[220px]">
                  {!isInfluencer && (
                    <div className="
                      absolute inset-0
                      bg-indigo-500/20
                      blur-[28px]
                      rounded-xl
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity duration-500
                    " />
                  )}

                  <img
                    src={guest.image}
                    alt={`${guest.name} – ${guest.title}`}
                    loading="lazy"
                    decoding="async"
                    className={`
                      relative
                      w-full h-auto
                      object-contain rounded-xl
                      border-2 border-white/40
                      shadow-[0_0_20px_rgba(255,255,255,0.15)]
                      transition-all duration-300
                      ${!isInfluencer ? "group-hover:scale-105 group-hover:border-white/60" : ""}
                    `}
                  />
                </div>

                {/* 📝 TEXT */}
                <div className="z-10">
                  <p
                    className={`
                      text-xs sm:text-sm font-bold uppercase tracking-widest font-mono mb-1
                      ${ROLE_COLOR[guest.role] || "text-amber-400"}
                    `}
                  >
                    {guest.title}
                  </p>

                  <h3 className="text-lg sm:text-xl font-bold text-white leading-tight drop-shadow-md">
                    {guest.name}
                  </h3>

                  {/* 🏛 DESIGNATION */}
                  <p className="text-xs sm:text-sm text-indigo-100/70 mt-2 italic font-medium leading-relaxed max-w-[250px]">
                    {guest.designation}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* ⚖️ LEGAL NOTE */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
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
            Top 3 teams of{" "}
            <span className="text-amber-400 font-bold">
              Pitch Perfect
            </span>{" "}
            will receive{" "}
            <span className="text-white font-semibold">
              expert Legal Consultancy
            </span>{" "}
            support from our Team.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
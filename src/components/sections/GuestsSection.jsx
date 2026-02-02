import { motion } from "framer-motion"

export default function GuestsSection() {
  // 🧑‍⚖️ GUEST DATA MATCHING YOUR IMAGES
  const GUESTS = [
    {
      title: "Chief Guest",
      name: "Prof. Dr. Manish Bhalla",
      role: "Vice Chancellor DYPIU Akurdi, Pune",
      image: "/assets/images/chief-guest.png",
    },
    {
      title: "Distinguished Guest",
      name: "Dr. Dheeraj Agrawal",
      role: "Pro-Vice Chancellor, Dnyan Prasad Global University, D. Y. Patil Group, Pune",
      image: "/assets/images/distinguished-guest.png",
    },
    {
      title: "Judge – Pitch Perfect",
      name: "Mr. Deovrut Jadhav",
      role: "Rayat Centenary Innovation and Incubation Foundation, Navi Mumbai",
      image: "/assets/images/judge1.png",
    },
    {
      title: "Judge – Pitch Perfect",
      name: "Dr. Chandrashekhar Talathi",
      role: "Director, LeapSwitch Networks Pvt. Ltd.",
      image: "/assets/images/judge2.png",
    },
  ]

  return (
    <section
      id="guests"
      className="relative py-20 px-4 sm:px-6"
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
            font-black uppercase mb-14
            text-transparent bg-clip-text
            bg-gradient-to-r from-amber-300 via-white to-indigo-400
          "
        >
          Our Guests
        </motion.h2>

        {/* 👥 GUEST GRID (4 Columns) */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {GUESTS.map((guest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="
                rounded-2xl
                bg-gradient-to-br from-[#0a0a1a]/90 via-[#111122]/90 to-[#0a0a1a]/90
                border border-indigo-500/30
                shadow-[0_0_40px_rgba(99,102,241,0.15)]
                p-6
                text-center
                hover:scale-105 transition-transform duration-300
                flex flex-col items-center
              "
            >
              {/* IMAGE */}
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full" />
                <img
                  src={guest.image}
                  alt={guest.name}
                  className="
                    relative
                    w-32 h-32 md:w-36 md:h-36
                    object-cover rounded-full
                    border-2 border-indigo-500/30
                    shadow-lg
                  "
                />
              </div>

              {/* TITLE */}
              <p className="text-amber-400 text-[10px] sm:text-xs uppercase tracking-widest font-mono mb-2 font-bold">
                {guest.title}
              </p>

              {/* NAME */}
              <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                {guest.name}
              </h3>

              {/* ROLE */}
              <p className="text-indigo-200/60 text-xs leading-relaxed">
                {guest.role}
              </p>
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
            mt-16
            max-w-3xl mx-auto
            border-t border-indigo-500/30
            pt-6
          "
        >
          <p className="text-sm sm:text-base text-indigo-100/80 font-medium">
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
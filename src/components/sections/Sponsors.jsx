import { Element } from 'react-scroll'
import { motion } from 'framer-motion'
import { memo } from 'react'

// ✅ UPDATED SPONSOR LIST
const SPONSORS = [
 
  {
    name: "DigiGhar",
    logo: "/assets/images/DIGIGHAR_LOGO-removebg-preview.png", // Added
    link: "#"
  },
  {
    name: "DigiCat",
    logo: "/assets/images/DIGICAT LOGO.jpeg", // Added
    link: "#"
  },
  {
    name: "Puneri Pattern",
    logo: "/assets/images/Puneri pattern logo.png", // Added
    link: "#"
  },
  {
    name: "VH Tech",
    logo: "/assets/images/logo vht.jpeg", // Added
    link: "#"
  }
]

const Sponsors = memo(function Sponsors() {

  return (
    <Element name="sponsors" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500"
            style={{ textShadow: '0 0 30px rgba(6,182,212,0.3)' }}
          >
            Our Sponsors
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Making Gravity 2K26 possible through visionary partnerships and support.
          </p>
        </motion.div>

        {/* ✅ SPONSORS GRID (2 Columns for 6 items looks balanced) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center mb-20">
          {SPONSORS.map((sponsor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="
                group relative w-full max-w-xs aspect-[3/2]
                bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl
                flex items-center justify-center p-8
                shadow-[0_0_30px_rgba(0,0,0,0.3)]
                hover:border-cyan-500/30 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)]
                transition-all duration-300
              "
            >
              {/* Background Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />

              {/* Sponsor Logo */}
              <img 
                src={sponsor.logo} 
                alt={sponsor.name}
                className="w-full h-full object-contain filter drop-shadow-lg"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement.innerHTML += `<div class="text-white/30 text-center font-mono text-sm">${sponsor.name}</div>`;
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-10"
        >
          <p className="text-white/50 mb-4">Want to partner with us?</p>
          
          <a 
            href="/assets/images/docs/Gravity_Brochure.pdf" 
            download="Gravity_2K26_Brochure.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block px-8 py-3 rounded-full 
              border border-cyan-500/30 text-cyan-400 
              hover:bg-cyan-500/10 hover:border-cyan-400 
              transition-all shadow-[0_0_15px_rgba(6,182,212,0.1)] hover:shadow-[0_0_25px_rgba(6,182,212,0.4)]
              cursor-pointer
            "
          >
            Download Brochure
          </a>

        </motion.div>

      </div>
    </Element>
  )
})

export default Sponsors
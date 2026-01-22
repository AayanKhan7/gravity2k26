import { Element } from 'react-scroll'
import { motion } from 'framer-motion'
import { memo } from 'react'

// ✅ 1. SPONSORS LIST (Corporate/Technical)
const SPONSORS = [
  {
    name: "DigiGhar",
    logo: "/assets/images/DIGIGHAR_LOGO-removebg-preview.png",
    link: "#"
  },
  {
    name: "DigiCat",
    logo: "/assets/images/DIGICAT LOGO.jpeg",
    link: "#"
  },
  {
    name: "Puneri Pattern",
    logo: "/assets/images/Puneri pattern logo.png",
    link: "#"
  },
  {
    name: "VS Tech",
    logo: "/assets/images/logo vht.jpeg",
    link: "#"
  },
  {
    name: "IST",
    logo: "/assets/images/IST_logo-removebg-preview.png",
    link: "#"
  },
  {
    name: "Celestia",
    logo: "/assets/images/CELESTIA_logo-removebg-preview.png",
    link: "#"
  },
  {
    name: "IEEE",
    logo: "/assets/images/IEEE-Logo-removebg-preview.png",
    link: "#"
  }
]

// ✅ 2. COMMUNITY PARTNERS LIST
const COMMUNITY_PARTNERS = [
  {
    name: "GDG on Campus",
    logo: "/assets/images/GDGOC-TAE.png",
    link: "#"
  },
  {
    name: "IEEE TAE Student Branch",
    logo: "/assets/images/IEEELOGO2-removebg-preview.png",
    link: "#"
  }
]

// 📦 Reusable Card Component to avoid code duplication
const SponsorCard = ({ item, index }) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ scale: 1.05 }}
    className="
      group relative w-full max-w-xs h-48
      bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl
      flex flex-col items-center justify-center p-6
      shadow-[0_0_30px_rgba(0,0,0,0.3)]
      hover:border-cyan-500/30 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)]
      transition-all duration-300
    "
  >
    {/* Background Glow */}
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />

    {/* Logo */}
    <img 
      src={item.logo} 
      alt={item.name}
      className="
        w-full h-full object-contain filter drop-shadow-lg 
        opacity-90 group-hover:opacity-100 
        transition-all duration-300
        group-hover:-translate-y-4 group-hover:scale-90
      "
      loading="lazy"
      onError={(e) => {
        e.currentTarget.style.display = 'none';
        e.currentTarget.parentElement.querySelector('.fallback-text').style.opacity = '1';
      }}
    />

    {/* Name Reflection */}
    <div className="
      absolute bottom-4 left-0 right-0 text-center
      text-cyan-300 font-mono text-sm tracking-widest uppercase font-bold
      opacity-0 translate-y-4
      group-hover:opacity-100 group-hover:translate-y-0
      transition-all duration-300
      fallback-text
    ">
      {item.name}
    </div>
  </motion.div>
)

const Sponsors = memo(function Sponsors() {

  return (
    <Element name="sponsors" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* ==================== SPONSORS SECTION ==================== */}
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
            Making Gravity 2K26 possible through visionary partnerships.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center mb-32">
          {SPONSORS.map((sponsor, index) => (
            <SponsorCard key={index} item={sponsor} index={index} />
          ))}
        </div>

        {/* ==================== COMMUNITY PARTNERS SECTION ==================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500"
            style={{ textShadow: '0 0 30px rgba(168, 85, 247, 0.3)' }}
          >
            Community Partners
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 mb-20">
          {COMMUNITY_PARTNERS.map((partner, index) => (
            <SponsorCard key={index} item={partner} index={index} />
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
import { Element } from 'react-scroll'
import { motion } from 'framer-motion'
import { memo } from 'react'

// Wrap in memo to prevent unnecessary re-renders
const Sponsors = memo(function Sponsors() {
  
  const sponsors = [
    { name: 'Title Sponsor', logo: 'https://placehold.co/400x150/white/black?text=Title+Sponsor' },
    { name: 'Tech Partner', logo: 'https://placehold.co/400x150/white/black?text=Tech+Partner' },
    { name: 'Media Partner', logo: 'https://placehold.co/400x150/white/black?text=Media+Corp' },
    { name: 'Beverage Partner', logo: 'https://placehold.co/400x150/white/black?text=Energy+Drink' },
    { name: 'Coding Partner', logo: 'https://placehold.co/400x150/white/black?text=Code+Academy' },
    { name: 'Gaming Partner', logo: 'https://placehold.co/400x150/white/black?text=Gaming+Gear' },
    { name: 'Merch Partner', logo: 'https://placehold.co/400x150/white/black?text=Apparel+Co' },
    { name: 'Radio Partner', logo: 'https://placehold.co/400x150/white/black?text=98.3+FM' },
  ]

  return (
    <Element name="sponsors" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }} // Triggers slightly later
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

        {/* LOGO GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="
                group relative
                bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl
                h-40 flex items-center justify-center p-6
                hover:bg-white/10 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]
                transition-all duration-300 cursor-pointer
              "
            >
              {/* ✅ OPTIMIZED IMAGE */}
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                // 1. Lazy Load: Only download when user scrolls near
                loading="lazy" 
                // 2. Async Decoding: Don't freeze the main thread while processing
                decoding="async"
                // 3. Explicit Dimensions: Prevents layout shifts (CLS)
                width="400"
                height="150"
                className="
                  max-w-full max-h-full object-contain 
                  opacity-70 group-hover:opacity-100 
                  filter grayscale group-hover:grayscale-0 
                  transition-all duration-300
                "
              />
              
              <span className="absolute bottom-2 text-[10px] text-white/20 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                {sponsor.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-20"
        >
          <p className="text-white/50 mb-4">Want to partner with us?</p>
          <button className="px-8 py-3 rounded-full border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all">
            Download Brochure
          </button>
        </motion.div>

      </div>
    </Element>
  )
})

export default Sponsors
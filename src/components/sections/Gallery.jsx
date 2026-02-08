import { Element } from 'react-scroll'
import { motion } from 'framer-motion'

// ✅ DATA: Defined outside component for better performance
// Make sure your files in 'public/assets/images/gallery/' exactly match these names (e.g., 1.jpeg)
const GALLERY_IMAGES = [
  '/assets/images/gallery/1.jpeg',
  '/assets/images/gallery/2.jpeg',
  '/assets/images/gallery/3.jpeg',
  '/assets/images/gallery/4.jpeg',
  '/assets/images/gallery/5.jpeg',
  '/assets/images/gallery/6.jpeg',
]

export default function Gallery() {
  return (
    <Element name="gallery" className="relative py-28 px-6 overflow-hidden">
      
      {/* 👫 BACKGROUND GLOW - Optimized for mobile */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <div className="absolute top-1/2 left-1/2 w-[60rem] h-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-[160px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        
        {/* 📝 TITLE SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 tracking-wider">
            Gallery
          </h2>
          <p className="text-lg sm:text-xl text-white/70">
            Moments captured from the Gravity universe
          </p>
        </motion.div>

        {/* 🖼️ IMAGE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {GALLERY_IMAGES.map((src, index) => {
            const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
            return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: isMobile ? 0 : index * 0.1 }} // No stagger on mobile
              whileHover={!isMobile ? { y: -10 } : {}} // Disable hover animations on mobile
              className="group relative h-72 rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(147,51,234,0.15)] bg-white/5"
            >
              {/* IMAGE */}
              <img
                src={src}
                alt={`Gravity Event Highlight ${index + 1}`}
                loading="lazy"
                className="
                  w-full h-full object-cover
                  transition-transform duration-700 ease-in-out
                  group-hover:scale-110
                "
                onError={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(147,51,234,0.3), rgba(168,85,247,0.2))';
                  e.currentTarget.style.display = 'none';
                }}
              />

              {/* OVERLAY & TEXT */}
              <div
                className={`
                  absolute inset-0
                  bg-gradient-to-t from-black/90 via-black/20 to-transparent
                  flex flex-col justify-end p-6
                  ${isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 transition-opacity duration-500'}
                `}
              >
                <p className={`text-white font-mono text-sm tracking-widest transition-transform duration-500 ${isMobile ? '' : 'translate-y-4 group-hover:translate-y-0'}`}>
                  HIGHLIGHT #{index + 1}
                </p>
              </div>
            </motion.div>
            )
          })}
        </div>

      </div>
    </Element>
  )
}
import { Element } from 'react-scroll'
import { motion } from 'framer-motion'

const images = [
  '/assets/images/gallery/1.webp',
  '/assets/images/gallery/2.webp',
  '/assets/images/gallery/3.webp',
  '/assets/images/gallery/4.webp',
  '/assets/images/gallery/5.webp',
  '/assets/images/gallery/6.webp',
]

export default function Gallery() {
  return (
    <Element name="gallery" className="relative py-28 px-6 overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[60rem] h-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-[160px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-4 text-glow-cyan tracking-wider">
            Gallery
          </h2>
          <p className="text-xl text-white/70 font-body">
            Moments captured from the Gravity universe
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ scale: 1.05 }}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                glassmorphic
                border border-white/20
                shadow-[0_0_40px_rgba(168,85,247,0.25)]
              "
            >
              <img
                src={src}
                alt={`Gallery ${index}`}
                className="
                  w-full h-64 object-cover
                  transition-transform duration-700
                  group-hover:scale-110
                "
              />

              {/* Overlay */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-black/70
                  via-transparent
                  to-transparent
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity duration-500
                "
              />
            </motion.div>
          ))}
        </div>
      </div>
    </Element>
  )
}

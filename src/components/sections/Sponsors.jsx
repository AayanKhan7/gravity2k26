import { Element } from 'react-scroll'
import { motion } from 'framer-motion'
import { memo } from 'react'

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

        {/* COMING SOON PLACEHOLDER */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            relative w-full py-32 px-6
            flex flex-col items-center justify-center text-center
            bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl
            overflow-hidden
            group
          "
        >
          {/* Background Glow Effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full group-hover:bg-cyan-500/20 transition-all duration-1000" />
          
          <h3 className="relative z-10 text-3xl md:text-6xl font-black text-white/20 uppercase tracking-widest group-hover:text-white/30 transition-colors duration-500">
            Coming Soon
          </h3>
          <p className="relative z-10 text-white/40 mt-4 font-mono text-sm tracking-wider">
            [ CLASSIFIED DATA ]
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-20"
        >
          <p className="text-white/50 mb-4">Want to partner with us?</p>
          
          {/* ✅ FIXED PATH: /assets/images/docs/... */}
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
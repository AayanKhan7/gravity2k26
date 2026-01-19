import { Element } from 'react-scroll'
import { motion } from 'framer-motion'
import { MapPin, Mail, Phone } from 'lucide-react'

export default function Contact() {
  return (
    <Element name="contact" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500" style={{ textShadow: '0 0 30px rgba(6,182,212,0.3)' }}>
            Get In Touch
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Have questions about the events or sponsorship? Reach out to us directly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* LEFT COLUMN: Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* 📍 ADDRESS CARD */}
            <div className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-cyan-500/20 text-cyan-400 group-hover:scale-110 transition-transform">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Location</h3>
                  <p className="text-white/70 leading-relaxed">
                    Sr. No. 25 & 27, Kondhwa-Saswad Road,<br />
                    Near Bopdev Ghat, Pune,<br />
                    Maharashtra 411048.
                  </p>
                </div>
              </div>
            </div>

            {/* 📧 EMAIL CARD */}
            <div className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-purple-500/20 text-purple-400 group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                  <div className="space-y-1">
                    <a href="mailto:contact@gravity2k26.com" className="block text-white/70 hover:text-cyan-400 transition-colors">
                      contact@gravity2k26.com
                    </a>
                    <a href="mailto:gdgoc.tae@gmail.com" className="block text-white/70 hover:text-cyan-400 transition-colors">
                      gdgoc.tae@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 📞 PHONE CARD */}
            <div className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-green-500/20 text-green-400 group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                  <p className="text-white/50 text-sm mb-1 uppercase tracking-wider">Student Coordinator</p>
                  <a href="tel:+919767550382" className="text-xl text-white font-mono hover:text-cyan-400 transition-colors">
                    +91 97675 50382 <span className="text-base text-white/50">(Mayur Patil)</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-full min-h-[400px] rounded-2xl overflow-hidden border border-white/10 relative shadow-2xl"
          >
            {/* GOOGLE MAP IFRAME */}
            <iframe 
              title="KJEI Location"
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(100%) invert(90%)' }} // Cool dark mode map effect
              loading="lazy" 
              allowFullScreen 
              referrerPolicy="no-referrer-when-downgrade"
              // Using the coordinates you provided to center the map exactly
              src="https://maps.google.com/maps?q=18.4215263,73.9058564&z=15&output=embed"
            ></iframe>
            
            {/* Overlay to blend map with dark theme */}
            <div className="absolute inset-0 pointer-events-none border-2 border-white/10 rounded-2xl shadow-[inset_0_0_50px_rgba(0,0,0,0.5)]"></div>
          </motion.div>

        </div>
      </div>
    </Element>
  )
}
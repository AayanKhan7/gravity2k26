import { Element } from 'react-scroll'
import { motion } from 'framer-motion'
import { MapPin, Mail, Phone } from 'lucide-react'

export default function Contact() {
  return (
    <Element name="contact" className="relative z-10 px-4 sm:px-6 py-16 sm:py-20 md:py-24">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-14 md:mb-16 px-2"
        >
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500"
            style={{ textShadow: '0 0 30px rgba(6,182,212,0.3)' }}
          >
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
            Have questions about the events or sponsorship? Reach out to us directly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          
          {/* LEFT COLUMN: Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-5 sm:space-y-6"
          >
            {/* 📍 ADDRESS CARD */}
            <div className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-7 md:p-8 hover:bg-white/10 transition-colors">
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
            <div className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-7 md:p-8 hover:bg-white/10 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-purple-500/20 text-purple-400 group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                  <div className="space-y-2">
                    {/* ✅ FIXED: Email match corrected */}
                    <a href="mailto:gravity2k26.tae@kjei.edu.in" className="block text-white/70 hover:text-cyan-400 transition-colors font-mono">
                      gravity2k26.tae@kjei.edu.in
                    </a>
                    
                  </div>
                </div>
              </div>
            </div>

            {/* 📞 PHONE CARD */}
            <div className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-7 md:p-8 hover:bg-white/10 transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-green-500/20 text-green-400 group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 sm:mb-4">Student Coordinators</h3>
                  
                  <div className="space-y-3 sm:space-y-4">
                    {/* Mayur Patil */}
                    <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
                      <a href="tel:+919767550382" className="text-lg sm:text-xl text-white font-mono hover:text-cyan-400 transition-colors">
                        +91 97675 50382
                      </a>
                      <span className="text-sm text-white/40 uppercase tracking-widest bg-white/5 px-2 py-1 rounded">Mayur Patil</span>
                    </div>

                    {/* ✅ ADDED SHAUNAK NAIK */}
                    <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
                      <a href="tel:+919833953312" className="text-lg sm:text-xl text-white font-mono hover:text-cyan-400 transition-colors">
                        +91 98339 53312
                      </a>
                      <span className="text-sm text-white/40 uppercase tracking-widest bg-white/5 px-2 py-1 rounded">Shaunak Naik</span>
                    </div>
                  </div>

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
            className="h-full min-h-[240px] sm:min-h-[300px] md:min-h-[400px] rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 relative shadow-2xl"
          >
            {/* GOOGLE MAP IFRAME */}
            <iframe 
              title="KJEI Location Map"
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(100%) invert(90%)' }}
              loading="lazy" 
              allowFullScreen 
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.576192135687!2d73.90366771485664!3d18.42152638746764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eb5000000001%3A0x6a0487a956162380!2sTrinity%20Academy%20of%20Engineering!5e0!3m2!1sen!2sin!4v1675240000000!5m2!1sen!2sin"
            ></iframe>
            
            {/* Overlay to blend map with dark theme */}
            <div className="absolute inset-0 pointer-events-none border-2 border-white/10 rounded-2xl shadow-[inset_0_0_50px_rgba(0,0,0,0.5)]"></div>
          </motion.div>

        </div>
      </div>
    </Element>
  )
}
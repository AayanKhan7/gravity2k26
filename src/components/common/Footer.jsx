import { SITE_CONFIG } from '../../data'
import { motion } from 'framer-motion'
// 👇 Changed imports to use Lucide (which you already have)
import { Instagram, Twitter, Linkedin, Github } from 'lucide-react'

export default function Footer() {
  const colleges = [
    "KJ College of Engineering and Management Research (KJCOEMR)",
    "Trinity Academy of Engineering (TAE)",
    "Trinity College of Engineering and Research (TCOER)",
    "Trinity College of Architecture",
    "Trinity College of Pharmacy (TCOP)",
    "Trinity College of Law",
    "Trinity Polytechnic",
    "Trinity Institute of Management & Research (TIMR)",
    "Trinity College of Arts, Commerce & Science (TCACS)"
  ]

  return (
    <footer className="relative mt-20 border-t border-white/10 bg-black/40 backdrop-blur-xl">
      
      {/* 🚀 MOVING COLLEGE MARQUEE */}
      <div className="w-full overflow-hidden bg-cyan-900/20 border-b border-white/5 py-3">
        <div className="flex whitespace-nowrap">
          <motion.div 
            className="flex gap-12 text-sm md:text-base font-mono text-cyan-200/70"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              repeat: Infinity, 
              ease: "linear", 
              duration: 30 
            }}
          >
            {[...colleges, ...colleges].map((college, index) => (
              <span key={index} className="flex items-center gap-4">
                <span className="w-2 h-2 rounded-full bg-cyan-500/50"></span>
                {college}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* 🎨 MAIN FOOTER CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          <div className="md:col-span-5 space-y-6">
            <img 
              src="/assets/images/Gravity logo.PNG" 
              alt="Gravity 2K26" 
              className="h-24 w-auto opacity-90 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]" 
            />
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              Gravity 2K26 is the ultimate techfest of KJEI, bringing together the brightest minds for a celebration of technology, innovation, and creativity.
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-white font-bold text-lg mb-6 tracking-widest uppercase">Explore</h3>
            <ul className="space-y-3 text-white/60 text-sm">
              {['Home', 'About Us', 'Events', 'Sponsors', 'Gallery'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-cyan-400 hover:pl-2 transition-all duration-300 flex items-center gap-2">
                    &rsaquo; {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-white font-bold text-lg mb-6 tracking-widest uppercase">Connect</h3>
            <div className="flex gap-4 mb-8">
              {/* 👇 Updated Icon Components */}
              {[Instagram, Twitter, Linkedin, Github].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-cyan-500 hover:text-white transition-all duration-300 hover:scale-110 border border-white/10"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-xs text-white/40 uppercase tracking-widest mb-1">General Inquiries</p>
              <p className="text-white font-mono">contact@gravity2k26.com</p>
            </div>
          </div>

        </div>
      </div>

      <div className="border-t border-white/5 py-6 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <p>© 2026 KJEI Techfest. All rights reserved.</p>
          <p>
            Designed & Developed by <span className="text-cyan-400/60">Tech Team Gravity</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
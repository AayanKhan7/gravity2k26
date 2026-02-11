import { SITE_CONFIG } from '../../data'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll' // ✅ Imported for scrolling
import { Instagram, Linkedin } from 'lucide-react' // ✅ Only kept Instagram

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

  // ✅ SOCIAL LINKS (Only Instagram)
  const socialLinks = [
    { 
      icon: Instagram, 
      href: "https://www.instagram.com/gravity_2k26?igsh=Ym9lcDdsNjV5cm80",
      color: "hover:text-pink-500"
    }
  ]

  // ✅ EXPLORE LINKS MAPPING
  const exploreLinks = [
    { label: 'Home', to: 'hero' },
    { label: 'About Us', to: 'about' },
    { label: 'Events', to: 'events' },
    { label: 'Sponsors', to: 'sponsors' },
    { label: 'Gallery', to: 'gallery' }
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
          
          {/* BRAND SECTION */}
          <div className="md:col-span-5 space-y-4">
            <img 
              src="/assets/images/Gravity logo.PNG" 
              alt="Gravity 2K26" 
              className="h-24 w-auto opacity-90 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]" 
            />
            
            {/* ✅ ADDED HOSTED BY TEXT */}
            <p className="text-cyan-400 font-bold text-sm uppercase tracking-wide">
              Hosted By Trinity Academy of Engineering
            </p>

            <p className="text-white/60 text-sm leading-relaxed max-w-sm pt-2">
              Gravity 2K26 is the ultimate techfest of KJEI, bringing together the brightest minds for a celebration of technology, innovation, and creativity.
            </p>
          </div>

          {/* EXPLORE SECTION (Now Linked) */}
          <div className="md:col-span-3">
            <h3 className="text-white font-bold text-lg mb-6 tracking-widest uppercase">Explore</h3>
            <ul className="space-y-3 text-white/60 text-sm">
              {exploreLinks.map((item) => (
                <li key={item.label}>
                  <Link 
                    to={item.to} 
                    smooth={true} 
                    duration={600} 
                    offset={-100}
                    className="hover:text-cyan-400 hover:pl-2 transition-all duration-300 flex items-center gap-2 cursor-pointer"
                  >
                    &rsaquo; {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONNECT SECTION */}
          <div className="md:col-span-4">
            <h3 className="text-white font-bold text-lg mb-6 tracking-widest uppercase">Connect</h3>
            
            {/* SOCIAL ICONS (Only Instagram) */}
            <div className="flex gap-4 mb-8">
              {socialLinks.map((social, i) => (
                <a 
                  key={i} 
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 ${social.color} hover:bg-white/10 transition-all duration-300 hover:scale-110 border border-white/10`}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-xs text-white/40 uppercase tracking-widest mb-1">General Inquiries</p>
              <a href="mailto:gravity2k26.tae@kjei.edu.in" className="text-white font-mono hover:text-cyan-400 transition-colors">
                gravity2k26.tae@kjei.edu.in
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* COPYRIGHT & DEVELOPER INFO */}
      <div className="border-t border-white/5 py-6 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <p>© 2026 KJEI Techfest. All rights reserved.</p>
          
          <div className="text-center md:text-right">
            <p className="mb-1">
              Designed & Developed by <span className="text-cyan-400/60">Tech Team Gravity</span>
            </p>
            <p>
              Lead Developer: <span className="text-white/50">Ayaan Khan</span> • 
              <a href="mailto:ayaanikhan.tae@kjei.edu.in" className="hover:text-cyan-400 ml-1 transition-colors">
                ayaanikhan.tae@kjei.edu.in
              </a>
              <a
                href="https://www.linkedin.com/in/ayaankhan0717/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center ml-2 text-white/50 hover:text-cyan-400 transition-colors"
                aria-label="Ayaan Khan on LinkedIn"
              >
                <Linkedin size={14} />
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
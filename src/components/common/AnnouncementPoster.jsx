import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { useEffect } from "react"
import { createPortal } from "react-dom"

export default function AnnouncementPoster({ isOpen, onClose }) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto"
    return () => (document.body.style.overflow = "auto")
  }, [isOpen])

  const GUESTS = [
    { 
      type: "CHIEF GUEST", 
      name: "Prof. Dr. Manish Bhalla", 
      designation: "Vice Chancellor, DYPIU Akurdi, Pune",
      image: "/assets/images/chief-guest.png" 
    },
    { 
      type: "DISTINGUISHED GUEST", 
      name: "Dr. Dheeraj Agrawal", 
      designation: "Pro-Vice Chancellor, Dnyaan Prasad Global University",
      image: "/assets/images/distinguished-guest.png" 
    },
    { 
      type: "JUDGE - PITCH PERFECT", 
      name: "Mr. Deovrut Jadhav", 
      designation: "Rayat Centenary Innovation & Incubation Foundation",
      image: "/assets/images/judge1.png" 
    },
    { 
      type: "JUDGE - PITCH PERFECT", 
      name: "Dr. Chandrashekhar Talathi", 
      designation: "Director, LeapSwitch Networks Pvt. Ltd",
      image: "/assets/images/judge2.png" 
    },
    { 
      type: "INFLUENCER", 
      name: "Kaabil Engineer", 
      designation: "400k+ Followers", 
      image: "/assets/images/kaabileng.png" 
    },
    { 
      type: "INFLUENCER", 
      name: "Aalsi Engineer", 
      designation: "128k Subscribers", 
      image: "/assets/images/aalsieng.png" 
    },
  ]

  if (typeof document === "undefined") {
    return null
  }

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center px-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-6xl bg-[#03030b]/95 border border-white/10 rounded-xl shadow-[0_0_50px_rgba(79,70,229,0.3)] overflow-hidden"
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={onClose}
              className="absolute top-2 right-2 z-[110] p-1 rounded-full text-white/30 hover:text-white transition-all"
            >
              <X size={18} />
            </button>

            <div className="pt-3 pb-8 px-6 md:px-10">
              
              {/* SLIM HEADER SECTION */}
              <div className="flex items-center justify-center gap-4 mb-3 border-b border-white/5 pb-2">
                <span className="text-[8px] uppercase text-indigo-400 font-bold tracking-[0.3em] whitespace-nowrap">
                  Official Announcement
                </span>
                <h2 className="text-lg md:text-2xl font-black uppercase text-white tracking-tight leading-none">
                  Our Guests
                </h2>
              </div>

              {/* GUEST GRID */}
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3 items-start">
                {GUESTS.map((guest, index) => (
                  <div key={index} className="flex flex-col items-center text-center group">
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.03 }}
                      // Updated Image Sizes: Mobile 105px, Desktop 150px
                      className="relative w-full aspect-square max-w-[105px] md:max-w-[150px] mb-1.5"
                    >
                      <div className="absolute inset-0 bg-indigo-500/10 blur-[20px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <img
                        src={guest.image}
                        alt={guest.name}
                        className="relative w-full h-full object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
                      />
                    </motion.div>

                    <div className="space-y-0 relative z-10 max-w-[240px]">
                      <p className="text-[7px] md:text-[9px] font-bold text-cyan-400 uppercase leading-none mb-0.5">
                        {guest.type}
                      </p>
                      <h3 className="text-[10px] md:text-sm font-bold text-white leading-tight group-hover:text-indigo-300">
                        {guest.name}
                      </h3>
                      {guest.designation && (
                        /* Updated Designation Sizes: Mobile 8px, Desktop 10-11px */
                        <p className="text-[8px] md:text-[11px] text-indigo-300 font-semibold leading-none mt-1 opacity-90 italic">
                          {guest.designation}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* GOLD FOOTER */}
              <div className="mt-6 pt-4 border-t border-white/10 text-center">
                <p className="text-sm md:text-lg font-extrabold tracking-wide uppercase italic">
                  <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                    Pitch Perfect: Top 3 teams will receive expert Legal Consultancy support.
                  </span>
                </p>
              </div>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}
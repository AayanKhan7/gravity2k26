import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { useEffect } from "react"

export default function AnnouncementPoster({ isOpen, onClose }) {
  // 🔒 Lock background scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto"
    return () => (document.body.style.overflow = "auto")
  }, [isOpen])

  const GUESTS = [
    {
      type: "CHIEF GUEST",
      image: "/assets/images/chief-guest.png",
    },
    {
      type: "DISTINGUISHED GUEST",
      image: "/assets/images/distinguished-guest.png",
    },
    {
      type: "JUDGE - PITCH PERFECT",
      image: "/assets/images/judge1.png",
    },
    {
      type: "JUDGE - PITCH PERFECT",
      image: "/assets/images/judge2.png",
    },
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="
            fixed inset-0 z-[100]
            bg-black/90 backdrop-blur-xl
            flex items-center justify-center
            p-4
          "
          onClick={onClose}
        >
          {/* MODAL CONTAINER */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="
              relative w-full max-w-[95vw] md:max-w-5xl
              rounded-2xl md:rounded-3xl
              bg-gradient-to-b from-[#0b0b1f] to-[#050510]
              border border-indigo-500/20
              shadow-2xl
              flex flex-col justify-between
              p-5 md:p-10
            "
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={onClose}
              className="
                absolute top-3 right-3 md:top-4 md:right-4 z-50
                p-2 rounded-full
                bg-white/5 hover:bg-red-600 hover:text-white
                text-white/50 transition-all duration-300
              "
            >
              <X size={20} />
            </button>

            {/* HEADER */}
            <div className="text-center mb-6 md:mb-10">
              <p className="text-indigo-400 uppercase tracking-[0.2em] text-[9px] md:text-xs font-bold mb-1 md:mb-2">
                Official Announcement
              </p>
              <h2 className="text-2xl md:text-5xl font-black uppercase text-white drop-shadow-lg">
                Our Guests
              </h2>
            </div>

            {/* ✅ GRID LAYOUT (Optimized for Mobile) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 items-end justify-items-center">
              {GUESTS.map((guest, index) => (
                <div key={index} className="flex flex-col items-center text-center group w-full">
                  
                  {/* IMAGE */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                    className="relative mb-2 md:mb-3 w-full max-w-[140px] md:max-w-none"
                  >
                    <img
                      src={guest.image}
                      alt={guest.type}
                      className="
                        w-full h-auto 
                        object-contain 
                        filter drop-shadow-xl
                        hover:scale-105 transition-transform duration-300
                      "
                    />
                  </motion.div>

                  {/* GUEST TYPE LABEL */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <p className="text-amber-400 text-[9px] md:text-xs font-bold uppercase tracking-widest px-1 leading-tight">
                      {guest.type}
                    </p>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* FOOTER */}
            <div className="mt-6 md:mt-10 pt-4 md:pt-6 border-t border-white/5 text-center px-2">
              <p className="text-xs md:text-base text-indigo-100/80 font-medium tracking-wide leading-relaxed">
                <span className="text-amber-400 font-bold">For the Top 3 Teams of Pitch Perfect</span>, 
                our team will be providing Legal Consultancy.
              </p>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
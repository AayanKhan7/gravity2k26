import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { useEffect } from "react"

export default function AnnouncementPoster({ isOpen, onClose }) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto"
    return () => (document.body.style.overflow = "auto")
  }, [isOpen])

  const GUESTS = [
    { type: "CHIEF GUEST", image: "/assets/images/chief-guest.png" },
    { type: "DISTINGUISHED GUEST", image: "/assets/images/distinguished-guest.png" },
    { type: "JUDGE - PITCH PERFECT", image: "/assets/images/judge1.png" },
    { type: "JUDGE - PITCH PERFECT", image: "/assets/images/judge2.png" },
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center px-3"
          onClick={onClose}
        >
          {/* MODAL */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={(e) => e.stopPropagation()}
            className="
              relative w-full max-w-[95vw]
              h-[90vh] md:h-auto
              md:max-w-[1100px]
              bg-gradient-to-b from-[#0b0b1f] to-[#050510]
              rounded-2xl md:rounded-3xl
              border border-indigo-500/20
              shadow-2xl
              flex flex-col
              overflow-hidden
            "
          >
            {/* CLOSE */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 z-50 p-2 rounded-full bg-white/5 hover:bg-red-600 text-white/70"
            >
              <X size={20} />
            </button>

            {/* CONTENT SCROLL */}
            <div className="overflow-y-auto px-4 md:px-8 py-6">
              {/* HEADER */}
              <div className="text-center mb-6">
                <p className="text-indigo-400 uppercase tracking-[0.25em] text-[10px] font-bold mb-1">
                  Official Announcement
                </p>
                <h2 className="text-3xl md:text-4xl font-black uppercase text-white">
                  Our Guests
                </h2>
              </div>

              {/* GRID */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8 place-items-center">
                {GUESTS.map((guest, index) => (
                  <div key={index} className="flex flex-col items-center text-center w-full">
                    
                    {/* IMAGE CARD */}
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="
                        relative w-full
                        max-w-[190px] md:max-w-[240px]
                        h-[220px] md:h-[300px]
                        flex items-center justify-center
                        mb-3
                      "
                    >
                      <div className="absolute inset-0 bg-indigo-500/20 blur-2xl rounded-2xl" />

                      <img
                        src={guest.image}
                        alt={guest.type}
                        className="
                          relative w-full h-full
                          object-contain
                          rounded-2xl
                          border border-indigo-500/30
                          shadow-xl
                        "
                      />
                    </motion.div>

                    {/* LABEL */}
                    <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
                      {guest.type}
                    </p>
                  </div>
                ))}
              </div>

              {/* FOOTER */}
              <div className="mt-8 pt-4 border-t border-white/10 text-center">
                <p className="text-sm md:text-base text-indigo-100/80 leading-relaxed">
                  <span className="text-amber-400 font-bold">
                    For the Top 3 Teams of Pitch Perfect
                  </span>, our team will be providing Legal Consultancy.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

import { Element } from 'react-scroll'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

/* EVENT DATE CONFIGURATION */
const EVENT_DATE = new Date('2026-02-20T09:00:00')

/* --- HOOK: COUNTDOWN LOGIC --- */
function useCountdown(targetDate) {
  const getTimeLeft = () => {
    const now = new Date().getTime()
    const diff = targetDate.getTime() - now

    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    }
  }

  const [timeLeft, setTimeLeft] = useState(getTimeLeft())

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return timeLeft
}

/* --- COMPONENT: INDIVIDUAL TIME CARD --- */
function TimeBlock({ label, value }) {
  return (
    <div className="flex flex-col items-center">
      <div 
        className="
          relative group
          w-16 h-20 md:w-24 md:h-28 
          flex items-center justify-center 
          bg-black/40 backdrop-blur-md 
          border border-white/10 rounded-xl
          overflow-hidden
          shadow-[0_0_15px_rgba(6,182,212,0.1)]
        "
      >
        <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50" />
        <span className="text-3xl md:text-5xl font-mono font-bold text-white z-10">
          {String(value).padStart(2, '0')}
        </span>
        <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-cyan-200/60 mt-3 font-medium">
        {label}
      </span>
    </div>
  )
}

export default function About() {
  const time = useCountdown(EVENT_DATE)

  return (
    <Element name="about" className="relative py-24 md:py-40 px-6 overflow-hidden">
      
      {/* 🌌 AMBIENT BACKGROUND GLOWS */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* ===== LEFT: COUNTDOWN HUD ===== */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <div className="
            relative
            bg-white/5 backdrop-blur-2xl 
            border border-white/10 rounded-3xl 
            p-8 md:p-12
            text-center
            shadow-2xl
          ">
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400 rounded-tl-xl opacity-50" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400 rounded-br-xl opacity-50" />

            <h3 className="text-cyan-400 tracking-[0.3em] uppercase text-sm font-bold mb-8">
              Launch Countdown
            </h3>

            <div className="flex justify-center gap-3 md:gap-6">
              <TimeBlock label="Days" value={time.days} />
              <TimeBlock label="Hours" value={time.hours} />
              <TimeBlock label="Mins" value={time.minutes} />
              <TimeBlock label="Secs" value={time.seconds} />
            </div>

            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="text-white/40 text-sm font-mono uppercase tracking-widest">
                T-Minus to Gravity 2K26
              </p>
            </div>
          </div>
        </motion.div>

        {/* ===== RIGHT: TEXT CONTENT ===== */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center lg:text-left z-10"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">
              Empowering
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              Innovation
            </span>
          </h2>

          <div className="space-y-6 text-lg text-white/70 leading-relaxed font-light">
            <p>
              <strong className="text-white font-semibold">GRAVITY 2K26</strong> is not just a techfest; 
              it is a collision of curiosity and code. It is where the blueprints of the future 
              are drafted by the minds of today.
            </p>
            <p>
              From high-stakes hackathons to drone racing leagues, we provide the platform for 
              engineers, designers, and dreamers to transcend limits and redefine what is possible.
            </p>
          </div>

          <div className="mt-10 flex flex-col md:flex-row gap-6 justify-center lg:justify-start">
             <div className="flex items-center gap-4">
                <div className="h-[2px] w-12 bg-cyan-500/50" />
                <span className="text-cyan-300 font-mono text-sm tracking-widest">EST. 2026</span>
             </div>
          </div>

        </motion.div>
      </div>

      {/* 🏆 NEW: OVERALL PRIZE POOL (Added at the bottom of About Section) */}
      <div className="w-full mt-32 text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-black/20 backdrop-blur-sm py-10 rounded-3xl border border-white/5 mx-auto max-w-5xl"
        >
          <h2 className="text-xl md:text-3xl font-bold uppercase tracking-[0.2em] text-cyan-500 mb-4 drop-shadow-lg">
            Overall Prize Pool
          </h2>
          <p 
            className="text-4xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-500"
            style={{ textShadow: '0 0 30px rgba(234, 179, 8, 0.4)' }}
          >
            Worth Upto ₹ 4,00,000
          </p>
        </motion.div>
      </div>

    </Element>
  )
}
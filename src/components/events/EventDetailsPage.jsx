import { useEffect } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { 
  Calendar, 
  Trophy, 
  CreditCard, 
  Layers, 
  ArrowLeft, 
  CheckCircle2, 
  Terminal,
  ShieldAlert,
  ExternalLink // ✅ Imported Icon
} from "lucide-react"

export default function EventDetailsPage({ eventData }) {
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [eventData?.id])

  if (!eventData) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center z-50 relative">
        <div className="text-center space-y-4">
          <ShieldAlert className="w-16 h-16 text-red-500 mx-auto animate-pulse" />
          <h1 className="text-2xl font-mono text-red-400 tracking-widest uppercase">
            Data Transmission Failed
          </h1>
          <p className="text-white/50">Event data could not be retrieved.</p>
        </div>
      </div>
    )
  }

  const hasSubEvents = eventData.subEvents && eventData.subEvents.length > 0;

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-cyan-500/30 pb-32 relative z-10 overflow-hidden">
      
      {/* 🌌 Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-500/5 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/5 blur-[120px]" />
      </div>

      {/* 🔙 NAVBAR */}
      <nav className="fixed top-0 left-0 w-full p-6 z-50 flex items-center bg-gradient-to-b from-black via-black/80 to-transparent pointer-events-none">
        <Link 
          to="/" 
          className="
            pointer-events-auto group
            flex items-center gap-3 px-6 py-3 rounded-full 
            bg-white/5 backdrop-blur-xl border border-white/10 
            hover:bg-white/10 hover:border-white/30 transition-all duration-300
          "
        >
          <div className="p-1 rounded-full bg-white/10 group-hover:bg-cyan-500 transition-colors">
            <ArrowLeft className="w-4 h-4 text-white" />
          </div>
          <span className="text-sm font-bold tracking-widest uppercase text-white/80 group-hover:text-white">
            Mission Control
          </span>
        </Link>
      </nav>

      <div className="pt-20 md:pt-40 px-4 md:px-6 lg:px-12 max-w-7xl mx-auto relative">
        
        {/* 🚀 MAIN HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-24 text-center relative"
        >
          {/* Decorative Lines */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10" />

          <h1 
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-6 uppercase leading-none"
            style={{ 
              color: "transparent", 
              WebkitTextStroke: `1px ${eventData.planetAccent}`,
              textShadow: `0 0 80px ${eventData.planetAccent}30`
            }}
          >
            {eventData.title}
          </h1>
          <div className="inline-block px-4 py-1 rounded-full border border-white/10 bg-black/50 backdrop-blur-md text-xs font-mono uppercase tracking-[0.3em] text-white/60 mb-6">
            {eventData.type}
          </div>
          <p className="text-lg md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed font-light">
            {eventData.description}
          </p>
        </motion.div>

        {/* 📂 SUB-EVENTS LIST */}
        <div className="space-y-32">
          {hasSubEvents ? (
            eventData.subEvents.map((sub, index) => {
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                  className="relative group"
                >
                  {/* Glowing Border Container */}
                  <div 
                    className="absolute -inset-0.5 rounded-[2.5rem] opacity-30 blur-lg transition duration-500 group-hover:opacity-60"
                    style={{ background: `linear-gradient(to right, ${eventData.planetAccent}, transparent, ${eventData.planetAccent})` }}
                  />

                  {/* Glass Card Content */}
                  <div className="relative bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-6 md:p-10 overflow-hidden">
                    
                    {/* Grid Layout */}
                    <div className="flex flex-col lg:flex-row gap-10">
                      
                      {/* 🖼️ LEFT: IMAGE */}
                      <div className="w-full lg:w-5/12">
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group/image">
                          {/* Image Overlay Gradient */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                          
                          {/* Tech Corners */}
                          <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-white/30 z-20 rounded-tl-lg" />
                          <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-white/30 z-20 rounded-br-lg" />

                          <img 
                            src={sub.image} 
                            alt={sub.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-110 group-hover/image:rotate-1"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                              console.warn(`Failed to load image: ${sub.image}`);
                            }}
                          />
                        </div>
                      </div>

                      {/* 📝 RIGHT: INFO */}
                      <div className="w-full lg:w-7/12 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="h-[2px] w-12 bg-white/20" />
                          <span className="text-xs font-mono uppercase tracking-widest text-white/50">Classified Event Protocol</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wide mb-6 leading-tight">
                          {sub.title}
                        </h2>
                        
                        <p className="text-white/70 text-lg leading-relaxed mb-8 border-l-2 border-white/10 pl-6">
                          {sub.description}
                        </p>
                        
                        {/* 📊 HUD STATS GRID */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                          <StatBox 
                            icon={Calendar} 
                            label="Date" 
                            value={sub.date} 
                            accent={eventData.planetAccent} 
                          />
                          <StatBox 
                            icon={CreditCard} 
                            label="Fee" 
                            value={sub.fee} 
                            accent={eventData.planetAccent} 
                          />
                          <StatBox 
                            icon={Layers} 
                            label="Format" 
                            value={sub.rounds} 
                            accent={eventData.planetAccent} 
                          />
                          <StatBox 
                            icon={Trophy} 
                            label="Prize Pool" 
                            value={sub.prize} 
                            accent={eventData.planetAccent} 
                            highlight 
                          />
                        </div>

                        {/* ✅ UPDATED: EXTERNAL LINK BUTTON */}
                        <a 
                          href={sub.registrationLink || "#"} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="
                            relative overflow-hidden w-full md:w-auto px-12 py-4 rounded-xl 
                            font-bold text-black uppercase tracking-[0.2em] 
                            transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]
                            flex items-center justify-center gap-2
                          "
                          style={{ backgroundColor: eventData.planetAccent }}
                        >
                          Initialize Registration
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </div>
                    </div>

                    {/* 📜 RULEBOOK SECTION */}
                    {sub.ruleBook && (
                      <div className="mt-12 pt-10 border-t border-white/5 relative">
                        {/* Section Header */}
                        <div className="flex items-center gap-4 mb-8">
                          <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                            <Terminal className="w-6 h-6 text-white/80" />
                          </div>
                          <h3 className="text-2xl font-bold uppercase tracking-wider">
                            Mission Directives
                          </h3>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {sub.ruleBook.map((section, i) => (
                            <div 
                              key={i} 
                              className="
                                group/card bg-black/40 rounded-xl p-6 border border-white/5 
                                hover:border-white/10 hover:bg-white/[0.02] transition-colors
                              "
                            >
                              <h4 
                                className="font-bold uppercase tracking-wider mb-4 text-sm flex items-center gap-2"
                                style={{ color: eventData.planetAccent }}
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                                {section.title}
                              </h4>
                              
                              {section.points ? (
                                <ul className="space-y-3">
                                  {section.points.map((point, j) => (
                                    <li key={j} className="text-white/60 text-sm leading-relaxed flex items-start gap-3 group-hover/card:text-white/80 transition-colors">
                                      <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-white/20" />
                                      <span>{point}</span>
                                    </li>
                                  ))}
                                </ul>
                              ) : section.judges ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                  {section.judges.map((judge, j) => (
                                    <div key={j} className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                                      <img 
                                        src={judge.photo} 
                                        alt={judge.name}
                                        className="w-20 h-20 rounded-full mx-auto mb-3 object-cover border-2 border-white/20"
                                        onError={(e) => { e.target.src = '/assets/images/placeholder-avatar.png' }}
                                      />
                                      <h5 className="font-bold text-white/90 text-sm">{judge.name}</h5>
                                      <p className="text-white/50 text-xs mt-1">{judge.designation}</p>
                                    </div>
                                  ))}
                                </div>
                              ) : null}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                  </div>
                </motion.div>
              )
            })
          ) : (
            <div className="text-center p-24 border border-dashed border-white/10 rounded-[3rem] bg-white/[0.02]">
              <h2 className="text-4xl font-bold text-white/20 uppercase tracking-widest">
                Classified: Coming Soon
              </h2>
            </div>
          )}
        </div>

      </div>
    </div>
  )
}

// 📦 HUD STAT COMPONENT
function StatBox({ icon: Icon, label, value, accent, highlight }) {
  return (
    <div className={`
      relative p-4 rounded-xl border border-white/5 bg-white/[0.02] 
      flex flex-col justify-between h-full group
      ${highlight ? 'bg-white/5 border-white/10' : ''}
    `}>
      <div className="mb-3">
        <Icon 
          className="w-5 h-5 mb-2 opacity-50 group-hover:opacity-100 transition-opacity" 
          style={{ color: highlight ? accent : 'white' }} 
        />
        <span className="text-[10px] uppercase tracking-widest text-white/30 block font-medium">
          {label}
        </span>
      </div>
      
      <span 
        className={`font-mono font-bold leading-tight ${highlight ? 'text-lg' : 'text-sm text-white/90'}`}
        style={{ color: highlight ? accent : undefined }}
      >
        {value}
      </span>
    </div>
  )
}
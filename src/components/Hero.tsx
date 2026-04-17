import { motion } from 'motion/react';
import { ChevronDown, PlayCircle } from 'lucide-react';

const sidebarFeatures = [
  { title: "The Arena", desc: "Simulate high-pressure scenarios with 5 AI psychological archetypes." },
  { title: "AI Calculator", desc: "Precise risk distribution and position sizing at your fingertips." },
  { title: "Smart Diary", desc: "An AI-monitored journal that analyzes your emotional patterns." },
  { title: "Mentor AI", desc: "24/7 personalized coaching based on your specific trading data." }
];

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[768px] flex items-center pt-20 overflow-hidden">
      {/* Background Video Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/80 to-transparent z-10" />
        <div className="w-full h-full bg-[#111] relative overflow-hidden">
             <div className="absolute inset-0 opacity-20">
                <img 
                    src="https://picsum.photos/seed/trading-luxury/1920/1080?blur=10" 
                    className="w-full h-full object-cover"
                    alt="Luxury Trading Background"
                    referrerPolicy="no-referrer"
                />
             </div>
             {/* Subtle circle overlay from design */}
             <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                <div className="w-[80%] h-[80%] rounded-full border border-white/20" />
             </div>
        </div>
      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-10 flex flex-col lg:flex-row items-center gap-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="lg:w-3/5"
        >
          <span className="hero-label uppercase tracking-[4px] text-[11px] text-accent font-sans mb-4 block">
            The Future of Market Education
          </span>
          <h1 className="text-[64px] md:text-[84px] font-serif font-light mb-6 leading-[1.1] tracking-tighter">
            Mastering the<br/>
            Internal Game
          </h1>
          <p className="text-lg text-text-dim max-w-lg mb-10 font-sans font-light leading-relaxed">
            Experience the world's first AI-driven academy focused on the architecture of trading psychology. Beyond technical analysis—we rebuild your mind for the arena.
          </p>
          
          <div className="flex items-center gap-8">
            <button className="px-6 py-2.5 bg-accent text-bg font-bold text-[10px] uppercase tracking-widest hover:bg-white transition-all">
              265 Modules Live • English
            </button>
            <button className="text-[11px] uppercase tracking-widest text-white/40 hover:text-white transition-colors border-b border-white/10 pb-1">
              Explore Timeline
            </button>
          </div>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:w-2/5 grid grid-cols-2 gap-4"
        >
            {sidebarFeatures.map((f, i) => (
                <div key={i} className="bg-white/[0.03] border border-border p-6 rounded-sm">
                    <h3 className="font-serif text-accent text-[13px] uppercase tracking-widest mb-3">{f.title}</h3>
                    <p className="text-[11px] text-text-dim leading-relaxed">{f.desc}</p>
                </div>
            ))}
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-10 z-20 text-white/20"
      >
        <span className="text-[10px] uppercase tracking-[4px] block mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-white/10" />
      </motion.div>
    </section>
  );
}

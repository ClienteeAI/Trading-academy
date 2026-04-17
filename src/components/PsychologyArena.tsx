import { motion } from 'motion/react';
import { Mic2, ShieldAlert, HeartPulse, BrainCircuit, Waves } from 'lucide-react';

const speakers = [
  {
    name: "The Punisher",
    role: "Equity Protection",
    icon: <ShieldAlert size={24} />,
    color: "bg-red-500/20 text-red-400 border-red-500/30",
    quote: "You're profitable today. So what? One reckless move and you're back to zero. Can you handle real heat?"
  },
  {
    name: "The Oracle",
    role: "Strategic Logic",
    icon: <BrainCircuit size={24} />,
    color: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    quote: "Emotions are noise. Your analysis says sell, your heart says hold. Who is winning right now?"
  },
  {
    name: "Steady",
    role: "Pulse Control",
    icon: <HeartPulse size={24} />,
    color: "bg-green-500/20 text-green-400 border-green-500/30",
    quote: "Breathe. Your heart rate just spiked. If you can't control your body, you can't control your trades."
  },
  {
    name: "Echo",
    role: "Market Reflection",
    icon: <Waves size={24} />,
    color: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    quote: "The market is mirroring your fear. You're hesitating. Are you a trader or a victim of the trend?"
  },
  {
    name: "Nexus",
    role: "The Final Arbiter",
    icon: <Mic2 size={24} />,
    color: "bg-accent/20 text-accent border-accent/30",
    quote: "Congratulations on the win. Now, tell me why you're still in this trade. Greed is a silent killer."
  }
];

export default function PsychologyArena() {
  return (
    <section id="arena" className="py-32 bg-bg relative">
       <div className="max-w-7xl mx-auto px-10">
            <div className="flex flex-col md:flex-row items-center justify-between mb-20 gap-10">
                <div className="max-w-2xl">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-2 h-2 rounded-full bg-[#4CAF50] shadow-[0_0_10px_#4CAF50]" />
                        <span className="text-white/40 font-sans text-[10px] uppercase tracking-[0.3em]">Arena Active Now</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-serif font-light tracking-tighter mb-6 uppercase">
                        The Psychology <span className="text-white/20">Arena</span>
                    </h2>
                    <p className="text-text-dim text-lg leading-relaxed font-light">
                        Meet the 5 Simulated Speakers testing current participants on "Risk & Greed". They push you to simulate the architecture of trading mastery.
                    </p>
                </div>
                <button className="px-10 py-4 bg-accent text-bg font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-white transition-all">
                    Enter Simulation
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-0 border border-border">
                {speakers.map((s, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="p-10 border-r last:border-r-0 border-border bg-white/[0.01] flex flex-col h-full min-h-[360px] group transition-all duration-500"
                    >
                        <div className="text-white/10 group-hover:text-accent transition-colors mb-10">
                            {s.icon}
                        </div>
                        
                        <h3 className="text-[14px] font-serif font-light uppercase tracking-widest mb-2 text-accent">{s.name}</h3>
                        <p className="text-[9px] font-sans tracking-[0.2em] opacity-40 mb-10 uppercase italic">{s.role}</p>
                        
                        <p className="text-[12px] font-sans font-light italic leading-relaxed text-text-dim mt-auto">
                           "{s.quote}"
                        </p>
                    </motion.div>
                ))}
            </div>
       </div>
    </section>
  );
}

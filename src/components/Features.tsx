import { motion } from 'motion/react';
import { Video, Cpu, Brain, BookOpen, Calculator, LayoutPanelTop } from 'lucide-react';

const features = [
  {
    icon: <Video size={32} />,
    title: "Video Academy",
    desc: "Access 260+ premium masterclasses in English, covering everything from foundation to institutional strategies.",
    stat: "260+ Videos"
  },
  {
    icon: <Cpu size={32} />,
    title: "Market Analysis AI",
    desc: "Proprietary AI tools that process millions of data points to highlight high-probability market opportunities.",
    stat: "Real-time"
  },
  {
    icon: <Brain size={32} />,
    title: "AI Mentor",
    desc: "A personalized AI trainer available 24/7 to answer your complex questions and review your strategies.",
    stat: "Always Live"
  },
  {
    icon: <BookOpen size={32} />,
    title: "Intelligent Diary",
    desc: "An advanced trading journal that uses AI to analyze your performance and emotional patterns.",
    stat: "Smart Logging"
  },
  {
    icon: <Calculator size={32} />,
    title: "Risk Calculator",
    desc: "Precision engineering for your positioning. Calculate risk-to-reward ratios and lot sizes instantly.",
    stat: "Zero Error"
  },
  {
    icon: <LayoutPanelTop size={32} />,
    title: "Social Wall",
    desc: "A collaborative hub moderated by AI to ensure high-quality insights and authentic community sharing.",
    stat: "Moderated"
  }
];

export default function Features() {
  return (
    <section id="tools" className="py-32 bg-surface relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                <div className="max-w-2xl">
                    <h2 className="text-4xl md:text-6xl font-serif font-light mb-6 tracking-tighter">
                        Proprietary <span className="text-accent italic">Engine</span>
                    </h2>
                    <p className="text-text-dim text-lg font-light leading-relaxed">
                        We don't just teach trading; we provide the professional-grade toolset used by institutional players.
                    </p>
                </div>
                <div className="hidden md:block">
                    <button className="px-8 py-3 border border-border text-[10px] font-sans uppercase tracking-widest hover:bg-white hover:text-bg transition-all">
                        View Ecosystem
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-border">
                {features.map((f, i) => (
                    <motion.div 
                        key={i}
                        whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.02)" }}
                        className="p-12 border-b border-r border-border bg-transparent transition-colors group cursor-default"
                    >
                        <div className="text-white/20 group-hover:text-accent transition-colors mb-8">
                            {f.icon}
                        </div>
                        <h3 className="text-[13px] font-sans font-bold mb-4 uppercase tracking-[0.2em] text-accent/80 group-hover:text-accent transition-colors">{f.title}</h3>
                        <p className="text-[12px] text-text-dim font-light leading-relaxed mb-8 min-h-[60px]">
                            {f.desc}
                        </p>
                        <span className="text-[9px] font-mono text-white/20 uppercase tracking-[0.2em]">
                            {f.stat}
                        </span>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
}

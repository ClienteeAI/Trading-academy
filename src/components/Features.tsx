import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { useRef } from 'react';
import { Video, Cpu, Brain, BookOpen, Calculator, LayoutPanelTop } from 'lucide-react';

const features = [
  {
    icon: <Video size={32} />,
    title: "Video Academy",
    desc: "Access 260+ premium masterclasses in English, covering everything from foundation to institutional strategies.",
    stat: "260+ Videos",
    step: "01"
  },
  {
    icon: <Cpu size={32} />,
    title: "Market Analysis AI",
    desc: "Proprietary AI tools that process millions of data points to highlight high-probability market opportunities.",
    stat: "Real-time",
    step: "02"
  },
  {
    icon: <Brain size={32} />,
    title: "AI Mentor",
    desc: "A personalized AI trainer available 24/7 to answer your complex questions and review your strategies.",
    stat: "Always Live",
    step: "03"
  },
  {
    icon: <BookOpen size={32} />,
    title: "Intelligent Diary",
    desc: "An advanced trading journal that uses AI to analyze your performance and emotional patterns.",
    stat: "Smart Logging",
    step: "04"
  },
  {
    icon: <Calculator size={32} />,
    title: "Risk Calculator",
    desc: "Precision engineering for your positioning. Calculate risk-to-reward ratios and lot sizes instantly.",
    stat: "Zero Error",
    step: "05"
  },
  {
    icon: <LayoutPanelTop size={32} />,
    title: "Social Wall",
    desc: "A collaborative hub moderated by AI to ensure high-quality insights and authentic community sharing.",
    stat: "Moderated",
    step: "06"
  }
];

export default function Features() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Smoothing out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="tools" ref={containerRef} className="py-60 bg-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-10">
            <div className="max-w-2xl mb-32 relative z-10">
                <span className="text-accent font-sans text-[10px] uppercase tracking-[4px] mb-4 block">Engineered for Mastery</span>
                <h2 className="text-5xl md:text-7xl font-serif font-light mb-8 tracking-tighter">
                    Proprietary <span className="text-accent italic">Engine</span>
                </h2>
                <p className="text-text-dim text-lg font-light leading-relaxed">
                    We don't just teach trading; we provide the professional-grade toolset used by institutional players. Ascend through the ecosystem.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-1 relative min-h-[600px] lg:items-end">
                {features.map((f, i) => (
                    <FeatureCard 
                        key={i} 
                        feature={f} 
                        index={i} 
                        progress={smoothProgress} 
                    />
                ))}
            </div>
        </div>

        {/* Decorative background text */}
        <div className="absolute top-1/2 left-0 w-full select-none pointer-events-none opacity-[0.02] transform -translate-y-1/2">
             <span className="text-[30vw] font-bold whitespace-nowrap leading-none">THE ECOSYSTEM</span>
        </div>
    </section>
  );
}

function FeatureCard({ feature, index, progress }: { feature: any, index: number, progress: any }) {
    // Each card rises more than the previous one
    // Max rise for the last card is -200px
    const y = useTransform(progress, [0, 1], [0, index * -40]);
    
    return (
        <motion.div 
            style={{ y }}
            className="flex-1 relative min-h-[450px] bg-white/[0.02] backdrop-blur-3xl border border-white/5 p-10 flex flex-col justify-between group hover:bg-white/[0.04] transition-colors duration-500 overflow-hidden"
        >
            {/* Massive Background Number */}
            <span className="absolute -top-10 -right-10 text-[10rem] font-bold text-white/[0.03] leading-none select-none pointer-events-none group-hover:text-accent/[0.03] transition-colors">
                {feature.step}
            </span>

            <div className="relative z-10">
                <div className="text-accent mb-10 transform group-hover:scale-110 transition-transform duration-500">
                    {feature.icon}
                </div>
                <h3 className="text-[13px] font-sans font-bold mb-4 uppercase tracking-[0.2em] text-white/90 group-hover:text-accent transition-colors">
                    {feature.title}
                </h3>
                <p className="text-[12px] text-text-dim font-light leading-relaxed max-w-[200px]">
                    {feature.desc}
                </p>
            </div>

            <div className="relative z-10 pt-10 border-t border-white/5 flex justify-between items-center">
                <span className="text-[9px] font-mono text-white/20 uppercase tracking-[0.2em]">
                    {feature.stat}
                </span>
                <span className="text-[10px] text-accent font-bold opacity-0 group-hover:opacity-100 transition-opacity">Level {feature.step}</span>
            </div>

            {/* Subtle glow effect */}
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent/5 blur-[80px] rounded-full group-hover:bg-accent/10 transition-colors" />
        </motion.div>
    );
}

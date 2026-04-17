import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { ChevronDown, PlayCircle } from 'lucide-react';

interface HeroDeck {
  label: string;
  headline: React.ReactNode;
  description: string;
  videoSrc: string;
  features: { title: string; desc: string }[];
}

const decks: HeroDeck[] = [
  {
    label: "The Future of Market Education",
    headline: <>Mastering the<br/>Internal Game</>,
    description: "Experience the world's first AI-driven academy focused on the architecture of trading psychology. Beyond technical analysis—we rebuild your mind for the arena.",
    videoSrc: "/hero-trading.mp4",
    features: [
      { title: "The Arena", desc: "Simulate high-pressure scenarios with 5 AI psychological archetypes." },
      { title: "AI Calculator", desc: "Precise risk distribution and position sizing at your fingertips." },
      { title: "Smart Diary", desc: "An AI-monitored journal that analyzes your emotional patterns." },
      { title: "Mentor AI", desc: "24/7 personalized coaching based on your specific trading data." }
    ]
  },
  {
    label: "The Cost of Unpreparedness",
    headline: <>Don't Be Left<br/>In The Blur</>,
    description: "The markets move faster than human emotion can process. While the world moves at breakneck speeds, most traders are lost in the velocity. Stop reacting. Start anticipating.",
    videoSrc: "/hero-market-speed.mp4",
    features: [
      { title: "Velocity Check", desc: "Live feed analyzing market speed against your psychological baseline." },
      { title: "Speed Mastery", desc: "Training modules focused on high-speed decision making." },
      { title: "Cognitive Load", desc: "Monitor your mental bandwidth during periods of extreme volatility." },
      { title: "Stillness Training", desc: "Learn to remain calm and objective while the charts explode." }
    ]
  }
];

const TIMER_DURATION = 15000;

export default function Hero() {
  const [currentDeckIndex, setCurrentDeckIndex] = useState(0);
  const activeDeck = decks[currentDeckIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDeckIndex((prev) => (prev + 1) % decks.length);
    }, TIMER_DURATION);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[768px] flex items-center pt-20 overflow-hidden bg-bg">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentDeckIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          {/* Diagonal Video Section */}
          <div 
            className="absolute inset-0 z-0 overflow-hidden"
            style={{ 
              clipPath: 'polygon(66.6% 0, 100% 0, 100% 100%, 33.3% 100%)',
              backgroundColor: '#111'
            }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover opacity-60"
              src={activeDeck.videoSrc}
            />
            {/* Gold Overlay */}
            <div className="absolute inset-0 bg-accent/10 mix-blend-overlay pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-l from-bg/20 via-transparent to-bg z-10" />
          </div>

          {/* Left Content Area Background (Darkening) */}
          <div className="absolute inset-0 z-[-1] bg-bg" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          {/* Left Side: Text */}
          <motion.div
            key={`text-${currentDeckIndex}`}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="lg:w-3/5"
          >
            <span className="hero-label uppercase tracking-[4px] text-[11px] text-accent font-sans mb-4 block">
              {activeDeck.label}
            </span>
            <h1 className="text-[64px] md:text-[84px] font-serif font-light mb-6 leading-[1.1] tracking-tighter">
              {activeDeck.headline}
            </h1>
            <p className="text-lg text-text-dim max-w-lg mb-10 font-sans font-light leading-relaxed">
              {activeDeck.description}
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

          {/* Right Side: Features Overlaying Video */}
          <motion.div 
              key={`features-${currentDeckIndex}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="lg:w-2/5 grid grid-cols-2 gap-4 relative"
          >
              {activeDeck.features.map((f, i) => (
                  <div key={i} className="bg-white/[0.03] backdrop-blur-md border border-white/5 p-6 rounded-sm hover:border-accent/30 transition-colors group cursor-default">
                      <h3 className="font-serif text-accent text-[13px] uppercase tracking-widest mb-3 group-hover:text-white transition-colors">{f.title}</h3>
                      <p className="text-[11px] text-text-dim leading-relaxed">{f.desc}</p>
                  </div>
              ))}
          </motion.div>
        </div>
      </div>

      {/* Progress Indicator Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-4">
        {decks.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentDeckIndex(i)}
            className={`h-1 transition-all duration-1000 ${i === currentDeckIndex ? 'w-12 bg-accent' : 'w-4 bg-white/20'}`}
          />
        ))}
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

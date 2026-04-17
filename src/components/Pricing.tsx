import { motion } from 'motion/react';
import { Check, Rocket, Landmark } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 bg-surface relative overflow-hidden flex items-center justify-center">
       <div className="max-w-7xl mx-auto px-10 relative z-10 w-full">
            <div className="text-center mb-24">
                <h2 className="text-5xl md:text-7xl font-serif font-light italic tracking-tight mb-8">
                    Select Your <span className="text-accent underline decoration-accent/10 underline-offset-12">Trajectory</span>
                </h2>
                <p className="text-text-dim max-w-2xl mx-auto text-lg leading-relaxed font-light italic">
                    Whether you're laying the first stone or reaching for the cosmos, we have the path ready.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row items-stretch border border-border bg-bg">
                {/* Foundation Tier */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="flex-1 p-16 flex flex-col border-b lg:border-b-0 lg:border-r border-border group"
                >
                    <div className="mb-12">
                        <span className="text-[10px] uppercase tracking-[4px] text-accent font-sans mb-4 block">The Foundation Stone</span>
                        <h3 className="text-4xl font-serif font-light uppercase tracking-tighter mb-4 italic">Free Access</h3>
                        <p className="text-text-dim text-sm font-light">The fundamental building block for every beginner.</p>
                    </div>

                    <div className="space-y-6 mb-16 flex-grow">
                        {["Introduction to Markets", "Psychology Basics", "Risk Management 101", "Nexus Platform Tour", "Community Access"].map((feat, i) => (
                            <div key={i} className="flex items-center gap-4 text-text-dim text-[13px]">
                                <div className="w-1.5 h-1.5 rounded-full bg-accent/30 shrink-0" />
                                <span className="font-light">{feat}</span>
                            </div>
                        ))}
                    </div>

                    <button className="w-full py-4 border border-border text-[10px] uppercase font-bold tracking-[0.3em] hover:bg-white hover:text-bg transition-all">
                        Begin Foundation
                    </button>
                </motion.div>

                {/* Cosmic Tier */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="flex-1 p-16 flex flex-col border-border relative overflow-hidden group bg-accent/[0.02]"
                >
                    <div className="mb-12">
                        <span className="text-[10px] uppercase tracking-[4px] text-accent font-sans mb-4 block">Cosmos Elite</span>
                        <div className="flex items-baseline gap-4 mb-4">
                            <h3 className="text-4xl font-serif font-light uppercase tracking-tighter italic">€2,490</h3>
                            <span className="text-[10px] font-mono text-accent/50 uppercase">Lifetime</span>
                        </div>
                        <p className="text-text-dim text-sm font-light">Complete psychological warfare training & tools.</p>
                    </div>

                    <div className="space-y-6 mb-16 flex-grow">
                        {[
                            "260+ Modular Video Lectures",
                            "Full Psychology Arena Access",
                            "Proprietary AI Analytics Suite",
                            "Direct 1-on-1 AI Mentor Calls",
                            "Smart Trading Diary Integration",
                            "Institutional Risk Engine",
                            "Partner Exchange Benefits"
                        ].map((feat, i) => (
                            <div key={i} className="flex items-center gap-4 text-white text-[13px]">
                                <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                                <span className="font-light">{feat}</span>
                            </div>
                        ))}
                    </div>

                    <button className="w-full py-4 bg-accent text-bg font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-white transition-all shadow-xl shadow-accent/5">
                        Ascend to Elite
                    </button>
                </motion.div>
            </div>
       </div>
    </section>
  );
}

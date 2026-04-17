import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Video, Cpu, Brain, BookOpen, Calculator, LayoutPanelTop } from 'lucide-react';

const featureIcons = [
  <Video size={32} />,
  <Cpu size={32} />,
  <Brain size={32} />,
  <BookOpen size={32} />,
  <Calculator size={32} />,
  <LayoutPanelTop size={32} />
];

export default function Features() {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const featureKeys = ["01", "02", "03", "04", "05", "06"];

  return (
    <section id="tools" ref={containerRef} className="py-60 bg-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-10">
            <div className="max-w-2xl mb-32 relative z-10">
                <span className="text-accent font-sans text-[10px] uppercase tracking-[4px] mb-4 block">{t('features.label')}</span>
                <h2 className="text-5xl md:text-7xl font-serif font-light mb-8 tracking-tighter">
                    Proprietary <span className="text-accent italic">Engine</span>
                </h2>
                <p className="text-text-dim text-lg font-light leading-relaxed">
                    {t('features.description')}
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-1 relative min-h-[600px] lg:items-end">
                {featureKeys.map((key, i) => (
                    <FeatureCard 
                        key={key} 
                        featureKey={key}
                        icon={featureIcons[i]}
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

function FeatureCard({ featureKey, icon, index, progress }: { featureKey: string, icon: any, index: number, progress: any }) {
    const { t } = useTranslation();
    const y = useTransform(progress, [0, 1], [0, index * -40]);
    
    return (
        <motion.div 
            style={{ y }}
            className="flex-1 relative min-h-[450px] bg-white/[0.02] backdrop-blur-3xl border border-white/5 p-10 flex flex-col justify-between group hover:bg-white/[0.04] transition-colors duration-500 overflow-hidden"
        >
            <span className="absolute -top-10 -right-10 text-[10rem] font-bold text-white/[0.03] leading-none select-none pointer-events-none group-hover:text-accent/[0.03] transition-colors">
                {featureKey}
            </span>

            <div className="relative z-10">
                <div className="text-accent mb-10 transform group-hover:scale-110 transition-transform duration-500">
                    {icon}
                </div>
                <h3 className="text-[13px] font-sans font-bold mb-4 uppercase tracking-[0.2em] text-white/90 group-hover:text-accent transition-colors">
                    {t(`features.steps.${featureKey}.title`)}
                </h3>
                <p className="text-[12px] text-text-dim font-light leading-relaxed max-w-[200px]">
                    {t(`features.steps.${featureKey}.desc`)}
                </p>
            </div>

            <div className="relative z-10 pt-10 border-t border-white/5 flex justify-between items-center">
                <span className="text-[9px] font-mono text-white/20 uppercase tracking-[0.2em]">
                    {t(`features.steps.${featureKey}.stat`)}
                </span>
                <span className="text-[10px] text-accent font-bold opacity-0 group-hover:opacity-100 transition-opacity">{t('features.level')} {featureKey}</span>
            </div>

            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent/5 blur-[80px] rounded-full group-hover:bg-accent/10 transition-colors" />
        </motion.div>
    );
}

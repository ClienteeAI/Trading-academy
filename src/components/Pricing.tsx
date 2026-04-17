import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Check, Rocket, Landmark } from 'lucide-react';

export default function Pricing() {
  const { t } = useTranslation();
  
  const foundationFeatures = t('pricing.foundation.features', { returnObjects: true }) as string[];
  const cosmicFeatures = t('pricing.cosmic.features', { returnObjects: true }) as string[];

  return (
    <section id="pricing" className="py-32 bg-surface relative overflow-hidden flex items-center justify-center">
       <div className="max-w-7xl mx-auto px-10 relative z-10 w-full">
            <div className="text-center mb-24">
                <h2 className="text-5xl md:text-7xl font-serif font-light italic tracking-tight mb-8">
                    {t('pricing.title').split(' ').map((word, i) => (
                      word.toLowerCase() === 'trajectory' ? <span key={i} className="text-accent underline decoration-accent/10 underline-offset-12"> {word}</span> : word + ' '
                    ))}
                </h2>
                <p className="text-text-dim max-w-2xl mx-auto text-lg leading-relaxed font-light italic">
                    {t('pricing.description')}
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
                        <span className="text-[10px] uppercase tracking-[4px] text-accent font-sans mb-4 block">{t('pricing.foundation.label')}</span>
                        <h3 className="text-4xl font-serif font-light uppercase tracking-tighter mb-4 italic">{t('pricing.foundation.title')}</h3>
                        <p className="text-text-dim text-sm font-light">{t('pricing.foundation.desc')}</p>
                    </div>

                    <div className="space-y-6 mb-16 flex-grow">
                        {foundationFeatures.map((feat, i) => (
                            <div key={i} className="flex items-center gap-4 text-text-dim text-[13px]">
                                <div className="w-1.5 h-1.5 rounded-full bg-accent/30 shrink-0" />
                                <span className="font-light">{feat}</span>
                            </div>
                        ))}
                    </div>

                    <button className="w-full py-4 border border-border text-[10px] uppercase font-bold tracking-[0.3em] hover:bg-white hover:text-bg transition-all">
                        {t('pricing.foundation.cta')}
                    </button>
                </motion.div>

                {/* Cosmic Tier */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="flex-1 p-16 flex flex-col border-border relative overflow-hidden group bg-accent/[0.02]"
                >
                    <div className="mb-12">
                        <span className="text-[10px] uppercase tracking-[4px] text-accent font-sans mb-4 block">{t('pricing.cosmic.label')}</span>
                        <div className="flex items-baseline gap-4 mb-4">
                            <h3 className="text-4xl font-serif font-light uppercase tracking-tighter italic">{t('pricing.cosmic.title')}</h3>
                            <span className="text-[10px] font-mono text-accent/50 uppercase">{t('pricing.cosmic.lifetime')}</span>
                        </div>
                        <p className="text-text-dim text-sm font-light">{t('pricing.cosmic.desc')}</p>
                    </div>

                    <div className="space-y-6 mb-16 flex-grow">
                        {cosmicFeatures.map((feat, i) => (
                            <div key={i} className="flex items-center gap-4 text-white text-[13px]">
                                <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                                <span className="font-light">{feat}</span>
                            </div>
                        ))}
                    </div>

                    <button className="w-full py-4 bg-accent text-bg font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-white transition-all shadow-xl shadow-accent/5">
                        {t('pricing.cosmic.cta')}
                    </button>
                </motion.div>
            </div>
       </div>
    </section>
  );
}

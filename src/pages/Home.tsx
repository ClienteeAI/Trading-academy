import Hero from '../components/Hero';
import Features from '../components/Features';
import PsychologyArena from '../components/PsychologyArena';
import Pricing from '../components/Pricing';
import SocialWall from '../components/SocialWall';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();

  return (
    <main>
      <Hero />
      
      {/* Education Highlight Section */}
      <section id="education" className="py-32 bg-bg flex items-center justify-center border-y border-border">
          <div className="max-w-4xl mx-auto px-10 text-center">
               <h3 className="text-accent font-sans text-[10px] uppercase tracking-[0.4em] mb-8">The Foundation Stone</h3>
               <p className="text-3xl md:text-5xl font-serif font-light leading-snug">
                  "If you build a building, you start with the first stone which holds it all together. <span className="text-white/30 italic">That's our mastery."</span>
               </p>
          </div>
      </section>

      <Features />
      
      <PsychologyArena />
      
      <Pricing />
      
      <SocialWall />
    </main>
  );
}

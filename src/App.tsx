/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import PsychologyArena from './components/PsychologyArena';
import Pricing from './components/Pricing';
import SocialWall from './components/SocialWall';
import Footer from './components/Footer';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative selection:bg-accent selection:text-space-black">
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-20 left-0 right-0 h-[2px] bg-accent z-50 origin-[0%]"
        style={{ scaleX }}
      />

      <Navbar />
      
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

      <Footer />
    </div>
  );
}

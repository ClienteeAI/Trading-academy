import { motion } from 'motion/react';
import { Menu, X, Rocket, Zap } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-4">
            <span className="text-xl font-serif font-light tracking-[0.2em] uppercase">AI Academy</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-12 text-[11px] font-sans uppercase tracking-[0.15em] text-text-dim">
            <a href="#education" className="hover:text-accent transition-colors">260+ Lessons</a>
            <a href="#tools" className="hover:text-accent transition-colors">AI Tools</a>
            <a href="#arena" className="hover:text-accent transition-colors">Arena</a>
            <a href="#pricing" style={{ color: 'var(--color-accent)' }} className="transition-colors">Account Partners</a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-surface border-b border-border px-10 pt-4 pb-10 flex flex-col space-y-6 text-center uppercase text-[11px] tracking-widest text-text-dim"
        >
          <a href="#education" onClick={() => setIsOpen(false)}>Lessons</a>
          <a href="#tools" onClick={() => setIsOpen(false)}>AI Tools</a>
          <a href="#arena" onClick={() => setIsOpen(false)}>Arena</a>
          <a href="#pricing" className="text-accent" onClick={() => setIsOpen(false)}>Account Partners</a>
        </motion.div>
      )}
    </nav>
  );
}

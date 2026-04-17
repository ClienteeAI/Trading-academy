import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'cs', name: 'Čeština', flag: '🇨🇿' },
  { code: 'pl', name: 'Polski', flag: '🇵🇱' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLangs, setShowLangs] = useState(false);
  const { t, i18n } = useTranslation();
  const langRef = useRef<HTMLDivElement>(null);

  const currentLang = languages.find(l => l.code === i18n.language.split('-')[0]) || languages[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setShowLangs(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-4">
            <span className="text-xl font-serif font-light tracking-[0.2em] uppercase">AI Academy</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-12 text-[11px] font-sans uppercase tracking-[0.15em] text-text-dim">
            <a href="#education" className="hover:text-accent transition-colors">{t('nav.lessons')}</a>
            <a href="#tools" className="hover:text-accent transition-colors">{t('nav.tools')}</a>
            <a href="#arena" className="hover:text-accent transition-colors">{t('nav.arena')}</a>
            <a href="#pricing" style={{ color: 'var(--color-accent)' }} className="transition-colors">{t('nav.partners')}</a>
            
            {/* Language Switcher */}
            <div className="relative" ref={langRef}>
              <button 
                onClick={() => setShowLangs(!showLangs)}
                className="flex items-center gap-2 px-3 py-1.5 border border-border bg-white/[0.02] hover:bg-white/[0.05] transition-colors rounded-sm"
              >
                <Globe size={14} className="text-accent" />
                <span className="text-[9px] font-bold">{currentLang.code.toUpperCase()}</span>
                <ChevronDown size={10} className={`transform transition-transform ${showLangs ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {showLangs && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 p-1 bg-surface border border-border shadow-2xl min-w-[120px]"
                  >
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => {
                          i18n.changeLanguage(l.code);
                          setShowLangs(false);
                        }}
                        className={`w-full text-left px-4 py-2 hover:bg-accent/10 transition-colors flex items-center justify-between group ${i18n.language === l.code ? 'text-accent' : 'text-text-dim'}`}
                      >
                        <span className="text-[10px] uppercase font-bold tracking-widest">{l.name}</span>
                        <span className="text-xs group-hover:scale-125 transition-transform">{l.flag}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={() => {
                const codes = languages.map(l => l.code);
                const nextIdx = (codes.indexOf(i18n.language.split('-')[0]) + 1) % codes.length;
                i18n.changeLanguage(codes[nextIdx]);
              }}
              className="text-accent text-[10px] font-bold border border-accent/20 px-2 py-1"
            >
              {currentLang.code.toUpperCase()}
            </button>
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
          <a href="#education" onClick={() => setIsOpen(false)}>{t('nav.lessons')}</a>
          <a href="#tools" onClick={() => setIsOpen(false)}>{t('nav.tools')}</a>
          <a href="#arena" onClick={() => setIsOpen(false)}>{t('nav.arena')}</a>
          <a href="#pricing" className="text-accent" onClick={() => setIsOpen(false)}>{t('nav.partners')}</a>
        </motion.div>
      )}
    </nav>
  );
}

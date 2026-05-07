import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ChevronDown, ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { dictionaryData, dictionaryCategories, DictionaryTerm } from '../data/dictionaryData';

export default function Dictionary() {
  const { t, i18n } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategory, setExpandedCategory] = useState<number | null>(1);
  const currentLang = (i18n.language.split('-')[0] || 'en') as 'en' | 'cs' | 'pl';

  const filteredData = useMemo(() => {
    return dictionaryData.filter(term => 
      term.title[currentLang].toLowerCase().includes(searchQuery.toLowerCase()) ||
      term.description[currentLang].toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, currentLang]);

  const categoriesWithTerms = useMemo(() => {
    const categories = Object.keys(dictionaryCategories).map(Number);
    return categories.map(catId => ({
      id: catId,
      name: (dictionaryCategories as any)[catId][currentLang],
      terms: filteredData.filter(t => t.category === catId)
    })).filter(cat => cat.terms.length > 0);
  }, [filteredData, currentLang]);

  return (
    <div className="bg-bg min-h-screen">
      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-10">
          {/* Header */}
          <div className="mb-20">
            <span className="text-accent font-sans text-[10px] uppercase tracking-[4px] mb-4 block">Finademica Academy</span>
            <h1 className="text-5xl md:text-7xl font-serif font-light mb-8 tracking-tighter">
              {t('nav.dictionary')}
            </h1>
            <p className="text-text-dim text-lg font-light max-w-2xl leading-relaxed">
              {currentLang === 'cs' ? 'Komplexní průvodce světem tradingu. Od základních pojmů až po pokročilé institucionální strategie.' : 
               currentLang === 'pl' ? 'Kompleksowy przewodnik po świecie tradingu. Od podstawowych pojęć po zaawansowane strategie instytucjonalne.' :
               'A comprehensive guide to the world of trading. From basic concepts to advanced institutional strategies.'}
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative mb-16 max-w-2xl">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20" size={20} />
            <input 
              type="text" 
              placeholder={currentLang === 'cs' ? 'Hledat pojem...' : currentLang === 'pl' ? 'Szukaj pojęcia...' : 'Search terms...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/[0.02] border border-white/10 rounded-sm py-5 pl-16 pr-8 text-white focus:outline-none focus:border-accent/50 transition-colors font-light tracking-wide"
            />
          </div>

          {/* Categories Grid (Bricks) */}
          <div className="grid grid-cols-1 gap-6">
            {categoriesWithTerms.map((cat) => (
              <div key={cat.id} className="border border-white/5 bg-white/[0.01]">
                <button 
                  onClick={() => setExpandedCategory(expandedCategory === cat.id ? null : cat.id)}
                  className="w-full px-8 py-8 flex items-center justify-between hover:bg-white/[0.03] transition-colors group"
                >
                  <div className="flex items-center gap-6">
                    <span className="text-accent/30 font-mono text-sm">{String(cat.id).padStart(2, '0')}</span>
                    <h3 className="text-xl font-serif tracking-tight group-hover:text-accent transition-colors">{cat.name}</h3>
                  </div>
                  <ChevronDown className={`text-white/20 transform transition-transform duration-500 ${expandedCategory === cat.id ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {expandedCategory === cat.id && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-2">
                        {cat.terms.map((term) => (
                          <TermItem key={term.id} term={term} lang={currentLang} />
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {searchQuery && categoriesWithTerms.length === 0 && (
            <div className="py-20 text-center border border-dashed border-white/10">
              <p className="text-text-dim italic font-light">
                {currentLang === 'cs' ? 'Žádné výsledky pro váš dotaz.' : currentLang === 'pl' ? 'Brak wyników dla Twojego zapytania.' : 'No results found for your search.'}
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

function TermItem({ term, lang }: { term: DictionaryTerm, lang: 'en' | 'cs' | 'pl' }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="py-4 border-b border-white/5 last:border-0 relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link 
        to={`/blog/${term.slug}`}
        className="flex items-center justify-between cursor-pointer group/link"
      >
        <span className="text-[13px] font-sans tracking-wide text-white/80 group-hover:text-accent transition-colors">
          {term.title[lang]}
        </span>
        <ArrowRight size={12} className="text-accent opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
      </Link>

      <AnimatePresence>
        {isHovered && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute z-[100] top-full left-0 w-full md:w-[320px] bg-surface border border-accent/30 p-6 shadow-2xl mt-2 backdrop-blur-2xl rounded-sm"
            style={{ pointerEvents: 'none' }} // Tooltip shouldn't block clicking the link
          >
            <div className="mb-4">
              <span className="text-[10px] uppercase tracking-widest text-accent font-bold mb-2 block">Definice</span>
              <p className="text-xs text-text-dim leading-relaxed italic">
                {term.description[lang]}
              </p>
            </div>
            <div className="flex items-center gap-2 text-[9px] uppercase tracking-widest text-accent/60">
              <BookOpen size={10} />
              Klikněte pro hloubkovou analýzu
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

import { useTranslation } from 'react-i18next';
import { Rocket, Github, Twitter, Linkedin, ExternalLink, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const partners = [
  { name: "Global Prime", url: "#", logo: "GP" },
  { name: "IC Markets", url: "#", logo: "IC" },
  { name: "Pepperstone", url: "#", logo: "PS" },
  { name: "Vantage", url: "#", logo: "VT" }
];

export default function Footer() {
  const { t } = useTranslation();
  const [activeModal, setActiveModal] = useState<string | null>(null);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeModal]);

  const modals: Record<string, { title: string, content: React.ReactNode }> = {
    terms: {
      title: "TERMS AND CONDITIONS",
      content: (
        <div className="space-y-4 text-sm text-text-dim font-sans font-light leading-relaxed">
          <p className="font-bold text-white text-base">Ben Consult s.r.o.</p>
          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">1. General Information</h3>
          <p>These Terms and Conditions (“Terms”) govern the use of the website and services provided by Ben Consult s.r.o., with its registered office at Příčná 1892/4, Nové Město, 110 00 Praha 1, Czech Republic, Company ID: 14292475 (hereinafter “Company”, “we”, “us”).</p>
          <p>By accessing this website or using our services, you agree to these Terms.</p>
          
          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">2. Nature of Services</h3>
          <p>The Company provides:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Educational content related to trading and investing</li>
            <li>Online courses, videos, and tools</li>
            <li>General financial information</li>
          </ul>
          
          <div className="bg-accent/10 border border-accent/20 p-4 rounded-sm my-6">
            <p className="text-accent font-bold mb-2">⚠️ Important:</p>
            <p className="text-white/80">All content is for educational purposes only and does not constitute financial advice.</p>
          </div>
          
          <p>We do NOT:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Provide investment recommendations</li>
            <li>Manage funds</li>
            <li>Execute trades on behalf of users</li>
          </ul>

          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">3. Risk Disclaimer</h3>
          <p>Trading financial instruments (Forex, stocks, crypto, etc.) involves high risk.</p>
          <p>You acknowledge that:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>You may lose all invested capital</li>
            <li>Past performance does not guarantee future results</li>
            <li>You are fully responsible for your decisions</li>
          </ul>

          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">4. User Responsibilities</h3>
          <p>You agree:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>To use the website lawfully</li>
            <li>Not to misuse or attempt to hack the system</li>
            <li>Not to redistribute paid content without permission</li>
          </ul>

          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">5. Intellectual Property</h3>
          <p>All content (videos, text, branding, tools) is owned by Ben Consult s.r.o.</p>
          <p>You may not: Copy, Distribute, or Sell without written consent.</p>

          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">6. Payments & Access</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Some services may be paid</li>
            <li>Access may be limited based on subscription or usage</li>
            <li>The Company reserves the right to modify pricing</li>
          </ul>

          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">7. Limitation of Liability</h3>
          <p>We are NOT liable for:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Financial losses</li>
            <li>Trading results</li>
            <li>Decisions made based on our content</li>
          </ul>
          <p>Use of the platform is at your own risk.</p>

          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">8. Termination</h3>
          <p>We reserve the right to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Suspend or terminate access</li>
            <li>Remove users violating these Terms</li>
          </ul>

          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">9. Governing Law</h3>
          <p>These Terms are governed by the laws of the Czech Republic.</p>

          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">10. Contact</h3>
          <p>Email: <a href="mailto:hey@finademica.com" className="text-accent hover:underline">hey@finademica.com</a></p>
        </div>
      )
    },
    privacy: {
      title: "PRIVACY POLICY",
      content: (
        <div className="space-y-4 text-sm text-text-dim font-sans font-light">
          <p>Awaiting privacy policy content...</p>
        </div>
      )
    },
    cookies: {
      title: "COOKIES POLICY",
      content: (
        <div className="space-y-4 text-sm text-text-dim font-sans font-light">
          <p>Awaiting cookies policy content...</p>
        </div>
      )
    }
  };

  return (
    <>
      <footer className="bg-bg py-16 lg:py-24 border-t border-border relative z-10">
          <div className="max-w-7xl mx-auto px-10">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
                  <div className="md:col-span-2">
                      <div className="flex items-center gap-2 mb-10">
                          <img src="/logo.png" alt="Finademica" className="h-12 w-auto object-contain opacity-90" />
                      </div>
                      <p className="text-text-dim max-w-sm mb-10 font-light italic leading-relaxed text-[13px]">
                          {t('footer.description')}
                      </p>
                      <div className="flex items-center gap-8 text-white/20">
                          <Twitter size={18} className="hover:text-accent cursor-pointer transition-colors" />
                          <Linkedin size={18} className="hover:text-accent cursor-pointer transition-colors" />
                      </div>
                  </div>

                  <div>
                      <h4 className="font-sans font-bold uppercase tracking-[0.3em] text-[9px] mb-10 text-white/40">{t('nav.blog')}</h4>
                      <ul className="space-y-4 text-text-dim text-[11px] uppercase tracking-widest font-light">
                          <li><a href="/blog" className="hover:text-accent transition-colors">{t('nav.blog')}</a></li>
                          <li><a href="/dictionary" className="hover:text-accent transition-colors">{t('nav.dictionary')}</a></li>
                      </ul>
                  </div>

                  <div>
                      <h4 className="font-sans font-bold uppercase tracking-[0.3em] text-[9px] mb-10 text-white/40">{t('footer.work')}</h4>
                      <ul className="space-y-4 text-text-dim text-[11px] uppercase tracking-widest font-light">
                          <li><a href="/career" className="hover:text-accent transition-colors">{t('career.nav')}</a></li>
                      </ul>
                  </div>

                  <div>
                      <h4 className="font-sans font-bold uppercase tracking-[0.3em] text-[9px] mb-10 text-white/40">{t('footer.legal.title')}</h4>
                      <ul className="space-y-4 text-text-dim text-[11px] uppercase tracking-widest font-light">
                          <li onClick={() => setActiveModal('terms')} className="hover:text-white transition-colors cursor-pointer">{t('footer.legal.terms')}</li>
                          <li onClick={() => setActiveModal('privacy')} className="hover:text-white transition-colors cursor-pointer">{t('footer.legal.privacy')}</li>
                          <li onClick={() => setActiveModal('cookies')} className="hover:text-white transition-colors cursor-pointer">Cookies Policy</li>
                      </ul>
                  </div>
              </div>

              <div className="pt-12 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6 text-[9px] font-sans uppercase tracking-[0.4em] text-white/10">
                  <span>{t('footer.rights')}</span>
                  <span className="italic">{t('footer.motto')}</span>
              </div>
          </div>
      </footer>

      {/* Modal Overlay */}
      <AnimatePresence>
        {activeModal && modals[activeModal] && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
              onClick={() => setActiveModal(null)}
            />
            
            {/* Modal Content */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-3xl max-h-[85vh] bg-bg border border-white/10 rounded-sm shadow-2xl flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 sm:p-8 border-b border-white/5 bg-white/[0.02]">
                <h2 className="text-xl sm:text-2xl font-serif font-light text-white tracking-wide">
                  {modals[activeModal].title}
                </h2>
                <button 
                  onClick={() => setActiveModal(null)}
                  className="p-2 text-white/50 hover:text-white hover:bg-white/5 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              {/* Body */}
              <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar">
                {modals[activeModal].content}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

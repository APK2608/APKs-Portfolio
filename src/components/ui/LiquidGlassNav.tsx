import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolio } from '../../data/portfolio';

const navLinks = [
  { id: 'hero', label: 'HOME' },
  { id: 'experience', label: 'EXPERIENCE' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'certifications', label: 'CERTIFICATIONS' },
  { id: 'about', label: 'ABOUT' },
  { id: 'contact', label: 'CONTACT' },
];

export default function LiquidGlassNav() {
  const [active, setActive] = useState('hero');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navLinks.map((l) => document.getElementById(l.id));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i];
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(navLinks[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <>
      {/* Desktop Nav */}
      <nav
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-1 px-4 py-2 rounded-full glass-nav glass-top-edge"
        style={{
          boxShadow: scrolled ? '0 8px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06)' : 'none',
          transition: 'box-shadow 0.3s ease',
        }}
        aria-label="Main navigation"
      >
        <button
          onClick={() => scrollTo('hero')}
          className="font-display text-[10px] tracking-widest mr-4 opacity-60 hover:opacity-100 transition-opacity"
          style={{ color: 'var(--accent)' }}
        >
          A PRAJAN
        </button>

        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => scrollTo(link.id)}
            className={`font-display text-[10px] tracking-widest px-3 py-1.5 rounded-full transition-all duration-200 ${
              active === link.id
                ? 'text-white'
                : 'opacity-50 hover:opacity-80'
            }`}
            style={
              active === link.id
                ? {
                    background: 'rgba(0,212,255,0.12)',
                    color: 'var(--accent)',
                    boxShadow: '0 0 12px rgba(0,212,255,0.2)',
                  }
                : {}
            }
            aria-current={active === link.id ? 'page' : undefined}
          >
            {link.label}
          </button>
        ))}

        {portfolio.resume && (
          <a
            href={portfolio.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-[10px] tracking-widest px-3 py-1.5 rounded-full ml-2 transition-all duration-200 hover:opacity-100 opacity-70"
            style={{
              background: 'rgba(0,212,255,0.08)',
              border: '1px solid rgba(0,212,255,0.3)',
              color: 'var(--accent)',
            }}
          >
            RESUME
          </a>
        )}
      </nav>

      {/* Mobile Menu Button */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="glass-nav glass-top-edge px-4 py-2 rounded-full flex items-center gap-3"
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
        >
          <span className="font-display text-[10px] tracking-widest opacity-70">MENU</span>
          <motion.span
            animate={{ rotate: mobileOpen ? 45 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-sm opacity-70"
          >
            {mobileOpen ? '✕' : '☰'}
          </motion.span>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              className="fixed top-16 right-4 z-50 glass-nav rounded-2xl p-4 flex flex-col gap-1 min-w-[180px] md:hidden"
            >
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`font-display text-[11px] tracking-widest px-4 py-2.5 rounded-xl text-left transition-all duration-200 ${
                    active === link.id
                      ? 'opacity-100'
                      : 'opacity-50 hover:opacity-80'
                  }`}
                  style={
                    active === link.id
                      ? { background: 'rgba(0,212,255,0.1)', color: 'var(--accent)' }
                      : {}
                  }
                >
                  {link.label}
                </button>
              ))}
              {portfolio.resume && (
                <a
                  href={portfolio.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-[11px] tracking-widest px-4 py-2.5 rounded-xl mt-2 text-center transition-all"
                  style={{
                    background: 'rgba(0,212,255,0.1)',
                    border: '1px solid rgba(0,212,255,0.3)',
                    color: 'var(--accent)',
                  }}
                >
                  RESUME
                </a>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

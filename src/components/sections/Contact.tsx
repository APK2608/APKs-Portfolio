import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { portfolio } from '../../data/portfolio';
import {
  Mail, Github, Linkedin, Code2, Instagram, Twitter,
  BookOpen, ChefHat, Globe, Terminal, Award
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  mail: <Mail size={22} />,
  github: <Github size={22} />,
  linkedin: <Linkedin size={22} />,
  leetcode: <Code2 size={22} />,
  instagram: <Instagram size={22} />,
  x: <Twitter size={22} />,
  gfg: <BookOpen size={22} />,
  codechef: <ChefHat size={22} />,
  coddy: <Globe size={22} />,
  'coding-ninjas': <Terminal size={22} />,
  hackerrank: <Award size={22} />,
};

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const apps = portfolio.contactApps;

  return (
    <section
      id="contact"
      ref={ref}
      className="relative w-full py-24 md:py-32"
      style={{ background: 'var(--bg-3)' }}
      aria-label="Contact section"
    >
      {/* Atmospheric glow */}
      <div
        className="absolute inset-x-0 bottom-0 h-64 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 60% at 50% 100%, rgba(0,212,255,0.06) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <p className="font-display text-[11px] tracking-widest mb-3" style={{ color: 'var(--accent)' }}>
            07 / CONTACT
          </p>
          <h2 className="font-display text-4xl md:text-6xl mb-4" style={{ color: 'var(--text-primary)' }}>
            CONNECT
          </h2>
          <p className="text-base" style={{ color: 'var(--text-secondary)' }}>
            Available for opportunities, collaborations, and conversations.
          </p>
          <a
            href={`mailto:${portfolio.email}`}
            className="font-display text-sm tracking-widest mt-3 inline-block hover:text-[var(--accent)] transition-colors"
            style={{ color: 'var(--text-muted)' }}
          >
            {portfolio.email}
          </a>
        </motion.div>

        {/* macOS-style Dock */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          {/* Dock container */}
          <div
            className="glass-nav rounded-3xl px-6 py-5 glass-top-edge"
            style={{
              border: '1px solid var(--glass-border-strong)',
              boxShadow: '0 24px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)',
            }}
          >
            {/* Traffic light dots */}
            <div className="flex items-center gap-1.5 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500 opacity-70" />
              <div className="w-3 h-3 rounded-full bg-yellow-400 opacity-70" />
              <div className="w-3 h-3 rounded-full bg-green-400 opacity-70" />
              <span className="font-display text-[9px] tracking-widest ml-3" style={{ color: 'var(--text-muted)' }}>
                CONNECT · A PRAJAN KUMAR
              </span>
            </div>

            {/* Icon row */}
            <div
              className="flex items-end justify-center gap-4 overflow-x-auto pb-2"
              role="list"
              aria-label="Social links"
            >
              {apps.map((app) => {
                const isHovered = hoveredId === app.id;
                const isDisabled = !app.enabled;

                return (
                  <div
                    key={app.id}
                    className="relative flex flex-col items-center flex-shrink-0"
                    role="listitem"
                  >
                    {/* Tooltip */}
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute -top-10 left-1/2 -translate-x-1/2 glass px-3 py-1 rounded-full whitespace-nowrap z-10"
                        style={{
                          border: '1px solid var(--glass-border)',
                          fontSize: '10px',
                          color: 'var(--text-secondary)',
                          fontFamily: 'var(--font-mono)',
                          letterSpacing: '0.08em',
                        }}
                      >
                        {isDisabled ? `ADD ${app.name.toUpperCase()} URL` : app.name}
                      </motion.div>
                    )}

                    {/* Icon */}
                    <motion.a
                      href={app.enabled ? app.url : undefined}
                      target={app.enabled && !app.url.startsWith('mailto') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="dock-icon flex items-center justify-center rounded-2xl transition-all duration-200"
                      style={{
                        width: '52px',
                        height: '52px',
                        background: isHovered && !isDisabled
                          ? `rgba(${hexToRgb(app.color)}, 0.2)`
                          : 'rgba(255,255,255,0.06)',
                        border: `1px solid ${isHovered && !isDisabled ? `rgba(${hexToRgb(app.color)}, 0.4)` : 'var(--glass-border)'}`,
                        color: isDisabled
                          ? 'rgba(255,255,255,0.2)'
                          : isHovered
                          ? app.color
                          : 'rgba(255,255,255,0.6)',
                        cursor: isDisabled ? 'not-allowed' : 'pointer',
                        transform: isHovered ? 'translateY(-12px) scale(1.3)' : 'scale(1)',
                        boxShadow: isHovered && !isDisabled
                          ? `0 8px 24px rgba(${hexToRgb(app.color)}, 0.3)`
                          : 'none',
                        transition: 'all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
                      }}
                      onMouseEnter={() => setHoveredId(app.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      aria-label={app.name}
                      aria-disabled={isDisabled}
                    >
                      {iconMap[app.id] ?? <Globe size={22} />}
                    </motion.a>
                  </div>
                );
              })}
            </div>

            {/* Dock shelf line */}
            <div
              className="mt-4 h-px w-full rounded-full"
              style={{ background: 'var(--glass-border)' }}
              aria-hidden="true"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Helper to convert hex to rgb string for rgba()
function hexToRgb(hex: string): string {
  const clean = hex.replace('#', '');
  const bigint = parseInt(clean, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r},${g},${b}`;
}

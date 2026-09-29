import { portfolio } from '../../data/portfolio';

export default function Footer() {
  return (
    <footer
      className="relative w-full py-16 text-center"
      style={{ background: 'var(--bg)', borderTop: '1px solid var(--glass-border)' }}
      aria-label="Footer"
    >
      {/* Background marquee */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.02]"
        aria-hidden="true"
      >
        <div className="marquee-container h-full flex items-center">
          <div className="marquee-track">
            {Array.from({ length: 10 }).map((_, i) => (
              <span key={i} className="font-display text-[10vw] whitespace-nowrap px-8 text-white">
                A PRAJAN KUMAR &nbsp;
              </span>
            ))}
            {Array.from({ length: 10 }).map((_, i) => (
              <span key={`r${i}`} className="font-display text-[10vw] whitespace-nowrap px-8 text-white">
                A PRAJAN KUMAR &nbsp;
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="relative max-w-2xl mx-auto px-6">
        <p
          className="font-display text-3xl md:text-4xl mb-3"
          style={{ color: 'var(--text-primary)', letterSpacing: '0.08em' }}
        >
          A PRAJAN KUMAR
        </p>
        <p className="font-display text-[11px] tracking-widest mb-6" style={{ color: 'var(--accent)' }}>
          AI × DATA × CODE × DESIGN
        </p>

        {/* Availability */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ background: '#00ff88' }}
          />
          <span className="font-display text-[10px] tracking-widest" style={{ color: 'rgba(0,255,136,0.8)' }}>
            AVAILABLE FOR OPPORTUNITIES
          </span>
        </div>

        <a
          href={`mailto:${portfolio.email}`}
          className="font-display text-[11px] tracking-widest hover:text-[var(--accent)] transition-colors mb-8 block"
          style={{ color: 'var(--text-muted)' }}
        >
          {portfolio.email}
        </a>

        <div
          className="w-24 h-px mx-auto mb-8"
          style={{ background: 'var(--glass-border)' }}
          aria-hidden="true"
        />

        <p className="font-display text-[9px] tracking-widest" style={{ color: 'var(--text-muted)' }}>
          © {new Date().getFullYear()} A PRAJAN KUMAR · ALL RIGHTS RESERVED
        </p>
        <p className="font-display text-[8px] tracking-widest mt-2 opacity-40" style={{ color: 'var(--text-muted)' }}>
          BUILT WITH REACT · FRAMER MOTION · TAILWIND CSS
        </p>
      </div>
    </footer>
  );
}

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { portfolio } from '../../data/portfolio';

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="experience"
      ref={ref}
      className="relative w-full py-24 md:py-32"
      style={{ background: 'var(--bg-2)' }}
      aria-label="Experience section"
    >
      {/* Background accent */}
      <div
        className="absolute left-0 top-0 w-px h-full pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(0,212,255,0.15), transparent)' }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <p className="font-display text-[11px] tracking-widest mb-3" style={{ color: 'var(--accent)' }}>
            02 / EXPERIENCE
          </p>
          <h2 className="font-display text-4xl md:text-6xl" style={{ color: 'var(--text-primary)' }}>
            EXPERIENCE
          </h2>
          <p className="font-display text-sm tracking-widest mt-3" style={{ color: 'var(--text-muted)' }}>
            BUILDING, LEARNING, LEADING.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div
            className="absolute left-0 top-0 bottom-0 w-px md:left-[160px]"
            style={{ background: 'var(--glass-border)' }}
            aria-hidden="true"
          />

          <div className="flex flex-col gap-0">
            {portfolio.experience.map((exp, i) => {
              const isPlaceholder =
                exp.role.startsWith('[') || exp.organization.startsWith('[');
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.1 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative pl-6 md:pl-[200px] pb-12 ${isPlaceholder ? 'opacity-40' : ''}`}
                >
                  {/* Period label (desktop left side) */}
                  <div
                    className="hidden md:block absolute left-0 top-0 text-right pr-6 w-[150px]"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    <span className="font-display text-[10px] tracking-widest leading-tight">
                      {exp.period}
                    </span>
                  </div>

                  {/* Timeline dot */}
                  <div
                    className="absolute left-[-4px] md:left-[156px] top-1 w-2 h-2 rounded-full"
                    style={{
                      background: exp.current ? 'var(--accent)' : 'var(--glass-border)',
                      boxShadow: exp.current ? '0 0 12px rgba(0,212,255,0.5)' : 'none',
                    }}
                    aria-hidden="true"
                  />

                  {/* Content */}
                  <div
                    className={`glass rounded-2xl p-6 glass-top-edge transition-all duration-300 ${
                      !isPlaceholder ? 'hover:border-[rgba(0,212,255,0.15)]' : ''
                    }`}
                    style={{
                      border: exp.current
                        ? '1px solid rgba(0,212,255,0.2)'
                        : '1px solid var(--glass-border)',
                    }}
                  >
                    {/* Mobile period */}
                    <p className="font-display text-[9px] tracking-widest mb-2 md:hidden" style={{ color: 'var(--text-muted)' }}>
                      {exp.period}
                    </p>

                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h3
                          className="font-display text-base md:text-lg tracking-wide"
                          style={{ color: exp.current ? 'var(--accent)' : 'var(--text-primary)' }}
                        >
                          {exp.role}
                        </h3>
                        <p className="text-sm mt-0.5" style={{ color: 'var(--text-secondary)' }}>
                          {exp.organization}
                        </p>
                      </div>
                      {exp.current && (
                        <span
                          className="font-display text-[9px] tracking-widest px-3 py-1 rounded-full flex items-center gap-1.5"
                          style={{
                            background: 'rgba(0,212,255,0.1)',
                            border: '1px solid rgba(0,212,255,0.3)',
                            color: 'var(--accent)',
                          }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                          CURRENT
                        </span>
                      )}
                    </div>

                    <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                      {exp.description}
                    </p>

                    {exp.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-display text-[9px] tracking-widest px-2.5 py-1 rounded-full"
                            style={{
                              background: 'rgba(255,255,255,0.05)',
                              border: '1px solid var(--glass-border)',
                              color: 'var(--text-muted)',
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

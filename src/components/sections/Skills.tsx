import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { portfolio } from '../../data/portfolio';

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skills = portfolio.skillsFlat;
  // Double array for seamless scrolling effect
  const skillsDouble = [...skills, ...skills];

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const sectionH = section.offsetHeight;
      const windowH = window.innerHeight;

      // How far into the sticky zone are we (0 → 1)
      const progress = Math.max(0, Math.min(1, -rect.top / (sectionH - windowH)));

      // Translate horizontally based on scroll progress
      const maxTranslate = track.scrollWidth / 2 - window.innerWidth;
      const translate = -progress * maxTranslate;
      track.style.transform = `translateX(${translate}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      style={{ height: '300vh', background: 'var(--bg)' }}
      aria-label="Skills section"
    >
      <div ref={stickyRef} className="skills-sticky">
        <div className="w-full h-full flex flex-col justify-center">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="px-6 md:px-12 mb-12"
          >
            <p className="font-display text-[11px] tracking-widest mb-3" style={{ color: 'var(--accent)' }}>
              03 / SKILLS
            </p>
            <h2 className="font-display text-4xl md:text-5xl" style={{ color: 'var(--text-primary)' }}>
              SKILLS
            </h2>
            <p className="font-display text-[10px] tracking-widest mt-2" style={{ color: 'var(--text-muted)' }}>
              SCROLL TO EXPLORE
            </p>
          </motion.div>

          {/* Horizontal Skill Strip */}
          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className="skills-horizontal"
              style={{ willChange: 'transform', transition: 'transform 0.05s linear' }}
            >
              {skillsDouble.map((skill, i) => (
                <motion.button
                  key={`${skill}-${i}`}
                  onHoverStart={() => setHoveredSkill(skill)}
                  onHoverEnd={() => setHoveredSkill(null)}
                  className="relative font-display whitespace-nowrap cursor-default"
                  style={{
                    letterSpacing: '0.08em',
                    color:
                      hoveredSkill === skill
                        ? 'var(--accent)'
                        : 'rgba(255,255,255,0.15)',
                    textShadow:
                      hoveredSkill === skill
                        ? '0 0 30px rgba(0,212,255,0.4)'
                        : 'none',
                    transition: 'color 0.25s ease, text-shadow 0.25s ease, font-size 0.25s ease',
                    fontSize:
                      hoveredSkill === skill
                        ? 'clamp(2.5rem, 6vw, 5rem)'
                        : 'clamp(2rem, 5vw, 4rem)',
                  }}
                  aria-label={`Skill: ${skill}`}
                >
                  {skill}

                  {/* Hover info tooltip */}
                  {hoveredSkill === skill && (
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute -bottom-8 left-1/2 -translate-x-1/2 glass px-3 py-1 rounded-full pointer-events-none whitespace-nowrap"
                      style={{
                        border: '1px solid rgba(0,212,255,0.2)',
                        fontSize: '10px',
                        color: 'var(--accent)',
                        letterSpacing: '0.12em',
                      }}
                    >
                      {skill}
                    </motion.span>
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Category pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="px-6 md:px-12 mt-12 flex flex-wrap gap-3"
          >
            {portfolio.skillCategories.map((cat) => (
              <div
                key={cat.id}
                className="glass px-4 py-2 rounded-xl"
                style={{ border: '1px solid var(--glass-border)' }}
              >
                <p className="font-display text-[9px] tracking-widest mb-1.5" style={{ color: 'var(--accent)' }}>
                  {cat.label}
                </p>
                <div className="flex flex-wrap gap-x-2 gap-y-1">
                  {cat.skills.map((s) => (
                    <span key={s} className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

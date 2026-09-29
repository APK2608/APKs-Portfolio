import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { portfolio } from '../../data/portfolio';
import AssetPlaceholder from '../ui/AssetPlaceholder';

const SECONDARY_IMG = '/assets/profile/profile-secondary.webp';

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="about"
      ref={ref}
      className="relative w-full py-24 md:py-32"
      style={{ background: 'var(--bg)' }}
      aria-label="About section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <p className="font-display text-[11px] tracking-widest mb-3" style={{ color: 'var(--accent)' }}>
            06 / ABOUT & ACHIEVEMENTS
          </p>
          <h2 className="font-display text-4xl md:text-6xl" style={{ color: 'var(--text-primary)' }}>
            ABOUT
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: About text + education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Secondary profile image */}
            <div className="w-48 h-48 rounded-2xl overflow-hidden mb-8 float-right ml-6 mb-2">
              <img
                src={SECONDARY_IMG}
                alt="A Prajan Kumar"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                className="w-full h-full object-cover"
              />
              <AssetPlaceholder type="profile" label="ADD PHOTO" className="w-full h-full" />
            </div>

            <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
              I'm A Prajan Kumar — a motivated and detail-oriented Computer Science student with hands-on experience in full-stack web development using HTML, CSS, JavaScript, React.js, and Node.js.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
              Adept at building responsive user interfaces, working with APIs, and exploring AI & Data Science. I am passionate about software development, continuously learning new technologies, and building scalable, user-centric applications to solve real-world problems.
            </p>

            {/* Education card */}
            <div
              className="glass rounded-2xl p-6 glass-top-edge"
              style={{ border: '1px solid rgba(0,212,255,0.15)' }}
            >
              <p className="font-display text-[10px] tracking-widest mb-3" style={{ color: 'var(--accent)' }}>
                EDUCATION
              </p>
              <h3 className="font-display text-base tracking-wide mb-1" style={{ color: 'var(--text-primary)' }}>
                {portfolio.education.degree}
              </h3>
              <p className="text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>
                {portfolio.education.institution}
              </p>
              <div className="flex gap-6">
                <div>
                  <span className="font-display text-[9px] tracking-widest block mb-0.5" style={{ color: 'var(--text-muted)' }}>PERIOD</span>
                  <span className="font-display text-sm" style={{ color: 'var(--text-primary)' }}>{portfolio.education.period}</span>
                </div>
                <div>
                  <span className="font-display text-[9px] tracking-widest block mb-0.5" style={{ color: 'var(--text-muted)' }}>CGPA</span>
                  <span className="font-display text-sm" style={{ color: 'var(--accent)' }}>{portfolio.education.cgpa}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Achievements grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-display text-[11px] tracking-widest mb-6" style={{ color: 'var(--accent)' }}>
              ACHIEVEMENTS
            </p>
            <div className="grid grid-cols-2 gap-3">
              {portfolio.achievements.map((ach, i) => (
                <motion.div
                  key={ach.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.06 }}
                  className="glass rounded-xl p-4 glass-top-edge transition-all duration-300 hover:border-[rgba(0,212,255,0.15)] group"
                  style={{ border: '1px solid var(--glass-border)' }}
                >
                  <span className="text-2xl mb-2 block">{ach.icon}</span>
                  <p
                    className="font-display text-xl md:text-2xl mb-0.5 group-hover:text-[var(--accent)] transition-colors"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {ach.value}
                  </p>
                  <p className="font-display text-[9px] tracking-widest" style={{ color: 'var(--text-muted)' }}>
                    {ach.label}
                  </p>
                  {ach.sub && (
                    <p className="text-xs mt-1" style={{ color: 'var(--text-muted)', opacity: 0.6 }}>
                      {ach.sub}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

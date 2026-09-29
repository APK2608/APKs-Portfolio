import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { portfolio } from '../../data/portfolio';
import AssetPlaceholder from '../ui/AssetPlaceholder';

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [imgErrors, setImgErrors] = useState<Set<string>>(new Set());

  const handleToggle = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const handleImgError = (id: string) => {
    setImgErrors((prev) => new Set([...prev, id]));
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="relative w-full py-24 md:py-32"
      style={{ background: 'var(--bg-3)' }}
      aria-label="Projects section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <p className="font-display text-[11px] tracking-widest mb-3" style={{ color: 'var(--accent)' }}>
            04 / PROJECTS
          </p>
          <h2 className="font-display text-4xl md:text-6xl" style={{ color: 'var(--text-primary)' }}>
            PROJECTS
          </h2>
          <p className="font-display text-[10px] tracking-widest mt-3" style={{ color: 'var(--text-muted)' }}>
            HOVER TO EXPAND · CLICK TO EXPLORE
          </p>
        </motion.div>

        {/* Expanding Cards Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="project-cards-row w-full rounded-2xl overflow-hidden"
          style={{ border: '1px solid var(--glass-border)' }}
          role="list"
        >
          {portfolio.projects.map((project) => {
            const isExpanded = expandedId === project.id;
            const hasImage = !imgErrors.has(project.id);

            return (
              <motion.div
                key={project.id}
                role="listitem"
                className="project-card relative cursor-pointer flex flex-col justify-end"
                style={{
                  flex: isExpanded ? 5 : 1,
                  background: isExpanded
                    ? 'rgba(0,212,255,0.04)'
                    : 'var(--bg)',
                  transition: 'flex 0.6s cubic-bezier(0.16, 1, 0.3, 1), background 0.3s ease',
                }}
                onHoverStart={() => setExpandedId(project.id)}
                onHoverEnd={() => setExpandedId(null)}
                onClick={() => handleToggle(project.id)}
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handleToggle(project.id)}
                aria-expanded={isExpanded}
                aria-label={`Project: ${project.title}`}
              >
                {/* Project Image BG */}
                {hasImage ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    onError={() => handleImgError(project.id)}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{
                      opacity: isExpanded ? 0.15 : 0.06,
                      transition: 'opacity 0.5s ease',
                    }}
                  />
                ) : (
                  isExpanded && (
                    <div className="absolute inset-0">
                      <AssetPlaceholder
                        type="project"
                        label="ADD PROJECT IMAGE"
                        className="w-full h-full"
                      />
                    </div>
                  )
                )}

                {/* Gradient overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(5,5,5,0.95) 0%, rgba(5,5,5,0.5) 50%, transparent 100%)',
                  }}
                  aria-hidden="true"
                />

                {/* Border highlight on expand */}
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 pointer-events-none rounded-none"
                    style={{ border: '1px solid rgba(0,212,255,0.2)' }}
                    aria-hidden="true"
                  />
                )}

                {/* Content */}
                <div className="relative z-10 p-4 md:p-6">
                  {/* Number + category */}
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className="font-display text-[10px] tracking-widest"
                      style={{ color: isExpanded ? 'var(--accent)' : 'var(--text-muted)' }}
                    >
                      {project.number}
                    </span>
                    {isExpanded && (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="font-display text-[9px] tracking-widest px-2 py-0.5 rounded-full"
                        style={{
                          background: 'rgba(0,212,255,0.1)',
                          border: '1px solid rgba(0,212,255,0.2)',
                          color: 'var(--accent)',
                        }}
                      >
                        {project.category}
                      </motion.span>
                    )}
                  </div>

                  {/* Title */}
                  <h3
                    className="font-display leading-tight mb-2"
                    style={{
                      fontSize: isExpanded ? 'clamp(1rem, 2vw, 1.5rem)' : '0.75rem',
                      color: 'var(--text-primary)',
                      transition: 'font-size 0.4s ease',
                      writingMode: isExpanded ? 'horizontal-tb' : 'vertical-rl',
                      transform: isExpanded ? 'none' : 'rotate(180deg)',
                    }}
                  >
                    {project.title}
                  </h3>

                  {/* Expanded content */}
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <p
                        className="text-sm leading-relaxed mb-4"
                        style={{ color: 'var(--text-secondary)' }}
                      >
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="font-display text-[9px] tracking-widest px-2 py-0.5 rounded-full"
                            style={{
                              background: 'rgba(255,255,255,0.05)',
                              border: '1px solid var(--glass-border)',
                              color: 'var(--text-muted)',
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex gap-3">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="font-display text-[10px] tracking-widest px-4 py-2 rounded-full transition-all hover:scale-105"
                            style={{
                              background: 'rgba(255,255,255,0.08)',
                              border: '1px solid var(--glass-border)',
                              color: 'var(--text-primary)',
                            }}
                          >
                            GITHUB
                          </a>
                        )}
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="font-display text-[10px] tracking-widest px-4 py-2 rounded-full transition-all hover:scale-105"
                            style={{
                              background: 'var(--accent)',
                              color: '#000',
                            }}
                          >
                            VIEW LIVE
                          </a>
                        )}
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Year indicator */}
                {!isExpanded && (
                  <div
                    className="absolute bottom-4 left-1/2 -translate-x-1/2"
                    style={{ color: 'var(--text-muted)', fontSize: '9px' }}
                    aria-hidden="true"
                  >
                    <span className="font-display tracking-widest" style={{ writingMode: 'vertical-rl' }}>
                      {project.year}
                    </span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

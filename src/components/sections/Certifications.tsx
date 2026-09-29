import { useState, useRef, useEffect } from 'react';
import { motion, useInView, useAnimationFrame } from 'framer-motion';
import { portfolio } from '../../data/portfolio';
import AssetPlaceholder from '../ui/AssetPlaceholder';

export default function Certifications() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const trackRef = useRef<HTMLDivElement>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [imgErrors, setImgErrors] = useState<Set<string>>(new Set());

  // Carousel position - stored in a ref so it doesn't trigger re-renders
  const posRef = useRef(0);
  const pausedRef = useRef(false);
  const CARD_WIDTH = 400; // px
  const GAP = 16;
  const SPEED = 0.6; // px per frame

  const certs = portfolio.certifications;
  // Triplicate for seamless loop
  const certsLoop = [...certs, ...certs, ...certs];

  useEffect(() => {
    pausedRef.current = hoveredId !== null;
  }, [hoveredId]);

  useAnimationFrame(() => {
    if (pausedRef.current) return;
    const track = trackRef.current;
    if (!track) return;
    posRef.current += SPEED;
    const totalWidth = certs.length * (CARD_WIDTH + GAP);
    if (posRef.current >= totalWidth) posRef.current -= totalWidth;
    track.style.transform = `translateX(-${posRef.current}px)`;
  });

  const handleImgError = (id: string) => {
    setImgErrors((prev) => new Set([...prev, id]));
  };

  return (
    <section
      id="certifications"
      ref={ref}
      className="relative w-full py-24 md:py-32 overflow-hidden"
      style={{ background: 'var(--bg-2)' }}
      aria-label="Certifications section"
    >
      {/* Atmospheric glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(0,212,255,0.04) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-display text-[11px] tracking-widest mb-3" style={{ color: 'var(--accent)' }}>
            05 / CERTIFICATIONS
          </p>
          <h2 className="font-display text-4xl md:text-6xl" style={{ color: 'var(--text-primary)' }}>
            CERTIFICATIONS
          </h2>
          <p className="font-display text-[10px] tracking-widest mt-3" style={{ color: 'var(--text-muted)' }}>
            HOVER TO PAUSE · CONTINUOUS GROWTH
          </p>
        </motion.div>
      </div>

      {/* Carousel Track */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.4 }}
        className="relative overflow-hidden"
        style={{ paddingTop: '8px', paddingBottom: '24px' }}
      >
        {/* Edge fade */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, var(--bg-2), transparent)' }}
          aria-hidden="true"
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, var(--bg-2), transparent)' }}
          aria-hidden="true"
        />

        <div
          ref={trackRef}
          className="flex gap-4 will-change-transform"
          style={{ width: 'max-content' }}
          role="list"
          aria-label="Certificate carousel"
        >
          {certsLoop.map((cert, i) => {
            const isHovered = hoveredId === `${cert.id}-${i}`;
            const hasImage = !imgErrors.has(cert.id);

            return (
              <motion.div
                key={`${cert.id}-${i}`}
                role="listitem"
                className="relative flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer"
                style={{
                  width: `${CARD_WIDTH}px`,
                  aspectRatio: '16/10',
                  border: isHovered
                    ? '1px solid transparent'
                    : '1px solid var(--glass-border)',
                  background: isHovered
                    ? 'transparent'
                    : 'var(--glass-bg)',
                  backgroundImage: isHovered
                    ? 'linear-gradient(rgba(8,8,8,0.9), rgba(8,8,8,0.9)), linear-gradient(135deg, #00d4ff, #3b82f6, #8b5cf6, #ec4899)'
                    : undefined,
                  backgroundOrigin: 'border-box',
                  backgroundClip: isHovered ? 'padding-box, border-box' : undefined,
                  boxShadow: isHovered
                    ? '0 0 40px rgba(0,212,255,0.2), 0 20px 60px rgba(0,0,0,0.5)'
                    : '0 4px 20px rgba(0,0,0,0.3)',
                  transition: 'box-shadow 0.4s ease, border 0.3s ease',
                  transform: isHovered ? 'translateY(-8px) scale(1.03)' : 'scale(1)',
                }}
                onHoverStart={() => setHoveredId(`${cert.id}-${i}`)}
                onHoverEnd={() => setHoveredId(null)}
                aria-label={cert.placeholder ? 'Add certificate' : cert.title}
              >
                {cert.placeholder || !hasImage ? (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                    {cert.placeholder ? (
                      <AssetPlaceholder
                        type="certificate"
                        label={cert.title.startsWith('[') ? 'ADD CERTIFICATE' : cert.title}
                        className="w-full h-full"
                      />
                    ) : (
                      <AssetPlaceholder
                        type="certificate"
                        label={cert.title}
                        className="w-full h-full"
                      />
                    )}
                  </div>
                ) : (
                  <>
                    <img
                      src={cert.image}
                      alt={cert.title}
                      onError={() => handleImgError(cert.id)}
                      className="w-full h-full object-cover"
                    />
                    {/* Image load trigger for error detection */}
                  </>
                )}

                {/* Info overlay on hover */}
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute bottom-0 left-0 right-0 p-4"
                    style={{
                      background: 'linear-gradient(to top, rgba(5,5,5,0.95) 0%, transparent 100%)',
                    }}
                  >
                    <p className="font-display text-[11px] tracking-widest" style={{ color: 'var(--accent)' }}>
                      {cert.issuer}
                    </p>
                    <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                      {cert.title}
                    </p>
                    {cert.date && (
                      <p className="font-display text-[9px] tracking-widest mt-1" style={{ color: 'var(--text-muted)' }}>
                        {cert.date}
                      </p>
                    )}
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="font-display text-[9px] tracking-widest mt-2 inline-block"
                        style={{ color: 'var(--accent)' }}
                      >
                        VIEW CREDENTIAL →
                      </a>
                    )}
                  </motion.div>
                )}

                {/* Arc Reactor ring on hover */}
                {isHovered && (
                  <div
                    className="absolute inset-0 pointer-events-none rounded-2xl arc-ring"
                    style={{
                      background:
                        'radial-gradient(ellipse at center, rgba(0,212,255,0.05) 0%, transparent 60%)',
                    }}
                    aria-hidden="true"
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

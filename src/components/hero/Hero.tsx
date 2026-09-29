import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useAnimationControls } from 'framer-motion';
import { portfolio } from '../../data/portfolio';

// ─── Asset paths (actual filenames the user added) ──────────────────────────
const PROFILE_IMG = '/assets/profile/prajanportfolio.png';
const IRON_MAN_IMG = '/assets/hero/a90997cf-ab9a-4aa1-ab9f-3ab2baf5a9de.png';

const roles = portfolio.roles;

// ─── Dot-matrix character renderer ─────────────────────────────────────────
// Renders text as a CSS dot-matrix grid using the Nothing Phone aesthetic
function DotMatrixText({
  text,
  className = '',
  style = {},
}: {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <span
      className={`font-display ${className}`}
      style={{
        fontFamily: "'Space Mono', monospace",
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        WebkitTextStroke: '0px',
        ...style,
      }}
    >
      {text}
    </span>
  );
}

// ─── Cinematic face reveal using clip-path + particle canvas ───────────────
function FaceReveal({ src, alt }: { src: string; alt: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [phase, setPhase] = useState<'loading' | 'particles' | 'reveal' | 'done'>('loading');
  const animRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);

  interface Particle {
    x: number; y: number;
    vx: number; vy: number;
    life: number; maxLife: number;
    size: number;
    color: string;
  }

  // When image loads, kick off the reveal sequence
  const handleLoad = () => {
    // Phase 1: particles burst (0.4s)
    setPhase('particles');
    setTimeout(() => setPhase('reveal'), 400);
    setTimeout(() => setPhase('done'), 2400);
  };

  // Particle canvas effect during reveal
  useEffect(() => {
    if (phase !== 'particles' && phase !== 'reveal') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth * devicePixelRatio;
    canvas.height = canvas.offsetHeight * devicePixelRatio;
    ctx.scale(devicePixelRatio, devicePixelRatio);
    const W = canvas.offsetWidth;
    const H = canvas.offsetHeight;

    // Spawn particles
    if (phase === 'particles' && particlesRef.current.length === 0) {
      for (let i = 0; i < 80; i++) {
        particlesRef.current.push({
          x: W / 2 + (Math.random() - 0.5) * W * 0.6,
          y: H * 0.4 + (Math.random() - 0.5) * H * 0.3,
          vx: (Math.random() - 0.5) * 2,
          vy: -Math.random() * 1.5 - 0.5,
          life: 0,
          maxLife: 60 + Math.random() * 60,
          size: Math.random() * 3 + 1,
          color: Math.random() > 0.6
            ? `rgba(0,212,255,${Math.random() * 0.8 + 0.2})`
            : `rgba(255,255,255,${Math.random() * 0.6 + 0.2})`,
        });
      }
    }

    const tick = () => {
      ctx.clearRect(0, 0, W, H);
      particlesRef.current = particlesRef.current.filter(p => p.life < p.maxLife);
      particlesRef.current.forEach(p => {
        p.life++;
        p.x += p.vx;
        p.y += p.vy;
        p.vy -= 0.02;
        const alpha = 1 - p.life / p.maxLife;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * alpha, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = alpha;
        ctx.fill();
      });
      ctx.globalAlpha = 1;

      // Keep spawning during reveal phase
      if (phase === 'reveal' && Math.random() > 0.7) {
        particlesRef.current.push({
          x: W / 2 + (Math.random() - 0.5) * W * 0.4,
          y: H * 0.35 + (Math.random() - 0.5) * H * 0.25,
          vx: (Math.random() - 0.5) * 1.5,
          vy: -Math.random() * 1 - 0.2,
          life: 0,
          maxLife: 40 + Math.random() * 40,
          size: Math.random() * 2 + 0.5,
          color: `rgba(0,212,255,${Math.random() * 0.5 + 0.1})`,
        });
      }

      animRef.current = requestAnimationFrame(tick);
    };

    animRef.current = requestAnimationFrame(tick);
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current); };
  }, [phase]);

  return (
    <div className="relative w-full h-full arc-reactor-ignore hero-face">
      {/* Silhouette / dark base — always visible */}
      <div
        className="absolute inset-0 rounded-2xl overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #0a0a0a 0%, #050505 100%)',
        }}
      />

      {/* Particle canvas overlay */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-10 rounded-2xl"
        aria-hidden="true"
      />

      {/* The actual photo — revealed via clip-path animation */}
      <motion.div
        className="absolute inset-0 rounded-2xl overflow-hidden"
        style={{ zIndex: 5 }}
        initial={{ clipPath: 'inset(0 100% 0 0 round 16px)', filter: 'blur(20px) brightness(0.2)' }}
        animate={
          phase === 'reveal'
            ? { clipPath: 'inset(0 0% 0 0 round 16px)', filter: 'blur(0px) brightness(1)' }
            : phase === 'done'
            ? { clipPath: 'inset(0 0% 0 0 round 16px)', filter: 'blur(0px) brightness(1)' }
            : {}
        }
        transition={{
          clipPath: { duration: 1.6, ease: [0.16, 1, 0.3, 1] },
          filter: { duration: 1.8, ease: 'easeOut' },
        }}
      >
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          onLoad={handleLoad}
          className="w-full h-full object-cover object-top select-none"
          style={{
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 65%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 65%, transparent 100%)',
          }}
        />
      </motion.div>

      {/* Digital noise scanlines during reveal */}
      {(phase === 'particles' || phase === 'reveal') && (
        <motion.div
          className="absolute inset-0 z-20 pointer-events-none rounded-2xl"
          initial={{ opacity: 0.6 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          style={{
            background: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(0,212,255,0.03) 2px,
              rgba(0,212,255,0.03) 4px
            )`,
          }}
          aria-hidden="true"
        />
      )}

      {/* Glass edge reflection */}
      <div
        className="absolute inset-0 pointer-events-none rounded-2xl z-30"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 50%)',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1)',
        }}
        aria-hidden="true"
      />
    </div>
  );
}

// ─── Main Hero Component ────────────────────────────────────────────────────
export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const controls = useAnimationControls();

  // Vapor role cycling
  useEffect(() => {
    const cycle = () => {
      timerRef.current = setTimeout(() => {
        setRoleIdx((i) => (i + 1) % roles.length);
      }, 600);
    };
    const interval = setInterval(cycle, 3400);
    return () => {
      clearInterval(interval);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  // Text reveal after mount
  useEffect(() => {
    const t = setTimeout(() => {
      setRevealed(true);
      controls.start('visible');
    }, 150);
    return () => clearTimeout(t);
  }, [controls]);

  const textVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden flex flex-col"
      style={{ minHeight: 'max(100svh, 700px)', background: 'var(--bg)' }}
      aria-label="Hero section"
    >
      {/* ── Background Name Marquee (dot-matrix style) ── */}
      <div
        className="absolute inset-0 flex flex-col justify-center gap-8 pointer-events-none overflow-hidden"
        aria-hidden="true"
        style={{ zIndex: 0 }}
      >
        <div className="marquee-container" style={{ opacity: 0.035 }}>
          <div className="marquee-track">
            {Array.from({ length: 8 }).map((_, i) => (
              <span
                key={i}
                className="font-display whitespace-nowrap px-10"
                style={{
                  fontSize: 'clamp(4rem, 9vw, 10rem)',
                  letterSpacing: '0.2em',
                  color: 'white',
                  fontFamily: "'Space Mono', monospace",
                }}
              >
                A PRAJAN KUMAR
              </span>
            ))}
            {Array.from({ length: 8 }).map((_, i) => (
              <span
                key={`r-${i}`}
                className="font-display whitespace-nowrap px-10"
                style={{
                  fontSize: 'clamp(4rem, 9vw, 10rem)',
                  letterSpacing: '0.2em',
                  color: 'white',
                  fontFamily: "'Space Mono', monospace",
                }}
              >
                A PRAJAN KUMAR
              </span>
            ))}
          </div>
        </div>

        <div className="marquee-container" style={{ opacity: 0.018 }}>
          <div className="marquee-track-reverse">
            {Array.from({ length: 10 }).map((_, i) => (
              <span
                key={i}
                className="font-display whitespace-nowrap px-8"
                style={{
                  fontSize: 'clamp(1.5rem, 4vw, 4rem)',
                  letterSpacing: '0.3em',
                  color: 'var(--accent)',
                  fontFamily: "'Space Mono', monospace",
                }}
              >
                AI.DATA.CODE.DESIGN
              </span>
            ))}
            {Array.from({ length: 10 }).map((_, i) => (
              <span
                key={`r-${i}`}
                className="font-display whitespace-nowrap px-8"
                style={{
                  fontSize: 'clamp(1.5rem, 4vw, 4rem)',
                  letterSpacing: '0.3em',
                  color: 'var(--accent)',
                  fontFamily: "'Space Mono', monospace",
                }}
              >
                AI.DATA.CODE.DESIGN
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Atmospheric Vignette ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          background:
            'radial-gradient(ellipse 90% 90% at 50% 50%, transparent 15%, rgba(5,5,5,0.65) 75%, rgba(5,5,5,0.97) 100%)',
        }}
        aria-hidden="true"
      />

      {/* ── Iron Man Background Layer ── */}
      <div
        className="absolute inset-0 flex items-center justify-end pointer-events-none arc-reactor-ignore"
        style={{ zIndex: 2 }}
        aria-hidden="true"
      >
        <img
          src={IRON_MAN_IMG}
          alt=""
          className="h-full w-auto max-w-[55%] object-contain object-right select-none"
          style={{
            opacity: 0.055,
            filter: 'blur(2px) saturate(0.2) brightness(0.8)',
            maskImage: 'linear-gradient(to left, rgba(0,0,0,0.4) 0%, transparent 85%)',
            WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,0.4) 0%, transparent 85%)',
          }}
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
        />
      </div>

      {/* ── Main Content ── */}
      <div
        className="relative flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-16 flex-1 gap-12"
        style={{ zIndex: 3 }}
      >
        {/* ── Left: Text Identity ── */}
        <div className="flex-1 flex flex-col justify-center max-w-xl">
          {/* Dot-matrix name — the hero display type */}
          <motion.div
            custom={0}
            variants={textVariants}
            initial="hidden"
            animate={controls}
          >
            {/* Version / build label above name — dot matrix style */}
            <div className="flex items-center gap-3 mb-6">
              <div
                className="h-px flex-1 max-w-[40px]"
                style={{ background: 'rgba(0,212,255,0.3)' }}
              />
              <DotMatrixText
                text="BUILD.2026"
                style={{
                  fontSize: '10px',
                  letterSpacing: '0.25em',
                  color: 'var(--accent)',
                  opacity: 0.7,
                }}
              />
              <div
                className="h-px flex-1 max-w-[40px]"
                style={{ background: 'rgba(0,212,255,0.3)' }}
              />
            </div>

            {/* Giant dot-matrix name */}
            <h1
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 'clamp(2.8rem, 7vw, 6rem)',
                fontWeight: 700,
                letterSpacing: '0.12em',
                lineHeight: 1.05,
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.95)',
                marginBottom: '0.15em',
              }}
            >
              A PRAJAN
            </h1>
            <h1
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 'clamp(2.8rem, 7vw, 6rem)',
                fontWeight: 700,
                letterSpacing: '0.12em',
                lineHeight: 1.05,
                textTransform: 'uppercase',
                color: 'var(--accent)',
                marginBottom: '1.2rem',
                textShadow: '0 0 40px rgba(0,212,255,0.35)',
              }}
            >
              KUMAR
            </h1>
          </motion.div>

          {/* ── Vapor Role ── */}
          <motion.div
            custom={1}
            variants={textVariants}
            initial="hidden"
            animate={controls}
            className="relative overflow-hidden mb-8"
            style={{ height: '32px' }}
            aria-live="polite"
          >
            <span className="sr-only">{roles[roleIdx]}</span>
            <AnimatePresence mode="wait">
              <motion.div
                key={roleIdx}
                initial={{ opacity: 0, y: 12, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -12, filter: 'blur(8px)', scale: 1.03 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                {/* Dot separator before role */}
                <span
                  className="mr-3 inline-block w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: 'var(--accent)', opacity: 0.7 }}
                />
                <DotMatrixText
                  text={roles[roleIdx]}
                  style={{
                    fontSize: '13px',
                    letterSpacing: '0.22em',
                    color: 'rgba(255,255,255,0.6)',
                  }}
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* ── Meta strip (dot-matrix labels) ── */}
          <motion.div
            custom={2}
            variants={textVariants}
            initial="hidden"
            animate={controls}
            className="flex flex-wrap gap-x-6 gap-y-3 mb-10"
          >
            {[
              { label: 'INSTITUTION', value: 'AMCET' },
              { label: 'CGPA', value: '8.67' },
              { label: 'BATCH', value: '2023–27' },
            ].map(({ label, value }) => (
              <div key={label} className="flex flex-col gap-0.5">
                <DotMatrixText
                  text={label}
                  style={{
                    fontSize: '8px',
                    letterSpacing: '0.28em',
                    color: 'var(--accent)',
                    opacity: 0.5,
                  }}
                />
                <DotMatrixText
                  text={value}
                  style={{
                    fontSize: '13px',
                    letterSpacing: '0.14em',
                    color: 'rgba(255,255,255,0.7)',
                  }}
                />
              </div>
            ))}
          </motion.div>

          {/* ── CTA Buttons ── */}
          <motion.div
            custom={3}
            variants={textVariants}
            initial="hidden"
            animate={controls}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="font-display text-[11px] tracking-widest px-7 py-3 rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
              style={{
                background: 'var(--accent)',
                color: '#000',
                fontFamily: "'Space Mono', monospace",
                letterSpacing: '0.18em',
                boxShadow: '0 0 28px rgba(0,212,255,0.35)',
              }}
            >
              VIEW PROJECTS
            </a>
            <a
              href={`/assets/resume/A PRAJAN KUMAR's Resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="glass font-display text-[11px] tracking-widest px-7 py-3 rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
              style={{
                color: 'rgba(255,255,255,0.85)',
                fontFamily: "'Space Mono', monospace",
                letterSpacing: '0.18em',
                border: '1px solid rgba(255,255,255,0.12)',
              }}
            >
              VIEW RESUME
            </a>
          </motion.div>
        </div>

        {/* ── Right: Face Reveal ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: revealed ? 1 : 0, scale: revealed ? 1 : 0.9 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative flex items-center justify-center flex-shrink-0 arc-reactor-ignore"
          style={{ zIndex: 4 }}
        >
          {/* Outer glow ring */}
          <div
            className="absolute rounded-full pointer-events-none arc-ring"
            style={{
              width: 'calc(100% + 60px)',
              height: 'calc(100% + 60px)',
              top: '-30px',
              left: '-30px',
              background: 'radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)',
              border: '1px solid rgba(0,212,255,0.08)',
            }}
            aria-hidden="true"
          />

          {/* Portrait container */}
          <div
            className="relative overflow-hidden rounded-2xl"
            style={{ width: 'clamp(240px, 28vw, 360px)', height: 'clamp(300px, 36vw, 460px)' }}
          >
            <FaceReveal
              src={PROFILE_IMG}
              alt="A Prajan Kumar — portrait"
            />
          </div>

          {/* Floating dot-matrix badge below portrait */}
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute glass"
            style={{
              bottom: '-18px',
              left: '50%',
              transform: 'translateX(-50%)',
              padding: '6px 16px',
              borderRadius: '100px',
              border: '1px solid rgba(0,212,255,0.2)',
              whiteSpace: 'nowrap',
            }}
          >
            <DotMatrixText
              text="AI × DATA × CODE × DESIGN"
              style={{
                fontSize: '9px',
                letterSpacing: '0.2em',
                color: 'var(--accent)',
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

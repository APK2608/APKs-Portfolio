import { useEffect } from 'react';

// Arc Reactor image the user added
const ARC_REACTOR_IMG = '/assets/hero/OIP (3).webp';

export default function ArcReactorSpotlight() {
  useEffect(() => {
    const root = document.documentElement;

    // Set custom cursor using the arc reactor PNG
    document.body.style.cursor = `url("${ARC_REACTOR_IMG}") 16 16, crosshair`;

    // Update CSS spotlight variables on mouse move
    const handleMove = (e: MouseEvent) => {
      root.style.setProperty('--spotlight-x', `${e.clientX}px`);
      root.style.setProperty('--spotlight-y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMove);
      document.body.style.cursor = '';
    };
  }, []);

  // The spotlight div is a pure CSS radial gradient that follows --spotlight-x/y
  return <div className="arc-spotlight" aria-hidden="true" />;
}

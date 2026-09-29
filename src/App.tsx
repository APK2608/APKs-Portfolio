import './index.css';
import ArcReactorSpotlight from './components/ui/ArcReactorSpotlight';
import LiquidGlassNav from './components/ui/LiquidGlassNav';
import Hero from './components/hero/Hero';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Certifications from './components/sections/Certifications';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

export default function App() {
  return (
    <>
      {/* Global Arc Reactor Spotlight (desktop only via CSS) */}
      <ArcReactorSpotlight />

      {/* Navigation */}
      <LiquidGlassNav />

      {/* Main content */}
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

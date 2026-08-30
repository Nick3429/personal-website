import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';
import { useActiveNavLink, useScrollEffect, useScrollProgress, useSmoothScroll } from './hooks/useScrollEffect'

function App() {
  useScrollEffect();
  useActiveNavLink();
  useScrollProgress();
  useSmoothScroll();

  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Certifications />
    <Projects />
    <Experience />
    <Footer />
    </>
  );
}

export default App;

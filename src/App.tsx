import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Layout
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Effects
import CursorGlow from './components/effects/CursorGlow';
import ScrollProgress from './components/effects/ScrollProgress';
import LoadingScreen from './components/effects/LoadingScreen';

// Sections
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Services from './components/sections/Services';
import Achievements from './components/sections/Achievements';
import GitHubStats from './components/sections/GitHubStats';
import Contact from './components/sections/Contact';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loading Screen */}
      <LoadingScreen isLoading={isLoading} />

      {/* Cursor Glow Effect */}
      <CursorGlow />

      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Main Site */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen bg-[#020408] text-white"
      >
        {/* Sticky Navbar */}
        <Navbar />

        {/* Main Content */}
        <main>
          {/* Hero */}
          <Hero />

          {/* About */}
          <About />

          {/* Experience & Education */}
          <Experience />

          {/* Skills */}
          <Skills />

          {/* Projects */}
          <Projects />

          {/* Services */}
          <Services />

          {/* Achievements */}
          <Achievements />

          {/* GitHub Stats */}
          <GitHubStats />

          {/* Contact */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </motion.div>
    </>
  );
}

export default App;

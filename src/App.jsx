import React from 'react';
import { ThemeProvider } from './utils/themeContext';
import GrainOverlay from './components/UI/GrainOverlay';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IntroStatement from './components/IntroStatement';
import About from './components/About';
import SkillsAccordion from './components/SkillsAccordion';
import SelectedWork from './components/SelectedWork';
import Experience from './components/Experience';

import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen w-full max-w-full overflow-x-hidden bg-background text-primary selection:bg-accent selection:text-black font-sans">
        {/* Tactile Editorial Grain Texture */}
        <GrainOverlay />

        {/* Floating Masthead Header with Theme Switcher */}
        <Navbar />

        {/* Page Content Flow */}
        <main className="w-full max-w-full overflow-x-hidden">
          {/* 1. Dramatic Full-Screen Black Hero with Gaurav's Portrait Viewfinder */}
          <Hero />

          {/* 2. Intro / Statement Section */}
          <IntroStatement />

          {/* 3. About Section (01 ABOUT & Academic Foundation) */}
          <About />

          {/* 4. Skills Section (02-05 Expandable Accordion with Accent Flip) */}
          <SkillsAccordion />

          {/* 5. Selected Work (Customer Review Analysis System, NeuroCanvas, etc.) */}
          <SelectedWork />



          {/* 6. Experience / Education (APCOER, KTHM College & Verified Certifications) */}
          <Experience />

          {/* 7. Contact Section (Direct Call, WhatsApp, Verified LinkedIn & Message Form) */}
          <Contact />
        </main>

        {/* 8. Minimalist Black Footer with Live IST Clock */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

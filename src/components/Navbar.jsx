import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Menu, X, ArrowUpRight, Palette, Phone } from 'lucide-react';
import { navLinks, personalData, colorThemes } from '../data/portfolioData';
import { isSoundEnabled, toggleSound, playClickSound, playHoverSound } from '../utils/sound';
import { useTheme } from '../utils/themeContext';
import MagneticButton from './UI/MagneticButton';

export default function Navbar() {
  const [soundOn, setSoundOn] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { currentTheme, setTheme, themes } = useTheme();

  useEffect(() => {
    setSoundOn(isSoundEnabled());
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const newState = toggleSound();
    setSoundOn(newState);
  };

  const handleNavClick = (href) => {
    playClickSound();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#050505]/95 backdrop-blur-md border-b border-white/15 py-3'
            : 'bg-[#050505] border-b border-white/10 py-3.5 md:py-4'
        }`}
      >
        <div className="w-full px-6 md:px-12 flex items-center justify-between">
          {/* Brand Monogram & Title */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex items-center gap-3"
            data-cursor="hover"
          >
            <div className="w-8 h-8 border border-white/30 flex items-center justify-center font-mono font-bold text-xs text-white group-hover:border-accent group-hover:bg-accent group-hover:text-black transition-all duration-200">
              GD
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-xs sm:text-sm tracking-tight text-white uppercase group-hover:text-accent transition-colors">
                GAURAV DEORE
              </span>
              <span className="font-mono text-[10px] text-secondary tracking-widest uppercase">
                APCOER &bull; FULL-STACK WEB &amp; PYTHON
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 font-mono text-xs">
            {navLinks.map((item, idx) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                onMouseEnter={playHoverSound}
                data-cursor="hover"
                className="px-3 py-1.5 text-secondary hover:text-black hover:bg-accent transition-all duration-200 tracking-wider flex items-center gap-1.5 group"
              >
                <span className="text-[10px] opacity-40 group-hover:text-black group-hover:opacity-80">
                  0{idx + 1}
                </span>
                <span className="font-medium uppercase">{item.label}</span>
              </a>
            ))}
          </nav>

          {/* Right Controls: Theme Selector, Phone / Availability, Sound, Mobile menu */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Direct Phone link button */}
            <a
              href={`tel:${personalData.phone}`}
              data-cursor="hover"
              className="hidden xl:flex items-center gap-2 px-3 py-1 border border-white/15 bg-white/[0.02] hover:border-accent hover:text-accent font-mono text-[11px] text-white/80 transition-colors"
              title="Call Gaurav"
            >
              <Phone className="w-3 h-3 text-accent" />
              <span>{personalData.phoneFormatted}</span>
            </a>

            {/* Interactive Theme Switcher Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => {
                  playClickSound();
                  setThemeMenuOpen(!themeMenuOpen);
                }}
                data-cursor="hover"
                className="px-2.5 py-1 font-mono text-[11px] border border-white/20 hover:border-accent text-white/90 flex items-center gap-1.5 transition-colors bg-black/40"
                title="Change Color Theme"
              >
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: currentTheme.accent }}
                />
                <span className="hidden sm:inline uppercase text-[10px] tracking-wider">
                  {currentTheme.name.split(' ')[1] || currentTheme.name}
                </span>
                <Palette className="w-3 h-3 text-white/40" />
              </button>

              <AnimatePresence>
                {themeMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-48 bg-[#090909] border border-white/20 shadow-2xl p-2 z-50 font-mono text-xs"
                  >
                    <div className="text-[10px] text-white/40 uppercase tracking-widest px-2 py-1 mb-1 border-b border-white/10">
                      // COLOR PALETTES
                    </div>
                    {themes.map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => {
                          playClickSound();
                          setTheme(t);
                          setThemeMenuOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-2.5 py-2 hover:bg-white/10 transition-colors text-left ${
                          currentTheme.id === t.id ? 'text-white font-bold bg-white/5' : 'text-white/70'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span
                            className="w-3 h-3 rounded-full border border-black"
                            style={{ backgroundColor: t.accent }}
                          />
                          <span>{t.name}</span>
                        </div>
                        {currentTheme.id === t.id && (
                          <span className="text-[10px] text-accent font-mono">[ACTIVE]</span>
                        )}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Audio Toggle */}
            <button
              type="button"
              onClick={handleSoundToggle}
              data-cursor="hover"
              className={`px-2.5 py-1 font-mono text-[11px] border transition-all duration-200 flex items-center gap-1.5 ${
                soundOn
                  ? 'border-accent bg-accent/15 text-accent'
                  : 'border-white/20 text-white/50 hover:border-white/40 hover:text-white'
              }`}
              title={soundOn ? 'Mute Sound FX' : 'Enable Audio Micro-Interactions'}
            >
              {soundOn ? <Volume2 className="w-3.5 h-3.5 text-accent" /> : <VolumeX className="w-3.5 h-3.5" />}
              <span className="hidden md:inline uppercase text-[10px] tracking-wider">
                {soundOn ? 'AUDIO: ON' : 'AUDIO: OFF'}
              </span>
            </button>

            {/* Mobile Hamburger */}
            <button
              type="button"
              onClick={() => {
                playClickSound();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="lg:hidden p-2 border border-white/20 text-white hover:border-accent hover:text-accent transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-[#050505] flex flex-col justify-between p-8 pt-24 lg:hidden border-b border-white/15"
          >
            <div className="flex flex-col space-y-4">
              <div className="font-mono text-xs text-accent tracking-widest uppercase pb-2 border-b border-white/10">
                // INDEX NAVIGATION
              </div>
              {navLinks.map((item, index) => (
                <div key={item.label} className="border-b border-white/10 pb-3">
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className="flex items-center justify-between text-3xl font-display font-black text-white hover:text-accent transition-colors"
                  >
                    <span>{item.label}</span>
                    <span className="font-mono text-xs text-accent">0{index + 1} ↗</span>
                  </a>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-white/10 font-mono text-xs text-secondary space-y-3">
              <div className="flex items-center gap-2 text-accent">
                <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                <span>SAVITRIBAI PHULE PUNE UNIVERSITY &bull; B.SC CS</span>
              </div>
              <p className="text-white/80">Phone: {personalData.phoneFormatted}</p>
              <p className="text-white/60">Email: {personalData.email}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

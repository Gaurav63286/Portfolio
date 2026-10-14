import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Phone, Mail, Linkedin, ArrowUpRight, ShieldCheck, Github } from 'lucide-react';
import { personalData } from '../data/portfolioData';
import { playClickSound, playHoverSound } from '../utils/sound';
import MagneticButton from './UI/MagneticButton';

export default function Hero() {
  // Smooth spring mouse reactivity
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 35, stiffness: 180, mass: 0.6 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const titleX = useTransform(smoothX, [-0.5, 0.5], [-8, 8]);
  const titleY = useTransform(smoothY, [-0.5, 0.5], [-6, 6]);
  const photoX = useTransform(smoothX, [-0.5, 0.5], [6, -6]);
  const photoY = useTransform(smoothY, [-0.5, 0.5], [5, -5]);

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const normalizedX = (e.clientX / innerWidth) - 0.5;
    const normalizedY = (e.clientY / innerHeight) - 0.5;
    mouseX.set(normalizedX);
    mouseY.set(normalizedY);
  };

  const handleScrollTo = (id) => {
    playClickSound();
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-[75vh] w-full flex flex-col justify-between pt-12 md:pt-16 pb-10 px-6 md:px-12 overflow-x-hidden bg-background select-none border-b border-white/10"
    >
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="w-full h-full grid grid-cols-4 md:grid-cols-12 border-x border-white/10">
          {Array.from({ length: 11 }).map((_, i) => (
            <div key={i} className="border-r border-white/5 h-full hidden md:block" />
          ))}
        </div>
      </div>

      {/* Main Desktop-Friendly Hero Content Grid with Clamped Typography */}
      <div className="relative z-10 w-full my-auto py-8 md:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Monumental Clamped Editorial Typography (lg:col-span-8) */}
          <div className="lg:col-span-8 space-y-6 min-w-0 max-w-full">
            {/* Role Subhead - Replaced Software Engineering with Full-Stack Web Development */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex items-center gap-3"
            >
              <div className="h-[1.5px] w-8 md:w-16 bg-accent" />
              <span className="font-mono text-xs md:text-sm tracking-widest text-accent uppercase font-bold">
                {personalData.title}
              </span>
            </motion.div>

            {/* HEADLINE: GAURAV DEORE - Clamped font size to completely prevent overflow */}
            <motion.div
              style={{ x: titleX, y: titleY }}
              className="relative max-w-full overflow-hidden"
            >
              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[5.5rem] xl:text-[6.75rem] font-display font-extrabold uppercase leading-[0.88] text-white tracking-tight max-w-full break-words">
                <motion.span
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
                  className="block hover:text-accent transition-colors duration-300 cursor-default"
                >
                  GAURAV
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
                  className="block text-white/90 hover:text-accent transition-colors duration-300 cursor-default"
                >
                  DEORE
                </motion.span>
              </h1>
            </motion.div>

            {/* Short Statement */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="text-base sm:text-lg md:text-xl text-white/80 font-sans font-light leading-relaxed max-w-2xl"
            >
              "{personalData.shortStatement}"
            </motion.p>

            {/* Quick CTAs and Contact Shortcuts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >

              <MagneticButton
                as="button"
                type="button"
                onClick={() => handleScrollTo('work')}
                data-cursor="hover"
                className="px-6 py-3.5 bg-accent text-accent-contrast font-mono font-bold text-xs tracking-wider uppercase border border-accent hover:bg-white hover:text-black transition-all shadow-[0_0_25px_var(--accent-glow)]"
              >
                VIEW PROJECTS ↗
              </MagneticButton>


              <MagneticButton
                as="a"
                href={`mailto:${personalData.email}`}
                data-cursor="hover"
                className="px-4 py-3.5 border border-white/20 text-white/70 hover:border-accent hover:text-accent font-mono text-xs flex items-center gap-1.5 transition-colors"
                title="Email Me"
              >
                <Mail className="w-4 h-4" />
                <span className="hidden sm:inline">EMAIL</span>
              </MagneticButton>

              <MagneticButton
                as="a"
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="hover"
                className="px-4 py-3.5 border border-white/20 text-white/70 hover:border-accent hover:text-accent font-mono text-xs flex items-center gap-1.5 transition-colors"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
                <span className="hidden sm:inline">GITHUB</span>
              </MagneticButton>

              <MagneticButton
                as="a"
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="hover"
                className="px-4 py-3.5 border border-white/20 text-white/70 hover:border-accent hover:text-accent font-mono text-xs flex items-center gap-1.5 transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
                <span className="hidden sm:inline">LINKEDIN</span>
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right Column: High-End Editorial Portrait Viewfinder (lg:col-span-4) */}
          <motion.div
            style={{ x: photoX, y: photoY }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 relative group max-w-sm mx-auto lg:max-w-md w-full"
          >
            {/* Viewfinder Outer Frame */}
            <div className="relative border border-white/20 bg-[#090909] p-3 shadow-2xl overflow-hidden group-hover:border-accent transition-colors duration-500">
              {/* Corner Crosshair Reticles */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-accent pointer-events-none z-20" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-accent pointer-events-none z-20" />
              <div className="absolute bottom-2 left-2 w-3 h-2 border-b-2 border-l-2 border-accent pointer-events-none z-20" />
              <div className="absolute bottom-2 right-2 w-3 h-2 border-b-2 border-r-2 border-accent pointer-events-none z-20" />

              {/* Photo Viewport */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-black">
                <img
                  src={personalData.photoUrl}
                  alt={personalData.fullName}
                  className="w-full h-full object-cover object-top filter grayscale contrast-110 brightness-95 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                
                {/* Subtle vignette blend */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/20 pointer-events-none" />

                {/* Live Telemetry Overlay in photo */}
                <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between font-mono text-[10px] text-white/90 bg-black/80 backdrop-blur-sm px-2.5 py-1.5 border border-white/10">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
                    <span>GAURAV MANOHAR DEORE</span>
                  </span>
                  <span className="text-accent">APCOER &bull; CS</span>
                </div>
              </div>

              {/* Frame Metadata Footer */}
              <div className="pt-2 px-1 flex items-center justify-between font-mono text-[10px] text-white/50">
                <span>[REF: APCOER_SPPU_2026]</span>
                <span className="text-accent flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> VERIFIED ENGINEER
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}

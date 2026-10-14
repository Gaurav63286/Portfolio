import React, { useState, useEffect } from 'react';
import { ArrowUp, Clock, Phone, Mail, Linkedin, Github } from 'lucide-react';
import { personalData } from '../data/portfolioData';
import MagneticButton from './UI/MagneticButton';
import { playClickSound } from '../utils/sound';

export default function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setTime(now.toLocaleTimeString('en-US', options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    playClickSound();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-[#030303] text-primary border-t border-white/10 py-16 px-6 md:px-12 select-none">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top Footer Tier */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-12 border-b border-white/10">
          <div>
            <span className="font-mono text-xs text-accent tracking-widest block mb-2">
              // ARCHITECTURAL FOOTPRINT &bull; {personalData.university.toUpperCase()}
            </span>
            <div className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white uppercase tracking-tight">
              {personalData.name}
            </div>
            <p className="font-mono text-xs text-secondary mt-1">
              {personalData.title} &bull; {personalData.phoneFormatted}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 font-mono text-xs text-secondary">
            {/* Live IST clock */}
            <div className="flex items-center gap-2 px-3.5 py-2 border border-white/10 bg-white/5 text-white/90">
              <Clock className="w-3.5 h-3.5 text-accent" />
              <span>INDIA (IST): {time || '18:30:00'}</span>
            </div>

            {/* Back to top */}
            <MagneticButton
              as="button"
              type="button"
              onClick={scrollToTop}
              data-cursor="hover"
              className="flex items-center gap-2 text-white/80 hover:text-accent border border-white/20 hover:border-accent px-4 py-2 transition-colors"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </MagneticButton>
          </div>
        </div>

        {/* Bottom Tier: Links & Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-xs text-secondary">
          <div className="flex flex-wrap items-center gap-6">
            <a
              href={`tel:${personalData.phone}`}
              data-cursor="hover"
              className="hover:text-accent flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3 h-3 text-accent" />
              <span>{personalData.phoneFormatted}</span>
            </a>
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              className="hover:text-accent flex items-center gap-1.5 transition-colors"
            >
              <Linkedin className="w-3 h-3 text-accent" />
              <span>LINKEDIN ↗</span>
            </a>
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              className="hover:text-accent flex items-center gap-1.5 transition-colors"
            >
              <Github className="w-3 h-3 text-accent" />
              <span>GITHUB ↗</span>
            </a>
            <a
              href={`mailto:${personalData.email}`}
              data-cursor="hover"
              className="hover:text-accent flex items-center gap-1.5 transition-colors"
            >
              <Mail className="w-3 h-3 text-accent" />
              <span>EMAIL ↗</span>
            </a>
          </div>

          <div className="text-white/40 text-center md:text-right">
            &copy; 2026 {personalData.fullName}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

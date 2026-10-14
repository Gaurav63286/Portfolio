import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin, Zap, Check, GraduationCap, Phone, Mail } from 'lucide-react';
import { aboutData, personalData } from '../data/portfolioData';

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full py-16 md:py-20 px-6 md:px-12 bg-background border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Numbered Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <div className="font-mono text-accent text-sm md:text-base tracking-widest uppercase mb-2">
              01 // IDENTITY
            </div>
            <h2 className="text-5xl sm:text-7xl md:text-8xl font-display font-black text-white tracking-tight uppercase">
              ABOUT <span className="font-editorial-serif text-accent font-normal italic lowercase">me</span>
            </h2>
          </div>

          <div className="font-mono text-xs text-secondary max-w-sm uppercase tracking-wider">
            [{personalData.university.toUpperCase()}] &mdash; CODE ARCHITECTURE, PYTHON DATA &amp; DIGITAL EXPERIENCES.
          </div>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-16 items-start">
          {/* Left Column: Core Statement & Personal Background */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-8"
          >
            {/* Core Statement Box */}
            <div className="p-8 border border-white/15 bg-[#090909] relative">
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-3 font-mono text-[10px] px-2.5 py-1 bg-accent text-accent-contrast font-bold uppercase tracking-widest">
                CORE STATEMENT
              </div>
              <p className="text-xl sm:text-2xl text-white font-sans font-light leading-relaxed">
                "{aboutData.statement}"
              </p>
            </div>

            {/* Narrative Story */}
            <div className="space-y-5 text-base sm:text-lg text-secondary leading-relaxed font-sans font-light">
              {aboutData.story.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Academic & Contact Specifications */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-6 font-mono text-xs">
              <div>
                <span className="text-white/40 block mb-1 uppercase tracking-wider">ACADEMIC FOUNDATION</span>
                <span className="text-white flex items-center gap-1.5 font-medium">
                  <GraduationCap className="w-4 h-4 text-accent shrink-0" />
                  <span>B.Sc. CS &bull; SPPU Pune</span>
                </span>
              </div>
              <div>
                <span className="text-white/40 block mb-1 uppercase tracking-wider">CURRENT AVAILABILITY</span>
                <span className="text-accent flex items-center gap-1.5 font-bold">
                  <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
                  Internships &amp; Roles
                </span>
              </div>
              <div>
                <span className="text-white/40 block mb-1 uppercase tracking-wider">DIRECT MOBILE</span>
                <a
                  href={`tel:${personalData.phone}`}
                  className="text-white hover:text-accent flex items-center gap-1.5 font-medium transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-accent" />
                  {personalData.phoneFormatted}
                </a>
              </div>
              <div>
                <span className="text-white/40 block mb-1 uppercase tracking-wider">EMAIL COORDINATES</span>
                <a
                  href={`mailto:${personalData.email}`}
                  className="text-white hover:text-accent flex items-center gap-1.5 font-medium transition-colors break-all"
                >
                  <Mail className="w-3.5 h-3.5 text-accent shrink-0" />
                  {personalData.email}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 4 Pillars of Craft */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 space-y-4"
          >
            <div className="font-mono text-xs text-white/50 mb-4 tracking-wider uppercase">
              // CORE PILLARS &amp; SPECIALIZATIONS
            </div>

            <div className="grid grid-cols-1 gap-4">
              {aboutData.pillars.map((pillar, idx) => (
                <div
                  key={pillar.title}
                  className="p-6 border border-white/10 bg-[#080808] hover:border-accent/80 hover:bg-[#0c0c0c] transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-accent font-bold">0{idx + 1}</span>
                      <h3 className="text-lg sm:text-xl font-display font-bold text-white group-hover:text-accent transition-colors">
                        {pillar.title}
                      </h3>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <p className="text-sm text-secondary font-sans leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Foundational Capabilities Chips */}
            <div className="p-6 border border-white/10 bg-white/[0.02] mt-6">
              <div className="text-xs font-mono text-white/70 mb-3 uppercase tracking-wider flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-accent" />
                FOUNDATIONAL CAPABILITIES
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  'Python Programming',
                  'Data Structures & Algorithms',
                  'Frontend Development',
                  'Pandas & NumPy',
                  'React & JavaScript',
                  'SQL & Relational DBs',
                  'Problem Solving',
                  'Version Control (Git)',
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-black border border-white/15 text-white/80 font-mono text-xs hover:border-accent hover:text-accent transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

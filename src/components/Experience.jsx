import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowUpRight, GraduationCap, Award, ExternalLink, Eye, X, ShieldCheck } from 'lucide-react';
import { experienceData } from '../data/portfolioData';
import { playHoverSound, playClickSound } from '../utils/sound';

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const toggleRow = (index) => {
    playClickSound();
    setExpandedIndex(prev => (prev === index ? null : index));
  };

  const handleOpenCert = (cert, e) => {
    e.stopPropagation();
    playClickSound();
    setSelectedCertificate(cert);
  };

  return (
    <section
      id="timeline"
      className="relative w-full py-16 md:py-20 px-6 md:px-12 bg-background border-b border-white/10 overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <div className="font-mono text-accent text-sm md:text-base tracking-widest uppercase mb-2">
              04 // TIMELINE
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-black text-white tracking-tight uppercase max-w-full break-normal">
              EXPERIENCE &amp; <span className="font-editorial-serif text-accent font-normal italic lowercase">roots</span>
            </h2>
          </div>

          <div className="font-mono text-xs text-secondary max-w-sm uppercase tracking-wider">
            [APCOER &bull; VERIFIED CERTIFICATES] &mdash; EDUCATION, INDUSTRY ACCREDITATIONS &amp; TECHNICAL RECORD.
          </div>
        </div>

        {/* Minimal Numbered Rows */}
        <div className="mt-12 border-t border-white/10 divide-y divide-white/10">
          {experienceData.map((item, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <div
                key={item.number}
                onMouseEnter={playHoverSound}
                className={`transition-colors duration-300 ${
                  isExpanded ? 'bg-[#090909]' : 'hover:bg-white/[0.015]'
                }`}
              >
                {/* Header Row Trigger */}
                <div
                  onClick={() => toggleRow(index)}
                  className="py-8 md:py-10 px-4 md:px-8 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6"
                  data-cursor="hover"
                >
                  <div className="flex items-baseline md:items-center gap-6 md:gap-10">
                    <span className="font-mono text-xl md:text-2xl text-accent font-bold">
                      {item.number}
                    </span>

                    <div>
                      <span className="font-mono text-xs text-secondary tracking-widest uppercase block mb-1">
                        // {item.section}
                      </span>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white group-hover:text-accent transition-colors">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-6 font-mono text-xs text-secondary">
                    <div className="text-left md:text-right space-y-1">
                      <div className="text-white/90 font-medium">{item.shortInstitution || item.institution}</div>
                      <div className="text-accent flex items-center gap-2 md:justify-end">
                        <span>{item.period}</span>
                        {item.status === 'Currently Pursuing' && (
                          <span className="hidden sm:inline-block px-2 py-0.5 bg-accent/20 border border-accent/40 text-accent font-mono text-[10px] font-bold uppercase tracking-wider rounded-sm animate-pulse">
                            Currently Pursuing
                          </span>
                        )}
                      </div>
                      {item.location && <div className="text-white/40 text-[11px]">{item.location}</div>}
                    </div>

                    <div
                      className={`w-9 h-9 border flex items-center justify-center transition-transform duration-300 ${
                        isExpanded
                          ? 'border-accent bg-accent text-accent-contrast rotate-90'
                          : 'border-white/20 text-white'
                      }`}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Expanded Details Body */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 md:px-8 pb-8 pt-2 md:pl-24 text-sm text-secondary font-sans space-y-6">
                        {/* If this is the Education section */}
                        {item.section === 'EDUCATION' && (
                          <div className={`p-6 border ${item.status === 'Currently Pursuing' ? 'border-accent/40 bg-[#0a0f0a]' : 'border-white/10 bg-[#060606]'} space-y-3 transition-colors`}>
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3 font-mono text-xs">
                              <span className="text-accent font-bold flex flex-wrap items-center gap-2">
                                <span>🎓 {item.institution}</span>
                                {item.location && <span className="text-white/40 font-normal">({item.location})</span>}
                              </span>
                              <span className={`px-2.5 py-0.5 border font-bold text-xs tracking-wider uppercase inline-flex items-center gap-1.5 ${
                                item.status === 'Currently Pursuing'
                                  ? 'bg-accent/20 border-accent text-accent shadow-[0_0_12px_var(--accent-glow)]'
                                  : 'bg-accent/15 border-accent/40 text-accent'
                              }`}>
                                {item.status === 'Currently Pursuing' && (
                                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                                )}
                                <span>{item.status || item.grade}</span>
                              </span>
                            </div>
                            <p className="text-white/90 text-sm md:text-base font-light">
                              {item.status === 'Currently Pursuing'
                                ? `Currently pursuing ${item.degree || item.title} at ${item.institution}, ${item.location} (affiliated with ${item.university}).`
                                : `Affiliated with ${item.university}. Completed ${item.title} (${item.period}).`}
                            </p>
                            {item.link && (
                              <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-cursor="hover"
                                className="inline-flex items-center gap-1.5 font-mono text-xs text-accent hover:underline pt-1"
                              >
                                <span>VIEW VERIFIED EDUCATION ON LINKEDIN</span>
                                <ExternalLink className="w-3.5 h-3.5" />
                              </a>
                            )}
                          </div>
                        )}

                        {/* If this is the Certifications section, show interactive certificate cards */}
                        {item.certificates && item.certificates.length > 0 && (
                          <div className="space-y-4">
                            <div className="font-mono text-xs text-accent uppercase tracking-wider flex items-center gap-2">
                              <Award className="w-4 h-4" />
                              <span>OFFICIAL VERIFIED CERTIFICATES (CLICK TO INSPECT):</span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                              {item.certificates.map((cert) => (
                                <div
                                  key={cert.name}
                                  onClick={(e) => handleOpenCert(cert, e)}
                                  data-cursor="hover"
                                  className="p-4 border border-white/15 bg-[#050505] hover:border-accent hover:bg-[#0c0c0c] transition-all cursor-pointer flex flex-col justify-between group space-y-3"
                                >
                                  <div>
                                    <div className="flex justify-between items-start gap-2 mb-1">
                                      <span className="font-mono text-[10px] text-accent font-bold">
                                        {cert.date}
                                      </span>
                                      <span className="px-1.5 py-0.5 bg-white/5 border border-white/10 text-[9px] font-mono text-white/70">
                                        VERIFIED
                                      </span>
                                    </div>
                                    <h4 className="font-display font-bold text-sm text-white group-hover:text-accent transition-colors leading-snug">
                                      {cert.name}
                                    </h4>
                                    <p className="text-[11px] text-white/60 font-mono mt-1">
                                      {cert.issuer}
                                    </p>
                                  </div>

                                  <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs font-mono text-accent">
                                    <span className="text-[10px] text-white/40">{cert.score}</span>
                                    <span className="flex items-center gap-1 text-[11px] group-hover:underline">
                                      <Eye className="w-3.5 h-3.5" />
                                      <span>VIEW</span>
                                    </span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Text points */}
                        <ul className="space-y-2 border-l border-white/15 pl-4">
                          {item.details.map((point, idx) => (
                            <li key={idx} className="leading-relaxed text-white/80">
                              {point}
                            </li>
                          ))}
                        </ul>

                        {/* Badges */}
                        <div className="flex flex-wrap gap-2 pt-2">
                          {item.badges.map((badge) => (
                            <span
                              key={badge}
                              className="px-2.5 py-1 bg-white/5 border border-white/10 text-accent font-mono text-xs"
                            >
                              #{badge}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      {/* Full-Screen Certificate Modal Viewer */}
      <AnimatePresence>
        {selectedCertificate && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full bg-[#080808] border border-white/20 p-4 sm:p-6 shadow-2xl flex flex-col space-y-4 max-h-[92vh] overflow-y-auto"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <div className="font-mono text-xs text-accent font-bold uppercase tracking-wider flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" />
                    <span>VERIFIED CERTIFICATE DOCUMENT</span>
                  </div>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-white mt-1">
                    {selectedCertificate.name}
                  </h3>
                  <p className="font-mono text-xs text-secondary mt-0.5">
                    {selectedCertificate.issuer} &bull; {selectedCertificate.date}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedCertificate(null)}
                  data-cursor="hover"
                  className="p-2 border border-white/20 text-white hover:text-accent hover:border-accent transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Certificate Image Viewport */}
              <div className="relative w-full border border-white/10 bg-black flex items-center justify-center overflow-hidden">
                <img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.name}
                  className="max-h-[70vh] w-auto object-contain"
                />
              </div>

              {/* Modal Footer */}
              <div className="flex items-center justify-between font-mono text-xs text-secondary pt-2">
                <span>RECIPIENT: GAURAV MANOHAR DEORE</span>
                <a
                  href={selectedCertificate.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline flex items-center gap-1"
                >
                  <span>OPEN FULL IMAGE</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

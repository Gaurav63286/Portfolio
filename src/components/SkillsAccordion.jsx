import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { skillsCategories } from '../data/portfolioData';
import { playClickSound, playHoverSound } from '../utils/sound';

export default function SkillsAccordion() {
  // Allow hover to dynamically preview, and click to pin/lock
  const [activeId, setActiveId] = useState('02');
  const [hoveredId, setHoveredId] = useState(null);

  // Track whether user is actively scrolling to prevent hover-expand
  // from hijacking scroll (expanding a row shifts content, trapping the pointer).
  const isScrolling = useRef(false);
  const scrollTimer = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      isScrolling.current = true;
      // Clear any pending hover while scrolling
      setHoveredId(null);
      if (scrollTimer.current) clearTimeout(scrollTimer.current);
      scrollTimer.current = setTimeout(() => {
        isScrolling.current = false;
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimer.current) clearTimeout(scrollTimer.current);
    };
  }, []);

  const currentActive = hoveredId !== null ? hoveredId : activeId;

  const handleRowClick = (num) => {
    playClickSound();
    setActiveId(prev => (prev === num ? null : num));
  };

  return (
    <section
      id="skills"
      className="relative w-full py-16 md:py-20 px-6 md:px-12 bg-background border-b border-white/10 overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <div className="font-mono text-accent text-sm md:text-base tracking-widest uppercase mb-2">
              02 // EXPERTISE
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-black text-white tracking-tight uppercase max-w-full break-normal">
              TECHNICAL <span className="font-editorial-serif text-accent font-normal italic lowercase">stack</span>
            </h2>
          </div>

          <div className="font-mono text-xs text-secondary max-w-sm uppercase tracking-wider">
            [INTERACTIVE REGISTRY] &mdash; HOVER OR CLICK A ROW TO EXPAND CAPABILITIES, TOOLS &amp; DOMAINS.
          </div>
        </div>

        {/* Expandable Accordion Rows */}
        <div className="mt-12 border-t border-white/10 divide-y divide-white/10">
          {skillsCategories.map((category) => {
            const isOpen = currentActive === category.number;

            return (
              <motion.div
                key={category.number}
                onMouseEnter={() => {
                  if (isScrolling.current) return;
                  playHoverSound();
                  setHoveredId(category.number);
                }}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => handleRowClick(category.number)}
                className={`relative cursor-pointer transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-accent text-accent-contrast shadow-[0_15px_40px_var(--accent-glow)]'
                    : 'bg-[#050505] text-white hover:bg-white/[0.02]'
                }`}
                data-cursor="hover"
              >
                {/* Accordion Trigger Header */}
                <div className="py-8 md:py-10 px-6 md:px-10 flex items-center justify-between gap-4 select-none">
                  <div className="flex items-baseline md:items-center gap-6 md:gap-12 flex-1 flex-wrap md:flex-nowrap">
                    {/* Number: 02, 03, 04, 05 */}
                    <span
                      className={`font-mono text-2xl sm:text-3xl md:text-4xl font-black tracking-wider transition-colors duration-200 ${
                        isOpen ? 'text-black' : 'text-accent'
                      }`}
                    >
                      {category.number}
                    </span>

                    {/* Title */}
                    <h3
                      className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-black tracking-tight uppercase transition-colors duration-200 ${
                        isOpen ? 'text-black' : 'text-white'
                      }`}
                    >
                      {category.title}
                    </h3>

                    {/* Subtitle tag (desktop) */}
                    <span
                      className={`hidden xl:inline-block font-mono text-xs tracking-wider transition-colors duration-200 ${
                        isOpen ? 'text-black/70' : 'text-secondary'
                      }`}
                    >
                      // {category.subtitle}
                    </span>
                  </div>

                  {/* Arrow Indicator Box */}
                  <div className="flex items-center gap-4 shrink-0">
                    <motion.div
                      animate={{
                        rotate: isOpen ? 45 : 0,
                        scale: isOpen ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.25 }}
                      className={`w-11 h-11 md:w-13 md:h-13 border flex items-center justify-center transition-all duration-200 ${
                        isOpen
                          ? 'border-black bg-black text-accent'
                          : 'border-white/20 text-white'
                      }`}
                    >
                      <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 stroke-[2.2]" />
                    </motion.div>
                  </div>
                </div>

                {/* Expandable Content with Framer Motion AnimatePresence */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-10 pb-10 pt-2 border-t border-black/20 text-black">
                        {/* Category Description */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
                          <div className="lg:col-span-8">
                            <p className="text-lg sm:text-xl font-sans font-medium leading-relaxed text-black">
                              {category.description}
                            </p>
                          </div>
                          <div className="lg:col-span-4 font-mono text-xs border border-black/40 p-4 bg-black/5">
                            <div className="font-bold uppercase tracking-wider mb-1 text-black">
                              // SPECIALIZED HIGHLIGHT
                            </div>
                            <div className="text-black/80 font-sans text-sm">{category.highlight}</div>
                          </div>
                        </div>

                        {/* Skills Pill Badges */}
                        <div>
                          <div className="font-mono text-xs font-bold uppercase tracking-widest mb-3 text-black">
                            // STACK REGISTRY:
                          </div>
                          <div className="flex flex-wrap gap-2.5">
                            {category.skills.map((skill) => (
                              <div
                                key={skill.name}
                                className="px-4 py-2 bg-black text-white font-mono text-xs md:text-sm font-semibold tracking-wide flex items-center gap-2 border border-black shadow-[2px_2px_0px_rgba(0,0,0,0.2)] hover:bg-white hover:text-black transition-colors"
                              >
                                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                                <span>{skill.name}</span>
                                <span className="text-[10px] text-white/50 border-l border-white/20 pl-2">
                                  {skill.level}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

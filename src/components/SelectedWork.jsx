import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink, Eye, Layers } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectMockup from './UI/ProjectMockup';
import ProjectModal from './ProjectModal';
import MagneticButton from './UI/MagneticButton';
import { playClickSound, playHoverSound } from '../utils/sound';

export default function SelectedWork() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProjectId, setHoveredProjectId] = useState(null);

  const handleOpenModal = (project) => {
    playClickSound();
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="work"
      className="relative w-full py-16 md:py-20 px-6 md:px-12 bg-background border-b border-white/10 overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <div className="font-mono text-accent text-sm md:text-base tracking-widest uppercase mb-2">
              03 // SELECTED WORKS
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-black text-white tracking-tight uppercase max-w-full break-normal">
              SELECTED <span className="font-editorial-serif text-accent font-normal italic lowercase">work</span>
            </h2>
          </div>

          <div className="font-mono text-xs text-secondary max-w-sm uppercase tracking-wider">
            [INDEX OF 03 PRODUCTION CASE STUDIES] &mdash; EXPLORE APPLIED AI, MODERN REACT ARCHITECTURE &amp; FULL-STACK SYSTEMS.
          </div>
        </div>

        {/* Large Horizontal Project Cards Stack */}
        <div className="mt-16 space-y-20 md:space-y-32">
          {projectsData.map((project, index) => {
            const isHovered = hoveredProjectId === project.id;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                onMouseEnter={() => {
                  playHoverSound();
                  setHoveredProjectId(project.id);
                }}
                onMouseLeave={() => setHoveredProjectId(null)}
                className="group relative border border-white/15 bg-[#070707] hover:border-accent/90 transition-all duration-500 overflow-hidden"
                data-cursor="view"
                data-cursor-label="VIEW ↗"
              >
                {/* Horizontal Card Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                  {/* Left Column: Visual Mockup Viewport (lg:col-span-7) */}
                  <div
                    onClick={() => handleOpenModal(project)}
                    className="lg:col-span-7 p-4 sm:p-6 md:p-8 cursor-pointer relative overflow-hidden flex flex-col justify-center bg-[#050505]"
                  >
                    <motion.div
                      animate={{ scale: isHovered ? 1.025 : 1 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full h-full"
                    >
                      <ProjectMockup id={project.id} isHovered={isHovered} />
                    </motion.div>
                  </div>

                  {/* Right Column: Project Details (lg:col-span-5) */}
                  <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/10 bg-[#080808] group-hover:bg-[#0c0c0c] transition-colors">
                    {/* Top Row: Number, Category & Year */}
                    <div>
                      <div className="flex items-center justify-between font-mono text-xs mb-6">
                        <span className="text-accent font-bold tracking-widest text-base">
                          {project.number} // 03
                        </span>
                        <span className="text-white/50 tracking-wider">
                          {project.year} &bull; {project.category}
                        </span>
                      </div>

                      {/* Project Title (Clickable) */}
                      <div
                        onClick={() => handleOpenModal(project)}
                        className="cursor-pointer"
                      >
                        <motion.h3
                          animate={{ x: isHovered ? 8 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-white tracking-tight uppercase group-hover:text-accent transition-colors flex items-center justify-between gap-4"
                        >
                          <span>{project.title}</span>
                          <div className="w-10 h-10 border border-white/20 flex items-center justify-center shrink-0 text-white/50 group-hover:border-accent group-hover:bg-accent group-hover:text-black transition-all">
                            <ArrowUpRight className="w-5 h-5" />
                          </div>
                        </motion.h3>
                      </div>

                      {/* Summary */}
                      <p className="mt-4 text-sm sm:text-base text-secondary font-sans font-light leading-relaxed">
                        {project.summary}
                      </p>

                      {/* Technology Chips */}
                      <div className="mt-6 pt-6 border-t border-white/10">
                        <div className="font-mono text-[10px] text-white/40 uppercase tracking-widest mb-3">
                          // TECHNOLOGIES &amp; LIBRARIES:
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 bg-white/5 border border-white/10 text-white/80 font-mono text-xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Actions */}
                    <div className="pt-8 mt-8 border-t border-white/10 flex flex-wrap items-center gap-3">
                      <MagneticButton
                        as="button"
                        type="button"
                        onClick={() => handleOpenModal(project)}
                        data-cursor="hover"
                        className="px-5 py-3 bg-accent text-accent-contrast font-mono font-bold text-xs tracking-wider uppercase flex items-center gap-2 hover:bg-white transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                        <span>EXPLORE CASE STUDY</span>
                      </MagneticButton>

                      <MagneticButton
                        as="a"
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="hover"
                        className="px-3.5 py-3 border border-white/20 hover:border-accent text-white hover:text-accent font-mono text-xs flex items-center gap-1.5 transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>DEMO</span>
                      </MagneticButton>

                      <MagneticButton
                        as="a"
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="hover"
                        className="px-3.5 py-3 border border-white/20 hover:border-accent text-white hover:text-accent font-mono text-xs flex items-center gap-1.5 transition-colors"
                        title="GitHub Repository"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>CODE</span>
                      </MagneticButton>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Full-Screen Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
      />
    </section>
  );
}

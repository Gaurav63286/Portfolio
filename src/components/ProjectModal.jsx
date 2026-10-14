import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, ArrowRight, CheckCircle, Sparkles, Layers, Cpu, ShieldAlert } from 'lucide-react';
import ProjectMockup from './UI/ProjectMockup';
import MagneticButton from './UI/MagneticButton';
import { playClickSound } from '../utils/sound';

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-6 lg:p-12 overflow-y-auto">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              playClickSound();
              onClose();
            }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            initial={{ opacity: 0, y: 50, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-6xl max-h-[92vh] bg-[#080808] border border-white/20 z-10 flex flex-col overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.9)]"
          >
            {/* Modal Header Bar */}
            <div className="flex items-center justify-between px-6 md:px-10 py-5 border-b border-white/10 bg-[#0c0c0c]">
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs px-2.5 py-1 bg-accent text-black font-bold">
                  PROJECT {project.number}
                </span>
                <span className="font-mono text-xs text-white/50 hidden sm:inline">
                  // {project.category}
                </span>
              </div>

              <button
                type="button"
                onClick={() => {
                  playClickSound();
                  onClose();
                }}
                data-cursor="hover"
                className="flex items-center gap-2 text-xs font-mono text-white/70 hover:text-accent border border-white/20 hover:border-accent px-3 py-1.5 transition-colors"
                aria-label="Close modal"
              >
                <span>CLOSE [ESC]</span>
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body: Scrollable */}
            <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-12">
              {/* Title & Overview */}
              <div className="space-y-4">
                <div className="font-mono text-xs text-accent tracking-widest uppercase">
                  CASE STUDY & ARCHITECTURAL BREAKDOWN
                </div>
                <h1 id="modal-title" className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-white uppercase tracking-tight">
                  {project.title}
                </h1>
                <p className="text-lg sm:text-xl text-white/80 font-sans font-light max-w-4xl leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Visual Mockup Stage */}
              <div className="border border-white/15 bg-black/60 p-2 sm:p-4">
                <ProjectMockup id={project.id} isHovered={true} />
              </div>

              {/* Problem vs Solution 2-Column Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Problem Statement */}
                <div className="p-6 md:p-8 border border-white/10 bg-[#0b0b0b] space-y-4">
                  <div className="flex items-center gap-2 font-mono text-xs text-white/60 tracking-wider uppercase">
                    <ShieldAlert className="w-4 h-4 text-rose-400" />
                    <span>THE CHALLENGE / BOTTLENECK</span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-white">
                    The Problem
                  </h3>
                  <p className="text-secondary text-sm md:text-base leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                {/* Solution Architecture */}
                <div className="p-6 md:p-8 border border-accent/30 bg-[#0d120a] space-y-4">
                  <div className="flex items-center gap-2 font-mono text-xs text-accent tracking-wider uppercase">
                    <Sparkles className="w-4 h-4 text-accent" />
                    <span>THE ENGINEERING STRATEGY</span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-white">
                    The Solution
                  </h3>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Core Features List */}
              <div className="space-y-4">
                <div className="font-mono text-xs text-white/50 tracking-wider uppercase">
                  // KEY ARCHITECTURAL FEATURES
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.features.map((feature, i) => (
                    <div
                      key={i}
                      className="p-4 border border-white/10 bg-[#0d0d0d] flex items-start gap-3"
                    >
                      <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm text-white/90 font-sans leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Stack Grid */}
              <div className="space-y-4">
                <div className="font-mono text-xs text-white/50 tracking-wider uppercase">
                  // DEPLOYED TECHNOLOGIES & LIBRARIES
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {project.tags.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-[#121212] border border-white/15 text-accent font-mono text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons: GitHub & Demo */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-4">
                  <MagneticButton
                    as="a"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="hover"
                    className="px-6 py-3.5 bg-accent text-black font-mono font-bold text-xs tracking-wider uppercase flex items-center gap-2 hover:bg-white transition-colors"
                  >
                    <span>LAUNCH LIVE DEMO</span>
                    <ExternalLink className="w-4 h-4" />
                  </MagneticButton>

                  <MagneticButton
                    as="a"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="hover"
                    className="px-6 py-3.5 bg-transparent border border-white/30 text-white font-mono text-xs tracking-wider uppercase flex items-center gap-2 hover:border-accent hover:text-accent transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>VIEW REPOSITORY</span>
                  </MagneticButton>
                </div>

                <div className="font-mono text-xs text-white/40">
                  SYSTEM READY &bull; REVISION {project.year}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

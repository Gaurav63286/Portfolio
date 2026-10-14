import React from 'react';
import { motion } from 'framer-motion';

export default function IntroStatement() {
  return (
    <section className="relative w-full py-16 md:py-20 px-6 md:px-12 bg-background border-b border-white/10 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <div className="flex items-center gap-3 font-mono text-xs text-secondary mb-12">
          <span className="text-accent font-bold">// THE THESIS</span>
          <span className="text-white/20">|</span>
          <span className="tracking-wider uppercase">STATEMENT &amp; PHILOSOPHY</span>
        </div>

        {/* Asymmetric Typography Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Main Headline with Clamped Typography */}
          <div className="lg:col-span-8 max-w-full overflow-hidden">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black tracking-tight text-white leading-[1.08] max-w-full break-words"
            >
              I turn{' '}
              <span className="font-editorial-serif text-accent font-normal text-4xl sm:text-6xl md:text-7xl lg:text-8xl italic underline decoration-accent/40 decoration-1 underline-offset-8">
                ideas
              </span>{' '}
              into digital experiences.
            </motion.h2>
          </div>

          {/* Secondary Editorial Commentary */}
          <div className="lg:col-span-4 lg:pt-4 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="border-l-2 border-accent pl-6 space-y-4"
            >
              <p className="text-base sm:text-lg text-white/90 leading-relaxed font-sans font-light">
                As a Computer Science student at APCOER dedicated to full-stack web development, Python data processing, and machine learning, I engineer software that is useful, reliable, and intelligent.
              </p>
              <p className="text-sm text-secondary leading-relaxed font-sans">
                Rejecting bloated templates and superficial design trends, every component is built for speed, accessibility, and intuitive human response.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

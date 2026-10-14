import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Terminal, Sparkles, Activity, Layers, ArrowUpRight, ShieldCheck, Zap, BarChart3, Database } from 'lucide-react';

export default function ProjectMockup({ id, isHovered = false }) {
  if (id === 'customer-review-analysis') {
    return (
      <div className="relative w-full h-full min-h-[260px] md:min-h-[340px] bg-[#090909] border border-white/10 rounded-none overflow-hidden p-6 flex flex-col justify-between group">
        {/* Editorial Grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        {/* Top bar */}
        <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2 font-mono text-[11px] text-accent tracking-wider">
            <BarChart3 className="w-3.5 h-3.5 text-accent" />
            <span>PYTHON_ANALYTICS // PANDAS &times; NUMPY</span>
          </div>
          <div className="flex items-center gap-2 font-mono text-[10px] text-white/50">
            <span className="px-2 py-0.5 border border-accent/30 bg-accent/10 text-accent font-bold">
              8,420 RECORDS
            </span>
          </div>
        </div>

        {/* Center UI visualization: DataFrame and Sentiment Visual Output */}
        <div className="relative z-10 my-auto py-3 space-y-3">
          {/* Mock Pandas DataFrame Preview */}
          <div className="bg-black/90 border border-white/15 p-3 relative backdrop-blur-md">
            <div className="flex items-center justify-between mb-2 text-[10px] text-white/60 font-mono">
              <span>DATAFRAME: feedback_processed.head(3)</span>
              <span className="text-accent">CLEANING_PIPELINE: DONE</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left font-mono text-[11px] text-white/80">
                <thead>
                  <tr className="border-b border-white/10 text-[9px] text-white/40">
                    <th className="pb-1">ID</th>
                    <th className="pb-1">KEYWORD_CLUSTER</th>
                    <th className="pb-1">SENTIMENT</th>
                    <th className="pb-1 text-right">SCORE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr>
                    <td className="py-1 text-white/40">#1042</td>
                    <td className="py-1 text-accent">UI_RESPONSIVENESS</td>
                    <td className="py-1 text-white/90">POSITIVE</td>
                    <td className="py-1 text-right text-accent font-bold">0.96</td>
                  </tr>
                  <tr>
                    <td className="py-1 text-white/40">#1043</td>
                    <td className="py-1 text-white/80">CHECKOUT_LATENCY</td>
                    <td className="py-1 text-amber-300">NEUTRAL</td>
                    <td className="py-1 text-right text-white/80">0.52</td>
                  </tr>
                  <tr>
                    <td className="py-1 text-white/40">#1044</td>
                    <td className="py-1 text-accent">SYSTEM_RELIABILITY</td>
                    <td className="py-1 text-white/90">POSITIVE</td>
                    <td className="py-1 text-right text-accent font-bold">0.91</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Matplotlib bar chart visualization */}
            <div className="mt-3 pt-3 border-t border-white/10">
              <div className="flex justify-between items-center text-[9px] font-mono text-white/50 mb-1.5">
                <span>MATPLOTLIB DISTRIBUTION PLOT</span>
                <span>ACCURACY: 98.4%</span>
              </div>
              <div className="flex items-end gap-1.5 h-12 w-full pt-1">
                {[35, 60, 42, 85, 95, 70, 88, 62, 78, 92, 54, 80].map((h, i) => (
                  <div key={i} className="flex-1 bg-white/10 relative h-full flex items-end">
                    <div
                      className="w-full bg-accent transition-all duration-500 group-hover:opacity-100 opacity-80"
                      style={{ height: `${h}%` }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom indicator */}
        <div className="relative z-10 flex items-center justify-between font-mono text-[10px] text-white/40 pt-2 border-t border-white/10">
          <span>PYTHON / PANDAS / NUMPY / MATPLOTLIB</span>
          <span className="text-white/80 group-hover:text-accent transition-colors">STRUCTURED DATA OUTPUT</span>
        </div>
      </div>
    );
  }


  if (id === 'nexora-ui') {
    return (
      <div className="relative w-full h-full min-h-[260px] md:min-h-[340px] bg-[#090909] border border-white/10 rounded-none overflow-hidden p-6 flex flex-col justify-between group">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px]" />

        {/* Header */}
        <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3 font-mono text-[11px]">
          <span className="text-white/80 flex items-center gap-2">
            <Layers className="w-3.5 h-3.5 text-accent" />
            NEXORA.PRIMITIVE_INSPECTOR
          </span>
          <span className="px-2 py-0.5 border border-accent/40 text-accent text-[10px]">
            WAI-ARIA 1.2
          </span>
        </div>

        {/* Interactive workbench mock */}
        <div className="relative z-10 space-y-3 my-auto py-3">
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 border border-white/15 bg-white/5 backdrop-blur-sm">
              <span className="text-[10px] font-mono text-white/50 block mb-1">SPRING PHYSICS</span>
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-accent w-4/5 transition-all duration-500 group-hover:w-full" />
              </div>
              <div className="flex justify-between text-[9px] font-mono text-white/60 mt-1">
                <span>STIFFNESS: 400</span>
                <span>DAMPING: 28</span>
              </div>
            </div>

            <div className="p-3 border border-white/15 bg-white/5 backdrop-blur-sm">
              <span className="text-[10px] font-mono text-white/50 block mb-1">ACCESSIBILITY SCORE</span>
              <div className="text-xl font-bold text-accent font-mono leading-none mt-1">100 / 100</div>
              <span className="text-[9px] font-mono text-white/40">WCAG AAA Certified</span>
            </div>
          </div>

          <div className="p-3 border border-white/15 bg-[#111] font-mono text-xs text-white/80 flex items-center justify-between">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              &lt;EditorialModal animation="spring" /&gt;
            </span>
            <span className="text-[10px] text-accent border border-accent/30 px-1.5 py-0.5">COMPILED</span>
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10 flex items-center justify-between font-mono text-[10px] text-white/40 pt-2 border-t border-white/10">
          <span>REACT / JAVASCRIPT / TAILWIND</span>
          <span className="text-accent">ZERO LAYOUT SHIFT</span>
        </div>
      </div>
    );
  }

  // Default: CareerAI
  return (
    <div className="relative w-full h-full min-h-[260px] md:min-h-[340px] bg-[#090909] border border-white/10 rounded-none overflow-hidden p-6 flex flex-col justify-between group">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,#ffffff05_25%,transparent_25%,transparent_75%,#ffffff05_75%)] bg-[size:16px_16px]" />

      {/* Top Bar */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3 font-mono text-[11px]">
        <span className="text-white/80 flex items-center gap-2">
          <Zap className="w-3.5 h-3.5 text-accent" />
          CAREER_AI // RESUME_PARSER
        </span>
        <span className="text-accent text-[10px] flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
          NLP_ACTIVE
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 my-auto py-3 space-y-2">
        <div className="border border-white/15 bg-black/90 p-3.5">
          <div className="flex justify-between items-center font-mono text-[11px] mb-2">
            <span className="text-white/70">MATCH_SCORE_ANALYSIS</span>
            <span className="text-accent font-bold">85% OVERLAP</span>
          </div>
          
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-xs py-1 px-2 bg-white/5 border border-white/5">
              <span className="text-white/90">Skill Extraction (spaCy NLP)</span>
              <span className="font-mono text-accent">SUCCESS</span>
            </div>
            <div className="flex items-center justify-between text-xs py-1 px-2 bg-white/5 border border-white/5">
              <span className="text-white/90">Missing Skills Detected</span>
              <span className="font-mono text-rose-400">React, TypeScript</span>
            </div>
          </div>

          <div className="flex justify-between items-center mt-3 pt-2 border-t border-white/10 font-mono text-[10px]">
            <span className="text-white/40">ENGINE: SENTENCE-TRANSFORMERS</span>
            <span className="text-white/90 font-bold">LATENCY: 45ms</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 flex items-center justify-between font-mono text-[10px] text-white/40 pt-2 border-t border-white/10">
        <span>NEXT.JS / FASTAPI / PYTHON / NLP</span>
        <span className="text-white/80">ROADMAP_GENERATED</span>
      </div>
    </div>
  );
}

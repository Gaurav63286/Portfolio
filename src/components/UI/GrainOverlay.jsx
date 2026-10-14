import React from 'react';

export default function GrainOverlay() {
  return (
    <div 
      className="pointer-events-none fixed inset-0 z-50 opacity-[0.035] select-none bg-grain"
      aria-hidden="true"
    />
  );
}

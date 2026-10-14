import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState('default'); // 'default', 'hover', 'view', 'text'
  const [cursorLabel, setCursorLabel] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Check if device has fine pointer / touch
    if (window.matchMedia('(pointer: coarse)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsTouch(true);
      return;
    }

    document.body.classList.add('custom-cursor-active');

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Handle data-cursor attributes
    const handleMouseOver = (e) => {
      const target = e.target.closest('[data-cursor]');
      const clickable = e.target.closest('a, button, [role="button"], input, textarea');

      if (target) {
        const type = target.getAttribute('data-cursor');
        const label = target.getAttribute('data-cursor-label') || '';
        setCursorState(type);
        setCursorLabel(label);
      } else if (clickable) {
        setCursorState('hover');
        setCursorLabel('');
      } else {
        setCursorState('default');
        setCursorLabel('');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible]);

  if (isTouch) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden transition-opacity duration-300">
      {/* Outer Spring Follower */}
      <motion.div
        className={`fixed left-0 top-0 flex items-center justify-center rounded-full pointer-events-none ${
          cursorState === 'view'
            ? 'bg-accent text-black font-mono font-bold text-xs shadow-[0_0_25px_rgba(191,255,0,0.6)]'
            : cursorState === 'hover'
            ? 'border border-accent bg-accent/15 backdrop-blur-[1px]'
            : 'border border-white/40 bg-transparent'
        }`}
        animate={{
          x: mousePos.x - (cursorState === 'view' ? 44 : cursorState === 'hover' ? 24 : 14),
          y: mousePos.y - (cursorState === 'view' ? 44 : cursorState === 'hover' ? 24 : 14),
          width: cursorState === 'view' ? 88 : cursorState === 'hover' ? 48 : 28,
          height: cursorState === 'view' ? 88 : cursorState === 'hover' ? 48 : 28,
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0.4,
        }}
        transition={{
          type: 'spring',
          stiffness: 450,
          damping: 28,
          mass: 0.5,
        }}
      >
        {cursorState === 'view' && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="tracking-wider uppercase text-[10px]"
          >
            {cursorLabel || 'VIEW ↗'}
          </motion.span>
        )}
      </motion.div>

      {/* Center Precise Dot (only for default & hover) */}
      {cursorState !== 'view' && (
        <motion.div
          className="fixed left-0 top-0 h-1.5 w-1.5 rounded-full bg-accent pointer-events-none"
          animate={{
            x: mousePos.x - 3,
            y: mousePos.y - 3,
            opacity: isVisible ? 1 : 0,
          }}
          transition={{
            type: 'spring',
            stiffness: 1200,
            damping: 40,
          }}
        />
      )}
    </div>
  );
}

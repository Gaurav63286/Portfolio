import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { playHoverSound } from '../../utils/sound';

export default function MagneticButton({
  children,
  className = '',
  strength = 0.35,
  onClick,
  as = 'button',
  href,
  target,
  rel,
  ...props
}) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = (e.clientX - centerX) * strength;
    const distanceY = (e.clientY - centerY) * strength;
    setPosition({ x: distanceX, y: distanceY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseEnter = () => {
    playHoverSound();
  };

  const Component = motion[as] || motion.button;

  return (
    <Component
      ref={ref}
      className={`relative inline-flex items-center justify-center transition-colors duration-200 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onClick={onClick}
      href={href}
      target={target}
      rel={rel}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 220, damping: 15, mass: 0.1 }}
      {...props}
    >
      {children}
    </Component>
  );
}

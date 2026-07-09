import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '../../hooks';

const CursorGlow: React.FC = () => {
  const { x, y } = useMousePosition();
  const dotRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {/* Large glow halo */}
      <motion.div
        className="cursor-glow pointer-events-none fixed z-[9998] hidden md:block"
        animate={{ x: x - 200, y: y - 200 }}
        transition={{ type: 'spring', stiffness: 120, damping: 28, mass: 0.5 }}
        style={{
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(6,182,212,0.06) 0%, rgba(168,85,247,0.03) 50%, transparent 70%)',
          mixBlendMode: 'screen',
        }}
      />
      {/* Small dot cursor */}
      <motion.div
        ref={dotRef}
        className="pointer-events-none fixed z-[9999] hidden md:block"
        animate={{ x: x - 4, y: y - 4 }}
        transition={{ type: 'spring', stiffness: 800, damping: 35 }}
        style={{
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #06B6D4, #A855F7)',
          boxShadow: '0 0 10px rgba(6,182,212,0.8)',
        }}
      />
    </>
  );
};

export default CursorGlow;

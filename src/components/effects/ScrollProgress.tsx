import React from 'react';
import { motion } from 'framer-motion';
import { useScrollProgress } from '../../hooks';

const ScrollProgress: React.FC = () => {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] h-[2px] pointer-events-none">
      <motion.div
        className="h-full origin-left"
        style={{
          scaleX: progress / 100,
          background: 'linear-gradient(90deg, #06B6D4, #A855F7, #3B82F6)',
          boxShadow: '0 0 8px rgba(6,182,212,0.8)',
        }}
      />
    </div>
  );
};

export default ScrollProgress;

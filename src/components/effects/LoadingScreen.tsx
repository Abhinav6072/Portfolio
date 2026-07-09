import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loading"
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#020408]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {/* Background orbs */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="orb orb-cyan w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <div className="orb orb-purple w-[400px] h-[400px] top-1/3 left-1/3" />
          </div>

          {/* Grid */}
          <div className="animated-grid opacity-30" />

          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: 'spring', stiffness: 200 }}
              className="relative"
            >
              <div
                className="w-24 h-24 rounded-2xl flex items-center justify-center text-3xl font-bold font-display"
                style={{
                  background: 'linear-gradient(135deg, rgba(6,182,212,0.2), rgba(168,85,247,0.2))',
                  border: '2px solid rgba(6,182,212,0.4)',
                  boxShadow: '0 0 40px rgba(6,182,212,0.3), 0 0 80px rgba(168,85,247,0.15)',
                }}
              >
                <span className="text-gradient text-4xl">AS</span>
              </div>
              {/* Rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-[-8px] rounded-3xl border-2 border-transparent"
                style={{
                  borderTopColor: '#06B6D4',
                  borderRightColor: '#A855F7',
                }}
              />
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-2xl font-bold font-display text-white mb-1">Abhinav Singh</h1>
              <p className="text-sm text-cyan-400 font-mono tracking-widest uppercase">
                Full Stack Engineer
              </p>
            </motion.div>

            {/* Loading bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="w-48 h-0.5 bg-white/10 rounded-full overflow-hidden"
            >
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                className="h-full w-1/2 rounded-full"
                style={{ background: 'linear-gradient(90deg, transparent, #06B6D4, #A855F7, transparent)' }}
              />
            </motion.div>

            {/* Status text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
              className="text-xs text-white/30 font-mono tracking-wider"
            >
              INITIALIZING...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;

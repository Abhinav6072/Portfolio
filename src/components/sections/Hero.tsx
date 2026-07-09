import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Download, ArrowRight, ChevronDown } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useTypingAnimation, useInView } from '../../hooks';
import { heroStats, typingRoles } from '../../data';

const HeroParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles: Array<{
      x: number; y: number; vx: number; vy: number;
      size: number; opacity: number; color: string;
    }> = [];

    const colors = ['#06B6D4', '#A855F7', '#3B82F6', '#10B981'];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.6 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(6,182,212,${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
    />
  );
};

const Hero: React.FC = () => {
  const role = useTypingAnimation(typingRoles, 80, 40, 2200);
  const { ref: statsRef, isInView: statsInView } = useInView(0.3);

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Particle canvas */}
      <HeroParticles />

      {/* Animated grid */}
      <div className="animated-grid opacity-40" aria-hidden="true" />

      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: -5 }}
          className="absolute top-1/3 right-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(168,85,247,0.10) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <motion.div
          animate={{ x: [0, 20, -10, 0], y: [0, 30, 10, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: -8 }}
          className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        {/* Glowing circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-cyan-500/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-purple-500/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-blue-500/5" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-5rem)]">
          
          {/* Left: Text Content */}
          <div className="flex flex-col justify-center py-12 lg:py-0 order-2 lg:order-1">
            
            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <div
                className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium"
                style={{
                  background: 'rgba(16,185,129,0.1)',
                  border: '1px solid rgba(16,185,129,0.25)',
                  color: '#10B981',
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for opportunities
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl sm:text-6xl xl:text-7xl font-black font-display leading-[1.05] mb-4"
            >
              <span className="block text-white">Hi, I'm</span>
              <span className="block text-gradient">Abhinav</span>
              <span className="block text-white">Singh</span>
            </motion.h1>

            {/* Typing role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-2 mb-5 h-8"
            >
              <span className="text-xl sm:text-2xl text-white/50 font-mono">&gt;</span>
              <span className="text-xl sm:text-2xl font-mono text-cyan-400 font-medium">
                {role}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="ml-0.5 inline-block w-0.5 h-6 bg-cyan-400 align-middle"
                />
              </span>
            </motion.div>

            {/* Headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base sm:text-lg text-white/60 leading-relaxed mb-8 max-w-xl"
            >
              Building <span className="text-cyan-400 font-medium">scalable</span>,{' '}
              <span className="text-purple-400 font-medium">secure</span> and{' '}
              <span className="text-blue-400 font-medium">high-performance</span> web applications
              with the MERN Stack.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(6,182,212,0.5)' }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToProjects}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white text-sm relative overflow-hidden group"
                style={{ background: 'linear-gradient(135deg, #06B6D4, #A855F7)' }}
                id="hero-view-projects-btn"
              >
                <span className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
                <ArrowRight size={16} />
                View Projects
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-cyan-400 text-sm border border-cyan-500/30 hover:border-cyan-500/60 hover:bg-cyan-500/5 transition-all"
                id="hero-hire-me-btn"
              >
                <Mail size={16} />
                Hire Me
              </motion.button>

              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white/60 text-sm border border-white/10 hover:border-white/20 hover:bg-white/5 hover:text-white transition-all"
                id="hero-download-resume-btn"
              >
                <Download size={16} />
                Resume
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-3"
            >
              <span className="text-xs text-white/30 font-mono tracking-wider uppercase">Connect</span>
              <div className="w-8 h-px bg-white/10" />
              {[
                { icon: FaGithub, href: 'https://github.com/Abhinav6072', label: 'GitHub', color: 'hover:text-white hover:border-white/30' },
                { icon: FaLinkedin, href: 'https://www.linkedin.com/in/abhinav-singh-a6a5b3385', label: 'LinkedIn', color: 'hover:text-blue-400 hover:border-blue-400/30' },
                { icon: Mail, href: 'mailto:abhinava2k@gmail.com', label: 'Email', color: 'hover:text-cyan-400 hover:border-cyan-400/30' },
              ].map(({ icon: Icon, href, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-9 h-9 rounded-xl flex items-center justify-center text-white/40 border border-white/10 transition-all duration-200 ${color}`}
                  aria-label={label}
                  id={`hero-social-${label.toLowerCase()}`}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right: Profile Photo */}
          <div className="flex justify-center items-center order-1 lg:order-2 pt-24 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, type: 'spring', stiffness: 100 }}
              className="relative"
            >
              {/* Outer rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-[-20px] rounded-full border border-dashed border-cyan-500/20"
                aria-hidden="true"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-[-40px] rounded-full border border-dashed border-purple-500/15"
                aria-hidden="true"
              />

              {/* Floating tech badges */}
              {[
                { text: 'React', color: '#61DAFB', pos: 'top-4 -left-8 sm:-left-16', delay: 0 },
                { text: 'Node.js', color: '#339933', pos: 'top-1/3 -right-6 sm:-right-14', delay: 0.5 },
                { text: 'MongoDB', color: '#47A248', pos: 'bottom-1/4 -left-8 sm:-left-16', delay: 1 },
                { text: 'TypeScript', color: '#3178C6', pos: 'bottom-4 -right-6 sm:-right-14', delay: 1.5 },
              ].map(({ text, color, pos, delay }) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
                  transition={{ delay: delay + 1, duration: 0.5, y: { duration: 3 + delay, repeat: Infinity, ease: 'easeInOut', delay: delay } }}
                  className={`absolute ${pos} px-2 py-1 rounded-lg text-xs font-mono font-semibold whitespace-nowrap`}
                  style={{
                    background: `rgba(${color === '#61DAFB' ? '97,218,251' : color === '#339933' ? '51,153,51' : color === '#47A248' ? '71,162,72' : '49,120,198'},0.15)`,
                    border: `1px solid ${color}30`,
                    color: color,
                  }}
                  aria-hidden="true"
                >
                  {text}
                </motion.div>
              ))}

              {/* Photo container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                {/* Glow backdrop */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, rgba(6,182,212,0.2) 0%, rgba(168,85,247,0.15) 50%, transparent 70%)',
                    filter: 'blur(20px)',
                    transform: 'scale(1.1)',
                  }}
                  aria-hidden="true"
                />

                {/* Image frame */}
                <div
                  className="relative w-full h-full rounded-full overflow-hidden"
                  style={{
                    border: '2px solid rgba(6,182,212,0.3)',
                    boxShadow: '0 0 40px rgba(6,182,212,0.25), 0 0 80px rgba(168,85,247,0.15), inset 0 0 40px rgba(6,182,212,0.05)',
                  }}
                >
                  <img
                    src="./profile.png"
                    alt="Abhinav Singh - Full Stack Software Engineer"
                    className="w-full h-full object-cover object-top"
                    loading="eager"
                  />
                  {/* Subtle overlay */}
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(180deg, transparent 60%, rgba(2,4,8,0.3) 100%)' }}
                    aria-hidden="true"
                  />
                </div>

                {/* Scan line effect */}
                <motion.div
                  animate={{ y: ['0%', '100%', '0%'] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 pointer-events-none overflow-hidden rounded-full"
                  aria-hidden="true"
                >
                  <div
                    className="w-full h-1 opacity-20"
                    style={{ background: 'linear-gradient(90deg, transparent, #06B6D4, transparent)' }}
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 40 }}
          animate={statsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="pb-12 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 -mt-8"
        >
          {heroStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={statsInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.1 + 0.3 }}
              className="text-center p-3 rounded-xl"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <div className="text-2xl sm:text-3xl font-black font-display text-gradient">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-xs text-white/40 mt-0.5">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-xs text-white/30 font-mono tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={16} className="text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

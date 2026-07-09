import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../../hooks';
import { Mail, MapPin, Code2, Zap, Target, Heart } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const cards = [
  {
    icon: Code2,
    title: 'What I Do',
    color: '#06B6D4',
    content: 'I build end-to-end web applications using the MERN stack — from designing intuitive UIs to architecting scalable backend systems.',
  },
  {
    icon: Target,
    title: 'My Goal',
    color: '#A855F7',
    content: "Join a top-tier product company where I can solve real problems at scale. I'm actively seeking full-time roles, remote opportunities, and freelance projects.",
  },
  {
    icon: Zap,
    title: 'My Passion',
    color: '#3B82F6',
    content: 'I love the intersection of beautiful design and powerful engineering. Turning complex problems into elegant, performant solutions is what drives me.',
  },
  {
    icon: Heart,
    title: 'My Values',
    color: '#10B981',
    content: 'Clean code, continuous learning, and shipping quality products. I believe attention to detail separates good developers from great ones.',
  },
];

const quickInfo = [
  { label: 'Location', value: 'India', icon: MapPin },
  { label: 'Email', value: 'abhinava2k@gmail.com', icon: Mail },
  { label: 'GitHub', value: 'Abhinav6072', icon: FaGithub },
  { label: 'LinkedIn', value: 'abhinav-singh', icon: FaLinkedin },
];

const About: React.FC = () => {
  const { ref, isInView } = useInView(0.1);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
  };

  return (
    <section id="about" className="relative py-24 overflow-hidden" aria-label="About section">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, #A855F7, transparent)', filter: 'blur(80px)' }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-5"
          style={{ background: 'radial-gradient(circle, #06B6D4, transparent)', filter: 'blur(80px)' }}
        />
      </div>

      <div className="section-container" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-gradient-to-r from-cyan-500 to-transparent" />
              <span className="text-cyan-400 text-sm font-mono tracking-wider uppercase">About Me</span>
            </div>
            <h2 className="section-title text-white">
              The Story Behind
              <span className="text-gradient block">The Code</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Left: Story */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div
                className="p-6 rounded-2xl"
                style={{ background: 'rgba(6,182,212,0.04)', border: '1px solid rgba(6,182,212,0.1)' }}
              >
                <p className="text-white/80 text-lg leading-relaxed mb-4">
                  I'm a <span className="text-cyan-400 font-semibold">passionate Full Stack Software Engineer</span> specializing
                  in JavaScript, React, Node.js, Express.js, and MongoDB.
                </p>
                <p className="text-white/60 leading-relaxed mb-4">
                  I enjoy solving real-world problems, designing scalable backend systems, creating modern user
                  experiences, and building production-ready applications that make a difference.
                </p>
                <p className="text-white/60 leading-relaxed">
                  Currently looking for <span className="text-purple-400 font-medium">Full-Time Software Engineer roles</span>,{' '}
                  <span className="text-blue-400 font-medium">Remote International Opportunities</span>, and{' '}
                  <span className="text-emerald-400 font-medium">Freelance Projects</span> where I can
                  bring significant value and grow rapidly.
                </p>
              </div>

              {/* Quick Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {quickInfo.map(({ label, value, icon: Icon }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 p-3 rounded-xl"
                    style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(6,182,212,0.1)' }}
                    >
                      <Icon size={14} className="text-cyan-400" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-white/30 font-mono">{label}</p>
                      <p className="text-sm text-white/80 truncate">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex gap-3 pt-2">
                <a
                  href="https://github.com/Abhinav6072"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-sm py-2.5 px-5"
                  id="about-github-btn"
                >
                  <FaGithub size={16} />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/abhinav-singh-a6a5b3385"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm py-2.5 px-5"
                  id="about-linkedin-btn"
                >
                  <FaLinkedin size={16} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </motion.div>

            {/* Right: Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cards.map(({ icon: Icon, title, color, content }, i) => (
                <motion.div
                  key={title}
                  variants={itemVariants}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="glass-card p-5 cursor-default group"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                    style={{ background: `${color}15`, border: `1px solid ${color}25` }}
                  >
                    <Icon size={20} style={{ color }} />
                  </div>
                  <h3 className="font-bold font-display text-white text-base mb-2">{title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{content}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

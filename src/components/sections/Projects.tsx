import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../../hooks';
import { projects } from '../../data';
import { ExternalLink, X, ChevronRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import type { Project } from '../../types';

const filterTabs = [
  { key: 'all', label: 'All Projects' },
  { key: 'fullstack', label: 'Full Stack' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
  { key: 'ai', label: 'AI' },
];

const ProjectCard: React.FC<{ project: Project; index: number; isInView: boolean; onOpen: (p: Project) => void }> = ({
  project, index, isInView, onOpen
}) => {
  const gradientColors: Record<string, string> = {
    'from-cyan-500 to-blue-600': 'linear-gradient(135deg, #06B6D4, #3B82F6)',
    'from-purple-500 to-pink-600': 'linear-gradient(135deg, #A855F7, #EC4899)',
    'from-emerald-500 to-teal-600': 'linear-gradient(135deg, #10B981, #14B8A6)',
    'from-orange-500 to-red-600': 'linear-gradient(135deg, #F97316, #EF4444)',
  };
  const gradient = gradientColors[project.gradient] || 'linear-gradient(135deg, #06B6D4, #A855F7)';

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -8 }}
      className="glass-card group cursor-pointer overflow-hidden"
      onClick={() => onOpen(project)}
      role="article"
      aria-label={`${project.title} project card`}
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onOpen(project)}
    >
      {/* Project Preview Banner */}
      <div className="relative h-44 overflow-hidden rounded-t-xl -m-px">
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ background: gradient }}
        >
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.05) 20px, rgba(255,255,255,0.05) 21px)'
          }} />
          <div className="text-center z-10 px-6">
            <div className="text-5xl mb-2">
              {project.id === 'smart-elearning' ? '🎓' :
               project.id === 'doctor-appointment' ? '🏥' :
               project.id === 'leetcode-clone' ? '💻' : '🤖'}
            </div>
            <p className="text-white/90 text-sm font-semibold">{project.tagline}</p>
          </div>
        </div>
        {/* Category badge */}
        <div className="absolute top-3 right-3">
          <span
            className="px-2 py-1 rounded-full text-xs font-mono text-white"
            style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)' }}
          >
            {project.category.toUpperCase()}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-bold font-display text-white text-lg mb-2 group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-white/55 text-sm leading-relaxed mb-4 line-clamp-2">{project.description}</p>

        {/* Tech stack badges */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techStack.slice(0, 5).map((tech) => (
            <span key={tech} className="tech-badge">{tech}</span>
          ))}
          {project.techStack.length > 5 && (
            <span className="tech-badge">+{project.techStack.length - 5}</span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-3 border-t border-white/5">
          <div className="flex gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-white/50 hover:text-white transition-colors py-1.5 px-3 rounded-lg hover:bg-white/5"
              onClick={(e) => e.stopPropagation()}
              aria-label={`View ${project.title} on GitHub`}
              id={`project-github-${project.id}`}
            >
              <FaGithub size={13} />
              GitHub
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 transition-colors py-1.5 px-3 rounded-lg hover:bg-cyan-500/5"
              onClick={(e) => e.stopPropagation()}
              aria-label={`View ${project.title} live demo`}
              id={`project-demo-${project.id}`}
            >
              <ExternalLink size={13} />
              Live Demo
            </a>
          </div>
          <motion.button
            whileHover={{ x: 3 }}
            className="text-xs text-white/30 flex items-center gap-1 hover:text-cyan-400 transition-colors"
            onClick={() => onOpen(project)}
            aria-label={`View ${project.title} details`}
          >
            Details <ChevronRight size={12} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

// Project Detail Modal
const ProjectModal: React.FC<{ project: Project | null; onClose: () => void }> = ({ project, onClose }) => {
  if (!project) return null;

  const gradientColors: Record<string, string> = {
    'from-cyan-500 to-blue-600': 'linear-gradient(135deg, #06B6D4, #3B82F6)',
    'from-purple-500 to-pink-600': 'linear-gradient(135deg, #A855F7, #EC4899)',
    'from-emerald-500 to-teal-600': 'linear-gradient(135deg, #10B981, #14B8A6)',
    'from-orange-500 to-red-600': 'linear-gradient(135deg, #F97316, #EF4444)',
  };
  const gradient = gradientColors[project.gradient] || 'linear-gradient(135deg, #06B6D4, #A855F7)';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[2000] flex items-center justify-center p-4"
      style={{ background: 'rgba(2,4,8,0.85)', backdropFilter: 'blur(12px)' }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} details`}
    >
      <motion.div
        initial={{ scale: 0.9, y: 40, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 40, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl"
        style={{ background: '#0A0F1E', border: '1px solid rgba(6,182,212,0.15)', boxShadow: '0 40px 80px rgba(0,0,0,0.6)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative h-48 flex items-end p-6" style={{ background: gradient }}>
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.05) 20px, rgba(255,255,255,0.05) 21px)'
          }} />
          <div className="relative z-10">
            <span className="text-white/60 text-sm font-mono uppercase tracking-wider">{project.category}</span>
            <h2 className="text-2xl font-black font-display text-white mt-1">{project.title}</h2>
            <p className="text-white/80 text-sm mt-1">{project.tagline}</p>
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-xl flex items-center justify-center text-white/60 hover:text-white transition-all"
            style={{ background: 'rgba(0,0,0,0.3)' }}
            aria-label="Close modal"
          >
            <X size={16} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          {/* Problem & Solution */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl" style={{ background: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.15)' }}>
              <h3 className="font-semibold text-red-400 text-sm mb-2 flex items-center gap-2">🔴 Problem</h3>
              <p className="text-white/60 text-sm leading-relaxed">{project.problem}</p>
            </div>
            <div className="p-4 rounded-xl" style={{ background: 'rgba(16,185,129,0.05)', border: '1px solid rgba(16,185,129,0.15)' }}>
              <h3 className="font-semibold text-emerald-400 text-sm mb-2 flex items-center gap-2">✅ Solution</h3>
              <p className="text-white/60 text-sm leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-bold font-display text-white mb-3">Key Features</h3>
            <div className="grid sm:grid-cols-2 gap-2">
              {project.features.map((f) => (
                <div key={f} className="flex gap-2 text-sm text-white/60">
                  <span className="text-cyan-400 flex-shrink-0">▸</span>
                  {f}
                </div>
              ))}
            </div>
          </div>

          {/* Architecture & Role */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <h3 className="font-bold font-display text-white mb-2 text-sm">Architecture</h3>
              <p className="text-white/55 text-sm leading-relaxed">{project.architecture}</p>
            </div>
            <div>
              <h3 className="font-bold font-display text-white mb-2 text-sm">My Role</h3>
              <p className="text-white/55 text-sm leading-relaxed">{project.role}</p>
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="font-bold font-display text-white mb-3">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="tech-badge">{tech}</span>
              ))}
            </div>
          </div>

          {/* Future Improvements */}
          <div className="p-4 rounded-xl" style={{ background: 'rgba(168,85,247,0.05)', border: '1px solid rgba(168,85,247,0.1)' }}>
            <h3 className="font-bold font-display text-purple-400 mb-2 text-sm">🚀 Future Improvements</h3>
            <div className="grid sm:grid-cols-2 gap-1.5">
              {project.futureImprovements.map((f) => (
                <div key={f} className="text-sm text-white/50 flex gap-2">
                  <span className="text-purple-400">▸</span>
                  {f}
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex-1 justify-center py-2.5 text-sm"
              id={`modal-github-${project.id}`}
            >
              <FaGithub size={16} />
              View on GitHub
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex-1 justify-center py-2.5 text-sm"
              id={`modal-demo-${project.id}`}
            >
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { ref, isInView } = useInView(0.05);

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-24 overflow-hidden" aria-label="Projects section">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, #A855F7, transparent)', filter: 'blur(80px)' }}
        />
      </div>

      <div className="section-container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-gradient-to-r from-emerald-500 to-transparent" />
            <span className="text-emerald-400 text-sm font-mono tracking-wider uppercase">Portfolio</span>
          </div>
          <h2 className="section-title text-white">
            Featured
            <span className="text-gradient block">Projects</span>
          </h2>
          <p className="section-subtitle mt-3">
            Production-ready applications built with scalability, performance, and beautiful UX in mind.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-10"
          role="tablist"
          aria-label="Project categories"
        >
          {filterTabs.map((tab) => (
            <motion.button
              key={tab.key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(tab.key)}
              role="tab"
              aria-selected={activeFilter === tab.key}
              id={`projects-tab-${tab.key}`}
              className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200"
              style={
                activeFilter === tab.key
                  ? { background: 'rgba(6,182,212,0.15)', border: '1px solid rgba(6,182,212,0.35)', color: '#06B6D4' }
                  : { background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.4)' }
              }
            >
              {tab.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            role="tabpanel"
          >
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                isInView={isInView}
                onOpen={setSelectedProject}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-white/40 text-sm mb-4">Want to see more? Check out all my repositories.</p>
          <a
            href="https://github.com/Abhinav6072"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex"
            id="projects-github-profile-btn"
          >
            <FaGithub size={16} />
            View GitHub Profile
          </a>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;

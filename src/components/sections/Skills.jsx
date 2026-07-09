import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "../../hooks";
import { skills } from "../../data";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiRedux,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiPostman,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiGit,
  SiGithub,
  SiDocker,
  SiVercel,
  SiPython,
  SiCplusplus,
  SiLinux,
  SiNpm,
  SiFigma,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const iconMap = {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiRedux,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiPostman,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiGit,
  SiGithub,
  SiDocker,
  SiVercel,
  SiPython,
  SiCplusplus,
  SiLinux,
  SiNpm,
  SiFigma,
  SiVisualstudiocode: VscVscode,
};

const categoryTabs = [
  { key: "all", label: "All Skills", color: "#06B6D4" },
  { key: "frontend", label: "Frontend", color: "#61DAFB" },
  { key: "backend", label: "Backend", color: "#339933" },
  { key: "database", label: "Database", color: "#47A248" },
  { key: "devops", label: "DevOps", color: "#F05032" },
  { key: "cloud", label: "Cloud", color: "#FF9900" },
  { key: "tools", label: "Tools", color: "#007ACC" },
  { key: "languages", label: "Languages", color: "#F7DF1E" },
];

const SkillCard = ({ skill, index, isInView }) => {
  const [hovered, setHovered] = useState(false);
  const IconComponent = iconMap[skill.icon];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ delay: index * 0.04, duration: 0.5, ease: "easeOut" }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -4 }}
      className="glass-card p-4 group cursor-default"
      style={
        hovered
          ? {
              borderColor: `${skill.color}30`,
              boxShadow: `0 0 20px ${skill.color}15, 0 4px 20px rgba(0,0,0,0.3)`,
            }
          : {}
      }
    >
      {/* Icon */}
      <div className="flex items-center gap-3 mb-3">
        <motion.div
          animate={
            hovered ? { scale: 1.2, rotate: 5 } : { scale: 1, rotate: 0 }
          }
          transition={{ type: "spring", stiffness: 300 }}
          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{
            background: `${skill.color}12`,
            border: `1px solid ${skill.color}20`,
          }}
        >
          {IconComponent ? (
            <IconComponent size={20} style={{ color: skill.color }} />
          ) : (
            <span className="text-lg">⚡</span>
          )}
        </motion.div>
        <span className="font-semibold text-white/90 text-sm font-display">
          {skill.name}
        </span>
      </div>

      {/* Progress bar */}
      <div className="skill-bar">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{
            duration: 1.2,
            delay: index * 0.04 + 0.4,
            ease: [0.22, 0.61, 0.36, 1],
          }}
          style={{
            background: `linear-gradient(90deg, ${skill.color}99, ${skill.color})`,
          }}
        />
      </div>

      <div className="flex justify-between items-center mt-1.5">
        <span className="text-xs text-white/25 capitalize">
          {skill.category}
        </span>
        <span className="text-xs font-mono" style={{ color: skill.color }}>
          {skill.level}%
        </span>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const { ref, isInView } = useInView(0.05);

  const filtered =
    activeCategory === "all"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section
      id="skills"
      className="relative py-24 overflow-hidden"
      aria-label="Skills section"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.03]"
          style={{
            background: "radial-gradient(circle, #06B6D4, transparent)",
            filter: "blur(100px)",
          }}
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
            <div className="w-8 h-px bg-gradient-to-r from-purple-500 to-transparent" />
            <span className="text-purple-400 text-sm font-mono tracking-wider uppercase">
              Technical Expertise
            </span>
          </div>
          <h2 className="section-title text-white">
            Skills &<span className="text-gradient block">Technologies</span>
          </h2>
          <p className="section-subtitle mt-3">
            A curated toolkit of modern technologies I use to build
            production-ready applications.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-10"
          role="tablist"
          aria-label="Skill categories"
        >
          {categoryTabs.map((tab) => (
            <motion.button
              key={tab.key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(tab.key)}
              role="tab"
              aria-selected={activeCategory === tab.key}
              id={`skills-tab-${tab.key}`}
              className="px-4 py-2 rounded-xl text-xs font-medium font-mono transition-all duration-200"
              style={
                activeCategory === tab.key
                  ? {
                      background: `${tab.color}20`,
                      border: `1px solid ${tab.color}40`,
                      color: tab.color,
                    }
                  : {
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      color: "rgba(255,255,255,0.4)",
                    }
              }
            >
              {tab.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3"
            role="tabpanel"
          >
            {filtered.map((skill, i) => (
              <SkillCard
                key={`${skill.name}-${skill.category}`}
                skill={skill}
                index={i}
                isInView={isInView}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;

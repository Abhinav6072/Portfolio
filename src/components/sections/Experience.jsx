import React from "react";
import { motion } from "framer-motion";
import { useInView } from "../../hooks";
import { experiences, education } from "../../data";
import { MapPin, Calendar, Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
  const { ref, isInView } = useInView(0.1);

  return (
    <section
      id="experience"
      className="relative py-24 overflow-hidden"
      aria-label="Experience section"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.04]"
          style={{
            background: "radial-gradient(circle, #06B6D4, transparent)",
            filter: "blur(80px)",
          }}
        />
      </div>

      <div className="section-container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-gradient-to-r from-cyan-500 to-transparent" />
            <span className="text-cyan-400 text-sm font-mono tracking-wider uppercase">
              Journey
            </span>
          </div>
          <h2 className="section-title text-white">
            Experience &<span className="text-gradient block">Education</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-3 mb-8"
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{
                  background: "rgba(6,182,212,0.1)",
                  border: "1px solid rgba(6,182,212,0.2)",
                }}
              >
                <Briefcase size={16} className="text-cyan-400" />
              </div>
              <h3 className="font-bold font-display text-white text-lg">
                Work Experience
              </h3>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div
                className="absolute left-6 top-8 bottom-0 w-px"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(6,182,212,0.4), rgba(168,85,247,0.2), transparent)",
                }}
                aria-hidden="true"
              />

              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.15 + 0.2 }}
                  className="relative flex gap-6 mb-8 last:mb-0"
                >
                  {/* Timeline dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <motion.div
                      animate={{
                        boxShadow: [
                          `0 0 0 0 ${exp.color}40`,
                          `0 0 0 8px transparent`,
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-lg"
                      style={{
                        background: `${exp.color}15`,
                        border: `2px solid ${exp.color}40`,
                      }}
                    >
                      🏢
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div
                    className="flex-1 p-5 rounded-2xl transition-all duration-300 hover:border-cyan-500/20"
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h4 className="font-bold font-display text-white">
                          {exp.role}
                        </h4>
                        <p className="text-cyan-400 text-sm font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <span
                        className="px-2.5 py-1 rounded-full text-xs font-mono flex-shrink-0"
                        style={{
                          background: `${exp.color}10`,
                          color: exp.color,
                          border: `1px solid ${exp.color}20`,
                        }}
                      >
                        {exp.type}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-3 text-xs text-white/40 mb-4">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={11} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={11} />
                        {exp.location}
                      </span>
                    </div>

                    <p className="text-white/60 text-sm mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <ul className="space-y-2 mb-4" role="list">
                      {exp.responsibilities.map((resp, ri) => (
                        <li
                          key={ri}
                          className="flex gap-2 text-sm text-white/55"
                        >
                          <span className="text-cyan-500 mt-0.5 flex-shrink-0">
                            ▸
                          </span>
                          {resp}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5">
                      {exp.techStack.map((tech) => (
                        <span key={tech} className="tech-badge text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-3 mb-8"
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{
                  background: "rgba(168,85,247,0.1)",
                  border: "1px solid rgba(168,85,247,0.2)",
                }}
              >
                <GraduationCap size={16} className="text-purple-400" />
              </div>
              <h3 className="font-bold font-display text-white text-lg">
                Education
              </h3>
            </motion.div>

            {education.map((edu, i) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.15 + 0.2 }}
                className="glass-card p-6 mb-6"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                    style={{
                      background: `${edu.color}15`,
                      border: `1px solid ${edu.color}25`,
                    }}
                  >
                    {edu.icon}
                  </div>
                  <div>
                    <h4 className="font-bold font-display text-white">
                      {edu.degree}
                    </h4>
                    <p
                      style={{ color: edu.color }}
                      className="text-sm font-medium"
                    >
                      {edu.institution}
                    </p>
                    <p className="text-white/40 text-xs mt-0.5">{edu.field}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-white/40 mb-4">
                  <Calendar size={11} />
                  {edu.period}
                </div>

                <ul className="space-y-2" role="list">
                  {edu.achievements.map((ach, ai) => (
                    <li key={ai} className="flex gap-2 text-sm text-white/55">
                      <span className="text-purple-400 mt-0.5 flex-shrink-0">
                        ▸
                      </span>
                      {ach}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Currently learning */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="p-5 rounded-2xl"
              style={{
                background: "rgba(16,185,129,0.05)",
                border: "1px solid rgba(16,185,129,0.15)",
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-emerald-400 text-lg">📚</span>
                <h4 className="font-semibold text-white text-sm">
                  Currently Learning
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "System Design",
                  "AWS Cloud",
                  "Redis",
                  "Kubernetes",
                  "GraphQL",
                  "AI/ML Integration",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 rounded-lg text-xs text-emerald-400"
                    style={{
                      background: "rgba(16,185,129,0.08)",
                      border: "1px solid rgba(16,185,129,0.15)",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

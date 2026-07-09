import React from "react";
import { motion } from "framer-motion";
import { useInView } from "../../hooks";
import { achievements } from "../../data";

const Achievements = () => {
  const { ref, isInView } = useInView(0.1);

  return (
    <section
      id="achievements"
      className="relative py-24 overflow-hidden"
      aria-label="Achievements section"
    >
      <div className="section-container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-12 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-orange-500" />
            <span className="text-orange-400 text-sm font-mono tracking-wider uppercase">
              Milestones
            </span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-orange-500" />
          </div>
          <h2 className="section-title text-white">
            Achievements &
            <span className="text-gradient block">Recognition</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {achievements.map((ach, i) => (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-card p-6 text-center group"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: `${ach.color}12`,
                  border: `1px solid ${ach.color}25`,
                }}
              >
                {ach.icon.startsWith("Si") ? (
                  <span style={{ color: ach.color }} className="text-2xl">
                    ★
                  </span>
                ) : (
                  <span>{ach.icon}</span>
                )}
              </div>

              {ach.metric && (
                <div
                  className="text-2xl font-black font-display mb-1"
                  style={{ color: ach.color }}
                >
                  {ach.metric}
                </div>
              )}

              <h3 className="font-bold font-display text-white text-sm mb-1">
                {ach.title}
              </h3>
              <p className="text-xs text-white/40 mb-3 font-mono">
                {ach.platform}
              </p>
              <p className="text-xs text-white/50 leading-relaxed">
                {ach.description}
              </p>

              {ach.link && (
                <a
                  href={ach.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-xs font-mono transition-all"
                  style={{ color: ach.color }}
                  aria-label={`View ${ach.title}`}
                >
                  View Profile →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

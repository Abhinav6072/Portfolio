import React from "react";
import { motion } from "framer-motion";
import { useInView } from "../../hooks";
import { Star, GitFork, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const GITHUB_USERNAME = "Abhinav6072";

const statCards = [
  {
    title: "GitHub Stats",
    src: `https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=transparent&bg_color=00000000&border_color=06B6D430&icon_color=06B6D4&title_color=06B6D4&text_color=ffffff80&ring_color=A855F7`,
    id: "github-stats-card",
  },
  {
    title: "Top Languages",
    src: `https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&theme=transparent&bg_color=00000000&border_color=A855F730&title_color=A855F7&text_color=ffffff80`,
    id: "github-langs-card",
  },
];

const pinnedRepos = [
  {
    name: "Smart-ELearning-Platform",
    desc: "Full-stack e-learning platform with MERN stack",
    stars: 12,
    forks: 4,
    lang: "JavaScript",
    langColor: "#F7DF1E",
  },
  {
    name: "Doctor-Appointment-System",
    desc: "Healthcare appointment booking app with 3 panels",
    stars: 8,
    forks: 3,
    lang: "JavaScript",
    langColor: "#F7DF1E",
  },
  {
    name: "LeetCode-Clone",
    desc: "Competitive coding platform with Monaco editor",
    stars: 15,
    forks: 6,
    lang: "TypeScript",
    langColor: "#3178C6",
  },
];

const GitHubStats = () => {
  const { ref, isInView } = useInView(0.1);

  return (
    <section
      id="github"
      className="relative py-24 overflow-hidden"
      aria-label="GitHub section"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-[0.04]"
          style={{
            background: "radial-gradient(ellipse, #06B6D4, transparent)",
            filter: "blur(80px)",
          }}
        />
      </div>

      <div className="section-container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-12 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-cyan-500" />
            <FaGithub size={16} className="text-cyan-400" />
            <span className="text-cyan-400 text-sm font-mono tracking-wider uppercase">
              Open Source
            </span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-cyan-500" />
          </div>
          <h2 className="section-title text-white">
            GitHub
            <span className="text-gradient block">Activity</span>
          </h2>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 gap-5 mb-10 max-w-4xl mx-auto">
          {statCards.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              className="glass-card p-1 overflow-hidden"
              id={card.id}
            >
              <img
                src={card.src}
                alt={card.title}
                className="w-full rounded-xl"
                loading="lazy"
                onError={(e) => {
                  const target = e.target;
                  target.style.display = "none";
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `<div class="p-6 text-center text-white/40 text-sm">${card.title} (loading...)</div>`;
                  }
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Contribution Graph */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="glass-card p-1 mb-10 max-w-4xl mx-auto overflow-hidden"
        >
          <img
            src={`https://github-readme-activity-graph.vercel.app/graph?username=${GITHUB_USERNAME}&bg_color=00000000&color=06B6D4&line=A855F7&point=06B6D4&area=true&area_color=06B6D420&hide_border=true`}
            alt="GitHub Contribution Graph"
            className="w-full rounded-xl"
            loading="lazy"
            onError={(e) => {
              const target = e.target;
              target.style.display = "none";
              const parent = target.parentElement;
              if (parent) {
                parent.innerHTML = `<div class="p-6 text-center text-white/40 text-sm">Contribution Graph (loading...)</div>`;
              }
            }}
          />
        </motion.div>

        {/* Pinned Repos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="font-bold font-display text-white mb-5 text-center">
            Pinned Repositories
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {pinnedRepos.map((repo, i) => (
              <motion.a
                key={repo.name}
                href={`https://github.com/${GITHUB_USERNAME}/${repo.name}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 + 0.5 }}
                whileHover={{ y: -4 }}
                className="glass-card p-4 block group"
                id={`github-repo-${i}`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: "rgba(6,182,212,0.1)" }}
                  >
                    <FaGithub size={16} className="text-cyan-400" />
                  </div>
                  <ExternalLink
                    size={12}
                    className="text-white/20 group-hover:text-cyan-400 transition-colors"
                  />
                </div>

                <h4 className="font-semibold text-white text-xs mb-2 group-hover:text-cyan-400 transition-colors line-clamp-1">
                  {repo.name.replace(/-/g, " ")}
                </h4>
                <p className="text-white/40 text-xs mb-3 leading-relaxed line-clamp-2">
                  {repo.desc}
                </p>

                <div className="flex items-center gap-3 text-xs text-white/30">
                  <span className="flex items-center gap-1">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ background: repo.langColor }}
                    />
                    {repo.lang}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star size={10} />
                    {repo.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork size={10} />
                    {repo.forks}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubStats;

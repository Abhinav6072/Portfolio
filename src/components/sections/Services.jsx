import React from "react";
import { motion } from "framer-motion";
import { useInView } from "../../hooks";
import { services } from "../../data";

const Services = () => {
  const { ref, isInView } = useInView(0.05);

  return (
    <section
      id="services"
      className="relative py-24 overflow-hidden"
      aria-label="Services section"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-[0.04]"
          style={{
            background: "radial-gradient(ellipse, #3B82F6, transparent)",
            filter: "blur(80px)",
          }}
        />
      </div>

      <div className="section-container" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-blue-500" />
            <span className="text-blue-400 text-sm font-mono tracking-wider uppercase">
              What I Offer
            </span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-blue-500" />
          </div>
          <h2 className="section-title text-white">
            Services &<span className="text-gradient block">Expertise</span>
          </h2>
          <p className="section-subtitle mx-auto mt-3 text-center">
            End-to-end development solutions tailored to build, scale, and
            optimize your digital products.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card p-5 group cursor-default"
            >
              {/* Icon with gradient */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: `linear-gradient(135deg, ${service.gradient.includes("cyan") ? "rgba(6,182,212,0.15)" : service.gradient.includes("purple") ? "rgba(168,85,247,0.15)" : service.gradient.includes("emerald") ? "rgba(16,185,129,0.15)" : service.gradient.includes("orange") ? "rgba(249,115,22,0.15)" : service.gradient.includes("green") ? "rgba(34,197,94,0.15)" : service.gradient.includes("yellow") ? "rgba(234,179,8,0.15)" : service.gradient.includes("blue") ? "rgba(59,130,246,0.15)" : "rgba(236,72,153,0.15)"}, transparent)`,
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {service.icon}
              </div>

              <h3 className="font-bold font-display text-white text-sm mb-2">
                {service.title}
              </h3>
              <p className="text-white/50 text-xs leading-relaxed mb-4">
                {service.description}
              </p>

              <ul className="space-y-1.5">
                {service.features.map((feat) => (
                  <li
                    key={feat}
                    className="flex items-center gap-2 text-xs text-white/40"
                  >
                    <span className="w-1 h-1 rounded-full bg-cyan-500 flex-shrink-0" />
                    {feat}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-white/40 text-sm mb-4">
            Need a custom solution? Let's talk about your project.
          </p>
          <button
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-primary mx-auto"
            id="services-contact-btn"
          >
            <span>Get In Touch</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

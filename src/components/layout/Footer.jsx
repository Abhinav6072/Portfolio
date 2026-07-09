import React from "react";
import { motion } from "framer-motion";
import { Mail, ArrowUp, Heart } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { navLinks } from "../../data";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="relative border-t border-white/5 py-12 overflow-hidden"
      aria-label="Footer"
    >
      {/* Background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[1px]"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(6,182,212,0.4), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Brand */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <div className="flex items-center gap-3 mb-2">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold font-display"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(6,182,212,0.15), rgba(168,85,247,0.15))",
                  border: "1px solid rgba(6,182,212,0.25)",
                }}
              >
                <span className="text-gradient text-sm">AS</span>
              </div>
              <span className="font-bold font-display text-white">
                Abhinav Singh
              </span>
            </div>
            <p className="text-xs text-white/35 max-w-xs text-center md:text-left">
              Full Stack Software Engineer — Building the web, one commit at a
              time.
            </p>
          </motion.div>

          {/* Center: Nav links */}
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
            aria-label="Footer navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector(link.href)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-xs text-white/40 hover:text-cyan-400 transition-colors font-mono"
              >
                {link.label}
              </a>
            ))}
          </motion.nav>

          {/* Right: Social + Back to top */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            {[
              {
                icon: FaGithub,
                href: "https://github.com/Abhinav6072",
                label: "GitHub",
              },
              {
                icon: FaLinkedin,
                href: "https://www.linkedin.com/in/abhinav-singh-a6a5b3385",
                label: "LinkedIn",
              },
              {
                icon: Mail,
                href: "mailto:abhinava2k@gmail.com",
                label: "Email",
              },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={
                  href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                whileHover={{ scale: 1.15, y: -2 }}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white/30 hover:text-cyan-400 transition-all"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
                aria-label={label}
              >
                <Icon size={14} />
              </motion.a>
            ))}

            <div className="w-px h-5 bg-white/10 mx-1" />

            {/* Back to top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white/30 hover:text-cyan-400 transition-all"
              style={{
                background: "rgba(6,182,212,0.08)",
                border: "1px solid rgba(6,182,212,0.15)",
              }}
              aria-label="Back to top"
              id="footer-back-to-top"
            >
              <ArrowUp size={14} />
            </motion.button>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="mt-8 pt-6 border-t border-white/5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-xs text-white/25 font-mono">
              © {currentYear} Abhinav Singh. All rights reserved.
            </p>
            <p className="text-xs text-white/20 flex items-center gap-1.5">
              Built with <Heart size={10} className="text-red-400" /> using
              React, TypeScript & Framer Motion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

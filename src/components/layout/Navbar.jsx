import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, Mail } from "lucide-react";
import { navLinks } from "../../data";
import { useActiveSection, useTheme } from "../../hooks";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const activeSection = useActiveSection([
    "home",
    "about",
    "experience",
    "skills",
    "projects",
    "contact",
  ]);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${
          isScrolled
            ? "bg-[#020408]/80 backdrop-blur-xl border-b border-white/5 shadow-2xl"
            : "bg-transparent"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={() => handleNavClick("#home")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative flex items-center gap-3 group"
              aria-label="Abhinav Singh - Go to home"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold font-display transition-all duration-300 group-hover:shadow-cyan"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(6,182,212,0.15), rgba(168,85,247,0.15))",
                  border: "1.5px solid rgba(6,182,212,0.3)",
                  boxShadow: "0 0 20px rgba(6,182,212,0.15)",
                }}
              >
                <span className="text-gradient font-bold">AS</span>
              </div>
              <div className="hidden sm:block">
                <p className="text-white font-bold font-display text-sm leading-none">
                  Abhinav Singh
                </p>
                <p className="text-cyan-400 text-xs font-mono">
                  Full Stack Engineer
                </p>
              </div>
            </motion.a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <motion.button
                  key={link.id}
                  onClick={() => handleNavClick(link.href)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSection === link.id
                      ? "text-cyan-400"
                      : "text-white/60 hover:text-white"
                  }`}
                  aria-current={activeSection === link.id ? "page" : undefined}
                >
                  {activeSection === link.id && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute inset-0 rounded-lg"
                      style={{
                        background: "rgba(6,182,212,0.1)",
                        border: "1px solid rgba(6,182,212,0.2)",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </motion.button>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              {/* Theme Toggle */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="w-9 h-9 rounded-lg flex items-center justify-center text-white/60 hover:text-white transition-all"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
                aria-label={
                  isDark ? "Switch to light mode" : "Switch to dark mode"
                }
              >
                <span className="text-sm">{isDark ? "☀️" : "🌙"}</span>
              </motion.button>

              {/* Resume */}
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white/70 hover:text-white transition-all"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
                aria-label="Download resume"
              >
                <Download size={14} />
                Resume
              </motion.a>

              {/* Hire Me */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavClick("#contact")}
                className="flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold text-white transition-all relative overflow-hidden group"
                style={{
                  background: "linear-gradient(135deg, #06B6D4, #A855F7)",
                  boxShadow: "0 0 20px rgba(6,182,212,0.3)",
                }}
                aria-label="Hire me - go to contact section"
              >
                <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Mail size={14} />
                <span className="relative">Hire Me</span>
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden w-10 h-10 rounded-lg flex items-center justify-center text-white/70"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
              aria-label={isMobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileOpen}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMobileOpen ? "close" : "open"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {isMobileOpen ? <X size={18} /> : <Menu size={18} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-16 left-0 right-0 z-[999] md:hidden mx-4 rounded-2xl p-4"
            style={{
              background: "rgba(2,4,8,0.95)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(6,182,212,0.15)",
              boxShadow:
                "0 20px 60px rgba(0,0,0,0.6), 0 0 40px rgba(6,182,212,0.1)",
            }}
            role="dialog"
            aria-label="Mobile navigation menu"
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    activeSection === link.id
                      ? "text-cyan-400 bg-cyan-500/10"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>
            <div className="mt-4 pt-4 border-t border-white/5 flex flex-col gap-2">
              <a
                href="/resume.pdf"
                download
                className="flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium text-white/70"
                style={{ background: "rgba(255,255,255,0.05)" }}
              >
                <Download size={14} />
                Download Resume
              </a>
              <button
                onClick={() => handleNavClick("#contact")}
                className="flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white"
                style={{
                  background: "linear-gradient(135deg, #06B6D4, #A855F7)",
                }}
              >
                <Mail size={14} />
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../../hooks';
import { Mail, MapPin, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialForm: FormState = { name: '', email: '', subject: '', message: '' };

const Contact: React.FC = () => {
  const { ref, isInView } = useInView(0.1);
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // EmailJS integration — replace with your credentials
      // import emailjs from '@emailjs/browser';
      // await emailjs.send(
      //   'YOUR_SERVICE_ID',
      //   'YOUR_TEMPLATE_ID',
      //   { from_name: form.name, from_email: form.email, subject: form.subject, message: form.message },
      //   'YOUR_PUBLIC_KEY'
      // );
      
      // Simulate API call for demo
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setStatus('success');
      setForm(initialForm);
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const socials = [
    { icon: Mail, label: 'Email', value: 'abhinava2k@gmail.com', href: 'mailto:abhinava2k@gmail.com', color: '#06B6D4' },
    { icon: FaGithub, label: 'GitHub', value: '@Abhinav6072', href: 'https://github.com/Abhinav6072', color: '#FFFFFF' },
    { icon: FaLinkedin, label: 'LinkedIn', value: 'abhinav-singh', href: 'https://www.linkedin.com/in/abhinav-singh-a6a5b3385', color: '#0077B5' },
    { icon: MapPin, label: 'Location', value: 'India', href: '#', color: '#10B981' },
  ];

  return (
    <section id="contact" className="relative py-24 overflow-hidden" aria-label="Contact section">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-[0.05]"
          style={{ background: 'radial-gradient(ellipse, #06B6D4, transparent)', filter: 'blur(100px)' }}
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
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-cyan-500" />
            <span className="text-cyan-400 text-sm font-mono tracking-wider uppercase">Let's Talk</span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-cyan-500" />
          </div>
          <h2 className="section-title text-white">
            Get In
            <span className="text-gradient block">Touch</span>
          </h2>
          <p className="section-subtitle mx-auto mt-3 text-center">
            Open to opportunities, collaborations, and interesting conversations. Let's build something great together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            {/* Availability */}
            <div
              className="p-5 rounded-2xl"
              style={{ background: 'rgba(16,185,129,0.05)', border: '1px solid rgba(16,185,129,0.15)' }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <h3 className="font-bold font-display text-white">Currently Available</h3>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                I'm actively looking for <strong className="text-emerald-400">Full-Time roles</strong>,{' '}
                <strong className="text-blue-400">Remote opportunities</strong>, and{' '}
                <strong className="text-cyan-400">Freelance projects</strong>.
                Response time: <span className="text-white font-medium">within 24 hours</span>.
              </p>
            </div>

            {/* Social links */}
            <div className="space-y-3">
              {socials.map(({ icon: Icon, label, value, href, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ x: 5, scale: 1.02 }}
                  className="flex items-center gap-4 p-4 rounded-xl group transition-all duration-200"
                  style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}
                  aria-label={`${label}: ${value}`}
                  id={`contact-social-${label.toLowerCase()}`}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-110"
                    style={{ background: `${color}15`, border: `1px solid ${color}20` }}
                  >
                    <Icon size={18} style={{ color }} />
                  </div>
                  <div>
                    <p className="text-xs text-white/30 font-mono">{label}</p>
                    <p className="text-sm text-white/80 group-hover:text-white transition-colors">{value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-4"
              aria-label="Contact form"
              noValidate
            >
              {/* Name & Email row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono text-white/40 mb-2">
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/20 outline-none transition-all duration-200 focus:border-cyan-500/50"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'rgba(6,182,212,0.4)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono text-white/40 mb-2">
                    Email Address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/20 outline-none transition-all duration-200"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
                    onFocus={(e) => e.target.style.borderColor = 'rgba(6,182,212,0.4)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="contact-subject" className="block text-xs font-mono text-white/40 mb-2">
                  Subject *
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  placeholder="Job Opportunity / Collaboration / Project Inquiry..."
                  className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/20 outline-none transition-all duration-200"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
                  onFocus={(e) => e.target.style.borderColor = 'rgba(6,182,212,0.4)'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" className="block text-xs font-mono text-white/40 mb-2">
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project, opportunity, or just say hello..."
                  className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/20 outline-none transition-all duration-200 resize-none"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
                  onFocus={(e) => e.target.style.borderColor = 'rgba(6,182,212,0.4)'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                whileHover={status === 'idle' ? { scale: 1.02 } : {}}
                whileTap={status === 'idle' ? { scale: 0.98 } : {}}
                className="w-full py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-3 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                style={{
                  background: status === 'success'
                    ? 'linear-gradient(135deg, #10B981, #059669)'
                    : status === 'error'
                    ? 'linear-gradient(135deg, #EF4444, #DC2626)'
                    : 'linear-gradient(135deg, #06B6D4, #A855F7)',
                  boxShadow: '0 0 20px rgba(6,182,212,0.2)',
                }}
                id="contact-submit-btn"
              >
                {status === 'loading' ? (
                  <>
                    <Loader size={16} className="animate-spin" />
                    Sending...
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle size={16} />
                    Message Sent! 🎉
                  </>
                ) : status === 'error' ? (
                  <>
                    <AlertCircle size={16} />
                    Failed — Try Again
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </motion.button>

              <p className="text-xs text-white/25 text-center font-mono">
                🔒 Your data is safe. I won't share it with anyone.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

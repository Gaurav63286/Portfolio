import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Copy, Check, Mail, Phone, Github, Linkedin, Send, MessageSquare, MessageCircle } from 'lucide-react';
import { personalData } from '../data/portfolioData';
import MagneticButton from './UI/MagneticButton';
import { playClickSound } from '../utils/sound';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    playClickSound();
    navigator.clipboard.writeText(personalData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    playClickSound();
    navigator.clipboard.writeText(personalData.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    playClickSound();
    setFormError('');
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '30b03e24-e094-4a19-9b26-546f42459cd1',
          subject: `Portfolio Contact: ${formData.name}`,
          from_name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setFormSubmitted(true);
        setTimeout(() => {
          setFormSubmitted(false);
          setFormData({ name: '', email: '', message: '' });
        }, 5000);
      } else {
        setFormError('Transmission failed. Please try email or WhatsApp instead.');
      }
    } catch (err) {
      setFormError('Network error. Please try email or WhatsApp instead.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full py-16 md:py-20 px-6 md:px-12 bg-background border-b border-white/10 overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <div className="flex items-center gap-3 font-mono text-xs text-secondary mb-10">
          <span className="text-accent font-bold">// 05 CONNECT</span>
          <span className="text-white/20">|</span>
          <span className="uppercase tracking-wider">INITIATE DIRECT COMMUNICATION</span>
        </div>

        {/* Dramatic Headline Clamped & Constrained to Never Spill Off-Screen */}
        <div className="pb-14 border-b border-white/10 max-w-full overflow-hidden">
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-display font-black text-white leading-[0.92] uppercase tracking-tight max-w-full break-normal">
            <span className="block hover:text-accent transition-colors duration-300 cursor-default">
              LET'S BUILD
            </span>
            <span className="block text-white/95">
              SOMETHING{' '}
              <span className="font-editorial-serif text-accent font-normal italic lowercase text-5xl sm:text-7xl md:text-8xl lg:text-[6.25rem]">
                useful.
              </span>
            </span>
          </h2>

          <div className="mt-8 flex flex-col lg:flex-row lg:items-baseline justify-between gap-8">
            <div className="space-y-2">
              <p className="text-2xl sm:text-3xl font-display font-bold text-white">
                Have an idea? Let's talk.
              </p>
              <p className="text-base sm:text-lg text-secondary font-sans font-light max-w-xl leading-relaxed">
                Currently open for Software Engineering roles, Python data initiatives, and modern frontend projects. Reach out directly via call, WhatsApp, or email.
              </p>
            </div>

            {/* Giant GET IN TOUCH Button */}
            <div className="flex flex-wrap items-center gap-4">
              <MagneticButton
                as="a"
                href={`mailto:${personalData.email}`}
                data-cursor="hover"
                className="px-8 py-5 bg-accent text-accent-contrast font-mono font-bold text-sm tracking-widest uppercase flex items-center gap-3 border border-accent hover:bg-white hover:text-black transition-all shadow-[0_0_35px_var(--accent-glow)] shrink-0"
              >
                <span>GET IN TOUCH</span>
                <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
              </MagneticButton>

              <MagneticButton
                as="a"
                href={`tel:${personalData.phone}`}
                data-cursor="hover"
                className="px-6 py-5 bg-transparent text-white font-mono font-bold text-xs tracking-wider uppercase flex items-center gap-2 border border-white/25 hover:border-accent hover:text-accent transition-colors shrink-0"
              >
                <Phone className="w-4 h-4 text-accent" />
                <span>CALL DIRECT</span>
              </MagneticButton>
            </div>
          </div>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-16">
          {/* Left Column: Direct Communication Nodes */}
          <div className="lg:col-span-6 space-y-6">
            <div className="font-mono text-xs text-white/50 tracking-wider uppercase">
              // DIRECT VERIFIED NODES
            </div>

            {/* Mobile / Phone Card */}
            <div className="p-6 md:p-8 border border-white/15 bg-[#080808] space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-secondary">
                <span className="flex items-center gap-2 text-white/80 font-medium">
                  <Phone className="w-4 h-4 text-accent" />
                  MOBILE NUMBER
                </span>
                <span className="text-accent font-bold">NASHIK / PUNE // INDIA</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
                <span className="font-mono text-xl sm:text-2xl text-white font-bold tracking-tight">
                  {personalData.phoneFormatted}
                </span>

                <div className="flex items-center gap-2">
                  <a
                    href={`https://wa.me/918208397053?text=Hello%20Gaurav,%20I%20viewed%20your%20portfolio`}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="hover"
                    className="px-3.5 py-2 font-mono text-xs font-bold border border-white/20 bg-white/5 hover:border-accent hover:text-accent text-white flex items-center gap-1.5 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-accent" />
                    <span>WHATSAPP</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyPhone}
                    data-cursor="hover"
                    className={`px-3.5 py-2 font-mono text-xs font-bold border transition-all ${
                      copiedPhone
                        ? 'bg-accent text-accent-contrast border-accent'
                        : 'bg-white/5 text-white border-white/20 hover:border-accent hover:text-accent'
                    }`}
                  >
                    {copiedPhone ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Email Copy Card */}
            <div className="p-6 md:p-8 border border-white/15 bg-[#080808] space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-secondary">
                <span className="flex items-center gap-2 text-white/80 font-medium">
                  <Mail className="w-4 h-4 text-accent" />
                  PRIMARY EMAIL INBOX
                </span>
                <span className="text-white/40">CLICK TO COPY</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
                <span className="font-mono text-base sm:text-xl text-white font-bold break-all">
                  {personalData.email}
                </span>

                <MagneticButton
                  as="button"
                  type="button"
                  onClick={handleCopyEmail}
                  data-cursor="hover"
                  className={`px-4 py-2 font-mono text-xs font-bold tracking-wider flex items-center gap-2 border transition-all shrink-0 ${
                    copiedEmail
                      ? 'bg-accent text-accent-contrast border-accent'
                      : 'bg-white/5 text-white border-white/20 hover:border-accent hover:text-accent'
                  }`}
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>COPY EMAIL</span>
                    </>
                  )}
                </MagneticButton>
              </div>
            </div>

            {/* Social Channels List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="hover"
                className="p-5 border border-white/15 bg-[#080808] hover:border-accent hover:bg-[#0c0c0c] transition-all duration-300 flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="w-5 h-5 text-white/60 group-hover:text-accent transition-colors" />
                  <div>
                    <div className="font-display font-bold text-white text-base group-hover:text-accent transition-colors">
                      LINKEDIN
                    </div>
                    <span className="font-mono text-[10px] text-secondary">
                      in/gaurav66
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>

              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="hover"
                className="p-5 border border-white/15 bg-[#080808] hover:border-accent hover:bg-[#0c0c0c] transition-all duration-300 flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <Github className="w-5 h-5 text-white/60 group-hover:text-accent transition-colors" />
                  <div>
                    <div className="font-display font-bold text-white text-base group-hover:text-accent transition-colors">
                      GITHUB
                    </div>
                    <span className="font-mono text-[10px] text-secondary">
                      github.com/Gaurav63286
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>

            {/* Education & Response specs */}
            <div className="p-4 border border-white/10 font-mono text-xs text-secondary flex items-center justify-between bg-white/[0.02]">
              <span>APCOER &bull; SPPU PUNE</span>
              <span className="text-accent font-semibold">MCA &bull; PURSUING</span>
            </div>
          </div>

          {/* Right Column: Direct Transmission Form */}
          <div className="lg:col-span-6">
            <div className="p-8 border border-white/15 bg-[#080808]">
              <div className="flex items-center gap-2 font-mono text-xs text-accent mb-6 uppercase tracking-wider">
                <MessageSquare className="w-4 h-4" />
                <span>RAPID INQUIRY TRANSMISSION</span>
              </div>

              {formSubmitted ? (
                <div className="p-8 border border-accent bg-accent/10 text-center space-y-3">
                  <div className="inline-flex p-3 bg-accent text-accent-contrast rounded-full mb-2">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-2xl font-display font-bold text-white uppercase">
                    Transmission Dispatched
                  </h4>
                  <p className="text-sm font-sans text-white/80">
                    Thank you. Gaurav will inspect your message and reply to your email coordinates shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div>
                    <label className="block font-mono text-xs text-white/60 mb-2 uppercase tracking-wider">
                      Your Full Name / Company
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Hiring Manager / Tech Lead"
                      className="w-full bg-[#030303] border border-white/15 px-4 py-3.5 text-white text-sm font-mono focus:border-accent focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-white/60 mb-2 uppercase tracking-wider">
                      Your Email Coordinates
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="recruiter@company.com"
                      className="w-full bg-[#030303] border border-white/15 px-4 py-3.5 text-white text-sm font-mono focus:border-accent focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-white/60 mb-2 uppercase tracking-wider">
                      Opportunity / Project Scope
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe the role requirements, technology stack, or project goals..."
                      className="w-full bg-[#030303] border border-white/15 px-4 py-3.5 text-white text-sm font-mono focus:border-accent focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {formError && (
                    <div className="p-3 border border-red-500/50 bg-red-500/10 text-red-400 font-mono text-xs tracking-wider">
                      ⚠ {formError}
                    </div>
                  )}

                  <MagneticButton
                    as="button"
                    type="submit"
                    disabled={isSubmitting}
                    data-cursor="hover"
                    className={`w-full py-4 font-mono font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2 transition-colors ${
                      isSubmitting
                        ? 'bg-white/50 text-black/50 cursor-wait'
                        : 'bg-white text-black hover:bg-accent hover:text-black'
                    }`}
                  >
                    <Send className={`w-4 h-4 ${isSubmitting ? 'animate-pulse' : ''}`} />
                    <span>{isSubmitting ? 'TRANSMITTING...' : 'SEND MESSAGE TRANSMISSION'}</span>
                  </MagneticButton>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

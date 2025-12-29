'use client'

import { motion } from 'framer-motion'
import { Linkedin, Instagram, Github, Mail, ArrowUp, MessageCircle, ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Add your actual URLs here
  const discordUrl = "https://discord.gg/QFgPXTgG4x"
  const calendlyUrl = "https://showoff.gradpipe.com/recruiters"
  const linkedinUrl = "https://linkedin.com/company/gradpipe"
  const twitterUrl = "https://twitter.com/gradpipe"
  const githubUrl = "https://github.com/gradpipe"
  const emailUrl = "mailto:contact@gradpipe.com"

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-dark-950 border-t border-white/5 relative overflow-hidden pt-32 pb-12">
      {/* Massive Background Logo */}
      <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-full select-none pointer-events-none overflow-hidden flex justify-center">
        <h1 className="text-[15vw] font-black text-white/[0.02] tracking-tighter whitespace-nowrap leading-none">
          GRADPIPE
        </h1>
      </div>

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 mb-24">
          {/* Company Info - Spans 5 columns */}
          <div className="md:col-span-5 space-y-8">
            <div className="flex items-center space-x-3">
              <Image
                src="/logo.jpg"
                alt="GradPipe Logo"
                width={48}
                height={48}
                className="rounded-xl shadow-lg shadow-indigo-500/10"
              />
              <span className="text-2xl font-black text-white tracking-tight">GradPipe</span>
            </div>
            <p className="text-text-muted text-lg leading-relaxed max-w-md">
              The talent marketplace where companies hire based on proof, not pedigree.
              We find the top 1% of "undiscovered" student talent.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Linkedin, url: linkedinUrl },
                { icon: Instagram, url: "https://www.instagram.com/gradpipe/" },
                { icon: MessageCircle, url: discordUrl },

                { icon: Mail, url: emailUrl },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-text-muted hover:text-white hover:bg-white/10 hover:scale-110 transition-all duration-300 border border-white/5"
                >
                  <item.icon className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links - Spans 7 columns */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-bold mb-8 text-sm uppercase tracking-wider">Product</h3>
              <ul className="space-y-4">
                <li>
                  <button onClick={() => scrollToSection('how-it-works')} className="group flex items-center text-text-muted hover:text-white transition-colors duration-200">
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">How It Works</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('cta')} className="group flex items-center text-text-muted hover:text-white transition-colors duration-200">
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">For Students</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('cta')} className="group flex items-center text-text-muted hover:text-white transition-colors duration-200">
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">For Companies</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('team')} className="group flex items-center text-text-muted hover:text-white transition-colors duration-200">
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">Team</span>
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-8 text-sm uppercase tracking-wider">Company</h3>
              <ul className="space-y-4">
                <li>
                  <button onClick={() => scrollToSection('team')} className="group flex items-center text-text-muted hover:text-white transition-colors duration-200">
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">About</span>
                  </button>
                </li>
                <li>
                  <a href={emailUrl} className="group flex items-center text-text-muted hover:text-white transition-colors duration-200">
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">Contact</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-white font-bold mb-8 text-sm uppercase tracking-wider">Ready?</h3>
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 text-sm font-bold"
              >
                Book Pilot
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-text-subtle text-sm">
            © 2025 GradPipe. All rights reserved.
          </div>

          <div className="flex items-center space-x-8 text-sm">
            <a href="/privacy" className="text-text-subtle hover:text-text-muted transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="/terms" className="text-text-subtle hover:text-text-muted transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-text-subtle hover:text-text-muted transition-colors duration-200">
              Cookie Policy
            </a>
          </div>

          {/* Scroll to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-text-muted hover:text-white hover:bg-white/10 border border-white/5 transition-all duration-200 shadow-lg shadow-black/20"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

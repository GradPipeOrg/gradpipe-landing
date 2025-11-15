'use client'

import { motion } from 'framer-motion'
import { Linkedin, Instagram, Github, Mail, ArrowUp, MessageCircle } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Add your actual URLs here
  const discordUrl = "https://discord.gg/QFgPXTgG4x"
  const calendlyUrl = "https://calendly.com/muhammadiitb/30min"
  const linkedinUrl = "https://linkedin.com/company/gradpipe" // Replace with your LinkedIn URL
  const twitterUrl = "https://twitter.com/gradpipe" // Replace with your Twitter URL
  const githubUrl = "https://github.com/gradpipe" // Replace with your GitHub URL
  const emailUrl = "mailto:contact@gradpipe.com" // Replace with your email

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-dark-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              {/* Use your logo image */}
              <Image
                src="/logo.jpg" // Your logo file in the public folder
                alt="GradPipe Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="text-xl font-bold text-white">GradPipe</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-md">
              The talent marketplace where companies hire based on proof, not pedigree. 
              We find the top 1% of "undiscovered" student talent through verified skills and projects.
            </p>
            <div className="flex space-x-4">
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center text-dark-300 hover:text-white hover:bg-dark-700 transition-all duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              {/* Twitter removed */}
              <a
                href="https://www.instagram.com/gradpipe/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center text-dark-300 hover:text-white hover:bg-dark-700 transition-all duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center text-dark-300 hover:text-white hover:bg-dark-700 transition-all duration-200"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center text-dark-300 hover:text-white hover:bg-dark-700 transition-all duration-200"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={emailUrl}
                className="w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center text-dark-300 hover:text-white hover:bg-dark-700 transition-all duration-200"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Product</h3>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection('how-it-works')} className="text-slate-400 hover:text-white transition-colors duration-200 text-sm">
                  How It Works
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('cta')} className="text-slate-400 hover:text-white transition-colors duration-200 text-sm">
                  For Students
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('cta')} className="text-slate-400 hover:text-white transition-colors duration-200 text-sm">
                  For Companies
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('team')} className="text-slate-400 hover:text-white transition-colors duration-200 text-sm">
                  Team
                </button>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection('team')} className="text-slate-400 hover:text-white transition-colors duration-200 text-sm">
                  About
                </button>
              </li>
              <li>
                <a href={emailUrl} className="text-slate-400 hover:text-white transition-colors duration-200 text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          viewport={{ once: true }}
          className="text-center mt-12 mb-12"
        >
          <a
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <span>Book Your $150 Pilot</span>
            <ArrowUp className="w-4 h-4 rotate-[-90deg]" />
          </a>
        </motion.div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-500 text-xs mb-4 md:mb-0">
            © 2025 GradPipe. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6 text-xs">
            <a href="#" className="text-slate-500 hover:text-slate-300 transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-500 hover:text-slate-300 transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-slate-500 hover:text-slate-300 transition-colors duration-200">
              Cookie Policy
            </a>
          </div>

          {/* Scroll to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center text-dark-300 hover:text-white hover:bg-dark-700 transition-all duration-200"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

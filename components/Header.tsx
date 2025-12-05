'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Add your actual URLs here
  const discordUrl = "https://discord.gg/QFgPXTgG4x"
  const calendlyUrl = "https://showoff.gradpipe.com/recruiters"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.5 }}
      className="fixed top-6 left-0 right-0 z-50 px-4 pointer-events-none"
    >
      <div className={`max-w-5xl mx-auto rounded-full border border-white/10 bg-bg-primary/70 backdrop-blur-xl shadow-2xl shadow-indigo-500/10 transition-all duration-500 pointer-events-auto px-6 ${isScrolled ? 'bg-bg-primary/90 shadow-indigo-500/20' : ''
        }`}>
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            {/* Use your logo image */}
            <Image
              src="/logo.jpg" // Your logo file in the public folder
              alt="GradPipe Logo"
              width={32}
              height={32}
              className="rounded-full ring-2 ring-white/10"
            />
            <span className="text-lg font-bold text-white tracking-tight">GradPipe</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="px-4 py-2 text-sm font-medium text-text-muted hover:text-white hover:bg-white/5 rounded-full transition-all duration-200"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('cta')}
              className="px-4 py-2 text-sm font-medium text-text-muted hover:text-white hover:bg-white/5 rounded-full transition-all duration-200"
            >
              For Students
            </button>
            <button
              onClick={() => scrollToSection('cta')}
              className="px-4 py-2 text-sm font-medium text-text-muted hover:text-white hover:bg-white/5 rounded-full transition-all duration-200"
            >
              For Companies
            </button>
            <div className="w-px h-6 bg-white/10 mx-2" />
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 bg-white text-bg-primary hover:bg-indigo-50 font-bold py-2 px-5 rounded-full text-sm transition-all duration-300 shadow-lg shadow-white/10 hover:shadow-white/20 hover:scale-105"
            >
              Find Talent
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 hover:bg-white/5 rounded-full transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col space-y-2 pb-2">
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="px-4 py-2 text-text-muted hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-200 text-left"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection('cta')}
                className="px-4 py-2 text-text-muted hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-200 text-left"
              >
                For Students
              </button>
              <button
                onClick={() => scrollToSection('cta')}
                className="px-4 py-2 text-text-muted hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-200 text-left"
              >
                For Companies
              </button>
              <button
                onClick={() => scrollToSection('team')}
                className="px-4 py-2 text-text-muted hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-200 text-left"
              >
                Team
              </button>
              <div className="h-px bg-white/10 my-2" />
              <a
                href={discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full text-center text-sm py-2.5 rounded-lg"
              >
                Get Discovered
              </a>
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-bg-primary font-bold py-2.5 px-5 rounded-lg text-sm w-full text-center hover:bg-indigo-50 transition-colors"
              >
                Find Talent
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}

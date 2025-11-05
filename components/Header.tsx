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
  const calendlyUrl = "https://calendly.com/muhammadiitb/30min"

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
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-dark-950/80 backdrop-blur-lg border-b border-white/10 ${
        isScrolled ? 'shadow-lg' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="text-xl font-bold text-white">GradPipe</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-dark-300 hover:text-white transition-colors duration-200"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('cta')}
              className="text-dark-300 hover:text-white transition-colors duration-200"
            >
              For Students
            </button>
            <button 
              onClick={() => scrollToSection('cta')}
              className="text-dark-300 hover:text-white transition-colors duration-200"
            >
              For Companies
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className="text-dark-300 hover:text-white transition-colors duration-200"
            >
              Team
            </button>
            <a 
              href={"https://showoff-psi.vercel.app/"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Get Discovered
            </a>
            <a 
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Find Talent
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 border-t border-dark-700"
          >
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="text-dark-300 hover:text-white transition-colors duration-200 text-left"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('cta')}
                className="text-dark-300 hover:text-white transition-colors duration-200 text-left"
              >
                For Students
              </button>
              <button 
                onClick={() => scrollToSection('cta')}
                className="text-dark-300 hover:text-white transition-colors duration-200 text-left"
              >
                For Companies
              </button>
              <button 
                onClick={() => scrollToSection('team')}
                className="text-dark-300 hover:text-white transition-colors duration-200 text-left"
              >
                Team
              </button>
              <a 
                href={discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full"
              >
                Get Discovered
              </a>
              <a 
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full"
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

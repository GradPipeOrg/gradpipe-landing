'use client'

import { motion } from 'framer-motion'
import { Linkedin, Twitter, Github, Mail, ArrowUp } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Add your actual URLs here
  const productUrl = "https://app.gradpipe.com" // Replace with your actual product URL
  const linkedinUrl = "https://linkedin.com/company/gradpipe" // Replace with your LinkedIn URL
  const twitterUrl = "https://twitter.com/gradpipe" // Replace with your Twitter URL
  const githubUrl = "https://github.com/gradpipe" // Replace with your GitHub URL
  const emailUrl = "mailto:contact@gradpipe.com" // Replace with your email

  return (
    <footer className="bg-dark-950 border-t border-dark-800">
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
            <p className="text-dark-300 mb-6 max-w-md">
              Stop wasting time on cold emails. Start landing interviews with AI-powered 
              career outreach automation designed specifically for ambitious students.
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
              <a
                href={twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center text-dark-300 hover:text-white hover:bg-dark-700 transition-all duration-200"
              >
                <Twitter className="w-5 h-5" />
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
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-dark-300 hover:text-white transition-colors duration-200">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-dark-300 hover:text-white transition-colors duration-200">
                  Pricing
                </a>
              </li>
              <li>
                <a href={productUrl} target="_blank" rel="noopener noreferrer" className="text-dark-300 hover:text-white transition-colors duration-200">
                  App
                </a>
              </li>
              <li>
                <a href="#" className="text-dark-300 hover:text-white transition-colors duration-200">
                  API
                </a>
              </li>
              <li>
                <a href="#" className="text-dark-300 hover:text-white transition-colors duration-200">
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#team" className="text-dark-300 hover:text-white transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-dark-300 hover:text-white transition-colors duration-200">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-dark-300 hover:text-white transition-colors duration-200">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-dark-300 hover:text-white transition-colors duration-200">
                  Support
                </a>
              </li>
              <li>
                <a href={emailUrl} className="text-dark-300 hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-dark-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-dark-400 text-sm mb-4 md:mb-0">
            © 2025 GradPipe. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6 text-sm">
            <a href="#" className="text-dark-400 hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-dark-400 hover:text-white transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-dark-400 hover:text-white transition-colors duration-200">
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

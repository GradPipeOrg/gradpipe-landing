'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, Zap } from 'lucide-react'

export default function HeroSection() {
  // Add your actual URLs here
  const demoUrl = "https://youtu.be/aJ-Wl_G4cPs" // Replace with your actual demo video URL
  const productUrl = "https://app.gradpipe.com" // Replace with your actual product URL

  return (
    <section className="gradient-bg min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center space-x-2 bg-accent-500/10 border border-accent-500/20 rounded-full px-4 py-2 mb-6"
            >
              <Zap className="w-4 h-4 text-accent-400" />
              <span className="text-accent-400 text-sm font-medium">
                AI-Powered Job Outreach
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Stop Wasting Time on{' '}
              <span className="gradient-text">Cold Emails.</span>
              <br />
              Start Landing{' '}
              <span className="gradient-text">Interviews.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl text-dark-300 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              GradPipe is your AI co-pilot that automates the entire job outreach workflow, 
              from finding prospects to sending hyper-personalized emails.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              {/* Get Started Button - Links to your product */}
              <a 
                href={productUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center space-x-2"
              >
                <span>Get Started for Free</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              
              {/* Watch Demo Button - Links to your demo video */}
              <a 
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center justify-center space-x-2"
              >
                <Play className="w-4 h-4" />
                <span>Watch Demo</span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-8 flex items-center justify-center lg:justify-start space-x-6 text-sm text-dark-400"
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                <span>Setup in 5 minutes</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative bg-dark-800 rounded-2xl p-8 border border-dark-700 shadow-2xl">
              {/* Mock Dashboard */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-accent-500 rounded-full"></div>
                    <span className="text-white font-medium">Campaign Dashboard</span>
                  </div>
                  <div className="text-accent-400 text-sm">Live</div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-dark-700 rounded-lg p-4">
                    <div className="text-2xl font-bold text-white">47</div>
                    <div className="text-dark-400 text-sm">Emails Sent</div>
                  </div>
                  <div className="bg-dark-700 rounded-lg p-4">
                    <div className="text-2xl font-bold text-accent-400">12</div>
                    <div className="text-dark-400 text-sm">Replies</div>
                  </div>
                  <div className="bg-dark-700 rounded-lg p-4">
                    <div className="text-2xl font-bold text-white">3</div>
                    <div className="text-dark-400 text-sm">Interviews</div>
                  </div>
                </div>

                <div className="bg-dark-700 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium">Recent Activity</span>
                    <span className="text-accent-400 text-sm">2 min ago</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                      <span className="text-dark-300 text-sm">Email sent to John Doe at Google</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-dark-300 text-sm">Reply received from Sarah at Microsoft</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-accent-500 rounded-lg p-3 shadow-lg"
              >
                <Zap className="w-6 h-6 text-white" />
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 bg-primary-500 rounded-lg p-3 shadow-lg"
              >
                <Play className="w-6 h-6 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

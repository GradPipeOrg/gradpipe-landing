'use client'

import { motion } from 'framer-motion'
import { Building, User } from 'lucide-react'

export default function ProblemSection() {
  return (
    <section id="problem" className="py-20 lg:py-24 bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Hiring is broken. It's built on bias and "busy work."
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Box 1 - For Companies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="glow-card bg-dark-900 border border-white/10 rounded-2xl p-6"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl sm:text-3xl font-extrabold leading-tight">
                <span className="gradient-text">Startups</span>
              </h4>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              You're Drowning in Noise
            </h3>
            <p className="text-dark-300 leading-relaxed">
              You're drowning in 500+ irrelevant resumes. Your senior engineers are wasting <strong className="text-white">20+ hours</strong> on manual screening, all while <em className="text-dark-300">guessing</em> if a candidate's resume is even real.
            </p>
          </motion.div>

          {/* Box 2 - For Students */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="glow-card bg-dark-900 border border-white/10 rounded-2xl p-6"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl">
                <User className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl sm:text-3xl font-extrabold leading-tight">
                <span className="gradient-text">College Students</span>
              </h4>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              You're Buried by Bias
            </h3>
            <p className="text-dark-300 leading-relaxed">
              You're more than your resume. You have the skills, but you're invisible because you don't have the 'right' brand. Your applications are going into a <strong className="text-white">black hole</strong>.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


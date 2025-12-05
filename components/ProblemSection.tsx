'use client'

import { motion } from 'framer-motion'
import { Building, User } from 'lucide-react'
import SpotlightCard from './ui/SpotlightCard'

export default function ProblemSection() {
  return (
    <section id="problem" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-black text-white mb-6 tracking-tight"
          >
            Hiring is broken. <br />
            It's built on bias and <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">"busy work."</span>
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Box 1 - For Companies */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <SpotlightCard className="p-8 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-2xl shadow-lg shadow-blue-500/10">
                  <Building className="w-8 h-8 text-blue-400" />
                </div>
                <h4 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                  Startups
                </h4>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-4">
                You're Drowning in Noise
              </h3>
              <p className="text-text-muted leading-relaxed text-lg">
                You're drowning in 500+ irrelevant resumes. Your senior engineers are wasting <strong className="text-white">20+ hours</strong> on manual screening, all while <em className="text-text-subtle not-italic">guessing</em> if a candidate's resume is even real.
              </p>
            </SpotlightCard>
          </motion.div>

          {/* Box 2 - For Students */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <SpotlightCard className="p-8 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/30 rounded-2xl shadow-lg shadow-purple-500/10">
                  <User className="w-8 h-8 text-purple-400" />
                </div>
                <h4 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                  College Students
                </h4>
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-4">
                You're Buried by Bias
              </h3>
              <p className="text-text-muted leading-relaxed text-lg">
                You're more than your resume. You have the skills, but you're invisible because you don't have the 'right' brand. Your applications are going into a <strong className="text-white">black hole</strong>.
              </p>
            </SpotlightCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}



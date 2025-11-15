'use client'

import { motion } from 'framer-motion'
import { User, Building, ArrowRight } from 'lucide-react'

export default function CTASection() {
  const discordUrl = "https://discord.gg/QFgPXTgG4x"
  const calendlyUrl = "https://calendly.com/muhammadiitb/30min"

  return (
    <section id="cta" className="py-20 lg:py-24 bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            The Future of Hiring is Here. Pick Your Path.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Box 1 - For Students */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="glow-card bg-dark-900 border border-white/10 rounded-2xl p-6"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl mb-6">
              <User className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Are you a builder?
            </h3>
            <p className="text-dark-300 leading-relaxed mb-2">
              Join our 1,000+ user community. Get on the leaderboard, get your skills verified, and get discovered by top startups. It's free.
            </p>
            <a
              href="https://resume.gradpipe.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-purple-400 hover:underline mt-2 inline-block"
            >
              Or, try the Apex Resume Generator
            </a>
            <a
              href={"https://showoff-psi.vercel.app/"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center justify-center space-x-2 w-full"
            >
              <span>Get Discovered on Showoff</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Box 2 - For Companies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="glow-card bg-dark-900 border border-white/10 rounded-2xl p-6"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl mb-6">
              <Building className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Are you hiring?
            </h3>
            <p className="text-dark-300 leading-relaxed mb-6">
              Stop wasting time on bad resumes. We're opening 5 paid pilot slots for our <strong className="text-white">risk-free, $150 curated shortlist.</strong> Get your first "Talent Dossier" this week.
            </p>
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center justify-center space-x-2 w-full"
            >
              <span>Book Your $150 Pilot Call</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


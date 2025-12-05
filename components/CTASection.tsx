'use client'

import { motion } from 'framer-motion'
import { User, Building, ArrowRight, Sparkles } from 'lucide-react'
import SpotlightCard from './ui/SpotlightCard'

export default function CTASection() {
  const discordUrl = "https://discord.gg/QFgPXTgG4x"
  const calendlyUrl = "https://showoff.gradpipe.com/recruiters"

  return (
    <section id="cta" className="py-24 relative overflow-hidden">
      {/* Massive Glowing Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-indigo-600/20 to-purple-600/20 blur-[120px] rounded-full opacity-50" />
      </div>

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
            Pick your path. <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">We’ll remove the noise.</span>
          </motion.h2>
          <p className="text-text-muted text-lg max-w-3xl mx-auto leading-relaxed">
            Whether you’re a hiring manager drowning in resumes or a student shipping side projects, GradPipe gives you the fastest path to progress.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Box 1 - For Students */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <SpotlightCard className="p-8 h-full flex flex-col">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl mb-6 shadow-lg shadow-indigo-500/20">
                <User className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Are you a builder?
              </h3>
              <p className="text-text-muted leading-relaxed mb-6 text-lg">
                Join our 1,000+ user community. GradPipe routes opportunities to people with proof, not pedigrees.
              </p>
              <ul className="text-sm text-text-secondary space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                  <span>Rank on the Showoff leaderboard with real commits & projects.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                  <span>Generate resume-ready narratives with Apex (free).</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                  <span>Meet hiring startups during curated talent drops.</span>
                </li>
              </ul>

              <div className="mt-auto space-y-4">
                <a
                  href={"https://showoff.gradpipe.com/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center justify-center"
                >
                  Get Discovered on Showoff
                </a>
                <a
                  href="https://resume.gradpipe.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-indigo-400 hover:text-indigo-300 hover:underline block text-center transition-colors"
                >
                  Or, try the Apex Resume Generator
                </a>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Box 2 - For Companies */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <SpotlightCard className="p-8 h-full flex flex-col">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl mb-6 shadow-lg shadow-pink-500/20">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Are you hiring?
              </h3>
              <p className="text-text-muted leading-relaxed mb-6 text-lg">
                Stop wasting time on bad resumes. We're opening 5 paid pilot slots for our <strong className="text-white">risk-free, $150 curated shortlist.</strong> Get your first "Talent Dossier" this week.
              </p>
              <ul className="text-sm text-text-secondary space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-pink-400 flex-shrink-0" />
                  <span>Intake call focused on your stack, culture, and urgency.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-pink-400 flex-shrink-0" />
                  <span>Receive 3–5 verified dossiers within 48 hours.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-pink-400 flex-shrink-0" />
                  <span>Only pay when we deliver; refund if no hire.</span>
                </li>
              </ul>

              <div className="mt-auto">
                <a
                  href={calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full text-center justify-center"
                >
                  Book Your $150 Pilot Call
                </a>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>

        <p className="text-center text-sm text-text-subtle mt-12">
          Questions? DM us on Instagram or email contact@gradpipe.com — real humans reply.
        </p>
      </div>
    </section>
  )
}


'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { User, Building, ArrowRight, Sparkles } from 'lucide-react'
import { useState } from 'react'

export default function CTASection() {
  const discordUrl = "https://discord.gg/QFgPXTgG4x"
  const calendlyUrl = "https://showoff.gradpipe.com/recruiters"

  return (
    <section id="cta" className="py-20 lg:py-24 bg-dark-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            Pick your path. We’ll remove the noise.
          </motion.h2>
          <p className="text-dark-300 max-w-3xl mx-auto">
            Whether you’re a hiring manager drowning in resumes or a student shipping side projects, GradPipe gives you the fastest path to progress.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Box 1 - For Students */}
          <TiltCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
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
              Join our 1,000+ user community. GradPipe routes opportunities to people with proof, not pedigrees.
            </p>
            <ul className="text-sm text-dark-200 space-y-2 mb-4">
              <li className="flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-accent-300 mt-1" /> Rank on the Showoff leaderboard with real commits & projects.
              </li>
              <li className="flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-accent-300 mt-1" /> Generate resume-ready narratives with Apex (free).
              </li>
              <li className="flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-accent-300 mt-1" /> Meet hiring startups during curated talent drops.
              </li>
            </ul>
            <a
              href="https://resume.gradpipe.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-purple-400 hover:underline mt-2 inline-block"
            >
              Or, try the Apex Resume Generator
            </a>
            <a
              href={"https://showoff.gradpipe.com/"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center justify-center space-x-2 w-full"
            >
              <span>Get Discovered on Showoff</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </TiltCard>

          {/* Box 2 - For Companies */}
          <TiltCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.4 }}
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
            <ul className="text-sm text-dark-200 space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-primary-300 mt-1" /> Intake call focused on your stack, culture, and urgency.
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-primary-300 mt-1" /> Receive 3–5 verified dossiers within 48 hours.
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-primary-300 mt-1" /> Only pay when we deliver; refund if no hire.
              </li>
            </ul>
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center justify-center space-x-2 w-full"
            >
              <span>Book Your $150 Pilot Call</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </TiltCard>
        </div>

        <p className="text-center text-xs text-dark-400 mt-8">
          Questions? DM us on Instagram or email contact@gradpipe.com — real humans reply.
        </p>
      </div>
    </section>
  )
}

// Tilt Card Component with Mouse Interaction
function TiltCard({ children, className, ...props }: any) {
  const [isHovered, setIsHovered] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 })
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["2.5deg", "-2.5deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-2.5deg", "2.5deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}


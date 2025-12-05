'use client'

// --- IMPORTS ---
import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react'
import Image from 'next/image'
import { useState, useEffect } from 'react'

// --- VISUALS ARRAY ---
// durationMs should match one full loop of each GIF (approximate)
const visuals = [
  { src: '/showoff.gif', alt: "Animation of the GradPipe 'Showoff' AI Leaderboard for student talent", durationMs: 5700 },
  { src: '/apex.gif', alt: "Animation of the 'Apex' AI Resume Generator by GradPipe", durationMs: 8000 },
  { src: '/talent_dossier.png', alt: "Screenshot of a GradPipe 'Talent Dossier' for a pre-vetted student developer", durationMs: 4000 },
]

export default function HeroSection() {
  const calendlyUrl = "https://showoff.gradpipe.com/recruiters"
  const showoffUrl = "https://showoff.gradpipe.com/"

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === visuals.length - 1 ? 0 : prevIndex + 1
      )
    }, visuals[currentIndex].durationMs)

    return () => clearTimeout(timeout)
  }, [currentIndex])

  const getVisualState = (index: number) => {
    if (index === currentIndex) {
      return {
        opacity: 1,
        scale: 1,
        rotateX: 0,
        rotateZ: 0,
        translateZ: 0,
        y: 0,
        zIndex: 2,
      }
    }

    return {
      opacity: 0,
      scale: 0.8,
      rotateX: 10,
      rotateZ: 10,
      translateZ: -150,
      y: 40,
      zIndex: 1,
    }
  }

  const stats = [
    { label: "Community builders", value: "1,000+" },
    { label: "Avg. shortlist time", value: "48 hrs" },
    { label: "Proof-of-work data pts", value: "12,000+" },
  ]

  return (
    <section className="gradient-bg min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="text-center lg:text-left z-10 space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-sm text-slate-200">
              <ShieldCheck className="w-4 h-4 text-accent-300" />
              Trusted by IIT, BITS & NIT builders
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.15 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              Hire verified student builders in
              <span className="text-accent-300"> 48 hours.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.25 }}
              className="text-lg sm:text-xl text-dark-300 max-w-2xl mx-auto lg:mx-0"
            >
              GradPipe’s proof-of-work engine reads resumes, GitHub activity, and live projects to surface the top 1% of “undiscovered” talent—then hand-curates a dossier for your role.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, type: "spring", stiffness: 120, damping: 20 }}
              className="grid sm:grid-cols-2 gap-4 text-left"
            >
              <div className="rounded-xl border border-white/10 bg-dark-900/60 p-4 space-y-2">
                <p className="text-sm uppercase tracking-wide text-dark-400">For Hiring Teams</p>
                <ul className="space-y-2 text-sm text-dark-200">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-accent-300" />
                    Get 3-5 vetted matches per role
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-accent-300" />
                    20+ engineer hours saved weekly
                  </li>
                </ul>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 space-y-2">
                <p className="text-sm uppercase tracking-wide text-dark-200">For Students</p>
                <ul className="space-y-2 text-sm text-slate-100">
                  <li className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-accent-200" />
                    Showoff leaderboard & Apex resume
                  </li>
                  <li className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-accent-200" />
                    Opportunities based on proof-of-work
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, type: "spring", stiffness: 120, damping: 20 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center space-x-2"
              >
                <span>Book the $150 pilot</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={showoffUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center justify-center space-x-2"
              >
                <span>Get discovered (free)</span>
              </a>
            </motion.div>


            <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-left">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-dark-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="relative w-full h-80 lg:h-[32rem] perspective-container"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {visuals.map((visual, index) => (
              <motion.div
                key={visual.src}
                className="absolute w-full h-full"
                animate={getVisualState(index)}
                transition={{
                  type: 'spring',
                  stiffness: 120,
                  damping: 20,
                  mass: 0.8
                }}
              >
                <div className="relative w-full h-full rounded-2xl border border-white/10 shadow-2xl shadow-purple-900/10 overflow-hidden bg-dark-900/80">
                  <Image
                    src={visual.src}
                    alt={visual.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index === 0}
                  />
                </div>
              </motion.div>
            ))}

          </motion.div>
        </div>
      </div>
    </section>
  )
}
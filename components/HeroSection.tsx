'use client'

// --- IMPORTS ---
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'

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

  // 3D Tilt Logic
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 })
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 })

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"])
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseXVal = e.clientX - rect.left
    const mouseYVal = e.clientY - rect.top
    const xPct = mouseXVal / width - 0.5
    const yPct = mouseYVal / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

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
    <section className="min-h-screen flex items-center justify-center pt-24 lg:pt-32 pb-20 overflow-hidden relative">
      {/* Decorative Orbs */}
      <div className="gradient-orb w-[500px] h-[500px] top-[-100px] left-[-100px] bg-indigo-500/30 blur-[100px]" />
      <div className="gradient-orb w-[500px] h-[500px] bottom-[-100px] right-[-100px] bg-purple-500/30 blur-[100px]" />
      <div className="gradient-orb w-[300px] h-[300px] top-[40%] left-[40%] bg-pink-500/20 blur-[80px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="text-center lg:text-left z-10 space-y-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-sm font-medium text-slate-200 backdrop-blur-md shadow-lg shadow-indigo-500/10 hover:bg-white/10 transition-colors cursor-default">
              <ShieldCheck className="w-4 h-4 text-accent-primary" />
              Trusted by IIT, BITS & NIT builders
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.15 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight"
            >
              Hire verified student builders in
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-gradient bg-[length:200%_auto]"> 48 hours.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.25 }}
              className="text-lg sm:text-xl text-text-muted max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              GradPipe’s proof-of-work engine reads resumes, GitHub activity, and live projects to surface the top 1% of “undiscovered” talent—then hand-curates a dossier for your role.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, type: "spring", stiffness: 120, damping: 20 }}
              className="grid sm:grid-cols-2 gap-4 text-left"
            >
              <div className="glass-card p-5 space-y-3 hover:bg-white/10 transition-colors group">
                <p className="text-xs font-bold uppercase tracking-wider text-text-subtle group-hover:text-white transition-colors">For Hiring Teams</p>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-accent-primary" />
                    Get 3-5 vetted matches per role
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-accent-primary" />
                    20+ engineer hours saved weekly
                  </li>
                </ul>
              </div>
              <div className="glass-card p-5 space-y-3 hover:bg-white/10 transition-colors group">
                <p className="text-xs font-bold uppercase tracking-wider text-text-subtle group-hover:text-white transition-colors">For Students</p>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-purple-400" />
                    Showoff leaderboard & Apex resume
                  </li>
                  <li className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-purple-400" />
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
                className="btn-primary flex items-center justify-center space-x-2 text-lg px-8 py-4"
              >
                <span>Book the $150 pilot</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={showoffUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center justify-center space-x-2 text-lg px-8 py-4"
              >
                <span>Get discovered (free)</span>
              </a>
            </motion.div>


            <div className="flex flex-wrap gap-8 justify-center lg:justify-start text-left pt-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-black text-white tracking-tight">{stat.value}</p>
                  <p className="text-sm font-medium text-text-subtle">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="relative w-full h-[500px] lg:h-[600px] perspective-container flex items-center justify-center"
            style={{ perspective: 1000 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              className="relative w-full h-full"
            >
              {visuals.map((visual, index) => (
                <motion.div
                  key={visual.src}
                  className="absolute inset-0 w-full h-full flex items-center justify-center"
                  animate={getVisualState(index)}
                  transition={{
                    type: 'spring',
                    stiffness: 120,
                    damping: 20,
                    mass: 0.8
                  }}
                >
                  <div className="relative w-full h-full max-h-[500px] rounded-3xl border border-white/10 shadow-2xl shadow-indigo-500/20 overflow-hidden bg-bg-primary/80 backdrop-blur-md group">
                    {/* Inner Glow */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <Image
                      src={visual.src}
                      alt={visual.alt}
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={index === 0}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
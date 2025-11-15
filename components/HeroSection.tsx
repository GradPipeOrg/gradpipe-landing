'use client'

// --- IMPORTS ---
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
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
  const calendlyUrl = "https://calendly.com/muhammadiitb/30min"
  const showoffUrl = "https://showoff-psi.vercel.app/"

  // --- STATE FOR CAROUSEL ---
  const [currentIndex, setCurrentIndex] = useState(0)

  // --- EFFECT FOR LOOPING (per-visual timing to allow each GIF to finish a loop) ---
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === visuals.length - 1 ? 0 : prevIndex + 1
      )
    }, visuals[currentIndex].durationMs)

    return () => clearTimeout(timeout)
  }, [currentIndex])

  // --- ANIMATION LOGIC FUNCTION (MODIFIED) ---
  const getVisualState = (index: number) => {
    if (index === currentIndex) {
      // --- ACTIVE (FRONT & VISIBLE) ---
      return {
        opacity: 1,
        scale: 1,
        rotateX: 0,
        rotateZ: 0,
        translateZ: 0, // At the front
        y: 0,
        zIndex: 2, // In front
      }
    } else {
      // --- ALL OTHERS (BACK & INVISIBLE) ---
      return {
        opacity: 0, // Completely invisible
        scale: 0.8, // Start smaller so it "grows"
        rotateX: 10, // Keep some rotation for movement
        rotateZ: 10,
        translateZ: -150, // Start from the back
        y: 40,
        zIndex: 1, // Behind
      }
    }
  }

  return (
    // Added overflow-hidden to the section to prevent scrollbars during animation
    <section className="gradient-bg min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* === LEFT COLUMN - CONTENT (Unchanged) === */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left z-10"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              The talent marketplace where companies hire based on{' '}
              <span className="text-slate-100 font-medium">proof, not pedigree.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-dark-300 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              We find the top 1% of "undiscovered" student talent. Our AI engine analyzes their <em className="text-white">real</em> skills and projects, not just the keywords on their resume.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center space-x-2"
              >
                <span>Book Your $150 Pilot</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={showoffUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center justify-center space-x-2"
              >
                <span>Get Discovered (It's Free)</span>
              </a>
            </motion.div>
          </motion.div>

          {/* === RIGHT COLUMN - THE 3D ANIMATION === */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-80 lg:h-96 perspective-container" // Using class from globals.css
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* We map over the visuals and apply the animated styles */}
            {visuals.map((visual, index) => (
              <motion.div
                key={visual.src}
                className="absolute w-full h-full"
                // Apply the correct state (visible or invisible)
                animate={getVisualState(index)}
                // This spring transition creates the "magical" pop
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  damping: 15,
                  duration: 0.7
                }}
              >
                <div className="relative w-full h-full rounded-lg border border-white/10 shadow-2xl shadow-purple-900/10 overflow-hidden">
                  <Image
                    src={visual.src}
                    alt={visual.alt}
                    fill
                    className="object-contain" // Ensures full GIF is visible
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
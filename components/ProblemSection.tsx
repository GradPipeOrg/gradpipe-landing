'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Building, User } from 'lucide-react'
import { useState } from 'react'

export default function ProblemSection() {
  return (
    <section id="problem" className="py-20 lg:py-24 bg-dark-950">
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
            Hiring is broken. It's built on bias and "busy work."
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Box 1 - For Companies */}
          <TiltCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
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
          </TiltCard>

          {/* Box 2 - For Students */}
          <TiltCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.4 }}
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
          </TiltCard>
        </div>
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


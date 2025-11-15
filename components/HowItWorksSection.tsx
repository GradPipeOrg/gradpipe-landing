'use client'

import { motion } from 'framer-motion'
import { Sparkles, Brain, Users, ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function HowItWorksSection() {
  const steps = [
    {
      icon: Sparkles,
      title: 'We Attract the Top 1% with Free AI Tools.',
      description: "It starts with our 'Career Co-pilot' suite. Tools like the **Apex Resume Generator** solve a real, painful problem for students, attracting thousands of ambitious users to our network.",
      color: 'from-blue-500 to-blue-600',
      visualPlaceholder: 'Placeholder for Apex Resume Generator GIF',
      url: "https://resume.gradpipe.com"
    },
    {
      icon: Brain,
      title: 'We Find the Signal with Our "Proof-of-Work" Engine.',
      description: "Our new **AI Leaderboard** analyzes their resumes, GitHubs, and projects. It generates an objective 'Proof-of-Work' score, allowing us to find the *real* builders and hustlers.",
      color: 'from-purple-500 to-purple-600',
      visualPlaceholder: 'Placeholder for new AI Leaderboard MVP GIF',
      url: "https://showoff-psi.vercel.app"
    },
    {
      icon: Users,
      title: 'Companies Get Instant Access to Vetted Talent.',
      description: "Hire faster and with more confidence. Our **'Concierge MVP'** gives you a curated 'Talent Dossier' of the top 3-5 pre-vetted candidates matched to your role.",
      color: 'from-accent-500 to-accent-600',
      visualPlaceholder: 'Placeholder for Talent Dossier PDF image',
      url: undefined
    }
  ]

  // HowTo Schema
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How GradPipe Works: From Viral Tools to Vetted Talent",
    description: "A 3-step process for companies to find and hire top student talent",
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.title,
      text: step.description.replace(/\*\*/g, '').replace(/\*/g, ''),
      ...(step.url && { url: step.url })
    }))
  }

  return (
    <>
      {/* HowTo Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
    <section id="how-it-works" className="py-20 lg:py-24 bg-dark-900">
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
            Our 3-Step Flywheel: From Viral Tools to Vetted Talent
          </motion.h2>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-dark-600 to-transparent transform -translate-y-1/2 z-0"></div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 15, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <div className="text-center">
                  {/* Step Number */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: index * 0.15 + 0.1 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center justify-center w-12 h-12 bg-dark-800 border-2 border-white/10 rounded-full text-white font-bold text-lg mb-6"
                  >
                    {index + 1}
                  </motion.div>

                  {/* Icon with Premium Glow Effect */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: index * 0.15 + 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    className={`inline-flex items-center justify-center w-20 h-20 icon-glow-well rounded-2xl mb-6 relative overflow-hidden`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-90`} />
                    <step.icon className="w-10 h-10 text-white relative z-10 drop-shadow-lg" strokeWidth={2.5} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                  </motion.div>

                  {/* Content */}
                  <motion.h3 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 120, damping: 20, delay: index * 0.15 + 0.3 }}
                    viewport={{ once: true }}
                    className="text-xl font-bold text-white mb-3"
                  >
                    {step.title}
                  </motion.h3>
                  {index === 0 ? (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ type: "spring", stiffness: 120, damping: 20, delay: index * 0.15 + 0.4 }}
                      viewport={{ once: true }}
                      className="mb-8 min-h-[80px]"
                    >
                      <p className="text-slate-200 font-medium mb-3 text-sm">
                        Free AI tools that attract thousands of ambitious builders.
                      </p>
                      <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center text-xs text-slate-400">
                        <span>• Attract top talent</span>
                        <span>• Build network organically</span>
                        <span>• Solve real problems</span>
                      </div>
                    </motion.div>
                  ) : index === 1 ? (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ type: "spring", stiffness: 120, damping: 20, delay: index * 0.15 + 0.4 }}
                      viewport={{ once: true }}
                      className="mb-8 min-h-[80px]"
                    >
                      <p className="text-slate-200 font-medium mb-3 text-sm">
                        AI analyzes real work—not resume claims.
                      </p>
                      <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center text-xs text-slate-400">
                        <span>• Objective scoring</span>
                        <span>• Proof-of-Work verified</span>
                        <span>• Find real builders</span>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ type: "spring", stiffness: 120, damping: 20, delay: index * 0.15 + 0.4 }}
                      viewport={{ once: true }}
                      className="mb-8 min-h-[80px]"
                    >
                      <p className="text-slate-200 font-medium mb-3 text-sm">
                        Get 3-5 pre-vetted candidates in 48 hours.
                      </p>
                      <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center text-xs text-slate-400">
                        <span>• Curated matches</span>
                        <span>• Pre-vetted talent</span>
                        <span>• Instant access</span>
                      </div>
                    </motion.div>
                  )}

                  {/* Visuals */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 15, delay: index * 0.15 + 0.5 }}
                    viewport={{ once: true }}
                    className="w-full h-48 relative border border-white/10 rounded-lg overflow-hidden mb-4 bg-dark-800"
                  >
                    {index === 0 && (
                      <Image
                        src="/apex.gif"
                        alt="Animation of the 'Apex' AI Resume Generator by GradPipe"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 800px"
                        priority
                      />
                    )}
                    {index === 1 && (
                      <Image
                        src="/showoff.gif"
                        alt="Animation of the GradPipe 'Showoff' AI Leaderboard for student talent"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 800px"
                      />
                    )}
                    {index === 2 && (
                      <Image
                        src="/talent_dossier.png"
                        alt="Screenshot of a GradPipe 'Talent Dossier' for a pre-vetted student developer"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 800px"
                      />
                    )}
                  </motion.div>

                  {/* Arrow (except for last step) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block mt-8">
                      <motion.div
                        animate={{ x: [0, 10, 0] }}
                        transition={{ 
                          type: "spring",
                          stiffness: 100,
                          damping: 10,
                          repeat: Infinity,
                          duration: 2
                        }}
                      >
                        <ArrowRight className="w-8 h-8 text-dark-400 mx-auto" />
                      </motion.div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

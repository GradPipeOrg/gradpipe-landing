'use client'

import { motion } from 'framer-motion'
import { Sparkles, Brain, Users, ArrowRight, Gauge } from 'lucide-react'
import Image from 'next/image'

export default function HowItWorksSection() {
  const steps = [
    {
      icon: Sparkles,
      title: 'We Attract the Top 1% with Free AI Tools.',
      description: "It starts with our 'Career Co-pilot' suite. Tools like the **Apex Resume Generator** solve a real, painful problem for students, attracting thousands of ambitious users to our network.",
      color: 'from-blue-500 to-blue-600',
      visualPlaceholder: 'Placeholder for Apex Resume Generator GIF',
      url: "https://resume.gradpipe.com",
      result: "12,000+ proof signals captured / month.",
      metric: "Inbound, no paid ads.",
    },
    {
      icon: Brain,
      title: 'We Find the Signal with Our "Proof-of-Work" Engine.',
      description: "Our new **AI Leaderboard** analyzes their resumes, GitHubs, and projects. It generates an objective 'Proof-of-Work' score, allowing us to find the *real* builders and hustlers.",
      color: 'from-purple-500 to-purple-600',
      visualPlaceholder: 'Placeholder for new AI Leaderboard MVP GIF',
      url: "https://showoff.gradpipe.com",
      result: "87% of pilots hire from the top 10 profiles.",
      metric: "Score = skills × speed × storytelling.",
    },
    {
      icon: Users,
      title: 'Companies Get Instant Access to Vetted Talent.',
      description: "Hire faster and with more confidence. Our **'Concierge MVP'** gives you a curated 'Talent Dossier' of the top 3-5 pre-vetted candidates matched to your role.",
      color: 'from-accent-500 to-accent-600',
      visualPlaceholder: 'Placeholder for Talent Dossier PDF image',
      url: undefined,
      result: "3–5 vetted matches delivered within 48 hours.",
      metric: "Concierge team adds human context.",
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
      <section id="how-it-works" className="py-20 lg:py-24 bg-dark-950">
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
              Our 3-step flywheel takes cold applications → vetted builders.
            </motion.h2>
          </motion.div>

          <div className="relative">
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 100, damping: 15, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="relative z-10 h-full"
                >
                  <div className="text-center rounded-3xl border border-white/10 bg-dark-900/80 p-6 h-full flex flex-col">
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

                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ type: "spring", stiffness: 120, damping: 20, delay: index * 0.15 + 0.3 }}
                      viewport={{ once: true }}
                      className="text-xl font-bold text-white mb-3"
                    >
                      {step.title}
                    </motion.h3>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ type: "spring", stiffness: 120, damping: 20, delay: index * 0.15 + 0.4 }}
                      viewport={{ once: true }}
                      className="mb-6 min-h-[90px]"
                    >
                      <p className="text-slate-200 font-medium mb-3 text-sm">
                        {index === 0 && "Free AI tools attract ambitious builders."}
                        {index === 1 && "AI analyzes real work—not resume claims."}
                        {index === 2 && "Humans curate dossiers for instant clarity."}
                      </p>
                      <div className="flex flex-wrap gap-2 justify-center text-xs text-slate-400">
                        <span>• Attract</span>
                        <span>• Score</span>
                        <span>• Deliver</span>
                      </div>
                    </motion.div>

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

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ type: "spring", stiffness: 120, damping: 20, delay: index * 0.15 + 0.55 }}
                      viewport={{ once: true }}
                      className="mt-4 rounded-2xl bg-white/5 border border-white/10 p-4 text-left text-sm text-dark-200"
                    >
                      <p className="text-white font-semibold flex items-center gap-2">
                        <Gauge className="w-4 h-4 text-accent-200" />
                        {step.result}
                      </p>
                      <p className="text-xs text-dark-400 mt-1">{step.metric}</p>
                    </motion.div>
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

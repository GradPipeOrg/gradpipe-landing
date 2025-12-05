'use client'

import { motion } from 'framer-motion'
import { Sparkles, Brain, Users, Gauge } from 'lucide-react'
import Image from 'next/image'
import SpotlightCard from './ui/SpotlightCard'

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
      color: 'from-pink-500 to-rose-600',
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
      <section id="how-it-works" className="py-24 relative overflow-hidden">
        {/* Connecting Line (Desktop) */}
        <div className="hidden lg:block absolute top-[40%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl font-black text-white mb-6 tracking-tight"
            >
              Our 3-step flywheel takes <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">cold applications → vetted builders.</span>
            </motion.h2>
          </motion.div>

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
                <SpotlightCard className="p-6 h-full flex flex-col">
                  {/* Step Number */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15, delay: index * 0.15 + 0.1 }}
                      viewport={{ once: true }}
                      className="inline-flex items-center justify-center w-12 h-12 bg-bg-primary border-2 border-white/10 rounded-full text-white font-bold text-lg shadow-xl shadow-indigo-500/20"
                    >
                      {index + 1}
                    </motion.div>
                  </div>

                  <div className="mt-8 text-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15, delay: index * 0.15 + 0.2 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 relative overflow-hidden shadow-2xl`}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-20`} />
                      <div className={`absolute inset-0 border border-white/10 rounded-2xl`} />
                      <step.icon className="w-10 h-10 text-white relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" strokeWidth={2} />
                    </motion.div>

                    <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                      {step.title}
                    </h3>

                    <div className="mb-6 min-h-[80px]">
                      <p className="text-text-muted font-medium text-sm leading-relaxed">
                        {index === 0 && "Free AI tools attract ambitious builders."}
                        {index === 1 && "AI analyzes real work—not resume claims."}
                        {index === 2 && "Humans curate dossiers for instant clarity."}
                      </p>
                      <div className="flex flex-wrap gap-2 justify-center text-xs text-text-subtle mt-3">
                        <span>• Attract</span>
                        <span>• Score</span>
                        <span>• Deliver</span>
                      </div>
                    </div>

                    <div className="w-full h-48 relative border border-white/10 rounded-xl overflow-hidden mb-6 bg-bg-primary/50 shadow-inner">
                      {index === 0 && (
                        <Image
                          src="/apex.gif"
                          alt="Animation of the 'Apex' AI Resume Generator by GradPipe"
                          fill
                          className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                          sizes="(max-width: 768px) 100vw, 800px"
                        />
                      )}
                      {index === 1 && (
                        <Image
                          src="/showoff.gif"
                          alt="Animation of the GradPipe 'Showoff' AI Leaderboard for student talent"
                          fill
                          className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                          sizes="(max-width: 768px) 100vw, 800px"
                        />
                      )}
                      {index === 2 && (
                        <Image
                          src="/talent_dossier.png"
                          alt="Screenshot of a GradPipe 'Talent Dossier' for a pre-vetted student developer"
                          fill
                          className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                          sizes="(max-width: 768px) 100vw, 800px"
                        />
                      )}
                    </div>

                    <div className="mt-auto rounded-xl bg-white/5 border border-white/10 p-4 text-left text-sm">
                      <p className="text-white font-semibold flex items-center gap-2 mb-1">
                        <Gauge className="w-4 h-4 text-accent-primary" />
                        {step.result}
                      </p>
                      <p className="text-xs text-text-subtle">{step.metric}</p>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

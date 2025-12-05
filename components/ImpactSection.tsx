'use client'

import { motion } from 'framer-motion'
import { Trophy, Clock, Layers3 } from 'lucide-react'

const metrics = [
  {
    label: "Signals analyzed per profile",
    value: "50+",
    detail: "GitHub, resumes, shipped projects, references",
  },
  {
    label: "Interviews saved / pilot",
    value: "28",
    detail: "Based on average startup cohort",
  },
  {
    label: "Avg. talent dossier satisfaction",
    value: "4.9/5",
    detail: "From pilot debriefs",
  },
]

const narrative = [
  {
    title: "Collect proof-of-work data",
    caption: "Students use Apex + Showoff → we pull commits, PRs, project demos, and references.",
    icon: <Layers3 className="w-5 h-5 text-accent-200" />,
  },
  {
    title: "Score & shortlist",
    caption: "AI ranks talent on velocity, collaboration, and craft; humans verify context.",
    icon: <Clock className="w-5 h-5 text-accent-200" />,
  },
  {
    title: "Ship with confidence",
    caption: "Companies receive 3–5 dossiers tailored to their stack, ready for trial projects.",
    icon: <Trophy className="w-5 h-5 text-accent-200" />,
  },
]

import SpotlightCard from './ui/SpotlightCard'

export default function ImpactSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-sm font-medium text-accent-primary backdrop-blur-md">
              Outcomes that matter
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
              Proof-of-work scoring means you meet builders who can <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">ship day zero.</span>
            </h2>
            <p className="text-text-muted text-lg leading-relaxed">
              GradPipe combines AI ranking with human context. You see the commits, the demo, and the story—in one dossier.
            </p>

            <div className="grid sm:grid-cols-3 gap-4">
              {metrics.map((metric) => (
                <SpotlightCard
                  key={metric.label}
                  className="p-5 flex flex-col justify-between h-full"
                >
                  <div>
                    <p className="text-3xl font-black text-white tracking-tight">{metric.value}</p>
                    <p className="text-sm font-medium text-text-secondary mt-1">{metric.label}</p>
                  </div>
                  <p className="mt-4 text-xs text-text-subtle border-t border-white/5 pt-3">{metric.detail}</p>
                </SpotlightCard>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-3xl border border-white/10 bg-bg-primary/50 backdrop-blur-md p-8 lg:p-10 space-y-8 shadow-2xl shadow-indigo-500/10"
          >
            {narrative.map((item, index) => (
              <div key={item.title} className="flex gap-6 group">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white/10 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-text-subtle">Step {index + 1}</p>
                    <div className="h-px flex-1 bg-white/10" />
                  </div>
                  <h3 className="text-xl text-white font-bold mb-2">{item.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{item.caption}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}


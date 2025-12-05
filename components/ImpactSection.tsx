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

export default function ImpactSection() {
  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-dark-900 to-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-dark-400">Outcomes that matter</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Proof-of-work scoring means you meet builders who can ship day zero.
            </h2>
            <p className="text-dark-200 text-lg">
              GradPipe combines AI ranking with human context. You see the commits, the demo, and the story—in one dossier.
            </p>

            <div className="grid sm:grid-cols-3 gap-4">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-white/10 bg-dark-900/70 p-4"
                >
                  <p className="text-2xl font-bold text-white">{metric.value}</p>
                  <p className="text-sm text-dark-300">{metric.label}</p>
                  <p className="mt-2 text-xs text-dark-500">{metric.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 lg:p-8 space-y-6"
          >
            {narrative.map((item, index) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-dark-900 flex items-center justify-center border border-white/10">
                  {item.icon}
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <p className="text-sm text-dark-300">Step {index + 1}</p>
                    <div className="h-px flex-1 bg-white/10" />
                  </div>
                  <h3 className="text-xl text-white font-semibold">{item.title}</h3>
                  <p className="text-dark-200 text-sm leading-relaxed">{item.caption}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}


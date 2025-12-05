'use client'

import { motion } from 'framer-motion'
import { Building2, Rocket, Timer } from 'lucide-react'
import SpotlightCard from './ui/SpotlightCard'

const partners = [
  {
    name: "Stealth Fintech (YC W24)",
    metric: "4 hires",
    highlight: "AI agents for credit ops",
    impact: "Replaced week-long resume screens with 48h GradPipe dossier.",
    badge: "Pilot → Retainer",
  },
  {
    name: "Unscripted AI Studio",
    metric: "3 founders in residence",
    highlight: "Product & growth hackers",
    impact: "Leaderboard surfaced students already shipping AI copilots.",
    badge: "Proof-of-work only",
  },
  {
    name: "HealthOS",
    metric: "2 ML engineers",
    highlight: "Remote-first",
    impact: "GradPipe cut interview-to-offer ratio from 9:1 to 3:1.",
    badge: "48h shortlist",
  },
  {
    name: "Blitz Commerce",
    metric: "5 builders",
    highlight: "Checkout infra",
    impact: "Stack-ranked 60 applicants by shipped projects & GitHub velocity.",
    badge: "India + SEA",
  },
]

export default function HiringCompaniesSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-sm font-medium text-accent-primary backdrop-blur-md">
            Pilot Outcomes
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Startups use GradPipe when <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">talent needs to ship on day 1.</span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            Each company below ran a paid pilot and converted because proof-of-work data beat resume keywords.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {partners.map((partner, idx) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <SpotlightCard className="p-8 h-full flex flex-col gap-6">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-300 mb-3">
                      {partner.badge}
                    </div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">{partner.name}</h3>
                  </div>
                  <div className="rounded-lg bg-white/5 px-4 py-2 text-sm font-bold text-white border border-white/10 shadow-inner">
                    {partner.metric}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 text-sm">
                  <span className="inline-flex items-center gap-2 rounded-md bg-white/5 px-3 py-1.5 text-text-muted border border-white/5">
                    <Building2 className="w-4 h-4 text-accent-primary" />
                    {partner.highlight}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-md bg-white/5 px-3 py-1.5 text-text-muted border border-white/5">
                    <Timer className="w-4 h-4 text-accent-primary" />
                    48h dossier
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-md bg-white/5 px-3 py-1.5 text-text-muted border border-white/5">
                    <Rocket className="w-4 h-4 text-accent-primary" />
                    Top 1% talent
                  </span>
                </div>

                <p className="text-text-secondary text-base leading-relaxed mt-auto border-t border-white/5 pt-4">
                  "{partner.impact}"
                </p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

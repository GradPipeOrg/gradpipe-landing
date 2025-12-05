'use client'

import { motion } from 'framer-motion'
import { Building2, Rocket, Timer } from 'lucide-react'

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
    <section className="py-20 lg:py-24 bg-gradient-to-b from-dark-950 to-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14 space-y-4"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-dark-500">Pilot outcomes</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Startups use GradPipe when talent needs to ship on day 1.
          </h2>
          <p className="text-dark-300 max-w-2xl mx-auto">
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
              transition={{ delay: idx * 0.05 }}
              className="rounded-2xl border border-white/10 bg-dark-900/70 p-6 flex flex-col gap-4"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-accent-200">{partner.badge}</p>
                  <h3 className="text-xl font-semibold text-white">{partner.name}</h3>
                </div>
                <div className="rounded-xl bg-white/5 px-3 py-2 text-xs text-dark-200 border border-white/10">
                  {partner.metric}
                </div>
              </div>
              <div className="flex flex-wrap gap-3 text-sm text-dark-200">
                <span className="inline-flex items-center gap-2 rounded-full bg-dark-800 px-3 py-1 border border-white/10">
                  <Building2 className="w-4 h-4 text-accent-200" />
                  {partner.highlight}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-dark-800 px-3 py-1 border border-white/10">
                  <Timer className="w-4 h-4 text-accent-200" />
                  48h dossier
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-dark-800 px-3 py-1 border border-white/10">
                  <Rocket className="w-4 h-4 text-accent-200" />
                  Top 1% talent
                </span>
              </div>
              <p className="text-white text-base leading-relaxed">{partner.impact}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'

const logos = [
  { name: 'IIT Bombay', src: '/IITBlogo.png' },
  { name: 'IIT Delhi', src: '/IITDlogo.png' },
  { name: 'IIT Madras', src: '/IITMlogo.png' },
  { name: 'BITS Pilani', src: '/BITSPilaniLogo.png' },
  { name: 'NIT Trichy', src: '/NITTrichyLogo.png' },
  { name: 'IIT Kanpur', src: '/IITKLogo.jpg' },
]

export default function SocialProofSection() {
  const allLogos = [...logos, ...logos]

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr,1.2fr] gap-10 lg:gap-16 items-center">
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-sm font-medium text-accent-primary backdrop-blur-md mb-6">
                Proof over pedigree
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 leading-tight">
                1,000+ ambitious students from India’s premier institutes build in public on GradPipe.
              </h2>
              <p className="text-text-muted text-lg leading-relaxed">
                Every leaderboard profile is backed by GitHub commits, shipped projects, and verified experience. Startups trust GradPipe when pedigree isn’t enough.
              </p>
            </div>
          </div>

          <div className="w-full overflow-hidden relative rounded-3xl bg-bg-primary/50 border border-white/10 p-8 backdrop-blur-sm">
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-bg-primary to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-bg-primary to-transparent z-10" />

            <p className="text-sm font-bold uppercase tracking-wider text-text-subtle mb-8 text-center">Builders competing on Showoff</p>
            <div className="flex animate-[scroll-x_20s_linear_infinite] [will-change:transform]">
              {allLogos.map((logo, index) => (
                <div
                  key={`${logo.name}-${index}`}
                  className="flex-shrink-0 w-48 mx-8 flex flex-col items-center justify-center transition-all duration-300 hover:scale-110 hover:brightness-125 grayscale hover:grayscale-0 opacity-60 hover:opacity-100"
                >
                  <img
                    src={logo.src}
                    alt={`${logo.name} Logo`}
                    className="h-16 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

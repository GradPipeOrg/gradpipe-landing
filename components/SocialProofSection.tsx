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
    <section className="py-20 lg:py-24 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr,1.2fr] gap-10 lg:gap-16 items-center">
          <div className="space-y-6">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-dark-400 mb-4">Proof over pedigree</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                1,000+ ambitious students from India’s premier institutes build in public on GradPipe.
              </h2>
              <p className="text-dark-200 text-lg">
                Every leaderboard profile is backed by GitHub commits, shipped projects, and verified experience. Startups trust GradPipe when pedigree isn’t enough.
              </p>
            </div>


            <div className="grid gap-4">
              {/* Testimonials removed as requested */}
            </div>
          </div>

          <div className="w-full overflow-hidden relative rounded-3xl bg-dark-950 border border-white/10 p-6">
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-dark-950 to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-dark-950 to-transparent z-10" />

            <p className="text-sm text-dark-400 mb-6">Builders competing on Showoff</p>
            <div className="flex animate-[scroll-x_12s_linear_infinite] md:animate-[scroll-x_20s_linear_infinite] lg:animate-[scroll-x_25s_linear_infinite] [will-change:transform]">
              {allLogos.map((logo, index) => (
                <div
                  key={`${logo.name}-${index}`}
                  className="flex-shrink-0 w-52 sm:w-60 h-28 sm:h-24 mx-6 sm:mx-10 flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105"
                >
                  <img
                    src={logo.src}
                    alt={`${logo.name} Logo`}
                    className="h-16 object-contain drop-shadow-[0_0_10px_rgba(111,66,193,0.3)]"
                  />
                  <span className="mt-2 text-xs text-dark-300 sm:hidden">{logo.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

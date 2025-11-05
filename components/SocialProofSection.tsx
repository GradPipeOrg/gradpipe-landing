'use client'

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
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl sm:text-4xl font-extrabold mb-10">
          <span className="gradient-text">Students from India's premier institutes</span> get hired on GradPipe
        </h2>

        <div className="w-full overflow-hidden relative rounded-2xl bg-dark-900/50 border border-dark-700/50 p-4">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-dark-950 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-dark-950 to-transparent z-10" />

          <div className="flex animate-[scroll-x_12s_linear_infinite] md:animate-[scroll-x_20s_linear_infinite] lg:animate-[scroll-x_25s_linear_infinite] [will-change:transform]">
            {allLogos.map((logo, index) => (
              <div key={index} className="flex-shrink-0 w-64 sm:w-72 h-28 sm:h-24 mx-6 sm:mx-10 flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105">
                <img src={logo.src} alt={`${logo.name} Logo`} className="h-20 sm:h-16 object-contain drop-shadow-[0_0_10px_rgba(111,66,193,0.3)]" />
                <span className="mt-2 text-xs text-dark-300 sm:hidden">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

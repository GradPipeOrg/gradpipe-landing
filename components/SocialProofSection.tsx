'use client'

<<<<<<< HEAD
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import Image from 'next/image'

export default function SocialProofSection() {
  const universities = [
    { name: 'IIT Bombay', logo: '/logos/IITBlogo.png' },
    { name: 'IIT Delhi', logo: '/logos/IITDlogo.png' },
    { name: 'IIT Madras', logo: '/logos/IITMlogo.png' },
    { name: 'IIT Kanpur', logo: '/logos/IITKLogo.jpg' },
    { name: 'BITS Pilani', logo: '/logos/BITSPilaniLogo.png' },
    { name: 'NIT Trichy', logo: '/logos/NITTrichyLogo.png' },
  ]

=======
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
>>>>>>> a82df20 (feat(web): complete landing page refactor with new design, SEO, and GEO)
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl sm:text-4xl font-extrabold mb-10">
          <span className="gradient-text">Students from India's premier institutes</span> get hired on GradPipe
        </h2>

<<<<<<< HEAD
        {/* University Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16"
        >
          {universities.map((university, index) => (
            <motion.div
              key={university.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center space-y-3 p-6 bg-dark-800 rounded-xl border border-dark-700 hover:border-accent-500/30 transition-all duration-300 card-hover"
            >
              <div className="relative w-16 h-16 flex items-center justify-center">
                <Image
                  src={university.logo}
                  alt={`${university.name} logo`}
                  width={64}
                  height={64}
                  className="object-contain"
                  onError={(e) => {
                    // Fallback to text if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'block';
                  }}
                />
                {/* Fallback text if image fails to load */}
                <div className="text-2xl font-bold text-accent-400 hidden">
                  {university.name.split(' ')[0]}
                </div>
              </div>
              <span className="text-white font-medium text-sm text-center">
                {university.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
=======
        <div className="w-full overflow-hidden relative rounded-2xl bg-dark-900/50 border border-dark-700/50 p-4">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-dark-950 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-dark-950 to-transparent z-10" />
>>>>>>> a82df20 (feat(web): complete landing page refactor with new design, SEO, and GEO)

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

'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

export default function SocialProofSection() {
  const universities = [
    { name: 'IIT Bombay', logo: '🏛️' },
    { name: 'IIT Delhi', logo: '🎓' },
    { name: 'IIT Madras', logo: '⚡' },
    { name: 'IIT Kanpur', logo: '🔬' },
    { name: 'BITS Pilani', logo: '📚' },
    { name: 'NIT Trichy', logo: '🏫' },
  ]

  return (
    <section className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Trusted by Students from India's Top Institutions
          </h2>
          <p className="text-dark-300 text-lg max-w-2xl mx-auto">
            Join thousands of ambitious students who are already using GradPipe to land their dream jobs
          </p>
        </motion.div>

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
              <div className="text-4xl">{university.logo}</div>
              <span className="text-white font-medium text-sm text-center">
                {university.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-dark-800 rounded-2xl p-8 md:p-12 border border-dark-700 relative">
            {/* Quote Icon */}
            <div className="absolute -top-4 left-8">
              <div className="bg-accent-500 rounded-full p-3">
                <Quote className="w-6 h-6 text-white" />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Testimonial Content */}
              <div className="md:col-span-2">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-xl md:text-2xl text-white mb-6 leading-relaxed">
                  "GradPipe saved me 20 hours a week and got me 3 interviews in my first campaign. 
                  The AI writes emails that actually sound like me, and the results speak for themselves."
                </blockquote>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">H</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Harsh</div>
                    <div className="text-dark-300 text-sm">Beta User • IIT Bombay</div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-400 mb-2">20hrs</div>
                  <div className="text-dark-300 text-sm">Time saved per week</div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-400 mb-2">3</div>
                  <div className="text-dark-300 text-sm">Interviews landed</div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-400 mb-2">85%</div>
                  <div className="text-dark-300 text-sm">Reply rate</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

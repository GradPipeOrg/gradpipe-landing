'use client'

import { motion } from 'framer-motion'

export default function HiringCompaniesSection() {
  return (
    <section className="py-20 lg:py-24 bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Top Startups & Companies Hiring on GradPipe
          </h2>
          <p className="text-dark-300 max-w-2xl mx-auto">
            We're running paid pilots with innovative companies looking for the top 1% of talent. More partners joining soon.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, idx) => (
            <div key={idx} className="bg-dark-800 border border-dashed border-white/10 rounded-lg h-24 flex items-center justify-center">
              <span className="text-gray-500">Coming Soon</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

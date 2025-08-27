'use client'

import { motion } from 'framer-motion'
import { Upload, Target, Rocket, ArrowRight } from 'lucide-react'

export default function HowItWorksSection() {
  const steps = [
    {
      icon: Upload,
      title: 'Upload Your Resume',
      description: 'Our AI instantly understands your skills and experience.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Target,
      title: 'Define Your Campaign',
      description: 'Tell us your target roles and companies.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Rocket,
      title: 'Launch & Track',
      description: 'Our AI writes and sends dozens of personalized emails, and you track the replies.',
      color: 'from-accent-500 to-accent-600'
    }
  ]

  return (
    <section className="py-20 bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Your Career Outreach, Automated in 3 Simple Steps
          </h2>
          <p className="text-dark-300 text-lg max-w-2xl mx-auto">
            Get started in minutes and see results in days, not months
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-dark-600 to-transparent transform -translate-y-1/2 z-0"></div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <div className="text-center">
                  {/* Step Number */}
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-dark-800 border-2 border-dark-600 rounded-full text-white font-bold text-lg mb-6">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl mb-6 shadow-lg`}>
                    <step.icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-dark-300 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Arrow (except for last step) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block mt-8">
                      <motion.div
                        animate={{ x: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <ArrowRight className="w-8 h-8 text-dark-400 mx-auto" />
                      </motion.div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Visual Process Flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-dark-800 rounded-2xl p-8 border border-dark-700">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Step 1 Visual */}
              <div className="text-center">
                <div className="bg-dark-700 rounded-lg p-6 mb-4">
                  <Upload className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <div className="text-sm text-dark-300">Resume Upload</div>
                </div>
                <div className="text-xs text-dark-400">AI Analysis</div>
              </div>

              {/* Step 2 Visual */}
              <div className="text-center">
                <div className="bg-dark-700 rounded-lg p-6 mb-4">
                  <Target className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                  <div className="text-sm text-dark-300">Campaign Setup</div>
                </div>
                <div className="text-xs text-dark-400">Target Definition</div>
              </div>

              {/* Step 3 Visual */}
              <div className="text-center">
                <div className="bg-dark-700 rounded-lg p-6 mb-4">
                  <Rocket className="w-8 h-8 text-accent-400 mx-auto mb-3" />
                  <div className="text-sm text-dark-300">Automated Outreach</div>
                </div>
                <div className="text-xs text-dark-400">Track Results</div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-8">
              <div className="flex items-center justify-between text-xs text-dark-400 mb-2">
                <span>Upload</span>
                <span>Configure</span>
                <span>Launch</span>
              </div>
              <div className="w-full bg-dark-700 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 2, delay: 1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-blue-500 via-purple-500 to-accent-500 h-2 rounded-full"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="btn-primary">
            Start Your First Campaign
          </button>
          <p className="text-dark-400 text-sm mt-4">
            No setup fees • Cancel anytime • 14-day free trial
          </p>
        </motion.div>
      </div>
    </section>
  )
}

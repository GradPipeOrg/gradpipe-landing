'use client'

import { motion } from 'framer-motion'
import { Brain, Database, Zap } from 'lucide-react'

export default function FeaturesSection() {
  const features = [
    {
      icon: Brain,
      title: 'Resume-Aware AI',
      description: 'Our core technology. The AI analyzes your resume against employer profiles to write emails that actually get replies.',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20'
    },
    {
      icon: Database,
      title: 'Integrated Prospect Database',
      description: 'Access a rich database of professional contacts without juggling multiple expensive tools.',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20'
    },
    {
      icon: Zap,
      title: 'Full Workflow Automation',
      description: 'Manage your entire campaign, including follow-ups, from a single, intuitive dashboard.',
      color: 'from-accent-500 to-accent-600',
      bgColor: 'bg-accent-500/10',
      borderColor: 'border-accent-500/20'
    }
  ]

  return (
    <section id="features" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            A Pro-Level Toolkit for Every Ambitious Student
          </h2>
          <p className="text-dark-300 text-lg max-w-2xl mx-auto">
            Everything you need to land your dream job, powered by cutting-edge AI technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`p-8 rounded-2xl border ${feature.borderColor} ${feature.bgColor} card-hover`}
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl mb-6 shadow-lg`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-dark-300 leading-relaxed mb-6">
                {feature.description}
              </p>

              {/* Feature Highlights */}
              <div className="space-y-3">
                {index === 0 && (
                  <>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-dark-300 text-sm">Personalized email generation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-dark-300 text-sm">Resume-to-job matching</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-dark-300 text-sm">Context-aware messaging</span>
                    </div>
                  </>
                )}
                {index === 1 && (
                  <>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-dark-300 text-sm">10M+ professional contacts</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-dark-300 text-sm">Real-time contact verification</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-dark-300 text-sm">Company-specific targeting</span>
                    </div>
                  </>
                )}
                {index === 2 && (
                  <>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent-400 rounded-full"></div>
                      <span className="text-dark-300 text-sm">Automated follow-up sequences</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent-400 rounded-full"></div>
                      <span className="text-dark-300 text-sm">Real-time campaign analytics</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent-400 rounded-full"></div>
                      <span className="text-dark-300 text-sm">One-click campaign management</span>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-dark-800 rounded-2xl p-8 border border-dark-700">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Everything You Need to Succeed
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                'Email Templates',
                'A/B Testing',
                'Analytics Dashboard',
                'CRM Integration',
                'Mobile App',
                'API Access',
                'Priority Support',
                'Custom Branding'
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent-400 rounded-full"></div>
                  <span className="text-dark-300">{feature}</span>
                </div>
              ))}
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
            Explore All Features
          </button>
        </motion.div>
      </div>
    </section>
  )
}

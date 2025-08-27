'use client'

import { motion } from 'framer-motion'
import { Check, Star } from 'lucide-react'

export default function PricingSection() {
  const plans = [
    {
      name: 'Freemium',
      description: 'For getting started.',
      price: 'Free',
      period: '',
      keyFeature: '20 AI email credits/month',
      features: [
        '20 AI email credits/month',
        'Basic email templates',
        'Standard support',
        'Basic analytics'
      ],
      popular: false,
      color: 'border-dark-600',
      bgColor: 'bg-dark-800'
    },
    {
      name: 'Prospector',
      description: 'For the active job seeker.',
      price: '₹499',
      period: '/month',
      keyFeature: '200 AI email credits/month',
      features: [
        '200 AI email credits/month',
        'Full Database Access',
        'Advanced email templates',
        'Priority support',
        'Advanced analytics',
        'A/B testing',
        'Custom branding'
      ],
      popular: true,
      color: 'border-accent-500',
      bgColor: 'bg-dark-800'
    },
    {
      name: 'Agent',
      description: 'For the power user.',
      price: '₹1200',
      period: '/month',
      keyFeature: 'Unlimited AI email credits',
      features: [
        'Unlimited AI email credits',
        'Automated Follow-ups',
        'Everything in Prospector',
        'API access',
        'Dedicated account manager',
        'Custom integrations',
        'White-label options'
      ],
      popular: false,
      color: 'border-primary-500',
      bgColor: 'bg-dark-800'
    }
  ]

  return (
    <section id="pricing" className="py-20 bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-dark-300 text-lg max-w-2xl mx-auto">
            Choose the plan that fits your career goals. All plans include a 14-day free trial.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl border-2 ${plan.color} ${plan.bgColor} p-8 card-hover ${
                plan.popular ? 'ring-2 ring-accent-500/50' : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-accent-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-dark-300 mb-4">{plan.description}</p>
                
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-dark-300">{plan.period}</span>
                </div>
                
                <div className="text-accent-400 font-semibold text-sm">
                  {plan.keyFeature}
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-accent-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-dark-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                plan.popular
                  ? 'bg-accent-500 hover:bg-accent-600 text-white'
                  : 'bg-transparent border-2 border-dark-600 text-white hover:border-accent-500 hover:text-accent-400'
              }`}>
                {plan.price === 'Free' ? 'Get Started Free' : 'Start Free Trial'}
              </button>

              {/* Additional Info */}
              {plan.price !== 'Free' && (
                <p className="text-dark-400 text-xs text-center mt-4">
                  No credit card required • Cancel anytime
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-dark-800 rounded-2xl p-8 border border-dark-700">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Frequently Asked Questions
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-white font-semibold mb-2">Can I change plans anytime?</h4>
                <p className="text-dark-300 text-sm">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
              </div>
              
              <div>
                <h4 className="text-white font-semibold mb-2">What happens after my trial?</h4>
                <p className="text-dark-300 text-sm">After 14 days, you'll be charged for the plan you selected. You can cancel anytime before the trial ends.</p>
              </div>
              
              <div>
                <h4 className="text-white font-semibold mb-2">Do you offer student discounts?</h4>
                <p className="text-dark-300 text-sm">Yes! Students get 50% off all paid plans. Just verify your student email during signup.</p>
              </div>
              
              <div>
                <h4 className="text-white font-semibold mb-2">Is there a setup fee?</h4>
                <p className="text-dark-300 text-sm">No setup fees. You only pay the monthly subscription fee after your free trial.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enterprise CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-accent-500/10 to-primary-500/10 rounded-2xl p-8 border border-accent-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need a custom plan for your university?
            </h3>
            <p className="text-dark-300 mb-6 max-w-2xl mx-auto">
              We offer special pricing and features for universities and student organizations. 
              Get in touch to learn more about our enterprise solutions.
            </p>
            <button className="btn-secondary">
              Contact Sales
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

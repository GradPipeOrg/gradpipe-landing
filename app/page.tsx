'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import SocialProofSection from '@/components/SocialProofSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import FeaturesSection from '@/components/FeaturesSection'
import PricingSection from '@/components/PricingSection'
import TeamSection from '@/components/TeamSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
        <SocialProofSection />
        <HowItWorksSection />
        <FeaturesSection />
        <PricingSection />
        <TeamSection />
        <Footer />
      </motion.div>
    </main>
  )
}

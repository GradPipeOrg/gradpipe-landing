import type { Metadata } from 'next'
import { FadeIn } from '@/components/ui/FadeIn'
// Page-level metadata (OG/Twitter)
export const metadata: Metadata = {
  title: "GradPipe | The Talent Marketplace for Proof, Not Pedigree",
  description:
    "We're an AI-powered marketplace that helps companies hire the top 1% of 'undiscovered' student talent based on their verified skills and projects.",
  openGraph: {
    title: "GradPipe | The Talent Marketplace for Proof, Not Pedigree",
    description:
      "Stop hiring on pedigree. Start hiring on proof. We find and pre-vet the top 1% of 'undiscovered' student talent.",
    url: "https://gradpipe.com",
    siteName: "GradPipe",
    images: [
      {
        url: "https://gradpipe.com/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GradPipe | The Talent Marketplace for Proof, Not Pedigree",
    description:
      "Stop hiring on pedigree. Start hiring on proof. We find and pre-vet the top 1% of 'undiscovered' student talent.",
    images: ["https://gradpipe.com/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import SocialProofSection from '@/components/SocialProofSection'
import HiringCompaniesSection from '@/components/HiringCompaniesSection'
import ProblemSection from '@/components/ProblemSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import CTASection from '@/components/CTASection'
import TeamSection from '@/components/TeamSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FadeIn>
        <SocialProofSection />
      </FadeIn>
      <FadeIn>
        <HiringCompaniesSection />
      </FadeIn>
      <FadeIn>
        <ProblemSection />
      </FadeIn>
      <FadeIn>
        <HowItWorksSection />
      </FadeIn>
      <FadeIn>
        <CTASection />
      </FadeIn>
      <FadeIn>
        <TeamSection />
      </FadeIn>
      <Footer />
    </main>
  )
}

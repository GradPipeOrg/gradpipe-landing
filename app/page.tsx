import type { Metadata } from 'next'
import { FadeIn } from '@/components/ui/FadeIn'
// Page-level metadata (OG/Twitter)
export const metadata: Metadata = {
  title: "GradPipe | The Talent Marketplace for Proof, Not Pedigree",
  description:
    "GradPipe is an AI-powered talent marketplace that helps companies hire the top 1% of 'undiscovered' student talent. We verify skills through our Proof-of-Work engine, not just resume keywords. Students from IIT, BITS, and NIT get discovered by top startups. Companies get curated Talent Dossiers with pre-vetted candidates. Free for students. $150 pilot for companies.",
  keywords: [
    'talent marketplace',
    'student hiring',
    'AI recruitment',
    'verified skills',
    'proof of work',
    'student talent',
    'IIT students',
    'BITS students',
    'startup hiring',
    'talent discovery',
    'resume verification',
    'skills verification',
    'undiscovered talent',
    'talent dossier',
    'Apex resume generator',
    'Showoff leaderboard'
  ],
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
import ProblemSection from '@/components/ProblemSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import CTASection from '@/components/CTASection'
import FAQSection from '@/components/FAQSection'
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
        <ProblemSection />
      </FadeIn>
      <FadeIn>
        <HowItWorksSection />
      </FadeIn>
      <FadeIn>
        <CTASection />
      </FadeIn>
      <FadeIn>
        <FAQSection />
      </FadeIn>
      <FadeIn>
        <TeamSection />
      </FadeIn>
      <Footer />
    </main>
  )
}

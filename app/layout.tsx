import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "GradPipe | The Talent Marketplace for Proof, Not Pedigree",
  description: "We're an AI-powered marketplace that helps companies hire the top 1% of \"undiscovered\" student talent based on their verified skills and projects.",
  keywords: 'talent marketplace, student hiring, AI recruitment, verified skills, proof of work, student talent',
  authors: [{ name: 'GradPipe Team' }],
  metadataBase: new URL('https://gradpipe.com'),
  icons: {
    icon: '/logo.jpg',
    apple: '/logo.jpg',
    shortcut: '/logo.jpg',
  },
  openGraph: {
    title: "GradPipe | The Talent Marketplace for Proof, Not Pedigree",
    description: "We're an AI-powered marketplace that helps companies hire the top 1% of \"undiscovered\" student talent based on their verified skills and projects.",
    type: 'website',
    locale: 'en_US',
    images: ['/logo.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "GradPipe | The Talent Marketplace for Proof, Not Pedigree",
    description: "We're an AI-powered marketplace that helps companies hire the top 1% of \"undiscovered\" student talent based on their verified skills and projects.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-dark-950 text-white antialiased">
        {/* Enhanced Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "GradPipe",
              url: "https://gradpipe.com",
              logo: "https://gradpipe.com/logo.jpg",
              description:
                "GradPipe is an AI-powered talent marketplace that helps companies hire the top 1% of 'undiscovered' student talent based on their verified skills and projects.",
              foundingDate: "2025",
              founders: [
                {
                  "@type": "Person",
                  name: "Muhammad Peerzada"
                },
                {
                  "@type": "Person",
                  name: "Pratham Agarwal"
                }
              ],
              sameAs: [
                "https://www.instagram.com/gradpipe/",
                "https://www.linkedin.com/company/gradpipe/",
                "https://twitter.com/gradpipe",
                "https://github.com/gradpipe"
              ],
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://showoff-psi.vercel.app/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
              contactPoint: {
                "@type": "ContactPoint",
                email: "contact@gradpipe.com",
                contactType: "Customer Support",
                availableLanguage: "English"
              },
              areaServed: {
                "@type": "Country",
                name: "India"
              },
              knowsAbout: [
                "Talent Marketplace",
                "AI Recruitment",
                "Student Hiring",
                "Proof of Work",
                "Skills Verification"
              ]
            }),
          }}
        />
        {/* Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "Talent Marketplace & Recruitment Platform",
              provider: {
                "@type": "Organization",
                name: "GradPipe"
              },
              description: "AI-powered talent marketplace connecting companies with top 1% of verified student talent based on proof of work, not pedigree.",
              serviceArea: {
                "@type": "Country",
                name: "India"
              },
              offers: [
                {
                  "@type": "Offer",
                  name: "Student Talent Discovery",
                  description: "Free platform for students to get discovered by top startups",
                  price: "0",
                  priceCurrency: "USD"
                },
                {
                  "@type": "Offer",
                  name: "Company Pilot Program",
                  description: "Curated talent dossier with pre-vetted candidates",
                  price: "150",
                  priceCurrency: "USD"
                }
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "GradPipe Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Apex Resume Generator",
                      url: "https://resume.gradpipe.com"
                    }
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Showoff AI Leaderboard",
                      url: "https://showoff-psi.vercel.app"
                    }
                  }
                ]
              }
            }),
          }}
        />
        {/* BreadcrumbList Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://gradpipe.com"
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "How It Works",
                  item: "https://gradpipe.com#how-it-works"
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Team",
                  item: "https://gradpipe.com#team"
                }
              ]
            }),
          }}
        />
        {children}
      </body>
    </html>
  )
}

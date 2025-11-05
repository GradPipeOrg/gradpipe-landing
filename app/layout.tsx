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
              sameAs: [
                "https://www.instagram.com/gradpipe/",
                "https://www.linkedin.com/company/gradpipe/",
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
              },
            }),
          }}
        />
        {children}
      </body>
    </html>
  )
}

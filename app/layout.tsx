import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GradPipe - Stop Wasting Time on Cold Emails. Start Landing Interviews.',
  description: 'GradPipe is your AI co-pilot that automates the entire job outreach workflow, from finding prospects to sending hyper-personalized emails.',
  keywords: 'job search, career outreach, AI automation, university students, cold emails, interviews',
  authors: [{ name: 'GradPipe Team' }],
  openGraph: {
    title: 'GradPipe - Stop Wasting Time on Cold Emails. Start Landing Interviews.',
    description: 'GradPipe is your AI co-pilot that automates the entire job outreach workflow, from finding prospects to sending hyper-personalized emails.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GradPipe - Stop Wasting Time on Cold Emails. Start Landing Interviews.',
    description: 'GradPipe is your AI co-pilot that automates the entire job outreach workflow, from finding prospects to sending hyper-personalized emails.',
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
        {children}
      </body>
    </html>
  )
}

'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Sparkles } from 'lucide-react'
import { useState, useRef, useLayoutEffect } from 'react'

const faqs = [
  {
    question: "What is GradPipe?",
    answer: "GradPipe is an AI-powered talent marketplace that helps companies hire the top 1% of 'undiscovered' student talent based on their verified skills and projects, not just their resume keywords or university brand."
  },
  {
    question: "How does GradPipe verify student talent?",
    answer: "Our AI engine analyzes students' resumes, GitHub profiles, and real projects to generate an objective 'Proof-of-Work' score. This allows us to identify genuine builders and hustlers based on actual work, not just claims on a resume."
  },
  {
    question: "What is the Apex Resume Generator?",
    answer: "Apex is our free AI-powered resume generator that helps students create professional resumes. It's part of our Career Co-pilot suite designed to attract ambitious students to our network while solving a real problem they face."
  },
  {
    question: "What is Showoff?",
    answer: "Showoff is our AI Leaderboard platform that ranks students based on their verified skills and projects. It provides an objective Proof-of-Work score that helps companies identify top talent beyond traditional resume screening."
  },
  {
    question: "What is a Talent Dossier?",
    answer: "A Talent Dossier is a curated document containing the top 3-5 pre-vetted candidates matched to your specific role requirements. It includes their verified skills, projects, and Proof-of-Work scores, saving you hours of manual screening."
  },
  {
    question: "How much does GradPipe cost for companies?",
    answer: "We're currently offering a $150 pilot program that includes a curated Talent Dossier with pre-vetted candidates matched to your role. This is a risk-free way to test our platform and find top talent quickly."
  },
  {
    question: "Is GradPipe free for students?",
    answer: "Yes! Students can join our platform for free. They can use our Apex Resume Generator, get on the Showoff leaderboard, have their skills verified, and get discovered by top startups—all at no cost."
  },
  {
    question: "Which universities are represented on GradPipe?",
    answer: "We have students from India's premier institutes including IIT Bombay, IIT Delhi, IIT Madras, IIT Kanpur, BITS Pilani, and NIT Trichy, among others."
  },
  {
    question: "How long does it take to receive a Talent Dossier?",
    answer: "Companies typically receive their first curated Talent Dossier within 48 hours of booking a pilot call. Our AI engine pre-vets candidates, so you get quality matches fast."
  },
  {
    question: "What makes GradPipe different from other recruitment platforms?",
    answer: "Unlike traditional platforms that rely on resume keywords and university brands, GradPipe uses AI to verify actual skills and projects. We focus on proof of work, not pedigree, helping companies find undiscovered talent and students get opportunities based on merit."
  }
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  // Generate FAQPage schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <>
      {/* Schema markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section id="faq" className="py-24 relative overflow-hidden bg-dark-950">
        {/* Ambient Background Effects */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-indigo-500/5 blur-[100px] rounded-full" />
          <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-purple-500/5 blur-[100px] rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-sm font-medium text-accent-primary backdrop-blur-md mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Got questions?</span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl font-black text-white mb-6 tracking-tight"
            >
              Frequently Asked Questions
            </motion.h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Everything you need to know about how GradPipe connects top talent with ambitious startups.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                index={index}
                openIndex={openIndex}
                setOpenIndex={setOpenIndex}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

// FAQ Item Component with Magic Border
function FAQItem({
  faq,
  index,
  openIndex,
  setOpenIndex
}: {
  faq: { question: string; answer: string }
  index: number
  openIndex: number | null
  setOpenIndex: (index: number | null) => void
}) {
  const contentRef = useRef<HTMLDivElement>(null)
  const isOpen = openIndex === index
  const [maxHeight, setMaxHeight] = useState(0)

  // Measure content height using layout effect for accurate measurement
  useLayoutEffect(() => {
    const measureHeight = () => {
      if (contentRef.current) {
        const height = contentRef.current.scrollHeight
        if (height > 0) {
          setMaxHeight(height)
        }
      }
    }

    measureHeight()
    // Re-measure when content might change
    const timeout = setTimeout(measureHeight, 100)
    return () => clearTimeout(timeout)
  }, [isOpen, faq.answer])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 15, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="relative group"
    >
      {/* Magic Border Container */}
      <div className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 transition-opacity duration-500 ${isOpen ? 'opacity-100 blur-sm' : 'group-hover:opacity-50'}`} />

      <div className="relative bg-dark-900 rounded-2xl border border-white/10 overflow-hidden">
        <button
          onClick={() => setOpenIndex(isOpen ? null : index)}
          className="w-full px-6 py-5 flex justify-between items-center text-left relative z-10 bg-dark-900/50 hover:bg-white/5 transition-colors duration-300"
        >
          <span className={`font-bold text-lg pr-4 transition-colors duration-300 ${isOpen ? 'text-white' : 'text-text-primary group-hover:text-white'}`}>
            {faq.question}
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`flex-shrink-0 p-2 rounded-full transition-colors duration-300 ${isOpen ? 'bg-indigo-500 text-white' : 'bg-white/5 text-text-muted group-hover:bg-white/10 group-hover:text-white'}`}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </button>
        <motion.div
          animate={{
            maxHeight: isOpen ? (maxHeight > 0 ? maxHeight : 500) : 0,
            opacity: isOpen ? 1 : 0
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 35,
            mass: 0.6
          }}
          style={{ overflow: 'hidden' }}
          className="bg-dark-900/50"
        >
          <div ref={contentRef} className="px-6 pb-6 pt-0">
            <p className="text-text-muted leading-relaxed text-base border-t border-white/5 pt-4">
              {faq.answer}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}



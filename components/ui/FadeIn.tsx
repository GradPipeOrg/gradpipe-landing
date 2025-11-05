'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  className?: string
}

export function FadeIn({ children, className }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ type: 'spring', stiffness: 100, damping: 15, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

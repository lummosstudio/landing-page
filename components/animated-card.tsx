'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedCardProps {
  children: ReactNode
  delay?: number
  className?: string
  hoverable?: boolean
}

export function AnimatedCard({
  children,
  delay = 0,
  className = '',
  hoverable = true,
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      whileHover={
        hoverable
          ? {
              y: -10,
              transition: { duration: 0.3, ease: 'easeOut' },
            }
          : undefined
      }
      className={className}
    >
      {children}
    </motion.div>
  )
}

'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  stagger?: boolean
}

export function AnimatedSection({
  children,
  className = '',
  stagger = true,
}: AnimatedSectionProps) {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: false, amount: 0.2 }}
      transition={
        stagger
          ? {
              staggerChildren: 0.1,
              delayChildren: 0.05,
            }
          : undefined
      }
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface AnimatedItemProps {
  children: ReactNode
  className?: string
}

export function AnimatedItem({ children, className = '' }: AnimatedItemProps) {
  return (
    <motion.div
      variants={{
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

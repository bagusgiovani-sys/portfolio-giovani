'use client'

import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface NavButtonProps {
  direction: 'prev' | 'next'
  onClick: () => void
}

export default function NavButton({ direction, onClick }: NavButtonProps) {
  const isPrev = direction === 'prev'
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.12, backgroundColor: 'var(--color-brand-one)' }}
      whileTap={{ scale: 0.88 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className="w-12 h-12 rounded-full bg-brand-two text-brand-four flex items-center justify-center shadow-lg"
      aria-label={isPrev ? 'Previous' : 'Next'}
    >
      <motion.div
        whileTap={{ x: isPrev ? -4 : 4 }}
        transition={{ type: 'spring', stiffness: 600, damping: 15 }}
      >
        {isPrev ? <ChevronLeft className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
      </motion.div>
    </motion.button>
  )
}

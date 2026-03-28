'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, X, ChevronUp } from 'lucide-react'
import { useState } from 'react'

function CurvyLines() {
  return (
    <motion.svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      preserveAspectRatio="none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {[
        "M -50 20 Q 150 -10 350 25 Q 550 55 750 20 Q 950 -5 1150 20",
        "M -50 35 Q 200 60 400 35 Q 600 10 800 40 Q 1000 65 1150 38",
        "M -50 50 Q 100 25 300 55 Q 500 80 700 50 Q 900 20 1150 55",
      ].map((d, i) => (
        <motion.path
          key={i}
          d={d}
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-brand-three/25"
          strokeDasharray="12 6"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -80 }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'linear', delay: i * 0.3 }}
        />
      ))}
    </motion.svg>
  )
}

const comparisons = [
  {
    skill: 'React Expert',
    detail: 'Deep mastery of the React ecosystem — hooks, context, performance patterns, Zustand, TanStack Query, and component architecture that scales.',
  },
  {
    skill: 'Perfect Pixel',
    detail: 'Translating Figma into living UI with sub-pixel precision. Every spacing, shadow, and transition matches — or exceeds — the original design.',
  },
  {
    skill: 'TypeScript Proficiency',
    detail: 'Writing strictly typed, self-documenting code. Generics, utility types, discriminated unions — type safety as a first-class feature.',
  },
  {
    skill: 'Clean, Maintainable Code',
    detail: 'Atomic design, feature-based folder structure, and SOLID principles. Code that new teammates can read in minutes, not days.',
  },
  {
    skill: 'Performance Optimization',
    detail: 'Lazy loading, code splitting, memoization, and bundle analysis. Real Lighthouse scores — not just theoretical knowledge.',
  },
  {
    skill: 'Responsive Website',
    detail: 'Mobile-first layouts that feel native on every breakpoint. Touch gestures, viewport units, fluid typography — no breakpoint left behind.',
  },
  {
    skill: 'UI Design Proficiency (Figma)',
    detail: 'Figma slicing near perfection. Auto-layout, component variants, design tokens — bridging design and dev with zero lost-in-translation.',
  },
]

export default function WhyMeSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const handleClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section id="why-me" className="bg-background py-16 px-4 md:px-8">
      <div className="max-w-md mx-auto lg:max-w-6xl">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center"
        >
          Why Choose Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-brand-one rounded-2xl overflow-hidden shadow-sm border border-border"
        >
          {/* Header */}
          <div className="px-4 py-4 bg-brand-one">
            <div className="bg-brand-four rounded-full px-8 lg:px-36 py-4 flex items-center justify-between">
              <span className="text-base lg:text-2xl font-semibold text-gray-700">Skill</span>
              <div className="flex md:gap-8">
                <span className="w-16 text-base lg:text-2xl font-semibold text-gray-700 text-center">Me</span>
                <span className="w-16 text-base lg:text-2xl font-semibold text-gray-700 text-center">Other</span>
              </div>
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-border">
            {comparisons.map((item, index) => {
              const isExpanded = expandedIndex === index
              const isHovered = hoveredIndex === index

              return (
                <div key={item.skill}>
                  {/* Main row */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                    onHoverStart={() => setHoveredIndex(index)}
                    onHoverEnd={() => setHoveredIndex(null)}
                    onClick={() => handleClick(index)}
                    className="relative px-8 lg:px-40 py-5 flex items-center justify-between cursor-pointer overflow-hidden group"
                  >
                    {isHovered && !isExpanded && <CurvyLines />}

                    <div className="relative z-10 flex items-center gap-3">
                      <span className="text-sm md:text-lg font-medium text-brand-three leading-snug">
                        {item.skill}
                      </span>
                      {/* Read more hint */}
                      <AnimatePresence>
                        {isHovered && !isExpanded && (
                          <motion.span
                            initial={{ opacity: 0, x: -6 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -6 }}
                            transition={{ duration: 0.2 }}
                            className="text-xs text-brand-four/80 font-medium"
                          >
                            read more →
                          </motion.span>
                        )}
                        {isExpanded && (
                          <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="text-xs text-brand-four/60 font-medium"
                          >
                            collapse ↑
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className="relative z-10 flex pr-3 md:pr-0 gap-1 md:gap-8">
                      <div className="w-16 flex justify-center">
                        <div className="w-8 h-8 rounded-full bg-brand-four flex items-center justify-center">
                          <Check className="w-5 h-5 text-gray-700 stroke-[3]" />
                        </div>
                      </div>
                      <div className="w-16 flex justify-center">
                        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                          <X className="w-5 h-5 text-muted-foreground stroke-[3]" />
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Expanded detail panel */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        key="detail"
                        initial={{ opacity: 0, height: 0, y: -10 }}
                        animate={{ opacity: 1, height: 'auto', y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -10 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.25, delay: 0.1 }}
                          className="px-8 lg:px-40 py-5 bg-brand-two/30 border-t border-brand-three/20"
                        >
                          <p className="text-sm md:text-base text-brand-four leading-relaxed">
                            {item.detail}
                          </p>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </motion.div>

      </div>
    </section>
  )
}


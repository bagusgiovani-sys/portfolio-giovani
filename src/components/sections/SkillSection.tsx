'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { skillsData, type Skill } from '@/lib/data'
import { useSwipe } from '@/hooks/useSwipe'
import { SkillCardSkeleton } from '@/components/ui/Skeleton'

interface SkillCardProps {
  skill: Skill
  index: number
}

function SkillCard({ skill, index }: SkillCardProps) {
  return (
    <motion.div
      key={skill.name}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="bg-card rounded-2xl p-6 shadow-sm"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-full bg-neutral-200/50 dark:bg-neutral-800/50 flex items-center justify-center">
          <Image src={skill.icon} alt={skill.name} width={28} height={28} className="object-contain" />
        </div>
        <h3 className="text-lg font-bold text-foreground">{skill.name}</h3>
      </div>
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{skill.description}</p>
      <div className="flex items-center gap-3">
        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${skill.level}%` }}
            transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: 'easeOut' }}
            className="h-full bg-primary-300 rounded-full"
          />
        </div>
        <span className="text-sm font-semibold text-foreground min-w-[45px] text-right">
          {skill.level}%
        </span>
      </div>
    </motion.div>
  )
}

export default function SkillSection() {
  const [currentPage, setCurrentPage] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 400)
    return () => clearTimeout(timer)
  }, [])

  const { pages } = skillsData

  const { handleSwipeStart } = useSwipe({
    onSwipeLeft: () => setCurrentPage((p) => Math.min(p + 1, pages.length - 1)),
    onSwipeRight: () => setCurrentPage((p) => Math.max(p - 1, 0)),
  })

  const desktopCol2 = pages[2]

  return (
    <section id="skills" className="bg-background py-16 px-4 md:px-8">
      <div className="max-w-md mx-auto lg:max-w-4xl">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[30px] md:text-5xl font-bold text-center mb-8"
        >
          {skillsData.title}
        </motion.h2>

        {/* Mobile */}
        <div className="lg:hidden">
          <div
            className="space-y-6 touch-pan-y cursor-grab active:cursor-grabbing"
            onTouchStart={handleSwipeStart}
            onMouseDown={handleSwipeStart}
          >
            {!mounted
              ? [...Array(3)].map((_, i) => <SkillCardSkeleton key={i} />)
              : pages[currentPage].map((skill, index) => (
                  <SkillCard key={`${skill.name}-${currentPage}`} skill={skill} index={index} />
                ))}
          </div>

          <div className="flex items-center justify-center gap-2 mt-8">
            {pages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`h-2 rounded-full transition-all ${
                  currentPage === index ? 'w-8 bg-primary-300' : 'w-2 bg-muted-foreground/30'
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-2 gap-6">
            {/* Left column — paginates between page 0 and 1 */}
            <div
              className="space-y-6 touch-pan-y cursor-grab active:cursor-grabbing"
              onTouchStart={handleSwipeStart}
              onMouseDown={handleSwipeStart}
            >
              {!mounted
                ? [...Array(3)].map((_, i) => <SkillCardSkeleton key={i} />)
                : pages[currentPage].map((skill, index) => (
                    <SkillCard key={`${skill.name}-desktop-left`} skill={skill} index={index} />
                  ))}
            </div>

            {/* Right column — always page 2 */}
            <div className="space-y-6">
              {!mounted
                ? [...Array(3)].map((_, i) => <SkillCardSkeleton key={i} />)
                : desktopCol2.map((skill, index) => (
                    <SkillCard key={`${skill.name}-desktop-right`} skill={skill} index={index} />
                  ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 mt-8">
            {pages.slice(0, 2).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`h-2 rounded-full transition-all ${
                  currentPage === index ? 'w-8 bg-primary-300' : 'w-2 bg-muted-foreground/30'
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
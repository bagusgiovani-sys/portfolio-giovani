'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { skillsData, type Skill } from '@/lib/data'
import { useSwipe } from '@/hooks/useSwipe'
import { SkillCardSkeleton } from '@/components/ui/Skeleton'

interface SkillCardProps {
  skill: Skill
  index: number
  position: 'center' | 'left' | 'right'
  isHovered: boolean
  onHover: () => void
  onLeave: () => void
}

function SkillCard({ skill, index, position, isHovered, onHover, onLeave }: SkillCardProps) {
  const isActive = isHovered || position === 'center'

  return (
    <motion.div
      onHoverStart={onHover}
      onHoverEnd={onLeave}
      animate={{
        scale: isActive ? 1 : 0.82,
        opacity: isActive ? 1 : 0.45,
        y: isActive ? [0, -10, 0] : 0,
        filter: isActive ? 'blur(0px)' : 'blur(1.5px)',
      }}
      transition={
        isActive
          ? {
              y: { duration: 3, repeat: Infinity, ease: 'easeInOut', delay: index * 0.3 },
              scale: { duration: 0.3, ease: 'easeOut' },
              opacity: { duration: 0.4 },
              filter: { duration: 0.4 },
            }
          : { duration: 0.3, ease: 'easeOut' }
      }
      className="bg-brand-two rounded-2xl p-6 w-full shadow-xl cursor-pointer"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-15 h-15 rounded-full bg-neutral-800/50 flex items-center justify-center">
          <Image src={skill.icon} alt={skill.name} width={38} height={38} className="object-fill" />
        </div>
        <h3 className="text-lg font-bold text-blue-50">{skill.name}</h3>
      </div>
      <p className="text-sm text-brand-three mb-4 leading-relaxed">{skill.description}</p>
      <div className="flex items-center gap-3">
        <div className="flex-1 h-2 bg-brand-one rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: isActive ? `${skill.level}%` : '0%' }}
            transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: 'easeOut' }}
            className="h-full bg-brand-four rounded-full"
          />
        </div>
        <span className="text-sm font-semibold text-brand-four min-w-[45px] text-right">
          {skill.level}%
        </span>
      </div>
    </motion.div>
  )
}

function NavButton({ direction, onClick }: { direction: 'prev' | 'next'; onClick: () => void }) {
  const isPrev = direction === 'prev'
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.12, backgroundColor: 'var(--color-brand-one)' }}
      whileTap={{ scale: 0.88 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className="w-12 h-12 rounded-full bg-brand-two text-brand-four flex items-center justify-center shadow-lg"
      aria-label={isPrev ? 'Previous skill' : 'Next skill'}
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

export default function SkillSection() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [mounted, setMounted] = useState(false)
  const [direction, setDirection] = useState(0)
  const [hoveredPosition, setHoveredPosition] = useState<'left' | 'center' | 'right' | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 400)
    return () => clearTimeout(timer)
  }, [])

  const { pages } = skillsData
  const allSkills = pages.flat()
  const total = allSkills.length

  const goNext = () => {
    setDirection(1)
    setCurrentCardIndex((p) => (p + 1) % total)
  }

  const goPrev = () => {
    setDirection(-1)
    setCurrentCardIndex((p) => (p - 1 + total) % total)
  }

  const { handleSwipeStart } = useSwipe({
    onSwipeLeft: goNext,
    onSwipeRight: goPrev,
  })

  const prevIndex = (currentCardIndex - 1 + total) % total
  const nextIndex = (currentCardIndex + 1) % total

  return (
    <section id="skills" className="bg-background py-16 px-4 md:px-8">
      <div className="max-w-md mx-auto lg:max-w-4xl">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[30px] md:text-5xl font-bold text-center mb-10"
        >
          {skillsData.title}
        </motion.h2>

        {/* Mobile: swipe only, no buttons */}
        <div
          className="lg:hidden relative flex items-center justify-center gap-3 touch-pan-y overflow-hidden"
          onTouchStart={handleSwipeStart}
          onMouseDown={handleSwipeStart}
        >
          <div className="w-[20%] flex-shrink-0 pointer-events-none select-none">
            {mounted ? (
              <SkillCard skill={allSkills[prevIndex]} index={0} position="left"
                isHovered={false} onHover={() => {}} onLeave={() => {}} />
            ) : <SkillCardSkeleton />}
          </div>

          <div className="w-[60%] flex-shrink-0">
            <AnimatePresence mode="wait" custom={direction}>
              {mounted ? (
                <motion.div
                  key={currentCardIndex}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -60 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                >
                  <SkillCard skill={allSkills[currentCardIndex]} index={currentCardIndex} position="center"
                    isHovered={false} onHover={() => {}} onLeave={() => {}} />
                </motion.div>
              ) : <SkillCardSkeleton />}
            </AnimatePresence>
          </div>

          <div className="w-[20%] flex-shrink-0 pointer-events-none select-none">
            {mounted ? (
              <SkillCard skill={allSkills[nextIndex]} index={0} position="right"
                isHovered={false} onHover={() => {}} onLeave={() => {}} />
            ) : <SkillCardSkeleton />}
          </div>
        </div>

        {/* Desktop: 3 animated hoverable cards + prev/next buttons */}
        <div className="hidden lg:block">
          <div className="flex items-center justify-center gap-6 overflow-hidden">
            {mounted ? (
              <>
                <div className="w-[28%] flex-shrink-0">
                  <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                      key={`left-${prevIndex}`}
                      custom={direction}
                      initial={{ opacity: 0, x: direction * 80 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: direction * -80 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                    >
                      <SkillCard skill={allSkills[prevIndex]} index={0} position="left"
                        isHovered={hoveredPosition === 'left'}
                        onHover={() => setHoveredPosition('left')}
                        onLeave={() => setHoveredPosition(null)} />
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="w-[34%] flex-shrink-0">
                  <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                      key={`center-${currentCardIndex}`}
                      custom={direction}
                      initial={{ opacity: 0, x: direction * 80 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: direction * -80 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                    >
                      <SkillCard skill={allSkills[currentCardIndex]} index={currentCardIndex} position="center"
                        isHovered={hoveredPosition === 'center'}
                        onHover={() => setHoveredPosition('center')}
                        onLeave={() => setHoveredPosition(null)} />
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="w-[28%] flex-shrink-0">
                  <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                      key={`right-${nextIndex}`}
                      custom={direction}
                      initial={{ opacity: 0, x: direction * 80 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: direction * -80 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                    >
                      <SkillCard skill={allSkills[nextIndex]} index={0} position="right"
                        isHovered={hoveredPosition === 'right'}
                        onHover={() => setHoveredPosition('right')}
                        onLeave={() => setHoveredPosition(null)} />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </>
            ) : (
              <>
                <div className="w-[28%]"><SkillCardSkeleton /></div>
                <div className="w-[34%]"><SkillCardSkeleton /></div>
                <div className="w-[28%]"><SkillCardSkeleton /></div>
              </>
            )}
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <NavButton direction="prev" onClick={goPrev} />
            <NavButton direction="next" onClick={goNext} />
          </div>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {allSkills.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentCardIndex ? 1 : -1)
                setCurrentCardIndex(index)
              }}
              className={`h-2 rounded-full transition-all ${
                currentCardIndex === index ? 'w-8 bg-brand-one' : 'w-2 bg-muted-foreground/30'
              }`}
              aria-label={`Go to skill ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
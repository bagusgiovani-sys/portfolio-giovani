'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSwipe } from '@/hooks/useSwipe'
import NavButton from '@/components/ui/NavButton'

export interface CardSlotProps {
  position: 'left' | 'center' | 'right'
  itemIndex: number
  isHovered: boolean
  onHover: () => void
  onLeave: () => void
}

interface CardCarouselProps<T> {
  items: T[]
  renderCard: (item: T, slotProps: CardSlotProps) => React.ReactNode
  skeleton: React.ReactNode
}

const slideVariants = {
  initial: (dir: number) => ({ opacity: 0, x: dir * 80 }),
  animate: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir * -80 }),
}

const mobileSlideVariants = {
  initial: (dir: number) => ({ opacity: 0, x: dir * 60 }),
  animate: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir * -60 }),
}

export default function CardCarousel<T>({
  items,
  renderCard,
  skeleton,
}: CardCarouselProps<T>) {
  const [mounted, setMounted] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [hoveredPosition, setHoveredPosition] = useState<'left' | 'center' | 'right' | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 400)
    return () => clearTimeout(timer)
  }, [])

  const total = items.length
  const prevIndex = (currentIndex - 1 + total) % total
  const nextIndex = (currentIndex + 1) % total

  const goNext = () => { setDirection(1); setCurrentIndex((p) => (p + 1) % total) }
  const goPrev = () => { setDirection(-1); setCurrentIndex((p) => (p - 1 + total) % total) }

  const { handleSwipeStart } = useSwipe({ onSwipeLeft: goNext, onSwipeRight: goPrev })

  const slots = [
    { pos: 'left' as const,   idx: prevIndex,    widthClass: 'w-[28%]' },
    { pos: 'center' as const, idx: currentIndex, widthClass: 'w-[34%]' },
    { pos: 'right' as const,  idx: nextIndex,    widthClass: 'w-[28%]' },
  ]

  return (
    <>
      {/* Mobile: swipe-only peek layout */}
      <div
        className="lg:hidden relative flex items-center justify-center gap-3 touch-pan-y overflow-hidden"
        onTouchStart={handleSwipeStart}
        onMouseDown={handleSwipeStart}
      >
        <div className="w-[20%] flex-shrink-0 pointer-events-none select-none">
          {mounted
            ? renderCard(items[prevIndex], { position: 'left', itemIndex: 0, isHovered: false, onHover: () => {}, onLeave: () => {} })
            : skeleton}
        </div>

        <div className="w-[60%] flex-shrink-0">
          <AnimatePresence mode="wait" custom={direction}>
            {mounted ? (
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={mobileSlideVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.35, ease: 'easeInOut' }}
              >
                {renderCard(items[currentIndex], { position: 'center', itemIndex: currentIndex, isHovered: false, onHover: () => {}, onLeave: () => {} })}
              </motion.div>
            ) : skeleton}
          </AnimatePresence>
        </div>

        <div className="w-[20%] flex-shrink-0 pointer-events-none select-none">
          {mounted
            ? renderCard(items[nextIndex], { position: 'right', itemIndex: 0, isHovered: false, onHover: () => {}, onLeave: () => {} })
            : skeleton}
        </div>
      </div>

      {/* Desktop: 3-card animated layout with nav buttons */}
      <div className="hidden lg:block">
        <div className="flex items-center justify-center gap-6 overflow-hidden">
          {mounted ? (
            slots.map(({ pos, idx, widthClass }) => (
              <div key={pos} className={`${widthClass} flex-shrink-0`}>
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={`${pos}-${idx}`}
                    custom={direction}
                    variants={slideVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                  >
                    {renderCard(items[idx], {
                      position: pos,
                      itemIndex: pos === 'center' ? currentIndex : 0,
                      isHovered: hoveredPosition === pos,
                      onHover: () => setHoveredPosition(pos),
                      onLeave: () => setHoveredPosition(null),
                    })}
                  </motion.div>
                </AnimatePresence>
              </div>
            ))
          ) : (
            slots.map(({ pos, widthClass }) => (
              <div key={pos} className={widthClass}>{skeleton}</div>
            ))
          )}
        </div>

        <div className="flex items-center justify-center gap-4 mt-8">
          <NavButton direction="prev" onClick={goPrev} />
          <NavButton direction="next" onClick={goNext} />
        </div>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => { setDirection(index > currentIndex ? 1 : -1); setCurrentIndex(index) }}
            className={`h-2 rounded-full transition-all ${
              currentIndex === index ? 'w-8 bg-brand-one' : 'w-2 bg-muted-foreground/30'
            }`}
            aria-label={`Go to item ${index + 1}`}
          />
        ))}
      </div>
    </>
  )
}

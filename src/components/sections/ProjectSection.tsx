'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import { projectsData, type Project } from '@/lib/data'
import { useSwipe } from '@/hooks/useSwipe'
import { ProjectCardSkeleton } from '@/components/ui/Skeleton'

// ─── Featured data (hardcoded — swap image paths to GIFs later) ───────────────

interface FeaturedProject {
  id: number
  title: string
  image: string
  link: string
  badges: string[]
}

const FEATURED: FeaturedProject[] = [
  {
    id: 1,
    title: 'Movie App API',
    image: '/assets/movieapp.gif',
    link: 'https://movie-app-by-giovani.vercel.app/',
    badges: ['React JS', 'Framer Motion', 'Redux', 'Axios', 'TanStack Query'],
  },
  {
    id: 2,
    title: 'Instagram Clone App',
    image: '/assets/sociality.gif',
    link: 'https://sociality-app-by-gio.vercel.app/',
    badges: ['Next JS', 'Lazy Loading', 'Optimistic UI', 'Radix', 'Redux',],
  },
]

// ─── Featured Card ─────────────────────────────────────────────────────────────

function FeaturedCard({ project }: { project: FeaturedProject }) {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex-2 w-[190px] md:w-[380px] h-[190px] md:h-[360px] block overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image / GIF */}
      <motion.div
        animate={{ scale: hovered ? 1.06 : 1 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="relative w-[300px] md:w-[400px] h-[120px] md:h-[270px] scale-100"
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          unoptimized
        />
      </motion.div>

      {/* Shine sweep on hover */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            key="shine"
            initial={{ x: '-100%', opacity: 0.6 }}
            animate={{ x: '200%', opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="absolute inset-0 z-20 pointer-events-none"
            style={{
              background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.35) 50%, transparent 60%)',
            }}
          />
        )}
      </AnimatePresence>

      {/* Bottom overlay: title + badges */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-4 bg-gradient-to-t from-black/85 via-black/50 to-transparent">
        <div className="flex items-center gap-2 mb-2.5">
          <h3 className="text-white font-bold text-xs md:text-[14px] leading-tight">{project.title}</h3>
          <ExternalLink className="w-3.5 h-3.5 text-white/70 shrink-0" />
        </div>
        <div className="flex flex-wrap gap-1.5">
          {project.badges.map((badge) => (
            <span
              key={badge}
              className="text-[4px] md:text-[9px] font-medium px-2 py-0.5 rounded-full bg-brand-four/20 text-brand-four border border-brand-four/30 backdrop-blur-sm"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* Top-right link icon on hover */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.7 }}
        transition={{ duration: 0.2 }}
        className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
      >
        <ExternalLink className="w-4 h-4 text-white" />
      </motion.div>
    </a>
  )
}

// ─── Other Projects — same pattern as SkillSection ─────────────────────────────

interface OtherCardProps {
  item: Project
  index: number
  position: 'left' | 'center' | 'right'
  isHovered: boolean
  onHover: () => void
  onLeave: () => void
}

function OtherCard({ item, index, position, isHovered, onHover, onLeave }: OtherCardProps) {
  const [imageError, setImageError] = useState(false)
  const isActive = isHovered || position === 'center'

  return (
    <motion.div
      onHoverStart={onHover}
      onHoverEnd={onLeave}
      animate={{
        scale: isActive ? 1 : 0.82,
        opacity: isActive ? 1 : 0.45,
        y: isActive ? [0, -8, 0] : 0,
        filter: isActive ? 'blur(0px)' : 'blur(1.5px)',
      }}
      transition={
        isActive
          ? {
            y: { duration: 3, repeat: Infinity, ease: 'easeInOut', delay: index * 0.3 },
            scale: { duration: 0.3 },
            opacity: { duration: 0.4 },
            filter: { duration: 0.4 },
          }
          : { duration: 0.3 }
      }
      className="bg-brand-four border border-border rounded-2xl overflow-hidden shadow-xl cursor-pointer group w-full"
    >
      <div className="relative aspect-video w-full overflow-hidden">
        {!imageError ? (
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-300 scale-110 group-hover:scale-135"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-muted">
            <p className="text-3xl text-muted-foreground">Project Image</p>
          </div>
        )}
        <div className="absolute top-3 left-3 right-3 flex justify-between">
          <span className="px-2 py-1 bg-white/90 rounded-full text-[10px] font-medium text-foreground border border-border shadow-sm">
            {item.category}
          </span>
          <span className="px-2 py-1 bg-white/90 rounded-full text-[10px] font-medium text-foreground border border-border shadow-sm">
            {item.year}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-base font-bold text-foreground mb-3 leading-tight">{item.title}</h3>
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-brand-one font-semibold hover:gap-2.5 transition-all duration-300"
        >
          Visit Website
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
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
      aria-label={isPrev ? 'Previous project' : 'Next project'}
    >
      <motion.div whileTap={{ x: isPrev ? -4 : 4 }} transition={{ type: 'spring', stiffness: 600, damping: 15 }}>
        {isPrev ? <ChevronLeft className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
      </motion.div>
    </motion.button>
  )
}

// ─── Main Export ───────────────────────────────────────────────────────────────

export default function ProjectSection() {
  const [mounted, setMounted] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [hoveredPosition, setHoveredPosition] = useState<'left' | 'center' | 'right' | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 400)
    return () => clearTimeout(timer)
  }, [])

  const items = projectsData.items
  const total = items.length
  const prevIndex = (currentIndex - 1 + total) % total
  const nextIndex = (currentIndex + 1) % total

  const goNext = () => { setDirection(1); setCurrentIndex((p) => (p + 1) % total) }
  const goPrev = () => { setDirection(-1); setCurrentIndex((p) => (p - 1 + total) % total) }

  const { handleSwipeStart } = useSwipe({ onSwipeLeft: goNext, onSwipeRight: goPrev })

  return (
    <section id="projects" className="bg-background py-16 px-4 md:px-8 overflow-hidden">
      <div className="max-w-5xl mx-auto w-full">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-foreground mb-3 text-center"
        >
          {projectsData.title}
        </motion.h2>

        {/* ── Featured ── */}
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-6"
        >
          Featured
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative flex rounded-2xl overflow-hidden mb-20 max-w-3xl mx-auto"
        >
          {FEATURED.map((project, i) => (
            <div key={project.id} className="flex-1 relative">
              <FeaturedCard project={project} />
              {/* Vertical black fade divider in the middle */}
              {i === 0 && (
                <div
                  className="absolute inset-y-0 right-0 w-8 z-10 pointer-events-none"
                  style={{ background: 'linear-gradient(to right, transparent, black)' }}
                />
              )}
              {i === 1 && (
                <div
                  className="absolute inset-y-0 left-0 w-8 z-10 pointer-events-none"
                  style={{ background: 'linear-gradient(to left, transparent, black)' }}
                />
              )}
            </div>
          ))}
        </motion.div>

        {/* ── Other Projects ── */}
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-8"
        >
          Other Projects
        </motion.p>

        {/* Mobile: swipe carousel */}
        <div
          className="lg:hidden relative flex items-center justify-center gap-3 overflow-hidden touch-pan-y"
          onTouchStart={handleSwipeStart}
          onMouseDown={handleSwipeStart}
        >
          <div className="w-[20%] flex-shrink-0 pointer-events-none select-none">
            {mounted ? (
              <OtherCard item={items[prevIndex]} index={0} position="left"
                isHovered={false} onHover={() => { }} onLeave={() => { }} />
            ) : <ProjectCardSkeleton />}
          </div>
          <div className="w-[60%] flex-shrink-0">
            <AnimatePresence mode="wait" custom={direction}>
              {mounted ? (
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -60 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                >
                  <OtherCard item={items[currentIndex]} index={currentIndex} position="center"
                    isHovered={false} onHover={() => { }} onLeave={() => { }} />
                </motion.div>
              ) : <ProjectCardSkeleton />}
            </AnimatePresence>
          </div>
          <div className="w-[20%] flex-shrink-0 pointer-events-none select-none">
            {mounted ? (
              <OtherCard item={items[nextIndex]} index={0} position="right"
                isHovered={false} onHover={() => { }} onLeave={() => { }} />
            ) : <ProjectCardSkeleton />}
          </div>
        </div>

        {/* Desktop: 3-card animated slider */}
        <div className="hidden lg:block">
          <div className="flex items-center justify-center gap-6 overflow-hidden">
            {mounted ? (
              <>
                <div className="w-[28%] flex-shrink-0">
                  <AnimatePresence mode="wait" custom={direction}>
                    <motion.div key={`left-${prevIndex}`} custom={direction}
                      initial={{ opacity: 0, x: direction * 80 }} animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: direction * -80 }} transition={{ duration: 0.35, ease: 'easeInOut' }}>
                      <OtherCard item={items[prevIndex]} index={0} position="left"
                        isHovered={hoveredPosition === 'left'}
                        onHover={() => setHoveredPosition('left')}
                        onLeave={() => setHoveredPosition(null)} />
                    </motion.div>
                  </AnimatePresence>
                </div>
                <div className="w-[34%] flex-shrink-0">
                  <AnimatePresence mode="wait" custom={direction}>
                    <motion.div key={`center-${currentIndex}`} custom={direction}
                      initial={{ opacity: 0, x: direction * 80 }} animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: direction * -80 }} transition={{ duration: 0.35, ease: 'easeInOut' }}>
                      <OtherCard item={items[currentIndex]} index={currentIndex} position="center"
                        isHovered={hoveredPosition === 'center'}
                        onHover={() => setHoveredPosition('center')}
                        onLeave={() => setHoveredPosition(null)} />
                    </motion.div>
                  </AnimatePresence>
                </div>
                <div className="w-[28%] flex-shrink-0">
                  <AnimatePresence mode="wait" custom={direction}>
                    <motion.div key={`right-${nextIndex}`} custom={direction}
                      initial={{ opacity: 0, x: direction * 80 }} animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: direction * -80 }} transition={{ duration: 0.35, ease: 'easeInOut' }}>
                      <OtherCard item={items[nextIndex]} index={0} position="right"
                        isHovered={hoveredPosition === 'right'}
                        onHover={() => setHoveredPosition('right')}
                        onLeave={() => setHoveredPosition(null)} />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </>
            ) : (
              <>
                <div className="w-[28%]"><ProjectCardSkeleton /></div>
                <div className="w-[34%]"><ProjectCardSkeleton /></div>
                <div className="w-[28%]"><ProjectCardSkeleton /></div>
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
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => { setDirection(index > currentIndex ? 1 : -1); setCurrentIndex(index) }}
              className={`h-2 rounded-full transition-all ${currentIndex === index ? 'w-8 bg-brand-one' : 'w-2 bg-muted-foreground/30'
                }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
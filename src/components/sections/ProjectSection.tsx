'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { projectsData, type Project } from '@/lib/data'
import { ProjectCardSkeleton } from '@/components/ui/Skeleton'
import CardCarousel, { type CardSlotProps } from '@/components/ui/CardCarousel'

// ─── Featured ─────────────────────────────────────────────────────────────────

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
    badges: ['Next JS', 'Lazy Loading', 'Optimistic UI', 'Radix', 'Redux'],
  },
]

function FeaturedCard({ project }: { project: FeaturedProject }) {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex-2 w-[170px] md:w-[380px] h-[260px] md:h-[360px] overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        animate={{ scale: hovered ? 1.06 : 1 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="relative w-[175px] md:w-[400px] h-[260px] md:h-[270px] scale-115 md:scale-100"
      >
        <Image src={project.image} alt={project.title} fill className="object-cover" unoptimized />
      </motion.div>

      <AnimatePresence>
        {hovered && (
          <motion.div
            key="shine"
            initial={{ x: '-100%', opacity: 0.6 }}
            animate={{ x: '200%', opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="absolute inset-0 z-20 pointer-events-none"
            style={{ background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.35) 50%, transparent 60%)' }}
          />
        )}
      </AnimatePresence>

      <div className="absolute bottom-0 left-0 right-0 z-10 p-4 bg-gradient-to-t from-black/85 via-black/50 to-transparent">
        <div className="flex items-center gap-2 mb-2.5">
          <h3 className="text-white font-bold text-[9px] md:text-[14px] leading-tight">{project.title}</h3>
          <ExternalLink className="w-3.5 h-3.5 text-white/70 shrink-0" />
        </div>
        <div className="flex flex-wrap gap-1.5">
          {project.badges.map((badge) => (
            <span key={badge} className="text-[4px] md:text-[9px] font-medium px-2 py-0.5 rounded-full bg-brand-four/20 text-brand-four border border-brand-four/30 backdrop-blur-sm">
              {badge}
            </span>
          ))}
        </div>
      </div>

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

// ─── Other Projects card ───────────────────────────────────────────────────────

function OtherCard({ item, position, isHovered, onHover, onLeave }: { item: Project } & CardSlotProps) {
  const [imageError, setImageError] = useState(false)
  const [imgHovered, setImgHovered] = useState(false)
  const isActive = isHovered || position === 'center'

  return (
    <motion.div
      onHoverStart={() => { onHover(); setImgHovered(true) }}
      onHoverEnd={() => { onLeave(); setImgHovered(false) }}
      animate={{
        scale: isActive ? 1 : 0.82,
        opacity: isActive ? 1 : 0.45,
        y: isActive ? [0, -8, 0] : 0,
        filter: isActive ? 'blur(0px)' : 'blur(1.5px)',
      }}
      transition={
        isActive
          ? {
              y: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
              scale: { duration: 0.3 },
              opacity: { duration: 0.4 },
              filter: { duration: 0.4 },
            }
          : { duration: 0.3 }
      }
      className="bg-brand-four border border-border rounded-2xl overflow-hidden shadow-xl cursor-pointer w-full"
    >
      <div className="relative aspect-video w-full overflow-hidden">
        {!imageError ? (
          <motion.div
            className="absolute inset-0"
            animate={{ scale: imgHovered ? 1.15 : 1.1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <Image src={item.image} alt={item.title} fill className="object-cover" onError={() => setImageError(true)} />
          </motion.div>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-muted">
            <p className="text-3xl text-muted-foreground">Project Image</p>
          </div>
        )}
        <div className="absolute top-3 left-3 right-3 flex justify-between z-10">
          <span className="px-2 py-1 bg-white/90 rounded-full text-[10px] font-medium text-foreground border border-border shadow-sm">{item.category}</span>
          <span className="px-2 py-1 bg-white/90 rounded-full text-[10px] font-medium text-foreground border border-border shadow-sm">{item.year}</span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-base font-bold text-foreground mb-3 leading-tight">{item.title}</h3>
        {item.link !== '#' ? (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-brand-one font-semibold hover:gap-2.5 transition-all duration-300"
          >
            Visit Website <ArrowRight className="w-3.5 h-3.5" />
          </a>
        ) : (
          <span className="text-sm text-muted-foreground font-medium">Coming Soon</span>
        )}
      </div>
    </motion.div>
  )
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function ProjectSection() {
  return (
    <section id="projects" className="bg-background py-16 px-4 md:px-8 overflow-hidden">
      <div className="max-w-5xl mx-auto w-full">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-foreground mb-3 text-center"
        >
          {projectsData.title}
        </motion.h2>

        {/* Featured */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
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
              {i === 0 && (
                <div className="absolute inset-y-0 right-0 w-8 z-10 pointer-events-none"
                  style={{ background: 'linear-gradient(to right, transparent, black)' }} />
              )}
              {i === 1 && (
                <div className="absolute inset-y-0 left-0 w-8 z-10 pointer-events-none"
                  style={{ background: 'linear-gradient(to left, transparent, black)' }} />
              )}
            </div>
          ))}
        </motion.div>

        {/* Other Projects */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-8"
        >
          Other Projects
        </motion.p>

        <CardCarousel
          items={projectsData.items}
          skeleton={<ProjectCardSkeleton />}
          renderCard={(item, slotProps) => (
            <OtherCard item={item} {...slotProps} />
          )}
        />

      </div>
    </section>
  )
}

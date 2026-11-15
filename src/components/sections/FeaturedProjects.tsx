'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Lightbulb, Layers, Flag } from 'lucide-react'
import { featuredProjects } from '@/lib/featured-projects'
import ProjectCarouselCard from '@/components/ui/ProjectCarouselCard'
import CardCarousel from '@/components/ui/CardCarousel'
import { ProjectCardSkeleton } from '@/components/ui/Skeleton'

export default function FeaturedProjects() {
  const reduceMotion = useReducedMotion()
  const reveal = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 18 },
    visible: { opacity: 1, y: 0, transition: { duration: reduceMotion ? 0 : 0.4 } },
  }
  const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.09, delayChildren: reduceMotion ? 0 : 0.12 } },
  }

  return (
    <div className="mb-20">
      <CardCarousel
        items={featuredProjects}
        skeleton={<ProjectCardSkeleton />}
        renderCard={(project, slotProps) => (
          <ProjectCarouselCard
            item={{ ...project, year: '2026', link: project.link ?? '#' }}
            {...slotProps}
          />
        )}
        renderDetails={project => (
          <motion.section
            key={project.id}
            aria-label={`${project.title} details`}
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="rounded-3xl border border-border bg-brand-four p-6 text-brand-one shadow-xl md:p-8"
          >
            <motion.div variants={reveal} className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-two">Behind the project</p>
                <h3 className="text-2xl font-bold">{project.title}</h3>
              </div>
              {project.link && (
                <motion.a
                  href={project.link} target="_blank" rel="noopener noreferrer"
                  whileHover={reduceMotion ? undefined : { y: -3, scale: 1.03 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                  className="inline-flex min-h-11 items-center gap-2 rounded-full bg-brand-one px-5 py-2 text-sm font-semibold text-brand-four shadow-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-one"
                >
                  Visit Website <ArrowUpRight className="h-4 w-4" aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span>
                </motion.a>
              )}
            </motion.div>
            <motion.p variants={reveal} className="mt-3 text-sm leading-relaxed text-brand-two">{project.summary}</motion.p>
            <motion.div variants={stagger} className="mt-5 flex flex-wrap gap-2">
              {project.badges.map(badge => (
                <motion.span key={badge} variants={reveal} whileHover={reduceMotion ? undefined : { y: -3 }} className="rounded-full bg-brand-two px-3 py-1.5 text-xs font-medium text-brand-four">{badge}</motion.span>
              ))}
            </motion.div>
            <div className="mt-6 grid gap-6 border-t border-brand-one/15 pt-6 sm:grid-cols-2">
              <motion.div variants={reveal}>
                <h4 className="mb-3 flex items-center gap-2 text-base font-bold"><Lightbulb className="h-5 w-5" aria-hidden="true" />Background &amp; problem</h4>
                <p className="text-sm leading-relaxed text-brand-two">{project.background}</p>
                <h5 className="mb-2 mt-5 text-sm font-semibold">The problem it addresses</h5>
                <p className="text-sm leading-relaxed text-brand-two">{project.problem}</p>
              </motion.div>
              <motion.div variants={stagger}>
                <motion.h4 variants={reveal} className="mb-3 flex items-center gap-2 text-base font-bold"><Layers className="h-5 w-5" aria-hidden="true" />Inside the project</motion.h4>
                <motion.ul variants={stagger} className="space-y-3">
                  {project.features.map((feature, i) => (
                    <motion.li key={feature} variants={reveal} whileHover={reduceMotion ? undefined : { x: 4 }} className="flex gap-3 text-sm leading-relaxed text-brand-two">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-three text-xs font-bold text-brand-one" aria-hidden="true">{i + 1}</span>{feature}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </div>
            <motion.div variants={reveal} className="mt-6 rounded-2xl border border-brand-one/10 bg-brand-three/40 p-4">
              <h4 className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider"><Flag className="h-4 w-4" aria-hidden="true" />Project stage</h4>
              <p className="text-xs leading-relaxed text-brand-two">{project.status}</p>
            </motion.div>
          </motion.section>
        )}
      />
    </div>
  )
}

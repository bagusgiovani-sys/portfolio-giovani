'use client'

import { motion } from 'framer-motion'
import ProjectCarouselCard from '@/components/ui/ProjectCarouselCard'
import FeaturedProjects from '@/components/sections/FeaturedProjects'
import { projectsData } from '@/lib/data'
import { ProjectCardSkeleton } from '@/components/ui/Skeleton'
import CardCarousel from '@/components/ui/CardCarousel'

// ─── Featured ─────────────────────────────────────────────────────────────────

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
          className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-8"
        >
          Featured
        </motion.p>

        <FeaturedProjects />

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
            <ProjectCarouselCard item={item} {...slotProps} />
          )}
        />

      </div>
    </section>
  )
}

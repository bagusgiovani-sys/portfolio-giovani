'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { projectsData, type Project } from '@/lib/data'
import { ProjectCardSkeleton } from '@/components/ui/Skeleton'

interface ProjectCardProps {
  item: Project
  index: number
}

function ProjectCard({ item, index }: ProjectCardProps) {
  const [imageError, setImageError] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="flex justify-between items-center mb-4">
        <span className="px-3 py-1.5 bg-white rounded-full text-xs font-medium text-foreground border-2 border-dashed border-border shadow-sm">
          {item.category}
        </span>
        <span className="px-3 py-1.5 bg-white rounded-full text-xs font-medium text-foreground border-2 border-dashed border-border shadow-sm">
          {item.year}
        </span>
      </div>

      <div className="relative aspect-square rounded-2xl overflow-hidden mb-6">
        {!imageError ? (
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover p-2 transition-transform duration-300 group-hover:scale-105"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-muted rounded-2xl">
            <p className="text-sm text-muted-foreground">Project Image</p>
          </div>
        )}
      </div>

      <h3 className="text-xl font-bold text-foreground mb-4">{item.title}</h3>

      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-primary-300 font-semibold hover:gap-3 transition-all duration-300"
      >
        Visit Website
        <ArrowRight className="w-4 h-4" />
      </a>
    </motion.div>
  )
}

export default function ProjectSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="projects" className="bg-background py-16 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center"
        >
          {projectsData.title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
          {!mounted
            ? [...Array(6)].map((_, i) => <ProjectCardSkeleton key={i} />)
            : projectsData.items.map((item, index) => (
                <ProjectCard key={item.id} item={item} index={index} />
              ))}
        </div>

      </div>
    </section>
  )
}
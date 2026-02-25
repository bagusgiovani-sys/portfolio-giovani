// src/components/sections/WorkSection.tsx
'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function WorkSection() {
  const workItems = [
    {
      id: 1,
      title: 'Dashboard SaaS Task Management',
      category: 'Dashboard',
      year: '2024',
      image: '/assets/images/CardBackground/image-1.svg',
      link: 'https://example.com/project-1',
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      category: 'Dashboard',
      year: '2024',
      image: '/assets/images/CardBackground/image-2.svg',
      link: 'https://example.com/project-2',
    },
    {
      id: 3,
      title: 'Social Media Dashboard',
      category: 'Dashboard',
      year: '2023',
      image: '/assets/images/CardBackground/image-3.svg',
      link: 'https://example.com/project-3',
    },
    {
      id: 4,
      title: 'Analytics Platform',
      category: 'Dashboard',
      year: '2023',
      image: '/assets/images/CardBackground/image-4.svg',
      link: 'https://example.com/project-4',
    },
    {
      id: 5,
      title: 'Mobile Banking App',
      category: 'Dashboard',
      year: '2024',
      image: '/assets/images/CardBackground/image-5.svg',
      link: 'https://example.com/project-5',
    },
    {
      id: 6,
      title: 'Portfolio Website',
      category: 'Dashboard',
      year: '2023',
      image: '/assets/images/CardBackground/image-6.svg',
      link: 'https://example.com/project-6',
    },
  ]

  return (
    <section
      id="work"
      className="bg-background py-16 px-4 md:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center"
        >
          My Latest Work
        </motion.h2>

        {/* Work Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
          {workItems.map((item, index) => (
            <WorkCard key={item.id} item={item} index={index} />
          ))}
        </div>

      </div>
    </section>
  )
}

interface WorkCardProps {
  item: {
    id: number
    title: string
    category: string
    year: string
    image: string
    link: string
  }
  index: number
}

function WorkCard({ item, index }: WorkCardProps) {
  const [imageError, setImageError] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      {/* Tags - OUTSIDE/ABOVE the image */}
      <div className="flex justify-between items-center mb-4">
        <span className="px-3 py-1.5 bg-white rounded-full text-xs font-medium text-foreground border-2 border-dashed border-border shadow-sm">
          {item.category}
        </span>
        <span className="px-3 py-1.5 bg-white rounded-full text-xs font-medium text-foreground border-2 border-dashed border-border shadow-sm">
          {item.year}
        </span>
      </div>

      {/* Image */}
      <div className="relative aspect-[44/44] rounded-4x overflow-hidden mb-6">
        {!imageError ? (
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover p-2 transition-transform duration-300 group-hover:scale-105"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <div className="w-16 h-16 mx-auto mb-2 rounded-lg bg-muted" />
              <p className="text-sm">Project Image</p>
            </div>
          </div>
        )}
      </div>

      {/* Content - Below the image */}
      <h3 className="text-xl font-bold text-foreground mb-4">
        {item.title}
      </h3>

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
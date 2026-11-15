'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { type Project } from '@/lib/data'
import { type CardSlotProps } from '@/components/ui/CardCarousel'

export default function ProjectCarouselCard({ item, position, isHovered, onHover, onLeave }: { item: Pick<Project, 'title' | 'category' | 'year' | 'link'> & { image?: string } } & CardSlotProps) {
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
        {item.image && !imageError ? (
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

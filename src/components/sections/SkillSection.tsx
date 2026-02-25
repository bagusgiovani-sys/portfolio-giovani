'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

export default function SkillSection() {
  const [currentPage, setCurrentPage] = useState(0)

  const skills = [
    [
      {
        name: 'HTML5',
        icon: '/assets/icons/html_logo.svg',
        description: 'Building the structure of web pages with semantic markup for accessibility.',
        level: 90,
      },
      {
        name: 'CSS3',
        icon: '/assets/icons/css_logo.svg',
        description: 'Styling modern web interfaces with responsive and performant CSS.',
        level: 90,
      },
      {
        name: 'JavaScript',
        icon: '/assets/icons/js_logo.svg',
        description: 'Creating interactive and dynamic web applications with vanilla JavaScript.',
        level: 90,
      },
    ],
    [
      {
        name: 'React',
        icon: '/assets/icons/React_logo.svg',
        description: 'Building modern web applications with component-based architecture.',
        level: 95,
      },
      {
        name: 'TypeScript',
        icon: '/assets/icons/ts_logo.svg',
        description: 'Writing type-safe JavaScript code for better maintainability.',
        level: 85,
      },
      {
        name: 'Express.js',
        icon: '/assets/icons/express_logo.svg',
        description: 'Building robust backend APIs and server-side applications.',
        level: 88,
      },
    ],
    [
      {
        name: 'Docker',
        icon: '/assets/icons/docker_logo.svg',
        description: 'Containerizing applications for consistent deployment across environments.',
        level: 80,
      },
      {
        name: 'MongoDB',
        icon: '/assets/icons/mongo_logo.svg',
        description: 'Working with NoSQL databases for flexible data storage.',
        level: 85,
      },
      {
        name: 'PostgreSQL',
        icon: '/assets/icons/postgreSQL_logo.svg',
        description: 'Managing relational databases with complex queries and optimization.',
        level: 82,
      },
    ],
  ]

  // Mobile: swipeable pages (all 3 pages)
  // Desktop: first 2 pages shown side by side, page 3 only on mobile
  const mobilePages = skills // all 3 pages on mobile
  const desktopCol1 = skills[currentPage] // left column follows pagination (pages 0 and 1)
  const desktopCol2 = skills[2] // right column always shows page 2

  const handleSwipe = (event: React.TouchEvent | React.MouseEvent) => {
    const touch = 'touches' in event ? event.touches[0] : event as React.MouseEvent
    const startX = touch.clientX

    const handleMove = (e: TouchEvent | MouseEvent) => {
      const currentTouch = 'touches' in e ? e.touches[0] : e as MouseEvent
      const diff = startX - currentTouch.clientX

      if (Math.abs(diff) > 50) {
        if (diff > 0 && currentPage < mobilePages.length - 1) {
          setCurrentPage(currentPage + 1)
        } else if (diff < 0 && currentPage > 0) {
          setCurrentPage(currentPage - 1)
        }
        cleanup()
      }
    }

    const cleanup = () => {
      document.removeEventListener('touchmove', handleMove as any)
      document.removeEventListener('touchend', cleanup)
      document.removeEventListener('mousemove', handleMove as any)
      document.removeEventListener('mouseup', cleanup)
    }

    document.addEventListener('touchmove', handleMove as any)
    document.addEventListener('touchend', cleanup)
    document.addEventListener('mousemove', handleMove as any)
    document.addEventListener('mouseup', cleanup)
  }

  const SkillCard = ({ skill, index }: { skill: typeof skills[0][0], index: number }) => (
    <motion.div
      key={`${skill.name}-${index}`}
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
        <span className="text-sm font-semibold text-foreground min-w-[45px] text-right">{skill.level}%</span>
      </div>
    </motion.div>
  )

  return (
    <section id="skills" className="bg-background py-16 px-4 md:px-8">
      <div className="max-w-md mx-auto lg:max-w-4xl">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[30px] md:text-5xl font-bold text-center mb-8"
        >
          My Professional Skill
        </motion.h2>

        {/* Mobile - Swipeable */}
        <div className="lg:hidden">
          <div
            className="space-y-6 touch-pan-y cursor-grab active:cursor-grabbing"
            onTouchStart={handleSwipe}
            onMouseDown={handleSwipe}
          >
            {mobilePages[currentPage].map((skill, index) => (
              <SkillCard key={`${skill.name}-${currentPage}-${index}`} skill={skill} index={index} />
            ))}
          </div>

          {/* Mobile Pagination */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {mobilePages.map((_, index) => (
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

        {/* Desktop - 2 columns, left col paginates between page 0 and 1, right col always page 2 */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-2 gap-6">
            {/* Left Column - swipeable between page 0 and 1 */}
            <div
              className="space-y-6 touch-pan-y cursor-grab active:cursor-grabbing"
              onTouchStart={handleSwipe}
              onMouseDown={handleSwipe}
            >
              {desktopCol1.map((skill, index) => (
                <SkillCard key={`${skill.name}-desktop-left-${index}`} skill={skill} index={index} />
              ))}
            </div>

            {/* Right Column - always page 2 */}
            <div className="space-y-6">
              {desktopCol2.map((skill, index) => (
                <SkillCard key={`${skill.name}-desktop-right-${index}`} skill={skill} index={index} />
              ))}
            </div>
          </div>

          {/* Desktop Pagination - only 2 dots for page 0 and 1 */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {skills.slice(0, 2).map((_, index) => (
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
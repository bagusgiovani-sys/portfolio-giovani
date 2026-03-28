'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { experienceData } from '@/lib/data'

export default function ExperienceSection() {
  const { title, items } = experienceData

  return (
    <section id="experience" className="bg-background py-16 px-4 md:px-8 overflow-hidden">
      <div className="max-w-4xl mx-auto w-full">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12"
        >
          {title}
        </motion.h2>

        {/* Outer grid — left column + right column */}
        <div className="flex flex-col lg:flex-row lg:gap-12">

          {/* Left column — all logos stacked */}
          <div className="hidden lg:flex flex-col lg:w-48 lg:shrink-0">
            {items.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col mb-0"
                style={{ paddingBottom: index < items.length - 1 ? '4.5rem' : 0 }}
              >
                <div className="w-32 h-16 relative mb-2">
                  <Image src={exp.logo} alt={`${exp.company} logo`} fill className="object-contain object-left" />
                </div>
                <h3 className="text-base font-semibold text-foreground">{exp.company}</h3>
                <p className="text-sm text-muted-foreground">{exp.period}</p>
              </motion.div>
            ))}
          </div>

          {/* Right column — continuous timeline */}
          <div className="relative flex-1">

            {/* Continuous dashed line running full height */}
            <div className="absolute left-[11px] top-[11px] bottom-[11px] w-px border-l-2 border-dashed border-gray-900/50" />

            <div className="flex flex-col">
              {items.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex gap-6 ${index < items.length - 1 ? 'pb-16' : ''}`}
                >
                  {/* Dot */}
                  <div className="relative z-10 shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full border-2 border-dashed border-gray-900/50 flex items-center justify-center bg-background">
                      <div className="w-3.5 h-3.5 rounded-full bg-gray-700" />
                    </div>
                  </div>

                  {/* Mobile logo — only visible on mobile */}
                  <div className="lg:hidden flex flex-col mb-4">
                    <div className="w-32 h-12 relative mb-1">
                      <Image src={exp.logo} alt={`${exp.company} logo`} fill className="object-contain object-left" />
                    </div>
                    <h3 className="text-base font-semibold text-foreground">{exp.company}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
                    <h4 className="text-base font-bold text-foreground mb-2">{exp.role}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                  </div>

                  {/* Desktop role + description */}
                  <div className="hidden lg:block">
                    <h4 className="text-base font-bold text-foreground mb-2">{exp.role}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
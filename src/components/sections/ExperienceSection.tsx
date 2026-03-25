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

        <div className="space-y-12">
          {items.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col lg:flex-row lg:gap-12"
            >
              {/* Left — Logo + Company + Period */}
              <div className="flex flex-col lg:w-48 lg:shrink-0 mb-4 lg:mb-0">
                <div className="w-32 h-16 relative mb-2">
                  <Image
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <h3 className="text-base font-semibold text-foreground">{exp.company}</h3>
                <p className="text-sm text-muted-foreground">{exp.period}</p>
              </div>

              {/* Right — Timeline dot + Role + Description */}
              <div className="relative flex gap-6 flex-1">
                {/* Vertical dashed line + dot */}
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full border-2 border-dashed border-gray-400/50 flex items-center justify-center shrink-0 mt-1">
                    <div className="w-3.5 h-3.5 rounded-full bg-primary-300" />
                  </div>
                  {index < items.length - 1 && (
                    <div className="flex-1 w-px border-l-2 border-dashed border-gray-300/50 mt-2" />
                  )}
                </div>

                <div className="pb-4">
                  <h4 className="text-base font-bold text-foreground mb-2">{exp.role}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { experienceData } from '@/lib/data'

export default function ExperienceSection() {
  const { title, items } = experienceData

  return (
    <section id="experience" className="bg-background py-16 px-4 md:px-8 overflow-hidden">
      <div className="max-w-3xl mx-auto w-full">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12"
        >
          {title}
        </motion.h2>

        <div className="relative">
          <div className="absolute left-[11px] top-15 bottom-0 border-l-2 border-dashed border-gray-800/50" />

          <div className="space-y-12">
            {items.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-12"
              >
                <div className="flex items-center gap-4">
                  <div className="absolute left-0 w-6 h-6 rounded-full border-2 border-dashed border-gray-600/50 flex items-center justify-center shrink-0">
                    <div className="w-4 h-4 rounded-full bg-primary-300" />
                  </div>
                  <div className="w-32 h-32 relative">
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground mt-[-30px] mb-1">
                  {exp.company}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
                <h4 className="text-lg font-bold text-foreground mb-3">{exp.role}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
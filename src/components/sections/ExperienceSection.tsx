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

        <div className="flex flex-col md:flex-row md:gap-12">

          {/* Left column — logos (desktop only) */}
          <div className="hidden md:flex flex-col shrink-0">
            {items.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col ${index < items.length - 1 ? 'pb-16' : ''}`}
              >
                <Image
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  width={exp.logoSize.width}
                  height={exp.logoSize.height}
                  className="object-contain object-left mb-2"
                />
                <h3 className="text-base font-semibold text-foreground">{exp.company}</h3>
                <p className="text-xs text-muted-foreground mb-1">{exp.about}</p>
                <p className="text-sm font-bold text-muted-foreground">{exp.period}</p>
              </motion.div>
            ))}
          </div>

          {/* Right column — timeline */}
          <div className="relative flex-1">
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
                  <div className="relative z-10 shrink-0 mt-8 lg:mt-10">
                    <div className="w-6 h-6 rounded-full border-2 border-dashed border-gray-900/50 flex items-center justify-center bg-background">
                      <div className="w-3.5 h-3.5 rounded-full bg-gray-700" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    {/* Mobile: logo + company + period */}
                    <div className="md:hidden mb-3">
                      <Image
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        width={exp.logoSize.width}
                        height={exp.logoSize.height}
                        className="object-contain object-left mb-2"
                      />
                      <h3 className="text-base font-semibold text-foreground">{exp.company}</h3>
                      <p className="text-xs text-muted-foreground mb-1">{exp.about}</p>
                      <p className="text-sm text-muted-foreground">{exp.period}</p>
                    </div>

                    {/* Role + description */}
                    <h4 className="text-base font-bold text-foreground mb-2 mt-8 lg:mt-10">{exp.role}</h4>
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
'use client'
import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'

export default function WhyMeSection() {
  const comparisons = [
    { skill: 'React Expert', me: true, other: false },
    { skill: 'Perfect Pixel', me: true, other: false },
    { skill: 'TypeScript Proficiency', me: true, other: false },
    { skill: 'Clean, Maintainable Code', me: true, other: false },
    { skill: 'Performance Optimization', me: true, other: false },
    { skill: 'Responsive Website', me: true, other: false },
    { skill: 'UI Design Proficiency (Figma)', me: true, other: false },
  ]

  return (
    <section id="why-me" className="bg-background py-16 px-4 md:px-8">
      <div className="max-w-md mx-auto lg:max-w-6xl">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center"
        >
          Why Choose Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border"
        >
          {/* Header */}
          <div className="px-4 py-4 bg-card">
            <div className="bg-primary-300 rounded-full px-8 lg:px-40 py-4 flex items-center justify-between">
              <span className="text-base lg:text-xl font-semibold text-white">
                Skill
              </span>
              <div className="flex gap-5 lg:gap-4">
                <span className="w-16 text-base lg:text-xl font-semibold text-white text-center">
                  Me
                </span>
                <span className="w-16 text-base lg:text-xl font-semibold text-white text-center">
                  Other
                </span>
              </div>
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-border">
            {comparisons.map((item, index) => (
              <motion.div
                key={item.skill}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                className="px-8 lg:px-40 py-5 flex items-center justify-between"
              >
                <span className="text-sm font-medium text-foreground leading-snug">
                  {item.skill}
                </span>
                <div className="flex gap-8">
                  <div className="w-16 flex justify-center">
                    <div className="w-8 h-8 rounded-full bg-secondary-300 flex items-center justify-center">
                      <Check className="w-5 h-5 text-white stroke-[3]" />
                    </div>
                  </div>
                  <div className="w-16 flex justify-center">
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                      <X className="w-5 h-5 text-muted-foreground stroke-[3]" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
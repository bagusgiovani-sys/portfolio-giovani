// src/components/sections/ExperienceSection.tsx
'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ExperienceSection() {
  const experiences = [
    {
      id: 1,
      company: 'Trustpilot',
      logo: '/assets/images/trustpilot-logo.svg',
      period: '2021-2024',
      role: 'Frontend Developer',
      description: 'Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.',
    },
    {
      id: 2,
      company: 'Postman',
      logo: '/assets/images/postman-logo.svg',
      period: '2021-2024',
      role: 'Frontend Developer',
      description: 'Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.',
    },
    {
      id: 3,
      company: 'Microsoft',
      logo: '/assets/images/microsoft-logo.svg',
      period: '2019-2021',
      role: 'Frontend Developer',
      description: 'Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.',
    },
  ]

  return (
    <section
      id="experience"
      className="bg-background py-16 px-4 md:px-8 overflow-hidden"
    >
      <div className="max-w-3xl mx-auto w-full">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-foreground mb-12"
        >
          My Work Experience
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[11px] top-0 bottom-0 w-0.5 bg-border" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-12"
              >
                {/* Purple Dot */}
                <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-primary border-4 border-background" />

                {/* Company Logo & Name */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 relative flex-shrink-0">
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-base font-medium text-foreground">
                    {exp.company}
                  </span>
                </div>

                {/* Company Name (large) */}
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {exp.company}
                </h3>

                {/* Period */}
                <p className="text-sm text-muted-foreground mb-3">
                  {exp.period}
                </p>

                {/* Role */}
                <h4 className="text-lg font-bold text-foreground mb-3">
                  {exp.role}
                </h4>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
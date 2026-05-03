'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { skillsData, type Skill } from '@/lib/data'
import { SkillCardSkeleton } from '@/components/ui/Skeleton'
import CardCarousel, { type CardSlotProps } from '@/components/ui/CardCarousel'

function SkillCard({ skill, position, itemIndex, isHovered, onHover, onLeave }: { skill: Skill } & CardSlotProps) {
  const isActive = isHovered || position === 'center'

  return (
    <motion.div
      onHoverStart={onHover}
      onHoverEnd={onLeave}
      animate={{
        scale: isActive ? 1 : 0.82,
        opacity: isActive ? 1 : 0.45,
        y: isActive ? [0, -10, 0] : 0,
        filter: isActive ? 'blur(0px)' : 'blur(1.5px)',
      }}
      transition={
        isActive
          ? {
              y: { duration: 3, repeat: Infinity, ease: 'easeInOut', delay: itemIndex * 0.3 },
              scale: { duration: 0.3, ease: 'easeOut' },
              opacity: { duration: 0.4 },
              filter: { duration: 0.4 },
            }
          : { duration: 0.3, ease: 'easeOut' }
      }
      className="bg-brand-two rounded-2xl p-6 w-full shadow-xl cursor-pointer"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-15 h-15 rounded-full bg-neutral-800/50 flex items-center justify-center">
          <Image src={skill.icon} alt={skill.name} width={38} height={38} className="object-fill" />
        </div>
        <h3 className="text-lg font-bold text-blue-50">{skill.name}</h3>
      </div>
      <p className="text-sm text-brand-three mb-4 leading-relaxed">{skill.description}</p>
      <div className="flex items-center gap-3">
        <div className="flex-1 h-2 bg-brand-one rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: isActive ? `${skill.level}%` : '0%' }}
            transition={{ duration: 1, delay: 0.3 + itemIndex * 0.1, ease: 'easeOut' }}
            className="h-full bg-brand-four rounded-full"
          />
        </div>
        <span className="text-sm font-semibold text-brand-four min-w-[45px] text-right">
          {skill.level}%
        </span>
      </div>
    </motion.div>
  )
}

export default function SkillSection() {
  const allSkills = skillsData.pages.flat()

  return (
    <section id="skills" className="bg-background py-16 px-4 md:px-8">
      <div className="max-w-md mx-auto lg:max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[30px] md:text-5xl font-bold text-center mb-10"
        >
          {skillsData.title}
        </motion.h2>

        <CardCarousel
          items={allSkills}
          skeleton={<SkillCardSkeleton />}
          renderCard={(skill, slotProps) => (
            <SkillCard skill={skill} {...slotProps} />
          )}
        />
      </div>
    </section>
  )
}

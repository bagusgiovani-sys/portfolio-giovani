'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Star, Check } from 'lucide-react'
import { heroData } from '@/lib/data'
import { GlassCard } from '@/components/ui/card'

export default function HeroSection() {
  const [isLg, setIsLg] = useState(false)
  const [imageError, setImageError] = useState(false)

  useEffect(() => {
    const check = () => setIsLg(window.innerWidth >= 1024)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{
        backgroundColor: 'var(--color-brand-one)',
        backgroundImage: isLg
          ? `radial-gradient(ellipse 25% 52% at 50% 80%, var(--color-brand-four) 70%, transparent 0%),
             radial-gradient(ellipse 35% 62% at 50% 80%, var(--color-brand-three) 80%, transparent 0%),
             radial-gradient(ellipse 42% 75% at 50% 80%, var(--color-brand-two) 90%, transparent 0%)`
          : `radial-gradient(ellipse 60% 30% at 50% 75%, var(--color-brand-four) 70%, transparent 0%),
             radial-gradient(ellipse 75% 42% at 50% 75%, var(--color-brand-three) 80%, transparent 0%),
             radial-gradient(ellipse 85% 50% at 50% 76%, var(--color-brand-two) 90%, transparent 0%)`,
      }}
    >
      {/* Name */}
      <div className="pt-18 px-3 pb-2 mt-5 w-full overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="font-black text-white uppercase text-center w-full"
          style={{ fontSize: 'clamp(1rem, 8.5vw, 5.2rem)', letterSpacing: '0.02em' }}
        >
          {heroData.name}
        </motion.h1>
      </div>

      {/* Photo + floating cards */}
      <div className="relative h-[470px] md:h-[610px] md:mt-[-195px] w-full">

        {/* Profile Image */}
        {!imageError && (
          <div className="absolute inset-x-0 bottom-16 md:bottom-[-200] pl-10 z-38 flex justify-center">
            <img
              src="/assets/images/Giovani9.svg"
              alt="Bagus Giovani"
              className="object-bottom object-contain scale-165 md:scale-65"
              onError={() => setImageError(true)}
            />
          </div>
        )}

        {/* Rating card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: 8 }}
          animate={{
            opacity: 1, scale: 1, rotate: 8,
            x: [0, -5, 0, 5, 0],
            y: [0, -8, 0, 8, 0],
          }}
          transition={{
            opacity: { delay: 0.4, duration: 0.4 },
            scale: { delay: 0.4, duration: 0.4, type: 'spring', stiffness: 180 },
            rotate: { delay: 0.4, duration: 0.4 },
            x: { delay: 1, duration: 6, repeat: Infinity, ease: 'easeInOut' },
            y: { delay: 1, duration: 7, repeat: Infinity, ease: 'easeInOut' },
          }}
          style={{ willChange: 'transform' }}
          className="absolute top-7 md:top-60 left-17 md:left-[28%] lg:scale-130"
        >
          <GlassCard className="px-3 py-3">
            <p className="text-[24px] mt-0.5 font-semibold text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.8)]">
              {heroData.rating.score}
            </p>
            <div className="flex gap-1.5 my-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4.5 h-4.5 fill-amber-500 text-amber-500" />
              ))}
            </div>
            <p className="text-[11px] font-thin text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.8)] leading-relaxed">
              {heroData.rating.label}
            </p>
            <p className="text-[11px] font-thin text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.8)] leading-relaxed">
              {heroData.rating.sublabel}
            </p>
          </GlassCard>
        </motion.div>

        {/* 15+ Clients card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: 4 }}
          animate={{
            opacity: 1, scale: 1, rotate: 4,
            x: [0, 8, 0, -8, 0],
            y: [0, -5, 0, 5, 0],
          }}
          transition={{
            opacity: { delay: 0.55, duration: 0.4 },
            scale: { delay: 0.55, duration: 0.4, type: 'spring', stiffness: 180 },
            rotate: { delay: 0.55, duration: 0.4 },
            x: { delay: 1.2, duration: 7, repeat: Infinity, ease: 'easeInOut' },
            y: { delay: 1.2, duration: 6, repeat: Infinity, ease: 'easeInOut' },
          }}
          className="absolute bottom-25 right-[-30px] lg:right-[28%] lg:scale-130"
        >
          <GlassCard className="px-2 py-3 text-left">
            <p className="text-[24px] my-3 mt-[-5px] text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.8)] font-semibold leading-relaxed">
              {heroData.stats.clients}
            </p>
            <p className="text-[11px] text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.8)] mt-0.5">
              {heroData.stats.clientsLabel}
            </p>
            <div className="flex -space-x-3 mt-2">
              {heroData.clientAvatars.map((avatar, i) => (
                <Image
                  key={i}
                  src={avatar.src}
                  alt={`Client ${i + 1}`}
                  width={36}
                  height={36}
                  className="object-cover rounded-full"
                />
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* Badges card */}
        <motion.div
          initial={{ opacity: 0, x: -20, rotate: -10 }}
          animate={{
            opacity: 1, rotate: -10,
            x: [0, -6, 0, 6, 0],
            y: [0, 6, 0, -6, 0],
          }}
          transition={{
            opacity: { delay: 0.7, duration: 0.4 },
            rotate: { delay: 0.7, duration: 0.4 },
            x: { delay: 1.5, duration: 8, repeat: Infinity, ease: 'easeInOut' },
            y: { delay: 1.5, duration: 5, repeat: Infinity, ease: 'easeInOut' },
          }}
          className="absolute bottom-26 lg:bottom-10 left-2 lg:left-[22%] lg:scale-120"
        >
          <GlassCard className="w-48 px-2 py-3">
            {heroData.badges.map((badge) => (
              <span key={badge} className="inline-flex items-center gap-2 mt-2 text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.8)]">
                {badge === 'Frontend Developer' && (
                  <span className="text-[13px] font-bold">{badge}</span>
                )}
                {badge === 'React Expert' && (
                  <>
                    <span className="w-4 h-4 rounded-full bg-white flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[5] text-gray-700" />
                    </span>
                    <span className="text-[13px] font-bold">{badge}</span>
                  </>
                )}
              </span>
            ))}
          </GlassCard>
        </motion.div>
      </div>

      {/* Ticker */}
      <div
        className="relative z-39"
        style={{
          transform: 'rotate(-1.5deg) translateZ(0)',
          transformOrigin: 'center',
          willChange: 'transform',
        }}
      >
        <div className="bg-(--color-brand-four) overflow-hidden py-3 md:py-4 shadow-lg">
          <div className="flex gap-8 animate-ticker-mobile md:animate-ticker-pc whitespace-nowrap">
            {[...heroData.ticker, ...heroData.ticker].map((item, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-3 text-gray-700 text-[20px] lg:text-[30px] font-semibold shrink-0"
              >
                <span className="text-yellow-600 text-3xl lg:text-4xl leading-none">✦</span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
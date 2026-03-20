'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Star, Check } from 'lucide-react'
import { heroData } from '@/lib/data'
import { GlassCard } from '@/components/ui/card'

function ProfileImage() {
  const [hasError, setHasError] = useState(false)

  return (
    <div className="relative w-full h-full flex justify-center">
      <div className="relative w-[1000px] h-full mt-1">
        {!hasError && (
          <Image
            src="/assets/images/Giovani9.svg"
            alt="Bagus Giovani"
            fill
            className="object-bottom object-contain"
            priority
            onError={() => setHasError(true)}
          />
        )}
      </div>
    </div>
  )
}

function Ticker() {
  const items = [...heroData.ticker, ...heroData.ticker]

  return (
    <div
      className="relative z-[39]"
      style={{
        transform: 'rotate(-2deg) translateZ(0)',
        transformOrigin: 'center',
        willChange: 'transform',
      }}
    >
      <div className="bg-black overflow-hidden py-5 lg:py-8 shadow-lg">
        <div className="flex gap-8 animate-ticker whitespace-nowrap">
          {items.map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-3 text-white text-[26px] lg:text-[34px] font-semibold shrink-0"
            >
              <span className="text-yellow-600 text-5xl lg:text-6xl leading-none">✦</span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function HeroSection() {
  const [isLg, setIsLg] = useState(false)

  useEffect(() => {
    const check = () => setIsLg(window.innerWidth >= 1024)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <section
      id="home"
      className="relative overflow-hidden pb-0"
      style={{
        backgroundColor: '#714732', 
        backgroundImage: isLg
          ? `radial-gradient(ellipse 25% 52% at 50% 80%, #fefccf 70%, transparent 0%),
             radial-gradient(ellipse 35% 62% at 50% 80%, #e2ce9b 80%, transparent 0%),
             radial-gradient(ellipse 42% 75% at 50% 80%, #84563d 90%, transparent 0%)`
          : `radial-gradient(ellipse 62% 32% at 50% 75%, #4c00ae 70%, transparent 0%),
             radial-gradient(ellipse 77% 40% at 50% 75%, #330175 80%, transparent 0%),
             radial-gradient(ellipse 88% 46% at 50% 76%, #21014b 90%, transparent 0%)`,
      }}
    >
      {/* Name */}
      <div className="pt-20 pl-3 pr-3 pb-2 w-full overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="font-black text-white uppercase text-center w-full"
          style={{ fontSize: 'clamp(1rem, 9vw, 8rem)', letterSpacing: '0.02em' }}
        >
          {heroData.name}
        </motion.h1>
      </div>

      {/* Photo + floating cards */}
      <div className="relative h-[520px] lg:h-[620px] lg:mt-[-240px] w-full">
        <div className="absolute inset-0 mt-30 z-[38]">
          <ProfileImage />
        </div>

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
          className="absolute top-12 lg:top-60 left-17 lg:left-[28%] lg:scale-130"
        >
          <GlassCard className="px-3 py-3">
            <p className="text-[24px] mt-0.5 font-semibold text-white">
              {heroData.rating.score}
            </p>
            <div className="flex gap-1.5 my-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4.5 h-4.5 fill-amber-500 text-amber-500" />
              ))}
            </div>
            <p className="text-[11px] font-thin text-white leading-relaxed">
              {heroData.rating.label}
            </p>
            <p className="text-[11px] font-thin text-white leading-relaxed">
              {heroData.rating.sublabel}
            </p>
          </GlassCard>
        </motion.div>

        {/* 50+ Clients card */}
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
            <p className="text-[24px] my-3 mt-[-5px] text-white font-semibold leading-relaxed">
              {heroData.stats.clients}
            </p>
            <p className="text-[11px] text-white mt-0.5">{heroData.stats.clientsLabel}</p>
            <div className="flex -space-x-3 mt-2 w-full h-full">
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
              <span key={badge} className="inline-flex items-center gap-2 mt-2 text-white">
                {badge === 'Frontend Developer' && (
                  <span className="text-[13px] font-bold">{badge}</span>
                )}
                {badge === 'React Expert' && (
                  <>
                    <span className="w-4 h-4 rounded-full bg-white flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 text-primary-800 stroke-[5]" />
                    </span>
                    <span className="text-[13px] font-normal">{badge}</span>
                  </>
                )}
              </span>
            ))}
          </GlassCard>
        </motion.div>
      </div>

      <Ticker />
    </section>
  )
}
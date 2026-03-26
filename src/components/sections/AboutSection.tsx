'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Star, Mail } from 'lucide-react'
import { aboutData } from '@/lib/data'

const LENS_SIZE = 150
const ZOOM = 2.5

const PINS = [
  { name: 'Singapore', src: '/assets/images/singapore.png', pos: 'top-[48%] right-[22%]', delay: 0 },
  { name: 'India',     src: '/assets/images/india.png',     pos: 'top-[45%] right-[41%]', delay: 0.7 },
  { name: 'Taiwan',    src: '/assets/images/taiwan.png',    pos: 'top-[38%] right-[13%]', delay: 1.4 },
  { name: 'Vietnam',   src: '/assets/images/vietnam.png',   pos: 'bottom-[68%] right-[16%]', delay: 1.4 },
  { name: 'United Arab Emirates',    src: '/assets/images/UAE.svg',    pos: 'top-[40%] right-[50%]', delay: 1.4 },
  { name: 'Brazil',   src: '/assets/images/Brazil.svg',   pos: 'bottom-[45%] left-[19%]', delay: 1.4 },
]

function MapPin({ name, src, pos, pulse }: { name: string; src: string; pos: string; pulse?: boolean }) {
  return (
    <div className={`absolute ${pos}`}>
      {pulse && (
        <motion.div
          className="absolute inset-0 w-16 h-16 -translate-x-1/2 -translate-y-1/2"
          animate={{ scale: [1, 2, 2], opacity: [0.6, 0.3, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
        >
          <div className="w-full h-full rounded-full bg-gray-700/50" />
        </motion.div>
      )}
      <div className="relative w-3 h-3 bg-gray-800 rounded-full shadow-lg" />
      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-32">
        <Image src={src} alt={name} width={40} height={20} className="drop-shadow-lg w-2/5 h-auto" />
      </div>
    </div>
  )
}

// Extracted card scene — rendered both normally and inside the lens clone
function MapCardScene({ stats, pulse }: { stats: typeof aboutData.stats; pulse: boolean }) {
  return (
    <>
      {/* Map */}
      <div className="absolute inset-[-80] pointer-events-none">
        <Image src="/assets/images/worldmap1.jpg" alt="World Map" fill className="object-contain" />
      </div>

      {/* Pins */}
      {PINS.map((pin) => <MapPin key={pin.name} {...pin} pulse={pulse} />)}

      {/* Title + Stats */}
      <div className="relative z-10 p-6 md:p-8">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
          Building Digital Products
        </h3>
        <div className="space-y-6 mt-18 md:mt-65">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl md:text-6xl font-bold text-gray-800 mb-1">{stat.value}</p>
              <p className="text-gray-800/80 mb-5 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default function AboutSection() {
  const { techIcons, whyChooseMeBadges, projectPreviews, stats, bio } = aboutData
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const mapRef = useRef<HTMLDivElement>(null)

  const row1Items = [...whyChooseMeBadges.row1, ...whyChooseMeBadges.row1]
  const row2Items = [...whyChooseMeBadges.row2, ...whyChooseMeBadges.row2]
  const row3Items = [...whyChooseMeBadges.row3, ...whyChooseMeBadges.row3]

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = mapRef.current?.getBoundingClientRect()
    if (!rect) return
    setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const W = mapRef.current?.offsetWidth ?? 600
  const H = mapRef.current?.offsetHeight ?? 550

  return (
    <section id="about" className="bg-background py-16 md:py-20 lg:py-24 px-4 md:px-8">

      {/* Bio */}
      <div className="max-w-xl lg:max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-base lg:text-xl font-medium text-foreground mb-3">{bio.greeting}</p>
          <p className="leading-snug mb-3">
            <span className="text-[1.3rem] lg:text-3xl font-bold text-foreground">{bio.highlight}</span>{' '}
            <span className="text-sm lg:text-3xl text-muted-foreground leading-relaxed">{bio.body}</span>
          </p>
        </motion.div>
      </div>

      <div className="max-w-md mx-auto md:max-w-2xl lg:max-w-6xl">

        {/* Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">

          {/* Why Choose Me */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-xl p-9 h-[370px] md:h-[450px] lg:h-[400px] md:p-10 bg-brand-four"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Me</h3>
            <p className="text-gray-900 text-base md:text-lg mb-8 leading-relaxed">
              Delivering excellence with innovative solutions and seamless execution.
            </p>
            {[row1Items, row2Items, row3Items].map((items, rowIndex) => (
              <div key={rowIndex} className="relative overflow-hidden mb-3 last:mb-0">
                <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-brand-four to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-brand-four to-transparent z-10 pointer-events-none" />
                <div className={`flex gap-3 whitespace-nowrap ${rowIndex % 2 === 0 ? 'animate-ticker-pc' : 'animate-ticker-reverse'}`}>
                  {items.map((badge, i) => (
                    <span key={i} className="inline-flex items-center bg-brand-three font-semibold px-5 py-2.5 rounded-full text-sm text-neutral-900">{badge}</span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-brand-two rounded-xl px-6 py-10 h-[400px] md:h-[450px] lg:h-[400px] md:p-8"
          >
            <h3 className="text-[30px] md:text-3xl font-bold text-white mb-2">Tech Stack Mastery</h3>
            <div className="flex gap-1.5 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />)}
            </div>
            <p className="text-white/80 text-[14px] mb-6">Mastering modern technologies to deliver impactful and efficient solutions</p>
            <div className="grid grid-cols-4 gap-2">
              {techIcons.map((tech, index) => {
                const isBigger = ['HTML5', 'TypeScript'].includes(tech.name)
                const isMongo = tech.name === 'MongoDB'
                const isCSS = tech.name === 'CSS3'
                const isRedux = tech.name === 'Redux'
                const iconSize = isCSS ? 35 : isMongo ? 46 : isBigger ? 58 : isRedux ? 97 : 42
                return (
                  <div key={tech.name} className="flex flex-col items-center justify-center bg-neutral-100/30 backdrop-blur-sm rounded-full p-3 w-16 h-16" title={tech.name}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }} whileHover={{ scale: 1.15, y: -5 }}
                      transition={{ duration: 0.3, delay: 0.1 + index * 0.05, type: 'spring', stiffness: 200 }}
                      style={{ width: `${iconSize}px`, height: `${iconSize}px` }}
                    >
                      <Image src={tech.icon} alt={tech.name} width={iconSize} height={iconSize} className="w-full h-full object-contain" />
                    </motion.div>
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }}
            className="relative rounded-xl overflow-hidden h-[400px] md:h-[450px] lg:h-[400px]"
          >
            <div className="absolute inset-0">
              <Image src="/assets/images/CardBackground/officebg.svg" alt="Office background" fill className="object-contain"
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }} />
            </div>
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 h-full flex flex-col items-center justify-center my-10 p-6">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-25 text-center">2+ Years<br />Experience</h3>
              <div className="flex gap-4 justify-center">
                {projectPreviews.map((project, index) => (
                  <motion.div key={project.id}
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.2, delay: 0.1 + index * 0.1 }}
                    className="relative w-25 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden shadow-lg"
                  >
                    <Image src={project.image} alt={`Project ${project.id}`} fill className="object-cover"
                      onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }} />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.6 }}
            className="relative rounded-3xl overflow-hidden h-[400px] md:h-[550px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-four to-brand-three" />
            <div className="absolute inset-0">
              <Image src="/assets/images/Giovani9.svg" alt="Bagus Giovani" fill className="object-cover object-center z-40"
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }} />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-[65px] md:text-7xl lg:text-8xl font-black text-gray-900 text-center">BAGUS GIOVANI</h3>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50"
            >
              <button className="bg-white hover:bg-brand-three text-black font-semibold px-8 py-3 rounded-full shadow-2xl flex items-center gap-2 transition-all hover:scale-105">
                <Mail className="w-5 h-5" />
                Hire Me
              </button>
            </motion.div>
          </motion.div>

          {/* World Map with magnifying glass */}
          <motion.div
            ref={mapRef}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.7 }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="relative bg-gradient-to-br from-brand-three to-brand-four rounded-3xl overflow-hidden h-[500px] md:h-[550px]"
            style={{ cursor: 'none' }}
          >
            {/* Base scene — visible normally */}
            <MapCardScene stats={stats} pulse />

            {/* Magnifying glass lens */}
            {isHovering && (
              <div
                className="absolute pointer-events-none z-30"
                style={{
                  width: LENS_SIZE,
                  height: LENS_SIZE,
                  left: mouse.x - LENS_SIZE / 2,
                  top: mouse.y - LENS_SIZE / 2,
                  borderRadius: '50%',
                  overflow: 'hidden',
                  boxShadow: '0 0 0 3px rgba(255,255,255,0.7), 0 0 0 7px rgba(0,0,0,0.2), 0 8px 32px rgba(0,0,0,0.5)',
                  border: '2px solid rgba(255,255,255,0.9)',
                }}
              >
                {/* Full scene clone scaled from mouse point */}
                <div style={{
                  position: 'absolute',
                  width: W,
                  height: H,
                  transform: `scale(${ZOOM})`,
                  transformOrigin: `${mouse.x}px ${mouse.y}px`,
                  left: -(mouse.x - LENS_SIZE / 2),
                  top: -(mouse.y - LENS_SIZE / 2),
                  background: 'linear-gradient(135deg, var(--color-brand-three), var(--color-brand-four))',
                }}>
                  {/* Clone entire scene — map + pins + text */}
                  <MapCardScene stats={stats} pulse={false} />
                </div>

                {/* Lens glare */}
                <div style={{
                  position: 'absolute', top: '8%', left: '15%', width: '35%', height: '30%',
                  borderRadius: '50%', transform: 'rotate(-30deg)',
                  background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 100%)',
                }} />
              </div>
            )}

            {/* Magnifier handle */}
            {isHovering && (
              <div className="absolute pointer-events-none z-40" style={{
                left: mouse.x + LENS_SIZE / 2 - 12,
                top: mouse.y + LENS_SIZE / 2 - 12,
                width: 32, height: 10,
                background: 'rgba(180,180,180,0.9)',
                borderRadius: 5,
                transform: 'rotate(45deg)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
              }} />
            )}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
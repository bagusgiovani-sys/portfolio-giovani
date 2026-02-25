'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star } from 'lucide-react'
import Image from 'next/image'

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      company: 'Trustpilot',
      logo: '/assets/icons/CompanyLogo/trustpilot_logo.svg',
      text: "Thanks to their expertise, our website is now faster, more responsive, and visually stunning. We've seen a significant increase in user engagement!",
      author: 'Robert Lewandowski',
      role: 'Head of Engineering, Upwork',
      rating: 5,
    },
    {
      id: 2,
      company: 'Postman',
      logo: '/assets/icons/CompanyLogo/postman_logo.svg',
      text: "Exceptional work! The team delivered beyond our expectations. Our users love the new interface and performance improvements.",
      author: 'Sarah Johnson',
      role: 'Product Manager, Postman',
      rating: 5,
    },
    {
      id: 3,
      company: 'Spotify',
      logo: '/assets/icons/CompanyLogo/spotify_logo.svg',
      text: "Outstanding collaboration and technical expertise. They transformed our vision into a beautiful, functional reality.",
      author: 'Michael Chen',
      role: 'Engineering Lead, Microsoft',
      rating: 5,
    },
  ]

  const handleSwipe = (event: React.TouchEvent | React.MouseEvent) => {
    const touch = 'touches' in event ? event.touches[0] : event as React.MouseEvent
    const startX = touch.clientX

    const handleMove = (e: TouchEvent | MouseEvent) => {
      const currentTouch = 'touches' in e ? e.touches[0] : e as MouseEvent
      const diff = startX - currentTouch.clientX

      if (Math.abs(diff) > 50) {
        if (diff > 0 && activeIndex < testimonials.length - 1) {
          setActiveIndex(activeIndex + 1)
        } else if (diff < 0 && activeIndex > 0) {
          setActiveIndex(activeIndex - 1)
        }
        cleanup()
      }
    }

    const cleanup = () => {
      document.removeEventListener('touchmove', handleMove as any)
      document.removeEventListener('touchend', cleanup)
      document.removeEventListener('mousemove', handleMove as any)
      document.removeEventListener('mouseup', cleanup)
    }

    document.addEventListener('touchmove', handleMove as any)
    document.addEventListener('touchend', cleanup)
    document.addEventListener('mousemove', handleMove as any)
    document.addEventListener('mouseup', cleanup)
  }

  return (
    <section
      id="testimonials"
      className="bg-background py-16 px-4 md:px-8 overflow-hidden"
    >
      <div className="max-w-2xl mx-auto w-full">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center"
        >
          Success Stories from Clients
        </motion.h2>

        {/* Testimonial Card - Swipeable */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-card rounded-3xl p-6 md:p-12 shadow-sm border border-border mb-8 touch-pan-y cursor-grab active:cursor-grabbing"
          onTouchStart={handleSwipe}
          onMouseDown={handleSwipe}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              {/* Company Logo */}
              <div className="flex items-center justify-center mb-6">
                <div className="relative w-32 h-10">
                  <Image
                    src={testimonials[activeIndex].logo}
                    alt={`${testimonials[activeIndex].company} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-base text-foreground leading-relaxed mb-8 max-w-xl mx-auto">
                {testimonials[activeIndex].text}
              </p>

              {/* Stars */}
              <div className="flex gap-1 justify-center mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-7 h-7 fill-amber-500 text-amber-500"
                  />
                ))}
              </div>

              {/* Author */}
              <h4 className="text-lg font-bold text-foreground mb-1">
                {testimonials[activeIndex].author}
              </h4>
              <p className="text-sm text-muted-foreground">
                {testimonials[activeIndex].role}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? 'w-8 bg-primary-300'
                  : 'w-2 bg-muted-foreground/30'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
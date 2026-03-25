"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import { testimonialsData } from "@/lib/data";
import { useSwipe } from "@/hooks/useSwipe";

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { title, subtitle, items } = testimonialsData;

  const { handleSwipeStart } = useSwipe({
    onSwipeLeft: () => setActiveIndex((i) => Math.min(i + 1, items.length - 1)),
    onSwipeRight: () => setActiveIndex((i) => Math.max(i - 1, 0)),
  });

  const active = items[activeIndex];

  return (
    <section
      id="testimonials"
      className="bg-background py-16 px-4 md:px-8 overflow-hidden"
    >
      <div className="max-w-2xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center"
        >
          {title}
        </motion.h2>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm md:text-base text-muted-foreground text-center mb-10 max-w-xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-card rounded-3xl p-6 md:p-12 shadow-sm border border-border mb-8 touch-pan-y cursor-grab active:cursor-grabbing"
          onTouchStart={handleSwipeStart}
          onMouseDown={handleSwipeStart}
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
              <div className="flex items-center justify-center mb-6">
                <span className="text-xs md:text-sm font-medium text-muted-foreground bg-muted px-4 py-1.5 rounded-full">
                  {active.company}
                </span>
              </div>

              <p className="text-base text-foreground leading-relaxed mb-8 max-w-xl mx-auto">
                {active.text}
              </p>

              <div className="flex gap-1 justify-center mb-6">
                {[...Array(active.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-7 h-7 fill-amber-500 text-amber-500"
                  />
                ))}
              </div>

              <h4 className="text-lg font-bold text-foreground mb-1">
                {active.author}
              </h4>
              <p className="text-sm text-muted-foreground">{active.role}</p>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <div className="flex items-center justify-center gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${index === activeIndex
                  ? "w-8 bg-primary-300"
                  : "w-2 bg-muted-foreground/30"
                }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

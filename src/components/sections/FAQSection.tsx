// src/components/sections/FAQSection.tsx
'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, MessageCircle } from 'lucide-react'
import Image from 'next/image'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      id: 1,
      question: "What's your approach to front-end development?",
      answer: "I focus on clean, maintainable code and prioritize user experience. My approach involves close collaboration with designers to ensure pixel-perfect implementations and create smooth, interactive across all devices.",
    },
    {
      id: 2,
      question: "What's your approach to front-end development?",
      answer: "I focus on clean, maintainable code and prioritize user experience. My approach involves close collaboration with designers to ensure pixel-perfect implementations and create smooth, interactive across all devices.",
    },
    {
      id: 3,
      question: "What's your approach to front-end development?",
      answer: "I focus on clean, maintainable code and prioritize user experience. My approach involves close collaboration with designers to ensure pixel-perfect implementations and create smooth, interactive across all devices.",
    },
    {
      id: 4,
      question: "What's your approach to front-end development?",
      answer: "I focus on clean, maintainable code and prioritize user experience. My approach involves close collaboration with designers to ensure pixel-perfect implementations and create smooth, interactive across all devices.",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      id="faq"
      className="bg-background py-16 px-4 md:px-8 overflow-hidden"
    >
      <div className="max-w-md mx-auto w-full">

        {/* Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card rounded-3xl p-6 shadow-sm border border-border"
        >
          {/* Icon */}
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
            <MessageCircle className="w-5 h-5 text-primary" />
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Have Questions?
          </h2>

          {/* FAQ Accordion */}
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={faq.id}
                className="border-b border-border last:border-0 pb-3 last:pb-0"
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-start justify-between gap-4 text-left group"
                >
                  <span className={`text-sm font-semibold transition-colors ${
                    openIndex === index ? 'text-primary' : 'text-foreground'
                  }`}>
                    {faq.question}
                  </span>
                  <Plus
                    className={`w-5 h-5 flex-shrink-0 transition-all duration-300 ${
                      openIndex === index
                        ? 'rotate-45 text-primary'
                        : 'text-muted-foreground'
                    }`}
                  />
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Avatar and CTA */}
          <div className="mt-8 pt-6 border-t border-border">
            {/* Avatar */}
            <div className="w-12 h-12 rounded-full bg-muted mb-4 overflow-hidden">
              <Image
                src="/assets/images/avatar.jpg"
                alt="Avatar"
                width={48}
                height={48}
                className="object-cover"
              />
            </div>

            {/* Text */}
            <p className="text-sm text-muted-foreground mb-4">
              Have more questions? Send me a message
            </p>

            {/* CTA Button */}
            <button className="w-full bg-primary text-white font-semibold py-3 px-6 rounded-full hover:bg-primary/90 transition-colors duration-300">
              Get in touch
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
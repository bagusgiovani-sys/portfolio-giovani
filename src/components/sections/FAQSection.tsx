'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, MessageSquare } from 'lucide-react'
import Image from 'next/image'
import { faqData } from '@/lib/data'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const { title, items, cta } = faqData

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="bg-background py-16 px-4 md:px-8 overflow-hidden">
      <div className="max-w-md mx-auto w-full lg:max-w-5xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card rounded-3xl p-6 shadow-sm border border-border"
        >
          <div className="flex flex-col lg:flex-row lg:gap-8">

            {/* Left */}
            <div className="lg:w-64 lg:shrink-0 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <MessageSquare className="w-5 h-5 text-brand-one" />
                </div>
                <h2 className="text-2xl font-bold text-brand-one mb-6">{title}</h2>
              </div>

              <div className="mt-6 lg:mt-0 bg-white rounded-2xl p-4 border-2 border-border">
                <div className="w-12 h-12 rounded-full bg-brand-three mb-4 overflow-hidden">
                  <Image
                    src="/assets/images/Giovani9.svg"
                    alt="Avatar"
                    width={88}
                    height={88}
                    className="object-contain scale-145 md:scale-190 mt-3 pr-6 md:pr-0 pl-0 md:pl-0.5"
                  />
                </div>
                <p className="text-sm text-black mb-4">
                  Have more questions? Send me a message
                </p>
                <button className="w-full bg-brand-two text-white font-thin py-3 px-6 rounded-full hover:bg-primary/90 transition-colors duration-300">
                  {cta}
                </button>
              </div>
            </div>

            {/* Right — Accordion */}
            <div className="flex-1 mt-6 lg:mt-0">
              <div className="space-y-3">
                {items.map((faq, index) => (
                  <div
                    key={faq.id}
                    className="border-b border-border last:border-0 pb-3 last:pb-0"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full flex items-start justify-between gap-4 text-left"
                    >
                      <span className={`text-sm font-semibold transition-colors ${
                        openIndex === index ? 'text-brand-one' : 'text-foreground'
                      }`}>
                        {faq.question}
                      </span>
                      {openIndex === index
                        ? <Minus className="w-5 h-5 flex-shrink-0 text-brand-one" />
                        : <Plus className="w-5 h-5 flex-shrink-0 text-muted-foreground" />
                      }
                    </button>

                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="text-sm text-gray-700 leading-relaxed mt-3">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  )
}
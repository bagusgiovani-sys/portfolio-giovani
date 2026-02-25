'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Smartphone, Mail, MapPin, Send, X, Check } from 'lucide-react'
import Image from 'next/image'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [modalState, setModalState] = useState<'success' | 'error' | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          Math.random() > 0.5 ? resolve(true) : reject(new Error('Failed'))
        }, 1000)
      })
      
      setModalState('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setModalState('error')
    }
  }

  const closeModal = () => {
    setModalState(null)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section
      id="contact"
      className="bg-background py-16 px-4 md:px-8 overflow-hidden"
    >
      <div className="max-w-md mx-auto w-full">

        {/* Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card rounded-3xl p-8 shadow-sm border border-border"
        >
          {/* Title */}
          <h2 className="text-3xl font-bold text-foreground mb-2">
            I've been waiting for you.
          </h2>
          <p className="text-sm text-muted-foreground mb-8">
            Fill in the form or Send us an email
          </p>

          {/* Contact Info */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Smartphone className="w-5 h-5 text-primary-300" />
              </div>
              <span className="text-sm text-foreground">+62 1234567890</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary-300" />
              </div>
              <span className="text-sm text-foreground">edwinanderson@email.com</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary-300" />
              </div>
              <span className="text-sm text-foreground">Jakarta, Indonesia</span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Send a Message
            </h3>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="Your name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="your.email@example.com"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary-300 text-white font-semibold py-3.5 px-6 rounded-full hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Submit
            </button>
          </form>
        </motion.div>

        {/* Floor Image */}
        <div className="mt-1">
          <Image
            src="/assets/images/CTA_Floor.svg"
            alt="Floor"
            width={1200}
            height={400}
            className="w-full mb-[-60px] h-auto rounded-2xl"
          />
        </div>
        
      </div>

      {/* Success/Error Modals */}
      <AnimatePresence>
        {modalState && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              {/* Modal */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 20 }}
                transition={{ type: 'spring', duration: 0.5 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-card rounded-3xl p-8 shadow-2xl border border-border max-w-sm w-full relative"
              >
                {modalState === 'success' ? (
                  <div className="text-center">
                    {/* Success Image */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', delay: 0.2, duration: 0.6, bounce: 0.5 }}
                      className="relative w-32 h-32 mx-auto mb-6"
                    >
                      <Image
                        src="/assets/MessageSuccess.svg"
                        alt="Success"
                        fill
                        className="object-contain"
                      />
                    </motion.div>

                    <motion.h3
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.7 }}
                      className="text-xl font-bold text-foreground mb-3"
                    >
                      Message Sent Successfully!
                    </motion.h3>
                    <motion.p
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.8 }}
                      className="text-sm text-muted-foreground mb-6"
                    >
                      Thank you for reaching out. I'll get back to you as soon as possible.
                    </motion.p>
                    <motion.button
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.9 }}
                      onClick={closeModal}
                      className="w-full bg-primary text-white font-semibold py-3 px-6 rounded-full hover:bg-primary/90 transition-colors duration-300"
                    >
                      Back to Home
                    </motion.button>
                  </div>
                ) : (
                  <div className="text-center">
                    {/* Error Image */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', delay: 0.2, duration: 0.6, bounce: 0.5 }}
                      className="relative w-32 h-32 mx-auto mb-6"
                    >
                      <Image
                        src="/assets/MessageFail.svg"
                        alt="Error"
                        fill
                        className="object-contain"
                      />
                    </motion.div>

                    <motion.h3
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.7 }}
                      className="text-xl font-bold text-foreground mb-3"
                    >
                      Failed to send.
                    </motion.h3>
                    <motion.p
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.8 }}
                      className="text-sm text-muted-foreground mb-6"
                    >
                      Please check your internet connection or try refreshing the page.
                    </motion.p>
                    <motion.button
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.9 }}
                      onClick={closeModal}
                      className="w-full bg-primary text-white font-semibold py-3 px-6 rounded-full hover:bg-primary/90 transition-colors duration-300"
                    >
                      Try Again
                    </motion.button>
                  </div>
                )}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}
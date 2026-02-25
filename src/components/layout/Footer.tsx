'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Globe, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { 
      name: 'Website', 
      icon: Globe, 
      href: 'https://yourwebsite.com',
    },
    { 
      name: 'Instagram', 
      icon: Instagram, 
      href: 'https://instagram.com/yourusername',
    },
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      href: 'https://linkedin.com/in/yourusername',
    },
  ]

  return (
    <footer className="bg-primary-400 py-8 md:py-6 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Mobile Layout - Stacked */}
        <div className="flex flex-col items-start gap-6 md:hidden">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <Image
              src="/assets/icons/your_logo.svg"
              alt="Your Logo"
              width={32}
              height={32}
              className="object-contain"
            />
            <span className="text-white font-semibold text-lg">Your Logo</span>
          </motion.div>

          <div className="text-left text-white/70 text-sm">
            © {currentYear} Edwin Anderson. All rights reserved.
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-primary-300 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-colors"
                  aria-label={social.name}
                >
                  <Icon className="w-5 h-5 text-white" />
                </motion.a>
              )
            })}
          </motion.div>
        </div>

        {/* Desktop Layout - Horizontal */}
        <div className="hidden md:flex items-center justify-between">
          {/* Left - Logo + Copyright */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4"
          >
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Image
                src="/assets/icons/your_logo.svg"
                alt="Your Logo"
                width={32}
                height={32}
                className="object-contain"
              />
              <span className="text-white font-semibold text-lg">Your Logo</span>
            </div>

            {/* Copyright */}
            <span className="text-white/70 text-sm ml-4">
              © {currentYear} Edwin Anderson. All rights reserved.
            </span>
          </motion.div>

          {/* Right - Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-colors"
                  aria-label={social.name}
                >
                  <Icon className="w-5 h-5 text-white" />
                </motion.a>
              )
            })}
          </motion.div>
        </div>

      </div>
    </footer>
  )
}
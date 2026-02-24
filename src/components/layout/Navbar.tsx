'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Mail } from 'lucide-react'
import { navLinks } from '@/lib/data'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Add background when scrolled past hero
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  // Background color class - used for both navbar and drawer
  const bgClass = scrolled 
    ? 'bg-primary-400' // Dark purple when scrolled (#180131)
    : 'bg-transparent'

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-99 transition-all duration-300 ${bgClass}`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick('#home')
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 cursor-pointer"
            >
              <Image
                src="/assets/icons/your_logo.svg"
                alt="Your Logo"
                width={32}
                height={32}
                className="object-contain"
              />
              <span className="text-white font-semibold text-lg">Your Logo</span>
            </motion.a>

            {/* Desktop Nav Links + Hire Me Button */}
            <div className="hidden lg:flex items-center gap-8 flex-1 justify-end">
              <motion.nav
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center gap-8 absolute left-1/2 -translate-x-1/2"
              >
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    className="text-white/90 hover:text-white text-sm font-medium transition-colors relative group cursor-pointer"
                  >
                    {link.label}
                    {/* Underline hover effect */}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white rounded-full transition-all duration-300 group-hover:w-full" />
                  </motion.button>
                ))}
              </motion.nav>

              {/* Hire Me Button - Desktop */}
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                onClick={() => handleNavClick('#contact')}
                className="bg-white text-primary-400 hover:bg-white/90 font-semibold px-6 py-2.5 rounded-full flex items-center gap-2 transition-all hover:scale-105 shadow-lg relative z-10"
              >
                <Mail className="w-4 h-4" />
                Hire Me
              </motion.button>
            </div>

            {/* Hamburger - Mobile & Tablet */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              onClick={() => setIsOpen((prev) => !prev)}
              className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </header>

      {/* Mobile/Tablet Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
            />

            {/* Drawer - Same color as scrolled navbar */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-primary-400 shadow-2xl lg:hidden flex flex-col"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 h-16 border-b border-white/10">
                <span className="text-white font-semibold text-lg">Menu</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/70 hover:text-white p-1 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer links */}
              <nav className="flex flex-col gap-1 p-4 flex-1">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="text-white/90 hover:text-white hover:bg-white/10 text-left px-4 py-3 rounded-xl text-sm font-medium transition-all cursor-pointer"
                  >
                    {link.label}
                  </motion.button>
                ))}
              </nav>

              {/* Hire Me Button - Mobile/Tablet */}
              <div className="p-4 border-t border-white/10">
                <button
                  onClick={() => handleNavClick('#contact')}
                  className="w-full bg-white text-primary-400 hover:bg-white/90 font-semibold px-6 py-3 rounded-full flex items-center justify-center gap-2 transition-all"
                >
                  <Mail className="w-4 h-4" />
                  Hire Me
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
'use client'

import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import SplashScreen from '@/components/layout/SplashScreen'

export default function SplashGate({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(true)

  return (
    <>
      <AnimatePresence mode="wait">
        {showSplash && (
          <SplashScreen key="splash" onDone={() => setShowSplash(false)} />
        )}
      </AnimatePresence>
      {!showSplash && children}
    </>
  )
}

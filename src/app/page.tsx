// src/app/page.tsx

'use client'

import { useState } from 'react' 
import { AnimatePresence } from 'framer-motion'
import SplashScreen from '@/components/layout/SplashScreen'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import SkillSection from '@/components/sections/SkillSection'
import WhyMeSection from '@/components/sections/WhyMeSection'
import ProjectSection from '@/components/sections/ProjectSection'
import ExperienceSection from '@/components/sections/ExperienceSection'
import TestimonialsSection from '@/components/sections/TestimonialSection'
import FAQSection from '@/components/sections/FAQSection'
import ContactSection from '@/components/sections/ContactSection'


export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      <AnimatePresence mode='wait'>
        {showSplash && (
          <SplashScreen key="Splash" onDone={() => setShowSplash(false)} />
        )}
      </AnimatePresence>

      {!showSplash && (
        <>
          <HeroSection />
          <AboutSection />
          <SkillSection />
          <WhyMeSection />
          <ProjectSection />
          <ExperienceSection />
          <TestimonialsSection />
          <FAQSection />
          <ContactSection />
        </>
      )}
    </> 
  )
}
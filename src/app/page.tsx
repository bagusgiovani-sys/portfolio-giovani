import SplashGate from '@/components/layout/SplashGate'
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
  return (
    <SplashGate>
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <WhyMeSection />
      <ProjectSection />
      <ExperienceSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </SplashGate>
  )
}

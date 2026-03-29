// ============================================================
// lib/data.ts
// Single source of truth for all portfolio content.
// To update your portfolio, just edit the values here.
// ============================================================

// ─── Hero ────────────────────────────────────────────────────

export const heroData = {
  name: 'Bagus Giovani',
  rating: {
    score: '4.7',
    label: 'Many Client Trust',
    sublabel: 'with me',
  },
  stats: {
    clients: '15+',
    clientsLabel: 'Global Clients',
  },
  badges: ['Frontend Developer', 'React Expert'],
  bio: {
    greeting: "Hi, I'm Bagus Giovani 👋",
    highlight:
      'Building digital products with a focus on crafting visually engaging and seamless user interfaces using React.js.',
    body: 'Prioritizing responsive design, performance optimization, and user-centric features to deliver exceptional web experiences.',
  },
  ticker: [
    'TypeScript Pro',
    ' React Expert',
    'Product Designer',
    'UI/UX Focused',
  ],
  clientAvatars: [
    { src: '/assets/images/ClientPics/Male Avatar 01.svg' },
    { src: '/assets/images/ClientPics/Female Avatar 06.svg' },
    { src: '/assets/images/ClientPics/Male Avatar 10.svg' },
    { src: '/assets/images/ClientPics/Female Avatar 07.svg' },
  ],
}

// ─── About ───────────────────────────────────────────────────

export interface StatItem {
  value: string
  label: string
  flag: string
}

export const aboutData = {
  bio: {
    greeting: "Hi, I'm Bagus Giovani 👋",
    highlight:
      'Building digital products with a focus on crafting visually engaging and seamless user interfaces using React.js.',
    body: 'Prioritizing responsive design, performance optimization, and user-centric features to deliver exceptional web experiences.',
  },
  techIcons: [
    { name: 'TypeScript', icon: '/assets/icons/ts_logo.svg' },
    { name: 'TailwindCSS', icon: '/assets/icons/Tailwind_CSS_logo.svg' },
    { name: 'React', icon: '/assets/icons/React_logo.svg' },
    { name: 'Next.js', icon: '/assets/icons/nextjs_logo.svg' },
    { name: 'FramerMotion', icon: '/assets/icons/framer-motion_logo.svg' },
    { name: 'HTML5', icon: '/assets/icons/html_logo.svg' },
    { name: 'TanStack Query', icon: '/assets/icons/TanStack Query.svg' },
    { name: 'Radix UI', icon: '/assets/icons/Radix.svg' },
    { name: 'Redux', icon: '/assets/icons/Redux.svg' },
  ],
  whyChooseMeBadges: {
    row1: ['Frontend Expert', 'Pixel-Perfect Design', 'Responsive Design'],
    row2: ['React Expert', '2 Years Experience', 'React Ecosystem'],
    row3: ['Clean Code', 'Performance Optimization', 'UI/UX Design'],
  },
  projectPreviews: [
    { id: 1, image: '/assets/movieapp.gif' },
    { id: 2, image: '/assets/sociality.gif' },
    { id: 3, image: '/assets/PaleoLink.gif' },
  ],
  stats: [
    { value: '5+', label: "Cross Countries Projects", flag: '🇩🇪' },
    { value: '30+', label: 'Project Delivered', flag: '🇮🇩' },
  ] satisfies StatItem[],
  hireCta: 'Hire Me',
}

// ─── Why Choose Me ───────────────────────────────────────────

export const whyMeData = {
  title: 'Why Choose Me',
  subtitle: 'Delivering excellence with innovative solutions and seamless execution.',
  comparison: [
    { skill: 'React Expert', me: true, others: false },
    { skill: 'Perfect Pixel', me: true, others: false },
    { skill: 'TypeScript Proficiency', me: true, others: false },
    { skill: 'Clean, Maintainable Code', me: true, others: false },
    { skill: 'Performance Optimization', me: true, others: false },
    { skill: 'Responsive Website', me: true, others: false },
    { skill: 'UI Design Proficiency (Figma)', me: true, others: false },
  ],
}

// ─── Skills ──────────────────────────────────────────────────

export interface Skill {
  name: string
  icon: string
  description: string
  level: number
}

export const skillsData = {
  title: 'My Professional Skill',
  pages: [
    [
      {
        name: 'React',
        icon: '/assets/icons/React_logo.svg',
        description: 'Building modern web applications with component-based architecture.',
        level: 90,
      },
      {
        name: 'TailwindCSS',
        icon: '/assets/icons/Tailwind_CSS_logo.svg',
        description: 'Styling modern web interfaces with utility-first responsive CSS.',
        level: 90,
      },
      {
        name: 'TypeScript',
        icon: '/assets/icons/ts_logo.svg',
        description: 'Writing type-safe JavaScript code for better maintainability.',
        level: 75,
      },
    ],
    [
      {
        name: 'HTML5',
        icon: '/assets/icons/html_logo.svg',
        description: 'Building the structure of web pages with semantic markup for accessibility.',
        level: 95,
      },
      {
        name: 'Next.js',
        icon: '/assets/icons/nextjs_logo.svg',
        description: 'Building full-stack React apps with SSR, SSG, and file-based routing.',
        level: 85,
      },
      {
        name: 'Framer Motion',
        icon: '/assets/icons/framer-motion_logo.svg',
        description: 'Creating smooth, production-ready animations and transitions in React.',
        level: 80,
      },
    ],
    [
      {
        name: 'TanStack Query',
        icon: '/assets/icons/TanStack Query.svg',
        description: 'Powerful async state management for fetching, caching, and syncing server data.',
        level: 75,
      },
      {
        name: 'Radix UI',
        icon: '/assets/icons/Radix.svg',
        description: 'Building accessible, unstyled UI primitives with full keyboard and ARIA support.',
        level: 75,
      },
      {
        name: 'Redux',
        icon: '/assets/icons/Redux.svg',
        description: 'Managing predictable global state in large-scale React applications.',
        level: 70,
      },
    ],
  ] satisfies Skill[][],
}

// ─── Projects ────────────────────────────────────────────────

export interface Project {
  id: number
  title: string
  category: string
  year: string
  image: string
  link: string
}

export const projectsData = {
  title: 'My Latest Work',
  items: [
    {
      id: 1,
      title: 'Movie App API',
      category: 'Web APP',
      year: '2026',
      image: '/assets/movieapp.gif',
      link: 'https://movie-app-by-giovani.vercel.app/',
    },
    {
      id: 2,
      title: 'Sociality',
      category: 'Social Media Web APP',
      year: '2026',
      image: '/assets/sociality.gif',
      link: 'https://sociality-app-by-gio.vercel.app/',
    },
    {
      id: 3,
      title: 'Paleo Link',
      category: 'Landing Page',
      year: '2026',
      image: '/assets/PaleoLink.gif',
      link: 'https://paleo-link-dig-site-locator.vercel.app/',
    },
    {
      id: 4,
      title: 'Booky App',
      category: 'Dashboard Web App',
      year: '2023',
      image: '/assets/Booky.png',
      link: 'https://booky-app-by-gio.vercel.app/',
    },
    {
      id: 5,
      title: '3D Portfolio',
      category: 'Landing Page',
      year: '2025',
      image: '/assets/images/CardBackground/image-5.svg',
      link: 'https://example.com/project-5',
    },
    {
      id: 6,
      title: 'Foody App',
      category: 'Dashboard Web App',
      year: '2026',
      image: '/assets/images/CardBackground/image-6.svg',
      link: 'https://example.com/project-6',
    },
  ] satisfies Project[],
}

// ─── Experience ──────────────────────────────────────────────

export interface Experience {
  id: number
  company: string
  logo: string
  role: string
  period: string
  description: string
}

export const experienceData = {
  title: 'My Work Experience',
  items: [
    {
      id: 1,
      company: 'Frontend Developer',
      logo: '/assets/icons/GioF.png',
      role: 'Frontend Developer Freelancer',
      period: '2025–now',
      description:
        'Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.',
    },
    {
      id: 2,
      company: 'Kodecoon Academy',
      logo: '/assets/icons/CompanyLogo/kodecoon.svg',
      role: 'Coding & Robotic Mentor',
      period: '2024–now',
      description:
        'Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.',
    },
    {
      id: 3,
      company: 'BrightCHAMPS',
      logo: '/assets/icons/CompanyLogo/brightchamps.svg',
      role: 'Coding Teacher',
      period: '2022–2023',
      description:
        'Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.',
    },
  ] satisfies Experience[],
}

// ─── Testimonials ────────────────────────────────────────────

export interface Testimonial {
  id: number
  company: string
  logo: string
  text: string
  author: string
  role: string
  rating: number
}

export const testimonialsData = {
  title: 'Feedback',
  subtitle: 'Insights gathered from user testing, peer reviews, and mentor feedback during my bootcamp in Web Programming Hack by Ahademy Code, based on my Movie API App and Instagram Clone App',
  items: [
    {
      id: 1,
      company: 'Peer Review',
      logo: '/assets/icons/feedback/peer.svg',
      text: "The UI feels clean and consistent. Spacing, typography, and responsiveness are well executed across different screen sizes.",
      author: 'Frontend Peer',
      role: 'Frontend Developer',
      rating: 5,
    },
    {
      id: 2,
      company: 'Mentor Review',
      logo: '/assets/icons/feedback/mentor.svg',
      text: "Good understanding of modern frontend architecture. Code structure is clear, and separation between UI and data logic is well handled.",
      author: 'Coding Mentor',
      role: 'Frontend Instructor',
      rating: 4,
    },
    {
      id: 3,
      company: 'User Testing',
      logo: '/assets/icons/feedback/user.svg',
      text: "Navigation is intuitive and fast. The overall experience feels smooth, animation is also cool and feels just right.",
      author: 'Test User',
      role: 'Product User',
      rating: 5,
    },
  ] satisfies Testimonial[],
}

// ─── FAQ ─────────────────────────────────────────────────────

export interface FaqItem {
  id: string
  question: string
  answer: string
}

export const faqData = {
  title: 'Have Questions?',
  items: [
    {
      id: 'faq-1',
      question: "What's your approach to front-end development?",
      answer:
        'I focus on clean, maintainable code and prioritize user experience. My approach involves close collaboration with designers to ensure exact implementation and seamless interactions across all devices.',
    },
    {
      id: 'faq-2',
      question: 'Do you work with design files like Figma?',
      answer:
        'Yes — I work directly from Figma files and translate them pixel-perfectly into code, including interactions and responsive behavior.',
    },
    {
      id: 'faq-3',
      question: 'What technologies do you specialize in?',
      answer:
        'My primary stack is React, TypeScript, Next.js, and Tailwind CSS. I also have backend experience with Node.js and PostgreSQL.',
    },
    {
      id: 'faq-4',
      question: 'Are you available for freelance projects?',
      answer:
        'Yes, I take on select freelance projects. Reach out via the contact form and I will get back to you within 24 hours.',
    },
    {
      id: 'faq-5',
      question: 'How long does a typical project take?',
      answer:
        'It depends on scope. A landing page typically takes 1–2 days, while a full web app can take 1–3 weeks. I provide detailed timelines after the initial brief.',
    },
  ] satisfies FaqItem[],
  cta: 'Get in touch',
}

// ─── Contact ─────────────────────────────────────────────────

export const contactData = {
  title: "I've been waiting for you.",
  subtitle: 'Fill in the form or Send us an email',
  phone: '+62 1234567890',
  email: 'edwinanderson@email.com',
  location: 'Jakarta, Indonesia',
  socials: {
    dribbble: '#',
    instagram: '#',
    linkedin: '#',
  },
}

// ─── Navbar ──────────────────────────────────────────────────

export interface NavLink {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

// ─── Footer ──────────────────────────────────────────────────

export const footerData = {
  logo: 'Your Logo',
  copyright: '© 2025 Bagus Giovani. All rights reserved.',
}
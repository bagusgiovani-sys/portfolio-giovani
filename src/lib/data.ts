// ============================================================
// lib/data.ts
// Single source of truth for all portfolio content.
// To update your portfolio, just edit the values here.
// ============================================================

// ─── Hero ────────────────────────────────────────────────────

export const heroData = {
  name: 'EDWIN\nANDERSON',
  rating: {
    score: '5.0',
    label: 'Many Client Trust',
    sublabel: 'with me',
  },
  stats: {
    clients: '50+',
    clientsLabel: 'Global Clients',
  },
  badges: ['Frontend Developer', 'React Expert',],
  bio: {
    greeting: "Hi, I'm Edwin Anderson 👋",
    highlight:
      'Building digital products with a focus on crafting visually engaging and seamless user interfaces using React.js.',
    body: 'Prioritizing responsive design, performance optimization, and user-centric features to deliver exceptional web experiences.',
  },
  ticker: [
    'Expert React',
    'Product Designer',
    'Frontend Developer',
    'TypeScript Pro',
    'UI/UX Focused',
  ],
  // Swap these with real client image paths when available e.g. '/images/clients/robert.jpg'
  clientAvatars: [
    { src: '/assets/images/ClientPics/Male Avatar 01.svg'},
    { src: '/assets/images/ClientPics/Female Avatar 06.svg'},
    { src: '/assets/images/ClientPics/Male Avatar 10.svg'},
    { src: '/assets/images/ClientPics/Female Avatar 07.svg'},
  ],
}

// ─── Why Choose Me ───────────────────────────────────────────

export const whyMeData = {
  title: 'Why Choose Me',
  subtitle: 'Delivering excellence with innovative solutions and seamless execution.',
  tags: [
    'Fullstack Developer',
    'Responsive Design',
    'React Expert',
    '5 Years Experience',
    'Clean Code',
    'Performance Optimization',
  ],
  comparison: [
    { skill: 'React Expert',               me: true, others: false },
    { skill: 'Perfect Pixel',              me: true, others: false },
    { skill: 'TypeScript Proficiency',     me: true, others: false },
    { skill: 'Clean, Maintainable Code',   me: true, others: false },
    { skill: 'Performance Optimization',   me: true, others: false },
    { skill: 'Responsive Website',         me: true, others: false },
    { skill: 'UI Design Proficiency (Figma)', me: true, others: false },
  ],
}

// ─── Skills ──────────────────────────────────────────────────

export const skillsData = {
  title: 'Expert Skill',
  subtitle: 'Mastering modern technologies to deliver impactful and efficient solutions',
  experience: '5+',
  experienceLabel: 'Years Experience',
  // icon: path to icon image or icon component name
  techIcons: [
    { name: 'CSS3',       icon: '/icons/css3.svg' },
    { name: 'JavaScript', icon: '/icons/js.svg' },
    { name: 'HTML5',      icon: '/icons/html5.svg' },
    { name: 'Node.js',    icon: '/icons/nodejs.svg' },
    { name: 'NestJS',     icon: '/icons/nestjs.svg' },
    { name: 'TypeScript', icon: '/icons/typescript.svg' },
    { name: 'React',      icon: '/icons/react.svg' },
    { name: 'Docker',     icon: '/icons/docker.svg' },
    { name: 'PostgreSQL', icon: '/icons/postgresql.svg' },
    { name: 'MongoDB',    icon: '/icons/mongodb.svg' },
  ],
  professionalSkills: [
    {
      name: 'HTML',
      icon: '/icons/html5.svg',
      description: 'Building the structure of web pages with semantic markup for accessibility.',
      level: 90,
    },
    {
      name: 'CSS',
      icon: '/icons/css3.svg',
      description: 'Building the structure of web pages with semantic markup for accessibility.',
      level: 90,
    },
    {
      name: 'Javascript',
      icon: '/icons/js.svg',
      description: 'Building the structure of web pages with semantic markup for accessibility.',
      level: 90,
    },
  ],
}

// ─── About (Stats) ───────────────────────────────────────────

export const aboutData = {
  stats: [
    { value: '50+', label: "Global Client's Handle",  flag: '🇩🇪' },
    { value: '99%', label: 'Client Satisfaction Rate', flag: '🇺🇸' },
    { value: '100+', label: 'Project Delivered',       flag: '🇮🇩' },
  ],
  hireCta: 'Hire Me',
}

// ─── Projects ────────────────────────────────────────────────

export const projectsData = {
  title: 'My Latest Work',
  items: [
    {
      id: 1,
      category: 'Dashboard',
      year: '2024',
      title: 'Dashboard SaaS Task Management',
      image: '/images/projects/project-1.jpg',
      url: '#',
    },
    {
      id: 2,
      category: 'Dashboard',
      year: '2024',
      title: 'Dashboard SaaS Task Management',
      image: '/images/projects/project-2.jpg',
      url: '#',
    },
  ],
}

// ─── Experience ──────────────────────────────────────────────

export const experienceData = {
  title: 'My Work Experience',
  items: [
    {
      id: 1,
      company: 'Trustpilot',
      logo: '/icons/trustpilot.svg',
      role: 'Frontend Developer',
      period: '2021–2024',
      description:
        'Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.',
    },
    {
      id: 2,
      company: 'Postman',
      logo: '/icons/postman.svg',
      role: 'Frontend Developer',
      period: '2021–2024',
      description:
        'Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.',
    },
    {
      id: 3,
      company: 'Spotify',
      logo: '/icons/spotify.svg',
      role: 'Frontend Developer',
      period: '2021–2024',
      description:
        'Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.',
    },
  ],
}

// ─── Testimonials ────────────────────────────────────────────

export const testimonialsData = {
  title: 'Success Stories from Clients',
  items: [
    {
      id: 1,
      source: 'Trustpilot',
      quote:
        "Thanks to their expertise, our website is now faster, more responsive, and visually stunning. We've seen a significant increase in user engagement!",
      rating: 5,
      name: 'Robert Lewandowski',
      role: 'Head of Engineering, Upwork',
      avatar: '/images/testimonials/robert.jpg',
    },
  ],
}

// ─── FAQ ─────────────────────────────────────────────────────

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
        'It depends on scope. A landing page typically takes 1–2 weeks, while a full web app can take 1–3 months. I provide detailed timelines after the initial brief.',
    },
  ],
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

export const navLinks = [
  { label: 'Home',       href: '#home' },
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact' },
]

// ─── Footer ──────────────────────────────────────────────────

export const footerData = {
  logo: 'Your Logo',
  copyright: '© 2025 Edwin Anderson. All rights reserved.',
}
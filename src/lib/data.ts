// ============================================================
// lib/data.ts
// Single source of truth for all portfolio content.
// To update your portfolio, just edit the values here.
// ============================================================

// ─── Hero ────────────────────────────────────────────────────

export const heroData = {
  name: 'Bagus Giovani',
  rating: {
    score: '5.0',
    label: 'Many Client Trust',
    sublabel: 'with me',
  },
  stats: {
    clients: '50+',
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
    'Expert React',
    'Product Designer',
    'Frontend Developer',
    'TypeScript Pro',
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
    { name: 'CSS3', icon: '/assets/icons/css_logo.svg' },
    { name: 'JavaScript', icon: '/assets/icons/js_logo.svg' },
    { name: 'HTML5', icon: '/assets/icons/html_logo.svg' },
    { name: 'Express.js', icon: '/assets/icons/express_logo.svg' },
    { name: 'Webpack.js', icon: '/assets/icons/webpack_logo.svg' },
    { name: 'TypeScript', icon: '/assets/icons/ts_logo.svg' },
    { name: 'React', icon: '/assets/icons/React_logo.svg' },
    { name: 'Docker', icon: '/assets/icons/docker_logo.svg' },
    { name: 'PostgreSQL', icon: '/assets/icons/postgreSQL_logo.svg' },
    { name: 'MongoDB', icon: '/assets/icons/mongo_logo.svg' },
  ],
  whyChooseMeBadges: {
    row1: ['Frontend Expert', 'Fullstack Developer', 'Responsive Design'],
    row2: ['React Expert', '5 Years Experience', 'React Native'],
    row3: ['Clean Code', 'Performance Optimization', 'UI/UX Design'],
  },
  projectPreviews: [
    { id: 1, image: '/assets/images/CardBackground/image-8.svg' },
    { id: 2, image: '/assets/images/CardBackground/image-7.svg' },
    { id: 3, image: '/assets/images/CardBackground/image-2.svg' },
  ],
  stats: [
    { value: '50+', label: "Global Client's Handle", flag: '🇩🇪' },
    { value: '99%', label: 'Client Satisfaction Rate', flag: '🇺🇸' },
    { value: '100+', label: 'Project Delivered', flag: '🇮🇩' },
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
        name: 'HTML5',
        icon: '/assets/icons/html_logo.svg',
        description: 'Building the structure of web pages with semantic markup for accessibility.',
        level: 90,
      },
      {
        name: 'CSS3',
        icon: '/assets/icons/css_logo.svg',
        description: 'Styling modern web interfaces with responsive and performant CSS.',
        level: 90,
      },
      {
        name: 'JavaScript',
        icon: '/assets/icons/js_logo.svg',
        description: 'Creating interactive and dynamic web applications with vanilla JavaScript.',
        level: 90,
      },
    ],
    [
      {
        name: 'React',
        icon: '/assets/icons/React_logo.svg',
        description: 'Building modern web applications with component-based architecture.',
        level: 95,
      },
      {
        name: 'TypeScript',
        icon: '/assets/icons/ts_logo.svg',
        description: 'Writing type-safe JavaScript code for better maintainability.',
        level: 85,
      },
      {
        name: 'Express.js',
        icon: '/assets/icons/express_logo.svg',
        description: 'Building robust backend APIs and server-side applications.',
        level: 88,
      },
    ],
    [
      {
        name: 'Docker',
        icon: '/assets/icons/docker_logo.svg',
        description: 'Containerizing applications for consistent deployment across environments.',
        level: 80,
      },
      {
        name: 'MongoDB',
        icon: '/assets/icons/mongo_logo.svg',
        description: 'Working with NoSQL databases for flexible data storage.',
        level: 85,
      },
      {
        name: 'PostgreSQL',
        icon: '/assets/icons/postgreSQL_logo.svg',
        description: 'Managing relational databases with complex queries and optimization.',
        level: 82,
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
      title: 'Dashboard SaaS Task Management',
      category: 'Dashboard',
      year: '2024',
      image: '/assets/images/CardBackground/image-1.svg',
      link: 'https://example.com/project-1',
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      category: 'Dashboard',
      year: '2024',
      image: '/assets/images/CardBackground/image-2.svg',
      link: 'https://example.com/project-2',
    },
    {
      id: 3,
      title: 'Social Media Dashboard',
      category: 'Dashboard',
      year: '2023',
      image: '/assets/images/CardBackground/image-3.svg',
      link: 'https://example.com/project-3',
    },
    {
      id: 4,
      title: 'Analytics Platform',
      category: 'Dashboard',
      year: '2023',
      image: '/assets/images/CardBackground/image-4.svg',
      link: 'https://example.com/project-4',
    },
    {
      id: 5,
      title: 'Mobile Banking App',
      category: 'Dashboard',
      year: '2024',
      image: '/assets/images/CardBackground/image-5.svg',
      link: 'https://example.com/project-5',
    },
    {
      id: 6,
      title: 'Portfolio Website',
      category: 'Dashboard',
      year: '2023',
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
      company: 'Trustpilot',
      logo: '/assets/icons/CompanyLogo/trustpilot_logo.svg',
      role: 'Frontend Developer',
      period: '2021–2024',
      description:
        'Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.',
    },
    {
      id: 2,
      company: 'Postman',
      logo: '/assets/icons/CompanyLogo/postman_logo.svg',
      role: 'Frontend Developer',
      period: '2021–2024',
      description:
        'Built responsive web interfaces using modern frameworks like React.js, ensuring seamless integration with backend systems. Optimized performance, implemented accessible designs, and delivered clean, reusable code to enhance user experience and scalability.',
    },
    {
      id: 3,
      company: 'Spotify',
      logo: '/assets/icons/CompanyLogo/spotify_logo.svg',
      role: 'Frontend Developer',
      period: '2019–2021',
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
  title: 'Success Stories from Clients',
  items: [
    {
      id: 1,
      company: 'Trustpilot',
      logo: '/assets/icons/CompanyLogo/trustpilot_logo.svg',
      text: "Thanks to their expertise, our website is now faster, more responsive, and visually stunning. We've seen a significant increase in user engagement!",
      author: 'Robert Lewandowski',
      role: 'Head of Engineering, Upwork',
      rating: 5,
    },
    {
      id: 2,
      company: 'Postman',
      logo: '/assets/icons/CompanyLogo/postman_logo.svg',
      text: 'Exceptional work! The team delivered beyond our expectations. Our users love the new interface and performance improvements.',
      author: 'Sarah Johnson',
      role: 'Product Manager, Postman',
      rating: 5,
    },
    {
      id: 3,
      company: 'Spotify',
      logo: '/assets/icons/CompanyLogo/spotify_logo.svg',
      text: 'Outstanding collaboration and technical expertise. They transformed our vision into a beautiful, functional reality.',
      author: 'Michael Chen',
      role: 'Engineering Lead, Microsoft',
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
        'It depends on scope. A landing page typically takes 1–2 weeks, while a full web app can take 1–3 months. I provide detailed timelines after the initial brief.',
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
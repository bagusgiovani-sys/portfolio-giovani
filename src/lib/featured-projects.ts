export interface FeaturedProject {
  id: string
  title: string
  category: string
  image?: string
  link?: string
  badges: string[]
  summary: string
  background: string
  problem: string
  features: string[]
  status: string
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: 'kodenexus',
    image: '/assets/KodeNexus.gif',
    link: 'https://kode-nexus.vercel.app/',
    title: 'KodeNexus',
    category: 'Classroom operations & learning',
    badges: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    summary: 'One workspace connecting academy operations with each student’s learning journey.',
    background: 'KodeNexus began as a teacher-led pilot at Kodecoon Academy Indonesia, where classroom administration relied on OClass, Excel trackers, Telegram, and WhatsApp. It grew into a multi-center demo connecting staff workflows with a parent-facing view.',
    problem: 'Staff had to reconcile student records, attendance, and lesson credits across separate tools. Learning videos passed from teachers to managers to parents, creating delays and missed updates. Teachers repeatedly compiled reports, while a shared timetable could not show each student?s individual learning path. KodeNexus brings these records and updates into one student-centered workflow.',
    features: [
      'Manage centers, student profiles, class groups, and weekly schedules.',
      'Track individual modules and lesson progress, even within a shared class slot.',
      'Connect attendance to traceable lesson-credit deductions and corrections.',
      'Prepare learning documentation, feedback PDFs, and certificates for parent views.',
    ],
    status: 'Functional browser-local demo, with production backend work implemented locally. Shared data, live authentication, and private file delivery still need production verification.',
  },
  {
    id: 'vangio',
    image: '/assets/VanGio.gif',
    title: 'VanGio Code',
    category: 'AI coding agent',
    badges: ['TypeScript', 'Bun', 'OpenTUI', 'SolidJS', 'AI SDK'],
    summary: 'A terminal coding assistant exploring specialized model teams for everyday development.',
    background: 'VanGio began as a personal tool for a freelance frontend engineer who wanted an affordable AI coding assistant on Windows. Limited laptop hardware made running capable local models difficult, so the project extends OpenCode with cloud-backed model teams.',
    problem: 'Subscription costs and usage limits can interrupt daily development. A single model may be strong at implementation but weaker at planning or research, and quota failures can force manual provider changes mid-task. VanGio addresses this with specialized planning, coding, and research roles, plus designated backup models designed to retain task context. Full live recovery verification is still in progress.',
    features: [
      'Explore a codebase, plan changes, edit files, and run verification from the terminal.',
      'Gryphon assigns planning and review to the king, implementation to the warrior, and research to the scout.',
      'Paradigm configuration defines model roles, delegation, and recovery behavior.',
      'Designated backup models aim to preserve task context when a primary model becomes unavailable.',
    ],
    status: 'Personal-use terminal release with orchestration implemented. The full six-model Gryphon setup and automatic backup switching still need end-to-end live verification.',
  },
  {
    id: 'movie-app',
    title: 'Movie App API',
    category: 'Movie discovery',
    image: '/assets/movieapp.gif',
    link: 'https://movie-app-by-giovani.vercel.app/',
    badges: ['React JS', 'Framer Motion', 'Redux', 'Axios', 'TanStack Query'],
    summary: 'An API-driven movie interface with an animated browsing experience.',
    background: 'A frontend portfolio project built around an external movie API, combining visual browsing with application state and animated interactions.',
    problem: 'API data needs to become an interface people can browse, with requests and shared state kept manageable as the UI changes. This project tackles that frontend challenge through dedicated request handling, server-state management, and interface transitions.',
    features: ['Axios handles API requests and TanStack Query manages server state.', 'Redux supports application state while Framer Motion adds interface transitions.'],
    status: 'Live project. Watch the preview above or open the website to explore.',
  },
  {
    id: 'sociality',
    title: 'Instagram Clone App',
    category: 'Social experience',
    image: '/assets/sociality.gif',
    link: 'https://sociality-app-by-gio.vercel.app/',
    badges: ['Next JS', 'Lazy Loading', 'Optimistic UI', 'Radix', 'Redux'],
    summary: 'A social interface exploring familiar interactions and responsive feedback.',
    background: 'An Instagram-inspired portfolio project exploring the interaction patterns of a social application with Next.js.',
    problem: 'Waiting for every server response can make social interactions feel unresponsive, while loading content upfront can add unnecessary work. This project explores optimistic UI for immediate feedback and lazy loading to defer content until it is needed.',
    features: ['Optimistic UI provides immediate feedback while updates are processed.', 'Next.js, Redux, and Radix support the interface and its interactive state.'],
    status: 'Live project. Watch the preview above or open the website to explore.',
  },
]

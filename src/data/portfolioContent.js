export const site = {
  name: 'Genta Pramudita',
  fullName: 'Genta Pramudita',
  email: 'Gentapramudita1@gmail.com',
  avatar: '/Hero.png',
  heroImage: '/Hero.png',
  copyrightYear: '2026',
  location: 'Jember, Indonesia',
  availableForWork: true,
}

export const navItems = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Contact', href: '#contact', id: 'contact' },
]

export const hero = {
  firstName: 'GENTA',
  lastName: 'PRAMUDITA',
  title: 'Frontend Developer & UI Architect',
  description:
    'Passionate about building intuitive interfaces that blend aesthetics with functionality. Currently crafting web experiences with React and modern tooling.',
  primaryAction: 'View My Work',
  secondaryAction: 'Get in Touch',
  techBadges: ['React', 'JavaScript', 'Tailwind CSS', 'Vite', 'Node.js'],
}

export const about = {
  label: 'The Philosophy',
  title:
    'Trying to be better and better than yesterday, even though it is slow.',
  description:
    'As a developer with a deep focus on user interface design, I believe technology should feel seamless and intentional. My work focuses on building scalable applications that do not just function — they evoke a premium feeling through motion and depth.',
  image: '/Hero.png',
  imageAlt: 'Genta Pramudita',
  stats: [
    { value: '1+', label: 'Years Experience' },
    { value: '5+', label: 'Projects Built' },
    { value: '3+', label: 'Tech Stacks' },
  ],
}

export const skills = [
  {
    category: 'Frontend',
    icon: 'code',
    items: ['React', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite'],
  },
  {
    category: 'Backend',
    icon: 'dns',
    items: ['Node.js', 'Express', 'REST API', 'PostgreSQL'],
  },
  {
    category: 'Tools',
    icon: 'build',
    items: ['Git', 'GitHub', 'VS Code', 'Figma', 'Vercel', 'npm'],
  },
]

export const projects = [
  {
    name: 'SplitSkuy!',
    description:
      'A modern web app for splitting bills and expenses among groups. Features real-time calculation, receipt scanning with OCR, PDF export, and a clean intuitive UI.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Zustand', 'TypeScript'],
    liveUrl: 'https://split-skuy.vercel.app',
    githubUrl: 'https://github.com/Xlyerrr',
    featured: true,
    icon: 'receipt_long',
  },
  {
    name: 'Laporan Harian',
    description:
      'A cross-platform mobile app for tracking daily income and expenses. Features transaction categories, date filtering, balance summary, and local data storage with AsyncStorage.',
    tech: ['React Native', 'Expo', 'AsyncStorage', 'JavaScript'],
    liveUrl: 'https://laporan-harian-topaz.vercel.app',
    githubUrl: 'https://github.com/Xlyerrr',
    featured: true,
    icon: 'account_balance_wallet',
  },
  {
    name: 'Portfolio Website',
    description:
      'A personal portfolio website built with React and Tailwind CSS. Features scroll animations, responsive design, project showcase, and a modern dark theme.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'JavaScript'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Xlyerrr',
    featured: false,
    icon: 'web',
  },
]

export const experiences = [
  {
    period: 'Jan 2025 — Apr 2026',
    title: 'IT Support',
    company: 'PT. Bank Rakyat Indonesia (Persero) Tbk',
    description:
      'Ensured banking operations ran smoothly by providing technical support, maintaining IT infrastructure, and troubleshooting hardware and software issues across the organization.',
    featured: true,
    type: 'Work',
  },
  {
    period: 'Jul 2021 — Sept 2021',
    title: 'Web Developer Intern',
    company: 'Badan Pusat Statistik Jember',
    description:
      'Designed and developed a website for the organization during a 3-month internship. Gained hands-on experience in full-stack web development.',
    featured: true,
    type: 'Work',
  },
]

export const education = [
  {
    icon: 'school',
    period: '2018 — 2023',
    title: 'Bachelor of Informatics Engineering',
    institution: 'Surabaya State University',
    description:
      "Earned a Bachelor's degree in Computer Science with a focus on software engineering, web development, and data structures.",
  },
  {
    icon: 'school',
    period: '2015 — 2018',
    title: 'Vocational High School',
    institution: 'Computer & Network Engineering',
    description:
      'Majored in computer and network engineering, building a strong foundation in IT infrastructure and networking.',
  },
]

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/Xlyerrr', icon: 'code' },
  { label: 'Email', href: `mailto:${site.email}`, icon: 'mail' },
  { label: 'Instagram', href: 'https://instagram.com/gntsprmdt_', icon: 'photo_camera' },
]

export const contact = {
  name: 'Genta Pramudita',
  fullName: 'Genta Pramudita',
  email: 'Gentapramudita1@gmail.com',
  location: 'Jember, Indonesia',
  availableForWork: true,
}

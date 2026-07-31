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
  { labelKey: 'nav.home', href: '#home', id: 'home' },
  { labelKey: 'nav.about', href: '#about', id: 'about' },
  { labelKey: 'nav.projects', href: '#projects', id: 'projects' },
  { labelKey: 'nav.experience', href: '#experience', id: 'experience' },
  { labelKey: 'nav.contact', href: '#contact', id: 'contact' },
]

export const about = {
  label: 'The Philosophy',
  image: '/Hero.png',
  imageAlt: 'Genta Pramudita',
  stats: [
    { value: '2+', labelKey: 'about.stats.years' },
    { value: '5+', labelKey: 'about.stats.projects' },
    { value: '3+', labelKey: 'about.stats.stacks' },
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
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Zustand', 'TypeScript'],
    liveUrl: 'https://split-skuy.vercel.app',
    githubUrl: 'https://github.com/Xlyerrr',
    featured: true,
    icon: 'receipt_long',
  },
  {
    tech: ['React Native', 'Expo', 'AsyncStorage', 'JavaScript'],
    liveUrl: 'https://laporan-harian-topaz.vercel.app',
    githubUrl: 'https://github.com/Xlyerrr',
    featured: true,
    icon: 'account_balance_wallet',
  },
  {
    tech: ['React', 'Vite', 'Tailwind CSS', 'JavaScript'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Xlyerrr',
    featured: false,
    icon: 'web',
  },
]

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/Xlyerrr', icon: 'code' },
  { label: 'Email', href: `mailto:${site.email}`, icon: 'mail' },
  { label: 'Instagram', href: 'https://instagram.com/gntsprmdt_', icon: 'photo_camera' },
]

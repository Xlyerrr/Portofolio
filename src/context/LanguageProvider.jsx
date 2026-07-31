import { LanguageContext } from '../context/LanguageContext'
import { useState, useEffect } from 'react'
import { en, id } from '../translations'

const content = {
  en: {
    hero: {
      firstName: 'GENTA',
      lastName: 'PRAMUDITA',
      title: 'Frontend Developer & UI Architect',
      description:
        'Passionate about building intuitive interfaces that blend aesthetics with functionality. Currently crafting web experiences with React and modern tooling.',
      techBadges: ['React', 'JavaScript', 'Tailwind CSS', 'Vite', 'Node.js'],
    },
    about: {
      title:
        'Trying to be better and better than yesterday, even though it is slow.',
      description:
        'As a developer with a deep focus on user interface design, I believe technology should feel seamless and intentional. My work focuses on building scalable applications that do not just function — they evoke a premium feeling through motion and depth.',
    },
    experiences: [
      {
        period: 'Jan 2025 — Apr 2026',
        title: 'IT Support',
        company: 'PT. Bank Rakyat Indonesia (Persero) Tbk',
        description:
          'Ensured banking operations ran smoothly by providing technical support, maintaining IT infrastructure, and troubleshooting hardware and software issues across the organization.',
      },
      {
        period: 'Oct 2024 — Aug 2025',
        title: 'IT Engineering',
        company: 'CV Dunia Comp',
        description:
          'Responsible for assembling, maintaining, and repairing computer systems and networks. Provided technical support to clients, managed hardware installations, and ensured optimal performance of IT infrastructure.',
      },
      {
        period: 'Jul 2021 — Sept 2021',
        title: 'Web Developer Intern',
        company: 'Badan Pusat Statistik Jember',
        description:
          'Designed and developed a website for the organization during a 3-month internship. Gained hands-on experience in full-stack web development.',
      },
    ],
    education: [
      {
        period: '2018 — 2023',
        title: 'Bachelor of Informatics Engineering',
        institution: 'Surabaya State University',
        description:
          "Earned a Bachelor's degree in Computer Science with a focus on software engineering, web development, and data structures.",
      },
      {
        period: '2015 — 2018',
        title: 'Vocational High School',
        institution: 'Computer & Network Engineering',
        description:
          'Majored in computer and network engineering, building a strong foundation in IT infrastructure and networking.',
      },
    ],
    projects: [
      {
        name: 'SplitSkuy!',
        description:
          'A modern web app for splitting bills and expenses among groups. Features real-time calculation, receipt scanning with OCR, PDF export, and a clean intuitive UI.',
      },
      {
        name: 'Laporan Harian',
        description:
          'A cross-platform mobile app for tracking daily income and expenses. Features transaction categories, date filtering, balance summary, and local data storage with AsyncStorage.',
      },
      {
        name: 'Portfolio Website',
        description:
          'A personal portfolio website built with React and Tailwind CSS. Features scroll animations, responsive design, project showcase, and a modern dark theme.',
      },
    ],
  },
  id: {
    hero: {
      firstName: 'GENTA',
      lastName: 'PRAMUDITA',
      title: 'Frontend Developer & UI Architect',
      description:
        'Bersemangat membangun antarmuka intuitif yang memadukan estetika dengan fungsionalitas. Saat ini sedang mengembangkan pengalaman web dengan React dan teknologi modern.',
      techBadges: ['React', 'JavaScript', 'Tailwind CSS', 'Vite', 'Node.js'],
    },
    about: {
      title:
        'Berusaha menjadi lebih baik dari hari kemarin, meskipun perlahan.',
      description:
        'Sebagai developer dengan fokus mendalam pada desain antarmuka pengguna, saya percaya teknologi harus terasa mulus dan disengaja. Karya saya fokus membangun aplikasi skalabel yang tidak hanya berfungsi, tetapi membangkitkan kesan premium melalui gerak dan kedalaman.',
    },
    experiences: [
      {
        period: 'Jan 2025 — Apr 2026',
        title: 'IT Support',
        company: 'PT. Bank Rakyat Indonesia (Persero) Tbk',
        description:
          'Memastikan operasional perbankan berjalan lancar dengan memberikan dukungan teknis, memelihara infrastruktur IT, dan menyelesaikan masalah hardware maupun software di seluruh organisasi.',
      },
      {
        period: 'Okt 2024 — Agu 2025',
        title: 'IT Engineering',
        company: 'CV Dunia Comp',
        description:
          'Bertanggung jawab merakit, memelihara, dan memperbaiki sistem komputer dan jaringan. Memberikan dukungan teknis kepada klien, mengelola instalasi hardware, dan memastikan kinerja optimal infrastruktur IT.',
      },
      {
        period: 'Jul 2021 — Sept 2021',
        title: 'Web Developer Intern',
        company: 'Badan Pusat Statistik Jember',
        description:
          'Merancang dan mengembangkan website untuk organisasi selama magang 3 bulan. Mendapatkan pengalaman langsung dalam pengembangan web full-stack.',
      },
    ],
    education: [
      {
        period: '2018 — 2023',
        title: 'Sarjana Teknik Informatika',
        institution: 'Universitas Negeri Surabaya',
        description:
          'Meraih gelar Sarjana Ilmu Komputer dengan fokus pada rekayasa perangkat lunak, pengembangan web, dan struktur data.',
      },
      {
        period: '2015 — 2018',
        title: 'SMK',
        institution: 'Teknik Komputer & Jaringan',
        description:
          'Mengambil jurusan teknik komputer dan jaringan, membangun fondasi yang kuat dalam infrastruktur IT dan jaringan.',
      },
    ],
    projects: [
      {
        name: 'SplitSkuy!',
        description:
          'Aplikasi web modern untuk membagi tagihan dan pengeluaran bersama kelompok. Fitur perhitungan real-time, pemindaian struk dengan OCR, ekspor PDF, dan UI yang bersih dan intuitif.',
      },
      {
        name: 'Laporan Harian',
        description:
          'Aplikasi mobile lintas platform untuk mencatat pemasukan dan pengeluaran harian. Fitur kategori transaksi, filter tanggal, ringkasan saldo, dan penyimpanan data lokal dengan AsyncStorage.',
      },
      {
        name: 'Website Portofolio',
        description:
          'Website portofolio pribadi yang dibuat dengan React dan Tailwind CSS. Fitur animasi scroll, desain responsif, showcase proyek, dan tema gelap modern.',
      },
    ],
  },
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('portfolio-lang')
    return saved || 'en'
  })

  const toggleLang = () => {
    setLang((prev) => {
      const next = prev === 'en' ? 'id' : 'en'
      localStorage.setItem('portfolio-lang', next)
      return next
    })
  }

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const t = lang === 'en' ? en : id
  const c = content[lang]

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t, c }}>
      {children}
    </LanguageContext.Provider>
  )
}

import { Project, Certificate, GithubProfileStats, TechItem } from '../types'

export interface ProfileInfo {
  name: string
  fullName: string
  nickname: string
  role: string
  tagline: string
  email: string
  phone: string
  github: string
  githubUsername: string
  instagram: string
  instagramHandle: string
  linkedin: string
  location: string
  school: string
  status: string
  photoUrl: string
  cvPdfUrl: string
  bioShort: string
  bioLong: string
  philosophy: string
}

export const RAYHAN_PROFILE: ProfileInfo = {
  name: 'Muhammad Rayhan Adrian',
  fullName: 'Muhammad Rayhan Adrian',
  nickname: 'Rayhan',
  role: 'UI/UX Design, Front-End & Mobile Development',
  tagline: 'Rekayasa Perangkat Lunak di Rabbaanii Islamic School',
  email: 'mhdrayhanadr@gmail.com',
  phone: '0899-8081-799',
  github: 'https://github.com/rayhan-creator',
  githubUsername: 'rayhan-creator',
  instagram: 'https://www.instagram.com/rhanndrian',
  instagramHandle: 'rhanndrian',
  linkedin: 'https://linkedin.com/in/rayhan-adrian',
  location: 'Bekasi Selatan, Jawa Barat, Indonesia',
  school: 'Rabbaanii Islamic School (Rekayasa Perangkat Lunak)',
  status: 'Tersedia untuk PRAKERIN, Proyek & Kolaborasi 2026/2027',
  photoUrl: '/profile.jpg',
  cvPdfUrl: '/cv-muhammad-rayhan-adrian.pdf',
  bioShort: 'Siswa Rekayasa Perangkat Lunak di Rabbaanii Islamic School dengan ketertarikan mendalam pada UI/UX Design, Front-End Web, dan Mobile Application Development.',
  bioLong: 'Halo! Saya Muhammad Rayhan Adrian. Siswa kelas XI jurusan Rekayasa Perangkat Lunak di Rabbaanii Islamic School. Saya memiliki ketertarikan tinggi pada UI/UX Design dan Mobile Application Development, memadukan riset user flow dengan arsitektur kode modern. Disiplin, bertanggung jawab, peraih Bintang Prestasi (Ranking 1 selama 3 semester berturut-turut), dan penghafal Al-Qur\'an 24 Juz.',
  philosophy: 'Terinspirasi oleh estetika minimalis, ketenangan alam 🌲, dan fluid physics. Tujuannya adalah menciptakan karya digital yang rapi, intuitif, dan responsif tanpa hambatan.'
}

export const RAYHAN_CERTIFICATES: Certificate[] = [
  {
    id: 'dicoding-aws-cloud',
    title: 'Belajar Dasar Cloud dan Gen AI di AWS',
    issuer: 'Dicoding Indonesia & Amazon Web Services (AWS)',
    date: '10 Juni 2026',
    credentialId: '0LZOY82MNX65',
    verifyUrl: 'https://dicoding.com/certificates/0LZOY82MNX65',
    pdfPage: 2,
    pdfUrl: '/certificates/dicoding-aws-cloud.pdf',
    category: 'Cloud & Gen AI',
    description: 'Kompetensi kelulusan resmi dalam fondasi infrastruktur Cloud Computing AWS, implementasi AI Generatif, dan keamanan cloud.',
    accentColor: '#06b6d4'
  },
  {
    id: 'dicoding-kiro-sdd',
    title: 'Spec-Driven Development dengan Kiro',
    issuer: 'Dicoding Indonesia',
    date: '10 Juni 2026',
    credentialId: '6RPN7NWQ8X2M',
    verifyUrl: 'https://dicoding.com/certificates/6RPN7NWQ8X2M',
    pdfPage: 3,
    pdfUrl: '/certificates/dicoding-kiro-sdd.pdf',
    category: 'Software Engineering',
    description: 'Penerapan metodologi Spec-Driven Development untuk membangun perangkat lunak terstandarisasi, pengujian sistematis, dan clean architecture.',
    accentColor: '#10b981'
  },
  {
    id: 'udemy-figma-uiux',
    title: 'Figma Essential for User Interface and User Experience UI UX',
    issuer: 'Udemy (Learnify IT)',
    date: '17 Maret 2026',
    credentialId: 'UC-75bb50e54-dc4d-4dbe-889b-141a3e0059ab',
    verifyUrl: 'https://ude.my/UC-75bb50e54-dc4d-4dbe-889b-141a3e0059ab',
    pdfPage: 4,
    pdfUrl: '/certificates/udemy-figma-uiux.pdf',
    category: 'UI/UX Design',
    description: 'Sertifikasi keahlian komprehensif dalam desain UI/UX di Figma: wireframing, interactive prototyping, komponen auto-layout, dan design systems.',
    accentColor: '#8b5cf6'
  },
  {
    id: 'syahadah-tahfidz',
    title: 'Syahadah Tahfidz Al-Qur\'an (Hafalan 17 Juz)',
    issuer: 'Rumah Qur\'an Daar Syabaabil Qur\'an',
    date: 'Tersertifikasi',
    pdfPage: 5,
    pdfUrl: '/cv-muhammad-rayhan-adrian.pdf',
    category: 'Tahfidz Al-Qur\'an',
    description: 'Syahadah resmi atas keberhasilan menyelesaikan hafalan Al-Qur\'an dengan predikat mutqin dan istiqomah (Total capaian saat ini: 24 Juz).',
    accentColor: '#10b981'
  },
  {
    id: 'taekwondo-geup-4',
    title: 'Sertifikat Ujian Kenaikan Tingkat GEUP - 4',
    issuer: 'Pengurus Besar Taekwondo Indonesia (P.B.T.I)',
    date: '16 Desember 2018',
    credentialId: '161108175740',
    pdfPage: 6,
    pdfUrl: '/cv-muhammad-rayhan-adrian.pdf',
    category: 'Seni Bela Diri',
    description: 'Kelulusan resmi ujian kenaikan tingkat Taekwondo Indonesia yang diselenggarakan oleh P.B.T.I Pengprov DKI Jakarta.',
    accentColor: '#f59e0b'
  },
  {
    id: 'taekwondo-juara-1-open',
    title: 'Juara I - Kejuaraan Taekwondo Valentino-Della MG 11',
    issuer: 'Sapta Eka 2 GAP Open 2018 (GOR Ciracas Jakarta Timur)',
    date: '10 Maret 2018',
    pdfPage: 7,
    pdfUrl: '/cv-muhammad-rayhan-adrian.pdf',
    category: 'Prestasi Olahraga - Juara 1',
    description: 'Piagam Penghargaan resmi peraih medali emas (Juara I) pada kejuaraan Taekwondo tingkat provinsi di GOR Ciracas.',
    accentColor: '#f43f5e'
  },
  {
    id: 'taekwondo-juara-1-valentino',
    title: 'Juara Pertama - Invitasi Taekwondo Valentino Cup 2019',
    issuer: 'Invitasi Taekwondo Valentino Cup 2019 (Mall Pondok Kelapa)',
    date: '9 Maret 2019',
    pdfPage: 8,
    pdfUrl: '/cv-muhammad-rayhan-adrian.pdf',
    category: 'Prestasi Olahraga - Juara 1',
    description: 'Piagam Penghargaan resmi Juara Pertama Invitasi Taekwondo Valentino Cup 2019.',
    accentColor: '#e11d48'
  }
]

export const RAYHAN_GITHUB_FALLBACK: GithubProfileStats = {
  username: 'rayhan-creator',
  totalStars: 428,
  totalRepos: 24,
  totalFollowers: 185,
  contributionsThisYear: 1420,
  pinnedRepos: [
    {
      name: 'figma-design-systems',
      description: 'Comprehensive UI/UX components, design tokens, and user flow wireframes in Figma.',
      stars: 186,
      forks: 32,
      primaryLanguage: { name: 'Figma & UI/UX', color: '#f24e1e' },
      url: 'https://github.com/rayhan-creator',
      updatedAt: 'Recently updated'
    },
    {
      name: 'flutter-mobile-app',
      description: 'Mobile application development with Flutter, Dart, state management and clean UI.',
      stars: 142,
      forks: 28,
      primaryLanguage: { name: 'Dart / Flutter', color: '#00b4ab' },
      url: 'https://github.com/rayhan-creator',
      updatedAt: '1 week ago'
    },
    {
      name: 'spec-driven-kiro',
      description: 'Implementation repository for Spec-Driven Development methodologies with Kiro.',
      stars: 64,
      forks: 14,
      primaryLanguage: { name: 'TypeScript', color: '#3178c6' },
      url: 'https://github.com/rayhan-creator',
      updatedAt: '2 weeks ago'
    },
    {
      name: 'rayhan-portfolio',
      description: 'Personal interactive portfolio codebase powered by Glassmorphism and Three.js.',
      stars: 36,
      forks: 8,
      primaryLanguage: { name: 'React', color: '#61dafb' },
      url: 'https://github.com/rayhan-creator',
      updatedAt: 'Yesterday'
    }
  ],
  topLanguages: [
    { name: 'Dart / Flutter', percentage: 45.2, color: '#00b4ab' },
    { name: 'TypeScript & JavaScript', percentage: 35.4, color: '#3178c6' },
    { name: 'HTML & CSS / Tailwind', percentage: 19.4, color: '#38bdf8' }
  ]
}

export const RAYHAN_EXPERIENCE = [
  {
    period: '2025 - Sekarang',
    role: 'Siswa Rekayasa Perangkat Lunak (RPL)',
    place: 'Rabbaanii Islamic School, Cikarang Timur',
    description: 'Fokus mendalami UI/UX Design di Figma, User Flow, Mobile Development (Flutter & Dart), serta Front-End Web Development. Meraih Bintang Prestasi (Ranking 1 selama 3 semester berturut-turut).'
  },
  {
    period: '2024 - 2026',
    role: 'Sertifikasi Kompetensi & Self-Development',
    place: 'Dicoding Academy & Udemy',
    description: 'Menyelesaikan sertifikasi Dicoding: "Belajar Dasar Cloud dan Gen AI di AWS" dan "Spec-Driven Development dengan Kiro", serta sertifikasi Udemy: "Figma Essential for UI/UX Design".'
  },
  {
    period: '2018 - 2024',
    role: 'Organisasi, Kepemimpinan & Prestasi Olahraga',
    place: 'OSIS, SAPALA, Taekwondo Indonesia',
    description: 'Aktif sebagai anggota OSIS (Seksi Ibadah), anggota aktif SAPALA (Santri Pecinta Alam), Juara I Kejuaraan Taekwondo Tingkat Provinsi, dan menyelesaikan hafalan Al-Qur\'an hingga 24 Juz.'
  }
]

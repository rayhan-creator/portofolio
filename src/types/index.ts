export interface Project {
  id: string
  title: string
  category: string
  year: string
  client: string
  summary: string
  description: string
  tags: string[]
  metrics: {
    label: string
    value: string
  }[]
  githubUrl?: string
  liveUrl?: string
  accentColor: string
  featuredImage: string
  galleryImages: string[]
  achievements: string[]
}

export interface GithubRepoStat {
  name: string
  description: string
  stars: number
  forks: number
  primaryLanguage: {
    name: string
    color: string
  }
  url: string
  updatedAt: string
}

export interface GithubProfileStats {
  username: string
  totalStars: number
  totalRepos: number
  totalFollowers: number
  contributionsThisYear: number
  pinnedRepos: GithubRepoStat[]
  topLanguages: {
    name: string
    percentage: number
    color: string
  }[]
}

export interface TechItem {
  name: string
  category: 'core' | 'graphics3d' | 'animation' | 'infra' | 'tools'
  proficiency: number // 0-100
  highlight: string
  iconName: string
}

export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  company: string
  avatar: string
}

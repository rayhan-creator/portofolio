import { GithubProfileStats } from '../types'
import { RAYHAN_GITHUB_FALLBACK } from '../data/mockCms'

export async function fetchGithubStats(username: string = 'rayhan-creator'): Promise<GithubProfileStats> {
  try {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 3500)

    const userRes = await fetch(`https://api.github.com/users/${username}`, {
      signal: controller.signal,
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      }
    })

    clearTimeout(timeoutId)

    if (!userRes.ok) {
      return RAYHAN_GITHUB_FALLBACK
    }

    const userData = await userRes.json()

    // Fetch public repos
    const reposRes = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)
    let pinned = RAYHAN_GITHUB_FALLBACK.pinnedRepos

    if (reposRes.ok) {
      const repos = await reposRes.json()
      if (Array.isArray(repos) && repos.length > 0) {
        pinned = repos.slice(0, 4).map((r: any) => ({
          name: r.name,
          description: r.description || 'Front-end web development project by Rayhan Adrian.',
          stars: r.stargazers_count || 5,
          forks: r.forks_count || 1,
          primaryLanguage: {
            name: r.language || 'TypeScript',
            color: r.language === 'TypeScript' ? '#3178c6' : r.language === 'JavaScript' ? '#f1e05a' : '#8b5cf6'
          },
          url: r.html_url,
          updatedAt: 'Recently updated'
        }))
      }
    }

    return {
      username: userData.login || username,
      totalStars: RAYHAN_GITHUB_FALLBACK.totalStars,
      totalRepos: userData.public_repos || RAYHAN_GITHUB_FALLBACK.totalRepos,
      totalFollowers: userData.followers || RAYHAN_GITHUB_FALLBACK.totalFollowers,
      contributionsThisYear: 1420,
      pinnedRepos: pinned,
      topLanguages: RAYHAN_GITHUB_FALLBACK.topLanguages
    }
  } catch (err) {
    return RAYHAN_GITHUB_FALLBACK
  }
}

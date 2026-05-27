import type { Project } from '@/types/project'

function parseUrl(value?: string) {
  const trimmed = value?.trim()

  if (!trimmed) {
    return null
  }

  try {
    return new URL(trimmed)
  } catch {
    return null
  }
}

function normalizeUrl(value?: string) {
  const parsed = parseUrl(value)

  if (!parsed) {
    return null
  }

  parsed.hash = ''
  parsed.search = ''

  return parsed.toString().replace(/\/$/, '').toLowerCase()
}

export function isValidGithubRepoUrl(value?: string) {
  const parsed = parseUrl(value)

  if (!parsed || parsed.protocol !== 'https:' || parsed.hostname !== 'github.com') {
    return false
  }

  const pathParts = parsed.pathname.split('/').filter(Boolean)

  return pathParts.length >= 2
}

export function isValidLiveDemoUrl(demo?: string, github?: string) {
  const parsed = parseUrl(demo)

  if (!parsed || !['http:', 'https:'].includes(parsed.protocol)) {
    return false
  }

  if (parsed.hostname === 'github.com') {
    return false
  }

  const normalizedDemo = normalizeUrl(demo)
  const normalizedGithub = normalizeUrl(github)

  return Boolean(normalizedDemo && normalizedDemo !== normalizedGithub)
}

export function getProjectGithubUrl(project: Project) {
  return isValidGithubRepoUrl(project.github) ? project.github?.trim() : undefined
}

export function getProjectDemoUrl(project: Project) {
  return isValidLiveDemoUrl(project.demo, project.github) ? project.demo?.trim() : undefined
}

export function getProjectCaseStudyUrl(project: Project) {
  return project.slug ? `/projects/${project.slug}` : undefined
}

export function isPrivateProject(project: Project) {
  return project.status === 'Private'
}

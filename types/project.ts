export type ProjectMetric = {
  label: string
  value: string
  detail: string
}

export type ProjectTimelineItem = {
  phase: string
  detail: string
}

export type ProjectPreview = {
  label: string
  headline: string
  nodes: string[]
}

export type Project = {
  title: string
  slug: string
  eyebrow: string
  description: string
  problem: string
  role: string
  stack: string[]
  metrics: ProjectMetric[]
  architecture: string[]
  aiArchitecture: string[]
  systemDesign: string[]
  challenges: string[]
  results: string[]
  future: string[]
  timeline: ProjectTimelineItem[]
  implementationHighlights: string[]
  preview: ProjectPreview
  github?: string
  demo?: string
  featured: boolean
  status: 'Public' | 'Private' | 'Research'
}

'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { ArrowUpRight, BookOpen, Github, Lock, Play, type LucideIcon } from 'lucide-react'
import { featuredProjects } from '@/data/projects'
import {
  getProjectCaseStudyUrl,
  getProjectDemoUrl,
  getProjectGithubUrl,
  isPrivateProject,
} from '@/lib/projectLinks'
import type { ProjectFilter } from '@/types/project'
import { Badge } from '@/components/ui/Badge'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { ProjectArchitecture } from '@/components/ProjectArchitecture'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'

type ProjectFilterOption = 'All' | ProjectFilter

const projectFilters: ProjectFilterOption[] = [
  'All',
  'RAG',
  'Agents',
  'Multimodal',
  'ML',
  'Backend',
  'Private',
]

function ProjectAction({
  href,
  label,
  icon: Icon,
  variant = 'secondary',
}: {
  href?: string
  label: string
  icon: LucideIcon
  variant?: 'primary' | 'secondary'
}) {
  if (!href) {
    return null
  }

  return (
    <ButtonLink href={href} external variant={variant} icon={Icon} className="min-h-10 px-4">
      {label}
    </ButtonLink>
  )
}

function ProjectLabel({ children, icon: Icon }: { children: React.ReactNode; icon: LucideIcon }) {
  return (
    <span className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-border bg-surface/40 px-4 py-2 text-sm font-semibold text-muted">
      <Icon className="h-4 w-4" aria-hidden="true" />
      {children}
    </span>
  )
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilterOption>('All')
  const visibleProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return featuredProjects
    }

    return featuredProjects.filter((project) => project.filters.includes(activeFilter))
  }, [activeFilter])

  return (
    <section id="projects" className="section-shell">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Featured AI projects"
          title="Proof-of-work, not a list of buzzwords."
          description="Each project is framed like an engineering artifact: the problem, architecture, tradeoffs, metrics, and what I would improve next."
          className="mb-0"
        />
        <ButtonLink href="/projects/source-code-analyzer" variant="secondary" icon={BookOpen}>
          Read a Case Study
        </ButtonLink>
      </div>

      <div
        id="project-filter-controls"
        className="mt-8 flex flex-wrap gap-2 rounded-3xl border border-border bg-surface/40 p-2"
        role="group"
        aria-label="Filter featured projects"
      >
        {projectFilters.map((filter) => {
          const isActive = activeFilter === filter

          return (
            <button
              key={filter}
              type="button"
              aria-pressed={isActive}
              aria-controls="featured-project-grid"
              aria-label={`Show ${filter} projects`}
              onClick={() => setActiveFilter(filter)}
              className={`min-h-10 rounded-full px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                isActive
                  ? 'bg-accent text-accent-foreground shadow-[0_14px_40px_rgba(63,140,255,0.24)]'
                  : 'text-muted hover:bg-surface hover:text-foreground'
              }`}
            >
              {filter}
            </button>
          )
        })}
      </div>

      <div id="featured-project-grid" className="mt-10 grid gap-6 lg:grid-cols-2">
        {visibleProjects.map((project, index) => (
          <ScrollReveal key={project.slug} delay={(index % 2) * 0.08}>
            <article
              aria-labelledby={`project-${project.slug}-title`}
              className="premium-card group flex h-full flex-col gap-6 p-5 transition duration-300 hover:-translate-y-1 focus-within:-translate-y-1 focus-within:ring-2 focus-within:ring-accent/40 sm:p-6"
            >
              <ProjectArchitecture project={project} variant="compact" />

              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <Badge>{project.eyebrow}</Badge>
                  <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
                    {project.status}
                  </span>
                </div>
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <h3
                      id={`project-${project.slug}-title`}
                      className="text-2xl font-semibold tracking-tight text-foreground"
                    >
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted">{project.description}</p>
                    {project.disclaimer ? (
                      <p className="mt-4 rounded-2xl border border-border bg-surface/50 px-4 py-3 text-xs leading-5 text-muted">
                        {project.disclaimer}
                      </p>
                    ) : null}
                  </div>
                  {getProjectCaseStudyUrl(project) ? (
                    <Link
                      href={getProjectCaseStudyUrl(project)!}
                      className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-muted transition hover:border-accent/50 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      aria-label={`Open ${project.title} case study`}
                    >
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  ) : null}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.metricBadges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-accent/25 bg-accent/10 px-3 py-1.5 text-xs font-medium text-foreground"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                    Problem solved
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted">{project.problem}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                    Architecture highlights
                  </p>
                  <ul className="mt-2 space-y-2 text-sm leading-6 text-muted">
                    {project.architecture.slice(0, 3).map((item) => (
                      <li key={item} className="flex gap-2">
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {project.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-border bg-surface/60 p-4">
                    <div className="text-lg font-semibold text-foreground">{metric.value}</div>
                    <div className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-muted">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {project.stack.slice(0, 8).map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-border bg-surface/50 px-3 py-1 text-xs text-muted"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex flex-wrap gap-3 border-t border-border pt-5">
                {isPrivateProject(project) && !getProjectGithubUrl(project) ? (
                  <ProjectLabel icon={Lock}>Private repo</ProjectLabel>
                ) : null}
                <ProjectAction
                  href={getProjectGithubUrl(project)}
                  label="GitHub"
                  icon={Github}
                />
                {isPrivateProject(project) && !getProjectDemoUrl(project) ? (
                  <ProjectLabel icon={Play}>Demo on request</ProjectLabel>
                ) : null}
                <ProjectAction
                  href={getProjectDemoUrl(project)}
                  label="Live Demo"
                  icon={Play}
                  variant="primary"
                />
                {getProjectCaseStudyUrl(project) ? (
                  <ButtonLink
                    href={getProjectCaseStudyUrl(project)!}
                    variant="primary"
                    icon={BookOpen}
                    className="min-h-10 px-4"
                  >
                    Case Study
                  </ButtonLink>
                ) : null}
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}

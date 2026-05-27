import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Github,
  Lightbulb,
  Lock,
  Play,
  Rocket,
  type LucideIcon,
} from 'lucide-react'
import { getProjectBySlug, projects } from '@/data/projects'
import { getProjectDemoUrl, getProjectGithubUrl, isPrivateProject } from '@/lib/projectLinks'
import { Badge } from '@/components/ui/Badge'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { MetricCard } from '@/components/ui/MetricCard'
import { ProjectArchitecture } from '@/components/ProjectArchitecture'

type ProjectPageProps = {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    return {
      title: 'Project not found',
    }
  }

  return {
    title: `${project.title} | AI Project Case Study`,
    description: project.description,
    openGraph: {
      title: `${project.title} | AI Project Case Study`,
      description: project.description,
      type: 'article',
    },
  }
}

function ListCard({
  title,
  items,
  icon: Icon = CheckCircle2,
}: {
  title: string
  items: string[]
  icon?: LucideIcon
}) {
  return (
    <article className="premium-card p-6">
      <h2 className="text-xl font-semibold text-foreground">{title}</h2>
      <ul className="mt-5 grid gap-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-7 text-muted">
            <Icon className="mt-1 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}

function ProjectLabel({ children, icon: Icon }: { children: React.ReactNode; icon: LucideIcon }) {
  return (
    <span className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-border bg-surface/40 px-5 py-2 text-sm font-semibold text-muted">
      <Icon className="h-4 w-4" aria-hidden="true" />
      {children}
    </span>
  )
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen px-4 pb-20 pt-8 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-grid opacity-50" />
      <div className="mx-auto max-w-7xl">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-4 py-2 text-sm font-medium text-muted transition hover:border-accent/50 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to projects
        </Link>

        <section className="grid gap-8 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <Badge>{project.eyebrow}</Badge>
              <Badge>{project.status}</Badge>
            </div>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.035em] text-foreground sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted">{project.description}</p>
            <div className="mt-5 flex max-w-3xl flex-wrap gap-2">
              {project.metricBadges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-accent/25 bg-accent/10 px-3 py-1.5 text-xs font-medium text-foreground"
                >
                  {badge}
                </span>
              ))}
            </div>
            {project.disclaimer ? (
              <p className="mt-5 max-w-3xl rounded-2xl border border-border bg-surface/50 px-4 py-3 text-sm leading-6 text-muted">
                {project.disclaimer}
              </p>
            ) : null}
            <div className="mt-8 flex flex-wrap gap-3">
              {isPrivateProject(project) && !getProjectGithubUrl(project) ? (
                <ProjectLabel icon={Lock}>Private repo</ProjectLabel>
              ) : null}
              {getProjectGithubUrl(project) ? (
                <ButtonLink href={getProjectGithubUrl(project)!} external variant="secondary" icon={Github}>
                  GitHub
                </ButtonLink>
              ) : null}
              {isPrivateProject(project) && !getProjectDemoUrl(project) ? (
                <ProjectLabel icon={Play}>Demo on request</ProjectLabel>
              ) : null}
              {getProjectDemoUrl(project) ? (
                <ButtonLink href={getProjectDemoUrl(project)!} external variant="primary" icon={ArrowUpRight}>
                  Live Demo
                </ButtonLink>
              ) : null}
            </div>
          </div>

          <ProjectArchitecture project={project} variant="detailed" className="premium-card p-5" />
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {project.metrics.map((metric) => (
            <MetricCard
              key={metric.label}
              value={metric.value}
              label={metric.label}
              detail={metric.detail}
            />
          ))}
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <article className="premium-card p-6">
            <h2 className="text-xl font-semibold text-foreground">Problem Statement</h2>
            <p className="mt-4 text-sm leading-7 text-muted">{project.problem}</p>
            <h2 className="mt-8 text-xl font-semibold text-foreground">My Role</h2>
            <p className="mt-4 text-sm leading-7 text-muted">{project.role}</p>
            <h2 className="mt-8 text-xl font-semibold text-foreground">Tech Stack</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-border bg-surface px-3 py-2 text-sm text-muted"
                >
                  {tool}
                </span>
              ))}
            </div>
          </article>

          <article className="premium-card p-6">
            <h2 className="text-xl font-semibold text-foreground">Implementation Highlights</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {project.implementationHighlights.map((item) => (
                <div key={item} className="rounded-2xl border border-border bg-surface/60 p-4">
                  <Lightbulb className="h-5 w-5 text-accent" aria-hidden="true" />
                  <p className="mt-3 text-sm leading-6 text-muted">{item}</p>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-2">
          <ListCard title="AI/ML Architecture" items={project.aiArchitecture} />
          <ListCard title="System Design" items={project.systemDesign} />
          <ListCard title="Challenges" items={project.challenges} icon={Lightbulb} />
          <ListCard title="Results and Metrics" items={project.results} icon={Rocket} />
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="premium-card p-6">
            <h2 className="text-xl font-semibold text-foreground">Timeline</h2>
            <div className="mt-6 grid gap-4">
              {project.timeline.map((item, index) => (
                <div key={item.phase} className="grid grid-cols-[2.5rem_1fr] gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-sm font-semibold text-foreground">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{item.phase}</h3>
                    <p className="mt-1 text-sm leading-6 text-muted">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <ListCard title="Future Improvements" items={project.future} icon={ArrowUpRight} />
        </section>
      </div>
    </main>
  )
}

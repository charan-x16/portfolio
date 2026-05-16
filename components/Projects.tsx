import Link from 'next/link'
import { ArrowUpRight, BookOpen, Github, Lock, Play, type LucideIcon } from 'lucide-react'
import { featuredProjects } from '@/data/projects'
import type { Project } from '@/types/project'
import { Badge } from '@/components/ui/Badge'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'

function ProjectPreview({ project }: { project: Project }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-border bg-background/60 p-4">
      <div className="absolute inset-x-8 top-0 h-24 bg-accent/20 blur-3xl" />
      <div className="relative flex items-center justify-between">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
          {project.preview.label}
        </span>
        <span className="rounded-full border border-border px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-muted">
          {project.status}
        </span>
      </div>
      <p className="relative mt-4 min-h-12 text-sm font-medium leading-6 text-foreground">
        {project.preview.headline}
      </p>
      <div className="relative mt-5 grid grid-cols-5 gap-2">
        {project.preview.nodes.map((node, index) => (
          <div key={node} className="flex flex-col items-center gap-2">
            <div className="h-2 w-full rounded-full bg-gradient-to-r from-accent/25 to-violet-400/40" />
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-border bg-surface text-[10px] font-semibold text-foreground">
              {index + 1}
            </div>
            <span className="max-w-[4.5rem] text-center text-[10px] leading-4 text-muted">
              {node}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function ProjectAction({
  href,
  label,
  icon: Icon,
  unavailableLabel,
}: {
  href?: string
  label: string
  icon: LucideIcon
  unavailableLabel: string
}) {
  if (!href) {
    return (
      <span className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-border bg-surface/40 px-4 py-2 text-sm font-semibold text-muted">
        <Lock className="h-4 w-4" aria-hidden="true" />
        {unavailableLabel}
      </span>
    )
  }

  return (
    <ButtonLink href={href} external variant="secondary" icon={Icon} className="min-h-10 px-4">
      {label}
    </ButtonLink>
  )
}

export default function Projects() {
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

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {featuredProjects.map((project, index) => (
          <ScrollReveal key={project.slug} delay={(index % 2) * 0.08}>
            <article className="premium-card group flex h-full flex-col gap-6 p-5 transition duration-300 hover:-translate-y-1 sm:p-6">
              <ProjectPreview project={project} />

              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <Badge>{project.eyebrow}</Badge>
                  <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
                    {project.status}
                  </span>
                </div>
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted">{project.description}</p>
                  </div>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-muted transition hover:border-accent/50 hover:text-foreground"
                    aria-label={`Open ${project.title} case study`}
                  >
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
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
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
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
                <ProjectAction
                  href={project.github}
                  label="GitHub"
                  unavailableLabel="Private repo"
                  icon={Github}
                />
                <ProjectAction
                  href={project.demo}
                  label="Live Demo"
                  unavailableLabel="Demo on request"
                  icon={Play}
                />
                <ButtonLink
                  href={`/projects/${project.slug}`}
                  variant="primary"
                  icon={BookOpen}
                  className="min-h-10 px-4"
                >
                  Case Study
                </ButtonLink>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}

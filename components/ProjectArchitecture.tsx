import { ArrowDown, Layers3 } from 'lucide-react'
import type { Project } from '@/types/project'
import { cn } from '@/lib/utils'

type ProjectArchitectureProps = {
  project: Project
  variant?: 'compact' | 'detailed'
  className?: string
}

export function ProjectArchitecture({
  project,
  variant = 'compact',
  className,
}: ProjectArchitectureProps) {
  const steps = project.preview.flow ?? project.preview.nodes
  const isDetailed = variant === 'detailed'

  return (
    <figure
      aria-label={`${project.title} architecture flow`}
      className={cn(
        'relative overflow-hidden rounded-3xl border border-border bg-background/65 p-4',
        isDetailed && 'p-5',
        className
      )}
    >
      <div className="absolute inset-x-8 top-0 h-24 bg-accent/20 blur-3xl" />
      <div className="relative flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <Layers3 className="h-4 w-4 text-accent" aria-hidden="true" />
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
              {project.preview.label}
            </span>
          </div>
          <figcaption
            className={cn(
              'mt-3 text-sm font-medium leading-6 text-foreground',
              isDetailed && 'max-w-2xl'
            )}
          >
            {project.preview.headline}
          </figcaption>
        </div>
        <span className="shrink-0 rounded-full border border-border px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-muted">
          {project.status}
        </span>
      </div>

      <ol className={cn('relative mt-5 grid gap-2', isDetailed ? 'gap-3' : 'sm:grid-cols-2')}>
        {steps.map((step, index) => (
          <li
            key={`${step}-${index}`}
            className={cn(
              'relative grid grid-cols-[2.25rem_1fr] items-center gap-3 rounded-2xl border border-border bg-surface/60 p-3',
              isDetailed && 'grid-cols-[2.5rem_1fr] p-4'
            )}
          >
            <div
              className={cn(
                'flex h-9 w-9 items-center justify-center rounded-2xl border border-border bg-background text-xs font-semibold text-foreground',
                isDetailed && 'h-10 w-10 text-sm'
              )}
            >
              {index + 1}
            </div>
            <span className={cn('text-xs leading-5 text-muted', isDetailed && 'text-sm leading-6')}>
              {step}
            </span>
            {index < steps.length - 1 ? (
              <ArrowDown
                className={cn(
                  'absolute -bottom-3 z-10 h-4 w-4 text-accent/70',
                  isDetailed ? 'left-7' : 'left-6 sm:hidden'
                )}
                aria-hidden="true"
              />
            ) : null}
          </li>
        ))}
      </ol>
    </figure>
  )
}

import {
  Boxes,
  BrainCircuit,
  DatabaseZap,
  GitBranch,
  Server,
  Workflow,
} from 'lucide-react'
import { engineeringHighlights } from '@/data/site'
import { Badge } from '@/components/ui/Badge'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'

const iconMap = {
  DatabaseZap,
  BrainCircuit,
  Workflow,
  Server,
  Boxes,
  GitBranch,
}

export default function EngineeringHighlights() {
  return (
    <section id="architecture" className="section-shell">
      <SectionHeading
        eyebrow="Project architecture"
        title="The engineering patterns behind the portfolio."
        description="These are the capabilities I keep applying across projects: retrieval, APIs, agents, deployment-ready services, and measurable AI behavior."
        align="center"
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {engineeringHighlights.map((item, index) => {
          const Icon = iconMap[item.icon as keyof typeof iconMap]
          return (
            <ScrollReveal key={item.title} delay={(index % 3) * 0.06}>
              <article className="premium-card h-full p-6 transition duration-300 hover:-translate-y-1">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-surface text-accent">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tools.map((tool) => (
                    <Badge key={tool} className="normal-case tracking-normal">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </article>
            </ScrollReveal>
          )
        })}
      </div>
    </section>
  )
}

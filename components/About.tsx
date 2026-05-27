import { FileText, Network, ServerCog } from 'lucide-react'
import { aboutHighlights, impactStats } from '@/data/site'
import { MetricCard } from '@/components/ui/MetricCard'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'

const iconMap = {
  ServerCog,
  Network,
  FileText,
}

export default function About() {
  return (
    <section id="about" className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <SectionHeading
          eyebrow="About"
          title="I build AI systems with the discipline of backend engineering."
          description="My work sits between applied machine learning, LLM product engineering, and production software design. I care about how models are integrated, how outputs are validated, and how users understand the system."
        />

        <ScrollReveal className="grid gap-4 sm:grid-cols-3">
          {aboutHighlights.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap]
            return (
              <div
                key={item.title}
                className="premium-card group p-5 transition duration-200 hover:-translate-y-1"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-surface text-accent">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{item.description}</p>
              </div>
            )
          })}
        </ScrollReveal>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
        <ScrollReveal className="premium-card p-6 md:p-8">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                Engineering mindset
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
                Clear systems, grounded intelligence, useful products.
              </h3>
            </div>
            <div className="space-y-5 text-sm leading-7 text-muted md:text-base">
              <p>
                I solve problems where raw data, documents, model outputs, and
                user decisions need to become one dependable workflow. That means
                designing retrieval layers, APIs, model evaluation paths, and user
                interfaces that make AI behavior understandable.
              </p>
              <p>
                My current focus areas are RAG applications, multimodal AI, AI
                agents, FastAPI-based ML services, Anomaly Detection, and practical
                deployment patterns for AI products.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal className="grid grid-cols-2 gap-4">
          {impactStats.map((stat) => (
            <MetricCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
              detail={stat.detail}
            />
          ))}
        </ScrollReveal>
      </div>
    </section>
  )
}

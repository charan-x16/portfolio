import { BriefcaseBusiness } from 'lucide-react'
import { experience } from '@/data/site'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="section-shell">
      <SectionHeading
        eyebrow="Experience timeline"
        title="Applied AI work, from research prototypes to deployable systems."
        description="The emphasis is impact: AI systems built, workflows automated, APIs designed, and engineering habits carried into each role."
      />

      <div className="relative">
        <div className="absolute left-4 top-0 hidden h-full w-px bg-border md:block" />
        <div className="space-y-5">
          {experience.map((item, index) => (
            <ScrollReveal key={`${item.organization}-${item.role}`} delay={index * 0.05}>
              <article className="relative grid gap-5 md:grid-cols-[12rem_1fr] md:pl-12">
                <div className="hidden md:block">
                  <div className="sticky top-24 text-sm text-muted">{item.duration}</div>
                </div>
                <div className="premium-card relative p-6">
                  <div className="absolute -left-[3.25rem] top-7 hidden h-8 w-8 items-center justify-center rounded-full border border-border bg-background text-accent md:flex">
                    <BriefcaseBusiness className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{item.role}</h3>
                      <p className="mt-1 text-sm font-medium text-accent">{item.organization}</p>
                    </div>
                    <span className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted md:hidden">
                      {item.duration}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-muted">{item.summary}</p>
                  <ul className="mt-5 grid gap-3">
                    {item.impact.map((impact) => (
                      <li key={impact} className="flex gap-3 text-sm leading-6 text-muted">
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                          aria-hidden="true"
                        />
                        <span>{impact}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

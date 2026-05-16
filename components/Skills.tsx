import { skills } from '@/data/site'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <SectionHeading
        eyebrow="Skills and stack"
        title="Grouped by the systems I can actually build."
        description="No progress bars. Just the tools, frameworks, and patterns I use to ship AI workflows, APIs, and product experiences."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {skills.map((group, index) => (
          <ScrollReveal key={group.category} delay={(index % 3) * 0.05}>
            <article className="premium-card h-full p-6">
              <div className="mb-5 flex items-center justify-between gap-4">
                <h3 className="text-lg font-semibold text-foreground">{group.category}</h3>
                <span className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted">
                  {group.items.length} tools
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border bg-surface/60 px-3 py-2 text-sm text-muted transition hover:border-accent/40 hover:text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}

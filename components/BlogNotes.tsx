import { ArrowUpRight, FileText } from 'lucide-react'
import { technicalNotes } from '@/data/site'
import { Badge } from '@/components/ui/Badge'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'

export default function BlogNotes() {
  return (
    <section id="blog" className="section-shell">
      <SectionHeading
        eyebrow="Technical notes"
        title="Placeholder-ready writing system for engineering explanations."
        description="This section is structured for future posts on RAG, agents, prompt design, FastAPI deployment, and vector databases."
      />

      <div className="grid gap-4 lg:grid-cols-3">
        {technicalNotes.map((note, index) => (
          <ScrollReveal key={note.title} delay={(index % 3) * 0.06}>
            <article className="premium-card group h-full p-6 transition duration-300 hover:-translate-y-1">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-surface text-accent">
                  <FileText className="h-5 w-5" aria-hidden="true" />
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted transition group-hover:text-foreground" aria-hidden="true" />
              </div>
              <Badge>{note.category}</Badge>
              <h3 className="mt-4 text-xl font-semibold leading-7 text-foreground">{note.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{note.description}</p>
              <p className="mt-6 text-xs font-medium uppercase tracking-[0.16em] text-muted">
                {note.readingTime}
              </p>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}

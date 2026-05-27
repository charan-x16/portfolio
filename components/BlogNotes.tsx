import { FileText } from 'lucide-react'
import { technicalNotes } from '@/data/site'
import { Badge } from '@/components/ui/Badge'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'

export default function BlogNotes() {
  return (
    <section id="blog" className="section-shell">
      <SectionHeading
        eyebrow="Engineering notes"
        title="Short notes on how I make AI systems practical."
        description="Concise engineering takeaways from building RAG pipelines, agent workflows, and API-first AI services."
      />

      <div className="grid gap-4 lg:grid-cols-3">
        {technicalNotes.map((note, index) => (
          <ScrollReveal key={note.title} delay={(index % 3) * 0.06}>
            <article className="premium-card h-full p-6">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-surface text-accent">
                  <FileText className="h-5 w-5" aria-hidden="true" />
                </div>
              </div>
              <h3 className="mt-4 text-xl font-semibold leading-7 text-foreground">{note.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{note.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {note.tags.map((tag) => (
                  <Badge key={tag} className="normal-case tracking-normal">
                    {tag}
                  </Badge>
                ))}
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}

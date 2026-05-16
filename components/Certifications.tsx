import { Award, ExternalLink } from 'lucide-react'
import { certifications } from '@/data/site'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'

export default function Certifications() {
  return (
    <section id="certifications" className="section-shell">
      <SectionHeading
        eyebrow="Certifications"
        title="Learning path aligned with applied AI engineering."
        description="Certifications support the portfolio, but the core signal remains project execution and system design."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {certifications.map((cert, index) => (
          <ScrollReveal key={cert.title} delay={(index % 2) * 0.06}>
            <article className="premium-card flex h-full flex-col gap-5 p-6 sm:flex-row sm:items-start">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-border bg-surface text-accent">
                <Award className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-muted">
                  <span>{cert.issuer}</span>
                  <span aria-hidden="true">/</span>
                  <span>{cert.date}</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-7 text-foreground">
                  {cert.title}
                </h3>
                <ButtonLink
                  href={cert.verify}
                  download
                  variant="ghost"
                  icon={ExternalLink}
                  className="mt-4 min-h-9 justify-start px-0 hover:bg-transparent"
                >
                  Verify in resume
                </ButtonLink>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}

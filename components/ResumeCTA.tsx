import { Download, Mail } from 'lucide-react'
import { site } from '@/data/site'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export default function ResumeCTA() {
  return (
    <section id="resume" className="section-shell">
      <ScrollReveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-panel p-6 shadow-2xl shadow-black/20 sm:p-8 lg:p-10">
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                Resume
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                Need the concise recruiter version?
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-muted">
                The portfolio shows architecture and proof-of-work. The resume gives a
                compact view of roles, education, certifications, and contact details.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <ButtonLink href={site.resume} download variant="primary" icon={Download}>
                Download Resume
              </ButtonLink>
              <ButtonLink href={`mailto:${site.email}`} variant="secondary" icon={Mail}>
                Contact Me
              </ButtonLink>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}

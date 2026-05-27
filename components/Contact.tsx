'use client'

import { FormEvent, useState } from 'react'
import { Github, Linkedin, Mail, MapPin, Send } from 'lucide-react'
import { site } from '@/data/site'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { SectionHeading } from '@/components/ui/SectionHeading'

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${formState.name}`)
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`
    )
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Open to AI Engineer and ML Engineer opportunities."
            description="I am interested in teams building AI products, automation platforms, RAG systems, agent workflows, ML APIs, and applied machine learning infrastructure."
          />

          <div className="grid gap-3">
            <a
              href={`mailto:${site.email}`}
              className="premium-card flex items-center gap-4 p-4 transition hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Mail className="h-5 w-5 text-accent" aria-hidden="true" />
              <span className="text-sm text-muted">{site.email}</span>
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="premium-card flex items-center gap-4 p-4 transition hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Linkedin className="h-5 w-5 text-accent" aria-hidden="true" />
              <span className="text-sm text-muted">linkedin.com/in/charanx16</span>
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="premium-card flex items-center gap-4 p-4 transition hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Github className="h-5 w-5 text-accent" aria-hidden="true" />
              <span className="text-sm text-muted">github.com/charan-x16</span>
            </a>
            <div className="premium-card flex items-center gap-4 p-4">
              <MapPin className="h-5 w-5 text-accent" aria-hidden="true" />
              <span className="text-sm text-muted">{site.location}</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="premium-card p-5 sm:p-6">
          <div className="grid gap-5">
            <div>
              <label htmlFor="name" className="text-sm font-medium text-foreground">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                value={formState.name}
                onChange={(event) => setFormState({ ...formState, name: event.target.value })}
                className="mt-2 w-full rounded-2xl border border-border bg-background/70 px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/20"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                spellCheck={false}
                value={formState.email}
                onChange={(event) => setFormState({ ...formState, email: event.target.value })}
                className="mt-2 w-full rounded-2xl border border-border bg-background/70 px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/20"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-medium text-foreground">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                autoComplete="off"
                value={formState.message}
                onChange={(event) => setFormState({ ...formState, message: event.target.value })}
                className="mt-2 w-full resize-none rounded-2xl border border-border bg-background/70 px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/20"
                placeholder="Tell me about the role, product, or AI system you are building."
              />
            </div>
            <button
              type="submit"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-[0_18px_60px_rgba(63,140,255,0.28)] transition hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
              Send Message
            </button>
            <ButtonLink href={`mailto:${site.email}`} variant="ghost" icon={Mail}>
              Or email directly
            </ButtonLink>
          </div>
        </form>
      </div>
    </section>
  )
}

import { Github, Linkedin, Mail } from 'lucide-react'
import { navLinks, site } from '@/data/site'

export default function Footer() {
  return (
    <footer className="border-t border-border px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="text-sm font-semibold text-foreground">Sridhar Charan Chekka</p>
          <p className="mt-2 text-sm leading-6 text-muted">
            Built with Next.js, TypeScript, Tailwind CSS, and a project-first AI engineering story.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {navLinks.slice(0, 6).map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm text-muted transition hover:bg-surface hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          Copyright {new Date().getFullYear()} Sridhar Charan Chekka. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-muted transition hover:border-accent/50 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label="Open GitHub profile"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-muted transition hover:border-accent/50 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label="Open LinkedIn profile"
          >
            <Linkedin className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-muted transition hover:border-accent/50 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label="Email Sridhar Charan Chekka"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}

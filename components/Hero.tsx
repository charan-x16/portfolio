'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles } from 'lucide-react'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { Badge } from '@/components/ui/Badge'
import { site } from '@/data/site'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-4 pb-20 pt-28 sm:px-6 lg:px-8 lg:pb-28 lg:pt-36"
    >
      <div className="absolute inset-0 -z-10 bg-grid opacity-60" />
      <div className="absolute left-1/2 top-0 -z-10 h-[640px] w-[920px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(63,140,255,0.22),rgba(153,92,255,0.14)_38%,transparent_68%)] blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-3"
          >
            <Badge className="border-accent/30 bg-accent/10 text-foreground">
              Open to AI Engineer roles
            </Badge>
            <span className="text-sm text-muted">RAG, agents, ML APIs, production apps</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 max-w-5xl text-5xl font-semibold tracking-[-0.04em] text-foreground sm:text-6xl lg:text-7xl"
          >
            Building production-ready AI systems.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-muted"
          >
            I design and deploy AI applications with LLMs, RAG systems, ML APIs,
            AI agents, and scalable backend workflows. My work focuses on clear
            architecture, grounded model behavior, and product-ready execution.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <ButtonLink href="#projects" variant="primary" icon={ArrowRight}>
              View Projects
            </ButtonLink>
            <ButtonLink href={site.resume} download icon={Download}>
              Download Resume
            </ButtonLink>
            <ButtonLink href="#contact" variant="ghost" icon={Mail}>
              Contact Me
            </ButtonLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 flex items-center gap-5 text-sm text-muted"
          >
            <span className="font-medium text-foreground">Sridhar Charan Chekka</span>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-foreground"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              GitHub
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-foreground"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
              LinkedIn
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-[radial-gradient(circle_at_50%_0%,rgba(63,140,255,0.28),transparent_58%)] blur-2xl" />
          <div className="premium-card relative overflow-hidden p-5 sm:p-6">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <span className="h-3 w-3 rounded-full bg-green-400/80" />
              </div>
              <span className="font-mono text-xs text-muted">ai-system.trace</span>
            </div>

            <div className="mt-5 grid gap-4 font-mono text-sm">
              <div className="rounded-2xl border border-border bg-background/60 p-4">
                <div className="mb-3 flex items-center gap-2 text-accent">
                  <Sparkles className="h-4 w-4" aria-hidden="true" />
                  production pipeline
                </div>
                <pre className="overflow-x-auto text-xs leading-6 text-muted sm:text-sm">
{`ingest -> retrieve -> reason -> validate

model:
  llm: grounded response
  rag: source aware context
  agents: task orchestration
  api: deployable FastAPI boundary`}
                </pre>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {['RAG', 'Agents', 'ML APIs', 'Deploy'].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-border bg-surface/70 px-3 py-4 text-center text-xs font-semibold uppercase tracking-[0.14em] text-foreground"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-accent/25 bg-accent/10 p-4 text-xs leading-6 text-muted">
                <span className="text-foreground">Focus:</span> reliable AI architecture,
                clean APIs, measurable model behavior, and decision-ready UX.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

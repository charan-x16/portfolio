import { CheckCircle2 } from 'lucide-react'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

const summaryBullets = [
  'Builds RAG systems with retrieval, reranking, grounding, and evaluation.',
  'Designs agent workflows using LangGraph, CrewAI, and structured tool orchestration.',
  'Ships API-first AI applications with FastAPI, Streamlit, Docker, and Vector Databases.',
  'Communicates projects through architecture, tradeoffs, metrics, and case studies.',
]

export default function RecruiterSummary() {
  return (
    <section aria-labelledby="recruiter-summary-title" className="section-shell pt-0">
      <ScrollReveal>
        <div className="premium-card p-5 sm:p-6 md:p-8">
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                Recruiter Summary
              </p>
              <h2
                id="recruiter-summary-title"
                className="mt-4 text-2xl font-semibold tracking-tight text-foreground md:text-3xl"
              >
                AI/ML Engineer focused on applied AI systems.
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted md:text-base">
                AI/ML Engineer focused on RAG systems, multimodal AI, agent
                workflows, Anomaly Detection, and FastAPI-based ML services. Open
                to AI Engineer, ML Engineer, and Generative AI Engineer roles.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {summaryBullets.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-border bg-surface/60 p-4"
                >
                  <CheckCircle2 className="h-4 w-4 text-accent" aria-hidden="true" />
                  <p className="mt-3 text-sm leading-6 text-muted">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}

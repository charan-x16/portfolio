import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/ThemeProvider'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Sridhar Charan Chekka | AI Engineer Portfolio',
    template: '%s | Sridhar Charan Chekka',
  },
  description:
    'Proof-of-work portfolio for an AI/ML Engineer building LLM applications, RAG systems, ML APIs, AI agents, and production-ready AI workflows.',
  keywords: [
    'AI Engineer',
    'Machine Learning Engineer',
    'RAG Systems',
    'LLM Applications',
    'AI Agents',
    'FastAPI',
    'MLOps',
    'Portfolio',
  ],
  authors: [{ name: 'Sridhar Charan Chekka' }],
  openGraph: {
    title: 'Sridhar Charan Chekka | AI Engineer Portfolio',
    description:
      'Project-first AI engineering portfolio with case studies, architecture notes, and production-minded system design.',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/ThemeProvider'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Sridhar Charan Chekka | AI Engineer - RAG, Agents & ML APIs',
    template: '%s | Sridhar Charan Chekka',
  },
  description:
    'Portfolio of Sridhar Charan Chekka, an AI Engineer building RAG systems, multimodal AI applications, agent workflows, anomaly detection systems, and production-ready ML APIs.',
  keywords: [
    'AI Engineer',
    'Machine Learning Engineer',
    'RAG',
    'Generative AI',
    'LangChain',
    'LangGraph',
    'CrewAI',
    'FastAPI',
    'Vector Databases',
    'Multimodal AI',
    'ML APIs',
    'Agent Workflows',
  ],
  authors: [{ name: 'Sridhar Charan Chekka' }],
  openGraph: {
    title: 'Sridhar Charan Chekka | AI Engineer Portfolio',
    description:
      'Applied AI portfolio featuring RAG systems, multimodal AI, agent workflows, industrial anomaly intelligence, and FastAPI-based ML applications.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Sridhar Charan Chekka | AI Engineer Portfolio',
    description:
      'Applied AI portfolio featuring RAG systems, multimodal AI, agent workflows, industrial anomaly intelligence, and FastAPI-based ML applications.',
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

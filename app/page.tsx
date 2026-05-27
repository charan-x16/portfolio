import About from '@/components/About'
import BlogNotes from '@/components/BlogNotes'
import Certifications from '@/components/Certifications'
import Contact from '@/components/Contact'
import EngineeringHighlights from '@/components/EngineeringHighlights'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import RecruiterSummary from '@/components/RecruiterSummary'
import ResumeCTA from '@/components/ResumeCTA'
import Skills from '@/components/Skills'

export default function HomePage() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-accent-foreground focus:shadow-lg"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <RecruiterSummary />
        <Projects />
        <EngineeringHighlights />
        <Skills />
        <Experience />
        <Certifications />
        <BlogNotes />
        <ResumeCTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

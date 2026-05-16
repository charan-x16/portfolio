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
import ResumeCTA from '@/components/ResumeCTA'
import Skills from '@/components/Skills'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
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

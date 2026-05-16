'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Linkedin, Menu, Moon, Sun, X } from 'lucide-react'
import { useTheme } from 'next-themes'
import { navLinks, site } from '@/data/site'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[]

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible?.target.id) {
          setActiveSection(visible.target.id)
        }
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: [0.12, 0.24, 0.36] }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  const iconButtonClass =
    'inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface/70 text-muted transition hover:border-accent/50 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent'

  return (
    <>
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0 }}
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'border-b border-border/80 bg-background/80 shadow-[0_16px_60px_rgba(0,0,0,0.28)] backdrop-blur-2xl'
            : 'border-b border-transparent bg-background/20 backdrop-blur-sm'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#home" className="group flex items-center gap-3" aria-label="Go to home">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-sm font-semibold text-foreground shadow-inner shadow-white/5">
              SC
            </span>
            <span className="hidden text-sm font-semibold tracking-tight text-foreground sm:inline">
              AI Systems Portfolio
            </span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  'rounded-full px-3 py-2 text-sm font-medium transition',
                  activeSection === item.id
                    ? 'bg-surface text-foreground'
                    : 'text-muted hover:bg-surface/70 hover:text-foreground'
                )}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(iconButtonClass, 'hidden sm:inline-flex')}
              aria-label="Open GitHub"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(iconButtonClass, 'hidden sm:inline-flex')}
              aria-label="Open LinkedIn"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
            </a>
            <ButtonLink
              href={site.resume}
              variant="primary"
              download
              className="hidden h-10 min-h-10 px-4 sm:inline-flex"
            >
              Resume
            </ButtonLink>
            <button
              onClick={toggleTheme}
              className={iconButtonClass}
              aria-label="Toggle color theme"
            >
              {mounted && theme === 'dark' ? (
                <Sun className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Moon className="h-4 w-4" aria-hidden="true" />
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(iconButtonClass, 'lg:hidden')}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Menu className="h-4 w-4" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-background/70 backdrop-blur-md"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              className="absolute bottom-4 left-4 right-4 rounded-3xl border border-border bg-panel p-4 shadow-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
            >
              <div className="grid gap-1">
                {navLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      'rounded-2xl px-4 py-3 text-sm font-medium transition',
                      activeSection === item.id
                        ? 'bg-surface text-foreground'
                        : 'text-muted hover:bg-surface hover:text-foreground'
                    )}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2 border-t border-border pt-3">
                <ButtonLink href={site.github} external variant="secondary">
                  GitHub
                </ButtonLink>
                <ButtonLink href={site.linkedin} external variant="secondary">
                  LinkedIn
                </ButtonLink>
                <ButtonLink href={site.resume} download variant="primary" className="col-span-2">
                  Download Resume
                </ButtonLink>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

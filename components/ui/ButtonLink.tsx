import Link from 'next/link'
import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

type ButtonLinkProps = {
  href: string
  children: React.ReactNode
  icon?: LucideIcon
  variant?: 'primary' | 'secondary' | 'ghost'
  external?: boolean
  className?: string
  download?: boolean
}

const variants = {
  primary:
    'bg-accent text-accent-foreground shadow-[0_18px_60px_rgba(63,140,255,0.28)] hover:bg-accent-hover',
  secondary:
    'border border-border bg-surface/80 text-foreground hover:border-accent/50 hover:bg-surface-muted',
  ghost: 'text-muted hover:text-foreground hover:bg-surface/80',
}

export function ButtonLink({
  href,
  children,
  icon: Icon,
  variant = 'secondary',
  external,
  className,
  download,
}: ButtonLinkProps) {
  const classes = cn(
    'inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background',
    variants[variant],
    className
  )
  const shouldRenderAnchor =
    external || download || href.startsWith('mailto:') || href.startsWith('tel:')

  if (shouldRenderAnchor) {
    return (
      <a
        href={href}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        download={download}
      >
        {Icon ? <Icon className="h-4 w-4" aria-hidden="true" /> : null}
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={classes}>
      {Icon ? <Icon className="h-4 w-4" aria-hidden="true" /> : null}
      {children}
    </Link>
  )
}

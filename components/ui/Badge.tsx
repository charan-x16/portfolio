import { cn } from '@/lib/utils'

type BadgeProps = {
  children: React.ReactNode
  className?: string
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-border/70 bg-surface/70 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-muted',
        className
      )}
    >
      {children}
    </span>
  )
}

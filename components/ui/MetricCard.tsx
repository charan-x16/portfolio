import { cn } from '@/lib/utils'

type MetricCardProps = {
  value: string
  label: string
  detail?: string
  className?: string
}

export function MetricCard({ value, label, detail, className }: MetricCardProps) {
  return (
    <div className={cn('premium-card p-5', className)}>
      <div className="text-3xl font-semibold tracking-tight text-foreground">{value}</div>
      <div className="mt-2 text-sm font-medium text-foreground">{label}</div>
      {detail ? <p className="mt-2 text-sm leading-6 text-muted">{detail}</p> : null}
    </div>
  )
}

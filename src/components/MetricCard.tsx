import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import type { Metric } from '../types/dashboard'

export function MetricCard({ metric }: { metric: Metric }) {
  const isUp = metric.direction === 'up'

  return (
    <article className="holo-border rounded-xl bg-slate-950/45 p-4">
      <p className="text-sm text-slate-300">{metric.title}</p>
      <p className="mt-2 text-3xl font-semibold text-white">{metric.value}</p>
      <p className={`mt-2 inline-flex items-center gap-1 text-xs font-medium ${isUp ? 'text-emerald-300' : 'text-rose-300'}`}>
        {isUp ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
        {metric.delta} vs last cycle
      </p>
    </article>
  )
}

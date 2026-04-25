import type { SessionStatus } from '../types/dashboard'

const statusStyles: Record<SessionStatus, string> = {
  active: 'bg-emerald-400/20 text-emerald-300 ring-emerald-300/40',
  idle: 'bg-amber-400/20 text-amber-300 ring-amber-300/40',
  error: 'bg-rose-500/20 text-rose-300 ring-rose-300/40',
  complete: 'bg-cyan-400/20 text-cyan-200 ring-cyan-300/40',
}

export function StatusBadge({ status }: { status: SessionStatus }) {
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ring-1 ${statusStyles[status]}`}>
      {status}
    </span>
  )
}

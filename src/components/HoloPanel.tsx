import type { ReactNode } from 'react'

interface HoloPanelProps {
  title?: string
  subtitle?: string
  children: ReactNode
  className?: string
}

export function HoloPanel({ title, subtitle, children, className }: HoloPanelProps) {
  return (
    <section className={`holo-border rounded-2xl bg-white/5 p-5 backdrop-blur-md ${className ?? ''}`}>
      {(title || subtitle) && (
        <header className="mb-4">
          {title && <h3 className="text-lg font-semibold text-cyan-100">{title}</h3>}
          {subtitle && <p className="mt-1 text-sm text-slate-300">{subtitle}</p>}
        </header>
      )}
      {children}
    </section>
  )
}

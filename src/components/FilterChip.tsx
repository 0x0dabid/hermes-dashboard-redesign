interface FilterChipProps {
  label: string
  active?: boolean
}

export function FilterChip({ label, active = false }: FilterChipProps) {
  return (
    <button
      type="button"
      className={`rounded-full px-3 py-1 text-xs font-medium transition ${
        active ? 'bg-cyan-400/20 text-cyan-200 ring-1 ring-cyan-300/40' : 'bg-slate-900/70 text-slate-300 ring-1 ring-slate-700/70'
      }`}
    >
      {label}
    </button>
  )
}

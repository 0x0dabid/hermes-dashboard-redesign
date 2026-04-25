import { Bell, Search, Sparkles } from 'lucide-react'

export function TopBar() {
  return (
    <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-cyan-300/20 bg-[#080c17]/80 px-6 py-4 backdrop-blur-xl">
      <div className="inline-flex items-center gap-2 rounded-lg bg-slate-950/70 px-3 py-2 text-sm text-slate-300 ring-1 ring-cyan-300/20">
        <Search className="h-4 w-4 text-cyan-300" />
        Search agents, sessions, alerts
      </div>
      <div className="flex items-center gap-3">
        <button className="holo-border rounded-lg bg-slate-900/60 p-2 text-cyan-200">
          <Sparkles className="h-5 w-5" />
        </button>
        <button className="holo-border rounded-lg bg-slate-900/60 p-2 text-cyan-200">
          <Bell className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}

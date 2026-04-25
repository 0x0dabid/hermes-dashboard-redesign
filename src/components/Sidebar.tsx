import { Bot, BookOpenText, Clock3, Cog, Command, KeyRound, Layers2, Logs, Rocket, Settings2, Sparkles } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Command Center', to: '/', icon: Command },
  { label: 'Sessions', to: '/sessions', icon: Bot },
  { label: 'Analytics', to: '/analytics', icon: Sparkles },
  { label: 'Automations', to: '/automations', icon: Rocket },
  { label: 'Cron Jobs', to: '/cron-jobs', icon: Clock3 },
  { label: 'Logs', to: '/logs', icon: Logs },
  { label: 'Skills', to: '/skills', icon: Layers2 },
  { label: 'Examples', to: '/examples', icon: BookOpenText },
  { label: 'Config', to: '/config', icon: Cog },
  { label: 'Keys', to: '/keys', icon: KeyRound },
  { label: 'Documentation', to: '/documentation', icon: Settings2 },
]

export function Sidebar() {
  return (
    <aside className="h-screen w-72 shrink-0 border-r border-cyan-400/20 bg-slate-950/70 p-5 backdrop-blur-lg">
      <div className="mb-8 rounded-xl bg-cyan-400/10 p-4 ring-1 ring-cyan-300/30">
        <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/90">Nexus Command UI</p>
        <h2 className="mt-2 text-xl font-semibold text-white">Hermes Dashboard</h2>
      </div>
      <nav className="space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition ${
                  isActive
                    ? 'bg-cyan-400/15 text-cyan-200 ring-1 ring-cyan-300/30 shadow-pulse'
                    : 'text-slate-300 hover:bg-slate-800/70 hover:text-cyan-100'
                }`
              }
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </NavLink>
          )
        })}
      </nav>
    </aside>
  )
}

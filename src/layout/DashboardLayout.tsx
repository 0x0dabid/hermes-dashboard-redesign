import type { ReactNode } from 'react'
import { Sidebar } from '../components/Sidebar'
import { TopBar } from '../components/TopBar'

export function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-transparent text-slate-100">
      <Sidebar />
      <div className="flex min-h-screen flex-1 flex-col">
        <TopBar />
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}

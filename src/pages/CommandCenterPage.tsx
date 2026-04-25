import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { DataTable } from '../components/DataTable'
import { FilterChip } from '../components/FilterChip'
import { HoloPanel } from '../components/HoloPanel'
import { MetricCard } from '../components/MetricCard'
import { PageHeader } from '../components/PageHeader'
import { StatusBadge } from '../components/StatusBadge'
import { commandHighlights, commandMetrics, liveEvents, orbitSignals } from '../data/mockData'

export function CommandCenterPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Command Center"
        description="Monitor global Hermes agent activity, mission pulse, and real-time events across your AI command stack."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {commandMetrics.map((metric) => (
          <MetricCard key={metric.title} metric={metric} />
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[2fr_1fr]">
        <HoloPanel title="Orbit Signal" subtitle="Throughput and reliability for the last 24h">
          <div className="mb-4 flex flex-wrap gap-2">
            <FilterChip label="24H" active />
            <FilterChip label="7D" />
            <FilterChip label="30D" />
          </div>
          <div className="h-72">
            <ResponsiveContainer>
              <AreaChart data={orbitSignals} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="throughput" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#17f2ff" stopOpacity={0.6} />
                    <stop offset="95%" stopColor="#17f2ff" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="reliability" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#9f7aea" stopOpacity={0.55} />
                    <stop offset="95%" stopColor="#9f7aea" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1f3452" />
                <XAxis dataKey="name" stroke="#8ca0bf" />
                <YAxis stroke="#8ca0bf" />
                <Tooltip contentStyle={{ background: '#111827', borderColor: '#17f2ff55' }} />
                <Area type="monotone" dataKey="throughput" stroke="#17f2ff" fill="url(#throughput)" strokeWidth={2} />
                <Area type="monotone" dataKey="reliability" stroke="#9f7aea" fill="url(#reliability)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </HoloPanel>

        <HoloPanel title="System Highlights" subtitle="Current command matrix health">
          <div className="space-y-3">
            {commandHighlights.map((highlight) => {
              const Icon = highlight.icon
              return (
                <article key={highlight.title} className="rounded-xl bg-slate-900/65 p-4 ring-1 ring-cyan-300/20">
                  <div className="flex items-center gap-2 text-cyan-200">
                    <Icon className="h-4 w-4" />
                    <h4 className="text-sm font-medium">{highlight.title}</h4>
                  </div>
                  <p className="mt-2 text-sm text-slate-300">{highlight.text}</p>
                </article>
              )
            })}
          </div>
        </HoloPanel>
      </div>

      <HoloPanel title="Live Event Feed" subtitle="Newest agent events and mission updates">
        <DataTable
          columns={[
            { key: 'id', title: 'Event ID', render: (row) => <span className="font-medium text-cyan-200">{row.id}</span> },
            { key: 'label', title: 'Event', render: (row) => row.label },
            { key: 'agent', title: 'Agent', render: (row) => row.agent },
            { key: 'state', title: 'State', render: (row) => <StatusBadge status={row.state} /> },
            { key: 'timestamp', title: 'Timestamp', render: (row) => row.timestamp },
          ]}
          rows={liveEvents}
        />
      </HoloPanel>
    </div>
  )
}

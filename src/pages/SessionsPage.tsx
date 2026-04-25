import { DataTable } from '../components/DataTable'
import { FilterChip } from '../components/FilterChip'
import { HoloPanel } from '../components/HoloPanel'
import { PageHeader } from '../components/PageHeader'
import { StatusBadge } from '../components/StatusBadge'
import { sessions } from '../data/mockData'

export function SessionsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Sessions"
        description="Track active mission sessions, operator workload, and session state transitions in one view."
      />

      <HoloPanel>
        <div className="flex flex-wrap gap-2">
          <FilterChip label="All" active />
          <FilterChip label="Active" />
          <FilterChip label="Idle" />
          <FilterChip label="Complete" />
          <FilterChip label="Error" />
        </div>
      </HoloPanel>

      <HoloPanel title="Session Ledger" subtitle="Mock prototype data only (no backend integration yet)">
        <DataTable
          columns={[
            { key: 'id', title: 'Session ID', render: (row) => <span className="font-medium text-cyan-200">{row.id}</span> },
            { key: 'operator', title: 'Operator', render: (row) => row.operator },
            { key: 'mission', title: 'Mission', render: (row) => row.mission },
            { key: 'startedAt', title: 'Started', render: (row) => row.startedAt },
            { key: 'duration', title: 'Duration', render: (row) => row.duration },
            { key: 'status', title: 'Status', render: (row) => <StatusBadge status={row.status} /> },
          ]}
          rows={sessions}
        />
      </HoloPanel>
    </div>
  )
}

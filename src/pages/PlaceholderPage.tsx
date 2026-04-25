import { HoloPanel } from '../components/HoloPanel'
import { PageHeader } from '../components/PageHeader'

export function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="space-y-6">
      <PageHeader title={title} description={`The ${title} surface is prepared for the next design phase.`} />
      <HoloPanel>
        <p className="text-slate-300">
          Placeholder view ready. This page is part of the standalone Nexus Command UI prototype and currently uses mock content.
        </p>
      </HoloPanel>
    </div>
  )
}

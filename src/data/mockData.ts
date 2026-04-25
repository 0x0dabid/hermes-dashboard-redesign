import { Activity, Bot, Gauge, Orbit } from 'lucide-react'
import type { CommandCenterEvent, Metric, Session } from '../types/dashboard'

export const commandMetrics: Metric[] = [
  { title: 'Active Agents', value: '24', delta: '+12%', direction: 'up' },
  { title: 'Live Sessions', value: '91', delta: '+8%', direction: 'up' },
  { title: 'Success Rate', value: '97.3%', delta: '+1.1%', direction: 'up' },
  { title: 'Alert Events', value: '4', delta: '-2', direction: 'down' },
]

export const orbitSignals = [
  { name: '00:00', throughput: 32, reliability: 97 },
  { name: '04:00', throughput: 45, reliability: 94 },
  { name: '08:00', throughput: 73, reliability: 96 },
  { name: '12:00', throughput: 85, reliability: 98 },
  { name: '16:00', throughput: 69, reliability: 95 },
  { name: '20:00', throughput: 48, reliability: 97 },
]

export const liveEvents: CommandCenterEvent[] = [
  { id: 'EV-7711', label: 'Payload synchronized', agent: 'Hermes-X2', state: 'active', timestamp: '2 min ago' },
  { id: 'EV-7712', label: 'Fallback routine triggered', agent: 'Hermes-S9', state: 'idle', timestamp: '6 min ago' },
  { id: 'EV-7713', label: 'Endpoint timeout warning', agent: 'Hermes-C4', state: 'error', timestamp: '12 min ago' },
  { id: 'EV-7714', label: 'Task objective completed', agent: 'Hermes-Q7', state: 'complete', timestamp: '17 min ago' },
]

export const sessions: Session[] = [
  { id: 'SE-2401', operator: 'Ava Chen', mission: 'Onboarding pipeline optimization', startedAt: '13:20 UTC', duration: '01:32', status: 'active' },
  { id: 'SE-2402', operator: 'Leo Ramirez', mission: 'Support triage and escalation', startedAt: '12:44 UTC', duration: '02:08', status: 'idle' },
  { id: 'SE-2403', operator: 'Noah Patel', mission: 'Data extraction validation', startedAt: '12:11 UTC', duration: '02:44', status: 'active' },
  { id: 'SE-2404', operator: 'Mina Ford', mission: 'Report generation batch', startedAt: '11:55 UTC', duration: '03:01', status: 'complete' },
  { id: 'SE-2405', operator: 'Aria Brooks', mission: 'Regression watch', startedAt: '11:08 UTC', duration: '03:39', status: 'error' },
]

export const commandHighlights = [
  { icon: Activity, title: 'System Pulse', text: 'All critical clusters healthy' },
  { icon: Gauge, title: 'Routing Engine', text: 'Throughput at 85% optimal band' },
  { icon: Bot, title: 'Agent Matrix', text: '24 agents online and synchronized' },
  { icon: Orbit, title: 'Orbit Relay', text: 'Latency median 38ms' },
]

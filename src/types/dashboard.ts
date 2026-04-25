export type SessionStatus = 'active' | 'idle' | 'error' | 'complete'

export interface Metric {
  title: string
  value: string
  delta: string
  direction: 'up' | 'down'
}

export interface Session {
  id: string
  operator: string
  mission: string
  startedAt: string
  duration: string
  status: SessionStatus
}

export interface CommandCenterEvent {
  id: string
  label: string
  agent: string
  state: SessionStatus
  timestamp: string
}

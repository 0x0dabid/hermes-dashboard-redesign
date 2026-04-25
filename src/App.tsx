import { Navigate, Route, Routes } from 'react-router-dom'
import { DashboardLayout } from './layout/DashboardLayout'
import { CommandCenterPage } from './pages/CommandCenterPage'
import { PlaceholderPage } from './pages/PlaceholderPage'
import { SessionsPage } from './pages/SessionsPage'

function App() {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<CommandCenterPage />} />
        <Route path="/sessions" element={<SessionsPage />} />
        <Route path="/analytics" element={<PlaceholderPage title="Analytics" />} />
        <Route path="/automations" element={<PlaceholderPage title="Automations" />} />
        <Route path="/cron-jobs" element={<PlaceholderPage title="Cron Jobs" />} />
        <Route path="/logs" element={<PlaceholderPage title="Logs" />} />
        <Route path="/skills" element={<PlaceholderPage title="Skills" />} />
        <Route path="/examples" element={<PlaceholderPage title="Examples" />} />
        <Route path="/config" element={<PlaceholderPage title="Config" />} />
        <Route path="/keys" element={<PlaceholderPage title="Keys" />} />
        <Route path="/documentation" element={<PlaceholderPage title="Documentation" />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </DashboardLayout>
  )
}

export default App

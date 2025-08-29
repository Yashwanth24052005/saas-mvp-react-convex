
import { Routes, Route, Link, NavLink } from 'react-router-dom'
import { ConvexProvider, ConvexReactClient } from '@convex-dev/react'
import Dashboard from './pages/Dashboard'
import DocsPage from './pages/DocsPage'
import TasksPage from './pages/TasksPage'

const convexUrl = import.meta.env.VITE_CONVEX_URL as string | undefined
if (!convexUrl) {
  console.warn('VITE_CONVEX_URL is not set. Run `npx convex dev` and set it in .env.local')
}
const convex = new ConvexReactClient(convexUrl || 'http://localhost:3210')

export default function App() {
  return (
    <ConvexProvider client={convex}>
      <div className="container">
        <nav className="nav">
          <NavLink to="/" className="brand">SaaS MVP</NavLink>
          <NavLink to="/docs">Docs</NavLink>
          <NavLink to="/tasks">Tasks</NavLink>
          <NavLink to="/">Dashboard</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/docs" element={<DocsPage />} />
          <Route path="/tasks" element={<TasksPage />} />
        </Routes>
      </div>
    </ConvexProvider>
  )
}

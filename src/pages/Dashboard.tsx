
import { useQuery } from '@convex-dev/react'
import { api } from '../../convex/_generated/api'

export default function Dashboard() {
  const kpis = useQuery(api.analytics.spaceKpis, { spaceId: 'space-1' as any })
  return (
    <div className="grid">
      <div className="card">
        <h2>Dashboard</h2>
        <p className="muted">Realtime KPIs for your space.</p>
        {!kpis ? <p>Loading…</p> : (
          <div className="kpis">
            <div className="kpi">
              <div className="muted">Docs</div>
              <div style={{fontSize:28,fontWeight:700}}>{kpis.docsCount}</div>
            </div>
            <div className="kpi">
              <div className="muted">Tasks</div>
              <div style={{fontSize:28,fontWeight:700}}>{kpis.tasksCount}</div>
            </div>
            <div className="kpi">
              <div className="muted">Completion</div>
              <div style={{fontSize:28,fontWeight:700}}>{Math.round((kpis.completionRate||0)*100)}%</div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

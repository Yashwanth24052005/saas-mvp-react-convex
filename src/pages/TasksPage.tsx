
import { useQuery, useMutation } from '@convex-dev/react'
import { api } from '../../convex/_generated/api'
import { useState } from 'react'

export default function TasksPage() {
  const tasks = useQuery(api.tasks.listBySpace, { spaceId: 'space-1' as any }) || []
  const create = useMutation(api.tasks.create)
  const move = useMutation(api.tasks.move)
  const [title, setTitle] = useState('')
  const grouped = {
    todo: tasks.filter(t=>t.status==='todo'),
    doing: tasks.filter(t=>t.status==='doing'),
    done: tasks.filter(t=>t.status==='done'),
  }
  return (
    <div className="grid">
      <div className="card">
        <h2>Tasks</h2>
        <div style={{display:'flex', gap:8}}>
          <input className="input" placeholder="Task title" value={title} onChange={e=>setTitle(e.target.value)} />
          <button className="btn primary" onClick={()=>{ if(title.trim()){ create({spaceId:'space-1' as any, title}); setTitle('') }}}>Add</button>
        </div>
        <div className="board" style={{marginTop:16}}>
          {(['todo','doing','done'] as const).map(col => (
            <div key={col} className="column">
              <div className="muted" style={{textTransform:'uppercase', letterSpacing:1}}>{col}</div>
              {grouped[col].map(t => (
                <div key={t._id} className="task">
                  <div>{t.title}</div>
                  <div className="muted">#{String(t.sort).padStart(3,'0')}</div>
                  <div style={{display:'flex', gap:6, marginTop:8}}>
                    {col!=='todo' && <button className="btn" onClick={()=>move({taskId:t._id, status: col==='doing'?'todo':'doing'})}>◀</button>}
                    {col!=='done' && <button className="btn" onClick={()=>move({taskId:t._id, status: col==='todo'?'doing':'done'})}>▶</button>}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


import { useQuery, useMutation } from '@convex-dev/react'
import { api } from '../../convex/_generated/api'
import { useState } from 'react'

export default function DocsPage() {
  const docs = useQuery(api.docs.listBySpace, { spaceId: 'space-1' as any }) || []
  const create = useMutation(api.docs.create)
  const update = useMutation(api.docs.update)
  const [title, setTitle] = useState('New Doc')
  const [content, setContent] = useState('Write here…')

  return (
    <div className="grid">
      <div className="card">
        <h2>Docs</h2>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:16}}>
          <div className="card">
            <input className="input" value={title} onChange={e=>setTitle(e.target.value)} />
            <textarea className="textarea" value={content} onChange={e=>setContent(e.target.value)} />
            <button className="btn primary" onClick={()=>create({spaceId: 'space-1' as any, title, content})}>Create</button>
          </div>
          <div>
            {docs.map(d => (
              <div key={d._id} className="card" style={{marginBottom:12}}>
                <input className="input" defaultValue={d.title} onBlur={e=>update({docId:d._id, title:e.target.value, content:d.content})} />
                <textarea className="textarea" defaultValue={d.content} onBlur={e=>update({docId:d._id, title:d.title, content:e.target.value})} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

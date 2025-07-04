// app/admin/bourses/domaines/page.tsx
'use client'
import FormulaireDomaine from '../../../component/FormulaireDomaine'

export default function DomainePage() {
  return (
    <div className="p-4">
      <h3>Créer un Domaine</h3>
      <FormulaireDomaine />
    </div>
  )
}

'use client'

import Link from 'next/link'

interface SidebarProps {
  role: 'etudiant' | 'admin'
}
interface LinkItem {
  label: string
  href: string
  className?: string
}

export default function Sidebar({ role }: SidebarProps) {
  const commonLinks: LinkItem[]= [
    { label: 'Tableau de bord', href: '/dashboard' },
    { label: 'Profil', href: '/profil' },
    { label: 'Déconnexion', href: '/logout', className: 'text-danger' },
  ]

  const etudiantLinks: LinkItem[] = [
    { label: 'Liste des bourses', href: '/bourses' },
    { label: 'Mes candidatures', href: '/mes-candidatures' },
    { label: 'Nouvelle candidature', href: '/candidature/nouvelle' },
    { label: 'Paiements', href: '/paiements' },
  ]

  const adminLinks : LinkItem[]= [
    { label: 'Gérer les étudiants', href: '/admin/etudiants' },
    { label: 'Gérer les bourses', href: '/admin/bourses' },
    { label: 'Gérer les candidatures', href: '/admin/candidatures' },
    { label: 'Historique paiements', href: '/admin/paiements' },
    { label: 'Paramètres', href: '/admin/parametres' },
  ]

  const links = role === 'etudiant' ? etudiantLinks : adminLinks

  return (
    <div className="bg-light p-3 h-100 border-end">
      <h5 className="mb-4">🎓 Menu</h5>
      <ul className="nav flex-column">
        {links.map((link, idx) => (
          <li className="nav-item" key={idx}>
            <Link className={`nav-link ${link.className ?? ''}`} href={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
        <hr />
        {commonLinks.map((link, idx) => (
          <li className="nav-item" key={`common-${idx}`}>
            <Link className={`nav-link ${link.className ?? ''}`} href={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

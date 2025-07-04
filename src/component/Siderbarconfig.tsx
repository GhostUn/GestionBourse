'use client'

import Link from 'next/link'
import { useState } from 'react'

interface SidebarProps {
  role: 'etudiant' | 'admin'
}
interface LinkItem {
  label: string
  href: string
  className?: string
}

export default function SidebarMenu({ role }: SidebarProps) {
  const [showBourseSubMenu, setShowBourseSubMenu] = useState(false)

  const toggleBourseSubMenu = () => {
    setShowBourseSubMenu(!showBourseSubMenu)
  }

  const adminLinks: LinkItem[] = [
    { label: 'Gérer les Admin', href: '/admin/parametres' },
    { label: 'Gérer les candidatures', href: '/admin/candidatures' },
    { label: 'Historique paiements', href: '/admin/paiements' },
    { label: 'Paramètres', href: '/admin/parametres' },
  ]

  return (
    <div className="bg-light p-3 border-end">
      <ul className="nav flex-column">
        <li className="nav-item">
          <button onClick={toggleBourseSubMenu} className="nav-link btn btn-link text-start w-100">
            Gérer les bourses
          </button>

          {showBourseSubMenu && (
            <ul className="nav flex-column ms-3">
               <li className="nav-item">
                <Link href="/admin/bourses" className="nav-link">Créer une Bourse</Link>
              </li>
              <li className="nav-item">
                <Link href="/admin/domaines" className="nav-link">Créer un domaine</Link>
              </li>
              <li className="nav-item">
                <Link href="/admin/niveauEtude" className="nav-link">Créer un niveau d’étude</Link>
              </li>
              <li className="nav-item">
                <Link href="/admin/bouseType" className="nav-link">Créer un type de bourse</Link>
              </li>
            </ul>
          )}
        </li>

        {adminLinks.map((link, idx) => (
          <li className="nav-item" key={idx}>
            <Link className={`nav-link ${link.className ?? ''}`} href={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
type NavLink = {
  href: string
  label: string
  onClick?: () => void
}

export default function Navbar() {
  const pathname = usePathname()
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isReady, setIsReady] = useState(false)


  useEffect(() => {
    const token = localStorage.getItem('token')
    setIsAuthenticated(!!token)
    setIsReady(true)
  }, [])

  if (!isReady) return null // ou un loader si tu veux
  const handleLogout = () => {
    localStorage.removeItem('token')
    setIsAuthenticated(false)
    router.push('/connexion')
  }

  const guestLinks: NavLink[] = [
    { href: '/', label: 'Landing Page' },
    { href: '/apropos', label: 'À propos' },
    { href: '/connexion', label: 'Connexion' },
    { href: '/inscription', label: 'Inscription' },
  ]

  const authLinks: NavLink[] = [
    { href: '/', label: 'Landing Page' },
    { href: '/apropos', label: 'À propos' },
    { href: '#', label: 'Déconnexion', onClick: handleLogout },
  ]

  const linksToShow = isAuthenticated ? authLinks : guestLinks

  return (
    <header className="bg-light border-bottom py-3 px-4">
      <div className="container-fluid d-flex align-items-center">
        <div className="col-3 fw-bold fs-4 text-primary">
          Univer.City Center
        </div>

        <nav className="ms-auto d-flex gap-3">
          {linksToShow.map((link) =>
            link.onClick ? (
              <button
                key={link.label}
                onClick={link.onClick}
                className="btn btn-link text-decoration-none text-dark"
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`text-decoration-none ${
                  pathname === link.href ? 'fw-bold text-primary' : 'text-dark'
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  )
}

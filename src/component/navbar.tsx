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
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    setIsAuthenticated(!!token)
    setIsReady(true)
  }, [])

  if (!isReady) return null

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
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div className="fw-bold fs-4 text-primary">Univer.City Center</div>

        {/* Bouton toggle menu mobile */}
        <button
          className="d-md-none btn btn-outline-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        {/* Liens navigation desktop */}
        <nav className="d-none d-md-flex gap-3">
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

      {/* Liens navigation mobile */}
      {isMenuOpen && (
        <div className="d-md-none mt-2 px-4">
          {linksToShow.map((link) =>
            link.onClick ? (
              <button
                key={link.label}
                onClick={() => {
                  link.onClick?.()
                  setIsMenuOpen(false)
                }}
                className="btn btn-link w-100 text-start text-dark"
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`d-block py-2 text-decoration-none ${
                  pathname === link.href ? 'fw-bold text-primary' : 'text-dark'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      )}
    </header>
  )
}

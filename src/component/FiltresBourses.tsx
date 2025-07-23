'use client'

import React, { useEffect, useState } from 'react'
import { bourseSearch } from '@/app/API/CreationBourse'
import Link from 'next/link'
import { Bourse } from '@/app/Type/typeBourse'

type Filtres = {
  type: string
  pays: string
  niveau: string
  taux: string
  duree: string
  search: string
}

export default function FiltreBourse() {
  const [filtres, setFiltres] = useState<Filtres>({
    type: '',
    pays: '',
    niveau: '',
    taux: '',
    duree: '',
    search: '',
  })

  const [results, setResults] = useState<Bourse[]>([])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFiltres((prev) => ({ ...prev, [name]: value }))
  }

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      const { search, ...otherFilters } = filtres
      const hasFilters = Object.values(otherFilters).some((v) => v !== '')
      const hasSearchText = search.trim().length > 0

      if (hasSearchText || hasFilters) {
        bourseSearch(filtres).then((data) => {
          console.log('🔍 Résultat API :', data)
          setResults(Array.isArray(data) ? data : [])
        })
      } else {
        setResults([])
      }
    }, 300)

    return () => clearTimeout(delayDebounceFn)
  }, [filtres])

  return (
    <div className="container my-5">
      <div className="card shadow p-4">
        <h4 className="mb-4">Filtrer les bourses disponibles</h4>

        {/* Search Input */}
        <div className="mb-4">
          <input
            type="text"
            name="search"
            className="form-control form-control-lg"
            placeholder="🔍 Rechercher une bourse par mot-clé..."
            value={filtres.search}
            onChange={handleChange}
          />
        </div>

        {/* Filters Grid */}
        <div className="row g-3 mb-4">
          <div className="col-md-4">
            <select name="type" onChange={handleChange} className="form-select">
              <option value="">Type de bourse</option>
              <option value="complete">Complète</option>
              <option value="partielle">Partielle</option>
            </select>
          </div>

          <div className="col-md-4">
            <select name="pays" onChange={handleChange} className="form-select">
              <option value="">Pays</option>
              <option value="Europe">Europe</option>
              <option value="Asie">Asie</option>
            </select>
          </div>

          <div className="col-md-4">
            <select name="niveau" onChange={handleChange} className="form-select">
              <option value="">Niveau concerné</option>
              <option value="Licence">Licence</option>
              <option value="Master">Master</option>
            </select>
          </div>

          <div className="col-md-4">
            <select name="taux" onChange={handleChange} className="form-select">
              <option value="">Taux de couverture</option>
              <option value="50">50%</option>
              <option value="100">100%</option>
            </select>
          </div>

          <div className="col-md-4">
            <select name="duree" onChange={handleChange} className="form-select">
              <option value="">Durée</option>
              <option value="1 an">1 an</option>
              <option value="2 ans">2 ans</option>
            </select>
          </div>
        </div>

        {/* Résultats */}
        <div className="mt-4">
          <h5 className="mb-3">Résultats :</h5>

          {results.length === 0 ? (
            <div className="alert alert-info">Aucune bourse trouvée</div>
          ) : (
            <ul className="list-group">
              {results.map((bourse, i) => (
                <li key={i} className="list-group-item d-flex justify-content-between align-items-center">
                  <Link href={`/bourses/${bourse.id}`} className="text-decoration-none fw-bold text-dark">
                    {bourse.nomBourse}
                  </Link>
                  <span className="badge bg-primary rounded-pill">{bourse.type}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

'use client'

import React from 'react'

type Filtres = {
  type: string
  pays: string
  niveau: string
  taux: string
  duree: string
}

type Props = {
  filtres: Filtres
  setFiltres: React.Dispatch<React.SetStateAction<Filtres>>
}

export default function FiltresBourses({ onChange }: { onChange: (data: any) => void }) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target
    onChange((prev: any) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="flex gap-2 flex-wrap">
      <select name="type" onChange={handleChange} className="form-select">
        <option value="">Type de bourse</option>
        <option value="complete">Complète</option>
        <option value="partielle">Partielle</option>
      </select>
      <select name="pays" onChange={handleChange} className="form-select">
        <option value="">Pays d'origine</option>
        <option value="Europe">Europe</option>
        <option value="Asie">Asie</option>
      </select>
      <select name="niveau" onChange={handleChange} className="form-select">
        <option value="">Niveau concerné</option>
        <option value="Licence">Licence</option>
        <option value="Master">Master</option>
      </select>
      <select name="taux" onChange={handleChange} className="form-select">
        <option value="">Taux de couverture</option>
        <option value="50">50%</option>
        <option value="100">100%</option>
      </select>
      <select name="duree" onChange={handleChange} className="form-select">
        <option value="">Durée</option>
        <option value="1 an">1 an</option>
        <option value="2 ans">2 ans</option>
      </select>
    </div>
  )
}

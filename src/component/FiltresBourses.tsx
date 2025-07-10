'use client'

import { bourseSearch } from '@/app/API/CreationBourse';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { Bourse } from '@/app/Type/typeBourse';

type Filtres = {
  type: string;
  pays: string;
  niveau: string;
  taux: string;
  duree: string;
  search: string;
};

export default function FiltreBourse() {
  const [filtres, setFiltres] = useState<Filtres>({
    type: '',
    pays: '',
    niveau: '',
    taux: '',
    duree: '',
    search: '',
  });

  const [results, setResults] = useState<Bourse[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFiltres((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
  const delayDebounceFn = setTimeout(() => {
    const { search, ...otherFilters } = filtres;

    const hasFilters = Object.values(otherFilters).some((v) => v !== '');
    const hasSearchText = search.trim().length > 0;

    // Si au moins un filtre ou un mot-clé est fourni
    if (hasSearchText || hasFilters) {
      bourseSearch(filtres).then((data) => {
        console.log("🔍 Résultat API :", data);
        setResults(Array.isArray(data) ? data : []);
      });
    } else {
      // Si rien n'est rempli, on vide les résultats
      setResults([]);
    }
  }, 300);

  return () => clearTimeout(delayDebounceFn);
}, [filtres]);


  return (
    <>
      <div className="container mt-4">
        <input
          type="text"
          name="search"
          className="form-control"
          placeholder="Rechercher une bourse"
          value={filtres.search}
          onChange={handleChange}
        />

        <ul className="list-group mt-3">
          {results.length === 0 ? (
            <li className="list-group-item text-muted">Aucune bourse trouvée</li>
          ) : (
            results.map((bourse) => (
              <li key={bourse.nomBourse} className="list-group-item">
                <Link href={`/bourses/${bourse.id}`}>
                  {bourse.nomBourse}
                </Link>
              </li>
            ))
          )}
        </ul>
      </div>

      <div className="flex gap-2 flex-wrap mt-3">
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
    </>
  );
}

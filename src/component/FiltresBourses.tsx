'use client'

import { bourseSearch } from '@/app/API/CreationBourse';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { Bourse } from '@/app/Type/typeBourse'; // ou définis-le localement
type Filtres = {
  type: string;
  pays: string;
  niveau: string;
  taux: string;
  duree: string;
  search: string; // Nouveau champ pour la recherche
};

type Props = {
  filtres: Filtres
  setFiltres: React.Dispatch<React.SetStateAction<Filtres>>
  onChange: (data: any) => void; // Fonction pour mettre à jour les filtres
}


export default function  FiltreBourse () {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
   // onChange((prev: Filtres) => ({ ...prev, [name]: value }));
  };
  const [query, setQuery] = useState('');
 const [results, setResults] = useState<Bourse[]>([]);
useEffect(() => {
  const delayDebounceFn = setTimeout(() => {
    if (query.length > 1) {
      bourseSearch(query).then((data) => {
        console.log("Résultat API :", data);
        setResults(Array.isArray(data) ? data : []);
      });
    } else {
      setResults([]);
    }
  }, 300);

  return () => clearTimeout(delayDebounceFn);
}, [query]);


  return (

    <>
        <div className="container mt-4">
      <input
        type="text"
        className="form-control"
        placeholder="Rechercher une bourse"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <ul className="list-group mt-3">
        {results.map((bourse) => (
          <li key={bourse.nomBourse} className="list-group-item">
            <Link href={`/bourses/${bourse.id}`}>
              {bourse.nomBourse}
            </Link>
          </li>
        ))}
      </ul>
    </div>


    
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

  </>
  )
}

'use client'
import FiltresBourses from '@/component/FiltresBourses'
import ListeBourses from '@/component/ListeBourses'

import { useState } from 'react'
import { Bourse } from '../Type/typeBourse'

export default function Page() {
  const role: 'etudiant' | 'admin' = 'etudiant' // À remplacer dynamiquement
  const [bourses, setBourses] = useState<Bourse[]>([]);
  // État pour stocker les filtres et les bourses
  const [filtres, setFiltres] = useState({
    type: '',
    pays: '',
    niveau: '',
    taux: '',
    duree: '',
    search: '', // Nouveau champ pour la recherche
  });

  
  return(
   <>
    <div className="row">
           <div className="col-md-12">
                   <FiltresBourses />
            </div>
          </div>
       <div className="row">
           <div className="col-md-12">
                   <ListeBourses filtres={filtres} />
            </div>
          </div>
   </>
       
     
 
  )
}

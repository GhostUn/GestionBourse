'use client'
import FiltresBourses from '@/component/FiltresBourses'
import ListeBourses from '@/component/ListeBourses'
import Navbar from '@/component/navbar'
import Sidebar from '@/component/Siderbar'
import { useState } from 'react'

export default function Page() {
  const role: 'etudiant' | 'admin' = 'etudiant' // À remplacer dynamiquement
    const [filtres, setFiltres] = useState({
      type: '',
      pays: '',
      niveau: '',
      taux: '',
      duree: '',
    })
  return (
    
   <>
    <div className="row">
           <div className="col-md-12">
                   <FiltresBourses onChange={(newFilters) => setFiltres(newFilters)}/>
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

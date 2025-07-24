'use client'
import React, { useState } from 'react'

import ListeBourses from '@/component/ListeBourses'
import Navbar from '@/component/navbar'

 const page = () => {
   const [filtres, setFiltres] = useState({
    type: '',
    pays: '',
    niveau: '',
    taux: '',
    duree: '',
  })

  if (!filtres) {
      setFiltres({ 
      type: 'Complete',
      pays: 'cameroun',
      niveau: 'L1',
      taux: '100%',
      duree: '3ans',
  })
  }
  return (
        <>
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-12">
                          <Navbar/>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                                <ListeBourses filtres={filtres}/>
                        </div>
                      </div>
                    </div>
         
        </>
  )
}
export default page
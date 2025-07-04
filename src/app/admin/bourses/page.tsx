'use client'
import React, { useState } from 'react'
import DashboardLayout from '../../dashboard/layout'
import SiderbarConfig from '../../../component/Siderbarconfig'
import ParametreLayout from '../layout'
import ListeAdmin from '@/component/ListeAdmin'
import CreationBourse from '@/component/CreationBourse'
import ListeBourses from '@/component/ListeBourses'

 const page = () => {
   const [filtres, setFiltres] = useState({
    type: '',
    pays: '',
    niveau: '',
    taux: '',
    duree: '',
  })
  return (
        <>
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-12">
                          <CreationBourse/>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                                <ListeBourses filtres={filtres} />
                        </div>
                      </div>
                    </div>
         
        </>
  )
}
export default page
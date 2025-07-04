import React from 'react'
import DashboardLayout from '../../dashboard/layout'
import SiderbarConfig from '../../../component/Siderbarconfig'
import ParametreLayout from '../layout'
import ListeAdmin from '@/component/ListeAdmin'
import CreationBourse from '@/component/CreationBourse'

const page = () => {

    
  return (


        <>
          

                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-12">
                          {/*/<CreationBourse/>*/}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <ListeAdmin type="candidatures"/>
                        </div>
                      </div>
                    </div>
         
        </>
  )
}

export default page
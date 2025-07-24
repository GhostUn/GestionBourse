import React from 'react'

import ListeAdmin from '@/component/ListeAdmin'

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
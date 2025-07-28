import React from 'react'

import ListeAdmin from '@/component/ListeAdmin'
import ListeCandidature from '@/component/ListeCandidature'
import ListeCandidaturesAd from '@/component/ListeCandidaturesAd'

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
                          <ListeCandidaturesAd  />
                        </div>
                      </div>
                    </div>
         
        </>
  )
}

export default page
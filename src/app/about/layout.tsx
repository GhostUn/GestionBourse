'use client'

import Navbar from '@/component/navbar'
export default function LayaoutAbout({ children }: { children: React.ReactNode }) {
  return (
     <div className="container-fluid">
        <div className="row">
            <Navbar/>
        </div>
          <div className="row vh-100">
            <div className="col-12 col-md-12 p-4">
              {children}
            </div>
          </div>
        </div>
  )
}

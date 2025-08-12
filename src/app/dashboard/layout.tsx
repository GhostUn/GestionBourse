'use client'

import Navbar from '@/component/navbar'
import Sidebar from '@/component/Siderbar'
import { useUser } from '../context/useContext'
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { user } = useUser()
  return (
     <div className="container-fluid">
              <div className="row">
                  <Navbar/>
              </div>
          <div className="row vh-100">
            <div className="col-12 col-md-3 p-0">
              <Sidebar role={user?.role ?? "etudiant"} />
            </div>
            <div className="col-12 col-md-9 p-4">
              {children}
            </div>
          </div>
        </div>
  )
}

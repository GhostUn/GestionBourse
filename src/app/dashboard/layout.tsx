import Navbar from '@/component/navbar'
import Sidebar from '@/component/Siderbar'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
     <div className="container-fluid">
              <div className="row">
                  <Navbar/>
              </div>
          <div className="row vh-100">
            <div className="col-12 col-md-3 p-0">
              <Sidebar role={"etudiant"} />
            </div>
            <div className="col-12 col-md-9 p-4">
              {children}
            </div>
          </div>
        </div>
  )
}

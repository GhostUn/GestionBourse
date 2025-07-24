
import Sidebar from '@/component/Siderbar'


export default function BourseLayout({ children }: { children: React.ReactNode }) {
  return (
    
     <div className="container-fluid">
          <div className="row vh-100">
            <div className="col-12 col-md-3 p-0">
             <Sidebar role="etudiant"/>
            </div>
            
              <div className="col-12 col-md-9 p-4">
                <div className="row">
                  
                  <div className="col-12 col-md-12 p-0">
                    {children}
                  </div>
              </div>
          </div>
          
          </div>
        </div>
  )
}

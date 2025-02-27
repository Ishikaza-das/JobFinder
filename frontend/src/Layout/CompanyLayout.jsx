import { Outlet } from "react-router-dom"
import CompanyNavbar from "../Pages/components/CompanyNavbar"

const CompanyLayout = () => {
  return (
    <div className="flex">
      <CompanyNavbar/>
      <div className="flex-1">
        <Outlet/>
      </div>
    </div>
  )
}

export default CompanyLayout

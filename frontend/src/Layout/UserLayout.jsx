import { Outlet } from "react-router-dom"
import Navbar from "../Pages/components/Navbar"

const UserLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar className="flex-shrink-0" /> 
      <div className="flex-1 overflow-y-auto"> 
        <Outlet/>
      </div>
    </div>
  )
}

export default UserLayout

import { Outlet } from "react-router-dom"
import Navbar from "../Pages/components/Navbar"

const UserLayout = () => {
  return (
    <div className="flex flex-col">
    <Navbar/>
    <div className="flex-1">
      <Outlet/>
    </div>
  </div>
  )
}

export default UserLayout

import { Outlet } from "react-router-dom"
import Navbar from "../Pages/components/Navbar"

const UserLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <div className="flex-1 pt-24">
        <Outlet/>
      </div>
    </div>
  )
}

export default UserLayout
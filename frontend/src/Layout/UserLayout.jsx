import { Outlet } from "react-router-dom"
import Navbar from "../Pages/components/Navbar"

const UserLayout = () => {
  return (
    <div className="bg-gray-50 flex flex-col h-screen">
      <Navbar />
        <div className="flex-1 overflow-y-auto"><Outlet /></div>
    </div>
  )
}

export default UserLayout
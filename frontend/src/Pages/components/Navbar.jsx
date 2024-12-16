import { useState } from "react"
import Navlist from "../store/NavbarList"
import userSvg from '../../assets/user-circle-svgrepo-com.svg'
import UserCard from "../../User/components/UserCard";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('Dashboard');
  return (
    <>
    <div className="bg-gray-300/20 h-24 border-b-2 border-b-gray-500/40 grid grid-flow-col items-center justify-between">
    <div>
        <h1 className="px-4 text-4xl font-serif">JobFinder</h1>
    </div>
    <div className="flex gap-6">
        {Navlist.map((item, index) =>(
          <div key={index} onClick={() => setActiveItem(item)} className={`cursor-pointer text-xl font-serif transition-colors
            ${activeItem === item ? 'text-blue-600' : 'hover:text-blue-600'}`}>{item}</div>
        ))}
    </div>
    <div className="px-4 relative group">
          <div className="rounded-full h-14 w-14 overflow-hidden cursor-pointer">
            <img className='object-cover h-full w-full' src={userSvg} alt="user"/>
          </div>
          <div className="hidden group-hover:block absolute right-1 w-48 h-36 bg-gray-50 shadow-lg rounded-md px-2">
            <UserCard />
          </div>
        </div>
    </div>
    </>
  )
}

export default Navbar

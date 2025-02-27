import { useState } from "react"
import Cnavlist from "../store/CompanyNavbarList";
import { Link } from "react-router-dom";

const CompanyNavbar = () => {

  const [activeItem, setActiveItem] = useState(location.pathname);

  return (
    <>
    <div className='flex flex-col bg-blue-600 h-screen w-[20rem]'>
        <h1 className='text-2xl font-bold text-white px-14 py-4'>Company Name</h1>
        <div className='flex flex-col items-center py-16 text-white text-lg font-bold gap-6'>
            {Cnavlist.map((item,index) => (
              <Link to={item.path} key={index} onClick={() => setActiveItem(item.path)} className={`
                cursor-pointer ${activeItem === item.path ? 'text-red-400' : 'hover:text-red-700'}
                `}>{item.name}</Link>
            ))}
        </div>
    </div>
    </>
  )
}

export default CompanyNavbar

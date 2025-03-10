import { useState } from "react"
import Cnavlist from "../store/CompanyNavbarList";
import { Link } from "react-router-dom";

const CompanyNavbar = () => {

  const [activeItem, setActiveItem] = useState(location.pathname);

  return (
    <>
    <div className='flex flex-col bg-blue-600 h-screen w-[20rem]'>
    <h1 className='text-2xl font-bold text-white px-14 py-6 border-b border-blue-500'>Company Name</h1>
    <div className='flex flex-col w-full py-8 text-white text-lg font-medium'>
        {Cnavlist.map((item,index) => (
            <Link 
                to={item.path} 
                key={index} 
                onClick={() => setActiveItem(item.path)} 
                className={`
                    px-14 py-4 transition-all duration-200
                    ${activeItem === item.path 
                        ? 'bg-blue-700 border-l-4 border-white' 
                        : 'hover:bg-blue-700'}
                `}
            >
                {item.name}
            </Link>
        ))}
    </div>
</div>
    </>
  )
}

export default CompanyNavbar

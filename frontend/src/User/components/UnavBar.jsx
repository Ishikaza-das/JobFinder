
import { NavLink } from 'react-router-dom';
import userSvg from '../../assets/user-circle-svgrepo-com.svg';
import UnavList from '../store/UnavList';
import { useAuth } from '../../Auth/store/AuthContext';
import { useState } from 'react';

const UnavBar = () => {
  const {user} = useAuth();

  const [activeItem, setActiveItem] = useState(location.pathname)
  return (
    <div className="w-72 h-screen bg-white border-r border-gray-200 shadow-sm flex flex-col overflow-hidden sticky top-0">
      {/* Profile Section - with fixed height */}
      <div className="flex flex-col items-center py-4 px-4 border-b border-gray-200">
        <div className="relative h-24 w-24 mb-2">
          <div className="h-full w-full rounded-full border border-gray-300 overflow-hidden">
            <img className='object-cover h-full w-full' src={userSvg} alt="user"/>
          </div>
          <button className='absolute bottom-0 right-0 bg-blue-500 text-2xl rounded-full h-8 w-8 text-white flex items-center justify-center shadow-md hover:bg-blue-600 transition-colors'>
            <h1>+</h1>
          </button>
        </div>
        <h2 className="text-lg font-semibold text-gray-800">{user.name}</h2>
      </div>
      
      <nav className="flex overflow-y-auto py-2 px-4">
        <ul className="space-y-1">
          {UnavList.map((item, index) => (
            <li key={index}>
              <NavLink 
                onClick={() => setActiveItem(item.path)}
                to={item.path || `/hire/profile/${item.name.toLowerCase().replace(/\s+/g, '-')}`} 
                className={`block py-2 px-3 rounded-lg transition-colors
                    ${activeItem === item.path ? "bg-blue-50 text-blue-600 font-medium border-l-4 border-blue-600" : "text-gray-700 hover:bg-gray-100"}
                  }
                `}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default UnavBar;

import { useState, useEffect } from "react";
import Navlist from "../store/NavbarList";
import userSvg from '../../assets/user-circle-svgrepo-com.svg';
import UserCard from "../../User/components/UserCard";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(location.pathname);
  const [currentDateTime, setCurrentDateTime] = useState('');

  useEffect(() => {
    // Function to format local date and time
    const formatDateTime = () => {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      
      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    };

    // Set initial time
    setCurrentDateTime(formatDateTime());

    // Update time every second
    const timer = setInterval(() => {
      setCurrentDateTime(formatDateTime());
    }, 1000);

    // Cleanup interval on unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <nav className="top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="px-4">
        <div className="h-16 flex items-center justify-between">
          {/* Logo Section - Start */}
          <div className="flex-shrink-0 flex items-center space-x-3">
            <div className="w-9 h-9 bg-gradient-to-r from-blue-600 to-blue-700 
              rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-lg">JF</span>
            </div>
            <h1 className="text-3xl font-serif bg-gradient-to-r from-blue-600 to-purple-600 
            bg-clip-text text-transparent font-bold">
              JobFinder
            </h1>
          </div>

          {/* Navigation Links - Center */}
          <div className="hidden md:flex flex-1 items-center justify-center px-8">
            <div className="flex items-center space-x-6">
              {Navlist.map((item, index) => (
                <Link
                  to={item.path}
                  key={index}
                  onClick={() => setActiveItem(item.path)}
                  className={`relative px-2 py-1 text-base font-medium transition-all duration-300
                    group ${activeItem === item.path ? 'text-blue-600' : 'text-gray-600'}`}
                >
                  <span className="relative z-10">{item.name}</span>
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 
                    transform origin-left transition-all duration-300 rounded-full
                    ${activeItem === item.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}>
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* User Section - End */}
          <div className="flex items-center space-x-4">
            {/* Local Time Display */}
            <div className="hidden lg:flex flex-col items-end">
              <span className="text-sm font-medium text-gray-600">
                {currentDateTime}
              </span>
            </div>

            {/* User Profile */}
            <div className="relative group">
              <div className="flex items-center">
                <div className="h-9 w-9 rounded-full overflow-hidden 
                  ring-2 ring-gray-100 hover:ring-blue-200 transition-all duration-300
                  cursor-pointer transform group-hover:scale-105">
                  <img 
                    className="h-full w-full object-cover transition-transform duration-300
                      group-hover:scale-110" 
                    src={userSvg} 
                    alt="User avatar"
                  />
                </div>
              </div>

              {/* Dropdown Menu */}
              <div className="hidden group-hover:block absolute right-0 mt-2 w-64 
                origin-top-right bg-white rounded-xl shadow-lg border border-gray-100
                transform transition-all duration-200">
                <div className="p-4 relative">
                  <div className="absolute right-6 -top-2 w-4 h-4 bg-white 
                    transform rotate-45 border-l border-t border-gray-100"></div>
                  <UserCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
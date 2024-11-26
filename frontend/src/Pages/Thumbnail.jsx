import { useNavigate } from 'react-router-dom';
import thumbnail from './assets/Thumbnail1.png';
import thumbnail2 from './assets/Thumbnail2.png'

export default function Thumbnail() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/login');
  }  

  return (
    <>
      <div className='min-h-screen bg-blue-700 relative overflow-hidden'>
        <img 
          src={thumbnail} 
          alt="thumbnail 1" 
          className='hidden md:block absolute bottom-0 right-0 w-4/6 object-cover'
        />
        <img 
          src={thumbnail2} 
          alt="thumbnail 2" 
          className='hidden md:block absolute top-0 right-0 w-4/6 object-cover' 
        />
        
        <div className='p-4 sm:pl-10'>
          <h1 className='font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white'>JobFinder</h1>
        </div>

        <div className='p-4 sm:pl-10 pt-12 sm:pt-20 md:pt-32 lg:pt-48 font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl h-auto text-left text-white'>
          <span className='block'>Get Your</span>
          <span className='block'>Dream Job</span>
        </div>

        <button 
          onClick={handleNavigate} 
          className='bg-black text-white h-[3rem] m-4 sm:m-10 w-[9rem] rounded-3xl font-serif hover:bg-gray-800 transition-colors'
        >
          Login
        </button>
      </div>  
    </>
  )
}

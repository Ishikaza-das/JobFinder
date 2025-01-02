import { Link, useNavigate } from 'react-router-dom';
import back from '../../assets/back.svg'
import PostPanel from '../Components/PostPanel';

const CompanyLogin = () => {

  const navigate = useNavigate();

  const onBack = () =>{
    navigate('/');
  }

  return (
    <div className='flex flex-col lg:flex-row min-h-screen relative'>
        <div className='absolute top-6 left-6 sm:top-12 sm:left-12 z-10'>
          <button className='bg-black text-white h-12 w-12 rounded-full font-serif hover:bg-gray-800 transition-all duration-300 flex items-center justify-center shadow-lg hover:scale-110' onClick={onBack}>
              <img 
                  className='object-cover h-6 w-6' 
                  src={back} 
                  alt="Back"
              />
          </button>
          </div>
        {/* Left side */}
        <PostPanel/>
        {/* Right side */}
        <div className='w-full lg:w-1/2 bg-white px-4 py-6 lg:px-12'>
          <h1 className='text-black font-mono text-4xl md:text-5xl lg:text-7xl'>Welcome to Job Finder</h1>
          <p className='text-black font-mono text-sm lg:text-base font-light mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
        
          <form className='mt-8 lg:mt-14 flex flex-col space-y-8 lg:space-y-20'>
            <div className='relative'>
              <label className='text-blue-700 absolute -top-3 left-4 bg-white px-4'>E-mail</label>
                <input 
                  type="email" 
                  className='border-[0.1rem] w-full h-12 lg:h-[4rem] border-blue-700 rounded-xl px-4 focus:outline-none' 
                />
              </div>

              <div className='relative'>
                <label className='text-blue-700 absolute -top-3 left-4 bg-white px-4'>Password</label>
                <input 
                  type="password" 
                  className='border-[0.1rem] w-full h-12 lg:h-[4rem] border-blue-700 rounded-xl px-4 focus:outline-none' 
                />
              </div>
              <button className='bg-blue-700 h-12 lg:h-[5rem] w-full text-white text-xl lg:text-3xl rounded-md hover:bg-blue-800 transition-colors' type='submit'>
              Login
              </button>
            </form>
         <h1 className='my-4 text-center '>Don&apos;t have an Account ? <Link to="/post-job/signup" className="text-blue-700 hover:underline">Sign up</Link></h1>
        </div>
      </div>
  )
}

export default CompanyLogin

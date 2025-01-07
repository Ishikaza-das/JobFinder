import { Link, useNavigate } from 'react-router-dom';
import back from '../../assets/back.svg'
import PostPanel from '../Components/PostPanel';
import { useState } from 'react';
import { useToast } from '../../components/ToastContext';
import axios from 'axios';

const CompanyLogin = () => {

  const [email, setEmail ] = useState();
  const [password, setPassword ] = useState();
  const navigate = useNavigate();
  const {showToast} = useToast();

  const loginCompany = async (e) => {
    e.preventDefault();
    if(!email && !password){
      showToast('Please fill all details', 'error');
      return;
    }
    const companyData = {email,password};
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/post-job/login`,companyData,{withCredentials:true});
      showToast('Login Successfull','success');
    } catch (error) {
      console.error('Error creating account:', error.response ? error.response.data : error.message);
      showToast(error.response?.data?.message || 'Login failed', 'error');
    }
  }

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
        
          <form className='mt-8 lg:mt-14 flex flex-col space-y-8 lg:space-y-20' onSubmit={loginCompany}>
            <div className='relative'>
              <label className='text-blue-700 absolute -top-3 left-4 bg-white px-4'>E-mail</label>
                <input 
                  type="email" 
                  className='border-[0.1rem] w-full h-12 lg:h-[4rem] border-blue-700 rounded-xl px-4 focus:outline-none'
                  value={email}
                  onChange = {(e) => setEmail(e.target.value)} 
                />
              </div>

              <div className='relative'>
                <label className='text-blue-700 absolute -top-3 left-4 bg-white px-4'>Password</label>
                <input 
                  type="password" 
                  className='border-[0.1rem] w-full h-12 lg:h-[4rem] border-blue-700 rounded-xl px-4 focus:outline-none'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} 
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

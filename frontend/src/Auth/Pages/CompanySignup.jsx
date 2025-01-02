import { Link, useNavigate } from 'react-router-dom';
import PostPanel from '../Components/PostPanel';
import { useState } from 'react';
import { useToast } from '../../components/ToastContext';
import axios from 'axios';

const CompanySignup = () => {
  const [companyname, setCompanyName] = useState();
  const [name,setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const {showToast} = useToast();
  const navigate = useNavigate();

  const createCompanyAccount = async (e) =>{
    e.preventDefault();
    if(!strongPassword(password)){
      showToast('Password is not strong');
      return;
    }
    if(password !== confirmPassword){
      showToast('Password didn\'t match');
      return;
    }
    const companyData = {companyname, name, email, password};
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/post-job/signup`,companyData,{withCredentials:true});
      navigate('/post-job/details');
    } catch (error) {
      console.error('Error creating account:', error.response ? error.response.data : error.message);
      showToast(error.response?.data?.message || 'Signup failed', 'error');
    }

  }
  const strongPassword = (password) => {
    const StrongPasswordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return StrongPasswordregex.test(password);
  }
  return (
    <div className='flex flex-col lg:flex-row min-h-screen'>
      {/* Left Side */}
      <div className='w-full lg:w-1/2 bg-white px-4 py-6 lg:px-12'>
        <h1 className='text-black font-mono text-4xl md:text-5xl lg:text-7xl'>Welcome to Job Finder</h1>
        <p className='text-black font-mono text-sm lg:text-base font-light mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
        
        <form className='mt-8 lg:mt-14 flex flex-col space-y-8 lg:space-y-14' onSubmit={createCompanyAccount}>
        <div className='relative'>
            <label className='text-blue-700 absolute -top-3 left-4 bg-white px-4'>Company Name</label>
            <input 
              type="text" 
              placeholder='example' 
              className='border-[0.1rem] w-full h-12 lg:h-[4rem] border-blue-700 rounded-xl px-4 focus:outline-none'
              value={companyname}
              onChange={(e)=>setCompanyName(e.target.value)} 
            />
          </div>

          <div className='relative'>
            <label className='text-blue-700 absolute -top-3 left-4 bg-white px-4'>Name</label>
            <input 
              type="text" 
              placeholder='example' 
              className='border-[0.1rem] w-full h-12 lg:h-[4rem] border-blue-700 rounded-xl px-4 focus:outline-none'
              value={name}
              onChange={(e)=>setName(e.target.value)} 
            />
          </div>

          <div className='relative'>
            <label className='text-blue-700 absolute -top-3 left-4 bg-white px-4'>E-mail</label>
            <input 
              type="email" 
              placeholder='example@gmail.com' 
              className='border-[0.1rem] w-full h-12 lg:h-[4rem] border-blue-700 rounded-xl px-4 focus:outline-none'
              value={email}
              onChange={(e)=>setEmail(e.target.value)}  
            />
          </div>

          <div className='relative'>
            <label className='text-blue-700 absolute -top-3 left-4 bg-white px-4'>Password</label>
            <input 
              type="password" 
              placeholder='example@123' 
              className='border-[0.1rem] w-full h-12 lg:h-[4rem] border-blue-700 rounded-xl px-4 focus:outline-none' 
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>

          <div className='relative'>
            <label className='text-blue-700 absolute -top-3 left-4 bg-white px-4'>Confirm Password</label>
            <input 
              type="password" 
              placeholder='example@123' 
              className='border-[0.1rem] w-full h-12 lg:h-[4rem] border-blue-700 rounded-xl px-4 focus:outline-none' 
              value={confirmPassword}
              onChange={(e)=>setConfirmPassword(e.target.value)}
            />
          </div>

          <button className='bg-blue-700 h-12 lg:h-[5rem] w-full text-white text-xl lg:text-3xl rounded-md hover:bg-blue-800 transition-colors' type='submit'>
            Create a Account
          </button>
        </form>
         <h1 className='my-6 text-center '>Aleardy have an Account ? <Link to="/post-job/login" className="text-blue-700 hover:underline">Login</Link></h1>
      </div>
      {/* Right Side */}
      <PostPanel/>
    </div>
  )
}

export default CompanySignup

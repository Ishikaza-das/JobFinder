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
      localStorage.setItem('tempEmail',email);
      navigate('/post-job/validate');
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
    <div className='w-full lg:w-1/2 bg-white px-4 py-6 lg:px-12'>
      <h1 className='text-4xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent'>
        Start Hiring Top Talent
      </h1>
      <p className='text-gray-600 text-sm lg:text-base mt-3'>
        Join thousands of companies finding their perfect team members through Job Finder
      </p>

      <form className='mt-8 lg:mt-14 flex flex-col space-y-8 lg:space-y-14' onSubmit={createCompanyAccount}>
        <div className='relative'>
          <label className='text-blue-700 absolute -top-3 left-4 bg-white px-4'>Company Name</label>
          <input 
            type="text" 
            placeholder='Your company name' 
            className='border-2 w-full h-12 lg:h-[4rem] border-blue-700 rounded-xl px-4 focus:outline-none focus:border-blue-800'
            value={companyname}
            onChange={(e) => setCompanyName(e.target.value)} 
            required
          />
        </div>

        <div className='relative'>
          <label className='text-blue-700 absolute -top-3 left-4 bg-white px-4'>Contact Person</label>
          <input 
            type="text" 
            placeholder='Full name' 
            className='border-2 w-full h-12 lg:h-[4rem] border-blue-700 rounded-xl px-4 focus:outline-none focus:border-blue-800'
            value={name}
            onChange={(e) => setName(e.target.value)} 
            required
          />
        </div>

        <div className='relative'>
          <label className='text-blue-700 absolute -top-3 left-4 bg-white px-4'>Business Email</label>
          <input 
            type="email" 
            placeholder='company@example.com' 
            className='border-2 w-full h-12 lg:h-[4rem] border-blue-700 rounded-xl px-4 focus:outline-none focus:border-blue-800'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className='relative'>
          <label className='text-blue-700 absolute -top-3 left-4 bg-white px-4'>Password</label>
          <input 
            type="password" 
            placeholder='Min. 8 characters' 
            className='border-2 w-full h-12 lg:h-[4rem] border-blue-700 rounded-xl px-4 focus:outline-none focus:border-blue-800'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className='relative'>
          <label className='text-blue-700 absolute -top-3 left-4 bg-white px-4'>Confirm Password</label>
          <input 
            type="password" 
            placeholder='Re-enter password' 
            className='border-2 w-full h-12 lg:h-[4rem] border-blue-700 rounded-xl px-4 focus:outline-none focus:border-blue-800'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <button 
          className='bg-blue-700 h-12 lg:h-[4rem] w-full text-white text-xl font-semibold rounded-xl hover:bg-blue-800 transition-colors transform hover:scale-[1.01] active:scale-[0.99]' 
          type='submit'
        >
          Create Account
        </button>
      </form>
      <h2 className='my-6 text-center text-gray-600'>
        Already have an account? <Link to="/post-job/login" className="text-blue-600 font-medium hover:text-blue-700 transition-colors">Sign in</Link>
      </h2>
    </div>

    <PostPanel />
  </div>
  )
}

export default CompanySignup ;
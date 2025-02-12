import { Link, useNavigate } from 'react-router-dom';
import back from '../../assets/back.svg'
import PostPanel from '../Components/PostPanel';
import { useState } from 'react';
import { useToast } from '../../components/ToastContext';
import { useCompanyAuth } from '../store/CompanyAuthContex';
import axios from 'axios';

const CompanyLogin = () => {

  const [email, setEmail ] = useState();
  const [password, setPassword ] = useState();
  const navigate = useNavigate();
  const {showToast} = useToast();
  const {setCompany} = useCompanyAuth();

  const loginCompany = async (e) => {
    e.preventDefault();
    if(!email && !password){
      showToast('Please fill all details', 'error');
      return;
    }
    const companyData = {email,password};
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/post-job/login`,companyData,{withCredentials:true});
      if (response.data.companyId) {
        const companyResponse = await axios.get(
          `${import.meta.env.VITE_API_URL}/company/companies${response.data.companyId}`,
          {withCredentials: true},
        );
        console.log(companyResponse.data.company);
        setCompany(companyResponse.data.company);
        showToast('Login Successful', 'success');
        // navigate('/company/dashboard');
      }
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
      <button 
        className='bg-blue-700 text-white h-12 w-12 rounded-full hover:bg-blue-800 transition-all duration-300 flex items-center justify-center shadow-lg hover:scale-110' 
        onClick={onBack}
      >
        <img className='object-cover h-6 w-6' src={back} alt="Back" />
      </button>
    </div>

    <PostPanel />

    <div className='w-full lg:w-1/2 bg-white px-4 py-6 lg:px-12'>
      <h1 className='text-4xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent'>
        Welcome Back
      </h1>
      <p className='text-gray-600 text-sm lg:text-base mt-3'>
        Access your account to start finding the perfect candidates
      </p>

      <form className='mt-8 lg:mt-14 flex flex-col space-y-8 lg:space-y-14' onSubmit={loginCompany}>
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
            placeholder='Enter your password'
            className='border-2 w-full h-12 lg:h-[4rem] border-blue-700 rounded-xl px-4 focus:outline-none focus:border-blue-800'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
        </div>

        <button 
          className='bg-blue-700 h-12 lg:h-[4rem] w-full text-white text-xl font-semibold rounded-xl hover:bg-blue-800 transition-colors transform hover:scale-[1.01] active:scale-[0.99]' 
          type='submit'
        >
          Sign In
        </button>
      </form>

      <div className='mt-8 space-y-4'>
        <div className='flex items-center justify-center space-x-2 text-gray-600'>
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
          </svg>
          <span>Secure login protection</span>
        </div>
      </div>

      <h2 className='my-6 text-center text-gray-600'>
        New to Job Finder? <Link to="/post-job/signup" className="text-blue-600 font-medium hover:text-blue-700 transition-colors">Create an account</Link>
      </h2>
    </div>
  </div>
  )
}

export default CompanyLogin

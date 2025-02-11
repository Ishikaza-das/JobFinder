import { useState } from 'react';
import PostPanel from '../Components/PostPanel';
import axios from 'axios';
import { useToast } from '../../components/ToastContext';
import { useNavigate } from 'react-router-dom';
import { useCompanyAuth } from '../store/CompanyAuthContex';

const ValidateEmail = () => {
  const [pin, setPin] = useState();
  const {showToast} = useToast();
  const navigate = useNavigate();
  const email = localStorage.getItem('tempEmail');
  const { checkAuthStatus } = useCompanyAuth();

  const validate = async (e) => {
    e.preventDefault();
    const valipin = {pin, email};
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/post-job/verify-email`,valipin,{ withCredentials: true });
      if (response.data.success) {
        localStorage.removeItem('tempEmail');
        showToast('Verified', 'success');
        await checkAuthStatus();
        navigate('/post-job/details');
      }
    } catch (error) {
      console.error('Error creating account:', error.response ? error.response.data : error.message);
      showToast(error.response?.data?.message || 'Signup failed', 'error');
    }
  }

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
  {/* Left Side */}
  <div className="w-full lg:w-1/2 bg-white px-8 py-12 lg:px-16 flex items-center">
    <div className="w-full max-w-md mx-auto">
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-800">
        Check your email
      </h1>
      <p className="mt-3 text-gray-600">
        We sent a verification code to your email
      </p>

      {/* Form */}
      <form className="mt-12 space-y-8" onSubmit={validate}>
        <div className="relative">
          <label className="text-blue-600 absolute -top-3 left-4 bg-white px-2 text-sm">
            Verification Code
          </label>
          <input 
            type="text" 
            maxLength="6"
            className="w-full h-14 px-4 border-2 border-blue-600 rounded-xl text-lg focus:outline-none focus:border-blue-700"
            placeholder="Enter 6-digit code"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
          />
        </div>
        <button 
          type="submit"
          className="w-full h-14 bg-blue-600 text-white rounded-xl text-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Verify Email
        </button>
      </form>
      <p className="text-center text-gray-600">
          Didn't receive the code? 
          <button className="ml-2 text-blue-600 hover:underline">
            Resend
          </button>
        </p>
    </div>
  </div>

  {/* Right Side */}
  <PostPanel />
</div>

  );
};

export default ValidateEmail;

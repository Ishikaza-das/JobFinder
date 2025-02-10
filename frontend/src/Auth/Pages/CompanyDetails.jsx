import { useState } from 'react';
import PostPanel from '../Components/PostPanel';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../../components/ToastContext';
import axios from 'axios';

const CompanyDetails = () => {
  const [formData, setFormData] = useState({
    location:'',
    website:'',
    address:'',
    phone:''
  })
  const navigate = useNavigate();
  const {showToast} = useToast();

  const  handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,[name]: value
    }));
  };
  const updateDetails = async(e) =>{
    e.preventDefault();
    try {
      const response = await axios.put(`${import.meta.env.VITE_API_URL}/company/details`,formData,{ withCredentials: true }
      );
      if(response.data.success){
        showToast('Signup successful!', 'success');
        navigate('/post-job/login');
      }
    } catch (error) {
      showToast(error.response?.data?.message || 'Details failed', 'error');
      console.log("error",error.response?.data?.message);
      
    }
  }


  return (
    <div className='flex flex-col lg:flex-row min-h-screen'>
          <div className='w-full lg:w-1/2 bg-white px-4 py-6 lg:px-12'>
            <h1 className='text-4xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent'>Company Details</h1>
            <p className='text-gray-600 text-sm lg:text-base mt-3'>All details should be valid</p>
            
            <form className='mt-8 lg:mt-14 flex flex-col space-y-8 lg:space-y-14' onSubmit={updateDetails} type='submit'>
            <div className='relative'>
                <label className='text-blue-700 absolute -top-3 left-4 bg-white px-4'>Location</label>
                <input 
                  type="text" 
                  placeholder='example'
                  name='location'
                  value={formData.location} 
                  onChange={ handleInputChange}
                  className='border-2 w-full h-12 lg:h-[4rem] border-blue-700 rounded-xl px-4 focus:outline-none focus:border-blue-800'
                />
              </div>
    
              <div className='relative'>
                <label className='text-blue-700 absolute -top-3 left-4 bg-white px-4'>Website Link</label>
                <input 
                  type="text" 
                  placeholder='https://www.abc.com/'
                  name='website'
                  value={formData.website}
                  onChange={ handleInputChange} 
                  className='border-2 w-full h-12 lg:h-[4rem] border-blue-700 rounded-xl px-4 focus:outline-none focus:border-blue-800'
                />
              </div>
    
              <div className='relative'>
                <label className='text-blue-700 absolute -top-3 left-4 bg-white px-4'>Address</label>
                <input 
                  type="text" 
                  placeholder='exapmle st' 
                  name='address'
                  value={formData.address}
                  onChange={ handleInputChange}
                  className='border-2 w-full h-12 lg:h-[4rem] border-blue-700 rounded-xl px-4 focus:outline-none focus:border-blue-800' 
                />
              </div>
    
              <div className='relative'>
                <label className='text-blue-700 absolute -top-3 left-4 bg-white px-4'>Phone Number</label>
                <input 
                  type="text" 
                  placeholder='1234567890'
                  name='phone'
                  value={formData.phone}
                  onChange={ handleInputChange} 
                  className='border-2 w-full h-12 lg:h-[4rem] border-blue-700 rounded-xl px-4 focus:outline-none focus:border-blue-800' 
                />
              </div>
    
              <button className='bg-blue-700 h-12 lg:h-[4rem] w-full text-white text-xl font-semibold rounded-xl hover:bg-blue-800 transition-colors transform hover:scale-[1.01] active:scale-[0.99]' type='submit'>
                Continue
              </button>
            </form>
          </div>
          {/* Right Side */}
          <PostPanel/>
        </div>
  )
}

export default CompanyDetails

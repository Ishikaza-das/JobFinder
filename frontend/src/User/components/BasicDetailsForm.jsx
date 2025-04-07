import { useState, useEffect } from "react"
import axios from 'axios'; 

const BasicDetailsForm = ({onClose}) => {
  const initialState = {
    dob:'',
    gender:'',
    currentCollege:'',
    summary:'',
    presentaddress:'',
    permanentaddress:''
  }
  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/profile/info/:id`, {
          withCredentials: true
        });
        
        if (response.data.details) {
          const details = response.data.details;
          setFormData({
            dob: details.dob ? new Date(details.dob).toISOString().split('T')[0] : '',
            gender: details.gender || '',
            currentCollege: details.currentCollege || '',
            summary: details.summary || '',
            presentaddress: details.presentaddress || '',
            permanentaddress: details.permanentaddress || ''
          });
        }
      } catch (err) {
        setError('Failed to fetch user details');
        console.error('Error fetching user details:', err);
      }
    };

    fetchUserDetails();
  }, []);

  const updateUserProfile = async(e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await axios.put(`${import.meta.env.VITE_API_URL}/profile/update/:id`, formData, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json'
        }
      });
      onClose(); 
    } catch (error) {
      setError(error.response?.data?.message || 'Failed to update profile');
      console.error('Error updating profile:', error);
    } finally {
      setLoading(false);
    }
  }

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }

  return (
    <div className='relative max-w-3xl w-full mx-4 md:mx-auto'>
      <form className="bg-white rounded-xl shadow-xl p-6 md:p-8" onSubmit={updateUserProfile}>
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-gray-800">Edit Basic Details</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Date of Birth</label>
            <input 
              type="date" 
              className="w-full border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-700" 
              name="dob" 
              value={formData.dob} 
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Gender</label>
            <div className='flex gap-9'>
              <label className='flex items-center'>
                <input 
                  type="radio" 
                  className='mr-2 h-4 text-blue-600 focus:ring-blue-500' 
                  value="Male" 
                  name='gender' 
                  checked={formData.gender === 'Male'} 
                  onChange={handleInputChange}
                />
                <span>Male</span>
              </label>
              <label className='flex items-center'>
                <input 
                  type="radio" 
                  className='mr-2 h-4 text-blue-600 focus:ring-blue-500' 
                  value="Female" 
                  name='gender' 
                  checked={formData.gender === 'Female'} 
                  onChange={handleInputChange}
                />
                <span>Female</span>
              </label>
            </div>
          </div>
          <div className="md:col-span-2">
            <label className="block text-gray-700 font-semibold mb-2">Current College</label>
            <input 
              type="text" 
              className="w-full border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-700" 
              name="currentCollege" 
              value={formData.currentCollege} 
              onChange={handleInputChange}
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-gray-700 font-semibold mb-2">Summary</label>
            <textarea 
              className="w-full border-2 border-gray-300 rounded-lg p-3 h-32 focus:outline-none focus:border-blue-700" 
              name="summary" 
              value={formData.summary} 
              onChange={handleInputChange}
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-gray-700 font-semibold mb-2">Present Address</label>
            <input 
              type="text" 
              className="w-full border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-700" 
              name="presentaddress" 
              value={formData.presentaddress} 
              onChange={handleInputChange}
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-gray-700 font-semibold mb-2">Permanent Address</label>
            <input 
              type="text" 
              className="w-full border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-700" 
              name="permanentaddress" 
              value={formData.permanentaddress} 
              onChange={handleInputChange}
            />
          </div>
        </div>
        
        <div className="mt-8 flex gap-4">
          <button 
            type="button" 
            onClick={onClose}
            className="w-1/2 bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
            disabled={loading}
          >
            Cancel
          </button>
          <button 
            type="submit" 
            className="w-1/2 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-blue-400"
            disabled={loading}
          >
            {loading ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default BasicDetailsForm
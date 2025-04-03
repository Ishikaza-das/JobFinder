import React from 'react'

const BasicDetailsForm = ({onClose}) => {
    return (
        <div className='relative max-w-3xl w-full mx-4 md:mx-auto'>
          <form className="bg-white rounded-xl shadow-xl p-6 md:p-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-800">Edit Basic Details</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                <input type="text" className="w-full border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-700"/>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Date of Birth</label>
                <input type="date" className="w-full border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-700" placeholder="e.g Engineering"/>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Gender</label>
                <div className='flex gap-9'>
                    <label className='flex items-center'>
                        <input type="radio" className='mr-2 h-4 text-blue-600 focus:ring-blue-500' value="Male" name='gender'/>
                        <span>Male</span>
                    </label>
                    <label className='flex items-center'>
                        <input type="radio" className='mr-2 h-4 text-blue-600 focus:ring-blue-500' value="Female" name='gender'/>
                        <span>Female</span>
                    </label>
                </div>
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-700 font-semibold mb-2">Current College</label>
                <input type="text" className="w-full border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-700"/>
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-700 font-semibold mb-2">Summary</label>
                <textarea className="w-full border-2 border-gray-300 rounded-lg p-3 h-32 focus:outline-none focus:border-blue-700" placeholder="Describe the role, responsibilities, and requirements..."/>
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-700 font-semibold mb-2">Present Address</label>
                <input type="text" className="w-full border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-700"/>
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-700 font-semibold mb-2">Permanent Address</label>
                <input type="text" className="w-full border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-700"/>
              </div>
            </div>
            
            <div className="mt-8 flex gap-4">
              <button 
                type="button" 
                onClick={onClose}
                className="w-1/2 bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
              <button 
                type="submit" 
                className="w-1/2 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      )
    }

export default BasicDetailsForm

import { useEffect, useState } from "react"
import BasicDetailsForm from "../components/BasicDetailsForm";
import axios from "axios";

const BasicDetails = () => {

  const [showModel, setShowModel] = useState(false);
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const userDetails = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/profile/info/:id`,{withCredentials: true});
        setDetails(response.data.details);
      } catch (error) {
        console.log(error);
      }
    };
    const debounce = setTimeout(() => {
      userDetails();
    }, 500);
    return () => clearTimeout(debounce);
  },[]);

  return (
    <div className="h-[calc(100vh-80px)] flex flex-col p-4 container mx-auto overflow-y-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Basic Details</h2>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center gap-2 transition-colors" onClick={() => setShowModel(true)}>
          Edit
        </button>
        {showModel && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <BasicDetailsForm onClose={() => {setShowModel(false)}}/>
          </div>
        )}
      </div>
      
      <div className="p-6 mb-6">
        <h2 className="text-xl md:text-2xl font-medium text-gray-700 border-b-2 border-b-gray-300 pb-2 mb-6">
          About
        </h2>
        
        <div className="grid grid-cols-1 gap-y-6 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center">
            <label className="block text-gray-600 font-semibold text-lg w-full sm:w-1/3">Full Name:</label>
            <span className="block text-gray-800 font-medium text-lg mt-1 sm:mt-0">{details?.username}</span>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center">
            <label className="block text-gray-600 font-semibold text-lg w-full sm:w-1/3">Date of Birth:</label>
            <span className="block text-gray-800 font-medium text-lg mt-1 sm:mt-0">{details?.dob}</span>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center">
            <label className="block text-gray-600 font-semibold text-lg w-full sm:w-1/3">Gender:</label>
            <span className="block text-gray-800 font-medium text-lg mt-1 sm:mt-0">{details?.gender}</span>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center">
            <label className="block text-gray-600 font-semibold text-lg w-full sm:w-1/3">Current College:</label>
            <span className="block text-gray-800 font-medium text-lg mt-1 sm:mt-0">{details?.currentCollege}</span>
          </div>
        </div>
      </div>
      
      <div className="p-6 mb-6">
        <h2 className="text-xl md:text-2xl font-medium text-gray-700 border-b-2 border-b-gray-300 pb-2 mb-6">
          Summary
        </h2>
        <div className="pt-4">
          <span className="block text-gray-800 font-medium text-lg">{details?.summary}</span>
        </div>
      </div>
      
      <div className="p-6 mb-6">
        <h2 className="text-xl md:text-2xl font-medium text-gray-700 border-b-2 border-b-gray-300 pb-2 mb-6">
          Address
        </h2>
        <div className="grid grid-cols-1 gap-y-6 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center">
            <label className="block text-gray-600 font-semibold text-lg w-full sm:w-1/3">Present Address:</label>
            <span className="block text-gray-800 font-medium text-lg mt-1 sm:mt-0">{details?.presentaddress}</span>
          </div> 
          <div className="flex flex-col sm:flex-row sm:items-center">
            <label className="block text-gray-600 font-semibold text-lg w-full sm:w-1/3">Permanent Address:</label>
            <span className="block text-gray-800 font-medium text-lg mt-1 sm:mt-0">{details?.permanentaddress}</span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default BasicDetails

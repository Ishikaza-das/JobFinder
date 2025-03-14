import { useEffect, useState } from "react"
import axios from "axios";

const JobList = () => {

  const [result, setResult] = useState([]);

  useEffect(() => {
    const resultJobs = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/openings/jobs`,{withCredentials:true});
        setResult(response.data.jobs);
        console.log(response.data.jobs);
      } catch (error) {
        console.log(error);
      }
    }
    const debounce = setTimeout(() => {
      resultJobs();
    },500);
    return () => clearTimeout(debounce);
  },[]);


  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Available Positions</h2>
      
      {result && result.length > 0 ? (
        <div className="space-y-4">
          {result.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300 bg-white">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-blue-600">{item.jobtitle}</h3>
                  <div className="mt-2 text-gray-600">
                    <p className="flex items-center gap-1">
                      <span className="font-medium">Company:</span> {item.companyname}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {item.openingid}
                  </span>
                  <p className="text-sm text-gray-500 mt-1">{item.department}</p>
                </div>
              </div>
              <div className="mt-3">
                <h4 className="font-medium text-gray-700">Description:</h4>
                <p className="text-gray-600 whitespace-pre-line">{item.description}</p>
              </div>
              <div className="mt-4 flex justify-end">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="mt-2 text-lg font-medium text-gray-900">No jobs available</h3>
          <p className="mt-1 text-gray-500">Check back later for new opportunities.</p>
        </div>
      )}
    </div>
  )
}

export default JobList

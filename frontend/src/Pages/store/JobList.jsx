import { useEffect, useState } from "react"
import axios from "axios";
import JobCard from "../components/JobCard";

const JobList = () => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const resultJobs = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/openings/jobs`,
          { withCredentials: true }
        );
        setResult(response.data.jobs);
        console.log(response.data.jobs);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    const debounce = setTimeout(() => {
      resultJobs();
    }, 500);

    return () => clearTimeout(debounce);
  }, []);

  return (
    <div className="p-4 h-[calc(100vh-80px)] flex flex-col overflow-hidden">
      
      <div className="flex justify-between items-center mb-4 z-10">
        <h2 className="text-2xl font-bold text-gray-800">Available Positions</h2>
        <span className="text-sm text-gray-500">
          {result.length} {result.length === 1 ? 'position' : 'positions'} available
        </span>
      </div>

      <div className="flex-1 overflow-y-auto">
        {loading ? (
          <div className="flex items-center justify-center h-full">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : result && result.length > 0 ? (
          <div className="space-y-4 pb-4">
            {result.map((item, index) => (
              <JobCard 
                key={index}
                jobtitle={item.jobtitle}
                company={item.companyname}
                openingid={item.openingid}
                department={item.department}
                description={item.description}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <h3 className="mt-2 text-lg font-medium text-gray-900">
              No jobs available
            </h3>
            <p className="mt-1 text-gray-500">
              Check back later for new opportunities.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default JobList
import { useEffect, useState } from "react"
import axios from 'axios';

const CompanyDashboard = () => {

  const [totalJob, setTotalJob] = useState({totalJobs:0});
  const fetchTotalJobs = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/openings/stats`,{ withCredentials: true });
      setTotalJob(response.data.stats)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchTotalJobs();
    const interval = setInterval(fetchTotalJobs, 5000);
    return () => clearInterval(interval);
  }, []);


  return (
    <>
     <div className="container px-2 py-8 mx-auto">
        <div className="grid grid-cols-3 gap-6 h-52">
            <div className="bg-gradient-to-br from-blue-800 to-blue-300 rounded-lg shadow-lg text-white">
              <h1 className="font-bold m-4 text-2xl">Total Job Posted</h1>
              <span className="font-semibold m-4 text-2xl">{totalJob.totalJobs}</span>
            </div>
            {/* Application viewed */}
            <div className="bg-gradient-to-br from-blue-800 to-blue-300 rounded-lg shadow-lg text-white">
              <h1 className="font-bold m-4 text-2xl">Application viewed</h1>
              <span className="font-semibold m-4 text-2xl">Count</span>
            </div>
            {/* Application Recived */}
            <div className="bg-gradient-to-br from-blue-800 to-blue-300 rounded-lg shadow-lg text-white">
              <h1 className="font-bold m-4 text-2xl">Application Recived</h1>
              <span className="font-semibold m-4 text-2xl">Count</span>
            </div>
        </div>
      </div> 
    </>
  )
}

export default CompanyDashboard

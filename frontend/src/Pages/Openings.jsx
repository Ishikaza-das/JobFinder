import axios from "axios";
import { useState } from "react"
import { useToast } from '../components/ToastContext';

const Openings = () => {
  const initialState = ({
    jobtitle:'',
    department:'',
    location:'',
    experience:'',
    salary:'',
    description:'',
    skill:'',
  })
  const {showToast} = useToast();
  const [formData, setFormData] = useState({initialState});

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData(prev => ({
      ...prev,[name]:value
    }));
  }

  const createOpenings = async(e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/openings/createop`,formData,{ withCredentials: true });
      showToast('Opening Created', 'success')
      setFormData(initialState);
    } catch (error) {
      showToast(error.response?.data?.message || 'Opening failed', 'error');
      console.log(error);
    }
  }

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl bg-white font-bold text-slate-600 mb-8">Post a New Job Openings</h1>
        <form className=" max-w-3xl bg-white rounded-xl shadow-xl p-8" onSubmit={createOpenings}>

          <div className="grid grid-cols-1 gap-6">

            <div className="col-span-2">
              <label className="block text-gray-700 font-semibold mb-2">Job Title</label>
              <input type="text" className="w-full border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-700" placeholder="e.g Senior Software Engineer"value={formData.jobtitle} name="jobtitle" onChange={handleInputChange}/>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Department</label>
              <input type="text" className="w-full border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-700" placeholder="e.g Engineering" value={formData.department} name="department" onChange={handleInputChange}/>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Location</label>
              <input type="text" className="w-full border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-700" placeholder="e.g Bangalore" value={formData.location} name="location" onChange={handleInputChange}/>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Experience Required</label>
              <input type="text" className="w-full border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-700" placeholder="e.g 3-5 years"value={formData.experience} name="experience" onChange={handleInputChange}/>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Salary Range</label>
              <input type="text" className="w-full border-2 border-gray-300 rounded-lg p-3 focus:outline-none focus:border-blue-700" placeholder="e.g 800000"value={formData.salary} name="salary" onChange={handleInputChange}/>
            </div>

            <div className="col-span-2">
              <label className="block text-gray-700 font-semibold mb-2">Job Description</label>
              <textarea className="w-full border-2 border-gray-300 rounded-lg p-3 h-32 focus:outline-none focus:border-blue-700" placeholder="Describe the role, responsibilities, and requirements..."value={formData.description} name="description" onChange={handleInputChange}/>
            </div>

            <div className="col-span-2">
              <label className="block text-gray-700 font-semibold mb-2">Required Skills</label>
              <textarea className="w-full border-2 border-gray-300 rounded-lg p-3 h-24 focus:outline-none focus:border-blue-700" placeholder="List the required skills, separated by commas..."value={formData.skill} name="skill" onChange={handleInputChange}/>
            </div>
          </div>

          <div className="mt-8">
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">Post Job Openings</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Openings

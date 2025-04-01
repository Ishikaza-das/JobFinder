
import DashboardImg from '../assets/DashboardImg.svg';
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const JobNV = () =>{
    navigate('/hire/jobs');
  }
  
  return (
    <>
      <div className='bg-gray-100 h-96 flex justify-between '>
        <div className="text-black font-serif px-40">
          <h1 className='py-6 text-6xl'>Find Your Dream Job</h1>
          <h1 className='py-5 text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </h1>
          <button className='bg-blue-600 my-9 h-12 w-48 text-white rounded-lg' onClick={JobNV}>Apply for Job</button>
        </div>
        <img src={DashboardImg} className='h-full object-contain'/>
      </div>
      <div>
        User Apply Job
      </div>
    </>
  )
}

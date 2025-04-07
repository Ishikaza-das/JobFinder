import DashboardImg from '../assets/DashboardImg.svg';
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const JobNV = () =>{
    navigate('/hire/jobs');
  }
  
  return (
    <>
      <div className='bg-gray-100 h-auto md:h-96 flex flex-col md:flex-row justify-between items-center md:items-start p-4 md:p-0'>
        <div className="text-black font-serif md:px-40">
          <h1 className='py-6 text-4xl md:text-6xl text-center md:text-left'>Find Your Dream Job</h1>
          {/* <h2 className='py-5 text-lg md:text-2xl text-center md:text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </h2> */}
          <div className="flex justify-center md:justify-start">
            <button className='bg-blue-600 my-9 h-12 w-48 text-white rounded-lg' onClick={JobNV}>Apply for Job</button>
          </div>
        </div>
        <img src={DashboardImg} className='h-64 md:h-full object-contain w-full md:w-auto'/>
      </div>
      <div className="text-center md:text-left">
        User Apply Job
      </div>
    </>
  )
}
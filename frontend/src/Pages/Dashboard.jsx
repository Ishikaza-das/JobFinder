import Navbar from "./components/Navbar"
import DashboardImg from '../assets/DashboardImg.svg';

export default function Dashboard() {
  return (
    <>
      <Navbar/>
      <div className='bg-gray-100 h-96 flex justify-between '>
        <div className="text-black font-serif px-40">
          <h1 className='py-6 text-6xl'>Find Your Dream Job</h1>
          <h1 className='py-5 text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </h1>
          <button className='bg-blue-600 my-9 h-12 w-48 text-white rounded-lg'>Apply for Job</button>
        </div>
        <img src={DashboardImg} className='h-full object-contain'/>
      </div>
      <div>
        User Apply Job
      </div>
    </>
  )
}

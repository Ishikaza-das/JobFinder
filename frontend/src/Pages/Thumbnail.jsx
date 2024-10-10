// import React from 'react'
import { useNavigate } from 'react-router-dom';
import thumbnail from './assets/Thumbnail1.png';
import thumbnail2 from './assets/Thumbnail2.png'

export default function Thumbnail() {
  const navigate = useNavigate();

  const  handleNavigate = () => {
    navigate('/login');
  }  
  return (
    <>
    <div className='h-screen bg-blue-700 relative overflow-hidden'>
      <img src={thumbnail} alt="" className='absolute bottom-0 right-0 w-4/6 object-cover'/>
      <img src={thumbnail2} alt="" className='absolute top-0 right-0 w-4/6 object-cover' />
      <div className='pl-10'>
        <h1 className='font-serif text-6xl text-white'>JobFinder</h1>
      </div>
      <div className='pl-10 pt-48 font-serif text-9xl h-auto text-left text-white'>
        <span className='block'>Get Your</span>
        <span className='block'>Dream Job</span>
      </div>
      <button onClick={handleNavigate} className='bg-black text-white h-[3rem] m-10 w-[9rem] rounded-3xl font-serif'>Signup</button>
    </div>  
    </>
  )
}
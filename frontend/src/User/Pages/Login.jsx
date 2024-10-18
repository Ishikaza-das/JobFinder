import React, { useState } from 'react'
import globalimg from '../../assets/globalpersonimg.png'

const Login = () => {
  const [email, SetEmail] = useState();
  const [password, SetPassword] = useState();
  const [confirmPassword, SetConfirmPassword] = useState();

  const ctrateAccount = (e) =>{
    e.preventDefault();
    if(!strongPassword(password)){
      alert('Password is not strong');
    }
    if(password !== confirmPassword){
      alert('Password didn \'t match');

    }
    console.log(email);
    console.log(password);
    
  }

  const strongPassword = (password) => {
    const  StrongPasswordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return StrongPasswordregex.test(password);
  }
  return (
    <>
    <div className='flex'>
      {/* Left */}
      <div  className='w-1/2 h-screen bg-white'>
        <h1 className='text-black font-mono text-7xl pl-12 pt-10'>Welcome to Job Finder</h1>
        <p className='text-black font-mono text-base font-light pl-12 pt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
        <form action=""  className='pl-12 mt-14 flex flex-col relative space-y-20' onSubmit={ctrateAccount}>
          <div className='relative'>
            <label htmlFor="" className='text-blue-700 absolute left-14 -top-3 bg-white pr-4 pl-4'>E-mail</label>
            <input type="email" placeholder='examplaem@gmail.com' className='border-[0.1rem] w-[48rem] h-[4rem] border-blue-700 rounded-xl pl-4 focus:outline-none' value={email} onChange={(e)=>SetEmail(e.target.value)}/>
          </div>
          <div className='relative'>
            <label htmlFor="" className='text-blue-700 absolute left-14 -top-3 bg-white pr-4 pl-4'>Password</label>
            <input type="password" placeholder='Example@123' className='border-[0.1rem] w-[48rem] h-[4rem] border-blue-700 rounded-xl pl-4 focus:outline-none' value={password} onChange={(e)=>SetPassword(e.target.value)}/>
          </div>
          <div className='relative'>
            <label htmlFor="" className='text-blue-700 absolute left-14 -top-3 bg-white pr-4 pl-4'>Confirm Password</label>
            <input type="password" placeholder='Example@123' className='border-[0.1rem] w-[48rem] h-[4rem] border-blue-700 rounded-xl pl-4 focus:outline-none' value={confirmPassword} onChange={(e)=>SetConfirmPassword(e.target.value)}/>
          </div>
          <button className='bg-blue-700 h-[5rem] w-[48rem] text-white text-3xl rounded-md' type='submit'>Create a Account</button>
        </form>
      </div>

      {/* Right */}
      <div className='relative bg-blue-700 h-screen w-1/2'>
        <div className='bg-cyan-500 rounded-full w-20 h-20 ml-20 mt-40 flex justify-center'>
          <p className='font-mono text-9xl text-blue-700 absolute'>&quot;</p>
        </div>
        <div className='h-fit border-l-2 border-white ml-[7rem]'>
          <span className='block text-9xl text-white pl-6'>MAKE A</span>
          <span className='block text-9xl text-white pl-6'>DREAM</span>
          <hr className='w-36 opacity-50 mt-8'/>
          <p className='text-white font-mono ml-40 text-2xl text-balance'>&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate &quot;</p>
          <div className='flex rounded-full h-20 w-20 ml-60 mt-10 overflow-hidden'>
            <img className='object-cover h-full w-full' src={globalimg} alt="" />
            <span className='absolute text-white ml-24 text-2xl font-mono'>&quot;Ratan Tata&quot;</span>
            <span className='absolute text-white ml-28 mt-8 text-xl font-mono text font-light'>Founder</span>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login

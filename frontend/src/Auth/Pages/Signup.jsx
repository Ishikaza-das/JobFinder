import { useState } from 'react'
import axios from 'axios';
import Panel from '../Components/Panel';
import { Link, useNavigate} from 'react-router-dom'


const Signup = () => {
  const [name, setName] = useState('');
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');
  const [confirmPassword, SetConfirmPassword] = useState('');
  const navigate = useNavigate();

  const ctrateAccount = async (e) => {
    e.preventDefault();
    if(!strongPassword(password)){
      alert('Password is not strong');
      return;
    }
    if(password !== confirmPassword){
      alert('Password didn\'t match');
      return;
    }

    const userData = { name, email, password};
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/job/signup`, userData,{withCredentials:true});
      // console.log(response.data);
      navigate('/login');
    } catch (error) {
      console.error('Error creating account:', error.response ? error.response.data : error.message);
      alert('Error creating account. Please try again.');
    }
  }

  const strongPassword = (password) => {
    const StrongPasswordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return StrongPasswordregex.test(password);
  }

  return (
    <div className='flex flex-col lg:flex-row min-h-screen'>
      {/* Left Side */}
      <div className='w-full lg:w-1/2 bg-white px-4 py-6 lg:px-12'>
        <h1 className='text-black font-mono text-4xl md:text-5xl lg:text-7xl'>Welcome to Job Finder</h1>
        <p className='text-black font-mono text-sm lg:text-base font-light mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
        
        <form className='mt-8 lg:mt-14 flex flex-col space-y-8 lg:space-y-14' onSubmit={ctrateAccount}>
          <div className='relative'>
            <label className='text-blue-700 absolute -top-3 left-4 bg-white px-4'>Name</label>
            <input 
              type="text" 
              placeholder='example' 
              className='border-[0.1rem] w-full h-12 lg:h-[4rem] border-blue-700 rounded-xl px-4 focus:outline-none' 
              value={name} 
              onChange={(e)=>setName(e.target.value)}
            />
          </div>

          <div className='relative'>
            <label className='text-blue-700 absolute -top-3 left-4 bg-white px-4'>E-mail</label>
            <input 
              type="email" 
              placeholder='example@gmail.com' 
              className='border-[0.1rem] w-full h-12 lg:h-[4rem] border-blue-700 rounded-xl px-4 focus:outline-none' 
              value={email} 
              onChange={(e)=>SetEmail(e.target.value)}
            />
          </div>

          <div className='relative'>
            <label className='text-blue-700 absolute -top-3 left-4 bg-white px-4'>Password</label>
            <input 
              type="password" 
              placeholder='example@123' 
              className='border-[0.1rem] w-full h-12 lg:h-[4rem] border-blue-700 rounded-xl px-4 focus:outline-none' 
              value={password} 
              onChange={(e)=>SetPassword(e.target.value)}
            />
          </div>

          <div className='relative'>
            <label className='text-blue-700 absolute -top-3 left-4 bg-white px-4'>Confirm Password</label>
            <input 
              type="password" 
              placeholder='example@123' 
              className='border-[0.1rem] w-full h-12 lg:h-[4rem] border-blue-700 rounded-xl px-4 focus:outline-none' 
              value={confirmPassword} 
              onChange={(e)=>SetConfirmPassword(e.target.value)}
            />
          </div>

          <button className='bg-blue-700 h-12 lg:h-[5rem] w-full text-white text-xl lg:text-3xl rounded-md hover:bg-blue-800 transition-colors' type='submit'>
            Create a Account
          </button>
        </form>
        <div className="flex items-center my-8">
        <div className="flex-grow border-t border-black"></div>
        <span className="px-4 text-gray-500 text-2xl">Or</span>
        <div className="flex-grow border-t border-black"></div>
        </div>
        <div className="flex my-10 justify-around">
            <button className=" border border-black w-60 h-10 rounded-md hover:border-blue-800 hover:text-blue-800">Google</button>
            <button  className=" border border-black w-60 h-10 rounded-md  hover:border-blue-800 hover:text-blue-800">LinkedIn</button>
        </div>
        <h1 className='my-4 text-center '>Aleardy have an Account ? <Link to="/login" className="text-blue-700 hover:underline">Login</Link></h1>
      </div>
      {/* Right Side */}
      <Panel/>
    </div>
  )
}

export default Signup

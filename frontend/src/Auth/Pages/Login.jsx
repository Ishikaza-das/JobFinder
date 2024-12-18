import { useState } from "react";
import Panel from "../Components/Panel";
import { Link,  useNavigate} from 'react-router-dom';
import axios from "axios";
import GoogleLogin from "../Components/GoogleLogin";
import { useAuth } from "../store/AuthContext";
import { useToast } from "../../components/ToastContext";


const Login = () => {
    const { handelGoogleLogin } = GoogleLogin();
    const [email, SetEmail] = useState('');
    const [password, SetPassword] = useState('');
    const navigate = useNavigate();
    const { setUser } = useAuth();
    const { showToast } = useToast();

    const loginAccount = async(e) => {
      e.preventDefault();
      if (!email || !password) {
        alert('Please fill in all fields');
        return;
      }
      const userData = {email, password};
      try{
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/job/login`, userData,{withCredentials:true});
        if (response.data.userId) {
          const userResponse = await axios.get(
              `${import.meta.env.VITE_API_URL}/auth/users/${response.data.userId}`,
              {withCredentials: true}
          );
          setUser(userResponse.data);
          showToast('Login successful!', 'success')
          navigate('/dashboard');
      }
      }catch(error){
        console.error('Login error:', error.response?.data?.message);
        showToast(error.response?.data?.message || 'Login failed', 'error');
      }
    }
    
  return (
      <div className='flex flex-col lg:flex-row min-h-screen'>
        {/* Left side */}
        <Panel/>
        {/* Right side */}
        <div className='w-full lg:w-1/2 bg-white px-4 py-6 lg:px-12'>
          <h1 className='text-black font-mono text-4xl md:text-5xl lg:text-7xl'>Welcome to Job Finder</h1>
          <p className='text-black font-mono text-sm lg:text-base font-light mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
        
          <form className='mt-8 lg:mt-14 flex flex-col space-y-8 lg:space-y-20'  onSubmit={loginAccount}>
            <div className='relative'>
              <label className='text-blue-700 absolute -top-3 left-4 bg-white px-4'>E-mail</label>
                <input 
                  type="email" 
                  className='border-[0.1rem] w-full h-12 lg:h-[4rem] border-blue-700 rounded-xl px-4 focus:outline-none' 
                  value={email} 
                  onChange={(e)=>SetEmail(e.target.value)}
                />
              </div>

              <div className='relative'>
                <label className='text-blue-700 absolute -top-3 left-4 bg-white px-4'>Password</label>
                <input 
                  type="password" 
                  className='border-[0.1rem] w-full h-12 lg:h-[4rem] border-blue-700 rounded-xl px-4 focus:outline-none' 
                  value={password} 
                  onChange={(e)=>SetPassword(e.target.value)}
                />
              </div>
              <button className='bg-blue-700 h-12 lg:h-[5rem] w-full text-white text-xl lg:text-3xl rounded-md hover:bg-blue-800 transition-colors' type='submit'>
              Login
              </button>
            </form>

            <div className="flex items-center my-8">
              <div className="flex-grow border-t border-black"></div>
              <span className="px-4 text-gray-500 text-2xl">Or</span>
              <div className="flex-grow border-t border-black"></div>
            </div>

            <div className="flex my-10 justify-around">
              <button className=" border border-black w-60 h-10 rounded-md hover:border-blue-800 hover:text-blue-800" onClick={handelGoogleLogin}>Google</button>
              <button  className=" border border-black w-60 h-10 rounded-md  hover:border-blue-800 hover:text-blue-800">LinkedIn</button>
            </div>
         <h1 className='my-4 text-center '>Don&apos;t have an Account ? <Link to="/signup" className="text-blue-700 hover:underline">Sign up</Link></h1>
        </div>
      </div>
  )
}

export default Login
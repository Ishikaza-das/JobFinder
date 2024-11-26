import globalimg from '../../assets/globalpersonimg.png'

export default function Panel() {
  return (
    <>
      <div className='relative bg-blue-700 w-full lg:w-1/2 py-10 lg:py-0'>
        <div className='bg-cyan-500 rounded-full w-16 h-16 lg:w-20 lg:h-20 mx-auto lg:ml-20 lg:mt-40 flex justify-center'>
          <p className='font-mono text-7xl lg:text-9xl text-blue-700'>&quot;</p>
        </div>

        <div className='h-fit border-l-2 border-white mx-4 lg:ml-[7rem] mt-8 lg:mt-0'>
          <span className='block text-5xl lg:text-9xl text-white pl-6'>MAKE A</span>
          <span className='block text-5xl lg:text-9xl text-white pl-6'>DREAM</span>
          <hr className='w-36 opacity-50 mt-8'/>
          
          <p className='text-white font-mono text-lg lg:text-2xl px-6 lg:ml-40 mt-6 lg:mt-0'>
            &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate &quot;
          </p>

          <div className='flex items-center mt-8 lg:mt-10 pl-6 lg:pl-60'>
            <div className='rounded-full h-16 w-16 lg:h-20 lg:w-20 overflow-hidden'>
              <img className='object-cover h-full w-full' src={globalimg} alt="Ratan Tata" />
            </div>
            <div className='ml-4 lg:ml-6'>
              <p className='text-white text-xl lg:text-2xl font-mono'>&quot;Ratan Tata&quot;</p>
              <p className='text-white text-lg lg:text-xl font-mono font-light'>Founder</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

import Navbar from "../../Pages/components/Navbar"
import userSvg from '../../assets/user-circle-svgrepo-com.svg'

const Profile = () => {
  return (
    <>
        <Navbar/>
        <div className='container flex flex-row my-10 mx-auto px-10 gap-20'>
        <div className="relative h-60 w-60">
            <div className="h-full w-full rounded-full border border-gray-400 overflow-hidden">
                <img className='object-cover h-full w-full' src={userSvg} alt="user"/>
            </div>
            <button className='absolute bottom-0 right-0 bg-blue-400 text-5xl rounded-full h-16 w-16 text-white flex items-center justify-center'>
                <h1>+</h1>
            </button>
        </div>

            <form className="flex-1 max-w-4xl">
                <div className="grid grid-cols-2 gap-x-8">
                    <div className="p-5 flex flex-col">
                        <label className="text-2xl font-serif">Name</label>
                        <input type="text" className="border border-b-gray-400 border-white focus:outline-none font-serif text-xl py-2 focus:border-b-blue-400 w-full"/>
                    </div>
                    <div className="p-5 flex flex-col">
                        <label className="text-2xl font-serif">Email</label>
                        <input type="text" className="border border-b-gray-400 border-white focus:outline-none font-serif text-xl py-2 focus:border-b-blue-400 w-full"/>
                    </div>
                    <div className="p-5 flex flex-col">
                        <label className="text-2xl font-serif">Phone Number</label>
                        <div className="flex flex-row gap-3">
                            <input type="text" className="border border-b-gray-400 border-white focus:outline-none font-serif text-xl py-2 focus:border-b-blue-400 w-16"/>
                            <input type="text" className="border border-b-gray-400 border-white focus:outline-none font-serif text-xl py-2 focus:border-b-blue-400 flex-1"/>
                        </div>
                    </div>
                    <div className="p-5 flex flex-col">
                        <label className="text-2xl font-serif">Address</label>
                        <input type="text" className="border border-b-gray-400 border-white focus:outline-none font-serif text-xl py-2 focus:border-b-blue-400 w-full"/>
                    </div>
                    <div className="p-5 flex flex-col">
                        <label className="text-2xl font-serif">Country</label>
                        <input type="text" className="border border-b-gray-400 border-white focus:outline-none font-serif text-xl py-2 focus:border-b-blue-400 w-full"/>
                    </div>
                    <div className="p-5 flex flex-col">
                        <label className="text-2xl font-serif">State</label>
                        <input type="text" className="border border-b-gray-400 border-white focus:outline-none font-serif text-xl py-2 focus:border-b-blue-400 w-full"/>
                    </div>
                    <div className="flex items-center my-8">
                        <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors w-60">
                            Upload Resume
                        </button>
                    </div>
                    <div className="flex items-center justify-end my-8">
                        <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors w-60">
                            Save Changes
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </>
  )
}

export default Profile

import { useState, useEffect } from 'react';
import Navbar from "../../Pages/components/Navbar";
import userSvg from '../../assets/user-circle-svgrepo-com.svg';
import { updateUserProfile } from '../api/UpdateService';
import { useToast } from '../../components/ToastContext';
import axios from 'axios';

const Profile = () => {
    const { showToast } = useToast();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        countryCode: '',
        mobileno: '',
        address: '',
        country: '',
        state: ''
    });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadUserData();
    }, []);

    const loadUserData = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/auth/check`, {
                withCredentials: true
            });
            
            const user = response.data.user;
            const phoneNumber = user.mobileno || '';
            const countryCode = phoneNumber.substring(0, 2);
            const number = phoneNumber.substring(2);

            setFormData({
                name: user.name || '',
                email: user.email || '',
                countryCode: countryCode || '',
                mobileno: number || '',
                address: user.address || '',
                country: user.country || '',
                state: user.state || ''
            });
        } catch (error) {
            showToast('Failed to load user data', 'error');
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        const userData = {
            name: formData.name.trim(),
            email: formData.email.trim(),
            mobileno: `${formData.countryCode}${formData.mobileno}`.trim(),
            address: formData.address.trim(),
            country: formData.country.trim(),
            state: formData.state.trim()
        };
        
        try {
            const response = await updateUserProfile(userData);
            showToast('Profile updated successfully', 'success');
            loadUserData();
        } catch (error) {
            showToast('Update failed', 'error');
        } finally {
            setLoading(false);
        }
    };    

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

                <form onSubmit={handleSubmit} className="flex-1 max-w-4xl">
                    <div className="grid grid-cols-2 gap-x-8">
                        <div className="p-5 flex flex-col">
                            <label className="text-2xl font-serif">Name</label>
                            <input 
                                type="text" 
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="border border-b-gray-400 border-white focus:outline-none font-serif text-xl py-2 focus:border-b-blue-400 w-full"
                            />
                        </div>

                        <div className="p-5 flex flex-col">
                            <label className="text-2xl font-serif">Email</label>
                            <input 
                                type="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="border border-b-gray-400 border-white focus:outline-none font-serif text-xl py-2 focus:border-b-blue-400 w-full"
                            />
                        </div>

                        <div className="p-5 flex flex-col">
                            <label className="text-2xl font-serif">Phone Number</label>
                            <div className="flex flex-row gap-3">
                                <div className="relative w-16">
                                    <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-xl">+</span>
                                    <input 
                                        type="text" 
                                        name="countryCode"
                                        value={formData.countryCode}
                                        onChange={handleInputChange}
                                        className="pl-6 border border-b-gray-400 border-white focus:outline-none font-serif text-xl py-2 focus:border-b-blue-400 w-full"
                                    />
                                </div>
                                <input 
                                    type="text" 
                                    name="mobileno"
                                    value={formData.mobileno}
                                    onChange={handleInputChange}
                                    className="border border-b-gray-400 border-white focus:outline-none font-serif text-xl py-2 focus:border-b-blue-400 flex-1"
                                />
                            </div>
                        </div>

                        <div className="p-5 flex flex-col">
                            <label className="text-2xl font-serif">Address</label>
                            <input 
                                type="text" 
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                                className="border border-b-gray-400 border-white focus:outline-none font-serif text-xl py-2 focus:border-b-blue-400 w-full"
                            />
                        </div>

                        <div className="p-5 flex flex-col">
                            <label className="text-2xl font-serif">Country</label>
                            <input 
                                type="text" 
                                name="country"
                                value={formData.country}
                                onChange={handleInputChange}
                                className="border border-b-gray-400 border-white focus:outline-none font-serif text-xl py-2 focus:border-b-blue-400 w-full"
                            />
                        </div>

                        <div className="p-5 flex flex-col">
                            <label className="text-2xl font-serif">State</label>
                            <input 
                                type="text" 
                                name="state"
                                value={formData.state}
                                onChange={handleInputChange}
                                className="border border-b-gray-400 border-white focus:outline-none font-serif text-xl py-2 focus:border-b-blue-400 w-full"
                            />
                        </div>

                        <div className="flex items-center my-8">
                            <button type="button" className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors w-60">
                                Upload Resume
                            </button>
                        </div>

                        <div className="flex items-center justify-end my-8">
                            <button 
                                type="submit" 
                                disabled={loading}
                                className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors w-60"
                            >
                                {loading ? 'Saving...' : 'Save Changes'}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Profile;

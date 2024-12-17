import { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuthStatus = async () => {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_API_URL}/auth/check`,
                    { withCredentials: true }
                );
                if (response.data.user) {
                    setUser(response.data.user);
                }
            } catch (error) {
                console.log('Not authenticated');
            } finally{
                setLoading(false);
            }
        };

        checkAuthStatus();
    }, []);

    if (loading) {
        return <div className="flex items-center justify-center h-screen">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
        </div>;
    }

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

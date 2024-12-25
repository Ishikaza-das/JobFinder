import { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext(null);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const checkAuthStatus = async () => {
        try {
            const response = await axios.get(
                `${import.meta.env.VITE_API_URL}/auth/check`,
                { withCredentials: true }
            );
            
            if (response.data.user) {
                setUser(response.data.user);
                return true;
            }
            setUser(null);
            return false;
        } catch (error) {
            setUser(null);
            return false;
        } finally {
            setLoading(false);
        }
    };

    // Check auth status on mount and when token changes
    useEffect(() => {
        const verifyAuth = async () => {
            await checkAuthStatus();
        };
        verifyAuth();
    }, []);

    const value = {
        user,
        setUser,
        checkAuthStatus,
        loading
    };

    return (
        <AuthContext.Provider value={value}>
            {loading ? (
                <div className="flex items-center justify-center h-screen">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
                </div>
            ) : (
                children
            )}
        </AuthContext.Provider>
    );
};

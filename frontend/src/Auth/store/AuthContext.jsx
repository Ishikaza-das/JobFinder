import { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

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
            }
        };

        checkAuthStatus();
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

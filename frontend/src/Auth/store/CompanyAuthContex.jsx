import { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const CompanyAuthContext = createContext(null);

export const useCompanyAuth = () => {
    const context = useContext(CompanyAuthContext);
    if (!context) {
        throw new Error('useCompanyAuth must be used within a CompanyAuthProvider');
    }
    return context;
};

export const CompanyAuthProvider = ({ children }) => {
    const [company, setCompany] = useState(null);
    const [loading, setLoading] = useState(true);

    const checkAuthStatus = async () => {
        try {
            const response = await axios.get(
                `${import.meta.env.VITE_API_URL}/company/check`,
                { withCredentials: true }
            );
            
            if (response.data.company) {
                setCompany(response.data.company);
                return true;
            }
            setCompany(null);
            return false;
        } catch (error) {
            setCompany(null);
            return false;
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const verifyAuth = async () => {
            await checkAuthStatus();
        };
        verifyAuth();
    }, []);

    const value = {
        company,
        setCompany,
        checkAuthStatus,
        loading
    };

    return (
        <CompanyAuthContext.Provider value={value}>
            {loading ? (
                <div className="flex items-center justify-center h-screen">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
                </div>
            ) : (
                children
            )}
        </CompanyAuthContext.Provider>
    );
};

import { Navigate } from 'react-router-dom';
import { useAuth } from '../store/AuthContext';
import { useCompanyAuth } from '../store/CompanyAuthContex';

export const ProtectedRoute = ({ children }) => {
    const { user } = useAuth();
    return user ? children : <Navigate to="/login" />;
};

export const CompanyProtectedRoute = ({ children }) => {
    const { company } = useCompanyAuth();
    return company ? children : <Navigate to="/post-job/login" />;
};
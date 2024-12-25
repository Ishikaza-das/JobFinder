import { useGoogleLogin } from '@react-oauth/google';
import { googleAuth } from '../api/GoogleApi';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/AuthContext';
import { useToast } from '../../components/ToastContext';
import axios from "axios";

function GoogleLogin() {
    const navigate = useNavigate();
    const { setUser, checkAuthStatus } = useAuth();
    const { showToast } = useToast();

    const responseGoogle = async(authResult) => {
        try {
            if(authResult['code']) {
                // Get initial response from Google Auth
                const result = await googleAuth(authResult['code']);
                
                // Verify authentication status
                const isAuthenticated = await checkAuthStatus();
                
                if (isAuthenticated) {
                    setUser(result.data.user);
                    showToast('Login successful!', 'success');
                    navigate('/dashboard');
                }
            }
        } catch (error) {
            console.log("Error during Google authentication:", error);
            showToast('Login failed!', 'error');
        }
    }

    const handelGoogleLogin = useGoogleLogin({
        onSuccess: responseGoogle,
        onError: (error) => {
            console.log("Google login error:", error);
            showToast('Google login failed', 'error');
        },
        flow: 'auth-code'
    });

    return { handelGoogleLogin };
}


export default GoogleLogin;

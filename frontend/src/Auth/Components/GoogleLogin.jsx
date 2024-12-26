import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/AuthContext';
import { useToast } from '../../components/ToastContext';
import { useEffect } from 'react';
import { getGoogleAuthUrl, handleGoogleCallback } from '../api/GoogleApi';

const GoogleLogin = () => {
    const navigate = useNavigate();
    const { setUser } = useAuth();
    const { showToast } = useToast();
  
    useEffect(() => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code');
      
      if (code) {
        processGoogleCallback(code);
      }
    }, []);
  
    const processGoogleCallback = async (code) => {
      try {
        const response = await handleGoogleCallback(code);
        if (response.data.user) {
          setUser(response.data.user);
          showToast('Login successful!', 'success');
          window.history.replaceState({}, '', '/dashboard');
          navigate('/dashboard', { replace: true });
        }
      } catch (error) {
        console.error('Google callback error:', error);
        showToast('Google login failed', 'error');
        navigate('/login');
      }
    };
  
    const handleGoogleLogin = async () => {
      try {
        const response = await getGoogleAuthUrl();
        if (response.data.url) {
          window.location.href = response.data.url;
        }
      } catch (error) {
        console.error('Google login error:', error);
        showToast('Google login failed', 'error');
      }
    };
  
    return { handleGoogleLogin };
};

export default GoogleLogin;

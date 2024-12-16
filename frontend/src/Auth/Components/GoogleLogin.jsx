import { useGoogleLogin } from '@react-oauth/google';
import { googleAuth } from '../api/GoogleApi';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/AuthContext';
import { useToast } from '../../components/ToastContext';

function GoogleLogin() {
    const navigate = useNavigate();
    const { setUser } = useAuth();
    const { showToast } = useToast();

    const responseGoogle = async(authResult) => {
        try {
            if(authResult['code']){
                const result = await googleAuth(authResult['code']);
                setUser(result.data.user);
                console.log("UserName", result.data.user);
                showToast('Login successful !', 'success')
                navigate('/dashboard');
            }
        } catch (error) {
            console.log("Error while requesting google code", error);
            showToast(error.response?.data?.message || 'Login failed !', 'error');
        }
    }

    const handelGoogleLogin = useGoogleLogin({
        onSuccess: responseGoogle,
        onError: responseGoogle,
        flow: 'auth-code'
    });

    return { handelGoogleLogin };
}

export default GoogleLogin;

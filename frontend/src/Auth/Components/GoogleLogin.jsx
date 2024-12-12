import {useGoogleLogin} from '@react-oauth/google'
import { googleAuth } from '../api/GoogleApi';
import { useNavigate } from 'react-router-dom';

function GoogleLogin() {
    const navigate = useNavigate();
    const responseGoogle = async(authResult) => {
        try {
            if(authResult['code']){
                const result = await googleAuth(authResult['code']);
                // const { email, name, image} = result.data.user;
                const token = result.data.token;
                localStorage.setItem('user-info',JSON.stringify(token));
                navigate('/dashboard');
            }
        } catch (error) {
            console.log("Error while requesting google code", error);
        }
    }
    const handelGoogleLogin = useGoogleLogin({
        onSuccess:responseGoogle,
        onError:responseGoogle,
        flow: 'auth-code'
    });
    return{handelGoogleLogin}
}

export default GoogleLogin;
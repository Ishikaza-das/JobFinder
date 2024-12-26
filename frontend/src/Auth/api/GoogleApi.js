import axios from "axios";

const googleApi = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}/job/auth`,
    withCredentials: true
});

export const getGoogleAuthUrl = () => googleApi.get('/google');
export const handleGoogleCallback = (code) => googleApi.get(`/google/callback?code=${code}`);

import axios from "axios";

const googleApi = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}/job/auth`
});

export const googleAuth = (code) => googleApi.get(`/google?code=${code}`)
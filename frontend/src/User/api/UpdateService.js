import axios from 'axios';

export const updateUserProfile = (userData) => {
    return axios.put(
        `${import.meta.env.VITE_API_URL}/auth/users/profile`,
        userData,
        {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        }
    ).then(response => response.data);
};

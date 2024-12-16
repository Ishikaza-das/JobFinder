import { useAuth } from "../../Auth/store/AuthContext";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useToast } from "../../components/ToastContext";

const UserCard = () => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();
  const { showToast } = useToast();

  const handleLogout = async () => {
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/job/logout`,
        {},
        { withCredentials: true }
      );
      setUser(null);
      showToast('Loged Out','info')
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error.response?.data?.message || 'Something went wrong');
      showToast(error.response?.data?.message || 'Logout failed', 'error');
    }
  };

  return (
    <div className="py-2">
      <div className="px-4 py-2 font-medium text-center">
        {user?.name}
      </div>
      <button className="w-full text-left px-4 py-2 hover:bg-blue-600">Profile</button>
      <button 
        className="w-full text-left px-4 py-2 hover:bg-blue-600"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default UserCard;

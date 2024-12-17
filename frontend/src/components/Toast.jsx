import { useState, useEffect } from 'react';

const Toast = ({ message, type = 'error', duration = 1000, onClose }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            onClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    const baseStyles = "fixed top-5 right-5 p-4 rounded-lg shadow-lg transform transition-transform duration-300";
    const typeStyles = {
        error: "bg-red-500 text-white",
        success: "bg-green-500 text-white",
        warning: "bg-yellow-500 text-white",
        info: "bg-blue-500 text-white"
    };

    return (
        <div className={`${baseStyles} ${typeStyles[type]} ${isVisible ? 'translate-x-0' : 'translate-x-full'}`}>
            {message}
        </div>
    );
};

export default Toast;
const ValidateEmail = ({ onClose }) => {

  const verify = () =>{
    onClose();
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 min-h-screen min-w-full">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
      <div className="bg-white p-8 rounded-lg shadow-xl z-10 relative w-[90%] max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-700">Verify Your Email</h2>
        <p className="text-gray-600 text-center mb-6">Please check your email to enter pin</p>
        
        <div className="flex flex-col items-center space-y-4">
          <input 
            type="text" 
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-center text-lg"
            placeholder="Enter PIN"
            maxLength="6"
          />
          
          <button 
            onClick={verify}
            className="w-full bg-blue-700 text-white py-3 px-6 rounded-lg hover:bg-blue-800 transition-colors duration-300 font-medium"
          >
            Verify Email
          </button>
        </div>
      </div>
    </div>
  );
};

export default ValidateEmail
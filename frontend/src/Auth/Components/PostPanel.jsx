import postsignup from "../../assets/post-signup.svg";

export default function PostPanel() {
  return (
    <div className='relative bg-blue-700 w-full lg:w-1/2 py-10 lg:py-0 flex items-center justify-center'>
      <img 
        src={postsignup} 
        alt="Post Signup Illustration"
        className="md:w-2/3 h-80 transform hover:scale-105 transition-all duration-700 ease-in-out animate-bounce-slow"
      />
    </div>
  );
}

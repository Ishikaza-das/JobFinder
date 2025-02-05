import { motion } from 'framer-motion';

export default function PostPanel() {
  return (
    <div className='relative bg-gradient-to-br from-blue-600 to-blue-800 w-full lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center'>
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full" />
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-tr-full" />
      
      {/* Content */}
      <div className="relative z-10 text-white space-y-8">
        <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
          Find Your Next 
          <span className="block">Perfect Team Member</span>
        </h2>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-6 py-8">
          <div className="space-y-2">
            <h3 className="text-3xl lg:text-4xl font-bold">500K+</h3>
            <p className="text-blue-100">Active Candidates</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-3xl lg:text-4xl font-bold">98%</h3>
            <p className="text-blue-100">Success Rate</p>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Smart candidate matching</span>
          </div>
          <div className="flex items-center space-x-3">
            <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>AI-powered screening</span>
          </div>
          <div className="flex items-center space-x-3">
            <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Real-time analytics</span>
          </div>
        </div>
      </div>
    </div>
  );
}

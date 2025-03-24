import { useState } from "react";
import '../style/Slider.css';

const Filter = () => {
  const [showCustomSlider, setShowCustomSlider] = useState(false);
  const [range, setRange] = useState([14, 26]);

  const handleRadioChange = (e) => {
    setShowCustomSlider(e.target.value === 'custom');
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-4">
      <div className="bg-blue-600 px-4 py-3 flex justify-between items-center">
        <h2 className="text-white font-bold text-lg">Filter Jobs</h2>
        <button className="text-white hover:text-blue-200 text-sm font-medium transition-colors duration-200">
          Clear All
        </button>
      </div>

      <form className="p-4 space-y-6">
        <div className="space-y-2">
          <label className="block text-gray-700 font-medium">
            Date Posted
          </label>
          <select
            id="time"
            name="time"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
            defaultValue="anytime"
          >
            <option value="anytime">Anytime</option>
            <option value="recent">Recent</option>
            <option value="6hr">Last 6 hours</option>
            <option value="1day">Last 24 hours</option>
            <option value="7days">Last 7 days</option>
          </select>
        </div>

        <div className="space-y-3">
          <label className="block text-gray-700 font-medium">
            Job Type
          </label>
          <div className="grid grid-cols-2 gap-3">
            {['Full Time', 'Part Time', 'Freelancer', 'Volunteer'].map((type) => (
              <div key={type} className="flex items-center">
                <input
                  type="checkbox"
                  id={type.toLowerCase().replace(' ', '')}
                  name="jobType"
                  value={type.toLowerCase().replace(' ', '')}
                  className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                />
                <label htmlFor={type.toLowerCase().replace(' ', '')} className="ml-2 text-gray-700">
                  {type}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Salary Range */}
        <div className="space-y-3">
          <label className="block text-gray-700 font-medium">
            Salary Range
          </label>
          <div className="grid grid-cols-2 gap-3">
            {[
              { id: '4lpa', label: 'Under 4 LPA' },
              { id: '8lpa', label: 'Under 8 LPA' },
              { id: '10lpa', label: 'Under 10 LPA' },
              { id: 'custom', label: 'Custom' }
            ].map((option) => (
              <div key={option.id} className="flex items-center">
                <input
                  type="radio"
                  id={option.id}
                  name="salaryrange"
                  value={option.id}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  onChange={handleRadioChange}
                />
                <label htmlFor={option.id} className="ml-2 text-gray-700">
                  {option.label}
                </label>
              </div>
            ))}
          </div>

          {showCustomSlider && (
            <div className="mt-4 px-2">
              <div className="relative pt-10">
                <div 
                  className="absolute -top-2 w-16 text-center bg-blue-600 text-white px-2 py-1 rounded shadow-md text-sm"
                  style={{ left: `calc(${(range[0] / 50) * 100}% - 2rem)` }}
                >
                  {range[0]} LPA
                </div>
                <div 
                  className="absolute -top-2 w-16 text-center bg-blue-600 text-white px-2 py-1 rounded shadow-md text-sm"
                  style={{ left: `calc(${(range[1] / 50) * 100}% - 2rem)` }}
                >
                  {range[1]} LPA
                </div>
                <div className="relative">
                  <div className="absolute w-full h-1 bg-gray-200 rounded-lg"></div>
                  <div 
                    className="absolute h-1 bg-blue-600 rounded-lg" 
                    style={{
                      left: `${(range[0] / 50) * 100}%`,
                      width: `${((range[1] - range[0]) / 50) * 100}%`
                    }}
                  ></div>
                  <input 
                    type="range" 
                    min="1" 
                    max="50"
                    value={range[0]}
                    onChange={(e) => setRange([Math.min(Number(e.target.value), range[1] - 1), range[1]])}
                    className="pointer-events-none absolute w-full h-1 appearance-none z-20"
                  />
                  <input 
                    type="range" 
                    min="1" 
                    max="50"
                    value={range[1]}
                    onChange={(e) => setRange([range[0], Math.max(Number(e.target.value), range[0] + 1)])}
                    className="pointer-events-none absolute w-full h-1 appearance-none z-20"
                  />
                </div>
                <div className="flex justify-between text-sm text-gray-600 mt-4">
                  <span>1 LPA</span>
                  <span>50 LPA</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Work Mode */}
        <div className="space-y-3">
          <label className="block text-gray-700 font-medium">
            Work Mode
          </label>
          <div className="grid grid-cols-2 gap-3">
            {['On-site', 'Hybrid', 'Remote'].map((mode) => (
              <div key={mode} className="flex items-center">
                <input
                  type="checkbox"
                  id={mode.toLowerCase()}
                  name="workMode"
                  value={mode.toLowerCase()}
                  className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                />
                <label htmlFor={mode.toLowerCase()} className="ml-2 text-gray-700">
                  {mode}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Apply Filters Button */}
        <button
          type="button"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300"
        >
          Apply Filters
        </button>
      </form>
    </div>
  );
};

export default Filter;
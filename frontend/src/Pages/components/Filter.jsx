import { useState } from "react";
import '../style/Slider.css'

const Filter = () => {
  const [showCustomSlider, setShowCustomSlider] = useState(false);
  const [range, setRange] = useState([14, 26]);

  const handleRadioChange = (e) => {
    setShowCustomSlider(e.target.value === 'custom');
  };

  return (
    <>
      <form className="border border-gray-400 h-auto w-96 mx-4 my-2 rounded-lg">
        <div className="flex flex-row justify-between border border-b-gray-400 h-auto">
          <label className="px-2 pt-6 text-lg font-bold font-serif">
            Filter
          </label>
          <button className="px-2 pt-6 text-red-600">Clear All</button>
        </div>

        <div className="flex flex-col p-2">
          <label className="px-2 pt-4 text-lg font-bold font-serif">
            Date Post
          </label>
          <select
            id="time"
            name="time"
            className="mx-2 my-2 border border-gray-400 rounded-sm focus:outline-none p-2"
            defaultValue="anytime"
          >
            <option value="anytime">Anytime</option>
            <option value="recent">Recent</option>
            <option value="6hr">6 hour</option>
            <option value="1day">1 day</option>
          </select>
        </div>

        <div className="flex flex-col p-4">
          <label className="px-2 mb-2 text-lg font-bold font-serif">
            Job Type
          </label>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center gap-2 px-2 py-1">
              <input
                type="checkbox"
                id="fulltime"
                name="jobType"
                value="fulltime"
                className="w-4 h-4"
              />
              <label htmlFor="fulltime">Full Time</label>
            </div>
            <div className="flex items-center gap-2 px-2 py-1">
              <input
                type="checkbox"
                id="parttime"
                name="jobType"
                value="parttime"
                className="w-4 h-4"
              />
              <label htmlFor="parttime">Part Time</label>
            </div>
            <div className="flex items-center gap-2 px-2 py-1">
              <input
                type="checkbox"
                id="freelancer"
                name="jobType"
                value="freelancer"
                className="w-4 h-4"
              />
              <label htmlFor="freelancer">Freelancer</label>
            </div>
            <div className="flex items-center gap-2 px-2 py-1">
              <input
                type="checkbox"
                id="volunteer"
                name="jobType"
                value="volunteer"
                className="w-4 h-4"
              />
              <label htmlFor="volunteer">Volunteer</label>
            </div>
          </div>
        </div>

        <div className="flex flex-col p-4">
          <label className="px-2 mb-2 text-lg font-bold font-serif">
            Salary Range
          </label>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center gap-2 px-2 py-1">
              <input
                type="radio"
                id="4lpa"
                name="salaryrange"
                value="4lpa"
                className="w-4 h-4"
                onChange={handleRadioChange}
              />
              <label htmlFor="4lpa">Under 4LPA</label>
            </div>
            <div className="flex items-center gap-2 px-2 py-1">
              <input
                type="radio"
                id="8lpa"
                name="salaryrange"
                value="8lpa"
                className="w-4 h-4"
                onChange={handleRadioChange}
              />
              <label htmlFor="8lpa">Under 8LPA</label>
            </div>
            <div className="flex items-center gap-2 px-2 py-1">
              <input
                type="radio"
                id="10lpa"
                name="salaryrange"
                value="10lpa"
                className="w-4 h-4"
                onChange={handleRadioChange}
              />
              <label htmlFor="10lpa">Under 10LPA</label>
            </div>
            <div className="flex items-center gap-2 px-2 py-1">
              <input
                type="radio"
                id="custom"
                name="salaryrange"
                value="custom"
                className="w-4 h-4"
                onChange={handleRadioChange}
              />
              <label htmlFor="custom">Custom</label>
            </div>
          </div>

          {showCustomSlider && (
            <div className="px-4 py-2">
              <div className="relative pt-8">
                <div 
                  className="absolute -top-2 w-16 text-center bg-blue-500 text-white px-2 py-1 rounded shadow-md"
                  style={{ left: `calc(${(range[0] / 50) * 100}% - 2rem)` }}
                >
                  {range[0]} LPA
                </div>
                <div 
                  className="absolute -top-2 w-16 text-center bg-blue-500 text-white px-2 py-1 rounded shadow-md"
                  style={{ left: `calc(${(range[1] / 50) * 100}% - 2rem)` }}
                >
                  {range[1]} LPA
                </div>
                <div className="relative">
                  <div className="absolute w-full h-1 bg-gray-200 rounded-lg"></div>
                  <div 
                    className="absolute h-1 bg-blue-500 rounded-lg" 
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
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <span>1 LPA</span>
                  <span>50 LPA</span>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col p-4">
          <label className="px-2 mb-2 text-lg font-bold font-serif">
            On-site/Remote
          </label>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center gap-2 px-2 py-1">
              <input
                type="checkbox"
                id="on-site"
                name="on-site/remote"
                value="on-site"
                className="w-4 h-4"
              />
              <label htmlFor="on-site">On-site</label>
            </div>
            <div className="flex items-center gap-2 px-2 py-1">
            <input
                type="checkbox"
                id="hybrid"
                name="on-site/remote"
                value="hybrid"
                className="w-4 h-4"
              />
              <label htmlFor="hybrid">Hybrid</label>
            </div>
            <div className="flex items-center gap-2 px-2 py-1">
            <input
                type="checkbox"
                id="remote"
                name="on-site/remote"
                value="remote"
                className="w-4 h-4"
              />
              <label htmlFor="remote">Remote</label>
            </div>
          </div>
        </div>

      </form>
    </>
  );
};

export default Filter;

const JobCard = ({jobtitle, company, openingid, department, description}) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300 bg-white">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-blue-600">{jobtitle}</h3>
                  <div className="mt-2 text-gray-600">
                    <p className="flex items-center gap-1">
                      <span className="font-medium">Company:</span> {company}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {openingid}
                  </span>
                  <p className="text-sm text-gray-500 mt-1">{department}</p>
                </div>
              </div>
              <div className="mt-3">
                <h4 className="font-medium text-gray-700">Description:</h4>
                <p className="text-gray-600 whitespace-pre-line">{description}</p>
              </div>
              <div className="mt-4 flex justify-end">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300">
                  Apply Now
                </button>
              </div>
            </div>
  )
}

export default JobCard

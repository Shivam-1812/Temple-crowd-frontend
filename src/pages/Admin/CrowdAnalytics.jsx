import React from 'react'

const CrowdAnalytics = () => {
  // Sample data for the line chart
  const timeData = ['9 AM', '12 PM', '3 PM', '6 PM', '9 PM']
  const currentFlow = [120, 450, 800, 650, 300]
  const predictedFlow = [100, 400, 750, 700, 350]

  const maxValue = Math.max(...currentFlow, ...predictedFlow)

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-orange-500">
        Crowd Analytics Over Time
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Current Crowd Flow Line Chart */}
        <div className="border border-gray-300 p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Crowd Flow (Current)</h3>
          <div className="h-64 relative">
            {/* Y-axis labels */}
            <div className="absolute left-0 top-0 bottom-0 w-8 flex flex-col justify-between text-xs text-gray-600">
              <span>{maxValue}</span>
              <span>{Math.round(maxValue * 0.75)}</span>
              <span>{Math.round(maxValue * 0.5)}</span>
              <span>{Math.round(maxValue * 0.25)}</span>
              <span>0</span>
            </div>
            
            {/* Chart area */}
            <div className="ml-8 h-full relative">
              {/* Grid lines */}
              <div className="absolute inset-0 flex flex-col justify-between">
                {[0, 1, 2, 3, 4].map(i => (
                  <div key={i} className="border-t border-gray-200"></div>
                ))}
              </div>
              
              {/* Line chart */}
              <svg className="w-full h-full" viewBox={`0 0 ${timeData.length * 100} 100`} preserveAspectRatio="none">
                {/* Current Flow Line */}
                <path
                  d={`M 0,${100 - (currentFlow[0] / maxValue) * 100} ${
                    currentFlow.map((value, index) => 
                      `L ${(index / (timeData.length - 1)) * 100},${100 - (value / maxValue) * 100}`
                    ).join(' ')
                  }`}
                  fill="none"
                  stroke="#ff6600"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                
                {/* Data points */}
                {currentFlow.map((value, index) => (
                  <circle
                    key={index}
                    cx={`${(index / (timeData.length - 1)) * 100}`}
                    cy={`${100 - (value / maxValue) * 100}`}
                    r="3"
                    fill="#ff6600"
                  />
                ))}
              </svg>
              
              {/* X-axis labels */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-600 mt-2">
                {timeData.map((time, index) => (
                  <span key={index} className="transform -rotate-45 origin-top-left">
                    {time}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Predicted Crowd Flow Line Chart */}
        <div className="border border-gray-300 p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Predicted Flow</h3>
          <div className="h-64 relative">
            {/* Y-axis labels */}
            <div className="absolute left-0 top-0 bottom-0 w-8 flex flex-col justify-between text-xs text-gray-600">
              <span>{maxValue}</span>
              <span>{Math.round(maxValue * 0.75)}</span>
              <span>{Math.round(maxValue * 0.5)}</span>
              <span>{Math.round(maxValue * 0.25)}</span>
              <span>0</span>
            </div>
            
            {/* Chart area */}
            <div className="ml-8 h-full relative">
              {/* Grid lines */}
              <div className="absolute inset-0 flex flex-col justify-between">
                {[0, 1, 2, 3, 4].map(i => (
                  <div key={i} className="border-t border-gray-200"></div>
                ))}
              </div>
              
              {/* Line chart */}
              <svg className="w-full h-full" viewBox={`0 0 ${timeData.length * 100} 100`} preserveAspectRatio="none">
                {/* Predicted Flow Line */}
                <path
                  d={`M 0,${100 - (predictedFlow[0] / maxValue) * 100} ${
                    predictedFlow.map((value, index) => 
                      `L ${(index / (timeData.length - 1)) * 100},${100 - (value / maxValue) * 100}`
                    ).join(' ')
                  }`}
                  fill="none"
                  stroke="#4f46e5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="5,5"
                />
                
                {/* Data points */}
                {predictedFlow.map((value, index) => (
                  <circle
                    key={index}
                    cx={`${(index / (timeData.length - 1)) * 100}`}
                    cy={`${100 - (value / maxValue) * 100}`}
                    r="3"
                    fill="#4f46e5"
                  />
                ))}
              </svg>
              
              {/* X-axis labels */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-600 mt-2">
                {timeData.map((time, index) => (
                  <span key={index} className="transform -rotate-45 origin-top-left">
                    {time}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5 bg-orange-500"></div>
          <span className="text-sm text-gray-600">Current Flow</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5 bg-indigo-500 border-dashed border"></div>
          <span className="text-sm text-gray-600">Predicted Flow</span>
        </div>
      </div>

      <p className="text-gray-600 mt-4 text-sm text-center">
        *Real-time and predicted crowd flow based on historical data and AI analytics.*
      </p>
    </div>
  )
}

export default CrowdAnalytics
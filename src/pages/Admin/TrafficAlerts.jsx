import React, { useState } from 'react'

const TrafficAlerts = () => {
  const [alerts, setAlerts] = useState([
    'Rerouting: Main Road closed — follow signs.',
    'Diversion: Use Parking B for faster entry.',
    'Traffic clear on Dwarka Bypass.'
  ])
  const [newAlert, setNewAlert] = useState('')

  const addAlert = () => {
    if (newAlert.trim()) {
      setAlerts([...alerts, newAlert])
      setNewAlert('')
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-orange-500">
        Traffic Alerts & Rerouting
      </h1>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <h3 className="font-semibold text-yellow-800 mb-3">Current Alerts:</h3>
        <div className="space-y-2">
          {alerts.map((alert, index) => (
            <div key={index} className="pb-2 border-b border-yellow-200 last:border-b-0">
              <p className="text-yellow-700">{alert}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-4">
          <h4 className="font-semibold text-yellow-800 mb-2">Add New Alert:</h4>
          <div className="flex gap-2">
            <input
              type="text"
              value={newAlert}
              onChange={(e) => setNewAlert(e.target.value)}
              placeholder="Enter new traffic alert..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
            />
            <button
              onClick={addAlert}
              className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700"
            >
              Add Alert
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrafficAlerts
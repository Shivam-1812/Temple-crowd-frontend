import React from 'react'

const IncomingRequests = () => {
  const requests = [
    { type: 'Rescue', user: 'Devotee A', date: '2023-10-01', details: 'Lost child in crowd', status: 'Pending' },
    { type: 'Police', user: 'Devotee B', date: '2023-10-01', details: 'Report suspicious activity', status: 'Confirmed' },
    { type: 'Medical', user: 'Devotee C', date: '2023-10-02', details: 'Ambulance request', status: 'Pending' }
  ]

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-orange-500">
        Incoming Requests Management
      </h1>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-orange-600 text-white">
            <th className="p-3 text-left">Type</th>
            <th className="p-3 text-left">User</th>
            <th className="p-3 text-left">Date</th>
            <th className="p-3 text-left">Details</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              <td className="p-3 font-semibold">{request.type}</td>
              <td className="p-3">{request.user}</td>
              <td className="p-3">{request.date}</td>
              <td className="p-3">{request.details}</td>
              <td className="p-3">
                <span className={
                  request.status === 'Pending' 
                    ? 'text-yellow-600 font-semibold' 
                    : 'text-green-600 font-semibold'
                }>
                  {request.status}
                </span>
              </td>
              <td className="p-3">
                <button className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default IncomingRequests
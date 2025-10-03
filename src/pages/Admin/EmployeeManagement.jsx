import React from 'react'

const EmployeeManagement = () => {
  const employees = [
    { name: 'John Doe', role: 'Security', shift: '9 AM - 5 PM', duty: 'Crowd Control', status: 'Active' },
    { name: 'Jane Smith', role: 'Medical', shift: '12 PM - 8 PM', duty: 'First Aid', status: 'Active' },
    { name: 'Mike Johnson', role: 'Traffic', shift: '6 AM - 2 PM', duty: 'Parking Management', status: 'On Leave' },
    { name: 'Sarah Wilson', role: 'Admin', shift: '8 AM - 4 PM', duty: 'Resource Allocation', status: 'Active' }
  ]

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-orange-500">
        Employee Shift & Duty Management
      </h1>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-orange-600 text-white">
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Role</th>
            <th className="p-3 text-left">Shift</th>
            <th className="p-3 text-left">Duty</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              <td className="p-3 font-semibold">{employee.name}</td>
              <td className="p-3">{employee.role}</td>
              <td className="p-3">{employee.shift}</td>
              <td className="p-3">{employee.duty}</td>
              <td className="p-3">
                <span className={
                  employee.status === 'Active' 
                    ? 'text-green-600 font-semibold' 
                    : 'text-red-600 font-semibold'
                }>
                  {employee.status}
                </span>
              </td>
              <td className="p-3">
                <span className={
                  employee.status === 'Active' 
                    ? 'text-green-600 font-semibold' 
                    : 'text-red-600 font-semibold'
                }>
                  {employee.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default EmployeeManagement
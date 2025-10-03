import React from 'react'

const VIPBooking = () => {
  const bookings = [
    {
      name: 'Ramesh Kumar',
      date: '2025-09-30',
      slot: 'Morning (9 AM - 12 PM)',
      tickets: 2,
      payment: 'UPI',
      status: 'Pending'
    }
  ]

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-orange-500">
        VIP Ticket Booking Management
      </h1>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-orange-600 text-white">
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Date</th>
            <th className="p-3 text-left">Slot</th>
            <th className="p-3 text-left">Tickets</th>
            <th className="p-3 text-left">Payment</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              <td className="p-3">{booking.name}</td>
              <td className="p-3">{booking.date}</td>
              <td className="p-3">{booking.slot}</td>
              <td className="p-3">{booking.tickets}</td>
              <td className="p-3">{booking.payment}</td>
              <td className="p-3">
                <span className="text-yellow-600 font-semibold">{booking.status}</span>
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

export default VIPBooking
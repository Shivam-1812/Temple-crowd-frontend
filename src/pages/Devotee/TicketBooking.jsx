import React, { useState } from 'react';
import { Ticket, CheckCircle } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Card from '../../components/Card';

const TicketBooking = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    date: '', 
    temple: 'Somnath', 
    slot: '6-9 AM', 
    idProof: '' 
  });
  const [booked, setBooked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setBooked(true);
    setTimeout(() => setBooked(false), 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navbar role="devotee" />
      <div className="max-w-2xl mx-auto p-6 mt-8">
        <Card>
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
            <Ticket className="w-6 h-6 mr-2 text-indigo-600" />
            Book Darshan Ticket
          </h2>
          
          {booked ? (
            <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6 text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-green-800 mb-2">Booking Confirmed!</h3>
              <p className="text-green-700">Ticket ID: T{Math.floor(Math.random() * 1000)}</p>
              <p className="text-green-700">Temple: {formData.temple}</p>
              <p className="text-green-700">Date: {formData.date}</p>
              <p className="text-green-700">Time: {formData.slot}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Temple</label>
                <select
                  value={formData.temple}
                  onChange={(e) => setFormData({ ...formData, temple: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                >
                  <option>Somnath</option>
                  <option>Dwarka</option>
                  <option>Ambaji</option>
                  <option>Pavagadh</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Date</label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Time Slot</label>
                <select
                  value={formData.slot}
                  onChange={(e) => setFormData({ ...formData, slot: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                >
                  <option>6-9 AM</option>
                  <option>9-12 PM</option>
                  <option>12-3 PM</option>
                  <option>3-6 PM</option>
                  <option>6-9 PM</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">ID Proof Number</label>
                <input
                  type="text"
                  value={formData.idProof}
                  onChange={(e) => setFormData({ ...formData, idProof: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  placeholder="Aadhaar / PAN / Passport"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 text-white py-3 rounded-lg hover:from-indigo-700 hover:to-indigo-800 transition font-medium"
              >
                Confirm Booking
              </button>
            </form>
          )}
        </Card>
      </div>
    </div>
  );
};

export default TicketBooking;
import React, { useState } from 'react';
import { TrendingUp, Ticket, Car, Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Card from '../../components/Card';
import { dummyData } from '../../data/dummyData';

const TicketManagement = () => {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState('tickets');
  
  const menuItems = [
    { id: 'crowd', label: 'Crowd Analytics', icon: <TrendingUp className="w-5 h-5" /> },
    { id: 'tickets', label: 'Ticket Management', icon: <Ticket className="w-5 h-5" /> },
    { id: 'traffic', label: 'Parking & Traffic', icon: <Car className="w-5 h-5" /> },
    { id: 'emergency', label: 'Emergency Alerts', icon: <Bell className="w-5 h-5" /> }
  ];

  const handleNavigation = (id) => {
    setActivePage(id);
    navigate(`/admin/${id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navbar role="admin" />
      <div className="flex">
        <Sidebar items={menuItems} active={activePage} setActive={handleNavigation} />
        <div className="flex-1 p-8 lg:ml-64">
          <h1 className="text-3xl font-bold text-slate-800 mb-8">Ticket Management</h1>
          
          <Card>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Ticket ID</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Name</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Temple</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Date</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Status</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {dummyData.tickets.map((ticket) => (
                    <tr key={ticket.id} className="border-t border-slate-200 hover:bg-slate-50">
                      <td className="px-4 py-3 text-sm font-medium text-slate-800">{ticket.id}</td>
                      <td className="px-4 py-3 text-sm text-slate-600">{ticket.name}</td>
                      <td className="px-4 py-3 text-sm text-slate-600">{ticket.temple}</td>
                      <td className="px-4 py-3 text-sm text-slate-600">{ticket.date}</td>
                      <td className="px-4 py-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          ticket.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {ticket.status}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <button className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TicketManagement;
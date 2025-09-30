import React, { useState } from 'react';
import { TrendingUp, Ticket, Car, Bell, AlertTriangle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Card from '../../components/Card';
import { dummyData } from '../../data/dummyData';

const EmergencyAlerts = () => {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState('emergency');
  const [alerts, setAlerts] = useState(dummyData.emergencies);
  
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

  const markResolved = (id) => {
    setAlerts(alerts.map(alert => 
      alert.id === id ? { ...alert, status: 'Resolved' } : alert
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navbar role="admin" />
      <div className="flex">
        <Sidebar items={menuItems} active={activePage} setActive={handleNavigation} />
        <div className="flex-1 p-8 lg:ml-64">
          <h1 className="text-3xl font-bold text-slate-800 mb-8">Emergency Alerts</h1>
          
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded">
            <div className="flex items-center">
              <AlertTriangle className="w-5 h-5 text-red-500 mr-3" />
              <div>
                <p className="text-red-800 font-bold">Stampede Risk Alert</p>
                <p className="text-red-700 text-sm">High crowd density detected at Somnath Temple - Gate 2</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            {alerts.map((alert) => (
              <Card key={alert.id}>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        alert.status === 'Active' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                      }`}>
                        {alert.status}
                      </span>
                      <span className="text-sm font-bold text-slate-800">{alert.id}</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-1">{alert.user}</h3>
                    <p className="text-slate-600 text-sm mb-1">
                      <span className="font-medium">Location:</span> {alert.location}
                    </p>
                    <p className="text-slate-600 text-sm">
                      <span className="font-medium">Time:</span> {alert.time}
                    </p>
                  </div>
                  {alert.status === 'Active' && (
                    <button
                      onClick={() => markResolved(alert.id)}
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition text-sm font-medium"
                    >
                      Mark Resolved
                    </button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyAlerts;
import React, { useState } from 'react';
import { TrendingUp, Ticket, Car, Bell, AlertTriangle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Card from '../../components/Card';
import { dummyData } from '../../data/dummyData';

const ParkingTraffic = () => {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState('traffic');
  
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
          <h1 className="text-3xl font-bold text-slate-800 mb-8">Parking & Traffic</h1>
          
          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-6 rounded">
            <div className="flex items-center">
              <AlertTriangle className="w-5 h-5 text-orange-500 mr-3" />
              <p className="text-orange-800 font-medium">Traffic Alert: Heavy congestion near Somnath Temple Main Gate</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {dummyData.parkingSlots.map((parking) => (
              <Card key={parking.location}>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">{parking.location}</h3>
                    <p className="text-sm text-slate-600">Total Capacity: {parking.total}</p>
                  </div>
                  <Car className="w-8 h-8 text-indigo-600" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Occupied</span>
                    <span className="font-bold text-red-600">{parking.occupied}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Available</span>
                    <span className="font-bold text-green-600">{parking.available}</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3 mt-3">
                    <div
                      className={`h-3 rounded-full ${parking.available < 10 ? 'bg-red-500' : parking.available < 50 ? 'bg-yellow-500' : 'bg-green-500'}`}
                      style={{ width: `${(parking.occupied / parking.total) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <Card>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Traffic Map Overview</h3>
            <div className="bg-slate-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <Car className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                <p className="text-slate-600">Real-time Traffic & Parking Map</p>
                <p className="text-sm text-slate-500 mt-2">Showing all parking locations and traffic conditions</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ParkingTraffic;
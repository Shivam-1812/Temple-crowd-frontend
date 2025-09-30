import React, { useState } from 'react';
import { TrendingUp, Ticket, Car, Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Card from '../../components/Card';
import { dummyData } from '../../data/dummyData';

const CrowdAnalytics = () => {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState('crowd');
  
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
          <h1 className="text-3xl font-bold text-slate-800 mb-8">Crowd Analytics</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Crowd Trend (Today)</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={dummyData.crowdTrend}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="count" stroke="#4f46e5" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </Card>
            
            <Card>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Temple-wise Distribution</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={dummyData.templeCrowd}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="temple" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="visitors" fill="#14b8a6" />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
            {dummyData.crowdData.map((crowd) => (
              <Card key={crowd.temple} className="text-center">
                <h4 className="font-bold text-slate-800 mb-2">{crowd.temple}</h4>
                <div className={`text-4xl font-bold mb-2 ${
                  crowd.level === 'high' ? 'text-red-500' : crowd.level === 'medium' ? 'text-yellow-500' : 'text-green-500'
                }`}>
                  {crowd.percentage}%
                </div>
                <p className="text-sm text-slate-600 capitalize">{crowd.level} crowd</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrowdAnalytics;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Ticket, Car, Bell, TrendingUp, MapPin, Shield, Menu, X, BarChart3, Activity, AlertCircle, CheckCircle } from 'lucide-react';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  
  const menuItems = [
    { id: 'crowd', label: 'Crowd Analytics', icon: TrendingUp, path: '/admin/crowd' },
    { id: 'tickets', label: 'Ticket Management', icon: Ticket, path: '/admin/tickets' },
    { id: 'traffic', label: 'Parking & Traffic', icon: Car, path: '/admin/traffic' },
    { id: 'emergency', label: 'Emergency Alerts', icon: Bell, path: '/admin/emergency' }
  ];

  const handleNavigation = (item) => {
    setActivePage(item.id);
    navigate(item.path);
  };

  const stats = [
    { 
      label: 'Total Visitors Today', 
      value: '2,350', 
      icon: Users, 
      color: 'from-blue-500 to-indigo-600',
      change: '+12%',
      changeType: 'positive'
    },
    { 
      label: 'Tickets Booked', 
      value: '1,245', 
      icon: Ticket, 
      color: 'from-emerald-500 to-teal-600',
      change: '+8%',
      changeType: 'positive'
    },
    { 
      label: 'Parking Slots', 
      value: '155/630', 
      icon: Car, 
      color: 'from-orange-500 to-amber-600',
      change: '24% Full',
      changeType: 'neutral'
    },
    { 
      label: 'Active Alerts', 
      value: '2', 
      icon: Bell, 
      color: 'from-red-500 to-rose-600',
      change: 'High Priority',
      changeType: 'warning'
    }
  ];

  const recentActivity = [
    { type: 'success', message: 'New ticket booking - Somnath Temple', time: '2 mins ago' },
    { type: 'warning', message: 'High crowd density detected at Dwarka', time: '15 mins ago' },
    { type: 'info', message: 'Parking slot C-24 now available', time: '32 mins ago' },
    { type: 'success', message: 'Emergency resolved at Ambaji', time: '1 hour ago' }
  ];

  const templeStatus = [
    { name: 'Somnath', crowd: 'Moderate', color: 'text-yellow-600 bg-yellow-100' },
    { name: 'Dwarka', crowd: 'High', color: 'text-red-600 bg-red-100' },
    { name: 'Ambaji', crowd: 'Low', color: 'text-green-600 bg-green-100' },
    { name: 'Pavagadh', crowd: 'Moderate', color: 'text-yellow-600 bg-yellow-100' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100">
      {/* Top Navbar */}
      <nav className="bg-white/80 backdrop-blur-xl border-b border-slate-200 shadow-sm sticky top-0 z-50">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 hover:bg-slate-100 rounded-lg transition"
              >
                {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-br from-orange-500 to-red-600 p-2 rounded-xl">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    Admin Control Panel
                  </h1>
                  <p className="text-xs text-slate-500">Temple Management System</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:block text-right">
                <div className="text-sm font-semibold text-slate-700">
                  {currentTime.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}
                </div>
                <div className="text-xs text-slate-500">
                  {currentTime.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                </div>
              </div>
              <div className="flex items-center gap-2 bg-gradient-to-br from-slate-100 to-slate-200 px-4 py-2 rounded-full">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  A
                </div>
                <span className="text-sm font-semibold text-slate-700">Administrator</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:sticky top-0 left-0 h-screen bg-white/80 backdrop-blur-xl border-r border-slate-200 w-64 transition-transform duration-300 ease-in-out z-40 mt-[73px] lg:mt-0`}>
          <div className="p-6 space-y-2">
            <div className="mb-6">
              <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Navigation</h3>
            </div>
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    activePage === item.id
                      ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-8">
          {/* Welcome Section */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-800 mb-2">Dashboard Overview</h2>
            <p className="text-slate-600">Monitor and manage temple operations in real-time</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all hover:scale-105 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`bg-gradient-to-br ${stat.color} p-3 rounded-xl shadow-md group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                      stat.changeType === 'positive' ? 'bg-green-100 text-green-700' :
                      stat.changeType === 'warning' ? 'bg-red-100 text-red-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {stat.change}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-slate-800">{stat.value}</p>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Temple Status */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-orange-600" />
                <h3 className="text-lg font-bold text-slate-800">Temple Status</h3>
              </div>
              <div className="space-y-3">
                {templeStatus.map((temple, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-slate-50 to-slate-100 rounded-xl border border-slate-200">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
                      <span className="font-semibold text-slate-800">{temple.name}</span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${temple.color}`}>
                      {temple.crowd}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
              <div className="flex items-center gap-2 mb-4">
                <Activity className="w-5 h-5 text-orange-600" />
                <h3 className="text-lg font-bold text-slate-800">Recent Activity</h3>
              </div>
              <div className="space-y-3">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-gradient-to-r from-slate-50 to-slate-100 rounded-xl border border-slate-200">
                    {activity.type === 'success' && <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />}
                    {activity.type === 'warning' && <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />}
                    {activity.type === 'info' && <Activity className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-slate-800 font-medium">{activity.message}</p>
                      <p className="text-xs text-slate-500 mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
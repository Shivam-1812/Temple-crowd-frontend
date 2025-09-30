import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Ticket, Map, Hotel, Users, AlertTriangle, Sun, Bell, Calendar, MapPin } from 'lucide-react';

const DevoteeDashboard = () => {
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedTemple, setSelectedTemple] = useState('Somnath');

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const temples = ['Somnath', 'Dwarka', 'Ambaji', 'Pavagadh'];
  
  const quickLinks = [
    { 
      id: 'tickets', 
      label: 'Book Darshan Ticket', 
      icon: Ticket, 
      color: 'from-emerald-500 to-teal-600',
      description: 'Reserve your sacred visit',
      badge: 'Popular',
      path: '/devotee/tickets'
    },
    { 
      id: 'trip', 
      label: 'Trip Planner', 
      icon: Map, 
      color: 'from-blue-500 to-indigo-600',
      description: 'Plan your pilgrimage route',
      badge: null,
      path: '/devotee/trip'
    },
    { 
      id: 'hotels', 
      label: 'Hotel Booking', 
      icon: Hotel, 
      color: 'from-purple-500 to-pink-600',
      description: 'Find comfortable stays',
      badge: null,
      path: '/devotee/hotels'
    },
    { 
      id: 'crowd', 
      label: 'Live Crowd Info', 
      icon: Users, 
      color: 'from-orange-500 to-amber-600',
      description: 'Real-time temple updates',
      badge: 'Live',
      path: '/devotee/crowd'
    },
    { 
      id: 'emergency', 
      label: 'Emergency Help', 
      icon: AlertTriangle, 
      color: 'from-red-500 to-rose-600',
      description: '24/7 assistance available',
      badge: 'SOS',
      path: '/devotee/emergency'
    }
  ];

  const upcomingEvents = [
    { name: 'Maha Shivaratri', date: 'Feb 26, 2025', temple: 'Somnath' },
    { name: 'Janmashtami', date: 'Aug 16, 2025', temple: 'Dwarka' },
    { name: 'Navratri', date: 'Oct 2-11, 2025', temple: 'Ambaji' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-red-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Navbar */}
      <nav className="relative bg-white/80 backdrop-blur-xl border-b border-orange-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-orange-500 to-red-600 p-2 rounded-xl">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Temple Darshan
                </h1>
                <p className="text-xs text-slate-500">Sacred Journey Portal</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 hover:bg-orange-50 rounded-lg transition">
                <Bell className="w-5 h-5 text-slate-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              </button>
              <div className="flex items-center gap-2 bg-gradient-to-br from-orange-100 to-amber-100 px-4 py-2 rounded-full">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  D
                </div>
                <span className="text-sm font-semibold text-slate-700">Devotee</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto p-6 mt-6">
        {/* Welcome Section */}
        <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl p-8 mb-8 border border-white/50">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Sun className="w-6 h-6 text-orange-500 animate-spin" style={{ animationDuration: '8s' }} />
                <span className="text-sm font-medium text-orange-600">Om Namah Shivaya</span>
              </div>
              <h2 className="text-4xl font-bold text-slate-800 mb-2">
                Welcome, Devotee
              </h2>
              <p className="text-slate-600">May your spiritual journey be blessed</p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <div className="text-2xl font-bold text-slate-800">
                {currentTime.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}
              </div>
              <div className="text-sm text-slate-500">
                {currentTime.toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </div>
            </div>
          </div>
        </div>

        {/* Temple Selector */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-slate-700 mb-4">Select Temple</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {temples.map((temple) => (
              <button
                key={temple}
                onClick={() => setSelectedTemple(temple)}
                className={`p-4 rounded-xl border-2 transition-all ${
                  selectedTemple === temple
                    ? 'bg-gradient-to-br from-orange-500 to-red-600 text-white border-orange-500 shadow-lg scale-105'
                    : 'bg-white/70 backdrop-blur-sm text-slate-700 border-slate-200 hover:border-orange-300'
                }`}
              >
                <div className="font-semibold">{temple}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Quick Actions Grid */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-slate-700 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickLinks.map((link) => {
              const Icon = link.icon;
              return (
                <button
                  key={link.id}
                  onClick={() => navigate(link.path)}
                  className="group relative bg-white/70 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/50 overflow-hidden"
                >
                  {/* Background Gradient on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  {/* Badge */}
                  {link.badge && (
                    <div className={`absolute top-4 right-4 px-3 py-1 bg-gradient-to-r ${link.color} text-white text-xs font-bold rounded-full`}>
                      {link.badge}
                    </div>
                  )}
                  
                  {/* Content */}
                  <div className="relative flex flex-col items-center text-center space-y-3">
                    <div className={`bg-gradient-to-br ${link.color} p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-800 mb-1">{link.label}</h4>
                      <p className="text-sm text-slate-600">{link.description}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg p-6 border border-white/50">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="w-5 h-5 text-orange-600" />
            <h3 className="text-lg font-semibold text-slate-700">Upcoming Sacred Events</h3>
          </div>
          <div className="space-y-3">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl border border-orange-100">
                <div>
                  <h4 className="font-semibold text-slate-800">{event.name}</h4>
                  <p className="text-sm text-slate-600">{event.temple}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-orange-600">{event.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevoteeDashboard;
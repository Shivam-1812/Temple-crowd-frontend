import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Ticket, Map, Hotel, Users, 
  AlertTriangle, Bell, Calendar, MapPin, 
  ChevronDown, Newspaper, Info, Globe, Car 
} from 'lucide-react';
import logo from '../../assets/logo.png';

const DevoteeDashboard = () => {
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedTemple, setSelectedTemple] = useState('Somnath');
  const [showTempleDropdown, setShowTempleDropdown] = useState(false);

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
      description: 'Reserve your sacred visit',
      badge: 'Popular',
      path: '/devotee/tickets'
    },
    { 
      id: 'trip', 
      label: 'Trip Planner', 
      icon: Map, 
      description: 'Plan your pilgrimage route',
      badge: null,
      path: '/devotee/trip'
    },
    { 
      id: 'hotels', 
      label: 'Hotel Booking', 
      icon: Hotel, 
      description: 'Find comfortable stays',
      badge: null,
      path: '/devotee/hotels'
    },
    { 
      id: 'crowd', 
      label: 'Live Crowd Info', 
      icon: Users, 
      description: 'Real-time temple updates',
      badge: 'Live',
      path: '/devotee/crowd'
    },
    {
      id: 'traffic',
      label: 'Traffic & Parking',
      icon: Car,
      description: 'Real-time parking slots and traffic updates',
      badge: null,
      path: '/devotee/traffic'
    }
  ];

  const upcomingEvents = [
    { name: 'Maha Shivaratri', date: 'Feb 26, 2025', temple: 'Somnath' },
    { name: 'Janmashtami', date: 'Aug 16, 2025', temple: 'Dwarka' },
    { name: 'Navratri', date: 'Oct 2-11, 2025', temple: 'Ambaji' }
  ];

  const emergencyServices = [
    { 
      id: 'rescue', 
      label: 'Rescue Helpline', 
      description: 'Immediate rescue support for lost or stranded devotees',
      action: 'Call Rescue'
    },
    { 
      id: 'police', 
      label: 'Police Assistance', 
      description: 'Report suspicious activity or request police help',
      action: 'Request Police'
    },
    { 
      id: 'medical', 
      label: 'Medical Support', 
      description: 'Get medical aid or request an ambulance immediately',
      action: 'Get Medical Help'
    }
  ];

  const topbarItems = [
    {
      id: 'temples',
      label: 'Temples',
      icon: MapPin,
      dropdown: true
    },
    {
      id: 'news',
      label: 'News & Events',
      icon: Newspaper,
      path: '/events'
    },
    {
      id: 'info',
      label: 'General Information',
      icon: Info,
      path: '/information'
    },
    {
      id: 'services',
      label: 'Online Services',
      icon: Globe,
      path: '/services'
    }
  ];

  return (
    <div className="min-h-screen bg-orange-50">
      {/* Navbar - Sticky */}
      <nav className="bg-white border-b border-orange-200 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Left Section - Logo Only */}
            <div className="flex items-center">
              <img 
                src={logo} 
                alt="यात्राSarthi Logo" 
                className="w-50 h-14 object-contain" 
              />
            </div>

            {/* Center Section - Navigation Items */}
            <div className="flex items-center gap-6">
              {topbarItems.map((item) => {
                const Icon = item.icon;
                if (item.dropdown) {
                  return (
                    <div key={item.id} className="relative">
                      <button
                        onClick={() => setShowTempleDropdown(!showTempleDropdown)}
                        className="flex items-center gap-1 px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded transition"
                      >
                        <Icon className="w-4 h-4" />
                        <span className="font-medium">{item.label}</span>
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      
                      {/* Temple Dropdown */}
                      {showTempleDropdown && (
                        <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-orange-200 shadow-lg rounded">
                          {temples.map((temple) => (
                            <button
                              key={temple}
                              onClick={() => {
                                setSelectedTemple(temple);
                                setShowTempleDropdown(false);
                              }}
                              className={`w-full text-left px-4 py-2 hover:bg-orange-50 transition ${
                                selectedTemple === temple ? 'bg-orange-50 text-orange-600 font-medium' : 'text-gray-700'
                              }`}
                            >
                              {temple}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <button
                    key={item.id}
                    onClick={() => navigate(item.path)}
                    className="flex items-center gap-1 px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded transition"
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Right Section - User & Notifications */}
            <div className="flex items-center gap-4">
              <button className="relative p-2 hover:bg-orange-50 rounded transition">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center gap-2 bg-orange-100 px-4 py-2 rounded">
                <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center text-white font-semibold text-sm">
                  D
                </div>
                <span className="text-sm font-semibold text-gray-700">Devotee</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Emergency Services Sidebar - Full height */}
      <div className="fixed right-0 top-0 bottom-0 w-80 z-40 mt-16">
        <div className="bg-white h-full shadow-lg border-l border-orange-200 p-6">
          <div className="flex items-center gap-2 mb-6">
            <AlertTriangle className="w-6 h-6 text-orange-600" />
            <h3 className="text-xl font-bold text-gray-800">Emergency Services</h3>
          </div>
          
          <div className="space-y-4">
            {emergencyServices.map((service) => (
              <div key={service.id} className="bg-orange-50 rounded p-4 border border-orange-200">
                <div className="mb-3">
                  <h4 className="font-semibold text-gray-800 text-lg mb-1">{service.label}</h4>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
                <button 
                  onClick={() => navigate('/devotee/emergency')}
                  className="w-full bg-orange-500 text-white py-2 px-4 rounded font-semibold hover:bg-orange-600 transition-colors"
                >
                  {service.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6 mt-6 pr-80">

        {/* Selected Temple Display */}
        <div className="bg-white rounded shadow-sm p-6 mb-8 border border-orange-200">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                Welcome to {selectedTemple} Temple
              </h2>
              <p className="text-gray-600 mt-1">May your spiritual journey be blessed</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold text-orange-600">Om Namah Shivaya</p>
              <p className="text-gray-600">{currentTime.toLocaleDateString('en-IN')}</p>
            </div>
          </div>
        </div>

        {/* Quick Actions Grid */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Trip Planner - Highlighted Wide Block */}
            <button
              onClick={() => navigate('/devotee/trip')}
              className="group relative bg-orange-100 rounded p-6 shadow-sm hover:shadow-md transition-all border-2 border-orange-300 hover:border-orange-400 md:col-span-2 transform hover:scale-[1.02] transition-transform"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="bg-orange-200 p-4 rounded">
                  <Map className="w-8 h-8 text-orange-700" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-orange-800 mb-1">Trip Planner</h4>
                  <p className="text-sm text-orange-700">Plan your complete pilgrimage route</p>
                </div>
              </div>
            </button>

            {/* Other Quick Links (except Trip) */}
            {quickLinks
              .filter(link => link.id !== 'trip')
              .map((link) => {
                const Icon = link.icon;
                return (
                  <button
                    key={link.id}
                    onClick={() => navigate(link.path)}
                    className="group relative bg-white rounded p-6 shadow-sm hover:shadow-md transition-all border border-orange-200 hover:border-orange-300"
                  >
                    {link.badge && (
                      <div className={`absolute top-4 right-4 px-3 py-1 ${
                        link.badge === 'Popular' ? 'bg-orange-500' : 'bg-green-500'
                      } text-white text-xs font-bold rounded`}>
                        {link.badge}
                      </div>
                    )}
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className="bg-orange-100 p-4 rounded">
                        <Icon className="w-8 h-8 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-800 mb-1">{link.label}</h4>
                        <p className="text-sm text-gray-600">{link.description}</p>
                      </div>
                    </div>
                  </button>
                );
              })}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white rounded shadow-sm p-6 border border-orange-200">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="w-5 h-5 text-orange-600" />
            <h3 className="text-lg font-semibold text-gray-700">Upcoming Sacred Events</h3>
          </div>
          <div className="space-y-3">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-orange-50 rounded border border-orange-200">
                <div>
                  <h4 className="font-semibold text-gray-800">{event.name}</h4>
                  <p className="text-sm text-gray-600">{event.temple}</p>
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
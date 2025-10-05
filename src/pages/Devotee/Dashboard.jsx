import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Ticket, Map, Hotel, Users, 
  AlertTriangle, Bell, Calendar, MapPin, 
  ChevronDown, Newspaper, Info, Globe, Car,
  MessageCircle 
} from 'lucide-react';
import logo from '../../assets/logo.png';
import { translations } from '../../utils/translations';

const DevoteeDashboard = () => {
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedTemple, setSelectedTemple] = useState('somnath');
  const [showTempleDropdown, setShowTempleDropdown] = useState(false);
  const [language, setLanguage] = useState('en');
  const [showChatbot, setShowChatbot] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Temple keys that correspond to translation keys
  const templeKeys = ['somnath', 'dwarka', 'ambaji', 'pavagadh'];

  // Chatbot handler
  const handleChatbotClick = () => {
    setShowChatbot(!showChatbot);
  };

  // Topbar items
  const topbarItems = [
    { 
      id: 'temples', 
      label: translations[language].temples, 
      icon: MapPin, 
      dropdown: true 
    },
    { 
      id: 'news', 
      label: translations[language].newsEvents, 
      icon: Newspaper, 
      path: '/events' 
    },
    { 
      id: 'info', 
      label: translations[language].generalInfo, 
      icon: Info, 
      path: '/information' 
    },
    { 
      id: 'services', 
      label: translations[language].onlineServices, 
      icon: Globe, 
      path: '/services' 
    }
  ];

  // Quick links
  const quickLinks = [
    { 
      id: 'tickets', 
      label: translations[language].bookTicket, 
      icon: Ticket, 
      description: translations[language].bookTicketDesc,
      badge: 'Popular',
      path: '/devotee/tickets'
    },
    { 
      id: 'trip', 
      label: translations[language].tripPlanner, 
      icon: Map, 
      description: translations[language].tripPlannerDesc,
      badge: null,
      path: '/devotee/trip'
    },
    { 
      id: 'hotels', 
      label: translations[language].hotelBooking, 
      icon: Hotel, 
      description: translations[language].hotelBookingDesc,
      badge: null,
      path: '/devotee/hotels'
    },
    { 
      id: 'crowd', 
      label: translations[language].liveCrowd, 
      icon: Users, 
      description: translations[language].liveCrowdDesc,
      badge: 'Live',
      path: '/devotee/crowd'
    },
    {
      id: 'traffic',
      label: translations[language].trafficParking,
      icon: Car,
      description: translations[language].trafficParkingDesc,
      badge: null,
      path: '/devotee/traffic'
    }
  ];

  // Emergency services
  const emergencyServices = [
    { 
      id: 'rescue', 
      label: translations[language].rescueHelpline, 
      description: translations[language].rescueDesc,
      action: translations[language].callRescue
    },
    { 
      id: 'police', 
      label: translations[language].policeAssistance, 
      description: translations[language].policeDesc,
      action: translations[language].requestPolice
    },
    { 
      id: 'medical', 
      label: translations[language].medicalSupport, 
      description: translations[language].medicalDesc,
      action: translations[language].getMedicalHelp
    }
  ];

  // Upcoming events
  const upcomingEvents = [
    { name: 'Maha Shivaratri', date: 'Feb 26, 2025', temple: 'somnath' },
    { name: 'Janmashtami', date: 'Aug 16, 2025', temple: 'dwarka' },
    { name: 'Navratri', date: 'Oct 2-11, 2025', temple: 'ambaji' }
  ];

  return (
    <div className="min-h-screen bg-orange-50">
      {/* Navbar */}
      <nav className="bg-white border-b border-orange-200 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="w-50 h-14 object-contain" />
          </div>

          {/* Topbar navigation */}
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
                    {showTempleDropdown && (
                      <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-orange-200 shadow-lg rounded">
                        {templeKeys.map((templeKey) => (
                          <button
                            key={templeKey}
                            onClick={() => {
                              setSelectedTemple(templeKey);
                              setShowTempleDropdown(false);
                            }}
                            className={`w-full text-left px-4 py-2 hover:bg-orange-50 transition ${
                              selectedTemple === templeKey ? 'bg-orange-50 text-orange-600 font-medium' : 'text-gray-700'
                            }`}
                          >
                            {translations[language][templeKey]}
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

          {/* Right section: Language selector & user */}
          <div className="flex items-center gap-4">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="border border-gray-300 rounded p-1"
            >
              <option value="en">English</option>
              <option value="hi">हिंदी</option>
            </select>

            <button className="relative p-2 hover:bg-orange-50 rounded transition">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            <div className="flex items-center gap-2 bg-orange-100 px-4 py-2 rounded">
              <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center text-white font-semibold text-sm">
                D
              </div>
              <span className="text-sm font-semibold text-gray-700">{translations[language].devotee}</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Floating Chatbot Button - Bottom Right */}
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          onClick={handleChatbotClick}
          className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="font-semibold">{translations[language].chatbotButton}</span>
        </button>
      </div>

      {/* Chatbot Modal */}
      {showChatbot && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white border border-orange-300 rounded-lg shadow-2xl z-50">
          <div className="bg-orange-500 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">{translations[language].chatbotTitle}</h3>
            <button 
              onClick={() => setShowChatbot(false)}
              className="text-white hover:text-orange-200 transition-colors"
            >
              ✕
            </button>
          </div>
          <div className="h-64 p-4 overflow-y-auto bg-orange-50">
            <div className="bg-orange-100 rounded-lg p-3 mb-3 border border-orange-200">
              <p className="text-sm text-gray-700">{translations[language].chatbotWelcome}</p>
            </div>
            {/* Add your chatbot messages here */}
          </div>
          <div className="border-t border-orange-200 p-4 bg-white">
            <div className="flex gap-2">
              <input 
                type="text" 
                placeholder={translations[language].chatbotPlaceholder}
                className="flex-1 border border-orange-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors font-semibold">
                {translations[language].chatbotSend}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Emergency Sidebar */}
      <div className="fixed right-0 top-24 bottom-0 w-80 z-40">
        <div className="bg-white h-full shadow-lg border-l border-orange-200 p-6">
          <div className="flex items-center gap-2 mb-6">
            <AlertTriangle className="w-6 h-6 text-orange-600" />
            <h3 className="text-xl font-bold text-gray-800">{translations[language].emergencyServices}</h3>
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
        {/* Selected Temple */}
        <div className="bg-white rounded shadow-sm p-6 mb-8 border border-orange-200">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                {language === 'hi' 
                  ? `${translations[language][selectedTemple]} ${translations[language].temple} ${translations[language].welcome}`
                  : `${translations[language].welcome} ${translations[language][selectedTemple]} ${translations[language].temple}`
                }
              </h2>
              <p className="text-gray-600 mt-1">{translations[language].spiritualMessage}</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold text-orange-600">{translations[language].om}</p>
              <p className="text-gray-600">{currentTime.toLocaleDateString('en-IN')}</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">{translations[language].quickActions}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Trip Planner Highlight */}
            <button
              onClick={() => navigate('/devotee/trip')}
              className="group relative bg-orange-100 rounded p-6 shadow-sm hover:shadow-md transition-all border-2 border-orange-300 hover:border-orange-400 md:col-span-2 transform hover:scale-[1.02] transition-transform"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="bg-orange-200 p-4 rounded">
                  <Map className="w-8 h-8 text-orange-700" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-orange-800 mb-1">{translations[language].tripPlanner}</h4>
                  <p className="text-sm text-orange-700">{translations[language].tripPlannerDesc}</p>
                </div>
              </div>
            </button>

            {/* Other Quick Links */}
            {quickLinks.filter(link => link.id !== 'trip').map((link) => {
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
            <h3 className="text-lg font-semibold text-gray-700">{translations[language].upcomingEvents}</h3>
          </div>
          <div className="space-y-3">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-orange-50 rounded border border-orange-200">
                <div>
                  <h4 className="font-semibold text-gray-800">{event.name}</h4>
                  <p className="text-sm text-gray-600">{translations[language][event.temple]}</p>
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
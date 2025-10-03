import React from 'react'
import { Bell, MapPin, ChevronDown } from 'lucide-react'
import logo from '../../assets/logo.png'

const Topbar = ({ toggleSidebar }) => {
  const [showTempleDropdown, setShowTempleDropdown] = React.useState(false)
  const [selectedTemple, setSelectedTemple] = React.useState('Somnath')

  const temples = ['Somnath', 'Dwarka', 'Ambaji', 'Pavagadh']

  return (
    <nav className="bg-white border-b border-orange-200 shadow-sm sticky top-0 z-50">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left Section - Logo and Menu */}
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleSidebar}
              className="text-gray-600 text-xl p-2 hover:bg-orange-50 rounded transition-colors"
            >
              ☰
            </button>
            <img 
              src={logo} 
              alt="यात्राSarthi Logo" 
              className="h-10 w-auto"
            />
            <h2 className="text-lg font-semibold text-gray-800">Admin Dashboard</h2>
          </div>

          {/* Center Section - Temple Selection */}
          <div className="flex items-center gap-6">
            <div className="relative">
              <button
                onClick={() => setShowTempleDropdown(!showTempleDropdown)}
                className="flex items-center gap-1 px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded transition"
              >
                <MapPin className="w-4 h-4" />
                <span className="font-medium">{selectedTemple}</span>
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
          </div>

          {/* Right Section - User & Notifications */}
          <div className="flex items-center gap-4">
            <button className="relative p-2 hover:bg-orange-50 rounded transition">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="flex items-center gap-2 bg-orange-100 px-4 py-2 rounded">
              <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center text-white font-semibold text-sm">
                A
              </div>
              <span className="text-sm font-semibold text-gray-700">Admin</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Topbar
import React from 'react';
import { MapPin } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar = ({ role }) => {
  const { logout } = useAuth();
  
  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <MapPin className="w-8 h-8" />
            <div>
              <h1 className="text-xl font-bold">Temple Crowd Manager</h1>
              <p className="text-xs text-indigo-200">{role === 'admin' ? 'Admin Portal' : 'Devotee Portal'}</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
import React from 'react';
import { Map } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Card from '../../components/Card';

const TripPlanner = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navbar role="devotee" />
      <div className="max-w-4xl mx-auto p-6 mt-8">
        <Card>
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
            <Map className="w-6 h-6 mr-2 text-indigo-600" />
            Trip Planner & Navigation
          </h2>
          
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">From</label>
              <input
                type="text"
                placeholder="Your Location"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">To</label>
              <select className="w-full px-4 py-2 border border-slate-300 rounded-lg">
                <option>Somnath Temple</option>
                <option>Dwarka Temple</option>
                <option>Ambaji Temple</option>
                <option>Pavagadh Temple</option>
              </select>
            </div>
          </div>
          
          <div className="bg-slate-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <Map className="w-16 h-16 text-slate-400 mx-auto mb-4" />
              <p className="text-slate-600">Interactive Map View</p>
              <p className="text-sm text-slate-500">Route: Your Location → Somnath Temple</p>
              <p className="text-sm text-slate-500 mt-2">Distance: ~245 km | Duration: 4h 30m</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default TripPlanner;
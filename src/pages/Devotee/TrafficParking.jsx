import React, { useState } from 'react';
import { Car, ParkingCircle } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Card from '../../components/Card';
import trafficImage from '../../assets/traffic-map.png';

const TrafficParking = () => {
  const [activeTab, setActiveTab] = useState('traffic');

  // Mock data for parking slots
  const parkingData = [
    {
      temple: "Somnath Temple",
      twoWheeler: { total: 200, available: 45 },
      fourWheeler: { total: 150, available: 12 },
      heavyVehicle: { total: 50, available: 8 }
    },
    {
      temple: "Dwarka Temple",
      twoWheeler: { total: 150, available: 78 },
      fourWheeler: { total: 100, available: 23 },
      heavyVehicle: { total: 30, available: 5 }
    },
    {
      temple: "Ambaji Temple",
      twoWheeler: { total: 100, available: 15 },
      fourWheeler: { total: 80, available: 3 },
      heavyVehicle: { total: 20, available: 0 }
    },
    {
      temple: "Pavagadh Temple",
      twoWheeler: { total: 120, available: 34 },
      fourWheeler: { total: 90, available: 18 },
      heavyVehicle: { total: 25, available: 2 }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navbar role="devotee" />
      <div className="max-w-6xl mx-auto p-6 mt-8">
        
        {/* Page Header */}
        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
          <Car className="w-6 h-6 mr-2 text-indigo-600" />
          Traffic & Parking Information
        </h2>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-300 mb-6">
          <button
            onClick={() => setActiveTab('traffic')}
            className={`px-6 py-3 font-medium ${
              activeTab === 'traffic'
                ? 'border-b-2 border-indigo-600 text-indigo-600'
                : 'text-slate-600 hover:text-slate-800'
            }`}
          >
            Real-Time Traffic
          </button>
          <button
            onClick={() => setActiveTab('parking')}
            className={`px-6 py-3 font-medium ${
              activeTab === 'parking'
                ? 'border-b-2 border-indigo-600 text-indigo-600'
                : 'text-slate-600 hover:text-slate-800'
            }`}
          >
            Parking Availability
          </button>
        </div>

        {/* Traffic Section */}
        {activeTab === 'traffic' && (
          <div className="space-y-6">
            <Card>
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                Real-Time Traffic Status
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-green-100 border border-green-300 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800">Somnath Route</h4>
                  <p className="text-green-600">Clear Traffic</p>
                  <p className="text-sm text-slate-600">Travel Time: 15–20 mins</p>
                </div>
                <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-800">Dwarka Route</h4>
                  <p className="text-yellow-600">Moderate Traffic</p>
                  <p className="text-sm text-slate-600">Travel Time: 25–30 mins</p>
                </div>
                <div className="bg-red-100 border border-red-300 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800">Ambaji Route</h4>
                  <p className="text-red-600">Heavy Traffic</p>
                  <p className="text-sm text-slate-600">Travel Time: 45–60 mins</p>
                </div>
                <div className="bg-red-100 border border-red-300 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800">Pavagadh Route</h4>
                  <p className="text-red-600">Heavy Traffic</p>
                  <p className="text-sm text-slate-600">Travel Time: 45–60 mins</p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="bg-slate-200 rounded-lg h-96 flex items-center justify-center relative overflow-hidden">
                <img
                  src={trafficImage}
                  alt="Traffic Visualization"
                  className="object-cover w-full h-full opacity-90"
                />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-80 px-4 py-1 rounded-lg text-sm text-slate-700 shadow">
                  🟢 Clear | 🟡 Moderate | 🔴 Heavy
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Parking Section */}
        {activeTab === 'parking' && (
          <div className="space-y-6">
            <Card>
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                <ParkingCircle className="w-5 h-5 text-indigo-600 mr-2" />
                Parking Slot Availability
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {parkingData.map((temple, index) => (
                  <div
                    key={index}
                    className="border border-slate-200 rounded-lg p-4 bg-white shadow-sm"
                  >
                    <h4 className="text-lg font-semibold mb-3 text-slate-800 border-b pb-2">
                      {temple.temple}
                    </h4>

                    {/* Parking Details */}
                    <div className="space-y-3">
                      {/* Two Wheeler */}
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-slate-700">
                          Two Wheeler
                        </span>
                        <div className="flex items-center">
                          <div
                            className={`h-3 w-3 rounded-full mr-2 ${
                              temple.twoWheeler.available > 0
                                ? 'bg-green-500'
                                : 'bg-red-500'
                            }`}
                          ></div>
                          <span className="text-sm text-slate-600">
                            {temple.twoWheeler.available}/{temple.twoWheeler.total} Slots
                          </span>
                        </div>
                      </div>

                      {/* Four Wheeler */}
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-slate-700">
                          Four Wheeler
                        </span>
                        <div className="flex items-center">
                          <div
                            className={`h-3 w-3 rounded-full mr-2 ${
                              temple.fourWheeler.available > 0
                                ? 'bg-green-500'
                                : 'bg-red-500'
                            }`}
                          ></div>
                          <span className="text-sm text-slate-600">
                            {temple.fourWheeler.available}/{temple.fourWheeler.total} Slots
                          </span>
                        </div>
                      </div>

                      {/* Heavy Vehicle */}
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-slate-700">
                          Heavy Vehicle
                        </span>
                        <div className="flex items-center">
                          <div
                            className={`h-3 w-3 rounded-full mr-2 ${
                              temple.heavyVehicle.available > 0
                                ? 'bg-green-500'
                                : 'bg-red-500'
                            }`}
                          ></div>
                          <span className="text-sm text-slate-600">
                            {temple.heavyVehicle.available}/{temple.heavyVehicle.total} Slots
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrafficParking;

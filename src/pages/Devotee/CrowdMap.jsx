import React from 'react';
import { Users, MapPin } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Card from '../../components/Card';
import { dummyData } from '../../data/dummyData';
import crowdMapImage from '../../assets/traffic-map.png';

const CrowdMap = () => {
  const getColor = (level) => {
    if (level === 'high') return 'bg-red-500';
    if (level === 'medium') return 'bg-yellow-500';
    return 'bg-green-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navbar role="devotee" />
      <div className="max-w-6xl mx-auto p-6 mt-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
          <Users className="w-6 h-6 mr-2 text-indigo-600" />
          Live Crowd Heatmap
        </h2>

        {/* Crowd Level Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {dummyData.crowdData.map((crowd) => (
            <Card key={crowd.temple}>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-lg">{crowd.temple}</h3>
                <span className={`w-4 h-4 rounded-full ${getColor(crowd.level)}`}></span>
              </div>
              <div className="mb-2">
                <div className="flex justify-between text-sm text-slate-600 mb-1">
                  <span>Crowd Level</span>
                  <span>{crowd.percentage}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${getColor(crowd.level)}`}
                    style={{ width: `${crowd.percentage}%` }}
                  ></div>
                </div>
              </div>
              <p className="text-sm text-slate-600 capitalize">
                Status: {crowd.level} congestion
              </p>
            </Card>
          ))}
        </div>

        {/* Crowd Heatmap Image Section */}
        <Card>
          <div className="relative h-96 rounded-lg overflow-hidden">
            <img
              src={crowdMapImage}
              alt="Temple Crowd Heatmap"
              className="object-cover w-full h-full opacity-90"
            />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CrowdMap;

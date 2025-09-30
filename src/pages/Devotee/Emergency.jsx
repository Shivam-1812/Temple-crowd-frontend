import React, { useState } from 'react';
import { AlertTriangle, CheckCircle } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Card from '../../components/Card';

const Emergency = () => {
  const [requested, setRequested] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navbar role="devotee" />
      <div className="max-w-2xl mx-auto p-6 mt-8">
        <Card>
          <div className="text-center">
            <AlertTriangle className="w-20 h-20 text-red-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Emergency Assistance</h2>
            <p className="text-slate-600 mb-6">Need immediate help? Our team is ready to assist you.</p>
            
            {requested ? (
              <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-green-800 mb-2">Help Request Sent!</h3>
                <p className="text-green-700">Admin team has been notified. Help is on the way.</p>
                <p className="text-sm text-green-600 mt-2">Reference ID: E{Math.floor(Math.random() * 1000)}</p>
              </div>
            ) : (
              <button
                onClick={() => setRequested(true)}
                className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-lg hover:from-red-700 hover:to-red-800 transition font-bold text-lg"
              >
                Request Emergency Help
              </button>
            )}
            
            <div className="mt-8 grid grid-cols-2 gap-4 text-left">
              <div className="bg-slate-50 p-4 rounded-lg">
                <p className="font-medium text-slate-800">Emergency Hotline</p>
                <p className="text-indigo-600 font-bold text-xl">1800-123-4567</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg">
                <p className="font-medium text-slate-800">Medical Support</p>
                <p className="text-indigo-600 font-bold text-xl">1800-987-6543</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Emergency;
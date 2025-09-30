import React, { useState } from 'react';
import { Hotel, X } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Card from '../../components/Card';
import { dummyData } from '../../data/dummyData';

const HotelBooking = () => {
  const [selectedHotel, setSelectedHotel] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navbar role="devotee" />
      <div className="max-w-6xl mx-auto p-6 mt-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
          <Hotel className="w-6 h-6 mr-2 text-indigo-600" />
          Hotel Bookings
        </h2>
        
        {selectedHotel && (
          <div className="mb-6 bg-green-50 border-2 border-green-500 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-green-800">Booking Confirmed!</h3>
                <p className="text-green-700">{selectedHotel.name} - ₹{selectedHotel.price}/night</p>
              </div>
              <button onClick={() => setSelectedHotel(null)} className="text-green-700 hover:text-green-900">
                <X />
              </button>
            </div>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {dummyData.hotels.map((hotel) => (
            <Card key={hotel.id}>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-800">{hotel.name}</h3>
                  <p className="text-sm text-slate-600">{hotel.location}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  hotel.availability === 'Available' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {hotel.availability}
                </span>
              </div>
              
              <div className="mb-4">
                <p className="text-2xl font-bold text-indigo-600">₹{hotel.price}</p>
                <p className="text-sm text-slate-600">per night</p>
                <p className="text-sm text-slate-600 mt-2">Rating: ⭐ {hotel.rating}/5</p>
              </div>
              
              <button
                onClick={() => setSelectedHotel(hotel)}
                className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 text-white py-2 rounded-lg hover:from-indigo-700 hover:to-indigo-800 transition"
              >
                Book Now
              </button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelBooking;
export const dummyData = {
  hotels: [
    { id: 1, name: 'Somnath Heritage Hotel', price: 2500, availability: 'Available', rating: 4.5, location: 'Somnath' },
    { id: 2, name: 'Dwarka Palace Inn', price: 3200, availability: 'Available', rating: 4.8, location: 'Dwarka' },
    { id: 3, name: 'Ambaji Divine Stay', price: 1800, availability: 'Limited', rating: 4.2, location: 'Ambaji' },
    { id: 4, name: 'Pavagadh Hill Resort', price: 2800, availability: 'Available', rating: 4.6, location: 'Pavagadh' }
  ],
  crowdData: [
    { temple: 'Somnath', level: 'high', percentage: 85, lat: 20.8880, lng: 70.4013 },
    { temple: 'Dwarka', level: 'medium', percentage: 60, lat: 22.2442, lng: 68.9685 },
    { temple: 'Ambaji', level: 'low', percentage: 35, lat: 24.3320, lng: 72.8391 },
    { temple: 'Pavagadh', level: 'medium', percentage: 55, lat: 22.4860, lng: 73.5316 }
  ],
  crowdTrend: [
    { time: '6 AM', count: 200 },
    { time: '9 AM', count: 450 },
    { time: '12 PM', count: 680 },
    { time: '3 PM', count: 820 },
    { time: '6 PM', count: 950 },
    { time: '9 PM', count: 600 }
  ],
  templeCrowd: [
    { temple: 'Somnath', visitors: 850 },
    { temple: 'Dwarka', visitors: 600 },
    { temple: 'Ambaji', visitors: 350 },
    { temple: 'Pavagadh', visitors: 550 }
  ],
  tickets: [
    { id: 'T001', name: 'Rahul Sharma', date: '2025-10-05', temple: 'Somnath', status: 'Confirmed' },
    { id: 'T002', name: 'Priya Patel', date: '2025-10-06', temple: 'Dwarka', status: 'Confirmed' },
    { id: 'T003', name: 'Amit Kumar', date: '2025-10-05', temple: 'Ambaji', status: 'Pending' },
    { id: 'T004', name: 'Sneha Joshi', date: '2025-10-07', temple: 'Pavagadh', status: 'Confirmed' }
  ],
  emergencies: [
    { id: 'E001', user: 'Rajesh Mehta', location: 'Somnath Temple Gate 2', time: '10:30 AM', status: 'Active' },
    { id: 'E002', user: 'Kavita Singh', location: 'Dwarka Parking Area', time: '11:15 AM', status: 'Active' },
    { id: 'E003', user: 'Anil Desai', location: 'Ambaji Main Hall', time: '09:45 AM', status: 'Resolved' }
  ],
  parkingSlots: [
    { location: 'Somnath P1', total: 200, occupied: 170, available: 30 },
    { location: 'Somnath P2', total: 150, occupied: 145, available: 5 },
    { location: 'Dwarka P1', total: 180, occupied: 120, available: 60 },
    { location: 'Ambaji P1', total: 100, occupied: 40, available: 60 }
  ]
};
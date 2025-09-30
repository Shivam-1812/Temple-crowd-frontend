import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';

// Pages
import Login from './pages/Login';
import DevoteeDashboard from './pages/Devotee/Dashboard';
import TicketBooking from './pages/Devotee/TicketBooking';
import TripPlanner from './pages/Devotee/TripPlanner';
import HotelBooking from './pages/Devotee/HotelBooking';
import CrowdMap from './pages/Devotee/CrowdMap';
import Emergency from './pages/Devotee/Emergency';
import AdminDashboard from './pages/Admin/Dashboard';
import CrowdAnalytics from './pages/Admin/CrowdAnalytics';
import TicketManagement from './pages/Admin/TicketManagement';
import ParkingTraffic from './pages/Admin/ParkingTraffic';
import EmergencyAlerts from './pages/Admin/EmergencyAlerts';

// Protected Route Component
const ProtectedRoute = ({ children, requiredRole }) => {
  const { user } = useAuth();
  
  if (!user) {
    return <Navigate to="/" replace />;
  }
  
  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/" replace />;
  }
  
  return children;
};

function AppRoutes() {
  const { user } = useAuth();

  return (
    <Routes>
      <Route 
        path="/" 
        element={user ? <Navigate to={user.role === 'admin' ? '/admin/dashboard' : '/devotee/dashboard'} replace /> : <Login />} 
      />
      
      {/* Devotee Routes */}
      <Route 
        path="/devotee/dashboard" 
        element={
          <ProtectedRoute requiredRole="devotee">
            <DevoteeDashboard />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/devotee/tickets" 
        element={
          <ProtectedRoute requiredRole="devotee">
            <TicketBooking />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/devotee/trip" 
        element={
          <ProtectedRoute requiredRole="devotee">
            <TripPlanner />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/devotee/hotels" 
        element={
          <ProtectedRoute requiredRole="devotee">
            <HotelBooking />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/devotee/crowd" 
        element={
          <ProtectedRoute requiredRole="devotee">
            <CrowdMap />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/devotee/emergency" 
        element={
          <ProtectedRoute requiredRole="devotee">
            <Emergency />
          </ProtectedRoute>
        } 
      />
      
      {/* Admin Routes */}
      <Route 
        path="/admin/dashboard" 
        element={
          <ProtectedRoute requiredRole="admin">
            <AdminDashboard />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/admin/crowd" 
        element={
          <ProtectedRoute requiredRole="admin">
            <CrowdAnalytics />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/admin/tickets" 
        element={
          <ProtectedRoute requiredRole="admin">
            <TicketManagement />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/admin/traffic" 
        element={
          <ProtectedRoute requiredRole="admin">
            <ParkingTraffic />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/admin/emergency" 
        element={
          <ProtectedRoute requiredRole="admin">
            <EmergencyAlerts />
          </ProtectedRoute>
        } 
      />
      
      {/* Catch all route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function App() {
  console.log("App component rendered");

  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;
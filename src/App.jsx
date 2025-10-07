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
import TrafficParking from './pages/Devotee/TrafficParking';

// Admin Pages - Updated imports
import AdminDashboard from './pages/Admin/AdminDashboard';
import CrowdAnalytics from './pages/Admin/CrowdAnalytics';
import VIPBooking from './pages/Admin/VIPBooking';
import ResourceAllocation from './pages/Admin/ResourceAllocation';
import IncomingRequests from './pages/Admin/IncomingRequests';
import EmployeeManagement from './pages/Admin/EmployeeManagement';
import TrafficAlerts from './pages/Admin/TrafficAlerts';

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
      <Route
        path="/devotee/traffic"
        element={
          <ProtectedRoute requiredRole="devotee">
            <TrafficParking />
          </ProtectedRoute>
        }
      />

      {/* Admin Routes - Updated to match new component structure */}
      <Route 
        path="/admin/dashboard" 
        element={
          <ProtectedRoute requiredRole="admin">
            <AdminDashboard />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/admin/crowd-analytics" 
        element={
          <ProtectedRoute requiredRole="admin">
            <CrowdAnalytics />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/admin/vip-booking" 
        element={
          <ProtectedRoute requiredRole="admin">
            <VIPBooking />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/admin/resource-allocation" 
        element={
          <ProtectedRoute requiredRole="admin">
            <ResourceAllocation />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/admin/incoming-requests" 
        element={
          <ProtectedRoute requiredRole="admin">
            <IncomingRequests />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/admin/employee-management" 
        element={
          <ProtectedRoute requiredRole="admin">
            <EmployeeManagement />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/admin/traffic-alerts" 
        element={
          <ProtectedRoute requiredRole="admin">
            <TrafficAlerts />
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
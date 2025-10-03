import React, { useState, useRef } from 'react'
import Topbar from '../../components/Admin/Topbar'
import Sidebar from '../../components/Admin/Sidebar'
import CrowdAnalytics from './CrowdAnalytics'
import VIPBooking from './VIPBooking'
import ResourceAllocation from './ResourceAllocation'
import IncomingRequests from './IncomingRequests'
import EmployeeManagement from './EmployeeManagement'
import TrafficAlerts from './TrafficAlerts'

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  
  // Refs for section navigation
  const crowdAnalyticsRef = useRef(null)
  const vipBookingRef = useRef(null)
  const resourceAllocationRef = useRef(null)
  const incomingRequestsRef = useRef(null)
  const employeeManagementRef = useRef(null)
  const trafficAlertsRef = useRef(null)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const scrollToSection = (section) => {
    const refs = {
      'crowd-analytics': crowdAnalyticsRef,
      'vip-booking': vipBookingRef,
      'resource-allocation': resourceAllocationRef,
      'incoming-requests': incomingRequestsRef,
      'employee-management': employeeManagementRef,
      'traffic-alerts': trafficAlertsRef
    }

    if (refs[section] && refs[section].current) {
      refs[section].current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="flex flex-col h-screen bg-orange-50">
      <Topbar toggleSidebar={toggleSidebar} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar 
          sidebarOpen={sidebarOpen} 
          setActiveSection={scrollToSection}
        />
        {/* Main content area with conditional margin */}
        <div className={`flex-1 overflow-auto transition-all duration-300 ${
          sidebarOpen ? 'ml-64' : 'ml-0'
        }`}>
          <div className="p-6 space-y-6">
            {/* Crowd Analytics Section */}
            <div ref={crowdAnalyticsRef}>
              <CrowdAnalytics />
            </div>

            {/* VIP Booking Section */}
            <div ref={vipBookingRef}>
              <VIPBooking />
            </div>

            {/* Resource Allocation Section */}
            <div ref={resourceAllocationRef}>
              <ResourceAllocation />
            </div>

            {/* Incoming Requests Section */}
            <div ref={incomingRequestsRef}>
              <IncomingRequests />
            </div>

            {/* Employee Management Section */}
            <div ref={employeeManagementRef}>
              <EmployeeManagement />
            </div>

            {/* Traffic Alerts Section */}
            <div ref={trafficAlertsRef}>
              <TrafficAlerts />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
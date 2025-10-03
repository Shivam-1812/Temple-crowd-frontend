import React from 'react'
import { BarChart3, Ticket, Settings, Mail, Users, Car } from 'lucide-react'

const Sidebar = ({ sidebarOpen, setActiveSection }) => {
  const menuItems = [
    { id: 'crowd-analytics', label: 'Crowd Analytics', icon: BarChart3 },
    { id: 'vip-booking', label: 'VIP Booking', icon: Ticket },
    { id: 'resource-allocation', label: 'Resource Allocation', icon: Settings },
    { id: 'incoming-requests', label: 'Incoming Requests', icon: Mail },
    { id: 'employee-management', label: 'Employee Management', icon: Users },
    { id: 'traffic-alerts', label: 'Traffic Alerts', icon: Car },
  ]

  if (!sidebarOpen) return null

  return (
    <div className="w-64 bg-orange-100 text-orange-900 h-full fixed left-0 top-16 overflow-y-auto border-r border-orange-200">
      <nav className="p-4">
        {menuItems.map((item) => {
          const Icon = item.icon
          return (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className="w-full text-left p-4 mb-2 rounded flex items-center gap-4 transition-colors text-orange-800 hover:bg-orange-200 hover:text-orange-900"
            >
              <Icon className="w-5 h-5" />
              <span className="text-base font-medium">{item.label}</span>
            </button>
          )
        })}
      </nav>
    </div>
  )
}

export default Sidebar
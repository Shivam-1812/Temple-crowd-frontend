import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Sidebar = ({ items, active, setActive }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-20 left-4 z-50 bg-indigo-600 text-white p-2 rounded-lg shadow-lg"
      >
        {isOpen ? <X /> : <Menu />}
      </button>
      
      <aside className={`${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-40 w-64 bg-slate-800 text-white transition-transform duration-300 ease-in-out mt-16 lg:mt-0`}>
        <div className="p-6 space-y-2">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => { setActive(item.id); setIsOpen(false); }}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
                active === item.id ? 'bg-indigo-600' : 'hover:bg-slate-700'
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
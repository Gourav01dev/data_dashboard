import React from 'react';
import Link from 'next/link';

const navItems = [
  { name: 'Dashboard', icon: 'grid', href: '/' },
  { name: 'Analytics', icon: 'bar-chart', href: '/analytics' },
  { name: 'Reports', icon: 'file-text', href: '/reports' },
  { name: 'Settings', icon: 'settings', href: '/settings' },
];

const Sidebar = ({ isOpen }) => {
  return (
    <aside
      className={`${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0 fixed md:static inset-y-0 left-0 z-30 w-56 bg-gradient-to-b from-[#e0f2fe] to-[#bae6fd] shadow-xl transform transition-transform duration-300 ease-in-out`}
    >
      <div className="flex flex-col h-full">
        <div className="p-6 border-b border-[#93c5fd]">
          <h2 className="text-2xl font-bold text-[#0284c7]">Dashboard</h2>
        </div>
        
        <nav className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link 
                  href={item.href}
                  className="flex items-center p-3 text-[#0c4a6e] rounded-lg hover:bg-[#7dd3fc] hover:text-white transition-colors"
                >
                  <span className="mr-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </span>
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="p-4 border-t border-[#93c5fd]">
          <p className="text-sm text-[#0c4a6e]">© 2025 Dashboard</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
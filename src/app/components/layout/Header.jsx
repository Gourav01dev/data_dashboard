import React from 'react';

const Header = ({ toggleSidebar }) => {
  return (
    <header className="bg-gradient-to-r from-[#e0f2fe] to-[#bae6fd] shadow-md border-b border-[#93c5fd] sticky top-0 z-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-md text-[#0c4a6e] hover:text-[#0284c7] focus:outline-none md:hidden"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </button>
          </div>
          
          <div className="flex items-center">
            <div className="flex items-center space-x-4">
              <button className="p-1 rounded-full text-[#0c4a6e] hover:text-[#0284c7] focus:outline-none">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              
              <div className="relative">
                <button className="flex items-center space-x-2 focus:outline-none">
                  <div className="w-8 h-8 bg-[#0284c7] rounded-full flex items-center justify-center text-white font-medium">
                    U
                  </div>
                  <span className="hidden md:block font-medium text-[#0c4a6e]">User</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
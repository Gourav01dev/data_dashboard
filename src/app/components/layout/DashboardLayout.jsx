"use client"
import React, { useState, useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Loader from '../ui/Loader';

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (   

    loading ? <Loader/> :
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-200 text-slate-800">
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex">
        <Sidebar isOpen={sidebarOpen} />      
        <main className="flex-1 px-4 py-6 md:px-8 md:py-10 overflow-x-hidden transition-all duration-300 ease-in-out">
          <div className="container mx-auto">
            {children}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
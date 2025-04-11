import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-slate-500 mb-2 md:mb-0">
              &copy; {new Date().getFullYear()} Dashboard Project
            </p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
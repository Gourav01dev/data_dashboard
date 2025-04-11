import React from 'react';

const Card = ({ children, className = '', title, description }) => {
  return (
    <div className={`bg-white p-4 rounded-lg shadow-card ${className}`}>
      {title && <h3 className="text-lg font-medium text-gray-900 mb-1">{title}</h3>}
      {description && <p className="text-sm text-gray-500 mb-4">{description}</p>}
      {children}
    </div>
  );
};

export default Card;
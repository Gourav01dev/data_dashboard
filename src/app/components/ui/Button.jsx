import React from 'react';

const variants = {
  primary: 'bg-primary-600 hover:bg-primary-700 text-white',
  secondary: 'bg-secondary-100 hover:bg-secondary-200 text-secondary-800',
  outline: 'bg-transparent border border-primary-600 text-primary-600 hover:bg-primary-50',
  danger: 'bg-danger hover:bg-red-700 text-white',
};

const sizes = {
  sm: 'py-1 px-2 text-sm',
  md: 'py-2 px-4',
  lg: 'py-2 px-6 text-lg',
};

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  onClick,
  type = 'button',
  ...props
}) => {
  return (
    <button
      type={type}
      className={`
        ${variants[variant]} 
        ${sizes[size]} 
        ${className}
        rounded font-medium transition-colors
        disabled:opacity-60 disabled:cursor-not-allowed
        focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50
      `}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
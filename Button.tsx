import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  to?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  to, 
  onClick, 
  className = '', 
  type = 'button',
  fullWidth = false
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 text-sm tracking-wide px-6 py-3 rounded-md";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-opacity-90 shadow-sm",
    secondary: "bg-accent text-white hover:bg-opacity-90 shadow-sm",
    outline: "border border-primary text-primary hover:bg-primary hover:text-white",
    ghost: "text-primary hover:bg-gray-100",
  };

  const widthStyle = fullWidth ? "w-full" : "";

  const classes = `${baseStyles} ${variants[variant]} ${widthStyle} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;